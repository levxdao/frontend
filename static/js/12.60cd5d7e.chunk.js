(this.webpackJsonp=this.webpackJsonp||[]).push([[12],{1192:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(59),i=n(320);t.a=function(e){var t=e.symbol,n=Object(o.a)();return r.a.createElement(i.a,{title:t?n("insufficient-",{symbol:t}):n("insufficient-balance"),disabled:!0})}},1199:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(20),i=n.n(o),c=n(0),s=n.n(c),l=n(4),u=n(21),d=n(55),f=n(59),m=n(320);t.a=function(e){var t,n=Object(f.a)(),a=Object(c.useContext)(d.b).approveToken,o=Object(c.useState)(!1),p=i()(o,2),b=p[0],y=p[1],v=Object(c.useCallback)((function(){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.token){n.next=19;break}return e.onError({}),y(!0),n.prev=3,n.next=6,r.a.awrap(a(e.token.address,e.spender));case 6:if(!(t=n.sent)){n.next=11;break}return n.next=10,r.a.awrap(t.wait());case 10:e.onSuccess();case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(3),e.onError(n.t0);case 16:return n.prev=16,y(!1),n.finish(16);case 19:case"end":return n.stop()}}),null,null,[[3,13,16,19]],Promise)}),[e.token]);return e.hidden?s.a.createElement(l.a,null):s.a.createElement(m.a,{title:n("approve-",{symbol:(null==(t=e.token)?void 0:t.symbol)||""}),onPress:v,loading:b,containerStyle:{marginBottom:u.g.tiny}})}},1207:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(0),r=n.n(a),o=n(240),i=n(4),c=n(21),s=n(40),l=n(23),u=n(1195),d=n(1200),f=n(87),m=n(1188),p=n(1202),b=n(1189),y=n(1198),v=n(80),g=n(1190),k=function(e){var t=e.state,n=e.emptyText,i=e.Item,c=Object(a.useCallback)((function(e){var n=e.item;return r.a.createElement(i,{key:n.symbol,token:n,selected:!1,onSelectToken:t.setSelectedLPToken})}),[t.setSelectedLPToken]),s=t.lpTokens.sort((function(e,t){var n=e.multiplier||0,a=t.multiplier||0;return n===a?(t.apy||0)-(e.apy||0):a-n}));return t.loading?r.a.createElement(p.a,null):0===s.length?r.a.createElement(h,{text:n}):r.a.createElement(o.a,{keyExtractor:function(e){return e.symbol},data:s,renderItem:c})},h=function(e){var t=e.text;return r.a.createElement(i.a,{style:{margin:c.g.normal}},r.a.createElement(v.a,{disabled:!0,style:{textAlign:"center",width:"100%"}},t))},O=function(e){var t=Object(s.a)().textMedium,n=Object(l.d)(e.token.balance,e.token.decimals,6),o=Object(a.useCallback)((function(){e.onSelectToken(e.token)}),[e.onSelectToken,e.token]);return r.a.createElement(b.a,{selected:e.selected,onPress:o,containerStyle:{marginBottom:m.a}},r.a.createElement(f.a,{style:{alignItems:"center"}},r.a.createElement(g.a,{token:e.token.tokenA,small:!0,replaceWETH:!0}),r.a.createElement(g.a,{token:e.token.tokenB,small:!0,replaceWETH:!0,style:{marginLeft:4}}),r.a.createElement(v.a,{medium:!0,caption:!0,style:{marginLeft:c.g.tiny}},e.token.tokenA.symbol,"-",e.token.tokenB.symbol),r.a.createElement(i.a,{style:{flex:1,marginLeft:c.g.tiny}},r.a.createElement(v.a,{caption:!0,light:!0,style:{textAlign:"right",color:t}},n)),e.selected?r.a.createElement(u.a,null):r.a.createElement(y.a,null)))};t.b=function(e){return r.a.createElement(i.a,{style:e.style},r.a.createElement(d.a,{title:e.title,expanded:!e.state.selectedLPToken,onExpand:function(){return e.state.setSelectedLPToken()}},r.a.createElement(k,{state:e.state,emptyText:e.emptyText,Item:e.Item})),e.state.selectedLPToken&&r.a.createElement(e.Item,{token:e.state.selectedLPToken,selected:!0,onSelectToken:function(){return e.state.setSelectedLPToken()}}))}},1209:function(e,t,n){"use strict";var a=n(10),r=n.n(a),o=n(2),i=n.n(o),c=n(20),s=n.n(c),l=n(0),u=n(139),d=n.n(u),f=n(55),m=n(321),p=n(1213),b=n(413),y=n(1214);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=!1;t.a=function(e){var t=Object(y.a)(),n=Object(l.useContext)(f.b),a=n.provider,r=n.address,o=n.tokens,c=Object(l.useState)(0),u=s()(c,2),v=u[0],h=u[1],O=Object(l.useState)(!0),E=s()(O,2),P=E[0],w=E[1],j=Object(l.useState)([]),x=s()(j,2),T=x[0],S=x[1],L=Object(l.useState)(),C=s()(L,2),A=C[0],I=C[1],D=Object(l.useState)(!1),B=s()(D,2),M=B[0],R=B[1],W=Object(l.useState)(),_=s()(W,2),q=_[0],U=_[1],F=Object(l.useState)(""),Z=s()(F,2),$=Z[0],G=Z[1],H=Object(b.a)().getPair,J=function(){var t;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(r&&a&&o.length>0)||k){n.next=11;break}return n.prev=1,k=!0,n.next=5,i.a.awrap("my-pools"===e?Object(m.d)(r,o,a):"pools"===e?Object(m.f)(r,o,a):"my-lp-tokens"===e?Object(m.b)(r,o,a):Object(m.e)(r,o,a));case 5:(t=n.sent)&&S(t);case 7:return n.prev=7,k=!1,w(!1),n.finish(7);case 11:case"end":return n.stop()}}),null,null,[[1,,7,11]],Promise)};return Object(l.useEffect)((function(){A||G("")}),[A]),d()((function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(w(!0),U(void 0),!A||!a){e.next=18;break}return e.prev=3,e.t0=U,e.next=7,i.a.awrap(H(A.tokenA,A.tokenB,a));case 7:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 11:e.prev=11,e.t2=e.catch(3);case 13:return e.prev=13,w(!1),e.finish(13);case 16:e.next=19;break;case 18:w(!1);case 19:case"end":return e.stop()}}),null,null,[[3,11,13,16]],Promise)}),[A,a]),Object(p.a)((function(t){return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r||!("pools"===e||o.length>0)){n.next=4;break}return t||w(!0),n.next=4,i.a.awrap(J());case 4:case"end":return n.stop()}}),null,null,null,Promise)}),(function(){return"updateLPTokens()"}),[o.length,r,v],0),g(g({},t),{},{fromToken:t.fromToken||(null==A?void 0:A.tokenA),toToken:t.toToken||(null==A?void 0:A.tokenB),updateLPTokens:J,loading:t.loading||P,lastTimeRefreshed:v,updateLastTimeRefreshed:function(){h(Date.now())},lpTokens:T,selectedLPToken:A,setSelectedLPToken:I,selectedLPTokenAllowed:M,setSelectedLPTokenAllowed:R,pair:q,amount:$,setAmount:G})}},1217:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n(21),c=n(1195),s=n(1200),l=n(87),u=n(1188),d=n(1189),f=n(1198),m=n(80),p=function(e){return r.a.createElement(d.a,{containerStyle:{marginBottom:u.a},style:{paddingLeft:i.g.small+i.g.tiny,paddingRight:i.g.small},selected:e.selected,disabled:e.selectable,onPress:function(){return null==e.setOption?void 0:e.setOption(e.selected?void 0:e.option)}},r.a.createElement(l.a,{style:{alignItems:"center"}},r.a.createElement(o.a,{style:{flex:1}},r.a.createElement(m.a,{fontWeight:"regular"},e.option.title),r.a.createElement(m.a,{note:!0,style:{marginTop:4}},e.option.description)),e.selected?r.a.createElement(c.a,null):r.a.createElement(f.a,null)))};t.a=function(e){return r.a.createElement(o.a,null,r.a.createElement(s.a,{title:e.title,expanded:!e.option,onExpand:function(){return e.setOption()}},e.options.map((function(t){var n;return r.a.createElement(p,{key:t.key,option:t,setOption:e.setOption,selected:t.key===(null==(n=e.option)?void 0:n.key)})}))),e.option&&r.a.createElement(p,{option:e.option,setOption:e.setOption,selected:!0,selectable:!1}))}},1220:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{s(a.next(e))}catch(t){o(t)}}function c(e){try{s(a.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.signERC2612Permit=t.signDaiPermit=void 0;const r=n(416),o=n(1221),i="0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",c=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],s=e=>"".padEnd(e,"0"),l=(e,t)=>a(void 0,void 0,void 0,(function*(){return o.hexToUtf8((yield r.call(e,t,"0x06fdde03")).substr(130))})),u=(e,t)=>a(void 0,void 0,void 0,(function*(){if("string"!==typeof t)return t;const n=t,[a,o]=yield Promise.all([l(e,n),r.getChainId(e)]);return{name:a,version:"1",chainId:o,verifyingContract:n}}));t.signDaiPermit=(e,t,n,o,l,d)=>a(void 0,void 0,void 0,(function*(){const a=t.verifyingContract||t,f={holder:n,spender:o,nonce:d||(yield r.call(e,a,`0x7ecebe00${s(24)}${n.substr(2)}`)),expiry:l||i,allowed:!0},m=((e,t)=>({types:{EIP712Domain:c,Permit:[{name:"holder",type:"address"},{name:"spender",type:"address"},{name:"nonce",type:"uint256"},{name:"expiry",type:"uint256"},{name:"allowed",type:"bool"}]},primaryType:"Permit",domain:t,message:e}))(f,yield u(e,t)),p=yield r.signData(e,n,m);return Object.assign(Object.assign({},p),f)})),t.signERC2612Permit=(e,t,n,o,l=i,d,f)=>a(void 0,void 0,void 0,(function*(){const a=t.verifyingContract||t,m={owner:n,spender:o,value:l,nonce:f||(yield r.call(e,a,`0x7ecebe00${s(24)}${n.substr(2)}`)),deadline:d||i},p=((e,t)=>({types:{EIP712Domain:c,Permit:[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}]},primaryType:"Permit",domain:t,message:e}))(m,yield u(e,t)),b=yield r.signData(e,n,p);return Object.assign(Object.assign({},b),m)}))},1221:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.hexToUtf8=void 0;const r=a(n(1222));t.hexToUtf8=function(e){let t="",n=0,a=(e=(e=(e=(e=(e=e.replace(/^0x/i,"")).replace(/^(?:00)*/,"")).split("").reverse().join("")).replace(/^(?:00)*/,"")).split("").reverse().join("")).length;for(let r=0;r<a;r+=2)n=parseInt(e.substr(r,2),16),t+=String.fromCharCode(n);return r.default.decode(t)}},1222:function(e,t,n){!function(e){var t,n,a,r=String.fromCharCode;function o(e){for(var t,n,a=[],r=0,o=e.length;r<o;)(t=e.charCodeAt(r++))>=55296&&t<=56319&&r<o?56320==(64512&(n=e.charCodeAt(r++)))?a.push(((1023&t)<<10)+(1023&n)+65536):(a.push(t),r--):a.push(t);return a}function i(e){if(e>=55296&&e<=57343)throw Error("Lone surrogate U+"+e.toString(16).toUpperCase()+" is not a scalar value")}function c(e,t){return r(e>>t&63|128)}function s(e){if(0==(4294967168&e))return r(e);var t="";return 0==(4294965248&e)?t=r(e>>6&31|192):0==(4294901760&e)?(i(e),t=r(e>>12&15|224),t+=c(e,6)):0==(4292870144&e)&&(t=r(e>>18&7|240),t+=c(e,12),t+=c(e,6)),t+=r(63&e|128)}function l(){if(a>=n)throw Error("Invalid byte index");var e=255&t[a];if(a++,128==(192&e))return 63&e;throw Error("Invalid continuation byte")}function u(){var e,r;if(a>n)throw Error("Invalid byte index");if(a==n)return!1;if(e=255&t[a],a++,0==(128&e))return e;if(192==(224&e)){if((r=(31&e)<<6|l())>=128)return r;throw Error("Invalid continuation byte")}if(224==(240&e)){if((r=(15&e)<<12|l()<<6|l())>=2048)return i(r),r;throw Error("Invalid continuation byte")}if(240==(248&e)&&(r=(7&e)<<18|l()<<12|l()<<6|l())>=65536&&r<=1114111)return r;throw Error("Invalid UTF-8 detected")}e.version="3.0.0",e.encode=function(e){for(var t=o(e),n=t.length,a=-1,r="";++a<n;)r+=s(t[a]);return r},e.decode=function(e){t=o(e),n=t.length,a=0;for(var i,c=[];!1!==(i=u());)c.push(i);return function(e){for(var t,n=e.length,a=-1,o="";++a<n;)(t=e[a])>65535&&(o+=r((t-=65536)>>>10&1023|55296),t=56320|1023&t),o+=r(t);return o}(c)}}(t)},1369:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(20),i=n.n(o),c=n(0),s=n.n(c),l=n(11),u=n(4),d=n(139),f=n.n(d),m=n(1199),p=n(407),b=n(1193),y=n(320),v=n(1194),g=n(408),k=n(409),h=n(1196),O=n(1201),E=n(1187),P=n(1197),w=n(1192),j=n(1207),x=n(1203),T=n(1217),S=n(80),L=n(410),C=n(1204),A=n(414),I=n(411),D=n(62),B=n(21),M=n(55),R=n(156),W=n(10),_=n.n(W),q=n(32),U=n(23),F=n(1209),Z=n(30),$=n.n(Z),G=n(1220),H=n(100),J=function(){var e=Object(c.useContext)(M.b).ethereum;return{migrate:Object(c.useCallback)((function(e,t,n){var a,o,i,c,s,l;return r.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return o=Object(U.g)("SushiRoll",D.g,n),i=Math.floor((new Date).getTime()/1e3)+1200,c=[e.tokenA.address,e.tokenB.address,t,q.ethers.constants.Zero,q.ethers.constants.Zero,i],u.next=5,r.a.awrap((a=o.estimateGas).migrate.apply(a,c));case 5:return s=u.sent,u.next=8,r.a.awrap(o.migrate.apply(o,c.concat([{gasLimit:s.mul(120).div(100)}])));case 8:return l=u.sent,u.abrupt("return",H.a.apply(void 0,[l,"SushiRoll.migrate()"].concat($()(c.map((function(e){return e.toString()}))))));case 10:case"end":return u.stop()}}),null,null,null,Promise)}),[e]),migrateWithPermit:Object(c.useCallback)((function(t,n,a){var o,i,c,s,l,u,d;return r.a.async((function(f){for(;;)switch(f.prev=f.next){case 0:return i=Object(U.g)("SushiRoll",D.g,a),c=Math.floor((new Date).getTime()/1e3)+1200,f.t0=r.a,f.t1=G.signERC2612Permit,f.t2=e,f.t3=t.address,f.next=8,r.a.awrap(a.getAddress());case 8:return f.t4=f.sent,f.t5=D.g,f.t6=n.toString(),f.t7=c,f.t8=(0,f.t1)(f.t2,f.t3,f.t4,f.t5,f.t6,f.t7),f.next=15,f.t0.awrap.call(f.t0,f.t8);case 15:return s=f.sent,l=[t.tokenA.address,t.tokenB.address,n,q.ethers.constants.Zero,q.ethers.constants.Zero,c,s.v,s.r,s.s],f.next=19,r.a.awrap((o=i.estimateGas).migrateWithPermit.apply(o,l));case 19:return u=f.sent,f.next=22,r.a.awrap(i.migrateWithPermit.apply(i,l.concat([{gasLimit:u.mul(120).div(100)}])));case 22:return d=f.sent,f.abrupt("return",H.a.apply(void 0,[d,"SushiRoll.migrateWithPermit()"].concat($()(l.map((function(e){return e.toString()}))))));case 24:case"end":return f.stop()}}),null,null,null,Promise)}),[e])}};function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){_()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var K=function(){var e=Object(c.useContext)(M.b).ethereum,t=Object(F.a)("my-uniswap-lp-tokens"),n=Object(c.useContext)(M.b),a=n.provider,o=n.signer,s=n.getTokenAllowance,l=n.updateTokens,u=J(),d=u.migrate,m=u.migrateWithPermit,p=Object(c.useState)(!1),b=i()(p,2),y=b[0],v=b[1],g=Object(c.useState)(),k=i()(g,2),h=k[0],O=k[1],E=Object(c.useState)(!1),P=i()(E,2),w=P[0],j=P[1];Object(c.useEffect)((function(){(null==e?void 0:e.isWalletConnect)?O("approve"):O(void 0)}),[e]),Object(c.useEffect)((function(){t.setSelectedLPToken()}),[h]),f()((function(){var e,n;return r.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(!(a&&o&&t.selectedLPToken)){i.next=12;break}return v(!0),t.setSelectedLPTokenAllowed(!1),i.prev=3,e=q.ethers.BigNumber.from(2).pow(96).sub(1),i.next=7,r.a.awrap(s(t.selectedLPToken.address,D.g));case 7:n=i.sent,t.setSelectedLPTokenAllowed(q.ethers.BigNumber.from(n).gte(e));case 9:return i.prev=9,v(!1),i.finish(9);case 12:case"end":return i.stop()}}),null,null,[[3,,9,12]],Promise)}),[a,o,t.selectedLPToken]);var x=Object(c.useCallback)((function(){var e,n,i;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(!(h&&t.selectedLPToken&&t.amount&&a&&o)){c.next=18;break}return j(!0),c.prev=2,e=Object(U.l)(t.amount,t.selectedLPToken.decimals),n="approve"===h?d:m,c.next=7,r.a.awrap(n(t.selectedLPToken,e,o));case 7:return i=c.sent,c.next=10,r.a.awrap(i.wait());case 10:return c.next=12,r.a.awrap(l());case 12:return c.next=14,r.a.awrap(t.updateLPTokens());case 14:t.setSelectedLPToken(void 0);case 15:return c.prev=15,j(!1),c.finish(15);case 18:case"end":return c.stop()}}),null,null,[[2,,15,18]],Promise)}),[h,t.selectedLPToken,t.amount,a,o,m,l]);return z(z({},t),{},{loading:t.loading||y,mode:h,setMode:O,onMigrate:x,migrating:w})},Q=n(59),V=n(412),X=function(){var e=Object(c.useContext)(M.b),t=e.ethereum,n=e.chainId,a=K();return 1!==n?s.a.createElement(v.a,null):s.a.createElement(u.a,{style:{marginTop:B.g.large}},!(null==t?void 0:t.isWalletConnect)&&s.a.createElement(s.a.Fragment,null,s.a.createElement(Y,{state:a}),s.a.createElement(b.a,null)),s.a.createElement(ee,{state:a}),s.a.createElement(b.a,null),s.a.createElement(te,{state:a}),s.a.createElement(ne,{state:a}))},Y=function(e){var t=e.state,n=Object(Q.a)(),a=[{key:"permit",title:n("non-hardware-wallet"),description:n("non-hardware-wallet-desc")},{key:"approve",title:n("hardware-wallet"),description:n("hardware-wallet-desc")}];return s.a.createElement(T.a,{title:n("wallet-type"),options:a,option:a.find((function(e){return e.key===t.mode})),setOption:function(e){return t.setMode(null==e?void 0:e.key)}})},ee=function(e){var t=e.state,n=Object(Q.a)();return t.mode?s.a.createElement(j.b,{state:t,title:n("your-uniswap-liquidity"),emptyText:n("you-dont-have-any-liquidity-on-uniswap"),Item:j.a}):s.a.createElement(E.a,{text:n("your-uniswap-liquidity"),disabled:!0})},te=function(e){var t=e.state,n=Object(Q.a)();return t.selectedLPToken?s.a.createElement(C.a,{title:n("amount-of-tokens"),token:t.selectedLPToken,amount:t.amount,onAmountChanged:t.setAmount}):s.a.createElement(E.a,{text:n("amount-of-tokens"),disabled:!0})},ne=function(e){var t,n=e.state,a=!n.selectedLPToken||Object(U.j)(n.amount);return s.a.createElement(P.a,null,s.a.createElement(x.a,{label:(null==(t=n.selectedLPToken)?void 0:t.symbol)||"SushiSwap LP",text:n.amount,disabled:a}),s.a.createElement(ae,{state:n}))},ae=function(e){var t=e.state,n=Object(c.useState)({}),a=i()(n,2),r=a[0],o=a[1];return f()((function(){return o({})}),[t.amount]),s.a.createElement(u.a,{style:{marginTop:B.g.normal}},!t.selectedLPToken||Object(U.j)(t.amount)?s.a.createElement(re,{state:t,onError:o,disabled:!0}):Object(U.l)(t.amount,t.selectedLPToken.decimals).gt(t.selectedLPToken.balance)?s.a.createElement(w.a,{symbol:t.selectedLPToken.symbol}):t.loading?s.a.createElement(O.a,null):s.a.createElement(s.a.Fragment,null,"approve"===t.mode&&!t.selectedLPTokenAllowed&&s.a.createElement(m.a,{token:t.selectedLPToken,spender:D.g,onSuccess:function(){return t.setSelectedLPTokenAllowed(!0)},onError:o}),s.a.createElement(re,{state:t,onError:o,disabled:"approve"===t.mode&&!t.selectedLPTokenAllowed})),r.message&&4001!==r.code&&s.a.createElement(h.a,{error:r}))},re=function(e){var t=e.state,n=e.onError,a=e.disabled,o=Object(Q.a)(),i=Object(R.a)("/farming","Farming");return s.a.createElement(y.a,{title:o("migrate-liquidity"),loading:t.migrating,onPress:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return n({}),e.prev=1,e.next=4,r.a.awrap(t.onMigrate());case 4:i(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(e.t0);case 10:case"end":return e.stop()}}),null,null,[[1,7]],Promise)},disabled:a})};t.default=function(){var e=Object(Q.a)();return s.a.createElement(V.a,null,s.a.createElement(g.a,null,s.a.createElement(p.a,null),s.a.createElement(k.a,null,s.a.createElement(L.a,{text:e("migrate-liquidity")}),s.a.createElement(S.a,{light:!0},e("migrate-liquidity-desc")),s.a.createElement(X,null)),"web"===l.a.OS&&s.a.createElement(A.a,null)),s.a.createElement(I.d,null))}}}]);
//# sourceMappingURL=12.60cd5d7e.chunk.js.map