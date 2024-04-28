const htmlgenerator = new Blockly.Generator('html')

htmlgenerator.scrub_ = function(block, code) {
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock()
    var nextCode = htmlgenerator.blockToCode(nextBlock)
    return code + nextCode
}

htmlgenerator.forBlock["html_div"] = function(block) {
    const divcontent = htmlgenerator.statementToCode(block, "div")
    return `<div>${divcontent}</div>`
}

htmlgenerator.forBlock["html_html"] = function(block) {
    const headcontent = htmlgenerator.statementToCode(block, "head")
    const bodycontent = htmlgenerator.statementToCode(block, "body")
    console.log(bodycontent)
    return `<!DOCTYPE html><html><head>${headcontent}</head><body>${bodycontent}</body></html>`
}

htmlgenerator.forBlock["html_title"] = function(block) {
    const title = block.getFieldValue("title")
    return `<title>${title}</title>`
}

export default htmlgenerator