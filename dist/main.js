!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(c=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var c,a,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){var o=n(2),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function a(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],l=t.base?i[0]+t.base:i[0],d=n[l]||0,u="".concat(l," ").concat(d);n[l]=d+1;var s=a(u),m={css:i[1],media:i[2],sourceMap:i[3]};-1!==s?(c[s].references++,c[s].updater(m)):c.push({identifier:u,updater:v(m,t),references:1}),o.push(u)}return o}function d(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var u,s=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function m(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=s(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function f(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,h=0;function v(e,t){var n,o,r;if(t.singleton){var i=h++;n=p||(p=d(t)),o=m.bind(null,n,i,!1),r=m.bind(null,n,i,!0)}else n=d(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=a(n[o]);c[r].references--}for(var i=l(e,t),d=0;d<n.length;d++){var u=a(n[d]);0===c[u].references&&(c[u].updater(),c.splice(u,1))}n=i}}}},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o)()(!1);r.push([e.i,"* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}",""]),t.default=r},function(e,t,n){"use strict";function o(){const e=document.querySelector("#content"),t=document.createElement("div");t.id="main-content";const n=document.createElement("div");n.id="welcome-text-container";const o=document.createElement("h1");o.id="welcome-text",o.textContent="Welcome to The Everett!",n.appendChild(o),t.appendChild(n),e.appendChild(t)}n.r(t);n(1);!function(){const e=document.querySelector("#content"),t=document.createElement("ul");t.id="nav-bar",e.appendChild(t);const n=document.createElement("li");n.id="home",n.className="nav-link",n.textContent="Home",t.appendChild(n);const r=document.createElement("li");r.id="menu",r.className="nav-link",r.textContent="Menu",t.appendChild(r);const i=document.createElement("li");i.id="contact",i.className="nav-link",i.textContent="Contact",t.appendChild(i),document.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",()=>{const t=document.querySelector("#main-content");"Home"==e.textContent?(t.remove(),o()):"Menu"==e.textContent?(t.remove(),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.id="main-content";const n=document.createElement("h1");n.id="menu-heading",n.textContent="Menu",t.appendChild(n);const o=document.createElement("div");o.id="top-section";const r=document.createElement("pre");r.id="top-section-items",r.textContent="pressed gravlax puree, distressed lamb tartare & acorn 10\r\nnatural corn with turned ham reduction 8\r\npan-seared booze with locally-sourced pork belly 13",o.appendChild(r),t.appendChild(o);const i=document.createElement("div");i.id="middle-section";const c=document.createElement("pre");c.id="middle-section-items",c.textContent="salt 12\r\ncountry oyster with crafted monkfish 16\r\nfingerling marrow bowl with pepper sliders & fennel 10\r\nfree-range rice 9",i.appendChild(c),t.appendChild(i);const a=document.createElement("div");a.id="bottom-section";const l=document.createElement("pre");l.id="bottom-section-items",l.textContent="rubbed shell bean, frightened fig & sea-salt sungold crumble 16\r\nartisanal butter 15\r\nkale 15",a.appendChild(l),t.appendChild(a),e.appendChild(t)}()):"Contact"==e.textContent&&(t.remove(),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.id="main-content";const n=document.createElement("h1");n.id="contact-heading",n.textContent="Contact",t.appendChild(n);const o=document.createElement("div");o.id="contact-container";const r=document.createElement("a");r.id="github-link",r.setAttribute("href","https://github.com/AlmirBunjaku"),r.textContent="Github";const i=document.createElement("a");i.id="mail-link",i.setAttribute("href","mailto:almirbunjaku@gmail.com"),i.textContent="Mail",o.appendChild(r),o.appendChild(i),t.appendChild(o),e.appendChild(t)}())}),e.addEventListener("mouseover",()=>{e.className="hoveredLink";document.querySelectorAll(".nav-link").forEach(e=>{e.style.color="hsl(0,100%,50%)"})}),e.addEventListener("mouseout",()=>{document.querySelectorAll(".nav-link").forEach(e=>{e.style.color="hsl(0,100%,0%)"}),e.className="nav-link"})})}(),o()}]);