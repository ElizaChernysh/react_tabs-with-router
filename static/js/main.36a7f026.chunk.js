(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(8),a=c.n(s),n=c(4),j=c(2),b=c(0),i=c.n(b),o=(c(13),c(1)),r=i.a.memo((function(e){var t=e.tabs,c=Object(j.h)().tabId,s=Object(j.g)(),a=t.find((function(e){return e.id===c})),i=Object(j.f)();return Object(b.useEffect)((function(){!a&&t.length&&s("".concat(i.pathname,"/").concat(t[0].id))}),[]),Object(o.jsxs)("div",{className:"Tabs",children:[Object(o.jsx)("ul",{className:"Tabs__list",children:t.map((function(e){return Object(o.jsx)("li",{className:"Tabs__item",children:Object(o.jsx)(n.c,{style:function(e){var t=e.isActive;return{color:t?"#fff":"#006064",border:t?"1ps solid #006064":"#f0f0f0",pdding:t?"5px":"0"}},className:"Tabs__link",to:"/tabs/".concat(e.id),children:e.title})},e.id)}))}),a&&Object(o.jsx)("p",{className:"Tabs__content",children:a.content})]})})),l=(c(15),i.a.memo((function(){return Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsxs)("div",{className:"content",children:[Object(o.jsxs)("header",{className:"Header",children:[Object(o.jsx)(n.c,{className:"Header__nav",to:"/",children:"Home"}),Object(o.jsx)(n.c,{className:"Header__nav",to:"/tabs",children:"Tabs"})]}),Object(o.jsx)("main",{className:"Header__container",children:Object(o.jsx)(j.a,{})})]}),Object(o.jsx)("footer",{className:"Header__footer",children:Object(o.jsxs)("p",{children:["Created by"," ",Object(o.jsx)("span",{children:" Eliza "})," ","2022 \xa9"]})})]})}))),d=Object(b.memo)((function(){return Object(o.jsx)("div",{className:"home-page",children:Object(o.jsx)("h1",{className:"home-page-title",children:"Home page"})})})),m=(c(16),Object(b.memo)((function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h2",{className:"NotFoundPage",children:["Page not found. Go"," ",Object(o.jsx)(n.b,{className:"NotFoundPage__back-to-home",to:"/home",children:"Home"})]}),Object(o.jsx)("img",{className:"NotFoundPage__image",src:"https://c.tenor.com/f1fVZ5yuLaIAAAAd/sad.gif",alt:"page not found",height:"300px"})]})}))),h=(c(17),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),O=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(j.d,{children:Object(o.jsxs)(j.b,{path:"/",element:Object(o.jsx)(l,{}),children:[Object(o.jsx)(j.b,{path:"/",element:Object(o.jsx)(d,{})}),Object(o.jsx)(j.b,{path:"/tabs",element:Object(o.jsx)(r,{tabs:h})}),Object(o.jsx)(j.b,{path:"tabs/:tabId",element:Object(o.jsx)(r,{tabs:h})}),Object(o.jsx)(j.b,{path:"*",element:Object(o.jsx)(m,{})})]})})})};a.a.render(Object(o.jsx)(n.a,{children:Object(o.jsx)(O,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.36a7f026.chunk.js.map