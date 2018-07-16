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
var container = $('#activities__by-cat')[0];
var cards = $('.category-card');
var drilldown = $('#drilldown')[0];
var activity = $('#activity')[0];
var catMeta = $('#cat-meta')[0];

var ajax = axios.create({ // axios, our AJAX lib
	baseURL: 'https://doe.concordia.ca/cslp/wp-json/wp/v2/'
});

var state = {
	drillLevel: 0,
	active: 'none',
	categoryData: {},
	activityData: {},

	setLevel: function setLevel(level, options) {
		state.drillLevel = level;

		var opts = options || { direction: '' };

		switch (level) {
			// intro screen, category selection
			case 0:
				drilldown.setAttribute('data-active', 'none');
				container.className = 'selected';
				catMeta.className = 'hidden';
				anime({
					targets: '.activities-meta p',
					opacity: [0, 1],
					duration: 500,
					easing: 'easeOutExpo',
					reverse: opts.direction,
					complete: function complete() {
						anime({
							targets: container,
							opacity: [0, 1],
							duration: 300,
							reverse: opts.direction
						});
					}
				});
				break;

			// Activity list
			case 1:
				if (opts.direction == 'reverse') {
					anime({
						targets: activity,
						opacity: [1, 0],
						duration: 400,
						translateY: { value: 40, duration: 400 },
						easing: 'easeOutExpo',
						complete: function complete() {
							activity.className = 'hidden';
							anime({
								targets: '#activities__by-cat',
								delay: 100,
								opacity: [1, 0],
								duration: 600,
								reverse: opts.direction,
								easing: 'easeOutExpo',
								complete: function complete() {
									drilldown.setAttribute('data-active', 'cat');
									container.className = '';
									catMeta.className = '';
									activity.className = 'hidden';
								}
							});
						}
					});
				} else {
					anime({
						targets: '.activities-meta p',
						opacity: [1, 0],
						duration: 400,
						reverse: opts.direction,
						easing: 'easeOutExpo',
						complete: function complete() {
							anime({
								targets: '#activities__by-cat',
								delay: 100,
								opacity: [1, 0],
								duration: 500,
								reverse: opts.direction,
								easing: 'easeOutExpo',
								complete: function complete() {
									drilldown.setAttribute('data-active', 'cat');
									container.className = '';
									catMeta.className = '';
									activity.className = 'hidden';
								}
							});
						}
					});
				}
				break;

			// Activity
			case 2:
				activity.className = '';
				catMeta.className = 'hidden';
				anime({
					targets: activity,
					opacity: [0, 1],
					duration: 400,
					translateY: { value: -40, duration: 800 },
					easing: 'easeInExpo'
				});
				break;
		}
	},

	getBreadcrumb: function getBreadcrumb() {
		var base = '';
		var cat = '';

		// breaks intentionally ommited for smart follow-through
		// depending on level, the string will update relevant parts
		switch (state.drillLevel) {
			case 0:
				return null;
				break;
			case 2:
				cat = ' > ' + state.activityData.name;
			case 1:
				base = 'By category > ' + state.categoryData.name;
				break;
		}
		return base + cat;
	},

	backone: function backone() {
		return state.setLevel(state.drillLevel - 1, { direction: 'reverse' });
	},
	hidemeta: function hidemeta() {
		return '.activity-meta'[0].className = 'stories-meta hidden';
	}

};

function init() {
	state.setLevel(0); // resets classes just in case
	cards.forEach(function (item) {
		on('click', item, function (event) {

			event.preventDefault();

			var ID = item.getAttribute('data-cat');

			if (!_cat2.default.isCached(ID)) {
				_cat2.default.get(ID, ajax, function (data) {
					console.log('Retrieved live data: ID #' + ID);
					state.categoryData = data;
					_cat2.default.setDOM(data, state, _activity2.default, ajax);
				});
			} else {
				var data = JSON.parse(localStorage.getItem('abra_ac' + ID));
				console.log('Retrieved cached data: ID #' + ID);
				state.categoryData = data;
				_cat2.default.setDOM(data, state, _activity2.default, ajax);
			}
			state.setLevel(1);
		});
	});

	on('click', '#back-button', function () {
		return state.backone();
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
		state.activityData.name = data.title.rendered;

		$('#activity-title')[0].innerHTML = data.title.rendered;
		$('#activity header span')[0].innerHTML = state.getBreadcrumb();

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
		var rescontent = $('#a-resources-c')[0];
		rescontent.innerHTML += '<h4>Resources</h4>';
		if (data.activity_resources != '') {
			rescontent.innerHTML += data.activity_resources;
		} else {
			rescontent.innerHTML += 'There are no resources available for this activity yet';
		}

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
					return t.className = '';
				});
				$('.tabs li').forEach(function (l) {
					return l.className = '';
				});

				// Set selected tab & nav item active
				tab.className = 'active';
				$(contentTab)[0].className = 'active';
			});
		});
	},
	setActivityIcon: function setActivityIcon(query, axios) {
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
	setActivityListIcon: function setActivityListIcon(query, axios, element) {
		axios.get('media?parent=' + query).then(function (res) {
			var icon = document.createElement('img');
			icon.style.opacity = 0;
			icon.className = 'limage';
			icon.onload = function () {
				return icon.style.opacity = 1;
			};
			icon.src = res.data[0].media_details.sizes.thumbnail.source_url;
			icon.alt = res.data[0].alt_text;
			element.appendChild(icon);
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

			$('#a-related-c')[0].innerHTML = '<h4>Linked Stories</h4>' + 'Each link points to additional information and a pdf download to each story' + retval;
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

},{"zest":2}],5:[function(require,module,exports){
'use strict';

var $ = require('zest');

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
		var cm = '#cat-meta';
		var c = $(cm)[0];

		// set meta description
		$(cm + '__header h2')[0].innerHTML = cat.name;
		$(cm + '__header span')[0].innerHTML = state.getBreadcrumb();
		$(cm + '__content')[0].innerHTML = cat.description;

		// set async
		setTimeout(story.getRelatedStories('activity?activity_cat=' + cat.id, function (stories) {
			var list = $('#cat-meta__list')[0];
			list.className = 'isRefreshing';
			list.innerHTML = '';

			// create story previews

			var _loop = function _loop(i) {
				var s = stories[i];

				var el = document.createElement('div');
				el.className = 'activity-item';
				el.setAttribute('data-story', s.id);
				el.innerHTML = '<h3>' + s.title.rendered + '</h3>';
				story.setActivityListIcon(s.id, axios, el);

				list.appendChild(el);

				el.addEventListener('click', function () {
					state.setLevel(2);

					story.makeTabContainer();
					story.showStory(s, state, axios);
					story.setActivityIcon(s.id, axios);
				});
			};

			for (var i = stories.length - 1; i >= 0; i--) {
				_loop(i);
			}
			list.className = '';
		}, axios), 0);
	}
};

},{"zest":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYW5pbWVqcy9hbmltZS5taW4uanMiLCJub2RlX21vZHVsZXMvemVzdC9saWIvemVzdC5qcyIsInNyYy9zY3JpcHRzL2FjdGl2aXRpZXMvYWN0aXZpdGllcy5qcyIsInNyYy9zY3JpcHRzL2FjdGl2aXRpZXMvdXRpbC9hY3Rpdml0eS5qcyIsInNyYy9zY3JpcHRzL2FjdGl2aXRpZXMvdXRpbC9jYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3A3QkE7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxJQUFJLFFBQVEsTUFBUixDQUFWLEMsQ0FBMEI7QUFDMUIsSUFBTSxRQUFRLFFBQVEsU0FBUixDQUFkOztBQUVBO0FBQ0EsSUFBTSxZQUFZLEVBQUUscUJBQUYsRUFBeUIsQ0FBekIsQ0FBbEI7QUFDQSxJQUFNLFFBQVEsRUFBRSxnQkFBRixDQUFkO0FBQ0EsSUFBTSxZQUFZLEVBQUUsWUFBRixF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QUFiO0FBQ0EsUUFBSyxTQUFMLEdBQWlCLGNBQWpCO0FBQ0EsUUFBSyxTQUFMLEdBQWlCLEVBQWpCOztBQUVBOztBQUxxRSw4QkFNNUQsQ0FONEQ7QUFPcEUsUUFBSSxJQUFJLFFBQVEsQ0FBUixDQUFSOztBQUVBLFFBQUksS0FBSyxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVDtBQUNBLE9BQUcsU0FBSCxHQUFlLGVBQWY7QUFDQSxPQUFHLFlBQUgsQ0FBZ0IsWUFBaEIsRUFBOEIsRUFBRSxFQUFoQztBQUNBLE9BQUcsU0FBSCxHQUFlLFNBQVMsRUFBRSxLQUFGLENBQVEsUUFBakIsR0FBNEIsT0FBM0M7QUFDQSxVQUFNLG1CQUFOLENBQTBCLEVBQUUsRUFBNUIsRUFBZ0MsS0FBaEMsRUFBdUMsRUFBdkM7O0FBRUEsU0FBSyxXQUFMLENBQWlCLEVBQWpCOztBQUVBLE9BQUcsZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkIsWUFBTTtBQUNsQyxXQUFNLFFBQU4sQ0FBZSxDQUFmOztBQUVBLFdBQU0sZ0JBQU47QUFDQSxXQUFNLFNBQU4sQ0FBZ0IsQ0FBaEIsRUFBbUIsS0FBbkIsRUFBMEIsS0FBMUI7QUFDQSxXQUFNLGVBQU4sQ0FBc0IsRUFBRSxFQUF4QixFQUE0QixLQUE1QjtBQUNBLEtBTkQ7QUFqQm9FOztBQU1yRSxRQUFLLElBQUksSUFBSSxRQUFRLE1BQVIsR0FBaUIsQ0FBOUIsRUFBaUMsS0FBSyxDQUF0QyxFQUF5QyxHQUF6QyxFQUE4QztBQUFBLFVBQXJDLENBQXFDO0FBa0I3QztBQUNELFFBQUssU0FBTCxHQUFpQixFQUFqQjtBQUNBLEdBMUJELEVBMEJHLEtBMUJILENBREQsRUE0QkcsQ0E1Qkg7QUE2QkE7QUExRGUsQ0FBakIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKlxuIDIwMTcgSnVsaWFuIEdhcm5pZXJcbiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiovXG52YXIgJGpzY29tcD17c2NvcGU6e319OyRqc2NvbXAuZGVmaW5lUHJvcGVydHk9XCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmRlZmluZVByb3BlcnRpZXM/T2JqZWN0LmRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKGUscixwKXtpZihwLmdldHx8cC5zZXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkVTMyBkb2VzIG5vdCBzdXBwb3J0IGdldHRlcnMgYW5kIHNldHRlcnMuXCIpO2UhPUFycmF5LnByb3RvdHlwZSYmZSE9T2JqZWN0LnByb3RvdHlwZSYmKGVbcl09cC52YWx1ZSl9OyRqc2NvbXAuZ2V0R2xvYmFsPWZ1bmN0aW9uKGUpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdz09PWU/ZTpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsJiZudWxsIT1nbG9iYWw/Z2xvYmFsOmV9OyRqc2NvbXAuZ2xvYmFsPSRqc2NvbXAuZ2V0R2xvYmFsKHRoaXMpOyRqc2NvbXAuU1lNQk9MX1BSRUZJWD1cImpzY29tcF9zeW1ib2xfXCI7XG4kanNjb21wLmluaXRTeW1ib2w9ZnVuY3Rpb24oKXskanNjb21wLmluaXRTeW1ib2w9ZnVuY3Rpb24oKXt9OyRqc2NvbXAuZ2xvYmFsLlN5bWJvbHx8KCRqc2NvbXAuZ2xvYmFsLlN5bWJvbD0kanNjb21wLlN5bWJvbCl9OyRqc2NvbXAuc3ltYm9sQ291bnRlcl89MDskanNjb21wLlN5bWJvbD1mdW5jdGlvbihlKXtyZXR1cm4gJGpzY29tcC5TWU1CT0xfUFJFRklYKyhlfHxcIlwiKSskanNjb21wLnN5bWJvbENvdW50ZXJfKyt9O1xuJGpzY29tcC5pbml0U3ltYm9sSXRlcmF0b3I9ZnVuY3Rpb24oKXskanNjb21wLmluaXRTeW1ib2woKTt2YXIgZT0kanNjb21wLmdsb2JhbC5TeW1ib2wuaXRlcmF0b3I7ZXx8KGU9JGpzY29tcC5nbG9iYWwuU3ltYm9sLml0ZXJhdG9yPSRqc2NvbXAuZ2xvYmFsLlN5bWJvbChcIml0ZXJhdG9yXCIpKTtcImZ1bmN0aW9uXCIhPXR5cGVvZiBBcnJheS5wcm90b3R5cGVbZV0mJiRqc2NvbXAuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLGUse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpmdW5jdGlvbigpe3JldHVybiAkanNjb21wLmFycmF5SXRlcmF0b3IodGhpcyl9fSk7JGpzY29tcC5pbml0U3ltYm9sSXRlcmF0b3I9ZnVuY3Rpb24oKXt9fTskanNjb21wLmFycmF5SXRlcmF0b3I9ZnVuY3Rpb24oZSl7dmFyIHI9MDtyZXR1cm4gJGpzY29tcC5pdGVyYXRvclByb3RvdHlwZShmdW5jdGlvbigpe3JldHVybiByPGUubGVuZ3RoP3tkb25lOiExLHZhbHVlOmVbcisrXX06e2RvbmU6ITB9fSl9O1xuJGpzY29tcC5pdGVyYXRvclByb3RvdHlwZT1mdW5jdGlvbihlKXskanNjb21wLmluaXRTeW1ib2xJdGVyYXRvcigpO2U9e25leHQ6ZX07ZVskanNjb21wLmdsb2JhbC5TeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O3JldHVybiBlfTskanNjb21wLmFycmF5PSRqc2NvbXAuYXJyYXl8fHt9OyRqc2NvbXAuaXRlcmF0b3JGcm9tQXJyYXk9ZnVuY3Rpb24oZSxyKXskanNjb21wLmluaXRTeW1ib2xJdGVyYXRvcigpO2UgaW5zdGFuY2VvZiBTdHJpbmcmJihlKz1cIlwiKTt2YXIgcD0wLG09e25leHQ6ZnVuY3Rpb24oKXtpZihwPGUubGVuZ3RoKXt2YXIgdT1wKys7cmV0dXJue3ZhbHVlOnIodSxlW3VdKSxkb25lOiExfX1tLm5leHQ9ZnVuY3Rpb24oKXtyZXR1cm57ZG9uZTohMCx2YWx1ZTp2b2lkIDB9fTtyZXR1cm4gbS5uZXh0KCl9fTttW1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gbX07cmV0dXJuIG19O1xuJGpzY29tcC5wb2x5ZmlsbD1mdW5jdGlvbihlLHIscCxtKXtpZihyKXtwPSRqc2NvbXAuZ2xvYmFsO2U9ZS5zcGxpdChcIi5cIik7Zm9yKG09MDttPGUubGVuZ3RoLTE7bSsrKXt2YXIgdT1lW21dO3UgaW4gcHx8KHBbdV09e30pO3A9cFt1XX1lPWVbZS5sZW5ndGgtMV07bT1wW2VdO3I9cihtKTtyIT1tJiZudWxsIT1yJiYkanNjb21wLmRlZmluZVByb3BlcnR5KHAsZSx7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnJ9KX19OyRqc2NvbXAucG9seWZpbGwoXCJBcnJheS5wcm90b3R5cGUua2V5c1wiLGZ1bmN0aW9uKGUpe3JldHVybiBlP2U6ZnVuY3Rpb24oKXtyZXR1cm4gJGpzY29tcC5pdGVyYXRvckZyb21BcnJheSh0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiBlfSl9fSxcImVzNi1pbXBsXCIsXCJlczNcIik7dmFyICRqc2NvbXAkdGhpcz10aGlzO1xuKGZ1bmN0aW9uKGUscil7XCJmdW5jdGlvblwiPT09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10scik6XCJvYmplY3RcIj09PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPXIoKTplLmFuaW1lPXIoKX0pKHRoaXMsZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGEpe2lmKCFoLmNvbChhKSl0cnl7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYSl9Y2F0Y2goYyl7fX1mdW5jdGlvbiByKGEsYyl7Zm9yKHZhciBkPWEubGVuZ3RoLGI9Mjw9YXJndW1lbnRzLmxlbmd0aD9hcmd1bWVudHNbMV06dm9pZCAwLGY9W10sbj0wO248ZDtuKyspaWYobiBpbiBhKXt2YXIgaz1hW25dO2MuY2FsbChiLGssbixhKSYmZi5wdXNoKGspfXJldHVybiBmfWZ1bmN0aW9uIHAoYSl7cmV0dXJuIGEucmVkdWNlKGZ1bmN0aW9uKGEsZCl7cmV0dXJuIGEuY29uY2F0KGguYXJyKGQpP3AoZCk6ZCl9LFtdKX1mdW5jdGlvbiBtKGEpe2lmKGguYXJyKGEpKXJldHVybiBhO1xuaC5zdHIoYSkmJihhPWUoYSl8fGEpO3JldHVybiBhIGluc3RhbmNlb2YgTm9kZUxpc3R8fGEgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbj9bXS5zbGljZS5jYWxsKGEpOlthXX1mdW5jdGlvbiB1KGEsYyl7cmV0dXJuIGEuc29tZShmdW5jdGlvbihhKXtyZXR1cm4gYT09PWN9KX1mdW5jdGlvbiBDKGEpe3ZhciBjPXt9LGQ7Zm9yKGQgaW4gYSljW2RdPWFbZF07cmV0dXJuIGN9ZnVuY3Rpb24gRChhLGMpe3ZhciBkPUMoYSksYjtmb3IoYiBpbiBhKWRbYl09Yy5oYXNPd25Qcm9wZXJ0eShiKT9jW2JdOmFbYl07cmV0dXJuIGR9ZnVuY3Rpb24geihhLGMpe3ZhciBkPUMoYSksYjtmb3IoYiBpbiBjKWRbYl09aC51bmQoYVtiXSk/Y1tiXTphW2JdO3JldHVybiBkfWZ1bmN0aW9uIFQoYSl7YT1hLnJlcGxhY2UoL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaSxmdW5jdGlvbihhLGMsZCxrKXtyZXR1cm4gYytjK2QrZCtrK2t9KTt2YXIgYz0vXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoYSk7XG5hPXBhcnNlSW50KGNbMV0sMTYpO3ZhciBkPXBhcnNlSW50KGNbMl0sMTYpLGM9cGFyc2VJbnQoY1szXSwxNik7cmV0dXJuXCJyZ2JhKFwiK2ErXCIsXCIrZCtcIixcIitjK1wiLDEpXCJ9ZnVuY3Rpb24gVShhKXtmdW5jdGlvbiBjKGEsYyxiKXswPmImJihiKz0xKTsxPGImJi0tYjtyZXR1cm4gYjwxLzY/YSs2KihjLWEpKmI6LjU+Yj9jOmI8Mi8zP2ErKGMtYSkqKDIvMy1iKSo2OmF9dmFyIGQ9L2hzbFxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJVxcKS9nLmV4ZWMoYSl8fC9oc2xhXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKylcXCkvZy5leGVjKGEpO2E9cGFyc2VJbnQoZFsxXSkvMzYwO3ZhciBiPXBhcnNlSW50KGRbMl0pLzEwMCxmPXBhcnNlSW50KGRbM10pLzEwMCxkPWRbNF18fDE7aWYoMD09YilmPWI9YT1mO2Vsc2V7dmFyIG49LjU+Zj9mKigxK2IpOmYrYi1mKmIsaz0yKmYtbixmPWMoayxuLGErMS8zKSxiPWMoayxuLGEpO2E9YyhrLG4sYS0xLzMpfXJldHVyblwicmdiYShcIitcbjI1NSpmK1wiLFwiKzI1NSpiK1wiLFwiKzI1NSphK1wiLFwiK2QrXCIpXCJ9ZnVuY3Rpb24geShhKXtpZihhPS8oW1xcK1xcLV0/WzAtOSNcXC5dKykoJXxweHxwdHxlbXxyZW18aW58Y218bW18ZXh8Y2h8cGN8dnd8dmh8dm1pbnx2bWF4fGRlZ3xyYWR8dHVybik/JC8uZXhlYyhhKSlyZXR1cm4gYVsyXX1mdW5jdGlvbiBWKGEpe2lmKC0xPGEuaW5kZXhPZihcInRyYW5zbGF0ZVwiKXx8XCJwZXJzcGVjdGl2ZVwiPT09YSlyZXR1cm5cInB4XCI7aWYoLTE8YS5pbmRleE9mKFwicm90YXRlXCIpfHwtMTxhLmluZGV4T2YoXCJza2V3XCIpKXJldHVyblwiZGVnXCJ9ZnVuY3Rpb24gSShhLGMpe3JldHVybiBoLmZuYyhhKT9hKGMudGFyZ2V0LGMuaWQsYy50b3RhbCk6YX1mdW5jdGlvbiBFKGEsYyl7aWYoYyBpbiBhLnN0eWxlKXJldHVybiBnZXRDb21wdXRlZFN0eWxlKGEpLmdldFByb3BlcnR5VmFsdWUoYy5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLFwiJDEtJDJcIikudG9Mb3dlckNhc2UoKSl8fFwiMFwifWZ1bmN0aW9uIEooYSxjKXtpZihoLmRvbShhKSYmXG51KFcsYykpcmV0dXJuXCJ0cmFuc2Zvcm1cIjtpZihoLmRvbShhKSYmKGEuZ2V0QXR0cmlidXRlKGMpfHxoLnN2ZyhhKSYmYVtjXSkpcmV0dXJuXCJhdHRyaWJ1dGVcIjtpZihoLmRvbShhKSYmXCJ0cmFuc2Zvcm1cIiE9PWMmJkUoYSxjKSlyZXR1cm5cImNzc1wiO2lmKG51bGwhPWFbY10pcmV0dXJuXCJvYmplY3RcIn1mdW5jdGlvbiBYKGEsYyl7dmFyIGQ9VihjKSxkPS0xPGMuaW5kZXhPZihcInNjYWxlXCIpPzE6MCtkO2E9YS5zdHlsZS50cmFuc2Zvcm07aWYoIWEpcmV0dXJuIGQ7Zm9yKHZhciBiPVtdLGY9W10sbj1bXSxrPS8oXFx3KylcXCgoLis/KVxcKS9nO2I9ay5leGVjKGEpOylmLnB1c2goYlsxXSksbi5wdXNoKGJbMl0pO2E9cihuLGZ1bmN0aW9uKGEsYil7cmV0dXJuIGZbYl09PT1jfSk7cmV0dXJuIGEubGVuZ3RoP2FbMF06ZH1mdW5jdGlvbiBLKGEsYyl7c3dpdGNoKEooYSxjKSl7Y2FzZSBcInRyYW5zZm9ybVwiOnJldHVybiBYKGEsYyk7Y2FzZSBcImNzc1wiOnJldHVybiBFKGEsYyk7Y2FzZSBcImF0dHJpYnV0ZVwiOnJldHVybiBhLmdldEF0dHJpYnV0ZShjKX1yZXR1cm4gYVtjXXx8XG4wfWZ1bmN0aW9uIEwoYSxjKXt2YXIgZD0vXihcXCo9fFxcKz18LT0pLy5leGVjKGEpO2lmKCFkKXJldHVybiBhO3ZhciBiPXkoYSl8fDA7Yz1wYXJzZUZsb2F0KGMpO2E9cGFyc2VGbG9hdChhLnJlcGxhY2UoZFswXSxcIlwiKSk7c3dpdGNoKGRbMF1bMF0pe2Nhc2UgXCIrXCI6cmV0dXJuIGMrYStiO2Nhc2UgXCItXCI6cmV0dXJuIGMtYStiO2Nhc2UgXCIqXCI6cmV0dXJuIGMqYStifX1mdW5jdGlvbiBGKGEsYyl7cmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhjLngtYS54LDIpK01hdGgucG93KGMueS1hLnksMikpfWZ1bmN0aW9uIE0oYSl7YT1hLnBvaW50cztmb3IodmFyIGM9MCxkLGI9MDtiPGEubnVtYmVyT2ZJdGVtcztiKyspe3ZhciBmPWEuZ2V0SXRlbShiKTswPGImJihjKz1GKGQsZikpO2Q9Zn1yZXR1cm4gY31mdW5jdGlvbiBOKGEpe2lmKGEuZ2V0VG90YWxMZW5ndGgpcmV0dXJuIGEuZ2V0VG90YWxMZW5ndGgoKTtzd2l0Y2goYS50YWdOYW1lLnRvTG93ZXJDYXNlKCkpe2Nhc2UgXCJjaXJjbGVcIjpyZXR1cm4gMipcbk1hdGguUEkqYS5nZXRBdHRyaWJ1dGUoXCJyXCIpO2Nhc2UgXCJyZWN0XCI6cmV0dXJuIDIqYS5nZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiKSsyKmEuZ2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIpO2Nhc2UgXCJsaW5lXCI6cmV0dXJuIEYoe3g6YS5nZXRBdHRyaWJ1dGUoXCJ4MVwiKSx5OmEuZ2V0QXR0cmlidXRlKFwieTFcIil9LHt4OmEuZ2V0QXR0cmlidXRlKFwieDJcIikseTphLmdldEF0dHJpYnV0ZShcInkyXCIpfSk7Y2FzZSBcInBvbHlsaW5lXCI6cmV0dXJuIE0oYSk7Y2FzZSBcInBvbHlnb25cIjp2YXIgYz1hLnBvaW50cztyZXR1cm4gTShhKStGKGMuZ2V0SXRlbShjLm51bWJlck9mSXRlbXMtMSksYy5nZXRJdGVtKDApKX19ZnVuY3Rpb24gWShhLGMpe2Z1bmN0aW9uIGQoYil7Yj12b2lkIDA9PT1iPzA6YjtyZXR1cm4gYS5lbC5nZXRQb2ludEF0TGVuZ3RoKDE8PWMrYj9jK2I6MCl9dmFyIGI9ZCgpLGY9ZCgtMSksbj1kKDEpO3N3aXRjaChhLnByb3BlcnR5KXtjYXNlIFwieFwiOnJldHVybiBiLng7Y2FzZSBcInlcIjpyZXR1cm4gYi55O1xuY2FzZSBcImFuZ2xlXCI6cmV0dXJuIDE4MCpNYXRoLmF0YW4yKG4ueS1mLnksbi54LWYueCkvTWF0aC5QSX19ZnVuY3Rpb24gTyhhLGMpe3ZhciBkPS8tP1xcZCpcXC4/XFxkKy9nLGI7Yj1oLnB0aChhKT9hLnRvdGFsTGVuZ3RoOmE7aWYoaC5jb2woYikpaWYoaC5yZ2IoYikpe3ZhciBmPS9yZ2JcXCgoXFxkKyxcXHMqW1xcZF0rLFxccypbXFxkXSspXFwpL2cuZXhlYyhiKTtiPWY/XCJyZ2JhKFwiK2ZbMV0rXCIsMSlcIjpifWVsc2UgYj1oLmhleChiKT9UKGIpOmguaHNsKGIpP1UoYik6dm9pZCAwO2Vsc2UgZj0oZj15KGIpKT9iLnN1YnN0cigwLGIubGVuZ3RoLWYubGVuZ3RoKTpiLGI9YyYmIS9cXHMvZy50ZXN0KGIpP2YrYzpmO2IrPVwiXCI7cmV0dXJue29yaWdpbmFsOmIsbnVtYmVyczpiLm1hdGNoKGQpP2IubWF0Y2goZCkubWFwKE51bWJlcik6WzBdLHN0cmluZ3M6aC5zdHIoYSl8fGM/Yi5zcGxpdChkKTpbXX19ZnVuY3Rpb24gUChhKXthPWE/cChoLmFycihhKT9hLm1hcChtKTptKGEpKTpbXTtyZXR1cm4gcihhLFxuZnVuY3Rpb24oYSxkLGIpe3JldHVybiBiLmluZGV4T2YoYSk9PT1kfSl9ZnVuY3Rpb24gWihhKXt2YXIgYz1QKGEpO3JldHVybiBjLm1hcChmdW5jdGlvbihhLGIpe3JldHVybnt0YXJnZXQ6YSxpZDpiLHRvdGFsOmMubGVuZ3RofX0pfWZ1bmN0aW9uIGFhKGEsYyl7dmFyIGQ9QyhjKTtpZihoLmFycihhKSl7dmFyIGI9YS5sZW5ndGg7MiE9PWJ8fGgub2JqKGFbMF0pP2guZm5jKGMuZHVyYXRpb24pfHwoZC5kdXJhdGlvbj1jLmR1cmF0aW9uL2IpOmE9e3ZhbHVlOmF9fXJldHVybiBtKGEpLm1hcChmdW5jdGlvbihhLGIpe2I9Yj8wOmMuZGVsYXk7YT1oLm9iaihhKSYmIWgucHRoKGEpP2E6e3ZhbHVlOmF9O2gudW5kKGEuZGVsYXkpJiYoYS5kZWxheT1iKTtyZXR1cm4gYX0pLm1hcChmdW5jdGlvbihhKXtyZXR1cm4geihhLGQpfSl9ZnVuY3Rpb24gYmEoYSxjKXt2YXIgZD17fSxiO2ZvcihiIGluIGEpe3ZhciBmPUkoYVtiXSxjKTtoLmFycihmKSYmKGY9Zi5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIEkoYSxcbmMpfSksMT09PWYubGVuZ3RoJiYoZj1mWzBdKSk7ZFtiXT1mfWQuZHVyYXRpb249cGFyc2VGbG9hdChkLmR1cmF0aW9uKTtkLmRlbGF5PXBhcnNlRmxvYXQoZC5kZWxheSk7cmV0dXJuIGR9ZnVuY3Rpb24gY2EoYSl7cmV0dXJuIGguYXJyKGEpP0EuYXBwbHkodGhpcyxhKTpRW2FdfWZ1bmN0aW9uIGRhKGEsYyl7dmFyIGQ7cmV0dXJuIGEudHdlZW5zLm1hcChmdW5jdGlvbihiKXtiPWJhKGIsYyk7dmFyIGY9Yi52YWx1ZSxlPUsoYy50YXJnZXQsYS5uYW1lKSxrPWQ/ZC50by5vcmlnaW5hbDplLGs9aC5hcnIoZik/ZlswXTprLHc9TChoLmFycihmKT9mWzFdOmYsayksZT15KHcpfHx5KGspfHx5KGUpO2IuZnJvbT1PKGssZSk7Yi50bz1PKHcsZSk7Yi5zdGFydD1kP2QuZW5kOmEub2Zmc2V0O2IuZW5kPWIuc3RhcnQrYi5kZWxheStiLmR1cmF0aW9uO2IuZWFzaW5nPWNhKGIuZWFzaW5nKTtiLmVsYXN0aWNpdHk9KDFFMy1NYXRoLm1pbihNYXRoLm1heChiLmVsYXN0aWNpdHksMSksOTk5KSkvXG4xRTM7Yi5pc1BhdGg9aC5wdGgoZik7Yi5pc0NvbG9yPWguY29sKGIuZnJvbS5vcmlnaW5hbCk7Yi5pc0NvbG9yJiYoYi5yb3VuZD0xKTtyZXR1cm4gZD1ifSl9ZnVuY3Rpb24gZWEoYSxjKXtyZXR1cm4gcihwKGEubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBjLm1hcChmdW5jdGlvbihiKXt2YXIgYz1KKGEudGFyZ2V0LGIubmFtZSk7aWYoYyl7dmFyIGQ9ZGEoYixhKTtiPXt0eXBlOmMscHJvcGVydHk6Yi5uYW1lLGFuaW1hdGFibGU6YSx0d2VlbnM6ZCxkdXJhdGlvbjpkW2QubGVuZ3RoLTFdLmVuZCxkZWxheTpkWzBdLmRlbGF5fX1lbHNlIGI9dm9pZCAwO3JldHVybiBifSl9KSksZnVuY3Rpb24oYSl7cmV0dXJuIWgudW5kKGEpfSl9ZnVuY3Rpb24gUihhLGMsZCxiKXt2YXIgZj1cImRlbGF5XCI9PT1hO3JldHVybiBjLmxlbmd0aD8oZj9NYXRoLm1pbjpNYXRoLm1heCkuYXBwbHkoTWF0aCxjLm1hcChmdW5jdGlvbihiKXtyZXR1cm4gYlthXX0pKTpmP2IuZGVsYXk6ZC5vZmZzZXQrYi5kZWxheStcbmIuZHVyYXRpb259ZnVuY3Rpb24gZmEoYSl7dmFyIGM9RChnYSxhKSxkPUQoUyxhKSxiPVooYS50YXJnZXRzKSxmPVtdLGU9eihjLGQpLGs7Zm9yKGsgaW4gYSllLmhhc093blByb3BlcnR5KGspfHxcInRhcmdldHNcIj09PWt8fGYucHVzaCh7bmFtZTprLG9mZnNldDplLm9mZnNldCx0d2VlbnM6YWEoYVtrXSxkKX0pO2E9ZWEoYixmKTtyZXR1cm4geihjLHtjaGlsZHJlbjpbXSxhbmltYXRhYmxlczpiLGFuaW1hdGlvbnM6YSxkdXJhdGlvbjpSKFwiZHVyYXRpb25cIixhLGMsZCksZGVsYXk6UihcImRlbGF5XCIsYSxjLGQpfSl9ZnVuY3Rpb24gcShhKXtmdW5jdGlvbiBjKCl7cmV0dXJuIHdpbmRvdy5Qcm9taXNlJiZuZXcgUHJvbWlzZShmdW5jdGlvbihhKXtyZXR1cm4gcD1hfSl9ZnVuY3Rpb24gZChhKXtyZXR1cm4gZy5yZXZlcnNlZD9nLmR1cmF0aW9uLWE6YX1mdW5jdGlvbiBiKGEpe2Zvcih2YXIgYj0wLGM9e30sZD1nLmFuaW1hdGlvbnMsZj1kLmxlbmd0aDtiPGY7KXt2YXIgZT1kW2JdLFxuaz1lLmFuaW1hdGFibGUsaD1lLnR3ZWVucyxuPWgubGVuZ3RoLTEsbD1oW25dO24mJihsPXIoaCxmdW5jdGlvbihiKXtyZXR1cm4gYTxiLmVuZH0pWzBdfHxsKTtmb3IodmFyIGg9TWF0aC5taW4oTWF0aC5tYXgoYS1sLnN0YXJ0LWwuZGVsYXksMCksbC5kdXJhdGlvbikvbC5kdXJhdGlvbix3PWlzTmFOKGgpPzE6bC5lYXNpbmcoaCxsLmVsYXN0aWNpdHkpLGg9bC50by5zdHJpbmdzLHA9bC5yb3VuZCxuPVtdLG09dm9pZCAwLG09bC50by5udW1iZXJzLmxlbmd0aCx0PTA7dDxtO3QrKyl7dmFyIHg9dm9pZCAwLHg9bC50by5udW1iZXJzW3RdLHE9bC5mcm9tLm51bWJlcnNbdF0seD1sLmlzUGF0aD9ZKGwudmFsdWUsdyp4KTpxK3cqKHgtcSk7cCYmKGwuaXNDb2xvciYmMjx0fHwoeD1NYXRoLnJvdW5kKHgqcCkvcCkpO24ucHVzaCh4KX1pZihsPWgubGVuZ3RoKWZvcihtPWhbMF0sdz0wO3c8bDt3KyspcD1oW3crMV0sdD1uW3ddLGlzTmFOKHQpfHwobT1wP20rKHQrcCk6bSsodCtcIiBcIikpO1xuZWxzZSBtPW5bMF07aGFbZS50eXBlXShrLnRhcmdldCxlLnByb3BlcnR5LG0sYyxrLmlkKTtlLmN1cnJlbnRWYWx1ZT1tO2IrK31pZihiPU9iamVjdC5rZXlzKGMpLmxlbmd0aClmb3IoZD0wO2Q8YjtkKyspSHx8KEg9RShkb2N1bWVudC5ib2R5LFwidHJhbnNmb3JtXCIpP1widHJhbnNmb3JtXCI6XCItd2Via2l0LXRyYW5zZm9ybVwiKSxnLmFuaW1hdGFibGVzW2RdLnRhcmdldC5zdHlsZVtIXT1jW2RdLmpvaW4oXCIgXCIpO2cuY3VycmVudFRpbWU9YTtnLnByb2dyZXNzPWEvZy5kdXJhdGlvbioxMDB9ZnVuY3Rpb24gZihhKXtpZihnW2FdKWdbYV0oZyl9ZnVuY3Rpb24gZSgpe2cucmVtYWluaW5nJiYhMCE9PWcucmVtYWluaW5nJiZnLnJlbWFpbmluZy0tfWZ1bmN0aW9uIGsoYSl7dmFyIGs9Zy5kdXJhdGlvbixuPWcub2Zmc2V0LHc9bitnLmRlbGF5LHI9Zy5jdXJyZW50VGltZSx4PWcucmV2ZXJzZWQscT1kKGEpO2lmKGcuY2hpbGRyZW4ubGVuZ3RoKXt2YXIgdT1nLmNoaWxkcmVuLHY9dS5sZW5ndGg7XG5pZihxPj1nLmN1cnJlbnRUaW1lKWZvcih2YXIgRz0wO0c8djtHKyspdVtHXS5zZWVrKHEpO2Vsc2UgZm9yKDt2LS07KXVbdl0uc2VlayhxKX1pZihxPj13fHwhaylnLmJlZ2FufHwoZy5iZWdhbj0hMCxmKFwiYmVnaW5cIikpLGYoXCJydW5cIik7aWYocT5uJiZxPGspYihxKTtlbHNlIGlmKHE8PW4mJjAhPT1yJiYoYigwKSx4JiZlKCkpLHE+PWsmJnIhPT1rfHwhayliKGspLHh8fGUoKTtmKFwidXBkYXRlXCIpO2E+PWsmJihnLnJlbWFpbmluZz8odD1oLFwiYWx0ZXJuYXRlXCI9PT1nLmRpcmVjdGlvbiYmKGcucmV2ZXJzZWQ9IWcucmV2ZXJzZWQpKTooZy5wYXVzZSgpLGcuY29tcGxldGVkfHwoZy5jb21wbGV0ZWQ9ITAsZihcImNvbXBsZXRlXCIpLFwiUHJvbWlzZVwiaW4gd2luZG93JiYocCgpLG09YygpKSkpLGw9MCl9YT12b2lkIDA9PT1hP3t9OmE7dmFyIGgsdCxsPTAscD1udWxsLG09YygpLGc9ZmEoYSk7Zy5yZXNldD1mdW5jdGlvbigpe3ZhciBhPWcuZGlyZWN0aW9uLGM9Zy5sb29wO2cuY3VycmVudFRpbWU9XG4wO2cucHJvZ3Jlc3M9MDtnLnBhdXNlZD0hMDtnLmJlZ2FuPSExO2cuY29tcGxldGVkPSExO2cucmV2ZXJzZWQ9XCJyZXZlcnNlXCI9PT1hO2cucmVtYWluaW5nPVwiYWx0ZXJuYXRlXCI9PT1hJiYxPT09Yz8yOmM7YigwKTtmb3IoYT1nLmNoaWxkcmVuLmxlbmd0aDthLS07KWcuY2hpbGRyZW5bYV0ucmVzZXQoKX07Zy50aWNrPWZ1bmN0aW9uKGEpe2g9YTt0fHwodD1oKTtrKChsK2gtdCkqcS5zcGVlZCl9O2cuc2Vlaz1mdW5jdGlvbihhKXtrKGQoYSkpfTtnLnBhdXNlPWZ1bmN0aW9uKCl7dmFyIGE9di5pbmRleE9mKGcpOy0xPGEmJnYuc3BsaWNlKGEsMSk7Zy5wYXVzZWQ9ITB9O2cucGxheT1mdW5jdGlvbigpe2cucGF1c2VkJiYoZy5wYXVzZWQ9ITEsdD0wLGw9ZChnLmN1cnJlbnRUaW1lKSx2LnB1c2goZyksQnx8aWEoKSl9O2cucmV2ZXJzZT1mdW5jdGlvbigpe2cucmV2ZXJzZWQ9IWcucmV2ZXJzZWQ7dD0wO2w9ZChnLmN1cnJlbnRUaW1lKX07Zy5yZXN0YXJ0PWZ1bmN0aW9uKCl7Zy5wYXVzZSgpO1xuZy5yZXNldCgpO2cucGxheSgpfTtnLmZpbmlzaGVkPW07Zy5yZXNldCgpO2cuYXV0b3BsYXkmJmcucGxheSgpO3JldHVybiBnfXZhciBnYT17dXBkYXRlOnZvaWQgMCxiZWdpbjp2b2lkIDAscnVuOnZvaWQgMCxjb21wbGV0ZTp2b2lkIDAsbG9vcDoxLGRpcmVjdGlvbjpcIm5vcm1hbFwiLGF1dG9wbGF5OiEwLG9mZnNldDowfSxTPXtkdXJhdGlvbjoxRTMsZGVsYXk6MCxlYXNpbmc6XCJlYXNlT3V0RWxhc3RpY1wiLGVsYXN0aWNpdHk6NTAwLHJvdW5kOjB9LFc9XCJ0cmFuc2xhdGVYIHRyYW5zbGF0ZVkgdHJhbnNsYXRlWiByb3RhdGUgcm90YXRlWCByb3RhdGVZIHJvdGF0ZVogc2NhbGUgc2NhbGVYIHNjYWxlWSBzY2FsZVogc2tld1ggc2tld1kgcGVyc3BlY3RpdmVcIi5zcGxpdChcIiBcIiksSCxoPXthcnI6ZnVuY3Rpb24oYSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoYSl9LG9iajpmdW5jdGlvbihhKXtyZXR1cm4tMTxPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSkuaW5kZXhPZihcIk9iamVjdFwiKX0sXG5wdGg6ZnVuY3Rpb24oYSl7cmV0dXJuIGgub2JqKGEpJiZhLmhhc093blByb3BlcnR5KFwidG90YWxMZW5ndGhcIil9LHN2ZzpmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIFNWR0VsZW1lbnR9LGRvbTpmdW5jdGlvbihhKXtyZXR1cm4gYS5ub2RlVHlwZXx8aC5zdmcoYSl9LHN0cjpmdW5jdGlvbihhKXtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGF9LGZuYzpmdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYX0sdW5kOmZ1bmN0aW9uKGEpe3JldHVyblwidW5kZWZpbmVkXCI9PT10eXBlb2YgYX0saGV4OmZ1bmN0aW9uKGEpe3JldHVybi8oXiNbMC05QS1GXXs2fSQpfCheI1swLTlBLUZdezN9JCkvaS50ZXN0KGEpfSxyZ2I6ZnVuY3Rpb24oYSl7cmV0dXJuL15yZ2IvLnRlc3QoYSl9LGhzbDpmdW5jdGlvbihhKXtyZXR1cm4vXmhzbC8udGVzdChhKX0sY29sOmZ1bmN0aW9uKGEpe3JldHVybiBoLmhleChhKXx8aC5yZ2IoYSl8fGguaHNsKGEpfX0sQT1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSxcbmQsYil7cmV0dXJuKCgoMS0zKmIrMypkKSphKygzKmItNipkKSkqYSszKmQpKmF9cmV0dXJuIGZ1bmN0aW9uKGMsZCxiLGYpe2lmKDA8PWMmJjE+PWMmJjA8PWImJjE+PWIpe3ZhciBlPW5ldyBGbG9hdDMyQXJyYXkoMTEpO2lmKGMhPT1kfHxiIT09Zilmb3IodmFyIGs9MDsxMT5rOysrayllW2tdPWEoLjEqayxjLGIpO3JldHVybiBmdW5jdGlvbihrKXtpZihjPT09ZCYmYj09PWYpcmV0dXJuIGs7aWYoMD09PWspcmV0dXJuIDA7aWYoMT09PWspcmV0dXJuIDE7Zm9yKHZhciBoPTAsbD0xOzEwIT09bCYmZVtsXTw9azsrK2wpaCs9LjE7LS1sO3ZhciBsPWgrKGstZVtsXSkvKGVbbCsxXS1lW2xdKSouMSxuPTMqKDEtMypiKzMqYykqbCpsKzIqKDMqYi02KmMpKmwrMypjO2lmKC4wMDE8PW4pe2ZvcihoPTA7ND5oOysraCl7bj0zKigxLTMqYiszKmMpKmwqbCsyKigzKmItNipjKSpsKzMqYztpZigwPT09bilicmVhazt2YXIgbT1hKGwsYyxiKS1rLGw9bC1tL259az1sfWVsc2UgaWYoMD09PVxubilrPWw7ZWxzZXt2YXIgbD1oLGg9aCsuMSxnPTA7ZG8gbT1sKyhoLWwpLzIsbj1hKG0sYyxiKS1rLDA8bj9oPW06bD1tO3doaWxlKDFlLTc8TWF0aC5hYnMobikmJjEwPisrZyk7az1tfXJldHVybiBhKGssZCxmKX19fX0oKSxRPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhLGIpe3JldHVybiAwPT09YXx8MT09PWE/YTotTWF0aC5wb3coMiwxMCooYS0xKSkqTWF0aC5zaW4oMiooYS0xLWIvKDIqTWF0aC5QSSkqTWF0aC5hc2luKDEpKSpNYXRoLlBJL2IpfXZhciBjPVwiUXVhZCBDdWJpYyBRdWFydCBRdWludCBTaW5lIEV4cG8gQ2lyYyBCYWNrIEVsYXN0aWNcIi5zcGxpdChcIiBcIiksZD17SW46W1suNTUsLjA4NSwuNjgsLjUzXSxbLjU1LC4wNTUsLjY3NSwuMTldLFsuODk1LC4wMywuNjg1LC4yMl0sWy43NTUsLjA1LC44NTUsLjA2XSxbLjQ3LDAsLjc0NSwuNzE1XSxbLjk1LC4wNSwuNzk1LC4wMzVdLFsuNiwuMDQsLjk4LC4zMzVdLFsuNiwtLjI4LC43MzUsLjA0NV0sYV0sT3V0OltbLjI1LFxuLjQ2LC40NSwuOTRdLFsuMjE1LC42MSwuMzU1LDFdLFsuMTY1LC44NCwuNDQsMV0sWy4yMywxLC4zMiwxXSxbLjM5LC41NzUsLjU2NSwxXSxbLjE5LDEsLjIyLDFdLFsuMDc1LC44MiwuMTY1LDFdLFsuMTc1LC44ODUsLjMyLDEuMjc1XSxmdW5jdGlvbihiLGMpe3JldHVybiAxLWEoMS1iLGMpfV0sSW5PdXQ6W1suNDU1LC4wMywuNTE1LC45NTVdLFsuNjQ1LC4wNDUsLjM1NSwxXSxbLjc3LDAsLjE3NSwxXSxbLjg2LDAsLjA3LDFdLFsuNDQ1LC4wNSwuNTUsLjk1XSxbMSwwLDAsMV0sWy43ODUsLjEzNSwuMTUsLjg2XSxbLjY4LC0uNTUsLjI2NSwxLjU1XSxmdW5jdGlvbihiLGMpe3JldHVybi41PmI/YSgyKmIsYykvMjoxLWEoLTIqYisyLGMpLzJ9XX0sYj17bGluZWFyOkEoLjI1LC4yNSwuNzUsLjc1KX0sZj17fSxlO2ZvcihlIGluIGQpZi50eXBlPWUsZFtmLnR5cGVdLmZvckVhY2goZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGQsZil7YltcImVhc2VcIithLnR5cGUrY1tmXV09aC5mbmMoZCk/XG5kOkEuYXBwbHkoJGpzY29tcCR0aGlzLGQpfX0oZikpLGY9e3R5cGU6Zi50eXBlfTtyZXR1cm4gYn0oKSxoYT17Y3NzOmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gYS5zdHlsZVtjXT1kfSxhdHRyaWJ1dGU6ZnVuY3Rpb24oYSxjLGQpe3JldHVybiBhLnNldEF0dHJpYnV0ZShjLGQpfSxvYmplY3Q6ZnVuY3Rpb24oYSxjLGQpe3JldHVybiBhW2NdPWR9LHRyYW5zZm9ybTpmdW5jdGlvbihhLGMsZCxiLGYpe2JbZl18fChiW2ZdPVtdKTtiW2ZdLnB1c2goYytcIihcIitkK1wiKVwiKX19LHY9W10sQj0wLGlhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe0I9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGMpfWZ1bmN0aW9uIGMoYyl7dmFyIGI9di5sZW5ndGg7aWYoYil7Zm9yKHZhciBkPTA7ZDxiOyl2W2RdJiZ2W2RdLnRpY2soYyksZCsrO2EoKX1lbHNlIGNhbmNlbEFuaW1hdGlvbkZyYW1lKEIpLEI9MH1yZXR1cm4gYX0oKTtxLnZlcnNpb249XCIyLjIuMFwiO3Euc3BlZWQ9MTtxLnJ1bm5pbmc9djtxLnJlbW92ZT1cbmZ1bmN0aW9uKGEpe2E9UChhKTtmb3IodmFyIGM9di5sZW5ndGg7Yy0tOylmb3IodmFyIGQ9dltjXSxiPWQuYW5pbWF0aW9ucyxmPWIubGVuZ3RoO2YtLTspdShhLGJbZl0uYW5pbWF0YWJsZS50YXJnZXQpJiYoYi5zcGxpY2UoZiwxKSxiLmxlbmd0aHx8ZC5wYXVzZSgpKX07cS5nZXRWYWx1ZT1LO3EucGF0aD1mdW5jdGlvbihhLGMpe3ZhciBkPWguc3RyKGEpP2UoYSlbMF06YSxiPWN8fDEwMDtyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJue2VsOmQscHJvcGVydHk6YSx0b3RhbExlbmd0aDpOKGQpKihiLzEwMCl9fX07cS5zZXREYXNob2Zmc2V0PWZ1bmN0aW9uKGEpe3ZhciBjPU4oYSk7YS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtZGFzaGFycmF5XCIsYyk7cmV0dXJuIGN9O3EuYmV6aWVyPUE7cS5lYXNpbmdzPVE7cS50aW1lbGluZT1mdW5jdGlvbihhKXt2YXIgYz1xKGEpO2MucGF1c2UoKTtjLmR1cmF0aW9uPTA7Yy5hZGQ9ZnVuY3Rpb24oZCl7Yy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EuYmVnYW49XG4hMDthLmNvbXBsZXRlZD0hMH0pO20oZCkuZm9yRWFjaChmdW5jdGlvbihiKXt2YXIgZD16KGIsRChTLGF8fHt9KSk7ZC50YXJnZXRzPWQudGFyZ2V0c3x8YS50YXJnZXRzO2I9Yy5kdXJhdGlvbjt2YXIgZT1kLm9mZnNldDtkLmF1dG9wbGF5PSExO2QuZGlyZWN0aW9uPWMuZGlyZWN0aW9uO2Qub2Zmc2V0PWgudW5kKGUpP2I6TChlLGIpO2MuYmVnYW49ITA7Yy5jb21wbGV0ZWQ9ITA7Yy5zZWVrKGQub2Zmc2V0KTtkPXEoZCk7ZC5iZWdhbj0hMDtkLmNvbXBsZXRlZD0hMDtkLmR1cmF0aW9uPmImJihjLmR1cmF0aW9uPWQuZHVyYXRpb24pO2MuY2hpbGRyZW4ucHVzaChkKX0pO2Muc2VlaygwKTtjLnJlc2V0KCk7Yy5hdXRvcGxheSYmYy5yZXN0YXJ0KCk7cmV0dXJuIGN9O3JldHVybiBjfTtxLnJhbmRvbT1mdW5jdGlvbihhLGMpe3JldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKGMtYSsxKSkrYX07cmV0dXJuIHF9KTsiLCIvKipcbiAqIFplc3QgKGh0dHBzOi8vZ2l0aHViLmNvbS9jaGpqL3plc3QpXG4gKiBBIGNzcyBzZWxlY3RvciBlbmdpbmUuXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTEtMjAxMiwgQ2hyaXN0b3BoZXIgSmVmZnJleS4gKE1JVCBMaWNlbnNlZClcbiAqL1xuXG4vLyBUT0RPXG4vLyAtIFJlY29nbml6ZSB0aGUgVFIgc3ViamVjdCBzZWxlY3RvciB3aGVuIHBhcnNpbmcuXG4vLyAtIFBhc3MgY29udGV4dCB0byBzY29wZS5cbi8vIC0gQWRkIDpjb2x1bW4gcHNldWRvLWNsYXNzZXMuXG5cbjsoZnVuY3Rpb24oKSB7XG5cbi8qKlxuICogU2hhcmVkXG4gKi9cblxudmFyIHdpbmRvdyA9IHRoaXNcbiAgLCBkb2N1bWVudCA9IHRoaXMuZG9jdW1lbnRcbiAgLCBvbGQgPSB0aGlzLnplc3Q7XG5cbi8qKlxuICogSGVscGVyc1xuICovXG5cbnZhciBjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiA9IChmdW5jdGlvbigpIHtcbiAgaWYgKGRvY3VtZW50LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIHJldHVybiBhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICB2YXIgZWwgPSBhLm93bmVyRG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKVxuICAgICAgLCBpID0gZWwubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWYgKGVsW2ldID09PSBhKSByZXR1cm4gMjtcbiAgICAgIGlmIChlbFtpXSA9PT0gYikgcmV0dXJuIDQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH07XG59KSgpO1xuXG52YXIgb3JkZXIgPSBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBjb21wYXJlRG9jdW1lbnRQb3NpdGlvbihhLCBiKSAmIDIgPyAxIDogLTE7XG59O1xuXG52YXIgbmV4dCA9IGZ1bmN0aW9uKGVsKSB7XG4gIHdoaWxlICgoZWwgPSBlbC5uZXh0U2libGluZylcbiAgICAgICAgICYmIGVsLm5vZGVUeXBlICE9PSAxKTtcbiAgcmV0dXJuIGVsO1xufTtcblxudmFyIHByZXYgPSBmdW5jdGlvbihlbCkge1xuICB3aGlsZSAoKGVsID0gZWwucHJldmlvdXNTaWJsaW5nKVxuICAgICAgICAgJiYgZWwubm9kZVR5cGUgIT09IDEpO1xuICByZXR1cm4gZWw7XG59O1xuXG52YXIgY2hpbGQgPSBmdW5jdGlvbihlbCkge1xuICBpZiAoZWwgPSBlbC5maXJzdENoaWxkKSB7XG4gICAgd2hpbGUgKGVsLm5vZGVUeXBlICE9PSAxXG4gICAgICAgICAgICYmIChlbCA9IGVsLm5leHRTaWJsaW5nKSk7XG4gIH1cbiAgcmV0dXJuIGVsO1xufTtcblxudmFyIGxhc3RDaGlsZCA9IGZ1bmN0aW9uKGVsKSB7XG4gIGlmIChlbCA9IGVsLmxhc3RDaGlsZCkge1xuICAgIHdoaWxlIChlbC5ub2RlVHlwZSAhPT0gMVxuICAgICAgICAgICAmJiAoZWwgPSBlbC5wcmV2aW91c1NpYmxpbmcpKTtcbiAgfVxuICByZXR1cm4gZWw7XG59O1xuXG52YXIgdW5xdW90ZSA9IGZ1bmN0aW9uKHN0cikge1xuICBpZiAoIXN0cikgcmV0dXJuIHN0cjtcbiAgdmFyIGNoID0gc3RyWzBdO1xuICByZXR1cm4gY2ggPT09ICdcIicgfHwgY2ggPT09ICdcXCcnXG4gICAgPyBzdHIuc2xpY2UoMSwgLTEpXG4gICAgOiBzdHI7XG59O1xuXG52YXIgaW5kZXhPZiA9IChmdW5jdGlvbigpIHtcbiAgaWYgKEFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihvYmosIGl0ZW0pIHtcbiAgICB2YXIgaSA9IHRoaXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlmICh0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9O1xufSkoKTtcblxudmFyIG1ha2VJbnNpZGUgPSBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gIHZhciByZWdleCA9IHJ1bGVzLmluc2lkZS5zb3VyY2VcbiAgICAucmVwbGFjZSgvPC9nLCBzdGFydClcbiAgICAucmVwbGFjZSgvPi9nLCBlbmQpO1xuXG4gIHJldHVybiBuZXcgUmVnRXhwKHJlZ2V4KTtcbn07XG5cbnZhciByZXBsYWNlID0gZnVuY3Rpb24ocmVnZXgsIG5hbWUsIHZhbCkge1xuICByZWdleCA9IHJlZ2V4LnNvdXJjZTtcbiAgcmVnZXggPSByZWdleC5yZXBsYWNlKG5hbWUsIHZhbC5zb3VyY2UgfHwgdmFsKTtcbiAgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXgpO1xufTtcblxudmFyIHRydW5jYXRlVXJsID0gZnVuY3Rpb24odXJsLCBudW0pIHtcbiAgcmV0dXJuIHVybFxuICAgIC5yZXBsYWNlKC9eKD86XFx3KzpcXC9cXC98XFwvKykvLCAnJylcbiAgICAucmVwbGFjZSgvKD86XFwvK3xcXC8qIy4qPykkLywgJycpXG4gICAgLnNwbGl0KCcvJywgbnVtKVxuICAgIC5qb2luKCcvJyk7XG59O1xuXG4vKipcbiAqIEhhbmRsZSBgbnRoYCBTZWxlY3RvcnNcbiAqL1xuXG52YXIgcGFyc2VOdGggPSBmdW5jdGlvbihwYXJhbSwgdGVzdCkge1xuICB2YXIgcGFyYW0gPSBwYXJhbS5yZXBsYWNlKC9cXHMrL2csICcnKVxuICAgICwgY2FwO1xuXG4gIGlmIChwYXJhbSA9PT0gJ2V2ZW4nKSB7XG4gICAgcGFyYW0gPSAnMm4rMCc7XG4gIH0gZWxzZSBpZiAocGFyYW0gPT09ICdvZGQnKSB7XG4gICAgcGFyYW0gPSAnMm4rMSc7XG4gIH0gZWxzZSBpZiAoIX5wYXJhbS5pbmRleE9mKCduJykpIHtcbiAgICBwYXJhbSA9ICcwbicgKyBwYXJhbTtcbiAgfVxuXG4gIGNhcCA9IC9eKFsrLV0pPyhcXGQrKT9uKFsrLV0pPyhcXGQrKT8kLy5leGVjKHBhcmFtKTtcblxuICByZXR1cm4ge1xuICAgIGdyb3VwOiBjYXBbMV0gPT09ICctJ1xuICAgICAgPyAtKGNhcFsyXSB8fCAxKVxuICAgICAgOiArKGNhcFsyXSB8fCAxKSxcbiAgICBvZmZzZXQ6IGNhcFs0XVxuICAgICAgPyAoY2FwWzNdID09PSAnLScgPyAtY2FwWzRdIDogK2NhcFs0XSlcbiAgICAgIDogMFxuICB9O1xufTtcblxudmFyIG50aCA9IGZ1bmN0aW9uKHBhcmFtLCB0ZXN0LCBsYXN0KSB7XG4gIHZhciBwYXJhbSA9IHBhcnNlTnRoKHBhcmFtKVxuICAgICwgZ3JvdXAgPSBwYXJhbS5ncm91cFxuICAgICwgb2Zmc2V0ID0gcGFyYW0ub2Zmc2V0XG4gICAgLCBmaW5kID0gIWxhc3QgPyBjaGlsZCA6IGxhc3RDaGlsZFxuICAgICwgYWR2YW5jZSA9ICFsYXN0ID8gbmV4dCA6IHByZXY7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGVsKSB7XG4gICAgaWYgKGVsLnBhcmVudE5vZGUubm9kZVR5cGUgIT09IDEpIHJldHVybjtcblxuICAgIHZhciByZWwgPSBmaW5kKGVsLnBhcmVudE5vZGUpXG4gICAgICAsIHBvcyA9IDA7XG5cbiAgICB3aGlsZSAocmVsKSB7XG4gICAgICBpZiAodGVzdChyZWwsIGVsKSkgcG9zKys7XG4gICAgICBpZiAocmVsID09PSBlbCkge1xuICAgICAgICBwb3MgLT0gb2Zmc2V0O1xuICAgICAgICByZXR1cm4gZ3JvdXAgJiYgcG9zXG4gICAgICAgICAgPyAhKHBvcyAlIGdyb3VwKSAmJiAocG9zIDwgMCA9PT0gZ3JvdXAgPCAwKVxuICAgICAgICAgIDogIXBvcztcbiAgICAgIH1cbiAgICAgIHJlbCA9IGFkdmFuY2UocmVsKTtcbiAgICB9XG4gIH07XG59O1xuXG4vKipcbiAqIFNpbXBsZSBTZWxlY3RvcnNcbiAqL1xuXG52YXIgc2VsZWN0b3JzID0ge1xuICAnKic6IChmdW5jdGlvbigpIHtcbiAgICBpZiAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpKTtcbiAgICAgIHJldHVybiAhIWVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJylbMF07XG4gICAgfSgpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgaWYgKGVsLm5vZGVUeXBlID09PSAxKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKCksXG4gICd0eXBlJzogZnVuY3Rpb24odHlwZSkge1xuICAgIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsKSB7XG4gICAgICByZXR1cm4gZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gdHlwZTtcbiAgICB9O1xuICB9LFxuICAnYXR0cic6IGZ1bmN0aW9uKGtleSwgb3AsIHZhbCwgaSkge1xuICAgIG9wID0gb3BlcmF0b3JzW29wXTtcbiAgICByZXR1cm4gZnVuY3Rpb24oZWwpIHtcbiAgICAgIHZhciBhdHRyO1xuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAnZm9yJzpcbiAgICAgICAgICBhdHRyID0gZWwuaHRtbEZvcjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2xhc3MnOlxuICAgICAgICAgIC8vIGNsYXNzTmFtZSBpcyAnJyB3aGVuIG5vbi1leGlzdGVudFxuICAgICAgICAgIC8vIGdldEF0dHJpYnV0ZSgnY2xhc3MnKSBpcyBudWxsXG4gICAgICAgICAgYXR0ciA9IGVsLmNsYXNzTmFtZTtcbiAgICAgICAgICBpZiAoYXR0ciA9PT0gJycgJiYgZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09IG51bGwpIHtcbiAgICAgICAgICAgIGF0dHIgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaHJlZic6XG4gICAgICAgICAgYXR0ciA9IGVsLmdldEF0dHJpYnV0ZSgnaHJlZicsIDIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0aXRsZSc6XG4gICAgICAgICAgLy8gZ2V0QXR0cmlidXRlKCd0aXRsZScpIGNhbiBiZSAnJyB3aGVuIG5vbi1leGlzdGVudCBzb21ldGltZXM/XG4gICAgICAgICAgYXR0ciA9IGVsLmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCBudWxsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdpZCc6XG4gICAgICAgICAgaWYgKGVsLmdldEF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgYXR0ciA9IGVsLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBhdHRyID0gZWxba2V5XSAhPSBudWxsXG4gICAgICAgICAgICA/IGVsW2tleV1cbiAgICAgICAgICAgIDogZWwuZ2V0QXR0cmlidXRlICYmIGVsLmdldEF0dHJpYnV0ZShrZXkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHIgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgYXR0ciA9IGF0dHIgKyAnJztcbiAgICAgIGlmIChpKSB7XG4gICAgICAgIGF0dHIgPSBhdHRyLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhbCA9IHZhbC50b0xvd2VyQ2FzZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9wKGF0dHIsIHZhbCk7XG4gICAgfTtcbiAgfSxcbiAgJzpmaXJzdC1jaGlsZCc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuICFwcmV2KGVsKSAmJiBlbC5wYXJlbnROb2RlLm5vZGVUeXBlID09PSAxO1xuICB9LFxuICAnOmxhc3QtY2hpbGQnOiBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiAhbmV4dChlbCkgJiYgZWwucGFyZW50Tm9kZS5ub2RlVHlwZSA9PT0gMTtcbiAgfSxcbiAgJzpvbmx5LWNoaWxkJzogZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gIXByZXYoZWwpICYmICFuZXh0KGVsKVxuICAgICAgJiYgZWwucGFyZW50Tm9kZS5ub2RlVHlwZSA9PT0gMTtcbiAgfSxcbiAgJzpudGgtY2hpbGQnOiBmdW5jdGlvbihwYXJhbSwgbGFzdCkge1xuICAgIHJldHVybiBudGgocGFyYW0sIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgbGFzdCk7XG4gIH0sXG4gICc6bnRoLWxhc3QtY2hpbGQnOiBmdW5jdGlvbihwYXJhbSkge1xuICAgIHJldHVybiBzZWxlY3RvcnNbJzpudGgtY2hpbGQnXShwYXJhbSwgdHJ1ZSk7XG4gIH0sXG4gICc6cm9vdCc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuIGVsLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID09PSBlbDtcbiAgfSxcbiAgJzplbXB0eSc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuICFlbC5maXJzdENoaWxkO1xuICB9LFxuICAnOm5vdCc6IGZ1bmN0aW9uKHNlbCkge1xuICAgIHZhciB0ZXN0ID0gY29tcGlsZUdyb3VwKHNlbCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsKSB7XG4gICAgICByZXR1cm4gIXRlc3QoZWwpO1xuICAgIH07XG4gIH0sXG4gICc6Zmlyc3Qtb2YtdHlwZSc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgaWYgKGVsLnBhcmVudE5vZGUubm9kZVR5cGUgIT09IDEpIHJldHVybjtcbiAgICB2YXIgdHlwZSA9IGVsLm5vZGVOYW1lO1xuICAgIHdoaWxlIChlbCA9IHByZXYoZWwpKSB7XG4gICAgICBpZiAoZWwubm9kZU5hbWUgPT09IHR5cGUpIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gICc6bGFzdC1vZi10eXBlJzogZnVuY3Rpb24oZWwpIHtcbiAgICBpZiAoZWwucGFyZW50Tm9kZS5ub2RlVHlwZSAhPT0gMSkgcmV0dXJuO1xuICAgIHZhciB0eXBlID0gZWwubm9kZU5hbWU7XG4gICAgd2hpbGUgKGVsID0gbmV4dChlbCkpIHtcbiAgICAgIGlmIChlbC5ub2RlTmFtZSA9PT0gdHlwZSkgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgJzpvbmx5LW9mLXR5cGUnOiBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiBzZWxlY3RvcnNbJzpmaXJzdC1vZi10eXBlJ10oZWwpXG4gICAgICAgICYmIHNlbGVjdG9yc1snOmxhc3Qtb2YtdHlwZSddKGVsKTtcbiAgfSxcbiAgJzpudGgtb2YtdHlwZSc6IGZ1bmN0aW9uKHBhcmFtLCBsYXN0KSB7XG4gICAgcmV0dXJuIG50aChwYXJhbSwgZnVuY3Rpb24ocmVsLCBlbCkge1xuICAgICAgcmV0dXJuIHJlbC5ub2RlTmFtZSA9PT0gZWwubm9kZU5hbWU7XG4gICAgfSwgbGFzdCk7XG4gIH0sXG4gICc6bnRoLWxhc3Qtb2YtdHlwZSc6IGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yc1snOm50aC1vZi10eXBlJ10ocGFyYW0sIHRydWUpO1xuICB9LFxuICAnOmNoZWNrZWQnOiBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiAhIShlbC5jaGVja2VkIHx8IGVsLnNlbGVjdGVkKTtcbiAgfSxcbiAgJzppbmRldGVybWluYXRlJzogZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gIXNlbGVjdG9yc1snOmNoZWNrZWQnXShlbCk7XG4gIH0sXG4gICc6ZW5hYmxlZCc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuICFlbC5kaXNhYmxlZCAmJiBlbC50eXBlICE9PSAnaGlkZGVuJztcbiAgfSxcbiAgJzpkaXNhYmxlZCc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuICEhZWwuZGlzYWJsZWQ7XG4gIH0sXG4gICc6dGFyZ2V0JzogZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gZWwuaWQgPT09IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKTtcbiAgfSxcbiAgJzpmb2N1cyc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuIGVsID09PSBlbC5vd25lckRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gIH0sXG4gICc6bWF0Y2hlcyc6IGZ1bmN0aW9uKHNlbCkge1xuICAgIHJldHVybiBjb21waWxlR3JvdXAoc2VsKTtcbiAgfSxcbiAgJzpudGgtbWF0Y2gnOiBmdW5jdGlvbihwYXJhbSwgbGFzdCkge1xuICAgIHZhciBhcmdzID0gcGFyYW0uc3BsaXQoL1xccyosXFxzKi8pXG4gICAgICAsIGFyZyA9IGFyZ3Muc2hpZnQoKVxuICAgICAgLCB0ZXN0ID0gY29tcGlsZUdyb3VwKGFyZ3Muam9pbignLCcpKTtcblxuICAgIHJldHVybiBudGgoYXJnLCB0ZXN0LCBsYXN0KTtcbiAgfSxcbiAgJzpudGgtbGFzdC1tYXRjaCc6IGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yc1snOm50aC1tYXRjaCddKHBhcmFtLCB0cnVlKTtcbiAgfSxcbiAgJzpsaW5rcy1oZXJlJzogZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gZWwgKyAnJyA9PT0gd2luZG93LmxvY2F0aW9uICsgJyc7XG4gIH0sXG4gICc6bGFuZyc6IGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsKSB7XG4gICAgICB3aGlsZSAoZWwpIHtcbiAgICAgICAgaWYgKGVsLmxhbmcpIHJldHVybiBlbC5sYW5nLmluZGV4T2YocGFyYW0pID09PSAwO1xuICAgICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgJzpkaXInOiBmdW5jdGlvbihwYXJhbSkge1xuICAgIHJldHVybiBmdW5jdGlvbihlbCkge1xuICAgICAgd2hpbGUgKGVsKSB7XG4gICAgICAgIGlmIChlbC5kaXIpIHJldHVybiBlbC5kaXIgPT09IHBhcmFtO1xuICAgICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgJzpzY29wZSc6IGZ1bmN0aW9uKGVsLCBjb24pIHtcbiAgICB2YXIgY29udGV4dCA9IGNvbiB8fCBlbC5vd25lckRvY3VtZW50O1xuICAgIGlmIChjb250ZXh0Lm5vZGVUeXBlID09PSA5KSB7XG4gICAgICByZXR1cm4gZWwgPT09IGNvbnRleHQuZG9jdW1lbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gZWwgPT09IGNvbnRleHQ7XG4gIH0sXG4gICc6YW55LWxpbmsnOiBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiB0eXBlb2YgZWwuaHJlZiA9PT0gJ3N0cmluZyc7XG4gIH0sXG4gICc6bG9jYWwtbGluayc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgaWYgKGVsLm5vZGVOYW1lKSB7XG4gICAgICByZXR1cm4gZWwuaHJlZiAmJiBlbC5ob3N0ID09PSB3aW5kb3cubG9jYXRpb24uaG9zdDtcbiAgICB9XG4gICAgdmFyIHBhcmFtID0gK2VsICsgMTtcbiAgICByZXR1cm4gZnVuY3Rpb24oZWwpIHtcbiAgICAgIGlmICghZWwuaHJlZikgcmV0dXJuO1xuXG4gICAgICB2YXIgdXJsID0gd2luZG93LmxvY2F0aW9uICsgJydcbiAgICAgICAgLCBocmVmID0gZWwgKyAnJztcblxuICAgICAgcmV0dXJuIHRydW5jYXRlVXJsKHVybCwgcGFyYW0pID09PSB0cnVuY2F0ZVVybChocmVmLCBwYXJhbSk7XG4gICAgfTtcbiAgfSxcbiAgJzpkZWZhdWx0JzogZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gISFlbC5kZWZhdWx0U2VsZWN0ZWQ7XG4gIH0sXG4gICc6dmFsaWQnOiBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiBlbC53aWxsVmFsaWRhdGUgfHwgKGVsLnZhbGlkaXR5ICYmIGVsLnZhbGlkaXR5LnZhbGlkKTtcbiAgfSxcbiAgJzppbnZhbGlkJzogZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gIXNlbGVjdG9yc1snOnZhbGlkJ10oZWwpO1xuICB9LFxuICAnOmluLXJhbmdlJzogZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gZWwudmFsdWUgPiBlbC5taW4gJiYgZWwudmFsdWUgPD0gZWwubWF4O1xuICB9LFxuICAnOm91dC1vZi1yYW5nZSc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuICFzZWxlY3RvcnNbJzppbi1yYW5nZSddKGVsKTtcbiAgfSxcbiAgJzpyZXF1aXJlZCc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuICEhZWwucmVxdWlyZWQ7XG4gIH0sXG4gICc6b3B0aW9uYWwnOiBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiAhZWwucmVxdWlyZWQ7XG4gIH0sXG4gICc6cmVhZC1vbmx5JzogZnVuY3Rpb24oZWwpIHtcbiAgICBpZiAoZWwucmVhZE9ubHkpIHJldHVybiB0cnVlO1xuXG4gICAgdmFyIGF0dHIgPSBlbC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpXG4gICAgICAsIHByb3AgPSBlbC5jb250ZW50RWRpdGFibGVcbiAgICAgICwgbmFtZSA9IGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBuYW1lID0gbmFtZSAhPT0gJ2lucHV0JyAmJiBuYW1lICE9PSAndGV4dGFyZWEnO1xuXG4gICAgcmV0dXJuIChuYW1lIHx8IGVsLmRpc2FibGVkKSAmJiBhdHRyID09IG51bGwgJiYgcHJvcCAhPT0gJ3RydWUnO1xuICB9LFxuICAnOnJlYWQtd3JpdGUnOiBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiAhc2VsZWN0b3JzWyc6cmVhZC1vbmx5J10oZWwpO1xuICB9LFxuICAnOmhvdmVyJzogZnVuY3Rpb24oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCc6aG92ZXIgaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgfSxcbiAgJzphY3RpdmUnOiBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJzphY3RpdmUgaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgfSxcbiAgJzpsaW5rJzogZnVuY3Rpb24oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCc6bGluayBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICB9LFxuICAnOnZpc2l0ZWQnOiBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJzp2aXNpdGVkIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gIH0sXG4gICc6Y29sdW1uJzogZnVuY3Rpb24oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCc6Y29sdW1uIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gIH0sXG4gICc6bnRoLWNvbHVtbic6IGZ1bmN0aW9uKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignOm50aC1jb2x1bW4gaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgfSxcbiAgJzpudGgtbGFzdC1jb2x1bW4nOiBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJzpudGgtbGFzdC1jb2x1bW4gaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgfSxcbiAgJzpjdXJyZW50JzogZnVuY3Rpb24oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCc6Y3VycmVudCBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICB9LFxuICAnOnBhc3QnOiBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJzpwYXN0IGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gIH0sXG4gICc6ZnV0dXJlJzogZnVuY3Rpb24oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCc6ZnV0dXJlIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gIH0sXG4gIC8vIE5vbi1zdGFuZGFyZCwgZm9yIGNvbXBhdGliaWxpdHkgcHVycG9zZXMuXG4gICc6Y29udGFpbnMnOiBmdW5jdGlvbihwYXJhbSkge1xuICAgIHJldHVybiBmdW5jdGlvbihlbCkge1xuICAgICAgdmFyIHRleHQgPSBlbC5pbm5lclRleHQgfHwgZWwudGV4dENvbnRlbnQgfHwgZWwudmFsdWUgfHwgJyc7XG4gICAgICByZXR1cm4gISF+dGV4dC5pbmRleE9mKHBhcmFtKTtcbiAgICB9O1xuICB9LFxuICAnOmhhcyc6IGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsKSB7XG4gICAgICByZXR1cm4gemVzdChwYXJhbSwgZWwpLmxlbmd0aCA+IDA7XG4gICAgfTtcbiAgfVxuICAvLyBQb3RlbnRpYWxseSBhZGQgbW9yZSBwc2V1ZG8gc2VsZWN0b3JzIGZvclxuICAvLyBjb21wYXRpYmlsaXR5IHdpdGggc2l6emxlIGFuZCBtb3N0IG90aGVyXG4gIC8vIHNlbGVjdG9yIGVuZ2luZXMgKD8pLlxufTtcblxuLyoqXG4gKiBBdHRyaWJ1dGUgT3BlcmF0b3JzXG4gKi9cblxudmFyIG9wZXJhdG9ycyA9IHtcbiAgJy0nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgJz0nOiBmdW5jdGlvbihhdHRyLCB2YWwpIHtcbiAgICByZXR1cm4gYXR0ciA9PT0gdmFsO1xuICB9LFxuICAnKj0nOiBmdW5jdGlvbihhdHRyLCB2YWwpIHtcbiAgICByZXR1cm4gYXR0ci5pbmRleE9mKHZhbCkgIT09IC0xO1xuICB9LFxuICAnfj0nOiBmdW5jdGlvbihhdHRyLCB2YWwpIHtcbiAgICB2YXIgaSA9IGF0dHIuaW5kZXhPZih2YWwpXG4gICAgICAsIGZcbiAgICAgICwgbDtcblxuICAgIGlmIChpID09PSAtMSkgcmV0dXJuO1xuICAgIGYgPSBhdHRyW2kgLSAxXTtcbiAgICBsID0gYXR0cltpICsgdmFsLmxlbmd0aF07XG5cbiAgICByZXR1cm4gKCFmIHx8IGYgPT09ICcgJykgJiYgKCFsIHx8IGwgPT09ICcgJyk7XG4gIH0sXG4gICd8PSc6IGZ1bmN0aW9uKGF0dHIsIHZhbCkge1xuICAgIHZhciBpID0gYXR0ci5pbmRleE9mKHZhbClcbiAgICAgICwgbDtcblxuICAgIGlmIChpICE9PSAwKSByZXR1cm47XG4gICAgbCA9IGF0dHJbaSArIHZhbC5sZW5ndGhdO1xuXG4gICAgcmV0dXJuIGwgPT09ICctJyB8fCAhbDtcbiAgfSxcbiAgJ149JzogZnVuY3Rpb24oYXR0ciwgdmFsKSB7XG4gICAgcmV0dXJuIGF0dHIuaW5kZXhPZih2YWwpID09PSAwO1xuICB9LFxuICAnJD0nOiBmdW5jdGlvbihhdHRyLCB2YWwpIHtcbiAgICByZXR1cm4gYXR0ci5pbmRleE9mKHZhbCkgKyB2YWwubGVuZ3RoID09PSBhdHRyLmxlbmd0aDtcbiAgfSxcbiAgLy8gbm9uLXN0YW5kYXJkXG4gICchPSc6IGZ1bmN0aW9uKGF0dHIsIHZhbCkge1xuICAgIHJldHVybiBhdHRyICE9PSB2YWw7XG4gIH1cbn07XG5cbi8qKlxuICogQ29tYmluYXRvciBMb2dpY1xuICovXG5cbnZhciBjb21iaW5hdG9ycyA9IHtcbiAgJyAnOiBmdW5jdGlvbih0ZXN0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsKSB7XG4gICAgICB3aGlsZSAoZWwgPSBlbC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGlmICh0ZXN0KGVsKSkgcmV0dXJuIGVsO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG4gICc+JzogZnVuY3Rpb24odGVzdCkge1xuICAgIHJldHVybiBmdW5jdGlvbihlbCkge1xuICAgICAgcmV0dXJuIHRlc3QoZWwgPSBlbC5wYXJlbnROb2RlKSAmJiBlbDtcbiAgICB9O1xuICB9LFxuICAnKyc6IGZ1bmN0aW9uKHRlc3QpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZWwpIHtcbiAgICAgIHJldHVybiB0ZXN0KGVsID0gcHJldihlbCkpICYmIGVsO1xuICAgIH07XG4gIH0sXG4gICd+JzogZnVuY3Rpb24odGVzdCkge1xuICAgIHJldHVybiBmdW5jdGlvbihlbCkge1xuICAgICAgd2hpbGUgKGVsID0gcHJldihlbCkpIHtcbiAgICAgICAgaWYgKHRlc3QoZWwpKSByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgJ25vb3AnOiBmdW5jdGlvbih0ZXN0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsKSB7XG4gICAgICByZXR1cm4gdGVzdChlbCkgJiYgZWw7XG4gICAgfTtcbiAgfSxcbiAgJ3JlZic6IGZ1bmN0aW9uKHRlc3QsIG5hbWUpIHtcbiAgICB2YXIgbm9kZTtcblxuICAgIGZ1bmN0aW9uIHJlZihlbCkge1xuICAgICAgdmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnRcbiAgICAgICAgLCBub2RlcyA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpXG4gICAgICAgICwgaSA9IG5vZGVzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChyZWYudGVzdChlbCkpIHtcbiAgICAgICAgICBub2RlID0gbnVsbDtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBub2RlID0gbnVsbDtcbiAgICB9XG5cbiAgICByZWYuY29tYmluYXRvciA9IGZ1bmN0aW9uKGVsKSB7XG4gICAgICBpZiAoIW5vZGUgfHwgIW5vZGUuZ2V0QXR0cmlidXRlKSByZXR1cm47XG5cbiAgICAgIHZhciBhdHRyID0gbm9kZS5nZXRBdHRyaWJ1dGUobmFtZSkgfHwgJyc7XG4gICAgICBpZiAoYXR0clswXSA9PT0gJyMnKSBhdHRyID0gYXR0ci5zdWJzdHJpbmcoMSk7XG5cbiAgICAgIGlmIChhdHRyID09PSBlbC5pZCAmJiB0ZXN0KG5vZGUpKSB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gcmVmO1xuICB9XG59O1xuXG4vKipcbiAqIEdyYW1tYXJcbiAqL1xuXG52YXIgcnVsZXMgPSB7XG4gIHFuYW1lOiAvXiAqKFtcXHdcXC1dK3xcXCopLyxcbiAgc2ltcGxlOiAvXig/OihbLiNdW1xcd1xcLV0rKXxwc2V1ZG98YXR0cikvLFxuICByZWY6IC9eICpcXC8oW1xcd1xcLV0rKVxcLyAqLyxcbiAgY29tYmluYXRvcjogL14oPzogKyhbXiBcXHcqXSkgK3woICkrfChbXiBcXHcqXSkpKD8hICokKS8sXG4gIGF0dHI6IC9eXFxbKFtcXHdcXC1dKykoPzooW15cXHddPz0pKGluc2lkZSkpP1xcXS8sXG4gIHBzZXVkbzogL14oOltcXHdcXC1dKykoPzpcXCgoaW5zaWRlKVxcKSk/LyxcbiAgaW5zaWRlOiAvKD86XCIoPzpcXFxcXCJ8W15cIl0pKlwifCcoPzpcXFxcJ3xbXiddKSonfDxbXlwiJz5dKj58XFxcXFtcIic+XXxbXlwiJz5dKSovXG59O1xuXG5ydWxlcy5pbnNpZGUgPSByZXBsYWNlKHJ1bGVzLmluc2lkZSwgJ1teXCJcXCc+XSonLCBydWxlcy5pbnNpZGUpO1xucnVsZXMuYXR0ciA9IHJlcGxhY2UocnVsZXMuYXR0ciwgJ2luc2lkZScsIG1ha2VJbnNpZGUoJ1xcXFxbJywgJ1xcXFxdJykpO1xucnVsZXMucHNldWRvID0gcmVwbGFjZShydWxlcy5wc2V1ZG8sICdpbnNpZGUnLCBtYWtlSW5zaWRlKCdcXFxcKCcsICdcXFxcKScpKTtcbnJ1bGVzLnNpbXBsZSA9IHJlcGxhY2UocnVsZXMuc2ltcGxlLCAncHNldWRvJywgcnVsZXMucHNldWRvKTtcbnJ1bGVzLnNpbXBsZSA9IHJlcGxhY2UocnVsZXMuc2ltcGxlLCAnYXR0cicsIHJ1bGVzLmF0dHIpO1xuXG4vKipcbiAqIENvbXBpbGluZ1xuICovXG5cbnZhciBjb21waWxlID0gZnVuY3Rpb24oc2VsKSB7XG4gIHZhciBzZWwgPSBzZWwucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG4gICAgLCB0ZXN0XG4gICAgLCBmaWx0ZXIgPSBbXVxuICAgICwgYnVmZiA9IFtdXG4gICAgLCBzdWJqZWN0XG4gICAgLCBxbmFtZVxuICAgICwgY2FwXG4gICAgLCBvcFxuICAgICwgcmVmO1xuXG4gIHdoaWxlIChzZWwpIHtcbiAgICBpZiAoY2FwID0gcnVsZXMucW5hbWUuZXhlYyhzZWwpKSB7XG4gICAgICBzZWwgPSBzZWwuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgcW5hbWUgPSBjYXBbMV07XG4gICAgICBidWZmLnB1c2godG9rKHFuYW1lLCB0cnVlKSk7XG4gICAgfSBlbHNlIGlmIChjYXAgPSBydWxlcy5zaW1wbGUuZXhlYyhzZWwpKSB7XG4gICAgICBzZWwgPSBzZWwuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgcW5hbWUgPSAnKic7XG4gICAgICBidWZmLnB1c2godG9rKHFuYW1lLCB0cnVlKSk7XG4gICAgICBidWZmLnB1c2godG9rKGNhcCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2VsZWN0b3IuJyk7XG4gICAgfVxuXG4gICAgd2hpbGUgKGNhcCA9IHJ1bGVzLnNpbXBsZS5leGVjKHNlbCkpIHtcbiAgICAgIHNlbCA9IHNlbC5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBidWZmLnB1c2godG9rKGNhcCkpO1xuICAgIH1cblxuICAgIGlmIChzZWxbMF0gPT09ICchJykge1xuICAgICAgc2VsID0gc2VsLnN1YnN0cmluZygxKTtcbiAgICAgIHN1YmplY3QgPSBtYWtlU3ViamVjdCgpO1xuICAgICAgc3ViamVjdC5xbmFtZSA9IHFuYW1lO1xuICAgICAgYnVmZi5wdXNoKHN1YmplY3Quc2ltcGxlKTtcbiAgICB9XG5cbiAgICBpZiAoY2FwID0gcnVsZXMucmVmLmV4ZWMoc2VsKSkge1xuICAgICAgc2VsID0gc2VsLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHJlZiA9IGNvbWJpbmF0b3JzLnJlZihtYWtlU2ltcGxlKGJ1ZmYpLCBjYXBbMV0pO1xuICAgICAgZmlsdGVyLnB1c2gocmVmLmNvbWJpbmF0b3IpO1xuICAgICAgYnVmZiA9IFtdO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGNhcCA9IHJ1bGVzLmNvbWJpbmF0b3IuZXhlYyhzZWwpKSB7XG4gICAgICBzZWwgPSBzZWwuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3AgPSBjYXBbMV0gfHwgY2FwWzJdIHx8IGNhcFszXTtcbiAgICAgIGlmIChvcCA9PT0gJywnKSB7XG4gICAgICAgIGZpbHRlci5wdXNoKGNvbWJpbmF0b3JzLm5vb3AobWFrZVNpbXBsZShidWZmKSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb3AgPSAnbm9vcCc7XG4gICAgfVxuXG4gICAgZmlsdGVyLnB1c2goY29tYmluYXRvcnNbb3BdKG1ha2VTaW1wbGUoYnVmZikpKTtcbiAgICBidWZmID0gW107XG4gIH1cblxuICB0ZXN0ID0gbWFrZVRlc3QoZmlsdGVyKTtcbiAgdGVzdC5xbmFtZSA9IHFuYW1lO1xuICB0ZXN0LnNlbCA9IHNlbDtcblxuICBpZiAoc3ViamVjdCkge1xuICAgIHN1YmplY3QubG5hbWUgPSB0ZXN0LnFuYW1lO1xuXG4gICAgc3ViamVjdC50ZXN0ID0gdGVzdDtcbiAgICBzdWJqZWN0LnFuYW1lID0gc3ViamVjdC5xbmFtZTtcbiAgICBzdWJqZWN0LnNlbCA9IHRlc3Quc2VsO1xuICAgIHRlc3QgPSBzdWJqZWN0O1xuICB9XG5cbiAgaWYgKHJlZikge1xuICAgIHJlZi50ZXN0ID0gdGVzdDtcbiAgICByZWYucW5hbWUgPSB0ZXN0LnFuYW1lO1xuICAgIHJlZi5zZWwgPSB0ZXN0LnNlbDtcbiAgICB0ZXN0ID0gcmVmO1xuICB9XG5cbiAgcmV0dXJuIHRlc3Q7XG59O1xuXG52YXIgdG9rID0gZnVuY3Rpb24oY2FwLCBxbmFtZSkge1xuICAvLyBxbmFtZVxuICBpZiAocW5hbWUpIHtcbiAgICByZXR1cm4gY2FwID09PSAnKidcbiAgICAgID8gc2VsZWN0b3JzWycqJ11cbiAgICAgIDogc2VsZWN0b3JzLnR5cGUoY2FwKTtcbiAgfVxuXG4gIC8vIGNsYXNzL2lkXG4gIGlmIChjYXBbMV0pIHtcbiAgICByZXR1cm4gY2FwWzFdWzBdID09PSAnLidcbiAgICAgID8gc2VsZWN0b3JzLmF0dHIoJ2NsYXNzJywgJ349JywgY2FwWzFdLnN1YnN0cmluZygxKSlcbiAgICAgIDogc2VsZWN0b3JzLmF0dHIoJ2lkJywgJz0nLCBjYXBbMV0uc3Vic3RyaW5nKDEpKTtcbiAgfVxuXG4gIC8vIHBzZXVkby1uYW1lXG4gIC8vIGluc2lkZS1wc2V1ZG9cbiAgaWYgKGNhcFsyXSkge1xuICAgIHJldHVybiBjYXBbM11cbiAgICAgID8gc2VsZWN0b3JzW2NhcFsyXV0odW5xdW90ZShjYXBbM10pKVxuICAgICAgOiBzZWxlY3RvcnNbY2FwWzJdXTtcbiAgfVxuXG4gIC8vIGF0dHIgbmFtZVxuICAvLyBhdHRyIG9wXG4gIC8vIGF0dHIgdmFsdWVcbiAgaWYgKGNhcFs0XSkge1xuICAgIHZhciBpO1xuICAgIGlmIChjYXBbNl0pIHtcbiAgICAgIGkgPSBjYXBbNl0ubGVuZ3RoO1xuICAgICAgY2FwWzZdID0gY2FwWzZdLnJlcGxhY2UoLyAraSQvLCAnJyk7XG4gICAgICBpID0gaSA+IGNhcFs2XS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RvcnMuYXR0cihjYXBbNF0sIGNhcFs1XSB8fCAnLScsIHVucXVvdGUoY2FwWzZdKSwgaSk7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gU2VsZWN0b3IuJyk7XG59O1xuXG52YXIgbWFrZVNpbXBsZSA9IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgdmFyIGwgPSBmdW5jLmxlbmd0aFxuICAgICwgaTtcblxuICAvLyBQb3RlbnRpYWxseSBtYWtlIHN1cmVcbiAgLy8gYGVsYCBpcyB0cnV0aHkuXG4gIGlmIChsIDwgMikgcmV0dXJuIGZ1bmNbMF07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGVsKSB7XG4gICAgaWYgKCFlbCkgcmV0dXJuO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICghZnVuY1tpXShlbCkpIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59O1xuXG52YXIgbWFrZVRlc3QgPSBmdW5jdGlvbihmdW5jKSB7XG4gIGlmIChmdW5jLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZWwpIHtcbiAgICAgIHJldHVybiAhIWZ1bmNbMF0oZWwpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKGVsKSB7XG4gICAgdmFyIGkgPSBmdW5jLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZiAoIShlbCA9IGZ1bmNbaV0oZWwpKSkgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn07XG5cbnZhciBtYWtlU3ViamVjdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgdGFyZ2V0O1xuXG4gIGZ1bmN0aW9uIHN1YmplY3QoZWwpIHtcbiAgICB2YXIgbm9kZSA9IGVsLm93bmVyRG9jdW1lbnRcbiAgICAgICwgc2NvcGUgPSBub2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKHN1YmplY3QubG5hbWUpXG4gICAgICAsIGkgPSBzY29wZS5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZiAoc3ViamVjdC50ZXN0KHNjb3BlW2ldKSAmJiB0YXJnZXQgPT09IGVsKSB7XG4gICAgICAgIHRhcmdldCA9IG51bGw7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRhcmdldCA9IG51bGw7XG4gIH1cblxuICBzdWJqZWN0LnNpbXBsZSA9IGZ1bmN0aW9uKGVsKSB7XG4gICAgdGFyZ2V0ID0gZWw7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHN1YmplY3Q7XG59O1xuXG52YXIgY29tcGlsZUdyb3VwID0gZnVuY3Rpb24oc2VsKSB7XG4gIHZhciB0ZXN0ID0gY29tcGlsZShzZWwpXG4gICAgLCB0ZXN0cyA9IFsgdGVzdCBdO1xuXG4gIHdoaWxlICh0ZXN0LnNlbCkge1xuICAgIHRlc3QgPSBjb21waWxlKHRlc3Quc2VsKTtcbiAgICB0ZXN0cy5wdXNoKHRlc3QpO1xuICB9XG5cbiAgaWYgKHRlc3RzLmxlbmd0aCA8IDIpIHJldHVybiB0ZXN0O1xuXG4gIHJldHVybiBmdW5jdGlvbihlbCkge1xuICAgIHZhciBsID0gdGVzdHMubGVuZ3RoXG4gICAgICAsIGkgPSAwO1xuXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh0ZXN0c1tpXShlbCkpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcbn07XG5cbi8qKlxuICogU2VsZWN0aW9uXG4gKi9cblxudmFyIGZpbmQgPSBmdW5jdGlvbihzZWwsIG5vZGUpIHtcbiAgdmFyIHJlc3VsdHMgPSBbXVxuICAgICwgdGVzdCA9IGNvbXBpbGUoc2VsKVxuICAgICwgc2NvcGUgPSBub2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKHRlc3QucW5hbWUpXG4gICAgLCBpID0gMFxuICAgICwgZWw7XG5cbiAgd2hpbGUgKGVsID0gc2NvcGVbaSsrXSkge1xuICAgIGlmICh0ZXN0KGVsKSkgcmVzdWx0cy5wdXNoKGVsKTtcbiAgfVxuXG4gIGlmICh0ZXN0LnNlbCkge1xuICAgIHdoaWxlICh0ZXN0LnNlbCkge1xuICAgICAgdGVzdCA9IGNvbXBpbGUodGVzdC5zZWwpO1xuICAgICAgc2NvcGUgPSBub2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKHRlc3QucW5hbWUpO1xuICAgICAgaSA9IDA7XG4gICAgICB3aGlsZSAoZWwgPSBzY29wZVtpKytdKSB7XG4gICAgICAgIGlmICh0ZXN0KGVsKSAmJiAhfmluZGV4T2YuY2FsbChyZXN1bHRzLCBlbCkpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goZWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdHMuc29ydChvcmRlcik7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0cztcbn07XG5cbi8qKlxuICogTmF0aXZlXG4gKi9cblxudmFyIHNlbGVjdCA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHNsaWNlID0gKGZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnemVzdCcpKTtcbiAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBlID0gbnVsbDtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGEgPSBbXSwgaSA9IDAsIGwgPSB0aGlzLmxlbmd0aDtcbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIGEucHVzaCh0aGlzW2ldKTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9O1xuICAgIH1cbiAgfSkoKTtcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCkge1xuICAgIHJldHVybiBmdW5jdGlvbihzZWwsIG5vZGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBzbGljZS5jYWxsKG5vZGUucXVlcnlTZWxlY3RvckFsbChzZWwpKTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmluZChzZWwsIG5vZGUpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oc2VsLCBub2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChzZWxbMF0gPT09ICcjJyAmJiAvXiNbXFx3XFwtXSskLy50ZXN0KHNlbCkpIHtcbiAgICAgICAgcmV0dXJuIFtub2RlLmdldEVsZW1lbnRCeUlkKHNlbC5zdWJzdHJpbmcoMSkpXTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWxbMF0gPT09ICcuJyAmJiAvXlxcLltcXHdcXC1dKyQvLnRlc3Qoc2VsKSkge1xuICAgICAgICBzZWwgPSBub2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2VsLnN1YnN0cmluZygxKSk7XG4gICAgICAgIHJldHVybiBzbGljZS5jYWxsKHNlbCk7XG4gICAgICB9XG4gICAgICBpZiAoL15bXFx3XFwtXSskLy50ZXN0KHNlbCkpIHtcbiAgICAgICAgcmV0dXJuIHNsaWNlLmNhbGwobm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZShzZWwpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIDtcbiAgICB9XG4gICAgcmV0dXJuIGZpbmQoc2VsLCBub2RlKTtcbiAgfTtcbn0pKCk7XG5cbi8qKlxuICogWmVzdFxuICovXG5cbnZhciB6ZXN0ID0gZnVuY3Rpb24oc2VsLCBub2RlKSB7XG4gIHRyeSB7XG4gICAgc2VsID0gc2VsZWN0KHNlbCwgbm9kZSB8fCBkb2N1bWVudCk7XG4gIH0gY2F0Y2goZSkge1xuICAgIGlmICh3aW5kb3cuWkVTVF9ERUJVRykge1xuICAgICAgY29uc29sZS5sb2coZS5zdGFjayB8fCBlICsgJycpO1xuICAgIH1cbiAgICBzZWwgPSBbXTtcbiAgfVxuICByZXR1cm4gc2VsO1xufTtcblxuLyoqXG4gKiBFeHBvc2VcbiAqL1xuXG56ZXN0LnNlbGVjdG9ycyA9IHNlbGVjdG9ycztcbnplc3Qub3BlcmF0b3JzID0gb3BlcmF0b3JzO1xuemVzdC5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuemVzdC5jb21waWxlID0gY29tcGlsZUdyb3VwO1xuXG56ZXN0Lm1hdGNoZXMgPSBmdW5jdGlvbihlbCwgc2VsKSB7XG4gIHJldHVybiAhIWNvbXBpbGVHcm91cChzZWwpKGVsKTtcbn07XG5cbnplc3QuY2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKGNvbXBpbGUucmF3KSByZXR1cm47XG5cbiAgdmFyIHJhdyA9IGNvbXBpbGVcbiAgICAsIGNhY2hlID0ge307XG5cbiAgY29tcGlsZSA9IGZ1bmN0aW9uKHNlbCkge1xuICAgIHJldHVybiBjYWNoZVtzZWxdXG4gICAgICB8fCAoY2FjaGVbc2VsXSA9IHJhdyhzZWwpKTtcbiAgfTtcblxuICBjb21waWxlLnJhdyA9IHJhdztcbiAgemVzdC5fY2FjaGUgPSBjYWNoZTtcbn07XG5cbnplc3Qubm9DYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIWNvbXBpbGUucmF3KSByZXR1cm47XG4gIGNvbXBpbGUgPSBjb21waWxlLnJhdztcbiAgZGVsZXRlIHplc3QuX2NhY2hlO1xufTtcblxuemVzdC5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKSB7XG4gIHdpbmRvdy56ZXN0ID0gb2xkO1xuICByZXR1cm4gemVzdDtcbn07XG5cbnplc3Qubm9OYXRpdmUgPSBmdW5jdGlvbigpIHtcbiAgc2VsZWN0ID0gZmluZDtcbn07XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHplc3Q7XG59IGVsc2Uge1xuICB0aGlzLnplc3QgPSB6ZXN0O1xufVxuXG5pZiAod2luZG93LlpFU1RfREVCVUcpIHtcbiAgemVzdC5ub05hdGl2ZSgpO1xufSBlbHNlIHtcbiAgemVzdC5jYWNoZSgpO1xufVxuXG59KS5jYWxsKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcyB8fCAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpO1xufSgpKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHN0b3J5IGZyb20gJy4vdXRpbC9hY3Rpdml0eS5qcydcbmltcG9ydCBjYXRlZyBmcm9tICcuL3V0aWwvY2F0LmpzJ1xuXG5jb25zdCAkID0gcmVxdWlyZSgnemVzdCcpIC8vIGRvbSBzZWxlY3RvciBlbmdpbmVcbmNvbnN0IGFuaW1lID0gcmVxdWlyZSgnYW5pbWVqcycpXG5cbi8vIERPTVxuY29uc3QgY29udGFpbmVyID0gJCgnI2FjdGl2aXRpZXNfX2J5LWNhdCcpWzBdXG5jb25zdCBjYXJkcyA9ICQoJy5jYXRlZ29yeS1jYXJkJylcbmNvbnN0IGRyaWxsZG93biA9ICQoJyNkcmlsbGRvd24nKVswXVxuY29uc3QgYWN0aXZpdHkgPSAkKCcjYWN0aXZpdHknKVswXVxuY29uc3QgY2F0TWV0YSA9ICQoJyNjYXQtbWV0YScpWzBdXG5cbmNvbnN0IGFqYXggPSBheGlvcy5jcmVhdGUoeyAvLyBheGlvcywgb3VyIEFKQVggbGliXG5cdGJhc2VVUkw6ICdodHRwczovL2RvZS5jb25jb3JkaWEuY2EvY3NscC93cC1qc29uL3dwL3YyLydcbn0pXG5cbmNvbnN0IHN0YXRlID0ge1xuXHRkcmlsbExldmVsOiAwLFxuXHRhY3RpdmU6ICdub25lJyxcblx0Y2F0ZWdvcnlEYXRhOiB7fSxcblx0YWN0aXZpdHlEYXRhOiB7fSxcblxuXHRzZXRMZXZlbDogKGxldmVsLCBvcHRpb25zKSA9PiB7XG5cdFx0c3RhdGUuZHJpbGxMZXZlbCA9IGxldmVsXG5cblx0XHRsZXQgb3B0cyA9IG9wdGlvbnMgfHwge2RpcmVjdGlvbjogJyd9XG5cblx0XHRzd2l0Y2gobGV2ZWwpIHtcblx0XHRcdC8vIGludHJvIHNjcmVlbiwgY2F0ZWdvcnkgc2VsZWN0aW9uXG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRcdGRyaWxsZG93bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZlJywgJ25vbmUnKVxuXHRcdFx0XHRjb250YWluZXIuY2xhc3NOYW1lID0gJ3NlbGVjdGVkJ1xuXHRcdFx0XHRjYXRNZXRhLmNsYXNzTmFtZSA9ICdoaWRkZW4nXG5cdFx0XHRcdGFuaW1lKHtcblx0XHRcdFx0XHR0YXJnZXRzOiAnLmFjdGl2aXRpZXMtbWV0YSBwJyxcblx0XHRcdFx0XHRvcGFjaXR5OiBbMCwgMV0sXG5cdFx0XHRcdFx0ZHVyYXRpb246IDUwMCxcblx0XHRcdFx0XHRlYXNpbmc6ICdlYXNlT3V0RXhwbycsXG5cdFx0XHRcdFx0cmV2ZXJzZTogb3B0cy5kaXJlY3Rpb24sXG5cdFx0XHRcdFx0Y29tcGxldGU6ICgpID0+IHtcblx0XHRcdFx0XHRcdGFuaW1lKHtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0czogY29udGFpbmVyLFxuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiBbMCwgMV0sXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAsXG5cdFx0XHRcdFx0XHRcdHJldmVyc2U6IG9wdHMuZGlyZWN0aW9uXG5cdFx0XHRcdFx0XHR9KVxuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Ly8gQWN0aXZpdHkgbGlzdFxuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRpZiAob3B0cy5kaXJlY3Rpb24gPT0gJ3JldmVyc2UnKSB7XG5cdFx0XHRcdFx0YW5pbWUoe1xuXHRcdFx0XHRcdFx0dGFyZ2V0czogYWN0aXZpdHksXG5cdFx0XHRcdFx0XHRvcGFjaXR5OiBbMSwwXSxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAsXG5cdFx0XHRcdFx0XHR0cmFuc2xhdGVZOiB7IHZhbHVlOiA0MCwgZHVyYXRpb246IDQwMCB9LFxuXHRcdFx0XHRcdFx0ZWFzaW5nOiAnZWFzZU91dEV4cG8nLFxuXHRcdFx0XHRcdFx0Y29tcGxldGU6ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0YWN0aXZpdHkuY2xhc3NOYW1lID0gJ2hpZGRlbidcblx0XHRcdFx0XHRcdFx0YW5pbWUoe1xuXHRcdFx0XHRcdFx0XHRcdHRhcmdldHM6ICcjYWN0aXZpdGllc19fYnktY2F0Jyxcblx0XHRcdFx0XHRcdFx0XHRkZWxheTogMTAwLFxuXHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IFsxLCAwXSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogNjAwLFxuXHRcdFx0XHRcdFx0XHRcdHJldmVyc2U6IG9wdHMuZGlyZWN0aW9uLFxuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZHJpbGxkb3duLnNldEF0dHJpYnV0ZSgnZGF0YS1hY3RpdmUnLCAnY2F0Jylcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRhaW5lci5jbGFzc05hbWUgPSAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2F0TWV0YS5jbGFzc05hbWUgPSAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZpdHkuY2xhc3NOYW1lID0gJ2hpZGRlbidcblx0XHRcdFx0XHRcdFx0XHR9XG5cdCAgXHRcdFx0XHRcdH0pXG4gIFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRhbmltZSh7XG5cdFx0XHR0YXJnZXRzOiAnLmFjdGl2aXRpZXMtbWV0YSBwJyxcblx0XHRcdG9wYWNpdHk6IFsxLCAwXSxcblx0XHRcdGR1cmF0aW9uOiA0MDAsXG5cdFx0XHRyZXZlcnNlOiBvcHRzLmRpcmVjdGlvbixcblx0XHRcdGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcblx0XHRcdGNvbXBsZXRlOiAoKSA9PiB7XG5cdCAgICAgIGFuaW1lKHtcblx0XHRcdFx0XHR0YXJnZXRzOiAnI2FjdGl2aXRpZXNfX2J5LWNhdCcsXG5cdFx0XHRcdFx0ZGVsYXk6IDEwMCxcblx0XHRcdFx0XHRvcGFjaXR5OiBbMSwgMF0sXG5cdFx0XHRcdFx0ZHVyYXRpb246IDUwMCxcblx0XHRcdFx0XHRyZXZlcnNlOiBvcHRzLmRpcmVjdGlvbixcblx0XHRcdFx0XHRlYXNpbmc6ICdlYXNlT3V0RXhwbycsXG5cdFx0XHRcdFx0Y29tcGxldGU6ICgpID0+IHtcblx0XHRcdFx0XHRcdGRyaWxsZG93bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZlJywgJ2NhdCcpXG5cdFx0XHRcdFx0XHRjb250YWluZXIuY2xhc3NOYW1lID0gJydcblx0XHRcdFx0XHRcdGNhdE1ldGEuY2xhc3NOYW1lID0gJydcblx0XHRcdFx0XHRcdGFjdGl2aXR5LmNsYXNzTmFtZSA9ICdoaWRkZW4nXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHQgIFx0fVxuXHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdC8vIEFjdGl2aXR5XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdGFjdGl2aXR5LmNsYXNzTmFtZSA9ICcnXG5cdFx0XHRcdGNhdE1ldGEuY2xhc3NOYW1lID0gJ2hpZGRlbidcblx0XHRcdFx0YW5pbWUoe1xuXHRcdFx0XHRcdHRhcmdldHM6IGFjdGl2aXR5LFxuXHRcdFx0XHRcdG9wYWNpdHk6IFswLCAxXSxcblx0XHRcdFx0XHRkdXJhdGlvbjogNDAwLFxuXHRcdFx0XHRcdHRyYW5zbGF0ZVk6IHsgdmFsdWU6IC00MCwgZHVyYXRpb246IDgwMCB9LFxuXHRcdFx0XHRcdGVhc2luZzogJ2Vhc2VJbkV4cG8nXG5cdFx0XHRcdH0pXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fSxcblxuXHRnZXRCcmVhZGNydW1iOiAoKSA9PiB7XG5cdFx0bGV0IGJhc2UgPSAnJ1xuXHRcdGxldCBjYXQgPSAnJ1xuXG5cdFx0Ly8gYnJlYWtzIGludGVudGlvbmFsbHkgb21taXRlZCBmb3Igc21hcnQgZm9sbG93LXRocm91Z2hcblx0XHQvLyBkZXBlbmRpbmcgb24gbGV2ZWwsIHRoZSBzdHJpbmcgd2lsbCB1cGRhdGUgcmVsZXZhbnQgcGFydHNcblx0XHRzd2l0Y2goc3RhdGUuZHJpbGxMZXZlbCkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHRyZXR1cm4gbnVsbFxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0Y2F0ID0gJyA+ICcgKyBzdGF0ZS5hY3Rpdml0eURhdGEubmFtZVxuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRiYXNlID0gJ0J5IGNhdGVnb3J5ID4gJyArIHN0YXRlLmNhdGVnb3J5RGF0YS5uYW1lXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4gYmFzZSArIGNhdFxuXHR9LFxuXG5cdGJhY2tvbmU6ICgpID0+IHN0YXRlLnNldExldmVsKHN0YXRlLmRyaWxsTGV2ZWwgLSAxLCB7ZGlyZWN0aW9uOiAncmV2ZXJzZSd9KSxcblx0aGlkZW1ldGE6ICgpID0+ICgnLmFjdGl2aXR5LW1ldGEnKVswXS5jbGFzc05hbWUgPSAnc3Rvcmllcy1tZXRhIGhpZGRlbidcblxufVxuXG5cbmZ1bmN0aW9uIGluaXQgKCkge1xuXHRzdGF0ZS5zZXRMZXZlbCgwKSAvLyByZXNldHMgY2xhc3NlcyBqdXN0IGluIGNhc2Vcblx0Y2FyZHMuZm9yRWFjaChpdGVtID0+IHtcblx0XHRvbignY2xpY2snLCBpdGVtLCBldmVudCA9PiB7XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuXHRcdFx0bGV0IElEID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2F0JylcblxuXHRcdFx0aWYgKCFjYXRlZy5pc0NhY2hlZChJRCkpIHtcblx0XHRcdFx0Y2F0ZWcuZ2V0KElELCBhamF4LCBkYXRhID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnUmV0cmlldmVkIGxpdmUgZGF0YTogSUQgIycgKyBJRClcblx0XHRcdFx0XHRzdGF0ZS5jYXRlZ29yeURhdGEgPSBkYXRhXG5cdFx0XHRcdFx0Y2F0ZWcuc2V0RE9NKGRhdGEsIHN0YXRlLCBzdG9yeSwgYWpheClcblx0XHRcdFx0fSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBkYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWJyYV9hYycrSUQpKVxuXHRcdFx0XHRjb25zb2xlLmxvZygnUmV0cmlldmVkIGNhY2hlZCBkYXRhOiBJRCAjJyArIElEKVxuXHRcdFx0XHRzdGF0ZS5jYXRlZ29yeURhdGEgPSBkYXRhXG5cdFx0XHRcdGNhdGVnLnNldERPTShkYXRhLCBzdGF0ZSwgc3RvcnksIGFqYXgpXG5cdFx0XHR9XG5cdFx0XHRzdGF0ZS5zZXRMZXZlbCgxKVxuXHRcdH0pXG5cdH0pXG5cblx0b24oJ2NsaWNrJywgJyNiYWNrLWJ1dHRvbicsICgpID0+IHN0YXRlLmJhY2tvbmUoKSApXG59XG5vbignRE9NQ29udGVudExvYWRlZCcsIHdpbmRvdywgaW5pdCgpKVxuXG5cbmZ1bmN0aW9uIG9uKGV2ZW50LCBlbGVtZW50LCBjYiwgcGFzc2l2ZSkge1xuXHR2YXIgZWwgPSAkKGVsZW1lbnQpWzBdIHx8IGVsZW1lbnRcblx0ZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2IsIHBhc3NpdmUpXG59IiwiY29uc3QgJCA9IHJlcXVpcmUoJ3plc3QnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Ly8gU3RvcnkgRnVuY3Rpb25zXG5cdGdldFJlbGF0ZWRTdG9yaWVzOiBmdW5jdGlvbiAocXVlcnksIGNhbGxiYWNrLCBheGlvcykge1xuXHRcdGF4aW9zLmdldChxdWVyeSkudGhlbihmdW5jdGlvbihyZXMpIHtcblx0XHRcdGNhbGxiYWNrKHJlcy5kYXRhKVxuXHRcdH0pLmNhdGNoKCdlcnJvcicsIGZ1bmN0aW9uIChlKSB7Y29uc29sZS53YXJuKGUpfSlcblx0fSxcblxuXHRzaG93U3Rvcnk6IGZ1bmN0aW9uIChkYXRhLCBzdGF0ZSwgYXhpb3MpIHtcblx0XHRzdGF0ZS5hY3Rpdml0eURhdGEubmFtZSA9IGRhdGEudGl0bGUucmVuZGVyZWRcblxuXHRcdCQoJyNhY3Rpdml0eS10aXRsZScpWzBdLmlubmVySFRNTCA9IGRhdGEudGl0bGUucmVuZGVyZWRcblx0XHQkKCcjYWN0aXZpdHkgaGVhZGVyIHNwYW4nKVswXS5pbm5lckhUTUwgPSBzdGF0ZS5nZXRCcmVhZGNydW1iKClcblxuXHRcdC8vIE92ZXJ2aWV3LCB0YWIgMSwgY29udGFpbnM6IG9iamVjdGl2ZSwgZ2ZhIHRpcHMsIGxldmVsc1xuXHRcdCQoJyNhLWRlc2MtYycpWzBdLmlubmVySFRNTCA9ICc8aDQ+T3ZlcnZpZXc8L2g0Pidcblx0XHRcdCsgZGF0YS5hY3Rpdml0eV9kZXNjcmlwdGlvbl9hY3Rpdml0eV9vYmplY3RpdmVcblx0XHQkKCcjYS1nZmEtYycpWzBdLmlubmVySFRNTCA9ICc8aDQ+R3JvdXAgRmFjaWxpdGF0aW9uIFRpcHM8L2g0Pidcblx0XHRcdCsgZGF0YS5hY3Rpdml0eV9kZXNjcmlwdGlvbl9hY3Rpdml0eV9nZmFcblx0XHQkKCcjYS1sZXZlbC1jJylbMF0uaW5uZXJIVE1MID0gJzxoND5MZXZlbHM8L2g0Pidcblx0XHRcdCsgZGF0YS5hY3Rpdml0eV9kZXNjcmlwdGlvbl9hY3Rpdml0eV9sZXZlbFxuXG5cdFx0Ly8gQWN0aXZpdHkgSW5zaWdodHNcblx0XHQvLyBjaGVjayBpZiBoYXMgaW5zaWdodHMsIGRpc3BsYXkgaW5zaWdodHM/XG5cdFx0JCgnI2EtaW5zaWdodHMtYycpWzBdLmlubmVySFRNTCA9ICc8aDQ+QWN0aXZpdHkgSW5zaWdodHM8L2g0Pidcblx0XHRcdCsgZGF0YS5hY3Rpdml0eV9pbnNpZ2h0c1xuXG5cdFx0Ly8gTGlua2VkIFN0b3JpZXMsIHRhYiAzXG5cdFx0dGhpcy5nZXRTdG9yaWVzSW5DYXQoZGF0YS5hY3Rpdml0eV9saW5rZWRfc3RvcmllcywgYXhpb3MpXG5cblx0XHQvLyBSZXNvdXJjZXMsIHRhYiA0XG5cdFx0bGV0IHJlc2NvbnRlbnQgPSAkKCcjYS1yZXNvdXJjZXMtYycpWzBdXG5cdFx0cmVzY29udGVudC5pbm5lckhUTUwgKz0gJzxoND5SZXNvdXJjZXM8L2g0Pidcblx0XHRpZiAoZGF0YS5hY3Rpdml0eV9yZXNvdXJjZXMgIT0gJycpIHtcblx0XHRcdHJlc2NvbnRlbnQuaW5uZXJIVE1MICs9IGRhdGEuYWN0aXZpdHlfcmVzb3VyY2VzXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc2NvbnRlbnQuaW5uZXJIVE1MICs9ICdUaGVyZSBhcmUgbm8gcmVzb3VyY2VzIGF2YWlsYWJsZSBmb3IgdGhpcyBhY3Rpdml0eSB5ZXQnXG5cdFx0fVxuXG5cdFx0JCgnI2FjdGl2aXR5LXZpZGVvLWNvbnRhaW5lcicpWzBdLmlubmVySFRNTCA9IHRoaXMubWFrZUVtYmVkTGluayhkYXRhLmFjdGl2aXR5X3ZpZGVvKVxuXHR9LFxuXG5cdG1ha2VUYWJDb250YWluZXIoKSB7XG5cdFx0Y29uc3QgdGFicyA9ICQoJy5hY3Rpdml0eV9fbmF2LnRhYnMgbGknKSAvLyBHZXQgYWxsIHRhYnNcblxuXHRcdHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuXHRcdFx0bGV0IGxpbmsgPSB0YWIuZmlyc3RDaGlsZFxuXG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXG5cdFx0XHRcdC8vIEdldCBsb2NhdGlvbiBvZiB0YWIncyBjb250ZW50IChocmVmID0+IGlkKVxuXHRcdFx0XHRsZXQgY29udGVudFRhYiA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJylcblxuXHRcdFx0XHQvLyBTZXQgb3RoZXIgdGFicyAmIG5hdiBsYWJlcyBhcyBpbmFjdGl2ZVxuXHRcdFx0XHQkKCcudGFicy1jb250ZW50IGRpdicpLmZvckVhY2goIHQgPT4gdC5jbGFzc05hbWUgPSAnJyApXG5cdFx0XHRcdCQoJy50YWJzIGxpJykuZm9yRWFjaCggbCA9PiBsLmNsYXNzTmFtZSA9ICcnIClcblxuXHRcdFx0XHQvLyBTZXQgc2VsZWN0ZWQgdGFiICYgbmF2IGl0ZW0gYWN0aXZlXG5cdFx0XHRcdHRhYi5jbGFzc05hbWUgPSAnYWN0aXZlJ1xuXHRcdFx0XHQkKGNvbnRlbnRUYWIpWzBdLmNsYXNzTmFtZSA9ICdhY3RpdmUnXG5cdFx0XHR9KTtcblx0XHR9KVxuXHR9LFxuXG5cdHNldEFjdGl2aXR5SWNvbiAocXVlcnksIGF4aW9zKSB7XG5cdFx0YXhpb3MuZ2V0KCdtZWRpYT9wYXJlbnQ9JyArIHF1ZXJ5KS50aGVuKChyZXMpID0+IHtcblx0XHRcdGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuXHRcdFx0XHRpY29uLnN0eWxlLm9wYWNpdHkgPSAwXG5cdFx0XHRcdGljb24ub25sb2FkID0gKCkgPT4geyAkKCcjYWN0aXZpdHktaWNvbiBpbWcnKVswXS5zdHlsZS5vcGFjaXR5ID0gMSB9XG5cdFx0XHRcdGljb24uc3JjID0gcmVzLmRhdGFbMF0ubWVkaWFfZGV0YWlscy5zaXplcy50aHVtYm5haWwuc291cmNlX3VybFxuXHRcdFx0XHRpY29uLmFsdCA9IHJlcy5kYXRhWzBdLmFsdF90ZXh0XG5cdFx0XHQkKCcjYWN0aXZpdHktaWNvbicpWzBdLmFwcGVuZENoaWxkKGljb24pXG5cdFx0fSkuY2F0Y2goJ2Vycm9yJywgZSA9PiBjb25zb2xlLndhcm4oZSkpXG5cdH0sXG5cblx0c2V0QWN0aXZpdHlMaXN0SWNvbiAocXVlcnksIGF4aW9zLCBlbGVtZW50KSB7XG5cdFx0YXhpb3MuZ2V0KCdtZWRpYT9wYXJlbnQ9JyArIHF1ZXJ5KS50aGVuKChyZXMpID0+IHtcblx0XHRcdGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuXHRcdFx0XHRpY29uLnN0eWxlLm9wYWNpdHkgPSAwXG5cdFx0XHRcdGljb24uY2xhc3NOYW1lID0gJ2xpbWFnZSdcblx0XHRcdFx0aWNvbi5vbmxvYWQgPSAoKSA9PiBpY29uLnN0eWxlLm9wYWNpdHkgPSAxXG5cdFx0XHRcdGljb24uc3JjID0gcmVzLmRhdGFbMF0ubWVkaWFfZGV0YWlscy5zaXplcy50aHVtYm5haWwuc291cmNlX3VybFxuXHRcdFx0XHRpY29uLmFsdCA9IHJlcy5kYXRhWzBdLmFsdF90ZXh0XG5cdFx0XHRlbGVtZW50LmFwcGVuZENoaWxkKGljb24pXG5cdFx0fSkuY2F0Y2goJ2Vycm9yJywgZSA9PiBjb25zb2xlLndhcm4oZSkpXG5cdH0sXG5cblx0Z2V0U3Rvcmllc0luQ2F0IChzdG9yaWVzLCBheGlvcykge1xuXHRcdGxldCBxdWVyeSA9ICdzdG9yeT8nXG5cblx0XHQvLyBpbm5lZmljaWVudCwgeWV0IFdQIGFwaSBpcyBzbyBmYXIgaW5jYXBhYmxlIG9mIGRlYWxpbmcgd2l0aCBzb21ldGhpbmcgYmV0dGVyLlxuXHRcdGZvciAobGV0IGkgPSBzdG9yaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRxdWVyeSArPSAnaW5jbHVkZVtdPScgKyBzdG9yaWVzW2ldICsgJyYnXG5cdFx0fVxuXHRcdHF1ZXJ5ID0gcXVlcnkuc2xpY2UoMCwgLTEpIC8vIHJlbW92ZSBsYXN0IGFtcGVyc2FuZFxuXG5cdFx0YXhpb3MuZ2V0KHF1ZXJ5KS50aGVuKCByZXMgPT4ge1xuXHRcdFx0bGV0IHJldHZhbCA9ICc8dWw+J1xuXHRcdFx0Zm9yICh2YXIgaSA9IHJlcy5kYXRhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdHJldHZhbCArPSAnPGxpPjxhIGhyZWY9XCInXG5cdFx0XHRcdFx0KyByZXMuZGF0YVtpXS5saW5rXG5cdFx0XHRcdFx0KyAnXCI+J1xuXHRcdFx0XHRcdCsgcmVzLmRhdGFbaV0udGl0bGUucmVuZGVyZWRcblx0XHRcdFx0XHQrICc8L2E+PC9saT4nXG5cdFx0XHR9XG5cdFx0XHRyZXR2YWwgKyAnPC91bD4nXG5cblx0XHRcdCQoJyNhLXJlbGF0ZWQtYycpWzBdLmlubmVySFRNTCA9ICAnPGg0PkxpbmtlZCBTdG9yaWVzPC9oND4nXG5cdFx0XHQrICdFYWNoIGxpbmsgcG9pbnRzIHRvIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYW5kIGEgcGRmIGRvd25sb2FkIHRvIGVhY2ggc3RvcnknXG5cdFx0XHQrIHJldHZhbFxuXHRcdH0pLmNhdGNoKCdlcnJvcicsIGUgPT4geyBjb25zb2xlLndhcm4oZSkgfSlcblx0fSxcblxuXHRtYWtlRW1iZWRMaW5rKGxpbmspIHtcbiAgICBsZXQgcmVnRXhwID0gL14uKih5b3V0dS5iZVxcL3x2XFwvfHVcXC9cXHdcXC98ZW1iZWRcXC98d2F0Y2hcXD92PXxcXCZ2PSkoW14jXFwmXFw/XSopLiovO1xuICAgIGxldCBtYXRjaCA9IGxpbmsubWF0Y2gocmVnRXhwKTtcblxuICAgIGlmIChtYXRjaCAmJiBtYXRjaFsyXS5sZW5ndGggIT0gMTEpIHtcbiAgICAgIHJldHVybiAnZXJyb3InO1xuICAgIH1cblxuXHRcdGxldCBlbWJlZCA9ICc8aWZyYW1lIHdpZHRoPVwiNTYwXCIgaGVpZ2h0PVwiMzE1XCIgc3JjPVwiLy93d3cueW91dHViZS5jb20vZW1iZWQvJ1xuXHRcdHJldHVybiBlbWJlZCArIG1hdGNoWzJdICsgJ1wiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nXG5cdH1cbn0iLCJjb25zdCAkID0gcmVxdWlyZSgnemVzdCcpXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRpc0NhY2hlZDogZnVuY3Rpb24gKElEKSB7XG5cdFx0cmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhYnJhX2FjJyArIElEKSA/IHRydWUgOiBmYWxzZVxuXHR9LFxuXG5cdGNhY2hlOiBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhYnJhX2FjJyArIGRhdGEuaWQsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuXHR9LFxuXG5cdGdldDogZnVuY3Rpb24gKGNhdElELCBheGlvcywgY2FsbGJhY2spIHtcblx0XHRheGlvcy5nZXQoJ2FjdGl2aXR5X2NhdC8nICsgY2F0SUQpLnRoZW4oIHJlc3BvbnNlID0+IHtcblx0XHRcdHRoaXMuY2FjaGUocmVzcG9uc2UuZGF0YSlcblx0XHRcdGNhbGxiYWNrKHJlc3BvbnNlLmRhdGEpXG5cdFx0fSkuY2F0Y2goJ2Vycm9yJywgZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oZXJyb3IpXG5cdFx0XHRyZXR1cm4gbnVsbFxuXHRcdH0pXG5cdH0sXG5cblx0c2V0RE9NOiBmdW5jdGlvbiAoY2F0LCBzdGF0ZSwgc3RvcnksIGF4aW9zKSB7XG5cdFx0Y29uc3QgY20gPSAnI2NhdC1tZXRhJ1xuXHRcdGNvbnN0IGMgPSAkKGNtKVswXVxuXG5cdFx0Ly8gc2V0IG1ldGEgZGVzY3JpcHRpb25cblx0XHQkKGNtICsgJ19faGVhZGVyIGgyJylbMF0uaW5uZXJIVE1MID0gY2F0Lm5hbWVcblx0XHQkKGNtICsgJ19faGVhZGVyIHNwYW4nKVswXS5pbm5lckhUTUwgPSBzdGF0ZS5nZXRCcmVhZGNydW1iKClcblx0XHQkKGNtICsgJ19fY29udGVudCcpWzBdLmlubmVySFRNTCA9IGNhdC5kZXNjcmlwdGlvblxuXG5cdFx0Ly8gc2V0IGFzeW5jXG5cdFx0c2V0VGltZW91dChcblx0XHRcdHN0b3J5LmdldFJlbGF0ZWRTdG9yaWVzKCdhY3Rpdml0eT9hY3Rpdml0eV9jYXQ9JyArIGNhdC5pZCwgc3RvcmllcyA9PiB7XG5cdFx0XHRcdGNvbnN0IGxpc3QgPSAkKCcjY2F0LW1ldGFfX2xpc3QnKVswXVxuXHRcdFx0XHRsaXN0LmNsYXNzTmFtZSA9ICdpc1JlZnJlc2hpbmcnXG5cdFx0XHRcdGxpc3QuaW5uZXJIVE1MID0gJydcblxuXHRcdFx0XHQvLyBjcmVhdGUgc3RvcnkgcHJldmlld3Ncblx0XHRcdFx0Zm9yIChsZXQgaSA9IHN0b3JpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0XHRsZXQgcyA9IHN0b3JpZXNbaV1cblxuXHRcdFx0XHRcdGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdFx0XHRcdFx0ZWwuY2xhc3NOYW1lID0gJ2FjdGl2aXR5LWl0ZW0nXG5cdFx0XHRcdFx0ZWwuc2V0QXR0cmlidXRlKCdkYXRhLXN0b3J5Jywgcy5pZClcblx0XHRcdFx0XHRlbC5pbm5lckhUTUwgPSAnPGgzPicgKyBzLnRpdGxlLnJlbmRlcmVkICsgJzwvaDM+J1xuXHRcdFx0XHRcdHN0b3J5LnNldEFjdGl2aXR5TGlzdEljb24ocy5pZCwgYXhpb3MsIGVsKVxuXG5cdFx0XHRcdFx0bGlzdC5hcHBlbmRDaGlsZChlbClcblxuXHRcdFx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c3RhdGUuc2V0TGV2ZWwoMilcblxuXHRcdFx0XHRcdFx0c3RvcnkubWFrZVRhYkNvbnRhaW5lcigpXG5cdFx0XHRcdFx0XHRzdG9yeS5zaG93U3Rvcnkocywgc3RhdGUsIGF4aW9zKVxuXHRcdFx0XHRcdFx0c3Rvcnkuc2V0QWN0aXZpdHlJY29uKHMuaWQsIGF4aW9zKVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5jbGFzc05hbWUgPSAnJ1xuXHRcdFx0fSwgYXhpb3Ncblx0XHQpLCAwKVxuXHR9XG59Il19
