(this["webpackJsonpreact-nasa-app"]=this["webpackJsonpreact-nasa-app"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),s=a.n(c),o=(a(11),a(2)),i=a.n(o),l=a(5),u=a(1);a(13),a(14);var m=function(e){var t=e.data;return r.a.createElement("div",{className:"nasa-items"},r.a.createElement("h2",null,t.data[0].title),r.a.createElement("img",{src:t.links[0].href,alt:""}),r.a.createElement("h4",null,"Description"),r.a.createElement("p",null,t.data[0].description))};var p=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),o=Object(u.a)(s,2),p=o[0],h=o[1],f=Object(n.useState)("dark%20energy"),d=Object(u.a)(f,2),v=d[0],E=d[1],b="https://images-api.nasa.gov/search?q=".concat(v,"&media_type=image");Object(n.useEffect)((function(){g()}),[v]);var g=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(b);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c(a.collection.items.slice(0,15));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"App"},r.a.createElement("form",{className:"search-box",onSubmit:function(e){e.preventDefault(),p=(p=p.toUpperCase()).replace(" ","%20"),E(p),h("")}},r.a.createElement("input",{className:"search-field",type:"text",placeholder:"Search...",onChange:function(e){h(e.target.value)},value:p}),r.a.createElement("button",{className:"search-btn",type:"submit"},"Enter")),r.a.createElement("div",{className:"show-desc"},a.length>1?a.map((function(e){return r.a.createElement(m,{key:a.indexOf(e),data:e})})):r.a.createElement("h3",{style:{color:"white"}},"Try Other input")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.99ba7879.chunk.js.map