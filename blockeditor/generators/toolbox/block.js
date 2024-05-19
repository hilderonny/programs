export function creategenerator(blockgenerator) {

  function generate(block) {
  
    var codejson = {}
    codejson.kind = "block"
    codejson.type = block.getFieldValue("arg1")
    var codestring = JSON.stringify(codejson)
    
    var nextblock = block.nextConnection.targetBlock()
    if (nextblock) {
      var nextblockcode = blockgenerator.blockToCode(nextblock)
      codestring = codestring + "," + nextblockcode 
    }
    
    return codestring
    
  }
  
  return generate
  
}
