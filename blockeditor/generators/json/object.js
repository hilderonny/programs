export function creategenerator(blockgenerator) {

  function generate(block) {
  
    var statementcode = blockgenerator.statementToCode(block, "arg1")
    var code = "{" + statementcode + "}"
    return code
    
  }
  
  return generate
  
}