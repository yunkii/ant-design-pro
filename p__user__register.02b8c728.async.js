(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{a3w7:function(e,t,r){"use strict";var a=r("tAuX"),s=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("+L6B");var l=s(r("2/Rp"));r("jCWc");var i=s(r("kPKH"));r("14J3");var n=s(r("BMrR"));r("Q9mQ");var u=s(r("diRs"));r("miYZ");var o=s(r("tsqr"));r("MXD1");var d=s(r("CFYs")),c=s(r("p0pE")),f=s(r("2Taf")),g=s(r("vZ4D")),p=s(r("l4Ni")),m=s(r("ujKo")),h=s(r("MhPg"));r("5NDa");var v=s(r("5rEg"));r("OaEy");var E=s(r("2fM7"));r("y8nQ");var w=s(r("Vl3Y")),y=r("Y2fQ"),b=a(r("q1tI")),M=s(r("wY1l")),F=r("MuoO"),P=s(r("3a4m")),k=s(r("vyRF")),C=function(e,t,r,a){var s,l=arguments.length,i=l<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,r,a);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(i=(l<3?s(i):l>3?s(t,r,i):s(t,r))||i);return l>3&&i&&Object.defineProperty(t,r,i),i},N=w.default.Item,R=E.default.Option,S=v.default.Group,q={ok:b.default.createElement("div",{className:k.default.success},b.default.createElement(y.FormattedMessage,{id:"user-register.strength.strong"})),pass:b.default.createElement("div",{className:k.default.warning},b.default.createElement(y.FormattedMessage,{id:"user-register.strength.medium"})),poor:b.default.createElement("div",{className:k.default.error},b.default.createElement(y.FormattedMessage,{id:"user-register.strength.short"}))},x={ok:"success",pass:"normal",poor:"exception"},D=function(e){function t(){var e;return(0,f.default)(this,t),e=(0,p.default)(this,(0,m.default)(t).apply(this,arguments)),e.state={count:0,confirmDirty:!1,visible:!1,help:"",prefix:"86"},e.interval=void 0,e.onGetCaptcha=function(){var t=59;e.setState({count:t}),e.interval=window.setInterval(function(){t-=1,e.setState({count:t}),0===t&&clearInterval(e.interval)},1e3)},e.getPasswordStatus=function(){var t=e.props.form,r=t.getFieldValue("password");return r&&r.length>9?"ok":r&&r.length>5?"pass":"poor"},e.handleSubmit=function(t){t.preventDefault();var r=e.props,a=r.form,s=r.dispatch;a.validateFields({force:!0},function(t,r){if(!t){var a=e.state.prefix;s({type:"userRegister/submit",payload:(0,c.default)({},r,{prefix:a})})}})},e.checkConfirm=function(t,r,a){var s=e.props.form;r&&r!==s.getFieldValue("password")?a((0,y.formatMessage)({id:"user-register.password.twice"})):a()},e.checkPassword=function(t,r,a){var s=e.state,l=s.visible,i=s.confirmDirty;if(r)if(e.setState({help:""}),l||e.setState({visible:!!r}),r.length<6)a("error");else{var n=e.props.form;r&&i&&n.validateFields(["confirm"],{force:!0}),a()}else e.setState({help:(0,y.formatMessage)({id:"user-register.password.required"}),visible:!!r}),a("error")},e.changePrefix=function(t){e.setState({prefix:t})},e.renderPasswordProgress=function(){var t=e.props.form,r=t.getFieldValue("password"),a=e.getPasswordStatus();return r&&r.length?b.default.createElement("div",{className:k.default["progress-".concat(a)]},b.default.createElement(d.default,{status:x[a],className:k.default.progress,strokeWidth:6,percent:10*r.length>100?100:10*r.length,showInfo:!1})):null},e}return(0,h.default)(t,e),(0,g.default)(t,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.userRegister,r=e.form,a=r.getFieldValue("mail");"ok"===t.status&&(o.default.success("\u6ce8\u518c\u6210\u529f\uff01"),P.default.push({pathname:"/user/register-result",state:{account:a}}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props,t=e.form,r=e.submitting,a=t.getFieldDecorator,s=this.state,o=s.count,d=s.prefix,c=s.help,f=s.visible;return b.default.createElement("div",{className:k.default.main},b.default.createElement("h3",null,b.default.createElement(y.FormattedMessage,{id:"user-register.register.register"})),b.default.createElement(w.default,{onSubmit:this.handleSubmit},b.default.createElement(N,null,a("mail",{rules:[{required:!0,message:(0,y.formatMessage)({id:"user-register.email.required"})},{type:"email",message:(0,y.formatMessage)({id:"user-register.email.wrong-format"})}]})(b.default.createElement(v.default,{size:"large",placeholder:(0,y.formatMessage)({id:"user-register.email.placeholder"})}))),b.default.createElement(N,{help:c},b.default.createElement(u.default,{getPopupContainer:function(e){return e&&e.parentNode?e.parentNode:e},content:b.default.createElement("div",{style:{padding:"4px 0"}},q[this.getPasswordStatus()],this.renderPasswordProgress(),b.default.createElement("div",{style:{marginTop:10}},b.default.createElement(y.FormattedMessage,{id:"user-register.strength.msg"}))),overlayStyle:{width:240},placement:"right",visible:f},a("password",{rules:[{validator:this.checkPassword}]})(b.default.createElement(v.default,{size:"large",type:"password",placeholder:(0,y.formatMessage)({id:"user-register.password.placeholder"})})))),b.default.createElement(N,null,a("confirm",{rules:[{required:!0,message:(0,y.formatMessage)({id:"user-register.confirm-password.required"})},{validator:this.checkConfirm}]})(b.default.createElement(v.default,{size:"large",type:"password",placeholder:(0,y.formatMessage)({id:"user-register.confirm-password.placeholder"})}))),b.default.createElement(N,null,b.default.createElement(S,{compact:!0},b.default.createElement(E.default,{size:"large",value:d,onChange:this.changePrefix,style:{width:"20%"}},b.default.createElement(R,{value:"86"},"+86"),b.default.createElement(R,{value:"87"},"+87")),a("mobile",{rules:[{required:!0,message:(0,y.formatMessage)({id:"user-register.phone-number.required"})},{pattern:/^\d{11}$/,message:(0,y.formatMessage)({id:"user-register.phone-number.wrong-format"})}]})(b.default.createElement(v.default,{size:"large",style:{width:"80%"},placeholder:(0,y.formatMessage)({id:"user-register.phone-number.placeholder"})})))),b.default.createElement(N,null,b.default.createElement(n.default,{gutter:8},b.default.createElement(i.default,{span:16},a("captcha",{rules:[{required:!0,message:(0,y.formatMessage)({id:"user-register.verification-code.required"})}]})(b.default.createElement(v.default,{size:"large",placeholder:(0,y.formatMessage)({id:"user-register.verification-code.placeholder"})}))),b.default.createElement(i.default,{span:8},b.default.createElement(l.default,{size:"large",disabled:!!o,className:k.default.getCaptcha,onClick:this.onGetCaptcha},o?"".concat(o," s"):(0,y.formatMessage)({id:"user-register.register.get-verification-code"}))))),b.default.createElement(N,null,b.default.createElement(l.default,{size:"large",loading:r,className:k.default.submit,type:"primary",htmlType:"submit"},b.default.createElement(y.FormattedMessage,{id:"user-register.register.register"})),b.default.createElement(M.default,{className:k.default.login,to:"/user/login"},b.default.createElement(y.FormattedMessage,{id:"user-register.register.sign-in"})))))}}]),t}(b.Component);D=C([(0,F.connect)(function(e){var t=e.userRegister,r=e.loading;return{userRegister:t,submitting:r.effects["userRegister/submit"]}})],D);var z=w.default.create()(D);t.default=z},vyRF:function(e,t,r){e.exports={main:"antd-pro-pages-user-register-style-main",getCaptcha:"antd-pro-pages-user-register-style-getCaptcha",submit:"antd-pro-pages-user-register-style-submit",login:"antd-pro-pages-user-register-style-login",error:"antd-pro-pages-user-register-style-error",success:"antd-pro-pages-user-register-style-success",warning:"antd-pro-pages-user-register-style-warning","progress-pass":"antd-pro-pages-user-register-style-progress-pass",progress:"antd-pro-pages-user-register-style-progress"}}}]);
//# sourceMappingURL=p__user__register.02b8c728.async.js.map