(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{145:function(e,t,n){},193:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),r=n(40),o=n.n(r),a=(n(145),n(38)),s=n(3),l=n(69),j=n(9),b=n(18),d=n(136),u=n(209),h=n(208),m=n(210),g=n(207),O=n(47),x=n(133),f=n(43),p=n(203),v=n(204),S=n(215),w=n(205),y=n(213),z=n(206),k=n(2),W=function(e){var t=e.isSubmitting,n=e.label,i=Object(x.a)(e,["isSubmitting","label"]),c=Object(O.c)(i),r=Object(s.a)(c,2),o=r[0],l=r[1].error,j=Object(d.c)().colorMode;return Object(k.jsxs)(f.a,{isInvalid:!!l,children:[Object(k.jsx)(p.a,{htmlFor:o.name,children:n}),Object(k.jsxs)(v.a,{size:"md",children:[Object(k.jsx)(S.a,Object(a.a)(Object(a.a)(Object(a.a)({bg:"light"===j?"gray.200":"gray.800",height:"40px",pr:"4.5rem",autoComplete:"false",variant:"flushed"},o),i),{},{id:o.name})),Object(k.jsx)(w.a,{width:"4.5rem",children:Object(k.jsx)(y.a,{isLoading:t,height:"30px",mb:3,colorScheme:"twitter",bg:"red.400",color:"white",rounded:50,_hover:{bg:"gray.200",color:"blue.900"},mr:"10px",type:"submit",children:"Send"})})]}),l?Object(k.jsx)(z.a,{children:l}):null]})};function R(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var T,C=function(e){var t=e.index,n=e.message,i=e.senderName,c=Object(d.c)().colorMode,r="light"===c?"blue.400":"blue.900",o="light"===c?"white":"blue.200",a="light"===c?"gray.700":"gray.200";return 0===t?Object(k.jsxs)(g.b,{mt:5,children:[Object(k.jsx)(h.a,{display:"inline-block",padding:2,roundedTopLeft:10,roundedTopRight:10,roundedBottomRight:10,bg:r,maxW:300,w:"max-content",children:Object(k.jsx)(u.a,{fontSize:"15px",color:o,children:n})}),Object(k.jsx)(h.a,{children:Object(k.jsx)(u.a,{fontSize:"13px",color:a,children:i})})]}):Object(k.jsxs)(g.b,{pos:"relative",mt:5,children:[Object(k.jsx)(m.a,{maxW:300,w:"max-content",display:"inline-block",padding:2,pos:"relative",roundedTopLeft:10,roundedTopRight:10,roundedBottomRight:10,bg:r,children:Object(k.jsx)(u.a,{overflowX:"auto",wordBreak:"break-word",fontSize:"16px",color:o,children:n})}),Object(k.jsx)(h.a,{children:Object(k.jsx)(u.a,{fontSize:"13px",color:a,children:i})})]})},E=function(e){var t=e.index,n=e.message,c=e.senderName,r=Object(d.c)().colorMode,o="light"===r?"blue.400":"blue.900",a="light"===r?"white":"blue.200",l="light"===r?"gray.700":"gray.200",j=function(){var e=Object(i.useState)(R()),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){function e(){c(R())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}().width,b=Object(i.useState)(800),O=Object(s.a)(b,1)[0];return j<768?Object(k.jsx)(C,{message:n,index:t,senderName:c}):0===t?Object(k.jsxs)(g.b,{mt:5,children:[Object(k.jsx)(h.a,{display:"inline-block",padding:2,roundedTopLeft:10,roundedTopRight:10,roundedBottomRight:10,bg:o,maxW:O,w:"max-content",children:Object(k.jsx)(u.a,{fontSize:"15px",color:a,children:n})}),Object(k.jsx)(h.a,{children:Object(k.jsx)(u.a,{fontSize:"13px",color:l,children:c})})]}):Object(k.jsxs)(g.b,{pos:"relative",mt:5,children:[Object(k.jsx)(m.a,{maxW:j-300,w:"max-content",display:"inline-block",padding:2,pos:"relative",roundedTopLeft:10,roundedTopRight:10,roundedBottomRight:10,bg:o,children:Object(k.jsx)(u.a,{overflowX:"auto",wordBreak:"break-word",fontSize:"16px",color:a,children:n})}),Object(k.jsx)(h.a,{children:Object(k.jsx)(u.a,{fontSize:"13px",color:l,children:c})})]})},F=n(126),L=n(127),B=n.n(L),A=function(e){var t=Object(i.useState)([]),n=Object(s.a)(t,2),c=n[0],r=n[1],o=Object(d.c)().colorMode,a=Object(i.useState)(""),l=Object(s.a)(a,2),x=l[0],f=l[1],p=Object(j.f)(),v=Object(i.useState)([]),S=Object(s.a)(v,2),w=S[0],y=S[1],z=Object(i.useState)(""),R=Object(s.a)(z,2),C=R[0],L=R[1];Object(i.useEffect)((function(){var t;return e.username.length>1?f(e.username):p.push("/login"),e.room.length>1?L(e.room):p.push("/login"),x&&C&&(T=B()(),console.log("Connecting socket..."),function(e,t){var n={username:e,room:t};T&&T.emit("join",n)}(x,C)),t=function(e){y(e)},T&&T.on("onlineusers",(function(e){return t(e)})),function(e){if(!T)return!0;T.on("chat message",(function(t){return e(null,t)}))}((function(e,t){if(e)return!0;A(t)})),function(){var e;console.log("Disconnecting socket..."),T&&(T.emit("close",e),T.disconnect())}}),[p,e.username,x,e.room,C]);var A=function(e){r((function(t){return[].concat(Object(b.a)(t),[e])}))},M=F.animateScroll,N=function(e){var t;e.message.length>=1&&(t=e,T&&T.emit("chat message",t),c&&M.scrollTo(80*c.length))};return c.length<=0?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(u.a,{fontWeight:"200",fontSize:30,textAlign:"center",children:["Welcome ",x]}),Object(k.jsxs)(u.a,{fontWeight:"200",fontSize:30,textAlign:"center",children:["Online users: ",w.length]}),Object(k.jsx)(h.a,{ml:"10px",w:"100%",children:Object(k.jsx)(m.a,{bg:"light"===o?"white":"gray.800",pos:"fixed",w:"100%",zIndex:10,bottom:"0",children:Object(k.jsx)(O.b,{initialValues:{message:""},onSubmit:function(e,t){N({message:e.message,senderName:x,room:C}),t.setSubmitting(!1),e.message=""},children:function(e){var t=e.isSubmitting;return Object(k.jsx)(O.a,{children:Object(k.jsx)(m.a,{w:"auto",pos:"relative",mb:"10px",mr:"20px",children:Object(k.jsx)(W,{label:"",name:"message",placeholder:"Enter message",isSubmitting:t})})})}})})})]}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(u.a,{fontWeight:"200",fontSize:30,textAlign:"center",children:["Welcome ",x]}),Object(k.jsxs)(u.a,{fontWeight:"200",fontSize:30,textAlign:"center",children:["Online users: ",w.length]}),Object(k.jsxs)(h.a,{ml:"10px",w:"100%",children:[Object(k.jsx)(m.a,{bg:"light"===o?"white":"gray.800",pos:"fixed",w:"100%",zIndex:10,bottom:"0",children:Object(k.jsx)(O.b,{initialValues:{message:""},onSubmit:function(e,t){N({message:e.message,senderName:x,room:C}),t.setSubmitting(!1),e.message=""},children:function(e){var t=e.isSubmitting;return Object(k.jsx)(O.a,{children:Object(k.jsx)(m.a,{w:"auto",pos:"relative",mb:"10px",mr:"20px",children:Object(k.jsx)(W,{label:"",name:"message",placeholder:"Enter message",isSubmitting:t})})})}})}),Object(k.jsx)(h.a,{mb:"80px",w:"100%",pos:"relative",children:Object(k.jsx)(g.a,{children:null===c||void 0===c?void 0:c.map((function(e,t){return Object(k.jsx)("div",{children:Object(k.jsx)(E,{id:e.id,message:e.message,senderName:e.senderName,index:t})})}))})})]})]})},M=n(212),N=function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),c=n[0],r=n[1],o=Object(i.useState)("general"),a=Object(s.a)(o,2),l=a[0],b=(a[1],Object(j.f)()),d=Object(M.a)();return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("form",{onSubmit:function(t){t.preventDefault(),l&&c?(b.push("/"),e.handleUsername(c),e.handleRoom(l)):d({title:"Uh Oh :(",description:"All fields required",status:"warning",duration:4e3,isClosable:!0})},children:Object(k.jsxs)(h.a,{w:["90%","70%","60%","50%"],margin:"auto",mt:["50%","40%","30%","20%"],flexDir:"column",children:[Object(k.jsx)(u.a,{fontSize:[20,25,25,30],textAlign:"center",fontWeight:"200",children:"Welcome to my simple chat application!"}),Object(k.jsx)(u.a,{fontSize:[20,25,25,30],textAlign:"center",fontWeight:"200",children:"Rigth now it's very basic but soon there will be a bunch of features like different rooms etc."}),Object(k.jsxs)(h.a,{children:[Object(k.jsx)(S.a,{variant:"flushed",placeholder:"Enter Username",value:c,onChange:function(e){return r(e.target.value)}}),Object(k.jsx)(y.a,{_hover:{bg:"gray.200",color:"blue.900"},bg:"red.400",ml:10,type:"submit",children:"Enter"})]})]})})})},I=function(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)(""),o=Object(s.a)(r,2),b=o[0],d=o[1],u=function(e){c(e)},h=function(e){d(e)};return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(l.a,{children:Object(k.jsxs)(j.c,{children:[Object(k.jsx)(j.a,{exact:!0,path:"/",render:function(e){return Object(k.jsx)(A,Object(a.a)(Object(a.a)({},e),{},{room:b,username:n}))}}),Object(k.jsx)(j.a,{exact:!0,path:"/login",render:function(e){return Object(k.jsx)(N,Object(a.a)(Object(a.a)({},e),{},{handleRoom:h,handleUsername:u}))}})]})})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,216)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),r(e),o(e)}))},U=n(211),J=n(214),P=Object(U.a)({config:{initialColorMode:"dark",useSystemColorMode:!1}});o.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(J.a,{theme:P,children:Object(k.jsx)(I,{})})}),document.getElementById("root")),D()}},[[193,1,2]]]);
//# sourceMappingURL=main.ec680c3f.chunk.js.map