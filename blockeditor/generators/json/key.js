export function creategenerator(blockgenerator) {

  function generate(block) {
  
    var key = block.getFieldValue("arg1")
    var value = blockgenerator.valueToCode(block, "arg2", 0)
    var code = "\"" + key + "\":" + value
    return code
    
  }
  
  return generate
  
}