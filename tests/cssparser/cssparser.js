import { loadtoolbox } from "../../blockeditor/modules/loadtoolbox.js";

async function init() {

  // ID Counter
  var id = 0
  // Blockposition
  var x = 0

  // BLockly-Definition vorbereiten
  var blockdef = {}
  blockdef.blocks = {}
  blockdef.blocks.languageVersion = 0
  blockdef.blocks.blocks = []
  blockdef.toolbox = "css_toolbox"

  // CSS laden
  var filetoparse = "parseme.css"
  var cssresponse = await fetch(filetoparse)
  var csscontent = await cssresponse.text()
  
  // HTML Dokument erstellen und CSS reinladen
  var htmldocument = document.implementation.createHTMLDocument()
  var styleelement = document.createElement("style")
  styleelement.textContent = csscontent
  htmldocument.body.appendChild(styleelement)
  
  // CSS-Struktur auslesen
  var cssrulelist = styleelement.sheet.cssRules
  for (var cssrulelistcounter = 0; cssrulelistcounter < cssrulelist.length; cssrulelistcounter++) {
  
    // Regel parsen
    var cssstylerule = cssrulelist[cssrulelistcounter]
    var selectortext = cssstylerule.selectorText
    console.log("%c" + selectortext, "font-weight:bold;")
    
    // Blockly-Block
    var selectorblock = {}
    blockdef.blocks.blocks.push(selectorblock)
    selectorblock.type = "selector"
    selectorblock.id = id
    id = id + 1
    selectorblock.x = x
    x = x + 300
    selectorblock.y = 0
    selectorblock.fields = {}
    selectorblock.fields.arg1 = selectortext
    selectorblock.inputs = {}
    selectorblock.inputs.arg2 = {}
    var previousblock = selectorblock.inputs.arg2
    
    var cssstyledeclaration = cssstylerule.style
    for (var cssstyledeclarationcounter = 0; cssstyledeclarationcounter < cssstyledeclaration.length; cssstyledeclarationcounter++) {
    
      // Definition parsen
      var stylename = cssstyledeclaration[cssstyledeclarationcounter]
      console.log(stylename)
      var stylevalue = cssstyledeclaration[stylename]
      console.log(stylevalue)
      
      // Blockly-Block
      var block = {}
      block.id = id
      id = id + 1
      block.type = stylename.replaceAll("-", "_")
      block.fields = {}
      block.fields.arg1 = stylevalue
      previousblock.block = block
      var penultimateindex = cssstyledeclaration.length - 1
      if (cssstyledeclarationcounter < penultimateindex) {
        block.next = {}
        previousblock = block.next
      }
      
    }
    
  }
  
  // Blockly-Definition ausgeben
  console.log(blockdef)
  
  // Blockly-Workspace anzeigen
  var blockgenerator = new Blockly.Generator("generatorid")
  var toolbox = await loadtoolbox("css_toolbox", blockgenerator)
  var workspaceoptions = {
    grid: { spacing: 10, length: 1, colour: "#cccccc", snap: true, },
    scrollbars: true,
    toolbox: toolbox.toolbox,
    trashcan: true,
    zoom: { controls: true },
  }
  var blocklydiv = document.getElementById("blocklyoutput")
  var workspace = Blockly.inject(blocklydiv, workspaceoptions)
  Blockly.serialization.workspaces.load(blockdef, workspace)
  
}

init()
