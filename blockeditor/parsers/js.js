import * as acorn from "../acorn.module.js"

var idcounter = 0

function createemptyblock() {
  var block = {}
  block.id = "id" + idcounter
  idcounter = idcounter + 1
  return block
}

function parseacornfunctiondeclaration(acornpart) {
  var block = createemptyblock()
  if (acornpart.async) {
    block.type = "async_function_definition"
  } 
  else {
    block.type = "function_definition"
  }
  block.fields = {}
  block.fields.arg1 = acornpart.id.name
  block.inputs = {}
  block.inputs.arg2 = {}
  var parameters = acornpart.params
  var parametercount = parameters.length
  if (parametercount > 0) {
    var currentblockparent = block.inputs.arg2
    for (var parameter of parameters) {
      var parameterblock = createemptyblock()
      parameterblock.type = "function_definition_parameter"
      parameterblock.fields = {}
      parameterblock.fields.arg1 = parameter.name
      parameterblock.inputs = {}
      parameterblock.inputs.arg2 = {}
      currentblockparent.block = parameterblock
      currentblockparent = parameterblock.inputs.arg2
    }
  }
  return block
}

function parseacornpart(acornpart) {
  console.log(acornpart)
  var block = undefined
  if (acornpart.type === "FunctionDeclaration") {
    block = parseacornfunctiondeclaration(acornpart)
  }
  return block
}

// Required entry point for parsing JSON files
export async function parse(filecontent) {

  // Do nothing with empty files
  if (!filecontent) {
    return
  }
  
  var acornresult = acorn.parse(filecontent, {ecmaVersion: 2020})
  
  // Prepare Blockly definition
  var blockdef = {}
  blockdef.blocks = {}
  blockdef.blocks.languageVersion = 0
  blockdef.blocks.blocks = []
  
  var rootparts = acornresult.body
  var previousblock = undefined
  for (var rootpart of rootparts) {
    var rootblock = parseacornpart(rootpart)
    if (rootblock !== undefined) {
      if (previousblock === undefined) {
        rootblock.x = 20
        rootblock.y = 20
        blockdef.blocks.blocks.push(rootblock)
      }
      else {
        previousblock.next = {}
        previousblock.next.block = rootblock
      }
      previousblock = rootblock
    }
  }
  
  return blockdef

}