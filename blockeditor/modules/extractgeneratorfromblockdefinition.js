export async function extractgeneratorfromblockdefinition(blockdefinition, blockgenerator) {
  var template = blockdefinition.template
  var generatorfunction = function(block) {
    var resultset = []
    for (var element of template) {
      var elementtype = typeof(element)
      if (elementtype === "string") {
        resultset.push(element)
      }
      // BIS HIER BIN ICH GEKOMMEN
      if (elementtype === "number") {
        var argumentname = "arg" + element
        if (blockdefinition.arguments[element - 1].type === "statements") {
          var statementcode = blockgenerator.statementToCode(block, argumentname)
          resultset.push(statementcode)
        } else if (blockdefinition.arguments[element - 1].type === "input") {
          var inputcode = blockgenerator.valueToCode(block, argumentname, 0)
          resultset.push(inputcode)
        } else {
          var value = block.getFieldValue(argumentname)
          resultset.push(value)
        }
      }
      if (elementtype === "function") {
        var value = element(block)
        resultset.push(value)
      }
    }
    var generatedcontent = resultset.join("")
    if (blockdefinition.type === "output") {
      generatedcontent = [ generatedcontent, 0 ] // https://neil.fraser.name/blockly/custom-blocks/operator-precedence#:~:text=Just%20use%20ORDER_ATOMIC%20as%20the%20order%20on%20every,needless%20parentheses%2C%20but%20is%20guaranteed%20to%20be%20correct.
    }
    return generatedcontent
  }
  return generatorfunction
}
