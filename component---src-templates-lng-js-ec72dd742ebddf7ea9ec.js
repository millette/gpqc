(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return u});n(28),n(91),n(53),n(154),n(90),n(160),n(50);var r=n(0),i=n.n(r),a=n(143),o=n(147);t.default=function(e){var t=e.data.allUserCountsJson;return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(a.Link,{to:"/"},"Home"),i.a.createElement("br",null),i.a.createElement(o.d,null)),i.a.createElement("ul",null,Array.from(new Set(t.edges.map(function(e){return e.node.primaryLanguage}))).map(function(e){return i.a.createElement("li",{key:e},i.a.createElement(a.Link,{to:"/by/lng/"+(e||"unspecified").toLowerCase().replace("#","-sharp")+"/"},"by stars ",e||"unspecified")," ","or"," ",i.a.createElement(a.Link,{to:"/by2/lng/"+(e||"unspecified").toLowerCase().replace("#","-sharp")+"/"},"by contribs ",e||"unspecified"))})))};var u="675201665"},143:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return v}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return h});var r=n(0),i=n.n(r),a=n(4),o=n.n(a),u=n(142),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(26);n.d(t,"waitForRouteChange",function(){return l.c});var s=n(144),f=n.n(s);n.d(t,"PageRenderer",function(){return f.a});var d=n(36);n.d(t,"parsePath",function(){return d.a});var p=i.a.createContext({}),h=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function v(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,n){var r;e.exports=(r=n(145))&&r.default||r},145:function(e,t,n){"use strict";n.r(t);n(37);var r=n(0),i=n.n(r),a=n(4),o=n.n(a),u=n(52),c=n(1),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},146:function(e){e.exports={name:"gpqc",version:"0.0.0",main:"index.js",license:"AGPL-3.0",engines:{node:">= 8.12.0"},repository:"millette/gpqc",author:{name:"Robin Millette",email:"robin@millette.info",url:"http://robin.millette.info"},"lint-staged":{"*.{js,json,md}":["prettier-standard","git add"]},husky:{hooks:{"pre-commit":"lint-staged"}},dependencies:{gatsby:"^2.0.8","gatsby-source-filesystem":"^2.0.1","gatsby-transformer-json":"^2.1.1",react:"^16.5.2","react-dom":"^16.5.2","react-vega-lite":"^2.0.2","vega-lib":"^4.2.0","vega-lite":"^3.0.0-rc6"},devDependencies:{"gh-pages":"^2.0.0",husky:"^1.0.0-rc.15","lint-staged":"^7.3.0","prettier-standard":"^8.0.1",standard:"^12.0.1"},scripts:{deploy:"rm public/* .cache -fr && gatsby build --prefix-paths && gh-pages -d public",lint:"standard",build:"gatsby build",serve:"gatsby serve",develop:"gatsby develop --port 8001",dev:"gatsby develop --port 8001",clean:"rm public/* .cache -fr",format:"prettier-standard '**/*.+(js|json|md)'"}}},147:function(e,t,n){"use strict";n(81),n(76),n(28);var r=n(0),i=n.n(r),a=n(143),o={margin:"0.25rem",padding:"0.25rem"},u=function(e){var t,n,r,u,c=e.by,l=e.node,f=[];for(t in l)if("nameWithOwner"===t){var d=l.nameWithOwner.split("/");r=d[0],n=(n=d[1]).replace(/[-_.]/g," ")}else"primaryLanguage"===t?f.push(i.a.createElement("li",{key:"primaryLanguage"},i.a.createElement("b",null,t),":"," ",i.a.createElement(a.Link,{to:"/"+c+"/lng/"+(l.primaryLanguage||"unspecified").toLowerCase().replace("#","-sharp")+"/"},l.primaryLanguage||"unspecified"))):"license"===t?f.push(i.a.createElement("li",{key:"license"},i.a.createElement("b",null,t),":"," ",i.a.createElement(a.Link,{to:"/"+c+"/lic/"+(l.license||"unspecified").toLowerCase().replace("#","-sharp")+"/"},l.license||"unspecified"))):"description"===t?u=l.description:l[t]&&f.push(i.a.createElement("li",{key:t},i.a.createElement("b",null,t),":"," ",-1===t.indexOf("Prorata")?l[t]:Math.round(1e3*l[t])/10+"%"));return i.a.createElement("div",{style:o},i.a.createElement(s,{to:l.nameWithOwner},i.a.createElement("h2",null,n)),i.a.createElement("h3",null,i.a.createElement("small",null,"by")," ",i.a.createElement(s,{to:r},r)),u&&i.a.createElement("blockquote",null,u),i.a.createElement("ul",null,f))},c=n(146).repository,l=function(){return i.a.createElement(s,{to:c},"Source")},s=function(e){var t=e.to,n=e.children;return i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/"+t},n)},f=(n(50),n(150)),d=n.n(f),p=function(e){var t=e.title,n=e.whole.map(function(e){return{personnes:1,label:e}}),r={width:350,height:450,config:{autosize:"pad"},mark:"bar",encoding:{color:{sort:"ascending",field:"label",type:"nominal",legend:!1},y:{sort:{op:"count",order:"descending",field:"personnes"},title:t,field:"label",type:"nominal"},x:{title:"Projets",aggregate:"count",field:"personnes",type:"quantitative"}}};return i.a.createElement(d.a,{spec:r,data:{values:n}})};n.d(t,"c",function(){return u}),n.d(t,"d",function(){return l}),n.d(t,"a",function(){return s}),n.d(t,"b",function(){return p})},148:function(e,t,n){var r=n(38)("meta"),i=n(10),a=n(29),o=n(27).f,u=0,c=Object.isExtensible||function(){return!0},l=!n(18)(function(){return c(Object.preventExtensions({}))}),s=function(e){o(e,r,{value:{i:"O"+ ++u,w:{}}})},f=e.exports={KEY:r,NEED:!1,fastKey:function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,r)){if(!c(e))return"F";if(!t)return"E";s(e)}return e[r].i},getWeak:function(e,t){if(!a(e,r)){if(!c(e))return!0;if(!t)return!1;s(e)}return e[r].w},onFreeze:function(e){return l&&f.NEED&&c(e)&&!a(e,r)&&s(e),e}}},149:function(e,t,n){var r=n(10);e.exports=function(e,t){if(!r(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},151:function(e,t){},152:function(e,t){},154:function(e,t,n){"use strict";var r=n(155),i=n(149);e.exports=n(156)("Set",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{add:function(e){return r.def(i(this,"Set"),e=0===e?0:e,e)}},r)},155:function(e,t,n){"use strict";var r=n(27).f,i=n(55),a=n(79),o=n(16),u=n(77),c=n(78),l=n(54),s=n(89),f=n(88),d=n(17),p=n(148).fastKey,h=n(149),v=d?"_s":"size",m=function(e,t){var n,r=p(t);if("F"!==r)return e._i[r];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,l){var s=e(function(e,r){u(e,s,t,"_i"),e._t=t,e._i=i(null),e._f=void 0,e._l=void 0,e[v]=0,null!=r&&c(r,n,e[l],e)});return a(s.prototype,{clear:function(){for(var e=h(this,t),n=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];e._f=e._l=void 0,e[v]=0},delete:function(e){var n=h(this,t),r=m(n,e);if(r){var i=r.n,a=r.p;delete n._i[r.i],r.r=!0,a&&(a.n=i),i&&(i.p=a),n._f==r&&(n._f=i),n._l==r&&(n._l=a),n[v]--}return!!r},forEach:function(e){h(this,t);for(var n,r=o(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!m(h(this,t),e)}}),d&&r(s.prototype,"size",{get:function(){return h(this,t)[v]}}),s},def:function(e,t,n){var r,i,a=m(e,t);return a?a.v=n:(e._l=a={i:i=p(t,!0),k:t,v:n,p:r=e._l,n:void 0,r:!1},e._f||(e._f=a),r&&(r.n=a),e[v]++,"F"!==i&&(e._i[i]=a)),e},getEntry:m,setStrong:function(e,t,n){l(e,t,function(e,n){this._t=h(e,t),this._k=n,this._l=void 0},function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?s(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,s(1))},n?"entries":"values",!n,!0),f(t)}}},156:function(e,t,n){"use strict";var r=n(5),i=n(6),a=n(19),o=n(79),u=n(148),c=n(78),l=n(77),s=n(10),f=n(18),d=n(80),p=n(40),h=n(157);e.exports=function(e,t,n,v,m,y){var g=r[e],b=g,_=m?"set":"add",E=b&&b.prototype,w={},k=function(e){var t=E[e];a(E,e,"delete"==e?function(e){return!(y&&!s(e))&&t.call(this,0===e?0:e)}:"has"==e?function(e){return!(y&&!s(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return y&&!s(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,n){return t.call(this,0===e?0:e,n),this})};if("function"==typeof b&&(y||E.forEach&&!f(function(){(new b).entries().next()}))){var x=new b,L=x[_](y?{}:-0,1)!=x,q=f(function(){x.has(1)}),j=d(function(e){new b(e)}),O=!y&&f(function(){for(var e=new b,t=5;t--;)e[_](t,t);return!e.has(-0)});j||((b=t(function(t,n){l(t,b,e);var r=h(new g,t,b);return null!=n&&c(n,m,r[_],r),r})).prototype=E,E.constructor=b),(q||O)&&(k("delete"),k("has"),m&&k("get")),(O||L)&&k(_),y&&E.clear&&delete E.clear}else b=v.getConstructor(t,e,m,_),o(b.prototype,n),u.NEED=!0;return p(b,e),w[e]=b,i(i.G+i.W+i.F*(b!=g),w),y||v.setStrong(b,e,m),b}},157:function(e,t,n){var r=n(10),i=n(158).set;e.exports=function(e,t,n){var a,o=t.constructor;return o!==n&&"function"==typeof o&&(a=o.prototype)!==n.prototype&&r(a)&&i&&i(e,a),e}},158:function(e,t,n){var r=n(10),i=n(11),a=function(e,t){if(i(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{(r=n(16)(Function.call,n(159).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return a(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:a}},159:function(e,t,n){var r=n(84),i=n(51),a=n(39),o=n(83),u=n(29),c=n(82),l=Object.getOwnPropertyDescriptor;t.f=n(17)?l:function(e,t){if(e=a(e),t=o(t,!0),c)try{return l(e,t)}catch(e){}if(u(e,t))return i(!r.f.call(e,t),e[t])}},160:function(e,t,n){"use strict";var r=n(16),i=n(6),a=n(31),o=n(85),u=n(86),c=n(30),l=n(161),s=n(87);i(i.S+i.F*!n(80)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,i,f,d=a(e),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,m=void 0!==v,y=0,g=s(d);if(m&&(v=r(v,h>2?arguments[2]:void 0,2)),null==g||p==Array&&u(g))for(n=new p(t=c(d.length));t>y;y++)l(n,y,m?v(d[y],y):d[y]);else for(f=g.call(d),n=new p;!(i=f.next()).done;y++)l(n,y,m?o(f,v,[i.value,y],!0):i.value);return n.length=y,n}})},161:function(e,t,n){"use strict";var r=n(27),i=n(51);e.exports=function(e,t,n){t in e?r.f(e,t,i(0,n)):e[t]=n}}}]);
//# sourceMappingURL=component---src-templates-lng-js-ec72dd742ebddf7ea9ec.js.map