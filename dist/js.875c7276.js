parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mAbx":[function(require,module,exports) {

},{"./../images/hero-bg-shapes-full-2.svg":[["hero-bg-shapes-full-2.b3c20d9a.svg","5DSm"],"5DSm"],"./../images/speakers-bg-shapes-full-2.svg":[["speakers-bg-shapes-full-2.5f3833dd.svg","QeUf"],"QeUf"]}],"QvaY":[function(require,module,exports) {
"use strict";require("../scss/styles.scss"),document.addEventListener("DOMContentLoaded",function(){var e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach(function(e){e.addEventListener("click",function(){var t=e.dataset.target,s=document.getElementById(t);e.classList.toggle("is-active"),s.classList.toggle("is-active")})})});
},{"../scss/styles.scss":"mAbx"}]},{},["QvaY"], null)
//# sourceMappingURL=js.875c7276.js.map