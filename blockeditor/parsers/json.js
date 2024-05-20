var idcounter = 0

function createemptyblock() {
  var block = {}
  block.id = "id" + idcounter
  idcounter = idcounter + 1
  block.fields = {}
  block.inputs = {}
  return block
}

function createkeyblock(key) {

  var block = createemptyblock()
  block.type = "key"
  block.fields.arg1 = key
  block.inputs.arg2 = {}
  block.next = {}
  
  return block
  
}

function createstringblock(string, isoutput) {

  var block = createemptyblock()
  if (isoutput) {
    block.type = "string"
  } else {
    block.type = "array_string"
  }
  block.fields.arg1 = string
  
  return block
  
}

function createobjectblockforjson(json, isoutput) {

  var block = createemptyblock()
  block.type = "object"
  block.inputs.arg1 = {}
  
  var previousdock = block.inputs.arg1
  
  var entries = Object.entries(json)
  for (var keyvaluepair of entries) {
    var key = keyvaluepair[0]
    var keyblock = createkeyblock(key)
    previousdock.block = keyblock
    previousdock = keyblock.next
    var value = keyvaluepair[1]
    var valueblock = createblockforjson(value)
    keyblock.inputs.arg2.block = valueblock
  }
  
  return block
  
}

function createblockforjson(json, isoutput) {

  var jsontype = typeof(json)
  console.log(jsontype)
  var block
  if (jsontype === "object") {
    block = createobjectblockforjson(json, isoutput)
  }
  if (jsontype === "string") {
    block = createstringblock(json, isoutput)
  }
  return block
  
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
  
  // Convert JSON into Bockly definition
  var block = createblockforjson(json, false)
  console.log(block)
  blockdef.blocks.blocks.push(block)
  
  return blockdef
  
}