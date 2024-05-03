let blockgenerator

const blockdefs = [
  {
    kind: "block",
    name: "css_definition",
    init: function() {
      this.jsonInit({
        message0: "Definition target %1\n%2",
        args0: [
          { type: "field_input", name: "target" },
          { type: "input_statement", name: "content", check: [ "contentelement" ] },
        ],
        previousStatement: [ "definitionelement" ],
        nextStatement: [ "definitionelement" ],
        colour: "#985da3"
      })
    },
    generator: function(block) {
      const target = block.getFieldValue("target")
      const content = blockgenerator.statementToCode(block, "content")
      return `${target} {\n${content}}`
    }
  },
  {
    kind: "label",
    text: "Properties"
  },
  {
    kind: "block",
    name: "css_display",
    init: function() {
      this.jsonInit({
        message0: "display %1",
        args0: [
          { type: "field_dropdown", name: "value", options: [
            [ "block", "block" ],
            [ "flex", "flex" ],
            [ "inline", "inline" ],
            [ "none", "none" ],
          ] },
        ],
        previousStatement: [ "contentelement" ],
        nextStatement: [ "contentelement" ],
        colour: "#5da45e"
      })
    },
    generator: function(block) {
      const value = block.getFieldValue("value")
      return `display:${value};\n`
    }
  },
  {
    kind: "block",
    name: "css_flex",
    init: function() {
      this.jsonInit({
        message0: "flex %1",
        args0: [
          { type: "field_input", name: "value" },
        ],
        previousStatement: [ "contentelement" ],
        nextStatement: [ "contentelement" ],
        colour: "#5da45e"
      })
    },
    generator: function(block) {
      const value = block.getFieldValue("value")
      return `flex:${value};\n`
    }
  },
  {
    kind: "block",
    name: "css_flex-direction",
    init: function() {
      this.jsonInit({
        message0: "flex-direction %1",
        args0: [
          { type: "field_dropdown", name: "value", options: [
            [ "column", "column" ],
            [ "column-reverse", "column-reverse" ],
            [ "row", "row" ],
            [ "row-reverse", "row-reverse" ],
          ] },
        ],
        previousStatement: [ "contentelement" ],
        nextStatement: [ "contentelement" ],
        colour: "#5da45e"
      })
    },
    generator: function(block) {
      const value = block.getFieldValue("value")
      return `flex-direction:${value};\n`
    }
  },
  {
    kind: "block",
    name: "css_height",
    init: function() {
      this.jsonInit({
        message0: "height %1",
        args0: [
          { type: "field_input", name: "value" },
        ],
        previousStatement: [ "contentelement" ],
        nextStatement: [ "contentelement" ],
        colour: "#5da45e"
      })
    },
    generator: function(block) {
      const value = block.getFieldValue("value")
      return `height:${value};\n`
    }
  },
  {
    kind: "block",
    name: "css_margin",
    init: function() {
      this.jsonInit({
        message0: "margin %1",
        args0: [
          { type: "field_input", name: "value" },
        ],
        previousStatement: [ "contentelement" ],
        nextStatement: [ "contentelement" ],
        colour: "#5da45e"
      })
    },
    generator: function(block) {
      const value = block.getFieldValue("value")
      return `margin:${value};\n`
    }
  },
  {
    kind: "block",
    name: "css_min-width",
    init: function() {
      this.jsonInit({
        message0: "min-width %1",
        args0: [
          { type: "field_input", name: "value" },
        ],
        previousStatement: [ "contentelement" ],
        nextStatement: [ "contentelement" ],
        colour: "#5da45e"
      })
    },
    generator: function(block) {
      const value = block.getFieldValue("value")
      return `min-width:${value};\n`
    }
  },
  {
    kind: "block",
    name: "css_padding",
    init: function() {
      this.jsonInit({
        message0: "padding %1",
        args0: [
          { type: "field_input", name: "value" },
        ],
        previousStatement: [ "contentelement" ],
        nextStatement: [ "contentelement" ],
        colour: "#5da45e"
      })
    },
    generator: function(block) {
      const value = block.getFieldValue("value")
      return `padding:${value};\n`
    }
  },
  {
    kind: "block",
    name: "css_position",
    init: function() {
      this.jsonInit({
        message0: "position %1",
        args0: [
          { type: "field_dropdown", name: "value", options: [
            [ "absolute", "absolute" ],
            [ "fixed", "fixed" ],
            [ "relative", "relative" ],
            [ "static", "static" ],
            [ "sticky", "sticky" ],
          ] },
        ],
        previousStatement: [ "contentelement" ],
        nextStatement: [ "contentelement" ],
        colour: "#5da45e"
      })
    },
    generator: function(block) {
      const value = block.getFieldValue("value")
      return `position:${value};\n`
    }
  },
  {
    kind: "block",
    name: "css_resize",
    init: function() {
      this.jsonInit({
        message0: "resize %1",
        args0: [
          { type: "field_dropdown", name: "value", options: [
            [ "both", "both" ],
            [ "horizontal", "horizontal" ],
            [ "none", "none" ],
            [ "vertical", "vertical" ],
          ] },
        ],
        previousStatement: [ "contentelement" ],
        nextStatement: [ "contentelement" ],
        colour: "#5da45e"
      })
    },
    generator: function(block) {
      const value = block.getFieldValue("value")
      return `resize:${value};\n`
    }
  },
  {
    kind: "block",
    name: "css_width",
    init: function() {
      this.jsonInit({
        message0: "width %1",
        args0: [
          { type: "field_input", name: "value" },
        ],
        previousStatement: [ "contentelement" ],
        nextStatement: [ "contentelement" ],
        colour: "#5da45e"
      })
    },
    generator: function(block) {
      const value = block.getFieldValue("value")
      return `width:${value};\n`
    }
  },
]

blockgenerator = new Blockly.Generator("css")

blockgenerator.scrub_ = function(block, code) {
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock()
  var nextCode = blockgenerator.blockToCode(nextBlock)
  return code + nextCode
}

const toolbox = {
  kind: "flyoutToolbox",
  contents: []
}

for (let blockdef of blockdefs) {
  if (blockdef.init) Blockly.Blocks[blockdef.name] = { init: blockdef.init }
  if (blockdef.generator) blockgenerator.forBlock[blockdef.name] = blockdef.generator
  toolbox.contents.push({
    kind: blockdef.kind,
    type: blockdef.name,
    text: blockdef.text,
    name: blockdef.title,
    contents: blockdef.contents,
  })
}

const commentstart = "/*"
const commentend = "*/"

export { toolbox, blockgenerator, commentstart, commentend }