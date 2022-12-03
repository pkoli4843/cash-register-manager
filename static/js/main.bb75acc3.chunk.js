(this["webpackJsonpcash-register-manager"]=this["webpackJsonpcash-register-manager"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(5),i=n.n(s),l=(n(10),n(2)),r=n(4),b=(n(11),n(0));function o(){var e=Object(c.useState)(Object(l.a)({},{bill:"",cash:"",notes:{2e3:"",500:"",100:"",20:"",10:"",5:"",1:""}})),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),i=Object(r.a)(s,2),o=i[0],u=i[1],h=function(){Number(n.bill)>Number(n.cash)?j():function(){var e=Number(n.cash)-Number(n.bill),t={};Object.keys(n.notes).sort((function(e,t){return t-e})).forEach((function(n){var c=Math.trunc(e/Number(n));t[n]=c>0?c:"",e=Number(e%n)})),a(Object(l.a)(Object(l.a)({},n),{},{notes:t}))}()},j=function(){u(!0)},d=function(){u(!1)};return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"heading",children:"Cash Register Manager"}),Object(b.jsx)("p",{className:"description",children:"Enter the bill amount and cash given by the customer and know minimum number of notes to return."}),Object(b.jsx)("label",{className:"input-label",htmlFor:"bill-amount",children:"Bill Amount:"}),Object(b.jsx)("input",{className:"input",id:"bill-amount",type:"number",value:n.bill||"",onChange:function(e){d(),a(Object(l.a)(Object(l.a)({},n),{},{bill:e.target.value}))}}),Object(b.jsx)("p",{className:""===n.bill||n.bill>0?"hide":"error",children:"Invalid Bill Amount"}),Object(b.jsx)("label",{className:"input-label",htmlFor:"cash-given",children:"Cash Given:"}),Object(b.jsx)("input",{className:"input",id:"cash-given",type:"number",value:n.cash||"",disabled:!(n.bill&&n.bill>0),style:{marginBottom:"10px"},onChange:function(e){d(),a(Object(l.a)(Object(l.a)({},n),{},{cash:e.target.value}))}}),Object(b.jsx)("p",{className:""===n.cash||n.cash>0?"hide":"error",children:"Invalid Cash Amount"}),Object(b.jsx)("button",{id:"check-button",className:n.cash>0&&n.bill>0?"enabled":"disabled",disabled:!(n.cash>0&&n.bill>0),onClick:function(){h()},children:"Check"}),Object(b.jsx)("p",{className:o?"error":"hide",children:"Your cash amount is less than bill amount"}),Object(b.jsxs)("table",{className:"change-table",children:[Object(b.jsx)("caption",{children:"Return Change"}),Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"No of Notes"}),Object.keys(n.notes).sort((function(e,t){return t-e})).map((function(e){return Object(b.jsx)("td",{className:"no-of-notes",children:n.notes[e]},"".concat(e,"-").concat(n.notes[e]))}))]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Note"}),Object.keys(n.notes).sort((function(e,t){return t-e})).map((function(e){return Object(b.jsx)("td",{children:e},e)}))]})]})]})]})}var u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(o,{})}),document.getElementById("root")),u()}},[[13,1,2]]]);