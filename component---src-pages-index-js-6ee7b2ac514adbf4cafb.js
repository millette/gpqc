(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{141:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(145),o=n(147);t.default=function(){return a.a.createElement("div",null,a.a.createElement(i.Link,{to:"/by/lic/"},"Licenses")," ",a.a.createElement(i.Link,{to:"/by/lng/"},"Languages"),a.a.createElement("br",null),a.a.createElement(o.f,null),a.a.createElement(o.e,null))}},145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return g}),n.d(t,"StaticQuery",function(){return v});var r=n(0),a=n.n(r),i=n(4),o=n.n(i),u=n(144),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(27);n.d(t,"waitForRouteChange",function(){return l.c});var s=n(146),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var p=n(36);n.d(t,"parsePath",function(){return p.a});var g=a.a.createContext({}),v=function(e){return a.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}v.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,n){var r;e.exports=(r=n(148))&&r.default||r},147:function(e,t,n){"use strict";n(77),n(76),n(26);var r=n(0),a=n.n(r),i=n(145),o={margin:"0.25rem",padding:"0.25rem"},u=function(e){var t,n,r,u,c=e.by,l=e.node,d=[];for(t in l)if("nameWithOwner"===t){var p=l.nameWithOwner.split("/");r=p[0],n=(n=p[1]).replace(/[-_.]/g," ")}else"primaryLanguage"===t?d.push(a.a.createElement("li",{key:"primaryLanguage"},a.a.createElement("b",null,t),":"," ",a.a.createElement(i.Link,{to:"/"+c+"/lng/"+(l.primaryLanguage||"unspecified").toLowerCase().replace("#","-sharp")+"/"},l.primaryLanguage||"unspecified"))):"license"===t?d.push(a.a.createElement("li",{key:"license"},a.a.createElement("b",null,t),":"," ",a.a.createElement(i.Link,{to:"/"+c+"/lic/"+(l.license||"unspecified").toLowerCase().replace("#","-sharp")+"/"},l.license||"unspecified"))):"description"===t?u=l.description:l[t]&&d.push(a.a.createElement("li",{key:t},a.a.createElement("b",null,t),":"," ",-1===t.indexOf("Prorata")?l[t]:Math.round(1e3*l[t])/10+"%"));return a.a.createElement("div",{style:o},a.a.createElement("h2",null,a.a.createElement(s,{to:l.nameWithOwner},n)),a.a.createElement("h3",null,a.a.createElement("small",null,"by")," ",a.a.createElement(s,{to:r},r)),u&&a.a.createElement("blockquote",null,u),a.a.createElement("ul",null,d))},c=n(149).repository,l=function(){return a.a.createElement(s,{to:c},"Source")},s=function(e){var t=e.to,n=e.children;return a.a.createElement(E,{to:"https://github.com/"+t},n)},d=(n(50),n(151)),p=n.n(d),g=function(e){var t=e.title,n=e.whole.map(function(e){return{personnes:1,label:e}}),r={width:350,height:450,config:{autosize:"pad"},mark:"bar",encoding:{color:{sort:"ascending",field:"label",type:"nominal",legend:!1},y:{sort:{op:"count",order:"descending",field:"personnes"},title:t,field:"label",type:"nominal"},x:{title:"Projets",aggregate:"count",field:"personnes",type:"quantitative"}}};return a.a.createElement(p.a,{spec:r,data:{values:n}})},v=n(150),f=n.n(v),m={marginTop:"-2rem",float:"right",width:"4rem"},y=function(){return a.a.createElement("div",null,"A ",a.a.createElement(E,{to:"http://dev.rollodeqc.com/"},"RoLLodeQc")," project by"," ",a.a.createElement(E,{to:"http://robin.millette.info/"},"Robin Millette"),a.a.createElement(E,{to:"http://dev.rollodeqc.com/",img:!0},a.a.createElement("img",{style:m,src:f.a,alt:"Logo RoLLodeQc"})))},E=function(e){var t=e.to,n=e.children,r=e.img;return a.a.createElement("a",{title:"external link in new window",target:"_blank",rel:"noopener noreferrer",href:t},n," ",!r&&a.a.createElement("small",null,a.a.createElement("sup",null,a.a.createElement("span",{role:"img","aria-label":"external link in new window"},"🔗 ❐"))))};n.d(t,"d",function(){return u}),n.d(t,"f",function(){return l}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return g}),n.d(t,"e",function(){return y}),n.d(t,"a",function(){return E})},148:function(e,t,n){"use strict";n.r(t);n(37);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),u=n(51),c=n(1),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},149:function(e){e.exports={name:"gpqc",version:"0.0.0",main:"index.js",license:"AGPL-3.0",engines:{node:">= 8.12.0"},repository:"millette/gpqc",author:{name:"Robin Millette",email:"robin@millette.info",url:"http://robin.millette.info"},"lint-staged":{"*.{js,json,md}":["prettier-standard","git add"]},husky:{hooks:{"pre-commit":"lint-staged"}},dependencies:{gatsby:"^2.0.8","gatsby-plugin-manifest":"^2.0.3","gatsby-plugin-offline":"^2.0.5","gatsby-source-filesystem":"^2.0.1","gatsby-transformer-json":"^2.1.1",react:"^16.5.2","react-dom":"^16.5.2","react-vega-lite":"^2.0.2","vega-lib":"^4.2.0","vega-lite":"^3.0.0-rc6"},devDependencies:{"gh-pages":"^2.0.0",husky:"^1.0.0-rc.15","lint-staged":"^7.3.0","prettier-standard":"^8.0.1",standard:"^12.0.1"},scripts:{deploy:"rm public/* .cache -fr && gatsby build --prefix-paths && gh-pages -d public",lint:"standard",build:"gatsby build",serve:"gatsby serve",develop:"gatsby develop --port 8001",dev:"gatsby develop --port 8001",clean:"rm public/* .cache -fr",format:"prettier-standard '**/*.+(js|json|md)'"}}},150:function(e,t){e.exports="data:image/png;base64,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"},152:function(e,t){},153:function(e,t){}}]);
//# sourceMappingURL=component---src-pages-index-js-6ee7b2ac514adbf4cafb.js.map