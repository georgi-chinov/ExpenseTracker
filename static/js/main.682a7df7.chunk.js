(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={"new-expense__controls":"Form_new-expense__controls__2OdjN","new-expense__control":"Form_new-expense__control__227ER","new-expense__actions":"Form_new-expense__actions__m63tY"}},,function(e,t,n){e.exports={"expense-date":"Date_expense-date__1BH1z","expense-date__month":"Date_expense-date__month__1Ra4s","expense-date__year":"Date_expense-date__year__5bQNA","expense-date__day":"Date_expense-date__day__2Vu_N"}},function(e,t,n){e.exports={"chart-bar":"ChartBar_chart-bar__2do-o","chart-bar__inner":"ChartBar_chart-bar__inner__3hJFh","chart-bar__fill":"ChartBar_chart-bar__fill__2In0o","chart-bar__label":"ChartBar_chart-bar__label__3bk0x"}},,function(e,t,n){e.exports={"expense-item":"ExpenseItem_expense-item__2bnx7","expense-item__description":"ExpenseItem_expense-item__description__14SuN","expense-item__price":"ExpenseItem_expense-item__price__1v1Qm"}},,function(e,t,n){e.exports={"expenses-filter":"ExpensesFilter_expenses-filter__J6K-p","expenses-filter__control":"ExpensesFilter_expenses-filter__control__3G_KF"}},function(e,t,n){e.exports={"expenses-list":"ExpensesList_expenses-list__HDUIA","expenses-list__fallback":"ExpensesList_expenses-list__fallback__2hoM8"}},,function(e,t,n){e.exports={expenses:"Expenses_expenses__1WSpf"}},,function(e,t,n){e.exports={chart:"Chart_chart__377Z2"}},function(e,t,n){e.exports={"new-expense":"NewExpense_new-expense__3wb1U",alternative:"NewExpense_alternative__2uK7x"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(14),l=n.n(c),r=(n(23),n(9)),i=n(3),o=n(15),_=n.n(o),x=n(12),u=n.n(x),b=n(0),j=function(e){return Object(b.jsx)("div",{className:u.a["expenses-filter"],children:Object(b.jsxs)("div",{className:u.a["expenses-filter__control"],children:[Object(b.jsx)("label",{children:"Filter by year"}),Object(b.jsxs)("select",{value:e.selected,onChange:function(t){e.filterItems(t.target.value)},children:[Object(b.jsx)("option",{value:"2022",children:"2022"}),Object(b.jsx)("option",{value:"2021",children:"2021"}),Object(b.jsx)("option",{value:"2020",children:"2020"}),Object(b.jsx)("option",{value:"2019",children:"2019"})]})]})})},d=n(7),p=n.n(d),h=function(e){var t=e.date.toLocaleString("en-gb",{day:"2-digit"}),n=e.date.getFullYear(),a=e.date.toLocaleString("en-gb",{month:"long"});return Object(b.jsxs)("div",{className:p.a["expense-date"],children:[Object(b.jsx)("div",{className:p.a["expense-date__month"],children:a}),Object(b.jsx)("div",{className:p.a["expense-date__year"],children:n}),Object(b.jsx)("div",{className:p.a["expense-date__day"],children:t})]})},m=n(10),O=n.n(m),v=function(e){return Object(b.jsxs)("div",{className:O.a["expense-item"],children:[Object(b.jsx)(h,{date:e.date}),Object(b.jsxs)("div",{className:O.a["expense-item__description"],children:[Object(b.jsx)("h2",{children:e.title}),Object(b.jsxs)("div",{className:O.a["expense-item__price"],children:["$",e.amount]})]})]})},f=n(13),N=n.n(f),w=function(e){return 0===e.list.length?Object(b.jsx)("h2",{className:N.a["expenses-list__fallback"],children:" Found no expenses"}):Object(b.jsx)("ul",{className:N.a["expenses-list"],children:e.list.map((function(e){return Object(b.jsx)(v,{title:e.title,amount:e.amount,date:e.date},e.id)}))})},g=n(16),y=n(8),D=n.n(y),F=function(e){var t="0%";return e.max>0&&(t=Math.round(e.value/e.max*100)+"%"),Object(b.jsxs)("div",{className:D.a["chart-bar"],children:[Object(b.jsx)("div",{className:D.a["chart-bar__inner"],children:Object(b.jsx)("div",{className:D.a["chart-bar__fill"],style:{height:t}})}),Object(b.jsx)("div",{className:D.a["chart-bar__label"],children:e.label})]})},E=n(17),S=n.n(E),C=function(e){var t=e.data.map((function(e){return e.value})),n=Math.max.apply(Math,Object(r.a)(t));return Object(b.jsx)("div",{className:S.a.chart,children:e.data.map((function(e){return Object(b.jsx)(F,{value:e.value,max:n,label:e.label},e.label)}))})},k=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(g.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var s=t.value;n[s.date.getMonth()].value+=s.amount}}catch(c){a.e(c)}finally{a.f()}return Object(b.jsx)(C,{data:n})},A=function(e){var t=Object(a.useState)(2020),n=Object(i.a)(t,2),s=n[0],c=n[1],l=e.expenses.filter((function(e){return e.date.getFullYear()===s}));return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:_.a.expenses,children:[Object(b.jsx)(j,{selected:s,filterItems:function(e){c(+e)}}),Object(b.jsx)(k,{expenses:l}),Object(b.jsx)(w,{list:l})]})})},I=n(2),M=n(5),J=n.n(M),B={title:"",amount:0,date:""},L=function(e){var t=Object(a.useState)(B),n=Object(i.a)(t,2),s=n[0],c=n[1],l=Object(a.useState)(!1),r=Object(i.a)(l,2),o=r[0],_=r[1],x=function(){_((function(e){return!e}))};return Object(b.jsxs)(b.Fragment,{children:[o&&Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onSaveExpenseData(Object(I.a)(Object(I.a)({},s),{},{date:new Date(s.date)})),c(B),x()},children:[Object(b.jsxs)("div",{className:J.a["new-expense__controls"],children:[Object(b.jsxs)("div",{className:J.a["new-expense__control"],children:[Object(b.jsx)("label",{children:"Title"}),Object(b.jsx)("input",{type:"text",htmlFor:"title",value:s.title,onChange:function(e){return function(e){c((function(t){return Object(I.a)(Object(I.a)({},t),{},{title:e.target.value})}))}(e)}})]}),Object(b.jsxs)("div",{className:J.a["new-expense__control"],children:[Object(b.jsx)("label",{children:"Amount"}),Object(b.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:s.amount,onChange:function(e){return function(e){c((function(t){return Object(I.a)(Object(I.a)({},t),{},{amount:e.target.value})}))}(e)}})]}),Object(b.jsxs)("div",{className:J.a["new-expense__control"],children:[Object(b.jsx)("label",{children:"Date"}),Object(b.jsx)("input",{type:"date",min:"2019-1-1",max:"2022-12-31",value:s.date,onChange:function(e){return function(e){c((function(t){return Object(I.a)(Object(I.a)({},t),{},{date:e.target.value})}))}(e)}})]})]}),Object(b.jsxs)("div",{className:J.a["new-expense__actions"],children:[Object(b.jsx)("button",{type:"button",onClick:x,children:"Cancel"}),Object(b.jsx)("button",{type:"submit",children:"Add expense"})]})]}),!o&&Object(b.jsx)("button",{type:"button",onClick:x,children:"Add new expense"})]})},K=n(18),T=n.n(K),Y=function(e){return Object(b.jsx)("div",{className:T.a["new-expense"],children:Object(b.jsx)(L,{onSaveExpenseData:function(t){var n=Object(I.a)(Object(I.a)({},t),{},{id:Math.random().toString()});e.onAdd(n)}})})},H=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New Television",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];var Q=function(){var e=Object(a.useState)(H),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(Y,{onAdd:function(e){s((function(t){return[].concat(Object(r.a)(t),[e])}))}}),Object(b.jsx)(A,{expenses:n})]})};l.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(Q,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.682a7df7.chunk.js.map