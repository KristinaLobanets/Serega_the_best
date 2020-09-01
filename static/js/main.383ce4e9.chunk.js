(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,a){t.exports={form:"ContactList_form__2qOOQ",title:"ContactList_title__ATLM_",contact_li:"ContactList_contact_li__3Mw54",contact_name:"ContactList_contact_name__16ElV",contact_btn:"ContactList_contact_btn__2cjDu"}},11:function(t,e,a){t.exports={block:"phonebook_block__3leaV",form:"phonebook_form__35hek",title:"phonebook_title__H8Ept",contacts:"phonebook_contacts__3Ras2",blockerror:"phonebook_blockerror__1CEC9"}},17:function(t,e,a){t.exports={block:"filter_block__3mcaS",title:"filter_title__z3VH_",search_txt:"filter_search_txt__3O6gA",form:"filter_form__cmOFk"}},23:function(t,e,a){t.exports={enter:"fadeContact_enter__TaX2X",enterActive:"fadeContact_enterActive__a7XZI",exit:"fadeContact_exit__19S4a",exitActive:"fadeContact_exitActive__2zSWF"}},24:function(t,e,a){t.exports={appear:"appear_appear__AXAqp",appearActive:"appear_appearActive__1VnKW"}},25:function(t,e,a){t.exports={enter:"errorFade_enter__e9dpU",enterActive:"errorFade_enterActive__1psXe",exit:"errorFade_exit__X1YLN",exitActive:"errorFade_exitActive__25R5t"}},29:function(t,e,a){t.exports=a(39)},39:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(6),o=a.n(r),l=a(4),s=a(9),m=a(26),i=a(42),u={addContact:Object(s.b)("@contacts/addContact",(function(t,e){return{payload:{contacts:{name:t,number:e,id:Object(i.a)()}}}})),deleteContact:Object(s.b)("@contact/deleteContact"),searchContact:Object(s.b)("@contact/filterContact")},_=a(3),p=Object(_.c)({contacts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0,a=e.type,n=e.payload;switch(a){case u.addContact.type:return[].concat(Object(m.a)(t),[n.contacts]);case u.deleteContact.type:return t.filter((function(t){return t.id!==n}));default:return t}},filter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,a=e.type,n=e.payload;switch(a){case u.searchContact.type:return n;default:return t}}}),f=Object(s.a)({reducer:{tasks:p}}),b=a(13),d=a(14),h=a(16),v=a(15),C=a(5),E=a.n(C),k=function(t){Object(h.a)(a,t);var e=Object(v.a)(a);function a(){var t;Object(b.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleName=function(e){t.setState({name:e.target.value})},t.handlNumber=function(e){t.setState({number:e.target.value})},t.handleSubmit=function(e){e.preventDefault();var a=t.state,n=a.name,c=a.number;t.props.contacts.find((function(t){return t.name===n}))?(t.props.onError(),t.setState({name:"",number:""})):(t.props.onAddContacts(n,c),t.setState({name:"",number:""}))},t}return Object(d.a)(a,[{key:"render",value:function(){var t=this.state,e=t.name,a=t.number;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:E.a.block},c.a.createElement("form",{onSubmit:this.handleSubmit,className:E.a.form},c.a.createElement("label",{className:E.a.label},c.a.createElement("span",{className:E.a.name_form}," Name:"),c.a.createElement("input",{className:E.a.input,type:"text",name:"name",placeholder:"Your Name",value:e,onChange:this.handleName})),c.a.createElement("label",{className:E.a.label},c.a.createElement("span",{className:E.a.name_form}," Number:"),c.a.createElement("input",{className:E.a.input,type:"text",name:"number",placeholder:"Your Number",value:a,onChange:this.handlNumber})),c.a.createElement("button",{className:E.a.button,type:"submit"},"Add contact"))))}}]),a}(n.Component),N={onAddContacts:u.addContact},O=Object(l.b)((function(t){return{contacts:t.tasks.contacts}}),N)(k),g=a(10),x=a.n(g),y=a(43),A=a(41),j=a(23),S=a.n(j),F={onRemove:u.deleteContact},w=Object(l.b)((function(t){return{contacts:t.tasks.contacts.filter((function(e){return e.name.toLowerCase().includes(t.tasks.filter.toLowerCase())}))}}),F)((function(t){var e=t.contacts,a=t.onRemove;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:x.a.form},c.a.createElement("h2",{className:x.a.title},"Contacts"),c.a.createElement(y.a,{component:"ul"},e.map((function(t){return c.a.createElement(A.a,{timeout:500,classNames:S.a,key:t.id},c.a.createElement("li",{className:x.a.contact_li},c.a.createElement("span",{className:x.a.contact_name},t.name," -",t.number),c.a.createElement("button",{className:x.a.contact_btn,onClick:function(){return a(t.id)}},"Delete")))})))))})),L=a(17),X=a.n(L),D={onSearchContact:u.searchContact},I=Object(l.b)((function(t){return{filter:t.tasks.filter}}),D)((function(t){var e=t.filter,a=t.onSearchContact;return c.a.createElement("div",{className:X.a.block},c.a.createElement("h2",{className:X.a.title},"Search"),c.a.createElement("input",{className:X.a.form,type:"text",placeholder:"search",value:e,onChange:function(t){return a(t.target.value)}}))})),J=a(11),M=a.n(J),R=a(24),V=a.n(R),H=a(25),T=a.n(H),Y=function(t){Object(h.a)(a,t);var e=Object(v.a)(a);function a(){var t;Object(b.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={error:!1},t.errorContact=function(){t.setState({error:!0}),setTimeout((function(){return t.setState({error:!1})}),5e3)},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=this;JSON.parse(localStorage.getItem("contacts")).map((function(e){return t.props.onAddContacts(e.name,e.number)}))}},{key:"componentDidUpdate",value:function(){localStorage.setItem("contacts",JSON.stringify(this.props.contacts))}},{key:"render",value:function(){var t=this.state.error;return c.a.createElement(c.a.Fragment,null,c.a.createElement(A.a,{in:t,timeout:250,classNames:T.a,unmountOnExit:!0},c.a.createElement("div",{className:M.a.blockerror},"Error! Contact is already exist!")),c.a.createElement("div",{className:M.a.block},c.a.createElement("div",{className:M.a.form},c.a.createElement(A.a,{in:!0,appear:!0,timeout:500,classNames:V.a,unmountOnExit:!0},c.a.createElement("h1",{className:M.a.title},"Phonebook")),c.a.createElement(O,{onError:this.errorContact})),c.a.createElement("div",{className:M.a.contacts},c.a.createElement(I,null),c.a.createElement(w,null))))}}]),a}(n.Component),q={onAddContacts:u.addContact},z=Object(l.b)((function(t){return{contacts:t.tasks.contacts}}),q)(Y),B=function(){return c.a.createElement("div",null,c.a.createElement(l.a,{store:f},c.a.createElement(z,null)))};o.a.render(c.a.createElement(B,null),document.getElementById("root"))},5:function(t,e,a){t.exports={block:"ContactForm_block__3L7f5",form:"ContactForm_form__1fuOn",label:"ContactForm_label__378f8",name_form:"ContactForm_name_form__16HcO",input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK"}}},[[29,1,2]]]);
//# sourceMappingURL=main.383ce4e9.chunk.js.map