(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{11:function(e,t,s){},13:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),c=s(4),a=s.n(c),r=(s(9),s(2)),l=(s(10),[{id:1,text:"Which of the following is the capital city of France?",answers:[{id:"1-1",text:"Brugges",isRight:!1},{id:"1-2",text:"Saint Germain",isRight:!1},{id:"1-3",text:"Paris",isRight:!0},{id:"1-4",text:"Maryland",isRight:!1}]},{id:2,text:"Which of the following was created by Facebook team?",answers:[{id:"2-1",text:"Ember.js",isRight:!1},{id:"2-2",text:"React.js",isRight:!0},{id:"2-3",text:"Vuje.js",isRight:!1},{id:"2-4",text:"Angular",isRight:!1}]},{id:3,text:"Which of the following is transparent ?",answers:[{id:"3-1",text:"Snow",isRight:!1},{id:"3-2",text:"Fanta",isRight:!1},{id:"3-3",text:"Coca-Cola",isRight:!1},{id:"3-4",text:"Water",isRight:!0}]}]),d=(s(11),s.p+"static/media/quiz.3af29538.jpg"),j=s(0),o=function(e){var t=e.amount,s=e.startQuiz;return Object(j.jsx)("div",{className:"card p-3 m-5",style:{width:"60rem"},children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsx)("img",{src:d,className:"img-fluid img-thumbnail",alt:"Quiz image",title:"Quiz image"})}),Object(j.jsx)("div",{className:"col-md-8",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h1",{className:"card-title",children:"Welcome to the Quiz app !"}),Object(j.jsx)("h3",{className:"card-text",children:Object(j.jsxs)("small",{className:"text-muted",children:[t," questions total."]})}),Object(j.jsx)("h5",{className:"card-text",children:"If you are ready, press START."}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){return s()},children:"START"})]})})]})})},b=function(e){var t=e.question,s=e.orderNo,n=e.isFirst,i=e.isLast,c=e.previous,a=e.next,r=e.getAnswer;return Object(j.jsxs)("div",{className:"card m-3",children:[Object(j.jsxs)("div",{className:"card-header d-flex justify-content-between",children:[Object(j.jsxs)("h5",{style:{display:"inline"},children:["Question # ",s]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"btn btn-primary",disabled:n?"disabled":"",onClick:function(){return c()},children:"Prev"})," ",Object(j.jsx)("button",{className:"btn btn-primary",disabled:i?"disabled":"",onClick:function(){return a()},children:"Next"})]})]}),Object(j.jsx)("div",{className:"card-body",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-8",children:Object(j.jsx)("h3",{className:"card-title",children:t.text})}),Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsx)("ul",{className:"list-group",children:t.answers.map((function(e){return Object(j.jsx)("li",{className:"list-group-item",onClick:function(){return r(e)},children:e.text},e.id)}))})})]})})]})},h=function(e){var t=e.totalQuestions,s=e.rightAnswers,n=e.wrongAnswers,i=e.unAnswered,c=e.restart;return Object(j.jsxs)("div",{className:"card m-3",children:[Object(j.jsx)("h1",{className:"card-header text-center",children:"You came to the end of the Quiz !"}),Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)("h3",{className:"card-text",children:"Thank you for taking part in it."})}),Object(j.jsxs)("div",{className:"row m-3 p-3 d-flex justify-content-between",children:[Object(j.jsx)("div",{className:"col-sm",children:Object(j.jsxs)("div",{className:"alert alert-secondary justify-content-between d-flex",children:["Total",Object(j.jsx)("span",{className:"badge badge-secondary badge-pill align-self-center",children:t})]})}),Object(j.jsx)("div",{className:"col-sm",children:Object(j.jsxs)("div",{className:"alert alert-secondary justify-content-between d-flex",children:["Right",Object(j.jsx)("span",{className:"badge badge-primary badge-pill align-self-center",children:s})]})}),Object(j.jsx)("div",{className:"col-sm",children:Object(j.jsxs)("div",{className:"alert alert-secondary justify-content-between d-flex",children:["Wrong",Object(j.jsx)("span",{className:"badge badge-danger badge-pill align-self-center",children:n})]})}),Object(j.jsx)("div",{className:"col-sm",children:Object(j.jsxs)("div",{className:"alert alert-secondary justify-content-between d-flex",children:["Unanswered",Object(j.jsx)("span",{className:"badge badge-warning badge-pill align-self-center",children:i})]})})]}),Object(j.jsx)("div",{className:"row m-3 align-self-center",children:Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){return c()},children:"RESTART"})})]})},u=function(){var e=0,t=1,s=2,i=Object(n.useState)(e),c=Object(r.a)(i,2),a=c[0],d=c[1],u=Object(n.useState)(0),m=Object(r.a)(u,2),x=m[0],g=m[1],O=Object(n.useState)(0),f=Object(r.a)(O,2),N=f[0],p=f[1],w=Object(n.useState)(0),v=Object(r.a)(w,2),y=v[0],R=v[1],A=function(){return l.length-1===x},S=function(){g((function(e){return e+1}))};switch(a){case e:return Object(j.jsx)(o,{amount:l.length,startQuiz:function(){d(t)}});case t:return Object(j.jsx)(b,{orderNo:x+1,question:l[x],isLast:A(),isFirst:0===x,previous:function(){g((function(e){return e-1}))},next:S,getAnswer:function(e){A()?d(s):S(),e.isRight?p((function(e){return e+1})):R((function(e){return e+1}))}});case s:return Object(j.jsx)(h,{totalQuestions:l.length,rightAnswers:N,wrongAnswers:y,unAnswered:l.length-N-y,restart:function(){d(e),g(0),p(0),R(0)}})}},m=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,14)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),n(e),i(e),c(e),a(e)}))};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),m()},9:function(e,t,s){}},[[13,1,2]]]);
//# sourceMappingURL=main.e827fc79.chunk.js.map