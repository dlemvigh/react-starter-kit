webpackJsonp([6],{205:function(e,t,n){"use strict";var r=n(510),o=n.n(r);t.a=o()()},206:function(e,t,n){n(207),e.exports=n(412)},412:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){var n=t.baseUrl,r=t.cookie,o={method:"POST",mode:n?"cors":"same-origin",credentials:n?"include":"same-origin",headers:P({Accept:"application/json","Content-Type":"application/json"},r?{Cookie:r}:null)};return function(t,r){return t.startsWith("/graphql")||t.startsWith("/api")?e(""+n+t,P({},o,r,{headers:P({},o.headers,r&&r.headers)})):e(t,r)}}function u(e,t,n,r,o){var i=document.head.querySelector(e+"["+t+'="'+n+'"]');if((!i||i.getAttribute(r)!==o)&&(i&&i.parentNode.removeChild(i),"string"==typeof o)){var a=document.createElement(e);a.setAttribute(t,n),a.setAttribute(r,o),document.head.appendChild(a)}}function c(e,t){u("meta","name",e,"content",t)}function l(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,i){try{var a=t[o](i),u=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}function s(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,i){try{var a=t[o](i),u=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var f=(n(413),n(136)),p=n.n(f),d=n(428),h=n.n(d),v=(n(505),n(506)),y=n.n(v),w=n(135),b=n(204),m=n.n(b),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),k={insertCss:m.a.func.isRequired,fetch:m.a.func.isRequired},O=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),g(t,[{key:"getChildContext",value:function(){return this.props.context}},{key:"render",value:function(){return p.a.Children.only(this.props.children)}}]),t}(p.a.PureComponent);O.childContextTypes=k;var x=O,P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C=a,j=n(205),_=n(517),R={path:"",children:[{path:"",load:function(){return n.e(3).then(n.bind(null,648))}},{path:"/contact",load:function(){return n.e(4).then(n.bind(null,649))}},{path:"/login",load:function(){return n.e(2).then(n.bind(null,650))}},{path:"/register",load:function(){return n.e(0).then(n.bind(null,651))}},{path:"/admin",load:function(){return n.e(5).then(n.bind(null,652))}},{path:"(.*)",load:function(){return n.e(1).then(n.bind(null,653))}}],action:function(e){var t=this,n=e.next;return l(regeneratorRuntime.mark(function e(){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:return r=e.sent,r.title=(r.title||"Untitled Page")+" - www.reactstarterkit.com",r.description=r.description||"",e.abrupt("return",r);case 6:case"end":return e.stop()}},e,t)}))()}},E=R,A=new _.a(E,{resolveRoute:function(e,t){return"function"==typeof e.route.load?e.route.load().then(function(n){return n.default(e,t)}):"function"==typeof e.route.action?e.route.action(e,t):null}}),S=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var u in i)void 0===n[u]&&(n[u]=i[u]);else n||(n=i||{});if(1===a)n.children=o;else if(a>1){for(var c=Array(a),l=0;l<a;l++)c[l]=arguments[l+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q=function(){var e=s(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return B[N.key]={scrollX:window.pageXOffset,scrollY:window.pageYOffset},"PUSH"===n&&delete B[t.key],N=t,e.prev=3,e.next=6,A.resolve(T({},U,{pathname:t.pathname,query:y.a.parse(t.search)}));case 6:if(r=e.sent,N.key===t.key){e.next=9;break}return e.abrupt("return");case 9:if(!r.redirect){e.next=12;break}return j.a.replace(r.redirect),e.abrupt("return");case 12:X=h.a.render(S(x,{context:U},void 0,r.component),I,function(){return Y(r,t)}),e.next=21;break;case 15:e.prev=15,e.t0=e.catch(3),e.next=19;break;case 19:console.error(e.t0),n&&N.key===t.key&&window.location.reload();case 21:case"end":return e.stop()}},e,this,[[3,15]])}));return function(t,n){return e.apply(this,arguments)}}(),U={insertCss:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.map(function(e){return e._insertCss()});return function(){r.forEach(function(e){return e()})}},fetch:C(self.fetch,{baseUrl:window.App.apiUrl})},B={};window.history&&"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var Y=function(){var e=document.getElementById("css");e&&e.parentNode.removeChild(e),Y=function(e,t){document.title=e.title,c("description",e.description);var n=0,r=0,o=B[t.key];if(o)n=o.scrollX,r=o.scrollY;else{var i=t.hash.substr(1);if(i){var a=document.getElementById(i);a&&(r=window.pageYOffset+a.getBoundingClientRect().top)}}window.scrollTo(n,r),window.ga&&window.ga("send","pageview",Object(w.createPath)(t))}},I=document.getElementById("app"),X=void 0,N=j.a.location;j.a.listen(q),q(N)}},[206]);
//# sourceMappingURL=client.f2953912.js.map