export var module_export = { message: "Export %1", arguments: [   { type: "input", }, ], color: "#990000", type: "step", template: [  "export ", 1, ";", ], };
export var function_definition = { message: "Function %1\n%2", arguments: [   { type: "input", }, { type: "statements", }, ], color: "#cc6600", type: "output", template: [  "async function(", 1, "){", 2, "}", ], };
export var variable_initialize = { message: "Initialize %1 with %2", arguments: [   { type: "text", }, { type: "input", }, ], color: "#cc9933", type: "step", template: [  "var ", 1, "=", 2, ";", ], };
export var value_null = { message: "Null", arguments: [ ], color: "#999900", type: "output", template: [  "null", ], };
export var loop_foreach = { message: "For each %1 in %2 %3", arguments: [   { type: "text", }, { type: "input", }, { type: "statements", }, ], color: "#009900", type: "step", template: [  "for(var ", 1, " of ", 2, "){", 3, "};", ], };
export var logic_add = { message: "(%1+%2)", arguments: [   { type: "input", }, { type: "input", }, ], color: "#339999", type: "output",  inline: true,template: [  "(", 1, " + ", 2, ") ", ], };
export var condition_if = { message: "if %1 %2", arguments: [   { type: "input", }, { type: "statements", }, ], color: "#3333ff", type: "step", template: [  "if (", 1, ") {", 2, "};", ], };
export var other_comment = { message: "Comment %1", arguments: [   { type: "multilinetext", }, ], color: "#cccccc", type: "step", template: [  "/*", 1, "*/", ], };
export var value_object = { message: "Object %1", arguments: [   { type: "statements", }, ], color: "#999900", type: "output", template: [  "{", 1, "}", ], };
export var function_definition_with_name = { message: "Function %1 %2\n%3", arguments: [   { type: "text", }, { type: "input", }, { type: "statements", }, ], color: "#cc6600", type: "output", template: [  "async function ", 1, "(", 2, "){", 3, "}", ], };
export var logic_equals = { message: "%1 = %2", arguments: [   { type: "input", }, { type: "input", }, ], color: "#339999", type: "output",  inline: true,template: [  1, "===", 2, ], };
export var value_object_attribute = { message: "Attribute %1 %2", arguments: [   { type: "text", }, { type: "input", }, ], color: "#999900", type: "step", template: [  1, ":", 2, ",", ], };
export var condition_if_elseif = { message: "if %1 %2 elseif %3 %4", arguments: [   { type: "input", }, { type: "statements", }, { type: "input", }, { type: "statements", }, ], color: "#3333ff", type: "step", template: [  "if (", 1, ") {", 2, "} else if (", 3, ") {", 4, "};", ], };
export var variable_set = { message: "Set %1 to %2", arguments: [   { type: "input", }, { type: "input", }, ], color: "#cc9933", type: "step",  inline: true,template: [  1, "=", 2, ";", ], };
export var loop_foreach_entry = { message: "For each %1,%2 in %3 %4", arguments: [   { type: "text", }, { type: "text", }, { type: "input", }, { type: "statements", }, ], color: "#009900", type: "step", template: [  "for(var [", 1, ", ", 2, "] of ", 3, ".entries()){", 4, "};", ], };
export var function_parameter = { message: "Parameter %1 %2", arguments: [   { type: "text", }, { type: "input", }, ], color: "#ff9900", type: "output", template: [  1, ",", 2, ], };
export var value_text = { message: "„%1“", arguments: [   { type: "text", }, ], color: "#999900", type: "output", template: [  "\"", 1, "\"", ], };
export var value_variable = { message: "Variable %1", arguments: [   { type: "text", }, ], color: "#999900", type: "output", template: [  1, ], };
export var function_array_push = { message: "Push %1 to %2", arguments: [   { type: "input", }, { type: "input", }, ], color: "#cc6600", type: "step",  inline: true,template: [  2, ".push(", 1, ");", ], };
export var condition_switch = { message: "switch %1 %2", arguments: [   { type: "input", }, { type: "statements", }, ], color: "#3333ff", type: "step", template: [  "switch (", 1, ") {", 2, "};", ], };
export var value_property = { message: "Property %1 of %2", arguments: [   { type: "text", }, { type: "input", }, ], color: "#ffcc00", type: "output", template: [  2, ".", 1, ], };
export var function_return = { message: "Return %1", arguments: [   { type: "input", }, ], color: "#cc6600", type: "step", template: [  "return ", 1, ], };
export var condition_case = { message: "case %1 %2", arguments: [   { type: "input", }, { type: "statements", }, ], color: "#33ccff", type: "step", template: [  "case ", 1, ": ", 2, " break;", ], };
export var value_empty_array = { message: "Empty array", arguments: [ ], color: "#999900", type: "output", template: [  "[]", ], };
export var value_boolean = { message: "%1", arguments: [   { type: "select", elements: [   { label: "True", value: "true", }, { label: "False", value: "false", }, ], }, ], color: "#999900", type: "output", template: [  1, ], };
export var value_constant = { message: "Constant %1", arguments: [   { type: "text", }, ], color: "#999900", type: "output", template: [  1, ], };
export var value_element_of = { message: "Element %1 of %2", arguments: [   { type: "input", }, { type: "input", }, ], color: "#999900", type: "output",  inline: true,template: [  2, "[", 1, "]", ], };
export var value_typeof = { message: "Type of %1", arguments: [   { type: "input", }, ], color: "#999900", type: "output",  inline: true,template: [  " typeof(", 1, ")", ], }; 
//BLOCKDEF{"blocks":{"languageVersion":0,"blocks":[{"type":"block","id":")JKbX:}nh6~`O^N{FH8W","x":1695,"y":655,"fields":{"arg1":"value_text","arg2":"output","arg3":"#999900","arg7":false,"arg4":"„%1“"},"inputs":{"arg5":{"block":{"type":"block_argument_text","id":"@OI|V$:_($5ZKRK]gAOR"}},"arg6":{"block":{"type":"block_template_text","id":"]fCIu,T($E}X2a07hH,O","fields":{"arg1":"\\\""},"next":{"block":{"type":"block_template_argument","id":"vT$eOJv11Tb=;8hijl5D","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"mK.ktk0Mrx3e67pc!b^?","fields":{"arg1":"\\\""}}}}}}}}},{"type":"block","id":"IJra,B]`mP^Gt+N`HB:X","x":1695,"y":1635,"fields":{"arg1":"value_constant","arg2":"output","arg3":"#999900","arg7":false,"arg4":"Constant %1"},"inputs":{"arg5":{"block":{"type":"block_argument_text","id":"D4Tg_f33n{APRDFy;x5f"}},"arg6":{"block":{"type":"block_template_argument","id":"5H}:U5rLSX!_o~tgPp:h","fields":{"arg1":"1"}}}}},{"type":"block","id":"bcvLKndP_~Qa[BQ2,hQ`","x":1695,"y":865,"fields":{"arg1":"value_variable","arg2":"output","arg3":"#999900","arg7":false,"arg4":"Variable %1"},"inputs":{"arg5":{"block":{"type":"block_argument_text","id":"+k]rMJWLWrzJ?%k`VG(_"}},"arg6":{"block":{"type":"block_template_argument","id":"8VAMUz8UWF^Aok8Mg9^p","fields":{"arg1":"1"}}}}},{"type":"block","id":"g%;eviOP.jvNT~^w]7(G","x":1695,"y":1025,"fields":{"arg1":"value_property","arg2":"output","arg3":"#ffcc00","arg7":false,"arg4":"Property %1 of %2"},"inputs":{"arg5":{"block":{"type":"block_argument_text","id":"]JPyUwL~quisvLH|:ma[","next":{"block":{"type":"block_argument_input","id":"w$[f(kzzQmUaL1o)Gy%%"}}}},"arg6":{"block":{"type":"block_template_argument","id":"u0xOMuiVRxQgh%SgEq8K","fields":{"arg1":"2"},"next":{"block":{"type":"block_template_text","id":"65HlZx+44AhHvCQcS=ni","fields":{"arg1":"."},"next":{"block":{"type":"block_template_argument","id":"SBX4%8`c[~q2.+$DLWE]","fields":{"arg1":"1"}}}}}}}}},{"type":"block","id":"@}|,CK-e3KNBZSo4[SyE","x":1695,"y":1265,"fields":{"arg1":"value_empty_array","arg2":"output","arg3":"#999900","arg7":false,"arg4":"Empty array"},"inputs":{"arg6":{"block":{"type":"block_template_text","id":"oc_kn7-CF2]HL~B]^ibJ","fields":{"arg1":"[]"}}}}},{"type":"block","id":"f8pW|[vIQKNVaKraJi0P","x":1695,"y":1415,"fields":{"arg1":"value_boolean","arg2":"output","arg3":"#999900","arg7":false,"arg4":"%1"},"inputs":{"arg5":{"block":{"type":"block_argument_select","id":"6V.zp._lAkf(!=I~bqDp","inputs":{"arg1":{"block":{"type":"block_argument_select_label","id":".s]7O(WJova^9jP71SLa","fields":{"arg1":"True","arg2":"true"},"next":{"block":{"type":"block_argument_select_label","id":"r{U3E^yrtH(_Z[Q8exss","fields":{"arg1":"False","arg2":"false"}}}}}}}},"arg6":{"block":{"type":"block_template_argument","id":"Q1^J](DnSfRD.GIA)[Kl","fields":{"arg1":"1"}}}}},{"type":"block","id":"KOk5))U;GyxKhN8aG{NQ","x":45,"y":45,"fields":{"arg1":"module_export","arg2":"step","arg3":"#990000","arg7":false,"arg4":"Export %1"},"inputs":{"arg5":{"block":{"type":"block_argument_input","id":"v`kP$~!_Dn4:?{:)`LCF"}},"arg6":{"block":{"type":"block_template_text","id":"S7:GVeL-`2SBR2_pUasu","fields":{"arg1":"export "},"next":{"block":{"type":"block_template_argument","id":",{!DZ.ndy!_.O{^@SO29","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"~QLZ~3~K)^qC4kXw3X=m","fields":{"arg1":";"}}}}}}}}},{"type":"block","id":"O[VsAzJ)OTgZaAy`duds","x":565,"y":45,"fields":{"arg1":"function_definition","arg2":"output","arg3":"#cc6600","arg7":false,"arg4":"Function %1\\n%2"},"inputs":{"arg5":{"block":{"type":"block_argument_input","id":"+zzR+QdD|TH.Oix-muRw","next":{"block":{"type":"block_argument_statements","id":"FX{}tKlb8_N`9SczC}-@"}}}},"arg6":{"block":{"type":"block_template_text","id":"X7Ff?nx}I99(O=ht+Ggq","fields":{"arg1":"async function("},"next":{"block":{"type":"block_template_argument","id":"?PD1[bns(p2zSZ9(ci)]","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"k.FfjI@M;{P:;S^RHB?^","fields":{"arg1":"){"},"next":{"block":{"type":"block_template_argument","id":"DeL|.lM+9F8;%4Z+F:{C","fields":{"arg1":"2"},"next":{"block":{"type":"block_template_text","id":"9e+Lx7}R[bK-58IoPaY{","fields":{"arg1":"}"}}}}}}}}}}}}},{"type":"block","id":"tYb.j++%B[n,]7j_o]yg","x":565,"y":695,"fields":{"arg1":"function_parameter","arg2":"output","arg3":"#ff9900","arg7":false,"arg4":"Parameter %1 %2"},"inputs":{"arg5":{"block":{"type":"block_argument_text","id":"f),h;aPA:5;|G2m(7iDN","next":{"block":{"type":"block_argument_input","id":"(@SPcq,meP]HkMFH?MtE"}}}},"arg6":{"block":{"type":"block_template_argument","id":"9x5D4_8Du}xf)h)9F11t","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"vP}mDO8Dc+m|w?mzezxn","fields":{"arg1":","},"next":{"block":{"type":"block_template_argument","id":"cvQ]7j)dciM@NvUR-OUx","fields":{"arg1":"2"}}}}}}}}},{"type":"block","id":"j9OyI?)Jk?4=Oa~CsTB1","x":565,"y":325,"fields":{"arg1":"function_definition_with_name","arg2":"output","arg3":"#cc6600","arg7":false,"arg4":"Function %1 %2\\n%3"},"inputs":{"arg5":{"block":{"type":"block_argument_text","id":"sx;7,$%OG^C9q-S{,NwB","next":{"block":{"type":"block_argument_input","id":"OAe)%9ZpIqXIS8W^AqO9","next":{"block":{"type":"block_argument_statements","id":"yMNV.{On~BwuS5CCe^Vt"}}}}}},"arg6":{"block":{"type":"block_template_text","id":"M4D9,e)Ve~0EvPFn,6Wf","fields":{"arg1":"async function "},"next":{"block":{"type":"block_template_argument","id":"iwTBSz7U]815W3Dd4k.p","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"lTvSra93(jdWy.x4kIRH","fields":{"arg1":"("},"next":{"block":{"type":"block_template_argument","id":"oEpT|0CPM.87Rlnw-4wP","fields":{"arg1":"2"},"next":{"block":{"type":"block_template_text","id":"^APP8W:NNu1EIK?yK^[f","fields":{"arg1":"){"},"next":{"block":{"type":"block_template_argument","id":"R92_wfBn6z0]Z{Slsn5r","fields":{"arg1":"3"},"next":{"block":{"type":"block_template_text","id":"v1{M?]0O:R`fTrpeO7.F","fields":{"arg1":"}"}}}}}}}}}}}}}}}}},{"type":"block","id":"r:C;s]+9;M5,m8Wx8-PL","x":1175,"y":45,"fields":{"arg1":"variable_initialize","arg2":"step","arg3":"#cc9933","arg7":false,"arg4":"Initialize %1 with %2"},"inputs":{"arg5":{"block":{"type":"block_argument_text","id":"Z.Lb7`-fg{ct7Miw0joy","next":{"block":{"type":"block_argument_input","id":"|h.zrNTVUQaD8tppY%5}"}}}},"arg6":{"block":{"type":"block_template_text","id":"n8_2];F?yK@(q1GnDzS^","fields":{"arg1":"var "},"next":{"block":{"type":"block_template_argument","id":"MAxi?49.x8sf;]H9=+J`","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"H:)tFoK8)?i;LhagF%j9","fields":{"arg1":"="},"next":{"block":{"type":"block_template_argument","id":"cEC+^|+5fC?d|3R;XpIZ","fields":{"arg1":"2"},"next":{"block":{"type":"block_template_text","id":"D!o_VsvPZE;t@v3nO-si","fields":{"arg1":";"}}}}}}}}}}}}},{"type":"block","id":"XW=oVBAbfS-7mTMZ{THH","x":1695,"y":45,"fields":{"arg1":"value_null","arg2":"output","arg3":"#999900","arg7":false,"arg4":"Null"},"inputs":{"arg6":{"block":{"type":"block_template_text","id":"]C|`q2](_w4hVOz%:gA5","fields":{"arg1":"null"}}}}},{"type":"block","id":"5zr1-y-R.LoGpw.S1peY","x":1695,"y":185,"fields":{"arg1":"value_object","arg2":"output","arg3":"#999900","arg7":false,"arg4":"Object %1"},"inputs":{"arg5":{"block":{"type":"block_argument_statements","id":"-^gVgaRh??{CEgRrv+{Z"}},"arg6":{"block":{"type":"block_template_text","id":"e[VVm0j;@G$_)M_bW_^[","fields":{"arg1":"{"},"next":{"block":{"type":"block_template_argument","id":"?WoWaNpwF0|SjYn=^%sM","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"yAVsNid2.C.yJ^DJHJAw","fields":{"arg1":"}"}}}}}}}}},{"type":"block","id":"fSAaasdCXO4`V,9kcPdo","x":1695,"y":395,"fields":{"arg1":"value_object_attribute","arg2":"step","arg3":"#999900","arg7":false,"arg4":"Attribute %1 %2"},"inputs":{"arg5":{"block":{"type":"block_argument_text","id":"hvO;wcw$8lU(T|c]]_d9","next":{"block":{"type":"block_argument_input","id":")lJ!OfXp^xQBr4sjk`Mo"}}}},"arg6":{"block":{"type":"block_template_argument","id":"5]b8[mEo)_ey~ALXQZh(","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"|SfScgTBEh%-HK9v?pG4","fields":{"arg1":":"},"next":{"block":{"type":"block_template_argument","id":"0l{74}:8dp8P+=Cl:vzK","fields":{"arg1":"2"},"next":{"block":{"type":"block_template_text","id":"~)CNxtV_Mczz]=!(Hi^^","fields":{"arg1":","}}}}}}}}}}},{"type":"block","id":"T]L}U)vzI~E~G]8ZVA=l","x":3815,"y":45,"fields":{"arg1":"other_comment","arg2":"step","arg3":"#cccccc","arg7":false,"arg4":"Comment %1"},"inputs":{"arg5":{"block":{"type":"block_argument_multilinetext","id":"{R.OFN@_KD;QqJi(`{Hn"}},"arg6":{"block":{"type":"block_template_text","id":"@n_D+mSo77AFm$G[}Ybd","fields":{"arg1":"/*"},"next":{"block":{"type":"block_template_argument","id":"bYO,sD31H`ZfV5:X=+:t","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"$.]{?+]bo^N1-n5eFLzV","fields":{"arg1":"*/"}}}}}}}}},{"type":"block","id":"d]STMyqC_l(~}Ou.~%Jv","x":2245,"y":45,"fields":{"arg1":"loop_foreach","arg2":"step","arg3":"#009900","arg7":false,"arg4":"For each %1 in %2 %3"},"inputs":{"arg5":{"block":{"type":"block_argument_text","id":"iY8lmH2f|!`!@}:)nuN5","next":{"block":{"type":"block_argument_input","id":"EnjqtZ8S;gKm54`D^XfU","next":{"block":{"type":"block_argument_statements","id":"]%:Ee9B5r4vrsb0N:W{V"}}}}}},"arg6":{"block":{"type":"block_template_text","id":"s7nU~-pP+Xho(hI@Y@`.","fields":{"arg1":"for(var "},"next":{"block":{"type":"block_template_argument","id":"EB!XH%vLI@X-E(A?Hc~c","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"E`S%{(m=w$Axrir(xWMx","fields":{"arg1":" of "},"next":{"block":{"type":"block_template_argument","id":"uX=7zqmsW!1L.iLma8-y","fields":{"arg1":"2"},"next":{"block":{"type":"block_template_text","id":"DEZvu4)fvkBK`R|{Xd|@","fields":{"arg1":"){"},"next":{"block":{"type":"block_template_argument","id":"~_n}(Jm)~d2-.;c|(JDs","fields":{"arg1":"3"},"next":{"block":{"type":"block_template_text","id":"]kdPGcb@L?dsMl0,Z0I$","fields":{"arg1":"};"}}}}}}}}}}}}}}}}},{"type":"block","id":"g8O]7H,geDrr4)w,}1x=","x":2745,"y":45,"fields":{"arg1":"logic_add","arg2":"output","arg3":"#339999","arg7":true,"arg4":"(%1+%2)"},"inputs":{"arg5":{"block":{"type":"block_argument_input","id":"CPj-z?{}C+HzET|$JT0~","next":{"block":{"type":"block_argument_input","id":"U2G~C]qpoIYT.FGy`~)T"}}}},"arg6":{"block":{"type":"block_template_text","id":"@uxy5Q59pmH2rH}{+:sF","fields":{"arg1":"("},"next":{"block":{"type":"block_template_argument","id":"jWJHsrwkl,hizNMu?1$[","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"gQi_WI5df.v2lB%c;E@i","fields":{"arg1":" + "},"next":{"block":{"type":"block_template_argument","id":"Nck7_x`0Pef[jll~7GYz","fields":{"arg1":"2"},"next":{"block":{"type":"block_template_text","id":"dgH[d%]Kk3,+V^vB$b~[","fields":{"arg1":") "}}}}}}}}}}}}},{"type":"block","id":":_]M8|du,~3_Gy~hGa1z","x":1695,"y":1795,"fields":{"arg1":"value_element_of","arg2":"output","arg3":"#999900","arg7":true,"arg4":"Element %1 of %2"},"inputs":{"arg5":{"block":{"type":"block_argument_input","id":"^:N6IEP?`E2aRqEDpF;i","next":{"block":{"type":"block_argument_input","id":"$Xd}z}x+w%4ymh6}WSQ["}}}},"arg6":{"block":{"type":"block_template_argument","id":"9~g7zPEOCy!R`:H0;K9v","fields":{"arg1":"2"},"next":{"block":{"type":"block_template_text","id":"[?xG^km|AoBd;BASS=[6","fields":{"arg1":"["},"next":{"block":{"type":"block_template_argument","id":"Fhx$cc19?_Wb+Ri0X_pB","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"bn+0:DR%hNsa8WTa:%?D","fields":{"arg1":"]"}}}}}}}}}}},{"type":"block","id":"KNSbpNTp}Zvm(9b_J%!@","x":3245,"y":45,"fields":{"arg1":"condition_if","arg2":"step","arg3":"#3333ff","arg7":false,"arg4":"if %1 %2"},"inputs":{"arg5":{"block":{"type":"block_argument_input","id":"9`}R,.t,@oE(xbx%R4Bn","next":{"block":{"type":"block_argument_statements","id":"J`Kc+Dn0po[zEgYzV{xm"}}}},"arg6":{"block":{"type":"block_template_text","id":"qJ(rV`.?$:?~yMDomtBs","fields":{"arg1":"if ("},"next":{"block":{"type":"block_template_argument","id":"jB~3i`N77f:gBQ~xJXWu","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"DB]Iz6]~M1Ny%2PA6[Ss","fields":{"arg1":") {"},"next":{"block":{"type":"block_template_argument","id":"L?`2f!J:jL[SdQMT-qfL","fields":{"arg1":"2"},"next":{"block":{"type":"block_template_text","id":"ixxnRrvCm`}g5.kMmlMy","fields":{"arg1":"};"}}}}}}}}}}}}},{"type":"block","id":"yN0!]ZL39e^dz4P2c?X5","x":2745,"y":335,"fields":{"arg1":"logic_equals","arg2":"output","arg3":"#339999","arg7":true,"arg4":"%1 = %2"},"inputs":{"arg5":{"block":{"type":"block_argument_input","id":"2TsE|i6avjP|`6%v.Xt[","next":{"block":{"type":"block_argument_input","id":"~2mr:9]rH-g^un)szMxd"}}}},"arg6":{"block":{"type":"block_template_argument","id":"ywvPRydoS.w[Z5YsFe,L","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"GYeb{${(ERVds3xhLg0Q","fields":{"arg1":"==="},"next":{"block":{"type":"block_template_argument","id":"d+ymUblN5@b7UopKP$78","fields":{"arg1":"2"}}}}}}}}},{"type":"block","id":"jUr{{9Z)Us=cNaE(fKr@","x":2245,"y":505,"fields":{"arg1":"loop_foreach_entry","arg2":"step","arg3":"#009900","arg7":false,"arg4":"For each %1,%2 in %3 %4"},"inputs":{"arg5":{"block":{"type":"block_argument_text","id":"d:PmMM^O1b9gYh71n94N","next":{"block":{"type":"block_argument_text","id":",I.w[AC]iC}zQUe@4`+W","next":{"block":{"type":"block_argument_input","id":"2q0w-$fZT0z~4y6Uc3DU","next":{"block":{"type":"block_argument_statements","id":"O,8XbnTwet{xQE[Z?Af`"}}}}}}}},"arg6":{"block":{"type":"block_template_text","id":"|KToN8zys:Xs0JH6i}xQ","fields":{"arg1":"for(var ["},"next":{"block":{"type":"block_template_argument","id":"%l8yG0UFM=K^AyZiN!ac","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"BmTi`a3POVgCE;~VlKuX","fields":{"arg1":", "},"next":{"block":{"type":"block_template_argument","id":"_o4mbZV;z-^IQO?~ELWa","fields":{"arg1":"2"},"next":{"block":{"type":"block_template_text","id":"Xp!jZ%X27,q_FYQWfWO+","fields":{"arg1":"] of "},"next":{"block":{"type":"block_template_argument","id":"Xh1LqgS|JPzX:xR8g+x7","fields":{"arg1":"3"},"next":{"block":{"type":"block_template_text","id":"wM6:Su$U02]wA@65]esk","fields":{"arg1":".entries()){"},"next":{"block":{"type":"block_template_argument","id":"FW?{u-VH(mnD1l;I+%H%","fields":{"arg1":"4"},"next":{"block":{"type":"block_template_text","id":"|W2KY;X;UhVQo6N_h[wn","fields":{"arg1":"};"}}}}}}}}}}}}}}}}}}}}},{"type":"block","id":"871s+g%)7LCZD`f;G2r|","x":565,"y":925,"fields":{"arg1":"function_array_push","arg2":"step","arg3":"#cc6600","arg7":true,"arg4":"Push %1 to %2"},"inputs":{"arg5":{"block":{"type":"block_argument_input","id":"8yf,wC%)VCorL%TOT%pZ","next":{"block":{"type":"block_argument_input","id":"BWD,Sktic4MXok]Wjis{"}}}},"arg6":{"block":{"type":"block_template_argument","id":"i)Edp,w^tUPS2by(2:g}","fields":{"arg1":"2"},"next":{"block":{"type":"block_template_text","id":"mC7VhgAiCJ97.JU3Pc-A","fields":{"arg1":".push("},"next":{"block":{"type":"block_template_argument","id":"wz:qD^^i8}S+{Z~y|nss","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"gS!f0}XHic,ix{^HdWIA","fields":{"arg1":");"}}}}}}}}}}},{"type":"block","id":"d5r=_L0SV`;Dkd8b)Zl5","x":1175,"y":485,"fields":{"arg1":"variable_set","arg2":"step","arg3":"#cc9933","arg7":true,"arg4":"Set %1 to %2"},"inputs":{"arg5":{"block":{"type":"block_argument_input","id":"{QHfJ@TuY$Vq79k]a~Bu","next":{"block":{"type":"block_argument_input","id":"p=W2e_w!Yc9$w9pw8fL@"}}}},"arg6":{"block":{"type":"block_template_argument","id":"Si%fIy`f~-(U.QYZ2=LS","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"3OB+$Vs,iRzP@:n48wIU","fields":{"arg1":"="},"next":{"block":{"type":"block_template_argument","id":"}:rDrWEBZQv685lc4GWp","fields":{"arg1":"2"},"next":{"block":{"type":"block_template_text","id":"`-2cX.spT6[|{lSIz@1|","fields":{"arg1":";"}}}}}}}}}}},{"type":"block","id":"(,;jk!mr?QWvpB!aOGl^","x":3245,"y":335,"fields":{"arg1":"condition_if_elseif","arg2":"step","arg3":"#3333ff","arg7":false,"arg4":"if %1 %2 elseif %3 %4"},"inputs":{"arg5":{"block":{"type":"block_argument_input","id":"b%DdO4nS?|[R.?8$HU5C","next":{"block":{"type":"block_argument_statements","id":"x.nzP8E+Dn1eBSaOO`K%","next":{"block":{"type":"block_argument_input","id":"9mO_99u?M7e7H!7{-oW[","next":{"block":{"type":"block_argument_statements","id":"Y!^KFFSCtZMfvz41cx.k"}}}}}}}},"arg6":{"block":{"type":"block_template_text","id":"5r[N;(x+aOahmi(vJA$5","fields":{"arg1":"if ("},"next":{"block":{"type":"block_template_argument","id":"WcwejpaLf8jo+tWd%Pgq","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"n?~vKK~m[}dOk!.vZAvG","fields":{"arg1":") {"},"next":{"block":{"type":"block_template_argument","id":"`t!Uu;3fNe{^6^0s[N-H","fields":{"arg1":"2"},"next":{"block":{"type":"block_template_text","id":")k:sKuhRhaY`coW~QvP7","fields":{"arg1":"} else if ("},"next":{"block":{"type":"block_template_argument","id":"QLAbU2U@kCQCel}6-s~k","fields":{"arg1":"3"},"next":{"block":{"type":"block_template_text","id":"N3+@x]Yyfp]rD}i37(o!","fields":{"arg1":") {"},"next":{"block":{"type":"block_template_argument","id":"EdwMb%[HDVpKje=.S0$m","fields":{"arg1":"4"},"next":{"block":{"type":"block_template_text","id":"[SS=A%0;{~PV|ykT)=P$","fields":{"arg1":"};"}}}}}}}}}}}}}}}}}}}}},{"type":"block","id":"[!V!ex7vGC.]4xk$@.%8","x":3245,"y":785,"fields":{"arg1":"condition_switch","arg2":"step","arg3":"#3333ff","arg7":false,"arg4":"switch %1 %2"},"inputs":{"arg5":{"block":{"type":"block_argument_input","id":"Nx@9gBz}-UKC;@OYfMb;","next":{"block":{"type":"block_argument_statements","id":"53Fr:.|,!]di-zl4:U-h"}}}},"arg6":{"block":{"type":"block_template_text","id":"-;r=4@el_b!;c5X)D9rC","fields":{"arg1":"switch ("},"next":{"block":{"type":"block_template_argument","id":"8P!N;QS9jenX{[[x3S$,","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":")jIz`_kXCQiX,Z+Z.5l)","fields":{"arg1":") {"},"next":{"block":{"type":"block_template_argument","id":"-aHWy?9A]V^}S-pGdB5(","fields":{"arg1":"2"},"next":{"block":{"type":"block_template_text","id":":(%T5UY@EeV[NzR2n!F8","fields":{"arg1":"};"}}}}}}}}}}}}},{"type":"block","id":"ys-VM_07o4C%_-yT!APe","x":3245,"y":1075,"fields":{"arg1":"condition_case","arg2":"step","arg3":"#33ccff","arg7":false,"arg4":"case %1 %2"},"inputs":{"arg5":{"block":{"type":"block_argument_input","id":"pmS`DE%]Xp]$HcQik[h6","next":{"block":{"type":"block_argument_statements","id":"WiMxTcy%oH5lK??S4,Z^"}}}},"arg6":{"block":{"type":"block_template_text","id":"4E0^?T;-tg}Y;2yo4_7s","fields":{"arg1":"case "},"next":{"block":{"type":"block_template_argument","id":"@l?Y(FK3!@Z^ZPm3?Qij","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"B0$,vJN.Lfwy+3W8lJn}","fields":{"arg1":": "},"next":{"block":{"type":"block_template_argument","id":";h:y1n{c4f0q9Fc6{Qh[","fields":{"arg1":"2"},"next":{"block":{"type":"block_template_text","id":",~r3H[M7IYsd)+;H~!]P","fields":{"arg1":" break;"}}}}}}}}}}}}},{"type":"block","id":"jl6!ni6q2rCC:eGyUHO=","x":565,"y":1185,"fields":{"arg1":"function_return","arg2":"step","arg3":"#cc6600","arg7":false,"arg4":"Return %1"},"inputs":{"arg5":{"block":{"type":"block_argument_input","id":"!Zc:^C:kwUOt-E|E~-J["}},"arg6":{"block":{"type":"block_template_text","id":"_lPUZH71yXj95p}Yz?_4","fields":{"arg1":"return "},"next":{"block":{"type":"block_template_argument","id":"zCvxjmLZf_my!w=4wVh!","fields":{"arg1":"1"}}}}}}},{"type":"block","id":"b8VHC4-1zN_o`D[|.x8y","x":1695,"y":2055,"fields":{"arg1":"value_typeof","arg2":"output","arg3":"#999900","arg7":true,"arg4":"Type of %1"},"inputs":{"arg5":{"block":{"type":"block_argument_input","id":"cKV5nnalUIcZ1OgIolZ3"}},"arg6":{"block":{"type":"block_template_text","id":".7lDuLr05rvctnY{l+-R","fields":{"arg1":" typeof("},"next":{"block":{"type":"block_template_argument","id":"aEOOJM)^jq_|QtNZ[DB6","fields":{"arg1":"1"},"next":{"block":{"type":"block_template_text","id":"yM$pqfZ{)G9L_PFx}0%p","fields":{"arg1":")"}}}}}}}}}]},"toolbox":"blockly_toolbox"}