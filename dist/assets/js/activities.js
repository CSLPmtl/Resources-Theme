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
	baseURL: 'http://doe.concordia.ca/cslp/wp-json/wp/v2/'
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
		if (data.activity_resources != '') {
			rescontent.innerHTML = '<h4>Resources</h4>' + data.activity_resources;
		} else {
			rescontent.innerHTML = 'This activity currently does not have any additional resources.';
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
		setTimeout(story.getRelatedStories('activity?per_page=100&activity_cat=' + cat.id, function (stories) {
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
