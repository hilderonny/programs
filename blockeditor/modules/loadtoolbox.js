import { parseelementdefinition } from "./parseelementdefinition.js";

export async function loadtoolbox(toolboxidentifier, blockgenerator) {
  var filepath = "../toolboxes/" + toolboxidentifier + ".js"
  var toolboxmodule = await import(filepath)
  var toolboxdefinition = toolboxmodule.toolbox
  var toolbox = {
    kind: toolboxdefinition.type,
    contents: []
  }
  for (var elementdefinition of toolboxdefinition.elements) {
    var toolboxelement = await parseelementdefinition(elementdefinition, blockgenerator)
    toolbox.contents.push(toolboxelement)
  }
  return {
    definition: toolboxdefinition,
    toolbox: toolbox
  }
}
