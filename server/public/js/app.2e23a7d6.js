(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d217357":"98bc1d20","chunk-2d22d746":"3184e0ea","chunk-65ee592e":"9a18e7e0","chunk-d7047e46":"8fd68a55","chunk-2cef5a7a":"59f80f2f","chunk-de89dae2":"bfacd7bb"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-65ee592e":1,"chunk-d7047e46":1,"chunk-2cef5a7a":1,"chunk-de89dae2":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d217357":"31d6cfe0","chunk-2d22d746":"31d6cfe0","chunk-65ee592e":"ad0bdd06","chunk-d7047e46":"d2d64730","chunk-2cef5a7a":"35334958","chunk-de89dae2":"1a5a48c4"}[e]+".css",c=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===c))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===c)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],d.parentNode.removeChild(d),n(o)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}c[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00c2":function(e,t,n){"use strict";var r="id_token",a=function(){return window.localStorage.getItem(r)},c=function(e){window.localStorage.setItem(r,e)},o=function(){window.localStorage.removeItem(r)};t["a"]={getToken:a,saveToken:c,destroyToken:o}},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},4360:function(e,t,n){"use strict";var r,a,c,o,i,u=n("2b0e"),s=n("2f62"),l=n("bd86"),f=(n("96cf"),n("3b8d")),d=n("5ce5"),p=n("6c33"),m="FETCH_START",h="FETCH_END",g="SET_TICKET",b="SET_TICKETS",v="SET_TICKETS_COUNT",k="SET_COMMENT_IN_TICKET",O="SET_COMMENTS",w="SET_IMAGE_URL",E="SET_AUTH",_="PURGE_AUTH",y="SET_ERROR",j={tags:[],tickets:[],isLoading:!0,ticketsCount:0},T={ticketsCount:function(e){return e.ticketsCount},tickets:function(e){return e.tickets},isLoading:function(e){return e.isLoading}},C=Object(l["a"])({},p["b"],function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.commit(m),e.next=3,d["c"].getTickets();case 3:n=e.sent,r=n.data,t.commit(h),t.commit(b,r),t.commit(v,r.length);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),P=(r={},Object(l["a"])(r,m,(function(e){e.isLoading=!0})),Object(l["a"])(r,h,(function(e){e.isLoading=!1})),Object(l["a"])(r,b,(function(e,t){e.tickets=t})),Object(l["a"])(r,v,(function(e,t){e.ticketsCount=t})),r),A={state:j,getters:T,actions:C,mutations:P},S=n("00c2"),x={errors:null,user:{_id:"",username:"",email:"",imgAvatar:""},isAuthenticated:!!S["a"].getToken()},R={currentUser:function(e){return e.user={_id:"5e26f691358276336845a086",username:"Mario Martin",email:"mariomarsan7@gmail.com",imgAvatar:"https://avatars.slack-edge.com/2017-05-22/185651642560_074e8eb908d505721a15_512.jpg"},e.user},isAuthenticated:function(e){return e.isAuthenticated}},U=(a={},Object(l["a"])(a,p["d"],function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d["a"].login();case 2:n=e.sent,n?t.commit(E,n):t.commit(y);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(l["a"])(a,p["e"],function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d["a"].logout();case 2:n=e.sent,200===n.status?t.commit(_):t.commit(y);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),a),L=(c={},Object(l["a"])(c,y,(function(e,t){e.errors=t})),Object(l["a"])(c,E,(function(e,t){e.isAuthenticated=!0,e.user=t,e.errors={}})),Object(l["a"])(c,_,(function(e){e.isAuthenticated=!1,e.user={},e.errors={}})),c),N={state:x,getters:R,actions:U,mutations:L},I=(n("8e6e"),n("ac6a"),n("456d"),n("a481"),n("75fc"));function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(l["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var V={data:{},comments:[]},H={getTicket:function(e){return e.data},getComments:function(e){return e.comments}},K=(o={},Object(l["a"])(o,p["a"],function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d["c"].getTicket(n);case 2:r=e.sent,a=r.data,t.commit(g,a),t.dispatch(p["c"],n);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Object(l["a"])(o,p["c"],function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d["b"].getTicketComments(n);case 2:return r=e.sent,a=r.data,t.commit(O,a),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Object(l["a"])(o,p["h"],function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d["c"].saveTicket(n);case 3:t.commit(g,n),e.next=10;break;case 6:return e.prev=6,e.t0=e["catch"](0),window.console.log("error",e.t0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}()),Object(l["a"])(o,p["g"],function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.form,a=n.id,e.next=3,d["b"].saveComment(r,a);case 3:c=e.sent,o=c.data,o&&(t.commit(k,o),t.dispatch(p["c"],a));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),Object(l["a"])(o,p["f"],(function(e,t){var n=t.ticket;e.commit(w,n)})),o),G=(i={},Object(l["a"])(i,g,(function(e,t){e.data=M({},t)})),Object(l["a"])(i,O,(function(e,t){e.comments=Object(I["a"])(t)})),Object(l["a"])(i,k,(function(e,t){u["default"].set(e.comments,e.comments.length,t)})),Object(l["a"])(i,w,(function(e,t){e.data.content=t.content.replace("blob:".concat(Object({NODE_ENV:"production",VUE_APP_URL:"https://easy-answer-vue.herokuapp.com",VUE_APP_API:"https://easy-answer-vue.herokuapp.com/api",VUE_APP_TITLE:"Easy Answer 2",VUE_APP_VERSION:"1.0.0",BASE_URL:"/"}).VUE_APP_WEB).concat(t.image.filename),t.imageUrl)})),i),B={state:V,getters:H,actions:K,mutations:G};u["default"].use(s["a"]);t["a"]=new s["a"].Store({modules:{home:A,auth:N,ticket:B}})},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view")],1)},c=[],o=(n("2dd8"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"home"}}},[e._v("\n      Easy Answer 2\n    ")]),e.isAuthenticated?n("ul",{staticClass:"nav navbar-nav pull-xs-right"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"new"}}},[n("i",{staticClass:"ion-compose"}),e._v("New Ticket\n        ")])],1),n("li",{staticClass:"nav-item"},[n("span",[n("router-link",{staticClass:"nav-link",attrs:{exact:"",to:{name:"settings"}}},[n("i",{staticClass:"ion-gear-a"}),e._v("Settings\n          ")])],1)]),e.currentUser.username?n("li",{staticClass:"nav-item"},[n("span",[n("router-link",{staticClass:"nav-link",attrs:{exact:"",to:{name:"profile",params:{username:e.currentUser.username}}}},[e._v("\n            "+e._s(e.currentUser.username)+"\n          ")])],1)]):e._e(),n("li",{staticClass:"nav-item"},[n("button",{staticClass:"btn btn-primary",on:{click:e.logout}},[e._v("\n          Logout\n        ")])])]):n("ul",{staticClass:"nav navbar-nav pull-xs-right"},[n("li",{staticClass:"nav-item"},[n("button",{staticClass:"btn btn-lg btn-slack",on:{click:e.login}},[n("i",{staticClass:"fa fa-slack"}),e._v("Login Slack\n        ")]),n("a",{staticClass:"btn btn-primary",attrs:{href:"/auth/login"}},[e._v("Login")])]),n("li",{staticClass:"nav-item"})])],1)])}),i=[],u=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),s=n("2f62"),l=n("6c33");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(u["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={name:"Header",computed:d({},Object(s["b"])(["currentUser","isAuthenticated"])),methods:{login:function(){this.$store.dispatch(l["d"])},logout:function(){this.$store.dispatch(l["e"])}}},m=p,h=n("2877"),g=Object(h["a"])(m,o,i,!1,null,null,null),b=g.exports,v={name:"App",components:{Header:b}},k=v,O=(n("034f"),Object(h["a"])(k,a,c,!1,null,null,null)),w=O.exports,E=n("8c4f");r["default"].use(E["a"]);var _=new E["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:function(){return n.e("chunk-65ee592e").then(n.bind(null,"bb51"))}},{path:"/logout",name:"login",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/auth/profile",name:"profile",component:function(){return n.e("chunk-2d217357").then(n.bind(null,"c66d"))}},{path:"/ticket/new",name:"new",component:function(){return Promise.all([n.e("chunk-d7047e46"),n.e("chunk-de89dae2")]).then(n.bind(null,"8fc2"))}},{path:"/ticket/:id/edit",name:"new",component:function(){return Promise.all([n.e("chunk-d7047e46"),n.e("chunk-de89dae2")]).then(n.bind(null,"8fc2"))}},{path:"/ticket/:id",name:"ticket-detail",component:function(){return Promise.all([n.e("chunk-d7047e46"),n.e("chunk-2cef5a7a")]).then(n.bind(null,"f78a"))}},{path:"/about",name:"about",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}]}),y=n("4360"),j=n("1dce"),T=n.n(j),C=n("5ce5"),P=n("70f2"),A=n.n(P),S=function(e){return A()(new Date(e),"DD-MM-YYYY HH:mm")},x=n("5f5b"),R=n("b1e0"),U=(n("fb98"),n("9483"));Object(U["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["default"].use(x["a"]),r["default"].use(R["a"]),r["default"].use(T.a),r["default"].filter("date",S),r["default"].config.productionTip=!1,C["d"].init(),new r["default"]({router:_,store:y["a"],render:function(e){return e(w)}}).$mount("#app")},"5ce5":function(e,t,n){"use strict";n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return p}));var r=n("2b0e"),a=n("bc3a"),c=n.n(a),o=n("a7fe"),i=n.n(o),u=n("00c2"),s="https://easy-answer-vue.herokuapp.com/api",l={init:function(){console.log(Object({NODE_ENV:"production",VUE_APP_URL:"https://easy-answer-vue.herokuapp.com",VUE_APP_API:"https://easy-answer-vue.herokuapp.com/api",VUE_APP_TITLE:"Easy Answer 2",VUE_APP_VERSION:"1.0.0",BASE_URL:"/"})),r["default"].use(i.a,c.a),r["default"].axios.defaults.baseURL=s},setHeader:function(){r["default"].axios.defaults.headers.common["Authorization"]="Token ".concat(u["a"].getToken())},query:function(e,t){return r["default"].axios.get(e,t).catch((function(e){throw new Error("[RWV] ApiService ".concat(e))}))},get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return r["default"].axios.get("".concat(e,"/").concat(t)).catch((function(e){throw new Error("[RWV] ApiService ".concat(e))}))},post:function(e,t){return r["default"].axios.post("".concat(e),t)},update:function(e,t,n){return r["default"].axios.put("".concat(e,"/").concat(t),n)},put:function(e,t){return r["default"].axios.put("".concat(e),t)},delete:function(e){return r["default"].axios.delete(e).catch((function(e){throw new Error("[RWV] ApiService ".concat(e))}))}};t["d"]=l;var f={resource:"ticket",getTickets:function(){return l.get(this.resource,"list")},getTicket:function(e){return l.get(this.resource,e)},saveTicket:function(e){return l.post("".concat(this.resource,"/new"),e)}},d={resource:"ticket/comment",getTicketComments:function(e){return l.get(this.resource,e)},saveComment:function(e,t){return l.post("".concat(this.resource,"/").concat(t),e)}},p={resource:"/auth",login:function(){return l.get(this.resource,"login")},getUserProfile:function(){return l.get(this.resource,"profile")},logout:function(){return l.get(this.resource,"logout")}}},"64a9":function(e,t,n){},"6c33":function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"h",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return l}));var r="LOGIN",a="LOGOUT",c="GET_TICKET",o="GET_TICKETS",i="ADD_NEW_TICKET",u="GET_TICKET_COMMENTS",s="REPLACE_IMAGE_URL",l="SAVE_COMMENT"},fb98:function(e,t,n){}});
//# sourceMappingURL=app.2e23a7d6.js.map