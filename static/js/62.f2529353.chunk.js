"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[62],{2395:function(e,n,s){s.d(n,{Z:function(){return T}});s(2791);var a=s(1694),r=s.n(a),i=s(19),t="header_headerWrapper__QdJE9",c="header_btn__1IUmW",l="header_logo__FGZpU",o="header_played__joW2C",d="header_selected__EEVbh",u=s(5151),m=s(6976),_=s(9271),h=s(8533),x=s(1282),f=s(9395),j=s(184),N=function(){var e=(0,u.T)(),n=(0,_.TH)(),s=(0,u.C)(x.zQ),a=(0,u.C)(x.x7),N=(0,_.k6)();return(0,j.jsxs)("div",{className:r()(t,s&&o,a&&d),children:[(0,j.jsx)("img",{className:r()(l),src:i.Z,alt:"logo"}),n.pathname===h.Kz&&(0,j.jsxs)("h3",{children:[(0,j.jsx)("span",{onClick:function(){return N.push("/en/start")},children:"EN"})," |",(0,j.jsx)("span",{onClick:function(){return N.push("/pt/start")},children:"PT"})]}),n.pathname===h.Yk&&(0,j.jsx)("div",{className:c,children:(0,j.jsx)(f.Z,{onClick:s?function(){e(m.N.reset()),N.push("/en/start")}:function(){e(m.N.setIsPlayed(!0))},children:s?"Back to home":"START"})})]})},p={wrapper:"layout_wrapper__5XsrG",main:"layout_main__tu3vq"},v="footer_winners__ndlf2",g="winners_winners__oDJki",w="winners_visible__Ww893",C="winners_contentHolder__UB2N1",k="winners_button__Zfju4",Z="winners_close__R8JZI",b="winners_empty__xjxV7",y=s(9978),S=function(){var e=(0,u.T)(),n=(0,u.C)(x.U),s=(0,u.C)(x.ix);return(0,j.jsx)("div",{className:r()(g,n&&w),onClick:function(){e(m.N.setIsWinnersVisible(!1))},children:(0,j.jsxs)("div",{className:r()(C),children:[(0,j.jsx)("button",{className:r()(k),children:"our lucky winners"}),(0,j.jsx)("img",{className:r()(Z),src:y.Z,alt:"Close button"}),(0,j.jsx)("ul",{children:s.length?s.map((function(e,n){return(0,j.jsxs)("li",{children:[(0,j.jsx)("p",{children:e.name}),(0,j.jsx)("span",{children:new Date(e.date).toLocaleDateString()})]},n)})):(0,j.jsx)("p",{className:b,children:"So far, no one has the status of a winner, but you can always become one of them!"})})]})})},I=function(){var e=(0,u.T)();return(0,j.jsxs)("div",{className:r()(v),children:[(0,j.jsx)(f.Z,{outlined:!0,onClick:function(){e(m.N.setIsWinnersVisible(!0))},children:"Our lucky Winners"}),(0,j.jsx)(S,{})]})},T=function(e){var n=e.children;return(0,j.jsxs)("div",{className:r()(p.wrapper),children:[(0,j.jsx)(N,{}),(0,j.jsx)("main",{className:r()(p.main),children:(0,j.jsx)("div",{className:r()(p.container),children:n})}),(0,j.jsx)(I,{})]})}},8030:function(e,n,s){s.r(n),s.d(n,{default:function(){return T}});var a=s(2791),r=s(2395),i=s(2982),t=s(3063),c=s(885),l="game_wrapper__J4sKb",o="game_container__vJLFa",d="game_played__EzS0n",u="game_pizza__ZNlkg",m="game_name__JGRiG",_="game_imageHolder__q2IXK",h=s(1694),x=s.n(h),f=s(1282),j=s(5151),N=s(830),p=s(6976),v="result_message__XpYV8",g="result_imageHolder__FeiAH",w="result_content__XsWUj",C="result_messageVisible__EFSFb",k="result_textGreen__IPXff",Z="result_textRed__rIJ5r",b=s(184),y=function(){var e=(0,j.C)(f.oY),n=(0,j.C)(f.xg),s=(0,a.useState)(!1),r=(0,c.Z)(s,2),i=r[0],t=r[1];return(0,a.useEffect)((function(){var e=setTimeout((function(){t(!0)}),1e3);return function(){return clearTimeout(e)}}),[]),(0,b.jsxs)("div",{className:x()(v,i&&C),children:[(0,b.jsx)("div",{className:x()(w),children:n?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h3",{className:x()(k),children:"You win!"}),(0,b.jsx)("h4",{children:e}),(0,b.jsx)("h3",{className:x()(k),children:"Get your pizza for free"})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("h4",{children:e}),(0,b.jsxs)("h3",{className:x()(Z),children:["Oops!",(0,b.jsx)("br",{})," Try next time"]})]})}),(0,b.jsx)("div",{className:x()(g),children:(0,b.jsx)(N.Z,{large:!0})})]})},S=[{id:1,name:"Your name"},{id:2,name:"Santiago"},{id:3,name:"Maria"},{id:4,name:"Pedro"},{id:5,name:"Francisco"},{id:6,name:"Mariana"},{id:7,name:"Margarida"},{id:8,name:"Matilde"},{id:9,name:"Jo\xe3o"}],I=function(){var e=(0,a.useState)(S),n=(0,c.Z)(e,2),s=n[0],r=n[1],h=(0,j.T)(),v=(0,j.C)(f.zQ),g=(0,j.C)(f.x7),w=(0,j.C)(f.oY);(0,a.useEffect)((function(){var e=s.find((function(e){return e.name.toLowerCase()===w.toLowerCase()}));e&&r(s.map((function(n){return n.name.toLowerCase()===e.name.toLowerCase()?(0,t.Z)((0,t.Z)({},n),{},{name:"Antonio"}):n})))}),[w,s]);var C=function(e){var n,s=localStorage.getItem("winners"),a={date:new Date,name:e};if(s){var r=JSON.parse(s);n=[].concat((0,i.Z)(r),[a])}else n=[a];localStorage.setItem("winners",JSON.stringify(n)),h(p.N.setWinners(n))};return(0,b.jsx)("div",{className:l,children:g?(0,b.jsx)(y,{}):(0,b.jsx)("div",{className:x()(o,v&&d),children:s.map((function(e,n){return(0,b.jsx)("div",{className:x()(u),onClick:function(){return function(){if(v){if(Math.floor(100*Math.random())<=11)C(w),h(p.N.setIsWinner(!0));else{var e=s[Math.floor(Math.random()*s.length)].name;h(e===w?p.N.setName(s[8].name):p.N.setName(e))}h(p.N.setIsSelected(!0))}}()},children:(0,b.jsxs)("div",{className:x()(_),children:[(0,b.jsx)(N.Z,{}),!v&&(0,b.jsx)("h3",{className:x()(m),children:0===n?w:e.name})]})},e.id)}))})})},T=function(){return(0,b.jsx)(r.Z,{children:(0,b.jsx)(I,{})})}}}]);
//# sourceMappingURL=62.f2529353.chunk.js.map