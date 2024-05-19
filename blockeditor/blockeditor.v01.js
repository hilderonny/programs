import { loadtoolbox } from "./modules/loadtoolbox.js";

var commentstartmapping = {
  "javascript": "//",
  "html": "<!--",
  "css": "/*",
}

var commentendmapping = {
  "javascript": "",
  "html": "-->",
  "css": "*/",
}

var toolboxidentifier
var toolboxdefinition
var blockgenerator
var code
var previewiframe
var workspace
var filepath

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
  
  var toolbox = await loadtoolbox(toolboxidentifier, blockgenerator)
  toolboxdefinition = toolbox.definition
  var workspaceoptions = {
    grid: { spacing: 10, length: 1, colour: "#cccccc", snap: true, },
    scrollbars: true,
    toolbox: toolbox.toolbox,
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
