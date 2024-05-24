function generateobject(block) {
  var json = {}
  if (block.inputs) {
    var next = undefined
    if (block.type === "rootobject" || block.type === "arrayobject") {
      next = block.inputs.arg1
    } else if (block.type === "objectobject") {
      next = block.inputs.arg2
    }
    while (next) {
      var nextblock = next.block
      next = nextblock.next
      var key = nextblock.fields.arg1
      var childjson = undefined
      if (nextblock.type === "objectobject") {
        childjson = generateobject(nextblock)
      } else if (nextblock.type === "objectarray") {
        childjson = generatearray(nextblock)
      } else if (nextblock.type === "objectstring") {
        childjson = generatestring(nextblock)
      } else if (nextblock.type === "objectvalue") {
        childjson = generatevalue(nextblock)
      }
      if (childjson !== undefined) {
        json[key] = childjson
      }
    }
  }
  return json
}

function generatearray(block) {
  var json = []
  if (block.inputs) {
    var next = undefined
    if (block.type === "rootarray" || block.type === "arrayarray") {
      next = block.inputs.arg1
    } else if (block.type === "objectarray") {
      next = block.inputs.arg2
    }
    while (next) {
      var nextblock = next.block
      next = nextblock.next
      var childjson = undefined
      if (nextblock.type === "arrayobject") {
        childjson = generateobject(nextblock)
      } else if (nextblock.type === "arrayarray") {
        childjson = generatearray(nextblock)
      } else if (nextblock.type === "arraystring") {
        childjson = generatestring(nextblock)
      } else if (nextblock.type === "arrayvalue") {
        childjson = generatevalue(nextblock)
      }
      if (childjson !== undefined) {
        json.push(childjson)
      }
    }
  }
  return json
}

function generatestring(block) {
  var resultstring = undefined
  if (block.type === "rootstring" || block.type === "arraystring") {
    resultstring = block.fields.arg1
  } else if (block.type === "objectstring") {
    resultstring = block.fields.arg2
  }
  var unescapedstring = resultstring.replace("\\n", "\n")
  return unescapedstring
}

function generatevalue(block) {
  var value = undefined
  if (block.type === "rootvalue" || block.type === "arrayvalue") {
    value = JSON.parse(block.fields.arg1)
  } else if (block.type === "objectvalue") {
    value = JSON.parse(block.fields.arg2)
  }
  return value
}

export function generate(state) {
  
  if (!state.blocks) {
    return
  }
  
  var allrootblocks = state.blocks.blocks
  if (allrootblocks.length < 1) {
    return
  }
  
  var firstrootblock = allrootblocks[0]
  var json = undefined
  if (firstrootblock.type === "rootobject") {
    json = generateobject(firstrootblock)
  } else if (firstrootblock.type === "rootarray") {
    json = generatearray(firstrootblock)
  } else if (firstrootblock.type === "rootstring") {
    json = generatestring(firstrootblock)
  } else if (firstrootblock.type === "rootvalue") {
    json = generatevalue(firstrootblock)
  }
  
  if (json !== undefined) {
    var code = JSON.stringify(json, null, "  ")
    return code
  }
  
}