(this.webpackJsonpcodechallenge=this.webpackJsonpcodechallenge||[]).push([[0],{61:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(22),r=c.n(i),a=c(6),j=c(7),l=c.n(j),b=c(12),o=c(24),d=c(3),h=c(4),O=c(23),u=c.n(O),x=c(13),m=c.n(x),p=c(0);var f=function(){var e,t=Object(n.useState)([]),c=Object(d.a)(t,2),s=c[0],i=c[1],r=Object(n.useState)([]),j=Object(d.a)(r,2),O=j[0],x=j[1],f=Object(n.useState)(""),g=Object(d.a)(f,2),v=g[0],N=g[1],y=Object(n.useState)(""),w=Object(d.a)(y,2),S=w[0],k=w[1],C=Object(n.useState)([]),A=Object(d.a)(C,2),D=A[0],E=A[1],I=Object(n.useState)(!1),z=Object(d.a)(I,2),L=z[0],M=z[1],P=Object(n.useState)(""),R=Object(d.a)(P,2),T=R[0],J=R[1],q=Object(n.useState)(null),B=Object(d.a)(q,2),F=B[0],G=B[1],H=Object(n.useState)(),K=Object(d.a)(H,2),Q=K[0],U=K[1],V=function(){var e=!0;return G(null),Object(h.isEmpty)(v)&&(G("Debes ingresar una reloj"),e=!1),Object(h.isEmpty)(S)&&(G("Debes ingresar una reloj"),e=!1),e},W=function(){var e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://gnews.io/api/v4/search?q=watches&token=148e7db7f9912b987535ef16fe28babb").then((function(e){i(e.data.articles)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://reactserviceapp.azurewebsites.net/api/Articulos").then((function(e){x(e.data)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){W(),X()}),[]),Object(p.jsxs)("div",{className:"container mt-5",children:[Object(p.jsx)("h1",{children:"Publicaciones Locales"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-8",children:[Object(p.jsx)("h4",{className:"text-center",children:"Lista Articulos"}),0===Object(h.size)(D)?Object(p.jsx)("li",{className:"list-group-item",children:"No hay articulos"}):Object(p.jsxs)("table",{className:"table",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Codigo"}),Object(p.jsx)("th",{children:"Titulo"}),Object(p.jsx)("th",{children:"Descripcion"}),Object(p.jsx)("th",{children:"Imagen"}),Object(p.jsx)("th",{children:"Acciones"})]})}),Object(p.jsx)("tbody",{children:D.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.id}),Object(p.jsx)("td",{children:e.title}),Object(p.jsx)("td",{children:e.descripcion}),Object(p.jsx)("td",{children:Object(p.jsx)("img",{src:e.logo})}),Object(p.jsxs)("td",{children:[Object(p.jsx)("button",{className:"btn btn-primary",onClick:function(){return N((t=e).title),k(t.descripcion),M(!0),void J(t.id);var t},children:"Editar"})," ","   ",Object(p.jsx)("button",{className:"btn btn-danger",onClick:function(){return function(e){var t=D.filter((function(t){return t.id!==e}));E(t)}(e.id)},children:"Eliminar"})]})]},e.id)}))})]})]}),Object(p.jsxs)("div",{className:"col-4",children:[Object(p.jsx)("h4",{className:"text-center",children:L?"Modificar articulo":"Agregar articulo"}),Object(p.jsxs)("form",{onSubmit:L?function(e){if(e.preventDefault(),V()){var t=D.map((function(e){return e.id===T?{id:T,title:v,descripcion:S,logo:Q}:e}));E(t),M(!1),J(""),N(""),k("")}}:function(e){if(e.preventDefault(),V()){var t={id:u.a.generate(),title:v,descripcion:S,logo:Q};E([].concat(Object(o.a)(D),[t])),N(""),k("")}},children:[F&&Object(p.jsx)("span",{className:"text-danger mb-2",children:F}),Object(p.jsx)("input",{type:"text",className:"form-control mb-2",placeholder:"Ingrese un titulo....",onChange:function(e){return N(e.target.value)},value:v}),Object(p.jsx)("textarea",(e={className:"form-control",type:"text"},Object(a.a)(e,"className","form-control mb-2"),Object(a.a)(e,"placeholder","Ingrese un contenido...."),Object(a.a)(e,"onChange",(function(e){return k(e.target.value)})),Object(a.a)(e,"value",S),e)),Object(p.jsx)("input",{className:"form-control",type:"file",name:"imagen",onChange:function(e){U(e.target.files[0]),console.log(Q);new FileReader}}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{className:L?"btn btn-warning btn-block":"btn btn-success btn-block",type:"submit",children:L?"Modificar":"Agregar"})]})]})]}),Object(p.jsx)("h1",{children:"Publicaciones Remotas"}),Object(p.jsx)("hr",{}),Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-12",children:[Object(p.jsx)("h4",{className:"text-center",children:"Lista Articulos"}),0===Object(h.size)(s)?Object(p.jsx)("li",{className:"list-group-item",children:"No hay articulos"}):Object(p.jsxs)("table",{className:"table",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Titulo"}),Object(p.jsx)("th",{children:"Contenido"}),Object(p.jsx)("th",{children:"Descripcion"}),Object(p.jsx)("th",{children:"Imagen"})]})}),Object(p.jsx)("tbody",{children:s.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.title}),Object(p.jsx)("td",{children:e.content}),Object(p.jsx)("td",{children:e.description}),Object(p.jsx)("td",{children:Object(p.jsx)("img",{src:e.image,height:"150px",margin:"auto"})})]})}))})]})]})}),Object(p.jsx)("h1",{children:"Publicaciones Remotas +"}),Object(p.jsx)("hr",{}),Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"col-12",children:[Object(p.jsx)("h4",{className:"text-center",children:"Lista Articulos"}),0===Object(h.size)(O)?Object(p.jsx)("li",{className:"list-group-item",children:"No hay articulos"}):Object(p.jsxs)("table",{className:"table",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Titulo"}),Object(p.jsx)("th",{children:"Contenido"}),Object(p.jsx)("th",{children:"Descripcion"}),Object(p.jsx)("th",{children:"Imagen"})]})}),Object(p.jsx)("tbody",{children:O.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.title}),Object(p.jsx)("td",{children:e.content}),Object(p.jsx)("td",{children:e.description}),Object(p.jsx)("td",{children:Object(p.jsx)("img",{src:e.url,height:"150px",margin:"auto"})})]},e.codigo)}))})]})]})})]})};c(60);r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(f,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.f2cdda0d.chunk.js.map