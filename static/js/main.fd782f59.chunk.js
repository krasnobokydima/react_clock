(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),i=n(2),o=n(3),s=n(5),r=n(4),l=n(1),u=n.n(l),m=(n(12),n(0)),h=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={timerId:null,date:new Date},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this,e=setInterval((function(){t.setState({date:new Date})}),1e3);this.setState({timerId:e})}},{key:"componentWillUnmount",value:function(){null!==this.state.timerId&&clearInterval(this.state.timerId)}},{key:"render",value:function(){return Object(m.jsxs)("h1",{children:["Current time: ",this.state.date.toLocaleTimeString()]})}}]),n}(u.a.Component),d=function(t){return Object(m.jsx)("button",{type:"submit",onClick:t.onClick,children:t.name})},k=function(t){Object(s.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={isClockVisible:!0,clockName:0},t.setRandom=function(){t.setState({clockName:Math.random()})},t.hiding=function(){t.setState({isClockVisible:!1})},t.showing=function(){t.setState({isClockVisible:!0})},t}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(t,e){var n=e.clockName,c=this.state.clockName;n!==c&&console.log("The Clock was renamed from ".concat(n," to ").concat(c))}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[this.state.isClockVisible&&Object(m.jsx)(h,{name:this.state.clockName}),Object(m.jsx)(d,{name:"Hide clock",onClick:this.hiding}),Object(m.jsx)(d,{name:"Show clock",onClick:this.showing}),Object(m.jsx)(d,{name:"Set a random name",onClick:this.setRandom})]})}}]),n}(u.a.Component),b=k;a.a.render(Object(m.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.fd782f59.chunk.js.map