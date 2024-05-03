let blockgenerator

const blockdefs = [
  {
    kind: "block",
    name: "html_html",
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
  {
    kind: "label",
    text: "Head elements"
  },
  {
    kind: "block",
    name: "html_link",
    init: function() {
      this.jsonInit({
        message0: "LINK rel %1 type %2 href %3",
        args0: [
          { type: "field_dropdown", name: "rel", options: [
            [ "stylesheet", "stylesheet" ],
            [ "icon", "icon" ]
          ] },
          { type: "field_input", name: "type" },
          { type: "field_input", name: "href" },
        ],
        previousStatement: [ "headelement" ],
        nextStatement: [ "headelement" ],
        colour: "#5da48c"
      })
    },
    generator: function(block) {
      const rel = block.getFieldValue("rel")
      const type = block.getFieldValue("type")
      const href = block.getFieldValue("href")
      return `<link rel="${rel}"${(type ? ' type="' + type + '"' : '')} href="${href}">\n`
    }
  },
  {
    kind: "block",
    name: "html_script",
    init: function() {
      this.jsonInit({
        message0: "SCRIPT src %1 is module %2",
        args0: [
          { type: "field_input", name: "src" },
          { type: "field_checkbox", name: "module" }
        ],
        previousStatement: [ "headelement" ],
        nextStatement: [ "headelement" ],
        colour: "#5da48c"
      })
    },
    generator: function(block) {
      const src = block.getFieldValue("src")
      const ismodule = block.getFieldValue("module")
      return `<script src="${src}"${(ismodule === "TRUE" ? ' type="module"' : '')}></script>\n`
    }
  },
  {
    kind: "block",
    name: "html_title",
    init: function() {
      this.jsonInit({
        message0: "TITLE %1",
        args0: [
          { type: "field_input", name: "title" },
        ],
        previousStatement: [ "headelement" ],
        nextStatement: [ "headelement" ],
        colour: "#5da48c"
      })
    },
    generator: function(block) {
      const title = block.getFieldValue("title")
      return `<title>${title}</title>\n`
    }
  },
  {
    kind: "label",
    text: "Body elements"
  },
  {
    kind: "block",
    name: "html_a",
    init: function() {
      this.jsonInit({
        message0: "A href %1\n%2",
        args0: [
          { type: "field_input", name: "href" },
          { type: "input_statement", name: "a", check: [ "bodyelement" ] },
        ],
        previousStatement: [ "bodyelement" ],
        nextStatement: [ "bodyelement" ],
        colour: "#5da45e"
      })
    },
    generator: function(block) {
      const href = block.getFieldValue("href")
      const divcontent = blockgenerator.statementToCode(block, "a")
      return `<a href="${href}">${divcontent}</a>\n`
    }
  },
  {
    kind: "block",
    name: "html_button",
    init: function() {
      this.jsonInit({
        message0: "BUTTON id %1\n%2",
        args0: [
          { type: "field_input", name: "id" },
          { type: "input_statement", name: "content", check: [ "bodyelement" ] },
        ],
        previousStatement: [ "bodyelement" ],
        nextStatement: [ "bodyelement" ],
        colour: "#5da45e"
      })
    },
    generator: function(block) {
      const id = block.getFieldValue("id")
      const content = blockgenerator.statementToCode(block, "content")
      return `<button${(id ? ' id="' + id + '"' : '')}>\n${content}</button>\n`
    }
  },
  {
    kind: "block",
    name: "html_div",
    init: function() {
      this.jsonInit({
        message0: "DIV id %1\n%2",
        args0: [
          { type: "field_input", name: "id" },
          { type: "input_statement", name: "content", check: [ "bodyelement" ] },
        ],
        previousStatement: [ "bodyelement" ],
        nextStatement: [ "bodyelement" ],
        colour: "#5da45e"
      })
    },
    generator: function(block) {
      const id = block.getFieldValue("id")
      const content = blockgenerator.statementToCode(block, "content")
      return `<div${(id ? ' id="' + id + '"' : '')}>\n${content}</div>\n`
    }
  },
  {
    kind: "block",
    name: "html_iframe",
    init: function() {
      this.jsonInit({
        message0: "IFRAME src %1 name %2 id %3",
        args0: [
          { type: "field_input", name: "src" },
          { type: "field_input", name: "name" },
          { type: "field_input", name: "id" },
        ],
        previousStatement: [ "bodyelement" ],
        nextStatement: [ "bodyelement" ],
        colour: "#5da45e"
      })
    },
    generator: function(block) {
      const src = block.getFieldValue("src")
      const name = block.getFieldValue("name")
      const id = block.getFieldValue("id")
      return `<iframe${(src ? ' src="' + src + '"' : '')}${(name ? ' name="' + name + '"' : '')}${(id ? ' id="' + id + '"' : '')}></iframe>\n`
    }
  },
  {
    kind: "label",
    text: "Text elements"
  },
  {
    kind: "block",
    name: "html_text",
    init: function() {
      this.jsonInit({
        message0: "text %1",
        args0: [
          { type: "field_input", name: "text" },
        ],
        previousStatement: [ "bodyelement" ],
        nextStatement: [ "bodyelement" ],
        colour: "#3c6fb7"
      })
    },
    generator: function(block) {
      const text= block.getFieldValue("text")
      return `${text}`
    }
  },
]

blockgenerator = new Blockly.Generator("html")

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

const commentstart = "<!--"
const commentend = "-->"

export { toolbox, blockgenerator, commentstart, commentend }