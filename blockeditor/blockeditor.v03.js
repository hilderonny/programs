async function loadblock(toolboxname, blockname) {

  var blockdefinitionurl = "./blocks/" + toolboxname + "/" + blockname + ".json"
  var blockresponse = await fetch(blockdefinitionurl, { cache: "force-cache" })
  var blockjson = await blockresponse.json()
  // Load Block into Blockly
  Blockly.defineBlocksWithJsonArray([ blockjson ])
  
}

async function loadblocksforcontent(toolboxname, contentjson) {

  for (var toolboxblockdefinition of contentjson) {
    if (toolboxblockdefinition.kind === "block") {
      await loadblock(toolboxname, toolboxblockdefinition.type)
    } else if (toolboxblockdefinition.kind === "category") {
      await loadblocksforcontent(toolboxname, toolboxblockdefinition.contents)
    }
  }
  
}

async function loadblocksfortoolbox(toolboxname, toolboxjson) {

  await loadblocksforcontent(toolboxname, toolboxjson.contents)
  
}

async function loadfileparser(fileextension) {

  var parserurl = "./parsers/" + fileextension + ".js"
  var parser = await import(parserurl)
  return parser
  
}

async function loadcodegenerator(fileextension) {

  var generatorurl = "./generators/" + fileextension + ".js"
  var generator = await import(generatorurl)
  return generator
  
}

async function loadfile(filepath, fileextension) {

  // Fetch content of the file
  var apiurl = "/api/filesystem/" + filepath
  var fileresponse = await fetch(apiurl)
  var filecontent = await fileresponse.text()
  
  // Load the corresponding parser and parse the file
  var parser = await loadfileparser(fileextension)
  var parsedfilecontent = await parser.parse(filecontent)
  
  return parsedfilecontent
  
}

async function previewbuttonclick() {
  document.getElementById("preview").classList.toggle("visible")
}

async function init() {
  
  // Determine toolbox to load depending on file extension
  var filepath = location.search.substring(1)
  var filepathparts = filepath.split(".")
  var lastindex = filepathparts.length - 1
  var fileextension = filepathparts[lastindex]
  
  // Load toolbox which is defined in JSON format
  var toolboxurl = "./toolboxes/" + fileextension + ".json"
  var toolboxresponse = await fetch(toolboxurl)
  var toolboxjson = await toolboxresponse.json()
  
  // Load all blocks for the toolbox
  await loadblocksfortoolbox(fileextension, toolboxjson)
  
  // Prepare workspace
  var workspaceoptions = {
    grid: { spacing: 10, length: 1, colour: "#cccccc", snap: true, },
    scrollbars: true,
    toolbox: toolboxjson,
    trashcan: true,
    zoom: { controls: true },
  }
  
  // Show workspace
  var editordiv = document.getElementById("editor")
  var workspace = Blockly.inject(editordiv, workspaceoptions)
  
  // Show filepath
  var filepathdiv = document.getElementById("filepath")
  filepathdiv.innerText = filepath

  // Load and parse the file and show the blocks for its content
  var parsedfilecontent = await loadfile(filepath, fileextension)
  if (parsedfilecontent) {
    Blockly.serialization.workspaces.load(parsedfilecontent, workspace)
  }
  
  // Load block generator for extension
  var codegenerator = await loadcodegenerator(fileextension)
  
  // Handle workspace changes
  function handleworkspacechanged(event) {
    if (event.type == Blockly.Events.BLOCK_CHANGE || event.type == Blockly.Events.BLOCK_CREATE || event.type == Blockly.Events.BLOCK_DELETE || (event.type == Blockly.Events.BLOCK_MOVE && event.reason && (event.reason.includes("snap") || event.reason.includes("connect")))) {
      var state = Blockly.serialization.workspaces.save(workspace)
      var code = codegenerator.generate(state)
      document.getElementById("preview").innerText = code
      console.log(code)
    }
  }
  workspace.addChangeListener(handleworkspacechanged)
  
  // Button handling
  async function savebuttonclick() {
    var state = Blockly.serialization.workspaces.save(workspace)
    var code = codegenerator.generate(state)
    var formdata = new FormData()
    formdata.append("data", new Blob([code]));
    await fetch("/api/filesystem/" + filepath, { method: 'POST', body: formdata, cache: 'no-cache' })
    alert("Die Datei wurde gespeichert")
  }
  document.getElementById("savebutton").addEventListener("click", savebuttonclick)
    
  async function deletefilebuttonclick() {
    const shouldbedeleted = confirm("Soll die Datei " + filepath + " gelöscht werden?")
    if (shouldbedeleted) {
      await fetch("/api/filesystem/" + filepath, { method: 'DELETE' })
      parent.document.getElementById("filelist").contentWindow.location.reload()
      location.href = "about:blank"
    }
  }
  document.getElementById("deletebutton").addEventListener("click", deletefilebuttonclick)
  
  document.getElementById("previewbutton").addEventListener("click", previewbuttonclick)  
  
}

init()
