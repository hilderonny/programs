export var block = {
  message: "Block name %1 type %2 color %3 \n message %4 \n arguments %5 \n template %6",
  arguments: [
  { type: "text" },
  { type: "select", elements: [
    { label: "Output", value: "output" },
    { label: "Process", value: "process" },
    { label: "Step", value: "step" },
   ] },
  { type: "color" },
  { type: "text" },
  { type: "statements" },
  { type: "statements" },
],
  color: "#ff6666",
  type: "process",
  template: [
  "export var ",
  1,
  " = { message: \"",
  4,
  "\", arguments: [ ",
  5,
  "], color: \"",
  3,
  "\", type: \"",
  2,
  "\", template: [",
  6,
  "], }; ",
]
}

export var block_argument_boolean = {
  message: "Boolean",
  arguments: [
],
  color: "#33ccff",
  type: "step",
  template: [
  "{ type: \"boolean\", }, ",
]
}

export var block_argument_statements = {
  message: "Statements",
  arguments: [
],
  color: "#33ccff",
  type: "step",
  template: [
  "{ type: \"statements\", }, ",
]
}

export var block_template_text = {
  message: "Text %1",
  arguments: [
  { type: "text" },
],
  color: "#33cc00",
  type: "step",
  template: [
  "\"",
  1,
  "\", ",
]
}

export var block_argument_color = {
  message: "Color",
  arguments: [
],
  color: "#33ccff",
  type: "step",
  template: [
  "{ type: \"color\", }, ",
]
}

export var block_argument_text = {
  message: "Text",
  arguments: [
],
  color: "#33ccff",
  type: "step",
  template: [
  "{ type: \"text\", }, ",
]
}

export var block_template_argument = {
  message: "Argument %1",
  arguments: [
  { type: "text" },
],
  color: "#33ccff",
  type: "step",
  template: [
  1,
  ", ",
]
}

export var block_argument_input = {
  message: "Input",
  arguments: [
],
  color: "#33ccff",
  type: "step",
  template: [
  "{ type: \"input\", }, ",
]
}

export var block_argument_select_label = {
  message: "Label %1 value %2",
  arguments: [
  { type: "text" },
  { type: "text" },
],
  color: "#ff9900",
  type: "step",
  template: [
  "{ label: \"",
  1,
  "\", value: \"",
  2,
  "\", }, ",
]
}

export var block_argument_select = {
  message: "Select \n elements %1",
  arguments: [
  { type: "statements" },
],
  color: "#33ccff",
  type: "step",
  template: [
  "{ type: \"select\", elements: [ ",
  1,
  "], }, ",
]
}

export var toolbox = {
  message: "Toolbox type %1 \n commenttype %2 \n elements %3",
  arguments: [
  { type: "select", elements: [
    { label: "Fly Out", value: "flyoutToolbox" },
    { label: "Category", value: "categoryToolbox" },
   ] },
  { type: "select", elements: [
    { label: "JavaScript", value: "javascript" },
    { label: "HTML", value: "html" },
   ] },
  { type: "statements" },
],
  color: "#ff6666",
  type: "process",
  template: [
  "export var toolbox = { type: \"",
  1,
  "\", commenttype: \"",
  2,
  "\", elements: [",
  3,
  "], }; ",
]
}

export var toolbox_block = {
  message: "Block library %1 name %2",
  arguments: [
  { type: "text" },
  { type: "text" },
],
  color: "#33ccff",
  type: "step",
  template: [
  "{ type: \"block\", library: \"",
  1,
  "\", name: \"",
  2,
  "\", }, ",
]
}

export var toolbox_category = {
  message: "Category name %1 color %2 \n elements %3",
  arguments: [
  { type: "text" },
  { type: "text" },
  { type: "statements" },
],
  color: "#ff9900",
  type: "step",
  template: [
  "{ type: \"category\", name: \"",
  1,
  "\", color: \"",
  2,
  "\", elements: [ ",
  3,
  "], }, ",
]
}

export var toolbox_separator = {
  message: "Separator text %1",
  arguments: [
  { type: "text" },
],
  color: "#999999",
  type: "step",
  template: [
  "{ type: \"separator\", text: \"",
  1,
  "\", }, ",
]
}

//BLOCKDEF{"blocks":{"languageVersion":0,"blocks":[{"type":"block","id":"0b#/V`3Z#%BTi3O$kX;a","x":45,"y":55,"fields":{"arg1":"block","arg2":"process","arg3":"#ff6666","arg4":"Block name %1 type %2 color %3 \\n message %4 \\n arguments %5 \\n template %6"},"inputs":{"arg5":{"block":{"type":"block_argument_text","id":"Jc-W59~~8^[/i9X#~)J:","next":{"block":{"type":"block_argument_select","id":"sB}(_V9%WJl/Phe`j**K","inputs":{"arg1":{"block":{"type":"block_argument_select_label","id":"#L{3%vfhrFbt!._4uZ`S","fields":{"arg1":"Output","arg2":"output"},"next":{"block":{"type":"block_argument_select_label","id":"HWmtea`5LnZKF(V7we[c","fields":{"arg1":"Process","arg2":"process"},"next":{"block":{"type":"block_argument_select_label","id":"cUMoy4IPI;U;dzgs`WHP","fields":{"arg1":"Step","arg2":"step"}}}}}}}},"next":{"block":{"type":"block_argument_color","id":"yQO*Edrt`y{fU4vSb~w=","next":{"block":{"type":"block_argument_text","id":"AL8T#KMt/*J+;7VzI~JC","next":{"block":{"type":"block_argument_statements","id":"dq0cd*:AR-v}ojtShvg`","next":{"block":{"type":"block_argument_statements","id":"P|P3%_9`zw5zAcywGwp3"}}}}}}}}}}}},"arg6":{"block":{"type":"block_template_text","id":"%44!Hn!+xnj-Z_p3,pX8","fields":{"arg1":"export var "},"next":{"block":{"type":"block_template_argument","id":"S^)#^#QNS^)11~hiC:+=","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"UT~r(jBN^xzA1l5+zLj*","fields":{"arg1":" = { message: \\\""},"next":{"block":{"type":"block_template_argument","id":",`b)nC-d=:0|%Y|a8q`e","fields":{"arg1":"4"},"next":{"block":{"type":"block_template_text","id":"A^?b6dNH~-2q:t:*X#KN","fields":{"arg1":"\\\", arguments: [ "},"next":{"block":{"type":"block_template_argument","id":"PR*x.Z{$OS6S3Rs/[VJ{","fields":{"arg1":"5"},"next":{"block":{"type":"block_template_text","id":"8EEIv])Rl,1X3smo/qr.","fields":{"arg1":"], color: \\\""},"next":{"block":{"type":"block_template_argument","id":"a6,hlrE18*TgYu=:%,vB","fields":{"arg1":"3"},"next":{"block":{"type":"block_template_text","id":"(F0#F%Uh3it@U{$]xbv*","fields":{"arg1":"\\\", type: \\\""},"next":{"block":{"type":"block_template_argument","id":"Y%J=*E$:jX`Zqw:Z#)!`","fields":{"arg1":"2"},"next":{"block":{"type":"block_template_text","id":"5.L9Khfb4ffdjW4Zv(Re","fields":{"arg1":"\\\", template: ["},"next":{"block":{"type":"block_template_argument","id":"2k/wvN8/`c^t:wACj66N","fields":{"arg1":"6"},"next":{"block":{"type":"block_template_text","id":"9__d]4n,[rAWO5vU^B:5","fields":{"arg1":"], }; "}}}}}}}}}}}}}}}}}}}}}}}}}}}}},{"type":"block","id":"WBl^|WoGt/K*l=;Pw=%R","x":45,"y":795,"fields":{"arg1":"toolbox","arg2":"process","arg3":"#ff6666","arg4":"Toolbox type %1 \\n commenttype %2 \\n elements %3"},"inputs":{"arg5":{"block":{"type":"block_argument_select","id":"N2tYEB,g}j-P=++Ke=Gj","inputs":{"arg1":{"block":{"type":"block_argument_select_label","id":"whKfoY6Ryz[XG*5nXdz~","fields":{"arg1":"Fly Out","arg2":"flyoutToolbox"},"next":{"block":{"type":"block_argument_select_label","id":"5Sb8-#3{qoHWh~@gg}5N","fields":{"arg1":"Category","arg2":"categoryToolbox"}}}}}},"next":{"block":{"type":"block_argument_select","id":"p$8z=-rA4!nDEQ0@6OZ[","inputs":{"arg1":{"block":{"type":"block_argument_select_label","id":"wk?Yl%e*XKqNH7G*;QP4","fields":{"arg1":"JavaScript","arg2":"javascript"},"next":{"block":{"type":"block_argument_select_label","id":"9th:IY*U6f7o$~WZ3mff","fields":{"arg1":"HTML","arg2":"html"}}}}}},"next":{"block":{"type":"block_argument_statements","id":"ur*HAbx]WiL`%EN^a8Ms"}}}}}},"arg6":{"block":{"type":"block_template_text","id":"F=wGeEGz+=D7|pdD{O7n","fields":{"arg1":"export var toolbox = { type: \\\""},"next":{"block":{"type":"block_template_argument","id":"zZe+xm_@!TxU*/RMN_CU","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"jLD(y4mFQYObG,Civ%)~","fields":{"arg1":"\\\", commenttype: \\\""},"next":{"block":{"type":"block_template_argument","id":"@vP/]M~G:6ewU(rE}]W@","fields":{"arg1":"2"},"next":{"block":{"type":"block_template_text","id":"8=|7/};$Mg5rv-mxoA3h","fields":{"arg1":"\\\", elements: ["},"next":{"block":{"type":"block_template_argument","id":"5t+DAtoUW3x*pIu%WOQ2","fields":{"arg1":"3"},"next":{"block":{"type":"block_template_text","id":"szUAhC{CQjH1!g}ke1%w","fields":{"arg1":"], }; "}}}}}}}}}}}}}}}}},{"type":"block","id":"yVX6MTiKr_K+#|11D~-l","x":525,"y":795,"fields":{"arg1":"toolbox_block","arg2":"step","arg3":"#33ccff","arg4":"Block library %1 name %2"},"inputs":{"arg5":{"block":{"type":"block_argument_text","id":"om][Yiv[`Jedy[$P{U2j","next":{"block":{"type":"block_argument_text","id":"E9wv%%N,b{U5w9,nqV!i"}}}},"arg6":{"block":{"type":"block_template_text","id":"8e%]A94c:yKCr=dc,V!I","fields":{"arg1":"{ type: \\\"block\\\", library: \\\""},"next":{"block":{"type":"block_template_argument","id":"Sf9-wA-=(R*NS{_q.BT{","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"i^^n6EzuQ3|sVl3|Eo5A","fields":{"arg1":"\\\", name: \\\""},"next":{"block":{"type":"block_template_argument","id":"jf+3;D{C4fSTK//D4!Dl","fields":{"arg1":"2"},"next":{"block":{"type":"block_template_text","id":"Ac=AE-zm-v]|PGP)ZL9~","fields":{"arg1":"\\\", }, "}}}}}}}}}}}}},{"type":"block","id":")*9(G;MFC#psyjY@qo_u","x":525,"y":1105,"fields":{"arg1":"toolbox_separator","arg2":"step","arg3":"#999999","arg4":"Separator text %1"},"inputs":{"arg5":{"block":{"type":"block_argument_text","id":"$N_]5H:G7gR2]=v0[rK`"}},"arg6":{"block":{"type":"block_template_text","id":"z`fKK=mBD:T3Yol.QV5j","fields":{"arg1":"{ type: \\\"separator\\\", text: \\\""},"next":{"block":{"type":"block_template_argument","id":"^`_J%BiF,1z4-QIYqIze","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"r5W9$xirbL:)}HAyL^(}","fields":{"arg1":"\\\", }, "}}}}}}}}},{"type":"block","id":"RWO$Dz,xp@V^^20fReg0","x":925,"y":795,"fields":{"arg1":"toolbox_category","arg2":"step","arg3":"#ff9900","arg4":"Category name %1 color %2 \\n elements %3"},"inputs":{"arg5":{"block":{"type":"block_argument_text","id":"MEMnfdke`n1dOdlCMg[a","next":{"block":{"type":"block_argument_text","id":"5X#_A-+1+Zbz@vc^W]Q=","next":{"block":{"type":"block_argument_statements","id":"7R!5,=E%B`,{?m~.ISLq"}}}}}},"arg6":{"block":{"type":"block_template_text","id":"HU1|h3ejXZMT]FwZ)}P|","fields":{"arg1":"{ type: \\\"category\\\", name: \\\""},"next":{"block":{"type":"block_template_argument","id":"7$SHDADZvy:m+h3bZ+Ob","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"8?b1Ig,+3g+g$y@)o3Pb","fields":{"arg1":"\\\", color: \\\""},"next":{"block":{"type":"block_template_argument","id":"wDDB}BSv3#{A]_%Y-VjB","fields":{"arg1":"2"},"next":{"block":{"type":"block_template_text","id":":M0._}8Ykz0jmUY_fYd;","fields":{"arg1":"\\\", elements: [ "},"next":{"block":{"type":"block_template_argument","id":"M:cV[RpcarA.rJ.|X?7`","fields":{"arg1":"3"},"next":{"block":{"type":"block_template_text","id":"xZ+e[+H%{*#nnw=c,m!;","fields":{"arg1":"], }, "}}}}}}}}}}}}}}}}},{"type":"block","id":"d.Kj(%95zs7Pk.)_@Z]r","x":525,"y":55,"fields":{"arg1":"block_argument_boolean","arg2":"step","arg3":"#33ccff","arg4":"Boolean"},"inputs":{"arg6":{"block":{"type":"block_template_text","id":"E?GTB/z^vQ)^.VJ|P9KK","fields":{"arg1":"{ type: \\\"boolean\\\", }, "}}}}},{"type":"block","id":"*hpQy2`wty,I]6AvM}1X","x":525,"y":215,"fields":{"arg1":"block_argument_color","arg2":"step","arg3":"#33ccff","arg4":"Color"},"inputs":{"arg6":{"block":{"type":"block_template_text","id":"Vr[fyxqMkT~0uEfFc0CP","fields":{"arg1":"{ type: \\\"color\\\", }, "}}}}},{"type":"block","id":"sRCow7j=M)MqfuG=7_XO","x":525,"y":375,"fields":{"arg1":"block_argument_input","arg2":"step","arg3":"#33ccff","arg4":"Input"},"inputs":{"arg6":{"block":{"type":"block_template_text","id":"F8Q9gjK9tqTX}28@RGBg","fields":{"arg1":"{ type: \\\"input\\\", }, "}}}}},{"type":"block","id":"P41{;yrno/8(+Eo[^^xt","x":525,"y":535,"fields":{"arg1":"block_argument_select","arg2":"step","arg3":"#33ccff","arg4":"Select \\n elements %1"},"inputs":{"arg5":{"block":{"type":"block_argument_statements","id":"z4x@J1SI)W(i];YH2n%]"}},"arg6":{"block":{"type":"block_template_text","id":"A,=[K+qh85iDz?!~EXk1","fields":{"arg1":"{ type: \\\"select\\\", elements: [ "},"next":{"block":{"type":"block_template_argument","id":"eSm=.!G`4_($qXmRbB+v","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"s1CJ0Z~kddB@U)Ep#i(L","fields":{"arg1":"], }, "}}}}}}}}},{"type":"block","id":"]d_r-uO@Ex4TK*i,?DUh","x":1005,"y":55,"fields":{"arg1":"block_argument_statements","arg2":"step","arg3":"#33ccff","arg4":"Statements"},"inputs":{"arg6":{"block":{"type":"block_template_text","id":"Ju`Jv?FjET^C:Q0dB4^p","fields":{"arg1":"{ type: \\\"statements\\\", }, "}}}}},{"type":"block","id":"%=X9kjp-/0JcR[of|b#c","x":1005,"y":215,"fields":{"arg1":"block_argument_text","arg2":"step","arg3":"#33ccff","arg4":"Text"},"inputs":{"arg6":{"block":{"type":"block_template_text","id":"0r,.pQg]WRe7^9E~R;gC","fields":{"arg1":"{ type: \\\"text\\\", }, "}}}}},{"type":"block","id":"cK*D4dX^ZE1-5(Hef=k!","x":1005,"y":375,"fields":{"arg1":"block_argument_select_label","arg2":"step","arg3":"#ff9900","arg4":"Label %1 value %2"},"inputs":{"arg5":{"block":{"type":"block_argument_text","id":"qba:92sj#[^zop?g:pQ^","next":{"block":{"type":"block_argument_text","id":"gzJ1RG_9L92h=1=)uW#l"}}}},"arg6":{"block":{"type":"block_template_text","id":"pjzF3AbSXLV_3kY3QR;c","fields":{"arg1":"{ label: \\\""},"next":{"block":{"type":"block_template_argument","id":"4-bCLrcaI1bvtEIS?f#3","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"%Jy%fX,};(5(Lu[ylgsU","fields":{"arg1":"\\\", value: \\\""},"next":{"block":{"type":"block_template_argument","id":"55uEQIWI)VY%C0d,EY=G","fields":{"arg1":"2"},"next":{"block":{"type":"block_template_text","id":";E$Ixn8bZ=|Y~uyHdB0Y","fields":{"arg1":"\\\", }, "}}}}}}}}}}}}},{"type":"block","id":"$u|!lmmG`H{bek#f$9+1","x":1495,"y":55,"fields":{"arg1":"block_template_text","arg2":"step","arg3":"#33cc00","arg4":"Text %1"},"inputs":{"arg5":{"block":{"type":"block_argument_text","id":":brNH+D!iV750n%`^{lj"}},"arg6":{"block":{"type":"block_template_text","id":"10{QcVtq=gvBu[;0)N):","fields":{"arg1":"\\\""},"next":{"block":{"type":"block_template_argument","id":"f^Hh.6I76y}?=~Hb0.c(","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"d|C[H}{zKN8QQ-1Z,J4]","fields":{"arg1":"\\\", "}}}}}}}}},{"type":"block","id":"85h$Xv`EKORm07bE3Iu,","x":1495,"y":275,"fields":{"arg1":"block_template_argument","arg2":"step","arg3":"#33ccff","arg4":"Argument %1"},"inputs":{"arg5":{"block":{"type":"block_argument_text","id":"`mT1|lY8o|CmE]0@*YM6"}},"arg6":{"block":{"type":"block_template_argument","id":"8Q+?4A/X[c0gxRC=S*4,","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"P3FoKOALwN@6}C@Z{*BI","fields":{"arg1":", "}}}}}}}]},"toolbox":"blockly_toolbox"}