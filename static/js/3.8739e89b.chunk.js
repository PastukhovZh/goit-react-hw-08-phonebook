"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[3],{3:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,a,i,s,o,l=t(2791),u=t(9434),c=t(4270),d=t(168),p=t(6444),x=p.ZP.ul(r||(r=(0,d.Z)(["\ndisplay: flex;\nwidth: 300px;\nflex-direction: column;\n"]))),h=p.ZP.li(a||(a=(0,d.Z)(["\ndisplay: flex;\nmargin-bottom: 10px;\nalign-items: center;\njustify-content: space-between;\noutline: 1px solid black;\nborder-radius: 4px;\npadding: 0 10px;\n"]))),m=p.ZP.button(i||(i=(0,d.Z)(["\nwidth: 50px;\nheight: 30px;\nborder-radius: 4px;\nbackground-color: transparent;\nborder-color: whitesmokes;\n\n:focus{\n    box-shadow: 10px 5px 5px lightblue;\n}\n"]))),f=p.ZP.div(s||(s=(0,d.Z)(["\ndisplay: flex;\nflex-direction: row;\n\n"]))),b=p.ZP.p(o||(o=(0,d.Z)(["\nmargin-right:10px\n"]))),g=t(2007),Z=t.n(g),v=function(n){return n.contacts},w=function(n){return n.filters.filters},j=function(n){return n.contacts.isLoading},k=t(3634),y=t(184),P=function(){var n=function(n,e){return void 0===e&&(e=""),n.items.filter((function(n){return n.name.toLowerCase().includes(e.value)}))}((0,u.v9)(v),(0,u.v9)(w)),e=(0,u.I0)();return(0,y.jsx)(x,{children:n.map((function(n){var t=n.id,r=n.name,a=n.phone;return(0,y.jsxs)(h,{children:[(0,y.jsxs)(f,{children:[(0,y.jsx)(b,{children:r}),(0,y.jsx)(b,{children:a})]}),(0,y.jsx)(m,{type:"button",onClick:function(){return e((0,k.GK)(t))},children:"Delete"})]},t)}))})};x.propTypes={contacts:Z().arrayOf(Z().shape({number:Z().number.isRequired,id:Z().string.isRequired,name:Z().string.isRequired}))};var C,q,A,z,F=t(885),L=p.ZP.form(C||(C=(0,d.Z)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: flex-start;\noutline: 1px solid black;\npadding: 20px;\n"]))),R=p.ZP.label(q||(q=(0,d.Z)(["\ndisplay: flex;\nflex-direction: column;\nfont-weight: 600;\n\n"]))),_=p.ZP.input(A||(A=(0,d.Z)(["\nwidth: 200px;\nmargin-bottom: 20px;\nmargin-top: 10px;\nborder-color: whitesmoke;\noutline: transparent;\nborder-radius: 4px;\nheight: 20px;\n:focus{\n    box-shadow: 10px 5px 5px lightblue;\n}\n"]))),I=p.ZP.button(z||(z=(0,d.Z)(["\nwidth: 100px;\nborder-radius: 4px;\nbackground-color: transparent;\nborder-color: whitesmokes;\n:focus{\n    box-shadow: 10px 5px 5px lightblue;\n}\n"]))),N=function(){var n=(0,l.useState)(""),e=(0,F.Z)(n,2),t=e[0],r=e[1],a=(0,l.useState)(""),i=(0,F.Z)(a,2),s=i[0],o=i[1],c=function(n){switch(n.target.name){case"name":r(n.target.value);break;case"number":o(n.target.value);break;default:return}},d=(0,u.I0)(),p=(0,u.v9)(v),x=function(){r(""),o("")};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("h1",{children:"Phonebook"}),(0,y.jsxs)(L,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.name.value,t=n.target.elements.number.value,r={name:e,number:t};p.items.find((function(n){return n.name.toLowerCase()===e.toLowerCase()}))?alert("".concat(e," is already in contacts.")):d((0,k.uK)(r)),x()},children:[(0,y.jsxs)(R,{children:[" Name",(0,y.jsx)(_,{onChange:c,value:t,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,y.jsxs)(R,{children:[" Number",(0,y.jsx)(_,{onChange:c,value:s,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,y.jsx)(I,{type:"submit",children:"Add friend"})]})]})};function S(){var n=(0,u.I0)(),e=(0,u.v9)(j);return(0,l.useEffect)((function(){n((0,k.yF)())}),[n]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(c.q,{children:(0,y.jsx)("title",{children:"Your contacts"})}),(0,y.jsx)(N,{}),(0,y.jsx)("div",{children:e&&"Request in progress..."}),(0,y.jsx)(P,{})]})}}}]);
//# sourceMappingURL=3.8739e89b.chunk.js.map