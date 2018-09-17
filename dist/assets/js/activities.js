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

},{"../core/createError":10,"./../core/settle":13,"./../helpers/btoa":17,"./../helpers/buildURL":18,"./../helpers/cookies":20,"./../helpers/isURLSameOrigin":22,"./../helpers/parseHeaders":24,"./../utils":26,"_process":29}],4:[function(require,module,exports){
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

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
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

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
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

},{"./adapters/http":3,"./adapters/xhr":3,"./helpers/normalizeHeaderName":23,"./utils":26,"_process":29}],16:[function(require,module,exports){
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
      } else {
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

},{"./helpers/bind":16,"is-buffer":28}],27:[function(require,module,exports){
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

},{}],29:[function(require,module,exports){
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

},{}],30:[function(require,module,exports){
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

},{}],31:[function(require,module,exports){
'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

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

var ajax = _axios2.default.create({ // axios, our AJAX lib
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

},{"./util/activity.js":32,"./util/cat.js":33,"animejs":1,"axios":2,"zest":30}],32:[function(require,module,exports){
'use strict';

var _balajs = require('balajs');

var _balajs2 = _interopRequireDefault(_balajs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
		this.getStoriesInCat(data.activity_linked_stories, axios);

		// Resources, tab 4
		var rescontent = (0, _balajs2.default)('#a-resources-c')[0];
		if (data.activity_resources != '') {
			rescontent.innerHTML = '<h4>Resources</h4>' + data.activity_resources;
		} else {
			rescontent.innerHTML = 'This activity currently does not have any additional resources.';
		}

		(0, _balajs2.default)('#activity-video-container')[0].innerHTML = this.makeEmbedLink(data.activity_video);
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
	setActivityIcon: function setActivityIcon(query, axios) {
		axios.get('media?parent=' + query).then(function (res) {
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
		// let query = 'story?'
		var query = 'story?per_page=100&include[]=';

		for (var i = stories.length - 1; i >= 0; i--) {
			// query += 'include[]=' + stories[i] + '&'
			query += stories[i] + ',';
		}
		query = query.slice(0, -1); // remove last ampersand
		console.log(query);

		axios.get(query).then(function (res) {
			var retval = '<ul>';
			for (var i = res.data.length - 1; i >= 0; i--) {
				retval += '<li><a href="' + res.data[i].link + '">' + res.data[i].title.rendered + '</a></li>';
			}
			retval + '</ul>';

			(0, _balajs2.default)('#a-related-c')[0].innerHTML = '<h4>Linked Stories</h4>' + 'Each link points to additional information and a pdf download to each story' + retval;
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

},{"balajs":27}],33:[function(require,module,exports){
'use strict';

var _balajs = require('balajs');

var _balajs2 = _interopRequireDefault(_balajs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
		var c = (0, _balajs2.default)(cm)[0];

		// set meta description
		(0, _balajs2.default)(cm + '__header h2')[0].innerHTML = cat.name;
		(0, _balajs2.default)(cm + '__header span')[0].innerHTML = state.getBreadcrumb();
		if (window.activitydesc[cat.id]) {
			(0, _balajs2.default)(cm + '__content')[0].innerHTML = window.activitydesc[cat.id];
		} else {
			(0, _balajs2.default)(cm + '__content')[0].innerHTML = cat.description;
		}

		// set async
		setTimeout(story.getRelatedStories('activity?per_page=100&activity_cat=' + cat.id, function (stories) {
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
				story.setActivityListIcon(s.id, axios, el);

				list.appendChild(el);

				el.addEventListener('click', function () {
					state.setLevel(2);

					// state.pushState(s)

					story.makeTabContainer();
					story.showStory(s, state, axios);
					story.setActivityIcon(s.id, axios);
				});
			};

			for (var i = stories.length - 1; i >= 0; i--) {
				_loop(i);
			}

			console.groupEnd();

			list.className = '';
		}, axios), 0);
	}
};

},{"balajs":27}]},{},[31])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYW5pbWVqcy9hbmltZS5taW4uanMiLCJub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL2JhbGFqcy9lczUvYmFsYS51bWQuanMiLCJub2RlX21vZHVsZXMvaXMtYnVmZmVyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy96ZXN0L2xpYi96ZXN0LmpzIiwic3JjL3NjcmlwdHMvYWN0aXZpdGllcy9hY3Rpdml0aWVzLmpzIiwic3JjL3NjcmlwdHMvYWN0aXZpdGllcy91dGlsL2FjdGl2aXR5LmpzIiwic3JjL3NjcmlwdHMvYWN0aXZpdGllcy91dGlsL2NhdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNoQ0E7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDcExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL1NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUksS0FBSyxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVDtBQUNBLE9BQUcsU0FBSCxHQUFlLGVBQWY7QUFDQSxPQUFHLFlBQUgsQ0FBZ0IsWUFBaEIsRUFBOEIsRUFBRSxFQUFoQztBQUNBLE9BQUcsU0FBSCxHQUFlLFNBQVMsRUFBRSxLQUFGLENBQVEsUUFBakIsR0FBNEIsT0FBM0M7QUFDQSxVQUFNLG1CQUFOLENBQTBCLEVBQUUsRUFBNUIsRUFBZ0MsS0FBaEMsRUFBdUMsRUFBdkM7O0FBRUEsU0FBSyxXQUFMLENBQWlCLEVBQWpCOztBQUVBLE9BQUcsZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkIsWUFBTTtBQUNsQyxXQUFNLFFBQU4sQ0FBZSxDQUFmOztBQUVBOztBQUVBLFdBQU0sZ0JBQU47QUFDQSxXQUFNLFNBQU4sQ0FBZ0IsQ0FBaEIsRUFBbUIsS0FBbkIsRUFBMEIsS0FBMUI7QUFDQSxXQUFNLGVBQU4sQ0FBc0IsRUFBRSxFQUF4QixFQUE0QixLQUE1QjtBQUNBLEtBUkQ7QUFwQmlGOztBQVNsRixRQUFLLElBQUksSUFBSSxRQUFRLE1BQVIsR0FBaUIsQ0FBOUIsRUFBaUMsS0FBSyxDQUF0QyxFQUF5QyxHQUF6QyxFQUE4QztBQUFBLFVBQXJDLENBQXFDO0FBb0I3Qzs7QUFFRCxXQUFRLFFBQVI7O0FBRUEsUUFBSyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsR0FsQ0QsRUFrQ0csS0FsQ0gsQ0FERCxFQW9DRyxDQXBDSDtBQXFDQTtBQXRFZSxDQUFqQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qXG4gMjAxNyBKdWxpYW4gR2FybmllclxuIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuKi9cbnZhciAkanNjb21wPXtzY29wZTp7fX07JGpzY29tcC5kZWZpbmVQcm9wZXJ0eT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydGllcz9PYmplY3QuZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24oZSxyLHApe2lmKHAuZ2V0fHxwLnNldCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiRVMzIGRvZXMgbm90IHN1cHBvcnQgZ2V0dGVycyBhbmQgc2V0dGVycy5cIik7ZSE9QXJyYXkucHJvdG90eXBlJiZlIT1PYmplY3QucHJvdG90eXBlJiYoZVtyXT1wLnZhbHVlKX07JGpzY29tcC5nZXRHbG9iYWw9ZnVuY3Rpb24oZSl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93PT09ZT9lOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWwmJm51bGwhPWdsb2JhbD9nbG9iYWw6ZX07JGpzY29tcC5nbG9iYWw9JGpzY29tcC5nZXRHbG9iYWwodGhpcyk7JGpzY29tcC5TWU1CT0xfUFJFRklYPVwianNjb21wX3N5bWJvbF9cIjtcbiRqc2NvbXAuaW5pdFN5bWJvbD1mdW5jdGlvbigpeyRqc2NvbXAuaW5pdFN5bWJvbD1mdW5jdGlvbigpe307JGpzY29tcC5nbG9iYWwuU3ltYm9sfHwoJGpzY29tcC5nbG9iYWwuU3ltYm9sPSRqc2NvbXAuU3ltYm9sKX07JGpzY29tcC5zeW1ib2xDb3VudGVyXz0wOyRqc2NvbXAuU3ltYm9sPWZ1bmN0aW9uKGUpe3JldHVybiAkanNjb21wLlNZTUJPTF9QUkVGSVgrKGV8fFwiXCIpKyRqc2NvbXAuc3ltYm9sQ291bnRlcl8rK307XG4kanNjb21wLmluaXRTeW1ib2xJdGVyYXRvcj1mdW5jdGlvbigpeyRqc2NvbXAuaW5pdFN5bWJvbCgpO3ZhciBlPSRqc2NvbXAuZ2xvYmFsLlN5bWJvbC5pdGVyYXRvcjtlfHwoZT0kanNjb21wLmdsb2JhbC5TeW1ib2wuaXRlcmF0b3I9JGpzY29tcC5nbG9iYWwuU3ltYm9sKFwiaXRlcmF0b3JcIikpO1wiZnVuY3Rpb25cIiE9dHlwZW9mIEFycmF5LnByb3RvdHlwZVtlXSYmJGpzY29tcC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsZSx7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuICRqc2NvbXAuYXJyYXlJdGVyYXRvcih0aGlzKX19KTskanNjb21wLmluaXRTeW1ib2xJdGVyYXRvcj1mdW5jdGlvbigpe319OyRqc2NvbXAuYXJyYXlJdGVyYXRvcj1mdW5jdGlvbihlKXt2YXIgcj0wO3JldHVybiAkanNjb21wLml0ZXJhdG9yUHJvdG90eXBlKGZ1bmN0aW9uKCl7cmV0dXJuIHI8ZS5sZW5ndGg/e2RvbmU6ITEsdmFsdWU6ZVtyKytdfTp7ZG9uZTohMH19KX07XG4kanNjb21wLml0ZXJhdG9yUHJvdG90eXBlPWZ1bmN0aW9uKGUpeyRqc2NvbXAuaW5pdFN5bWJvbEl0ZXJhdG9yKCk7ZT17bmV4dDplfTtlWyRqc2NvbXAuZ2xvYmFsLlN5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307cmV0dXJuIGV9OyRqc2NvbXAuYXJyYXk9JGpzY29tcC5hcnJheXx8e307JGpzY29tcC5pdGVyYXRvckZyb21BcnJheT1mdW5jdGlvbihlLHIpeyRqc2NvbXAuaW5pdFN5bWJvbEl0ZXJhdG9yKCk7ZSBpbnN0YW5jZW9mIFN0cmluZyYmKGUrPVwiXCIpO3ZhciBwPTAsbT17bmV4dDpmdW5jdGlvbigpe2lmKHA8ZS5sZW5ndGgpe3ZhciB1PXArKztyZXR1cm57dmFsdWU6cih1LGVbdV0pLGRvbmU6ITF9fW0ubmV4dD1mdW5jdGlvbigpe3JldHVybntkb25lOiEwLHZhbHVlOnZvaWQgMH19O3JldHVybiBtLm5leHQoKX19O21bU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiBtfTtyZXR1cm4gbX07XG4kanNjb21wLnBvbHlmaWxsPWZ1bmN0aW9uKGUscixwLG0pe2lmKHIpe3A9JGpzY29tcC5nbG9iYWw7ZT1lLnNwbGl0KFwiLlwiKTtmb3IobT0wO208ZS5sZW5ndGgtMTttKyspe3ZhciB1PWVbbV07dSBpbiBwfHwocFt1XT17fSk7cD1wW3VdfWU9ZVtlLmxlbmd0aC0xXTttPXBbZV07cj1yKG0pO3IhPW0mJm51bGwhPXImJiRqc2NvbXAuZGVmaW5lUHJvcGVydHkocCxlLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6cn0pfX07JGpzY29tcC5wb2x5ZmlsbChcIkFycmF5LnByb3RvdHlwZS5rZXlzXCIsZnVuY3Rpb24oZSl7cmV0dXJuIGU/ZTpmdW5jdGlvbigpe3JldHVybiAkanNjb21wLml0ZXJhdG9yRnJvbUFycmF5KHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIGV9KX19LFwiZXM2LWltcGxcIixcImVzM1wiKTt2YXIgJGpzY29tcCR0aGlzPXRoaXM7XG4oZnVuY3Rpb24oZSxyKXtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxyKTpcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9cigpOmUuYW5pbWU9cigpfSkodGhpcyxmdW5jdGlvbigpe2Z1bmN0aW9uIGUoYSl7aWYoIWguY29sKGEpKXRyeXtyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhKX1jYXRjaChjKXt9fWZ1bmN0aW9uIHIoYSxjKXtmb3IodmFyIGQ9YS5sZW5ndGgsYj0yPD1hcmd1bWVudHMubGVuZ3RoP2FyZ3VtZW50c1sxXTp2b2lkIDAsZj1bXSxuPTA7bjxkO24rKylpZihuIGluIGEpe3ZhciBrPWFbbl07Yy5jYWxsKGIsayxuLGEpJiZmLnB1c2goayl9cmV0dXJuIGZ9ZnVuY3Rpb24gcChhKXtyZXR1cm4gYS5yZWR1Y2UoZnVuY3Rpb24oYSxkKXtyZXR1cm4gYS5jb25jYXQoaC5hcnIoZCk/cChkKTpkKX0sW10pfWZ1bmN0aW9uIG0oYSl7aWYoaC5hcnIoYSkpcmV0dXJuIGE7XG5oLnN0cihhKSYmKGE9ZShhKXx8YSk7cmV0dXJuIGEgaW5zdGFuY2VvZiBOb2RlTGlzdHx8YSBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uP1tdLnNsaWNlLmNhbGwoYSk6W2FdfWZ1bmN0aW9uIHUoYSxjKXtyZXR1cm4gYS5zb21lKGZ1bmN0aW9uKGEpe3JldHVybiBhPT09Y30pfWZ1bmN0aW9uIEMoYSl7dmFyIGM9e30sZDtmb3IoZCBpbiBhKWNbZF09YVtkXTtyZXR1cm4gY31mdW5jdGlvbiBEKGEsYyl7dmFyIGQ9QyhhKSxiO2ZvcihiIGluIGEpZFtiXT1jLmhhc093blByb3BlcnR5KGIpP2NbYl06YVtiXTtyZXR1cm4gZH1mdW5jdGlvbiB6KGEsYyl7dmFyIGQ9QyhhKSxiO2ZvcihiIGluIGMpZFtiXT1oLnVuZChhW2JdKT9jW2JdOmFbYl07cmV0dXJuIGR9ZnVuY3Rpb24gVChhKXthPWEucmVwbGFjZSgvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pLGZ1bmN0aW9uKGEsYyxkLGspe3JldHVybiBjK2MrZCtkK2sra30pO3ZhciBjPS9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhhKTtcbmE9cGFyc2VJbnQoY1sxXSwxNik7dmFyIGQ9cGFyc2VJbnQoY1syXSwxNiksYz1wYXJzZUludChjWzNdLDE2KTtyZXR1cm5cInJnYmEoXCIrYStcIixcIitkK1wiLFwiK2MrXCIsMSlcIn1mdW5jdGlvbiBVKGEpe2Z1bmN0aW9uIGMoYSxjLGIpezA+YiYmKGIrPTEpOzE8YiYmLS1iO3JldHVybiBiPDEvNj9hKzYqKGMtYSkqYjouNT5iP2M6YjwyLzM/YSsoYy1hKSooMi8zLWIpKjY6YX12YXIgZD0vaHNsXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklXFwpL2cuZXhlYyhhKXx8L2hzbGFcXCgoXFxkKyksXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKSUsXFxzKihbXFxkLl0rKVxcKS9nLmV4ZWMoYSk7YT1wYXJzZUludChkWzFdKS8zNjA7dmFyIGI9cGFyc2VJbnQoZFsyXSkvMTAwLGY9cGFyc2VJbnQoZFszXSkvMTAwLGQ9ZFs0XXx8MTtpZigwPT1iKWY9Yj1hPWY7ZWxzZXt2YXIgbj0uNT5mP2YqKDErYik6ZitiLWYqYixrPTIqZi1uLGY9YyhrLG4sYSsxLzMpLGI9YyhrLG4sYSk7YT1jKGssbixhLTEvMyl9cmV0dXJuXCJyZ2JhKFwiK1xuMjU1KmYrXCIsXCIrMjU1KmIrXCIsXCIrMjU1KmErXCIsXCIrZCtcIilcIn1mdW5jdGlvbiB5KGEpe2lmKGE9LyhbXFwrXFwtXT9bMC05I1xcLl0rKSglfHB4fHB0fGVtfHJlbXxpbnxjbXxtbXxleHxjaHxwY3x2d3x2aHx2bWlufHZtYXh8ZGVnfHJhZHx0dXJuKT8kLy5leGVjKGEpKXJldHVybiBhWzJdfWZ1bmN0aW9uIFYoYSl7aWYoLTE8YS5pbmRleE9mKFwidHJhbnNsYXRlXCIpfHxcInBlcnNwZWN0aXZlXCI9PT1hKXJldHVyblwicHhcIjtpZigtMTxhLmluZGV4T2YoXCJyb3RhdGVcIil8fC0xPGEuaW5kZXhPZihcInNrZXdcIikpcmV0dXJuXCJkZWdcIn1mdW5jdGlvbiBJKGEsYyl7cmV0dXJuIGguZm5jKGEpP2EoYy50YXJnZXQsYy5pZCxjLnRvdGFsKTphfWZ1bmN0aW9uIEUoYSxjKXtpZihjIGluIGEuc3R5bGUpcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoYSkuZ2V0UHJvcGVydHlWYWx1ZShjLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csXCIkMS0kMlwiKS50b0xvd2VyQ2FzZSgpKXx8XCIwXCJ9ZnVuY3Rpb24gSihhLGMpe2lmKGguZG9tKGEpJiZcbnUoVyxjKSlyZXR1cm5cInRyYW5zZm9ybVwiO2lmKGguZG9tKGEpJiYoYS5nZXRBdHRyaWJ1dGUoYyl8fGguc3ZnKGEpJiZhW2NdKSlyZXR1cm5cImF0dHJpYnV0ZVwiO2lmKGguZG9tKGEpJiZcInRyYW5zZm9ybVwiIT09YyYmRShhLGMpKXJldHVyblwiY3NzXCI7aWYobnVsbCE9YVtjXSlyZXR1cm5cIm9iamVjdFwifWZ1bmN0aW9uIFgoYSxjKXt2YXIgZD1WKGMpLGQ9LTE8Yy5pbmRleE9mKFwic2NhbGVcIik/MTowK2Q7YT1hLnN0eWxlLnRyYW5zZm9ybTtpZighYSlyZXR1cm4gZDtmb3IodmFyIGI9W10sZj1bXSxuPVtdLGs9LyhcXHcrKVxcKCguKz8pXFwpL2c7Yj1rLmV4ZWMoYSk7KWYucHVzaChiWzFdKSxuLnB1c2goYlsyXSk7YT1yKG4sZnVuY3Rpb24oYSxiKXtyZXR1cm4gZltiXT09PWN9KTtyZXR1cm4gYS5sZW5ndGg/YVswXTpkfWZ1bmN0aW9uIEsoYSxjKXtzd2l0Y2goSihhLGMpKXtjYXNlIFwidHJhbnNmb3JtXCI6cmV0dXJuIFgoYSxjKTtjYXNlIFwiY3NzXCI6cmV0dXJuIEUoYSxjKTtjYXNlIFwiYXR0cmlidXRlXCI6cmV0dXJuIGEuZ2V0QXR0cmlidXRlKGMpfXJldHVybiBhW2NdfHxcbjB9ZnVuY3Rpb24gTChhLGMpe3ZhciBkPS9eKFxcKj18XFwrPXwtPSkvLmV4ZWMoYSk7aWYoIWQpcmV0dXJuIGE7dmFyIGI9eShhKXx8MDtjPXBhcnNlRmxvYXQoYyk7YT1wYXJzZUZsb2F0KGEucmVwbGFjZShkWzBdLFwiXCIpKTtzd2l0Y2goZFswXVswXSl7Y2FzZSBcIitcIjpyZXR1cm4gYythK2I7Y2FzZSBcIi1cIjpyZXR1cm4gYy1hK2I7Y2FzZSBcIipcIjpyZXR1cm4gYyphK2J9fWZ1bmN0aW9uIEYoYSxjKXtyZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGMueC1hLngsMikrTWF0aC5wb3coYy55LWEueSwyKSl9ZnVuY3Rpb24gTShhKXthPWEucG9pbnRzO2Zvcih2YXIgYz0wLGQsYj0wO2I8YS5udW1iZXJPZkl0ZW1zO2IrKyl7dmFyIGY9YS5nZXRJdGVtKGIpOzA8YiYmKGMrPUYoZCxmKSk7ZD1mfXJldHVybiBjfWZ1bmN0aW9uIE4oYSl7aWYoYS5nZXRUb3RhbExlbmd0aClyZXR1cm4gYS5nZXRUb3RhbExlbmd0aCgpO3N3aXRjaChhLnRhZ05hbWUudG9Mb3dlckNhc2UoKSl7Y2FzZSBcImNpcmNsZVwiOnJldHVybiAyKlxuTWF0aC5QSSphLmdldEF0dHJpYnV0ZShcInJcIik7Y2FzZSBcInJlY3RcIjpyZXR1cm4gMiphLmdldEF0dHJpYnV0ZShcIndpZHRoXCIpKzIqYS5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIik7Y2FzZSBcImxpbmVcIjpyZXR1cm4gRih7eDphLmdldEF0dHJpYnV0ZShcIngxXCIpLHk6YS5nZXRBdHRyaWJ1dGUoXCJ5MVwiKX0se3g6YS5nZXRBdHRyaWJ1dGUoXCJ4MlwiKSx5OmEuZ2V0QXR0cmlidXRlKFwieTJcIil9KTtjYXNlIFwicG9seWxpbmVcIjpyZXR1cm4gTShhKTtjYXNlIFwicG9seWdvblwiOnZhciBjPWEucG9pbnRzO3JldHVybiBNKGEpK0YoYy5nZXRJdGVtKGMubnVtYmVyT2ZJdGVtcy0xKSxjLmdldEl0ZW0oMCkpfX1mdW5jdGlvbiBZKGEsYyl7ZnVuY3Rpb24gZChiKXtiPXZvaWQgMD09PWI/MDpiO3JldHVybiBhLmVsLmdldFBvaW50QXRMZW5ndGgoMTw9YytiP2MrYjowKX12YXIgYj1kKCksZj1kKC0xKSxuPWQoMSk7c3dpdGNoKGEucHJvcGVydHkpe2Nhc2UgXCJ4XCI6cmV0dXJuIGIueDtjYXNlIFwieVwiOnJldHVybiBiLnk7XG5jYXNlIFwiYW5nbGVcIjpyZXR1cm4gMTgwKk1hdGguYXRhbjIobi55LWYueSxuLngtZi54KS9NYXRoLlBJfX1mdW5jdGlvbiBPKGEsYyl7dmFyIGQ9Ly0/XFxkKlxcLj9cXGQrL2csYjtiPWgucHRoKGEpP2EudG90YWxMZW5ndGg6YTtpZihoLmNvbChiKSlpZihoLnJnYihiKSl7dmFyIGY9L3JnYlxcKChcXGQrLFxccypbXFxkXSssXFxzKltcXGRdKylcXCkvZy5leGVjKGIpO2I9Zj9cInJnYmEoXCIrZlsxXStcIiwxKVwiOmJ9ZWxzZSBiPWguaGV4KGIpP1QoYik6aC5oc2woYik/VShiKTp2b2lkIDA7ZWxzZSBmPShmPXkoYikpP2Iuc3Vic3RyKDAsYi5sZW5ndGgtZi5sZW5ndGgpOmIsYj1jJiYhL1xccy9nLnRlc3QoYik/ZitjOmY7Yis9XCJcIjtyZXR1cm57b3JpZ2luYWw6YixudW1iZXJzOmIubWF0Y2goZCk/Yi5tYXRjaChkKS5tYXAoTnVtYmVyKTpbMF0sc3RyaW5nczpoLnN0cihhKXx8Yz9iLnNwbGl0KGQpOltdfX1mdW5jdGlvbiBQKGEpe2E9YT9wKGguYXJyKGEpP2EubWFwKG0pOm0oYSkpOltdO3JldHVybiByKGEsXG5mdW5jdGlvbihhLGQsYil7cmV0dXJuIGIuaW5kZXhPZihhKT09PWR9KX1mdW5jdGlvbiBaKGEpe3ZhciBjPVAoYSk7cmV0dXJuIGMubWFwKGZ1bmN0aW9uKGEsYil7cmV0dXJue3RhcmdldDphLGlkOmIsdG90YWw6Yy5sZW5ndGh9fSl9ZnVuY3Rpb24gYWEoYSxjKXt2YXIgZD1DKGMpO2lmKGguYXJyKGEpKXt2YXIgYj1hLmxlbmd0aDsyIT09Ynx8aC5vYmooYVswXSk/aC5mbmMoYy5kdXJhdGlvbil8fChkLmR1cmF0aW9uPWMuZHVyYXRpb24vYik6YT17dmFsdWU6YX19cmV0dXJuIG0oYSkubWFwKGZ1bmN0aW9uKGEsYil7Yj1iPzA6Yy5kZWxheTthPWgub2JqKGEpJiYhaC5wdGgoYSk/YTp7dmFsdWU6YX07aC51bmQoYS5kZWxheSkmJihhLmRlbGF5PWIpO3JldHVybiBhfSkubWFwKGZ1bmN0aW9uKGEpe3JldHVybiB6KGEsZCl9KX1mdW5jdGlvbiBiYShhLGMpe3ZhciBkPXt9LGI7Zm9yKGIgaW4gYSl7dmFyIGY9SShhW2JdLGMpO2guYXJyKGYpJiYoZj1mLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gSShhLFxuYyl9KSwxPT09Zi5sZW5ndGgmJihmPWZbMF0pKTtkW2JdPWZ9ZC5kdXJhdGlvbj1wYXJzZUZsb2F0KGQuZHVyYXRpb24pO2QuZGVsYXk9cGFyc2VGbG9hdChkLmRlbGF5KTtyZXR1cm4gZH1mdW5jdGlvbiBjYShhKXtyZXR1cm4gaC5hcnIoYSk/QS5hcHBseSh0aGlzLGEpOlFbYV19ZnVuY3Rpb24gZGEoYSxjKXt2YXIgZDtyZXR1cm4gYS50d2VlbnMubWFwKGZ1bmN0aW9uKGIpe2I9YmEoYixjKTt2YXIgZj1iLnZhbHVlLGU9SyhjLnRhcmdldCxhLm5hbWUpLGs9ZD9kLnRvLm9yaWdpbmFsOmUsaz1oLmFycihmKT9mWzBdOmssdz1MKGguYXJyKGYpP2ZbMV06ZixrKSxlPXkodyl8fHkoayl8fHkoZSk7Yi5mcm9tPU8oayxlKTtiLnRvPU8odyxlKTtiLnN0YXJ0PWQ/ZC5lbmQ6YS5vZmZzZXQ7Yi5lbmQ9Yi5zdGFydCtiLmRlbGF5K2IuZHVyYXRpb247Yi5lYXNpbmc9Y2EoYi5lYXNpbmcpO2IuZWxhc3RpY2l0eT0oMUUzLU1hdGgubWluKE1hdGgubWF4KGIuZWxhc3RpY2l0eSwxKSw5OTkpKS9cbjFFMztiLmlzUGF0aD1oLnB0aChmKTtiLmlzQ29sb3I9aC5jb2woYi5mcm9tLm9yaWdpbmFsKTtiLmlzQ29sb3ImJihiLnJvdW5kPTEpO3JldHVybiBkPWJ9KX1mdW5jdGlvbiBlYShhLGMpe3JldHVybiByKHAoYS5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGMubWFwKGZ1bmN0aW9uKGIpe3ZhciBjPUooYS50YXJnZXQsYi5uYW1lKTtpZihjKXt2YXIgZD1kYShiLGEpO2I9e3R5cGU6Yyxwcm9wZXJ0eTpiLm5hbWUsYW5pbWF0YWJsZTphLHR3ZWVuczpkLGR1cmF0aW9uOmRbZC5sZW5ndGgtMV0uZW5kLGRlbGF5OmRbMF0uZGVsYXl9fWVsc2UgYj12b2lkIDA7cmV0dXJuIGJ9KX0pKSxmdW5jdGlvbihhKXtyZXR1cm4haC51bmQoYSl9KX1mdW5jdGlvbiBSKGEsYyxkLGIpe3ZhciBmPVwiZGVsYXlcIj09PWE7cmV0dXJuIGMubGVuZ3RoPyhmP01hdGgubWluOk1hdGgubWF4KS5hcHBseShNYXRoLGMubWFwKGZ1bmN0aW9uKGIpe3JldHVybiBiW2FdfSkpOmY/Yi5kZWxheTpkLm9mZnNldCtiLmRlbGF5K1xuYi5kdXJhdGlvbn1mdW5jdGlvbiBmYShhKXt2YXIgYz1EKGdhLGEpLGQ9RChTLGEpLGI9WihhLnRhcmdldHMpLGY9W10sZT16KGMsZCksaztmb3IoayBpbiBhKWUuaGFzT3duUHJvcGVydHkoayl8fFwidGFyZ2V0c1wiPT09a3x8Zi5wdXNoKHtuYW1lOmssb2Zmc2V0OmUub2Zmc2V0LHR3ZWVuczphYShhW2tdLGQpfSk7YT1lYShiLGYpO3JldHVybiB6KGMse2NoaWxkcmVuOltdLGFuaW1hdGFibGVzOmIsYW5pbWF0aW9uczphLGR1cmF0aW9uOlIoXCJkdXJhdGlvblwiLGEsYyxkKSxkZWxheTpSKFwiZGVsYXlcIixhLGMsZCl9KX1mdW5jdGlvbiBxKGEpe2Z1bmN0aW9uIGMoKXtyZXR1cm4gd2luZG93LlByb21pc2UmJm5ldyBQcm9taXNlKGZ1bmN0aW9uKGEpe3JldHVybiBwPWF9KX1mdW5jdGlvbiBkKGEpe3JldHVybiBnLnJldmVyc2VkP2cuZHVyYXRpb24tYTphfWZ1bmN0aW9uIGIoYSl7Zm9yKHZhciBiPTAsYz17fSxkPWcuYW5pbWF0aW9ucyxmPWQubGVuZ3RoO2I8Zjspe3ZhciBlPWRbYl0sXG5rPWUuYW5pbWF0YWJsZSxoPWUudHdlZW5zLG49aC5sZW5ndGgtMSxsPWhbbl07biYmKGw9cihoLGZ1bmN0aW9uKGIpe3JldHVybiBhPGIuZW5kfSlbMF18fGwpO2Zvcih2YXIgaD1NYXRoLm1pbihNYXRoLm1heChhLWwuc3RhcnQtbC5kZWxheSwwKSxsLmR1cmF0aW9uKS9sLmR1cmF0aW9uLHc9aXNOYU4oaCk/MTpsLmVhc2luZyhoLGwuZWxhc3RpY2l0eSksaD1sLnRvLnN0cmluZ3MscD1sLnJvdW5kLG49W10sbT12b2lkIDAsbT1sLnRvLm51bWJlcnMubGVuZ3RoLHQ9MDt0PG07dCsrKXt2YXIgeD12b2lkIDAseD1sLnRvLm51bWJlcnNbdF0scT1sLmZyb20ubnVtYmVyc1t0XSx4PWwuaXNQYXRoP1kobC52YWx1ZSx3KngpOnErdyooeC1xKTtwJiYobC5pc0NvbG9yJiYyPHR8fCh4PU1hdGgucm91bmQoeCpwKS9wKSk7bi5wdXNoKHgpfWlmKGw9aC5sZW5ndGgpZm9yKG09aFswXSx3PTA7dzxsO3crKylwPWhbdysxXSx0PW5bd10saXNOYU4odCl8fChtPXA/bSsodCtwKTptKyh0K1wiIFwiKSk7XG5lbHNlIG09blswXTtoYVtlLnR5cGVdKGsudGFyZ2V0LGUucHJvcGVydHksbSxjLGsuaWQpO2UuY3VycmVudFZhbHVlPW07YisrfWlmKGI9T2JqZWN0LmtleXMoYykubGVuZ3RoKWZvcihkPTA7ZDxiO2QrKylIfHwoSD1FKGRvY3VtZW50LmJvZHksXCJ0cmFuc2Zvcm1cIik/XCJ0cmFuc2Zvcm1cIjpcIi13ZWJraXQtdHJhbnNmb3JtXCIpLGcuYW5pbWF0YWJsZXNbZF0udGFyZ2V0LnN0eWxlW0hdPWNbZF0uam9pbihcIiBcIik7Zy5jdXJyZW50VGltZT1hO2cucHJvZ3Jlc3M9YS9nLmR1cmF0aW9uKjEwMH1mdW5jdGlvbiBmKGEpe2lmKGdbYV0pZ1thXShnKX1mdW5jdGlvbiBlKCl7Zy5yZW1haW5pbmcmJiEwIT09Zy5yZW1haW5pbmcmJmcucmVtYWluaW5nLS19ZnVuY3Rpb24gayhhKXt2YXIgaz1nLmR1cmF0aW9uLG49Zy5vZmZzZXQsdz1uK2cuZGVsYXkscj1nLmN1cnJlbnRUaW1lLHg9Zy5yZXZlcnNlZCxxPWQoYSk7aWYoZy5jaGlsZHJlbi5sZW5ndGgpe3ZhciB1PWcuY2hpbGRyZW4sdj11Lmxlbmd0aDtcbmlmKHE+PWcuY3VycmVudFRpbWUpZm9yKHZhciBHPTA7Rzx2O0crKyl1W0ddLnNlZWsocSk7ZWxzZSBmb3IoO3YtLTspdVt2XS5zZWVrKHEpfWlmKHE+PXd8fCFrKWcuYmVnYW58fChnLmJlZ2FuPSEwLGYoXCJiZWdpblwiKSksZihcInJ1blwiKTtpZihxPm4mJnE8ayliKHEpO2Vsc2UgaWYocTw9biYmMCE9PXImJihiKDApLHgmJmUoKSkscT49ayYmciE9PWt8fCFrKWIoaykseHx8ZSgpO2YoXCJ1cGRhdGVcIik7YT49ayYmKGcucmVtYWluaW5nPyh0PWgsXCJhbHRlcm5hdGVcIj09PWcuZGlyZWN0aW9uJiYoZy5yZXZlcnNlZD0hZy5yZXZlcnNlZCkpOihnLnBhdXNlKCksZy5jb21wbGV0ZWR8fChnLmNvbXBsZXRlZD0hMCxmKFwiY29tcGxldGVcIiksXCJQcm9taXNlXCJpbiB3aW5kb3cmJihwKCksbT1jKCkpKSksbD0wKX1hPXZvaWQgMD09PWE/e306YTt2YXIgaCx0LGw9MCxwPW51bGwsbT1jKCksZz1mYShhKTtnLnJlc2V0PWZ1bmN0aW9uKCl7dmFyIGE9Zy5kaXJlY3Rpb24sYz1nLmxvb3A7Zy5jdXJyZW50VGltZT1cbjA7Zy5wcm9ncmVzcz0wO2cucGF1c2VkPSEwO2cuYmVnYW49ITE7Zy5jb21wbGV0ZWQ9ITE7Zy5yZXZlcnNlZD1cInJldmVyc2VcIj09PWE7Zy5yZW1haW5pbmc9XCJhbHRlcm5hdGVcIj09PWEmJjE9PT1jPzI6YztiKDApO2ZvcihhPWcuY2hpbGRyZW4ubGVuZ3RoO2EtLTspZy5jaGlsZHJlblthXS5yZXNldCgpfTtnLnRpY2s9ZnVuY3Rpb24oYSl7aD1hO3R8fCh0PWgpO2soKGwraC10KSpxLnNwZWVkKX07Zy5zZWVrPWZ1bmN0aW9uKGEpe2soZChhKSl9O2cucGF1c2U9ZnVuY3Rpb24oKXt2YXIgYT12LmluZGV4T2YoZyk7LTE8YSYmdi5zcGxpY2UoYSwxKTtnLnBhdXNlZD0hMH07Zy5wbGF5PWZ1bmN0aW9uKCl7Zy5wYXVzZWQmJihnLnBhdXNlZD0hMSx0PTAsbD1kKGcuY3VycmVudFRpbWUpLHYucHVzaChnKSxCfHxpYSgpKX07Zy5yZXZlcnNlPWZ1bmN0aW9uKCl7Zy5yZXZlcnNlZD0hZy5yZXZlcnNlZDt0PTA7bD1kKGcuY3VycmVudFRpbWUpfTtnLnJlc3RhcnQ9ZnVuY3Rpb24oKXtnLnBhdXNlKCk7XG5nLnJlc2V0KCk7Zy5wbGF5KCl9O2cuZmluaXNoZWQ9bTtnLnJlc2V0KCk7Zy5hdXRvcGxheSYmZy5wbGF5KCk7cmV0dXJuIGd9dmFyIGdhPXt1cGRhdGU6dm9pZCAwLGJlZ2luOnZvaWQgMCxydW46dm9pZCAwLGNvbXBsZXRlOnZvaWQgMCxsb29wOjEsZGlyZWN0aW9uOlwibm9ybWFsXCIsYXV0b3BsYXk6ITAsb2Zmc2V0OjB9LFM9e2R1cmF0aW9uOjFFMyxkZWxheTowLGVhc2luZzpcImVhc2VPdXRFbGFzdGljXCIsZWxhc3RpY2l0eTo1MDAscm91bmQ6MH0sVz1cInRyYW5zbGF0ZVggdHJhbnNsYXRlWSB0cmFuc2xhdGVaIHJvdGF0ZSByb3RhdGVYIHJvdGF0ZVkgcm90YXRlWiBzY2FsZSBzY2FsZVggc2NhbGVZIHNjYWxlWiBza2V3WCBza2V3WSBwZXJzcGVjdGl2ZVwiLnNwbGl0KFwiIFwiKSxILGg9e2FycjpmdW5jdGlvbihhKXtyZXR1cm4gQXJyYXkuaXNBcnJheShhKX0sb2JqOmZ1bmN0aW9uKGEpe3JldHVybi0xPE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKS5pbmRleE9mKFwiT2JqZWN0XCIpfSxcbnB0aDpmdW5jdGlvbihhKXtyZXR1cm4gaC5vYmooYSkmJmEuaGFzT3duUHJvcGVydHkoXCJ0b3RhbExlbmd0aFwiKX0sc3ZnOmZ1bmN0aW9uKGEpe3JldHVybiBhIGluc3RhbmNlb2YgU1ZHRWxlbWVudH0sZG9tOmZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGVUeXBlfHxoLnN2ZyhhKX0sc3RyOmZ1bmN0aW9uKGEpe3JldHVyblwic3RyaW5nXCI9PT10eXBlb2YgYX0sZm5jOmZ1bmN0aW9uKGEpe3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhfSx1bmQ6ZnVuY3Rpb24oYSl7cmV0dXJuXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBhfSxoZXg6ZnVuY3Rpb24oYSl7cmV0dXJuLyheI1swLTlBLUZdezZ9JCl8KF4jWzAtOUEtRl17M30kKS9pLnRlc3QoYSl9LHJnYjpmdW5jdGlvbihhKXtyZXR1cm4vXnJnYi8udGVzdChhKX0saHNsOmZ1bmN0aW9uKGEpe3JldHVybi9eaHNsLy50ZXN0KGEpfSxjb2w6ZnVuY3Rpb24oYSl7cmV0dXJuIGguaGV4KGEpfHxoLnJnYihhKXx8aC5oc2woYSl9fSxBPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhLFxuZCxiKXtyZXR1cm4oKCgxLTMqYiszKmQpKmErKDMqYi02KmQpKSphKzMqZCkqYX1yZXR1cm4gZnVuY3Rpb24oYyxkLGIsZil7aWYoMDw9YyYmMT49YyYmMDw9YiYmMT49Yil7dmFyIGU9bmV3IEZsb2F0MzJBcnJheSgxMSk7aWYoYyE9PWR8fGIhPT1mKWZvcih2YXIgaz0wOzExPms7KytrKWVba109YSguMSprLGMsYik7cmV0dXJuIGZ1bmN0aW9uKGspe2lmKGM9PT1kJiZiPT09ZilyZXR1cm4gaztpZigwPT09aylyZXR1cm4gMDtpZigxPT09aylyZXR1cm4gMTtmb3IodmFyIGg9MCxsPTE7MTAhPT1sJiZlW2xdPD1rOysrbCloKz0uMTstLWw7dmFyIGw9aCsoay1lW2xdKS8oZVtsKzFdLWVbbF0pKi4xLG49MyooMS0zKmIrMypjKSpsKmwrMiooMypiLTYqYykqbCszKmM7aWYoLjAwMTw9bil7Zm9yKGg9MDs0Pmg7KytoKXtuPTMqKDEtMypiKzMqYykqbCpsKzIqKDMqYi02KmMpKmwrMypjO2lmKDA9PT1uKWJyZWFrO3ZhciBtPWEobCxjLGIpLWssbD1sLW0vbn1rPWx9ZWxzZSBpZigwPT09XG5uKWs9bDtlbHNle3ZhciBsPWgsaD1oKy4xLGc9MDtkbyBtPWwrKGgtbCkvMixuPWEobSxjLGIpLWssMDxuP2g9bTpsPW07d2hpbGUoMWUtNzxNYXRoLmFicyhuKSYmMTA+KytnKTtrPW19cmV0dXJuIGEoayxkLGYpfX19fSgpLFE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEsYil7cmV0dXJuIDA9PT1hfHwxPT09YT9hOi1NYXRoLnBvdygyLDEwKihhLTEpKSpNYXRoLnNpbigyKihhLTEtYi8oMipNYXRoLlBJKSpNYXRoLmFzaW4oMSkpKk1hdGguUEkvYil9dmFyIGM9XCJRdWFkIEN1YmljIFF1YXJ0IFF1aW50IFNpbmUgRXhwbyBDaXJjIEJhY2sgRWxhc3RpY1wiLnNwbGl0KFwiIFwiKSxkPXtJbjpbWy41NSwuMDg1LC42OCwuNTNdLFsuNTUsLjA1NSwuNjc1LC4xOV0sWy44OTUsLjAzLC42ODUsLjIyXSxbLjc1NSwuMDUsLjg1NSwuMDZdLFsuNDcsMCwuNzQ1LC43MTVdLFsuOTUsLjA1LC43OTUsLjAzNV0sWy42LC4wNCwuOTgsLjMzNV0sWy42LC0uMjgsLjczNSwuMDQ1XSxhXSxPdXQ6W1suMjUsXG4uNDYsLjQ1LC45NF0sWy4yMTUsLjYxLC4zNTUsMV0sWy4xNjUsLjg0LC40NCwxXSxbLjIzLDEsLjMyLDFdLFsuMzksLjU3NSwuNTY1LDFdLFsuMTksMSwuMjIsMV0sWy4wNzUsLjgyLC4xNjUsMV0sWy4xNzUsLjg4NSwuMzIsMS4yNzVdLGZ1bmN0aW9uKGIsYyl7cmV0dXJuIDEtYSgxLWIsYyl9XSxJbk91dDpbWy40NTUsLjAzLC41MTUsLjk1NV0sWy42NDUsLjA0NSwuMzU1LDFdLFsuNzcsMCwuMTc1LDFdLFsuODYsMCwuMDcsMV0sWy40NDUsLjA1LC41NSwuOTVdLFsxLDAsMCwxXSxbLjc4NSwuMTM1LC4xNSwuODZdLFsuNjgsLS41NSwuMjY1LDEuNTVdLGZ1bmN0aW9uKGIsYyl7cmV0dXJuLjU+Yj9hKDIqYixjKS8yOjEtYSgtMipiKzIsYykvMn1dfSxiPXtsaW5lYXI6QSguMjUsLjI1LC43NSwuNzUpfSxmPXt9LGU7Zm9yKGUgaW4gZClmLnR5cGU9ZSxkW2YudHlwZV0uZm9yRWFjaChmdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oZCxmKXtiW1wiZWFzZVwiK2EudHlwZStjW2ZdXT1oLmZuYyhkKT9cbmQ6QS5hcHBseSgkanNjb21wJHRoaXMsZCl9fShmKSksZj17dHlwZTpmLnR5cGV9O3JldHVybiBifSgpLGhhPXtjc3M6ZnVuY3Rpb24oYSxjLGQpe3JldHVybiBhLnN0eWxlW2NdPWR9LGF0dHJpYnV0ZTpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGEuc2V0QXR0cmlidXRlKGMsZCl9LG9iamVjdDpmdW5jdGlvbihhLGMsZCl7cmV0dXJuIGFbY109ZH0sdHJhbnNmb3JtOmZ1bmN0aW9uKGEsYyxkLGIsZil7YltmXXx8KGJbZl09W10pO2JbZl0ucHVzaChjK1wiKFwiK2QrXCIpXCIpfX0sdj1bXSxCPTAsaWE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7Qj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYyl9ZnVuY3Rpb24gYyhjKXt2YXIgYj12Lmxlbmd0aDtpZihiKXtmb3IodmFyIGQ9MDtkPGI7KXZbZF0mJnZbZF0udGljayhjKSxkKys7YSgpfWVsc2UgY2FuY2VsQW5pbWF0aW9uRnJhbWUoQiksQj0wfXJldHVybiBhfSgpO3EudmVyc2lvbj1cIjIuMi4wXCI7cS5zcGVlZD0xO3EucnVubmluZz12O3EucmVtb3ZlPVxuZnVuY3Rpb24oYSl7YT1QKGEpO2Zvcih2YXIgYz12Lmxlbmd0aDtjLS07KWZvcih2YXIgZD12W2NdLGI9ZC5hbmltYXRpb25zLGY9Yi5sZW5ndGg7Zi0tOyl1KGEsYltmXS5hbmltYXRhYmxlLnRhcmdldCkmJihiLnNwbGljZShmLDEpLGIubGVuZ3RofHxkLnBhdXNlKCkpfTtxLmdldFZhbHVlPUs7cS5wYXRoPWZ1bmN0aW9uKGEsYyl7dmFyIGQ9aC5zdHIoYSk/ZShhKVswXTphLGI9Y3x8MTAwO3JldHVybiBmdW5jdGlvbihhKXtyZXR1cm57ZWw6ZCxwcm9wZXJ0eTphLHRvdGFsTGVuZ3RoOk4oZCkqKGIvMTAwKX19fTtxLnNldERhc2hvZmZzZXQ9ZnVuY3Rpb24oYSl7dmFyIGM9TihhKTthLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNoYXJyYXlcIixjKTtyZXR1cm4gY307cS5iZXppZXI9QTtxLmVhc2luZ3M9UTtxLnRpbWVsaW5lPWZ1bmN0aW9uKGEpe3ZhciBjPXEoYSk7Yy5wYXVzZSgpO2MuZHVyYXRpb249MDtjLmFkZD1mdW5jdGlvbihkKXtjLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oYSl7YS5iZWdhbj1cbiEwO2EuY29tcGxldGVkPSEwfSk7bShkKS5mb3JFYWNoKGZ1bmN0aW9uKGIpe3ZhciBkPXooYixEKFMsYXx8e30pKTtkLnRhcmdldHM9ZC50YXJnZXRzfHxhLnRhcmdldHM7Yj1jLmR1cmF0aW9uO3ZhciBlPWQub2Zmc2V0O2QuYXV0b3BsYXk9ITE7ZC5kaXJlY3Rpb249Yy5kaXJlY3Rpb247ZC5vZmZzZXQ9aC51bmQoZSk/YjpMKGUsYik7Yy5iZWdhbj0hMDtjLmNvbXBsZXRlZD0hMDtjLnNlZWsoZC5vZmZzZXQpO2Q9cShkKTtkLmJlZ2FuPSEwO2QuY29tcGxldGVkPSEwO2QuZHVyYXRpb24+YiYmKGMuZHVyYXRpb249ZC5kdXJhdGlvbik7Yy5jaGlsZHJlbi5wdXNoKGQpfSk7Yy5zZWVrKDApO2MucmVzZXQoKTtjLmF1dG9wbGF5JiZjLnJlc3RhcnQoKTtyZXR1cm4gY307cmV0dXJuIGN9O3EucmFuZG9tPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooYy1hKzEpKSthfTtyZXR1cm4gcX0pOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xudmFyIGJ0b2EgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmJ0b2EgJiYgd2luZG93LmJ0b2EuYmluZCh3aW5kb3cpKSB8fCByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnRvYScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHZhciBsb2FkRXZlbnQgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbiAgICB2YXIgeERvbWFpbiA9IGZhbHNlO1xuXG4gICAgLy8gRm9yIElFIDgvOSBDT1JTIHN1cHBvcnRcbiAgICAvLyBPbmx5IHN1cHBvcnRzIFBPU1QgYW5kIEdFVCBjYWxscyBhbmQgZG9lc24ndCByZXR1cm5zIHRoZSByZXNwb25zZSBoZWFkZXJzLlxuICAgIC8vIERPTidUIGRvIHRoaXMgZm9yIHRlc3RpbmcgYi9jIFhNTEh0dHBSZXF1ZXN0IGlzIG1vY2tlZCwgbm90IFhEb21haW5SZXF1ZXN0LlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmXG4gICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHdpbmRvdy5YRG9tYWluUmVxdWVzdCAmJiAhKCd3aXRoQ3JlZGVudGlhbHMnIGluIHJlcXVlc3QpICYmXG4gICAgICAgICFpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpIHtcbiAgICAgIHJlcXVlc3QgPSBuZXcgd2luZG93LlhEb21haW5SZXF1ZXN0KCk7XG4gICAgICBsb2FkRXZlbnQgPSAnb25sb2FkJztcbiAgICAgIHhEb21haW4gPSB0cnVlO1xuICAgICAgcmVxdWVzdC5vbnByb2dyZXNzID0gZnVuY3Rpb24gaGFuZGxlUHJvZ3Jlc3MoKSB7fTtcbiAgICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHt9O1xuICAgIH1cblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3RbbG9hZEV2ZW50XSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCAmJiAheERvbWFpbikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgLy8gSUUgc2VuZHMgMTIyMyBpbnN0ZWFkIG9mIDIwNCAoaHR0cHM6Ly9naXRodWIuY29tL2F4aW9zL2F4aW9zL2lzc3Vlcy8yMDEpXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXMgPT09IDEyMjMgPyAnTm8gQ29udGVudCcgOiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKHV0aWxzLm1lcmdlKGRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi8uLi9kZWZhdWx0cycpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgIHVybDogYXJndW1lbnRzWzBdXG4gICAgfSwgYXJndW1lbnRzWzFdKTtcbiAgfVxuXG4gIGNvbmZpZyA9IHV0aWxzLm1lcmdlKGRlZmF1bHRzLCB7bWV0aG9kOiAnZ2V0J30sIHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgLy8gTm90ZTogc3RhdHVzIGlzIG5vdCBleHBvc2VkIGJ5IFhEb21haW5SZXF1ZXN0XG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBidG9hIHBvbHlmaWxsIGZvciBJRTwxMCBjb3VydGVzeSBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRjaGFtYmVycy9CYXNlNjQuanNcblxudmFyIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcblxuZnVuY3Rpb24gRSgpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ1N0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3Rlcic7XG59XG5FLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcbkUucHJvdG90eXBlLmNvZGUgPSA1O1xuRS5wcm90b3R5cGUubmFtZSA9ICdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InO1xuXG5mdW5jdGlvbiBidG9hKGlucHV0KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcoaW5wdXQpO1xuICB2YXIgb3V0cHV0ID0gJyc7XG4gIGZvciAoXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcbiAgICB2YXIgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSBjaGFycztcbiAgICAvLyBpZiB0aGUgbmV4dCBzdHIgaW5kZXggZG9lcyBub3QgZXhpc3Q6XG4gICAgLy8gICBjaGFuZ2UgdGhlIG1hcHBpbmcgdGFibGUgdG8gXCI9XCJcbiAgICAvLyAgIGNoZWNrIGlmIGQgaGFzIG5vIGZyYWN0aW9uYWwgZGlnaXRzXG4gICAgc3RyLmNoYXJBdChpZHggfCAwKSB8fCAobWFwID0gJz0nLCBpZHggJSAxKTtcbiAgICAvLyBcIjggLSBpZHggJSAxICogOFwiIGdlbmVyYXRlcyB0aGUgc2VxdWVuY2UgMiwgNCwgNiwgOFxuICAgIG91dHB1dCArPSBtYXAuY2hhckF0KDYzICYgYmxvY2sgPj4gOCAtIGlkeCAlIDEgKiA4KVxuICApIHtcbiAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGlkeCArPSAzIC8gNCk7XG4gICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xuICAgICAgdGhyb3cgbmV3IEUoKTtcbiAgICB9XG4gICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidG9hO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgfSxcblxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICB9LFxuXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHJldHVybiB7XG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgdmFyIG9yaWdpblVSTDtcblxuICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICB9XG5cbiAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgIH07XG4gIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcbiIsIihmdW5jdGlvbihyb290LCAkKSB7XG5cdHZhciAkID0gKGZ1bmN0aW9uKGRvY3VtZW50LCBzX2FkZEV2ZW50TGlzdGVuZXIsIHNfcXVlcnlTZWxlY3RvckFsbCkge1xuXHRmdW5jdGlvbiAkKHMsIGNvbnRleHQsIGJhbGEpIHtcblx0XHRiYWxhID0gT2JqZWN0LmNyZWF0ZSgkLmZuKTtcblxuXHRcdHMgJiYgYmFsYS5wdXNoLmFwcGx5KGJhbGEsIC8vIGlmIHMgaXMgdHJ1bHkgdGhlbiBwdXNoIHRoZSBmb2xsb3dpbmdcblx0XHRcdHNbc19hZGRFdmVudExpc3RlbmVyXSAvLyBpZiBhcmcgaXMgbm9kZSBvciB3aW5kb3csXG5cdFx0XHRcdD8gW3NdIC8vIHRoZW4gcGFzcyBbc11cblx0XHRcdFx0OiBcIlwiICsgcyA9PT0gcyAvLyBlbHNlIGlmIGFyZyBpcyBhIHN0cmluZ1xuXHRcdFx0XHRcdD8gLzwvLnRlc3QocykgLy8gaWYgdGhlIHN0cmluZyBjb250YWlucyBcIjxcIiAoaWYgSFRNTCBjb2RlIGlzIHBhc3NlZClcblx0XHRcdFx0XHRcdC8vIHRoZW4gcGFyc2UgaXQgYW5kIHJldHVybiBub2RlLmNoaWxkcmVuXG5cdFx0XHRcdFx0XHQvLyB1c2UgJ2FkZEV2ZW50TGlzdGVuZXInIChIVE1MVW5rbm93bkVsZW1lbnQpIGlmIGNvbnRleHQgaXMgbm90IHByZXNlbnRlZFxuXHRcdFx0XHRcdFx0PyAoKGNvbnRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGNvbnRleHQpKS5pbm5lckhUTUwgPSBzXG5cdFx0XHRcdFx0XHRcdCwgY29udGV4dC5jaGlsZHJlbilcblx0XHRcdFx0XHRcdDogY29udGV4dCAvLyBlbHNlIGlmIGNvbnRleHQgaXMgdHJ1bHlcblx0XHRcdFx0XHRcdFx0PyAoKGNvbnRleHQgPSAkKGNvbnRleHQpWzBdKSAvLyBpZiBjb250ZXh0IGVsZW1lbnQgaXMgZm91bmRcblx0XHRcdFx0XHRcdFx0XHQ/IGNvbnRleHRbc19xdWVyeVNlbGVjdG9yQWxsXShzKSAvLyB0aGVuIHNlbGVjdCBlbGVtZW50IGZyb20gY29udGV4dFxuXHRcdFx0XHRcdFx0XHRcdDogYmFsYSkgLy8gZWxzZSBwYXNzIFtdIChjb250ZXh0IGlzbid0IGZvdW5kKVxuXHRcdFx0XHRcdFx0XHQ6IGRvY3VtZW50W3NfcXVlcnlTZWxlY3RvckFsbF0ocykgLy8gZWxzZSBzZWxlY3QgZWxlbWVudHMgZ2xvYmFsbHlcblx0XHRcdFx0XHQ6IHMpOyAvLyBlbHNlIGd1ZXNzaW5nIHRoYXQgcyB2YXJpYWJsZSBpcyBhcnJheS1saWtlIE9iamVjdFxuXG5cdFx0cmV0dXJuIGJhbGE7XG5cdH1cblxuXHQkLmZuID0gW107XG5cblx0JC5vbmUgPSBmdW5jdGlvbihzLCBjb250ZXh0KSB7XG5cdFx0cmV0dXJuICQocywgY29udGV4dClbMF0gfHwgbnVsbDtcblx0fTtcblxuXHRyZXR1cm4gJDtcbn0pKGRvY3VtZW50LCAnYWRkRXZlbnRMaXN0ZW5lcicsICdxdWVyeVNlbGVjdG9yQWxsJyk7XG47XG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiAkO1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9ICQ7XG5cdH0gZWxzZSB7XG5cdFx0cm9vdC4kID0gJDtcblx0fVxufSkodGhpcyk7XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKipcbiAqIFplc3QgKGh0dHBzOi8vZ2l0aHViLmNvbS9jaGpqL3plc3QpXG4gKiBBIGNzcyBzZWxlY3RvciBlbmdpbmUuXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTEtMjAxMiwgQ2hyaXN0b3BoZXIgSmVmZnJleS4gKE1JVCBMaWNlbnNlZClcbiAqL1xuXG4vLyBUT0RPXG4vLyAtIFJlY29nbml6ZSB0aGUgVFIgc3ViamVjdCBzZWxlY3RvciB3aGVuIHBhcnNpbmcuXG4vLyAtIFBhc3MgY29udGV4dCB0byBzY29wZS5cbi8vIC0gQWRkIDpjb2x1bW4gcHNldWRvLWNsYXNzZXMuXG5cbjsoZnVuY3Rpb24oKSB7XG5cbi8qKlxuICogU2hhcmVkXG4gKi9cblxudmFyIHdpbmRvdyA9IHRoaXNcbiAgLCBkb2N1bWVudCA9IHRoaXMuZG9jdW1lbnRcbiAgLCBvbGQgPSB0aGlzLnplc3Q7XG5cbi8qKlxuICogSGVscGVyc1xuICovXG5cbnZhciBjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiA9IChmdW5jdGlvbigpIHtcbiAgaWYgKGRvY3VtZW50LmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIHJldHVybiBhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICB2YXIgZWwgPSBhLm93bmVyRG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKVxuICAgICAgLCBpID0gZWwubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgaWYgKGVsW2ldID09PSBhKSByZXR1cm4gMjtcbiAgICAgIGlmIChlbFtpXSA9PT0gYikgcmV0dXJuIDQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIDE7XG4gIH07XG59KSgpO1xuXG52YXIgb3JkZXIgPSBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBjb21wYXJlRG9jdW1lbnRQb3NpdGlvbihhLCBiKSAmIDIgPyAxIDogLTE7XG59O1xuXG52YXIgbmV4dCA9IGZ1bmN0aW9uKGVsKSB7XG4gIHdoaWxlICgoZWwgPSBlbC5uZXh0U2libGluZylcbiAgICAgICAgICYmIGVsLm5vZGVUeXBlICE9PSAxKTtcbiAgcmV0dXJuIGVsO1xufTtcblxudmFyIHByZXYgPSBmdW5jdGlvbihlbCkge1xuICB3aGlsZSAoKGVsID0gZWwucHJldmlvdXNTaWJsaW5nKVxuICAgICAgICAgJiYgZWwubm9kZVR5cGUgIT09IDEpO1xuICByZXR1cm4gZWw7XG59O1xuXG52YXIgY2hpbGQgPSBmdW5jdGlvbihlbCkge1xuICBpZiAoZWwgPSBlbC5maXJzdENoaWxkKSB7XG4gICAgd2hpbGUgKGVsLm5vZGVUeXBlICE9PSAxXG4gICAgICAgICAgICYmIChlbCA9IGVsLm5leHRTaWJsaW5nKSk7XG4gIH1cbiAgcmV0dXJuIGVsO1xufTtcblxudmFyIGxhc3RDaGlsZCA9IGZ1bmN0aW9uKGVsKSB7XG4gIGlmIChlbCA9IGVsLmxhc3RDaGlsZCkge1xuICAgIHdoaWxlIChlbC5ub2RlVHlwZSAhPT0gMVxuICAgICAgICAgICAmJiAoZWwgPSBlbC5wcmV2aW91c1NpYmxpbmcpKTtcbiAgfVxuICByZXR1cm4gZWw7XG59O1xuXG52YXIgdW5xdW90ZSA9IGZ1bmN0aW9uKHN0cikge1xuICBpZiAoIXN0cikgcmV0dXJuIHN0cjtcbiAgdmFyIGNoID0gc3RyWzBdO1xuICByZXR1cm4gY2ggPT09ICdcIicgfHwgY2ggPT09ICdcXCcnXG4gICAgPyBzdHIuc2xpY2UoMSwgLTEpXG4gICAgOiBzdHI7XG59O1xuXG52YXIgaW5kZXhPZiA9IChmdW5jdGlvbigpIHtcbiAgaWYgKEFycmF5LnByb3RvdHlwZS5pbmRleE9mKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5pbmRleE9mO1xuICB9XG4gIHJldHVybiBmdW5jdGlvbihvYmosIGl0ZW0pIHtcbiAgICB2YXIgaSA9IHRoaXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIGlmICh0aGlzW2ldID09PSBpdGVtKSByZXR1cm4gaTtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9O1xufSkoKTtcblxudmFyIG1ha2VJbnNpZGUgPSBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gIHZhciByZWdleCA9IHJ1bGVzLmluc2lkZS5zb3VyY2VcbiAgICAucmVwbGFjZSgvPC9nLCBzdGFydClcbiAgICAucmVwbGFjZSgvPi9nLCBlbmQpO1xuXG4gIHJldHVybiBuZXcgUmVnRXhwKHJlZ2V4KTtcbn07XG5cbnZhciByZXBsYWNlID0gZnVuY3Rpb24ocmVnZXgsIG5hbWUsIHZhbCkge1xuICByZWdleCA9IHJlZ2V4LnNvdXJjZTtcbiAgcmVnZXggPSByZWdleC5yZXBsYWNlKG5hbWUsIHZhbC5zb3VyY2UgfHwgdmFsKTtcbiAgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXgpO1xufTtcblxudmFyIHRydW5jYXRlVXJsID0gZnVuY3Rpb24odXJsLCBudW0pIHtcbiAgcmV0dXJuIHVybFxuICAgIC5yZXBsYWNlKC9eKD86XFx3KzpcXC9cXC98XFwvKykvLCAnJylcbiAgICAucmVwbGFjZSgvKD86XFwvK3xcXC8qIy4qPykkLywgJycpXG4gICAgLnNwbGl0KCcvJywgbnVtKVxuICAgIC5qb2luKCcvJyk7XG59O1xuXG4vKipcbiAqIEhhbmRsZSBgbnRoYCBTZWxlY3RvcnNcbiAqL1xuXG52YXIgcGFyc2VOdGggPSBmdW5jdGlvbihwYXJhbSwgdGVzdCkge1xuICB2YXIgcGFyYW0gPSBwYXJhbS5yZXBsYWNlKC9cXHMrL2csICcnKVxuICAgICwgY2FwO1xuXG4gIGlmIChwYXJhbSA9PT0gJ2V2ZW4nKSB7XG4gICAgcGFyYW0gPSAnMm4rMCc7XG4gIH0gZWxzZSBpZiAocGFyYW0gPT09ICdvZGQnKSB7XG4gICAgcGFyYW0gPSAnMm4rMSc7XG4gIH0gZWxzZSBpZiAoIX5wYXJhbS5pbmRleE9mKCduJykpIHtcbiAgICBwYXJhbSA9ICcwbicgKyBwYXJhbTtcbiAgfVxuXG4gIGNhcCA9IC9eKFsrLV0pPyhcXGQrKT9uKFsrLV0pPyhcXGQrKT8kLy5leGVjKHBhcmFtKTtcblxuICByZXR1cm4ge1xuICAgIGdyb3VwOiBjYXBbMV0gPT09ICctJ1xuICAgICAgPyAtKGNhcFsyXSB8fCAxKVxuICAgICAgOiArKGNhcFsyXSB8fCAxKSxcbiAgICBvZmZzZXQ6IGNhcFs0XVxuICAgICAgPyAoY2FwWzNdID09PSAnLScgPyAtY2FwWzRdIDogK2NhcFs0XSlcbiAgICAgIDogMFxuICB9O1xufTtcblxudmFyIG50aCA9IGZ1bmN0aW9uKHBhcmFtLCB0ZXN0LCBsYXN0KSB7XG4gIHZhciBwYXJhbSA9IHBhcnNlTnRoKHBhcmFtKVxuICAgICwgZ3JvdXAgPSBwYXJhbS5ncm91cFxuICAgICwgb2Zmc2V0ID0gcGFyYW0ub2Zmc2V0XG4gICAgLCBmaW5kID0gIWxhc3QgPyBjaGlsZCA6IGxhc3RDaGlsZFxuICAgICwgYWR2YW5jZSA9ICFsYXN0ID8gbmV4dCA6IHByZXY7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGVsKSB7XG4gICAgaWYgKGVsLnBhcmVudE5vZGUubm9kZVR5cGUgIT09IDEpIHJldHVybjtcblxuICAgIHZhciByZWwgPSBmaW5kKGVsLnBhcmVudE5vZGUpXG4gICAgICAsIHBvcyA9IDA7XG5cbiAgICB3aGlsZSAocmVsKSB7XG4gICAgICBpZiAodGVzdChyZWwsIGVsKSkgcG9zKys7XG4gICAgICBpZiAocmVsID09PSBlbCkge1xuICAgICAgICBwb3MgLT0gb2Zmc2V0O1xuICAgICAgICByZXR1cm4gZ3JvdXAgJiYgcG9zXG4gICAgICAgICAgPyAhKHBvcyAlIGdyb3VwKSAmJiAocG9zIDwgMCA9PT0gZ3JvdXAgPCAwKVxuICAgICAgICAgIDogIXBvcztcbiAgICAgIH1cbiAgICAgIHJlbCA9IGFkdmFuY2UocmVsKTtcbiAgICB9XG4gIH07XG59O1xuXG4vKipcbiAqIFNpbXBsZSBTZWxlY3RvcnNcbiAqL1xuXG52YXIgc2VsZWN0b3JzID0ge1xuICAnKic6IChmdW5jdGlvbigpIHtcbiAgICBpZiAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpKTtcbiAgICAgIHJldHVybiAhIWVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJylbMF07XG4gICAgfSgpKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgaWYgKGVsLm5vZGVUeXBlID09PSAxKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gIH0pKCksXG4gICd0eXBlJzogZnVuY3Rpb24odHlwZSkge1xuICAgIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsKSB7XG4gICAgICByZXR1cm4gZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gdHlwZTtcbiAgICB9O1xuICB9LFxuICAnYXR0cic6IGZ1bmN0aW9uKGtleSwgb3AsIHZhbCwgaSkge1xuICAgIG9wID0gb3BlcmF0b3JzW29wXTtcbiAgICByZXR1cm4gZnVuY3Rpb24oZWwpIHtcbiAgICAgIHZhciBhdHRyO1xuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAnZm9yJzpcbiAgICAgICAgICBhdHRyID0gZWwuaHRtbEZvcjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2xhc3MnOlxuICAgICAgICAgIC8vIGNsYXNzTmFtZSBpcyAnJyB3aGVuIG5vbi1leGlzdGVudFxuICAgICAgICAgIC8vIGdldEF0dHJpYnV0ZSgnY2xhc3MnKSBpcyBudWxsXG4gICAgICAgICAgYXR0ciA9IGVsLmNsYXNzTmFtZTtcbiAgICAgICAgICBpZiAoYXR0ciA9PT0gJycgJiYgZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09IG51bGwpIHtcbiAgICAgICAgICAgIGF0dHIgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaHJlZic6XG4gICAgICAgICAgYXR0ciA9IGVsLmdldEF0dHJpYnV0ZSgnaHJlZicsIDIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0aXRsZSc6XG4gICAgICAgICAgLy8gZ2V0QXR0cmlidXRlKCd0aXRsZScpIGNhbiBiZSAnJyB3aGVuIG5vbi1leGlzdGVudCBzb21ldGltZXM/XG4gICAgICAgICAgYXR0ciA9IGVsLmdldEF0dHJpYnV0ZSgndGl0bGUnKSB8fCBudWxsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdpZCc6XG4gICAgICAgICAgaWYgKGVsLmdldEF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgYXR0ciA9IGVsLmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBhdHRyID0gZWxba2V5XSAhPSBudWxsXG4gICAgICAgICAgICA/IGVsW2tleV1cbiAgICAgICAgICAgIDogZWwuZ2V0QXR0cmlidXRlICYmIGVsLmdldEF0dHJpYnV0ZShrZXkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKGF0dHIgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgYXR0ciA9IGF0dHIgKyAnJztcbiAgICAgIGlmIChpKSB7XG4gICAgICAgIGF0dHIgPSBhdHRyLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhbCA9IHZhbC50b0xvd2VyQ2FzZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9wKGF0dHIsIHZhbCk7XG4gICAgfTtcbiAgfSxcbiAgJzpmaXJzdC1jaGlsZCc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuICFwcmV2KGVsKSAmJiBlbC5wYXJlbnROb2RlLm5vZGVUeXBlID09PSAxO1xuICB9LFxuICAnOmxhc3QtY2hpbGQnOiBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiAhbmV4dChlbCkgJiYgZWwucGFyZW50Tm9kZS5ub2RlVHlwZSA9PT0gMTtcbiAgfSxcbiAgJzpvbmx5LWNoaWxkJzogZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gIXByZXYoZWwpICYmICFuZXh0KGVsKVxuICAgICAgJiYgZWwucGFyZW50Tm9kZS5ub2RlVHlwZSA9PT0gMTtcbiAgfSxcbiAgJzpudGgtY2hpbGQnOiBmdW5jdGlvbihwYXJhbSwgbGFzdCkge1xuICAgIHJldHVybiBudGgocGFyYW0sIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSwgbGFzdCk7XG4gIH0sXG4gICc6bnRoLWxhc3QtY2hpbGQnOiBmdW5jdGlvbihwYXJhbSkge1xuICAgIHJldHVybiBzZWxlY3RvcnNbJzpudGgtY2hpbGQnXShwYXJhbSwgdHJ1ZSk7XG4gIH0sXG4gICc6cm9vdCc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuIGVsLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID09PSBlbDtcbiAgfSxcbiAgJzplbXB0eSc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuICFlbC5maXJzdENoaWxkO1xuICB9LFxuICAnOm5vdCc6IGZ1bmN0aW9uKHNlbCkge1xuICAgIHZhciB0ZXN0ID0gY29tcGlsZUdyb3VwKHNlbCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsKSB7XG4gICAgICByZXR1cm4gIXRlc3QoZWwpO1xuICAgIH07XG4gIH0sXG4gICc6Zmlyc3Qtb2YtdHlwZSc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgaWYgKGVsLnBhcmVudE5vZGUubm9kZVR5cGUgIT09IDEpIHJldHVybjtcbiAgICB2YXIgdHlwZSA9IGVsLm5vZGVOYW1lO1xuICAgIHdoaWxlIChlbCA9IHByZXYoZWwpKSB7XG4gICAgICBpZiAoZWwubm9kZU5hbWUgPT09IHR5cGUpIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG4gICc6bGFzdC1vZi10eXBlJzogZnVuY3Rpb24oZWwpIHtcbiAgICBpZiAoZWwucGFyZW50Tm9kZS5ub2RlVHlwZSAhPT0gMSkgcmV0dXJuO1xuICAgIHZhciB0eXBlID0gZWwubm9kZU5hbWU7XG4gICAgd2hpbGUgKGVsID0gbmV4dChlbCkpIHtcbiAgICAgIGlmIChlbC5ub2RlTmFtZSA9PT0gdHlwZSkgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgJzpvbmx5LW9mLXR5cGUnOiBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiBzZWxlY3RvcnNbJzpmaXJzdC1vZi10eXBlJ10oZWwpXG4gICAgICAgICYmIHNlbGVjdG9yc1snOmxhc3Qtb2YtdHlwZSddKGVsKTtcbiAgfSxcbiAgJzpudGgtb2YtdHlwZSc6IGZ1bmN0aW9uKHBhcmFtLCBsYXN0KSB7XG4gICAgcmV0dXJuIG50aChwYXJhbSwgZnVuY3Rpb24ocmVsLCBlbCkge1xuICAgICAgcmV0dXJuIHJlbC5ub2RlTmFtZSA9PT0gZWwubm9kZU5hbWU7XG4gICAgfSwgbGFzdCk7XG4gIH0sXG4gICc6bnRoLWxhc3Qtb2YtdHlwZSc6IGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yc1snOm50aC1vZi10eXBlJ10ocGFyYW0sIHRydWUpO1xuICB9LFxuICAnOmNoZWNrZWQnOiBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiAhIShlbC5jaGVja2VkIHx8IGVsLnNlbGVjdGVkKTtcbiAgfSxcbiAgJzppbmRldGVybWluYXRlJzogZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gIXNlbGVjdG9yc1snOmNoZWNrZWQnXShlbCk7XG4gIH0sXG4gICc6ZW5hYmxlZCc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuICFlbC5kaXNhYmxlZCAmJiBlbC50eXBlICE9PSAnaGlkZGVuJztcbiAgfSxcbiAgJzpkaXNhYmxlZCc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuICEhZWwuZGlzYWJsZWQ7XG4gIH0sXG4gICc6dGFyZ2V0JzogZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gZWwuaWQgPT09IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKTtcbiAgfSxcbiAgJzpmb2N1cyc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuIGVsID09PSBlbC5vd25lckRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gIH0sXG4gICc6bWF0Y2hlcyc6IGZ1bmN0aW9uKHNlbCkge1xuICAgIHJldHVybiBjb21waWxlR3JvdXAoc2VsKTtcbiAgfSxcbiAgJzpudGgtbWF0Y2gnOiBmdW5jdGlvbihwYXJhbSwgbGFzdCkge1xuICAgIHZhciBhcmdzID0gcGFyYW0uc3BsaXQoL1xccyosXFxzKi8pXG4gICAgICAsIGFyZyA9IGFyZ3Muc2hpZnQoKVxuICAgICAgLCB0ZXN0ID0gY29tcGlsZUdyb3VwKGFyZ3Muam9pbignLCcpKTtcblxuICAgIHJldHVybiBudGgoYXJnLCB0ZXN0LCBsYXN0KTtcbiAgfSxcbiAgJzpudGgtbGFzdC1tYXRjaCc6IGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yc1snOm50aC1tYXRjaCddKHBhcmFtLCB0cnVlKTtcbiAgfSxcbiAgJzpsaW5rcy1oZXJlJzogZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gZWwgKyAnJyA9PT0gd2luZG93LmxvY2F0aW9uICsgJyc7XG4gIH0sXG4gICc6bGFuZyc6IGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsKSB7XG4gICAgICB3aGlsZSAoZWwpIHtcbiAgICAgICAgaWYgKGVsLmxhbmcpIHJldHVybiBlbC5sYW5nLmluZGV4T2YocGFyYW0pID09PSAwO1xuICAgICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgJzpkaXInOiBmdW5jdGlvbihwYXJhbSkge1xuICAgIHJldHVybiBmdW5jdGlvbihlbCkge1xuICAgICAgd2hpbGUgKGVsKSB7XG4gICAgICAgIGlmIChlbC5kaXIpIHJldHVybiBlbC5kaXIgPT09IHBhcmFtO1xuICAgICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgJzpzY29wZSc6IGZ1bmN0aW9uKGVsLCBjb24pIHtcbiAgICB2YXIgY29udGV4dCA9IGNvbiB8fCBlbC5vd25lckRvY3VtZW50O1xuICAgIGlmIChjb250ZXh0Lm5vZGVUeXBlID09PSA5KSB7XG4gICAgICByZXR1cm4gZWwgPT09IGNvbnRleHQuZG9jdW1lbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gZWwgPT09IGNvbnRleHQ7XG4gIH0sXG4gICc6YW55LWxpbmsnOiBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiB0eXBlb2YgZWwuaHJlZiA9PT0gJ3N0cmluZyc7XG4gIH0sXG4gICc6bG9jYWwtbGluayc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgaWYgKGVsLm5vZGVOYW1lKSB7XG4gICAgICByZXR1cm4gZWwuaHJlZiAmJiBlbC5ob3N0ID09PSB3aW5kb3cubG9jYXRpb24uaG9zdDtcbiAgICB9XG4gICAgdmFyIHBhcmFtID0gK2VsICsgMTtcbiAgICByZXR1cm4gZnVuY3Rpb24oZWwpIHtcbiAgICAgIGlmICghZWwuaHJlZikgcmV0dXJuO1xuXG4gICAgICB2YXIgdXJsID0gd2luZG93LmxvY2F0aW9uICsgJydcbiAgICAgICAgLCBocmVmID0gZWwgKyAnJztcblxuICAgICAgcmV0dXJuIHRydW5jYXRlVXJsKHVybCwgcGFyYW0pID09PSB0cnVuY2F0ZVVybChocmVmLCBwYXJhbSk7XG4gICAgfTtcbiAgfSxcbiAgJzpkZWZhdWx0JzogZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gISFlbC5kZWZhdWx0U2VsZWN0ZWQ7XG4gIH0sXG4gICc6dmFsaWQnOiBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiBlbC53aWxsVmFsaWRhdGUgfHwgKGVsLnZhbGlkaXR5ICYmIGVsLnZhbGlkaXR5LnZhbGlkKTtcbiAgfSxcbiAgJzppbnZhbGlkJzogZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gIXNlbGVjdG9yc1snOnZhbGlkJ10oZWwpO1xuICB9LFxuICAnOmluLXJhbmdlJzogZnVuY3Rpb24oZWwpIHtcbiAgICByZXR1cm4gZWwudmFsdWUgPiBlbC5taW4gJiYgZWwudmFsdWUgPD0gZWwubWF4O1xuICB9LFxuICAnOm91dC1vZi1yYW5nZSc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuICFzZWxlY3RvcnNbJzppbi1yYW5nZSddKGVsKTtcbiAgfSxcbiAgJzpyZXF1aXJlZCc6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuICEhZWwucmVxdWlyZWQ7XG4gIH0sXG4gICc6b3B0aW9uYWwnOiBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiAhZWwucmVxdWlyZWQ7XG4gIH0sXG4gICc6cmVhZC1vbmx5JzogZnVuY3Rpb24oZWwpIHtcbiAgICBpZiAoZWwucmVhZE9ubHkpIHJldHVybiB0cnVlO1xuXG4gICAgdmFyIGF0dHIgPSBlbC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpXG4gICAgICAsIHByb3AgPSBlbC5jb250ZW50RWRpdGFibGVcbiAgICAgICwgbmFtZSA9IGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBuYW1lID0gbmFtZSAhPT0gJ2lucHV0JyAmJiBuYW1lICE9PSAndGV4dGFyZWEnO1xuXG4gICAgcmV0dXJuIChuYW1lIHx8IGVsLmRpc2FibGVkKSAmJiBhdHRyID09IG51bGwgJiYgcHJvcCAhPT0gJ3RydWUnO1xuICB9LFxuICAnOnJlYWQtd3JpdGUnOiBmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiAhc2VsZWN0b3JzWyc6cmVhZC1vbmx5J10oZWwpO1xuICB9LFxuICAnOmhvdmVyJzogZnVuY3Rpb24oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCc6aG92ZXIgaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgfSxcbiAgJzphY3RpdmUnOiBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJzphY3RpdmUgaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgfSxcbiAgJzpsaW5rJzogZnVuY3Rpb24oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCc6bGluayBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICB9LFxuICAnOnZpc2l0ZWQnOiBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJzp2aXNpdGVkIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gIH0sXG4gICc6Y29sdW1uJzogZnVuY3Rpb24oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCc6Y29sdW1uIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gIH0sXG4gICc6bnRoLWNvbHVtbic6IGZ1bmN0aW9uKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignOm50aC1jb2x1bW4gaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgfSxcbiAgJzpudGgtbGFzdC1jb2x1bW4nOiBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJzpudGgtbGFzdC1jb2x1bW4gaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgfSxcbiAgJzpjdXJyZW50JzogZnVuY3Rpb24oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCc6Y3VycmVudCBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICB9LFxuICAnOnBhc3QnOiBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJzpwYXN0IGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gIH0sXG4gICc6ZnV0dXJlJzogZnVuY3Rpb24oKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCc6ZnV0dXJlIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gIH0sXG4gIC8vIE5vbi1zdGFuZGFyZCwgZm9yIGNvbXBhdGliaWxpdHkgcHVycG9zZXMuXG4gICc6Y29udGFpbnMnOiBmdW5jdGlvbihwYXJhbSkge1xuICAgIHJldHVybiBmdW5jdGlvbihlbCkge1xuICAgICAgdmFyIHRleHQgPSBlbC5pbm5lclRleHQgfHwgZWwudGV4dENvbnRlbnQgfHwgZWwudmFsdWUgfHwgJyc7XG4gICAgICByZXR1cm4gISF+dGV4dC5pbmRleE9mKHBhcmFtKTtcbiAgICB9O1xuICB9LFxuICAnOmhhcyc6IGZ1bmN0aW9uKHBhcmFtKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsKSB7XG4gICAgICByZXR1cm4gemVzdChwYXJhbSwgZWwpLmxlbmd0aCA+IDA7XG4gICAgfTtcbiAgfVxuICAvLyBQb3RlbnRpYWxseSBhZGQgbW9yZSBwc2V1ZG8gc2VsZWN0b3JzIGZvclxuICAvLyBjb21wYXRpYmlsaXR5IHdpdGggc2l6emxlIGFuZCBtb3N0IG90aGVyXG4gIC8vIHNlbGVjdG9yIGVuZ2luZXMgKD8pLlxufTtcblxuLyoqXG4gKiBBdHRyaWJ1dGUgT3BlcmF0b3JzXG4gKi9cblxudmFyIG9wZXJhdG9ycyA9IHtcbiAgJy0nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcbiAgJz0nOiBmdW5jdGlvbihhdHRyLCB2YWwpIHtcbiAgICByZXR1cm4gYXR0ciA9PT0gdmFsO1xuICB9LFxuICAnKj0nOiBmdW5jdGlvbihhdHRyLCB2YWwpIHtcbiAgICByZXR1cm4gYXR0ci5pbmRleE9mKHZhbCkgIT09IC0xO1xuICB9LFxuICAnfj0nOiBmdW5jdGlvbihhdHRyLCB2YWwpIHtcbiAgICB2YXIgaSA9IGF0dHIuaW5kZXhPZih2YWwpXG4gICAgICAsIGZcbiAgICAgICwgbDtcblxuICAgIGlmIChpID09PSAtMSkgcmV0dXJuO1xuICAgIGYgPSBhdHRyW2kgLSAxXTtcbiAgICBsID0gYXR0cltpICsgdmFsLmxlbmd0aF07XG5cbiAgICByZXR1cm4gKCFmIHx8IGYgPT09ICcgJykgJiYgKCFsIHx8IGwgPT09ICcgJyk7XG4gIH0sXG4gICd8PSc6IGZ1bmN0aW9uKGF0dHIsIHZhbCkge1xuICAgIHZhciBpID0gYXR0ci5pbmRleE9mKHZhbClcbiAgICAgICwgbDtcblxuICAgIGlmIChpICE9PSAwKSByZXR1cm47XG4gICAgbCA9IGF0dHJbaSArIHZhbC5sZW5ndGhdO1xuXG4gICAgcmV0dXJuIGwgPT09ICctJyB8fCAhbDtcbiAgfSxcbiAgJ149JzogZnVuY3Rpb24oYXR0ciwgdmFsKSB7XG4gICAgcmV0dXJuIGF0dHIuaW5kZXhPZih2YWwpID09PSAwO1xuICB9LFxuICAnJD0nOiBmdW5jdGlvbihhdHRyLCB2YWwpIHtcbiAgICByZXR1cm4gYXR0ci5pbmRleE9mKHZhbCkgKyB2YWwubGVuZ3RoID09PSBhdHRyLmxlbmd0aDtcbiAgfSxcbiAgLy8gbm9uLXN0YW5kYXJkXG4gICchPSc6IGZ1bmN0aW9uKGF0dHIsIHZhbCkge1xuICAgIHJldHVybiBhdHRyICE9PSB2YWw7XG4gIH1cbn07XG5cbi8qKlxuICogQ29tYmluYXRvciBMb2dpY1xuICovXG5cbnZhciBjb21iaW5hdG9ycyA9IHtcbiAgJyAnOiBmdW5jdGlvbih0ZXN0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsKSB7XG4gICAgICB3aGlsZSAoZWwgPSBlbC5wYXJlbnROb2RlKSB7XG4gICAgICAgIGlmICh0ZXN0KGVsKSkgcmV0dXJuIGVsO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG4gICc+JzogZnVuY3Rpb24odGVzdCkge1xuICAgIHJldHVybiBmdW5jdGlvbihlbCkge1xuICAgICAgcmV0dXJuIHRlc3QoZWwgPSBlbC5wYXJlbnROb2RlKSAmJiBlbDtcbiAgICB9O1xuICB9LFxuICAnKyc6IGZ1bmN0aW9uKHRlc3QpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZWwpIHtcbiAgICAgIHJldHVybiB0ZXN0KGVsID0gcHJldihlbCkpICYmIGVsO1xuICAgIH07XG4gIH0sXG4gICd+JzogZnVuY3Rpb24odGVzdCkge1xuICAgIHJldHVybiBmdW5jdGlvbihlbCkge1xuICAgICAgd2hpbGUgKGVsID0gcHJldihlbCkpIHtcbiAgICAgICAgaWYgKHRlc3QoZWwpKSByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgJ25vb3AnOiBmdW5jdGlvbih0ZXN0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGVsKSB7XG4gICAgICByZXR1cm4gdGVzdChlbCkgJiYgZWw7XG4gICAgfTtcbiAgfSxcbiAgJ3JlZic6IGZ1bmN0aW9uKHRlc3QsIG5hbWUpIHtcbiAgICB2YXIgbm9kZTtcblxuICAgIGZ1bmN0aW9uIHJlZihlbCkge1xuICAgICAgdmFyIGRvYyA9IGVsLm93bmVyRG9jdW1lbnRcbiAgICAgICAgLCBub2RlcyA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpXG4gICAgICAgICwgaSA9IG5vZGVzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBub2RlID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChyZWYudGVzdChlbCkpIHtcbiAgICAgICAgICBub2RlID0gbnVsbDtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBub2RlID0gbnVsbDtcbiAgICB9XG5cbiAgICByZWYuY29tYmluYXRvciA9IGZ1bmN0aW9uKGVsKSB7XG4gICAgICBpZiAoIW5vZGUgfHwgIW5vZGUuZ2V0QXR0cmlidXRlKSByZXR1cm47XG5cbiAgICAgIHZhciBhdHRyID0gbm9kZS5nZXRBdHRyaWJ1dGUobmFtZSkgfHwgJyc7XG4gICAgICBpZiAoYXR0clswXSA9PT0gJyMnKSBhdHRyID0gYXR0ci5zdWJzdHJpbmcoMSk7XG5cbiAgICAgIGlmIChhdHRyID09PSBlbC5pZCAmJiB0ZXN0KG5vZGUpKSB7XG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gcmVmO1xuICB9XG59O1xuXG4vKipcbiAqIEdyYW1tYXJcbiAqL1xuXG52YXIgcnVsZXMgPSB7XG4gIHFuYW1lOiAvXiAqKFtcXHdcXC1dK3xcXCopLyxcbiAgc2ltcGxlOiAvXig/OihbLiNdW1xcd1xcLV0rKXxwc2V1ZG98YXR0cikvLFxuICByZWY6IC9eICpcXC8oW1xcd1xcLV0rKVxcLyAqLyxcbiAgY29tYmluYXRvcjogL14oPzogKyhbXiBcXHcqXSkgK3woICkrfChbXiBcXHcqXSkpKD8hICokKS8sXG4gIGF0dHI6IC9eXFxbKFtcXHdcXC1dKykoPzooW15cXHddPz0pKGluc2lkZSkpP1xcXS8sXG4gIHBzZXVkbzogL14oOltcXHdcXC1dKykoPzpcXCgoaW5zaWRlKVxcKSk/LyxcbiAgaW5zaWRlOiAvKD86XCIoPzpcXFxcXCJ8W15cIl0pKlwifCcoPzpcXFxcJ3xbXiddKSonfDxbXlwiJz5dKj58XFxcXFtcIic+XXxbXlwiJz5dKSovXG59O1xuXG5ydWxlcy5pbnNpZGUgPSByZXBsYWNlKHJ1bGVzLmluc2lkZSwgJ1teXCJcXCc+XSonLCBydWxlcy5pbnNpZGUpO1xucnVsZXMuYXR0ciA9IHJlcGxhY2UocnVsZXMuYXR0ciwgJ2luc2lkZScsIG1ha2VJbnNpZGUoJ1xcXFxbJywgJ1xcXFxdJykpO1xucnVsZXMucHNldWRvID0gcmVwbGFjZShydWxlcy5wc2V1ZG8sICdpbnNpZGUnLCBtYWtlSW5zaWRlKCdcXFxcKCcsICdcXFxcKScpKTtcbnJ1bGVzLnNpbXBsZSA9IHJlcGxhY2UocnVsZXMuc2ltcGxlLCAncHNldWRvJywgcnVsZXMucHNldWRvKTtcbnJ1bGVzLnNpbXBsZSA9IHJlcGxhY2UocnVsZXMuc2ltcGxlLCAnYXR0cicsIHJ1bGVzLmF0dHIpO1xuXG4vKipcbiAqIENvbXBpbGluZ1xuICovXG5cbnZhciBjb21waWxlID0gZnVuY3Rpb24oc2VsKSB7XG4gIHZhciBzZWwgPSBzZWwucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG4gICAgLCB0ZXN0XG4gICAgLCBmaWx0ZXIgPSBbXVxuICAgICwgYnVmZiA9IFtdXG4gICAgLCBzdWJqZWN0XG4gICAgLCBxbmFtZVxuICAgICwgY2FwXG4gICAgLCBvcFxuICAgICwgcmVmO1xuXG4gIHdoaWxlIChzZWwpIHtcbiAgICBpZiAoY2FwID0gcnVsZXMucW5hbWUuZXhlYyhzZWwpKSB7XG4gICAgICBzZWwgPSBzZWwuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgcW5hbWUgPSBjYXBbMV07XG4gICAgICBidWZmLnB1c2godG9rKHFuYW1lLCB0cnVlKSk7XG4gICAgfSBlbHNlIGlmIChjYXAgPSBydWxlcy5zaW1wbGUuZXhlYyhzZWwpKSB7XG4gICAgICBzZWwgPSBzZWwuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgcW5hbWUgPSAnKic7XG4gICAgICBidWZmLnB1c2godG9rKHFuYW1lLCB0cnVlKSk7XG4gICAgICBidWZmLnB1c2godG9rKGNhcCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2VsZWN0b3IuJyk7XG4gICAgfVxuXG4gICAgd2hpbGUgKGNhcCA9IHJ1bGVzLnNpbXBsZS5leGVjKHNlbCkpIHtcbiAgICAgIHNlbCA9IHNlbC5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBidWZmLnB1c2godG9rKGNhcCkpO1xuICAgIH1cblxuICAgIGlmIChzZWxbMF0gPT09ICchJykge1xuICAgICAgc2VsID0gc2VsLnN1YnN0cmluZygxKTtcbiAgICAgIHN1YmplY3QgPSBtYWtlU3ViamVjdCgpO1xuICAgICAgc3ViamVjdC5xbmFtZSA9IHFuYW1lO1xuICAgICAgYnVmZi5wdXNoKHN1YmplY3Quc2ltcGxlKTtcbiAgICB9XG5cbiAgICBpZiAoY2FwID0gcnVsZXMucmVmLmV4ZWMoc2VsKSkge1xuICAgICAgc2VsID0gc2VsLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHJlZiA9IGNvbWJpbmF0b3JzLnJlZihtYWtlU2ltcGxlKGJ1ZmYpLCBjYXBbMV0pO1xuICAgICAgZmlsdGVyLnB1c2gocmVmLmNvbWJpbmF0b3IpO1xuICAgICAgYnVmZiA9IFtdO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGNhcCA9IHJ1bGVzLmNvbWJpbmF0b3IuZXhlYyhzZWwpKSB7XG4gICAgICBzZWwgPSBzZWwuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3AgPSBjYXBbMV0gfHwgY2FwWzJdIHx8IGNhcFszXTtcbiAgICAgIGlmIChvcCA9PT0gJywnKSB7XG4gICAgICAgIGZpbHRlci5wdXNoKGNvbWJpbmF0b3JzLm5vb3AobWFrZVNpbXBsZShidWZmKSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgb3AgPSAnbm9vcCc7XG4gICAgfVxuXG4gICAgZmlsdGVyLnB1c2goY29tYmluYXRvcnNbb3BdKG1ha2VTaW1wbGUoYnVmZikpKTtcbiAgICBidWZmID0gW107XG4gIH1cblxuICB0ZXN0ID0gbWFrZVRlc3QoZmlsdGVyKTtcbiAgdGVzdC5xbmFtZSA9IHFuYW1lO1xuICB0ZXN0LnNlbCA9IHNlbDtcblxuICBpZiAoc3ViamVjdCkge1xuICAgIHN1YmplY3QubG5hbWUgPSB0ZXN0LnFuYW1lO1xuXG4gICAgc3ViamVjdC50ZXN0ID0gdGVzdDtcbiAgICBzdWJqZWN0LnFuYW1lID0gc3ViamVjdC5xbmFtZTtcbiAgICBzdWJqZWN0LnNlbCA9IHRlc3Quc2VsO1xuICAgIHRlc3QgPSBzdWJqZWN0O1xuICB9XG5cbiAgaWYgKHJlZikge1xuICAgIHJlZi50ZXN0ID0gdGVzdDtcbiAgICByZWYucW5hbWUgPSB0ZXN0LnFuYW1lO1xuICAgIHJlZi5zZWwgPSB0ZXN0LnNlbDtcbiAgICB0ZXN0ID0gcmVmO1xuICB9XG5cbiAgcmV0dXJuIHRlc3Q7XG59O1xuXG52YXIgdG9rID0gZnVuY3Rpb24oY2FwLCBxbmFtZSkge1xuICAvLyBxbmFtZVxuICBpZiAocW5hbWUpIHtcbiAgICByZXR1cm4gY2FwID09PSAnKidcbiAgICAgID8gc2VsZWN0b3JzWycqJ11cbiAgICAgIDogc2VsZWN0b3JzLnR5cGUoY2FwKTtcbiAgfVxuXG4gIC8vIGNsYXNzL2lkXG4gIGlmIChjYXBbMV0pIHtcbiAgICByZXR1cm4gY2FwWzFdWzBdID09PSAnLidcbiAgICAgID8gc2VsZWN0b3JzLmF0dHIoJ2NsYXNzJywgJ349JywgY2FwWzFdLnN1YnN0cmluZygxKSlcbiAgICAgIDogc2VsZWN0b3JzLmF0dHIoJ2lkJywgJz0nLCBjYXBbMV0uc3Vic3RyaW5nKDEpKTtcbiAgfVxuXG4gIC8vIHBzZXVkby1uYW1lXG4gIC8vIGluc2lkZS1wc2V1ZG9cbiAgaWYgKGNhcFsyXSkge1xuICAgIHJldHVybiBjYXBbM11cbiAgICAgID8gc2VsZWN0b3JzW2NhcFsyXV0odW5xdW90ZShjYXBbM10pKVxuICAgICAgOiBzZWxlY3RvcnNbY2FwWzJdXTtcbiAgfVxuXG4gIC8vIGF0dHIgbmFtZVxuICAvLyBhdHRyIG9wXG4gIC8vIGF0dHIgdmFsdWVcbiAgaWYgKGNhcFs0XSkge1xuICAgIHZhciBpO1xuICAgIGlmIChjYXBbNl0pIHtcbiAgICAgIGkgPSBjYXBbNl0ubGVuZ3RoO1xuICAgICAgY2FwWzZdID0gY2FwWzZdLnJlcGxhY2UoLyAraSQvLCAnJyk7XG4gICAgICBpID0gaSA+IGNhcFs2XS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RvcnMuYXR0cihjYXBbNF0sIGNhcFs1XSB8fCAnLScsIHVucXVvdGUoY2FwWzZdKSwgaSk7XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gU2VsZWN0b3IuJyk7XG59O1xuXG52YXIgbWFrZVNpbXBsZSA9IGZ1bmN0aW9uKGZ1bmMpIHtcbiAgdmFyIGwgPSBmdW5jLmxlbmd0aFxuICAgICwgaTtcblxuICAvLyBQb3RlbnRpYWxseSBtYWtlIHN1cmVcbiAgLy8gYGVsYCBpcyB0cnV0aHkuXG4gIGlmIChsIDwgMikgcmV0dXJuIGZ1bmNbMF07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGVsKSB7XG4gICAgaWYgKCFlbCkgcmV0dXJuO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICghZnVuY1tpXShlbCkpIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG59O1xuXG52YXIgbWFrZVRlc3QgPSBmdW5jdGlvbihmdW5jKSB7XG4gIGlmIChmdW5jLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZWwpIHtcbiAgICAgIHJldHVybiAhIWZ1bmNbMF0oZWwpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKGVsKSB7XG4gICAgdmFyIGkgPSBmdW5jLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZiAoIShlbCA9IGZ1bmNbaV0oZWwpKSkgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn07XG5cbnZhciBtYWtlU3ViamVjdCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgdGFyZ2V0O1xuXG4gIGZ1bmN0aW9uIHN1YmplY3QoZWwpIHtcbiAgICB2YXIgbm9kZSA9IGVsLm93bmVyRG9jdW1lbnRcbiAgICAgICwgc2NvcGUgPSBub2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKHN1YmplY3QubG5hbWUpXG4gICAgICAsIGkgPSBzY29wZS5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBpZiAoc3ViamVjdC50ZXN0KHNjb3BlW2ldKSAmJiB0YXJnZXQgPT09IGVsKSB7XG4gICAgICAgIHRhcmdldCA9IG51bGw7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRhcmdldCA9IG51bGw7XG4gIH1cblxuICBzdWJqZWN0LnNpbXBsZSA9IGZ1bmN0aW9uKGVsKSB7XG4gICAgdGFyZ2V0ID0gZWw7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcmV0dXJuIHN1YmplY3Q7XG59O1xuXG52YXIgY29tcGlsZUdyb3VwID0gZnVuY3Rpb24oc2VsKSB7XG4gIHZhciB0ZXN0ID0gY29tcGlsZShzZWwpXG4gICAgLCB0ZXN0cyA9IFsgdGVzdCBdO1xuXG4gIHdoaWxlICh0ZXN0LnNlbCkge1xuICAgIHRlc3QgPSBjb21waWxlKHRlc3Quc2VsKTtcbiAgICB0ZXN0cy5wdXNoKHRlc3QpO1xuICB9XG5cbiAgaWYgKHRlc3RzLmxlbmd0aCA8IDIpIHJldHVybiB0ZXN0O1xuXG4gIHJldHVybiBmdW5jdGlvbihlbCkge1xuICAgIHZhciBsID0gdGVzdHMubGVuZ3RoXG4gICAgICAsIGkgPSAwO1xuXG4gICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh0ZXN0c1tpXShlbCkpIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcbn07XG5cbi8qKlxuICogU2VsZWN0aW9uXG4gKi9cblxudmFyIGZpbmQgPSBmdW5jdGlvbihzZWwsIG5vZGUpIHtcbiAgdmFyIHJlc3VsdHMgPSBbXVxuICAgICwgdGVzdCA9IGNvbXBpbGUoc2VsKVxuICAgICwgc2NvcGUgPSBub2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKHRlc3QucW5hbWUpXG4gICAgLCBpID0gMFxuICAgICwgZWw7XG5cbiAgd2hpbGUgKGVsID0gc2NvcGVbaSsrXSkge1xuICAgIGlmICh0ZXN0KGVsKSkgcmVzdWx0cy5wdXNoKGVsKTtcbiAgfVxuXG4gIGlmICh0ZXN0LnNlbCkge1xuICAgIHdoaWxlICh0ZXN0LnNlbCkge1xuICAgICAgdGVzdCA9IGNvbXBpbGUodGVzdC5zZWwpO1xuICAgICAgc2NvcGUgPSBub2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lKHRlc3QucW5hbWUpO1xuICAgICAgaSA9IDA7XG4gICAgICB3aGlsZSAoZWwgPSBzY29wZVtpKytdKSB7XG4gICAgICAgIGlmICh0ZXN0KGVsKSAmJiAhfmluZGV4T2YuY2FsbChyZXN1bHRzLCBlbCkpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goZWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdHMuc29ydChvcmRlcik7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0cztcbn07XG5cbi8qKlxuICogTmF0aXZlXG4gKi9cblxudmFyIHNlbGVjdCA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHNsaWNlID0gKGZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnemVzdCcpKTtcbiAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBlID0gbnVsbDtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGEgPSBbXSwgaSA9IDAsIGwgPSB0aGlzLmxlbmd0aDtcbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIGEucHVzaCh0aGlzW2ldKTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9O1xuICAgIH1cbiAgfSkoKTtcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCkge1xuICAgIHJldHVybiBmdW5jdGlvbihzZWwsIG5vZGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBzbGljZS5jYWxsKG5vZGUucXVlcnlTZWxlY3RvckFsbChzZWwpKTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmluZChzZWwsIG5vZGUpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oc2VsLCBub2RlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChzZWxbMF0gPT09ICcjJyAmJiAvXiNbXFx3XFwtXSskLy50ZXN0KHNlbCkpIHtcbiAgICAgICAgcmV0dXJuIFtub2RlLmdldEVsZW1lbnRCeUlkKHNlbC5zdWJzdHJpbmcoMSkpXTtcbiAgICAgIH1cbiAgICAgIGlmIChzZWxbMF0gPT09ICcuJyAmJiAvXlxcLltcXHdcXC1dKyQvLnRlc3Qoc2VsKSkge1xuICAgICAgICBzZWwgPSBub2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2VsLnN1YnN0cmluZygxKSk7XG4gICAgICAgIHJldHVybiBzbGljZS5jYWxsKHNlbCk7XG4gICAgICB9XG4gICAgICBpZiAoL15bXFx3XFwtXSskLy50ZXN0KHNlbCkpIHtcbiAgICAgICAgcmV0dXJuIHNsaWNlLmNhbGwobm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZShzZWwpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIDtcbiAgICB9XG4gICAgcmV0dXJuIGZpbmQoc2VsLCBub2RlKTtcbiAgfTtcbn0pKCk7XG5cbi8qKlxuICogWmVzdFxuICovXG5cbnZhciB6ZXN0ID0gZnVuY3Rpb24oc2VsLCBub2RlKSB7XG4gIHRyeSB7XG4gICAgc2VsID0gc2VsZWN0KHNlbCwgbm9kZSB8fCBkb2N1bWVudCk7XG4gIH0gY2F0Y2goZSkge1xuICAgIGlmICh3aW5kb3cuWkVTVF9ERUJVRykge1xuICAgICAgY29uc29sZS5sb2coZS5zdGFjayB8fCBlICsgJycpO1xuICAgIH1cbiAgICBzZWwgPSBbXTtcbiAgfVxuICByZXR1cm4gc2VsO1xufTtcblxuLyoqXG4gKiBFeHBvc2VcbiAqL1xuXG56ZXN0LnNlbGVjdG9ycyA9IHNlbGVjdG9ycztcbnplc3Qub3BlcmF0b3JzID0gb3BlcmF0b3JzO1xuemVzdC5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuemVzdC5jb21waWxlID0gY29tcGlsZUdyb3VwO1xuXG56ZXN0Lm1hdGNoZXMgPSBmdW5jdGlvbihlbCwgc2VsKSB7XG4gIHJldHVybiAhIWNvbXBpbGVHcm91cChzZWwpKGVsKTtcbn07XG5cbnplc3QuY2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKGNvbXBpbGUucmF3KSByZXR1cm47XG5cbiAgdmFyIHJhdyA9IGNvbXBpbGVcbiAgICAsIGNhY2hlID0ge307XG5cbiAgY29tcGlsZSA9IGZ1bmN0aW9uKHNlbCkge1xuICAgIHJldHVybiBjYWNoZVtzZWxdXG4gICAgICB8fCAoY2FjaGVbc2VsXSA9IHJhdyhzZWwpKTtcbiAgfTtcblxuICBjb21waWxlLnJhdyA9IHJhdztcbiAgemVzdC5fY2FjaGUgPSBjYWNoZTtcbn07XG5cbnplc3Qubm9DYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAoIWNvbXBpbGUucmF3KSByZXR1cm47XG4gIGNvbXBpbGUgPSBjb21waWxlLnJhdztcbiAgZGVsZXRlIHplc3QuX2NhY2hlO1xufTtcblxuemVzdC5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oKSB7XG4gIHdpbmRvdy56ZXN0ID0gb2xkO1xuICByZXR1cm4gemVzdDtcbn07XG5cbnplc3Qubm9OYXRpdmUgPSBmdW5jdGlvbigpIHtcbiAgc2VsZWN0ID0gZmluZDtcbn07XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHplc3Q7XG59IGVsc2Uge1xuICB0aGlzLnplc3QgPSB6ZXN0O1xufVxuXG5pZiAod2luZG93LlpFU1RfREVCVUcpIHtcbiAgemVzdC5ub05hdGl2ZSgpO1xufSBlbHNlIHtcbiAgemVzdC5jYWNoZSgpO1xufVxuXG59KS5jYWxsKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcyB8fCAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpO1xufSgpKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5pbXBvcnQgc3RvcnkgZnJvbSAnLi91dGlsL2FjdGl2aXR5LmpzJ1xuaW1wb3J0IGNhdGVnIGZyb20gJy4vdXRpbC9jYXQuanMnXG5cbmNvbnN0ICQgPSByZXF1aXJlKCd6ZXN0JykgLy8gZG9tIHNlbGVjdG9yIGVuZ2luZVxuY29uc3QgYW5pbWUgPSByZXF1aXJlKCdhbmltZWpzJylcblxuLy8gRE9NXG5jb25zdCBjb250YWluZXIgPSAkKCcjYWN0aXZpdGllc19fYnktY2F0JylbMF1cbmNvbnN0IGNhcmRzID0gJCgnLmNhdGVnb3J5LWNhcmQnKVxuY29uc3QgZHJpbGxkb3duID0gJCgnI2RyaWxsZG93bicpWzBdXG5jb25zdCBhY3Rpdml0eSA9ICQoJyNhY3Rpdml0eScpWzBdXG5jb25zdCBjYXRNZXRhID0gJCgnI2NhdC1tZXRhJylbMF1cblxuY29uc3QgYWpheCA9IGF4aW9zLmNyZWF0ZSh7IC8vIGF4aW9zLCBvdXIgQUpBWCBsaWJcblx0YmFzZVVSTDogJ2h0dHBzOi8vZG9lLmNvbmNvcmRpYS5jYS9jc2xwL3dwLWpzb24vd3AvdjIvJ1xufSlcblxuY29uc3Qgc3RhdGUgPSB7XG5cdGRyaWxsTGV2ZWw6IDAsXG5cdGFjdGl2ZTogJ25vbmUnLFxuXHRjYXRlZ29yeURhdGE6IHt9LFxuXHRhY3Rpdml0eURhdGE6IHt9LFxuXG5cdHNldExldmVsOiAobGV2ZWwsIG9wdGlvbnMpID0+IHtcblx0XHRzdGF0ZS5kcmlsbExldmVsID0gbGV2ZWxcblxuXHRcdGxldCBvcHRzID0gb3B0aW9ucyB8fCB7ZGlyZWN0aW9uOiAnJ31cblxuXHRcdHN3aXRjaChsZXZlbCkge1xuXHRcdFx0Ly8gaW50cm8gc2NyZWVuLCBjYXRlZ29yeSBzZWxlY3Rpb25cblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0ZHJpbGxkb3duLnNldEF0dHJpYnV0ZSgnZGF0YS1hY3RpdmUnLCAnbm9uZScpXG5cdFx0XHRcdGNvbnRhaW5lci5jbGFzc05hbWUgPSAnc2VsZWN0ZWQnXG5cdFx0XHRcdGNhdE1ldGEuY2xhc3NOYW1lID0gJ2hpZGRlbidcblx0XHRcdFx0YW5pbWUoe1xuXHRcdFx0XHRcdHRhcmdldHM6ICcuYWN0aXZpdGllcy1tZXRhIHAnLFxuXHRcdFx0XHRcdG9wYWNpdHk6IFswLCAxXSxcblx0XHRcdFx0XHRkdXJhdGlvbjogNTAwLFxuXHRcdFx0XHRcdGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcblx0XHRcdFx0XHRyZXZlcnNlOiBvcHRzLmRpcmVjdGlvbixcblx0XHRcdFx0XHRjb21wbGV0ZTogKCkgPT4ge1xuXHRcdFx0XHRcdFx0YW5pbWUoe1xuXHRcdFx0XHRcdFx0XHR0YXJnZXRzOiBjb250YWluZXIsXG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IFswLCAxXSxcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMCxcblx0XHRcdFx0XHRcdFx0cmV2ZXJzZTogb3B0cy5kaXJlY3Rpb25cblx0XHRcdFx0XHRcdH0pXG5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHQvLyBBY3Rpdml0eSBsaXN0XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdGlmIChvcHRzLmRpcmVjdGlvbiA9PSAncmV2ZXJzZScpIHtcblx0XHRcdFx0XHRhbmltZSh7XG5cdFx0XHRcdFx0XHR0YXJnZXRzOiBhY3Rpdml0eSxcblx0XHRcdFx0XHRcdG9wYWNpdHk6IFsxLDBdLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDQwMCxcblx0XHRcdFx0XHRcdHRyYW5zbGF0ZVk6IHsgdmFsdWU6IDQwLCBkdXJhdGlvbjogNDAwIH0sXG5cdFx0XHRcdFx0XHRlYXNpbmc6ICdlYXNlT3V0RXhwbycsXG5cdFx0XHRcdFx0XHRjb21wbGV0ZTogKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRhY3Rpdml0eS5jbGFzc05hbWUgPSAnaGlkZGVuJ1xuXHRcdFx0XHRcdFx0XHRhbmltZSh7XG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0czogJyNhY3Rpdml0aWVzX19ieS1jYXQnLFxuXHRcdFx0XHRcdFx0XHRcdGRlbGF5OiAxMDAsXG5cdFx0XHRcdFx0XHRcdFx0b3BhY2l0eTogWzEsIDBdLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiA2MDAsXG5cdFx0XHRcdFx0XHRcdFx0cmV2ZXJzZTogb3B0cy5kaXJlY3Rpb24sXG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAnZWFzZU91dEV4cG8nLFxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRkcmlsbGRvd24uc2V0QXR0cmlidXRlKCdkYXRhLWFjdGl2ZScsICdjYXQnKVxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGFpbmVyLmNsYXNzTmFtZSA9ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXRNZXRhLmNsYXNzTmFtZSA9ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3Rpdml0eS5jbGFzc05hbWUgPSAnaGlkZGVuJ1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0ICBcdFx0XHRcdFx0fSlcbiAgXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFuaW1lKHtcblx0XHRcdHRhcmdldHM6ICcuYWN0aXZpdGllcy1tZXRhIHAnLFxuXHRcdFx0b3BhY2l0eTogWzEsIDBdLFxuXHRcdFx0ZHVyYXRpb246IDQwMCxcblx0XHRcdHJldmVyc2U6IG9wdHMuZGlyZWN0aW9uLFxuXHRcdFx0ZWFzaW5nOiAnZWFzZU91dEV4cG8nLFxuXHRcdFx0Y29tcGxldGU6ICgpID0+IHtcblx0ICAgICAgYW5pbWUoe1xuXHRcdFx0XHRcdHRhcmdldHM6ICcjYWN0aXZpdGllc19fYnktY2F0Jyxcblx0XHRcdFx0XHRkZWxheTogMTAwLFxuXHRcdFx0XHRcdG9wYWNpdHk6IFsxLCAwXSxcblx0XHRcdFx0XHRkdXJhdGlvbjogNTAwLFxuXHRcdFx0XHRcdHJldmVyc2U6IG9wdHMuZGlyZWN0aW9uLFxuXHRcdFx0XHRcdGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcblx0XHRcdFx0XHRjb21wbGV0ZTogKCkgPT4ge1xuXHRcdFx0XHRcdFx0ZHJpbGxkb3duLnNldEF0dHJpYnV0ZSgnZGF0YS1hY3RpdmUnLCAnY2F0Jylcblx0XHRcdFx0XHRcdGNvbnRhaW5lci5jbGFzc05hbWUgPSAnJ1xuXHRcdFx0XHRcdFx0Y2F0TWV0YS5jbGFzc05hbWUgPSAnJ1xuXHRcdFx0XHRcdFx0YWN0aXZpdHkuY2xhc3NOYW1lID0gJ2hpZGRlbidcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdCAgXHR9XG5cdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Ly8gQWN0aXZpdHlcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0YWN0aXZpdHkuY2xhc3NOYW1lID0gJydcblx0XHRcdFx0Y2F0TWV0YS5jbGFzc05hbWUgPSAnaGlkZGVuJ1xuXHRcdFx0XHRhbmltZSh7XG5cdFx0XHRcdFx0dGFyZ2V0czogYWN0aXZpdHksXG5cdFx0XHRcdFx0b3BhY2l0eTogWzAsIDFdLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAsXG5cdFx0XHRcdFx0dHJhbnNsYXRlWTogeyB2YWx1ZTogLTQwLCBkdXJhdGlvbjogODAwIH0sXG5cdFx0XHRcdFx0ZWFzaW5nOiAnZWFzZUluRXhwbydcblx0XHRcdFx0fSlcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9LFxuXG5cdGdldEJyZWFkY3J1bWI6ICgpID0+IHtcblx0XHRsZXQgYmFzZSA9ICcnXG5cdFx0bGV0IGNhdCA9ICcnXG5cblx0XHQvLyBicmVha3MgaW50ZW50aW9uYWxseSBvbW1pdGVkIGZvciBzbWFydCBmb2xsb3ctdGhyb3VnaFxuXHRcdC8vIGRlcGVuZGluZyBvbiBsZXZlbCwgdGhlIHN0cmluZyB3aWxsIHVwZGF0ZSByZWxldmFudCBwYXJ0c1xuXHRcdHN3aXRjaChzdGF0ZS5kcmlsbExldmVsKSB7XG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRcdHJldHVybiBudWxsXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRjYXQgPSAnID4gJyArIHN0YXRlLmFjdGl2aXR5RGF0YS5uYW1lXG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdGJhc2UgPSAnQnkgY2F0ZWdvcnkgPiAnICsgc3RhdGUuY2F0ZWdvcnlEYXRhLm5hbWVcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHJldHVybiBiYXNlICsgY2F0XG5cdH0sXG5cblx0YmFja29uZTogKCkgPT4gc3RhdGUuc2V0TGV2ZWwoc3RhdGUuZHJpbGxMZXZlbCAtIDEsIHtkaXJlY3Rpb246ICdyZXZlcnNlJ30pLFxuXHRoaWRlbWV0YTogKCkgPT4gKCcuYWN0aXZpdHktbWV0YScpWzBdLmNsYXNzTmFtZSA9ICdzdG9yaWVzLW1ldGEgaGlkZGVuJ1xuXG59XG5cblxuZnVuY3Rpb24gaW5pdCAoKSB7XG5cdHN0YXRlLnNldExldmVsKDApIC8vIHJlc2V0cyBjbGFzc2VzIGp1c3QgaW4gY2FzZVxuXHRjYXJkcy5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdG9uKCdjbGljaycsIGl0ZW0sIGV2ZW50ID0+IHtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG5cdFx0XHRsZXQgSUQgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1jYXQnKVxuXG5cdFx0XHRpZiAoIWNhdGVnLmlzQ2FjaGVkKElEKSkge1xuXHRcdFx0XHRjYXRlZy5nZXQoSUQsIGFqYXgsIGRhdGEgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdSZXRyaWV2ZWQgbGl2ZSBkYXRhOiBJRCAjJyArIElEKVxuXHRcdFx0XHRcdHN0YXRlLmNhdGVnb3J5RGF0YSA9IGRhdGFcblx0XHRcdFx0XHRjYXRlZy5zZXRET00oZGF0YSwgc3RhdGUsIHN0b3J5LCBhamF4KVxuXHRcdFx0XHR9KVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0IGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhYnJhX2FjJytJRCkpXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdSZXRyaWV2ZWQgY2FjaGVkIGRhdGE6IElEICMnICsgSUQpXG5cdFx0XHRcdHN0YXRlLmNhdGVnb3J5RGF0YSA9IGRhdGFcblx0XHRcdFx0Y2F0ZWcuc2V0RE9NKGRhdGEsIHN0YXRlLCBzdG9yeSwgYWpheClcblx0XHRcdH1cblx0XHRcdHN0YXRlLnNldExldmVsKDEpXG5cdFx0fSlcblx0fSlcblxuXHRvbignY2xpY2snLCAnI2JhY2stYnV0dG9uJywgKCkgPT4gc3RhdGUuYmFja29uZSgpIClcbn1cbm9uKCdET01Db250ZW50TG9hZGVkJywgd2luZG93LCBpbml0KCkpXG5cblxuZnVuY3Rpb24gb24oZXZlbnQsIGVsZW1lbnQsIGNiLCBwYXNzaXZlKSB7XG5cdHZhciBlbCA9ICQoZWxlbWVudClbMF0gfHwgZWxlbWVudFxuXHRlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYiwgcGFzc2l2ZSlcbn1cbiIsImltcG9ydCAkIGZyb20gJ2JhbGFqcydcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cblx0Ly8gU3RvcnkgRnVuY3Rpb25zXG5cdGdldFJlbGF0ZWRTdG9yaWVzOiBmdW5jdGlvbiAocXVlcnksIGNhbGxiYWNrLCBheGlvcykge1xuXHRcdGF4aW9zLmdldChxdWVyeSkudGhlbihmdW5jdGlvbihyZXMpIHtcblx0XHRcdGNhbGxiYWNrKHJlcy5kYXRhKVxuXHRcdH0pLmNhdGNoKCdlcnJvcicsIGZ1bmN0aW9uIChlKSB7Y29uc29sZS53YXJuKGUpfSlcblx0fSxcblxuXHRzaG93U3Rvcnk6IGZ1bmN0aW9uIChkYXRhLCBzdGF0ZSwgYXhpb3MpIHtcblx0XHRzdGF0ZS5hY3Rpdml0eURhdGEubmFtZSA9IGRhdGEudGl0bGUucmVuZGVyZWRcblxuXHRcdCQoJyNhY3Rpdml0eS10aXRsZScpWzBdLmlubmVySFRNTCA9IGRhdGEudGl0bGUucmVuZGVyZWRcblx0XHQkKCcjYWN0aXZpdHkgaGVhZGVyIHNwYW4nKVswXS5pbm5lckhUTUwgPSBzdGF0ZS5nZXRCcmVhZGNydW1iKClcblxuXHRcdC8vIE92ZXJ2aWV3LCB0YWIgMSwgY29udGFpbnM6IG9iamVjdGl2ZSwgZ2ZhIHRpcHMsIGxldmVsc1xuXHRcdCQoJyNhLWRlc2MtYycpWzBdLmlubmVySFRNTCA9ICc8aDQ+T3ZlcnZpZXc8L2g0Pidcblx0XHRcdCsgZGF0YS5hY3Rpdml0eV9kZXNjcmlwdGlvbl9hY3Rpdml0eV9vYmplY3RpdmVcblx0XHQkKCcjYS1nZmEtYycpWzBdLmlubmVySFRNTCA9ICc8aDQ+R3JvdXAgRmFjaWxpdGF0aW9uIFRpcHM8L2g0Pidcblx0XHRcdCsgZGF0YS5hY3Rpdml0eV9kZXNjcmlwdGlvbl9hY3Rpdml0eV9nZmFcblx0XHQkKCcjYS1sZXZlbC1jJylbMF0uaW5uZXJIVE1MID0gJzxoND5MZXZlbHM8L2g0Pidcblx0XHRcdCsgZGF0YS5hY3Rpdml0eV9kZXNjcmlwdGlvbl9hY3Rpdml0eV9sZXZlbFxuXG5cdFx0Ly8gQWN0aXZpdHkgSW5zaWdodHNcblx0XHQvLyBjaGVjayBpZiBoYXMgaW5zaWdodHMsIGRpc3BsYXkgaW5zaWdodHM/XG5cdFx0JCgnI2EtaW5zaWdodHMtYycpWzBdLmlubmVySFRNTCA9ICc8aDQ+QWN0aXZpdHkgSW5zaWdodHM8L2g0Pidcblx0XHRcdCsgZGF0YS5hY3Rpdml0eV9pbnNpZ2h0c1xuXG5cdFx0Ly8gTGlua2VkIFN0b3JpZXMsIHRhYiAzXG5cdFx0dGhpcy5nZXRTdG9yaWVzSW5DYXQoZGF0YS5hY3Rpdml0eV9saW5rZWRfc3RvcmllcywgYXhpb3MpXG5cblx0XHQvLyBSZXNvdXJjZXMsIHRhYiA0XG5cdFx0bGV0IHJlc2NvbnRlbnQgPSAkKCcjYS1yZXNvdXJjZXMtYycpWzBdXG5cdFx0aWYgKGRhdGEuYWN0aXZpdHlfcmVzb3VyY2VzICE9ICcnKSB7XG5cdFx0XHRyZXNjb250ZW50LmlubmVySFRNTCA9ICc8aDQ+UmVzb3VyY2VzPC9oND4nICsgZGF0YS5hY3Rpdml0eV9yZXNvdXJjZXNcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzY29udGVudC5pbm5lckhUTUwgPSAnVGhpcyBhY3Rpdml0eSBjdXJyZW50bHkgZG9lcyBub3QgaGF2ZSBhbnkgYWRkaXRpb25hbCByZXNvdXJjZXMuJ1xuXHRcdH1cblxuXHRcdCQoJyNhY3Rpdml0eS12aWRlby1jb250YWluZXInKVswXS5pbm5lckhUTUwgPSB0aGlzLm1ha2VFbWJlZExpbmsoZGF0YS5hY3Rpdml0eV92aWRlbylcblx0fSxcblxuXHRtYWtlVGFiQ29udGFpbmVyKCkge1xuXHRcdGNvbnN0IHRhYnMgPSAkKCcuYWN0aXZpdHlfX25hdi50YWJzIGxpJykgLy8gR2V0IGFsbCB0YWJzXG5cblx0XHR0YWJzLmZvckVhY2godGFiID0+IHtcblx0XHRcdGxldCBsaW5rID0gdGFiLmZpcnN0Q2hpbGRcblxuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblxuXHRcdFx0XHQvLyBHZXQgbG9jYXRpb24gb2YgdGFiJ3MgY29udGVudCAoaHJlZiA9PiBpZClcblx0XHRcdFx0bGV0IGNvbnRlbnRUYWIgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpXG5cblx0XHRcdFx0Ly8gU2V0IG90aGVyIHRhYnMgJiBuYXYgbGFiZXMgYXMgaW5hY3RpdmVcblx0XHRcdFx0JCgnLnRhYnMtY29udGVudCBkaXYnKS5mb3JFYWNoKCB0ID0+IHQuY2xhc3NOYW1lID0gJycgKVxuXHRcdFx0XHQkKCcudGFicyBsaScpLmZvckVhY2goIGwgPT4gbC5jbGFzc05hbWUgPSAnJyApXG5cblx0XHRcdFx0Ly8gU2V0IHNlbGVjdGVkIHRhYiAmIG5hdiBpdGVtIGFjdGl2ZVxuXHRcdFx0XHR0YWIuY2xhc3NOYW1lID0gJ2FjdGl2ZSdcblx0XHRcdFx0JChjb250ZW50VGFiKVswXS5jbGFzc05hbWUgPSAnYWN0aXZlJ1xuXHRcdFx0fSk7XG5cdFx0fSlcblx0fSxcblxuXHRzZXRBY3Rpdml0eUljb24gKHF1ZXJ5LCBheGlvcykge1xuXHRcdGF4aW9zLmdldCgnbWVkaWE/cGFyZW50PScgKyBxdWVyeSkudGhlbigocmVzKSA9PiB7XG5cdFx0XHQkKCcjYWN0aXZpdHktaWNvbicpWzBdLmlubmVySFRNTCA9ICcnIC8vIGNsZWFyIG9sZCBpbWFnZSBlbGVtc1xuXHRcdFx0Y29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5cdFx0XHRcdGljb24uc3R5bGUub3BhY2l0eSA9IDBcblx0XHRcdFx0aWNvbi5vbmxvYWQgPSAoKSA9PiB7ICQoJyNhY3Rpdml0eS1pY29uIGltZycpWzBdLnN0eWxlLm9wYWNpdHkgPSAxIH1cblx0XHRcdFx0aWNvbi5zcmMgPSByZXMuZGF0YVswXS5tZWRpYV9kZXRhaWxzLnNpemVzLnRodW1ibmFpbC5zb3VyY2VfdXJsXG5cdFx0XHRcdGljb24uYWx0ID0gcmVzLmRhdGFbMF0uYWx0X3RleHRcblx0XHRcdCQoJyNhY3Rpdml0eS1pY29uJylbMF0uYXBwZW5kQ2hpbGQoaWNvbilcblx0XHR9KS5jYXRjaCgnZXJyb3InLCBlID0+IGNvbnNvbGUud2FybihlKSlcblx0fSxcblxuXHRzZXRBY3Rpdml0eUxpc3RJY29uIChxdWVyeSwgYXhpb3MsIGVsZW1lbnQpIHtcblx0XHRheGlvcy5nZXQoJ21lZGlhP3BhcmVudD0nICsgcXVlcnkpLnRoZW4oKHJlcykgPT4ge1xuXHRcdFx0Y29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG5cdFx0XHRcdGljb24uc3R5bGUub3BhY2l0eSA9IDBcblx0XHRcdFx0aWNvbi5jbGFzc05hbWUgPSAnbGltYWdlJ1xuXHRcdFx0XHRpY29uLm9ubG9hZCA9ICgpID0+IGljb24uc3R5bGUub3BhY2l0eSA9IDFcblx0XHRcdFx0aWNvbi5zcmMgPSByZXMuZGF0YVswXS5tZWRpYV9kZXRhaWxzLnNpemVzLnRodW1ibmFpbC5zb3VyY2VfdXJsXG5cdFx0XHRcdGljb24uYWx0ID0gcmVzLmRhdGFbMF0uYWx0X3RleHRcblx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoaWNvbilcblx0XHR9KS5jYXRjaCgnZXJyb3InLCBlID0+IGNvbnNvbGUud2FybihlKSlcblx0fSxcblxuXHRnZXRTdG9yaWVzSW5DYXQgKHN0b3JpZXMsIGF4aW9zKSB7XG5cdFx0Ly8gbGV0IHF1ZXJ5ID0gJ3N0b3J5Pydcblx0XHRsZXQgcXVlcnkgPSAnc3Rvcnk/cGVyX3BhZ2U9MTAwJmluY2x1ZGVbXT0nXG5cblx0XHRmb3IgKGxldCBpID0gc3Rvcmllcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0Ly8gcXVlcnkgKz0gJ2luY2x1ZGVbXT0nICsgc3Rvcmllc1tpXSArICcmJ1xuXHRcdFx0cXVlcnkgKz0gc3Rvcmllc1tpXSArICcsJ1xuXHRcdH1cblx0XHRxdWVyeSA9IHF1ZXJ5LnNsaWNlKDAsIC0xKSAvLyByZW1vdmUgbGFzdCBhbXBlcnNhbmRcblx0XHRjb25zb2xlLmxvZyhxdWVyeSlcblxuXHRcdGF4aW9zLmdldChxdWVyeSkudGhlbiggcmVzID0+IHtcblx0XHRcdGxldCByZXR2YWwgPSAnPHVsPidcblx0XHRcdGZvciAodmFyIGkgPSByZXMuZGF0YS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0XHRyZXR2YWwgKz0gJzxsaT48YSBocmVmPVwiJ1xuXHRcdFx0XHRcdCsgcmVzLmRhdGFbaV0ubGlua1xuXHRcdFx0XHRcdCsgJ1wiPidcblx0XHRcdFx0XHQrIHJlcy5kYXRhW2ldLnRpdGxlLnJlbmRlcmVkXG5cdFx0XHRcdFx0KyAnPC9hPjwvbGk+J1xuXHRcdFx0fVxuXHRcdFx0cmV0dmFsICsgJzwvdWw+J1xuXG5cdFx0XHQkKCcjYS1yZWxhdGVkLWMnKVswXS5pbm5lckhUTUwgPSAgJzxoND5MaW5rZWQgU3RvcmllczwvaDQ+J1xuXHRcdFx0KyAnRWFjaCBsaW5rIHBvaW50cyB0byBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFuZCBhIHBkZiBkb3dubG9hZCB0byBlYWNoIHN0b3J5J1xuXHRcdFx0KyByZXR2YWxcblx0XHR9KS5jYXRjaCgnZXJyb3InLCBlID0+IHsgY29uc29sZS53YXJuKGUpIH0pXG5cdH0sXG5cblx0bWFrZUVtYmVkTGluayhsaW5rKSB7XG4gICAgbGV0IHJlZ0V4cCA9IC9eLiooeW91dHUuYmVcXC98dlxcL3x1XFwvXFx3XFwvfGVtYmVkXFwvfHdhdGNoXFw/dj18XFwmdj0pKFteI1xcJlxcP10qKS4qLztcbiAgICBsZXQgbWF0Y2ggPSBsaW5rLm1hdGNoKHJlZ0V4cCk7XG5cbiAgICBpZiAobWF0Y2ggJiYgbWF0Y2hbMl0ubGVuZ3RoICE9IDExKSB7XG4gICAgICByZXR1cm4gJ2Vycm9yJztcbiAgICB9XG5cblx0XHRsZXQgZW1iZWQgPSAnPGlmcmFtZSB3aWR0aD1cIjU2MFwiIGhlaWdodD1cIjMxNVwiIHNyYz1cIi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLydcblx0XHRyZXR1cm4gZW1iZWQgKyBtYXRjaFsyXSArICdcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+J1xuXHR9XG59IiwiaW1wb3J0ICQgZnJvbSAnYmFsYWpzJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0aXNDYWNoZWQ6IGZ1bmN0aW9uIChJRCkge1xuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWJyYV9hYycgKyBJRCkgPyB0cnVlIDogZmFsc2Vcblx0fSxcblxuXHRjYWNoZTogZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWJyYV9hYycgKyBkYXRhLmlkLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcblx0fSxcblxuXHRnZXQ6IGZ1bmN0aW9uIChjYXRJRCwgYXhpb3MsIGNhbGxiYWNrKSB7XG5cdFx0YXhpb3MuZ2V0KCdhY3Rpdml0eV9jYXQvJyArIGNhdElEKS50aGVuKCByZXNwb25zZSA9PiB7XG5cdFx0XHR0aGlzLmNhY2hlKHJlc3BvbnNlLmRhdGEpXG5cdFx0XHRjYWxsYmFjayhyZXNwb25zZS5kYXRhKVxuXHRcdH0pLmNhdGNoKCdlcnJvcicsIGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS53YXJuKGVycm9yKVxuXHRcdFx0cmV0dXJuIG51bGxcblx0XHR9KVxuXHR9LFxuXG5cdHNldERPTTogZnVuY3Rpb24gKGNhdCwgc3RhdGUsIHN0b3J5LCBheGlvcykge1xuXHRcdGNvbnN0IGNtID0gJyNjYXQtbWV0YSdcblx0XHRjb25zdCBjID0gJChjbSlbMF1cblxuXHRcdC8vIHNldCBtZXRhIGRlc2NyaXB0aW9uXG5cdFx0JChjbSArICdfX2hlYWRlciBoMicpWzBdLmlubmVySFRNTCA9IGNhdC5uYW1lXG5cdFx0JChjbSArICdfX2hlYWRlciBzcGFuJylbMF0uaW5uZXJIVE1MID0gc3RhdGUuZ2V0QnJlYWRjcnVtYigpXG5cdFx0aWYgKHdpbmRvdy5hY3Rpdml0eWRlc2NbY2F0LmlkXSkge1xuXHRcdFx0XHQkKGNtICsgJ19fY29udGVudCcpWzBdLmlubmVySFRNTCA9IHdpbmRvdy5hY3Rpdml0eWRlc2NbY2F0LmlkXVxuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKGNtICsgJ19fY29udGVudCcpWzBdLmlubmVySFRNTCA9IGNhdC5kZXNjcmlwdGlvblxuXHRcdH1cblxuXHRcdC8vIHNldCBhc3luY1xuXHRcdHNldFRpbWVvdXQoXG5cdFx0XHRzdG9yeS5nZXRSZWxhdGVkU3RvcmllcygnYWN0aXZpdHk/cGVyX3BhZ2U9MTAwJmFjdGl2aXR5X2NhdD0nICsgY2F0LmlkLCBzdG9yaWVzID0+IHtcblx0XHRcdFx0Y29uc29sZS5ncm91cCgnJWMgUmVsYXRlZCBTdG9yaWVzIGZvciBJRCAjJyArIGNhdC5pZCwgJ2NvbG9yOiAjRjc1QzAzJylcblx0XHRcdFx0Y29uc29sZS5pbmZvKCdTdG9yaWVzOiAnLCBzdG9yaWVzKVxuXG5cdFx0XHRcdGNvbnN0IGxpc3QgPSAkKCcjY2F0LW1ldGFfX2xpc3QnKVswXVxuXHRcdFx0XHRsaXN0LmNsYXNzTmFtZSA9ICdpc1JlZnJlc2hpbmcnXG5cdFx0XHRcdGxpc3QuaW5uZXJIVE1MID0gJydcblxuXHRcdFx0XHQvLyBjcmVhdGUgc3RvcnkgcHJldmlld3Ncblx0XHRcdFx0Zm9yIChsZXQgaSA9IHN0b3JpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcblx0XHRcdFx0XHRsZXQgcyA9IHN0b3JpZXNbaV1cblxuXHRcdFx0XHRcdGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdFx0XHRcdFx0ZWwuY2xhc3NOYW1lID0gJ2FjdGl2aXR5LWl0ZW0nXG5cdFx0XHRcdFx0ZWwuc2V0QXR0cmlidXRlKCdkYXRhLXN0b3J5Jywgcy5pZClcblx0XHRcdFx0XHRlbC5pbm5lckhUTUwgPSAnPGgzPicgKyBzLnRpdGxlLnJlbmRlcmVkICsgJzwvaDM+J1xuXHRcdFx0XHRcdHN0b3J5LnNldEFjdGl2aXR5TGlzdEljb24ocy5pZCwgYXhpb3MsIGVsKVxuXG5cdFx0XHRcdFx0bGlzdC5hcHBlbmRDaGlsZChlbClcblxuXHRcdFx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c3RhdGUuc2V0TGV2ZWwoMilcblxuXHRcdFx0XHRcdFx0Ly8gc3RhdGUucHVzaFN0YXRlKHMpXG5cblx0XHRcdFx0XHRcdHN0b3J5Lm1ha2VUYWJDb250YWluZXIoKVxuXHRcdFx0XHRcdFx0c3Rvcnkuc2hvd1N0b3J5KHMsIHN0YXRlLCBheGlvcylcblx0XHRcdFx0XHRcdHN0b3J5LnNldEFjdGl2aXR5SWNvbihzLmlkLCBheGlvcylcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29uc29sZS5ncm91cEVuZCgpXG5cblx0XHRcdFx0bGlzdC5jbGFzc05hbWUgPSAnJ1xuXHRcdFx0fSwgYXhpb3Ncblx0XHQpLCAwKVxuXHR9XG59XG4iXX0=
