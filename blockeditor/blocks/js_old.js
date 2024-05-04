let blockgenerator

const blockdefs = [
  {
    kind: "category",
    title: "Functions",
    colour: "#985da3",
    contents: [
      {
        kind: "block",
        name: "js_function",
        init: function() {
          this.jsonInit({
            message0: "HTML %1 head %2 body %3",
            args0: [
              { type: "input_dummy" },
              { type: "input_statement", name: "head", check: [ "headelement" ] },
              { type: "input_statement", name: "body", check: [ "bodyelement" ] },
            ],
            colour: "#985da3"
          })
        },
        generator: function(block) {
          const headcontent = blockgenerator.statementToCode(block, "head")
          const bodycontent = blockgenerator.statementToCode(block, "body")
          return `<!DOCTYPE html><html><head>\n<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n${headcontent}\n</head><body>\n${bodycontent}\n</body></html>`
        }
      },
    ],
  },
  {
    kind: "category",
    title: "Blocks",
    contents: [
    ],
  },
  {
    kind: "category",
    title: "Variables",
    contents: [
    ],
  },
]

blockgenerator = new Blockly.Generator("css")

blockgenerator.scrub_ = function(block, code) {
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock()
  var nextCode = blockgenerator.blockToCode(nextBlock)
  return code + nextCode
}

const toolbox = {
  kind: "categoryToolbox",
  contents: []
}

function parseblockdef(blockdef) {
  if (blockdef.init) Blockly.Blocks[blockdef.name] = { init: blockdef.init }
  if (blockdef.generator) blockgenerator.forBlock[blockdef.name] = blockdef.generator
  const toolboxelement = {
    kind: blockdef.kind,
    type: blockdef.name,
    text: blockdef.text,
    name: blockdef.title,
    contents: [],
    colour: blockdef.colour,
  }
  if (blockdef.contents) {
    for (let subblockdef of blockdef.contents) {
      toolboxelement.contents.push(parseblockdef(subblockdef))
    }
  }
  return toolboxelement
}

for (let blockdef of blockdefs) {
  toolbox.contents.push(parseblockdef(blockdef))
}

const commentstart = "/*"
const commentend = "*/"

export { toolbox, blockgenerator, commentstart, commentend }