(this["webpackJsonpignat-hw"]=this["webpackJsonpignat-hw"]||[]).push([[0],[,,,,,function(e,t,a){e.exports={wrapper:"Affairs_wrapper__I7Bx6",affairsContainer:"Affairs_affairsContainer__O4EV2",buttonsContainer:"Affairs_buttonsContainer__2Iyn7",affair:"Affairs_affair__2mHe0",deleteButton:"Affairs_deleteButton__1XqUB",filterButton:"Affairs_filterButton__2PE4P",high:"Affairs_high__1EaK9",low:"Affairs_low__1Dx3N",middle:"Affairs_middle__2fLgu",activeFilter:"Affairs_activeFilter__3106k"}},function(e,t,a){e.exports={header:"Header_header__2JYOh",defaultLink:"Header_defaultLink__lk6Sd",activeLink:"Header_activeLink__WXIDm",navbarArrow:"Header_navbarArrow__3nfUm"}},function(e,t,a){e.exports={post:"Message_post__3nknl",avatar:"Message_avatar__2MeCS",bubble:"Message_bubble__1kb-5",decorator:"Message_decorator__3ueDJ",author:"Message_author__1hFSf",text:"Message_text__QpofH",time:"Message_time__3UAaO"}},,,,,function(e,t,a){e.exports={blue:"HW4_blue__1GgN9",column:"HW4_column__2i9sw",testSpanError:"HW4_testSpanError__95zcq",greenButton:"HW4_greenButton__15Mio",sliderCheckbox:"HW4_sliderCheckbox__1i1MW"}},,function(e,t,a){e.exports={container:"Greeting_container__1zeZf",error:"Greeting_error__3ShSe",errorMessage:"Greeting_errorMessage__1Shho",inputContainer:"Greeting_inputContainer__12HNt"}},function(e,t,a){e.exports={input:"SuperInputText_input__hFEIX",inputContainer:"SuperInputText_inputContainer__1mlup",superInput:"SuperInputText_superInput__2frCk",errorInput:"SuperInputText_errorInput__1uoCu",error:"SuperInputText_error__3a1dB"}},function(e,t,a){e.exports={checkboxWrapper:"SuperCheckbox_checkboxWrapper__1110u",spanClassName:"SuperCheckbox_spanClassName__3YkoH",checkbox:"SuperCheckbox_checkbox___tLXZ"}},,function(e,t,a){e.exports={default:"SuperButton_default__1ALcc",red:"SuperButton_red__3r7E5"}},,function(e,t,a){e.exports={App:"App_App__1FUkm"}},,,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(19),s=a.n(c),i=(a(26),a(20)),o=a.n(i),l=a(6),j=a.n(l),u=a(8),d=a(0);var b=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},h=a(7),x=a.n(h);var f=function(e){return Object(d.jsxs)("div",{className:x.a.post,children:[Object(d.jsx)("img",{src:e.avatar,alt:"avatar",className:x.a.avatar}),Object(d.jsx)("div",{className:x.a.decorator}),Object(d.jsxs)("div",{className:x.a.bubble,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:x.a.author,children:e.name}),Object(d.jsx)("div",{className:x.a.text,children:e.message})]}),Object(d.jsx)("div",{className:x.a.time,children:e.time})]})]})},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",O="Captain America",p="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \n    ut ",m="22:00";var v=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{children:"homework 1"}),Object(d.jsx)(f,{avatar:_,name:O,message:p,time:m}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},k=a(3),g=a(5),C=a.n(g);var N=function(e){return Object(d.jsxs)("div",{className:C.a.affair,children:[Object(d.jsx)("span",{children:e.affair.name}),Object(d.jsxs)("span",{className:C.a[e.affair.priority],children:["(",e.affair.priority,")"]}),Object(d.jsx)("button",{className:C.a.deleteButton,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var w=function(e){var t=e.data.map((function(t){return Object(d.jsx)(N,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{className:C.a.wrapper,children:[Object(d.jsx)("div",{className:C.a.affairsContainer,children:t}),Object(d.jsxs)("div",{className:C.a.buttonsContainer,children:[Object(d.jsx)("button",{className:C.a.filterButton,disabled:"all"===e.filter,onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{className:C.a.filterButton,disabled:"high"===e.filter,onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{className:C.a.filterButton,disabled:"middle"===e.filter,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{className:C.a.filterButton,disabled:"low"===e.filter,onClick:function(){e.setFilter("low")},children:"Low"})]})]})},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var A=function(){var e=Object(r.useState)(S),t=Object(k.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)("all"),s=Object(k.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{children:"homework 2"}),Object(d.jsx)(w,{data:l,setFilter:o,filter:i,deleteAffairCallback:function(e){return n(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},y=a(21),B=a(14),I=a.n(B),H=function(e){var t=e.name,a=e.setNameCallback,r=e.addUser,n=e.error,c=e.totalUsers,s=n?I.a.error:"";return Object(d.jsxs)("div",{className:I.a.container,children:[Object(d.jsxs)("div",{children:["Users total: ",c]}),Object(d.jsxs)("div",{className:I.a.inputContainer,children:[Object(d.jsx)("input",{value:t,onChange:a,className:s}),Object(d.jsx)("button",{onClick:r,children:"add"})]}),Object(d.jsx)("span",{className:I.a.errorMessage,children:n})]})},L=function(e){var t=e.users,a=e.addUserCallback,n=Object(r.useState)(""),c=Object(k.a)(n,2),s=c[0],i=c[1],o=Object(r.useState)(""),l=Object(k.a)(o,2),j=l[0],u=l[1],b=t.length;return Object(d.jsx)(H,{name:s,setNameCallback:function(e){i(e.currentTarget.value),u("")},addUser:function(){s.trim()?(alert("Hello ".concat(s,"!")),a(s)):u("The name field is empty!"),i("")},error:j,totalUsers:b})},M=a(30);var E=function(){var e=Object(r.useState)([]),t=Object(k.a)(e,2),a=t[0],n=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{children:"homework 3"}),Object(d.jsx)(L,{users:a,addUserCallback:function(e){var t={_id:Object(M.a)(),name:e};n([t].concat(Object(y.a)(a)))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},T=a(10),W=a(11),F=a(15),U=a.n(F),P=function(e){e.type;var t=e.onChange,a=e.onChangeText,r=e.onKeyPress,n=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(W.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(i||""," ").concat(U.a.error),j="".concat(U.a.input," ").concat(n?U.a.superInput:""," ").concat(c?U.a.errorInput:""," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(T.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),n&&"Enter"===e.key&&n()},className:j},o)),c&&Object(d.jsx)("span",{className:l,children:c})]})},G=a(12),X=a.n(G),J=a(18),K=a.n(J),q=function(e){var t=e.red,a=e.className,r=Object(W.a)(e,["red","className"]),n="".concat(t?K.a.red:K.a.default," ").concat(a);return Object(d.jsx)("button",Object(T.a)({className:n},r))},D=a(16),Y=a.n(D),Z=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,r=e.className,n=(e.spanClassName,e.children),c=Object(W.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(r||Y.a.checkbox);return Object(d.jsxs)("label",{className:"".concat(Y.a.checkboxWrapper),children:[Object(d.jsx)("input",Object(T.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:s},c)),n&&Object(d.jsx)("span",{className:Y.a.spanClassName,children:n})]})};var z=function(){var e=Object(r.useState)(""),t=Object(k.a)(e,2),a=t[0],n=t[1],c=a?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(r.useState)(!1),o=Object(k.a)(i,2),l=o[0],j=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{children:"homework 4"}),Object(d.jsxs)("div",{className:X.a.column,children:[Object(d.jsx)(P,{value:a,onChangeText:n,onEnter:s,error:c,spanClassName:X.a.testSpanError}),Object(d.jsx)(P,{className:X.a.blue}),Object(d.jsx)(q,{className:X.a.greenButton,children:"Not just some default"}),Object(d.jsx)(q,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(q,{disabled:!0,children:"disabled"}),Object(d.jsx)(Z,{className:X.a.sliderCheckbox,checked:l,onChangeChecked:j,children:"I am a children of SuperCheckbox "}),Object(d.jsx)(Z,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};function Q(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(v,{}),Object(d.jsx)(A,{}),Object(d.jsx)(E,{}),Object(d.jsx)(z,{})]})}var R=a(2);function V(){return Object(d.jsx)("div",{children:"\u041e\u0441\u0442\u043e\u0440\u043e\u0436\u043d\u043e \u0434\u0432\u0435\u0440\u0438 \u0437\u0430\u043a\u0440\u044b\u0432\u0430\u044e\u0442\u0441\u044f, \u0441\u043b\u0435\u0434\u0443..\u0449\u0430\u044f \u0441\u0442\u0430\u043d\u0446\u0438\u044f - \u0435\u0449\u0435 \u0441\u0442\u0440\u043e\u0438\u0442\u0441\u044f..."})}function $(){return Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:"https://aardling.com/wp-content/uploads/far-far-away.jpg",alt:"some pic"})})}var ee="/pre-junior",te="/junior",ae="/junior+";function re(){return Object(d.jsx)("div",{children:Object(d.jsxs)(R.c,{children:[Object(d.jsx)(R.a,{path:"/",element:Object(d.jsx)(Q,{})}),Object(d.jsx)(R.a,{path:ee,element:Object(d.jsx)(Q,{})}),Object(d.jsx)(R.a,{path:te,element:Object(d.jsx)(V,{})}),Object(d.jsx)(R.a,{path:ae,element:Object(d.jsx)($,{})}),Object(d.jsx)(R.a,{path:"/*",element:Object(d.jsx)(b,{})})]})})}var ne=function(){return Object(d.jsxs)("div",{className:j.a.header,children:[Object(d.jsx)(u.b,{to:ee,className:function(e){return e.isActive?j.a.activeLink:j.a.defaultLink},children:"pre-junior"}),Object(d.jsx)(u.b,{to:te,className:function(e){return e.isActive?j.a.activeLink:j.a.defaultLink},children:"junior"}),Object(d.jsx)(u.b,{to:ae,className:function(e){return e.isActive?j.a.activeLink:j.a.defaultLink},children:"junior+"}),Object(d.jsx)("div",{className:j.a.navbarArrow})]})};var ce=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(u.a,{children:[Object(d.jsx)(ne,{}),Object(d.jsx)(re,{})]})})};var se=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("h1",{children:"react homeworks:"}),Object(d.jsx)(ce,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(se,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[28,1,2]]]);
//# sourceMappingURL=main.057d1dc2.chunk.js.map