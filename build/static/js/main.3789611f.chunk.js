(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(2),o=n(14),a=n.n(o),i=(n(20),n(3)),u=n(4),s=n.n(u),d="/api/persons/",l=function(){return s.a.get(d).then((function(e){return e.data}))},b=function(e){return s.a.post(d,e).then((function(e){return e.data}))},f=function(e){return s.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},h=function(e,t){return s.a.put("".concat(d,"/").concat(e),t).then((function(e){return e.data}))},j=function(e){var t=e.notificationMessage;if(!t||!t.message||!t.message.length)return null;var n={color:t.error?"red":"green",fontSize:16,background:"lightgrey",borderStyle:"solid",borderRadius:5,padding:10,maringBottom:10};return Object(r.jsx)("div",{className:"error",style:n,children:t.message})},m=function(e){return Object(r.jsxs)("form",{onSubmit:e.addorUpdatePersons,children:[Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{value:e.newName,onChange:e.addNewName})]}),Object(r.jsxs)("div",{children:["number:  ",Object(r.jsx)("input",{value:e.newNumber,onChange:e.addNewNumber})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})},p=function(e){return Object(r.jsxs)("p",{children:["filter shown with: ",Object(r.jsx)("input",{value:e.searchText,onChange:e.setToSearchText})]})},O=function(e){return Object(r.jsx)("div",{children:e.persons.map((function(t){return 0===e.persons.length||(t.name.toUpperCase().includes(e.searchText.toUpperCase())?Object(r.jsxs)("p",{children:[t.name," ",t.number," ",Object(r.jsx)("button",{type:"submit",onClick:function(){return e.handleDelete(t.id)},children:" delete"})," "]},t.id):null)}))})},x=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],a=Object(c.useState)(""),u=Object(i.a)(a,2),s=u[0],d=u[1],x=Object(c.useState)(""),g=Object(i.a)(x,2),v=g[0],w=g[1],N=Object(c.useState)(""),S=Object(i.a)(N,2),T=S[0],k=S[1],y=Object(c.useState)({}),C=Object(i.a)(y,2),U=C[0],D=C[1];Object(c.useEffect)((function(){l().then((function(e){o(e)}))}),[]);return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(j,{notificationMessage:U}),Object(r.jsx)(p,{searchText:T,setToSearchText:function(e){return k(e.target.value)}}),Object(r.jsx)("h3",{children:"add a new"}),Object(r.jsx)(m,{addNewName:function(e){return d(e.target.value)},addNewNumber:function(e){return w(e.target.value)},addorUpdatePersons:function(e){e.preventDefault();var t=n.filter((function(e){return e.name.toUpperCase()===s.toUpperCase()}));if(t.length){if(window.confirm("".concat(s," is already added to the phonebook, replace the old number with a new one?"))){var r={name:s,number:v,id:t[0].id};h(t[0].id,r).then((function(e){o(n.map((function(n){return n.id!==t[0].id?n:e})))})).catch((function(e){o(n.filter((function(e){return e.id!==t[0].id}))),D({message:"Information of ".concat(s," has already been removed from server"),error:!0}),setTimeout((function(){D(null)}),5e3)}))}}else{var c={name:s,number:v,id:n.length+1};b(c).then((function(e){o(n.concat(e))}))}D({message:"Added ".concat(s),error:!1}),setTimeout((function(){D(null)}),5e3),d(""),w("")},newName:s,newNumber:v}),Object(r.jsx)("h3",{children:"Numbers"}),Object(r.jsx)(O,{persons:n,searchText:T,handleDelete:function(e){window.confirm("delete ".concat(n.filter((function(t){return t.id===e}))[0].name," ?"))&&f(e).then((function(t){return o(n.filter((function(t){return t.id!==e})))})).catch((function(t){return o(n.filter((function(t){return t.id!==e})))}))}})]})})};a.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.3789611f.chunk.js.map