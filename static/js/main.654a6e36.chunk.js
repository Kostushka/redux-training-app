(this["webpackJsonpreact-redux-training-app"]=this["webpackJsonpreact-redux-training-app"]||[]).push([[0],{10:function(e,t,n){e.exports={user:"Users_user__2iYDc",name:"Users_name__VND0D"}},18:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(6),s=n.n(r),o=(n(18),n(4)),u=n(7),i=n(2),b="ADD_USERS",l="GET_USERS",j="GET_ALL_USERS",p={users:[]},d=function(){return function(e){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:j,payload:t})})).catch((function(e){return console.log(e.message)}))}},h=n(3),O=n.n(h),f=n(10),m=n.n(f),y=n(1),_=function(e){var t=e.users,n=e.removeUser;return Object(y.jsx)("div",{className:m.a.user,children:t.map((function(e){return Object(y.jsx)("div",{onClick:function(){return n(e.id)},className:m.a.name,children:e.name},e.id)}))})},v="ADD_CASH",x="GET_CASH",N="REMOVE_CASH",S={cash:0},E=function(){var e=Object(o.c)((function(e){return e.cash.cash})),t=Object(o.c)((function(e){return e.users.users})),n=Object(o.b)(),c=function(e){n({type:v,payload:e})},a=function(e){n({type:x,payload:e})},r=function(e){var t={id:Date.now(),name:e};n({type:b,payload:t})};return Object(y.jsxs)("div",{className:O.a.container,children:[Object(y.jsx)("div",{className:O.a.count,children:e}),Object(y.jsxs)("div",{className:O.a.buttons,children:[Object(y.jsx)("button",{className:O.a.btn,onClick:function(){return c(Number(prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e",5)))},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(y.jsx)("button",{className:O.a.btn,onClick:function(){return a(Number(prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e",5)))},children:"\u0421\u043d\u044f\u0442\u044c"}),Object(y.jsx)("button",{className:O.a.btn,onClick:function(){n({type:N,payload:0})},children:"\u041e\u0431\u043d\u0443\u043b\u0438\u0442\u044c"}),Object(y.jsx)("button",{className:O.a.btn,onClick:function(){return r(prompt())},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(y.jsx)("button",{onClick:function(){n(d())},className:O.a.btn,children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432\u0441\u0435\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"})]}),Object(y.jsx)(_,{users:t,removeUser:function(e){n({type:l,payload:e})}})]})},g=n(5),A=n(12),C=n(13),D=Object(g.combineReducers)({cash:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(i.a)(Object(i.a)({},e),{},{cash:e.cash+t.payload});case x:return Object(i.a)(Object(i.a)({},e),{},{cash:e.cash-t.payload});case N:return Object(i.a)(Object(i.a)({},e),{},{cash:t.payload});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(i.a)(Object(i.a)({},e),{},{users:[].concat(Object(u.a)(e.users),[t.payload])});case l:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.filter((function(e){return e.id!==t.payload}))});case j:return Object(i.a)(Object(i.a)({},e),{},{users:[].concat(Object(u.a)(e.users),Object(u.a)(t.payload))});default:return e}}}),k=Object(g.createStore)(D,Object(A.composeWithDevTools)(Object(g.applyMiddleware)(C.a)));s.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(o.a,{store:k,children:Object(y.jsx)(E,{})})}),document.getElementById("root"))},3:function(e,t,n){e.exports={container:"App_container__2eEuR",count:"App_count__rfVJp",btn:"App_btn__1tuuU"}}},[[26,1,2]]]);
//# sourceMappingURL=main.654a6e36.chunk.js.map