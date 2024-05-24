function generatecodeforasyncfunctiondefinition(block) {
  var lines = []
  var functionname = block.fields.arg1
  var parameterlist = ""
  var statementscode = ""
  if (block.inputs) {
    var parameternames = []
    var nextparameter = block.inputs.arg2
    while (nextparameter) {
      var nextblock = nextparameter.block
      parameternames.push(nextblock.fields.arg1)
      if (nextblock.inputs) {
        nextparameter = nextblock.inputs.arg2
      } else {
        nextparameter = undefined
      }
    }
    parameterlist = parameternames.join(", ")
    var statementsreference = block.inputs.arg4
    if (statementsreference) {
      var statementblock = statementsreference.block
      statementscode = generatecodeforblock(statementblock)
    }
  }
  var firstline = "async function " + functionname + "(" + parameterlist + ") {"
  lines.push(firstline)
  lines.push(statementscode)
  var lastline = "}\n"
  lines.push(lastline)
  var code = lines.join("\n")
  return code
}

function generatecodeforvariabledeclaration(block) {
  var code = "var " + block.fields.arg1 + " = "
  if (block.inputs) {
    var valueblock = block.inputs.arg2.block
    var valuecode = generatecodeforblock(valueblock)
    code = code + valuecode
  }
  code = code + "\n"
  return code
}

function generatecodeforcombine(block) {
  var firstvaluecode = undefined
  var secondvaluecode = undefined
  if (block.inputs) {
    if (block.inputs.arg1) {
      var firstvalueblock = block.inputs.arg1.block
      firstvaluecode = generatecodeforblock(firstvalueblock)
    }
    if (block.inputs.arg3) {
      var secondvalueblock = block.inputs.arg3.block
      secondvaluecode = generatecodeforblock(secondvalueblock)
    }
  }
  var code = "(" + firstvaluecode + " + " + secondvaluecode + ")"
  return code
}

function generatecodeforvaluestring(block) {
  var code = "\"" + block.fields.arg1 + "\""
  return code
}

function generatecodeforvaluevalue(block) {
  var code = block.fields.arg1
  return code
}

function generatecodeforblock(block) {

  var blocktype = block.type
  var code = undefined
  console.log(blocktype)
  if (blocktype === "async_function_definition") {
    code = generatecodeforasyncfunctiondefinition(block)
  }
  else if (blocktype === "variable_declaration") {
    code = generatecodeforvariabledeclaration(block)
  }
  else if (blocktype === "combine") {
    code = generatecodeforcombine(block)
  }
  else if (blocktype === "value_string") {
    code = generatecodeforvaluestring(block)
  }
  else if (blocktype === "value_value") {
    code = generatecodeforvaluevalue(block)
  }
  var nextblockreference = block.next
  if (nextblockreference !== undefined) {
    var nextblock = nextblockreference.block
    var nextcode = generatecodeforblock(nextblock)
    code = code + nextcode
  }
  return code
}

export function generate(state) {

  if (!state.blocks) {
    return
  }
  
  var allrootblocks = state.blocks.blocks
  if (allrootblocks.length < 1) {
    return
  }
  
  var firstrootblock = allrootblocks[0]
  var code = generatecodeforblock(firstrootblock)
  
  return code

}