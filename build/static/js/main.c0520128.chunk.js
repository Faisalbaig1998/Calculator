(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Faisal_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(11),C_Users_Faisal_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(12),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),_Buttonpad_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(20),_Buttonpad_css__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_Buttonpad_css__WEBPACK_IMPORTED_MODULE_4__);function Buttonpad(props){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),_useState2=Object(C_Users_Faisal_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),text=_useState2[0],setText=_useState2[1];function handleMouseUpEvent(e){}function handleMouseEvent(e){var buttons=document.getElementById("button-container").childNodes,buttonText="",screen=text,_iterator=Object(C_Users_Faisal_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__.a)(buttons),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var item=_step.value;item.addEventListener("click",(function(e){buttonText=e.target.innerText,"x"===buttonText?(buttonText="*",screen+=buttonText,setTextState(screen)):"="===buttonText?(screen=eval(screen),setTextState(screen)):"RESET"===buttonText?(screen="",setTextState(screen)):"DEL"==buttonText?screen-=screen:(screen+=buttonText,setTextState(screen))}))}}catch(err){_iterator.e(err)}finally{_iterator.f()}}function setTextState(e){console.log(e),setText(e),props.StateUpdate(e)}function colorChange(e){document.getElementById("button-container").style.background=e.buttonPad.bgColor;for(var t=document.getElementById("button-container").childNodes,_=0;_<t.length;_++)t[_].style.background=e.buttonPad.buttonColor,t[_].style.color=e.buttonPad.fontColor,t[_].style.boxShadow="0px 3px 1px ".concat(e.buttonPad.buttonShadow),t[_].style.transition="background 0.5s";document.getElementById("clear").style.backgroundColor=e.resetButton.bgColor,document.getElementById("clear").style.color=e.resetButton.fontColor,document.getElementById("clear").style.boxShadow="0px 3px 1px ".concat(e.resetButton.boxShadow),document.getElementById("clear").style.transition="background 0.5s",document.getElementById("del").style.backgroundColor=e.resetButton.bgColor,document.getElementById("del").style.color=e.resetButton.fontColor,document.getElementById("del").style.boxShadow="0px 3px 1px ".concat(e.resetButton.boxShadow),document.getElementById("del").style.transition="background 0.5s",document.getElementById("equal").style.backgroundColor=e.equalButton.bgColor,document.getElementById("equal").style.color=e.equalButton.fontColor,document.getElementById("equal").style.boxShadow="0px 3px 1px ".concat(e.equalButton.boxShadow),document.getElementById("equal").style.transition="background 0.5s"}return Object(react__WEBPACK_IMPORTED_MODULE_3__.useEffect)((function(){return colorChange(props.theme),window.addEventListener("mousedown",handleMouseEvent),window.addEventListener("mouseup",handleMouseUpEvent),function(){window.removeEventListener("mousedown",handleMouseEvent),window.removeEventListener("mouseup",handleMouseUpEvent)}})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{id:"button-container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"seven",className:"buttons",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"7"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"eight",className:"buttons",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"8"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"nine",className:"buttons",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"9"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"buttons",id:"del",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"DEL"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"four",className:"buttons",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"4"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"five",className:"buttons",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"5"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"six",className:"buttons",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"6"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"buttons",id:"add",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"+"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"one",className:"buttons",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"1"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"two",className:"buttons",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"2"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"three",className:"buttons",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"3"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"buttons",id:"subtract",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"-"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"buttons",id:"decimal",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"."})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{id:"zero",className:"buttons",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"0"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"buttons",id:"divide",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"/"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"buttons",id:"multiply",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"x"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"buttons",id:"clear",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"RESET"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"buttons",id:"equal",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{children:"="})})]})}__webpack_exports__.a=Buttonpad},,,,,,,,function(e,t,_){},function(e,t,_){},function(e,t,_){},function(e,t,_){},function(e,t,_){"use strict";_.r(t);var n=_(0),o=_(1),r=_.n(o),a=_(9),c=_.n(a),s=_(3),l=_(4),i=_(6),d=_(5),u=_(2);_(18),_(19);function b(e){return Object(o.useEffect)((function(){var t;t=e.theme,document.getElementById("display").style.color=t.screen.font,document.getElementById("display").style.backgroundColor=t.screen.bgColor,document.getElementById("display").style.transitionProperty="background 0.5s"})),Object(n.jsx)("div",{children:Object(n.jsx)("input",{autoComplete:"false",id:"display",value:e.value,onChange:function(t){e.stateShow(t.target.value)}})})}var E=_(10),O=(_(21),function(e){Object(i.a)(_,e);var t=Object(d.a)(_);function _(e){var n;return Object(s.a)(this,_),(n=t.call(this,e)).handleCheck=n.handleCheck.bind(Object(u.a)(n)),n.colorChange=n.colorChange.bind(Object(u.a)(n)),n.mouseover=n.mouseover.bind(Object(u.a)(n)),n}return Object(l.a)(_,[{key:"componentDidUpdate",value:function(){this.colorChange(this.props.theme),document.addEventListener("onmouseover",this.mouseover)}},{key:"mouseover",value:function(e){console.log(e.target.id)}},{key:"colorChange",value:function(e){var t=document.getElementsByClassName("input-list")[0].childNodes;document.addEventListener("click",(function(_){for(var n=0;n<t.length;n++)_.target.id==t[n].id?(t[n].style.background=e.toggleButton,t[n].style.transition="background 0.6s ease-in"):(t[n].style.background="none",t[n].style.transition="background 0.6s ease-out")})),document.getElementById("outer").style.background=e.background.bgColor,document.getElementById("outer").style.color=e.background.bgFont,document.getElementsByClassName("input-list")[0].style.background=e.themeBoxColor,document.getElementById("outer").style.transition="background 0.5s",document.getElementsByClassName("input-list")[0].style.transition="background 0.5s"}},{key:"handleCheck",value:function(e){console.log(this.props.theme),this.props.handleCheck(e),console.log(e)}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{id:"outer",children:[Object(n.jsx)("div",{id:"calc",children:Object(n.jsx)("span",{children:"calc"})}),Object(n.jsxs)("div",{id:"theme-box",children:[Object(n.jsxs)("div",{id:"number",children:[Object(n.jsx)("div",{className:"empty"}),Object(n.jsxs)("div",{id:"number-list",children:[Object(n.jsx)("div",{children:"1"}),Object(n.jsx)("div",{children:"2"}),Object(n.jsx)("div",{children:"3"})]})]}),Object(n.jsxs)("div",{id:"number",className:"upside",children:[Object(n.jsx)("div",{className:"empty margin-left",children:Object(n.jsx)("span",{children:"THEME"})}),Object(n.jsxs)("div",{className:"input-list",children:[Object(n.jsx)("input",{id:"blue",defaultChecked:!0,type:"checkbox",onClick:function(){e.handleCheck("blue")}}),Object(n.jsx)("input",{type:"checkbox",id:"white",onClick:function(){e.handleCheck("white")}}),Object(n.jsx)("input",{id:"purple",type:"checkbox",onClick:function(){e.handleCheck("purple")}})]})]})]})]})}}]),_}(r.a.Component)),j={blue:{background:{bgColor:"#3b4664",bgFont:"white"},buttonPad:{bgColor:"#252d44",buttonColor:"#eae3db",buttonShadow:"#aea4a2",fontColor:"#454a58"},themeBoxColor:"#262d43",toggleButton:"#d13f30",screen:{bgColor:"#181f32",font:"white"},resetButton:{fontColor:"white",bgColor:"#647299",boxShadow:"#424e6e"},equalButton:{fontColor:"white",bgColor:"#d13f30",boxShadow:"#7a2a27"}},white:{background:{bgColor:"#e6e6e6",bgFont:"#36362e"},buttonPad:{bgColor:"#d3cdcd",buttonColor:"#e5e4e0",buttonShadow:"#a89e94",fontColor:"#3c3c33"},themeBoxColor:"#d5cdcd",toggleButton:"#c45a06",screen:{bgColor:"#eeeeee",font:"#35352e"},resetButton:{fontColor:"white",bgColor:"#388187",boxShadow:"#1c6166"},equalButton:{fontColor:"white",bgColor:"#c85401",boxShadow:"#863700"}},purple:{background:{bgColor:"#17062a",bgFont:"#ffe94e"},buttonPad:{bgColor:"#1e0837",buttonColor:"#331b4d",buttonShadow:"#7b2391",fontColor:"#ffe94e"},themeBoxColor:"#1e0837",toggleButton:"#0be9de",screen:{bgColor:"#1e0836",font:"#ffe94e"},resetButton:{fontColor:"white",bgColor:"#56077c",boxShadow:"#a825d7"},equalButton:{fontColor:"#15052d",bgColor:"#0be9de",boxShadow:"#88ebf0"}}},m=function(e){Object(i.a)(_,e);var t=Object(d.a)(_);function _(e){var n;return Object(s.a)(this,_),(n=t.call(this,e)).state={colorState:"blue",text:""},n.colorStateChange=n.colorStateChange.bind(Object(u.a)(n)),n.colorChange=n.colorChange.bind(Object(u.a)(n)),n.StateUpdate=n.StateUpdate.bind(Object(u.a)(n)),n.Stateshow=n.Stateshow.bind(Object(u.a)(n)),n}return Object(l.a)(_,[{key:"StateUpdate",value:function(e){console.log("You are in StateUpdate of Calculator.js"),this.setState((function(){return{text:e}}))}},{key:"Stateshow",value:function(e){console.log("you are in stateshow of calculator.js"),console.log(e),console.log(typeof e),this.setState((function(){return{text:e}}))}},{key:"colorStateChange",value:function(e){this.setState((function(){return{colorState:e}})),this.colorChange(e)}},{key:"colorChange",value:function(e){document.body.style.backgroundColor=j[e].background.bgColor,document.body.style.transition="all 0.5s"}},{key:"render",value:function(){var e=j[this.state.colorState];return Object(n.jsxs)("div",{id:"background",children:[Object(n.jsx)(O,{theme:e,handleCheck:this.colorStateChange}),Object(n.jsx)(b,{theme:e,value:this.state.text,stateShow:this.Stateshow}),Object(n.jsx)(E.a,{theme:e,StateUpdate:this.StateUpdate,prevValue:this.state.text})]})}}]),_}(r.a.Component),h=function(e){Object(i.a)(_,e);var t=Object(d.a)(_);function _(){return Object(s.a)(this,_),t.apply(this,arguments)}return Object(l.a)(_,[{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(m,{})})}}]),_}(r.a.Component);c.a.render(Object(n.jsx)(h,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.c0520128.chunk.js.map