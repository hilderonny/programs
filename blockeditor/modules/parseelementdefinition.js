import { parseblockdefinitionforblockly } from "./parseblockdefinitionforblockly.js";
import { parseblockdefinitionfortoolbox } from "./parseblockdefinitionfortoolbox.js";
import { extractgeneratorfromblockdefinition } from "./extractgeneratorfromblockdefinition.js";

export async function parseelementdefinition(elementdefinition, blockgenerator) {
  var type = elementdefinition.type
  if (type === "block") {
    var library = elementdefinition.library
    var blockname = elementdefinition.name
    var blockmodule = await import(library)
    var blockdefinition = blockmodule[blockname]
    var blocklyblock = await parseblockdefinitionforblockly(blockname, blockdefinition)
    Blockly.defineBlocksWithJsonArray([ blocklyblock ])
    var generator = await extractgeneratorfromblockdefinition(blockdefinition, blockgenerator)
    blockgenerator.forBlock[blockname] = generator
    var toolboxblock = await parseblockdefinitionfortoolbox(blockname, blockdefinition)
    return toolboxblock
  }
  if (type === "separator") {
    var toolboxblock = {
      kind: "label",
      text: elementdefinition.text
    }
    return toolboxblock
  }
  if (type === "category") {
    var toolboxblock = {
      kind: "category",
      name: elementdefinition.name,
      colour: elementdefinition.color, 
      contents: []
    }
    for (var subelementdefinition of elementdefinition.elements) {
      var subelementtoolboxblock = await parseelementdefinition(subelementdefinition, blockgenerator)
      toolboxblock.contents.push(subelementtoolboxblock)
    }
    return toolboxblock
  }
}
