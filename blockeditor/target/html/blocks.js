
Blockly.Blocks["html_div"] = {
    init: function() {
        this.jsonInit({
            message0: "div %1",
            args0: [
                { type: "input_statement", name: "div", check: [ "bodyelement" ] },
            ],
            previousStatement: [ "bodyelement" ],
            nextStatement: [ "bodyelement" ],
            colour: "#5da45e"
        })
    }
}

Blockly.Blocks["html_html"] = {
    init: function() {
        this.jsonInit({
            message0: "html %1 head %2 body %3",
            args0: [
                { type: "input_dummy" },
                { type: "input_statement", name: "head", check: [ "headelement" ] },
                { type: "input_statement", name: "body", check: [ "bodyelement" ] },
            ],
            colour: "#985da3"
        })
    }
}

Blockly.Blocks["html_title"] = {
    init: function() {
        this.jsonInit({
            message0: "title %1",
            args0: [
                { type: "field_input", name: "title" },
            ],
            previousStatement: [ "headelement" ],
            nextStatement: [ "headelement" ],
            colour: "#5da48c"
        })
    }
}
