(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"00ee":function(t,e,r){"use strict";var s=r("b622"),a=s("toStringTag"),n={};n[a]="z",t.exports="[object z]"===String(n)},"0d26":function(t,e,r){"use strict";var s=r("e330"),a=Error,n=s("".replace),c=function(t){return String(new a(t).stack)}("zxcasd"),i=/\n\s*at [^:]*:[^\n]*/,o=i.test(c);t.exports=function(t,e){if(o&&"string"==typeof t&&!a.prepareStackTrace)while(e--)t=n(t,i,"");return t}},"2ba4":function(t,e,r){"use strict";var s=r("40d5"),a=Function.prototype,n=a.apply,c=a.call;t.exports="object"==typeof Reflect&&Reflect.apply||(s?c.bind(n):function(){return c.apply(n,arguments)})},"33c9":function(t,e,r){t.exports=r.p+"img/arrow_right.78ef27eb.png"},3939:function(t,e,r){},"3bbe":function(t,e,r){"use strict";var s=r("1626"),a=String,n=TypeError;t.exports=function(t){if("object"==typeof t||s(t))return t;throw new n("Can't set "+a(t)+" as a prototype")}},"577e":function(t,e,r){"use strict";var s=r("f5df"),a=String;t.exports=function(t){if("Symbol"===s(t))throw new TypeError("Cannot convert a Symbol value to a string");return a(t)}},"6f19":function(t,e,r){"use strict";var s=r("9112"),a=r("0d26"),n=r("b980"),c=Error.captureStackTrace;t.exports=function(t,e,r,i){n&&(c?c(t,e):s(t,"stack",a(r,i)))}},7156:function(t,e,r){"use strict";var s=r("1626"),a=r("861d"),n=r("d2bb");t.exports=function(t,e,r){var c,i;return n&&s(c=e.constructor)&&c!==r&&a(i=c.prototype)&&i!==r.prototype&&n(t,i),t}},7282:function(t,e,r){"use strict";var s=r("e330"),a=r("59ed");t.exports=function(t,e,r){try{return s(a(Object.getOwnPropertyDescriptor(t,e)[r]))}catch(n){}}},"73cf":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"registerContainer"},[e("div",{staticClass:"title"},[t._v("会员认证")]),e("div",[e("div",{staticClass:"item tel",class:t.stateTel},[e("span"),e("div",[e("mt-field",{attrs:{type:"text",placeholder:"请输入手机号",attr:{maxLength:11}},nativeOn:{"!blur":function(e){return t.checkTel.apply(null,arguments)}},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}})],1)]),e("div",{staticClass:"item name",class:t.stateName},[e("span"),e("div",[e("mt-field",{attrs:{type:"text",placeholder:"请输入姓名"},nativeOn:{"!blur":function(e){return t.checkName.apply(null,arguments)}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)]),e("div",{staticClass:"item pwd",class:t.statePassword},[e("span"),e("div",[e("mt-field",{attrs:{type:"password",placeholder:"请输入密码"},nativeOn:{"!blur":function(e){return t.checkPassword.apply(null,arguments)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)]),e("div",{staticClass:"item conpwd",class:t.stateConPassword},[e("span"),e("div",[e("mt-field",{attrs:{type:"password",placeholder:"请输入确认密码"},nativeOn:{"!blur":function(e){return t.checkConPassword.apply(null,arguments)}},model:{value:t.conPassword,callback:function(e){t.conPassword=e},expression:"conPassword"}})],1)]),e("div",{staticClass:"item cardtype",class:t.stateCardType},[e("span"),e("div",[e("mt-field",{attrs:{disabled:"",type:"text",placeholder:"请选证件类型"},nativeOn:{"!click":function(e){return t.showPopup(!0)}},model:{value:t.cardType.name,callback:function(e){t.$set(t.cardType,"name",e)},expression:"cardType.name"}},[e("img",{attrs:{src:r("33c9")}})])],1),e("mt-popup",{attrs:{lockScroll:!0,closeOnClickModal:!1},model:{value:t.isshowPopup,callback:function(e){t.isshowPopup=e},expression:"isshowPopup"}},[e("mt-radio",{attrs:{options:t.cardTypeList},model:{value:t.selectedCardType,callback:function(e){t.selectedCardType=e},expression:"selectedCardType"}}),e("div",[e("mt-button",{attrs:{type:"primary",size:"small"},nativeOn:{"!click":function(e){return t.selectCardType.apply(null,arguments)}}},[t._v("确认")]),e("mt-button",{attrs:{type:"primary",size:"small"},nativeOn:{"!click":function(e){return t.showPopup(!1)}}},[t._v("取消")])],1)],1)],1),e("div",{staticClass:"item cardnum",class:t.stateCardnum},[e("span"),e("div",[e("mt-field",{attrs:{type:"text",placeholder:"请输入证件号"},nativeOn:{"!blur":function(e){return t.checkCardnum.apply(null,arguments)}},model:{value:t.cardnum,callback:function(e){t.cardnum=e},expression:"cardnum"}})],1)]),e("p",[t._v("注：每个手机号码只能绑定一个证件号")]),e("div",{staticClass:"item tyzm",class:t.stateTyzm},[e("span"),e("div",[e("mt-field",{attrs:{type:"text",placeholder:"请输入图形验证码"},nativeOn:{"!blur":function(e){return t.checkTyzm.apply(null,arguments)}},model:{value:t.tyzm,callback:function(e){t.tyzm=e},expression:"tyzm"}},[e("div",[e("img",{attrs:{src:r("751f")}}),e("p",[t._v("看不清换一个")])])])],1)]),e("div",{staticClass:"item messageyzm",class:t.stateMessageyzm},[e("span"),e("div",[e("mt-field",{attrs:{type:"text",placeholder:"请输入短信验证码"},nativeOn:{"!blur":function(e){return t.checkMessageyzm.apply(null,arguments)}},model:{value:t.messageyzm,callback:function(e){t.messageyzm=e},expression:"messageyzm"}},[e("mt-badge",{attrs:{size:"small",type:"primary"}},[t._v("获取验证码")])],1)],1)]),e("mt-button",{attrs:{type:"default",size:"large"},nativeOn:{"!click":function(e){return t.submit.apply(null,arguments)}}},[t._v("提交")])],1)]),e("my-footer",{attrs:{tabActive:t.tabActive}},[t._v(">")])],1)},a=[],n=(r("d9e2"),r("14d9"),{data(){return{tel:"",stateTel:"",name:"",stateName:"",password:"",statePassword:"",conPassword:"",stateConPassword:"",cardType:{name:"",id:""},stateCardType:"",cardnum:"",stateCardnum:"",stateTyzm:"",tyzm:"",messageyzm:"",stateMessageyzm:"",isshowPopup:!1,selectedCardType:"1",cardTypeList:[{label:"身份证",value:"1"},{label:"户口薄",value:"2"},{label:"港澳台居民来往大陆通行证",value:"3"},{label:"军官证",value:"4"},{label:"护照",value:"5"}],tabActive:"index"}},methods:{checkTel(){var t=/^1[3578]\d{9}$/;return t.test(this.tel)?(this.stateTel="",!0):(this.stateTel="error",!1)},checkName(){return""==this.name?(this.stateName="error",!1):(this.stateName="",!0)},checkPassword(){var t=/^[a-zA-Z0-9_]{6,20}$/;return t.test(this.password)?(this.statePassword="",!0):(this.statePassword="error",!1)},checkConPassword(){return this.password!=this.conPassword?(this.stateConPassword="error",!1):(this.stateConPassword="",!0)},checkCardType(){return""==this.cardType.name?(this.stateCardType="error",!1):(this.stateCardType="",!0)},checkCardnum(){if(""==this.cardnum)return this.stateCardnum="error",!1;var t=!1;switch(this.cardType.id){case"1":t=/^[0-9]{17}[0-9Xx]$|^[0-9]{15}$/.test(this.cardnum);break;case"3":t=/^[HMhm]{1}([0-9]{10}|[0-9]{8})$/.test(this.cardnum)||/^[0-9]{8}$/.test(this.cardnum)||/^[0-9]{10}$/.test(this.cardnum);break;case"4":t=/^[0-9]{8}$/.test(this.cardnum);break;case"5":t=/^[a-zA-Z]{5,17}$/.test(this.cardnum)||/^[a-zA-Z0-9]{5,17}$/.test(this.cardnum);break}return!!t&&(this.stateCardnum="",!0)},checkTyzm(){return""==this.tyzm?(this.stateTyzm="error",!1):(this.stateTyzm="",!0)},checkMessageyzm(){return""==this.messageyzm?(this.stateMessageyzm="error",!1):(this.stateMessageyzm="",!0)},selectCardType(){try{this.cardTypeList.forEach(t=>{if(t.value==this.selectedCardType)throw this.cardType.name=t.label,this.cardType.id=t.value,Error()})}catch(t){this.isshowPopup=!1,this.stateCardType=""}},submit(){this.checkTel()&&this.checkName()&&this.checkPassword()&&this.checkConPassword()&&this.checkCardType()&&this.checkCardnum()&&this.checkTyzm()&&this.checkMessageyzm()&&(localStorage.setItem("name",this.name),localStorage.setItem("tel",this.tel),localStorage.setItem("islogined",!0),localStorage.setItem("cardnum",this.cardnum),this.$router.push("/mindex"))},showPopup(t){this.isshowPopup=t}}}),c=n,i=(r("b032"),r("2877")),o=Object(i["a"])(c,s,a,!1,null,null,null);e["default"]=o.exports},"751f":function(t,e,r){t.exports=r.p+"img/imagecode.6a880801.png"},ab36:function(t,e,r){"use strict";var s=r("861d"),a=r("9112");t.exports=function(t,e){s(e)&&"cause"in e&&a(t,"cause",e.cause)}},aeb0:function(t,e,r){"use strict";var s=r("9bf2").f;t.exports=function(t,e,r){r in t||s(t,r,{configurable:!0,get:function(){return e[r]},set:function(t){e[r]=t}})}},b032:function(t,e,r){"use strict";r("3939")},b980:function(t,e,r){"use strict";var s=r("d039"),a=r("5c6c");t.exports=!s((function(){var t=new Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",a(1,7)),7!==t.stack)}))},d2bb:function(t,e,r){"use strict";var s=r("7282"),a=r("825a"),n=r("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{t=s(Object.prototype,"__proto__","set"),t(r,[]),e=r instanceof Array}catch(c){}return function(r,s){return a(r),n(s),e?t(r,s):r.__proto__=s,r}}():void 0)},d9e2:function(t,e,r){"use strict";var s=r("23e7"),a=r("da84"),n=r("2ba4"),c=r("e5cb"),i="WebAssembly",o=a[i],u=7!==new Error("e",{cause:7}).cause,l=function(t,e){var r={};r[t]=c(t,e,u),s({global:!0,constructor:!0,arity:1,forced:u},r)},p=function(t,e){if(o&&o[t]){var r={};r[t]=c(i+"."+t,e,u),s({target:i,stat:!0,constructor:!0,arity:1,forced:u},r)}};l("Error",(function(t){return function(e){return n(t,this,arguments)}})),l("EvalError",(function(t){return function(e){return n(t,this,arguments)}})),l("RangeError",(function(t){return function(e){return n(t,this,arguments)}})),l("ReferenceError",(function(t){return function(e){return n(t,this,arguments)}})),l("SyntaxError",(function(t){return function(e){return n(t,this,arguments)}})),l("TypeError",(function(t){return function(e){return n(t,this,arguments)}})),l("URIError",(function(t){return function(e){return n(t,this,arguments)}})),p("CompileError",(function(t){return function(e){return n(t,this,arguments)}})),p("LinkError",(function(t){return function(e){return n(t,this,arguments)}})),p("RuntimeError",(function(t){return function(e){return n(t,this,arguments)}}))},e391:function(t,e,r){"use strict";var s=r("577e");t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:s(t)}},e5cb:function(t,e,r){"use strict";var s=r("d066"),a=r("1a2d"),n=r("9112"),c=r("3a9b"),i=r("d2bb"),o=r("e893"),u=r("aeb0"),l=r("7156"),p=r("e391"),d=r("ab36"),m=r("6f19"),f=r("83ab"),h=r("c430");t.exports=function(t,e,r,y){var v="stackTraceLimit",b=y?2:1,w=t.split("."),k=w[w.length-1],g=s.apply(null,w);if(g){var T=g.prototype;if(!h&&a(T,"cause")&&delete T.cause,!r)return g;var C=s("Error"),x=e((function(t,e){var r=p(y?e:t,void 0),s=y?new g(t):new g;return void 0!==r&&n(s,"message",r),m(s,x,s.stack,2),this&&c(T,this)&&l(s,this,x),arguments.length>b&&d(s,arguments[b]),s}));if(x.prototype=T,"Error"!==k?i?i(x,C):o(x,C,{name:!0}):f&&v in g&&(u(x,g,v),u(x,g,"prepareStackTrace")),o(x,g),!h)try{T.name!==k&&n(T,"name",k),T.constructor=x}catch(z){}return x}}},f5df:function(t,e,r){"use strict";var s=r("00ee"),a=r("1626"),n=r("c6b6"),c=r("b622"),i=c("toStringTag"),o=Object,u="Arguments"===n(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(r){}};t.exports=s?n:function(t){var e,r,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=l(e=o(t),i))?r:u?n(e):"Object"===(s=n(e))&&a(e.callee)?"Arguments":s}}}]);
//# sourceMappingURL=register.9c712fea.js.map