var blockargumenttypemapping = {
  "boolean": "field_checkbox",
  "color": "field_colour",
  "input": "input_value",
  "text": "field_input",
  "multilinetext": "field_multilinetext",
  "select": "field_dropdown",
  "statements": "input_statement"
}

var commentstartmapping = {
  "javascript": "//",
  "html": "<!--",
}

var commentendmapping = {
  "javascript": "",
  "html": "-->",
}

var toolboxidentifier
var toolboxdefinition
var toolbox
var blockgenerator
var code
var previewiframe
var workspace
var filepath

async function parseblockdefinitionforblockly(blockname, blockdefinition) {
  var blockjson = {
    type: blockname,
    message0: blockdefinition.message,
    args0: [],
    colour: blockdefinition.color,
    inputsInline: false,
  }  
  for (var [index, argument] of blockdefinition.arguments.entries()) {
    var argumentname = "arg" + (index + 1)
    var argumenttype = argument.type
    var blocklyargument = {
      name: argumentname,
      type: blockargumenttypemapping[argumenttype],
    }
    if (argumenttype === "select") {
      var options = []
      for (var element of argument.elements) {
        var option = [ element.label, element.value ]
        options.push(option)
      }
      blocklyargument.options = options
    }
    blockjson.args0.push(blocklyargument)
  }
  if (blockdefinition.type === "step") {
    blockjson.nextStatement = null,
    blockjson.previousStatement = null
  }
  if (blockdefinition.type === "output") {
    blockjson.output = null
  }
  return blockjson
}

async function extractgeneratorfromblockdefinition(blockdefinition) {
  var template = blockdefinition.template
  var generatorfunction = function(block) {
    var resultset = []
    for (var element of template) {
      var elementtype = typeof(element)
      if (elementtype === "string") {
        resultset.push(element)
      }
      if (elementtype === "number") {
        var argumentname = "arg" + element
        if (blockdefinition.arguments[element - 1].type === "statements") {
          var statementcode = blockgenerator.statementToCode(block, argumentname)
          resultset.push(statementcode)
        } else if (blockdefinition.arguments[element - 1].type === "input") {
          var inputcode = blockgenerator.valueToCode(block, argumentname, 0)
          resultset.push(inputcode)
        } else {
          var value = block.getFieldValue(argumentname)
          resultset.push(value)
        }
      }
      if (elementtype === "function") {
        var value = element(block)
        resultset.push(value)
      }
    }
    var generatedcontent = resultset.join("")
    if (blockdefinition.type === "output") {
      generatedcontent = [ generatedcontent, 0 ] // https://neil.fraser.name/blockly/custom-blocks/operator-precedence#:~:text=Just%20use%20ORDER_ATOMIC%20as%20the%20order%20on%20every,needless%20parentheses%2C%20but%20is%20guaranteed%20to%20be%20correct.
    }
    return generatedcontent
  }
  return generatorfunction
}

async function parseblockdefinitionfortoolbox(blockname, blockdefinition) {
  var toolboxblock = {
    kind: "block",
    type: blockname
  }
  return toolboxblock
}

async function parseelementdefinition(elementdefinition) {
  var type = elementdefinition.type
  if (type === "block") {
    var library = elementdefinition.library
    var blockname = elementdefinition.name
    var blockmodule = await import(library)
    var blockdefinition = blockmodule[blockname]
    var blocklyblock = await parseblockdefinitionforblockly(blockname, blockdefinition)
    Blockly.defineBlocksWithJsonArray([ blocklyblock ])
    var generator = await extractgeneratorfromblockdefinition(blockdefinition)
    blockgenerator.forBlock[blockname] = generator
    var toolboxblock = await parseblockdefinitionfortoolbox(blockname, blockdefinition)
    return toolboxblock
  }
  if (type === "separator") {
    var toolboxblock = {
      kind: "label",
      text: elementdefinition.text
    }
    return toolboxblock
  }
  if (type === "category") {
    var toolboxblock = {
      kind: "category",
      name: elementdefinition.name,
      colour: elementdefinition.color, 
      contents: []
    }
    for (var subelementdefinition of elementdefinition.elements) {
      var subelementtoolboxblock = await parseelementdefinition(subelementdefinition )
      toolboxblock.contents.push(subelementtoolboxblock)
    }
    return toolboxblock
  }
}

async function loadtoolbox(toolboxidentifier) {
  var filepath = "./toolboxes/" + toolboxidentifier + ".js"
  var toolboxmodule = await import(filepath)
  toolboxdefinition = toolboxmodule.toolbox
  toolbox = {
    kind: toolboxdefinition.type,
    contents: []
  }
  for (var elementdefinition of toolboxdefinition.elements) {
    var toolboxelement = await parseelementdefinition(elementdefinition)
    toolbox.contents.push(toolboxelement)
  }
}

async function parsefile(filecontent) {
  var lastline = filecontent.split("\n").at(-1)
  if (lastline && lastline.indexOf("BLOCKDEF") >= 0) {
    var blockdeftext = lastline.substring(lastline.indexOf("{"), lastline.lastIndexOf("}") + 1)
    var blockdefjson = JSON.parse(blockdeftext)
    return blockdefjson
  }
}

function handleworkspacechanged(event) {
  if (event.type == Blockly.Events.BLOCK_CHANGE || event.type == Blockly.Events.BLOCK_CREATE || event.type == Blockly.Events.BLOCK_DELETE || event.type == Blockly.Events.BLOCK_MOVE) {
    code = blockgenerator.workspaceToCode(workspace)
    var blob = new Blob([code], { type: "text/html" })
    var url = URL.createObjectURL(blob)
    previewiframe.src = url
  }
}

async function savebuttonclick() {
  var state = Blockly.serialization.workspaces.save(workspace)
  state.toolbox = toolboxidentifier
  var commentstart = commentstartmapping[toolboxdefinition.commenttype]
  var commentend = commentendmapping[toolboxdefinition.commenttype]
  var filecontent = code + "\n" + commentstart + "BLOCKDEF" + JSON.stringify(state) + commentend
  var formdata = new FormData()
  formdata.append("data", new Blob([filecontent]));
  await fetch("/api/filesystem/" + filepath, { method: 'POST', body: formdata, cache: 'no-cache' })
  alert("Die Datei wurde gespeichert")
}

async function previewbuttonclick() {
  document.getElementById("preview").classList.toggle("visible")
}

function blockgeneratorscrub(block, code) {
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock()
  var nextCode = blockgenerator.blockToCode(nextBlock)
  return code + nextCode
}

async function deletefilebuttonclick() {
  const shouldbedeleted = confirm("Soll die Datei " + filepath + " gelöscht werden?")
  if (shouldbedeleted) {
    await fetch("/api/filesystem/" + filepath, { method: 'DELETE' })
    parent.document.getElementById("filelist").contentWindow.location.reload()
    location.href = "about:blank"
  }
}

(async () => {

filepath = location.search?.substring(1)
var filecontent = await fetch("/api/filesystem/" + filepath).then((response) => response.text())
  var blocklycontent = await parsefile(filecontent)
  
  var fileparts = filepath.split(".")
  var isblocklyfile = fileparts.length > 3 && fileparts[fileparts.length - 3] === "blockly"
  if (isblocklyfile) {
    toolboxidentifier = fileparts[fileparts.length - 2]
  } else if (blocklycontent && blocklycontent.toolbox) {
    toolboxidentifier = blocklycontent.toolbox
  } else {
    toolboxidentifier = prompt("Which toolbox should be used?")
  }
   
  blockgenerator = new Blockly.Generator(toolboxidentifier)
  blockgenerator.scrub_ = blockgeneratorscrub
  
  var editordiv = document.getElementById("editor")
  previewiframe = document.getElementById("preview")
  
  await loadtoolbox(toolboxidentifier, blockgenerator)
  var workspaceoptions = {
    grid: { spacing: 10, length: 1, colour: "#cccccc", snap: true, },
    scrollbars: true,
    toolbox: toolbox,
    trashcan: true,
    zoom: { controls: true },
  }
  workspace = Blockly.inject(editordiv, workspaceoptions)
  if (blocklycontent) {
    Blockly.serialization.workspaces.load(blocklycontent, workspace)
  }
  
  workspace.addChangeListener(handleworkspacechanged)
  
  document.getElementById("savebutton").addEventListener("click", savebuttonclick)
  document.getElementById("deletebutton").addEventListener("click", deletefilebuttonclick)
  document.getElementById("previewbutton").addEventListener("click", previewbuttonclick)
  document.getElementById("filepath").innerText = filepath
  
})()
