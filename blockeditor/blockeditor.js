import htmltoolbox from "./target/html/toolbox.js"
import htmlgenerator from "./target/html/generator.js"

const editordiv = document.getElementById("editor")

let workspace

function handleworkspacechanged(event) {
    if (event.type == Blockly.Events.BLOCK_CHANGE || event.type == Blockly.Events.BLOCK_CREATE || event.type == Blockly.Events.BLOCK_DELETE || event.type == Blockly.Events.BLOCK_MOVE) {
        console.log("Block changed")
        const code = htmlgenerator.workspaceToCode(workspace)
        console.log(code)
    }
}

workspace = Blockly.inject(editordiv, { toolbox: htmltoolbox })
workspace.addChangeListener(handleworkspacechanged)
