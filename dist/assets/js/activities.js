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
module.exports = require('./lib/axios');
},{"./lib/axios":4}],3:[function(require,module,exports){
(function (process){
'use strict';

var utils = require('./../utils');
var settle = require('./../core/settle');
var buildURL = require('./../helpers/buildURL');
var parseHeaders = require('./../helpers/parseHeaders');
var isURLSameOrigin = require('./../helpers/isURLSameOrigin');
var createError = require('../core/createError');
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || require('./../helpers/btoa');

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = require('./../helpers/cookies');

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

}).call(this,require('_process'))

},{"../core/createError":10,"./../core/settle":13,"./../helpers/btoa":17,"./../helpers/buildURL":18,"./../helpers/cookies":20,"./../helpers/isURLSameOrigin":22,"./../helpers/parseHeaders":24,"./../utils":26,"_process":31}],4:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var bind = require('./helpers/bind');
var Axios = require('./core/Axios');
var defaults = require('./defaults');

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = require('./cancel/Cancel');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = require('./helpers/spread');

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"./cancel/Cancel":5,"./cancel/CancelToken":6,"./cancel/isCancel":7,"./core/Axios":8,"./defaults":15,"./helpers/bind":16,"./helpers/spread":25,"./utils":26}],5:[function(require,module,exports){
'use strict';

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

},{}],6:[function(require,module,exports){
'use strict';

var Cancel = require('./Cancel');

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

},{"./Cancel":5}],7:[function(require,module,exports){
'use strict';

module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

},{}],8:[function(require,module,exports){
'use strict';

var defaults = require('./../defaults');
var utils = require('./../utils');
var InterceptorManager = require('./InterceptorManager');
var dispatchRequest = require('./dispatchRequest');

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

},{"./../defaults":15,"./../utils":26,"./InterceptorManager":9,"./dispatchRequest":11}],9:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

},{"./../utils":26}],10:[function(require,module,exports){
'use strict';

var enhanceError = require('./enhanceError');

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

},{"./enhanceError":12}],11:[function(require,module,exports){
'use strict';

var utils = require('./../utils');
var transformData = require('./transformData');
var isCancel = require('../cancel/isCancel');
var defaults = require('../defaults');
var isAbsoluteURL = require('./../helpers/isAbsoluteURL');
var combineURLs = require('./../helpers/combineURLs');

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

},{"../cancel/isCancel":7,"../defaults":15,"./../helpers/combineURLs":19,"./../helpers/isAbsoluteURL":21,"./../utils":26,"./transformData":14}],12:[function(require,module,exports){
'use strict';

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};

},{}],13:[function(require,module,exports){
'use strict';

var createError = require('./createError');

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

},{"./createError":10}],14:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

},{"./../utils":26}],15:[function(require,module,exports){
(function (process){
'use strict';

var utils = require('./utils');
var normalizeHeaderName = require('./helpers/normalizeHeaderName');

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = require('./adapters/xhr');
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = require('./adapters/http');
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

}).call(this,require('_process'))

},{"./adapters/http":3,"./adapters/xhr":3,"./helpers/normalizeHeaderName":23,"./utils":26,"_process":31}],16:[function(require,module,exports){
'use strict';

module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

},{}],17:[function(require,module,exports){
'use strict';

// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;

},{}],18:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

},{"./../utils":26}],19:[function(require,module,exports){
'use strict';

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

},{}],20:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);

},{"./../utils":26}],21:[function(require,module,exports){
'use strict';

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

},{}],22:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);

},{"./../utils":26}],23:[function(require,module,exports){
'use strict';

var utils = require('../utils');

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

},{"../utils":26}],24:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

},{"./../utils":26}],25:[function(require,module,exports){
'use strict';

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

},{}],26:[function(require,module,exports){
'use strict';

var bind = require('./helpers/bind');
var isBuffer = require('is-buffer');

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

},{"./helpers/bind":16,"is-buffer":29}],27:[function(require,module,exports){
(function(root, $) {
	var $ = (function(document, s_addEventListener, s_querySelectorAll) {
	function $(s, context, bala) {
		bala = Object.create($.fn);

		s && bala.push.apply(bala, // if s is truly then push the following
			s[s_addEventListener] // if arg is node or window,
				? [s] // then pass [s]
				: "" + s === s // else if arg is a string
					? /</.test(s) // if the string contains "<" (if HTML code is passed)
						// then parse it and return node.children
						// use 'addEventListener' (HTMLUnknownElement) if context is not presented
						? ((context = document.createElement(context)).innerHTML = s
							, context.children)
						: context // else if context is truly
							? ((context = $(context)[0]) // if context element is found
								? context[s_querySelectorAll](s) // then select element from context
								: bala) // else pass [] (context isn't found)
							: document[s_querySelectorAll](s) // else select elements globally
					: s); // else guessing that s variable is array-like Object

		return bala;
	}

	$.fn = [];

	$.one = function(s, context) {
		return $(s, context)[0] || null;
	};

	return $;
})(document, 'addEventListener', 'querySelectorAll');
;

	if (typeof define == 'function' && define.amd) {
		define([], function() {
			return $;
		});
	} else if (typeof module == 'object' && module.exports) {
		module.exports = $;
	} else {
		root.$ = $;
	}
})(this);

},{}],28:[function(require,module,exports){
/*!!
 * Hasher <http://github.com/millermedeiros/hasher>
 * @author Miller Medeiros
 * @version 1.2.0 (2013/11/11 03:18 PM)
 * Released under the MIT License
 */

;(function () {
var factory = function(signals){

/*jshint white:false*/
/*global signals:false, window:false*/

/**
 * Hasher
 * @namespace History Manager for rich-media applications.
 * @name hasher
 */
var hasher = (function(window){

    //--------------------------------------------------------------------------------------
    // Private Vars
    //--------------------------------------------------------------------------------------

    var

        // frequency that it will check hash value on IE 6-7 since it doesn't
        // support the hashchange event
        POOL_INTERVAL = 25,

        // local storage for brevity and better compression --------------------------------

        document = window.document,
        history = window.history,
        Signal = signals.Signal,

        // local vars ----------------------------------------------------------------------

        hasher,
        _hash,
        _checkInterval,
        _isActive,
        _frame, //iframe used for legacy IE (6-7)
        _checkHistory,
        _hashValRegexp = /#(.*)$/,
        _baseUrlRegexp = /(\?.*)|(\#.*)/,
        _hashRegexp = /^\#/,

        // sniffing/feature detection -------------------------------------------------------

        //hack based on this: http://webreflection.blogspot.com/2009/01/32-bytes-to-know-if-your-browser-is-ie.html
        _isIE = (!+"\v1"),
        // hashchange is supported by FF3.6+, IE8+, Chrome 5+, Safari 5+ but
        // feature detection fails on IE compatibility mode, so we need to
        // check documentMode
        _isHashChangeSupported = ('onhashchange' in window) && document.documentMode !== 7,
        //check if is IE6-7 since hash change is only supported on IE8+ and
        //changing hash value on IE6-7 doesn't generate history record.
        _isLegacyIE = _isIE && !_isHashChangeSupported,
        _isLocal = (location.protocol === 'file:');


    //--------------------------------------------------------------------------------------
    // Private Methods
    //--------------------------------------------------------------------------------------

    function _escapeRegExp(str){
        return String(str || '').replace(/\W/g, "\\$&");
    }

    function _trimHash(hash){
        if (!hash) return '';
        var regexp = new RegExp('^' + _escapeRegExp(hasher.prependHash) + '|' + _escapeRegExp(hasher.appendHash) + '$', 'g');
        return hash.replace(regexp, '');
    }

    function _getWindowHash(){
        //parsed full URL instead of getting window.location.hash because Firefox decode hash value (and all the other browsers don't)
        //also because of IE8 bug with hash query in local file [issue #6]
        var result = _hashValRegexp.exec( hasher.getURL() );
        var path = (result && result[1]) || '';
        try {
          return hasher.raw? path : decodeURIComponent(path);
        } catch (e) {
          // in case user did not set `hasher.raw` and decodeURIComponent
          // throws an error (see #57)
          return path;
        }
    }

    function _getFrameHash(){
        return (_frame)? _frame.contentWindow.frameHash : null;
    }

    function _createFrame(){
        _frame = document.createElement('iframe');
        _frame.src = 'about:blank';
        _frame.style.display = 'none';
        document.body.appendChild(_frame);
    }

    function _updateFrame(){
        if(_frame && _hash !== _getFrameHash()){
            var frameDoc = _frame.contentWindow.document;
            frameDoc.open();
            //update iframe content to force new history record.
            //based on Really Simple History, SWFAddress and YUI.history.
            frameDoc.write('<html><head><title>' + document.title + '</title><script type="text/javascript">var frameHash="' + _hash + '";</script></head><body>&nbsp;</body></html>');
            frameDoc.close();
        }
    }

    function _registerChange(newHash, isReplace){
        if(_hash !== newHash){
            var oldHash = _hash;
            _hash = newHash; //should come before event dispatch to make sure user can get proper value inside event handler
            if(_isLegacyIE){
                if(!isReplace){
                    _updateFrame();
                } else {
                    _frame.contentWindow.frameHash = newHash;
                }
            }
            hasher.changed.dispatch(_trimHash(newHash), _trimHash(oldHash));
        }
    }

    if (_isLegacyIE) {
        /**
         * @private
         */
        _checkHistory = function(){
            var windowHash = _getWindowHash(),
                frameHash = _getFrameHash();
            if(frameHash !== _hash && frameHash !== windowHash){
                //detect changes made pressing browser history buttons.
                //Workaround since history.back() and history.forward() doesn't
                //update hash value on IE6/7 but updates content of the iframe.
                //needs to trim hash since value stored already have
                //prependHash + appendHash for fast check.
                hasher.setHash(_trimHash(frameHash));
            } else if (windowHash !== _hash){
                //detect if hash changed (manually or using setHash)
                _registerChange(windowHash);
            }
        };
    } else {
        /**
         * @private
         */
        _checkHistory = function(){
            var windowHash = _getWindowHash();
            if(windowHash !== _hash){
                _registerChange(windowHash);
            }
        };
    }

    function _addListener(elm, eType, fn){
        if(elm.addEventListener){
            elm.addEventListener(eType, fn, false);
        } else if (elm.attachEvent){
            elm.attachEvent('on' + eType, fn);
        }
    }

    function _removeListener(elm, eType, fn){
        if(elm.removeEventListener){
            elm.removeEventListener(eType, fn, false);
        } else if (elm.detachEvent){
            elm.detachEvent('on' + eType, fn);
        }
    }

    function _makePath(paths){
        paths = Array.prototype.slice.call(arguments);

        var path = paths.join(hasher.separator);
        path = path? hasher.prependHash + path.replace(_hashRegexp, '') + hasher.appendHash : path;
        return path;
    }

    function _encodePath(path){
        //used encodeURI instead of encodeURIComponent to preserve '?', '/',
        //'#'. Fixes Safari bug [issue #8]
        path = encodeURI(path);
        if(_isIE && _isLocal){
            //fix IE8 local file bug [issue #6]
            path = path.replace(/\?/, '%3F');
        }
        return path;
    }

    //--------------------------------------------------------------------------------------
    // Public (API)
    //--------------------------------------------------------------------------------------

    hasher = /** @lends hasher */ {

        /**
         * hasher Version Number
         * @type string
         * @constant
         */
        VERSION : '1.2.0',

        /**
         * Boolean deciding if hasher encodes/decodes the hash or not.
         * <ul>
         * <li>default value: false;</li>
         * </ul>
         * @type boolean
         */
        raw : false,

        /**
         * String that should always be added to the end of Hash value.
         * <ul>
         * <li>default value: '';</li>
         * <li>will be automatically removed from `hasher.getHash()`</li>
         * <li>avoid conflicts with elements that contain ID equal to hash value;</li>
         * </ul>
         * @type string
         */
        appendHash : '',

        /**
         * String that should always be added to the beginning of Hash value.
         * <ul>
         * <li>default value: '/';</li>
         * <li>will be automatically removed from `hasher.getHash()`</li>
         * <li>avoid conflicts with elements that contain ID equal to hash value;</li>
         * </ul>
         * @type string
         */
        prependHash : '/',

        /**
         * String used to split hash paths; used by `hasher.getHashAsArray()` to split paths.
         * <ul>
         * <li>default value: '/';</li>
         * </ul>
         * @type string
         */
        separator : '/',

        /**
         * Signal dispatched when hash value changes.
         * - pass current hash as 1st parameter to listeners and previous hash value as 2nd parameter.
         * @type signals.Signal
         */
        changed : new Signal(),

        /**
         * Signal dispatched when hasher is stopped.
         * -  pass current hash as first parameter to listeners
         * @type signals.Signal
         */
        stopped : new Signal(),

        /**
         * Signal dispatched when hasher is initialized.
         * - pass current hash as first parameter to listeners.
         * @type signals.Signal
         */
        initialized : new Signal(),

        /**
         * Start listening/dispatching changes in the hash/history.
         * <ul>
         *   <li>hasher won't dispatch CHANGE events by manually typing a new value or pressing the back/forward buttons before calling this method.</li>
         * </ul>
         */
        init : function(){
            if(_isActive) return;

            _hash = _getWindowHash();

            //thought about branching/overloading hasher.init() to avoid checking multiple times but
            //don't think worth doing it since it probably won't be called multiple times.
            if(_isHashChangeSupported){
                _addListener(window, 'hashchange', _checkHistory);
            }else {
                if(_isLegacyIE){
                    if(! _frame){
                        _createFrame();
                    }
                    _updateFrame();
                }
                _checkInterval = setInterval(_checkHistory, POOL_INTERVAL);
            }

            _isActive = true;
            hasher.initialized.dispatch(_trimHash(_hash));
        },

        /**
         * Stop listening/dispatching changes in the hash/history.
         * <ul>
         *   <li>hasher won't dispatch CHANGE events by manually typing a new value or pressing the back/forward buttons after calling this method, unless you call hasher.init() again.</li>
         *   <li>hasher will still dispatch changes made programatically by calling hasher.setHash();</li>
         * </ul>
         */
        stop : function(){
            if(! _isActive) return;

            if(_isHashChangeSupported){
                _removeListener(window, 'hashchange', _checkHistory);
            }else{
                clearInterval(_checkInterval);
                _checkInterval = null;
            }

            _isActive = false;
            hasher.stopped.dispatch(_trimHash(_hash));
        },

        /**
         * @return {boolean}    If hasher is listening to changes on the browser history and/or hash value.
         */
        isActive : function(){
            return _isActive;
        },

        /**
         * @return {string} Full URL.
         */
        getURL : function(){
            return window.location.href;
        },

        /**
         * @return {string} Retrieve URL without query string and hash.
         */
        getBaseURL : function(){
            return hasher.getURL().replace(_baseUrlRegexp, ''); //removes everything after '?' and/or '#'
        },

        /**
         * Set Hash value, generating a new history record.
         * @param {...string} path    Hash value without '#'. Hasher will join
         * path segments using `hasher.separator` and prepend/append hash value
         * with `hasher.appendHash` and `hasher.prependHash`
         * @example hasher.setHash('lorem', 'ipsum', 'dolor') -> '#/lorem/ipsum/dolor'
         */
        setHash : function(path){
            path = _makePath.apply(null, arguments);
            if(path !== _hash){
                // we should store raw value
                _registerChange(path);
                if (path === _hash) {
                    // we check if path is still === _hash to avoid error in
                    // case of multiple consecutive redirects [issue #39]
                    if (! hasher.raw) {
                        path = _encodePath(path);
                    }
                    window.location.hash = '#' + path;
                }
            }
        },

        /**
         * Set Hash value without keeping previous hash on the history record.
         * Similar to calling `window.location.replace("#/hash")` but will also work on IE6-7.
         * @param {...string} path    Hash value without '#'. Hasher will join
         * path segments using `hasher.separator` and prepend/append hash value
         * with `hasher.appendHash` and `hasher.prependHash`
         * @example hasher.replaceHash('lorem', 'ipsum', 'dolor') -> '#/lorem/ipsum/dolor'
         */
        replaceHash : function(path){
            path = _makePath.apply(null, arguments);
            if(path !== _hash){
                // we should store raw value
                _registerChange(path, true);
                if (path === _hash) {
                    // we check if path is still === _hash to avoid error in
                    // case of multiple consecutive redirects [issue #39]
                    if (! hasher.raw) {
                        path = _encodePath(path);
                    }
                    window.location.replace('#' + path);
                }
            }
        },

        /**
         * @return {string} Hash value without '#', `hasher.appendHash` and `hasher.prependHash`.
         */
        getHash : function(){
            //didn't used actual value of the `window.location.hash` to avoid breaking the application in case `window.location.hash` isn't available and also because value should always be synched.
            return _trimHash(_hash);
        },

        /**
         * @return {Array.<string>} Hash value split into an Array.
         */
        getHashAsArray : function(){
            return hasher.getHash().split(hasher.separator);
        },

        /**
         * Removes all event listeners, stops hasher and destroy hasher object.
         * - IMPORTANT: hasher won't work after calling this method, hasher Object will be deleted.
         */
        dispose : function(){
            hasher.stop();
            hasher.initialized.dispose();
            hasher.stopped.dispose();
            hasher.changed.dispose();
            _frame = hasher = window.hasher = null;
        },

        /**
         * @return {string} A string representation of the object.
         */
        toString : function(){
            return '[hasher version="'+ hasher.VERSION +'" hash="'+ hasher.getHash() +'"]';
        }

    };

    hasher.initialized.memorize = true; //see #33

    return hasher;

}(window));


    return hasher;
};

if (typeof define === 'function' && define.amd) {
    define(['signals'], factory);
} else if (typeof exports === 'object') {
    module.exports = factory(require('signals'));
} else {
    /*jshint sub:true */
    window['hasher'] = factory(window['signals']);
}

}());

},{"signals":32}],29:[function(require,module,exports){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}

},{}],30:[function(require,module,exports){
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.petitDom=e.petitDom||{})}(this,function(e){"use strict";function n(e,n){for(var r=0;r<e.length;r++){var o=e[r];if(S(o))return t(e,r,e.slice(0,r),n);b(o)?n&&!o.isSVG&&(o.isSVG=!0):e[r]={_text:null==o?"":o}}return e}function t(e,n,r,o){for(var i=n;i<e.length;i++){var l=e[i];S(l)?t(l,0,r,o):b(l)?(o&&!l.isSVG&&(l.isSVG=!0),r.push(l)):r.push({_text:null==l?"":l})}return r}function r(e,n,t,r){if(t!==r)return!0;for(var o in e)if(e[o]!==n[o])return!0;return!1}function o(e){var n;if(null!=e._text)n=document.createTextNode(e._text);else if(!0===e._vnode){var t=e.type,r=e.props,l=e.content,f=e.isSVG;if("string"==typeof t){var v;v=a(n=f?document.createElementNS(G,t):document.createElement(t),r,void 0),S(l)?i(n,l):n.appendChild(o(l)),null!=v&&u(n,r,void 0,v)}else if(V(t))n=t.mount(r,l);else if("function"==typeof t)if(V(t.prototype)){var d=new t(r,l);n=d.mount(r,l),e._data=d}else{var p=t(r,l);n=o(p),e._data=p}}if(null==n)throw new Error("Unkown node type!");return e._node=n,n}function i(e,n){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n.length-1,i=arguments[4];t<=r;){var l=n[t++];e.insertBefore(o(l),i)}}function l(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n.length-1,o=void 0;for(e.childNodes.length===r-t+1&&(e.textContent="",o=!0);t<=r;){var i=n[t++];o||e.removeChild(i._node),f(i)}}function f(e){if(S(e))for(var n=0;n<e.length;n++)f(e[n]);else!0===e._vnode&&(V(e.type)?e.type.unmount(e._node):"function"==typeof e.type&&V(e.type.prototype)?e._data.unmount(e._node):null!=e.content&&f(e.content))}function u(e,n,t,r){for(var o,i=0;i<r.length;i++){o=r[i];var l=t&&t[o],f=n[o];l!==f&&(e[o]=f)}}function a(e,n,t){var r=[];for(var o in n)if(o.startsWith("on")||o in C)r.push(o);else{var i=null!=t?t[o]:void 0,l=n[o];i!==l&&v(e,o,l)}for(o in t)o in n||e.removeAttribute(o);if(r.length>0)return r}function v(e,n,t){if(!0===t)e.setAttribute(n,"");else if(!1===t)e.removeAttribute(n);else{var r=M[n];void 0!==r?e.setAttributeNS(r,n,t):e.setAttribute(n,t)}}function d(e,n,t){var i=n._node;if(n===e)return i;var l,v;if(null!=(l=n._text)&&null!=(v=e._text))l!==v&&(i.nodeValue=v);else if(n.type===e.type&&n.isSVG===e.isSVG){var s=n.type;if(V(s))s.patch(i,e.props,n.props,e.content,n.content);else if("function"==typeof s)if(V(s.prototype)){var c=n._data;c.patch(i,e.props,n.props,e.content,n.content),e._data=c}else if((s.shouldUpdate||r)(e.props,n.props,e.content,n.content)){var h=s(e.props,e.content);i=d(h,n._data,t),e._data=h}else e._data=n._data;else{if("string"!=typeof s)throw new Error("Unkown node type! "+s);var y=a(i,e.props,n.props);p(i,e.content,n.content),null!=y&&u(i,e.props,n.props,y)}}else i=o(e),t&&t.replaceChild(i,n._node),f(n);return e._node=i,i}function p(e,n,t){S(n)||S(t)?S(n)&&S(t)?c(e,n,t):(l(e,t,0,t.length-1),i(e,n)):n!==t&&d(n,t,e)}function s(e,n){return e.key===n.key}function c(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n.length-1,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,v=arguments.length>6&&void 0!==arguments[6]?arguments[6]:t.length-1;if(n!==t){var p,c=h(n,t,r,u,a,v,s,e);if(r+=c,a+=c,c=y(n,t,r,u,a,v,s,e),u-=c,v-=c,!(r>u&&a>v)){if(r<=u&&a>v)return p=t[a],void i(e,n,r,u,p&&p._node);if(a<=v&&r>u)l(e,t,a,v);else{var _=v-a+1,k=u-r+1;if(c=-1,_<k){if((c=w(n,t,r,u,a,v,s))>=0){i(e,n,r,c-1,(p=t[a])._node);var x=c+_;for(r=c;r<x;)d(n[r++],t[a++]);return p=t[v],void i(e,n,r,u,p&&p._node.nextSibling)}}else if(_>k&&(c=w(t,n,a,v,r,u,s))>=0){for(l(e,t,a,c-1),x=c+k,a=c;a<x;)d(n[r++],t[a++]);return void l(e,t,a,v)}if(a===v){var A=t[a]._node;return i(e,n,r,u,A),e.removeChild(A),void f(A)}if(r===u)return e.insertBefore(o(n[r]),t[a]._node),void l(e,t,a,v);g(e,n,t,r,u,a,v)&&m(e,n,t,r,u,a,v)}}}}function h(e,n,t,r,o,i,l,f){for(var u,a,v=0;t<=r&&o<=i&&l(u=e[t],a=n[o]);)f&&d(u,a,f),t++,o++,v++;return v}function y(e,n,t,r,o,i,l,f){for(var u,a,v=0;t<=r&&o<=i&&l(u=e[r],a=n[i]);)f&&d(u,a,f),r--,i--,v++;return v}function g(e,n,t){var r,o,i,l,f,u,a,v=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,d=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n.length-1,p=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,c=d-v+1,h=(arguments.length>6&&void 0!==arguments[6]?arguments[6]:t.length-1)-p+1,y=c+h,g=[];e:for(r=0;r<=y;r++){if(r>50)return!0;for(a=r-1,f=r?g[r-1]:[0,0],u=g[r]=[],o=-r;o<=r;o+=2){for(i=(l=o===-r||o!==r&&f[a+o-1]<f[a+o+1]?f[a+o+1]:f[a+o-1]+1)-o;l<h&&i<c&&s(t[p+l],n[v+i]);)l++,i++;if(l===h&&i===c)break e;u[r+o]=l}}var m,k=Array(r/2+y/2),w={},x=k.length-1;for(r=g.length-1;r>=0;r--){for(;l>0&&i>0&&s(t[p+l-1],n[v+i-1]);)k[x--]=N,l--,i--;if(!r)break;a=r-1,f=r?g[r-1]:[0,0],(o=l-i)===-r||o!==r&&f[a+o-1]<f[a+o+1]?(i--,k[x--]=B):(l--,k[x--]=U,null!=(m=t[p+l]).key&&(w[m.key]=p+l))}_(e,k,n,t,v,p,w)}function _(e,n,t,r,i,l,u){for(var a,v,p,s,c={},h=0,y=i,g=l;h<n.length;h++){var _=n[h];_===N?d(t[y++],r[g++],e):_===B?(s=null,null!=(a=t[y++]).key&&(s=u[a.key]),null!=s?(p=d(a,r[s]),c[a.key]=s):p=o(a),e.insertBefore(p,g<r.length?r[g]._node:null)):_===U&&g++}for(h=0,g=l;h<n.length;h++){var m=n[h];m===N?g++:m===U&&(null!=(v=r[g++]).key&&null!=c[v.key]||(e.removeChild(v._node),f(v)))}}function m(e,n,t,r,o,i,l){var f,u,a,v,d={},p=[],s=0,c=o-r+1,h=l-i+1,y=Math.min(c,h),g=Array(y+1);g[0]=-1;for(var m=1;m<g.length;m++)g[m]=l+1;var w=Array(y);for(m=i;m<=l;m++)null!=(v=t[m].key)?d[v]=m:p.push(m);for(m=r;m<=o;m++)null!=(a=null==(f=n[m]).key?p[s++]:d[f.key])&&(u=k(g,a))>=0&&(g[u]=a,w[u]={newi:m,oldi:a,prev:w[u-1]});for(u=g.length-1;g[u]>l;)u--;for(var x=w[u],A=Array(h+c-u),S=o,b=l,V=A.length-1;x;){for(var G=x,C=G.newi,E=G.oldi;S>C;)A[V--]=B,S--;for(;b>E;)A[V--]=U,b--;A[V--]=N,S--,b--,x=x.prev}for(;S>=r;)A[V--]=B,S--;for(;b>=i;)A[V--]=U,b--;_(e,A,n,t,r,i,d)}function k(e,n){for(var t=1,r=e.length-1;t<=r;){var o=Math.ceil((t+r)/2);n<e[o]?r=o-1:t=o+1}return t}function w(e,n,t,r,o,i,l){for(var f=o,u=-1,a=i-o+1;t<=r&&r-t+1>=a;){if(l(e[t],n[f])){if(u<0&&(u=t),++f>i)return u}else u=-1,f=o;t++}return-1}var x={},A=[],S=Array.isArray,b=function(e){return e&&(null!=e._vnode||null!=e._text)},V=function(e){return e&&e.mount&&e.patch&&e.unmount},G="http://www.w3.org/2000/svg",C={selected:!0,value:!0,checked:!0,innerHTML:!0},E="http://www.w3.org/1999/xlink",M={show:E,actuate:E,href:E},N=2,B=4,U=8;e.h=function(e,t,r){var o,i,l,f=!1,u=arguments.length-2;if("string"!=typeof e){if(1===u)o=r;else if(u>1){for(i=Array(u),l=0;l<u;l++)i[l]=arguments[l+2];o=i}}else if(f="svg"===e,1===u)S(r)?o=n(r,f):b(r)?(r.isSVG=f,o=[r]):o=[{_text:null==r?"":r}];else if(u>1){for(i=Array(u),l=0;l<u;l++)i[l]=arguments[l+2];o=n(i,f)}else o=A;return{_vnode:!0,isSVG:f,type:e,key:t&&t.key||null,props:t||x,content:o}},e.mount=o,e.patch=d,e.unmount=f,e.diffChildren=c,Object.defineProperty(e,"__esModule",{value:!0})});


},{}],31:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],32:[function(require,module,exports){
/*jslint onevar:true, undef:true, newcap:true, regexp:true, bitwise:true, maxerr:50, indent:4, white:false, nomen:false, plusplus:false */
/*global define:false, require:false, exports:false, module:false, signals:false */

/** @license
 * JS Signals <http://millermedeiros.github.com/js-signals/>
 * Released under the MIT license
 * Author: Miller Medeiros
 * Version: 1.0.0 - Build: 268 (2012/11/29 05:48 PM)
 */

(function(global){

    // SignalBinding -------------------------------------------------
    //================================================================

    /**
     * Object that represents a binding between a Signal and a listener function.
     * <br />- <strong>This is an internal constructor and shouldn't be called by regular users.</strong>
     * <br />- inspired by Joa Ebert AS3 SignalBinding and Robert Penner's Slot classes.
     * @author Miller Medeiros
     * @constructor
     * @internal
     * @name SignalBinding
     * @param {Signal} signal Reference to Signal object that listener is currently bound to.
     * @param {Function} listener Handler function bound to the signal.
     * @param {boolean} isOnce If binding should be executed just once.
     * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
     * @param {Number} [priority] The priority level of the event listener. (default = 0).
     */
    function SignalBinding(signal, listener, isOnce, listenerContext, priority) {

        /**
         * Handler function bound to the signal.
         * @type Function
         * @private
         */
        this._listener = listener;

        /**
         * If binding should be executed just once.
         * @type boolean
         * @private
         */
        this._isOnce = isOnce;

        /**
         * Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @memberOf SignalBinding.prototype
         * @name context
         * @type Object|undefined|null
         */
        this.context = listenerContext;

        /**
         * Reference to Signal object that listener is currently bound to.
         * @type Signal
         * @private
         */
        this._signal = signal;

        /**
         * Listener priority
         * @type Number
         * @private
         */
        this._priority = priority || 0;
    }

    SignalBinding.prototype = {

        /**
         * If binding is active and should be executed.
         * @type boolean
         */
        active : true,

        /**
         * Default parameters passed to listener during `Signal.dispatch` and `SignalBinding.execute`. (curried parameters)
         * @type Array|null
         */
        params : null,

        /**
         * Call listener passing arbitrary parameters.
         * <p>If binding was added using `Signal.addOnce()` it will be automatically removed from signal dispatch queue, this method is used internally for the signal dispatch.</p>
         * @param {Array} [paramsArr] Array of parameters that should be passed to the listener
         * @return {*} Value returned by the listener.
         */
        execute : function (paramsArr) {
            var handlerReturn, params;
            if (this.active && !!this._listener) {
                params = this.params? this.params.concat(paramsArr) : paramsArr;
                handlerReturn = this._listener.apply(this.context, params);
                if (this._isOnce) {
                    this.detach();
                }
            }
            return handlerReturn;
        },

        /**
         * Detach binding from signal.
         * - alias to: mySignal.remove(myBinding.getListener());
         * @return {Function|null} Handler function bound to the signal or `null` if binding was previously detached.
         */
        detach : function () {
            return this.isBound()? this._signal.remove(this._listener, this.context) : null;
        },

        /**
         * @return {Boolean} `true` if binding is still bound to the signal and have a listener.
         */
        isBound : function () {
            return (!!this._signal && !!this._listener);
        },

        /**
         * @return {boolean} If SignalBinding will only be executed once.
         */
        isOnce : function () {
            return this._isOnce;
        },

        /**
         * @return {Function} Handler function bound to the signal.
         */
        getListener : function () {
            return this._listener;
        },

        /**
         * @return {Signal} Signal that listener is currently bound to.
         */
        getSignal : function () {
            return this._signal;
        },

        /**
         * Delete instance properties
         * @private
         */
        _destroy : function () {
            delete this._signal;
            delete this._listener;
            delete this.context;
        },

        /**
         * @return {string} String representation of the object.
         */
        toString : function () {
            return '[SignalBinding isOnce:' + this._isOnce +', isBound:'+ this.isBound() +', active:' + this.active + ']';
        }

    };


/*global SignalBinding:false*/

    // Signal --------------------------------------------------------
    //================================================================

    function validateListener(listener, fnName) {
        if (typeof listener !== 'function') {
            throw new Error( 'listener is a required param of {fn}() and should be a Function.'.replace('{fn}', fnName) );
        }
    }

    /**
     * Custom event broadcaster
     * <br />- inspired by Robert Penner's AS3 Signals.
     * @name Signal
     * @author Miller Medeiros
     * @constructor
     */
    function Signal() {
        /**
         * @type Array.<SignalBinding>
         * @private
         */
        this._bindings = [];
        this._prevParams = null;

        // enforce dispatch to aways work on same context (#47)
        var self = this;
        this.dispatch = function(){
            Signal.prototype.dispatch.apply(self, arguments);
        };
    }

    Signal.prototype = {

        /**
         * Signals Version Number
         * @type String
         * @const
         */
        VERSION : '1.0.0',

        /**
         * If Signal should keep record of previously dispatched parameters and
         * automatically execute listener during `add()`/`addOnce()` if Signal was
         * already dispatched before.
         * @type boolean
         */
        memorize : false,

        /**
         * @type boolean
         * @private
         */
        _shouldPropagate : true,

        /**
         * If Signal is active and should broadcast events.
         * <p><strong>IMPORTANT:</strong> Setting this property during a dispatch will only affect the next dispatch, if you want to stop the propagation of a signal use `halt()` instead.</p>
         * @type boolean
         */
        active : true,

        /**
         * @param {Function} listener
         * @param {boolean} isOnce
         * @param {Object} [listenerContext]
         * @param {Number} [priority]
         * @return {SignalBinding}
         * @private
         */
        _registerListener : function (listener, isOnce, listenerContext, priority) {

            var prevIndex = this._indexOfListener(listener, listenerContext),
                binding;

            if (prevIndex !== -1) {
                binding = this._bindings[prevIndex];
                if (binding.isOnce() !== isOnce) {
                    throw new Error('You cannot add'+ (isOnce? '' : 'Once') +'() then add'+ (!isOnce? '' : 'Once') +'() the same listener without removing the relationship first.');
                }
            } else {
                binding = new SignalBinding(this, listener, isOnce, listenerContext, priority);
                this._addBinding(binding);
            }

            if(this.memorize && this._prevParams){
                binding.execute(this._prevParams);
            }

            return binding;
        },

        /**
         * @param {SignalBinding} binding
         * @private
         */
        _addBinding : function (binding) {
            //simplified insertion sort
            var n = this._bindings.length;
            do { --n; } while (this._bindings[n] && binding._priority <= this._bindings[n]._priority);
            this._bindings.splice(n + 1, 0, binding);
        },

        /**
         * @param {Function} listener
         * @return {number}
         * @private
         */
        _indexOfListener : function (listener, context) {
            var n = this._bindings.length,
                cur;
            while (n--) {
                cur = this._bindings[n];
                if (cur._listener === listener && cur.context === context) {
                    return n;
                }
            }
            return -1;
        },

        /**
         * Check if listener was attached to Signal.
         * @param {Function} listener
         * @param {Object} [context]
         * @return {boolean} if Signal has the specified listener.
         */
        has : function (listener, context) {
            return this._indexOfListener(listener, context) !== -1;
        },

        /**
         * Add a listener to the signal.
         * @param {Function} listener Signal handler function.
         * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         * @return {SignalBinding} An Object representing the binding between the Signal and listener.
         */
        add : function (listener, listenerContext, priority) {
            validateListener(listener, 'add');
            return this._registerListener(listener, false, listenerContext, priority);
        },

        /**
         * Add listener to the signal that should be removed after first execution (will be executed only once).
         * @param {Function} listener Signal handler function.
         * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         * @return {SignalBinding} An Object representing the binding between the Signal and listener.
         */
        addOnce : function (listener, listenerContext, priority) {
            validateListener(listener, 'addOnce');
            return this._registerListener(listener, true, listenerContext, priority);
        },

        /**
         * Remove a single listener from the dispatch queue.
         * @param {Function} listener Handler function that should be removed.
         * @param {Object} [context] Execution context (since you can add the same handler multiple times if executing in a different context).
         * @return {Function} Listener handler function.
         */
        remove : function (listener, context) {
            validateListener(listener, 'remove');

            var i = this._indexOfListener(listener, context);
            if (i !== -1) {
                this._bindings[i]._destroy(); //no reason to a SignalBinding exist if it isn't attached to a signal
                this._bindings.splice(i, 1);
            }
            return listener;
        },

        /**
         * Remove all listeners from the Signal.
         */
        removeAll : function () {
            var n = this._bindings.length;
            while (n--) {
                this._bindings[n]._destroy();
            }
            this._bindings.length = 0;
        },

        /**
         * @return {number} Number of listeners attached to the Signal.
         */
        getNumListeners : function () {
            return this._bindings.length;
        },

        /**
         * Stop propagation of the event, blocking the dispatch to next listeners on the queue.
         * <p><strong>IMPORTANT:</strong> should be called only during signal dispatch, calling it before/after dispatch won't affect signal broadcast.</p>
         * @see Signal.prototype.disable
         */
        halt : function () {
            this._shouldPropagate = false;
        },

        /**
         * Dispatch/Broadcast Signal to all listeners added to the queue.
         * @param {...*} [params] Parameters that should be passed to each handler.
         */
        dispatch : function (params) {
            if (! this.active) {
                return;
            }

            var paramsArr = Array.prototype.slice.call(arguments),
                n = this._bindings.length,
                bindings;

            if (this.memorize) {
                this._prevParams = paramsArr;
            }

            if (! n) {
                //should come after memorize
                return;
            }

            bindings = this._bindings.slice(); //clone array in case add/remove items during dispatch
            this._shouldPropagate = true; //in case `halt` was called before dispatch or during the previous dispatch.

            //execute all callbacks until end of the list or until a callback returns `false` or stops propagation
            //reverse loop since listeners with higher priority will be added at the end of the list
            do { n--; } while (bindings[n] && this._shouldPropagate && bindings[n].execute(paramsArr) !== false);
        },

        /**
         * Forget memorized arguments.
         * @see Signal.memorize
         */
        forget : function(){
            this._prevParams = null;
        },

        /**
         * Remove all bindings from signal and destroy any reference to external objects (destroy Signal object).
         * <p><strong>IMPORTANT:</strong> calling any method on the signal instance after calling dispose will throw errors.</p>
         */
        dispose : function () {
            this.removeAll();
            delete this._bindings;
            delete this._prevParams;
        },

        /**
         * @return {string} String representation of the object.
         */
        toString : function () {
            return '[Signal active:'+ this.active +' numListeners:'+ this.getNumListeners() +']';
        }

    };


    // Namespace -----------------------------------------------------
    //================================================================

    /**
     * Signals namespace
     * @namespace
     * @name signals
     */
    var signals = Signal;

    /**
     * Custom event broadcaster
     * @see Signal
     */
    // alias for backwards compatibility (see #gh-44)
    signals.Signal = Signal;



    //exports to multiple environments
    if(typeof define === 'function' && define.amd){ //AMD
        define(function () { return signals; });
    } else if (typeof module !== 'undefined' && module.exports){ //node
        module.exports = signals;
    } else { //browser
        //use string because of Google closure compiler ADVANCED_MODE
        /*jslint sub:true */
        global['signals'] = signals;
    }

}(this));

},{}],33:[function(require,module,exports){
/**
 * Activities module
 * @author Michael Hemingway
 */

'use strict';

var _petitDom = require('petit-dom');

var _balajs = require('balajs');

var _balajs2 = _interopRequireDefault(_balajs);

var _config = require('./util/config.js');

var _state = require('./util/state.js');

var _state2 = _interopRequireDefault(_state);

var _helpers = require('./util/helpers.js');

var _cat = require('./components/cat.js');

var _cat2 = _interopRequireDefault(_cat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// App components

// DOM
// App state and routing
// DOM selector engine

var container = _balajs2.default.one('#activities__by-cat'); // Helpers
// Virtual DOM

var cards = (0, _balajs2.default)('.category-card');
var drilldown = _balajs2.default.one('#drilldown');
var activity = _balajs2.default.one('#activity');
var catMeta = _balajs2.default.one('#cat-meta');

//hidemeta: () => ('.activity-meta')[0].className = 'stories-meta hidden',

// 		if (state.drillLevel == 0)
// 			history.pushState(state.history, '', data.slug)
// 		else /*if (state.drillLevel == 1)*/
// 			history.pushState(state.history, '', state.categoryData.slug + '/' + data.slug)
// 		// else if (state.drillLevel == 2)
// 		// 	history.pushState(state.history, '', state.categoryData.slug + '/' + data.slug)
// 	}
// }
// }

function init() {
	cards.forEach(function (item) {
		(0, _helpers.on)('click', _balajs2.default.one(item), function (event) {
			event.preventDefault();

			var ID = item.getAttribute('data-cat');
			_config.cache.get(ID).then(function (data) {
				return setSelectedCategory(data);
			});
		});
	});

	(0, _helpers.on)('click', _balajs2.default.one('#back-button'), function () {
		_state2.default.drillTo(_state2.default.get('drill').level - 1);
	});
}
(0, _helpers.on)('DOMContentLoaded', window, init());

// select
function setSelectedCategory(data) {
	_state2.default.drillTo(1);
	_balajs2.default.one('.activities-meta').style = 'visibility: hidden';
	_state2.default.mutate({ categoryData: data });
	(0, _cat2.default)(_state2.default);
}

},{"./components/cat.js":35,"./util/config.js":36,"./util/helpers.js":37,"./util/state.js":39,"balajs":27,"petit-dom":30}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _balajs = require('balajs');

var _balajs2 = _interopRequireDefault(_balajs);

var _config = require('../util/config.js');

var _helpers = require('../util/helpers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var activity = {

	// Story Functions
	getRelatedStories: function getRelatedStories(query, callback) {
		_config.api.get(query).then(function (res) {
			callback(res.data);
		}).catch('error', function (e) {
			console.warn(e);
		});
	},

	showActivity: function showActivity(data, state) {
		state.get('activityData').name = data.title.rendered;

		(0, _balajs2.default)('#activity-title')[0].innerHTML = data.title.rendered;
		(0, _balajs2.default)('#activity header span')[0].innerHTML = state.getBreadcrumb();

		// Overview, tab 1, contains: objective, gfa tips, levels
		(0, _balajs2.default)('#a-desc-c')[0].innerHTML = '<h4>Overview</h4>' + data.activity_description_activity_objective;
		(0, _balajs2.default)('#a-gfa-c')[0].innerHTML = '<h4>Group Facilitation Tips</h4>' + data.activity_description_activity_gfa;
		(0, _balajs2.default)('#a-level-c')[0].innerHTML = '<h4>Levels</h4>' + data.activity_description_activity_level;

		// Activity Insights
		// check if has insights, display insights?
		(0, _balajs2.default)('#a-insights-c')[0].innerHTML = '<h4>Activity Insights</h4>' + data.activity_insights;

		// Linked Stories, tab 3
		this.getStoriesInCat(data.activity_linked_stories, _config.api);

		// Resources, tab 4
		var rescontent = (0, _balajs2.default)('#a-resources-c')[0];
		if (data.activity_resources != '') {
			rescontent.innerHTML = '<h4>Resources</h4>' + data.activity_resources;
		} else {
			rescontent.innerHTML = 'This activity currently does not have any additional resources.';
		}

		(0, _balajs2.default)('#activity-video-container')[0].innerHTML = (0, _helpers.makeEmbedLink)(data.activity_video);
	},

	makeTabContainer: function makeTabContainer() {
		var tabs = (0, _balajs2.default)('.activity__nav.tabs li'); // Get all tabs

		tabs.forEach(function (tab) {
			var link = tab.firstChild;

			link.addEventListener('click', function (e) {
				e.preventDefault();

				// Get location of tab's content (href => id)
				var contentTab = link.getAttribute('href');

				// Set other tabs & nav labes as inactive
				(0, _balajs2.default)('.tabs-content div').forEach(function (t) {
					return t.className = '';
				});
				(0, _balajs2.default)('.tabs li').forEach(function (l) {
					return l.className = '';
				});

				// Set selected tab & nav item active
				tab.className = 'active';
				(0, _balajs2.default)(contentTab)[0].className = 'active';
			});
		});
	},

	setActivityIcon: function setActivityIcon(query) {
		_config.api.get('media?parent=' + query).then(function (res) {
			(0, _balajs2.default)('#activity-icon')[0].innerHTML = ''; // clear old image elems
			var icon = document.createElement('img');
			icon.style.opacity = 0;
			icon.onload = function () {
				(0, _balajs2.default)('#activity-icon img')[0].style.opacity = 1;
			};
			icon.src = res.data[0].media_details.sizes.thumbnail.source_url;
			icon.alt = res.data[0].alt_text;
			(0, _balajs2.default)('#activity-icon')[0].appendChild(icon);
		}).catch('error', function (e) {
			return console.warn(e);
		});
	},

	setActivityListIcon: function setActivityListIcon(query, element) {
		_config.api.get('media?parent=' + query).then(function (res) {
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

	getStoriesInCat: function getStoriesInCat(stories) {
		var query = 'story?per_page=100&';
		// let query = 'story?per_page=100&include[]='

		for (var i = stories.length - 1; i >= 0; i--) {
			query += 'include[]=' + stories[i] + '&';
			// query += stories[i] + ','
		}
		query = query.slice(0, -1); // remove last ampersand or comma

		_config.api.get(query).then(function (res) {
			var retval = '<ul>';
			for (var i = res.data.length - 1; i >= 0; i--) {
				retval += '<li><a href="' + res.data[i].link + '">' + res.data[i].title.rendered + '</a></li>';
			}
			retval + '</ul>';

			(0, _balajs2.default)('#a-related-c')[0].innerHTML = '<h4>Linked Stories</h4>' + 'Each link points to additional information and a pdf download to each story' + retval;
		}).catch('error', function (e) {
			console.warn(e);
		});
	}
};

exports.default = activity;

},{"../util/config.js":36,"../util/helpers.js":37,"balajs":27}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = setDOM;

var _balajs = require('balajs');

var _balajs2 = _interopRequireDefault(_balajs);

var _activity = require('./activity.js');

var _activity2 = _interopRequireDefault(_activity);

var _config = require('../util/config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setDOM(state) {
	var cm = '#cat-meta';
	var c = (0, _balajs2.default)(cm)[0];

	var cat = state.get('categoryData');

	// set meta description
	(0, _balajs2.default)(cm + '__header h2')[0].innerHTML = cat.name;
	(0, _balajs2.default)(cm + '__header span')[0].innerHTML = state.getBreadcrumb();
	(0, _balajs2.default)(cm + '__content')[0].innerHTML = cat.description;

	// set async
	setTimeout(_activity2.default.getRelatedStories('activity?per_page=100&activity_cat=' + cat.id, function (stories) {
		console.group('%c Related Stories for ID #' + cat.id, 'color: #F75C03');
		console.info('Stories: ', stories);

		var list = (0, _balajs2.default)('#cat-meta__list')[0];
		list.className = 'isRefreshing';
		list.innerHTML = '';

		// create story previews

		var _loop = function _loop(i) {
			var s = stories[i];

			var el = document.createElement('div');
			el.className = 'activity-item';
			el.setAttribute('data-story', s.id);
			el.innerHTML = '<h3>' + s.title.rendered + '</h3>';
			_activity2.default.setActivityListIcon(s.id, el);

			list.appendChild(el);

			el.addEventListener('click', function () {
				state.drillTo(2);

				state.mutate({ activityData: s });

				_activity2.default.makeTabContainer();
				_activity2.default.showActivity(s, state);
				_activity2.default.setActivityIcon(s.id);
			});
		};

		for (var i = stories.length - 1; i >= 0; i--) {
			_loop(i);
		}

		console.groupEnd();

		list.className = '';
	}), 0);
}

},{"../util/config.js":36,"./activity.js":34,"balajs":27}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.defaults = exports.cache = exports.api = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Axios, our AJAX lib

var defaults = {
	paths: {
		namespace: 'abra_ac', // localstorage namespace
		cachemiss: 'activity_cat/', // path for axios item retrieval on miss
		axiosBURL: 'https://doe.concordia.ca/cslp/wp-json/wp/v2/'
	}
};

var cache = {
	config: {
		prefix: defaults.paths.namespace,
		base: defaults.paths.cachemiss
	},

	exists: function exists(ID) {
		return localStorage.getItem(this.config.prefix + ID) ? true : false;
	},

	validate: function validate(ID) {
		var pfx = this.config.prefix;
		if (this.exists(ID)) {
			var item = JSON.parse(localStorage.getItem(pfx + ID));

			// set cache to expire in two weeks
			if (item.timestamp + 1.21e+9 > Date.now()) {
				return item;
			} else {
				console.log('Cached item exists, but is older than 2 weeks');
				return false;
			}
		} else {
			return false;
		}
	},

	retrieve: function retrieve(ID) {
		var _this = this;

		return new Promise(function (resolve, reject) {
			if (_this.validate(ID)) {
				console.log('Retrieved cached data: ID #' + ID);
				resolve(JSON.parse(localStorage.getItem(_this.config.prefix + ID)));
			} else {
				api.get(_this.config.base + ID).then(function (response) {
					_this.set(_this.config.prefix + ID, response.data);
					console.log('Retrieved live data with ID #' + ID + ' and cached it');
					resolve(response.data);
				}).catch('error', function (error) {
					return reject(error);
				});
			}
		});
	},

	get: function get(ID) {
		var _this2 = this;

		return new Promise(function (resolve, reject) {
			_this2.retrieve(ID).then(function (data) {
				return resolve(data);
			});
		});
	},

	set: function set(key, data) {
		var item = data;
		data.timestamp = Date.now();
		localStorage.setItem(key, JSON.stringify(data));
	}
};

var api = _axios2.default.create({
	baseURL: defaults.paths.axiosBURL
});

exports.api = api;
exports.cache = cache;
exports.defaults = defaults;

// TODO: everything ->
// 1. [done] make this an object I can import everywhere with all my instances
// 2. hold immutable values
// 3. hold the state object

},{"axios":2}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.on = on;
exports.makeEmbedLink = makeEmbedLink;
function on(action, elem, cb, passive) {
  elem.addEventListener(action, cb, passive);
}

function makeEmbedLink(link) {
  var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  var match = link.match(regExp);

  if (match && match[2].length != 11) {
    return 'error';
  }

  var embed = '<iframe width="560" height="315" src="//www.youtube.com/embed/';
  return embed + match[2] + '" frameborder="0" allowfullscreen></iframe>';
}

},{}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _hasher = require('hasher');

var _hasher2 = _interopRequireDefault(_hasher);

var _balajs = require('balajs');

var _balajs2 = _interopRequireDefault(_balajs);

var _animejs = require('animejs');

var _animejs2 = _interopRequireDefault(_animejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Router = function () {
	function Router() {
		_classCallCheck(this, Router);

		// add hash change listener
		_hasher2.default.changed.add(this.handleHashChange);

		// add initialized listener
		// (to grab initial value in case it is already set)
		_hasher2.default.initialized.add(this.handleHashChange);

		// initialize hasher (start listening for history changes)
		_hasher2.default.init();
	}

	_createClass(Router, [{
		key: 'navigate',
		value: function navigate(path) {
			var hashtring = path;

			// change hash value (generates new history record)
			_hasher2.default.setHash(hashtring);
		}
	}, {
		key: 'handleHashChange',
		value: function handleHashChange(newHash, oldHash) {
			console.log('%c New hash: ' + newHash, 'background: blue');
		}
	}, {
		key: 'goto',
		value: function goto(level, dir) {
			var container = _balajs2.default.one('#activities__by-cat');
			var cards = (0, _balajs2.default)('.category-card');
			var drilldown = _balajs2.default.one('#drilldown');
			var activity = _balajs2.default.one('#activity');
			var catMeta = _balajs2.default.one('#cat-meta');

			switch (level) {
				case 0:
					drilldown.setAttribute('data-active', 'none');
					container.className = 'selected';
					catMeta.className = 'hidden';
					(0, _animejs2.default)({
						targets: '.activities-meta p',
						opacity: [0, 1],
						duration: 500,
						easing: 'easeOutExpo',
						reverse: dir,
						complete: function complete() {
							(0, _animejs2.default)({
								targets: container,
								opacity: [0, 1],
								duration: 300,
								reverse: dir
							});
						}
					});
					break;

				// Activity list
				case 1:
					if (dir == 'reverse') {
						(0, _animejs2.default)({
							targets: activity,
							opacity: [1, 0],
							duration: 400,
							translateY: { value: 40, duration: 400 },
							easing: 'easeOutExpo',
							complete: function complete() {
								activity.className = 'hidden';
								(0, _animejs2.default)({
									targets: '#activities__by-cat',
									delay: 100,
									opacity: [1, 0],
									duration: 600,
									reverse: dir,
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
						this.navigate('activity');
						(0, _animejs2.default)({
							targets: '.activities-meta p',
							opacity: [1, 0],
							duration: 400,
							reverse: opts.direction,
							easing: 'easeOutExpo',
							complete: function complete() {
								(0, _animejs2.default)({
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

				// Activity Item
				case 2:
					activity.className = '';
					catMeta.className = 'hidden';
					(0, _animejs2.default)({
						targets: activity,
						opacity: [0, 1],
						duration: 400,
						translateY: { value: -40, duration: 800 },
						easing: 'easeInExpo'
					});
					break;
			}
		}
	}]);

	return Router;
}();

exports.default = Router;

},{"animejs":1,"balajs":27,"hasher":28}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _router = require('./router.js');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _router2.default();

var state = {

	store: {
		drill: {
			level: 0
		},
		categoryData: {},
		activityData: {}
	},

	mutate: function mutate(props) {
		// todo: validate props
		this.set(props);
		console.log('%c Datastore: ', 'background: orange; color: black', this.store);
	},

	set: function set(props) {
		this.store = Object.assign(this.store, props);
	},

	get: function get(key) {
		if (key == undefined) {
			return this.store;
		} else if (this.store.hasOwnProperty(key)) {
			return this.store[key];
		} else return null;
	},

	// takes an int and sets
	drillTo: function drillTo(level) {
		var direction = this.store.drill.level > level ? '' : 'reverse';
		this.store.drill.level = level;
		router.goto(level, direction);
	},

	getBreadcrumb: function getBreadcrumb() {
		var base = '';
		var cat = '';

		// breaks intentionally ommited for smart follow-through
		// depending on level, the string will update relevant parts
		switch (this.store.drill.level) {
			case 0:
				return null;
				break;
			case 2:
				cat = ' > ' + this.store.activityData.name;
			case 1:
				base = 'By category > ' + this.store.categoryData.name;
				break;
		}
		return base + cat;
	}

	// backone () { this.setDrillLevel(this.drillLevel - 1) }
};

exports.default = state;

},{"./router.js":38}]},{},[33])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYW5pbWVqcy9hbmltZS5taW4uanMiLCJub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL2JhbGFqcy9lczUvYmFsYS51bWQuanMiLCJub2RlX21vZHVsZXMvaGFzaGVyL2Rpc3QvanMvaGFzaGVyLmpzIiwibm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wZXRpdC1kb20vZGlzdC9wZXRpdC1kb20ubWluLmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9zaWduYWxzL2Rpc3Qvc2lnbmFscy5qcyIsInNyYy9zY3JpcHRzL2FjdGl2aXRpZXMvYWN0aXZpdGllcy5qcyIsInNyYy9zY3JpcHRzL2FjdGl2aXRpZXMvY29tcG9uZW50cy9hY3Rpdml0eS5qcyIsInNyYy9zY3JpcHRzL2FjdGl2aXRpZXMvY29tcG9uZW50cy9jYXQuanMiLCJzcmMvc2NyaXB0cy9hY3Rpdml0aWVzL3V0aWwvY29uZmlnLmpzIiwic3JjL3NjcmlwdHMvYWN0aXZpdGllcy91dGlsL2hlbHBlcnMuanMiLCJzcmMvc2NyaXB0cy9hY3Rpdml0aWVzL3V0aWwvcm91dGVyLmpzIiwic3JjL3NjcmlwdHMvYWN0aXZpdGllcy91dGlsL3N0YXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2hDQTs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9TQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3piQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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TUFBSyxhQUFVLEdBQVYsRUFBZTtBQUNuQixNQUFJLE9BQU8sU0FBWCxFQUFzQjtBQUNyQixVQUFPLEtBQUssS0FBWjtBQUNBLEdBRkQsTUFHSyxJQUFJLEtBQUssS0FBTCxDQUFXLGNBQVgsQ0FBMEIsR0FBMUIsQ0FBSixFQUFvQztBQUN4QyxVQUFPLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBUDtBQUNBLEdBRkksTUFHQSxPQUFPLElBQVA7QUFDTCxFQTVCWTs7QUE4QmI7QUFDQSxVQUFTLGlCQUFVLEtBQVYsRUFBaUI7QUFDekIsTUFBSSxZQUFhLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsS0FBakIsR0FBeUIsS0FBMUIsR0FBbUMsRUFBbkMsR0FBd0MsU0FBeEQ7QUFDQSxPQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLEtBQWpCLEdBQXlCLEtBQXpCO0FBQ0EsU0FBTyxJQUFQLENBQVksS0FBWixFQUFtQixTQUFuQjtBQUNBLEVBbkNZOztBQXFDYixnQkFBZSx5QkFBWTtBQUMxQixNQUFJLE9BQU8sRUFBWDtBQUNBLE1BQUksTUFBTSxFQUFWOztBQUVBO0FBQ0E7QUFDQSxVQUFRLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsS0FBekI7QUFDQyxRQUFLLENBQUw7QUFDQyxXQUFPLElBQVA7QUFDQTtBQUNELFFBQUssQ0FBTDtBQUNDLFVBQU0sUUFBUSxLQUFLLEtBQUwsQ0FBVyxZQUFYLENBQXdCLElBQXRDO0FBQ0QsUUFBSyxDQUFMO0FBQ0MsV0FBTyxtQkFBbUIsS0FBSyxLQUFMLENBQVcsWUFBWCxDQUF3QixJQUFsRDtBQUNBO0FBUkY7QUFVQSxTQUFPLE9BQU8sR0FBZDtBQUNBOztBQUdEO0FBekRhLENBQWQ7O2tCQTREZSxLIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLypcbiAyMDE3IEp1bGlhbiBHYXJuaWVyXG4gUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4qL1xudmFyICRqc2NvbXA9e3Njb3BlOnt9fTskanNjb21wLmRlZmluZVByb3BlcnR5PVwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzP09iamVjdC5kZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbihlLHIscCl7aWYocC5nZXR8fHAuc2V0KXRocm93IG5ldyBUeXBlRXJyb3IoXCJFUzMgZG9lcyBub3Qgc3VwcG9ydCBnZXR0ZXJzIGFuZCBzZXR0ZXJzLlwiKTtlIT1BcnJheS5wcm90b3R5cGUmJmUhPU9iamVjdC5wcm90b3R5cGUmJihlW3JdPXAudmFsdWUpfTskanNjb21wLmdldEdsb2JhbD1mdW5jdGlvbihlKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3c9PT1lP2U6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbCYmbnVsbCE9Z2xvYmFsP2dsb2JhbDplfTskanNjb21wLmdsb2JhbD0kanNjb21wLmdldEdsb2JhbCh0aGlzKTskanNjb21wLlNZTUJPTF9QUkVGSVg9XCJqc2NvbXBfc3ltYm9sX1wiO1xuJGpzY29tcC5pbml0U3ltYm9sPWZ1bmN0aW9uKCl7JGpzY29tcC5pbml0U3ltYm9sPWZ1bmN0aW9uKCl7fTskanNjb21wLmdsb2JhbC5TeW1ib2x8fCgkanNjb21wLmdsb2JhbC5TeW1ib2w9JGpzY29tcC5TeW1ib2wpfTskanNjb21wLnN5bWJvbENvdW50ZXJfPTA7JGpzY29tcC5TeW1ib2w9ZnVuY3Rpb24oZSl7cmV0dXJuICRqc2NvbXAuU1lNQk9MX1BSRUZJWCsoZXx8XCJcIikrJGpzY29tcC5zeW1ib2xDb3VudGVyXysrfTtcbiRqc2NvbXAuaW5pdFN5bWJvbEl0ZXJhdG9yPWZ1bmN0aW9uKCl7JGpzY29tcC5pbml0U3ltYm9sKCk7dmFyIGU9JGpzY29tcC5nbG9iYWwuU3ltYm9sLml0ZXJhdG9yO2V8fChlPSRqc2NvbXAuZ2xvYmFsLlN5bWJvbC5pdGVyYXRvcj0kanNjb21wLmdsb2JhbC5TeW1ib2woXCJpdGVyYXRvclwiKSk7XCJmdW5jdGlvblwiIT10eXBlb2YgQXJyYXkucHJvdG90eXBlW2VdJiYkanNjb21wLmRlZmluZVByb3BlcnR5KEFycmF5LnByb3RvdHlwZSxlLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gJGpzY29tcC5hcnJheUl0ZXJhdG9yKHRoaXMpfX0pOyRqc2NvbXAuaW5pdFN5bWJvbEl0ZXJhdG9yPWZ1bmN0aW9uKCl7fX07JGpzY29tcC5hcnJheUl0ZXJhdG9yPWZ1bmN0aW9uKGUpe3ZhciByPTA7cmV0dXJuICRqc2NvbXAuaXRlcmF0b3JQcm90b3R5cGUoZnVuY3Rpb24oKXtyZXR1cm4gcjxlLmxlbmd0aD97ZG9uZTohMSx2YWx1ZTplW3IrK119Ontkb25lOiEwfX0pfTtcbiRqc2NvbXAuaXRlcmF0b3JQcm90b3R5cGU9ZnVuY3Rpb24oZSl7JGpzY29tcC5pbml0U3ltYm9sSXRlcmF0b3IoKTtlPXtuZXh0OmV9O2VbJGpzY29tcC5nbG9iYWwuU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfTtyZXR1cm4gZX07JGpzY29tcC5hcnJheT0kanNjb21wLmFycmF5fHx7fTskanNjb21wLml0ZXJhdG9yRnJvbUFycmF5PWZ1bmN0aW9uKGUscil7JGpzY29tcC5pbml0U3ltYm9sSXRlcmF0b3IoKTtlIGluc3RhbmNlb2YgU3RyaW5nJiYoZSs9XCJcIik7dmFyIHA9MCxtPXtuZXh0OmZ1bmN0aW9uKCl7aWYocDxlLmxlbmd0aCl7dmFyIHU9cCsrO3JldHVybnt2YWx1ZTpyKHUsZVt1XSksZG9uZTohMX19bS5uZXh0PWZ1bmN0aW9uKCl7cmV0dXJue2RvbmU6ITAsdmFsdWU6dm9pZCAwfX07cmV0dXJuIG0ubmV4dCgpfX07bVtTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIG19O3JldHVybiBtfTtcbiRqc2NvbXAucG9seWZpbGw9ZnVuY3Rpb24oZSxyLHAsbSl7aWYocil7cD0kanNjb21wLmdsb2JhbDtlPWUuc3BsaXQoXCIuXCIpO2ZvcihtPTA7bTxlLmxlbmd0aC0xO20rKyl7dmFyIHU9ZVttXTt1IGluIHB8fChwW3VdPXt9KTtwPXBbdV19ZT1lW2UubGVuZ3RoLTFdO209cFtlXTtyPXIobSk7ciE9bSYmbnVsbCE9ciYmJGpzY29tcC5kZWZpbmVQcm9wZXJ0eShwLGUse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpyfSl9fTskanNjb21wLnBvbHlmaWxsKFwiQXJyYXkucHJvdG90eXBlLmtleXNcIixmdW5jdGlvbihlKXtyZXR1cm4gZT9lOmZ1bmN0aW9uKCl7cmV0dXJuICRqc2NvbXAuaXRlcmF0b3JGcm9tQXJyYXkodGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gZX0pfX0sXCJlczYtaW1wbFwiLFwiZXMzXCIpO3ZhciAkanNjb21wJHRoaXM9dGhpcztcbihmdW5jdGlvbihlLHIpe1wiZnVuY3Rpb25cIj09PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHIpOlwib2JqZWN0XCI9PT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1yKCk6ZS5hbmltZT1yKCl9KSh0aGlzLGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShhKXtpZighaC5jb2woYSkpdHJ5e3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGEpfWNhdGNoKGMpe319ZnVuY3Rpb24gcihhLGMpe2Zvcih2YXIgZD1hLmxlbmd0aCxiPTI8PWFyZ3VtZW50cy5sZW5ndGg/YXJndW1lbnRzWzFdOnZvaWQgMCxmPVtdLG49MDtuPGQ7bisrKWlmKG4gaW4gYSl7dmFyIGs9YVtuXTtjLmNhbGwoYixrLG4sYSkmJmYucHVzaChrKX1yZXR1cm4gZn1mdW5jdGlvbiBwKGEpe3JldHVybiBhLnJlZHVjZShmdW5jdGlvbihhLGQpe3JldHVybiBhLmNvbmNhdChoLmFycihkKT9wKGQpOmQpfSxbXSl9ZnVuY3Rpb24gbShhKXtpZihoLmFycihhKSlyZXR1cm4gYTtcbmguc3RyKGEpJiYoYT1lKGEpfHxhKTtyZXR1cm4gYSBpbnN0YW5jZW9mIE5vZGVMaXN0fHxhIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24/W10uc2xpY2UuY2FsbChhKTpbYV19ZnVuY3Rpb24gdShhLGMpe3JldHVybiBhLnNvbWUoZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1jfSl9ZnVuY3Rpb24gQyhhKXt2YXIgYz17fSxkO2ZvcihkIGluIGEpY1tkXT1hW2RdO3JldHVybiBjfWZ1bmN0aW9uIEQoYSxjKXt2YXIgZD1DKGEpLGI7Zm9yKGIgaW4gYSlkW2JdPWMuaGFzT3duUHJvcGVydHkoYik/Y1tiXTphW2JdO3JldHVybiBkfWZ1bmN0aW9uIHooYSxjKXt2YXIgZD1DKGEpLGI7Zm9yKGIgaW4gYylkW2JdPWgudW5kKGFbYl0pP2NbYl06YVtiXTtyZXR1cm4gZH1mdW5jdGlvbiBUKGEpe2E9YS5yZXBsYWNlKC9eIz8oW2EtZlxcZF0pKFthLWZcXGRdKShbYS1mXFxkXSkkL2ksZnVuY3Rpb24oYSxjLGQsayl7cmV0dXJuIGMrYytkK2QraytrfSk7dmFyIGM9L14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGEpO1xuYT1wYXJzZUludChjWzFdLDE2KTt2YXIgZD1wYXJzZUludChjWzJdLDE2KSxjPXBhcnNlSW50KGNbM10sMTYpO3JldHVyblwicmdiYShcIithK1wiLFwiK2QrXCIsXCIrYytcIiwxKVwifWZ1bmN0aW9uIFUoYSl7ZnVuY3Rpb24gYyhhLGMsYil7MD5iJiYoYis9MSk7MTxiJiYtLWI7cmV0dXJuIGI8MS82P2ErNiooYy1hKSpiOi41PmI/YzpiPDIvMz9hKyhjLWEpKigyLzMtYikqNjphfXZhciBkPS9oc2xcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSVcXCkvZy5leGVjKGEpfHwvaHNsYVxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspXFwpL2cuZXhlYyhhKTthPXBhcnNlSW50KGRbMV0pLzM2MDt2YXIgYj1wYXJzZUludChkWzJdKS8xMDAsZj1wYXJzZUludChkWzNdKS8xMDAsZD1kWzRdfHwxO2lmKDA9PWIpZj1iPWE9ZjtlbHNle3ZhciBuPS41PmY/ZiooMStiKTpmK2ItZipiLGs9MipmLW4sZj1jKGssbixhKzEvMyksYj1jKGssbixhKTthPWMoayxuLGEtMS8zKX1yZXR1cm5cInJnYmEoXCIrXG4yNTUqZitcIixcIisyNTUqYitcIixcIisyNTUqYStcIixcIitkK1wiKVwifWZ1bmN0aW9uIHkoYSl7aWYoYT0vKFtcXCtcXC1dP1swLTkjXFwuXSspKCV8cHh8cHR8ZW18cmVtfGlufGNtfG1tfGV4fGNofHBjfHZ3fHZofHZtaW58dm1heHxkZWd8cmFkfHR1cm4pPyQvLmV4ZWMoYSkpcmV0dXJuIGFbMl19ZnVuY3Rpb24gVihhKXtpZigtMTxhLmluZGV4T2YoXCJ0cmFuc2xhdGVcIil8fFwicGVyc3BlY3RpdmVcIj09PWEpcmV0dXJuXCJweFwiO2lmKC0xPGEuaW5kZXhPZihcInJvdGF0ZVwiKXx8LTE8YS5pbmRleE9mKFwic2tld1wiKSlyZXR1cm5cImRlZ1wifWZ1bmN0aW9uIEkoYSxjKXtyZXR1cm4gaC5mbmMoYSk/YShjLnRhcmdldCxjLmlkLGMudG90YWwpOmF9ZnVuY3Rpb24gRShhLGMpe2lmKGMgaW4gYS5zdHlsZSlyZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShhKS5nZXRQcm9wZXJ0eVZhbHVlKGMucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZyxcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCkpfHxcIjBcIn1mdW5jdGlvbiBKKGEsYyl7aWYoaC5kb20oYSkmJlxudShXLGMpKXJldHVyblwidHJhbnNmb3JtXCI7aWYoaC5kb20oYSkmJihhLmdldEF0dHJpYnV0ZShjKXx8aC5zdmcoYSkmJmFbY10pKXJldHVyblwiYXR0cmlidXRlXCI7aWYoaC5kb20oYSkmJlwidHJhbnNmb3JtXCIhPT1jJiZFKGEsYykpcmV0dXJuXCJjc3NcIjtpZihudWxsIT1hW2NdKXJldHVyblwib2JqZWN0XCJ9ZnVuY3Rpb24gWChhLGMpe3ZhciBkPVYoYyksZD0tMTxjLmluZGV4T2YoXCJzY2FsZVwiKT8xOjArZDthPWEuc3R5bGUudHJhbnNmb3JtO2lmKCFhKXJldHVybiBkO2Zvcih2YXIgYj1bXSxmPVtdLG49W10saz0vKFxcdyspXFwoKC4rPylcXCkvZztiPWsuZXhlYyhhKTspZi5wdXNoKGJbMV0pLG4ucHVzaChiWzJdKTthPXIobixmdW5jdGlvbihhLGIpe3JldHVybiBmW2JdPT09Y30pO3JldHVybiBhLmxlbmd0aD9hWzBdOmR9ZnVuY3Rpb24gSyhhLGMpe3N3aXRjaChKKGEsYykpe2Nhc2UgXCJ0cmFuc2Zvcm1cIjpyZXR1cm4gWChhLGMpO2Nhc2UgXCJjc3NcIjpyZXR1cm4gRShhLGMpO2Nhc2UgXCJhdHRyaWJ1dGVcIjpyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoYyl9cmV0dXJuIGFbY118fFxuMH1mdW5jdGlvbiBMKGEsYyl7dmFyIGQ9L14oXFwqPXxcXCs9fC09KS8uZXhlYyhhKTtpZighZClyZXR1cm4gYTt2YXIgYj15KGEpfHwwO2M9cGFyc2VGbG9hdChjKTthPXBhcnNlRmxvYXQoYS5yZXBsYWNlKGRbMF0sXCJcIikpO3N3aXRjaChkWzBdWzBdKXtjYXNlIFwiK1wiOnJldHVybiBjK2ErYjtjYXNlIFwiLVwiOnJldHVybiBjLWErYjtjYXNlIFwiKlwiOnJldHVybiBjKmErYn19ZnVuY3Rpb24gRihhLGMpe3JldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coYy54LWEueCwyKStNYXRoLnBvdyhjLnktYS55LDIpKX1mdW5jdGlvbiBNKGEpe2E9YS5wb2ludHM7Zm9yKHZhciBjPTAsZCxiPTA7YjxhLm51bWJlck9mSXRlbXM7YisrKXt2YXIgZj1hLmdldEl0ZW0oYik7MDxiJiYoYys9RihkLGYpKTtkPWZ9cmV0dXJuIGN9ZnVuY3Rpb24gTihhKXtpZihhLmdldFRvdGFsTGVuZ3RoKXJldHVybiBhLmdldFRvdGFsTGVuZ3RoKCk7c3dpdGNoKGEudGFnTmFtZS50b0xvd2VyQ2FzZSgpKXtjYXNlIFwiY2lyY2xlXCI6cmV0dXJuIDIqXG5NYXRoLlBJKmEuZ2V0QXR0cmlidXRlKFwiclwiKTtjYXNlIFwicmVjdFwiOnJldHVybiAyKmEuZ2V0QXR0cmlidXRlKFwid2lkdGhcIikrMiphLmdldEF0dHJpYnV0ZShcImhlaWdodFwiKTtjYXNlIFwibGluZVwiOnJldHVybiBGKHt4OmEuZ2V0QXR0cmlidXRlKFwieDFcIikseTphLmdldEF0dHJpYnV0ZShcInkxXCIpfSx7eDphLmdldEF0dHJpYnV0ZShcIngyXCIpLHk6YS5nZXRBdHRyaWJ1dGUoXCJ5MlwiKX0pO2Nhc2UgXCJwb2x5bGluZVwiOnJldHVybiBNKGEpO2Nhc2UgXCJwb2x5Z29uXCI6dmFyIGM9YS5wb2ludHM7cmV0dXJuIE0oYSkrRihjLmdldEl0ZW0oYy5udW1iZXJPZkl0ZW1zLTEpLGMuZ2V0SXRlbSgwKSl9fWZ1bmN0aW9uIFkoYSxjKXtmdW5jdGlvbiBkKGIpe2I9dm9pZCAwPT09Yj8wOmI7cmV0dXJuIGEuZWwuZ2V0UG9pbnRBdExlbmd0aCgxPD1jK2I/YytiOjApfXZhciBiPWQoKSxmPWQoLTEpLG49ZCgxKTtzd2l0Y2goYS5wcm9wZXJ0eSl7Y2FzZSBcInhcIjpyZXR1cm4gYi54O2Nhc2UgXCJ5XCI6cmV0dXJuIGIueTtcbmNhc2UgXCJhbmdsZVwiOnJldHVybiAxODAqTWF0aC5hdGFuMihuLnktZi55LG4ueC1mLngpL01hdGguUEl9fWZ1bmN0aW9uIE8oYSxjKXt2YXIgZD0vLT9cXGQqXFwuP1xcZCsvZyxiO2I9aC5wdGgoYSk/YS50b3RhbExlbmd0aDphO2lmKGguY29sKGIpKWlmKGgucmdiKGIpKXt2YXIgZj0vcmdiXFwoKFxcZCssXFxzKltcXGRdKyxcXHMqW1xcZF0rKVxcKS9nLmV4ZWMoYik7Yj1mP1wicmdiYShcIitmWzFdK1wiLDEpXCI6Yn1lbHNlIGI9aC5oZXgoYik/VChiKTpoLmhzbChiKT9VKGIpOnZvaWQgMDtlbHNlIGY9KGY9eShiKSk/Yi5zdWJzdHIoMCxiLmxlbmd0aC1mLmxlbmd0aCk6YixiPWMmJiEvXFxzL2cudGVzdChiKT9mK2M6ZjtiKz1cIlwiO3JldHVybntvcmlnaW5hbDpiLG51bWJlcnM6Yi5tYXRjaChkKT9iLm1hdGNoKGQpLm1hcChOdW1iZXIpOlswXSxzdHJpbmdzOmguc3RyKGEpfHxjP2Iuc3BsaXQoZCk6W119fWZ1bmN0aW9uIFAoYSl7YT1hP3AoaC5hcnIoYSk/YS5tYXAobSk6bShhKSk6W107cmV0dXJuIHIoYSxcbmZ1bmN0aW9uKGEsZCxiKXtyZXR1cm4gYi5pbmRleE9mKGEpPT09ZH0pfWZ1bmN0aW9uIFooYSl7dmFyIGM9UChhKTtyZXR1cm4gYy5tYXAoZnVuY3Rpb24oYSxiKXtyZXR1cm57dGFyZ2V0OmEsaWQ6Yix0b3RhbDpjLmxlbmd0aH19KX1mdW5jdGlvbiBhYShhLGMpe3ZhciBkPUMoYyk7aWYoaC5hcnIoYSkpe3ZhciBiPWEubGVuZ3RoOzIhPT1ifHxoLm9iaihhWzBdKT9oLmZuYyhjLmR1cmF0aW9uKXx8KGQuZHVyYXRpb249Yy5kdXJhdGlvbi9iKTphPXt2YWx1ZTphfX1yZXR1cm4gbShhKS5tYXAoZnVuY3Rpb24oYSxiKXtiPWI/MDpjLmRlbGF5O2E9aC5vYmooYSkmJiFoLnB0aChhKT9hOnt2YWx1ZTphfTtoLnVuZChhLmRlbGF5KSYmKGEuZGVsYXk9Yik7cmV0dXJuIGF9KS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIHooYSxkKX0pfWZ1bmN0aW9uIGJhKGEsYyl7dmFyIGQ9e30sYjtmb3IoYiBpbiBhKXt2YXIgZj1JKGFbYl0sYyk7aC5hcnIoZikmJihmPWYubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBJKGEsXG5jKX0pLDE9PT1mLmxlbmd0aCYmKGY9ZlswXSkpO2RbYl09Zn1kLmR1cmF0aW9uPXBhcnNlRmxvYXQoZC5kdXJhdGlvbik7ZC5kZWxheT1wYXJzZUZsb2F0KGQuZGVsYXkpO3JldHVybiBkfWZ1bmN0aW9uIGNhKGEpe3JldHVybiBoLmFycihhKT9BLmFwcGx5KHRoaXMsYSk6UVthXX1mdW5jdGlvbiBkYShhLGMpe3ZhciBkO3JldHVybiBhLnR3ZWVucy5tYXAoZnVuY3Rpb24oYil7Yj1iYShiLGMpO3ZhciBmPWIudmFsdWUsZT1LKGMudGFyZ2V0LGEubmFtZSksaz1kP2QudG8ub3JpZ2luYWw6ZSxrPWguYXJyKGYpP2ZbMF06ayx3PUwoaC5hcnIoZik/ZlsxXTpmLGspLGU9eSh3KXx8eShrKXx8eShlKTtiLmZyb209TyhrLGUpO2IudG89Tyh3LGUpO2Iuc3RhcnQ9ZD9kLmVuZDphLm9mZnNldDtiLmVuZD1iLnN0YXJ0K2IuZGVsYXkrYi5kdXJhdGlvbjtiLmVhc2luZz1jYShiLmVhc2luZyk7Yi5lbGFzdGljaXR5PSgxRTMtTWF0aC5taW4oTWF0aC5tYXgoYi5lbGFzdGljaXR5LDEpLDk5OSkpL1xuMUUzO2IuaXNQYXRoPWgucHRoKGYpO2IuaXNDb2xvcj1oLmNvbChiLmZyb20ub3JpZ2luYWwpO2IuaXNDb2xvciYmKGIucm91bmQ9MSk7cmV0dXJuIGQ9Yn0pfWZ1bmN0aW9uIGVhKGEsYyl7cmV0dXJuIHIocChhLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gYy5tYXAoZnVuY3Rpb24oYil7dmFyIGM9SihhLnRhcmdldCxiLm5hbWUpO2lmKGMpe3ZhciBkPWRhKGIsYSk7Yj17dHlwZTpjLHByb3BlcnR5OmIubmFtZSxhbmltYXRhYmxlOmEsdHdlZW5zOmQsZHVyYXRpb246ZFtkLmxlbmd0aC0xXS5lbmQsZGVsYXk6ZFswXS5kZWxheX19ZWxzZSBiPXZvaWQgMDtyZXR1cm4gYn0pfSkpLGZ1bmN0aW9uKGEpe3JldHVybiFoLnVuZChhKX0pfWZ1bmN0aW9uIFIoYSxjLGQsYil7dmFyIGY9XCJkZWxheVwiPT09YTtyZXR1cm4gYy5sZW5ndGg/KGY/TWF0aC5taW46TWF0aC5tYXgpLmFwcGx5KE1hdGgsYy5tYXAoZnVuY3Rpb24oYil7cmV0dXJuIGJbYV19KSk6Zj9iLmRlbGF5OmQub2Zmc2V0K2IuZGVsYXkrXG5iLmR1cmF0aW9ufWZ1bmN0aW9uIGZhKGEpe3ZhciBjPUQoZ2EsYSksZD1EKFMsYSksYj1aKGEudGFyZ2V0cyksZj1bXSxlPXooYyxkKSxrO2ZvcihrIGluIGEpZS5oYXNPd25Qcm9wZXJ0eShrKXx8XCJ0YXJnZXRzXCI9PT1rfHxmLnB1c2goe25hbWU6ayxvZmZzZXQ6ZS5vZmZzZXQsdHdlZW5zOmFhKGFba10sZCl9KTthPWVhKGIsZik7cmV0dXJuIHooYyx7Y2hpbGRyZW46W10sYW5pbWF0YWJsZXM6YixhbmltYXRpb25zOmEsZHVyYXRpb246UihcImR1cmF0aW9uXCIsYSxjLGQpLGRlbGF5OlIoXCJkZWxheVwiLGEsYyxkKX0pfWZ1bmN0aW9uIHEoYSl7ZnVuY3Rpb24gYygpe3JldHVybiB3aW5kb3cuUHJvbWlzZSYmbmV3IFByb21pc2UoZnVuY3Rpb24oYSl7cmV0dXJuIHA9YX0pfWZ1bmN0aW9uIGQoYSl7cmV0dXJuIGcucmV2ZXJzZWQ/Zy5kdXJhdGlvbi1hOmF9ZnVuY3Rpb24gYihhKXtmb3IodmFyIGI9MCxjPXt9LGQ9Zy5hbmltYXRpb25zLGY9ZC5sZW5ndGg7YjxmOyl7dmFyIGU9ZFtiXSxcbms9ZS5hbmltYXRhYmxlLGg9ZS50d2VlbnMsbj1oLmxlbmd0aC0xLGw9aFtuXTtuJiYobD1yKGgsZnVuY3Rpb24oYil7cmV0dXJuIGE8Yi5lbmR9KVswXXx8bCk7Zm9yKHZhciBoPU1hdGgubWluKE1hdGgubWF4KGEtbC5zdGFydC1sLmRlbGF5LDApLGwuZHVyYXRpb24pL2wuZHVyYXRpb24sdz1pc05hTihoKT8xOmwuZWFzaW5nKGgsbC5lbGFzdGljaXR5KSxoPWwudG8uc3RyaW5ncyxwPWwucm91bmQsbj1bXSxtPXZvaWQgMCxtPWwudG8ubnVtYmVycy5sZW5ndGgsdD0wO3Q8bTt0Kyspe3ZhciB4PXZvaWQgMCx4PWwudG8ubnVtYmVyc1t0XSxxPWwuZnJvbS5udW1iZXJzW3RdLHg9bC5pc1BhdGg/WShsLnZhbHVlLHcqeCk6cSt3Kih4LXEpO3AmJihsLmlzQ29sb3ImJjI8dHx8KHg9TWF0aC5yb3VuZCh4KnApL3ApKTtuLnB1c2goeCl9aWYobD1oLmxlbmd0aClmb3IobT1oWzBdLHc9MDt3PGw7dysrKXA9aFt3KzFdLHQ9blt3XSxpc05hTih0KXx8KG09cD9tKyh0K3ApOm0rKHQrXCIgXCIpKTtcbmVsc2UgbT1uWzBdO2hhW2UudHlwZV0oay50YXJnZXQsZS5wcm9wZXJ0eSxtLGMsay5pZCk7ZS5jdXJyZW50VmFsdWU9bTtiKyt9aWYoYj1PYmplY3Qua2V5cyhjKS5sZW5ndGgpZm9yKGQ9MDtkPGI7ZCsrKUh8fChIPUUoZG9jdW1lbnQuYm9keSxcInRyYW5zZm9ybVwiKT9cInRyYW5zZm9ybVwiOlwiLXdlYmtpdC10cmFuc2Zvcm1cIiksZy5hbmltYXRhYmxlc1tkXS50YXJnZXQuc3R5bGVbSF09Y1tkXS5qb2luKFwiIFwiKTtnLmN1cnJlbnRUaW1lPWE7Zy5wcm9ncmVzcz1hL2cuZHVyYXRpb24qMTAwfWZ1bmN0aW9uIGYoYSl7aWYoZ1thXSlnW2FdKGcpfWZ1bmN0aW9uIGUoKXtnLnJlbWFpbmluZyYmITAhPT1nLnJlbWFpbmluZyYmZy5yZW1haW5pbmctLX1mdW5jdGlvbiBrKGEpe3ZhciBrPWcuZHVyYXRpb24sbj1nLm9mZnNldCx3PW4rZy5kZWxheSxyPWcuY3VycmVudFRpbWUseD1nLnJldmVyc2VkLHE9ZChhKTtpZihnLmNoaWxkcmVuLmxlbmd0aCl7dmFyIHU9Zy5jaGlsZHJlbix2PXUubGVuZ3RoO1xuaWYocT49Zy5jdXJyZW50VGltZSlmb3IodmFyIEc9MDtHPHY7RysrKXVbR10uc2VlayhxKTtlbHNlIGZvcig7di0tOyl1W3ZdLnNlZWsocSl9aWYocT49d3x8IWspZy5iZWdhbnx8KGcuYmVnYW49ITAsZihcImJlZ2luXCIpKSxmKFwicnVuXCIpO2lmKHE+biYmcTxrKWIocSk7ZWxzZSBpZihxPD1uJiYwIT09ciYmKGIoMCkseCYmZSgpKSxxPj1rJiZyIT09a3x8IWspYihrKSx4fHxlKCk7ZihcInVwZGF0ZVwiKTthPj1rJiYoZy5yZW1haW5pbmc/KHQ9aCxcImFsdGVybmF0ZVwiPT09Zy5kaXJlY3Rpb24mJihnLnJldmVyc2VkPSFnLnJldmVyc2VkKSk6KGcucGF1c2UoKSxnLmNvbXBsZXRlZHx8KGcuY29tcGxldGVkPSEwLGYoXCJjb21wbGV0ZVwiKSxcIlByb21pc2VcImluIHdpbmRvdyYmKHAoKSxtPWMoKSkpKSxsPTApfWE9dm9pZCAwPT09YT97fTphO3ZhciBoLHQsbD0wLHA9bnVsbCxtPWMoKSxnPWZhKGEpO2cucmVzZXQ9ZnVuY3Rpb24oKXt2YXIgYT1nLmRpcmVjdGlvbixjPWcubG9vcDtnLmN1cnJlbnRUaW1lPVxuMDtnLnByb2dyZXNzPTA7Zy5wYXVzZWQ9ITA7Zy5iZWdhbj0hMTtnLmNvbXBsZXRlZD0hMTtnLnJldmVyc2VkPVwicmV2ZXJzZVwiPT09YTtnLnJlbWFpbmluZz1cImFsdGVybmF0ZVwiPT09YSYmMT09PWM/MjpjO2IoMCk7Zm9yKGE9Zy5jaGlsZHJlbi5sZW5ndGg7YS0tOylnLmNoaWxkcmVuW2FdLnJlc2V0KCl9O2cudGljaz1mdW5jdGlvbihhKXtoPWE7dHx8KHQ9aCk7aygobCtoLXQpKnEuc3BlZWQpfTtnLnNlZWs9ZnVuY3Rpb24oYSl7ayhkKGEpKX07Zy5wYXVzZT1mdW5jdGlvbigpe3ZhciBhPXYuaW5kZXhPZihnKTstMTxhJiZ2LnNwbGljZShhLDEpO2cucGF1c2VkPSEwfTtnLnBsYXk9ZnVuY3Rpb24oKXtnLnBhdXNlZCYmKGcucGF1c2VkPSExLHQ9MCxsPWQoZy5jdXJyZW50VGltZSksdi5wdXNoKGcpLEJ8fGlhKCkpfTtnLnJldmVyc2U9ZnVuY3Rpb24oKXtnLnJldmVyc2VkPSFnLnJldmVyc2VkO3Q9MDtsPWQoZy5jdXJyZW50VGltZSl9O2cucmVzdGFydD1mdW5jdGlvbigpe2cucGF1c2UoKTtcbmcucmVzZXQoKTtnLnBsYXkoKX07Zy5maW5pc2hlZD1tO2cucmVzZXQoKTtnLmF1dG9wbGF5JiZnLnBsYXkoKTtyZXR1cm4gZ312YXIgZ2E9e3VwZGF0ZTp2b2lkIDAsYmVnaW46dm9pZCAwLHJ1bjp2b2lkIDAsY29tcGxldGU6dm9pZCAwLGxvb3A6MSxkaXJlY3Rpb246XCJub3JtYWxcIixhdXRvcGxheTohMCxvZmZzZXQ6MH0sUz17ZHVyYXRpb246MUUzLGRlbGF5OjAsZWFzaW5nOlwiZWFzZU91dEVsYXN0aWNcIixlbGFzdGljaXR5OjUwMCxyb3VuZDowfSxXPVwidHJhbnNsYXRlWCB0cmFuc2xhdGVZIHRyYW5zbGF0ZVogcm90YXRlIHJvdGF0ZVggcm90YXRlWSByb3RhdGVaIHNjYWxlIHNjYWxlWCBzY2FsZVkgc2NhbGVaIHNrZXdYIHNrZXdZIHBlcnNwZWN0aXZlXCIuc3BsaXQoXCIgXCIpLEgsaD17YXJyOmZ1bmN0aW9uKGEpe3JldHVybiBBcnJheS5pc0FycmF5KGEpfSxvYmo6ZnVuY3Rpb24oYSl7cmV0dXJuLTE8T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpLmluZGV4T2YoXCJPYmplY3RcIil9LFxucHRoOmZ1bmN0aW9uKGEpe3JldHVybiBoLm9iaihhKSYmYS5oYXNPd25Qcm9wZXJ0eShcInRvdGFsTGVuZ3RoXCIpfSxzdmc6ZnVuY3Rpb24oYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBTVkdFbGVtZW50fSxkb206ZnVuY3Rpb24oYSl7cmV0dXJuIGEubm9kZVR5cGV8fGguc3ZnKGEpfSxzdHI6ZnVuY3Rpb24oYSl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhfSxmbmM6ZnVuY3Rpb24oYSl7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGF9LHVuZDpmdW5jdGlvbihhKXtyZXR1cm5cInVuZGVmaW5lZFwiPT09dHlwZW9mIGF9LGhleDpmdW5jdGlvbihhKXtyZXR1cm4vKF4jWzAtOUEtRl17Nn0kKXwoXiNbMC05QS1GXXszfSQpL2kudGVzdChhKX0scmdiOmZ1bmN0aW9uKGEpe3JldHVybi9ecmdiLy50ZXN0KGEpfSxoc2w6ZnVuY3Rpb24oYSl7cmV0dXJuL15oc2wvLnRlc3QoYSl9LGNvbDpmdW5jdGlvbihhKXtyZXR1cm4gaC5oZXgoYSl8fGgucmdiKGEpfHxoLmhzbChhKX19LEE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEsXG5kLGIpe3JldHVybigoKDEtMypiKzMqZCkqYSsoMypiLTYqZCkpKmErMypkKSphfXJldHVybiBmdW5jdGlvbihjLGQsYixmKXtpZigwPD1jJiYxPj1jJiYwPD1iJiYxPj1iKXt2YXIgZT1uZXcgRmxvYXQzMkFycmF5KDExKTtpZihjIT09ZHx8YiE9PWYpZm9yKHZhciBrPTA7MTE+azsrK2spZVtrXT1hKC4xKmssYyxiKTtyZXR1cm4gZnVuY3Rpb24oayl7aWYoYz09PWQmJmI9PT1mKXJldHVybiBrO2lmKDA9PT1rKXJldHVybiAwO2lmKDE9PT1rKXJldHVybiAxO2Zvcih2YXIgaD0wLGw9MTsxMCE9PWwmJmVbbF08PWs7KytsKWgrPS4xOy0tbDt2YXIgbD1oKyhrLWVbbF0pLyhlW2wrMV0tZVtsXSkqLjEsbj0zKigxLTMqYiszKmMpKmwqbCsyKigzKmItNipjKSpsKzMqYztpZiguMDAxPD1uKXtmb3IoaD0wOzQ+aDsrK2gpe249MyooMS0zKmIrMypjKSpsKmwrMiooMypiLTYqYykqbCszKmM7aWYoMD09PW4pYnJlYWs7dmFyIG09YShsLGMsYiktayxsPWwtbS9ufWs9bH1lbHNlIGlmKDA9PT1cbm4paz1sO2Vsc2V7dmFyIGw9aCxoPWgrLjEsZz0wO2RvIG09bCsoaC1sKS8yLG49YShtLGMsYiktaywwPG4/aD1tOmw9bTt3aGlsZSgxZS03PE1hdGguYWJzKG4pJiYxMD4rK2cpO2s9bX1yZXR1cm4gYShrLGQsZil9fX19KCksUT1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSxiKXtyZXR1cm4gMD09PWF8fDE9PT1hP2E6LU1hdGgucG93KDIsMTAqKGEtMSkpKk1hdGguc2luKDIqKGEtMS1iLygyKk1hdGguUEkpKk1hdGguYXNpbigxKSkqTWF0aC5QSS9iKX12YXIgYz1cIlF1YWQgQ3ViaWMgUXVhcnQgUXVpbnQgU2luZSBFeHBvIENpcmMgQmFjayBFbGFzdGljXCIuc3BsaXQoXCIgXCIpLGQ9e0luOltbLjU1LC4wODUsLjY4LC41M10sWy41NSwuMDU1LC42NzUsLjE5XSxbLjg5NSwuMDMsLjY4NSwuMjJdLFsuNzU1LC4wNSwuODU1LC4wNl0sWy40NywwLC43NDUsLjcxNV0sWy45NSwuMDUsLjc5NSwuMDM1XSxbLjYsLjA0LC45OCwuMzM1XSxbLjYsLS4yOCwuNzM1LC4wNDVdLGFdLE91dDpbWy4yNSxcbi40NiwuNDUsLjk0XSxbLjIxNSwuNjEsLjM1NSwxXSxbLjE2NSwuODQsLjQ0LDFdLFsuMjMsMSwuMzIsMV0sWy4zOSwuNTc1LC41NjUsMV0sWy4xOSwxLC4yMiwxXSxbLjA3NSwuODIsLjE2NSwxXSxbLjE3NSwuODg1LC4zMiwxLjI3NV0sZnVuY3Rpb24oYixjKXtyZXR1cm4gMS1hKDEtYixjKX1dLEluT3V0OltbLjQ1NSwuMDMsLjUxNSwuOTU1XSxbLjY0NSwuMDQ1LC4zNTUsMV0sWy43NywwLC4xNzUsMV0sWy44NiwwLC4wNywxXSxbLjQ0NSwuMDUsLjU1LC45NV0sWzEsMCwwLDFdLFsuNzg1LC4xMzUsLjE1LC44Nl0sWy42OCwtLjU1LC4yNjUsMS41NV0sZnVuY3Rpb24oYixjKXtyZXR1cm4uNT5iP2EoMipiLGMpLzI6MS1hKC0yKmIrMixjKS8yfV19LGI9e2xpbmVhcjpBKC4yNSwuMjUsLjc1LC43NSl9LGY9e30sZTtmb3IoZSBpbiBkKWYudHlwZT1lLGRbZi50eXBlXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihkLGYpe2JbXCJlYXNlXCIrYS50eXBlK2NbZl1dPWguZm5jKGQpP1xuZDpBLmFwcGx5KCRqc2NvbXAkdGhpcyxkKX19KGYpKSxmPXt0eXBlOmYudHlwZX07cmV0dXJuIGJ9KCksaGE9e2NzczpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGEuc3R5bGVbY109ZH0sYXR0cmlidXRlOmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gYS5zZXRBdHRyaWJ1dGUoYyxkKX0sb2JqZWN0OmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gYVtjXT1kfSx0cmFuc2Zvcm06ZnVuY3Rpb24oYSxjLGQsYixmKXtiW2ZdfHwoYltmXT1bXSk7YltmXS5wdXNoKGMrXCIoXCIrZCtcIilcIil9fSx2PVtdLEI9MCxpYT1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXtCPXJlcXVlc3RBbmltYXRpb25GcmFtZShjKX1mdW5jdGlvbiBjKGMpe3ZhciBiPXYubGVuZ3RoO2lmKGIpe2Zvcih2YXIgZD0wO2Q8YjspdltkXSYmdltkXS50aWNrKGMpLGQrKzthKCl9ZWxzZSBjYW5jZWxBbmltYXRpb25GcmFtZShCKSxCPTB9cmV0dXJuIGF9KCk7cS52ZXJzaW9uPVwiMi4yLjBcIjtxLnNwZWVkPTE7cS5ydW5uaW5nPXY7cS5yZW1vdmU9XG5mdW5jdGlvbihhKXthPVAoYSk7Zm9yKHZhciBjPXYubGVuZ3RoO2MtLTspZm9yKHZhciBkPXZbY10sYj1kLmFuaW1hdGlvbnMsZj1iLmxlbmd0aDtmLS07KXUoYSxiW2ZdLmFuaW1hdGFibGUudGFyZ2V0KSYmKGIuc3BsaWNlKGYsMSksYi5sZW5ndGh8fGQucGF1c2UoKSl9O3EuZ2V0VmFsdWU9SztxLnBhdGg9ZnVuY3Rpb24oYSxjKXt2YXIgZD1oLnN0cihhKT9lKGEpWzBdOmEsYj1jfHwxMDA7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybntlbDpkLHByb3BlcnR5OmEsdG90YWxMZW5ndGg6TihkKSooYi8xMDApfX19O3Euc2V0RGFzaG9mZnNldD1mdW5jdGlvbihhKXt2YXIgYz1OKGEpO2Euc2V0QXR0cmlidXRlKFwic3Ryb2tlLWRhc2hhcnJheVwiLGMpO3JldHVybiBjfTtxLmJlemllcj1BO3EuZWFzaW5ncz1RO3EudGltZWxpbmU9ZnVuY3Rpb24oYSl7dmFyIGM9cShhKTtjLnBhdXNlKCk7Yy5kdXJhdGlvbj0wO2MuYWRkPWZ1bmN0aW9uKGQpe2MuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihhKXthLmJlZ2FuPVxuITA7YS5jb21wbGV0ZWQ9ITB9KTttKGQpLmZvckVhY2goZnVuY3Rpb24oYil7dmFyIGQ9eihiLEQoUyxhfHx7fSkpO2QudGFyZ2V0cz1kLnRhcmdldHN8fGEudGFyZ2V0cztiPWMuZHVyYXRpb247dmFyIGU9ZC5vZmZzZXQ7ZC5hdXRvcGxheT0hMTtkLmRpcmVjdGlvbj1jLmRpcmVjdGlvbjtkLm9mZnNldD1oLnVuZChlKT9iOkwoZSxiKTtjLmJlZ2FuPSEwO2MuY29tcGxldGVkPSEwO2Muc2VlayhkLm9mZnNldCk7ZD1xKGQpO2QuYmVnYW49ITA7ZC5jb21wbGV0ZWQ9ITA7ZC5kdXJhdGlvbj5iJiYoYy5kdXJhdGlvbj1kLmR1cmF0aW9uKTtjLmNoaWxkcmVuLnB1c2goZCl9KTtjLnNlZWsoMCk7Yy5yZXNldCgpO2MuYXV0b3BsYXkmJmMucmVzdGFydCgpO3JldHVybiBjfTtyZXR1cm4gY307cS5yYW5kb209ZnVuY3Rpb24oYSxjKXtyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihjLWErMSkpK2F9O3JldHVybiBxfSk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG52YXIgYnRvYSA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuYnRvYSAmJiB3aW5kb3cuYnRvYS5iaW5kKHdpbmRvdykpIHx8IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idG9hJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgdmFyIGxvYWRFdmVudCA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xuICAgIHZhciB4RG9tYWluID0gZmFsc2U7XG5cbiAgICAvLyBGb3IgSUUgOC85IENPUlMgc3VwcG9ydFxuICAgIC8vIE9ubHkgc3VwcG9ydHMgUE9TVCBhbmQgR0VUIGNhbGxzIGFuZCBkb2Vzbid0IHJldHVybnMgdGhlIHJlc3BvbnNlIGhlYWRlcnMuXG4gICAgLy8gRE9OJ1QgZG8gdGhpcyBmb3IgdGVzdGluZyBiL2MgWE1MSHR0cFJlcXVlc3QgaXMgbW9ja2VkLCBub3QgWERvbWFpblJlcXVlc3QuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiZcbiAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgd2luZG93LlhEb21haW5SZXF1ZXN0ICYmICEoJ3dpdGhDcmVkZW50aWFscycgaW4gcmVxdWVzdCkgJiZcbiAgICAgICAgIWlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkge1xuICAgICAgcmVxdWVzdCA9IG5ldyB3aW5kb3cuWERvbWFpblJlcXVlc3QoKTtcbiAgICAgIGxvYWRFdmVudCA9ICdvbmxvYWQnO1xuICAgICAgeERvbWFpbiA9IHRydWU7XG4gICAgICByZXF1ZXN0Lm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiBoYW5kbGVQcm9ncmVzcygpIHt9O1xuICAgICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge307XG4gICAgfVxuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdFtsb2FkRXZlbnRdID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCAocmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0ICYmICF4RG9tYWluKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICAvLyBJRSBzZW5kcyAxMjIzIGluc3RlYWQgb2YgMjA0IChodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MvaXNzdWVzLzIwMSlcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/IDIwNCA6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1cyA9PT0gMTIyMyA/ICdObyBDb250ZW50JyA6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UodXRpbHMubWVyZ2UoZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLy4uL2RlZmF1bHRzJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgdXJsOiBhcmd1bWVudHNbMF1cbiAgICB9LCBhcmd1bWVudHNbMV0pO1xuICB9XG5cbiAgY29uZmlnID0gdXRpbHMubWVyZ2UoZGVmYXVsdHMsIHRoaXMuZGVmYXVsdHMsIHsgbWV0aG9kOiAnZ2V0JyB9LCBjb25maWcpO1xuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIC8vIE5vdGU6IHN0YXR1cyBpcyBub3QgZXhwb3NlZCBieSBYRG9tYWluUmVxdWVzdFxuICBpZiAoIXJlc3BvbnNlLnN0YXR1cyB8fCAhdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gYnRvYSBwb2x5ZmlsbCBmb3IgSUU8MTAgY291cnRlc3kgaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkY2hhbWJlcnMvQmFzZTY0LmpzXG5cbnZhciBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG5cbmZ1bmN0aW9uIEUoKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXInO1xufVxuRS5wcm90b3R5cGUgPSBuZXcgRXJyb3I7XG5FLnByb3RvdHlwZS5jb2RlID0gNTtcbkUucHJvdG90eXBlLm5hbWUgPSAnSW52YWxpZENoYXJhY3RlckVycm9yJztcblxuZnVuY3Rpb24gYnRvYShpbnB1dCkge1xuICB2YXIgc3RyID0gU3RyaW5nKGlucHV0KTtcbiAgdmFyIG91dHB1dCA9ICcnO1xuICBmb3IgKFxuICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyXG4gICAgdmFyIGJsb2NrLCBjaGFyQ29kZSwgaWR4ID0gMCwgbWFwID0gY2hhcnM7XG4gICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxuICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXG4gICAgLy8gICBjaGVjayBpZiBkIGhhcyBubyBmcmFjdGlvbmFsIGRpZ2l0c1xuICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XG4gICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcbiAgICBvdXRwdXQgKz0gbWFwLmNoYXJBdCg2MyAmIGJsb2NrID4+IDggLSBpZHggJSAxICogOClcbiAgKSB7XG4gICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMyAvIDQpO1xuICAgIGlmIChjaGFyQ29kZSA+IDB4RkYpIHtcbiAgICAgIHRocm93IG5ldyBFKCk7XG4gICAgfVxuICAgIGJsb2NrID0gYmxvY2sgPDwgOCB8IGNoYXJDb2RlO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnRvYTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9XG5cbiAgICAgIGlmICghdXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgfSxcblxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdmFyIG9yaWdpblVSTDtcblxuICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcbiIsIihmdW5jdGlvbihyb290LCAkKSB7XG5cdHZhciAkID0gKGZ1bmN0aW9uKGRvY3VtZW50LCBzX2FkZEV2ZW50TGlzdGVuZXIsIHNfcXVlcnlTZWxlY3RvckFsbCkge1xuXHRmdW5jdGlvbiAkKHMsIGNvbnRleHQsIGJhbGEpIHtcblx0XHRiYWxhID0gT2JqZWN0LmNyZWF0ZSgkLmZuKTtcblxuXHRcdHMgJiYgYmFsYS5wdXNoLmFwcGx5KGJhbGEsIC8vIGlmIHMgaXMgdHJ1bHkgdGhlbiBwdXNoIHRoZSBmb2xsb3dpbmdcblx0XHRcdHNbc19hZGRFdmVudExpc3RlbmVyXSAvLyBpZiBhcmcgaXMgbm9kZSBvciB3aW5kb3csXG5cdFx0XHRcdD8gW3NdIC8vIHRoZW4gcGFzcyBbc11cblx0XHRcdFx0OiBcIlwiICsgcyA9PT0gcyAvLyBlbHNlIGlmIGFyZyBpcyBhIHN0cmluZ1xuXHRcdFx0XHRcdD8gLzwvLnRlc3QocykgLy8gaWYgdGhlIHN0cmluZyBjb250YWlucyBcIjxcIiAoaWYgSFRNTCBjb2RlIGlzIHBhc3NlZClcblx0XHRcdFx0XHRcdC8vIHRoZW4gcGFyc2UgaXQgYW5kIHJldHVybiBub2RlLmNoaWxkcmVuXG5cdFx0XHRcdFx0XHQvLyB1c2UgJ2FkZEV2ZW50TGlzdGVuZXInIChIVE1MVW5rbm93bkVsZW1lbnQpIGlmIGNvbnRleHQgaXMgbm90IHByZXNlbnRlZFxuXHRcdFx0XHRcdFx0PyAoKGNvbnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGNvbnRleHQpKS5pbm5lckhUTUwgPSBzXG5cdFx0XHRcdFx0XHRcdCwgY29udGV4dC5jaGlsZHJlbilcblx0XHRcdFx0XHRcdDogY29udGV4dCAvLyBlbHNlIGlmIGNvbnRleHQgaXMgdHJ1bHlcblx0XHRcdFx0XHRcdFx0PyAoKGNvbnRleHQgPSAkKGNvbnRleHQpWzBdKSAvLyBpZiBjb250ZXh0IGVsZW1lbnQgaXMgZm91bmRcblx0XHRcdFx0XHRcdFx0XHQ/IGNvbnRleHRbc19xdWVyeVNlbGVjdG9yQWxsXShzKSAvLyB0aGVuIHNlbGVjdCBlbGVtZW50IGZyb20gY29udGV4dFxuXHRcdFx0XHRcdFx0XHRcdDogYmFsYSkgLy8gZWxzZSBwYXNzIFtdIChjb250ZXh0IGlzbid0IGZvdW5kKVxuXHRcdFx0XHRcdFx0XHQ6IGRvY3VtZW50W3NfcXVlcnlTZWxlY3RvckFsbF0ocykgLy8gZWxzZSBzZWxlY3QgZWxlbWVudHMgZ2xvYmFsbHlcblx0XHRcdFx0XHQ6IHMpOyAvLyBlbHNlIGd1ZXNzaW5nIHRoYXQgcyB2YXJpYWJsZSBpcyBhcnJheS1saWtlIE9iamVjdFxuXG5cdFx0cmV0dXJuIGJhbGE7XG5cdH1cblxuXHQkLmZuID0gW107XG5cblx0JC5vbmUgPSBmdW5jdGlvbihzLCBjb250ZXh0KSB7XG5cdFx0cmV0dXJuICQocywgY29udGV4dClbMF0gfHwgbnVsbDtcblx0fTtcblxuXHRyZXR1cm4gJDtcbn0pKGRvY3VtZW50LCAnYWRkRXZlbnRMaXN0ZW5lcicsICdxdWVyeVNlbGVjdG9yQWxsJyk7XG47XG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiAkO1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9ICQ7XG5cdH0gZWxzZSB7XG5cdFx0cm9vdC4kID0gJDtcblx0fVxufSkodGhpcyk7XG4iLCIvKiEhXG4gKiBIYXNoZXIgPGh0dHA6Ly9naXRodWIuY29tL21pbGxlcm1lZGVpcm9zL2hhc2hlcj5cbiAqIEBhdXRob3IgTWlsbGVyIE1lZGVpcm9zXG4gKiBAdmVyc2lvbiAxLjIuMCAoMjAxMy8xMS8xMSAwMzoxOCBQTSlcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICovXG5cbjsoZnVuY3Rpb24gKCkge1xudmFyIGZhY3RvcnkgPSBmdW5jdGlvbihzaWduYWxzKXtcblxuLypqc2hpbnQgd2hpdGU6ZmFsc2UqL1xuLypnbG9iYWwgc2lnbmFsczpmYWxzZSwgd2luZG93OmZhbHNlKi9cblxuLyoqXG4gKiBIYXNoZXJcbiAqIEBuYW1lc3BhY2UgSGlzdG9yeSBNYW5hZ2VyIGZvciByaWNoLW1lZGlhIGFwcGxpY2F0aW9ucy5cbiAqIEBuYW1lIGhhc2hlclxuICovXG52YXIgaGFzaGVyID0gKGZ1bmN0aW9uKHdpbmRvdyl7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gUHJpdmF0ZSBWYXJzXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgdmFyXG5cbiAgICAgICAgLy8gZnJlcXVlbmN5IHRoYXQgaXQgd2lsbCBjaGVjayBoYXNoIHZhbHVlIG9uIElFIDYtNyBzaW5jZSBpdCBkb2Vzbid0XG4gICAgICAgIC8vIHN1cHBvcnQgdGhlIGhhc2hjaGFuZ2UgZXZlbnRcbiAgICAgICAgUE9PTF9JTlRFUlZBTCA9IDI1LFxuXG4gICAgICAgIC8vIGxvY2FsIHN0b3JhZ2UgZm9yIGJyZXZpdHkgYW5kIGJldHRlciBjb21wcmVzc2lvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICAgIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50LFxuICAgICAgICBoaXN0b3J5ID0gd2luZG93Lmhpc3RvcnksXG4gICAgICAgIFNpZ25hbCA9IHNpZ25hbHMuU2lnbmFsLFxuXG4gICAgICAgIC8vIGxvY2FsIHZhcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICAgIGhhc2hlcixcbiAgICAgICAgX2hhc2gsXG4gICAgICAgIF9jaGVja0ludGVydmFsLFxuICAgICAgICBfaXNBY3RpdmUsXG4gICAgICAgIF9mcmFtZSwgLy9pZnJhbWUgdXNlZCBmb3IgbGVnYWN5IElFICg2LTcpXG4gICAgICAgIF9jaGVja0hpc3RvcnksXG4gICAgICAgIF9oYXNoVmFsUmVnZXhwID0gLyMoLiopJC8sXG4gICAgICAgIF9iYXNlVXJsUmVnZXhwID0gLyhcXD8uKil8KFxcIy4qKS8sXG4gICAgICAgIF9oYXNoUmVnZXhwID0gL15cXCMvLFxuXG4gICAgICAgIC8vIHNuaWZmaW5nL2ZlYXR1cmUgZGV0ZWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgICAvL2hhY2sgYmFzZWQgb24gdGhpczogaHR0cDovL3dlYnJlZmxlY3Rpb24uYmxvZ3Nwb3QuY29tLzIwMDkvMDEvMzItYnl0ZXMtdG8ta25vdy1pZi15b3VyLWJyb3dzZXItaXMtaWUuaHRtbFxuICAgICAgICBfaXNJRSA9ICghK1wiXFx2MVwiKSxcbiAgICAgICAgLy8gaGFzaGNoYW5nZSBpcyBzdXBwb3J0ZWQgYnkgRkYzLjYrLCBJRTgrLCBDaHJvbWUgNSssIFNhZmFyaSA1KyBidXRcbiAgICAgICAgLy8gZmVhdHVyZSBkZXRlY3Rpb24gZmFpbHMgb24gSUUgY29tcGF0aWJpbGl0eSBtb2RlLCBzbyB3ZSBuZWVkIHRvXG4gICAgICAgIC8vIGNoZWNrIGRvY3VtZW50TW9kZVxuICAgICAgICBfaXNIYXNoQ2hhbmdlU3VwcG9ydGVkID0gKCdvbmhhc2hjaGFuZ2UnIGluIHdpbmRvdykgJiYgZG9jdW1lbnQuZG9jdW1lbnRNb2RlICE9PSA3LFxuICAgICAgICAvL2NoZWNrIGlmIGlzIElFNi03IHNpbmNlIGhhc2ggY2hhbmdlIGlzIG9ubHkgc3VwcG9ydGVkIG9uIElFOCsgYW5kXG4gICAgICAgIC8vY2hhbmdpbmcgaGFzaCB2YWx1ZSBvbiBJRTYtNyBkb2Vzbid0IGdlbmVyYXRlIGhpc3RvcnkgcmVjb3JkLlxuICAgICAgICBfaXNMZWdhY3lJRSA9IF9pc0lFICYmICFfaXNIYXNoQ2hhbmdlU3VwcG9ydGVkLFxuICAgICAgICBfaXNMb2NhbCA9IChsb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2ZpbGU6Jyk7XG5cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBQcml2YXRlIE1ldGhvZHNcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBmdW5jdGlvbiBfZXNjYXBlUmVnRXhwKHN0cil7XG4gICAgICAgIHJldHVybiBTdHJpbmcoc3RyIHx8ICcnKS5yZXBsYWNlKC9cXFcvZywgXCJcXFxcJCZcIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3RyaW1IYXNoKGhhc2gpe1xuICAgICAgICBpZiAoIWhhc2gpIHJldHVybiAnJztcbiAgICAgICAgdmFyIHJlZ2V4cCA9IG5ldyBSZWdFeHAoJ14nICsgX2VzY2FwZVJlZ0V4cChoYXNoZXIucHJlcGVuZEhhc2gpICsgJ3wnICsgX2VzY2FwZVJlZ0V4cChoYXNoZXIuYXBwZW5kSGFzaCkgKyAnJCcsICdnJyk7XG4gICAgICAgIHJldHVybiBoYXNoLnJlcGxhY2UocmVnZXhwLCAnJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2dldFdpbmRvd0hhc2goKXtcbiAgICAgICAgLy9wYXJzZWQgZnVsbCBVUkwgaW5zdGVhZCBvZiBnZXR0aW5nIHdpbmRvdy5sb2NhdGlvbi5oYXNoIGJlY2F1c2UgRmlyZWZveCBkZWNvZGUgaGFzaCB2YWx1ZSAoYW5kIGFsbCB0aGUgb3RoZXIgYnJvd3NlcnMgZG9uJ3QpXG4gICAgICAgIC8vYWxzbyBiZWNhdXNlIG9mIElFOCBidWcgd2l0aCBoYXNoIHF1ZXJ5IGluIGxvY2FsIGZpbGUgW2lzc3VlICM2XVxuICAgICAgICB2YXIgcmVzdWx0ID0gX2hhc2hWYWxSZWdleHAuZXhlYyggaGFzaGVyLmdldFVSTCgpICk7XG4gICAgICAgIHZhciBwYXRoID0gKHJlc3VsdCAmJiByZXN1bHRbMV0pIHx8ICcnO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBoYXNoZXIucmF3PyBwYXRoIDogZGVjb2RlVVJJQ29tcG9uZW50KHBhdGgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaW4gY2FzZSB1c2VyIGRpZCBub3Qgc2V0IGBoYXNoZXIucmF3YCBhbmQgZGVjb2RlVVJJQ29tcG9uZW50XG4gICAgICAgICAgLy8gdGhyb3dzIGFuIGVycm9yIChzZWUgIzU3KVxuICAgICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2dldEZyYW1lSGFzaCgpe1xuICAgICAgICByZXR1cm4gKF9mcmFtZSk/IF9mcmFtZS5jb250ZW50V2luZG93LmZyYW1lSGFzaCA6IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUZyYW1lKCl7XG4gICAgICAgIF9mcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICBfZnJhbWUuc3JjID0gJ2Fib3V0OmJsYW5rJztcbiAgICAgICAgX2ZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoX2ZyYW1lKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfdXBkYXRlRnJhbWUoKXtcbiAgICAgICAgaWYoX2ZyYW1lICYmIF9oYXNoICE9PSBfZ2V0RnJhbWVIYXNoKCkpe1xuICAgICAgICAgICAgdmFyIGZyYW1lRG9jID0gX2ZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gICAgICAgICAgICBmcmFtZURvYy5vcGVuKCk7XG4gICAgICAgICAgICAvL3VwZGF0ZSBpZnJhbWUgY29udGVudCB0byBmb3JjZSBuZXcgaGlzdG9yeSByZWNvcmQuXG4gICAgICAgICAgICAvL2Jhc2VkIG9uIFJlYWxseSBTaW1wbGUgSGlzdG9yeSwgU1dGQWRkcmVzcyBhbmQgWVVJLmhpc3RvcnkuXG4gICAgICAgICAgICBmcmFtZURvYy53cml0ZSgnPGh0bWw+PGhlYWQ+PHRpdGxlPicgKyBkb2N1bWVudC50aXRsZSArICc8L3RpdGxlPjxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPnZhciBmcmFtZUhhc2g9XCInICsgX2hhc2ggKyAnXCI7PC9zY3JpcHQ+PC9oZWFkPjxib2R5PiZuYnNwOzwvYm9keT48L2h0bWw+Jyk7XG4gICAgICAgICAgICBmcmFtZURvYy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3JlZ2lzdGVyQ2hhbmdlKG5ld0hhc2gsIGlzUmVwbGFjZSl7XG4gICAgICAgIGlmKF9oYXNoICE9PSBuZXdIYXNoKXtcbiAgICAgICAgICAgIHZhciBvbGRIYXNoID0gX2hhc2g7XG4gICAgICAgICAgICBfaGFzaCA9IG5ld0hhc2g7IC8vc2hvdWxkIGNvbWUgYmVmb3JlIGV2ZW50IGRpc3BhdGNoIHRvIG1ha2Ugc3VyZSB1c2VyIGNhbiBnZXQgcHJvcGVyIHZhbHVlIGluc2lkZSBldmVudCBoYW5kbGVyXG4gICAgICAgICAgICBpZihfaXNMZWdhY3lJRSl7XG4gICAgICAgICAgICAgICAgaWYoIWlzUmVwbGFjZSl7XG4gICAgICAgICAgICAgICAgICAgIF91cGRhdGVGcmFtZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9mcmFtZS5jb250ZW50V2luZG93LmZyYW1lSGFzaCA9IG5ld0hhc2g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFzaGVyLmNoYW5nZWQuZGlzcGF0Y2goX3RyaW1IYXNoKG5ld0hhc2gpLCBfdHJpbUhhc2gob2xkSGFzaCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKF9pc0xlZ2FjeUlFKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX2NoZWNrSGlzdG9yeSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgd2luZG93SGFzaCA9IF9nZXRXaW5kb3dIYXNoKCksXG4gICAgICAgICAgICAgICAgZnJhbWVIYXNoID0gX2dldEZyYW1lSGFzaCgpO1xuICAgICAgICAgICAgaWYoZnJhbWVIYXNoICE9PSBfaGFzaCAmJiBmcmFtZUhhc2ggIT09IHdpbmRvd0hhc2gpe1xuICAgICAgICAgICAgICAgIC8vZGV0ZWN0IGNoYW5nZXMgbWFkZSBwcmVzc2luZyBicm93c2VyIGhpc3RvcnkgYnV0dG9ucy5cbiAgICAgICAgICAgICAgICAvL1dvcmthcm91bmQgc2luY2UgaGlzdG9yeS5iYWNrKCkgYW5kIGhpc3RvcnkuZm9yd2FyZCgpIGRvZXNuJ3RcbiAgICAgICAgICAgICAgICAvL3VwZGF0ZSBoYXNoIHZhbHVlIG9uIElFNi83IGJ1dCB1cGRhdGVzIGNvbnRlbnQgb2YgdGhlIGlmcmFtZS5cbiAgICAgICAgICAgICAgICAvL25lZWRzIHRvIHRyaW0gaGFzaCBzaW5jZSB2YWx1ZSBzdG9yZWQgYWxyZWFkeSBoYXZlXG4gICAgICAgICAgICAgICAgLy9wcmVwZW5kSGFzaCArIGFwcGVuZEhhc2ggZm9yIGZhc3QgY2hlY2suXG4gICAgICAgICAgICAgICAgaGFzaGVyLnNldEhhc2goX3RyaW1IYXNoKGZyYW1lSGFzaCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3dIYXNoICE9PSBfaGFzaCl7XG4gICAgICAgICAgICAgICAgLy9kZXRlY3QgaWYgaGFzaCBjaGFuZ2VkIChtYW51YWxseSBvciB1c2luZyBzZXRIYXNoKVxuICAgICAgICAgICAgICAgIF9yZWdpc3RlckNoYW5nZSh3aW5kb3dIYXNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9jaGVja0hpc3RvcnkgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIHdpbmRvd0hhc2ggPSBfZ2V0V2luZG93SGFzaCgpO1xuICAgICAgICAgICAgaWYod2luZG93SGFzaCAhPT0gX2hhc2gpe1xuICAgICAgICAgICAgICAgIF9yZWdpc3RlckNoYW5nZSh3aW5kb3dIYXNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYWRkTGlzdGVuZXIoZWxtLCBlVHlwZSwgZm4pe1xuICAgICAgICBpZihlbG0uYWRkRXZlbnRMaXN0ZW5lcil7XG4gICAgICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcihlVHlwZSwgZm4sIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbG0uYXR0YWNoRXZlbnQpe1xuICAgICAgICAgICAgZWxtLmF0dGFjaEV2ZW50KCdvbicgKyBlVHlwZSwgZm4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX3JlbW92ZUxpc3RlbmVyKGVsbSwgZVR5cGUsIGZuKXtcbiAgICAgICAgaWYoZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIpe1xuICAgICAgICAgICAgZWxtLnJlbW92ZUV2ZW50TGlzdGVuZXIoZVR5cGUsIGZuLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZWxtLmRldGFjaEV2ZW50KXtcbiAgICAgICAgICAgIGVsbS5kZXRhY2hFdmVudCgnb24nICsgZVR5cGUsIGZuKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9tYWtlUGF0aChwYXRocyl7XG4gICAgICAgIHBhdGhzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgICAgICB2YXIgcGF0aCA9IHBhdGhzLmpvaW4oaGFzaGVyLnNlcGFyYXRvcik7XG4gICAgICAgIHBhdGggPSBwYXRoPyBoYXNoZXIucHJlcGVuZEhhc2ggKyBwYXRoLnJlcGxhY2UoX2hhc2hSZWdleHAsICcnKSArIGhhc2hlci5hcHBlbmRIYXNoIDogcGF0aDtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2VuY29kZVBhdGgocGF0aCl7XG4gICAgICAgIC8vdXNlZCBlbmNvZGVVUkkgaW5zdGVhZCBvZiBlbmNvZGVVUklDb21wb25lbnQgdG8gcHJlc2VydmUgJz8nLCAnLycsXG4gICAgICAgIC8vJyMnLiBGaXhlcyBTYWZhcmkgYnVnIFtpc3N1ZSAjOF1cbiAgICAgICAgcGF0aCA9IGVuY29kZVVSSShwYXRoKTtcbiAgICAgICAgaWYoX2lzSUUgJiYgX2lzTG9jYWwpe1xuICAgICAgICAgICAgLy9maXggSUU4IGxvY2FsIGZpbGUgYnVnIFtpc3N1ZSAjNl1cbiAgICAgICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL1xcPy8sICclM0YnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gUHVibGljIChBUEkpXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgaGFzaGVyID0gLyoqIEBsZW5kcyBoYXNoZXIgKi8ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBoYXNoZXIgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHR5cGUgc3RyaW5nXG4gICAgICAgICAqIEBjb25zdGFudFxuICAgICAgICAgKi9cbiAgICAgICAgVkVSU0lPTiA6ICcxLjIuMCcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEJvb2xlYW4gZGVjaWRpbmcgaWYgaGFzaGVyIGVuY29kZXMvZGVjb2RlcyB0aGUgaGFzaCBvciBub3QuXG4gICAgICAgICAqIDx1bD5cbiAgICAgICAgICogPGxpPmRlZmF1bHQgdmFsdWU6IGZhbHNlOzwvbGk+XG4gICAgICAgICAqIDwvdWw+XG4gICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIHJhdyA6IGZhbHNlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdHJpbmcgdGhhdCBzaG91bGQgYWx3YXlzIGJlIGFkZGVkIHRvIHRoZSBlbmQgb2YgSGFzaCB2YWx1ZS5cbiAgICAgICAgICogPHVsPlxuICAgICAgICAgKiA8bGk+ZGVmYXVsdCB2YWx1ZTogJyc7PC9saT5cbiAgICAgICAgICogPGxpPndpbGwgYmUgYXV0b21hdGljYWxseSByZW1vdmVkIGZyb20gYGhhc2hlci5nZXRIYXNoKClgPC9saT5cbiAgICAgICAgICogPGxpPmF2b2lkIGNvbmZsaWN0cyB3aXRoIGVsZW1lbnRzIHRoYXQgY29udGFpbiBJRCBlcXVhbCB0byBoYXNoIHZhbHVlOzwvbGk+XG4gICAgICAgICAqIDwvdWw+XG4gICAgICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgYXBwZW5kSGFzaCA6ICcnLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdHJpbmcgdGhhdCBzaG91bGQgYWx3YXlzIGJlIGFkZGVkIHRvIHRoZSBiZWdpbm5pbmcgb2YgSGFzaCB2YWx1ZS5cbiAgICAgICAgICogPHVsPlxuICAgICAgICAgKiA8bGk+ZGVmYXVsdCB2YWx1ZTogJy8nOzwvbGk+XG4gICAgICAgICAqIDxsaT53aWxsIGJlIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZCBmcm9tIGBoYXNoZXIuZ2V0SGFzaCgpYDwvbGk+XG4gICAgICAgICAqIDxsaT5hdm9pZCBjb25mbGljdHMgd2l0aCBlbGVtZW50cyB0aGF0IGNvbnRhaW4gSUQgZXF1YWwgdG8gaGFzaCB2YWx1ZTs8L2xpPlxuICAgICAgICAgKiA8L3VsPlxuICAgICAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHByZXBlbmRIYXNoIDogJy8nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdHJpbmcgdXNlZCB0byBzcGxpdCBoYXNoIHBhdGhzOyB1c2VkIGJ5IGBoYXNoZXIuZ2V0SGFzaEFzQXJyYXkoKWAgdG8gc3BsaXQgcGF0aHMuXG4gICAgICAgICAqIDx1bD5cbiAgICAgICAgICogPGxpPmRlZmF1bHQgdmFsdWU6ICcvJzs8L2xpPlxuICAgICAgICAgKiA8L3VsPlxuICAgICAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHNlcGFyYXRvciA6ICcvJyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2lnbmFsIGRpc3BhdGNoZWQgd2hlbiBoYXNoIHZhbHVlIGNoYW5nZXMuXG4gICAgICAgICAqIC0gcGFzcyBjdXJyZW50IGhhc2ggYXMgMXN0IHBhcmFtZXRlciB0byBsaXN0ZW5lcnMgYW5kIHByZXZpb3VzIGhhc2ggdmFsdWUgYXMgMm5kIHBhcmFtZXRlci5cbiAgICAgICAgICogQHR5cGUgc2lnbmFscy5TaWduYWxcbiAgICAgICAgICovXG4gICAgICAgIGNoYW5nZWQgOiBuZXcgU2lnbmFsKCksXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNpZ25hbCBkaXNwYXRjaGVkIHdoZW4gaGFzaGVyIGlzIHN0b3BwZWQuXG4gICAgICAgICAqIC0gIHBhc3MgY3VycmVudCBoYXNoIGFzIGZpcnN0IHBhcmFtZXRlciB0byBsaXN0ZW5lcnNcbiAgICAgICAgICogQHR5cGUgc2lnbmFscy5TaWduYWxcbiAgICAgICAgICovXG4gICAgICAgIHN0b3BwZWQgOiBuZXcgU2lnbmFsKCksXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNpZ25hbCBkaXNwYXRjaGVkIHdoZW4gaGFzaGVyIGlzIGluaXRpYWxpemVkLlxuICAgICAgICAgKiAtIHBhc3MgY3VycmVudCBoYXNoIGFzIGZpcnN0IHBhcmFtZXRlciB0byBsaXN0ZW5lcnMuXG4gICAgICAgICAqIEB0eXBlIHNpZ25hbHMuU2lnbmFsXG4gICAgICAgICAqL1xuICAgICAgICBpbml0aWFsaXplZCA6IG5ldyBTaWduYWwoKSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU3RhcnQgbGlzdGVuaW5nL2Rpc3BhdGNoaW5nIGNoYW5nZXMgaW4gdGhlIGhhc2gvaGlzdG9yeS5cbiAgICAgICAgICogPHVsPlxuICAgICAgICAgKiAgIDxsaT5oYXNoZXIgd29uJ3QgZGlzcGF0Y2ggQ0hBTkdFIGV2ZW50cyBieSBtYW51YWxseSB0eXBpbmcgYSBuZXcgdmFsdWUgb3IgcHJlc3NpbmcgdGhlIGJhY2svZm9yd2FyZCBidXR0b25zIGJlZm9yZSBjYWxsaW5nIHRoaXMgbWV0aG9kLjwvbGk+XG4gICAgICAgICAqIDwvdWw+XG4gICAgICAgICAqL1xuICAgICAgICBpbml0IDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKF9pc0FjdGl2ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICBfaGFzaCA9IF9nZXRXaW5kb3dIYXNoKCk7XG5cbiAgICAgICAgICAgIC8vdGhvdWdodCBhYm91dCBicmFuY2hpbmcvb3ZlcmxvYWRpbmcgaGFzaGVyLmluaXQoKSB0byBhdm9pZCBjaGVja2luZyBtdWx0aXBsZSB0aW1lcyBidXRcbiAgICAgICAgICAgIC8vZG9uJ3QgdGhpbmsgd29ydGggZG9pbmcgaXQgc2luY2UgaXQgcHJvYmFibHkgd29uJ3QgYmUgY2FsbGVkIG11bHRpcGxlIHRpbWVzLlxuICAgICAgICAgICAgaWYoX2lzSGFzaENoYW5nZVN1cHBvcnRlZCl7XG4gICAgICAgICAgICAgICAgX2FkZExpc3RlbmVyKHdpbmRvdywgJ2hhc2hjaGFuZ2UnLCBfY2hlY2tIaXN0b3J5KTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICBpZihfaXNMZWdhY3lJRSl7XG4gICAgICAgICAgICAgICAgICAgIGlmKCEgX2ZyYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVGcmFtZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF91cGRhdGVGcmFtZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfY2hlY2tJbnRlcnZhbCA9IHNldEludGVydmFsKF9jaGVja0hpc3RvcnksIFBPT0xfSU5URVJWQUwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgaGFzaGVyLmluaXRpYWxpemVkLmRpc3BhdGNoKF90cmltSGFzaChfaGFzaCkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdG9wIGxpc3RlbmluZy9kaXNwYXRjaGluZyBjaGFuZ2VzIGluIHRoZSBoYXNoL2hpc3RvcnkuXG4gICAgICAgICAqIDx1bD5cbiAgICAgICAgICogICA8bGk+aGFzaGVyIHdvbid0IGRpc3BhdGNoIENIQU5HRSBldmVudHMgYnkgbWFudWFsbHkgdHlwaW5nIGEgbmV3IHZhbHVlIG9yIHByZXNzaW5nIHRoZSBiYWNrL2ZvcndhcmQgYnV0dG9ucyBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kLCB1bmxlc3MgeW91IGNhbGwgaGFzaGVyLmluaXQoKSBhZ2Fpbi48L2xpPlxuICAgICAgICAgKiAgIDxsaT5oYXNoZXIgd2lsbCBzdGlsbCBkaXNwYXRjaCBjaGFuZ2VzIG1hZGUgcHJvZ3JhbWF0aWNhbGx5IGJ5IGNhbGxpbmcgaGFzaGVyLnNldEhhc2goKTs8L2xpPlxuICAgICAgICAgKiA8L3VsPlxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcCA6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZighIF9pc0FjdGl2ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgICBpZihfaXNIYXNoQ2hhbmdlU3VwcG9ydGVkKXtcbiAgICAgICAgICAgICAgICBfcmVtb3ZlTGlzdGVuZXIod2luZG93LCAnaGFzaGNoYW5nZScsIF9jaGVja0hpc3RvcnkpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfY2hlY2tJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgX2NoZWNrSW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGhhc2hlci5zdG9wcGVkLmRpc3BhdGNoKF90cmltSGFzaChfaGFzaCkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSAgICBJZiBoYXNoZXIgaXMgbGlzdGVuaW5nIHRvIGNoYW5nZXMgb24gdGhlIGJyb3dzZXIgaGlzdG9yeSBhbmQvb3IgaGFzaCB2YWx1ZS5cbiAgICAgICAgICovXG4gICAgICAgIGlzQWN0aXZlIDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiBfaXNBY3RpdmU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gRnVsbCBVUkwuXG4gICAgICAgICAqL1xuICAgICAgICBnZXRVUkwgOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFJldHJpZXZlIFVSTCB3aXRob3V0IHF1ZXJ5IHN0cmluZyBhbmQgaGFzaC5cbiAgICAgICAgICovXG4gICAgICAgIGdldEJhc2VVUkwgOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIGhhc2hlci5nZXRVUkwoKS5yZXBsYWNlKF9iYXNlVXJsUmVnZXhwLCAnJyk7IC8vcmVtb3ZlcyBldmVyeXRoaW5nIGFmdGVyICc/JyBhbmQvb3IgJyMnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCBIYXNoIHZhbHVlLCBnZW5lcmF0aW5nIGEgbmV3IGhpc3RvcnkgcmVjb3JkLlxuICAgICAgICAgKiBAcGFyYW0gey4uLnN0cmluZ30gcGF0aCAgICBIYXNoIHZhbHVlIHdpdGhvdXQgJyMnLiBIYXNoZXIgd2lsbCBqb2luXG4gICAgICAgICAqIHBhdGggc2VnbWVudHMgdXNpbmcgYGhhc2hlci5zZXBhcmF0b3JgIGFuZCBwcmVwZW5kL2FwcGVuZCBoYXNoIHZhbHVlXG4gICAgICAgICAqIHdpdGggYGhhc2hlci5hcHBlbmRIYXNoYCBhbmQgYGhhc2hlci5wcmVwZW5kSGFzaGBcbiAgICAgICAgICogQGV4YW1wbGUgaGFzaGVyLnNldEhhc2goJ2xvcmVtJywgJ2lwc3VtJywgJ2RvbG9yJykgLT4gJyMvbG9yZW0vaXBzdW0vZG9sb3InXG4gICAgICAgICAqL1xuICAgICAgICBzZXRIYXNoIDogZnVuY3Rpb24ocGF0aCl7XG4gICAgICAgICAgICBwYXRoID0gX21ha2VQYXRoLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBpZihwYXRoICE9PSBfaGFzaCl7XG4gICAgICAgICAgICAgICAgLy8gd2Ugc2hvdWxkIHN0b3JlIHJhdyB2YWx1ZVxuICAgICAgICAgICAgICAgIF9yZWdpc3RlckNoYW5nZShwYXRoKTtcbiAgICAgICAgICAgICAgICBpZiAocGF0aCA9PT0gX2hhc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgY2hlY2sgaWYgcGF0aCBpcyBzdGlsbCA9PT0gX2hhc2ggdG8gYXZvaWQgZXJyb3IgaW5cbiAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSBvZiBtdWx0aXBsZSBjb25zZWN1dGl2ZSByZWRpcmVjdHMgW2lzc3VlICMzOV1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEgaGFzaGVyLnJhdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aCA9IF9lbmNvZGVQYXRoKHBhdGgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyMnICsgcGF0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCBIYXNoIHZhbHVlIHdpdGhvdXQga2VlcGluZyBwcmV2aW91cyBoYXNoIG9uIHRoZSBoaXN0b3J5IHJlY29yZC5cbiAgICAgICAgICogU2ltaWxhciB0byBjYWxsaW5nIGB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIiMvaGFzaFwiKWAgYnV0IHdpbGwgYWxzbyB3b3JrIG9uIElFNi03LlxuICAgICAgICAgKiBAcGFyYW0gey4uLnN0cmluZ30gcGF0aCAgICBIYXNoIHZhbHVlIHdpdGhvdXQgJyMnLiBIYXNoZXIgd2lsbCBqb2luXG4gICAgICAgICAqIHBhdGggc2VnbWVudHMgdXNpbmcgYGhhc2hlci5zZXBhcmF0b3JgIGFuZCBwcmVwZW5kL2FwcGVuZCBoYXNoIHZhbHVlXG4gICAgICAgICAqIHdpdGggYGhhc2hlci5hcHBlbmRIYXNoYCBhbmQgYGhhc2hlci5wcmVwZW5kSGFzaGBcbiAgICAgICAgICogQGV4YW1wbGUgaGFzaGVyLnJlcGxhY2VIYXNoKCdsb3JlbScsICdpcHN1bScsICdkb2xvcicpIC0+ICcjL2xvcmVtL2lwc3VtL2RvbG9yJ1xuICAgICAgICAgKi9cbiAgICAgICAgcmVwbGFjZUhhc2ggOiBmdW5jdGlvbihwYXRoKXtcbiAgICAgICAgICAgIHBhdGggPSBfbWFrZVBhdGguYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGlmKHBhdGggIT09IF9oYXNoKXtcbiAgICAgICAgICAgICAgICAvLyB3ZSBzaG91bGQgc3RvcmUgcmF3IHZhbHVlXG4gICAgICAgICAgICAgICAgX3JlZ2lzdGVyQ2hhbmdlKHBhdGgsIHRydWUpO1xuICAgICAgICAgICAgICAgIGlmIChwYXRoID09PSBfaGFzaCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBjaGVjayBpZiBwYXRoIGlzIHN0aWxsID09PSBfaGFzaCB0byBhdm9pZCBlcnJvciBpblxuICAgICAgICAgICAgICAgICAgICAvLyBjYXNlIG9mIG11bHRpcGxlIGNvbnNlY3V0aXZlIHJlZGlyZWN0cyBbaXNzdWUgIzM5XVxuICAgICAgICAgICAgICAgICAgICBpZiAoISBoYXNoZXIucmF3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoID0gX2VuY29kZVBhdGgocGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoJyMnICsgcGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IEhhc2ggdmFsdWUgd2l0aG91dCAnIycsIGBoYXNoZXIuYXBwZW5kSGFzaGAgYW5kIGBoYXNoZXIucHJlcGVuZEhhc2hgLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0SGFzaCA6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvL2RpZG4ndCB1c2VkIGFjdHVhbCB2YWx1ZSBvZiB0aGUgYHdpbmRvdy5sb2NhdGlvbi5oYXNoYCB0byBhdm9pZCBicmVha2luZyB0aGUgYXBwbGljYXRpb24gaW4gY2FzZSBgd2luZG93LmxvY2F0aW9uLmhhc2hgIGlzbid0IGF2YWlsYWJsZSBhbmQgYWxzbyBiZWNhdXNlIHZhbHVlIHNob3VsZCBhbHdheXMgYmUgc3luY2hlZC5cbiAgICAgICAgICAgIHJldHVybiBfdHJpbUhhc2goX2hhc2gpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtBcnJheS48c3RyaW5nPn0gSGFzaCB2YWx1ZSBzcGxpdCBpbnRvIGFuIEFycmF5LlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0SGFzaEFzQXJyYXkgOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIGhhc2hlci5nZXRIYXNoKCkuc3BsaXQoaGFzaGVyLnNlcGFyYXRvcik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZXMgYWxsIGV2ZW50IGxpc3RlbmVycywgc3RvcHMgaGFzaGVyIGFuZCBkZXN0cm95IGhhc2hlciBvYmplY3QuXG4gICAgICAgICAqIC0gSU1QT1JUQU5UOiBoYXNoZXIgd29uJ3Qgd29yayBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kLCBoYXNoZXIgT2JqZWN0IHdpbGwgYmUgZGVsZXRlZC5cbiAgICAgICAgICovXG4gICAgICAgIGRpc3Bvc2UgOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaGFzaGVyLnN0b3AoKTtcbiAgICAgICAgICAgIGhhc2hlci5pbml0aWFsaXplZC5kaXNwb3NlKCk7XG4gICAgICAgICAgICBoYXNoZXIuc3RvcHBlZC5kaXNwb3NlKCk7XG4gICAgICAgICAgICBoYXNoZXIuY2hhbmdlZC5kaXNwb3NlKCk7XG4gICAgICAgICAgICBfZnJhbWUgPSBoYXNoZXIgPSB3aW5kb3cuaGFzaGVyID0gbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBBIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgdG9TdHJpbmcgOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuICdbaGFzaGVyIHZlcnNpb249XCInKyBoYXNoZXIuVkVSU0lPTiArJ1wiIGhhc2g9XCInKyBoYXNoZXIuZ2V0SGFzaCgpICsnXCJdJztcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIGhhc2hlci5pbml0aWFsaXplZC5tZW1vcml6ZSA9IHRydWU7IC8vc2VlICMzM1xuXG4gICAgcmV0dXJuIGhhc2hlcjtcblxufSh3aW5kb3cpKTtcblxuXG4gICAgcmV0dXJuIGhhc2hlcjtcbn07XG5cbmlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoWydzaWduYWxzJ10sIGZhY3RvcnkpO1xufSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnc2lnbmFscycpKTtcbn0gZWxzZSB7XG4gICAgLypqc2hpbnQgc3ViOnRydWUgKi9cbiAgICB3aW5kb3dbJ2hhc2hlciddID0gZmFjdG9yeSh3aW5kb3dbJ3NpZ25hbHMnXSk7XG59XG5cbn0oKSk7XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cbiIsIiFmdW5jdGlvbihlLG4pe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP24oZXhwb3J0cyk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCJdLG4pOm4oZS5wZXRpdERvbT1lLnBldGl0RG9tfHx7fSl9KHRoaXMsZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLG4pe2Zvcih2YXIgcj0wO3I8ZS5sZW5ndGg7cisrKXt2YXIgbz1lW3JdO2lmKFMobykpcmV0dXJuIHQoZSxyLGUuc2xpY2UoMCxyKSxuKTtiKG8pP24mJiFvLmlzU1ZHJiYoby5pc1NWRz0hMCk6ZVtyXT17X3RleHQ6bnVsbD09bz9cIlwiOm99fXJldHVybiBlfWZ1bmN0aW9uIHQoZSxuLHIsbyl7Zm9yKHZhciBpPW47aTxlLmxlbmd0aDtpKyspe3ZhciBsPWVbaV07UyhsKT90KGwsMCxyLG8pOmIobCk/KG8mJiFsLmlzU1ZHJiYobC5pc1NWRz0hMCksci5wdXNoKGwpKTpyLnB1c2goe190ZXh0Om51bGw9PWw/XCJcIjpsfSl9cmV0dXJuIHJ9ZnVuY3Rpb24gcihlLG4sdCxyKXtpZih0IT09cilyZXR1cm4hMDtmb3IodmFyIG8gaW4gZSlpZihlW29dIT09bltvXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBvKGUpe3ZhciBuO2lmKG51bGwhPWUuX3RleHQpbj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlLl90ZXh0KTtlbHNlIGlmKCEwPT09ZS5fdm5vZGUpe3ZhciB0PWUudHlwZSxyPWUucHJvcHMsbD1lLmNvbnRlbnQsZj1lLmlzU1ZHO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXt2YXIgdjt2PWEobj1mP2RvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhHLHQpOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodCkscix2b2lkIDApLFMobCk/aShuLGwpOm4uYXBwZW5kQ2hpbGQobyhsKSksbnVsbCE9diYmdShuLHIsdm9pZCAwLHYpfWVsc2UgaWYoVih0KSluPXQubW91bnQocixsKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQpaWYoVih0LnByb3RvdHlwZSkpe3ZhciBkPW5ldyB0KHIsbCk7bj1kLm1vdW50KHIsbCksZS5fZGF0YT1kfWVsc2V7dmFyIHA9dChyLGwpO249byhwKSxlLl9kYXRhPXB9fWlmKG51bGw9PW4pdGhyb3cgbmV3IEVycm9yKFwiVW5rb3duIG5vZGUgdHlwZSFcIik7cmV0dXJuIGUuX25vZGU9bixufWZ1bmN0aW9uIGkoZSxuKXtmb3IodmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOjAscj1hcmd1bWVudHMubGVuZ3RoPjMmJnZvaWQgMCE9PWFyZ3VtZW50c1szXT9hcmd1bWVudHNbM106bi5sZW5ndGgtMSxpPWFyZ3VtZW50c1s0XTt0PD1yOyl7dmFyIGw9blt0KytdO2UuaW5zZXJ0QmVmb3JlKG8obCksaSl9fWZ1bmN0aW9uIGwoZSxuKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06MCxyPWFyZ3VtZW50cy5sZW5ndGg+MyYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTpuLmxlbmd0aC0xLG89dm9pZCAwO2ZvcihlLmNoaWxkTm9kZXMubGVuZ3RoPT09ci10KzEmJihlLnRleHRDb250ZW50PVwiXCIsbz0hMCk7dDw9cjspe3ZhciBpPW5bdCsrXTtvfHxlLnJlbW92ZUNoaWxkKGkuX25vZGUpLGYoaSl9fWZ1bmN0aW9uIGYoZSl7aWYoUyhlKSlmb3IodmFyIG49MDtuPGUubGVuZ3RoO24rKylmKGVbbl0pO2Vsc2UhMD09PWUuX3Zub2RlJiYoVihlLnR5cGUpP2UudHlwZS51bm1vdW50KGUuX25vZGUpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGUudHlwZSYmVihlLnR5cGUucHJvdG90eXBlKT9lLl9kYXRhLnVubW91bnQoZS5fbm9kZSk6bnVsbCE9ZS5jb250ZW50JiZmKGUuY29udGVudCkpfWZ1bmN0aW9uIHUoZSxuLHQscil7Zm9yKHZhciBvLGk9MDtpPHIubGVuZ3RoO2krKyl7bz1yW2ldO3ZhciBsPXQmJnRbb10sZj1uW29dO2whPT1mJiYoZVtvXT1mKX19ZnVuY3Rpb24gYShlLG4sdCl7dmFyIHI9W107Zm9yKHZhciBvIGluIG4paWYoby5zdGFydHNXaXRoKFwib25cIil8fG8gaW4gQylyLnB1c2gobyk7ZWxzZXt2YXIgaT1udWxsIT10P3Rbb106dm9pZCAwLGw9bltvXTtpIT09bCYmdihlLG8sbCl9Zm9yKG8gaW4gdClvIGluIG58fGUucmVtb3ZlQXR0cmlidXRlKG8pO2lmKHIubGVuZ3RoPjApcmV0dXJuIHJ9ZnVuY3Rpb24gdihlLG4sdCl7aWYoITA9PT10KWUuc2V0QXR0cmlidXRlKG4sXCJcIik7ZWxzZSBpZighMT09PXQpZS5yZW1vdmVBdHRyaWJ1dGUobik7ZWxzZXt2YXIgcj1NW25dO3ZvaWQgMCE9PXI/ZS5zZXRBdHRyaWJ1dGVOUyhyLG4sdCk6ZS5zZXRBdHRyaWJ1dGUobix0KX19ZnVuY3Rpb24gZChlLG4sdCl7dmFyIGk9bi5fbm9kZTtpZihuPT09ZSlyZXR1cm4gaTt2YXIgbCx2O2lmKG51bGwhPShsPW4uX3RleHQpJiZudWxsIT0odj1lLl90ZXh0KSlsIT09diYmKGkubm9kZVZhbHVlPXYpO2Vsc2UgaWYobi50eXBlPT09ZS50eXBlJiZuLmlzU1ZHPT09ZS5pc1NWRyl7dmFyIHM9bi50eXBlO2lmKFYocykpcy5wYXRjaChpLGUucHJvcHMsbi5wcm9wcyxlLmNvbnRlbnQsbi5jb250ZW50KTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHMpaWYoVihzLnByb3RvdHlwZSkpe3ZhciBjPW4uX2RhdGE7Yy5wYXRjaChpLGUucHJvcHMsbi5wcm9wcyxlLmNvbnRlbnQsbi5jb250ZW50KSxlLl9kYXRhPWN9ZWxzZSBpZigocy5zaG91bGRVcGRhdGV8fHIpKGUucHJvcHMsbi5wcm9wcyxlLmNvbnRlbnQsbi5jb250ZW50KSl7dmFyIGg9cyhlLnByb3BzLGUuY29udGVudCk7aT1kKGgsbi5fZGF0YSx0KSxlLl9kYXRhPWh9ZWxzZSBlLl9kYXRhPW4uX2RhdGE7ZWxzZXtpZihcInN0cmluZ1wiIT10eXBlb2Ygcyl0aHJvdyBuZXcgRXJyb3IoXCJVbmtvd24gbm9kZSB0eXBlISBcIitzKTt2YXIgeT1hKGksZS5wcm9wcyxuLnByb3BzKTtwKGksZS5jb250ZW50LG4uY29udGVudCksbnVsbCE9eSYmdShpLGUucHJvcHMsbi5wcm9wcyx5KX19ZWxzZSBpPW8oZSksdCYmdC5yZXBsYWNlQ2hpbGQoaSxuLl9ub2RlKSxmKG4pO3JldHVybiBlLl9ub2RlPWksaX1mdW5jdGlvbiBwKGUsbix0KXtTKG4pfHxTKHQpP1MobikmJlModCk/YyhlLG4sdCk6KGwoZSx0LDAsdC5sZW5ndGgtMSksaShlLG4pKTpuIT09dCYmZChuLHQsZSl9ZnVuY3Rpb24gcyhlLG4pe3JldHVybiBlLmtleT09PW4ua2V5fWZ1bmN0aW9uIGMoZSxuLHQpe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg+MyYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTowLHU9YXJndW1lbnRzLmxlbmd0aD40JiZ2b2lkIDAhPT1hcmd1bWVudHNbNF0/YXJndW1lbnRzWzRdOm4ubGVuZ3RoLTEsYT1hcmd1bWVudHMubGVuZ3RoPjUmJnZvaWQgMCE9PWFyZ3VtZW50c1s1XT9hcmd1bWVudHNbNV06MCx2PWFyZ3VtZW50cy5sZW5ndGg+NiYmdm9pZCAwIT09YXJndW1lbnRzWzZdP2FyZ3VtZW50c1s2XTp0Lmxlbmd0aC0xO2lmKG4hPT10KXt2YXIgcCxjPWgobix0LHIsdSxhLHYscyxlKTtpZihyKz1jLGErPWMsYz15KG4sdCxyLHUsYSx2LHMsZSksdS09Yyx2LT1jLCEocj51JiZhPnYpKXtpZihyPD11JiZhPnYpcmV0dXJuIHA9dFthXSx2b2lkIGkoZSxuLHIsdSxwJiZwLl9ub2RlKTtpZihhPD12JiZyPnUpbChlLHQsYSx2KTtlbHNle3ZhciBfPXYtYSsxLGs9dS1yKzE7aWYoYz0tMSxfPGspe2lmKChjPXcobix0LHIsdSxhLHYscykpPj0wKXtpKGUsbixyLGMtMSwocD10W2FdKS5fbm9kZSk7dmFyIHg9YytfO2ZvcihyPWM7cjx4OylkKG5bcisrXSx0W2ErK10pO3JldHVybiBwPXRbdl0sdm9pZCBpKGUsbixyLHUscCYmcC5fbm9kZS5uZXh0U2libGluZyl9fWVsc2UgaWYoXz5rJiYoYz13KHQsbixhLHYscix1LHMpKT49MCl7Zm9yKGwoZSx0LGEsYy0xKSx4PWMrayxhPWM7YTx4OylkKG5bcisrXSx0W2ErK10pO3JldHVybiB2b2lkIGwoZSx0LGEsdil9aWYoYT09PXYpe3ZhciBBPXRbYV0uX25vZGU7cmV0dXJuIGkoZSxuLHIsdSxBKSxlLnJlbW92ZUNoaWxkKEEpLHZvaWQgZihBKX1pZihyPT09dSlyZXR1cm4gZS5pbnNlcnRCZWZvcmUobyhuW3JdKSx0W2FdLl9ub2RlKSx2b2lkIGwoZSx0LGEsdik7ZyhlLG4sdCxyLHUsYSx2KSYmbShlLG4sdCxyLHUsYSx2KX19fX1mdW5jdGlvbiBoKGUsbix0LHIsbyxpLGwsZil7Zm9yKHZhciB1LGEsdj0wO3Q8PXImJm88PWkmJmwodT1lW3RdLGE9bltvXSk7KWYmJmQodSxhLGYpLHQrKyxvKyssdisrO3JldHVybiB2fWZ1bmN0aW9uIHkoZSxuLHQscixvLGksbCxmKXtmb3IodmFyIHUsYSx2PTA7dDw9ciYmbzw9aSYmbCh1PWVbcl0sYT1uW2ldKTspZiYmZCh1LGEsZiksci0tLGktLSx2Kys7cmV0dXJuIHZ9ZnVuY3Rpb24gZyhlLG4sdCl7dmFyIHIsbyxpLGwsZix1LGEsdj1hcmd1bWVudHMubGVuZ3RoPjMmJnZvaWQgMCE9PWFyZ3VtZW50c1szXT9hcmd1bWVudHNbM106MCxkPWFyZ3VtZW50cy5sZW5ndGg+NCYmdm9pZCAwIT09YXJndW1lbnRzWzRdP2FyZ3VtZW50c1s0XTpuLmxlbmd0aC0xLHA9YXJndW1lbnRzLmxlbmd0aD41JiZ2b2lkIDAhPT1hcmd1bWVudHNbNV0/YXJndW1lbnRzWzVdOjAsYz1kLXYrMSxoPShhcmd1bWVudHMubGVuZ3RoPjYmJnZvaWQgMCE9PWFyZ3VtZW50c1s2XT9hcmd1bWVudHNbNl06dC5sZW5ndGgtMSktcCsxLHk9YytoLGc9W107ZTpmb3Iocj0wO3I8PXk7cisrKXtpZihyPjUwKXJldHVybiEwO2ZvcihhPXItMSxmPXI/Z1tyLTFdOlswLDBdLHU9Z1tyXT1bXSxvPS1yO288PXI7bys9Mil7Zm9yKGk9KGw9bz09PS1yfHxvIT09ciYmZlthK28tMV08ZlthK28rMV0/ZlthK28rMV06ZlthK28tMV0rMSktbztsPGgmJmk8YyYmcyh0W3ArbF0sblt2K2ldKTspbCsrLGkrKztpZihsPT09aCYmaT09PWMpYnJlYWsgZTt1W3Irb109bH19dmFyIG0saz1BcnJheShyLzIreS8yKSx3PXt9LHg9ay5sZW5ndGgtMTtmb3Iocj1nLmxlbmd0aC0xO3I+PTA7ci0tKXtmb3IoO2w+MCYmaT4wJiZzKHRbcCtsLTFdLG5bditpLTFdKTspa1t4LS1dPU4sbC0tLGktLTtpZighcilicmVhazthPXItMSxmPXI/Z1tyLTFdOlswLDBdLChvPWwtaSk9PT0tcnx8byE9PXImJmZbYStvLTFdPGZbYStvKzFdPyhpLS0sa1t4LS1dPUIpOihsLS0sa1t4LS1dPVUsbnVsbCE9KG09dFtwK2xdKS5rZXkmJih3W20ua2V5XT1wK2wpKX1fKGUsayxuLHQsdixwLHcpfWZ1bmN0aW9uIF8oZSxuLHQscixpLGwsdSl7Zm9yKHZhciBhLHYscCxzLGM9e30saD0wLHk9aSxnPWw7aDxuLmxlbmd0aDtoKyspe3ZhciBfPW5baF07Xz09PU4/ZCh0W3krK10scltnKytdLGUpOl89PT1CPyhzPW51bGwsbnVsbCE9KGE9dFt5KytdKS5rZXkmJihzPXVbYS5rZXldKSxudWxsIT1zPyhwPWQoYSxyW3NdKSxjW2Eua2V5XT1zKTpwPW8oYSksZS5pbnNlcnRCZWZvcmUocCxnPHIubGVuZ3RoP3JbZ10uX25vZGU6bnVsbCkpOl89PT1VJiZnKyt9Zm9yKGg9MCxnPWw7aDxuLmxlbmd0aDtoKyspe3ZhciBtPW5baF07bT09PU4/ZysrOm09PT1VJiYobnVsbCE9KHY9cltnKytdKS5rZXkmJm51bGwhPWNbdi5rZXldfHwoZS5yZW1vdmVDaGlsZCh2Ll9ub2RlKSxmKHYpKSl9fWZ1bmN0aW9uIG0oZSxuLHQscixvLGksbCl7dmFyIGYsdSxhLHYsZD17fSxwPVtdLHM9MCxjPW8tcisxLGg9bC1pKzEseT1NYXRoLm1pbihjLGgpLGc9QXJyYXkoeSsxKTtnWzBdPS0xO2Zvcih2YXIgbT0xO208Zy5sZW5ndGg7bSsrKWdbbV09bCsxO3ZhciB3PUFycmF5KHkpO2ZvcihtPWk7bTw9bDttKyspbnVsbCE9KHY9dFttXS5rZXkpP2Rbdl09bTpwLnB1c2gobSk7Zm9yKG09cjttPD1vO20rKyludWxsIT0oYT1udWxsPT0oZj1uW21dKS5rZXk/cFtzKytdOmRbZi5rZXldKSYmKHU9ayhnLGEpKT49MCYmKGdbdV09YSx3W3VdPXtuZXdpOm0sb2xkaTphLHByZXY6d1t1LTFdfSk7Zm9yKHU9Zy5sZW5ndGgtMTtnW3VdPmw7KXUtLTtmb3IodmFyIHg9d1t1XSxBPUFycmF5KGgrYy11KSxTPW8sYj1sLFY9QS5sZW5ndGgtMTt4Oyl7Zm9yKHZhciBHPXgsQz1HLm5ld2ksRT1HLm9sZGk7Uz5DOylBW1YtLV09QixTLS07Zm9yKDtiPkU7KUFbVi0tXT1VLGItLTtBW1YtLV09TixTLS0sYi0tLHg9eC5wcmV2fWZvcig7Uz49cjspQVtWLS1dPUIsUy0tO2Zvcig7Yj49aTspQVtWLS1dPVUsYi0tO18oZSxBLG4sdCxyLGksZCl9ZnVuY3Rpb24gayhlLG4pe2Zvcih2YXIgdD0xLHI9ZS5sZW5ndGgtMTt0PD1yOyl7dmFyIG89TWF0aC5jZWlsKCh0K3IpLzIpO248ZVtvXT9yPW8tMTp0PW8rMX1yZXR1cm4gdH1mdW5jdGlvbiB3KGUsbix0LHIsbyxpLGwpe2Zvcih2YXIgZj1vLHU9LTEsYT1pLW8rMTt0PD1yJiZyLXQrMT49YTspe2lmKGwoZVt0XSxuW2ZdKSl7aWYodTwwJiYodT10KSwrK2Y+aSlyZXR1cm4gdX1lbHNlIHU9LTEsZj1vO3QrK31yZXR1cm4tMX12YXIgeD17fSxBPVtdLFM9QXJyYXkuaXNBcnJheSxiPWZ1bmN0aW9uKGUpe3JldHVybiBlJiYobnVsbCE9ZS5fdm5vZGV8fG51bGwhPWUuX3RleHQpfSxWPWZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLm1vdW50JiZlLnBhdGNoJiZlLnVubW91bnR9LEc9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLEM9e3NlbGVjdGVkOiEwLHZhbHVlOiEwLGNoZWNrZWQ6ITAsaW5uZXJIVE1MOiEwfSxFPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLE09e3Nob3c6RSxhY3R1YXRlOkUsaHJlZjpFfSxOPTIsQj00LFU9ODtlLmg9ZnVuY3Rpb24oZSx0LHIpe3ZhciBvLGksbCxmPSExLHU9YXJndW1lbnRzLmxlbmd0aC0yO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXtpZigxPT09dSlvPXI7ZWxzZSBpZih1PjEpe2ZvcihpPUFycmF5KHUpLGw9MDtsPHU7bCsrKWlbbF09YXJndW1lbnRzW2wrMl07bz1pfX1lbHNlIGlmKGY9XCJzdmdcIj09PWUsMT09PXUpUyhyKT9vPW4ocixmKTpiKHIpPyhyLmlzU1ZHPWYsbz1bcl0pOm89W3tfdGV4dDpudWxsPT1yP1wiXCI6cn1dO2Vsc2UgaWYodT4xKXtmb3IoaT1BcnJheSh1KSxsPTA7bDx1O2wrKylpW2xdPWFyZ3VtZW50c1tsKzJdO289bihpLGYpfWVsc2Ugbz1BO3JldHVybntfdm5vZGU6ITAsaXNTVkc6Zix0eXBlOmUsa2V5OnQmJnQua2V5fHxudWxsLHByb3BzOnR8fHgsY29udGVudDpvfX0sZS5tb3VudD1vLGUucGF0Y2g9ZCxlLnVubW91bnQ9ZixlLmRpZmZDaGlsZHJlbj1jLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wZXRpdC1kb20ubWluLmpzLm1hcFxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qanNsaW50IG9uZXZhcjp0cnVlLCB1bmRlZjp0cnVlLCBuZXdjYXA6dHJ1ZSwgcmVnZXhwOnRydWUsIGJpdHdpc2U6dHJ1ZSwgbWF4ZXJyOjUwLCBpbmRlbnQ6NCwgd2hpdGU6ZmFsc2UsIG5vbWVuOmZhbHNlLCBwbHVzcGx1czpmYWxzZSAqL1xuLypnbG9iYWwgZGVmaW5lOmZhbHNlLCByZXF1aXJlOmZhbHNlLCBleHBvcnRzOmZhbHNlLCBtb2R1bGU6ZmFsc2UsIHNpZ25hbHM6ZmFsc2UgKi9cblxuLyoqIEBsaWNlbnNlXG4gKiBKUyBTaWduYWxzIDxodHRwOi8vbWlsbGVybWVkZWlyb3MuZ2l0aHViLmNvbS9qcy1zaWduYWxzLz5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogQXV0aG9yOiBNaWxsZXIgTWVkZWlyb3NcbiAqIFZlcnNpb246IDEuMC4wIC0gQnVpbGQ6IDI2OCAoMjAxMi8xMS8yOSAwNTo0OCBQTSlcbiAqL1xuXG4oZnVuY3Rpb24oZ2xvYmFsKXtcblxuICAgIC8vIFNpZ25hbEJpbmRpbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgLyoqXG4gICAgICogT2JqZWN0IHRoYXQgcmVwcmVzZW50cyBhIGJpbmRpbmcgYmV0d2VlbiBhIFNpZ25hbCBhbmQgYSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAgICAgKiA8YnIgLz4tIDxzdHJvbmc+VGhpcyBpcyBhbiBpbnRlcm5hbCBjb25zdHJ1Y3RvciBhbmQgc2hvdWxkbid0IGJlIGNhbGxlZCBieSByZWd1bGFyIHVzZXJzLjwvc3Ryb25nPlxuICAgICAqIDxiciAvPi0gaW5zcGlyZWQgYnkgSm9hIEViZXJ0IEFTMyBTaWduYWxCaW5kaW5nIGFuZCBSb2JlcnQgUGVubmVyJ3MgU2xvdCBjbGFzc2VzLlxuICAgICAqIEBhdXRob3IgTWlsbGVyIE1lZGVpcm9zXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQGludGVybmFsXG4gICAgICogQG5hbWUgU2lnbmFsQmluZGluZ1xuICAgICAqIEBwYXJhbSB7U2lnbmFsfSBzaWduYWwgUmVmZXJlbmNlIHRvIFNpZ25hbCBvYmplY3QgdGhhdCBsaXN0ZW5lciBpcyBjdXJyZW50bHkgYm91bmQgdG8uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgSGFuZGxlciBmdW5jdGlvbiBib3VuZCB0byB0aGUgc2lnbmFsLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNPbmNlIElmIGJpbmRpbmcgc2hvdWxkIGJlIGV4ZWN1dGVkIGp1c3Qgb25jZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2xpc3RlbmVyQ29udGV4dF0gQ29udGV4dCBvbiB3aGljaCBsaXN0ZW5lciB3aWxsIGJlIGV4ZWN1dGVkIChvYmplY3QgdGhhdCBzaG91bGQgcmVwcmVzZW50IHRoZSBgdGhpc2AgdmFyaWFibGUgaW5zaWRlIGxpc3RlbmVyIGZ1bmN0aW9uKS5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3ByaW9yaXR5XSBUaGUgcHJpb3JpdHkgbGV2ZWwgb2YgdGhlIGV2ZW50IGxpc3RlbmVyLiAoZGVmYXVsdCA9IDApLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFNpZ25hbEJpbmRpbmcoc2lnbmFsLCBsaXN0ZW5lciwgaXNPbmNlLCBsaXN0ZW5lckNvbnRleHQsIHByaW9yaXR5KSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhhbmRsZXIgZnVuY3Rpb24gYm91bmQgdG8gdGhlIHNpZ25hbC5cbiAgICAgICAgICogQHR5cGUgRnVuY3Rpb25cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyID0gbGlzdGVuZXI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGJpbmRpbmcgc2hvdWxkIGJlIGV4ZWN1dGVkIGp1c3Qgb25jZS5cbiAgICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faXNPbmNlID0gaXNPbmNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb250ZXh0IG9uIHdoaWNoIGxpc3RlbmVyIHdpbGwgYmUgZXhlY3V0ZWQgKG9iamVjdCB0aGF0IHNob3VsZCByZXByZXNlbnQgdGhlIGB0aGlzYCB2YXJpYWJsZSBpbnNpZGUgbGlzdGVuZXIgZnVuY3Rpb24pLlxuICAgICAgICAgKiBAbWVtYmVyT2YgU2lnbmFsQmluZGluZy5wcm90b3R5cGVcbiAgICAgICAgICogQG5hbWUgY29udGV4dFxuICAgICAgICAgKiBAdHlwZSBPYmplY3R8dW5kZWZpbmVkfG51bGxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGxpc3RlbmVyQ29udGV4dDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVmZXJlbmNlIHRvIFNpZ25hbCBvYmplY3QgdGhhdCBsaXN0ZW5lciBpcyBjdXJyZW50bHkgYm91bmQgdG8uXG4gICAgICAgICAqIEB0eXBlIFNpZ25hbFxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fc2lnbmFsID0gc2lnbmFsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMaXN0ZW5lciBwcmlvcml0eVxuICAgICAgICAgKiBAdHlwZSBOdW1iZXJcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcbiAgICB9XG5cbiAgICBTaWduYWxCaW5kaW5nLnByb3RvdHlwZSA9IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYmluZGluZyBpcyBhY3RpdmUgYW5kIHNob3VsZCBiZSBleGVjdXRlZC5cbiAgICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZlIDogdHJ1ZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBwYXJhbWV0ZXJzIHBhc3NlZCB0byBsaXN0ZW5lciBkdXJpbmcgYFNpZ25hbC5kaXNwYXRjaGAgYW5kIGBTaWduYWxCaW5kaW5nLmV4ZWN1dGVgLiAoY3VycmllZCBwYXJhbWV0ZXJzKVxuICAgICAgICAgKiBAdHlwZSBBcnJheXxudWxsXG4gICAgICAgICAqL1xuICAgICAgICBwYXJhbXMgOiBudWxsLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsIGxpc3RlbmVyIHBhc3NpbmcgYXJiaXRyYXJ5IHBhcmFtZXRlcnMuXG4gICAgICAgICAqIDxwPklmIGJpbmRpbmcgd2FzIGFkZGVkIHVzaW5nIGBTaWduYWwuYWRkT25jZSgpYCBpdCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZCBmcm9tIHNpZ25hbCBkaXNwYXRjaCBxdWV1ZSwgdGhpcyBtZXRob2QgaXMgdXNlZCBpbnRlcm5hbGx5IGZvciB0aGUgc2lnbmFsIGRpc3BhdGNoLjwvcD5cbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gW3BhcmFtc0Fycl0gQXJyYXkgb2YgcGFyYW1ldGVycyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIGxpc3RlbmVyXG4gICAgICAgICAqIEByZXR1cm4geyp9IFZhbHVlIHJldHVybmVkIGJ5IHRoZSBsaXN0ZW5lci5cbiAgICAgICAgICovXG4gICAgICAgIGV4ZWN1dGUgOiBmdW5jdGlvbiAocGFyYW1zQXJyKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlclJldHVybiwgcGFyYW1zO1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlICYmICEhdGhpcy5fbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSB0aGlzLnBhcmFtcz8gdGhpcy5wYXJhbXMuY29uY2F0KHBhcmFtc0FycikgOiBwYXJhbXNBcnI7XG4gICAgICAgICAgICAgICAgaGFuZGxlclJldHVybiA9IHRoaXMuX2xpc3RlbmVyLmFwcGx5KHRoaXMuY29udGV4dCwgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNPbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXJSZXR1cm47XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERldGFjaCBiaW5kaW5nIGZyb20gc2lnbmFsLlxuICAgICAgICAgKiAtIGFsaWFzIHRvOiBteVNpZ25hbC5yZW1vdmUobXlCaW5kaW5nLmdldExpc3RlbmVyKCkpO1xuICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbnxudWxsfSBIYW5kbGVyIGZ1bmN0aW9uIGJvdW5kIHRvIHRoZSBzaWduYWwgb3IgYG51bGxgIGlmIGJpbmRpbmcgd2FzIHByZXZpb3VzbHkgZGV0YWNoZWQuXG4gICAgICAgICAqL1xuICAgICAgICBkZXRhY2ggOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0JvdW5kKCk/IHRoaXMuX3NpZ25hbC5yZW1vdmUodGhpcy5fbGlzdGVuZXIsIHRoaXMuY29udGV4dCkgOiBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgYmluZGluZyBpcyBzdGlsbCBib3VuZCB0byB0aGUgc2lnbmFsIGFuZCBoYXZlIGEgbGlzdGVuZXIuXG4gICAgICAgICAqL1xuICAgICAgICBpc0JvdW5kIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICghIXRoaXMuX3NpZ25hbCAmJiAhIXRoaXMuX2xpc3RlbmVyKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gSWYgU2lnbmFsQmluZGluZyB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgb25jZS5cbiAgICAgICAgICovXG4gICAgICAgIGlzT25jZSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc09uY2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBIYW5kbGVyIGZ1bmN0aW9uIGJvdW5kIHRvIHRoZSBzaWduYWwuXG4gICAgICAgICAqL1xuICAgICAgICBnZXRMaXN0ZW5lciA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9saXN0ZW5lcjtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7U2lnbmFsfSBTaWduYWwgdGhhdCBsaXN0ZW5lciBpcyBjdXJyZW50bHkgYm91bmQgdG8uXG4gICAgICAgICAqL1xuICAgICAgICBnZXRTaWduYWwgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmFsO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWxldGUgaW5zdGFuY2UgcHJvcGVydGllc1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX2Rlc3Ryb3kgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fc2lnbmFsO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuY29udGV4dDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHRvU3RyaW5nIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICdbU2lnbmFsQmluZGluZyBpc09uY2U6JyArIHRoaXMuX2lzT25jZSArJywgaXNCb3VuZDonKyB0aGlzLmlzQm91bmQoKSArJywgYWN0aXZlOicgKyB0aGlzLmFjdGl2ZSArICddJztcbiAgICAgICAgfVxuXG4gICAgfTtcblxuXG4vKmdsb2JhbCBTaWduYWxCaW5kaW5nOmZhbHNlKi9cblxuICAgIC8vIFNpZ25hbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVMaXN0ZW5lcihsaXN0ZW5lciwgZm5OYW1lKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggJ2xpc3RlbmVyIGlzIGEgcmVxdWlyZWQgcGFyYW0gb2Yge2ZufSgpIGFuZCBzaG91bGQgYmUgYSBGdW5jdGlvbi4nLnJlcGxhY2UoJ3tmbn0nLCBmbk5hbWUpICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDdXN0b20gZXZlbnQgYnJvYWRjYXN0ZXJcbiAgICAgKiA8YnIgLz4tIGluc3BpcmVkIGJ5IFJvYmVydCBQZW5uZXIncyBBUzMgU2lnbmFscy5cbiAgICAgKiBAbmFtZSBTaWduYWxcbiAgICAgKiBAYXV0aG9yIE1pbGxlciBNZWRlaXJvc1xuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFNpZ25hbCgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIEFycmF5LjxTaWduYWxCaW5kaW5nPlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fYmluZGluZ3MgPSBbXTtcbiAgICAgICAgdGhpcy5fcHJldlBhcmFtcyA9IG51bGw7XG5cbiAgICAgICAgLy8gZW5mb3JjZSBkaXNwYXRjaCB0byBhd2F5cyB3b3JrIG9uIHNhbWUgY29udGV4dCAoIzQ3KVxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2ggPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgU2lnbmFsLnByb3RvdHlwZS5kaXNwYXRjaC5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIFNpZ25hbC5wcm90b3R5cGUgPSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNpZ25hbHMgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHR5cGUgU3RyaW5nXG4gICAgICAgICAqIEBjb25zdFxuICAgICAgICAgKi9cbiAgICAgICAgVkVSU0lPTiA6ICcxLjAuMCcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIFNpZ25hbCBzaG91bGQga2VlcCByZWNvcmQgb2YgcHJldmlvdXNseSBkaXNwYXRjaGVkIHBhcmFtZXRlcnMgYW5kXG4gICAgICAgICAqIGF1dG9tYXRpY2FsbHkgZXhlY3V0ZSBsaXN0ZW5lciBkdXJpbmcgYGFkZCgpYC9gYWRkT25jZSgpYCBpZiBTaWduYWwgd2FzXG4gICAgICAgICAqIGFscmVhZHkgZGlzcGF0Y2hlZCBiZWZvcmUuXG4gICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIG1lbW9yaXplIDogZmFsc2UsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9zaG91bGRQcm9wYWdhdGUgOiB0cnVlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBTaWduYWwgaXMgYWN0aXZlIGFuZCBzaG91bGQgYnJvYWRjYXN0IGV2ZW50cy5cbiAgICAgICAgICogPHA+PHN0cm9uZz5JTVBPUlRBTlQ6PC9zdHJvbmc+IFNldHRpbmcgdGhpcyBwcm9wZXJ0eSBkdXJpbmcgYSBkaXNwYXRjaCB3aWxsIG9ubHkgYWZmZWN0IHRoZSBuZXh0IGRpc3BhdGNoLCBpZiB5b3Ugd2FudCB0byBzdG9wIHRoZSBwcm9wYWdhdGlvbiBvZiBhIHNpZ25hbCB1c2UgYGhhbHQoKWAgaW5zdGVhZC48L3A+XG4gICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2ZSA6IHRydWUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNPbmNlXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbbGlzdGVuZXJDb250ZXh0XVxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gW3ByaW9yaXR5XVxuICAgICAgICAgKiBAcmV0dXJuIHtTaWduYWxCaW5kaW5nfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3JlZ2lzdGVyTGlzdGVuZXIgOiBmdW5jdGlvbiAobGlzdGVuZXIsIGlzT25jZSwgbGlzdGVuZXJDb250ZXh0LCBwcmlvcml0eSkge1xuXG4gICAgICAgICAgICB2YXIgcHJldkluZGV4ID0gdGhpcy5faW5kZXhPZkxpc3RlbmVyKGxpc3RlbmVyLCBsaXN0ZW5lckNvbnRleHQpLFxuICAgICAgICAgICAgICAgIGJpbmRpbmc7XG5cbiAgICAgICAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgYmluZGluZyA9IHRoaXMuX2JpbmRpbmdzW3ByZXZJbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGJpbmRpbmcuaXNPbmNlKCkgIT09IGlzT25jZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBjYW5ub3QgYWRkJysgKGlzT25jZT8gJycgOiAnT25jZScpICsnKCkgdGhlbiBhZGQnKyAoIWlzT25jZT8gJycgOiAnT25jZScpICsnKCkgdGhlIHNhbWUgbGlzdGVuZXIgd2l0aG91dCByZW1vdmluZyB0aGUgcmVsYXRpb25zaGlwIGZpcnN0LicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYmluZGluZyA9IG5ldyBTaWduYWxCaW5kaW5nKHRoaXMsIGxpc3RlbmVyLCBpc09uY2UsIGxpc3RlbmVyQ29udGV4dCwgcHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FkZEJpbmRpbmcoYmluZGluZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMubWVtb3JpemUgJiYgdGhpcy5fcHJldlBhcmFtcyl7XG4gICAgICAgICAgICAgICAgYmluZGluZy5leGVjdXRlKHRoaXMuX3ByZXZQYXJhbXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYmluZGluZztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtTaWduYWxCaW5kaW5nfSBiaW5kaW5nXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfYWRkQmluZGluZyA6IGZ1bmN0aW9uIChiaW5kaW5nKSB7XG4gICAgICAgICAgICAvL3NpbXBsaWZpZWQgaW5zZXJ0aW9uIHNvcnRcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy5fYmluZGluZ3MubGVuZ3RoO1xuICAgICAgICAgICAgZG8geyAtLW47IH0gd2hpbGUgKHRoaXMuX2JpbmRpbmdzW25dICYmIGJpbmRpbmcuX3ByaW9yaXR5IDw9IHRoaXMuX2JpbmRpbmdzW25dLl9wcmlvcml0eSk7XG4gICAgICAgICAgICB0aGlzLl9iaW5kaW5ncy5zcGxpY2UobiArIDEsIDAsIGJpbmRpbmcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfaW5kZXhPZkxpc3RlbmVyIDogZnVuY3Rpb24gKGxpc3RlbmVyLCBjb250ZXh0KSB7XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXMuX2JpbmRpbmdzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBjdXI7XG4gICAgICAgICAgICB3aGlsZSAobi0tKSB7XG4gICAgICAgICAgICAgICAgY3VyID0gdGhpcy5fYmluZGluZ3Nbbl07XG4gICAgICAgICAgICAgICAgaWYgKGN1ci5fbGlzdGVuZXIgPT09IGxpc3RlbmVyICYmIGN1ci5jb250ZXh0ID09PSBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgaWYgbGlzdGVuZXIgd2FzIGF0dGFjaGVkIHRvIFNpZ25hbC5cbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IFtjb250ZXh0XVxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBpZiBTaWduYWwgaGFzIHRoZSBzcGVjaWZpZWQgbGlzdGVuZXIuXG4gICAgICAgICAqL1xuICAgICAgICBoYXMgOiBmdW5jdGlvbiAobGlzdGVuZXIsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbmRleE9mTGlzdGVuZXIobGlzdGVuZXIsIGNvbnRleHQpICE9PSAtMTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGEgbGlzdGVuZXIgdG8gdGhlIHNpZ25hbC5cbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgU2lnbmFsIGhhbmRsZXIgZnVuY3Rpb24uXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbbGlzdGVuZXJDb250ZXh0XSBDb250ZXh0IG9uIHdoaWNoIGxpc3RlbmVyIHdpbGwgYmUgZXhlY3V0ZWQgKG9iamVjdCB0aGF0IHNob3VsZCByZXByZXNlbnQgdGhlIGB0aGlzYCB2YXJpYWJsZSBpbnNpZGUgbGlzdGVuZXIgZnVuY3Rpb24pLlxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gW3ByaW9yaXR5XSBUaGUgcHJpb3JpdHkgbGV2ZWwgb2YgdGhlIGV2ZW50IGxpc3RlbmVyLiBMaXN0ZW5lcnMgd2l0aCBoaWdoZXIgcHJpb3JpdHkgd2lsbCBiZSBleGVjdXRlZCBiZWZvcmUgbGlzdGVuZXJzIHdpdGggbG93ZXIgcHJpb3JpdHkuIExpc3RlbmVycyB3aXRoIHNhbWUgcHJpb3JpdHkgbGV2ZWwgd2lsbCBiZSBleGVjdXRlZCBhdCB0aGUgc2FtZSBvcmRlciBhcyB0aGV5IHdlcmUgYWRkZWQuIChkZWZhdWx0ID0gMClcbiAgICAgICAgICogQHJldHVybiB7U2lnbmFsQmluZGluZ30gQW4gT2JqZWN0IHJlcHJlc2VudGluZyB0aGUgYmluZGluZyBiZXR3ZWVuIHRoZSBTaWduYWwgYW5kIGxpc3RlbmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgYWRkIDogZnVuY3Rpb24gKGxpc3RlbmVyLCBsaXN0ZW5lckNvbnRleHQsIHByaW9yaXR5KSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUxpc3RlbmVyKGxpc3RlbmVyLCAnYWRkJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0ZXJMaXN0ZW5lcihsaXN0ZW5lciwgZmFsc2UsIGxpc3RlbmVyQ29udGV4dCwgcHJpb3JpdHkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgbGlzdGVuZXIgdG8gdGhlIHNpZ25hbCB0aGF0IHNob3VsZCBiZSByZW1vdmVkIGFmdGVyIGZpcnN0IGV4ZWN1dGlvbiAod2lsbCBiZSBleGVjdXRlZCBvbmx5IG9uY2UpLlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBTaWduYWwgaGFuZGxlciBmdW5jdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IFtsaXN0ZW5lckNvbnRleHRdIENvbnRleHQgb24gd2hpY2ggbGlzdGVuZXIgd2lsbCBiZSBleGVjdXRlZCAob2JqZWN0IHRoYXQgc2hvdWxkIHJlcHJlc2VudCB0aGUgYHRoaXNgIHZhcmlhYmxlIGluc2lkZSBsaXN0ZW5lciBmdW5jdGlvbikuXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbcHJpb3JpdHldIFRoZSBwcmlvcml0eSBsZXZlbCBvZiB0aGUgZXZlbnQgbGlzdGVuZXIuIExpc3RlbmVycyB3aXRoIGhpZ2hlciBwcmlvcml0eSB3aWxsIGJlIGV4ZWN1dGVkIGJlZm9yZSBsaXN0ZW5lcnMgd2l0aCBsb3dlciBwcmlvcml0eS4gTGlzdGVuZXJzIHdpdGggc2FtZSBwcmlvcml0eSBsZXZlbCB3aWxsIGJlIGV4ZWN1dGVkIGF0IHRoZSBzYW1lIG9yZGVyIGFzIHRoZXkgd2VyZSBhZGRlZC4gKGRlZmF1bHQgPSAwKVxuICAgICAgICAgKiBAcmV0dXJuIHtTaWduYWxCaW5kaW5nfSBBbiBPYmplY3QgcmVwcmVzZW50aW5nIHRoZSBiaW5kaW5nIGJldHdlZW4gdGhlIFNpZ25hbCBhbmQgbGlzdGVuZXIuXG4gICAgICAgICAqL1xuICAgICAgICBhZGRPbmNlIDogZnVuY3Rpb24gKGxpc3RlbmVyLCBsaXN0ZW5lckNvbnRleHQsIHByaW9yaXR5KSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUxpc3RlbmVyKGxpc3RlbmVyLCAnYWRkT25jZScpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lzdGVyTGlzdGVuZXIobGlzdGVuZXIsIHRydWUsIGxpc3RlbmVyQ29udGV4dCwgcHJpb3JpdHkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgYSBzaW5nbGUgbGlzdGVuZXIgZnJvbSB0aGUgZGlzcGF0Y2ggcXVldWUuXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIEhhbmRsZXIgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgcmVtb3ZlZC5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IFtjb250ZXh0XSBFeGVjdXRpb24gY29udGV4dCAoc2luY2UgeW91IGNhbiBhZGQgdGhlIHNhbWUgaGFuZGxlciBtdWx0aXBsZSB0aW1lcyBpZiBleGVjdXRpbmcgaW4gYSBkaWZmZXJlbnQgY29udGV4dCkuXG4gICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBMaXN0ZW5lciBoYW5kbGVyIGZ1bmN0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3ZlIDogZnVuY3Rpb24gKGxpc3RlbmVyLCBjb250ZXh0KSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUxpc3RlbmVyKGxpc3RlbmVyLCAncmVtb3ZlJyk7XG5cbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5faW5kZXhPZkxpc3RlbmVyKGxpc3RlbmVyLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2JpbmRpbmdzW2ldLl9kZXN0cm95KCk7IC8vbm8gcmVhc29uIHRvIGEgU2lnbmFsQmluZGluZyBleGlzdCBpZiBpdCBpc24ndCBhdHRhY2hlZCB0byBhIHNpZ25hbFxuICAgICAgICAgICAgICAgIHRoaXMuX2JpbmRpbmdzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZnJvbSB0aGUgU2lnbmFsLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3ZlQWxsIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLl9iaW5kaW5ncy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAobi0tKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmluZGluZ3Nbbl0uX2Rlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2JpbmRpbmdzLmxlbmd0aCA9IDA7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn0gTnVtYmVyIG9mIGxpc3RlbmVycyBhdHRhY2hlZCB0byB0aGUgU2lnbmFsLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0TnVtTGlzdGVuZXJzIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdzLmxlbmd0aDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU3RvcCBwcm9wYWdhdGlvbiBvZiB0aGUgZXZlbnQsIGJsb2NraW5nIHRoZSBkaXNwYXRjaCB0byBuZXh0IGxpc3RlbmVycyBvbiB0aGUgcXVldWUuXG4gICAgICAgICAqIDxwPjxzdHJvbmc+SU1QT1JUQU5UOjwvc3Ryb25nPiBzaG91bGQgYmUgY2FsbGVkIG9ubHkgZHVyaW5nIHNpZ25hbCBkaXNwYXRjaCwgY2FsbGluZyBpdCBiZWZvcmUvYWZ0ZXIgZGlzcGF0Y2ggd29uJ3QgYWZmZWN0IHNpZ25hbCBicm9hZGNhc3QuPC9wPlxuICAgICAgICAgKiBAc2VlIFNpZ25hbC5wcm90b3R5cGUuZGlzYWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgaGFsdCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3VsZFByb3BhZ2F0ZSA9IGZhbHNlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNwYXRjaC9Ccm9hZGNhc3QgU2lnbmFsIHRvIGFsbCBsaXN0ZW5lcnMgYWRkZWQgdG8gdGhlIHF1ZXVlLlxuICAgICAgICAgKiBAcGFyYW0gey4uLip9IFtwYXJhbXNdIFBhcmFtZXRlcnMgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIGVhY2ggaGFuZGxlci5cbiAgICAgICAgICovXG4gICAgICAgIGRpc3BhdGNoIDogZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKCEgdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwYXJhbXNBcnIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICAgICAgICAgIG4gPSB0aGlzLl9iaW5kaW5ncy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgYmluZGluZ3M7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1lbW9yaXplKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldlBhcmFtcyA9IHBhcmFtc0FycjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEgbikge1xuICAgICAgICAgICAgICAgIC8vc2hvdWxkIGNvbWUgYWZ0ZXIgbWVtb3JpemVcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJpbmRpbmdzID0gdGhpcy5fYmluZGluZ3Muc2xpY2UoKTsgLy9jbG9uZSBhcnJheSBpbiBjYXNlIGFkZC9yZW1vdmUgaXRlbXMgZHVyaW5nIGRpc3BhdGNoXG4gICAgICAgICAgICB0aGlzLl9zaG91bGRQcm9wYWdhdGUgPSB0cnVlOyAvL2luIGNhc2UgYGhhbHRgIHdhcyBjYWxsZWQgYmVmb3JlIGRpc3BhdGNoIG9yIGR1cmluZyB0aGUgcHJldmlvdXMgZGlzcGF0Y2guXG5cbiAgICAgICAgICAgIC8vZXhlY3V0ZSBhbGwgY2FsbGJhY2tzIHVudGlsIGVuZCBvZiB0aGUgbGlzdCBvciB1bnRpbCBhIGNhbGxiYWNrIHJldHVybnMgYGZhbHNlYCBvciBzdG9wcyBwcm9wYWdhdGlvblxuICAgICAgICAgICAgLy9yZXZlcnNlIGxvb3Agc2luY2UgbGlzdGVuZXJzIHdpdGggaGlnaGVyIHByaW9yaXR5IHdpbGwgYmUgYWRkZWQgYXQgdGhlIGVuZCBvZiB0aGUgbGlzdFxuICAgICAgICAgICAgZG8geyBuLS07IH0gd2hpbGUgKGJpbmRpbmdzW25dICYmIHRoaXMuX3Nob3VsZFByb3BhZ2F0ZSAmJiBiaW5kaW5nc1tuXS5leGVjdXRlKHBhcmFtc0FycikgIT09IGZhbHNlKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRm9yZ2V0IG1lbW9yaXplZCBhcmd1bWVudHMuXG4gICAgICAgICAqIEBzZWUgU2lnbmFsLm1lbW9yaXplXG4gICAgICAgICAqL1xuICAgICAgICBmb3JnZXQgOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5fcHJldlBhcmFtcyA9IG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSBhbGwgYmluZGluZ3MgZnJvbSBzaWduYWwgYW5kIGRlc3Ryb3kgYW55IHJlZmVyZW5jZSB0byBleHRlcm5hbCBvYmplY3RzIChkZXN0cm95IFNpZ25hbCBvYmplY3QpLlxuICAgICAgICAgKiA8cD48c3Ryb25nPklNUE9SVEFOVDo8L3N0cm9uZz4gY2FsbGluZyBhbnkgbWV0aG9kIG9uIHRoZSBzaWduYWwgaW5zdGFuY2UgYWZ0ZXIgY2FsbGluZyBkaXNwb3NlIHdpbGwgdGhyb3cgZXJyb3JzLjwvcD5cbiAgICAgICAgICovXG4gICAgICAgIGRpc3Bvc2UgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFsbCgpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2JpbmRpbmdzO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3ByZXZQYXJhbXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICB0b1N0cmluZyA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnW1NpZ25hbCBhY3RpdmU6JysgdGhpcy5hY3RpdmUgKycgbnVtTGlzdGVuZXJzOicrIHRoaXMuZ2V0TnVtTGlzdGVuZXJzKCkgKyddJztcbiAgICAgICAgfVxuXG4gICAgfTtcblxuXG4gICAgLy8gTmFtZXNwYWNlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAvKipcbiAgICAgKiBTaWduYWxzIG5hbWVzcGFjZVxuICAgICAqIEBuYW1lc3BhY2VcbiAgICAgKiBAbmFtZSBzaWduYWxzXG4gICAgICovXG4gICAgdmFyIHNpZ25hbHMgPSBTaWduYWw7XG5cbiAgICAvKipcbiAgICAgKiBDdXN0b20gZXZlbnQgYnJvYWRjYXN0ZXJcbiAgICAgKiBAc2VlIFNpZ25hbFxuICAgICAqL1xuICAgIC8vIGFsaWFzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSAoc2VlICNnaC00NClcbiAgICBzaWduYWxzLlNpZ25hbCA9IFNpZ25hbDtcblxuXG5cbiAgICAvL2V4cG9ydHMgdG8gbXVsdGlwbGUgZW52aXJvbm1lbnRzXG4gICAgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKXsgLy9BTURcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNpZ25hbHM7IH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpeyAvL25vZGVcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBzaWduYWxzO1xuICAgIH0gZWxzZSB7IC8vYnJvd3NlclxuICAgICAgICAvL3VzZSBzdHJpbmcgYmVjYXVzZSBvZiBHb29nbGUgY2xvc3VyZSBjb21waWxlciBBRFZBTkNFRF9NT0RFXG4gICAgICAgIC8qanNsaW50IHN1Yjp0cnVlICovXG4gICAgICAgIGdsb2JhbFsnc2lnbmFscyddID0gc2lnbmFscztcbiAgICB9XG5cbn0odGhpcykpO1xuIiwiLyoqXG4gKiBBY3Rpdml0aWVzIG1vZHVsZVxuICogQGF1dGhvciBNaWNoYWVsIEhlbWluZ3dheVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHsgaCwgbW91bnQsIHBhdGNoIH0gZnJvbSAncGV0aXQtZG9tJyAvLyBWaXJ0dWFsIERPTVxuaW1wb3J0ICQgZnJvbSAnYmFsYWpzJyAvLyBET00gc2VsZWN0b3IgZW5naW5lXG5cbmltcG9ydCB7IGFwaSBhcyBheGlvcywgY2FjaGUgfSBmcm9tICcuL3V0aWwvY29uZmlnLmpzJ1xuXG5pbXBvcnQgc3RhdGUgZnJvbSAnLi91dGlsL3N0YXRlLmpzJyAvLyBBcHAgc3RhdGUgYW5kIHJvdXRpbmdcbmltcG9ydCB7IG9uIH0gZnJvbSAnLi91dGlsL2hlbHBlcnMuanMnIC8vIEhlbHBlcnNcbmltcG9ydCBjYXRlZyBmcm9tICcuL2NvbXBvbmVudHMvY2F0LmpzJyAvLyBBcHAgY29tcG9uZW50c1xuXG4vLyBET01cbmNvbnN0IGNvbnRhaW5lciA9ICQub25lKCcjYWN0aXZpdGllc19fYnktY2F0JylcbmNvbnN0IGNhcmRzID0gJCgnLmNhdGVnb3J5LWNhcmQnKVxuY29uc3QgZHJpbGxkb3duID0gJC5vbmUoJyNkcmlsbGRvd24nKVxuY29uc3QgYWN0aXZpdHkgPSAkLm9uZSgnI2FjdGl2aXR5JylcbmNvbnN0IGNhdE1ldGEgPSAkLm9uZSgnI2NhdC1tZXRhJylcblxuXG5cdC8vaGlkZW1ldGE6ICgpID0+ICgnLmFjdGl2aXR5LW1ldGEnKVswXS5jbGFzc05hbWUgPSAnc3Rvcmllcy1tZXRhIGhpZGRlbicsXG5cblx0Ly8gXHRcdGlmIChzdGF0ZS5kcmlsbExldmVsID09IDApXG5cdC8vIFx0XHRcdGhpc3RvcnkucHVzaFN0YXRlKHN0YXRlLmhpc3RvcnksICcnLCBkYXRhLnNsdWcpXG5cdC8vIFx0XHRlbHNlIC8qaWYgKHN0YXRlLmRyaWxsTGV2ZWwgPT0gMSkqL1xuXHQvLyBcdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZS5oaXN0b3J5LCAnJywgc3RhdGUuY2F0ZWdvcnlEYXRhLnNsdWcgKyAnLycgKyBkYXRhLnNsdWcpXG5cdC8vIFx0XHQvLyBlbHNlIGlmIChzdGF0ZS5kcmlsbExldmVsID09IDIpXG5cdC8vIFx0XHQvLyBcdGhpc3RvcnkucHVzaFN0YXRlKHN0YXRlLmhpc3RvcnksICcnLCBzdGF0ZS5jYXRlZ29yeURhdGEuc2x1ZyArICcvJyArIGRhdGEuc2x1Zylcblx0Ly8gXHR9XG5cdC8vIH1cbi8vIH1cblxuZnVuY3Rpb24gaW5pdCAoKSB7XG5cdGNhcmRzLmZvckVhY2goaXRlbSA9PiB7XG5cdFx0b24oJ2NsaWNrJywgJC5vbmUoaXRlbSksIGV2ZW50ID0+IHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuXHRcdFx0bGV0IElEID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2F0Jylcblx0XHRcdGNhY2hlLmdldChJRCkudGhlbihkYXRhID0+IHNldFNlbGVjdGVkQ2F0ZWdvcnkoZGF0YSkpXG5cdFx0fSlcblx0fSlcblxuXHRvbignY2xpY2snLCAkLm9uZSgnI2JhY2stYnV0dG9uJyksICgpID0+IHtcblx0XHRzdGF0ZS5kcmlsbFRvKHN0YXRlLmdldCgnZHJpbGwnKS5sZXZlbCAtIDEpXG5cdH0pXG59XG5vbignRE9NQ29udGVudExvYWRlZCcsIHdpbmRvdywgaW5pdCgpKVxuXG4vLyBzZWxlY3RcbmZ1bmN0aW9uIHNldFNlbGVjdGVkQ2F0ZWdvcnkoZGF0YSkge1xuXHRzdGF0ZS5kcmlsbFRvKDEpXG5cdCQub25lKCcuYWN0aXZpdGllcy1tZXRhJykuc3R5bGUgPSAndmlzaWJpbGl0eTogaGlkZGVuJ1xuXHRzdGF0ZS5tdXRhdGUoe2NhdGVnb3J5RGF0YTogZGF0YX0pXG5cdGNhdGVnKHN0YXRlKVxufVxuIiwiaW1wb3J0ICQgZnJvbSAnYmFsYWpzJ1xuaW1wb3J0IHsgYXBpIGFzIGF4aW9zLCBjYWNoZSB9IGZyb20gJy4uL3V0aWwvY29uZmlnLmpzJ1xuaW1wb3J0IHsgbWFrZUVtYmVkTGluayB9IGZyb20gJy4uL3V0aWwvaGVscGVycy5qcydcblxuY29uc3QgYWN0aXZpdHkgPSB7XG5cblx0Ly8gU3RvcnkgRnVuY3Rpb25zXG5cdGdldFJlbGF0ZWRTdG9yaWVzOiBmdW5jdGlvbiAocXVlcnksIGNhbGxiYWNrKSB7XG5cdFx0YXhpb3MuZ2V0KHF1ZXJ5KS50aGVuKGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0Y2FsbGJhY2socmVzLmRhdGEpXG5cdFx0fSkuY2F0Y2goJ2Vycm9yJywgZnVuY3Rpb24gKGUpIHtjb25zb2xlLndhcm4oZSl9KVxuXHR9LFxuXG5cdHNob3dBY3Rpdml0eTogZnVuY3Rpb24gKGRhdGEsIHN0YXRlKSB7XG5cdFx0c3RhdGUuZ2V0KCdhY3Rpdml0eURhdGEnKS5uYW1lID0gZGF0YS50aXRsZS5yZW5kZXJlZFxuXG5cdFx0JCgnI2FjdGl2aXR5LXRpdGxlJylbMF0uaW5uZXJIVE1MID0gZGF0YS50aXRsZS5yZW5kZXJlZFxuXHRcdCQoJyNhY3Rpdml0eSBoZWFkZXIgc3BhbicpWzBdLmlubmVySFRNTCA9IHN0YXRlLmdldEJyZWFkY3J1bWIoKVxuXG5cdFx0Ly8gT3ZlcnZpZXcsIHRhYiAxLCBjb250YWluczogb2JqZWN0aXZlLCBnZmEgdGlwcywgbGV2ZWxzXG5cdFx0JCgnI2EtZGVzYy1jJylbMF0uaW5uZXJIVE1MID0gJzxoND5PdmVydmlldzwvaDQ+J1xuXHRcdFx0KyBkYXRhLmFjdGl2aXR5X2Rlc2NyaXB0aW9uX2FjdGl2aXR5X29iamVjdGl2ZVxuXHRcdCQoJyNhLWdmYS1jJylbMF0uaW5uZXJIVE1MID0gJzxoND5Hcm91cCBGYWNpbGl0YXRpb24gVGlwczwvaDQ+J1xuXHRcdFx0KyBkYXRhLmFjdGl2aXR5X2Rlc2NyaXB0aW9uX2FjdGl2aXR5X2dmYVxuXHRcdCQoJyNhLWxldmVsLWMnKVswXS5pbm5lckhUTUwgPSAnPGg0PkxldmVsczwvaDQ+J1xuXHRcdFx0KyBkYXRhLmFjdGl2aXR5X2Rlc2NyaXB0aW9uX2FjdGl2aXR5X2xldmVsXG5cblx0XHQvLyBBY3Rpdml0eSBJbnNpZ2h0c1xuXHRcdC8vIGNoZWNrIGlmIGhhcyBpbnNpZ2h0cywgZGlzcGxheSBpbnNpZ2h0cz9cblx0XHQkKCcjYS1pbnNpZ2h0cy1jJylbMF0uaW5uZXJIVE1MID0gJzxoND5BY3Rpdml0eSBJbnNpZ2h0czwvaDQ+J1xuXHRcdFx0KyBkYXRhLmFjdGl2aXR5X2luc2lnaHRzXG5cblx0XHQvLyBMaW5rZWQgU3RvcmllcywgdGFiIDNcblx0XHR0aGlzLmdldFN0b3JpZXNJbkNhdChkYXRhLmFjdGl2aXR5X2xpbmtlZF9zdG9yaWVzLCBheGlvcylcblxuXHRcdC8vIFJlc291cmNlcywgdGFiIDRcblx0XHRsZXQgcmVzY29udGVudCA9ICQoJyNhLXJlc291cmNlcy1jJylbMF1cblx0XHRpZiAoZGF0YS5hY3Rpdml0eV9yZXNvdXJjZXMgIT0gJycpIHtcblx0XHRcdHJlc2NvbnRlbnQuaW5uZXJIVE1MID0gJzxoND5SZXNvdXJjZXM8L2g0PicgKyBkYXRhLmFjdGl2aXR5X3Jlc291cmNlc1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXNjb250ZW50LmlubmVySFRNTCA9ICdUaGlzIGFjdGl2aXR5IGN1cnJlbnRseSBkb2VzIG5vdCBoYXZlIGFueSBhZGRpdGlvbmFsIHJlc291cmNlcy4nXG5cdFx0fVxuXG5cdFx0JCgnI2FjdGl2aXR5LXZpZGVvLWNvbnRhaW5lcicpWzBdLmlubmVySFRNTCA9IG1ha2VFbWJlZExpbmsoZGF0YS5hY3Rpdml0eV92aWRlbylcblx0fSxcblxuXHRtYWtlVGFiQ29udGFpbmVyOiBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgdGFicyA9ICQoJy5hY3Rpdml0eV9fbmF2LnRhYnMgbGknKSAvLyBHZXQgYWxsIHRhYnNcblxuXHRcdHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuXHRcdFx0bGV0IGxpbmsgPSB0YWIuZmlyc3RDaGlsZFxuXG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXG5cdFx0XHRcdC8vIEdldCBsb2NhdGlvbiBvZiB0YWIncyBjb250ZW50IChocmVmID0+IGlkKVxuXHRcdFx0XHRsZXQgY29udGVudFRhYiA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJylcblxuXHRcdFx0XHQvLyBTZXQgb3RoZXIgdGFicyAmIG5hdiBsYWJlcyBhcyBpbmFjdGl2ZVxuXHRcdFx0XHQkKCcudGFicy1jb250ZW50IGRpdicpLmZvckVhY2goIHQgPT4gdC5jbGFzc05hbWUgPSAnJyApXG5cdFx0XHRcdCQoJy50YWJzIGxpJykuZm9yRWFjaCggbCA9PiBsLmNsYXNzTmFtZSA9ICcnIClcblxuXHRcdFx0XHQvLyBTZXQgc2VsZWN0ZWQgdGFiICYgbmF2IGl0ZW0gYWN0aXZlXG5cdFx0XHRcdHRhYi5jbGFzc05hbWUgPSAnYWN0aXZlJ1xuXHRcdFx0XHQkKGNvbnRlbnRUYWIpWzBdLmNsYXNzTmFtZSA9ICdhY3RpdmUnXG5cdFx0XHR9KTtcblx0XHR9KVxuXHR9LFxuXG5cdHNldEFjdGl2aXR5SWNvbjogZnVuY3Rpb24gKHF1ZXJ5KSB7XG5cdFx0YXhpb3MuZ2V0KCdtZWRpYT9wYXJlbnQ9JyArIHF1ZXJ5KS50aGVuKChyZXMpID0+IHtcblx0XHRcdCQoJyNhY3Rpdml0eS1pY29uJylbMF0uaW5uZXJIVE1MID0gJycgLy8gY2xlYXIgb2xkIGltYWdlIGVsZW1zXG5cdFx0XHRjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcblx0XHRcdFx0aWNvbi5zdHlsZS5vcGFjaXR5ID0gMFxuXHRcdFx0XHRpY29uLm9ubG9hZCA9ICgpID0+IHsgJCgnI2FjdGl2aXR5LWljb24gaW1nJylbMF0uc3R5bGUub3BhY2l0eSA9IDEgfVxuXHRcdFx0XHRpY29uLnNyYyA9IHJlcy5kYXRhWzBdLm1lZGlhX2RldGFpbHMuc2l6ZXMudGh1bWJuYWlsLnNvdXJjZV91cmxcblx0XHRcdFx0aWNvbi5hbHQgPSByZXMuZGF0YVswXS5hbHRfdGV4dFxuXHRcdFx0JCgnI2FjdGl2aXR5LWljb24nKVswXS5hcHBlbmRDaGlsZChpY29uKVxuXHRcdH0pLmNhdGNoKCdlcnJvcicsIGUgPT4gY29uc29sZS53YXJuKGUpKVxuXHR9LFxuXG5cdHNldEFjdGl2aXR5TGlzdEljb246IGZ1bmN0aW9uIChxdWVyeSwgZWxlbWVudCkge1xuXHRcdGF4aW9zLmdldCgnbWVkaWE/cGFyZW50PScgKyBxdWVyeSkudGhlbigocmVzKSA9PiB7XG5cdFx0XHRjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcblx0XHRcdFx0aWNvbi5zdHlsZS5vcGFjaXR5ID0gMFxuXHRcdFx0XHRpY29uLmNsYXNzTmFtZSA9ICdsaW1hZ2UnXG5cdFx0XHRcdGljb24ub25sb2FkID0gKCkgPT4gaWNvbi5zdHlsZS5vcGFjaXR5ID0gMVxuXHRcdFx0XHRpY29uLnNyYyA9IHJlcy5kYXRhWzBdLm1lZGlhX2RldGFpbHMuc2l6ZXMudGh1bWJuYWlsLnNvdXJjZV91cmxcblx0XHRcdFx0aWNvbi5hbHQgPSByZXMuZGF0YVswXS5hbHRfdGV4dFxuXHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChpY29uKVxuXHRcdH0pLmNhdGNoKCdlcnJvcicsIGUgPT4gY29uc29sZS53YXJuKGUpKVxuXHR9LFxuXG5cdGdldFN0b3JpZXNJbkNhdDogZnVuY3Rpb24gKHN0b3JpZXMpIHtcblx0XHRsZXQgcXVlcnkgPSAnc3Rvcnk/cGVyX3BhZ2U9MTAwJidcblx0XHQvLyBsZXQgcXVlcnkgPSAnc3Rvcnk/cGVyX3BhZ2U9MTAwJmluY2x1ZGVbXT0nXG5cblx0XHRmb3IgKGxldCBpID0gc3Rvcmllcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0cXVlcnkgKz0gJ2luY2x1ZGVbXT0nICsgc3Rvcmllc1tpXSArICcmJ1xuXHRcdFx0Ly8gcXVlcnkgKz0gc3Rvcmllc1tpXSArICcsJ1xuXHRcdH1cblx0XHRxdWVyeSA9IHF1ZXJ5LnNsaWNlKDAsIC0xKSAvLyByZW1vdmUgbGFzdCBhbXBlcnNhbmQgb3IgY29tbWFcblxuXHRcdGF4aW9zLmdldChxdWVyeSkudGhlbiggcmVzID0+IHtcblx0XHRcdGxldCByZXR2YWwgPSAnPHVsPidcblx0XHRcdGZvciAodmFyIGkgPSByZXMuZGF0YS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0XHRyZXR2YWwgKz0gJzxsaT48YSBocmVmPVwiJ1xuXHRcdFx0XHRcdCsgcmVzLmRhdGFbaV0ubGlua1xuXHRcdFx0XHRcdCsgJ1wiPidcblx0XHRcdFx0XHQrIHJlcy5kYXRhW2ldLnRpdGxlLnJlbmRlcmVkXG5cdFx0XHRcdFx0KyAnPC9hPjwvbGk+J1xuXHRcdFx0fVxuXHRcdFx0cmV0dmFsICsgJzwvdWw+J1xuXG5cdFx0XHQkKCcjYS1yZWxhdGVkLWMnKVswXS5pbm5lckhUTUwgPSAgJzxoND5MaW5rZWQgU3RvcmllczwvaDQ+J1xuXHRcdFx0KyAnRWFjaCBsaW5rIHBvaW50cyB0byBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFuZCBhIHBkZiBkb3dubG9hZCB0byBlYWNoIHN0b3J5J1xuXHRcdFx0KyByZXR2YWxcblx0XHR9KS5jYXRjaCgnZXJyb3InLCBlID0+IHsgY29uc29sZS53YXJuKGUpIH0pXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aXZpdHlcbiIsImltcG9ydCAkIGZyb20gJ2JhbGFqcydcbmltcG9ydCBhY3Rpdml0eSBmcm9tICcuL2FjdGl2aXR5LmpzJ1xuaW1wb3J0IHsgYXBpIGFzIGF4aW9zLCBjYWNoZSB9IGZyb20gJy4uL3V0aWwvY29uZmlnLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXRET00gKHN0YXRlKSB7XG5cdGNvbnN0IGNtID0gJyNjYXQtbWV0YSdcblx0Y29uc3QgYyA9ICQoY20pWzBdXG5cblx0Y29uc3QgY2F0ID0gc3RhdGUuZ2V0KCdjYXRlZ29yeURhdGEnKVxuXG5cdC8vIHNldCBtZXRhIGRlc2NyaXB0aW9uXG5cdCQoY20gKyAnX19oZWFkZXIgaDInKVswXS5pbm5lckhUTUwgPSBjYXQubmFtZVxuXHQkKGNtICsgJ19faGVhZGVyIHNwYW4nKVswXS5pbm5lckhUTUwgPSBzdGF0ZS5nZXRCcmVhZGNydW1iKClcblx0JChjbSArICdfX2NvbnRlbnQnKVswXS5pbm5lckhUTUwgPSBjYXQuZGVzY3JpcHRpb25cblxuXHQvLyBzZXQgYXN5bmNcblx0c2V0VGltZW91dChcblx0XHRhY3Rpdml0eS5nZXRSZWxhdGVkU3RvcmllcygnYWN0aXZpdHk/cGVyX3BhZ2U9MTAwJmFjdGl2aXR5X2NhdD0nICsgY2F0LmlkLCBzdG9yaWVzID0+IHtcblx0XHRcdGNvbnNvbGUuZ3JvdXAoJyVjIFJlbGF0ZWQgU3RvcmllcyBmb3IgSUQgIycgKyBjYXQuaWQsICdjb2xvcjogI0Y3NUMwMycpXG5cdFx0XHRjb25zb2xlLmluZm8oJ1N0b3JpZXM6ICcsIHN0b3JpZXMpXG5cblx0XHRcdGNvbnN0IGxpc3QgPSAkKCcjY2F0LW1ldGFfX2xpc3QnKVswXVxuXHRcdFx0bGlzdC5jbGFzc05hbWUgPSAnaXNSZWZyZXNoaW5nJ1xuXHRcdFx0bGlzdC5pbm5lckhUTUwgPSAnJ1xuXG5cdFx0XHQvLyBjcmVhdGUgc3RvcnkgcHJldmlld3Ncblx0XHRcdGZvciAobGV0IGkgPSBzdG9yaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdGxldCBzID0gc3Rvcmllc1tpXVxuXG5cdFx0XHRcdGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdFx0XHRcdGVsLmNsYXNzTmFtZSA9ICdhY3Rpdml0eS1pdGVtJ1xuXHRcdFx0XHRlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RvcnknLCBzLmlkKVxuXHRcdFx0XHRlbC5pbm5lckhUTUwgPSAnPGgzPicgKyBzLnRpdGxlLnJlbmRlcmVkICsgJzwvaDM+J1xuXHRcdFx0XHRhY3Rpdml0eS5zZXRBY3Rpdml0eUxpc3RJY29uKHMuaWQsIGVsKVxuXG5cdFx0XHRcdGxpc3QuYXBwZW5kQ2hpbGQoZWwpXG5cblx0XHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0c3RhdGUuZHJpbGxUbygyKVxuXG5cdFx0XHRcdFx0c3RhdGUubXV0YXRlKHthY3Rpdml0eURhdGE6IHN9KVxuXG5cdFx0XHRcdFx0YWN0aXZpdHkubWFrZVRhYkNvbnRhaW5lcigpXG5cdFx0XHRcdFx0YWN0aXZpdHkuc2hvd0FjdGl2aXR5KHMsIHN0YXRlKVxuXHRcdFx0XHRcdGFjdGl2aXR5LnNldEFjdGl2aXR5SWNvbihzLmlkKVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zb2xlLmdyb3VwRW5kKClcblxuXHRcdFx0bGlzdC5jbGFzc05hbWUgPSAnJ1xuXHRcdH1cblx0KSwgMClcbn1cblxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJyAvLyBBeGlvcywgb3VyIEFKQVggbGliXG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuXHRwYXRoczoge1xuXHRcdG5hbWVzcGFjZTogJ2FicmFfYWMnLCAvLyBsb2NhbHN0b3JhZ2UgbmFtZXNwYWNlXG5cdFx0Y2FjaGVtaXNzOiAnYWN0aXZpdHlfY2F0LycsIC8vIHBhdGggZm9yIGF4aW9zIGl0ZW0gcmV0cmlldmFsIG9uIG1pc3Ncblx0XHRheGlvc0JVUkw6ICdodHRwczovL2RvZS5jb25jb3JkaWEuY2EvY3NscC93cC1qc29uL3dwL3YyLydcblx0fVxufVxuXG5jb25zdCBjYWNoZSA9IHtcblx0Y29uZmlnOiB7XG5cdFx0cHJlZml4OiBkZWZhdWx0cy5wYXRocy5uYW1lc3BhY2UsXG5cdFx0YmFzZTogZGVmYXVsdHMucGF0aHMuY2FjaGVtaXNzXG5cdH0sXG5cblx0ZXhpc3RzOiBmdW5jdGlvbiAoSUQpIHtcblx0XHRyZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5jb25maWcucHJlZml4ICsgSUQpID8gdHJ1ZSA6IGZhbHNlXG5cdH0sXG5cblx0dmFsaWRhdGU6IGZ1bmN0aW9uIChJRCkge1xuXHRcdGxldCBwZnggPSB0aGlzLmNvbmZpZy5wcmVmaXhcblx0XHRpZiAodGhpcy5leGlzdHMoSUQpKSB7XG5cdFx0XHRsZXQgaXRlbSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocGZ4ICsgSUQpKVxuXG5cdFx0XHQvLyBzZXQgY2FjaGUgdG8gZXhwaXJlIGluIHR3byB3ZWVrc1xuXHRcdFx0aWYgKGl0ZW0udGltZXN0YW1wICsgMS4yMWUrOSA+IERhdGUubm93KCkpIHtcblx0XHRcdFx0cmV0dXJuIGl0ZW1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdDYWNoZWQgaXRlbSBleGlzdHMsIGJ1dCBpcyBvbGRlciB0aGFuIDIgd2Vla3MnKVxuXHRcdFx0XHRyZXR1cm4gZmFsc2Vcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0fVxuXHR9LFxuXG5cdHJldHJpZXZlOiBmdW5jdGlvbiAoSUQpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UgKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGlmICh0aGlzLnZhbGlkYXRlKElEKSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnUmV0cmlldmVkIGNhY2hlZCBkYXRhOiBJRCAjJyArIElEKVxuXHRcdFx0XHRyZXNvbHZlKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5jb25maWcucHJlZml4ICsgSUQpKSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGFwaS5nZXQodGhpcy5jb25maWcuYmFzZSArIElEKS50aGVuKCByZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zZXQodGhpcy5jb25maWcucHJlZml4ICsgSUQsIHJlc3BvbnNlLmRhdGEpXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coYFJldHJpZXZlZCBsaXZlIGRhdGEgd2l0aCBJRCAjJHtJRH0gYW5kIGNhY2hlZCBpdGApXG5cdFx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZS5kYXRhKVxuXHRcdFx0XHR9KS5jYXRjaCgnZXJyb3InLCBlcnJvciA9PiByZWplY3QoZXJyb3IpKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH0sXG5cblx0Z2V0OiBmdW5jdGlvbiAoSUQpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0dGhpcy5yZXRyaWV2ZShJRCkudGhlbihkYXRhID0+IHJlc29sdmUoZGF0YSkpXG5cdFx0fSlcblx0fSxcblxuXHRzZXQ6IGZ1bmN0aW9uIChrZXksIGRhdGEpIHtcblx0XHRsZXQgaXRlbSA9IGRhdGFcblx0XHRkYXRhLnRpbWVzdGFtcCA9IERhdGUubm93KClcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuXHR9XG59XG5cbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG5cdGJhc2VVUkw6IGRlZmF1bHRzLnBhdGhzLmF4aW9zQlVSTFxufSlcblxuXG5leHBvcnQgeyBhcGksIGNhY2hlLCBkZWZhdWx0cyB9XG5cblxuLy8gVE9ETzogZXZlcnl0aGluZyAtPlxuLy8gMS4gW2RvbmVdIG1ha2UgdGhpcyBhbiBvYmplY3QgSSBjYW4gaW1wb3J0IGV2ZXJ5d2hlcmUgd2l0aCBhbGwgbXkgaW5zdGFuY2VzXG4vLyAyLiBob2xkIGltbXV0YWJsZSB2YWx1ZXNcbi8vIDMuIGhvbGQgdGhlIHN0YXRlIG9iamVjdFxuIiwiXG5leHBvcnQgZnVuY3Rpb24gb24gKGFjdGlvbiwgZWxlbSwgY2IsIHBhc3NpdmUpIHtcblx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKGFjdGlvbiwgY2IsIHBhc3NpdmUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRW1iZWRMaW5rIChsaW5rKSB7XG4gIGxldCByZWdFeHAgPSAvXi4qKHlvdXR1LmJlXFwvfHZcXC98dVxcL1xcd1xcL3xlbWJlZFxcL3x3YXRjaFxcP3Y9fFxcJnY9KShbXiNcXCZcXD9dKikuKi87XG4gIGxldCBtYXRjaCA9IGxpbmsubWF0Y2gocmVnRXhwKTtcblxuICBpZiAobWF0Y2ggJiYgbWF0Y2hbMl0ubGVuZ3RoICE9IDExKSB7XG4gICAgcmV0dXJuICdlcnJvcic7XG4gIH1cblxuXHRsZXQgZW1iZWQgPSAnPGlmcmFtZSB3aWR0aD1cIjU2MFwiIGhlaWdodD1cIjMxNVwiIHNyYz1cIi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLydcblx0cmV0dXJuIGVtYmVkICsgbWF0Y2hbMl0gKyAnXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPidcbn1cbiIsImltcG9ydCBoYXNoZXIgZnJvbSAnaGFzaGVyJ1xuaW1wb3J0ICQgZnJvbSAnYmFsYWpzJ1xuaW1wb3J0IGFuaW1lIGZyb20gJ2FuaW1lanMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciB7XG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHQvLyBhZGQgaGFzaCBjaGFuZ2UgbGlzdGVuZXJcblx0XHRoYXNoZXIuY2hhbmdlZC5hZGQodGhpcy5oYW5kbGVIYXNoQ2hhbmdlKVxuXG5cdFx0Ly8gYWRkIGluaXRpYWxpemVkIGxpc3RlbmVyXG5cdFx0Ly8gKHRvIGdyYWIgaW5pdGlhbCB2YWx1ZSBpbiBjYXNlIGl0IGlzIGFscmVhZHkgc2V0KVxuXHRcdGhhc2hlci5pbml0aWFsaXplZC5hZGQodGhpcy5oYW5kbGVIYXNoQ2hhbmdlKVxuXG5cdFx0Ly8gaW5pdGlhbGl6ZSBoYXNoZXIgKHN0YXJ0IGxpc3RlbmluZyBmb3IgaGlzdG9yeSBjaGFuZ2VzKVxuXHRcdGhhc2hlci5pbml0KClcblx0fVxuXG5cdG5hdmlnYXRlIChwYXRoKSB7XG5cdFx0bGV0IGhhc2h0cmluZyA9IHBhdGhcblxuXHRcdC8vIGNoYW5nZSBoYXNoIHZhbHVlIChnZW5lcmF0ZXMgbmV3IGhpc3RvcnkgcmVjb3JkKVxuXHRcdGhhc2hlci5zZXRIYXNoKGhhc2h0cmluZylcblx0fVxuXG5cdGhhbmRsZUhhc2hDaGFuZ2UgKG5ld0hhc2gsIG9sZEhhc2gpIHtcblx0XHRjb25zb2xlLmxvZygnJWMgTmV3IGhhc2g6ICcgKyBuZXdIYXNoLCAnYmFja2dyb3VuZDogYmx1ZScpXG5cdH1cblxuXHRnb3RvIChsZXZlbCwgZGlyKSB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gJC5vbmUoJyNhY3Rpdml0aWVzX19ieS1jYXQnKVxuXHRcdGNvbnN0IGNhcmRzID0gJCgnLmNhdGVnb3J5LWNhcmQnKVxuXHRcdGNvbnN0IGRyaWxsZG93biA9ICQub25lKCcjZHJpbGxkb3duJylcblx0XHRjb25zdCBhY3Rpdml0eSA9ICQub25lKCcjYWN0aXZpdHknKVxuXHRcdGNvbnN0IGNhdE1ldGEgPSAkLm9uZSgnI2NhdC1tZXRhJylcblxuXHRcdHN3aXRjaCAobGV2ZWwpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0ZHJpbGxkb3duLnNldEF0dHJpYnV0ZSgnZGF0YS1hY3RpdmUnLCAnbm9uZScpXG5cdFx0XHRcdGNvbnRhaW5lci5jbGFzc05hbWUgPSAnc2VsZWN0ZWQnXG5cdFx0XHRcdGNhdE1ldGEuY2xhc3NOYW1lID0gJ2hpZGRlbidcblx0XHRcdFx0YW5pbWUoe1xuXHRcdFx0XHRcdHRhcmdldHM6ICcuYWN0aXZpdGllcy1tZXRhIHAnLFxuXHRcdFx0XHRcdG9wYWNpdHk6IFswLCAxXSxcblx0XHRcdFx0XHRkdXJhdGlvbjogNTAwLFxuXHRcdFx0XHRcdGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcblx0XHRcdFx0XHRyZXZlcnNlOiBkaXIsXG5cdFx0XHRcdFx0Y29tcGxldGU6ICgpID0+IHtcblx0XHRcdFx0XHRcdGFuaW1lKHtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0czogY29udGFpbmVyLFxuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiBbMCwgMV0sXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAsXG5cdFx0XHRcdFx0XHRcdHJldmVyc2U6IGRpclxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRicmVhaztcblxuXHRcdFx0Ly8gQWN0aXZpdHkgbGlzdFxuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRpZiAoZGlyID09ICdyZXZlcnNlJykge1xuXHRcdFx0XHRcdGFuaW1lKHtcblx0XHRcdFx0XHRcdHRhcmdldHM6IGFjdGl2aXR5LFxuXHRcdFx0XHRcdFx0b3BhY2l0eTogWzEsMF0sXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogNDAwLFxuXHRcdFx0XHRcdFx0dHJhbnNsYXRlWTogeyB2YWx1ZTogNDAsIGR1cmF0aW9uOiA0MDAgfSxcblx0XHRcdFx0XHRcdGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGFjdGl2aXR5LmNsYXNzTmFtZSA9ICdoaWRkZW4nXG5cdFx0XHRcdFx0XHRcdGFuaW1lKHtcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXRzOiAnI2FjdGl2aXRpZXNfX2J5LWNhdCcsXG5cdFx0XHRcdFx0XHRcdFx0ZGVsYXk6IDEwMCxcblx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5OiBbMSwgMF0sXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDYwMCxcblx0XHRcdFx0XHRcdFx0XHRyZXZlcnNlOiBkaXIsXG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAnZWFzZU91dEV4cG8nLFxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRkcmlsbGRvd24uc2V0QXR0cmlidXRlKCdkYXRhLWFjdGl2ZScsICdjYXQnKVxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGFpbmVyLmNsYXNzTmFtZSA9ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXRNZXRhLmNsYXNzTmFtZSA9ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3Rpdml0eS5jbGFzc05hbWUgPSAnaGlkZGVuJ1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0ICBcdFx0XHRcdFx0fSlcbiAgXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMubmF2aWdhdGUoJ2FjdGl2aXR5Jylcblx0XHRcdFx0XHRhbmltZSh7XG5cdFx0XHRcdFx0XHR0YXJnZXRzOiAnLmFjdGl2aXRpZXMtbWV0YSBwJyxcblx0XHRcdFx0XHRcdG9wYWNpdHk6IFsxLCAwXSxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAsXG5cdFx0XHRcdFx0XHRyZXZlcnNlOiBvcHRzLmRpcmVjdGlvbixcblx0XHRcdFx0XHRcdGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiAoKSA9PiB7XG5cdFx0XHRcdCAgICAgIGFuaW1lKHtcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXRzOiAnI2FjdGl2aXRpZXNfX2J5LWNhdCcsXG5cdFx0XHRcdFx0XHRcdFx0ZGVsYXk6IDEwMCxcblx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5OiBbMSwgMF0sXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDUwMCxcblx0XHRcdFx0XHRcdFx0XHRyZXZlcnNlOiBvcHRzLmRpcmVjdGlvbixcblx0XHRcdFx0XHRcdFx0XHRlYXNpbmc6ICdlYXNlT3V0RXhwbycsXG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6ICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGRyaWxsZG93bi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0aXZlJywgJ2NhdCcpXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250YWluZXIuY2xhc3NOYW1lID0gJydcblx0XHRcdFx0XHRcdFx0XHRcdGNhdE1ldGEuY2xhc3NOYW1lID0gJydcblx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2aXR5LmNsYXNzTmFtZSA9ICdoaWRkZW4nXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHQgIFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdGJyZWFrO1xuXG5cdFx0XHQvLyBBY3Rpdml0eSBJdGVtXG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdGFjdGl2aXR5LmNsYXNzTmFtZSA9ICcnXG5cdFx0XHRcdGNhdE1ldGEuY2xhc3NOYW1lID0gJ2hpZGRlbidcblx0XHRcdFx0YW5pbWUoe1xuXHRcdFx0XHRcdHRhcmdldHM6IGFjdGl2aXR5LFxuXHRcdFx0XHRcdG9wYWNpdHk6IFswLCAxXSxcblx0XHRcdFx0XHRkdXJhdGlvbjogNDAwLFxuXHRcdFx0XHRcdHRyYW5zbGF0ZVk6IHsgdmFsdWU6IC00MCwgZHVyYXRpb246IDgwMCB9LFxuXHRcdFx0XHRcdGVhc2luZzogJ2Vhc2VJbkV4cG8nXG5cdFx0XHRcdH0pXG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXIuanMnXG5cbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKVxuXG5jb25zdCBzdGF0ZSA9IHtcblxuXHRzdG9yZToge1xuXHRcdGRyaWxsOiAge1xuXHRcdFx0bGV2ZWwgOiAwXG5cdFx0fSxcblx0XHRjYXRlZ29yeURhdGEgOiB7fSxcblx0XHRhY3Rpdml0eURhdGEgOiB7fVxuXHR9LFxuXG5cdG11dGF0ZTogZnVuY3Rpb24gKHByb3BzKSB7XG5cdFx0Ly8gdG9kbzogdmFsaWRhdGUgcHJvcHNcblx0XHR0aGlzLnNldChwcm9wcylcblx0XHRjb25zb2xlLmxvZygnJWMgRGF0YXN0b3JlOiAnLCAnYmFja2dyb3VuZDogb3JhbmdlOyBjb2xvcjogYmxhY2snLCB0aGlzLnN0b3JlKVxuXHR9LFxuXG5cdHNldDogZnVuY3Rpb24gKHByb3BzKSB7XG5cdFx0dGhpcy5zdG9yZSA9IE9iamVjdC5hc3NpZ24odGhpcy5zdG9yZSwgcHJvcHMpXG5cdH0sXG5cblx0Z2V0OiBmdW5jdGlvbiAoa2V5KSB7XG5cdFx0aWYgKGtleSA9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLnN0b3JlXG5cdFx0fVxuXHRcdGVsc2UgaWYgKHRoaXMuc3RvcmUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RvcmVba2V5XVxuXHRcdH1cblx0XHRlbHNlIHJldHVybiBudWxsXG5cdH0sXG5cblx0Ly8gdGFrZXMgYW4gaW50IGFuZCBzZXRzXG5cdGRyaWxsVG86IGZ1bmN0aW9uIChsZXZlbCkge1xuXHRcdGxldCBkaXJlY3Rpb24gPSAodGhpcy5zdG9yZS5kcmlsbC5sZXZlbCA+IGxldmVsKSA/ICcnIDogJ3JldmVyc2UnXG5cdFx0dGhpcy5zdG9yZS5kcmlsbC5sZXZlbCA9IGxldmVsXG5cdFx0cm91dGVyLmdvdG8obGV2ZWwsIGRpcmVjdGlvbilcblx0fSxcblxuXHRnZXRCcmVhZGNydW1iOiBmdW5jdGlvbiAoKSB7XG5cdFx0bGV0IGJhc2UgPSAnJ1xuXHRcdGxldCBjYXQgPSAnJ1xuXG5cdFx0Ly8gYnJlYWtzIGludGVudGlvbmFsbHkgb21taXRlZCBmb3Igc21hcnQgZm9sbG93LXRocm91Z2hcblx0XHQvLyBkZXBlbmRpbmcgb24gbGV2ZWwsIHRoZSBzdHJpbmcgd2lsbCB1cGRhdGUgcmVsZXZhbnQgcGFydHNcblx0XHRzd2l0Y2ggKHRoaXMuc3RvcmUuZHJpbGwubGV2ZWwpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0cmV0dXJuIG51bGxcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdGNhdCA9ICcgPiAnICsgdGhpcy5zdG9yZS5hY3Rpdml0eURhdGEubmFtZVxuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRiYXNlID0gJ0J5IGNhdGVnb3J5ID4gJyArIHRoaXMuc3RvcmUuY2F0ZWdvcnlEYXRhLm5hbWVcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHJldHVybiBiYXNlICsgY2F0XG5cdH1cblxuXG5cdC8vIGJhY2tvbmUgKCkgeyB0aGlzLnNldERyaWxsTGV2ZWwodGhpcy5kcmlsbExldmVsIC0gMSkgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdGF0ZVxuIl19
