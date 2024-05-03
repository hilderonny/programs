const filepath = location.search?.substring(1)
const filetype = filepath.substr(filepath.lastIndexOf(".") + 1)
let toolbox = filetype
let workspace
let code
let blockdefs
let editordiv
let previewiframe

function handleworkspacechanged(event) {
  if (event.type == Blockly.Events.BLOCK_CHANGE || event.type == Blockly.Events.BLOCK_CREATE || event.type == Blockly.Events.BLOCK_DELETE || event.type == Blockly.Events.BLOCK_MOVE) {
    code = blockdefs.blockgenerator.workspaceToCode(workspace)
    console.log(code)
    const blob = new Blob([code], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    previewiframe.src = url
  }
}

async function savebuttonclick() {
  const state = Blockly.serialization.workspaces.save(workspace)
  state.toolbox = toolbox
  const filecontent = code + "\n" + blockdefs.commentstart + "BLOCKDEF" + JSON.stringify(state) + blockdefs.commentend
  console.log(filecontent)
  const formdata = new FormData()
  formdata.append("data", new Blob([filecontent]));
  await fetch("/api/filesystem/" + filepath, { method: 'POST', body: formdata, cache: 'no-cache' })
  alert("Die Datei wurde gespeichert")
}

function previewbuttonclick() {
  document.getElementById("preview").classList.toggle("visible")
}


(async () => {

  if (filepath) {

    const filecontent = await fetch("/api/filesystem/" + filepath).then((response) => response.text())
    console.log(filecontent)
    
    let blockdefjson = null
    const lastline = filecontent.split("\n").at(-1)
    if (lastline && lastline.indexOf("BLOCKDEF") >= 0) {
      const blockdeftext = lastline.substring(lastline.indexOf("{"), lastline.lastIndexOf("}") + 1)
      console.log(blockdeftext)
      blockdefjson = JSON.parse(blockdeftext)
      toolbox = blockdefjson.toolbox
    }

    blockdefs = await import(`./blocks/${toolbox}.js`)

    editordiv = document.getElementById("editor")
    previewiframe = document.getElementById("preview")
    
    workspace = Blockly.inject(editordiv, { toolbox: blockdefs.toolbox })
    workspace.addChangeListener(handleworkspacechanged)
    
    if (blockdefjson) {
      Blockly.serialization.workspaces.load(blockdefjson, workspace)
    }
    
    document.getElementById("savebutton").addEventListener("click", savebuttonclick)
    document.getElementById("previewbutton").addEventListener("click", previewbuttonclick)
    
    document.getElementById("filepath").innerText = filepath
    
  }

})()
