var idcounter = 0

async function createblock(contentsjson, currentindex) {

  var currentblockjson = contentsjson[currentindex]
  var block = {}
  block = {}
  block.id = "id" + idcounter
  idcounter = idcounter + 1
  block.type = currentblockjson.kind
  block.fields = {}
  if (currentblockjson.kind === "label") {
    block.fields.arg1 = currentblockjson.text
  }
  if (currentblockjson.kind === "block") {
    block.fields.arg1 = currentblockjson.type
  }
  var maxindex = contentsjson.length - 1
  if (currentindex < maxindex) {
    var nextblock = await createblock(contentsjson, currentindex + 1)
    block.next = {}
    block.next.block = nextblock
  }
  return block
  
}

async function createtoolboxblock(toolboxjson) {

  var toolboxblock = {}
  toolboxblock.type = "toolbox"
  toolboxblock.id = "id" + idcounter
  idcounter = idcounter + 1
  toolboxblock.x = 20, // Show small padding in workspace
  toolboxblock.y = 20,
  toolboxblock.fields = {}
  toolboxblock.fields.arg1 = toolboxjson.kind
  toolboxblock.inputs = {}
  toolboxblock.inputs.arg2 = {}
  
  var firstblock = await createblock(toolboxjson.contents, 0)
  toolboxblock.inputs.arg2.block = firstblock
  
  return toolboxblock
  
}

// Required entry point for parsing toolbox files
export async function parse(filecontent) {

  if (!filecontent) {
    return
  }

  // Toolboxes are defined in JSON format
  var json = JSON.parse(filecontent)
  
  // Prepare Blockly definition
  var blockdef = {}
  blockdef.blocks = {}
  blockdef.blocks.languageVersion = 0
  blockdef.blocks.blocks = []
  
  // Convert JSON into Bockly toolbox definition
  var toolboxblock = await createtoolboxblock(json)
  blockdef.blocks.blocks.push(toolboxblock)
  
  return blockdef
  
}