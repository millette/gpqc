(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return i});n(29),n(89),n(55),n(149),n(88),n(155),n(54);var r=n(0),o=n.n(r),a=n(142);t.default=function(e){var t=e.data.allUserCountsJson;return o.a.createElement("div",null,o.a.createElement(a.Link,{to:"/"},"Home"),o.a.createElement("ul",null,Array.from(new Set(t.edges.map(function(e){return e.node.license}))).map(function(e){return o.a.createElement("li",null,o.a.createElement(a.Link,{to:"/by/lic/"+(e||"unspecified").toLowerCase().replace("#","-sharp")+"/"},"by stars ",e||"unspecified")," ","or"," ",o.a.createElement(a.Link,{to:"/by2/lic/"+(e||"unspecified").toLowerCase().replace("#","-sharp")+"/"},"by contribs ",e||"unspecified"))})))};var i="1860699402"},141:function(e,t,n){"use strict";var r=n(38);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var o=r(n(144)),a=r(n(145)),i=r(n(7)),u=r(n(50)),s=r(n(51)),c=r(n(4)),f=r(n(0)),l=n(13),p=n(142);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/gpqc/"+e)}var h={activeClassName:c.default.string,activeStyle:c.default.object},v=function(e){function t(t){var n;n=e.call(this)||this,(0,s.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,a.default)({},n.props.style,n.props.activeStyle)}:null});var r=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0);var o=t.location;return n.state={IOSupported:r,location:o},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,r,o=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(o.props.to).pathname)},(r=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t),r.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,r=t.getProps,i=void 0===r?this.defaultGetProps:r,u=t.onClick,s=t.onMouseEnter,c=t.location,h=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),v=t.replace,y=(0,o.default)(t,["to","getProps","onClick","onMouseEnter","location","activeClassName","activeStyle","ref","innerRef","state","replace"]),_=d(n);return f.default.createElement(l.Link,(0,a.default)({to:_,state:h,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){if(u&&u(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){t.preventDefault();var n=(0,p.parsePath)(_),r=n.pathname,o=n.hash;if(r===c.pathname||!r){var a=o?document.getElementById(o.substr(1)):null;null!==a?a.scrollIntoView():window.scrollTo(0,0)}g(_,{state:h,replace:v})}return!0}},y))},t}(f.default.Component);v.propTypes=(0,a.default)({},h,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var y,_=(y=v,function(e){return f.default.createElement(l.Location,null,function(t){var n=t.location;return f.default.createElement(y,(0,a.default)({location:n},e))})});t.default=_;var g=function(e,t){window.___navigate(e,t)};t.navigate=g;var m=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(e)};t.push=m;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(e)};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "push" instead.'),m(e)}},142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return v}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return h});var r=n(0),o=n.n(r),a=n(4),i=n.n(a),u=n(141),s=n.n(u);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var c=n(26);n.d(t,"waitForRouteChange",function(){return c.c});var f=n(143),l=n.n(f);n.d(t,"PageRenderer",function(){return l.a});var p=n(36);n.d(t,"parsePath",function(){return p.a});var d=o.a.createContext({}),h=function(e){return o.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function v(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},143:function(e,t,n){var r;e.exports=(r=n(146))&&r.default||r},144:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},145:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},146:function(e,t,n){"use strict";n.r(t);n(37);var r=n(0),o=n.n(r),a=n(4),i=n.n(a),u=n(53),s=n(1),c=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},147:function(e,t,n){var r=n(39)("meta"),o=n(10),a=n(28),i=n(27).f,u=0,s=Object.isExtensible||function(){return!0},c=!n(18)(function(){return s(Object.preventExtensions({}))}),f=function(e){i(e,r,{value:{i:"O"+ ++u,w:{}}})},l=e.exports={KEY:r,NEED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,r)){if(!s(e))return"F";if(!t)return"E";f(e)}return e[r].i},getWeak:function(e,t){if(!a(e,r)){if(!s(e))return!0;if(!t)return!1;f(e)}return e[r].w},onFreeze:function(e){return c&&l.NEED&&s(e)&&!a(e,r)&&f(e),e}}},148:function(e,t,n){var r=n(10);e.exports=function(e,t){if(!r(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},149:function(e,t,n){"use strict";var r=n(150),o=n(148);e.exports=n(151)("Set",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{add:function(e){return r.def(o(this,"Set"),e=0===e?0:e,e)}},r)},150:function(e,t,n){"use strict";var r=n(27).f,o=n(57),a=n(78),i=n(16),u=n(76),s=n(77),c=n(56),f=n(87),l=n(86),p=n(17),d=n(147).fastKey,h=n(148),v=p?"_s":"size",y=function(e,t){var n,r=d(t);if("F"!==r)return e._i[r];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,c){var f=e(function(e,r){u(e,f,t,"_i"),e._t=t,e._i=o(null),e._f=void 0,e._l=void 0,e[v]=0,null!=r&&s(r,n,e[c],e)});return a(f.prototype,{clear:function(){for(var e=h(this,t),n=e._i,r=e._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];e._f=e._l=void 0,e[v]=0},delete:function(e){var n=h(this,t),r=y(n,e);if(r){var o=r.n,a=r.p;delete n._i[r.i],r.r=!0,a&&(a.n=o),o&&(o.p=a),n._f==r&&(n._f=o),n._l==r&&(n._l=a),n[v]--}return!!r},forEach:function(e){h(this,t);for(var n,r=i(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!y(h(this,t),e)}}),p&&r(f.prototype,"size",{get:function(){return h(this,t)[v]}}),f},def:function(e,t,n){var r,o,a=y(e,t);return a?a.v=n:(e._l=a={i:o=d(t,!0),k:t,v:n,p:r=e._l,n:void 0,r:!1},e._f||(e._f=a),r&&(r.n=a),e[v]++,"F"!==o&&(e._i[o]=a)),e},getEntry:y,setStrong:function(e,t,n){c(e,t,function(e,n){this._t=h(e,t),this._k=n,this._l=void 0},function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?f(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,f(1))},n?"entries":"values",!n,!0),l(t)}}},151:function(e,t,n){"use strict";var r=n(5),o=n(6),a=n(19),i=n(78),u=n(147),s=n(77),c=n(76),f=n(10),l=n(18),p=n(79),d=n(41),h=n(152);e.exports=function(e,t,n,v,y,_){var g=r[e],m=g,w=y?"set":"add",b=m&&m.prototype,E={},k=function(e){var t=b[e];a(b,e,"delete"==e?function(e){return!(_&&!f(e))&&t.call(this,0===e?0:e)}:"has"==e?function(e){return!(_&&!f(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return _&&!f(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,n){return t.call(this,0===e?0:e,n),this})};if("function"==typeof m&&(_||b.forEach&&!l(function(){(new m).entries().next()}))){var P=new m,x=P[w](_?{}:-0,1)!=P,O=l(function(){P.has(1)}),C=p(function(e){new m(e)}),R=!_&&l(function(){for(var e=new m,t=5;t--;)e[w](t,t);return!e.has(-0)});C||((m=t(function(t,n){c(t,m,e);var r=h(new g,t,m);return null!=n&&s(n,y,r[w],r),r})).prototype=b,b.constructor=m),(O||R)&&(k("delete"),k("has"),y&&k("get")),(R||x)&&k(w),_&&b.clear&&delete b.clear}else m=v.getConstructor(t,e,y,w),i(m.prototype,n),u.NEED=!0;return d(m,e),E[e]=m,o(o.G+o.W+o.F*(m!=g),E),_||v.setStrong(m,e,y),m}},152:function(e,t,n){var r=n(10),o=n(153).set;e.exports=function(e,t,n){var a,i=t.constructor;return i!==n&&"function"==typeof i&&(a=i.prototype)!==n.prototype&&r(a)&&o&&o(e,a),e}},153:function(e,t,n){var r=n(10),o=n(11),a=function(e,t){if(o(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{(r=n(16)(Function.call,n(154).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return a(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:a}},154:function(e,t,n){var r=n(82),o=n(52),a=n(40),i=n(81),u=n(28),s=n(80),c=Object.getOwnPropertyDescriptor;t.f=n(17)?c:function(e,t){if(e=a(e),t=i(t,!0),s)try{return c(e,t)}catch(e){}if(u(e,t))return o(!r.f.call(e,t),e[t])}},155:function(e,t,n){"use strict";var r=n(16),o=n(6),a=n(31),i=n(83),u=n(84),s=n(30),c=n(156),f=n(85);o(o.S+o.F*!n(79)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,o,l,p=a(e),d="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,y=void 0!==v,_=0,g=f(p);if(y&&(v=r(v,h>2?arguments[2]:void 0,2)),null==g||d==Array&&u(g))for(n=new d(t=s(p.length));t>_;_++)c(n,_,y?v(p[_],_):p[_]);else for(l=g.call(p),n=new d;!(o=l.next()).done;_++)c(n,_,y?i(l,v,[o.value,_],!0):o.value);return n.length=_,n}})},156:function(e,t,n){"use strict";var r=n(27),o=n(52);e.exports=function(e,t,n){t in e?r.f(e,t,o(0,n)):e[t]=n}}}]);
//# sourceMappingURL=component---src-templates-lic-js-f96b38de4d1a20015f98.js.map