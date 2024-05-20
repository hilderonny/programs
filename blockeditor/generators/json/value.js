export function creategenerator(blockgenerator) {

  function generate(block) {
  
    var value = block.getFieldValue("arg1")
    return value
    
  }
  
  return generate
  
}