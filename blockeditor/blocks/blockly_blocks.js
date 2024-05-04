
export var block = {
  message: "Block name %1 type %2 color %3 \n message %4 \n arguments %5 \n template %6",
  arguments: [
    { type: "text" },
    { type: "select", elements: [ { label: "Output", value: "output" }, { label: "Process", value: "process" }, { label: "Step", value: "step" }, ] },
    { type: "color" },
    { type: "text" },
    { type: "statements" },
    { type: "statements" },
  ],
  color: "#e57373",
  type: "process",
  template: [
    "export var ", 1, " = {\n",
    "  message: \"", 4, "\",\n",
    "  arguments: [\n", 5, "]\n",
    "  message: \"", 3, "\",\n",
    "  message: \"", 2, "\",\n",
    "  elements: [\n", 6, "]\n",
    "}\n",
  ]
}

export var block_argument_boolean = {
  message: "Boolean",
  arguments: [
  ],
  color: "#64b5f6",
  type: "step",
  template: [
    "{ type: \"boolean\" },\n",
  ]
}

export var block_argument_input = {
  message: "Input",
  arguments: [
  ],
  color: "#64b5f6",
  type: "step",
  template: [
    "{ type: \"input\" },\n",
  ]
}

export var block_argument_select_label = {
  message: "Label %1 value %2",
  arguments: [
    { type: "text" },
    { type: "text" },
  ],
  color: "#f9a825",
  type: "step",
  template: [
    "{ label: \"", 1, "\", value: \"", 2, "\" },\n",
  ]
}

export var block_argument_select = {
  message: "Select \n elements %1",
  arguments: [
    { type: "statements" },
  ],
  color: "#64b5f6",
  type: "step",
  template: [
    "{ type: \"select\", elements: [\n", 1, " ] },\n",
  ]
}

export var block_argument_statements = {
  message: "Statements",
  arguments: [
  ],
  color: "#64b5f6",
  type: "step",
  template: [
    "{ type: \"statements\" },\n",
  ]
}

export var block_argument_text = {
  message: "Text",
  arguments: [
  ],
  color: "#64b5f6",
  type: "step",
  template: [
    "{ type: \"text\" },\n",
  ]
}

export var block_template_argument = {
  message: "Argument %1",
  arguments: [
    { type: "text" },
  ],
  color: "#64b5f6",
  type: "step",
  template: [
    1, ",\n",
  ]
}

export var block_template_text = {
  message: "Text %1",
  arguments: [
    { type: "text" },
  ],
  color: "#81c784",
  type: "step",
  template: [
    "\"", 1, "\",\n",
  ]
}

export var toolbox = {
  message: "Toolbox type %1 \n commenttype %2 \n elements %3",
  arguments: [
    { type: "select", elements: [ { label: "Flyout", value: "flyoutToolbox" }, ] },
    { type: "select", elements: [ { label: "Javascript", value: "javascript" }, { label: "HTML", value: "html" }, ] },
    { type: "statements" },
  ],
  color: "#e57373",
  type: "process",
  template: [
    "var toolbox = {\n",
    "  type: \"", 1, "\",\n",
    "  commenttype: \"", 2, "\",\n",
    "  elements: [\n", 3, "]\n",
    "}\n",
    "export { toolbox }\n"
  ]
}

export var toolbox_block = {
  message: "Block library %1 name %2",
  arguments: [
    { type: "text" },
    { type: "text" },
  ],
  color: "#64b5f6",
  type: "step",
  template: [
    "{ type: \"block\", library: \"", 1, "\", name: \"", 2, "\" },\n",
  ]
}

export var toolbox_category = {
  message: "Category name %1 \n elements %2",
  arguments: [
    { type: "text" },
    { type: "statements" },
  ],
  color: "#f9a825",
  type: "step",
  template: [
    "{ type: \"category\", name: \"", 1, "\", elements: [ ", 2, " ] },\n",
  ]
}

export var toolbox_separator = {
  message: "Separator text %1",
  arguments: [
    { type: "text" },
  ],
  color: "#9E9E9E",
  type: "step",
  template: [
    "{ type: \"separator\", text: \"", 1, "\" },\n",
  ]
}
