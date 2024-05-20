export function creategenerator(blockgenerator) {

  function generate(block) {
  
    var text = block.getFieldValue("arg1")
    var code = "\"" + text + "\""
    return code
    
  }
  
  return generate
  
}