(this.webpackJsonpcalculatio=this.webpackJsonpcalculatio||[]).push([[0],[,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_zen_net_WebstormProjects_calculatio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_Expression__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(5),_Result__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6);function Ground(props){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(_home_zen_net_WebstormProjects_calculatio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),expression=_useState2[0],setExpression=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=Object(_home_zen_net_WebstormProjects_calculatio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),result=_useState4[0],setResult=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),_useState6=Object(_home_zen_net_WebstormProjects_calculatio_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),solved=_useState6[0],setSolved=_useState6[1],addNewValue=function(e){solved&&(setSolved(!1),reset()),setExpression((function(t){return t+e}))},calculate=function calculate(){try{var _result=eval(expression);if(!_result)throw new Error;setResult(_result)}catch(e){console.log(e),setResult("Invalid")}setSolved(!0)},reset=function(){setExpression(""),setResult("")};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Expression__WEBPACK_IMPORTED_MODULE_2__.a,{value:expression}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"pure-g"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"pure-u-1-24 pure-button",onClick:function(e){return addNewValue(e.target.textContent)}},"("),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"pure-u-1-24 pure-button",onClick:function(e){return addNewValue(e.target.textContent)}},")"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"pure-u-1-24 pure-button",onClick:function(e){return addNewValue("**")}},"^")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"pure-g"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"pure-u-1-24 pure-button",onClick:function(e){return addNewValue(e.target.textContent)}},"0"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"pure-u-1-24 pure-button",onClick:function(e){return addNewValue(e.target.textContent)}},"1"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"pure-u-1-24 pure-button",onClick:function(e){return addNewValue(e.target.textContent)}},"2"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"pure-u-1-24 pure-button",onClick:function(e){return addNewValue(e.target.textContent)}},"+")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"pure-g"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"pure-u-1-24 pure-button",onClick:function(e){return addNewValue(e.target.textContent)}},"3"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"pure-u-1-24 pure-button",onClick:function(e){return addNewValue(e.target.textContent)}},"4"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"pure-u-1-24 pure-button",onClick:function(e){return addNewValue(e.target.textContent)}},"5"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"pure-u-1-24 pure-button",onClick:function(e){return addNewValue(e.target.textContent)}},"-")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"pure-g"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"pure-u-1-24 pure-button",onClick:function(e){return addNewValue(e.target.textContent)}},"6"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"pure-u-1-24 pure-button",onClick:function(e){return addNewValue(e.target.textContent)}},"7"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"pure-u-1-24 pure-button",onClick:function(e){return addNewValue(e.target.textContent)}},"8"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"pure-u-1-24 pure-button",onClick:function(e){return addNewValue(e.target.textContent)}},"*")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"pure-g"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"pure-u-1-24 pure-button",onClick:function(){return reset()}},"Esc"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"pure-u-1-24 pure-button",onClick:function(e){return addNewValue(e.target.textContent)}},"9"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"pure-u-1-24 pure-button",onClick:function(e){return addNewValue(e.target.textContent)}},"/"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{className:"pure-u-1-24 pure-button pure-button-primary",onClick:function(){return calculate()}}," =")),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Result__WEBPACK_IMPORTED_MODULE_3__.a,{value:result}))}__webpack_exports__.a=Ground},function(e,t,_){"use strict";var a=_(0),u=_.n(a);t.a=function(e){return u.a.createElement("h2",null,e.value||0)}},function(e,t,_){"use strict";var a=_(0),u=_.n(a);t.a=function(e){return u.a.createElement("h2",null,e.value)}},function(e,t,_){e.exports=_(12)},,,,,function(e,t,_){"use strict";_.r(t);var a=_(0),u=_.n(a),n=_(3),r=_.n(n),c=_(4);var l=function(){return u.a.createElement("div",{className:"App"},u.a.createElement("header",{className:"App-header"},u.a.createElement(c.a,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(l,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.b30ea0ab.chunk.js.map