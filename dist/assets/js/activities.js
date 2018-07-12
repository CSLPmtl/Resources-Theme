(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
/*
 2017 Julian Garnier
 Released under the MIT license
*/
var $jscomp={scope:{}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(e,r,p){if(p.get||p.set)throw new TypeError("ES3 does not support getters and setters.");e!=Array.prototype&&e!=Object.prototype&&(e[r]=p.value)};$jscomp.getGlobal=function(e){return"undefined"!=typeof window&&window===e?e:"undefined"!=typeof global&&null!=global?global:e};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(e){return $jscomp.SYMBOL_PREFIX+(e||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var e=$jscomp.global.Symbol.iterator;e||(e=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[e]&&$jscomp.defineProperty(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(e){var r=0;return $jscomp.iteratorPrototype(function(){return r<e.length?{done:!1,value:e[r++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(e){$jscomp.initSymbolIterator();e={next:e};e[$jscomp.global.Symbol.iterator]=function(){return this};return e};$jscomp.array=$jscomp.array||{};$jscomp.iteratorFromArray=function(e,r){$jscomp.initSymbolIterator();e instanceof String&&(e+="");var p=0,m={next:function(){if(p<e.length){var u=p++;return{value:r(u,e[u]),done:!1}}m.next=function(){return{done:!0,value:void 0}};return m.next()}};m[Symbol.iterator]=function(){return m};return m};
$jscomp.polyfill=function(e,r,p,m){if(r){p=$jscomp.global;e=e.split(".");for(m=0;m<e.length-1;m++){var u=e[m];u in p||(p[u]={});p=p[u]}e=e[e.length-1];m=p[e];r=r(m);r!=m&&null!=r&&$jscomp.defineProperty(p,e,{configurable:!0,writable:!0,value:r})}};$jscomp.polyfill("Array.prototype.keys",function(e){return e?e:function(){return $jscomp.iteratorFromArray(this,function(e){return e})}},"es6-impl","es3");var $jscomp$this=this;
(function(e,r){"function"===typeof define&&define.amd?define([],r):"object"===typeof module&&module.exports?module.exports=r():e.anime=r()})(this,function(){function e(a){if(!h.col(a))try{return document.querySelectorAll(a)}catch(c){}}function r(a,c){for(var d=a.length,b=2<=arguments.length?arguments[1]:void 0,f=[],n=0;n<d;n++)if(n in a){var k=a[n];c.call(b,k,n,a)&&f.push(k)}return f}function p(a){return a.reduce(function(a,d){return a.concat(h.arr(d)?p(d):d)},[])}function m(a){if(h.arr(a))return a;
h.str(a)&&(a=e(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]}function u(a,c){return a.some(function(a){return a===c})}function C(a){var c={},d;for(d in a)c[d]=a[d];return c}function D(a,c){var d=C(a),b;for(b in a)d[b]=c.hasOwnProperty(b)?c[b]:a[b];return d}function z(a,c){var d=C(a),b;for(b in c)d[b]=h.und(a[b])?c[b]:a[b];return d}function T(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,c,d,k){return c+c+d+d+k+k});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
a=parseInt(c[1],16);var d=parseInt(c[2],16),c=parseInt(c[3],16);return"rgba("+a+","+d+","+c+",1)"}function U(a){function c(a,c,b){0>b&&(b+=1);1<b&&--b;return b<1/6?a+6*(c-a)*b:.5>b?c:b<2/3?a+(c-a)*(2/3-b)*6:a}var d=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);a=parseInt(d[1])/360;var b=parseInt(d[2])/100,f=parseInt(d[3])/100,d=d[4]||1;if(0==b)f=b=a=f;else{var n=.5>f?f*(1+b):f+b-f*b,k=2*f-n,f=c(k,n,a+1/3),b=c(k,n,a);a=c(k,n,a-1/3)}return"rgba("+
255*f+","+255*b+","+255*a+","+d+")"}function y(a){if(a=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a))return a[2]}function V(a){if(-1<a.indexOf("translate")||"perspective"===a)return"px";if(-1<a.indexOf("rotate")||-1<a.indexOf("skew"))return"deg"}function I(a,c){return h.fnc(a)?a(c.target,c.id,c.total):a}function E(a,c){if(c in a.style)return getComputedStyle(a).getPropertyValue(c.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function J(a,c){if(h.dom(a)&&
u(W,c))return"transform";if(h.dom(a)&&(a.getAttribute(c)||h.svg(a)&&a[c]))return"attribute";if(h.dom(a)&&"transform"!==c&&E(a,c))return"css";if(null!=a[c])return"object"}function X(a,c){var d=V(c),d=-1<c.indexOf("scale")?1:0+d;a=a.style.transform;if(!a)return d;for(var b=[],f=[],n=[],k=/(\w+)\((.+?)\)/g;b=k.exec(a);)f.push(b[1]),n.push(b[2]);a=r(n,function(a,b){return f[b]===c});return a.length?a[0]:d}function K(a,c){switch(J(a,c)){case "transform":return X(a,c);case "css":return E(a,c);case "attribute":return a.getAttribute(c)}return a[c]||
0}function L(a,c){var d=/^(\*=|\+=|-=)/.exec(a);if(!d)return a;var b=y(a)||0;c=parseFloat(c);a=parseFloat(a.replace(d[0],""));switch(d[0][0]){case "+":return c+a+b;case "-":return c-a+b;case "*":return c*a+b}}function F(a,c){return Math.sqrt(Math.pow(c.x-a.x,2)+Math.pow(c.y-a.y,2))}function M(a){a=a.points;for(var c=0,d,b=0;b<a.numberOfItems;b++){var f=a.getItem(b);0<b&&(c+=F(d,f));d=f}return c}function N(a){if(a.getTotalLength)return a.getTotalLength();switch(a.tagName.toLowerCase()){case "circle":return 2*
Math.PI*a.getAttribute("r");case "rect":return 2*a.getAttribute("width")+2*a.getAttribute("height");case "line":return F({x:a.getAttribute("x1"),y:a.getAttribute("y1")},{x:a.getAttribute("x2"),y:a.getAttribute("y2")});case "polyline":return M(a);case "polygon":var c=a.points;return M(a)+F(c.getItem(c.numberOfItems-1),c.getItem(0))}}function Y(a,c){function d(b){b=void 0===b?0:b;return a.el.getPointAtLength(1<=c+b?c+b:0)}var b=d(),f=d(-1),n=d(1);switch(a.property){case "x":return b.x;case "y":return b.y;
case "angle":return 180*Math.atan2(n.y-f.y,n.x-f.x)/Math.PI}}function O(a,c){var d=/-?\d*\.?\d+/g,b;b=h.pth(a)?a.totalLength:a;if(h.col(b))if(h.rgb(b)){var f=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);b=f?"rgba("+f[1]+",1)":b}else b=h.hex(b)?T(b):h.hsl(b)?U(b):void 0;else f=(f=y(b))?b.substr(0,b.length-f.length):b,b=c&&!/\s/g.test(b)?f+c:f;b+="";return{original:b,numbers:b.match(d)?b.match(d).map(Number):[0],strings:h.str(a)||c?b.split(d):[]}}function P(a){a=a?p(h.arr(a)?a.map(m):m(a)):[];return r(a,
function(a,d,b){return b.indexOf(a)===d})}function Z(a){var c=P(a);return c.map(function(a,b){return{target:a,id:b,total:c.length}})}function aa(a,c){var d=C(c);if(h.arr(a)){var b=a.length;2!==b||h.obj(a[0])?h.fnc(c.duration)||(d.duration=c.duration/b):a={value:a}}return m(a).map(function(a,b){b=b?0:c.delay;a=h.obj(a)&&!h.pth(a)?a:{value:a};h.und(a.delay)&&(a.delay=b);return a}).map(function(a){return z(a,d)})}function ba(a,c){var d={},b;for(b in a){var f=I(a[b],c);h.arr(f)&&(f=f.map(function(a){return I(a,
c)}),1===f.length&&(f=f[0]));d[b]=f}d.duration=parseFloat(d.duration);d.delay=parseFloat(d.delay);return d}function ca(a){return h.arr(a)?A.apply(this,a):Q[a]}function da(a,c){var d;return a.tweens.map(function(b){b=ba(b,c);var f=b.value,e=K(c.target,a.name),k=d?d.to.original:e,k=h.arr(f)?f[0]:k,w=L(h.arr(f)?f[1]:f,k),e=y(w)||y(k)||y(e);b.from=O(k,e);b.to=O(w,e);b.start=d?d.end:a.offset;b.end=b.start+b.delay+b.duration;b.easing=ca(b.easing);b.elasticity=(1E3-Math.min(Math.max(b.elasticity,1),999))/
1E3;b.isPath=h.pth(f);b.isColor=h.col(b.from.original);b.isColor&&(b.round=1);return d=b})}function ea(a,c){return r(p(a.map(function(a){return c.map(function(b){var c=J(a.target,b.name);if(c){var d=da(b,a);b={type:c,property:b.name,animatable:a,tweens:d,duration:d[d.length-1].end,delay:d[0].delay}}else b=void 0;return b})})),function(a){return!h.und(a)})}function R(a,c,d,b){var f="delay"===a;return c.length?(f?Math.min:Math.max).apply(Math,c.map(function(b){return b[a]})):f?b.delay:d.offset+b.delay+
b.duration}function fa(a){var c=D(ga,a),d=D(S,a),b=Z(a.targets),f=[],e=z(c,d),k;for(k in a)e.hasOwnProperty(k)||"targets"===k||f.push({name:k,offset:e.offset,tweens:aa(a[k],d)});a=ea(b,f);return z(c,{children:[],animatables:b,animations:a,duration:R("duration",a,c,d),delay:R("delay",a,c,d)})}function q(a){function c(){return window.Promise&&new Promise(function(a){return p=a})}function d(a){return g.reversed?g.duration-a:a}function b(a){for(var b=0,c={},d=g.animations,f=d.length;b<f;){var e=d[b],
k=e.animatable,h=e.tweens,n=h.length-1,l=h[n];n&&(l=r(h,function(b){return a<b.end})[0]||l);for(var h=Math.min(Math.max(a-l.start-l.delay,0),l.duration)/l.duration,w=isNaN(h)?1:l.easing(h,l.elasticity),h=l.to.strings,p=l.round,n=[],m=void 0,m=l.to.numbers.length,t=0;t<m;t++){var x=void 0,x=l.to.numbers[t],q=l.from.numbers[t],x=l.isPath?Y(l.value,w*x):q+w*(x-q);p&&(l.isColor&&2<t||(x=Math.round(x*p)/p));n.push(x)}if(l=h.length)for(m=h[0],w=0;w<l;w++)p=h[w+1],t=n[w],isNaN(t)||(m=p?m+(t+p):m+(t+" "));
else m=n[0];ha[e.type](k.target,e.property,m,c,k.id);e.currentValue=m;b++}if(b=Object.keys(c).length)for(d=0;d<b;d++)H||(H=E(document.body,"transform")?"transform":"-webkit-transform"),g.animatables[d].target.style[H]=c[d].join(" ");g.currentTime=a;g.progress=a/g.duration*100}function f(a){if(g[a])g[a](g)}function e(){g.remaining&&!0!==g.remaining&&g.remaining--}function k(a){var k=g.duration,n=g.offset,w=n+g.delay,r=g.currentTime,x=g.reversed,q=d(a);if(g.children.length){var u=g.children,v=u.length;
if(q>=g.currentTime)for(var G=0;G<v;G++)u[G].seek(q);else for(;v--;)u[v].seek(q)}if(q>=w||!k)g.began||(g.began=!0,f("begin")),f("run");if(q>n&&q<k)b(q);else if(q<=n&&0!==r&&(b(0),x&&e()),q>=k&&r!==k||!k)b(k),x||e();f("update");a>=k&&(g.remaining?(t=h,"alternate"===g.direction&&(g.reversed=!g.reversed)):(g.pause(),g.completed||(g.completed=!0,f("complete"),"Promise"in window&&(p(),m=c()))),l=0)}a=void 0===a?{}:a;var h,t,l=0,p=null,m=c(),g=fa(a);g.reset=function(){var a=g.direction,c=g.loop;g.currentTime=
0;g.progress=0;g.paused=!0;g.began=!1;g.completed=!1;g.reversed="reverse"===a;g.remaining="alternate"===a&&1===c?2:c;b(0);for(a=g.children.length;a--;)g.children[a].reset()};g.tick=function(a){h=a;t||(t=h);k((l+h-t)*q.speed)};g.seek=function(a){k(d(a))};g.pause=function(){var a=v.indexOf(g);-1<a&&v.splice(a,1);g.paused=!0};g.play=function(){g.paused&&(g.paused=!1,t=0,l=d(g.currentTime),v.push(g),B||ia())};g.reverse=function(){g.reversed=!g.reversed;t=0;l=d(g.currentTime)};g.restart=function(){g.pause();
g.reset();g.play()};g.finished=m;g.reset();g.autoplay&&g.play();return g}var ga={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},S={duration:1E3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},W="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),H,h={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<Object.prototype.toString.call(a).indexOf("Object")},
pth:function(a){return h.obj(a)&&a.hasOwnProperty("totalLength")},svg:function(a){return a instanceof SVGElement},dom:function(a){return a.nodeType||h.svg(a)},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},col:function(a){return h.hex(a)||h.rgb(a)||h.hsl(a)}},A=function(){function a(a,
d,b){return(((1-3*b+3*d)*a+(3*b-6*d))*a+3*d)*a}return function(c,d,b,f){if(0<=c&&1>=c&&0<=b&&1>=b){var e=new Float32Array(11);if(c!==d||b!==f)for(var k=0;11>k;++k)e[k]=a(.1*k,c,b);return function(k){if(c===d&&b===f)return k;if(0===k)return 0;if(1===k)return 1;for(var h=0,l=1;10!==l&&e[l]<=k;++l)h+=.1;--l;var l=h+(k-e[l])/(e[l+1]-e[l])*.1,n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(.001<=n){for(h=0;4>h;++h){n=3*(1-3*b+3*c)*l*l+2*(3*b-6*c)*l+3*c;if(0===n)break;var m=a(l,c,b)-k,l=l-m/n}k=l}else if(0===
n)k=l;else{var l=h,h=h+.1,g=0;do m=l+(h-l)/2,n=a(m,c,b)-k,0<n?h=m:l=m;while(1e-7<Math.abs(n)&&10>++g);k=m}return a(k,d,f)}}}}(),Q=function(){function a(a,b){return 0===a||1===a?a:-Math.pow(2,10*(a-1))*Math.sin(2*(a-1-b/(2*Math.PI)*Math.asin(1))*Math.PI/b)}var c="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),d={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],a],Out:[[.25,
.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(b,c){return 1-a(1-b,c)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(b,c){return.5>b?a(2*b,c)/2:1-a(-2*b+2,c)/2}]},b={linear:A(.25,.25,.75,.75)},f={},e;for(e in d)f.type=e,d[f.type].forEach(function(a){return function(d,f){b["ease"+a.type+c[f]]=h.fnc(d)?
d:A.apply($jscomp$this,d)}}(f)),f={type:f.type};return b}(),ha={css:function(a,c,d){return a.style[c]=d},attribute:function(a,c,d){return a.setAttribute(c,d)},object:function(a,c,d){return a[c]=d},transform:function(a,c,d,b,f){b[f]||(b[f]=[]);b[f].push(c+"("+d+")")}},v=[],B=0,ia=function(){function a(){B=requestAnimationFrame(c)}function c(c){var b=v.length;if(b){for(var d=0;d<b;)v[d]&&v[d].tick(c),d++;a()}else cancelAnimationFrame(B),B=0}return a}();q.version="2.2.0";q.speed=1;q.running=v;q.remove=
function(a){a=P(a);for(var c=v.length;c--;)for(var d=v[c],b=d.animations,f=b.length;f--;)u(a,b[f].animatable.target)&&(b.splice(f,1),b.length||d.pause())};q.getValue=K;q.path=function(a,c){var d=h.str(a)?e(a)[0]:a,b=c||100;return function(a){return{el:d,property:a,totalLength:N(d)*(b/100)}}};q.setDashoffset=function(a){var c=N(a);a.setAttribute("stroke-dasharray",c);return c};q.bezier=A;q.easings=Q;q.timeline=function(a){var c=q(a);c.pause();c.duration=0;c.add=function(d){c.children.forEach(function(a){a.began=
!0;a.completed=!0});m(d).forEach(function(b){var d=z(b,D(S,a||{}));d.targets=d.targets||a.targets;b=c.duration;var e=d.offset;d.autoplay=!1;d.direction=c.direction;d.offset=h.und(e)?b:L(e,b);c.began=!0;c.completed=!0;c.seek(d.offset);d=q(d);d.began=!0;d.completed=!0;d.duration>b&&(c.duration=d.duration);c.children.push(d)});c.seek(0);c.reset();c.autoplay&&c.restart();return c};return c};q.random=function(a,c){return Math.floor(Math.random()*(c-a+1))+a};return q});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
(function (global){
/**
 * Zest (https://github.com/chjj/zest)
 * A css selector engine.
 * Copyright (c) 2011-2012, Christopher Jeffrey. (MIT Licensed)
 */

// TODO
// - Recognize the TR subject selector when parsing.
// - Pass context to scope.
// - Add :column pseudo-classes.

;(function() {

/**
 * Shared
 */

var window = this
  , document = this.document
  , old = this.zest;

/**
 * Helpers
 */

var compareDocumentPosition = (function() {
  if (document.compareDocumentPosition) {
    return function(a, b) {
      return a.compareDocumentPosition(b);
    };
  }
  return function(a, b) {
    var el = a.ownerDocument.getElementsByTagName('*')
      , i = el.length;

    while (i--) {
      if (el[i] === a) return 2;
      if (el[i] === b) return 4;
    }

    return 1;
  };
})();

var order = function(a, b) {
  return compareDocumentPosition(a, b) & 2 ? 1 : -1;
};

var next = function(el) {
  while ((el = el.nextSibling)
         && el.nodeType !== 1);
  return el;
};

var prev = function(el) {
  while ((el = el.previousSibling)
         && el.nodeType !== 1);
  return el;
};

var child = function(el) {
  if (el = el.firstChild) {
    while (el.nodeType !== 1
           && (el = el.nextSibling));
  }
  return el;
};

var lastChild = function(el) {
  if (el = el.lastChild) {
    while (el.nodeType !== 1
           && (el = el.previousSibling));
  }
  return el;
};

var unquote = function(str) {
  if (!str) return str;
  var ch = str[0];
  return ch === '"' || ch === '\''
    ? str.slice(1, -1)
    : str;
};

var indexOf = (function() {
  if (Array.prototype.indexOf) {
    return Array.prototype.indexOf;
  }
  return function(obj, item) {
    var i = this.length;
    while (i--) {
      if (this[i] === item) return i;
    }
    return -1;
  };
})();

var makeInside = function(start, end) {
  var regex = rules.inside.source
    .replace(/</g, start)
    .replace(/>/g, end);

  return new RegExp(regex);
};

var replace = function(regex, name, val) {
  regex = regex.source;
  regex = regex.replace(name, val.source || val);
  return new RegExp(regex);
};

var truncateUrl = function(url, num) {
  return url
    .replace(/^(?:\w+:\/\/|\/+)/, '')
    .replace(/(?:\/+|\/*#.*?)$/, '')
    .split('/', num)
    .join('/');
};

/**
 * Handle `nth` Selectors
 */

var parseNth = function(param, test) {
  var param = param.replace(/\s+/g, '')
    , cap;

  if (param === 'even') {
    param = '2n+0';
  } else if (param === 'odd') {
    param = '2n+1';
  } else if (!~param.indexOf('n')) {
    param = '0n' + param;
  }

  cap = /^([+-])?(\d+)?n([+-])?(\d+)?$/.exec(param);

  return {
    group: cap[1] === '-'
      ? -(cap[2] || 1)
      : +(cap[2] || 1),
    offset: cap[4]
      ? (cap[3] === '-' ? -cap[4] : +cap[4])
      : 0
  };
};

var nth = function(param, test, last) {
  var param = parseNth(param)
    , group = param.group
    , offset = param.offset
    , find = !last ? child : lastChild
    , advance = !last ? next : prev;

  return function(el) {
    if (el.parentNode.nodeType !== 1) return;

    var rel = find(el.parentNode)
      , pos = 0;

    while (rel) {
      if (test(rel, el)) pos++;
      if (rel === el) {
        pos -= offset;
        return group && pos
          ? !(pos % group) && (pos < 0 === group < 0)
          : !pos;
      }
      rel = advance(rel);
    }
  };
};

/**
 * Simple Selectors
 */

var selectors = {
  '*': (function() {
    if (function() {
      var el = document.createElement('div');
      el.appendChild(document.createComment(''));
      return !!el.getElementsByTagName('*')[0];
    }()) {
      return function(el) {
        if (el.nodeType === 1) return true;
      };
    }
    return function() {
      return true;
    };
  })(),
  'type': function(type) {
    type = type.toLowerCase();
    return function(el) {
      return el.nodeName.toLowerCase() === type;
    };
  },
  'attr': function(key, op, val, i) {
    op = operators[op];
    return function(el) {
      var attr;
      switch (key) {
        case 'for':
          attr = el.htmlFor;
          break;
        case 'class':
          // className is '' when non-existent
          // getAttribute('class') is null
          attr = el.className;
          if (attr === '' && el.getAttribute('class') == null) {
            attr = null;
          }
          break;
        case 'href':
          attr = el.getAttribute('href', 2);
          break;
        case 'title':
          // getAttribute('title') can be '' when non-existent sometimes?
          attr = el.getAttribute('title') || null;
          break;
        case 'id':
          if (el.getAttribute) {
            attr = el.getAttribute('id');
            break;
          }
        default:
          attr = el[key] != null
            ? el[key]
            : el.getAttribute && el.getAttribute(key);
          break;
      }
      if (attr == null) return;
      attr = attr + '';
      if (i) {
        attr = attr.toLowerCase();
        val = val.toLowerCase();
      }
      return op(attr, val);
    };
  },
  ':first-child': function(el) {
    return !prev(el) && el.parentNode.nodeType === 1;
  },
  ':last-child': function(el) {
    return !next(el) && el.parentNode.nodeType === 1;
  },
  ':only-child': function(el) {
    return !prev(el) && !next(el)
      && el.parentNode.nodeType === 1;
  },
  ':nth-child': function(param, last) {
    return nth(param, function() {
      return true;
    }, last);
  },
  ':nth-last-child': function(param) {
    return selectors[':nth-child'](param, true);
  },
  ':root': function(el) {
    return el.ownerDocument.documentElement === el;
  },
  ':empty': function(el) {
    return !el.firstChild;
  },
  ':not': function(sel) {
    var test = compileGroup(sel);
    return function(el) {
      return !test(el);
    };
  },
  ':first-of-type': function(el) {
    if (el.parentNode.nodeType !== 1) return;
    var type = el.nodeName;
    while (el = prev(el)) {
      if (el.nodeName === type) return;
    }
    return true;
  },
  ':last-of-type': function(el) {
    if (el.parentNode.nodeType !== 1) return;
    var type = el.nodeName;
    while (el = next(el)) {
      if (el.nodeName === type) return;
    }
    return true;
  },
  ':only-of-type': function(el) {
    return selectors[':first-of-type'](el)
        && selectors[':last-of-type'](el);
  },
  ':nth-of-type': function(param, last) {
    return nth(param, function(rel, el) {
      return rel.nodeName === el.nodeName;
    }, last);
  },
  ':nth-last-of-type': function(param) {
    return selectors[':nth-of-type'](param, true);
  },
  ':checked': function(el) {
    return !!(el.checked || el.selected);
  },
  ':indeterminate': function(el) {
    return !selectors[':checked'](el);
  },
  ':enabled': function(el) {
    return !el.disabled && el.type !== 'hidden';
  },
  ':disabled': function(el) {
    return !!el.disabled;
  },
  ':target': function(el) {
    return el.id === window.location.hash.substring(1);
  },
  ':focus': function(el) {
    return el === el.ownerDocument.activeElement;
  },
  ':matches': function(sel) {
    return compileGroup(sel);
  },
  ':nth-match': function(param, last) {
    var args = param.split(/\s*,\s*/)
      , arg = args.shift()
      , test = compileGroup(args.join(','));

    return nth(arg, test, last);
  },
  ':nth-last-match': function(param) {
    return selectors[':nth-match'](param, true);
  },
  ':links-here': function(el) {
    return el + '' === window.location + '';
  },
  ':lang': function(param) {
    return function(el) {
      while (el) {
        if (el.lang) return el.lang.indexOf(param) === 0;
        el = el.parentNode;
      }
    };
  },
  ':dir': function(param) {
    return function(el) {
      while (el) {
        if (el.dir) return el.dir === param;
        el = el.parentNode;
      }
    };
  },
  ':scope': function(el, con) {
    var context = con || el.ownerDocument;
    if (context.nodeType === 9) {
      return el === context.documentElement;
    }
    return el === context;
  },
  ':any-link': function(el) {
    return typeof el.href === 'string';
  },
  ':local-link': function(el) {
    if (el.nodeName) {
      return el.href && el.host === window.location.host;
    }
    var param = +el + 1;
    return function(el) {
      if (!el.href) return;

      var url = window.location + ''
        , href = el + '';

      return truncateUrl(url, param) === truncateUrl(href, param);
    };
  },
  ':default': function(el) {
    return !!el.defaultSelected;
  },
  ':valid': function(el) {
    return el.willValidate || (el.validity && el.validity.valid);
  },
  ':invalid': function(el) {
    return !selectors[':valid'](el);
  },
  ':in-range': function(el) {
    return el.value > el.min && el.value <= el.max;
  },
  ':out-of-range': function(el) {
    return !selectors[':in-range'](el);
  },
  ':required': function(el) {
    return !!el.required;
  },
  ':optional': function(el) {
    return !el.required;
  },
  ':read-only': function(el) {
    if (el.readOnly) return true;

    var attr = el.getAttribute('contenteditable')
      , prop = el.contentEditable
      , name = el.nodeName.toLowerCase();

    name = name !== 'input' && name !== 'textarea';

    return (name || el.disabled) && attr == null && prop !== 'true';
  },
  ':read-write': function(el) {
    return !selectors[':read-only'](el);
  },
  ':hover': function() {
    throw new Error(':hover is not supported.');
  },
  ':active': function() {
    throw new Error(':active is not supported.');
  },
  ':link': function() {
    throw new Error(':link is not supported.');
  },
  ':visited': function() {
    throw new Error(':visited is not supported.');
  },
  ':column': function() {
    throw new Error(':column is not supported.');
  },
  ':nth-column': function() {
    throw new Error(':nth-column is not supported.');
  },
  ':nth-last-column': function() {
    throw new Error(':nth-last-column is not supported.');
  },
  ':current': function() {
    throw new Error(':current is not supported.');
  },
  ':past': function() {
    throw new Error(':past is not supported.');
  },
  ':future': function() {
    throw new Error(':future is not supported.');
  },
  // Non-standard, for compatibility purposes.
  ':contains': function(param) {
    return function(el) {
      var text = el.innerText || el.textContent || el.value || '';
      return !!~text.indexOf(param);
    };
  },
  ':has': function(param) {
    return function(el) {
      return zest(param, el).length > 0;
    };
  }
  // Potentially add more pseudo selectors for
  // compatibility with sizzle and most other
  // selector engines (?).
};

/**
 * Attribute Operators
 */

var operators = {
  '-': function() {
    return true;
  },
  '=': function(attr, val) {
    return attr === val;
  },
  '*=': function(attr, val) {
    return attr.indexOf(val) !== -1;
  },
  '~=': function(attr, val) {
    var i = attr.indexOf(val)
      , f
      , l;

    if (i === -1) return;
    f = attr[i - 1];
    l = attr[i + val.length];

    return (!f || f === ' ') && (!l || l === ' ');
  },
  '|=': function(attr, val) {
    var i = attr.indexOf(val)
      , l;

    if (i !== 0) return;
    l = attr[i + val.length];

    return l === '-' || !l;
  },
  '^=': function(attr, val) {
    return attr.indexOf(val) === 0;
  },
  '$=': function(attr, val) {
    return attr.indexOf(val) + val.length === attr.length;
  },
  // non-standard
  '!=': function(attr, val) {
    return attr !== val;
  }
};

/**
 * Combinator Logic
 */

var combinators = {
  ' ': function(test) {
    return function(el) {
      while (el = el.parentNode) {
        if (test(el)) return el;
      }
    };
  },
  '>': function(test) {
    return function(el) {
      return test(el = el.parentNode) && el;
    };
  },
  '+': function(test) {
    return function(el) {
      return test(el = prev(el)) && el;
    };
  },
  '~': function(test) {
    return function(el) {
      while (el = prev(el)) {
        if (test(el)) return el;
      }
    };
  },
  'noop': function(test) {
    return function(el) {
      return test(el) && el;
    };
  },
  'ref': function(test, name) {
    var node;

    function ref(el) {
      var doc = el.ownerDocument
        , nodes = doc.getElementsByTagName('*')
        , i = nodes.length;

      while (i--) {
        node = nodes[i];
        if (ref.test(el)) {
          node = null;
          return true;
        }
      }

      node = null;
    }

    ref.combinator = function(el) {
      if (!node || !node.getAttribute) return;

      var attr = node.getAttribute(name) || '';
      if (attr[0] === '#') attr = attr.substring(1);

      if (attr === el.id && test(node)) {
        return node;
      }
    };

    return ref;
  }
};

/**
 * Grammar
 */

var rules = {
  qname: /^ *([\w\-]+|\*)/,
  simple: /^(?:([.#][\w\-]+)|pseudo|attr)/,
  ref: /^ *\/([\w\-]+)\/ */,
  combinator: /^(?: +([^ \w*]) +|( )+|([^ \w*]))(?! *$)/,
  attr: /^\[([\w\-]+)(?:([^\w]?=)(inside))?\]/,
  pseudo: /^(:[\w\-]+)(?:\((inside)\))?/,
  inside: /(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|<[^"'>]*>|\\["'>]|[^"'>])*/
};

rules.inside = replace(rules.inside, '[^"\'>]*', rules.inside);
rules.attr = replace(rules.attr, 'inside', makeInside('\\[', '\\]'));
rules.pseudo = replace(rules.pseudo, 'inside', makeInside('\\(', '\\)'));
rules.simple = replace(rules.simple, 'pseudo', rules.pseudo);
rules.simple = replace(rules.simple, 'attr', rules.attr);

/**
 * Compiling
 */

var compile = function(sel) {
  var sel = sel.replace(/^\s+|\s+$/g, '')
    , test
    , filter = []
    , buff = []
    , subject
    , qname
    , cap
    , op
    , ref;

  while (sel) {
    if (cap = rules.qname.exec(sel)) {
      sel = sel.substring(cap[0].length);
      qname = cap[1];
      buff.push(tok(qname, true));
    } else if (cap = rules.simple.exec(sel)) {
      sel = sel.substring(cap[0].length);
      qname = '*';
      buff.push(tok(qname, true));
      buff.push(tok(cap));
    } else {
      throw new Error('Invalid selector.');
    }

    while (cap = rules.simple.exec(sel)) {
      sel = sel.substring(cap[0].length);
      buff.push(tok(cap));
    }

    if (sel[0] === '!') {
      sel = sel.substring(1);
      subject = makeSubject();
      subject.qname = qname;
      buff.push(subject.simple);
    }

    if (cap = rules.ref.exec(sel)) {
      sel = sel.substring(cap[0].length);
      ref = combinators.ref(makeSimple(buff), cap[1]);
      filter.push(ref.combinator);
      buff = [];
      continue;
    }

    if (cap = rules.combinator.exec(sel)) {
      sel = sel.substring(cap[0].length);
      op = cap[1] || cap[2] || cap[3];
      if (op === ',') {
        filter.push(combinators.noop(makeSimple(buff)));
        break;
      }
    } else {
      op = 'noop';
    }

    filter.push(combinators[op](makeSimple(buff)));
    buff = [];
  }

  test = makeTest(filter);
  test.qname = qname;
  test.sel = sel;

  if (subject) {
    subject.lname = test.qname;

    subject.test = test;
    subject.qname = subject.qname;
    subject.sel = test.sel;
    test = subject;
  }

  if (ref) {
    ref.test = test;
    ref.qname = test.qname;
    ref.sel = test.sel;
    test = ref;
  }

  return test;
};

var tok = function(cap, qname) {
  // qname
  if (qname) {
    return cap === '*'
      ? selectors['*']
      : selectors.type(cap);
  }

  // class/id
  if (cap[1]) {
    return cap[1][0] === '.'
      ? selectors.attr('class', '~=', cap[1].substring(1))
      : selectors.attr('id', '=', cap[1].substring(1));
  }

  // pseudo-name
  // inside-pseudo
  if (cap[2]) {
    return cap[3]
      ? selectors[cap[2]](unquote(cap[3]))
      : selectors[cap[2]];
  }

  // attr name
  // attr op
  // attr value
  if (cap[4]) {
    var i;
    if (cap[6]) {
      i = cap[6].length;
      cap[6] = cap[6].replace(/ +i$/, '');
      i = i > cap[6].length;
    }
    return selectors.attr(cap[4], cap[5] || '-', unquote(cap[6]), i);
  }

  throw new Error('Unknown Selector.');
};

var makeSimple = function(func) {
  var l = func.length
    , i;

  // Potentially make sure
  // `el` is truthy.
  if (l < 2) return func[0];

  return function(el) {
    if (!el) return;
    for (i = 0; i < l; i++) {
      if (!func[i](el)) return;
    }
    return true;
  };
};

var makeTest = function(func) {
  if (func.length < 2) {
    return function(el) {
      return !!func[0](el);
    };
  }
  return function(el) {
    var i = func.length;
    while (i--) {
      if (!(el = func[i](el))) return;
    }
    return true;
  };
};

var makeSubject = function() {
  var target;

  function subject(el) {
    var node = el.ownerDocument
      , scope = node.getElementsByTagName(subject.lname)
      , i = scope.length;

    while (i--) {
      if (subject.test(scope[i]) && target === el) {
        target = null;
        return true;
      }
    }

    target = null;
  }

  subject.simple = function(el) {
    target = el;
    return true;
  };

  return subject;
};

var compileGroup = function(sel) {
  var test = compile(sel)
    , tests = [ test ];

  while (test.sel) {
    test = compile(test.sel);
    tests.push(test);
  }

  if (tests.length < 2) return test;

  return function(el) {
    var l = tests.length
      , i = 0;

    for (; i < l; i++) {
      if (tests[i](el)) return true;
    }
  };
};

/**
 * Selection
 */

var find = function(sel, node) {
  var results = []
    , test = compile(sel)
    , scope = node.getElementsByTagName(test.qname)
    , i = 0
    , el;

  while (el = scope[i++]) {
    if (test(el)) results.push(el);
  }

  if (test.sel) {
    while (test.sel) {
      test = compile(test.sel);
      scope = node.getElementsByTagName(test.qname);
      i = 0;
      while (el = scope[i++]) {
        if (test(el) && !~indexOf.call(results, el)) {
          results.push(el);
        }
      }
    }
    results.sort(order);
  }

  return results;
};

/**
 * Native
 */

var select = (function() {
  var slice = (function() {
    try {
      Array.prototype.slice.call(document.getElementsByTagName('zest'));
      return Array.prototype.slice;
    } catch(e) {
      e = null;
      return function() {
        var a = [], i = 0, l = this.length;
        for (; i < l; i++) a.push(this[i]);
        return a;
      };
    }
  })();

  if (document.querySelectorAll) {
    return function(sel, node) {
      try {
        return slice.call(node.querySelectorAll(sel));
      } catch(e) {
        return find(sel, node);
      }
    };
  }

  return function(sel, node) {
    try {
      if (sel[0] === '#' && /^#[\w\-]+$/.test(sel)) {
        return [node.getElementById(sel.substring(1))];
      }
      if (sel[0] === '.' && /^\.[\w\-]+$/.test(sel)) {
        sel = node.getElementsByClassName(sel.substring(1));
        return slice.call(sel);
      }
      if (/^[\w\-]+$/.test(sel)) {
        return slice.call(node.getElementsByTagName(sel));
      }
    } catch(e) {
      ;
    }
    return find(sel, node);
  };
})();

/**
 * Zest
 */

var zest = function(sel, node) {
  try {
    sel = select(sel, node || document);
  } catch(e) {
    if (window.ZEST_DEBUG) {
      console.log(e.stack || e + '');
    }
    sel = [];
  }
  return sel;
};

/**
 * Expose
 */

zest.selectors = selectors;
zest.operators = operators;
zest.combinators = combinators;
zest.compile = compileGroup;

zest.matches = function(el, sel) {
  return !!compileGroup(sel)(el);
};

zest.cache = function() {
  if (compile.raw) return;

  var raw = compile
    , cache = {};

  compile = function(sel) {
    return cache[sel]
      || (cache[sel] = raw(sel));
  };

  compile.raw = raw;
  zest._cache = cache;
};

zest.noCache = function() {
  if (!compile.raw) return;
  compile = compile.raw;
  delete zest._cache;
};

zest.noConflict = function() {
  window.zest = old;
  return zest;
};

zest.noNative = function() {
  select = find;
};

if (typeof module !== 'undefined') {
  module.exports = zest;
} else {
  this.zest = zest;
}

if (window.ZEST_DEBUG) {
  zest.noNative();
} else {
  zest.cache();
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],3:[function(require,module,exports){
'use strict';

var _activity = require('./util/activity.js');

var _activity2 = _interopRequireDefault(_activity);

var _cat = require('./util/cat.js');

var _cat2 = _interopRequireDefault(_cat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = require('zest'); // dom selector engine
var anime = require('animejs');

// DOM
var container = $('#activities__by-cat');
var cards = $('.category-card');
var drilldown = $('#drilldown');

var ajax = axios.create({ // axios, our AJAX lib
	baseURL: 'http://doe.concordia.ca/cslp/wp-json/wp/v2/'
});

var state = {
	drillLevel: 0,
	active: 'none',
	levelstring: '',
	themeID: null, // for further caching. Implement later!

	backone: function backone() {
		state.drillLevel -= 1;

		console.log('state.drillLevel: ', state.drillLevel);

		if (state.drillLevel <= 0) {
			$('#drilldown')[0].setAttribute('data-active', 'none');
			$('#activities__by-cat')[0].className = 'selected';
			anime({
				targets: '.activities-meta p',
				// delay: 1000,
				opacity: [0, 1],
				duration: 400,
				easing: 'easeOutExpo',
				complete: function complete() {
					anime({
						targets: '#activities__by-cat',
						opacity: [0, 1],
						duration: 700
					});
				}
			});
			state.drillLevel = 0;
		}
		if (state.drillLevel == 1) {
			$('#cat-meta')[0].className = '';
			$('#activity')[0].className = 'hidden';
			$('#activities__by-cat')[0].className = ''; // hidden
		}
	},

	hidemeta: function hidemeta() {
		$('.activity-meta')[0].className = 'stories-meta hidden';
	}
};

function init() {
	$('#cat-meta').className = 'hidden';

	cards.forEach(function (item) {
		on('click', item, function (event) {

			event.preventDefault();

			var ID = item.getAttribute('data-cat');

			if (!_cat2.default.isCached(ID)) {
				_cat2.default.get(ID, ajax, function (data) {
					console.log('Retrieved live data: ID #' + ID);
					state.levelstring = 'By category > ' + data.name;
					_cat2.default.setDOM(data, state, _activity2.default, ajax);
				});
			} else {
				var data = JSON.parse(localStorage.getItem('abra_ac' + ID));
				console.log('Retrieved cached data: ID #' + ID);
				state.levelstring = 'By category > ' + data.name;
				_cat2.default.setDOM(data, state, _activity2.default, ajax);
			}

			container.className = '';
			drilldown[0].setAttribute('data-active', 'cat');
		});
	});

	on('click', '#back-button', function () {
		state.backone();
	});
}
on('DOMContentLoaded', window, init());

function on(event, element, cb, passive) {
	var el = $(element)[0] || element;
	el.addEventListener(event, cb, passive);
}

},{"./util/activity.js":4,"./util/cat.js":5,"animejs":1,"zest":2}],4:[function(require,module,exports){
'use strict';

var $ = require('zest');
var anime = require('animejs');

module.exports = {
	// Story Functions
	getRelatedStories: function getRelatedStories(query, callback, axios) {
		axios.get(query).then(function (res) {
			callback(res.data);
		}).catch('error', function (e) {
			console.warn(e);
		});
	},

	showStory: function showStory(data, state, axios) {
		$('#cat-meta')[0].className = 'hidden';
		$('#activity')[0].className = '';
		anime({
			targets: '#activity',
			opacity: [0, 1],
			duration: 400,
			translateY: { value: -40, duration: 800 },
			easing: 'easeOutExpo'
		});

		$('#activity-title')[0].innerHTML = data.title.rendered;

		$('#activity header span')[0].innerHTML = state.levelstring + ' > ' + data.title.rendered;

		// Overview, tab 1, contains: objective, gfa tips, levels
		$('#a-desc-c')[0].innerHTML = '<h4>Overview</h4>' + data.activity_description_activity_objective;

		$('#a-gfa-c')[0].innerHTML = '<h4>Group Facilitation Tips</h4>' + data.activity_description_activity_gfa;

		$('#a-level-c')[0].innerHTML = '<h4>Levels</h4>' + data.activity_description_activity_level;

		// Activity Insights
		// check if has insights, display insights?
		$('#a-insights-c')[0].innerHTML = '<h4>Activity Insights</h4>' + data.activity_insights;

		// Linked Stories, tab 3
		this.getStoriesInCat(data.activity_linked_stories, axios);

		// Resources, tab 4
		$('#a-resources-c')[0].innerHTML = '<h4>Resources</h4>' + data.activity_resources;

		$('#activity-video-container')[0].innerHTML = this.makeEmbedLink(data.activity_video);
	},

	makeTabContainer: function makeTabContainer() {
		var tabs = $('.activity__nav.tabs li'); // Get all tabs

		tabs.forEach(function (tab) {
			var link = tab.firstChild;

			link.addEventListener('click', function (e) {
				e.preventDefault();

				// Get location of tab's content (href => id)
				var contentTab = link.getAttribute('href');

				// Set other tabs & nav labes as inactive
				$('.tabs-content div').forEach(function (t) {
					t.className = '';
				});
				$('.tabs li').forEach(function (l) {
					l.className = '';
				});

				// Set selected tab & nav item active
				tab.className = 'active';
				$(contentTab)[0].className = 'active';
			});
		});
	},
	getActivityIcon: function getActivityIcon(query, axios) {
		axios.get('media?parent=' + query).then(function (res) {
			var icon = document.createElement('img');
			icon.style.opacity = 0;
			icon.onload = function () {
				$('#activity-icon img')[0].style.opacity = 1;
			};
			icon.src = res.data[0].media_details.sizes.thumbnail.source_url;
			icon.alt = res.data[0].alt_text;
			$('#activity-icon')[0].appendChild(icon);
		}).catch('error', function (e) {
			return console.warn(e);
		});
	},
	getStoriesInCat: function getStoriesInCat(stories, axios) {
		var query = 'story?';

		// inneficient, yet WP api is so far incapable of dealing with something better.
		for (var i = stories.length - 1; i >= 0; i--) {
			query += 'include[]=' + stories[i] + '&';
		}
		query = query.slice(0, -1); // remove last ampersand

		axios.get(query).then(function (res) {
			var retval = '<ul>';
			for (var i = res.data.length - 1; i >= 0; i--) {
				retval += '<li><a href="' + res.data[i].link + '">' + res.data[i].title.rendered + '</a></li>';
			}
			retval + '</ul>';

			$('#a-related-c')[0].innerHTML = '<h4>Linked Stories</h4>' + '<p>Each link points to additional information and a pdf download to each story</p>' + retval;
		}).catch('error', function (e) {
			console.warn(e);
		});
	},
	makeEmbedLink: function makeEmbedLink(link) {
		var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		var match = link.match(regExp);

		if (match && match[2].length != 11) {
			return 'error';
		}

		var embed = '<iframe width="560" height="315" src="//www.youtube.com/embed/';
		return embed + match[2] + '" frameborder="0" allowfullscreen></iframe>';
	}
};

},{"animejs":1,"zest":2}],5:[function(require,module,exports){
'use strict';

var $ = require('zest');
var anime = require('animejs');

module.exports = {
	isCached: function isCached(ID) {
		return localStorage.getItem('abra_ac' + ID) ? true : false;
	},

	cache: function cache(data) {
		localStorage.setItem('abra_ac' + data.id, JSON.stringify(data));
	},

	get: function get(catID, axios, callback) {
		var _this = this;

		axios.get('activity_cat/' + catID).then(function (response) {
			_this.cache(response.data);
			callback(response.data);
		}).catch('error', function (error) {
			console.warn(error);
			return null;
		});
	},

	setDOM: function setDOM(cat, state, story, axios) {
		// set the element to visible
		var c = $('#cat-meta')[0];

		state.drillLevel = 1;
		$('#cat-meta')[0].className = '';
		$('#activity')[0].className = 'hidden';

		anime({
			targets: '.activities-meta p',
			// delay: 1000,
			opacity: [1, 0],
			duration: 400,
			easing: 'easeOutExpo',
			complete: function complete() {
				anime({
					targets: '#activities__by-cat',
					delay: 100,
					opacity: [1, 0],
					duration: 500,
					easing: 'easeOutExpo',
					complete: function complete() {
						$('#activities__by-cat')[0].className = '';
					}
				});
			}
		});

		// set meta description
		$('#cat-meta__header h2')[0].innerHTML = cat.name;
		$('#cat-meta__header span')[0].innerHTML = state.levelstring;
		$('#cat-meta__content').innerHTML = cat.description;

		// set async
		setTimeout(story.getRelatedStories('activity?activity_cat=' + cat.id, function (stories) {
			var list = $('#cat-meta__list');
			list.className = 'isRefreshing';
			list.innerHTML = '';

			// create story previews

			var _loop = function _loop() {
				var s = stories[i];

				var el = document.createElement('div');
				el.className = 'story';
				el.setAttribute('data-story', s.id);
				el.innerHTML = '<h3>' + s.title.rendered + '</h3>';

				$('#cat-meta__list')[0].appendChild(el);

				el.addEventListener('click', function () {
					state.drillLevel += 1;
					story.makeTabContainer();
					story.showStory(s, state, axios);
					story.getActivityIcon(s.id, axios);
				});
			};

			for (var i = stories.length - 1; i >= 0; i--) {
				_loop();
			}
			list.className = '';
		}, axios), 0);
	}
};

},{"animejs":1,"zest":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYW5pbWVqcy9hbmltZS5taW4uanMiLCJub2RlX21vZHVsZXMvemVzdC9saWIvemVzdC5qcyIsInNyYy9zY3JpcHRzL2FjdGl2aXRpZXMvYWN0aXZpdGllcy5qcyIsInNyYy9zY3JpcHRzL2FjdGl2aXRpZXMvdXRpbC9hY3Rpdml0eS5qcyIsInNyYy9zY3JpcHRzL2FjdGl2aXRpZXMvdXRpbC9jYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3A3QkE7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxJQUFJLFFBQVEsTUFBUixDQUFWLEMsQ0FBMEI7QUFDMUIsSUFBTSxRQUFRLFFBQVEsU0FBUixDQUFkOztBQUVBO0FBQ0EsSUFBTSxZQUFZLEVBQUUscUJBQUYsQ0FBbEI7QUFDQSxJQUFNLFFBQVEsRUFBRSxnQkFBRixDQUFkO0FBQ0EsSUFBTSxZQUFZLEVBQUUsWUFBRixDQUFsQjs7QUFFQSxJ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QUFpQixDQUE5QixFQUFpQyxLQUFLLENBQXRDLEVBQXlDLEdBQXpDLEVBQThDO0FBQUE7QUFnQjdDO0FBQ0QsUUFBSyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsR0F4QkQsRUF3QkcsS0F4QkgsQ0FERCxFQTBCRyxDQTFCSDtBQTRCQTtBQWpGZSxDQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qXG4gMjAxNyBKdWxpYW4gR2FybmllclxuIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuKi9cbnZhciAkanNjb21wPXtzY29wZTp7fX07JGpzY29tcC5kZWZpbmVQcm9wZXJ0eT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydGllcz9PYmplY3QuZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24oZSxyLHApe2lmKHAuZ2V0fHxwLnNldCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiRVMzIGRvZXMgbm90IHN1cHBvcnQgZ2V0dGVycyBhbmQgc2V0dGVycy5cIik7ZSE9QXJyYXkucHJvdG90eXBlJiZlIT1PYmplY3QucHJvdG90eXBlJiYoZVtyXT1wLnZhbHVlKX07JGpzY29tcC5nZXRHbG9iYWw9ZnVuY3Rpb24oZSl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93PT09ZT9lOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWwmJm51bGwhPWdsb2JhbD9nbG9iYWw6ZX07JGpzY29tcC5nbG9iYWw9JGpzY29tcC5nZXRHbG9iYWwodGhpcyk7JGpzY29tcC5TWU1CT0xfUFJFRklYPVwianNjb21wX3N5bWJvbF9cIjtcbiRqc2NvbXAuaW5pdFN5bWJvbD1mdW5jdGlvbigpeyRqc2NvbXAuaW5pdFN5bWJvbD1mdW5jdGlvbigpe307JGpzY29tcC5nbG9iYWwuU3ltYm9sfHwoJGpzY29tcC5nbG9iYWwuU3ltYm9sPSRqc2NvbXAuU3ltYm9sKX07JGpzY29tcC5zeW1ib2xDb3VudGVyXz0wOyRqc2NvbXAuU3ltYm9sPWZ1bmN0aW9uKGUpe3JldHVybiAkanNjb21wLlNZTUJPTF9QUkVGSVgrKGV8fFwiXCIpKyRqc2NvbXAuc3ltYm9sQ291bnRlcl8rK307XG4kanNjb21wLmluaXRTeW1ib2xJdGVyYXRvcj1mdW5jdGlvbigpeyRqc2NvbXAuaW5pdFN5bWJvbCgpO3ZhciBlPSRqc2NvbXAuZ2xvYmFsLlN5bWJvbC5pdGVyYXRvcjtlfHwoZT0kanNjb21wLmdsb2JhbC5TeW1ib2wuaXRlcmF0b3I9JGpzY29tcC5nbG9iYWwuU3ltYm9sKFwiaXRlcmF0b3JcIikpO1wiZnVuY3Rpb25cIiE9dHlwZW9mIEFycmF5LnByb3RvdHlwZVtlXSYmJGpzY29tcC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsZSx7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuICRqc2NvbXAuYXJyYXlJdGVyYXRvcih0aGlzKX19KTskanNjb21wLmluaXRTeW1ib2xJdGVyYXRvcj1mdW5jdGlvbigpe319OyRqc2NvbXAuYXJyYXlJdGVyYXRvcj1mdW5jdGlvbihlKXt2YXIgcj0wO3JldHVybiAkanNjb21wLml0ZXJhdG9yUHJvdG90eXBlKGZ1bmN0aW9uKCl7cmV0dXJuIHI8ZS5sZW5ndGg/e2RvbmU6ITEsdmFsdWU6ZVtyKytdfTp7ZG9uZTohMH19KX07XG4kanNjb21wLml0ZXJhdG9yUHJvdG90eXBlPWZ1bmN0aW9uKGUpeyRqc2NvbXAuaW5pdFN5bWJvbEl0ZXJhdG9yKCk7ZT17bmV4dDplfTtlWyRqc2NvbXAuZ2xvYmFsLlN5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307cmV0dXJuIGV9OyRqc2NvbXAuYXJyYXk9JGpzY29tcC5hcnJheXx8e307JGpzY29tcC5pdGVyYXRvckZyb21BcnJheT1mdW5jdGlvbihlLHIpeyRqc2NvbXAuaW5pdFN5bWJvbEl0ZXJhdG9yKCk7ZSBpbnN0YW5jZW9mIFN0cmluZyYmKGUrPVwiXCIpO3ZhciBwPTAsbT17bmV4dDpmdW5jdGlvbigpe2lmKHA8ZS5sZW5ndGgpe3ZhciB1PXArKztyZXR1cm57dmFsdWU6cih1LGVbdV0pLGRvbmU6ITF9fW0ubmV4dD1mdW5jdGlvbigpe3JldHVybntkb25lOiEwLHZhbHVlOnZvaWQgMH19O3JldHVybiBtLm5leHQoKX19O21bU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiBtfTtyZXR1cm4gbX07XG4kanNjb21wLnBvbHlmaWxsPWZ1bmN0aW9uKGUscixwLG0pe2lmKHIpe3A9JGpzY29tcC5nbG9iYWw7ZT1lLnNwbGl0KFwiLlwiKTtmb3IobT0wO208ZS5sZW5ndGgtMTttKyspe3ZhciB1PWVbbV07dSBpbiBwfHwocFt1XT17fSk7cD1wW3VdfWU9ZVtlLmxlbmd0aC0xXTttPXBbZV07cj1yKG0pO3IhPW0mJm51bGwhPXImJiRqc2NvbXAuZGVmaW5lUHJvcGVydHkocCxlLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6cn0pfX07JGpzY29tcC5wb2x5ZmlsbChcIkFycmF5LnByb3RvdHlwZS5rZXlzXCIsZnVuY3Rpb24oZSl7cmV0dXJuIGU/ZTpmdW5jdGlvbigpe3JldHVybiAkanNjb21wLml0ZXJhdG9yRnJvbUFycmF5KHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIGV9KX19LFwiZXM2LWltcGxcIixcImVzM1wiKTt2YXIgJGpzY29tcCR0aGlzPXRoaXM7XG4oZnVuY3Rpb24oZSxyKXtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxyKTpcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9cigpOmUuYW5pbWU9cigpfSkodGhpcyxmdW5jdGlvbigpe2Z1bmN0aW9uIGUoYSl7aWYoIWguY29sKGEpKXRyeXtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhKX1jYXRjaChjKXt9fWZ1bmN0aW9uIHIoYSxjKXtmb3IodmFyIGQ9YS5sZW5ndGgsYj0yPD1hcmd1bWVudHMubGVuZ3RoP2FyZ3VtZW50c1sxXTp2b2lkIDAsZj1bXSxuPTA7bjxkO24rKylpZihuIGluIGEpe3ZhciBrPWFbbl07Yy5jYWxsKGIsayxuLGEpJiZmLnB1c2goayl9cmV0dXJuIGZ9ZnVuY3Rpb24gcChhKXtyZXR1cm4gYS5yZWR1Y2UoZnVuY3Rpb24oYSxkKXtyZXR1cm4gYS5jb25jYXQoaC5hcnIoZCk/cChkKTpkKX0sW10pfWZ1bmN0aW9uIG0oYSl7aWYoaC5hcnIoYSkpcmV0dXJuIGE7XG5oLnN0cihhKSYmKGE9ZShhKXx8YSk7cmV0dXJuIGEgaW5zdGFuY2VvZiBOb2RlTGlzdHx8YSBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uP1tdLnNsaWNlLmNhbGwoYSk6W2FdfWZ1bmN0aW9uIHUoYSxjKXtyZXR1cm4gYS5zb21lKGZ1bmN0aW9uKGEpe3JldHVybiBhPT09Y30pfWZ1bmN0aW9uIEMoYSl7dmFyIGM9e30sZDtmb3IoZCBpbiBhKWNbZF09YVtkXTtyZXR1cm4gY31mdW5jdGlvbiBEKGEsYyl7dmFyIGQ9QyhhKSxiO2ZvcihiIGluIGEpZFtiXT1jLmhhc093blByb3BlcnR5KGIpP2NbYl06YVtiXTtyZXR1cm4gZH1mdW5jdGlvbiB6KGEsYyl7dmFyIGQ9QyhhKSxiO2ZvcihiIGluIGMpZFtiXT1oLnVuZChhW2JdKT9jW2JdOmFbYl07cmV0dXJuIGR9ZnVuY3Rpb24gVChhKXthPWEucmVwbGFjZSgvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pLGZ1bmN0aW9uKGEsYyxkLGspe3JldHVybiBjK2MrZCtkK2sra30pO3ZhciBjPS9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhhKTtcbmE9cGFyc2VJbnQoY1sxXSwxNik7dmFyIGQ9cGFyc2VJbnQoY1syXSwxNiksYz1wYXJzZUludChjWzNdLDE2KTtyZXR1cm5cInJnYmEoXCIrYStcIixcIitkK1wiLFwiK2MrXCIsMSlcIn1mdW5jdGlvbiBVKGEpe2Z1bmN0aW9uIGMoYSxjLGIpezA+YiYmKGIrPTEpOzE8YiYmLS1iO3JldHVybiBiPDEvNj9hKzYqKGMtYSkqYjouNT5iP2M6YjwyLzM/YSsoYy1hKSooMi8zLWIpKjY6YX12YXIgZD0vaHNsXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklXFwpL2cuZXhlYyhhKXx8L2hzbGFcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKVxcKS9nLmV4ZWMoYSk7YT1wYXJzZUludChkWzFdKS8zNjA7dmFyIGI9cGFyc2VJbnQoZFsyXSkvMTAwLGY9cGFyc2VJbnQoZFszXSkvMTAwLGQ9ZFs0XXx8MTtpZigwPT1iKWY9Yj1hPWY7ZWxzZXt2YXIgbj0uNT5mP2YqKDErYik6ZitiLWYqYixrPTIqZi1uLGY9YyhrLG4sYSsxLzMpLGI9YyhrLG4sYSk7YT1jKGssbixhLTEvMyl9cmV0dXJuXCJyZ2JhKFwiK1xuMjU1KmYrXCIsXCIrMjU1KmIrXCIsXCIrMjU1KmErXCIsXCIrZCtcIilcIn1mdW5jdGlvbiB5KGEpe2lmKGE9LyhbXFwrXFwtXT9bMC05I1xcLl0rKSglfHB4fHB0fGVtfHJlbXxpbnxjbXxtbXxleHxjaHxwY3x2d3x2aHx2bWlufHZtYXh8ZGVnfHJhZHx0dXJuKT8kLy5leGVjKGEpKXJldHVybiBhWzJdfWZ1bmN0aW9uIFYoYSl7aWYoLTE8YS5pbmRleE9mKFwidHJhbnNsYXRlXCIpfHxcInBlcnNwZWN0aXZlXCI9PT1hKXJldHVyblwicHhcIjtpZigtMTxhLmluZGV4T2YoXCJyb3RhdGVcIil8fC0xPGEuaW5kZXhPZihcInNrZXdcIikpcmV0dXJuXCJkZWdcIn1mdW5jdGlvbiBJKGEsYyl7cmV0dXJuIGguZm5jKGEpP2EoYy50YXJnZXQsYy5pZCxjLnRvdGFsKTphfWZ1bmN0aW9uIEUoYSxjKXtpZihjIGluIGEuc3R5bGUpcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoYSkuZ2V0UHJvcGVydHlWYWx1ZShjLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csXCIkMS0kMlwiKS50b0xvd2VyQ2FzZSgpKXx8XCIwXCJ9ZnVuY3Rpb24gSihhLGMpe2lmKGguZG9tKGEpJiZcbnUoVyxjKSlyZXR1cm5cInRyYW5zZm9ybVwiO2lmKGguZG9tKGEpJiYoYS5nZXRBdHRyaWJ1dGUoYyl8fGguc3ZnKGEpJiZhW2NdKSlyZXR1cm5cImF0dHJpYnV0ZVwiO2lmKGguZG9tKGEpJiZcInRyYW5zZm9ybVwiIT09YyYmRShhLGMpKXJldHVyblwiY3NzXCI7aWYobnVsbCE9YVtjXSlyZXR1cm5cIm9iamVjdFwifWZ1bmN0aW9uIFgoYSxjKXt2YXIgZD1WKGMpLGQ9LTE8Yy5pbmRleE9mKFwic2NhbGVcIik/MTowK2Q7YT1hLnN0eWxlLnRyYW5zZm9ybTtpZighYSlyZXR1cm4gZDtmb3IodmFyIGI9W10sZj1bXSxuPVtdLGs9LyhcXHcrKVxcKCguKz8pXFwpL2c7Yj1rLmV4ZWMoYSk7KWYucHVzaChiWzFdKSxuLnB1c2goYlsyXSk7YT1yKG4sZnVuY3Rpb24oYSxiKXtyZXR1cm4gZltiXT09PWN9KTtyZXR1cm4gYS5sZW5ndGg/YVswXTpkfWZ1bmN0aW9uIEsoYSxjKXtzd2l0Y2goSihhLGMpKXtjYXNlIFwidHJhbnNmb3JtXCI6cmV0dXJuIFgoYSxjKTtjYXNlIFwiY3NzXCI6cmV0dXJuIEUoYSxjKTtjYXNlIFwiYXR0cmlidXRlXCI6cmV0dXJuIGEuZ2V0QXR0cmlidXRlKGMpfXJldHVybiBhW2NdfHxcbjB9ZnVuY3Rpb24gTChhLGMpe3ZhciBkPS9eKFxcKj18XFwrPXwtPSkvLmV4ZWMoYSk7aWYoIWQpcmV0dXJuIGE7dmFyIGI9eShhKXx8MDtjPXBhcnNlRmxvYXQoYyk7YT1wYXJzZUZsb2F0KGEucmVwbGFjZShkWzBdLFwiXCIpKTtzd2l0Y2goZFswXVswXSl7Y2FzZSBcIitcIjpyZXR1cm4gYythK2I7Y2FzZSBcIi1cIjpyZXR1cm4gYy1hK2I7Y2FzZSBcIipcIjpyZXR1cm4gYyphK2J9fWZ1bmN0aW9uIEYoYSxjKXtyZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGMueC1hLngsMikrTWF0aC5wb3coYy55LWEueSwyKSl9ZnVuY3Rpb24gTShhKXthPWEucG9pbnRzO2Zvcih2YXIgYz0wLGQsYj0wO2I8YS5udW1iZXJPZkl0ZW1zO2IrKyl7dmFyIGY9YS5nZXRJdGVtKGIpOzA8YiYmKGMrPUYoZCxmKSk7ZD1mfXJldHVybiBjfWZ1bmN0aW9uIE4oYSl7aWYoYS5nZXRUb3RhbExlbmd0aClyZXR1cm4gYS5nZXRUb3RhbExlbmd0aCgpO3N3aXRjaChhLnRhZ05hbWUudG9Mb3dlckNhc2UoKSl7Y2FzZSBcImNpcmNsZVwiOnJldHVybiAyKlxuTWF0aC5QSSphLmdldEF0dHJpYnV0ZShcInJcIik7Y2FzZSBcInJlY3RcIjpyZXR1cm4gMiphLmdldEF0dHJpYnV0ZShcIndpZHRoXCIpKzIqYS5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIik7Y2FzZSBcImxpbmVcIjpyZXR1cm4gRih7eDphLmdldEF0dHJpYnV0ZShcIngxXCIpLHk6YS5nZXRBdHRyaWJ1dGUoXCJ5MVwiKX0se3g6YS5nZXRBdHRyaWJ1dGUoXCJ4MlwiKSx5OmEuZ2V0QXR0cmlidXRlKFwieTJcIil9KTtjYXNlIFwicG9seWxpbmVcIjpyZXR1cm4gTShhKTtjYXNlIFwicG9seWdvblwiOnZhciBjPWEucG9pbnRzO3JldHVybiBNKGEpK0YoYy5nZXRJdGVtKGMubnVtYmVyT2ZJdGVtcy0xKSxjLmdldEl0ZW0oMCkpfX1mdW5jdGlvbiBZKGEsYyl7ZnVuY3Rpb24gZChiKXtiPXZvaWQgMD09PWI/MDpiO3JldHVybiBhLmVsLmdldFBvaW50QXRMZW5ndGgoMTw9YytiP2MrYjowKX12YXIgYj1kKCksZj1kKC0xKSxuPWQoMSk7c3dpdGNoKGEucHJvcGVydHkpe2Nhc2UgXCJ4XCI6cmV0dXJuIGIueDtjYXNlIFwieVwiOnJldHVybiBiLnk7XG5jYXNlIFwiYW5nbGVcIjpyZXR1cm4gMTgwKk1hdGguYXRhbjIobi55LWYueSxuLngtZi54KS9NYXRoLlBJfX1mdW5jdGlvbiBPKGEsYyl7dmFyIGQ9Ly0/XFxkKlxcLj9cXGQrL2csYjtiPWgucHRoKGEpP2EudG90YWxMZW5ndGg6YTtpZihoLmNvbChiKSlpZihoLnJnYihiKSl7dmFyIGY9L3JnYlxcKChcXGQrLFxccypbXFxkXSssXFxzKltcXGRdKylcXCkvZy5leGVjKGIpO2I9Zj9cInJnYmEoXCIrZlsxXStcIiwxKVwiOmJ9ZWxzZSBiPWguaGV4KGIpP1QoYik6aC5oc2woYik/VShiKTp2b2lkIDA7ZWxzZSBmPShmPXkoYikpP2Iuc3Vic3RyKDAsYi5sZW5ndGgtZi5sZW5ndGgpOmIsYj1jJiYhL1xccy9nLnRlc3QoYik/ZitjOmY7Yis9XCJcIjtyZXR1cm57b3JpZ2luYWw6YixudW1iZXJzOmIubWF0Y2goZCk/Yi5tYXRjaChkKS5tYXAoTnVtYmVyKTpbMF0sc3RyaW5nczpoLnN0cihhKXx8Yz9iLnNwbGl0KGQpOltdfX1mdW5jdGlvbiBQKGEpe2E9YT9wKGguYXJyKGEpP2EubWFwKG0pOm0oYSkpOltdO3JldHVybiByKGEsXG5mdW5jdGlvbihhLGQsYil7cmV0dXJuIGIuaW5kZXhPZihhKT09PWR9KX1mdW5jdGlvbiBaKGEpe3ZhciBjPVAoYSk7cmV0dXJuIGMubWFwKGZ1bmN0aW9uKGEsYil7cmV0dXJue3RhcmdldDphLGlkOmIsdG90YWw6Yy5sZW5ndGh9fSl9ZnVuY3Rpb24gYWEoYSxjKXt2YXIgZD1DKGMpO2lmKGguYXJyKGEpKXt2YXIgYj1hLmxlbmd0aDsyIT09Ynx8aC5vYmooYVswXSk/aC5mbmMoYy5kdXJhdGlvbil8fChkLmR1cmF0aW9uPWMuZHVyYXRpb24vYik6YT17dmFsdWU6YX19cmV0dXJuIG0oYSkubWFwKGZ1bmN0aW9uKGEsYil7Yj1iPzA6Yy5kZWxheTthPWgub2JqKGEpJiYhaC5wdGgoYSk/YTp7dmFsdWU6YX07aC51bmQoYS5kZWxheSkmJihhLmRlbGF5PWIpO3JldHVybiBhfSkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiB6KGEsZCl9KX1mdW5jdGlvbiBiYShhLGMpe3ZhciBkPXt9LGI7Zm9yKGIgaW4gYSl7dmFyIGY9SShhW2JdLGMpO2guYXJyKGYpJiYoZj1mLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gSShhLFxuYyl9KSwxPT09Zi5sZW5ndGgmJihmPWZbMF0pKTtkW2JdPWZ9ZC5kdXJhdGlvbj1wYXJzZUZsb2F0KGQuZHVyYXRpb24pO2QuZGVsYXk9cGFyc2VGbG9hdChkLmRlbGF5KTtyZXR1cm4gZH1mdW5jdGlvbiBjYShhKXtyZXR1cm4gaC5hcnIoYSk/QS5hcHBseSh0aGlzLGEpOlFbYV19ZnVuY3Rpb24gZGEoYSxjKXt2YXIgZDtyZXR1cm4gYS50d2VlbnMubWFwKGZ1bmN0aW9uKGIpe2I9YmEoYixjKTt2YXIgZj1iLnZhbHVlLGU9SyhjLnRhcmdldCxhLm5hbWUpLGs9ZD9kLnRvLm9yaWdpbmFsOmUsaz1oLmFycihmKT9mWzBdOmssdz1MKGguYXJyKGYpP2ZbMV06ZixrKSxlPXkodyl8fHkoayl8fHkoZSk7Yi5mcm9tPU8oayxlKTtiLnRvPU8odyxlKTtiLnN0YXJ0PWQ/ZC5lbmQ6YS5vZmZzZXQ7Yi5lbmQ9Yi5zdGFydCtiLmRlbGF5K2IuZHVyYXRpb247Yi5lYXNpbmc9Y2EoYi5lYXNpbmcpO2IuZWxhc3RpY2l0eT0oMUUzLU1hdGgubWluKE1hdGgubWF4KGIuZWxhc3RpY2l0eSwxKSw5OTkpKS9cbjFFMztiLmlzUGF0aD1oLnB0aChmKTtiLmlzQ29sb3I9aC5jb2woYi5mcm9tLm9yaWdpbmFsKTtiLmlzQ29sb3ImJihiLnJvdW5kPTEpO3JldHVybiBkPWJ9KX1mdW5jdGlvbiBlYShhLGMpe3JldHVybiByKHAoYS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGMubWFwKGZ1bmN0aW9uKGIpe3ZhciBjPUooYS50YXJnZXQsYi5uYW1lKTtpZihjKXt2YXIgZD1kYShiLGEpO2I9e3R5cGU6Yyxwcm9wZXJ0eTpiLm5hbWUsYW5pbWF0YWJsZTphLHR3ZWVuczpkLGR1cmF0aW9uOmRbZC5sZW5ndGgtMV0uZW5kLGRlbGF5OmRbMF0uZGVsYXl9fWVsc2UgYj12b2lkIDA7cmV0dXJuIGJ9KX0pKSxmdW5jdGlvbihhKXtyZXR1cm4haC51bmQoYSl9KX1mdW5jdGlvbiBSKGEsYyxkLGIpe3ZhciBmPVwiZGVsYXlcIj09PWE7cmV0dXJuIGMubGVuZ3RoPyhmP01hdGgubWluOk1hdGgubWF4KS5hcHBseShNYXRoLGMubWFwKGZ1bmN0aW9uKGIpe3JldHVybiBiW2FdfSkpOmY/Yi5kZWxheTpkLm9mZnNldCtiLmRlbGF5K1xuYi5kdXJhdGlvbn1mdW5jdGlvbiBmYShhKXt2YXIgYz1EKGdhLGEpLGQ9RChTLGEpLGI9WihhLnRhcmdldHMpLGY9W10sZT16KGMsZCksaztmb3IoayBpbiBhKWUuaGFzT3duUHJvcGVydHkoayl8fFwidGFyZ2V0c1wiPT09a3x8Zi5wdXNoKHtuYW1lOmssb2Zmc2V0OmUub2Zmc2V0LHR3ZWVuczphYShhW2tdLGQpfSk7YT1lYShiLGYpO3JldHVybiB6KGMse2NoaWxkcmVuOltdLGFuaW1hdGFibGVzOmIsYW5pbWF0aW9uczphLGR1cmF0aW9uOlIoXCJkdXJhdGlvblwiLGEsYyxkKSxkZWxheTpSKFwiZGVsYXlcIixhLGMsZCl9KX1mdW5jdGlvbiBxKGEpe2Z1bmN0aW9uIGMoKXtyZXR1cm4gd2luZG93LlByb21pc2UmJm5ldyBQcm9taXNlKGZ1bmN0aW9uKGEpe3JldHVybiBwPWF9KX1mdW5jdGlvbiBkKGEpe3JldHVybiBnLnJldmVyc2VkP2cuZHVyYXRpb24tYTphfWZ1bmN0aW9uIGIoYSl7Zm9yKHZhciBiPTAsYz17fSxkPWcuYW5pbWF0aW9ucyxmPWQubGVuZ3RoO2I8Zjspe3ZhciBlPWRbYl0sXG5rPWUuYW5pbWF0YWJsZSxoPWUudHdlZW5zLG49aC5sZW5ndGgtMSxsPWhbbl07biYmKGw9cihoLGZ1bmN0aW9uKGIpe3JldHVybiBhPGIuZW5kfSlbMF18fGwpO2Zvcih2YXIgaD1NYXRoLm1pbihNYXRoLm1heChhLWwuc3RhcnQtbC5kZWxheSwwKSxsLmR1cmF0aW9uKS9sLmR1cmF0aW9uLHc9aXNOYU4oaCk/MTpsLmVhc2luZyhoLGwuZWxhc3RpY2l0eSksaD1sLnRvLnN0cmluZ3MscD1sLnJvdW5kLG49W10sbT12b2lkIDAsbT1sLnRvLm51bWJlcnMubGVuZ3RoLHQ9MDt0PG07dCsrKXt2YXIgeD12b2lkIDAseD1sLnRvLm51bWJlcnNbdF0scT1sLmZyb20ubnVtYmVyc1t0XSx4PWwuaXNQYXRoP1kobC52YWx1ZSx3KngpOnErdyooeC1xKTtwJiYobC5pc0NvbG9yJiYyPHR8fCh4PU1hdGgucm91bmQoeCpwKS9wKSk7bi5wdXNoKHgpfWlmKGw9aC5sZW5ndGgpZm9yKG09aFswXSx3PTA7dzxsO3crKylwPWhbdysxXSx0PW5bd10saXNOYU4odCl8fChtPXA/bSsodCtwKTptKyh0K1wiIFwiKSk7XG5lbHNlIG09blswXTtoYVtlLnR5cGVdKGsudGFyZ2V0LGUucHJvcGVydHksbSxjLGsuaWQpO2UuY3VycmVudFZhbHVlPW07YisrfWlmKGI9T2JqZWN0LmtleXMoYykubGVuZ3RoKWZvcihkPTA7ZDxiO2QrKylIfHwoSD1FKGRvY3VtZW50LmJvZHksXCJ0cmFuc2Zvcm1cIik/XCJ0cmFuc2Zvcm1cIjpcIi13ZWJraXQtdHJhbnNmb3JtXCIpLGcuYW5pbWF0YWJsZXNbZF0udGFyZ2V0LnN0eWxlW0hdPWNbZF0uam9pbihcIiBcIik7Zy5jdXJyZW50VGltZT1hO2cucHJvZ3Jlc3M9YS9nLmR1cmF0aW9uKjEwMH1mdW5jdGlvbiBmKGEpe2lmKGdbYV0pZ1thXShnKX1mdW5jdGlvbiBlKCl7Zy5yZW1haW5pbmcmJiEwIT09Zy5yZW1haW5pbmcmJmcucmVtYWluaW5nLS19ZnVuY3Rpb24gayhhKXt2YXIgaz1nLmR1cmF0aW9uLG49Zy5vZmZzZXQsdz1uK2cuZGVsYXkscj1nLmN1cnJlbnRUaW1lLHg9Zy5yZXZlcnNlZCxxPWQoYSk7aWYoZy5jaGlsZHJlbi5sZW5ndGgpe3ZhciB1PWcuY2hpbGRyZW4sdj11Lmxlbmd0aDtcbmlmKHE+PWcuY3VycmVudFRpbWUpZm9yKHZhciBHPTA7Rzx2O0crKyl1W0ddLnNlZWsocSk7ZWxzZSBmb3IoO3YtLTspdVt2XS5zZWVrKHEpfWlmKHE+PXd8fCFrKWcuYmVnYW58fChnLmJlZ2FuPSEwLGYoXCJiZWdpblwiKSksZihcInJ1blwiKTtpZihxPm4mJnE8ayliKHEpO2Vsc2UgaWYocTw9biYmMCE9PXImJihiKDApLHgmJmUoKSkscT49ayYmciE9PWt8fCFrKWIoaykseHx8ZSgpO2YoXCJ1cGRhdGVcIik7YT49ayYmKGcucmVtYWluaW5nPyh0PWgsXCJhbHRlcm5hdGVcIj09PWcuZGlyZWN0aW9uJiYoZy5yZXZlcnNlZD0hZy5yZXZlcnNlZCkpOihnLnBhdXNlKCksZy5jb21wbGV0ZWR8fChnLmNvbXBsZXRlZD0hMCxmKFwiY29tcGxldGVcIiksXCJQcm9taXNlXCJpbiB3aW5kb3cmJihwKCksbT1jKCkpKSksbD0wKX1hPXZvaWQgMD09PWE/e306YTt2YXIgaCx0LGw9MCxwPW51bGwsbT1jKCksZz1mYShhKTtnLnJlc2V0PWZ1bmN0aW9uKCl7dmFyIGE9Zy5kaXJlY3Rpb24sYz1nLmxvb3A7Zy5jdXJyZW50VGltZT1cbjA7Zy5wcm9ncmVzcz0wO2cucGF1c2VkPSEwO2cuYmVnYW49ITE7Zy5jb21wbGV0ZWQ9ITE7Zy5yZXZlcnNlZD1cInJldmVyc2VcIj09PWE7Zy5yZW1haW5pbmc9XCJhbHRlcm5hdGVcIj09PWEmJjE9PT1jPzI6YztiKDApO2ZvcihhPWcuY2hpbGRyZW4ubGVuZ3RoO2EtLTspZy5jaGlsZHJlblthXS5yZXNldCgpfTtnLnRpY2s9ZnVuY3Rpb24oYSl7aD1hO3R8fCh0PWgpO2soKGwraC10KSpxLnNwZWVkKX07Zy5zZWVrPWZ1bmN0aW9uKGEpe2soZChhKSl9O2cucGF1c2U9ZnVuY3Rpb24oKXt2YXIgYT12LmluZGV4T2YoZyk7LTE8YSYmdi5zcGxpY2UoYSwxKTtnLnBhdXNlZD0hMH07Zy5wbGF5PWZ1bmN0aW9uKCl7Zy5wYXVzZWQmJihnLnBhdXNlZD0hMSx0PTAsbD1kKGcuY3VycmVudFRpbWUpLHYucHVzaChnKSxCfHxpYSgpKX07Zy5yZXZlcnNlPWZ1bmN0aW9uKCl7Zy5yZXZlcnNlZD0hZy5yZXZlcnNlZDt0PTA7bD1kKGcuY3VycmVudFRpbWUpfTtnLnJlc3RhcnQ9ZnVuY3Rpb24oKXtnLnBhdXNlKCk7XG5nLnJlc2V0KCk7Zy5wbGF5KCl9O2cuZmluaXNoZWQ9bTtnLnJlc2V0KCk7Zy5hdXRvcGxheSYmZy5wbGF5KCk7cmV0dXJuIGd9dmFyIGdhPXt1cGRhdGU6dm9pZCAwLGJlZ2luOnZvaWQgMCxydW46dm9pZCAwLGNvbXBsZXRlOnZvaWQgMCxsb29wOjEsZGlyZWN0aW9uOlwibm9ybWFsXCIsYXV0b3BsYXk6ITAsb2Zmc2V0OjB9LFM9e2R1cmF0aW9uOjFFMyxkZWxheTowLGVhc2luZzpcImVhc2VPdXRFbGFzdGljXCIsZWxhc3RpY2l0eTo1MDAscm91bmQ6MH0sVz1cInRyYW5zbGF0ZVggdHJhbnNsYXRlWSB0cmFuc2xhdGVaIHJvdGF0ZSByb3RhdGVYIHJvdGF0ZVkgcm90YXRlWiBzY2FsZSBzY2FsZVggc2NhbGVZIHNjYWxlWiBza2V3WCBza2V3WSBwZXJzcGVjdGl2ZVwiLnNwbGl0KFwiIFwiKSxILGg9e2FycjpmdW5jdGlvbihhKXtyZXR1cm4gQXJyYXkuaXNBcnJheShhKX0sb2JqOmZ1bmN0aW9uKGEpe3JldHVybi0xPE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKS5pbmRleE9mKFwiT2JqZWN0XCIpfSxcbnB0aDpmdW5jdGlvbihhKXtyZXR1cm4gaC5vYmooYSkmJmEuaGFzT3duUHJvcGVydHkoXCJ0b3RhbExlbmd0aFwiKX0sc3ZnOmZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgU1ZHRWxlbWVudH0sZG9tOmZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGVUeXBlfHxoLnN2ZyhhKX0sc3RyOmZ1bmN0aW9uKGEpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYX0sZm5jOmZ1bmN0aW9uKGEpe3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhfSx1bmQ6ZnVuY3Rpb24oYSl7cmV0dXJuXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBhfSxoZXg6ZnVuY3Rpb24oYSl7cmV0dXJuLyheI1swLTlBLUZdezZ9JCl8KF4jWzAtOUEtRl17M30kKS9pLnRlc3QoYSl9LHJnYjpmdW5jdGlvbihhKXtyZXR1cm4vXnJnYi8udGVzdChhKX0saHNsOmZ1bmN0aW9uKGEpe3JldHVybi9eaHNsLy50ZXN0KGEpfSxjb2w6ZnVuY3Rpb24oYSl7cmV0dXJuIGguaGV4KGEpfHxoLnJnYihhKXx8aC5oc2woYSl9fSxBPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhLFxuZCxiKXtyZXR1cm4oKCgxLTMqYiszKmQpKmErKDMqYi02KmQpKSphKzMqZCkqYX1yZXR1cm4gZnVuY3Rpb24oYyxkLGIsZil7aWYoMDw9YyYmMT49YyYmMDw9YiYmMT49Yil7dmFyIGU9bmV3IEZsb2F0MzJBcnJheSgxMSk7aWYoYyE9PWR8fGIhPT1mKWZvcih2YXIgaz0wOzExPms7KytrKWVba109YSguMSprLGMsYik7cmV0dXJuIGZ1bmN0aW9uKGspe2lmKGM9PT1kJiZiPT09ZilyZXR1cm4gaztpZigwPT09aylyZXR1cm4gMDtpZigxPT09aylyZXR1cm4gMTtmb3IodmFyIGg9MCxsPTE7MTAhPT1sJiZlW2xdPD1rOysrbCloKz0uMTstLWw7dmFyIGw9aCsoay1lW2xdKS8oZVtsKzFdLWVbbF0pKi4xLG49MyooMS0zKmIrMypjKSpsKmwrMiooMypiLTYqYykqbCszKmM7aWYoLjAwMTw9bil7Zm9yKGg9MDs0Pmg7KytoKXtuPTMqKDEtMypiKzMqYykqbCpsKzIqKDMqYi02KmMpKmwrMypjO2lmKDA9PT1uKWJyZWFrO3ZhciBtPWEobCxjLGIpLWssbD1sLW0vbn1rPWx9ZWxzZSBpZigwPT09XG5uKWs9bDtlbHNle3ZhciBsPWgsaD1oKy4xLGc9MDtkbyBtPWwrKGgtbCkvMixuPWEobSxjLGIpLWssMDxuP2g9bTpsPW07d2hpbGUoMWUtNzxNYXRoLmFicyhuKSYmMTA+KytnKTtrPW19cmV0dXJuIGEoayxkLGYpfX19fSgpLFE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEsYil7cmV0dXJuIDA9PT1hfHwxPT09YT9hOi1NYXRoLnBvdygyLDEwKihhLTEpKSpNYXRoLnNpbigyKihhLTEtYi8oMipNYXRoLlBJKSpNYXRoLmFzaW4oMSkpKk1hdGguUEkvYil9dmFyIGM9XCJRdWFkIEN1YmljIFF1YXJ0IFF1aW50IFNpbmUgRXhwbyBDaXJjIEJhY2sgRWxhc3RpY1wiLnNwbGl0KFwiIFwiKSxkPXtJbjpbWy41NSwuMDg1LC42OCwuNTNdLFsuNTUsLjA1NSwuNjc1LC4xOV0sWy44OTUsLjAzLC42ODUsLjIyXSxbLjc1NSwuMDUsLjg1NSwuMDZdLFsuNDcsMCwuNzQ1LC43MTVdLFsuOTUsLjA1LC43OTUsLjAzNV0sWy42LC4wNCwuOTgsLjMzNV0sWy42LC0uMjgsLjczNSwuMDQ1XSxhXSxPdXQ6W1suMjUsXG4uNDYsLjQ1LC45NF0sWy4yMTUsLjYxLC4zNTUsMV0sWy4xNjUsLjg0LC40NCwxXSxbLjIzLDEsLjMyLDFdLFsuMzksLjU3NSwuNTY1LDFdLFsuMTksMSwuMjIsMV0sWy4wNzUsLjgyLC4xNjUsMV0sWy4xNzUsLjg4NSwuMzIsMS4yNzVdLGZ1bmN0aW9uKGIsYyl7cmV0dXJuIDEtYSgxLWIsYyl9XSxJbk91dDpbWy40NTUsLjAzLC41MTUsLjk1NV0sWy42NDUsLjA0NSwuMzU1LDFdLFsuNzcsMCwuMTc1LDFdLFsuODYsMCwuMDcsMV0sWy40NDUsLjA1LC41NSwuOTVdLFsxLDAsMCwxXSxbLjc4NSwuMTM1LC4xNSwuODZdLFsuNjgsLS41NSwuMjY1LDEuNTVdLGZ1bmN0aW9uKGIsYyl7cmV0dXJuLjU+Yj9hKDIqYixjKS8yOjEtYSgtMipiKzIsYykvMn1dfSxiPXtsaW5lYXI6QSguMjUsLjI1LC43NSwuNzUpfSxmPXt9LGU7Zm9yKGUgaW4gZClmLnR5cGU9ZSxkW2YudHlwZV0uZm9yRWFjaChmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oZCxmKXtiW1wiZWFzZVwiK2EudHlwZStjW2ZdXT1oLmZuYyhkKT9cbmQ6QS5hcHBseSgkanNjb21wJHRoaXMsZCl9fShmKSksZj17dHlwZTpmLnR5cGV9O3JldHVybiBifSgpLGhhPXtjc3M6ZnVuY3Rpb24oYSxjLGQpe3JldHVybiBhLnN0eWxlW2NdPWR9LGF0dHJpYnV0ZTpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGEuc2V0QXR0cmlidXRlKGMsZCl9LG9iamVjdDpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGFbY109ZH0sdHJhbnNmb3JtOmZ1bmN0aW9uKGEsYyxkLGIsZil7YltmXXx8KGJbZl09W10pO2JbZl0ucHVzaChjK1wiKFwiK2QrXCIpXCIpfX0sdj1bXSxCPTAsaWE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7Qj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYyl9ZnVuY3Rpb24gYyhjKXt2YXIgYj12Lmxlbmd0aDtpZihiKXtmb3IodmFyIGQ9MDtkPGI7KXZbZF0mJnZbZF0udGljayhjKSxkKys7YSgpfWVsc2UgY2FuY2VsQW5pbWF0aW9uRnJhbWUoQiksQj0wfXJldHVybiBhfSgpO3EudmVyc2lvbj1cIjIuMi4wXCI7cS5zcGVlZD0xO3EucnVubmluZz12O3EucmVtb3ZlPVxuZnVuY3Rpb24oYSl7YT1QKGEpO2Zvcih2YXIgYz12Lmxlbmd0aDtjLS07KWZvcih2YXIgZD12W2NdLGI9ZC5hbmltYXRpb25zLGY9Yi5sZW5ndGg7Zi0tOyl1KGEsYltmXS5hbmltYXRhYmxlLnRhcmdldCkmJihiLnNwbGljZShmLDEpLGIubGVuZ3RofHxkLnBhdXNlKCkpfTtxLmdldFZhbHVlPUs7cS5wYXRoPWZ1bmN0aW9uKGEsYyl7dmFyIGQ9aC5zdHIoYSk/ZShhKVswXTphLGI9Y3x8MTAwO3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm57ZWw6ZCxwcm9wZXJ0eTphLHRvdGFsTGVuZ3RoOk4oZCkqKGIvMTAwKX19fTtxLnNldERhc2hvZmZzZXQ9ZnVuY3Rpb24oYSl7dmFyIGM9TihhKTthLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNoYXJyYXlcIixjKTtyZXR1cm4gY307cS5iZXppZXI9QTtxLmVhc2luZ3M9UTtxLnRpbWVsaW5lPWZ1bmN0aW9uKGEpe3ZhciBjPXEoYSk7Yy5wYXVzZSgpO2MuZHVyYXRpb249MDtjLmFkZD1mdW5jdGlvbihkKXtjLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oYSl7YS5iZWdhbj1cbiEwO2EuY29tcGxldGVkPSEwfSk7bShkKS5mb3JFYWNoKGZ1bmN0aW9uKGIpe3ZhciBkPXooYixEKFMsYXx8e30pKTtkLnRhcmdldHM9ZC50YXJnZXRzfHxhLnRhcmdldHM7Yj1jLmR1cmF0aW9uO3ZhciBlPWQub2Zmc2V0O2QuYXV0b3BsYXk9ITE7ZC5kaXJlY3Rpb249Yy5kaXJlY3Rpb247ZC5vZmZzZXQ9aC51bmQoZSk/YjpMKGUsYik7Yy5iZWdhbj0hMDtjLmNvbXBsZXRlZD0hMDtjLnNlZWsoZC5vZmZzZXQpO2Q9cShkKTtkLmJlZ2FuPSEwO2QuY29tcGxldGVkPSEwO2QuZHVyYXRpb24+YiYmKGMuZHVyYXRpb249ZC5kdXJhdGlvbik7Yy5jaGlsZHJlbi5wdXNoKGQpfSk7Yy5zZWVrKDApO2MucmVzZXQoKTtjLmF1dG9wbGF5JiZjLnJlc3RhcnQoKTtyZXR1cm4gY307cmV0dXJuIGN9O3EucmFuZG9tPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooYy1hKzEpKSthfTtyZXR1cm4gcX0pOyIsIi8qKlxuICogWmVzdCAoaHR0cHM6Ly9naXRodWIuY29tL2NoamovemVzdClcbiAqIEEgY3NzIHNlbGVjdG9yIGVuZ2luZS5cbiAqIENvcHlyaWdodCAoYykgMjAxMS0yMDEyLCBDaHJpc3RvcGhlciBKZWZmcmV5LiAoTUlUIExpY2Vuc2VkKVxuICovXG5cbi8vIFRPRE9cbi8vIC0gUmVjb2duaXplIHRoZSBUUiBzdWJqZWN0IHNlbGVjdG9yIHdoZW4gcGFyc2luZy5cbi8vIC0gUGFzcyBjb250ZXh0IHRvIHNjb3BlLlxuLy8gLSBBZGQgOmNvbHVtbiBwc2V1ZG8tY2xhc3Nlcy5cblxuOyhmdW5jdGlvbigpIHtcblxuLyoqXG4gKiBTaGFyZWRcbiAqL1xuXG52YXIgd2luZG93ID0gdGhpc1xuICAsIGRvY3VtZW50ID0gdGhpcy5kb2N1bWVudFxuICAsIG9sZCA9IHRoaXMuemVzdDtcblxuLyoqXG4gKiBIZWxwZXJzXG4gKi9cblxudmFyIGNvbXBhcmVEb2N1bWVudFBvc2l0aW9uID0gKGZ1bmN0aW9uKCkge1xuICBpZiAoZG9jdW1lbnQuY29tcGFyZURvY3VtZW50UG9zaXRpb24pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oYSwgYikge1xuICAgICAgcmV0dXJuIGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYik7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oYSwgYikge1xuICAgIHZhciBlbCA9IGEub3duZXJEb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpXG4gICAgICAsIGkgPSBlbC5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZiAoZWxbaV0gPT09IGEpIHJldHVybiAyO1xuICAgICAgaWYgKGVsW2ldID09PSBiKSByZXR1cm4gNDtcbiAgICB9XG5cbiAgICByZXR1cm4gMTtcbiAgfTtcbn0pKCk7XG5cbnZhciBvcmRlciA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGEsIGIpICYgMiA/IDEgOiAtMTtcbn07XG5cbnZhciBuZXh0ID0gZnVuY3Rpb24oZWwpIHtcbiAgd2hpbGUgKChlbCA9IGVsLm5leHRTaWJsaW5nKVxuICAgICAgICAgJiYgZWwubm9kZVR5cGUgIT09IDEpO1xuICByZXR1cm4gZWw7XG59O1xuXG52YXIgcHJldiA9IGZ1bmN0aW9uKGVsKSB7XG4gIHdoaWxlICgoZWwgPSBlbC5wcmV2aW91c1NpYmxpbmcpXG4gICAgICAgICAmJiBlbC5ub2RlVHlwZSAhPT0gMSk7XG4gIHJldHVybiBlbDtcbn07XG5cbnZhciBjaGlsZCA9IGZ1bmN0aW9uKGVsKSB7XG4gIGlmIChlbCA9IGVsLmZpcnN0Q2hpbGQpIHtcbiAgICB3aGlsZSAoZWwubm9kZVR5cGUgIT09IDFcbiAgICAgICAgICAgJiYgKGVsID0gZWwubmV4dFNpYmxpbmcpKTtcbiAgfVxuICByZXR1cm4gZWw7XG59O1xuXG52YXIgbGFzdENoaWxkID0gZnVuY3Rpb24oZWwpIHtcbiAgaWYgKGVsID0gZWwubGFzdENoaWxkKSB7XG4gICAgd2hpbGUgKGVsLm5vZGVUeXBlICE9PSAxXG4gICAgICAgICAgICYmIChlbCA9IGVsLnByZXZpb3VzU2libGluZykpO1xuICB9XG4gIHJldHVybiBlbDtcbn07XG5cbnZhciB1bnF1b3RlID0gZnVuY3Rpb24oc3RyKSB7XG4gIGlmICghc3RyKSByZXR1cm4gc3RyO1xuICB2YXIgY2ggPSBzdHJbMF07XG4gIHJldHVybiBjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJydcbiAgICA/IHN0ci5zbGljZSgxLCAtMSlcbiAgICA6IHN0cjtcbn07XG5cbnZhciBpbmRleE9mID0gKGZ1bmN0aW9uKCkge1xuICBpZiAoQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmluZGV4T2Y7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKG9iaiwgaXRlbSkge1xuICAgIHZhciBpID0gdGhpcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWYgKHRoaXNbaV0gPT09IGl0ZW0pIHJldHVybiBpO1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH07XG59KSgpO1xuXG52YXIgbWFrZUluc2lkZSA9IGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJlZ2V4ID0gcnVsZXMuaW5zaWRlLnNvdXJjZVxuICAgIC5yZXBsYWNlKC88L2csIHN0YXJ0KVxuICAgIC5yZXBsYWNlKC8+L2csIGVuZCk7XG5cbiAgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXgpO1xufTtcblxudmFyIHJlcGxhY2UgPSBmdW5jdGlvbihyZWdleCwgbmFtZSwgdmFsKSB7XG4gIHJlZ2V4ID0gcmVnZXguc291cmNlO1xuICByZWdleCA9IHJlZ2V4LnJlcGxhY2UobmFtZSwgdmFsLnNvdXJjZSB8fCB2YWwpO1xuICByZXR1cm4gbmV3IFJlZ0V4cChyZWdleCk7XG59O1xuXG52YXIgdHJ1bmNhdGVVcmwgPSBmdW5jdGlvbih1cmwsIG51bSkge1xuICByZXR1cm4gdXJsXG4gICAgLnJlcGxhY2UoL14oPzpcXHcrOlxcL1xcL3xcXC8rKS8sICcnKVxuICAgIC5yZXBsYWNlKC8oPzpcXC8rfFxcLyojLio/KSQvLCAnJylcbiAgICAuc3BsaXQoJy8nLCBudW0pXG4gICAgLmpvaW4oJy8nKTtcbn07XG5cbi8qKlxuICogSGFuZGxlIGBudGhgIFNlbGVjdG9yc1xuICovXG5cbnZhciBwYXJzZU50aCA9IGZ1bmN0aW9uKHBhcmFtLCB0ZXN0KSB7XG4gIHZhciBwYXJhbSA9IHBhcmFtLnJlcGxhY2UoL1xccysvZywgJycpXG4gICAgLCBjYXA7XG5cbiAgaWYgKHBhcmFtID09PSAnZXZlbicpIHtcbiAgICBwYXJhbSA9ICcybiswJztcbiAgfSBlbHNlIGlmIChwYXJhbSA9PT0gJ29kZCcpIHtcbiAgICBwYXJhbSA9ICcybisxJztcbiAgfSBlbHNlIGlmICghfnBhcmFtLmluZGV4T2YoJ24nKSkge1xuICAgIHBhcmFtID0gJzBuJyArIHBhcmFtO1xuICB9XG5cbiAgY2FwID0gL14oWystXSk/KFxcZCspP24oWystXSk/KFxcZCspPyQvLmV4ZWMocGFyYW0pO1xuXG4gIHJldHVybiB7XG4gICAgZ3JvdXA6IGNhcFsxXSA9PT0gJy0nXG4gICAgICA/IC0oY2FwWzJdIHx8IDEpXG4gICAgICA6ICsoY2FwWzJdIHx8IDEpLFxuICAgIG9mZnNldDogY2FwWzRdXG4gICAgICA/IChjYXBbM10gPT09ICctJyA/IC1jYXBbNF0gOiArY2FwWzRdKVxuICAgICAgOiAwXG4gIH07XG59O1xuXG52YXIgbnRoID0gZnVuY3Rpb24ocGFyYW0sIHRlc3QsIGxhc3QpIHtcbiAgdmFyIHBhcmFtID0gcGFyc2VOdGgocGFyYW0pXG4gICAgLCBncm91cCA9IHBhcmFtLmdyb3VwXG4gICAgLCBvZmZzZXQgPSBwYXJhbS5vZmZzZXRcbiAgICAsIGZpbmQgPSAhbGFzdCA/IGNoaWxkIDogbGFzdENoaWxkXG4gICAgLCBhZHZhbmNlID0gIWxhc3QgPyBuZXh0IDogcHJldjtcblxuICByZXR1cm4gZnVuY3Rpb24oZWwpIHtcbiAgICBpZiAoZWwucGFyZW50Tm9kZS5ub2RlVHlwZSAhPT0gMSkgcmV0dXJuO1xuXG4gICAgdmFyIHJlbCA9IGZpbmQoZWwucGFyZW50Tm9kZSlcbiAgICAgICwgcG9zID0gMDtcblxuICAgIHdoaWxlIChyZWwpIHtcbiAgICAgIGlmICh0ZXN0KHJlbCwgZWwpKSBwb3MrKztcbiAgICAgIGlmIChyZWwgPT09IGVsKSB7XG4gICAgICAgIHBvcyAtPSBvZmZzZXQ7XG4gICAgICAgIHJldHVybiBncm91cCAmJiBwb3NcbiAgICAgICAgICA/ICEocG9zICUgZ3JvdXApICYmIChwb3MgPCAwID09PSBncm91cCA8IDApXG4gICAgICAgICAgOiAhcG9zO1xuICAgICAgfVxuICAgICAgcmVsID0gYWR2YW5jZShyZWwpO1xuICAgIH1cbiAgfTtcbn07XG5cbi8qKlxuICogU2ltcGxlIFNlbGVjdG9yc1xuICovXG5cbnZhciBzZWxlY3RvcnMgPSB7XG4gICcqJzogKGZ1bmN0aW9uKCkge1xuICAgIGlmIChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJykpO1xuICAgICAgcmV0dXJuICEhZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKVswXTtcbiAgICB9KCkpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlbCkge1xuICAgICAgICBpZiAoZWwubm9kZVR5cGUgPT09IDEpIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKSxcbiAgJ3R5cGUnOiBmdW5jdGlvbih0eXBlKSB7XG4gICAgdHlwZSA9IHR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oZWwpIHtcbiAgICAgIHJldHVybiBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSB0eXBlO1xuICAgIH07XG4gIH0sXG4gICdhdHRyJzogZnVuY3Rpb24oa2V5LCBvcCwgdmFsLCBpKSB7XG4gICAgb3AgPSBvcGVyYXRvcnNbb3BdO1xuICAgIHJldHVybiBmdW5jdGlvbihlbCkge1xuICAgICAgdmFyIGF0dHI7XG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICdmb3InOlxuICAgICAgICAgIGF0dHIgPSBlbC5odG1sRm9yO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjbGFzcyc6XG4gICAgICAgICAgLy8gY2xhc3NOYW1lIGlzICcnIHdoZW4gbm9uLWV4aXN0ZW50XG4gICAgICAgICAgLy8gZ2V0QXR0cmlidXRlKCdjbGFzcycpIGlzIG51bGxcbiAgICAgICAgICBhdHRyID0gZWwuY2xhc3NOYW1lO1xuICAgICAgICAgIGlmIChhdHRyID09PSAnJyAmJiBlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT0gbnVsbCkge1xuICAgICAgICAgICAgYXR0ciA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdocmVmJzpcbiAgICAgICAgICBhdHRyID0gZWwuZ2V0QXR0cmlidXRlKCdocmVmJywgMik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RpdGxlJzpcbiAgICAgICAgICAvLyBnZXRBdHRyaWJ1dGUoJ3RpdGxlJykgY2FuIGJlICcnIHdoZW4gbm9uLWV4aXN0ZW50IHNvbWV0aW1lcz9cbiAgICAgICAgICBhdHRyID0gZWwuZ2V0QXR0cmlidXRlKCd0aXRsZScpIHx8IG51bGw7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2lkJzpcbiAgICAgICAgICBpZiAoZWwuZ2V0QXR0cmlidXRlKSB7XG4gICAgICAgICAgICBhdHRyID0gZWwuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGF0dHIgPSBlbFtrZXldICE9IG51bGxcbiAgICAgICAgICAgID8gZWxba2V5XVxuICAgICAgICAgICAgOiBlbC5nZXRBdHRyaWJ1dGUgJiYgZWwuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoYXR0ciA9PSBudWxsKSByZXR1cm47XG4gICAgICBhdHRyID0gYXR0ciArICcnO1xuICAgICAgaWYgKGkpIHtcbiAgICAgICAgYXR0ciA9IGF0dHIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdmFsID0gdmFsLnRvTG93ZXJDYXNlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3AoYXR0ciwgdmFsKTtcbiAgICB9O1xuICB9LFxuICAnOmZpcnN0LWNoaWxkJzogZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gIXByZXYoZWwpICYmIGVsLnBhcmVudE5vZGUubm9kZVR5cGUgPT09IDE7XG4gIH0sXG4gICc6bGFzdC1jaGlsZCc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuICFuZXh0KGVsKSAmJiBlbC5wYXJlbnROb2RlLm5vZGVUeXBlID09PSAxO1xuICB9LFxuICAnOm9ubHktY2hpbGQnOiBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiAhcHJldihlbCkgJiYgIW5leHQoZWwpXG4gICAgICAmJiBlbC5wYXJlbnROb2RlLm5vZGVUeXBlID09PSAxO1xuICB9LFxuICAnOm50aC1jaGlsZCc6IGZ1bmN0aW9uKHBhcmFtLCBsYXN0KSB7XG4gICAgcmV0dXJuIG50aChwYXJhbSwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LCBsYXN0KTtcbiAgfSxcbiAgJzpudGgtbGFzdC1jaGlsZCc6IGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yc1snOm50aC1jaGlsZCddKHBhcmFtLCB0cnVlKTtcbiAgfSxcbiAgJzpyb290JzogZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gZWwub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgPT09IGVsO1xuICB9LFxuICAnOmVtcHR5JzogZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gIWVsLmZpcnN0Q2hpbGQ7XG4gIH0sXG4gICc6bm90JzogZnVuY3Rpb24oc2VsKSB7XG4gICAgdmFyIHRlc3QgPSBjb21waWxlR3JvdXAoc2VsKTtcbiAgICByZXR1cm4gZnVuY3Rpb24oZWwpIHtcbiAgICAgIHJldHVybiAhdGVzdChlbCk7XG4gICAgfTtcbiAgfSxcbiAgJzpmaXJzdC1vZi10eXBlJzogZnVuY3Rpb24oZWwpIHtcbiAgICBpZiAoZWwucGFyZW50Tm9kZS5ub2RlVHlwZSAhPT0gMSkgcmV0dXJuO1xuICAgIHZhciB0eXBlID0gZWwubm9kZU5hbWU7XG4gICAgd2hpbGUgKGVsID0gcHJldihlbCkpIHtcbiAgICAgIGlmIChlbC5ub2RlTmFtZSA9PT0gdHlwZSkgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgJzpsYXN0LW9mLXR5cGUnOiBmdW5jdGlvbihlbCkge1xuICAgIGlmIChlbC5wYXJlbnROb2RlLm5vZGVUeXBlICE9PSAxKSByZXR1cm47XG4gICAgdmFyIHR5cGUgPSBlbC5ub2RlTmFtZTtcbiAgICB3aGlsZSAoZWwgPSBuZXh0KGVsKSkge1xuICAgICAgaWYgKGVsLm5vZGVOYW1lID09PSB0eXBlKSByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICAnOm9ubHktb2YtdHlwZSc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yc1snOmZpcnN0LW9mLXR5cGUnXShlbClcbiAgICAgICAgJiYgc2VsZWN0b3JzWyc6bGFzdC1vZi10eXBlJ10oZWwpO1xuICB9LFxuICAnOm50aC1vZi10eXBlJzogZnVuY3Rpb24ocGFyYW0sIGxhc3QpIHtcbiAgICByZXR1cm4gbnRoKHBhcmFtLCBmdW5jdGlvbihyZWwsIGVsKSB7XG4gICAgICByZXR1cm4gcmVsLm5vZGVOYW1lID09PSBlbC5ub2RlTmFtZTtcbiAgICB9LCBsYXN0KTtcbiAgfSxcbiAgJzpudGgtbGFzdC1vZi10eXBlJzogZnVuY3Rpb24ocGFyYW0pIHtcbiAgICByZXR1cm4gc2VsZWN0b3JzWyc6bnRoLW9mLXR5cGUnXShwYXJhbSwgdHJ1ZSk7XG4gIH0sXG4gICc6Y2hlY2tlZCc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuICEhKGVsLmNoZWNrZWQgfHwgZWwuc2VsZWN0ZWQpO1xuICB9LFxuICAnOmluZGV0ZXJtaW5hdGUnOiBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiAhc2VsZWN0b3JzWyc6Y2hlY2tlZCddKGVsKTtcbiAgfSxcbiAgJzplbmFibGVkJzogZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gIWVsLmRpc2FibGVkICYmIGVsLnR5cGUgIT09ICdoaWRkZW4nO1xuICB9LFxuICAnOmRpc2FibGVkJzogZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gISFlbC5kaXNhYmxlZDtcbiAgfSxcbiAgJzp0YXJnZXQnOiBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiBlbC5pZCA9PT0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpO1xuICB9LFxuICAnOmZvY3VzJzogZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gZWwgPT09IGVsLm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgfSxcbiAgJzptYXRjaGVzJzogZnVuY3Rpb24oc2VsKSB7XG4gICAgcmV0dXJuIGNvbXBpbGVHcm91cChzZWwpO1xuICB9LFxuICAnOm50aC1tYXRjaCc6IGZ1bmN0aW9uKHBhcmFtLCBsYXN0KSB7XG4gICAgdmFyIGFyZ3MgPSBwYXJhbS5zcGxpdCgvXFxzKixcXHMqLylcbiAgICAgICwgYXJnID0gYXJncy5zaGlmdCgpXG4gICAgICAsIHRlc3QgPSBjb21waWxlR3JvdXAoYXJncy5qb2luKCcsJykpO1xuXG4gICAgcmV0dXJuIG50aChhcmcsIHRlc3QsIGxhc3QpO1xuICB9LFxuICAnOm50aC1sYXN0LW1hdGNoJzogZnVuY3Rpb24ocGFyYW0pIHtcbiAgICByZXR1cm4gc2VsZWN0b3JzWyc6bnRoLW1hdGNoJ10ocGFyYW0sIHRydWUpO1xuICB9LFxuICAnOmxpbmtzLWhlcmUnOiBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiBlbCArICcnID09PSB3aW5kb3cubG9jYXRpb24gKyAnJztcbiAgfSxcbiAgJzpsYW5nJzogZnVuY3Rpb24ocGFyYW0pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZWwpIHtcbiAgICAgIHdoaWxlIChlbCkge1xuICAgICAgICBpZiAoZWwubGFuZykgcmV0dXJuIGVsLmxhbmcuaW5kZXhPZihwYXJhbSkgPT09IDA7XG4gICAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICAnOmRpcic6IGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsKSB7XG4gICAgICB3aGlsZSAoZWwpIHtcbiAgICAgICAgaWYgKGVsLmRpcikgcmV0dXJuIGVsLmRpciA9PT0gcGFyYW07XG4gICAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICAnOnNjb3BlJzogZnVuY3Rpb24oZWwsIGNvbikge1xuICAgIHZhciBjb250ZXh0ID0gY29uIHx8IGVsLm93bmVyRG9jdW1lbnQ7XG4gICAgaWYgKGNvbnRleHQubm9kZVR5cGUgPT09IDkpIHtcbiAgICAgIHJldHVybiBlbCA9PT0gY29udGV4dC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBlbCA9PT0gY29udGV4dDtcbiAgfSxcbiAgJzphbnktbGluayc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBlbC5ocmVmID09PSAnc3RyaW5nJztcbiAgfSxcbiAgJzpsb2NhbC1saW5rJzogZnVuY3Rpb24oZWwpIHtcbiAgICBpZiAoZWwubm9kZU5hbWUpIHtcbiAgICAgIHJldHVybiBlbC5ocmVmICYmIGVsLmhvc3QgPT09IHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xuICAgIH1cbiAgICB2YXIgcGFyYW0gPSArZWwgKyAxO1xuICAgIHJldHVybiBmdW5jdGlvbihlbCkge1xuICAgICAgaWYgKCFlbC5ocmVmKSByZXR1cm47XG5cbiAgICAgIHZhciB1cmwgPSB3aW5kb3cubG9jYXRpb24gKyAnJ1xuICAgICAgICAsIGhyZWYgPSBlbCArICcnO1xuXG4gICAgICByZXR1cm4gdHJ1bmNhdGVVcmwodXJsLCBwYXJhbSkgPT09IHRydW5jYXRlVXJsKGhyZWYsIHBhcmFtKTtcbiAgICB9O1xuICB9LFxuICAnOmRlZmF1bHQnOiBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiAhIWVsLmRlZmF1bHRTZWxlY3RlZDtcbiAgfSxcbiAgJzp2YWxpZCc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuIGVsLndpbGxWYWxpZGF0ZSB8fCAoZWwudmFsaWRpdHkgJiYgZWwudmFsaWRpdHkudmFsaWQpO1xuICB9LFxuICAnOmludmFsaWQnOiBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiAhc2VsZWN0b3JzWyc6dmFsaWQnXShlbCk7XG4gIH0sXG4gICc6aW4tcmFuZ2UnOiBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiBlbC52YWx1ZSA+IGVsLm1pbiAmJiBlbC52YWx1ZSA8PSBlbC5tYXg7XG4gIH0sXG4gICc6b3V0LW9mLXJhbmdlJzogZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gIXNlbGVjdG9yc1snOmluLXJhbmdlJ10oZWwpO1xuICB9LFxuICAnOnJlcXVpcmVkJzogZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gISFlbC5yZXF1aXJlZDtcbiAgfSxcbiAgJzpvcHRpb25hbCc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuICFlbC5yZXF1aXJlZDtcbiAgfSxcbiAgJzpyZWFkLW9ubHknOiBmdW5jdGlvbihlbCkge1xuICAgIGlmIChlbC5yZWFkT25seSkgcmV0dXJuIHRydWU7XG5cbiAgICB2YXIgYXR0ciA9IGVsLmdldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJylcbiAgICAgICwgcHJvcCA9IGVsLmNvbnRlbnRFZGl0YWJsZVxuICAgICAgLCBuYW1lID0gZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgIG5hbWUgPSBuYW1lICE9PSAnaW5wdXQnICYmIG5hbWUgIT09ICd0ZXh0YXJlYSc7XG5cbiAgICByZXR1cm4gKG5hbWUgfHwgZWwuZGlzYWJsZWQpICYmIGF0dHIgPT0gbnVsbCAmJiBwcm9wICE9PSAndHJ1ZSc7XG4gIH0sXG4gICc6cmVhZC13cml0ZSc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuICFzZWxlY3RvcnNbJzpyZWFkLW9ubHknXShlbCk7XG4gIH0sXG4gICc6aG92ZXInOiBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJzpob3ZlciBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICB9LFxuICAnOmFjdGl2ZSc6IGZ1bmN0aW9uKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignOmFjdGl2ZSBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICB9LFxuICAnOmxpbmsnOiBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJzpsaW5rIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gIH0sXG4gICc6dmlzaXRlZCc6IGZ1bmN0aW9uKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignOnZpc2l0ZWQgaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgfSxcbiAgJzpjb2x1bW4nOiBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJzpjb2x1bW4gaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgfSxcbiAgJzpudGgtY29sdW1uJzogZnVuY3Rpb24oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCc6bnRoLWNvbHVtbiBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICB9LFxuICAnOm50aC1sYXN0LWNvbHVtbic6IGZ1bmN0aW9uKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignOm50aC1sYXN0LWNvbHVtbiBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICB9LFxuICAnOmN1cnJlbnQnOiBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJzpjdXJyZW50IGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gIH0sXG4gICc6cGFzdCc6IGZ1bmN0aW9uKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignOnBhc3QgaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgfSxcbiAgJzpmdXR1cmUnOiBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJzpmdXR1cmUgaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgfSxcbiAgLy8gTm9uLXN0YW5kYXJkLCBmb3IgY29tcGF0aWJpbGl0eSBwdXJwb3Nlcy5cbiAgJzpjb250YWlucyc6IGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsKSB7XG4gICAgICB2YXIgdGV4dCA9IGVsLmlubmVyVGV4dCB8fCBlbC50ZXh0Q29udGVudCB8fCBlbC52YWx1ZSB8fCAnJztcbiAgICAgIHJldHVybiAhIX50ZXh0LmluZGV4T2YocGFyYW0pO1xuICAgIH07XG4gIH0sXG4gICc6aGFzJzogZnVuY3Rpb24ocGFyYW0pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZWwpIHtcbiAgICAgIHJldHVybiB6ZXN0KHBhcmFtLCBlbCkubGVuZ3RoID4gMDtcbiAgICB9O1xuICB9XG4gIC8vIFBvdGVudGlhbGx5IGFkZCBtb3JlIHBzZXVkbyBzZWxlY3RvcnMgZm9yXG4gIC8vIGNvbXBhdGliaWxpdHkgd2l0aCBzaXp6bGUgYW5kIG1vc3Qgb3RoZXJcbiAgLy8gc2VsZWN0b3IgZW5naW5lcyAoPykuXG59O1xuXG4vKipcbiAqIEF0dHJpYnV0ZSBPcGVyYXRvcnNcbiAqL1xuXG52YXIgb3BlcmF0b3JzID0ge1xuICAnLSc6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICAnPSc6IGZ1bmN0aW9uKGF0dHIsIHZhbCkge1xuICAgIHJldHVybiBhdHRyID09PSB2YWw7XG4gIH0sXG4gICcqPSc6IGZ1bmN0aW9uKGF0dHIsIHZhbCkge1xuICAgIHJldHVybiBhdHRyLmluZGV4T2YodmFsKSAhPT0gLTE7XG4gIH0sXG4gICd+PSc6IGZ1bmN0aW9uKGF0dHIsIHZhbCkge1xuICAgIHZhciBpID0gYXR0ci5pbmRleE9mKHZhbClcbiAgICAgICwgZlxuICAgICAgLCBsO1xuXG4gICAgaWYgKGkgPT09IC0xKSByZXR1cm47XG4gICAgZiA9IGF0dHJbaSAtIDFdO1xuICAgIGwgPSBhdHRyW2kgKyB2YWwubGVuZ3RoXTtcblxuICAgIHJldHVybiAoIWYgfHwgZiA9PT0gJyAnKSAmJiAoIWwgfHwgbCA9PT0gJyAnKTtcbiAgfSxcbiAgJ3w9JzogZnVuY3Rpb24oYXR0ciwgdmFsKSB7XG4gICAgdmFyIGkgPSBhdHRyLmluZGV4T2YodmFsKVxuICAgICAgLCBsO1xuXG4gICAgaWYgKGkgIT09IDApIHJldHVybjtcbiAgICBsID0gYXR0cltpICsgdmFsLmxlbmd0aF07XG5cbiAgICByZXR1cm4gbCA9PT0gJy0nIHx8ICFsO1xuICB9LFxuICAnXj0nOiBmdW5jdGlvbihhdHRyLCB2YWwpIHtcbiAgICByZXR1cm4gYXR0ci5pbmRleE9mKHZhbCkgPT09IDA7XG4gIH0sXG4gICckPSc6IGZ1bmN0aW9uKGF0dHIsIHZhbCkge1xuICAgIHJldHVybiBhdHRyLmluZGV4T2YodmFsKSArIHZhbC5sZW5ndGggPT09IGF0dHIubGVuZ3RoO1xuICB9LFxuICAvLyBub24tc3RhbmRhcmRcbiAgJyE9JzogZnVuY3Rpb24oYXR0ciwgdmFsKSB7XG4gICAgcmV0dXJuIGF0dHIgIT09IHZhbDtcbiAgfVxufTtcblxuLyoqXG4gKiBDb21iaW5hdG9yIExvZ2ljXG4gKi9cblxudmFyIGNvbWJpbmF0b3JzID0ge1xuICAnICc6IGZ1bmN0aW9uKHRlc3QpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZWwpIHtcbiAgICAgIHdoaWxlIChlbCA9IGVsLnBhcmVudE5vZGUpIHtcbiAgICAgICAgaWYgKHRlc3QoZWwpKSByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgJz4nOiBmdW5jdGlvbih0ZXN0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsKSB7XG4gICAgICByZXR1cm4gdGVzdChlbCA9IGVsLnBhcmVudE5vZGUpICYmIGVsO1xuICAgIH07XG4gIH0sXG4gICcrJzogZnVuY3Rpb24odGVzdCkge1xuICAgIHJldHVybiBmdW5jdGlvbihlbCkge1xuICAgICAgcmV0dXJuIHRlc3QoZWwgPSBwcmV2KGVsKSkgJiYgZWw7XG4gICAgfTtcbiAgfSxcbiAgJ34nOiBmdW5jdGlvbih0ZXN0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsKSB7XG4gICAgICB3aGlsZSAoZWwgPSBwcmV2KGVsKSkge1xuICAgICAgICBpZiAodGVzdChlbCkpIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICAnbm9vcCc6IGZ1bmN0aW9uKHRlc3QpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZWwpIHtcbiAgICAgIHJldHVybiB0ZXN0KGVsKSAmJiBlbDtcbiAgICB9O1xuICB9LFxuICAncmVmJzogZnVuY3Rpb24odGVzdCwgbmFtZSkge1xuICAgIHZhciBub2RlO1xuXG4gICAgZnVuY3Rpb24gcmVmKGVsKSB7XG4gICAgICB2YXIgZG9jID0gZWwub3duZXJEb2N1bWVudFxuICAgICAgICAsIG5vZGVzID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJylcbiAgICAgICAgLCBpID0gbm9kZXMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKHJlZi50ZXN0KGVsKSkge1xuICAgICAgICAgIG5vZGUgPSBudWxsO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG5vZGUgPSBudWxsO1xuICAgIH1cblxuICAgIHJlZi5jb21iaW5hdG9yID0gZnVuY3Rpb24oZWwpIHtcbiAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5nZXRBdHRyaWJ1dGUpIHJldHVybjtcblxuICAgICAgdmFyIGF0dHIgPSBub2RlLmdldEF0dHJpYnV0ZShuYW1lKSB8fCAnJztcbiAgICAgIGlmIChhdHRyWzBdID09PSAnIycpIGF0dHIgPSBhdHRyLnN1YnN0cmluZygxKTtcblxuICAgICAgaWYgKGF0dHIgPT09IGVsLmlkICYmIHRlc3Qobm9kZSkpIHtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiByZWY7XG4gIH1cbn07XG5cbi8qKlxuICogR3JhbW1hclxuICovXG5cbnZhciBydWxlcyA9IHtcbiAgcW5hbWU6IC9eICooW1xcd1xcLV0rfFxcKikvLFxuICBzaW1wbGU6IC9eKD86KFsuI11bXFx3XFwtXSspfHBzZXVkb3xhdHRyKS8sXG4gIHJlZjogL14gKlxcLyhbXFx3XFwtXSspXFwvICovLFxuICBjb21iaW5hdG9yOiAvXig/OiArKFteIFxcdypdKSArfCggKSt8KFteIFxcdypdKSkoPyEgKiQpLyxcbiAgYXR0cjogL15cXFsoW1xcd1xcLV0rKSg/OihbXlxcd10/PSkoaW5zaWRlKSk/XFxdLyxcbiAgcHNldWRvOiAvXig6W1xcd1xcLV0rKSg/OlxcKChpbnNpZGUpXFwpKT8vLFxuICBpbnNpZGU6IC8oPzpcIig/OlxcXFxcInxbXlwiXSkqXCJ8Jyg/OlxcXFwnfFteJ10pKid8PFteXCInPl0qPnxcXFxcW1wiJz5dfFteXCInPl0pKi9cbn07XG5cbnJ1bGVzLmluc2lkZSA9IHJlcGxhY2UocnVsZXMuaW5zaWRlLCAnW15cIlxcJz5dKicsIHJ1bGVzLmluc2lkZSk7XG5ydWxlcy5hdHRyID0gcmVwbGFjZShydWxlcy5hdHRyLCAnaW5zaWRlJywgbWFrZUluc2lkZSgnXFxcXFsnLCAnXFxcXF0nKSk7XG5ydWxlcy5wc2V1ZG8gPSByZXBsYWNlKHJ1bGVzLnBzZXVkbywgJ2luc2lkZScsIG1ha2VJbnNpZGUoJ1xcXFwoJywgJ1xcXFwpJykpO1xucnVsZXMuc2ltcGxlID0gcmVwbGFjZShydWxlcy5zaW1wbGUsICdwc2V1ZG8nLCBydWxlcy5wc2V1ZG8pO1xucnVsZXMuc2ltcGxlID0gcmVwbGFjZShydWxlcy5zaW1wbGUsICdhdHRyJywgcnVsZXMuYXR0cik7XG5cbi8qKlxuICogQ29tcGlsaW5nXG4gKi9cblxudmFyIGNvbXBpbGUgPSBmdW5jdGlvbihzZWwpIHtcbiAgdmFyIHNlbCA9IHNlbC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbiAgICAsIHRlc3RcbiAgICAsIGZpbHRlciA9IFtdXG4gICAgLCBidWZmID0gW11cbiAgICAsIHN1YmplY3RcbiAgICAsIHFuYW1lXG4gICAgLCBjYXBcbiAgICAsIG9wXG4gICAgLCByZWY7XG5cbiAgd2hpbGUgKHNlbCkge1xuICAgIGlmIChjYXAgPSBydWxlcy5xbmFtZS5leGVjKHNlbCkpIHtcbiAgICAgIHNlbCA9IHNlbC5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBxbmFtZSA9IGNhcFsxXTtcbiAgICAgIGJ1ZmYucHVzaCh0b2socW5hbWUsIHRydWUpKTtcbiAgICB9IGVsc2UgaWYgKGNhcCA9IHJ1bGVzLnNpbXBsZS5leGVjKHNlbCkpIHtcbiAgICAgIHNlbCA9IHNlbC5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBxbmFtZSA9ICcqJztcbiAgICAgIGJ1ZmYucHVzaCh0b2socW5hbWUsIHRydWUpKTtcbiAgICAgIGJ1ZmYucHVzaCh0b2soY2FwKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzZWxlY3Rvci4nKTtcbiAgICB9XG5cbiAgICB3aGlsZSAoY2FwID0gcnVsZXMuc2ltcGxlLmV4ZWMoc2VsKSkge1xuICAgICAgc2VsID0gc2VsLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIGJ1ZmYucHVzaCh0b2soY2FwKSk7XG4gICAgfVxuXG4gICAgaWYgKHNlbFswXSA9PT0gJyEnKSB7XG4gICAgICBzZWwgPSBzZWwuc3Vic3RyaW5nKDEpO1xuICAgICAgc3ViamVjdCA9IG1ha2VTdWJqZWN0KCk7XG4gICAgICBzdWJqZWN0LnFuYW1lID0gcW5hbWU7XG4gICAgICBidWZmLnB1c2goc3ViamVjdC5zaW1wbGUpO1xuICAgIH1cblxuICAgIGlmIChjYXAgPSBydWxlcy5yZWYuZXhlYyhzZWwpKSB7XG4gICAgICBzZWwgPSBzZWwuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgcmVmID0gY29tYmluYXRvcnMucmVmKG1ha2VTaW1wbGUoYnVmZiksIGNhcFsxXSk7XG4gICAgICBmaWx0ZXIucHVzaChyZWYuY29tYmluYXRvcik7XG4gICAgICBidWZmID0gW107XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoY2FwID0gcnVsZXMuY29tYmluYXRvci5leGVjKHNlbCkpIHtcbiAgICAgIHNlbCA9IHNlbC5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvcCA9IGNhcFsxXSB8fCBjYXBbMl0gfHwgY2FwWzNdO1xuICAgICAgaWYgKG9wID09PSAnLCcpIHtcbiAgICAgICAgZmlsdGVyLnB1c2goY29tYmluYXRvcnMubm9vcChtYWtlU2ltcGxlKGJ1ZmYpKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvcCA9ICdub29wJztcbiAgICB9XG5cbiAgICBmaWx0ZXIucHVzaChjb21iaW5hdG9yc1tvcF0obWFrZVNpbXBsZShidWZmKSkpO1xuICAgIGJ1ZmYgPSBbXTtcbiAgfVxuXG4gIHRlc3QgPSBtYWtlVGVzdChmaWx0ZXIpO1xuICB0ZXN0LnFuYW1lID0gcW5hbWU7XG4gIHRlc3Quc2VsID0gc2VsO1xuXG4gIGlmIChzdWJqZWN0KSB7XG4gICAgc3ViamVjdC5sbmFtZSA9IHRlc3QucW5hbWU7XG5cbiAgICBzdWJqZWN0LnRlc3QgPSB0ZXN0O1xuICAgIHN1YmplY3QucW5hbWUgPSBzdWJqZWN0LnFuYW1lO1xuICAgIHN1YmplY3Quc2VsID0gdGVzdC5zZWw7XG4gICAgdGVzdCA9IHN1YmplY3Q7XG4gIH1cblxuICBpZiAocmVmKSB7XG4gICAgcmVmLnRlc3QgPSB0ZXN0O1xuICAgIHJlZi5xbmFtZSA9IHRlc3QucW5hbWU7XG4gICAgcmVmLnNlbCA9IHRlc3Quc2VsO1xuICAgIHRlc3QgPSByZWY7XG4gIH1cblxuICByZXR1cm4gdGVzdDtcbn07XG5cbnZhciB0b2sgPSBmdW5jdGlvbihjYXAsIHFuYW1lKSB7XG4gIC8vIHFuYW1lXG4gIGlmIChxbmFtZSkge1xuICAgIHJldHVybiBjYXAgPT09ICcqJ1xuICAgICAgPyBzZWxlY3RvcnNbJyonXVxuICAgICAgOiBzZWxlY3RvcnMudHlwZShjYXApO1xuICB9XG5cbiAgLy8gY2xhc3MvaWRcbiAgaWYgKGNhcFsxXSkge1xuICAgIHJldHVybiBjYXBbMV1bMF0gPT09ICcuJ1xuICAgICAgPyBzZWxlY3RvcnMuYXR0cignY2xhc3MnLCAnfj0nLCBjYXBbMV0uc3Vic3RyaW5nKDEpKVxuICAgICAgOiBzZWxlY3RvcnMuYXR0cignaWQnLCAnPScsIGNhcFsxXS5zdWJzdHJpbmcoMSkpO1xuICB9XG5cbiAgLy8gcHNldWRvLW5hbWVcbiAgLy8gaW5zaWRlLXBzZXVkb1xuICBpZiAoY2FwWzJdKSB7XG4gICAgcmV0dXJuIGNhcFszXVxuICAgICAgPyBzZWxlY3RvcnNbY2FwWzJdXSh1bnF1b3RlKGNhcFszXSkpXG4gICAgICA6IHNlbGVjdG9yc1tjYXBbMl1dO1xuICB9XG5cbiAgLy8gYXR0ciBuYW1lXG4gIC8vIGF0dHIgb3BcbiAgLy8gYXR0ciB2YWx1ZVxuICBpZiAoY2FwWzRdKSB7XG4gICAgdmFyIGk7XG4gICAgaWYgKGNhcFs2XSkge1xuICAgICAgaSA9IGNhcFs2XS5sZW5ndGg7XG4gICAgICBjYXBbNl0gPSBjYXBbNl0ucmVwbGFjZSgvICtpJC8sICcnKTtcbiAgICAgIGkgPSBpID4gY2FwWzZdLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdG9ycy5hdHRyKGNhcFs0XSwgY2FwWzVdIHx8ICctJywgdW5xdW90ZShjYXBbNl0pLCBpKTtcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcignVW5rbm93biBTZWxlY3Rvci4nKTtcbn07XG5cbnZhciBtYWtlU2ltcGxlID0gZnVuY3Rpb24oZnVuYykge1xuICB2YXIgbCA9IGZ1bmMubGVuZ3RoXG4gICAgLCBpO1xuXG4gIC8vIFBvdGVudGlhbGx5IG1ha2Ugc3VyZVxuICAvLyBgZWxgIGlzIHRydXRoeS5cbiAgaWYgKGwgPCAyKSByZXR1cm4gZnVuY1swXTtcblxuICByZXR1cm4gZnVuY3Rpb24oZWwpIHtcbiAgICBpZiAoIWVsKSByZXR1cm47XG4gICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKCFmdW5jW2ldKGVsKSkgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn07XG5cbnZhciBtYWtlVGVzdCA9IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgaWYgKGZ1bmMubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiBmdW5jdGlvbihlbCkge1xuICAgICAgcmV0dXJuICEhZnVuY1swXShlbCk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oZWwpIHtcbiAgICB2YXIgaSA9IGZ1bmMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlmICghKGVsID0gZnVuY1tpXShlbCkpKSByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xufTtcblxudmFyIG1ha2VTdWJqZWN0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB0YXJnZXQ7XG5cbiAgZnVuY3Rpb24gc3ViamVjdChlbCkge1xuICAgIHZhciBub2RlID0gZWwub3duZXJEb2N1bWVudFxuICAgICAgLCBzY29wZSA9IG5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoc3ViamVjdC5sbmFtZSlcbiAgICAgICwgaSA9IHNjb3BlLmxlbmd0aDtcblxuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlmIChzdWJqZWN0LnRlc3Qoc2NvcGVbaV0pICYmIHRhcmdldCA9PT0gZWwpIHtcbiAgICAgICAgdGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGFyZ2V0ID0gbnVsbDtcbiAgfVxuXG4gIHN1YmplY3Quc2ltcGxlID0gZnVuY3Rpb24oZWwpIHtcbiAgICB0YXJnZXQgPSBlbDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICByZXR1cm4gc3ViamVjdDtcbn07XG5cbnZhciBjb21waWxlR3JvdXAgPSBmdW5jdGlvbihzZWwpIHtcbiAgdmFyIHRlc3QgPSBjb21waWxlKHNlbClcbiAgICAsIHRlc3RzID0gWyB0ZXN0IF07XG5cbiAgd2hpbGUgKHRlc3Quc2VsKSB7XG4gICAgdGVzdCA9IGNvbXBpbGUodGVzdC5zZWwpO1xuICAgIHRlc3RzLnB1c2godGVzdCk7XG4gIH1cblxuICBpZiAodGVzdHMubGVuZ3RoIDwgMikgcmV0dXJuIHRlc3Q7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGVsKSB7XG4gICAgdmFyIGwgPSB0ZXN0cy5sZW5ndGhcbiAgICAgICwgaSA9IDA7XG5cbiAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKHRlc3RzW2ldKGVsKSkgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xufTtcblxuLyoqXG4gKiBTZWxlY3Rpb25cbiAqL1xuXG52YXIgZmluZCA9IGZ1bmN0aW9uKHNlbCwgbm9kZSkge1xuICB2YXIgcmVzdWx0cyA9IFtdXG4gICAgLCB0ZXN0ID0gY29tcGlsZShzZWwpXG4gICAgLCBzY29wZSA9IG5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGVzdC5xbmFtZSlcbiAgICAsIGkgPSAwXG4gICAgLCBlbDtcblxuICB3aGlsZSAoZWwgPSBzY29wZVtpKytdKSB7XG4gICAgaWYgKHRlc3QoZWwpKSByZXN1bHRzLnB1c2goZWwpO1xuICB9XG5cbiAgaWYgKHRlc3Quc2VsKSB7XG4gICAgd2hpbGUgKHRlc3Quc2VsKSB7XG4gICAgICB0ZXN0ID0gY29tcGlsZSh0ZXN0LnNlbCk7XG4gICAgICBzY29wZSA9IG5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGVzdC5xbmFtZSk7XG4gICAgICBpID0gMDtcbiAgICAgIHdoaWxlIChlbCA9IHNjb3BlW2krK10pIHtcbiAgICAgICAgaWYgKHRlc3QoZWwpICYmICF+aW5kZXhPZi5jYWxsKHJlc3VsdHMsIGVsKSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0cy5zb3J0KG9yZGVyKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHRzO1xufTtcblxuLyoqXG4gKiBOYXRpdmVcbiAqL1xuXG52YXIgc2VsZWN0ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgc2xpY2UgPSAoZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCd6ZXN0JykpO1xuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGUgPSBudWxsO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYSA9IFtdLCBpID0gMCwgbCA9IHRoaXMubGVuZ3RoO1xuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykgYS5wdXNoKHRoaXNbaV0pO1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH07XG4gICAgfVxuICB9KSgpO1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHNlbCwgbm9kZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIHNsaWNlLmNhbGwobm9kZS5xdWVyeVNlbGVjdG9yQWxsKHNlbCkpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmaW5kKHNlbCwgbm9kZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihzZWwsIG5vZGUpIHtcbiAgICB0cnkge1xuICAgICAgaWYgKHNlbFswXSA9PT0gJyMnICYmIC9eI1tcXHdcXC1dKyQvLnRlc3Qoc2VsKSkge1xuICAgICAgICByZXR1cm4gW25vZGUuZ2V0RWxlbWVudEJ5SWQoc2VsLnN1YnN0cmluZygxKSldO1xuICAgICAgfVxuICAgICAgaWYgKHNlbFswXSA9PT0gJy4nICYmIC9eXFwuW1xcd1xcLV0rJC8udGVzdChzZWwpKSB7XG4gICAgICAgIHNlbCA9IG5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShzZWwuc3Vic3RyaW5nKDEpKTtcbiAgICAgICAgcmV0dXJuIHNsaWNlLmNhbGwoc2VsKTtcbiAgICAgIH1cbiAgICAgIGlmICgvXltcXHdcXC1dKyQvLnRlc3Qoc2VsKSkge1xuICAgICAgICByZXR1cm4gc2xpY2UuY2FsbChub2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKHNlbCkpO1xuICAgICAgfVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgO1xuICAgIH1cbiAgICByZXR1cm4gZmluZChzZWwsIG5vZGUpO1xuICB9O1xufSkoKTtcblxuLyoqXG4gKiBaZXN0XG4gKi9cblxudmFyIHplc3QgPSBmdW5jdGlvbihzZWwsIG5vZGUpIHtcbiAgdHJ5IHtcbiAgICBzZWwgPSBzZWxlY3Qoc2VsLCBub2RlIHx8IGRvY3VtZW50KTtcbiAgfSBjYXRjaChlKSB7XG4gICAgaWYgKHdpbmRvdy5aRVNUX0RFQlVHKSB7XG4gICAgICBjb25zb2xlLmxvZyhlLnN0YWNrIHx8IGUgKyAnJyk7XG4gICAgfVxuICAgIHNlbCA9IFtdO1xuICB9XG4gIHJldHVybiBzZWw7XG59O1xuXG4vKipcbiAqIEV4cG9zZVxuICovXG5cbnplc3Quc2VsZWN0b3JzID0gc2VsZWN0b3JzO1xuemVzdC5vcGVyYXRvcnMgPSBvcGVyYXRvcnM7XG56ZXN0LmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG56ZXN0LmNvbXBpbGUgPSBjb21waWxlR3JvdXA7XG5cbnplc3QubWF0Y2hlcyA9IGZ1bmN0aW9uKGVsLCBzZWwpIHtcbiAgcmV0dXJuICEhY29tcGlsZUdyb3VwKHNlbCkoZWwpO1xufTtcblxuemVzdC5jYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoY29tcGlsZS5yYXcpIHJldHVybjtcblxuICB2YXIgcmF3ID0gY29tcGlsZVxuICAgICwgY2FjaGUgPSB7fTtcblxuICBjb21waWxlID0gZnVuY3Rpb24oc2VsKSB7XG4gICAgcmV0dXJuIGNhY2hlW3NlbF1cbiAgICAgIHx8IChjYWNoZVtzZWxdID0gcmF3KHNlbCkpO1xuICB9O1xuXG4gIGNvbXBpbGUucmF3ID0gcmF3O1xuICB6ZXN0Ll9jYWNoZSA9IGNhY2hlO1xufTtcblxuemVzdC5ub0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmICghY29tcGlsZS5yYXcpIHJldHVybjtcbiAgY29tcGlsZSA9IGNvbXBpbGUucmF3O1xuICBkZWxldGUgemVzdC5fY2FjaGU7XG59O1xuXG56ZXN0Lm5vQ29uZmxpY3QgPSBmdW5jdGlvbigpIHtcbiAgd2luZG93Lnplc3QgPSBvbGQ7XG4gIHJldHVybiB6ZXN0O1xufTtcblxuemVzdC5ub05hdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICBzZWxlY3QgPSBmaW5kO1xufTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gemVzdDtcbn0gZWxzZSB7XG4gIHRoaXMuemVzdCA9IHplc3Q7XG59XG5cbmlmICh3aW5kb3cuWkVTVF9ERUJVRykge1xuICB6ZXN0Lm5vTmF0aXZlKCk7XG59IGVsc2Uge1xuICB6ZXN0LmNhY2hlKCk7XG59XG5cbn0pLmNhbGwoZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzIHx8ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbCk7XG59KCkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgc3RvcnkgZnJvbSAnLi91dGlsL2FjdGl2aXR5LmpzJ1xuaW1wb3J0IGNhdGVnIGZyb20gJy4vdXRpbC9jYXQuanMnXG5cbmNvbnN0ICQgPSByZXF1aXJlKCd6ZXN0JykgLy8gZG9tIHNlbGVjdG9yIGVuZ2luZVxuY29uc3QgYW5pbWUgPSByZXF1aXJlKCdhbmltZWpzJylcblxuLy8gRE9NXG5jb25zdCBjb250YWluZXIgPSAkKCcjYWN0aXZpdGllc19fYnktY2F0JylcbmNvbnN0IGNhcmRzID0gJCgnLmNhdGVnb3J5LWNhcmQnKVxuY29uc3QgZHJpbGxkb3duID0gJCgnI2RyaWxsZG93bicpXG5cbmNvbnN0IGFqYXggPSBheGlvcy5jcmVhdGUoeyAvLyBheGlvcywgb3VyIEFKQVggbGliXG5cdGJhc2VVUkw6ICdodHRwOi8vZG9lLmNvbmNvcmRpYS5jYS9jc2xwL3dwLWpzb24vd3AvdjIvJ1xufSlcblxuY29uc3Qgc3RhdGUgPSB7XG5cdGRyaWxsTGV2ZWw6IDAsXG5cdGFjdGl2ZTogJ25vbmUnLFxuXHRsZXZlbHN0cmluZzogJycsXG5cdHRoZW1lSUQ6IG51bGwsIC8vIGZvciBmdXJ0aGVyIGNhY2hpbmcuIEltcGxlbWVudCBsYXRlciFcblxuXHRiYWNrb25lOiAoKSA9PiB7XG5cdFx0c3RhdGUuZHJpbGxMZXZlbCAtPSAxXG5cblx0XHRjb25zb2xlLmxvZygnc3RhdGUuZHJpbGxMZXZlbDogJywgc3RhdGUuZHJpbGxMZXZlbClcblxuXHRcdGlmIChzdGF0ZS5kcmlsbExldmVsIDw9IDApIHtcblx0XHRcdCQoJyNkcmlsbGRvd24nKVswXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZlJywgJ25vbmUnKVxuXHRcdFx0JCgnI2FjdGl2aXRpZXNfX2J5LWNhdCcpWzBdLmNsYXNzTmFtZSA9ICdzZWxlY3RlZCdcblx0XHRcdGFuaW1lKHtcblx0XHRcdFx0dGFyZ2V0czogJy5hY3Rpdml0aWVzLW1ldGEgcCcsXG5cdFx0XHRcdC8vIGRlbGF5OiAxMDAwLFxuXHRcdFx0XHRvcGFjaXR5OiBbMCwgMV0sXG5cdFx0XHRcdGR1cmF0aW9uOiA0MDAsXG5cdFx0XHRcdGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcblx0XHRcdFx0Y29tcGxldGU6ICgpID0+IHtcblx0XHRcdFx0XHRhbmltZSh7XG5cdFx0XHRcdFx0XHR0YXJnZXRzOiAnI2FjdGl2aXRpZXNfX2J5LWNhdCcsXG5cdFx0XHRcdFx0XHRvcGFjaXR5OiBbMCwxXSxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiA3MDBcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0c3RhdGUuZHJpbGxMZXZlbCA9IDBcblx0XHR9XG5cdFx0aWYgKHN0YXRlLmRyaWxsTGV2ZWwgPT0gMSkge1xuXHRcdFx0JCgnI2NhdC1tZXRhJylbMF0uY2xhc3NOYW1lID0gJydcblx0XHRcdCQoJyNhY3Rpdml0eScpWzBdLmNsYXNzTmFtZSA9ICdoaWRkZW4nXG5cdFx0XHQkKCcjYWN0aXZpdGllc19fYnktY2F0JylbMF0uY2xhc3NOYW1lID0gJycgLy8gaGlkZGVuXG5cdFx0fVxuXHR9LFxuXG5cdGhpZGVtZXRhOiAoKSA9PiB7XG5cdFx0JCgnLmFjdGl2aXR5LW1ldGEnKVswXS5jbGFzc05hbWUgPSAnc3Rvcmllcy1tZXRhIGhpZGRlbidcblx0fVxufVxuXG5cbmZ1bmN0aW9uIGluaXQgKCkge1xuXHQkKCcjY2F0LW1ldGEnKS5jbGFzc05hbWUgPSAnaGlkZGVuJ1xuXG5cdGNhcmRzLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0b24oJ2NsaWNrJywgaXRlbSwgZXZlbnQgPT4ge1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cblx0XHRcdGxldCBJRCA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWNhdCcpXG5cblx0XHRcdGlmICghY2F0ZWcuaXNDYWNoZWQoSUQpKSB7XG5cdFx0XHRcdGNhdGVnLmdldChJRCwgYWpheCwgZGF0YSA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ1JldHJpZXZlZCBsaXZlIGRhdGE6IElEICMnICsgSUQpXG5cdFx0XHRcdFx0c3RhdGUubGV2ZWxzdHJpbmcgPSAnQnkgY2F0ZWdvcnkgPiAnICsgZGF0YS5uYW1lXG5cdFx0XHRcdFx0Y2F0ZWcuc2V0RE9NKGRhdGEsIHN0YXRlLCBzdG9yeSwgYWpheClcblx0XHRcdFx0fSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWJyYV9hYycrSUQpKVxuXHRcdFx0XHRjb25zb2xlLmxvZygnUmV0cmlldmVkIGNhY2hlZCBkYXRhOiBJRCAjJyArIElEKVxuXHRcdFx0XHRzdGF0ZS5sZXZlbHN0cmluZyA9ICdCeSBjYXRlZ29yeSA+ICcgKyBkYXRhLm5hbWVcblx0XHRcdFx0Y2F0ZWcuc2V0RE9NKGRhdGEsIHN0YXRlLCBzdG9yeSwgYWpheClcblx0XHRcdH1cblxuXHRcdFx0Y29udGFpbmVyLmNsYXNzTmFtZSA9ICcnO1xuXHRcdFx0ZHJpbGxkb3duWzBdLnNldEF0dHJpYnV0ZSgnZGF0YS1hY3RpdmUnLCAnY2F0Jylcblx0XHR9KVxuXHR9KVxuXG5cdG9uKCdjbGljaycsICcjYmFjay1idXR0b24nLCAoKSA9PiB7IHN0YXRlLmJhY2tvbmUoKSB9KVxufVxub24oJ0RPTUNvbnRlbnRMb2FkZWQnLCB3aW5kb3csIGluaXQoKSlcblxuXG5mdW5jdGlvbiBvbihldmVudCwgZWxlbWVudCwgY2IsIHBhc3NpdmUpIHtcblx0dmFyIGVsID0gJChlbGVtZW50KVswXSB8fCBlbGVtZW50XG5cdGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNiLCBwYXNzaXZlKVxufSIsImNvbnN0ICQgPSByZXF1aXJlKCd6ZXN0JylcbmNvbnN0IGFuaW1lID0gcmVxdWlyZSgnYW5pbWVqcycpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHQvLyBTdG9yeSBGdW5jdGlvbnNcblx0Z2V0UmVsYXRlZFN0b3JpZXM6IGZ1bmN0aW9uIChxdWVyeSwgY2FsbGJhY2ssIGF4aW9zKSB7XG5cdFx0YXhpb3MuZ2V0KHF1ZXJ5KS50aGVuKGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0Y2FsbGJhY2socmVzLmRhdGEpXG5cdFx0fSkuY2F0Y2goJ2Vycm9yJywgZnVuY3Rpb24gKGUpIHtjb25zb2xlLndhcm4oZSl9KVxuXHR9LFxuXG5cdHNob3dTdG9yeTogZnVuY3Rpb24gKGRhdGEsIHN0YXRlLCBheGlvcykge1xuXHRcdCQoJyNjYXQtbWV0YScpWzBdLmNsYXNzTmFtZSA9ICdoaWRkZW4nXG5cdFx0JCgnI2FjdGl2aXR5JylbMF0uY2xhc3NOYW1lID0gJydcblx0XHRhbmltZSh7XG5cdFx0XHR0YXJnZXRzOiAnI2FjdGl2aXR5Jyxcblx0XHRcdG9wYWNpdHk6IFswLCAxXSxcblx0XHRcdGR1cmF0aW9uOiA0MDAsXG5cdFx0XHR0cmFuc2xhdGVZOiB7IHZhbHVlOiAtNDAsIGR1cmF0aW9uOiA4MDAgfSxcblx0XHRcdGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcblx0XHR9KVxuXG5cblx0XHQkKCcjYWN0aXZpdHktdGl0bGUnKVswXS5pbm5lckhUTUwgPSBkYXRhLnRpdGxlLnJlbmRlcmVkXG5cblx0XHQkKCcjYWN0aXZpdHkgaGVhZGVyIHNwYW4nKVswXS5pbm5lckhUTUwgPVxuXHRcdFx0c3RhdGUubGV2ZWxzdHJpbmcgKyAnID4gJyArIGRhdGEudGl0bGUucmVuZGVyZWRcblxuXHRcdC8vIE92ZXJ2aWV3LCB0YWIgMSwgY29udGFpbnM6IG9iamVjdGl2ZSwgZ2ZhIHRpcHMsIGxldmVsc1xuXHRcdCQoJyNhLWRlc2MtYycpWzBdLmlubmVySFRNTCA9ICc8aDQ+T3ZlcnZpZXc8L2g0Pidcblx0XHRcdCsgZGF0YS5hY3Rpdml0eV9kZXNjcmlwdGlvbl9hY3Rpdml0eV9vYmplY3RpdmVcblxuXHRcdCQoJyNhLWdmYS1jJylbMF0uaW5uZXJIVE1MID0gJzxoND5Hcm91cCBGYWNpbGl0YXRpb24gVGlwczwvaDQ+J1xuXHRcdFx0KyBkYXRhLmFjdGl2aXR5X2Rlc2NyaXB0aW9uX2FjdGl2aXR5X2dmYVxuXG5cdFx0JCgnI2EtbGV2ZWwtYycpWzBdLmlubmVySFRNTCA9ICc8aDQ+TGV2ZWxzPC9oND4nXG5cdFx0XHQrIGRhdGEuYWN0aXZpdHlfZGVzY3JpcHRpb25fYWN0aXZpdHlfbGV2ZWxcblxuXHRcdC8vIEFjdGl2aXR5IEluc2lnaHRzXG5cdFx0Ly8gY2hlY2sgaWYgaGFzIGluc2lnaHRzLCBkaXNwbGF5IGluc2lnaHRzP1xuXHRcdCQoJyNhLWluc2lnaHRzLWMnKVswXS5pbm5lckhUTUwgPSAnPGg0PkFjdGl2aXR5IEluc2lnaHRzPC9oND4nXG5cdFx0XHQrIGRhdGEuYWN0aXZpdHlfaW5zaWdodHNcblxuXHRcdC8vIExpbmtlZCBTdG9yaWVzLCB0YWIgM1xuXHRcdHRoaXMuZ2V0U3Rvcmllc0luQ2F0KGRhdGEuYWN0aXZpdHlfbGlua2VkX3N0b3JpZXMsIGF4aW9zKVxuXG5cdFx0Ly8gUmVzb3VyY2VzLCB0YWIgNFxuXHRcdCQoJyNhLXJlc291cmNlcy1jJylbMF0uaW5uZXJIVE1MID0gJzxoND5SZXNvdXJjZXM8L2g0Pidcblx0XHRcdCsgZGF0YS5hY3Rpdml0eV9yZXNvdXJjZXNcblxuXHRcdCQoJyNhY3Rpdml0eS12aWRlby1jb250YWluZXInKVswXS5pbm5lckhUTUwgPSB0aGlzLm1ha2VFbWJlZExpbmsoZGF0YS5hY3Rpdml0eV92aWRlbylcblx0fSxcblxuXHRtYWtlVGFiQ29udGFpbmVyKCkge1xuXHRcdGNvbnN0IHRhYnMgPSAkKCcuYWN0aXZpdHlfX25hdi50YWJzIGxpJykgLy8gR2V0IGFsbCB0YWJzXG5cblx0XHR0YWJzLmZvckVhY2godGFiID0+IHtcblx0XHRcdGxldCBsaW5rID0gdGFiLmZpcnN0Q2hpbGRcblxuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblxuXHRcdFx0XHQvLyBHZXQgbG9jYXRpb24gb2YgdGFiJ3MgY29udGVudCAoaHJlZiA9PiBpZClcblx0XHRcdFx0bGV0IGNvbnRlbnRUYWIgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpXG5cblx0XHRcdFx0Ly8gU2V0IG90aGVyIHRhYnMgJiBuYXYgbGFiZXMgYXMgaW5hY3RpdmVcblx0XHRcdFx0JCgnLnRhYnMtY29udGVudCBkaXYnKS5mb3JFYWNoKHQgPT4geyB0LmNsYXNzTmFtZSA9ICcnIH0pXG5cdFx0XHRcdCQoJy50YWJzIGxpJykuZm9yRWFjaChsID0+IHsgbC5jbGFzc05hbWUgPSAnJyB9KVxuXG5cdFx0XHRcdC8vIFNldCBzZWxlY3RlZCB0YWIgJiBuYXYgaXRlbSBhY3RpdmVcblx0XHRcdFx0dGFiLmNsYXNzTmFtZSA9ICdhY3RpdmUnXG5cdFx0XHRcdCQoY29udGVudFRhYilbMF0uY2xhc3NOYW1lID0gJ2FjdGl2ZSdcblx0XHRcdH0pO1xuXHRcdH0pXG5cdH0sXG5cblx0Z2V0QWN0aXZpdHlJY29uIChxdWVyeSwgYXhpb3MpIHtcblx0XHRheGlvcy5nZXQoJ21lZGlhP3BhcmVudD0nICsgcXVlcnkpLnRoZW4oKHJlcykgPT4ge1xuXHRcdFx0Y29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5cdFx0XHRpY29uLnN0eWxlLm9wYWNpdHkgPSAwXG5cdFx0XHRpY29uLm9ubG9hZCA9ICgpID0+IHsgJCgnI2FjdGl2aXR5LWljb24gaW1nJylbMF0uc3R5bGUub3BhY2l0eSA9IDEgfVxuXHRcdFx0aWNvbi5zcmMgPSByZXMuZGF0YVswXS5tZWRpYV9kZXRhaWxzLnNpemVzLnRodW1ibmFpbC5zb3VyY2VfdXJsXG5cdFx0XHRpY29uLmFsdCA9IHJlcy5kYXRhWzBdLmFsdF90ZXh0XG5cdFx0XHQkKCcjYWN0aXZpdHktaWNvbicpWzBdLmFwcGVuZENoaWxkKGljb24pXG5cdFx0fSkuY2F0Y2goJ2Vycm9yJywgZSA9PiBjb25zb2xlLndhcm4oZSkpXG5cdH0sXG5cblx0Z2V0U3Rvcmllc0luQ2F0IChzdG9yaWVzLCBheGlvcykge1xuXHRcdGxldCBxdWVyeSA9ICdzdG9yeT8nXG5cblx0XHQvLyBpbm5lZmljaWVudCwgeWV0IFdQIGFwaSBpcyBzbyBmYXIgaW5jYXBhYmxlIG9mIGRlYWxpbmcgd2l0aCBzb21ldGhpbmcgYmV0dGVyLlxuXHRcdGZvciAobGV0IGkgPSBzdG9yaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRxdWVyeSArPSAnaW5jbHVkZVtdPScgKyBzdG9yaWVzW2ldICsgJyYnXG5cdFx0fVxuXHRcdHF1ZXJ5ID0gcXVlcnkuc2xpY2UoMCwgLTEpIC8vIHJlbW92ZSBsYXN0IGFtcGVyc2FuZFxuXG5cdFx0YXhpb3MuZ2V0KHF1ZXJ5KS50aGVuKCByZXMgPT4ge1xuXHRcdFx0bGV0IHJldHZhbCA9ICc8dWw+J1xuXHRcdFx0Zm9yICh2YXIgaSA9IHJlcy5kYXRhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdHJldHZhbCArPSAnPGxpPjxhIGhyZWY9XCInXG5cdFx0XHRcdFx0KyByZXMuZGF0YVtpXS5saW5rXG5cdFx0XHRcdFx0KyAnXCI+J1xuXHRcdFx0XHRcdCsgcmVzLmRhdGFbaV0udGl0bGUucmVuZGVyZWRcblx0XHRcdFx0XHQrICc8L2E+PC9saT4nXG5cdFx0XHR9XG5cdFx0XHRyZXR2YWwgKyAnPC91bD4nXG5cblx0XHRcdCQoJyNhLXJlbGF0ZWQtYycpWzBdLmlubmVySFRNTCA9ICAnPGg0PkxpbmtlZCBTdG9yaWVzPC9oND4nXG5cdFx0XHQrICc8cD5FYWNoIGxpbmsgcG9pbnRzIHRvIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYW5kIGEgcGRmIGRvd25sb2FkIHRvIGVhY2ggc3Rvcnk8L3A+J1xuXHRcdFx0KyByZXR2YWxcblx0XHR9KS5jYXRjaCgnZXJyb3InLCBlID0+IHsgY29uc29sZS53YXJuKGUpIH0pXG5cdH0sXG5cblx0bWFrZUVtYmVkTGluayhsaW5rKSB7XG4gICAgbGV0IHJlZ0V4cCA9IC9eLiooeW91dHUuYmVcXC98dlxcL3x1XFwvXFx3XFwvfGVtYmVkXFwvfHdhdGNoXFw/dj18XFwmdj0pKFteI1xcJlxcP10qKS4qLztcbiAgICBsZXQgbWF0Y2ggPSBsaW5rLm1hdGNoKHJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMl0ubGVuZ3RoICE9IDExKSB7XG4gICAgICByZXR1cm4gJ2Vycm9yJztcbiAgICB9XG5cblx0XHRsZXQgZW1iZWQgPSAnPGlmcmFtZSB3aWR0aD1cIjU2MFwiIGhlaWdodD1cIjMxNVwiIHNyYz1cIi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLydcblx0XHRyZXR1cm4gZW1iZWQgKyBtYXRjaFsyXSArICdcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+J1xuXHR9XG59IiwiY29uc3QgJCA9IHJlcXVpcmUoJ3plc3QnKVxuY29uc3QgYW5pbWUgPSByZXF1aXJlKCdhbmltZWpzJylcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGlzQ2FjaGVkOiBmdW5jdGlvbiAoSUQpIHtcblx0XHRyZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FicmFfYWMnICsgSUQpID8gdHJ1ZSA6IGZhbHNlXG5cdH0sXG5cblx0Y2FjaGU6IGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FicmFfYWMnICsgZGF0YS5pZCwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG5cdH0sXG5cblx0Z2V0OiBmdW5jdGlvbiAoY2F0SUQsIGF4aW9zLCBjYWxsYmFjaykge1xuXHRcdGF4aW9zLmdldCgnYWN0aXZpdHlfY2F0LycgKyBjYXRJRCkudGhlbiggcmVzcG9uc2UgPT4ge1xuXHRcdFx0dGhpcy5jYWNoZShyZXNwb25zZS5kYXRhKVxuXHRcdFx0Y2FsbGJhY2socmVzcG9uc2UuZGF0YSlcblx0XHR9KS5jYXRjaCgnZXJyb3InLCBmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUud2FybihlcnJvcilcblx0XHRcdHJldHVybiBudWxsXG5cdFx0fSlcblx0fSxcblxuXHRzZXRET006IGZ1bmN0aW9uIChjYXQsIHN0YXRlLCBzdG9yeSwgYXhpb3MpIHtcblx0XHQvLyBzZXQgdGhlIGVsZW1lbnQgdG8gdmlzaWJsZVxuXHRcdGNvbnN0IGMgPSAkKCcjY2F0LW1ldGEnKVswXVxuXG5cdFx0c3RhdGUuZHJpbGxMZXZlbCA9IDFcblx0XHQkKCcjY2F0LW1ldGEnKVswXS5jbGFzc05hbWUgPSAnJ1xuXHRcdCQoJyNhY3Rpdml0eScpWzBdLmNsYXNzTmFtZSA9ICdoaWRkZW4nXG5cblx0XHRhbmltZSh7XG5cdFx0XHR0YXJnZXRzOiAnLmFjdGl2aXRpZXMtbWV0YSBwJyxcblx0XHRcdC8vIGRlbGF5OiAxMDAwLFxuXHRcdFx0b3BhY2l0eTogWzEsIDBdLFxuXHRcdFx0ZHVyYXRpb246IDQwMCxcblx0XHRcdGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcblx0XHRcdGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgYW5pbWUoe1xuXHRcdFx0XHRcdHRhcmdldHM6ICcjYWN0aXZpdGllc19fYnktY2F0Jyxcblx0XHRcdFx0XHRkZWxheTogMTAwLFxuXHRcdFx0XHRcdG9wYWNpdHk6IFsxLCAwXSxcblx0XHRcdFx0XHRkdXJhdGlvbjogNTAwLFxuXHRcdFx0XHRcdGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcblx0XHRcdFx0XHRjb21wbGV0ZTogKCkgPT4ge1xuXHRcdFx0XHRcdFx0JCgnI2FjdGl2aXRpZXNfX2J5LWNhdCcpWzBdLmNsYXNzTmFtZSA9ICcnXG5cdFx0XHRcdFx0fVxuICAgICAgICB9KVxuICAgIFx0fVxuXHRcdH0pXG5cblx0XHQvLyBzZXQgbWV0YSBkZXNjcmlwdGlvblxuXHRcdCQoJyNjYXQtbWV0YV9faGVhZGVyIGgyJylbMF0uaW5uZXJIVE1MID0gY2F0Lm5hbWVcblx0XHQkKCcjY2F0LW1ldGFfX2hlYWRlciBzcGFuJylbMF0uaW5uZXJIVE1MID0gc3RhdGUubGV2ZWxzdHJpbmdcblx0XHQkKCcjY2F0LW1ldGFfX2NvbnRlbnQnKS5pbm5lckhUTUwgPSBjYXQuZGVzY3JpcHRpb25cblxuXHRcdC8vIHNldCBhc3luY1xuXHRcdHNldFRpbWVvdXQoXG5cdFx0XHRzdG9yeS5nZXRSZWxhdGVkU3RvcmllcygnYWN0aXZpdHk/YWN0aXZpdHlfY2F0PScgKyBjYXQuaWQsIHN0b3JpZXMgPT4ge1xuXHRcdFx0XHRjb25zdCBsaXN0ID0gJCgnI2NhdC1tZXRhX19saXN0Jylcblx0XHRcdFx0bGlzdC5jbGFzc05hbWUgPSAnaXNSZWZyZXNoaW5nJ1xuXHRcdFx0XHRsaXN0LmlubmVySFRNTCA9ICcnXG5cblx0XHRcdFx0Ly8gY3JlYXRlIHN0b3J5IHByZXZpZXdzXG5cdFx0XHRcdGZvciAodmFyIGkgPSBzdG9yaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdFx0bGV0IHMgPSBzdG9yaWVzW2ldXG5cblx0XHRcdFx0XHRsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHRcdFx0XHRcdGVsLmNsYXNzTmFtZSA9ICdzdG9yeSdcblx0XHRcdFx0XHRlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RvcnknLCBzLmlkKVxuXHRcdFx0XHRcdGVsLmlubmVySFRNTCA9ICc8aDM+JyArIHMudGl0bGUucmVuZGVyZWQgKyAnPC9oMz4nXG5cblx0XHRcdFx0XHQkKCcjY2F0LW1ldGFfX2xpc3QnKVswXS5hcHBlbmRDaGlsZChlbClcblxuXHRcdFx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c3RhdGUuZHJpbGxMZXZlbCArPSAxXG5cdFx0XHRcdFx0XHRzdG9yeS5tYWtlVGFiQ29udGFpbmVyKClcblx0XHRcdFx0XHRcdHN0b3J5LnNob3dTdG9yeShzLCBzdGF0ZSwgYXhpb3MpXG5cdFx0XHRcdFx0XHRzdG9yeS5nZXRBY3Rpdml0eUljb24ocy5pZCwgYXhpb3MpXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LmNsYXNzTmFtZSA9ICcnXG5cdFx0XHR9LCBheGlvc1xuXHRcdCksIDApXG5cblx0fVxufSJdfQ==
