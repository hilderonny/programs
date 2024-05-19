export function creategenerator(blockgenerator) {

  function generate(block) {
  
    var codejson = {}
    codejson.kind = block.getFieldValue("arg1")
    codejson.contents = []
    
    var statementcode = blockgenerator.statementToCode(block, "arg2")
    var statementarraycode = "[" + statementcode + "]"
    var statementarrayjson = JSON.parse(statementarraycode)
    codejson.contents = statementarrayjson
    
    return JSON.stringify(codejson, null, "  ")
    
  }
  
  return generate
  
}