var idcounter = 0

function createemptyblock() {
  var block = {}
  block.id = "id" + idcounter
  idcounter = idcounter + 1
  return block
}

function parseobjectobject(key, objectjson) {
  var block = createemptyblock()
  block.type = "objectobject"
  block.fields = {}
  block.fields.arg1 = key
  block.inputs = {}
  var keylist = Object.keys(objectjson)
  var keycount = keylist.length
  if (keycount > 0) {
    block.inputs.arg2 = {}
    var predecessor = block.inputs.arg2
    for (var i = 0; i < keycount; i++) {
      var elementkey = keylist[i]
      var objectelement = objectjson[elementkey]
      var elementblock = parseobjectelement(elementkey, objectelement)
      if (elementblock !== undefined) {
        predecessor.block = elementblock
        var maxindex = keycount - 1
        if (i < maxindex) {
          elementblock.next = {}
          predecessor = elementblock.next
        }
      }
    }
  }
  return block
}

function parseobjectarray(key, arrayjson) {
  var block = createemptyblock()
  block.type = "objectarray"
  block.fields = {}
  block.fields.arg1 = key
  block.inputs = {}
  var arraylength = arrayjson.length
  if (arraylength > 0) {
    block.inputs.arg2 = {}
    var predecessor = block.inputs.arg2
    for (var i = 0; i < arraylength; i++) {
      var arrayelement = arrayjson[i]
      var elementblock = parsearrayelement(arrayelement)
      if (elementblock !== undefined) {
        predecessor.block = elementblock
        var maxindex = arraylength - 1
        if (i < maxindex) {
          elementblock.next = {}
          predecessor = elementblock.next
        }
      }
    }
  }
  return block
}

function parseobjectstring(key, stringjson) {
  var block = createemptyblock()
  block.type = "objectstring"
  block.fields = {}
  block.fields.arg1 = key
  var escapedstring = stringjson.replace("\n", "\\n")
  block.fields.arg2 = escapedstring
  return block
}

function parseobjectvalue(key, valuejson) {
  var block = createemptyblock()
  block.type = "objectvalue"
  block.fields = {}
  block.fields.arg1 = key
  if (valuejson === null) {
    block.fields.arg2 = "null"
  } else {
    block.fields.arg2 = valuejson
  }
  return block
}

function parseobjectelement(key, objectelement) {
  var elementtype = typeof(objectelement)
  var elementblock = undefined
  if (elementtype === "number" || elementtype === "boolean" || objectelement === null) {
    elementblock = parseobjectvalue(key, objectelement)
  } else if (elementtype === "string") {
    elementblock = parseobjectstring(key, objectelement)
  } else if (Array.isArray(objectelement)) {
    elementblock = parseobjectarray(key, objectelement)
  } else if (elementtype === "object") {
    elementblock = parseobjectobject(key, objectelement)
  }
  return elementblock
}

function parserootobject(objectjson) {
  var block = createemptyblock()
  block.type = "rootobject"
  block.x = 20
  block.y = 20
  block.inputs = {}
  var keylist = Object.keys(objectjson)
  var keycount = keylist.length
  if (keycount > 0) {
    block.inputs.arg1 = {}
    var predecessor = block.inputs.arg1
    for (var i = 0; i < keycount; i++) {
      var elementkey = keylist[i]
      var objectelement = objectjson[elementkey]
      var elementblock = parseobjectelement(elementkey, objectelement)
      if (elementblock !== undefined) {
        predecessor.block = elementblock
        var maxindex = keycount - 1
        if (i < maxindex) {
          elementblock.next = {}
          predecessor = elementblock.next
        }
      }
    }
  }
  return block
}

function parsearrayobject(objectjson) {
  var block = createemptyblock()
  block.type = "arrayobject"
  block.inputs = {}
  var keylist = Object.keys(objectjson)
  var keycount = keylist.length
  if (keycount > 0) {
    block.inputs.arg1 = {}
    var predecessor = block.inputs.arg1
    for (var i = 0; i < keycount; i++) {
      var elementkey = keylist[i]
      var objectelement = objectjson[elementkey]
      var elementblock = parseobjectelement(elementkey, objectelement)
      if (elementblock !== undefined) {
        predecessor.block = elementblock
        var maxindex = keycount - 1
        if (i < maxindex) {
          elementblock.next = {}
          predecessor = elementblock.next
        }
      }
    }
  }
  return block
}

function parsearrayarray(arrayjson) {
  var block = createemptyblock()
  block.type = "arrayarray"
  block.inputs = {}
  var arraylength = arrayjson.length
  if (arraylength > 0) {
    block.inputs.arg1 = {}
    var predecessor = block.inputs.arg1
    for (var i = 0; i < arraylength; i++) {
      var arrayelement = arrayjson[i]
      var elementblock = parsearrayelement(arrayelement)
      if (elementblock !== undefined) {
        predecessor.block = elementblock
        var maxindex = arraylength - 1
        if (i < maxindex) {
          elementblock.next = {}
          predecessor = elementblock.next
        }
      }
    }
  }
  return block
}

function parsearraystring(stringjson) {
  var block = createemptyblock()
  block.type = "arraystring"
  block.fields = {}
  var escapedstring = stringjson.replace("\n", "\\n")
  block.fields.arg1 = escapedstring
  return block
}

function parsearrayvalue(valuejson) {
  var block = createemptyblock()
  block.type = "arrayvalue"
  block.fields = {}
  if (valuejson === null) {
    block.fields.arg1 = "null"
  } else {
    block.fields.arg1 = valuejson
  }
  return block
}

function parsearrayelement(arrayelement) {
  var elementtype = typeof(arrayelement)
  var elementblock = undefined
  if (elementtype === "number" || elementtype === "boolean" || arrayelement === null) {
    elementblock = parsearrayvalue(arrayelement)
  } else if (elementtype === "string") {
    elementblock = parsearraystring(arrayelement)
  } else if (Array.isArray(arrayelement)) {
    elementblock = parsearrayarray(arrayelement)
  } else if (elementtype === "object") {
    elementblock = parsearrayobject(arrayelement)
  }
  return elementblock
}

function parserootarray(arrayjson) {
  var block = createemptyblock()
  block.type = "rootarray"
  block.x = 20
  block.y = 20
  block.inputs = {}
  var arraylength = arrayjson.length
  if (arraylength > 0) {
    block.inputs.arg1 = {}
    var predecessor = block.inputs.arg1
    for (var i = 0; i < arraylength; i++) {
      var arrayelement = arrayjson[i]
      var elementblock = parsearrayelement(arrayelement)
      if (elementblock !== undefined) {
        predecessor.block = elementblock
        var maxindex = arraylength - 1
        if (i < maxindex) {
          elementblock.next = {}
          predecessor = elementblock.next
        }
      }
    }
  }
  return block
}

function parserootstring(stringjson) {
  var block = createemptyblock()
  block.type = "rootstring"
  block.x = 20
  block.y = 20
  block.fields = {}
  var escapedstring = stringjson.replace("\n", "\\n")
  block.fields.arg1 = escapedstring
  return block
}

function parserootvalue(valuejson) {
  var block = createemptyblock()
  block.type = "rootvalue"
  block.x = 20
  block.y = 20
  block.fields = {}
  if (valuejson === null) {
    block.fields.arg1 = "null"
  } else {
    block.fields.arg1 = valuejson
  }
  return block
}

// Required entry point for parsing JSON files
export async function parse(filecontent) {

  // Do nothing with empty files
  if (!filecontent) {
    return
  }
  
  // Prepare Blockly definition
  var blockdef = {}
  blockdef.blocks = {}
  blockdef.blocks.languageVersion = 0
  blockdef.blocks.blocks = []

  // Parse file content as JSON object
  var json = JSON.parse(filecontent)  
  var roottype = typeof(json)
  if (roottype === "number" || roottype === "boolean" || json === null) {
    var rootvalueblock = parserootvalue(json)
    blockdef.blocks.blocks.push(rootvalueblock)
  } else if (roottype === "string") {
    var rootstringblock = parserootstring(json)
    blockdef.blocks.blocks.push(rootstringblock)
  } else if (Array.isArray(json)) {
    var rootarrayblock = parserootarray(json)
    blockdef.blocks.blocks.push(rootarrayblock)
  } else if (roottype === "object" && !!json) { // Ignore null as root element
    var rootobjectblock = parserootobject(json)
    blockdef.blocks.blocks.push(rootobjectblock)
  }
  
  return blockdef
  
}