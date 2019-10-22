/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[2,2],$V1=[1,5],$V2=[1,9],$V3=[1,10],$V4=[1,11],$V5=[1,8,25,50,52,54],$V6=[1,7,8,25,50,52,54],$V7=[1,18],$V8=[1,19],$V9=[1,20],$Va=[1,21],$Vb=[1,22],$Vc=[1,24],$Vd=[1,23],$Ve=[1,25],$Vf=[1,26],$Vg=[1,27],$Vh=[1,28],$Vi=[8,15,16,17,18,21,24,25,26,27,38,40],$Vj=[1,33],$Vk=[1,34],$Vl=[1,35],$Vm=[1,36],$Vn=[1,37],$Vo=[1,38],$Vp=[1,39],$Vq=[1,40],$Vr=[1,41],$Vs=[1,42],$Vt=[1,43],$Vu=[1,44],$Vv=[1,45],$Vw=[1,46],$Vx=[1,47],$Vy=[1,7,8,18,20,23,25,29,30,31,32,33,34,35,36,37,38,39,41,42,43,44,50,52,54,55,57],$Vz=[2,11],$VA=[1,48],$VB=[20,44],$VC=[1,54],$VD=[1,56],$VE=[1,57],$VF=[1,55],$VG=[1,7,8,18,20,23,25,29,30,31,32,33,34,35,36,37,38,39,41,42,43,44,47,50,52,54,55,57],$VH=[25,44],$VI=[1,7,8,20,23,25,31,32,33,34,35,36,37,38,41,42,43,44,50,52,54,55,57],$VJ=[1,7,8,20,23,25,29,30,31,32,33,34,35,36,37,38,39,41,42,43,44,50,52,54,55,57],$VK=[1,7,8,20,23,25,31,32,33,34,35,36,41,42,43,44,50,52,54,55,57],$VL=[1,7,8,20,23,25,41,42,43,44,50,52,54,55,57],$VM=[23,44];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"start":3,"rules_list":4,"rule":5,"expression":6,"END_STATEMENT":7,"IDENTIFIER":8,"=":9,"simple_expression":10,"ARROW_ASSIGN":11,"switch_expression":12,"if_expression":13,"return_expression":14,"TRUE":15,"FALSE":16,"NULL":17,"[":18,"array":19,"]":20,"(":21,"arguments":22,")":23,"{":24,"}":25,"CONST":26,"JSON_START":27,"json":28,"%":29,"/":30,">":31,"<":32,"EQUALS":33,"NEQ":34,"LTE":35,"GTE":36,"+":37,"-":38,"*":39,"!":40,"OR":41,"COALESCE":42,"AND":43,",":44,"json_array":45,"json_map":46,":":47,"arguments_list":48,"values_list":49,"SWITCH":50,"cases_list":51,"IF":52,"optional_else_expression":53,"RETURN":54,"ELSE":55,"case":56,"THEN":57,"$accept":0,"$end":1},
terminals_: {2:"error",7:"END_STATEMENT",8:"IDENTIFIER",9:"=",11:"ARROW_ASSIGN",15:"TRUE",16:"FALSE",17:"NULL",18:"[",20:"]",21:"(",23:")",24:"{",25:"}",26:"CONST",27:"JSON_START",29:"%",30:"/",31:">",32:"<",33:"EQUALS",34:"NEQ",35:"LTE",36:"GTE",37:"+",38:"-",39:"*",40:"!",41:"OR",42:"COALESCE",43:"AND",44:",",47:":",50:"SWITCH",52:"IF",54:"RETURN",55:"ELSE",57:"THEN"},
productions_: [0,[3,1],[4,0],[4,2],[5,1],[5,2],[5,4],[5,4],[6,1],[6,1],[6,1],[10,1],[10,1],[10,1],[10,1],[10,3],[10,4],[10,4],[10,3],[10,3],[10,1],[10,2],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,3],[10,2],[10,2],[10,3],[10,3],[10,3],[19,0],[19,1],[19,3],[28,1],[28,1],[28,3],[28,3],[45,0],[45,1],[45,3],[46,0],[46,3],[46,5],[22,0],[22,1],[22,1],[48,3],[48,5],[49,1],[49,3],[12,4],[13,6],[14,2],[53,0],[53,2],[53,2],[51,0],[51,3],[56,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 this.$ = {"op": "seq", "seq": $$[$0]}; return this.$; 
break;
case 2: case 38: case 45: case 64:
 this.$ = []; 
break;
case 3:
 this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 4: case 8: case 9: case 10: case 20: case 42: case 52: case 62:
 this.$ = $$[$0]; 
break;
case 5: case 19: case 43: case 44:
 this.$ = $$[$0-1]; 
break;
case 6: case 7:
 this.$ = {"op": "set", "var": $$[$0-3], "value": $$[$0-1]}; 
break;
case 11:
 this.$ = {"op": "get", "var": $$[$0]}; 
break;
case 12:
 this.$ = true; 
break;
case 13:
 this.$ = false; 
break;
case 14:
 this.$ = null; 
break;
case 15:
 this.$ = {"op": "array", "values": $$[$0-1]}; 
break;
case 16:
 this.$ = $$[$0-1]; this.$["op"] = $$[$0-3]; 
break;
case 17:
 this.$ = {"op": "index", "base": $$[$0-3], "index": $$[$0-1]}; 
break;
case 18:
 this.$ = {"op": "seq", "seq": $$[$0-1]}; 
break;
case 21:
 this.$ = {"op": "literal", "value": $$[$0]}; 
break;
case 22:
 this.$ = {"op": "%", "left": $$[$0-2], "right": $$[$0]}; 
break;
case 23:
 this.$ = {"op": "/", "left": $$[$0-2], "right": $$[$0]}; 
break;
case 24:
 this.$ = {"op": ">", "left": $$[$0-2], "right": $$[$0]}; 
break;
case 25:
 this.$ = {"op": "<", "left": $$[$0-2], "right": $$[$0]}; 
break;
case 26:
 this.$ = {"op": "equals", "left": $$[$0-2], "right": $$[$0]}; 
break;
case 27:
 this.$ = {"op": "not", "value": {"op": "equals", "left": $$[$0-2], "right": $$[$0]}}; 
break;
case 28:
 this.$ = {"op": "<=", "left": $$[$0-2], "right": $$[$0]}; 
break;
case 29:
 this.$ = {"op": ">=", "left": $$[$0-2], "right": $$[$0]}; 
break;
case 30:
 this.$ = {"op": "sum", "values": [$$[$0-2], $$[$0]]}; 
break;
case 31:
 this.$ = {"op": "sum", "values": [$$[$0-2], {"op": "negative", "value": $$[$0]}]}; 
break;
case 32:
 this.$ = {"op": "product", "values": [$$[$0-2], $$[$0]]}; 
break;
case 33:
 this.$ = {"op": "negative", "value": $$[$0]}; 
break;
case 34:
 this.$ = {"op": "not", "value": $$[$0]}; 
break;
case 35:
 this.$ = {"op": "or", "values": [$$[$0-2], $$[$0]]}; 
break;
case 36:
 this.$ = {"op": "coalesce", "values": [$$[$0-2], $$[$0]]}; 
break;
case 37:
 this.$ = {"op": "and", "values": [$$[$0-2], $$[$0]]}; 
break;
case 39:
 this.$ = [$$[$0]]; 
break;
case 40: case 47:
 this.$ = $$[$0-2]; this.$.push($$[$0]); 
break;
case 41:
 this.$ = JSON.parse($$[$0]); 
break;
case 46:
 this.$ = []; this.$.push($$[$0]); 
break;
case 48: case 51: case 61:
 this.$ = {}; 
break;
case 49: case 54:
 this.$ = {}; this.$[$$[$0-2]] = $$[$0]; 
break;
case 50: case 55:
 this.$ = $$[$0-4]; this.$[$$[$0-2]] = $$[$0]; 
break;
case 53:
 if ($$[$0]["values"].length > 1) {
        this.$ = $$[$0];
      } else {
        this.$ = {"value": $$[$0]["values"][0]};
      }
    
break;
case 56:
 this.$ = {}; this.$["values"] = [$$[$0]]; 
break;
case 57:
 this.$ = $$[$0-2]; this.$["values"].push($$[$0]); 
break;
case 58:
 this.$ = {"op": "switch", "cases": $$[$0-1]}; 
break;
case 59:
 this.$ = {"op": "cond", "cond": [{"if": $$[$0-3], "then": $$[$0-1]}]};
      if ($$[$0]["cond"]) {
        this.$["cond"] = this.$["cond"].concat($$[$0]["cond"]);
      }
    
break;
case 60:
 this.$ = {"op": "return", "value": $$[$0]} 
break;
case 63:
 this.$ = {"op": "cond", "cond": [{"if": true, "then": $$[$0]}]}; 
break;
case 65:
 this.$ = $$[$0-2]; this.$.push($$[$0-1]); 
break;
case 66:
 this.$ = {"op": "case", "condidion": $$[$0-2], "result": $$[$0]}; 
break;
}
},
table: [o([1,8,50,52,54],$V0,{3:1,4:2}),{1:[3]},{1:[2,1],5:3,6:4,8:$V1,12:6,13:7,14:8,50:$V2,52:$V3,54:$V4},o($V5,[2,3]),o($V5,[2,4],{7:[1,12]}),{9:[1,13],11:[1,14]},o($V6,[2,8]),o($V6,[2,9]),o($V6,[2,10]),{24:[1,15]},{21:[1,16]},{8:$V7,10:17,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},o($V5,[2,5]),{8:$V7,10:29,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},{8:$V7,10:30,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},o($Vi,[2,64],{51:31}),{8:$V7,10:32,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},o($V6,[2,60],{18:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,41:$Vv,42:$Vw,43:$Vx}),o($Vy,$Vz,{21:$VA}),o($Vy,[2,12]),o($Vy,[2,13]),o($Vy,[2,14]),o($VB,[2,38],{19:49,10:50,8:$V7,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh}),o([8,25,50,52,54],$V0,{4:51}),{8:$V7,10:52,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},o($Vy,[2,20]),{8:$VC,18:$VD,24:$VE,26:$VF,28:53},{8:$V7,10:58,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},{8:$V7,10:59,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},{7:[1,60],18:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,41:$Vv,42:$Vw,43:$Vx},{7:[1,61],18:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,41:$Vv,42:$Vw,43:$Vx},{8:$V7,10:64,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,25:[1,62],26:$Ve,27:$Vf,38:$Vg,40:$Vh,56:63},{18:$Vj,23:[1,65],29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,41:$Vv,42:$Vw,43:$Vx},{8:$V7,10:66,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},{8:$V7,10:67,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},{8:$V7,10:68,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},{8:$V7,10:69,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},{8:$V7,10:70,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},{8:$V7,10:71,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},{8:$V7,10:72,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},{8:$V7,10:73,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},{8:$V7,10:74,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},{8:$V7,10:75,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},{8:$V7,10:76,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},{8:$V7,10:77,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},{8:$V7,10:78,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},{8:$V7,10:79,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},{8:$V7,10:80,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},{8:[1,84],10:85,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,22:81,23:[2,51],24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh,48:82,49:83},{20:[1,86],44:[1,87]},o($VB,[2,39],{18:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,41:$Vv,42:$Vw,43:$Vx}),{5:3,6:4,8:$V1,12:6,13:7,14:8,25:[1,88],50:$V2,52:$V3,54:$V4},{18:$Vj,23:[1,89],29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,41:$Vv,42:$Vw,43:$Vx},o($Vy,[2,21]),o($VG,[2,41]),o($VG,[2,42]),o($VB,[2,45],{45:90,28:91,8:$VC,18:$VD,24:$VE,26:$VF}),o($VH,[2,48],{46:92,28:93,8:$VC,18:$VD,24:$VE,26:$VF}),o($VI,[2,33],{18:$Vj,29:$Vk,30:$Vl,39:$Vu}),o([1,7,8,20,23,25,44,50,52,54,55,57],[2,34],{18:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,41:$Vv,42:$Vw,43:$Vx}),o($V5,[2,6]),o($V5,[2,7]),o($V6,[2,58]),{7:[1,94]},{18:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,41:$Vv,42:$Vw,43:$Vx,57:[1,95]},{8:$V7,10:96,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},{18:$Vj,20:[1,97],29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,41:$Vv,42:$Vw,43:$Vx},o($VJ,[2,22],{18:$Vj}),o($VJ,[2,23],{18:$Vj}),o($VK,[2,24],{18:$Vj,29:$Vk,30:$Vl,37:$Vs,38:$Vt,39:$Vu}),o($VK,[2,25],{18:$Vj,29:$Vk,30:$Vl,37:$Vs,38:$Vt,39:$Vu}),o($VK,[2,26],{18:$Vj,29:$Vk,30:$Vl,37:$Vs,38:$Vt,39:$Vu}),o($VK,[2,27],{18:$Vj,29:$Vk,30:$Vl,37:$Vs,38:$Vt,39:$Vu}),o($VK,[2,28],{18:$Vj,29:$Vk,30:$Vl,37:$Vs,38:$Vt,39:$Vu}),o($VK,[2,29],{18:$Vj,29:$Vk,30:$Vl,37:$Vs,38:$Vt,39:$Vu}),o($VI,[2,30],{18:$Vj,29:$Vk,30:$Vl,39:$Vu}),o($VI,[2,31],{18:$Vj,29:$Vk,30:$Vl,39:$Vu}),o($VJ,[2,32],{18:$Vj}),o($VL,[2,35],{18:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu}),o($VL,[2,36],{18:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu}),o($VL,[2,37],{18:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu}),{23:[1,98]},{23:[2,52],44:[1,99]},{23:[2,53],44:[1,100]},o([18,23,29,30,31,32,33,34,35,36,37,38,39,41,42,43,44],$Vz,{9:[1,101],21:$VA}),o($VM,[2,56],{18:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,41:$Vv,42:$Vw,43:$Vx}),o($Vy,[2,15]),{8:$V7,10:102,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},o($Vy,[2,18]),o($Vy,[2,19]),{20:[1,103],44:[1,104]},o($VB,[2,46]),{25:[1,105],44:[1,106]},{47:[1,107]},o($Vi,[2,65]),{6:108,12:6,13:7,14:8,50:$V2,52:$V3,54:$V4},o($V6,[2,61],{53:109,18:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,41:$Vv,42:$Vw,43:$Vx,55:[1,110]}),o($Vy,[2,17]),o($Vy,[2,16]),{8:[1,111]},{8:$V7,10:112,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},{8:$V7,10:113,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},o($VB,[2,40],{18:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,41:$Vv,42:$Vw,43:$Vx}),o($VG,[2,43]),{8:$VC,18:$VD,24:$VE,26:$VF,28:114},o($VG,[2,44]),{8:$VC,18:$VD,24:$VE,26:$VF,28:115},{8:$VC,18:$VD,24:$VE,26:$VF,28:116},{7:[2,66]},o($V6,[2,59]),{8:$V7,10:118,13:117,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh,52:$V3},{9:[1,119]},o($VM,[2,57],{18:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,41:$Vv,42:$Vw,43:$Vx}),o($VM,[2,54],{18:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,41:$Vv,42:$Vw,43:$Vx}),o($VB,[2,47]),{47:[1,120]},o($VH,[2,49]),o($V6,[2,62]),o($V6,[2,63],{18:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,41:$Vv,42:$Vw,43:$Vx}),{8:$V7,10:121,15:$V8,16:$V9,17:$Va,18:$Vb,21:$Vc,24:$Vd,26:$Ve,27:$Vf,38:$Vg,40:$Vh},{8:$VC,18:$VD,24:$VE,26:$VF,28:122},o($VM,[2,55],{18:$Vj,29:$Vk,30:$Vl,31:$Vm,32:$Vn,33:$Vo,34:$Vp,35:$Vq,36:$Vr,37:$Vs,38:$Vt,39:$Vu,41:$Vv,42:$Vw,43:$Vx}),o($VH,[2,50])],
defaultActions: {108:[2,66]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip comments */
break;
case 1:/* skip whitespace */
break;
case 2:return 15
break;
case 3:return 16
break;
case 4:return 17
break;
case 5:return 27
break;
case 6:return 50;
break;
case 7:return 52;
break;
case 8:return 55;
break;
case 9:return 54;
break;
case 10:return 8
break;
case 11: yy_.yytext = Number(yy_.yytext); return 26; 
break;
case 12: yy_.yytext = yy_.yytext.substr(1, yy_.yyleng-2); return 26; 
break;
case 13: yy_.yytext = yy_.yytext.substr(1, yy_.yyleng-2); return 26; 
break;
case 14:return 11
break;
case 15:return 41
break;
case 16:return 43
break;
case 17:return 42
break;
case 18:return 33
break;
case 19:return 36
break;
case 20:return 35
break;
case 21:return 34
break;
case 22:return 57
break;
case 23:return 7
break;
case 24:return yy_.yytext
break;
}
},
rules: [/^(?:#(.)*\n)/,/^(?:\s+)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:null\b)/,/^(?:@)/,/^(?:switch\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:return\b)/,/^(?:[a-zA-Z][a-zA-Z0-9_]*)/,/^(?:[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)/,/^(?:"(\\.|[^\\"])*")/,/^(?:'[^\']*')/,/^(?:<-)/,/^(?:\|\|)/,/^(?:&&)/,/^(?:\?\?)/,/^(?:==)/,/^(?:>=)/,/^(?:<=)/,/^(?:!=)/,/^(?:=>)/,/^(?:;)/,/^(?:=|:|\[|\]|\(|\)|,|\{|\}|\+|%|\*|-|\/|%|>|<|!)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}