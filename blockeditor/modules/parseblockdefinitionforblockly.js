var blockargumenttypemapping = {
  boolean: "field_checkbox",
  color: "field_colour",
  input: "input_value",
  text: "field_input",
  multilinetext: "field_multilinetext",
  select: "field_dropdown",
  statements: "input_statement",
};

export async function parseblockdefinitionforblockly(blockname, blockdefinition) {
  var blockjson = {
    type: blockname,
    message0: blockdefinition.message,
    args0: [],
    colour: blockdefinition.color,
    inputsInline: blockdefinition.inline,
  }  
  for (var [index, argument] of blockdefinition.arguments.entries()) {
    var argumentname = "arg" + (index + 1)
    var argumenttype = argument.type
    var blocklyargument = {
      name: argumentname,
      type: blockargumenttypemapping[argumenttype],
    }
    if (argumenttype === "select") {
      var options = []
      for (var element of argument.elements) {
        var option = [ element.label, element.value ]
        options.push(option)
      }
      blocklyargument.options = options
    }
    blockjson.args0.push(blocklyargument)
  }
  if (blockdefinition.type === "step") {
    blockjson.nextStatement = null,
    blockjson.previousStatement = null
  }
  if (blockdefinition.type === "output") {
    blockjson.output = null
  }
  return blockjson
}
