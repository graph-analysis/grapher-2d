!function(e,n){"object"===typeof exports&&"object"===typeof module?module.exports=n():"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?exports["@graph-analysis/grapher-2d-main"]=n():e["@graph-analysis/grapher-2d-main"]=n()}(window,(function(){return(window["webpackJsonp_@graph-analysis/grapher-2d"]=window["webpackJsonp_@graph-analysis/grapher-2d"]||[]).push([[0],{156:function(e,n,t){e.exports=t.p+"static/media/index.8ca33760.less"},305:function(e,n,t){e.exports=t(580)},306:function(e,n,t){window.__POWERED_BY_QIANKUN__&&(t.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},580:function(e,n,t){"use strict";t.r(n),t.d(n,"bootstrap",(function(){return j})),t.d(n,"mount",(function(){return C})),t.d(n,"unmount",(function(){return B}));var a=t(33),o=t.n(a),r=t(155),c=(t(306),t(8)),i=t.n(c),l=t(182),s=t.n(l),u=t(153),p=t(75),m=t(592),d=t(589),f=t(590),h=t(591),w=t(593),y=t(594),E=t(156),_=t.n(E),b=m.a.Menu,g={type:"graphin-force",preset:{type:"concentric"},animation:!0},v=function(e){var n=e.data,t=Object(c.useState)(!1),a=Object(u.a)(t,2),o=a[0],r=a[1],l=function(){r(!o)},s=[{key:"zoomOut",name:i.a.createElement("span",null,"\u653e\u5927 ",i.a.createElement(w.a,null)),icon:i.a.createElement(w.a,null)},{key:"zoomIn",name:i.a.createElement(y.a,null)}];return i.a.createElement("div",{className:_.a.main},i.a.createElement(p.a,{width:"100%",height:"100%",data:n,layout:g,fitView:!0},i.a.createElement("div",{className:_.a.map},i.a.createElement(d.a,{visible:!0})),i.a.createElement("div",{className:_.a.toolbar},i.a.createElement(f.a,{options:s,onChange:function(e,n){var t=e.apis,a=t.handleZoomIn,o=t.handleZoomOut;"zoomIn"===n.key?a():"zoomOut"===n.key&&o()}})),i.a.createElement(m.a,{bindType:"canvas"},i.a.createElement(b,{bindType:"canvas"},i.a.createElement(b.Item,{onClick:l},"\u5f00\u542f\u653e\u5927\u955c"))),i.a.createElement(h.a,{options:{},visible:o,handleEscListener:l})))},k={nodes:[{id:"node-0",style:{label:{value:"\u521d\u59cb\u5316\u8282\u70b9"}}}],edges:[]},N=function(){return i.a.createElement(v,{data:k})};function x(){return i.a.createElement("div",{className:"app-main"},i.a.createElement(N,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e){var n=e.container;s.a.render(i.a.createElement(x,null),n?n.querySelector("#root"):document.querySelector("#root"))}function I(e){e.onGlobalStateChange((function(n,t){return console.log("[onGlobalStateChange - ".concat(e.name,"]:"),n,t)}),!0),e.setGlobalState({ignore:e.name,user:{name:e.name}})}function j(){return S.apply(this,arguments)}function S(){return(S=Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("[Grapher] react app bootstraped");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return A.apply(this,arguments)}function A(){return(A=Object(r.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("[Grapher] props from main framework",n),I(n),O(n);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return G.apply(this,arguments)}function G(){return(G=Object(r.a)(o.a.mark((function e(n){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.container,s.a.unmountComponentAtNode(t?t.querySelector("#root"):document.querySelector("#root"));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}window.__POWERED_BY_QIANKUN__||O({}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[305,1,2]]])}));
//# sourceMappingURL=main.db930426.chunk.js.map