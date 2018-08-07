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

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _state = require('./state.js');

var _state2 = _interopRequireDefault(_state);

var _helpers = require('./util/helpers.js');

var _activity = require('./util/activity.js');

var _activity2 = _interopRequireDefault(_activity);

var _cat = require('./util/cat.js');

var _cat2 = _interopRequireDefault(_cat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Axios, our AJAX lib

// Virtual DOM
_axios2.default.create({
	baseURL: 'https://doe.concordia.ca/cslp/wp-json/wp/v2/'
});

// App state and routing
// DOM selector engine

var state = new _state2.default();

// Helpers


// App components


// DOM
var container = _balajs2.default.one('#activities__by-cat');
var cards = (0, _balajs2.default)('.category-card');
var drilldown = _balajs2.default.one('#drilldown');
var activity = _balajs2.default.one('#activity');
var catMeta = _balajs2.default.one('#cat-meta');

//hidemeta: () => ('.activity-meta')[0].className = 'stories-meta hidden',

// NEW
// testURL: () => {
// 	console.groupCollapsed('%c History state', 'color: #35B5FF')
// 	console.info(window.history)

// 	// TODO: return if URL is valid, and set state accordingly
// 	if (window.location.href) {}
// 	console.groupEnd()
// }

// pushState: (data) => {
// 	if (history.pushState) {
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
	// state.testURL()
	state.setDrillLevel(0); // resets classes just in case

	cards.forEach(function (item) {
		(0, _helpers.on)('click', _balajs2.default.one(item), function (event) {

			event.preventDefault();

			var ID = item.getAttribute('data-cat');

			if (!_cat2.default.isCached(ID)) {
				_cat2.default.get(ID, ajax, function (data) {
					console.log('Retrieved live data: ID #' + ID);
					setSelectedCategory(data);
				});
			} else {
				var data = JSON.parse(localStorage.getItem('abra_ac' + ID));
				console.log('Retrieved cached data: ID #' + ID);
				setSelectedCategory(data);
			}
			state.setLevel(1);
		});
	});

	(0, _helpers.on)('click', _balajs2.default.one('#back-button'), function () {
		return state.backone();
	});
}
(0, _helpers.on)('DOMContentLoaded', window, init());

// select
function setSelectedCategory(data) {
	state.pushState(data);
	state.categoryData = data;
	_cat2.default.setDOM(data, state, _activity2.default, ajax);
}

},{"./state.js":35,"./util/activity.js":36,"./util/cat.js":37,"./util/helpers.js":38,"axios":2,"balajs":27,"petit-dom":30}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _hasher = require('hasher');

var _hasher2 = _interopRequireDefault(_hasher);

var _balajs = require('balajs');

var _balajs2 = _interopRequireDefault(_balajs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var anime = require('animejs');

var Router = function () {
	function Router() {
		_classCallCheck(this, Router);

		// add hash change listener
		_hasher2.default.changed.add(this.handleHashChange);
		// add initialized listener (to grab initial value in case it is already set)
		_hasher2.default.initialized.add(this.handleHashChange);
		// initialize hasher (start listening for history changes)
		_hasher2.default.init();
	}

	_createClass(Router, [{
		key: 'navigate',
		value: function navigate() {
			var hashtring = 'foo';

			// change hash value (generates new history record)
			_hasher2.default.setHash(hashtring);
		}
	}, {
		key: 'handleHashChange',
		value: function handleHashChange(newHash, oldHash) {
			console.log('%c newhash: ' + newHash, 'background: blue');
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
					anime({
						targets: '.activities-meta p',
						opacity: [0, 1],
						duration: 500,
						easing: 'easeOutExpo',
						reverse: dir,
						complete: function complete() {
							anime({
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

				// Activity Item
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
		}
	}]);

	return Router;
}();

exports.default = Router;

},{"animejs":1,"balajs":27,"hasher":28}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _router = require('./router.js');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var r = new _router2.default();

var State = function () {
	function State() {
		_classCallCheck(this, State);

		this.drillLevel = 0;
		this.active = 'none';
		this.categoryData = {};
		this.activityData = {};
		this.history = {};
	}

	_createClass(State, [{
		key: 'setDrillLevel',
		value: function setDrillLevel(level) {
			var direction = this.drillLevel > level ? '' : 'reverse';
			this.drillLevel = level;

			r.goto(level, direction);
		}
	}, {
		key: 'getBreadcrumb',
		value: function getBreadcrumb() {
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
		}
	}, {
		key: 'backone',
		value: function backone() {
			this.setDrillLevel(this.drillLevel - 1);
		}
	}]);

	return State;
}();

exports.default = State;

},{"./router.js":34}],36:[function(require,module,exports){
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

},{"balajs":27}],37:[function(require,module,exports){
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
		(0, _balajs2.default)(cm + '__content')[0].innerHTML = cat.description;

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

					state.pushState(s);

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

},{"balajs":27}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.on = on;
function on(action, elem, cb, passive) {
	elem.addEventListener(action, cb, passive);
}

},{}]},{},[33])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYW5pbWVqcy9hbmltZS5taW4uanMiLCJub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZW5oYW5jZUVycm9yLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS90cmFuc2Zvcm1EYXRhLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2J0b2EuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwibm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIm5vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL2JhbGFqcy9lczUvYmFsYS51bWQuanMiLCJub2RlX21vZHVsZXMvaGFzaGVyL2Rpc3QvanMvaGFzaGVyLmpzIiwibm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9wZXRpdC1kb20vZGlzdC9wZXRpdC1kb20ubWluLmpzIiwibm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9zaWduYWxzL2Rpc3Qvc2lnbmFscy5qcyIsInNyYy9zY3JpcHRzL2FjdGl2aXRpZXMvYWN0aXZpdGllcy5qcyIsInNyYy9zY3JpcHRzL2FjdGl2aXRpZXMvcm91dGVyLmpzIiwic3JjL3NjcmlwdHMvYWN0aXZpdGllcy9zdGF0ZS5qcyIsInNyYy9zY3JpcHRzL2FjdGl2aXRpZXMvdXRpbC9hY3Rpdml0eS5qcyIsInNyYy9zY3JpcHRzL2FjdGl2aXRpZXMvdXRpbC9jYXQuanMiLCJzcmMvc2NyaXB0cy9hY3Rpdml0aWVzL3V0aWwvaGVscGVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNoQ0E7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDcExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6YkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LEVBQWlDLEtBQUssQ0FBdEMsRUFBeUMsR0FBekMsRUFBOEM7QUFBQSxVQUFyQyxDQUFxQztBQW9CN0M7O0FBRUQsV0FBUSxRQUFSOztBQUVBLFFBQUssU0FBTCxHQUFpQixFQUFqQjtBQUNBLEdBbENELEVBa0NHLEtBbENILENBREQsRUFvQ0csQ0FwQ0g7QUFxQ0E7QUFsRWUsQ0FBakI7Ozs7Ozs7O1FDRGdCLEUsR0FBQSxFO0FBQVQsU0FBUyxFQUFULENBQWEsTUFBYixFQUFxQixJQUFyQixFQUEyQixFQUEzQixFQUErQixPQUEvQixFQUF3QztBQUM5QyxNQUFLLGdCQUFMLENBQXNCLE1BQXRCLEVBQThCLEVBQTlCLEVBQWtDLE9BQWxDO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKlxuIDIwMTcgSnVsaWFuIEdhcm5pZXJcbiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiovXG52YXIgJGpzY29tcD17c2NvcGU6e319OyRqc2NvbXAuZGVmaW5lUHJvcGVydHk9XCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmRlZmluZVByb3BlcnRpZXM/T2JqZWN0LmRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKGUscixwKXtpZihwLmdldHx8cC5zZXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkVTMyBkb2VzIG5vdCBzdXBwb3J0IGdldHRlcnMgYW5kIHNldHRlcnMuXCIpO2UhPUFycmF5LnByb3RvdHlwZSYmZSE9T2JqZWN0LnByb3RvdHlwZSYmKGVbcl09cC52YWx1ZSl9OyRqc2NvbXAuZ2V0R2xvYmFsPWZ1bmN0aW9uKGUpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdz09PWU/ZTpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsJiZudWxsIT1nbG9iYWw/Z2xvYmFsOmV9OyRqc2NvbXAuZ2xvYmFsPSRqc2NvbXAuZ2V0R2xvYmFsKHRoaXMpOyRqc2NvbXAuU1lNQk9MX1BSRUZJWD1cImpzY29tcF9zeW1ib2xfXCI7XG4kanNjb21wLmluaXRTeW1ib2w9ZnVuY3Rpb24oKXskanNjb21wLmluaXRTeW1ib2w9ZnVuY3Rpb24oKXt9OyRqc2NvbXAuZ2xvYmFsLlN5bWJvbHx8KCRqc2NvbXAuZ2xvYmFsLlN5bWJvbD0kanNjb21wLlN5bWJvbCl9OyRqc2NvbXAuc3ltYm9sQ291bnRlcl89MDskanNjb21wLlN5bWJvbD1mdW5jdGlvbihlKXtyZXR1cm4gJGpzY29tcC5TWU1CT0xfUFJFRklYKyhlfHxcIlwiKSskanNjb21wLnN5bWJvbENvdW50ZXJfKyt9O1xuJGpzY29tcC5pbml0U3ltYm9sSXRlcmF0b3I9ZnVuY3Rpb24oKXskanNjb21wLmluaXRTeW1ib2woKTt2YXIgZT0kanNjb21wLmdsb2JhbC5TeW1ib2wuaXRlcmF0b3I7ZXx8KGU9JGpzY29tcC5nbG9iYWwuU3ltYm9sLml0ZXJhdG9yPSRqc2NvbXAuZ2xvYmFsLlN5bWJvbChcIml0ZXJhdG9yXCIpKTtcImZ1bmN0aW9uXCIhPXR5cGVvZiBBcnJheS5wcm90b3R5cGVbZV0mJiRqc2NvbXAuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLGUse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpmdW5jdGlvbigpe3JldHVybiAkanNjb21wLmFycmF5SXRlcmF0b3IodGhpcyl9fSk7JGpzY29tcC5pbml0U3ltYm9sSXRlcmF0b3I9ZnVuY3Rpb24oKXt9fTskanNjb21wLmFycmF5SXRlcmF0b3I9ZnVuY3Rpb24oZSl7dmFyIHI9MDtyZXR1cm4gJGpzY29tcC5pdGVyYXRvclByb3RvdHlwZShmdW5jdGlvbigpe3JldHVybiByPGUubGVuZ3RoP3tkb25lOiExLHZhbHVlOmVbcisrXX06e2RvbmU6ITB9fSl9O1xuJGpzY29tcC5pdGVyYXRvclByb3RvdHlwZT1mdW5jdGlvbihlKXskanNjb21wLmluaXRTeW1ib2xJdGVyYXRvcigpO2U9e25leHQ6ZX07ZVskanNjb21wLmdsb2JhbC5TeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O3JldHVybiBlfTskanNjb21wLmFycmF5PSRqc2NvbXAuYXJyYXl8fHt9OyRqc2NvbXAuaXRlcmF0b3JGcm9tQXJyYXk9ZnVuY3Rpb24oZSxyKXskanNjb21wLmluaXRTeW1ib2xJdGVyYXRvcigpO2UgaW5zdGFuY2VvZiBTdHJpbmcmJihlKz1cIlwiKTt2YXIgcD0wLG09e25leHQ6ZnVuY3Rpb24oKXtpZihwPGUubGVuZ3RoKXt2YXIgdT1wKys7cmV0dXJue3ZhbHVlOnIodSxlW3VdKSxkb25lOiExfX1tLm5leHQ9ZnVuY3Rpb24oKXtyZXR1cm57ZG9uZTohMCx2YWx1ZTp2b2lkIDB9fTtyZXR1cm4gbS5uZXh0KCl9fTttW1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gbX07cmV0dXJuIG19O1xuJGpzY29tcC5wb2x5ZmlsbD1mdW5jdGlvbihlLHIscCxtKXtpZihyKXtwPSRqc2NvbXAuZ2xvYmFsO2U9ZS5zcGxpdChcIi5cIik7Zm9yKG09MDttPGUubGVuZ3RoLTE7bSsrKXt2YXIgdT1lW21dO3UgaW4gcHx8KHBbdV09e30pO3A9cFt1XX1lPWVbZS5sZW5ndGgtMV07bT1wW2VdO3I9cihtKTtyIT1tJiZudWxsIT1yJiYkanNjb21wLmRlZmluZVByb3BlcnR5KHAsZSx7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOnJ9KX19OyRqc2NvbXAucG9seWZpbGwoXCJBcnJheS5wcm90b3R5cGUua2V5c1wiLGZ1bmN0aW9uKGUpe3JldHVybiBlP2U6ZnVuY3Rpb24oKXtyZXR1cm4gJGpzY29tcC5pdGVyYXRvckZyb21BcnJheSh0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiBlfSl9fSxcImVzNi1pbXBsXCIsXCJlczNcIik7dmFyICRqc2NvbXAkdGhpcz10aGlzO1xuKGZ1bmN0aW9uKGUscil7XCJmdW5jdGlvblwiPT09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10scik6XCJvYmplY3RcIj09PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPXIoKTplLmFuaW1lPXIoKX0pKHRoaXMsZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGEpe2lmKCFoLmNvbChhKSl0cnl7cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYSl9Y2F0Y2goYyl7fX1mdW5jdGlvbiByKGEsYyl7Zm9yKHZhciBkPWEubGVuZ3RoLGI9Mjw9YXJndW1lbnRzLmxlbmd0aD9hcmd1bWVudHNbMV06dm9pZCAwLGY9W10sbj0wO248ZDtuKyspaWYobiBpbiBhKXt2YXIgaz1hW25dO2MuY2FsbChiLGssbixhKSYmZi5wdXNoKGspfXJldHVybiBmfWZ1bmN0aW9uIHAoYSl7cmV0dXJuIGEucmVkdWNlKGZ1bmN0aW9uKGEsZCl7cmV0dXJuIGEuY29uY2F0KGguYXJyKGQpP3AoZCk6ZCl9LFtdKX1mdW5jdGlvbiBtKGEpe2lmKGguYXJyKGEpKXJldHVybiBhO1xuaC5zdHIoYSkmJihhPWUoYSl8fGEpO3JldHVybiBhIGluc3RhbmNlb2YgTm9kZUxpc3R8fGEgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbj9bXS5zbGljZS5jYWxsKGEpOlthXX1mdW5jdGlvbiB1KGEsYyl7cmV0dXJuIGEuc29tZShmdW5jdGlvbihhKXtyZXR1cm4gYT09PWN9KX1mdW5jdGlvbiBDKGEpe3ZhciBjPXt9LGQ7Zm9yKGQgaW4gYSljW2RdPWFbZF07cmV0dXJuIGN9ZnVuY3Rpb24gRChhLGMpe3ZhciBkPUMoYSksYjtmb3IoYiBpbiBhKWRbYl09Yy5oYXNPd25Qcm9wZXJ0eShiKT9jW2JdOmFbYl07cmV0dXJuIGR9ZnVuY3Rpb24geihhLGMpe3ZhciBkPUMoYSksYjtmb3IoYiBpbiBjKWRbYl09aC51bmQoYVtiXSk/Y1tiXTphW2JdO3JldHVybiBkfWZ1bmN0aW9uIFQoYSl7YT1hLnJlcGxhY2UoL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaSxmdW5jdGlvbihhLGMsZCxrKXtyZXR1cm4gYytjK2QrZCtrK2t9KTt2YXIgYz0vXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoYSk7XG5hPXBhcnNlSW50KGNbMV0sMTYpO3ZhciBkPXBhcnNlSW50KGNbMl0sMTYpLGM9cGFyc2VJbnQoY1szXSwxNik7cmV0dXJuXCJyZ2JhKFwiK2ErXCIsXCIrZCtcIixcIitjK1wiLDEpXCJ9ZnVuY3Rpb24gVShhKXtmdW5jdGlvbiBjKGEsYyxiKXswPmImJihiKz0xKTsxPGImJi0tYjtyZXR1cm4gYjwxLzY/YSs2KihjLWEpKmI6LjU+Yj9jOmI8Mi8zP2ErKGMtYSkqKDIvMy1iKSo2OmF9dmFyIGQ9L2hzbFxcKChcXGQrKSxcXHMqKFtcXGQuXSspJSxcXHMqKFtcXGQuXSspJVxcKS9nLmV4ZWMoYSl8fC9oc2xhXFwoKFxcZCspLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKyklLFxccyooW1xcZC5dKylcXCkvZy5leGVjKGEpO2E9cGFyc2VJbnQoZFsxXSkvMzYwO3ZhciBiPXBhcnNlSW50KGRbMl0pLzEwMCxmPXBhcnNlSW50KGRbM10pLzEwMCxkPWRbNF18fDE7aWYoMD09YilmPWI9YT1mO2Vsc2V7dmFyIG49LjU+Zj9mKigxK2IpOmYrYi1mKmIsaz0yKmYtbixmPWMoayxuLGErMS8zKSxiPWMoayxuLGEpO2E9YyhrLG4sYS0xLzMpfXJldHVyblwicmdiYShcIitcbjI1NSpmK1wiLFwiKzI1NSpiK1wiLFwiKzI1NSphK1wiLFwiK2QrXCIpXCJ9ZnVuY3Rpb24geShhKXtpZihhPS8oW1xcK1xcLV0/WzAtOSNcXC5dKykoJXxweHxwdHxlbXxyZW18aW58Y218bW18ZXh8Y2h8cGN8dnd8dmh8dm1pbnx2bWF4fGRlZ3xyYWR8dHVybik/JC8uZXhlYyhhKSlyZXR1cm4gYVsyXX1mdW5jdGlvbiBWKGEpe2lmKC0xPGEuaW5kZXhPZihcInRyYW5zbGF0ZVwiKXx8XCJwZXJzcGVjdGl2ZVwiPT09YSlyZXR1cm5cInB4XCI7aWYoLTE8YS5pbmRleE9mKFwicm90YXRlXCIpfHwtMTxhLmluZGV4T2YoXCJza2V3XCIpKXJldHVyblwiZGVnXCJ9ZnVuY3Rpb24gSShhLGMpe3JldHVybiBoLmZuYyhhKT9hKGMudGFyZ2V0LGMuaWQsYy50b3RhbCk6YX1mdW5jdGlvbiBFKGEsYyl7aWYoYyBpbiBhLnN0eWxlKXJldHVybiBnZXRDb21wdXRlZFN0eWxlKGEpLmdldFByb3BlcnR5VmFsdWUoYy5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLFwiJDEtJDJcIikudG9Mb3dlckNhc2UoKSl8fFwiMFwifWZ1bmN0aW9uIEooYSxjKXtpZihoLmRvbShhKSYmXG51KFcsYykpcmV0dXJuXCJ0cmFuc2Zvcm1cIjtpZihoLmRvbShhKSYmKGEuZ2V0QXR0cmlidXRlKGMpfHxoLnN2ZyhhKSYmYVtjXSkpcmV0dXJuXCJhdHRyaWJ1dGVcIjtpZihoLmRvbShhKSYmXCJ0cmFuc2Zvcm1cIiE9PWMmJkUoYSxjKSlyZXR1cm5cImNzc1wiO2lmKG51bGwhPWFbY10pcmV0dXJuXCJvYmplY3RcIn1mdW5jdGlvbiBYKGEsYyl7dmFyIGQ9VihjKSxkPS0xPGMuaW5kZXhPZihcInNjYWxlXCIpPzE6MCtkO2E9YS5zdHlsZS50cmFuc2Zvcm07aWYoIWEpcmV0dXJuIGQ7Zm9yKHZhciBiPVtdLGY9W10sbj1bXSxrPS8oXFx3KylcXCgoLis/KVxcKS9nO2I9ay5leGVjKGEpOylmLnB1c2goYlsxXSksbi5wdXNoKGJbMl0pO2E9cihuLGZ1bmN0aW9uKGEsYil7cmV0dXJuIGZbYl09PT1jfSk7cmV0dXJuIGEubGVuZ3RoP2FbMF06ZH1mdW5jdGlvbiBLKGEsYyl7c3dpdGNoKEooYSxjKSl7Y2FzZSBcInRyYW5zZm9ybVwiOnJldHVybiBYKGEsYyk7Y2FzZSBcImNzc1wiOnJldHVybiBFKGEsYyk7Y2FzZSBcImF0dHJpYnV0ZVwiOnJldHVybiBhLmdldEF0dHJpYnV0ZShjKX1yZXR1cm4gYVtjXXx8XG4wfWZ1bmN0aW9uIEwoYSxjKXt2YXIgZD0vXihcXCo9fFxcKz18LT0pLy5leGVjKGEpO2lmKCFkKXJldHVybiBhO3ZhciBiPXkoYSl8fDA7Yz1wYXJzZUZsb2F0KGMpO2E9cGFyc2VGbG9hdChhLnJlcGxhY2UoZFswXSxcIlwiKSk7c3dpdGNoKGRbMF1bMF0pe2Nhc2UgXCIrXCI6cmV0dXJuIGMrYStiO2Nhc2UgXCItXCI6cmV0dXJuIGMtYStiO2Nhc2UgXCIqXCI6cmV0dXJuIGMqYStifX1mdW5jdGlvbiBGKGEsYyl7cmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhjLngtYS54LDIpK01hdGgucG93KGMueS1hLnksMikpfWZ1bmN0aW9uIE0oYSl7YT1hLnBvaW50cztmb3IodmFyIGM9MCxkLGI9MDtiPGEubnVtYmVyT2ZJdGVtcztiKyspe3ZhciBmPWEuZ2V0SXRlbShiKTswPGImJihjKz1GKGQsZikpO2Q9Zn1yZXR1cm4gY31mdW5jdGlvbiBOKGEpe2lmKGEuZ2V0VG90YWxMZW5ndGgpcmV0dXJuIGEuZ2V0VG90YWxMZW5ndGgoKTtzd2l0Y2goYS50YWdOYW1lLnRvTG93ZXJDYXNlKCkpe2Nhc2UgXCJjaXJjbGVcIjpyZXR1cm4gMipcbk1hdGguUEkqYS5nZXRBdHRyaWJ1dGUoXCJyXCIpO2Nhc2UgXCJyZWN0XCI6cmV0dXJuIDIqYS5nZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiKSsyKmEuZ2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIpO2Nhc2UgXCJsaW5lXCI6cmV0dXJuIEYoe3g6YS5nZXRBdHRyaWJ1dGUoXCJ4MVwiKSx5OmEuZ2V0QXR0cmlidXRlKFwieTFcIil9LHt4OmEuZ2V0QXR0cmlidXRlKFwieDJcIikseTphLmdldEF0dHJpYnV0ZShcInkyXCIpfSk7Y2FzZSBcInBvbHlsaW5lXCI6cmV0dXJuIE0oYSk7Y2FzZSBcInBvbHlnb25cIjp2YXIgYz1hLnBvaW50cztyZXR1cm4gTShhKStGKGMuZ2V0SXRlbShjLm51bWJlck9mSXRlbXMtMSksYy5nZXRJdGVtKDApKX19ZnVuY3Rpb24gWShhLGMpe2Z1bmN0aW9uIGQoYil7Yj12b2lkIDA9PT1iPzA6YjtyZXR1cm4gYS5lbC5nZXRQb2ludEF0TGVuZ3RoKDE8PWMrYj9jK2I6MCl9dmFyIGI9ZCgpLGY9ZCgtMSksbj1kKDEpO3N3aXRjaChhLnByb3BlcnR5KXtjYXNlIFwieFwiOnJldHVybiBiLng7Y2FzZSBcInlcIjpyZXR1cm4gYi55O1xuY2FzZSBcImFuZ2xlXCI6cmV0dXJuIDE4MCpNYXRoLmF0YW4yKG4ueS1mLnksbi54LWYueCkvTWF0aC5QSX19ZnVuY3Rpb24gTyhhLGMpe3ZhciBkPS8tP1xcZCpcXC4/XFxkKy9nLGI7Yj1oLnB0aChhKT9hLnRvdGFsTGVuZ3RoOmE7aWYoaC5jb2woYikpaWYoaC5yZ2IoYikpe3ZhciBmPS9yZ2JcXCgoXFxkKyxcXHMqW1xcZF0rLFxccypbXFxkXSspXFwpL2cuZXhlYyhiKTtiPWY/XCJyZ2JhKFwiK2ZbMV0rXCIsMSlcIjpifWVsc2UgYj1oLmhleChiKT9UKGIpOmguaHNsKGIpP1UoYik6dm9pZCAwO2Vsc2UgZj0oZj15KGIpKT9iLnN1YnN0cigwLGIubGVuZ3RoLWYubGVuZ3RoKTpiLGI9YyYmIS9cXHMvZy50ZXN0KGIpP2YrYzpmO2IrPVwiXCI7cmV0dXJue29yaWdpbmFsOmIsbnVtYmVyczpiLm1hdGNoKGQpP2IubWF0Y2goZCkubWFwKE51bWJlcik6WzBdLHN0cmluZ3M6aC5zdHIoYSl8fGM/Yi5zcGxpdChkKTpbXX19ZnVuY3Rpb24gUChhKXthPWE/cChoLmFycihhKT9hLm1hcChtKTptKGEpKTpbXTtyZXR1cm4gcihhLFxuZnVuY3Rpb24oYSxkLGIpe3JldHVybiBiLmluZGV4T2YoYSk9PT1kfSl9ZnVuY3Rpb24gWihhKXt2YXIgYz1QKGEpO3JldHVybiBjLm1hcChmdW5jdGlvbihhLGIpe3JldHVybnt0YXJnZXQ6YSxpZDpiLHRvdGFsOmMubGVuZ3RofX0pfWZ1bmN0aW9uIGFhKGEsYyl7dmFyIGQ9QyhjKTtpZihoLmFycihhKSl7dmFyIGI9YS5sZW5ndGg7MiE9PWJ8fGgub2JqKGFbMF0pP2guZm5jKGMuZHVyYXRpb24pfHwoZC5kdXJhdGlvbj1jLmR1cmF0aW9uL2IpOmE9e3ZhbHVlOmF9fXJldHVybiBtKGEpLm1hcChmdW5jdGlvbihhLGIpe2I9Yj8wOmMuZGVsYXk7YT1oLm9iaihhKSYmIWgucHRoKGEpP2E6e3ZhbHVlOmF9O2gudW5kKGEuZGVsYXkpJiYoYS5kZWxheT1iKTtyZXR1cm4gYX0pLm1hcChmdW5jdGlvbihhKXtyZXR1cm4geihhLGQpfSl9ZnVuY3Rpb24gYmEoYSxjKXt2YXIgZD17fSxiO2ZvcihiIGluIGEpe3ZhciBmPUkoYVtiXSxjKTtoLmFycihmKSYmKGY9Zi5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIEkoYSxcbmMpfSksMT09PWYubGVuZ3RoJiYoZj1mWzBdKSk7ZFtiXT1mfWQuZHVyYXRpb249cGFyc2VGbG9hdChkLmR1cmF0aW9uKTtkLmRlbGF5PXBhcnNlRmxvYXQoZC5kZWxheSk7cmV0dXJuIGR9ZnVuY3Rpb24gY2EoYSl7cmV0dXJuIGguYXJyKGEpP0EuYXBwbHkodGhpcyxhKTpRW2FdfWZ1bmN0aW9uIGRhKGEsYyl7dmFyIGQ7cmV0dXJuIGEudHdlZW5zLm1hcChmdW5jdGlvbihiKXtiPWJhKGIsYyk7dmFyIGY9Yi52YWx1ZSxlPUsoYy50YXJnZXQsYS5uYW1lKSxrPWQ/ZC50by5vcmlnaW5hbDplLGs9aC5hcnIoZik/ZlswXTprLHc9TChoLmFycihmKT9mWzFdOmYsayksZT15KHcpfHx5KGspfHx5KGUpO2IuZnJvbT1PKGssZSk7Yi50bz1PKHcsZSk7Yi5zdGFydD1kP2QuZW5kOmEub2Zmc2V0O2IuZW5kPWIuc3RhcnQrYi5kZWxheStiLmR1cmF0aW9uO2IuZWFzaW5nPWNhKGIuZWFzaW5nKTtiLmVsYXN0aWNpdHk9KDFFMy1NYXRoLm1pbihNYXRoLm1heChiLmVsYXN0aWNpdHksMSksOTk5KSkvXG4xRTM7Yi5pc1BhdGg9aC5wdGgoZik7Yi5pc0NvbG9yPWguY29sKGIuZnJvbS5vcmlnaW5hbCk7Yi5pc0NvbG9yJiYoYi5yb3VuZD0xKTtyZXR1cm4gZD1ifSl9ZnVuY3Rpb24gZWEoYSxjKXtyZXR1cm4gcihwKGEubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBjLm1hcChmdW5jdGlvbihiKXt2YXIgYz1KKGEudGFyZ2V0LGIubmFtZSk7aWYoYyl7dmFyIGQ9ZGEoYixhKTtiPXt0eXBlOmMscHJvcGVydHk6Yi5uYW1lLGFuaW1hdGFibGU6YSx0d2VlbnM6ZCxkdXJhdGlvbjpkW2QubGVuZ3RoLTFdLmVuZCxkZWxheTpkWzBdLmRlbGF5fX1lbHNlIGI9dm9pZCAwO3JldHVybiBifSl9KSksZnVuY3Rpb24oYSl7cmV0dXJuIWgudW5kKGEpfSl9ZnVuY3Rpb24gUihhLGMsZCxiKXt2YXIgZj1cImRlbGF5XCI9PT1hO3JldHVybiBjLmxlbmd0aD8oZj9NYXRoLm1pbjpNYXRoLm1heCkuYXBwbHkoTWF0aCxjLm1hcChmdW5jdGlvbihiKXtyZXR1cm4gYlthXX0pKTpmP2IuZGVsYXk6ZC5vZmZzZXQrYi5kZWxheStcbmIuZHVyYXRpb259ZnVuY3Rpb24gZmEoYSl7dmFyIGM9RChnYSxhKSxkPUQoUyxhKSxiPVooYS50YXJnZXRzKSxmPVtdLGU9eihjLGQpLGs7Zm9yKGsgaW4gYSllLmhhc093blByb3BlcnR5KGspfHxcInRhcmdldHNcIj09PWt8fGYucHVzaCh7bmFtZTprLG9mZnNldDplLm9mZnNldCx0d2VlbnM6YWEoYVtrXSxkKX0pO2E9ZWEoYixmKTtyZXR1cm4geihjLHtjaGlsZHJlbjpbXSxhbmltYXRhYmxlczpiLGFuaW1hdGlvbnM6YSxkdXJhdGlvbjpSKFwiZHVyYXRpb25cIixhLGMsZCksZGVsYXk6UihcImRlbGF5XCIsYSxjLGQpfSl9ZnVuY3Rpb24gcShhKXtmdW5jdGlvbiBjKCl7cmV0dXJuIHdpbmRvdy5Qcm9taXNlJiZuZXcgUHJvbWlzZShmdW5jdGlvbihhKXtyZXR1cm4gcD1hfSl9ZnVuY3Rpb24gZChhKXtyZXR1cm4gZy5yZXZlcnNlZD9nLmR1cmF0aW9uLWE6YX1mdW5jdGlvbiBiKGEpe2Zvcih2YXIgYj0wLGM9e30sZD1nLmFuaW1hdGlvbnMsZj1kLmxlbmd0aDtiPGY7KXt2YXIgZT1kW2JdLFxuaz1lLmFuaW1hdGFibGUsaD1lLnR3ZWVucyxuPWgubGVuZ3RoLTEsbD1oW25dO24mJihsPXIoaCxmdW5jdGlvbihiKXtyZXR1cm4gYTxiLmVuZH0pWzBdfHxsKTtmb3IodmFyIGg9TWF0aC5taW4oTWF0aC5tYXgoYS1sLnN0YXJ0LWwuZGVsYXksMCksbC5kdXJhdGlvbikvbC5kdXJhdGlvbix3PWlzTmFOKGgpPzE6bC5lYXNpbmcoaCxsLmVsYXN0aWNpdHkpLGg9bC50by5zdHJpbmdzLHA9bC5yb3VuZCxuPVtdLG09dm9pZCAwLG09bC50by5udW1iZXJzLmxlbmd0aCx0PTA7dDxtO3QrKyl7dmFyIHg9dm9pZCAwLHg9bC50by5udW1iZXJzW3RdLHE9bC5mcm9tLm51bWJlcnNbdF0seD1sLmlzUGF0aD9ZKGwudmFsdWUsdyp4KTpxK3cqKHgtcSk7cCYmKGwuaXNDb2xvciYmMjx0fHwoeD1NYXRoLnJvdW5kKHgqcCkvcCkpO24ucHVzaCh4KX1pZihsPWgubGVuZ3RoKWZvcihtPWhbMF0sdz0wO3c8bDt3KyspcD1oW3crMV0sdD1uW3ddLGlzTmFOKHQpfHwobT1wP20rKHQrcCk6bSsodCtcIiBcIikpO1xuZWxzZSBtPW5bMF07aGFbZS50eXBlXShrLnRhcmdldCxlLnByb3BlcnR5LG0sYyxrLmlkKTtlLmN1cnJlbnRWYWx1ZT1tO2IrK31pZihiPU9iamVjdC5rZXlzKGMpLmxlbmd0aClmb3IoZD0wO2Q8YjtkKyspSHx8KEg9RShkb2N1bWVudC5ib2R5LFwidHJhbnNmb3JtXCIpP1widHJhbnNmb3JtXCI6XCItd2Via2l0LXRyYW5zZm9ybVwiKSxnLmFuaW1hdGFibGVzW2RdLnRhcmdldC5zdHlsZVtIXT1jW2RdLmpvaW4oXCIgXCIpO2cuY3VycmVudFRpbWU9YTtnLnByb2dyZXNzPWEvZy5kdXJhdGlvbioxMDB9ZnVuY3Rpb24gZihhKXtpZihnW2FdKWdbYV0oZyl9ZnVuY3Rpb24gZSgpe2cucmVtYWluaW5nJiYhMCE9PWcucmVtYWluaW5nJiZnLnJlbWFpbmluZy0tfWZ1bmN0aW9uIGsoYSl7dmFyIGs9Zy5kdXJhdGlvbixuPWcub2Zmc2V0LHc9bitnLmRlbGF5LHI9Zy5jdXJyZW50VGltZSx4PWcucmV2ZXJzZWQscT1kKGEpO2lmKGcuY2hpbGRyZW4ubGVuZ3RoKXt2YXIgdT1nLmNoaWxkcmVuLHY9dS5sZW5ndGg7XG5pZihxPj1nLmN1cnJlbnRUaW1lKWZvcih2YXIgRz0wO0c8djtHKyspdVtHXS5zZWVrKHEpO2Vsc2UgZm9yKDt2LS07KXVbdl0uc2VlayhxKX1pZihxPj13fHwhaylnLmJlZ2FufHwoZy5iZWdhbj0hMCxmKFwiYmVnaW5cIikpLGYoXCJydW5cIik7aWYocT5uJiZxPGspYihxKTtlbHNlIGlmKHE8PW4mJjAhPT1yJiYoYigwKSx4JiZlKCkpLHE+PWsmJnIhPT1rfHwhayliKGspLHh8fGUoKTtmKFwidXBkYXRlXCIpO2E+PWsmJihnLnJlbWFpbmluZz8odD1oLFwiYWx0ZXJuYXRlXCI9PT1nLmRpcmVjdGlvbiYmKGcucmV2ZXJzZWQ9IWcucmV2ZXJzZWQpKTooZy5wYXVzZSgpLGcuY29tcGxldGVkfHwoZy5jb21wbGV0ZWQ9ITAsZihcImNvbXBsZXRlXCIpLFwiUHJvbWlzZVwiaW4gd2luZG93JiYocCgpLG09YygpKSkpLGw9MCl9YT12b2lkIDA9PT1hP3t9OmE7dmFyIGgsdCxsPTAscD1udWxsLG09YygpLGc9ZmEoYSk7Zy5yZXNldD1mdW5jdGlvbigpe3ZhciBhPWcuZGlyZWN0aW9uLGM9Zy5sb29wO2cuY3VycmVudFRpbWU9XG4wO2cucHJvZ3Jlc3M9MDtnLnBhdXNlZD0hMDtnLmJlZ2FuPSExO2cuY29tcGxldGVkPSExO2cucmV2ZXJzZWQ9XCJyZXZlcnNlXCI9PT1hO2cucmVtYWluaW5nPVwiYWx0ZXJuYXRlXCI9PT1hJiYxPT09Yz8yOmM7YigwKTtmb3IoYT1nLmNoaWxkcmVuLmxlbmd0aDthLS07KWcuY2hpbGRyZW5bYV0ucmVzZXQoKX07Zy50aWNrPWZ1bmN0aW9uKGEpe2g9YTt0fHwodD1oKTtrKChsK2gtdCkqcS5zcGVlZCl9O2cuc2Vlaz1mdW5jdGlvbihhKXtrKGQoYSkpfTtnLnBhdXNlPWZ1bmN0aW9uKCl7dmFyIGE9di5pbmRleE9mKGcpOy0xPGEmJnYuc3BsaWNlKGEsMSk7Zy5wYXVzZWQ9ITB9O2cucGxheT1mdW5jdGlvbigpe2cucGF1c2VkJiYoZy5wYXVzZWQ9ITEsdD0wLGw9ZChnLmN1cnJlbnRUaW1lKSx2LnB1c2goZyksQnx8aWEoKSl9O2cucmV2ZXJzZT1mdW5jdGlvbigpe2cucmV2ZXJzZWQ9IWcucmV2ZXJzZWQ7dD0wO2w9ZChnLmN1cnJlbnRUaW1lKX07Zy5yZXN0YXJ0PWZ1bmN0aW9uKCl7Zy5wYXVzZSgpO1xuZy5yZXNldCgpO2cucGxheSgpfTtnLmZpbmlzaGVkPW07Zy5yZXNldCgpO2cuYXV0b3BsYXkmJmcucGxheSgpO3JldHVybiBnfXZhciBnYT17dXBkYXRlOnZvaWQgMCxiZWdpbjp2b2lkIDAscnVuOnZvaWQgMCxjb21wbGV0ZTp2b2lkIDAsbG9vcDoxLGRpcmVjdGlvbjpcIm5vcm1hbFwiLGF1dG9wbGF5OiEwLG9mZnNldDowfSxTPXtkdXJhdGlvbjoxRTMsZGVsYXk6MCxlYXNpbmc6XCJlYXNlT3V0RWxhc3RpY1wiLGVsYXN0aWNpdHk6NTAwLHJvdW5kOjB9LFc9XCJ0cmFuc2xhdGVYIHRyYW5zbGF0ZVkgdHJhbnNsYXRlWiByb3RhdGUgcm90YXRlWCByb3RhdGVZIHJvdGF0ZVogc2NhbGUgc2NhbGVYIHNjYWxlWSBzY2FsZVogc2tld1ggc2tld1kgcGVyc3BlY3RpdmVcIi5zcGxpdChcIiBcIiksSCxoPXthcnI6ZnVuY3Rpb24oYSl7cmV0dXJuIEFycmF5LmlzQXJyYXkoYSl9LG9iajpmdW5jdGlvbihhKXtyZXR1cm4tMTxPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSkuaW5kZXhPZihcIk9iamVjdFwiKX0sXG5wdGg6ZnVuY3Rpb24oYSl7cmV0dXJuIGgub2JqKGEpJiZhLmhhc093blByb3BlcnR5KFwidG90YWxMZW5ndGhcIil9LHN2ZzpmdW5jdGlvbihhKXtyZXR1cm4gYSBpbnN0YW5jZW9mIFNWR0VsZW1lbnR9LGRvbTpmdW5jdGlvbihhKXtyZXR1cm4gYS5ub2RlVHlwZXx8aC5zdmcoYSl9LHN0cjpmdW5jdGlvbihhKXtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGF9LGZuYzpmdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYX0sdW5kOmZ1bmN0aW9uKGEpe3JldHVyblwidW5kZWZpbmVkXCI9PT10eXBlb2YgYX0saGV4OmZ1bmN0aW9uKGEpe3JldHVybi8oXiNbMC05QS1GXXs2fSQpfCheI1swLTlBLUZdezN9JCkvaS50ZXN0KGEpfSxyZ2I6ZnVuY3Rpb24oYSl7cmV0dXJuL15yZ2IvLnRlc3QoYSl9LGhzbDpmdW5jdGlvbihhKXtyZXR1cm4vXmhzbC8udGVzdChhKX0sY29sOmZ1bmN0aW9uKGEpe3JldHVybiBoLmhleChhKXx8aC5yZ2IoYSl8fGguaHNsKGEpfX0sQT1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSxcbmQsYil7cmV0dXJuKCgoMS0zKmIrMypkKSphKygzKmItNipkKSkqYSszKmQpKmF9cmV0dXJuIGZ1bmN0aW9uKGMsZCxiLGYpe2lmKDA8PWMmJjE+PWMmJjA8PWImJjE+PWIpe3ZhciBlPW5ldyBGbG9hdDMyQXJyYXkoMTEpO2lmKGMhPT1kfHxiIT09Zilmb3IodmFyIGs9MDsxMT5rOysrayllW2tdPWEoLjEqayxjLGIpO3JldHVybiBmdW5jdGlvbihrKXtpZihjPT09ZCYmYj09PWYpcmV0dXJuIGs7aWYoMD09PWspcmV0dXJuIDA7aWYoMT09PWspcmV0dXJuIDE7Zm9yKHZhciBoPTAsbD0xOzEwIT09bCYmZVtsXTw9azsrK2wpaCs9LjE7LS1sO3ZhciBsPWgrKGstZVtsXSkvKGVbbCsxXS1lW2xdKSouMSxuPTMqKDEtMypiKzMqYykqbCpsKzIqKDMqYi02KmMpKmwrMypjO2lmKC4wMDE8PW4pe2ZvcihoPTA7ND5oOysraCl7bj0zKigxLTMqYiszKmMpKmwqbCsyKigzKmItNipjKSpsKzMqYztpZigwPT09bilicmVhazt2YXIgbT1hKGwsYyxiKS1rLGw9bC1tL259az1sfWVsc2UgaWYoMD09PVxubilrPWw7ZWxzZXt2YXIgbD1oLGg9aCsuMSxnPTA7ZG8gbT1sKyhoLWwpLzIsbj1hKG0sYyxiKS1rLDA8bj9oPW06bD1tO3doaWxlKDFlLTc8TWF0aC5hYnMobikmJjEwPisrZyk7az1tfXJldHVybiBhKGssZCxmKX19fX0oKSxRPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhLGIpe3JldHVybiAwPT09YXx8MT09PWE/YTotTWF0aC5wb3coMiwxMCooYS0xKSkqTWF0aC5zaW4oMiooYS0xLWIvKDIqTWF0aC5QSSkqTWF0aC5hc2luKDEpKSpNYXRoLlBJL2IpfXZhciBjPVwiUXVhZCBDdWJpYyBRdWFydCBRdWludCBTaW5lIEV4cG8gQ2lyYyBCYWNrIEVsYXN0aWNcIi5zcGxpdChcIiBcIiksZD17SW46W1suNTUsLjA4NSwuNjgsLjUzXSxbLjU1LC4wNTUsLjY3NSwuMTldLFsuODk1LC4wMywuNjg1LC4yMl0sWy43NTUsLjA1LC44NTUsLjA2XSxbLjQ3LDAsLjc0NSwuNzE1XSxbLjk1LC4wNSwuNzk1LC4wMzVdLFsuNiwuMDQsLjk4LC4zMzVdLFsuNiwtLjI4LC43MzUsLjA0NV0sYV0sT3V0OltbLjI1LFxuLjQ2LC40NSwuOTRdLFsuMjE1LC42MSwuMzU1LDFdLFsuMTY1LC44NCwuNDQsMV0sWy4yMywxLC4zMiwxXSxbLjM5LC41NzUsLjU2NSwxXSxbLjE5LDEsLjIyLDFdLFsuMDc1LC44MiwuMTY1LDFdLFsuMTc1LC44ODUsLjMyLDEuMjc1XSxmdW5jdGlvbihiLGMpe3JldHVybiAxLWEoMS1iLGMpfV0sSW5PdXQ6W1suNDU1LC4wMywuNTE1LC45NTVdLFsuNjQ1LC4wNDUsLjM1NSwxXSxbLjc3LDAsLjE3NSwxXSxbLjg2LDAsLjA3LDFdLFsuNDQ1LC4wNSwuNTUsLjk1XSxbMSwwLDAsMV0sWy43ODUsLjEzNSwuMTUsLjg2XSxbLjY4LC0uNTUsLjI2NSwxLjU1XSxmdW5jdGlvbihiLGMpe3JldHVybi41PmI/YSgyKmIsYykvMjoxLWEoLTIqYisyLGMpLzJ9XX0sYj17bGluZWFyOkEoLjI1LC4yNSwuNzUsLjc1KX0sZj17fSxlO2ZvcihlIGluIGQpZi50eXBlPWUsZFtmLnR5cGVdLmZvckVhY2goZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKGQsZil7YltcImVhc2VcIithLnR5cGUrY1tmXV09aC5mbmMoZCk/XG5kOkEuYXBwbHkoJGpzY29tcCR0aGlzLGQpfX0oZikpLGY9e3R5cGU6Zi50eXBlfTtyZXR1cm4gYn0oKSxoYT17Y3NzOmZ1bmN0aW9uKGEsYyxkKXtyZXR1cm4gYS5zdHlsZVtjXT1kfSxhdHRyaWJ1dGU6ZnVuY3Rpb24oYSxjLGQpe3JldHVybiBhLnNldEF0dHJpYnV0ZShjLGQpfSxvYmplY3Q6ZnVuY3Rpb24oYSxjLGQpe3JldHVybiBhW2NdPWR9LHRyYW5zZm9ybTpmdW5jdGlvbihhLGMsZCxiLGYpe2JbZl18fChiW2ZdPVtdKTtiW2ZdLnB1c2goYytcIihcIitkK1wiKVwiKX19LHY9W10sQj0wLGlhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe0I9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGMpfWZ1bmN0aW9uIGMoYyl7dmFyIGI9di5sZW5ndGg7aWYoYil7Zm9yKHZhciBkPTA7ZDxiOyl2W2RdJiZ2W2RdLnRpY2soYyksZCsrO2EoKX1lbHNlIGNhbmNlbEFuaW1hdGlvbkZyYW1lKEIpLEI9MH1yZXR1cm4gYX0oKTtxLnZlcnNpb249XCIyLjIuMFwiO3Euc3BlZWQ9MTtxLnJ1bm5pbmc9djtxLnJlbW92ZT1cbmZ1bmN0aW9uKGEpe2E9UChhKTtmb3IodmFyIGM9di5sZW5ndGg7Yy0tOylmb3IodmFyIGQ9dltjXSxiPWQuYW5pbWF0aW9ucyxmPWIubGVuZ3RoO2YtLTspdShhLGJbZl0uYW5pbWF0YWJsZS50YXJnZXQpJiYoYi5zcGxpY2UoZiwxKSxiLmxlbmd0aHx8ZC5wYXVzZSgpKX07cS5nZXRWYWx1ZT1LO3EucGF0aD1mdW5jdGlvbihhLGMpe3ZhciBkPWguc3RyKGEpP2UoYSlbMF06YSxiPWN8fDEwMDtyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJue2VsOmQscHJvcGVydHk6YSx0b3RhbExlbmd0aDpOKGQpKihiLzEwMCl9fX07cS5zZXREYXNob2Zmc2V0PWZ1bmN0aW9uKGEpe3ZhciBjPU4oYSk7YS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtZGFzaGFycmF5XCIsYyk7cmV0dXJuIGN9O3EuYmV6aWVyPUE7cS5lYXNpbmdzPVE7cS50aW1lbGluZT1mdW5jdGlvbihhKXt2YXIgYz1xKGEpO2MucGF1c2UoKTtjLmR1cmF0aW9uPTA7Yy5hZGQ9ZnVuY3Rpb24oZCl7Yy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EuYmVnYW49XG4hMDthLmNvbXBsZXRlZD0hMH0pO20oZCkuZm9yRWFjaChmdW5jdGlvbihiKXt2YXIgZD16KGIsRChTLGF8fHt9KSk7ZC50YXJnZXRzPWQudGFyZ2V0c3x8YS50YXJnZXRzO2I9Yy5kdXJhdGlvbjt2YXIgZT1kLm9mZnNldDtkLmF1dG9wbGF5PSExO2QuZGlyZWN0aW9uPWMuZGlyZWN0aW9uO2Qub2Zmc2V0PWgudW5kKGUpP2I6TChlLGIpO2MuYmVnYW49ITA7Yy5jb21wbGV0ZWQ9ITA7Yy5zZWVrKGQub2Zmc2V0KTtkPXEoZCk7ZC5iZWdhbj0hMDtkLmNvbXBsZXRlZD0hMDtkLmR1cmF0aW9uPmImJihjLmR1cmF0aW9uPWQuZHVyYXRpb24pO2MuY2hpbGRyZW4ucHVzaChkKX0pO2Muc2VlaygwKTtjLnJlc2V0KCk7Yy5hdXRvcGxheSYmYy5yZXN0YXJ0KCk7cmV0dXJuIGN9O3JldHVybiBjfTtxLnJhbmRvbT1mdW5jdGlvbihhLGMpe3JldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKGMtYSsxKSkrYX07cmV0dXJuIHF9KTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcbnZhciBidG9hID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5idG9hICYmIHdpbmRvdy5idG9hLmJpbmQod2luZG93KSkgfHwgcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J0b2EnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB2YXIgbG9hZEV2ZW50ID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG4gICAgdmFyIHhEb21haW4gPSBmYWxzZTtcblxuICAgIC8vIEZvciBJRSA4LzkgQ09SUyBzdXBwb3J0XG4gICAgLy8gT25seSBzdXBwb3J0cyBQT1NUIGFuZCBHRVQgY2FsbHMgYW5kIGRvZXNuJ3QgcmV0dXJucyB0aGUgcmVzcG9uc2UgaGVhZGVycy5cbiAgICAvLyBET04nVCBkbyB0aGlzIGZvciB0ZXN0aW5nIGIvYyBYTUxIdHRwUmVxdWVzdCBpcyBtb2NrZWQsIG5vdCBYRG9tYWluUmVxdWVzdC5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB3aW5kb3cuWERvbWFpblJlcXVlc3QgJiYgISgnd2l0aENyZWRlbnRpYWxzJyBpbiByZXF1ZXN0KSAmJlxuICAgICAgICAhaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSB7XG4gICAgICByZXF1ZXN0ID0gbmV3IHdpbmRvdy5YRG9tYWluUmVxdWVzdCgpO1xuICAgICAgbG9hZEV2ZW50ID0gJ29ubG9hZCc7XG4gICAgICB4RG9tYWluID0gdHJ1ZTtcbiAgICAgIHJlcXVlc3Qub25wcm9ncmVzcyA9IGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKCkge307XG4gICAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7fTtcbiAgICB9XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0W2xvYWRFdmVudF0gPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IChyZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQgJiYgIXhEb21haW4pKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIC8vIElFIHNlbmRzIDEyMjMgaW5zdGVhZCBvZiAyMDQgKGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9pc3N1ZXMvMjAxKVxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gMjA0IDogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzID09PSAxMjIzID8gJ05vIENvbnRlbnQnIDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZSh1dGlscy5tZXJnZShkZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vLi4vZGVmYXVsdHMnKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICB1cmw6IGFyZ3VtZW50c1swXVxuICAgIH0sIGFyZ3VtZW50c1sxXSk7XG4gIH1cblxuICBjb25maWcgPSB1dGlscy5tZXJnZShkZWZhdWx0cywgdGhpcy5kZWZhdWx0cywgeyBtZXRob2Q6ICdnZXQnIH0sIGNvbmZpZyk7XG4gIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgLy8gTm90ZTogc3RhdHVzIGlzIG5vdCBleHBvc2VkIGJ5IFhEb21haW5SZXF1ZXN0XG4gIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBidG9hIHBvbHlmaWxsIGZvciBJRTwxMCBjb3VydGVzeSBodHRwczovL2dpdGh1Yi5jb20vZGF2aWRjaGFtYmVycy9CYXNlNjQuanNcblxudmFyIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcblxuZnVuY3Rpb24gRSgpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ1N0cmluZyBjb250YWlucyBhbiBpbnZhbGlkIGNoYXJhY3Rlcic7XG59XG5FLnByb3RvdHlwZSA9IG5ldyBFcnJvcjtcbkUucHJvdG90eXBlLmNvZGUgPSA1O1xuRS5wcm90b3R5cGUubmFtZSA9ICdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InO1xuXG5mdW5jdGlvbiBidG9hKGlucHV0KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcoaW5wdXQpO1xuICB2YXIgb3V0cHV0ID0gJyc7XG4gIGZvciAoXG4gICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcbiAgICB2YXIgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSBjaGFycztcbiAgICAvLyBpZiB0aGUgbmV4dCBzdHIgaW5kZXggZG9lcyBub3QgZXhpc3Q6XG4gICAgLy8gICBjaGFuZ2UgdGhlIG1hcHBpbmcgdGFibGUgdG8gXCI9XCJcbiAgICAvLyAgIGNoZWNrIGlmIGQgaGFzIG5vIGZyYWN0aW9uYWwgZGlnaXRzXG4gICAgc3RyLmNoYXJBdChpZHggfCAwKSB8fCAobWFwID0gJz0nLCBpZHggJSAxKTtcbiAgICAvLyBcIjggLSBpZHggJSAxICogOFwiIGdlbmVyYXRlcyB0aGUgc2VxdWVuY2UgMiwgNCwgNiwgOFxuICAgIG91dHB1dCArPSBtYXAuY2hhckF0KDYzICYgYmxvY2sgPj4gOCAtIGlkeCAlIDEgKiA4KVxuICApIHtcbiAgICBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGlkeCArPSAzIC8gNCk7XG4gICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xuICAgICAgdGhyb3cgbmV3IEUoKTtcbiAgICB9XG4gICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XG4gIH1cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidG9hO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH1cblxuICAgICAgaWYgKCF1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICB9LFxuXG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgIH0sXG5cbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgIH1cblxuICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgfTtcbiAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiKGZ1bmN0aW9uKHJvb3QsICQpIHtcblx0dmFyICQgPSAoZnVuY3Rpb24oZG9jdW1lbnQsIHNfYWRkRXZlbnRMaXN0ZW5lciwgc19xdWVyeVNlbGVjdG9yQWxsKSB7XG5cdGZ1bmN0aW9uICQocywgY29udGV4dCwgYmFsYSkge1xuXHRcdGJhbGEgPSBPYmplY3QuY3JlYXRlKCQuZm4pO1xuXG5cdFx0cyAmJiBiYWxhLnB1c2guYXBwbHkoYmFsYSwgLy8gaWYgcyBpcyB0cnVseSB0aGVuIHB1c2ggdGhlIGZvbGxvd2luZ1xuXHRcdFx0c1tzX2FkZEV2ZW50TGlzdGVuZXJdIC8vIGlmIGFyZyBpcyBub2RlIG9yIHdpbmRvdyxcblx0XHRcdFx0PyBbc10gLy8gdGhlbiBwYXNzIFtzXVxuXHRcdFx0XHQ6IFwiXCIgKyBzID09PSBzIC8vIGVsc2UgaWYgYXJnIGlzIGEgc3RyaW5nXG5cdFx0XHRcdFx0PyAvPC8udGVzdChzKSAvLyBpZiB0aGUgc3RyaW5nIGNvbnRhaW5zIFwiPFwiIChpZiBIVE1MIGNvZGUgaXMgcGFzc2VkKVxuXHRcdFx0XHRcdFx0Ly8gdGhlbiBwYXJzZSBpdCBhbmQgcmV0dXJuIG5vZGUuY2hpbGRyZW5cblx0XHRcdFx0XHRcdC8vIHVzZSAnYWRkRXZlbnRMaXN0ZW5lcicgKEhUTUxVbmtub3duRWxlbWVudCkgaWYgY29udGV4dCBpcyBub3QgcHJlc2VudGVkXG5cdFx0XHRcdFx0XHQ/ICgoY29udGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY29udGV4dCkpLmlubmVySFRNTCA9IHNcblx0XHRcdFx0XHRcdFx0LCBjb250ZXh0LmNoaWxkcmVuKVxuXHRcdFx0XHRcdFx0OiBjb250ZXh0IC8vIGVsc2UgaWYgY29udGV4dCBpcyB0cnVseVxuXHRcdFx0XHRcdFx0XHQ/ICgoY29udGV4dCA9ICQoY29udGV4dClbMF0pIC8vIGlmIGNvbnRleHQgZWxlbWVudCBpcyBmb3VuZFxuXHRcdFx0XHRcdFx0XHRcdD8gY29udGV4dFtzX3F1ZXJ5U2VsZWN0b3JBbGxdKHMpIC8vIHRoZW4gc2VsZWN0IGVsZW1lbnQgZnJvbSBjb250ZXh0XG5cdFx0XHRcdFx0XHRcdFx0OiBiYWxhKSAvLyBlbHNlIHBhc3MgW10gKGNvbnRleHQgaXNuJ3QgZm91bmQpXG5cdFx0XHRcdFx0XHRcdDogZG9jdW1lbnRbc19xdWVyeVNlbGVjdG9yQWxsXShzKSAvLyBlbHNlIHNlbGVjdCBlbGVtZW50cyBnbG9iYWxseVxuXHRcdFx0XHRcdDogcyk7IC8vIGVsc2UgZ3Vlc3NpbmcgdGhhdCBzIHZhcmlhYmxlIGlzIGFycmF5LWxpa2UgT2JqZWN0XG5cblx0XHRyZXR1cm4gYmFsYTtcblx0fVxuXG5cdCQuZm4gPSBbXTtcblxuXHQkLm9uZSA9IGZ1bmN0aW9uKHMsIGNvbnRleHQpIHtcblx0XHRyZXR1cm4gJChzLCBjb250ZXh0KVswXSB8fCBudWxsO1xuXHR9O1xuXG5cdHJldHVybiAkO1xufSkoZG9jdW1lbnQsICdhZGRFdmVudExpc3RlbmVyJywgJ3F1ZXJ5U2VsZWN0b3JBbGwnKTtcbjtcblxuXHRpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuICQ7XG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gJDtcblx0fSBlbHNlIHtcblx0XHRyb290LiQgPSAkO1xuXHR9XG59KSh0aGlzKTtcbiIsIi8qISFcbiAqIEhhc2hlciA8aHR0cDovL2dpdGh1Yi5jb20vbWlsbGVybWVkZWlyb3MvaGFzaGVyPlxuICogQGF1dGhvciBNaWxsZXIgTWVkZWlyb3NcbiAqIEB2ZXJzaW9uIDEuMi4wICgyMDEzLzExLzExIDAzOjE4IFBNKVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKi9cblxuOyhmdW5jdGlvbiAoKSB7XG52YXIgZmFjdG9yeSA9IGZ1bmN0aW9uKHNpZ25hbHMpe1xuXG4vKmpzaGludCB3aGl0ZTpmYWxzZSovXG4vKmdsb2JhbCBzaWduYWxzOmZhbHNlLCB3aW5kb3c6ZmFsc2UqL1xuXG4vKipcbiAqIEhhc2hlclxuICogQG5hbWVzcGFjZSBIaXN0b3J5IE1hbmFnZXIgZm9yIHJpY2gtbWVkaWEgYXBwbGljYXRpb25zLlxuICogQG5hbWUgaGFzaGVyXG4gKi9cbnZhciBoYXNoZXIgPSAoZnVuY3Rpb24od2luZG93KXtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBQcml2YXRlIFZhcnNcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICB2YXJcblxuICAgICAgICAvLyBmcmVxdWVuY3kgdGhhdCBpdCB3aWxsIGNoZWNrIGhhc2ggdmFsdWUgb24gSUUgNi03IHNpbmNlIGl0IGRvZXNuJ3RcbiAgICAgICAgLy8gc3VwcG9ydCB0aGUgaGFzaGNoYW5nZSBldmVudFxuICAgICAgICBQT09MX0lOVEVSVkFMID0gMjUsXG5cbiAgICAgICAgLy8gbG9jYWwgc3RvcmFnZSBmb3IgYnJldml0eSBhbmQgYmV0dGVyIGNvbXByZXNzaW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgICAgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQsXG4gICAgICAgIGhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeSxcbiAgICAgICAgU2lnbmFsID0gc2lnbmFscy5TaWduYWwsXG5cbiAgICAgICAgLy8gbG9jYWwgdmFycyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgICAgaGFzaGVyLFxuICAgICAgICBfaGFzaCxcbiAgICAgICAgX2NoZWNrSW50ZXJ2YWwsXG4gICAgICAgIF9pc0FjdGl2ZSxcbiAgICAgICAgX2ZyYW1lLCAvL2lmcmFtZSB1c2VkIGZvciBsZWdhY3kgSUUgKDYtNylcbiAgICAgICAgX2NoZWNrSGlzdG9yeSxcbiAgICAgICAgX2hhc2hWYWxSZWdleHAgPSAvIyguKikkLyxcbiAgICAgICAgX2Jhc2VVcmxSZWdleHAgPSAvKFxcPy4qKXwoXFwjLiopLyxcbiAgICAgICAgX2hhc2hSZWdleHAgPSAvXlxcIy8sXG5cbiAgICAgICAgLy8gc25pZmZpbmcvZmVhdHVyZSBkZXRlY3Rpb24gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgICAgIC8vaGFjayBiYXNlZCBvbiB0aGlzOiBodHRwOi8vd2VicmVmbGVjdGlvbi5ibG9nc3BvdC5jb20vMjAwOS8wMS8zMi1ieXRlcy10by1rbm93LWlmLXlvdXItYnJvd3Nlci1pcy1pZS5odG1sXG4gICAgICAgIF9pc0lFID0gKCErXCJcXHYxXCIpLFxuICAgICAgICAvLyBoYXNoY2hhbmdlIGlzIHN1cHBvcnRlZCBieSBGRjMuNissIElFOCssIENocm9tZSA1KywgU2FmYXJpIDUrIGJ1dFxuICAgICAgICAvLyBmZWF0dXJlIGRldGVjdGlvbiBmYWlscyBvbiBJRSBjb21wYXRpYmlsaXR5IG1vZGUsIHNvIHdlIG5lZWQgdG9cbiAgICAgICAgLy8gY2hlY2sgZG9jdW1lbnRNb2RlXG4gICAgICAgIF9pc0hhc2hDaGFuZ2VTdXBwb3J0ZWQgPSAoJ29uaGFzaGNoYW5nZScgaW4gd2luZG93KSAmJiBkb2N1bWVudC5kb2N1bWVudE1vZGUgIT09IDcsXG4gICAgICAgIC8vY2hlY2sgaWYgaXMgSUU2LTcgc2luY2UgaGFzaCBjaGFuZ2UgaXMgb25seSBzdXBwb3J0ZWQgb24gSUU4KyBhbmRcbiAgICAgICAgLy9jaGFuZ2luZyBoYXNoIHZhbHVlIG9uIElFNi03IGRvZXNuJ3QgZ2VuZXJhdGUgaGlzdG9yeSByZWNvcmQuXG4gICAgICAgIF9pc0xlZ2FjeUlFID0gX2lzSUUgJiYgIV9pc0hhc2hDaGFuZ2VTdXBwb3J0ZWQsXG4gICAgICAgIF9pc0xvY2FsID0gKGxvY2F0aW9uLnByb3RvY29sID09PSAnZmlsZTonKTtcblxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFByaXZhdGUgTWV0aG9kc1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIGZ1bmN0aW9uIF9lc2NhcGVSZWdFeHAoc3RyKXtcbiAgICAgICAgcmV0dXJuIFN0cmluZyhzdHIgfHwgJycpLnJlcGxhY2UoL1xcVy9nLCBcIlxcXFwkJlwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfdHJpbUhhc2goaGFzaCl7XG4gICAgICAgIGlmICghaGFzaCkgcmV0dXJuICcnO1xuICAgICAgICB2YXIgcmVnZXhwID0gbmV3IFJlZ0V4cCgnXicgKyBfZXNjYXBlUmVnRXhwKGhhc2hlci5wcmVwZW5kSGFzaCkgKyAnfCcgKyBfZXNjYXBlUmVnRXhwKGhhc2hlci5hcHBlbmRIYXNoKSArICckJywgJ2cnKTtcbiAgICAgICAgcmV0dXJuIGhhc2gucmVwbGFjZShyZWdleHAsICcnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZ2V0V2luZG93SGFzaCgpe1xuICAgICAgICAvL3BhcnNlZCBmdWxsIFVSTCBpbnN0ZWFkIG9mIGdldHRpbmcgd2luZG93LmxvY2F0aW9uLmhhc2ggYmVjYXVzZSBGaXJlZm94IGRlY29kZSBoYXNoIHZhbHVlIChhbmQgYWxsIHRoZSBvdGhlciBicm93c2VycyBkb24ndClcbiAgICAgICAgLy9hbHNvIGJlY2F1c2Ugb2YgSUU4IGJ1ZyB3aXRoIGhhc2ggcXVlcnkgaW4gbG9jYWwgZmlsZSBbaXNzdWUgIzZdXG4gICAgICAgIHZhciByZXN1bHQgPSBfaGFzaFZhbFJlZ2V4cC5leGVjKCBoYXNoZXIuZ2V0VVJMKCkgKTtcbiAgICAgICAgdmFyIHBhdGggPSAocmVzdWx0ICYmIHJlc3VsdFsxXSkgfHwgJyc7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIGhhc2hlci5yYXc/IHBhdGggOiBkZWNvZGVVUklDb21wb25lbnQocGF0aCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpbiBjYXNlIHVzZXIgZGlkIG5vdCBzZXQgYGhhc2hlci5yYXdgIGFuZCBkZWNvZGVVUklDb21wb25lbnRcbiAgICAgICAgICAvLyB0aHJvd3MgYW4gZXJyb3IgKHNlZSAjNTcpXG4gICAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZ2V0RnJhbWVIYXNoKCl7XG4gICAgICAgIHJldHVybiAoX2ZyYW1lKT8gX2ZyYW1lLmNvbnRlbnRXaW5kb3cuZnJhbWVIYXNoIDogbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY3JlYXRlRnJhbWUoKXtcbiAgICAgICAgX2ZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgIF9mcmFtZS5zcmMgPSAnYWJvdXQ6YmxhbmsnO1xuICAgICAgICBfZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChfZnJhbWUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF91cGRhdGVGcmFtZSgpe1xuICAgICAgICBpZihfZnJhbWUgJiYgX2hhc2ggIT09IF9nZXRGcmFtZUhhc2goKSl7XG4gICAgICAgICAgICB2YXIgZnJhbWVEb2MgPSBfZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgICAgICAgICAgIGZyYW1lRG9jLm9wZW4oKTtcbiAgICAgICAgICAgIC8vdXBkYXRlIGlmcmFtZSBjb250ZW50IHRvIGZvcmNlIG5ldyBoaXN0b3J5IHJlY29yZC5cbiAgICAgICAgICAgIC8vYmFzZWQgb24gUmVhbGx5IFNpbXBsZSBIaXN0b3J5LCBTV0ZBZGRyZXNzIGFuZCBZVUkuaGlzdG9yeS5cbiAgICAgICAgICAgIGZyYW1lRG9jLndyaXRlKCc8aHRtbD48aGVhZD48dGl0bGU+JyArIGRvY3VtZW50LnRpdGxlICsgJzwvdGl0bGU+PHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+dmFyIGZyYW1lSGFzaD1cIicgKyBfaGFzaCArICdcIjs8L3NjcmlwdD48L2hlYWQ+PGJvZHk+Jm5ic3A7PC9ib2R5PjwvaHRtbD4nKTtcbiAgICAgICAgICAgIGZyYW1lRG9jLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfcmVnaXN0ZXJDaGFuZ2UobmV3SGFzaCwgaXNSZXBsYWNlKXtcbiAgICAgICAgaWYoX2hhc2ggIT09IG5ld0hhc2gpe1xuICAgICAgICAgICAgdmFyIG9sZEhhc2ggPSBfaGFzaDtcbiAgICAgICAgICAgIF9oYXNoID0gbmV3SGFzaDsgLy9zaG91bGQgY29tZSBiZWZvcmUgZXZlbnQgZGlzcGF0Y2ggdG8gbWFrZSBzdXJlIHVzZXIgY2FuIGdldCBwcm9wZXIgdmFsdWUgaW5zaWRlIGV2ZW50IGhhbmRsZXJcbiAgICAgICAgICAgIGlmKF9pc0xlZ2FjeUlFKXtcbiAgICAgICAgICAgICAgICBpZighaXNSZXBsYWNlKXtcbiAgICAgICAgICAgICAgICAgICAgX3VwZGF0ZUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX2ZyYW1lLmNvbnRlbnRXaW5kb3cuZnJhbWVIYXNoID0gbmV3SGFzaDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoYXNoZXIuY2hhbmdlZC5kaXNwYXRjaChfdHJpbUhhc2gobmV3SGFzaCksIF90cmltSGFzaChvbGRIYXNoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoX2lzTGVnYWN5SUUpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfY2hlY2tIaXN0b3J5ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciB3aW5kb3dIYXNoID0gX2dldFdpbmRvd0hhc2goKSxcbiAgICAgICAgICAgICAgICBmcmFtZUhhc2ggPSBfZ2V0RnJhbWVIYXNoKCk7XG4gICAgICAgICAgICBpZihmcmFtZUhhc2ggIT09IF9oYXNoICYmIGZyYW1lSGFzaCAhPT0gd2luZG93SGFzaCl7XG4gICAgICAgICAgICAgICAgLy9kZXRlY3QgY2hhbmdlcyBtYWRlIHByZXNzaW5nIGJyb3dzZXIgaGlzdG9yeSBidXR0b25zLlxuICAgICAgICAgICAgICAgIC8vV29ya2Fyb3VuZCBzaW5jZSBoaXN0b3J5LmJhY2soKSBhbmQgaGlzdG9yeS5mb3J3YXJkKCkgZG9lc24ndFxuICAgICAgICAgICAgICAgIC8vdXBkYXRlIGhhc2ggdmFsdWUgb24gSUU2LzcgYnV0IHVwZGF0ZXMgY29udGVudCBvZiB0aGUgaWZyYW1lLlxuICAgICAgICAgICAgICAgIC8vbmVlZHMgdG8gdHJpbSBoYXNoIHNpbmNlIHZhbHVlIHN0b3JlZCBhbHJlYWR5IGhhdmVcbiAgICAgICAgICAgICAgICAvL3ByZXBlbmRIYXNoICsgYXBwZW5kSGFzaCBmb3IgZmFzdCBjaGVjay5cbiAgICAgICAgICAgICAgICBoYXNoZXIuc2V0SGFzaChfdHJpbUhhc2goZnJhbWVIYXNoKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvd0hhc2ggIT09IF9oYXNoKXtcbiAgICAgICAgICAgICAgICAvL2RldGVjdCBpZiBoYXNoIGNoYW5nZWQgKG1hbnVhbGx5IG9yIHVzaW5nIHNldEhhc2gpXG4gICAgICAgICAgICAgICAgX3JlZ2lzdGVyQ2hhbmdlKHdpbmRvd0hhc2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX2NoZWNrSGlzdG9yeSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgd2luZG93SGFzaCA9IF9nZXRXaW5kb3dIYXNoKCk7XG4gICAgICAgICAgICBpZih3aW5kb3dIYXNoICE9PSBfaGFzaCl7XG4gICAgICAgICAgICAgICAgX3JlZ2lzdGVyQ2hhbmdlKHdpbmRvd0hhc2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIF9hZGRMaXN0ZW5lcihlbG0sIGVUeXBlLCBmbil7XG4gICAgICAgIGlmKGVsbS5hZGRFdmVudExpc3RlbmVyKXtcbiAgICAgICAgICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKGVUeXBlLCBmbiwgZmFsc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGVsbS5hdHRhY2hFdmVudCl7XG4gICAgICAgICAgICBlbG0uYXR0YWNoRXZlbnQoJ29uJyArIGVUeXBlLCBmbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfcmVtb3ZlTGlzdGVuZXIoZWxtLCBlVHlwZSwgZm4pe1xuICAgICAgICBpZihlbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lcil7XG4gICAgICAgICAgICBlbG0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlVHlwZSwgZm4sIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChlbG0uZGV0YWNoRXZlbnQpe1xuICAgICAgICAgICAgZWxtLmRldGFjaEV2ZW50KCdvbicgKyBlVHlwZSwgZm4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX21ha2VQYXRoKHBhdGhzKXtcbiAgICAgICAgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgICAgIHZhciBwYXRoID0gcGF0aHMuam9pbihoYXNoZXIuc2VwYXJhdG9yKTtcbiAgICAgICAgcGF0aCA9IHBhdGg/IGhhc2hlci5wcmVwZW5kSGFzaCArIHBhdGgucmVwbGFjZShfaGFzaFJlZ2V4cCwgJycpICsgaGFzaGVyLmFwcGVuZEhhc2ggOiBwYXRoO1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfZW5jb2RlUGF0aChwYXRoKXtcbiAgICAgICAgLy91c2VkIGVuY29kZVVSSSBpbnN0ZWFkIG9mIGVuY29kZVVSSUNvbXBvbmVudCB0byBwcmVzZXJ2ZSAnPycsICcvJyxcbiAgICAgICAgLy8nIycuIEZpeGVzIFNhZmFyaSBidWcgW2lzc3VlICM4XVxuICAgICAgICBwYXRoID0gZW5jb2RlVVJJKHBhdGgpO1xuICAgICAgICBpZihfaXNJRSAmJiBfaXNMb2NhbCl7XG4gICAgICAgICAgICAvL2ZpeCBJRTggbG9jYWwgZmlsZSBidWcgW2lzc3VlICM2XVxuICAgICAgICAgICAgcGF0aCA9IHBhdGgucmVwbGFjZSgvXFw/LywgJyUzRicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBQdWJsaWMgKEFQSSlcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICBoYXNoZXIgPSAvKiogQGxlbmRzIGhhc2hlciAqLyB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGhhc2hlciBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgICAgICogQGNvbnN0YW50XG4gICAgICAgICAqL1xuICAgICAgICBWRVJTSU9OIDogJzEuMi4wJyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQm9vbGVhbiBkZWNpZGluZyBpZiBoYXNoZXIgZW5jb2Rlcy9kZWNvZGVzIHRoZSBoYXNoIG9yIG5vdC5cbiAgICAgICAgICogPHVsPlxuICAgICAgICAgKiA8bGk+ZGVmYXVsdCB2YWx1ZTogZmFsc2U7PC9saT5cbiAgICAgICAgICogPC91bD5cbiAgICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgcmF3IDogZmFsc2UsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0cmluZyB0aGF0IHNob3VsZCBhbHdheXMgYmUgYWRkZWQgdG8gdGhlIGVuZCBvZiBIYXNoIHZhbHVlLlxuICAgICAgICAgKiA8dWw+XG4gICAgICAgICAqIDxsaT5kZWZhdWx0IHZhbHVlOiAnJzs8L2xpPlxuICAgICAgICAgKiA8bGk+d2lsbCBiZSBhdXRvbWF0aWNhbGx5IHJlbW92ZWQgZnJvbSBgaGFzaGVyLmdldEhhc2goKWA8L2xpPlxuICAgICAgICAgKiA8bGk+YXZvaWQgY29uZmxpY3RzIHdpdGggZWxlbWVudHMgdGhhdCBjb250YWluIElEIGVxdWFsIHRvIGhhc2ggdmFsdWU7PC9saT5cbiAgICAgICAgICogPC91bD5cbiAgICAgICAgICogQHR5cGUgc3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBhcHBlbmRIYXNoIDogJycsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0cmluZyB0aGF0IHNob3VsZCBhbHdheXMgYmUgYWRkZWQgdG8gdGhlIGJlZ2lubmluZyBvZiBIYXNoIHZhbHVlLlxuICAgICAgICAgKiA8dWw+XG4gICAgICAgICAqIDxsaT5kZWZhdWx0IHZhbHVlOiAnLyc7PC9saT5cbiAgICAgICAgICogPGxpPndpbGwgYmUgYXV0b21hdGljYWxseSByZW1vdmVkIGZyb20gYGhhc2hlci5nZXRIYXNoKClgPC9saT5cbiAgICAgICAgICogPGxpPmF2b2lkIGNvbmZsaWN0cyB3aXRoIGVsZW1lbnRzIHRoYXQgY29udGFpbiBJRCBlcXVhbCB0byBoYXNoIHZhbHVlOzwvbGk+XG4gICAgICAgICAqIDwvdWw+XG4gICAgICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgcHJlcGVuZEhhc2ggOiAnLycsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0cmluZyB1c2VkIHRvIHNwbGl0IGhhc2ggcGF0aHM7IHVzZWQgYnkgYGhhc2hlci5nZXRIYXNoQXNBcnJheSgpYCB0byBzcGxpdCBwYXRocy5cbiAgICAgICAgICogPHVsPlxuICAgICAgICAgKiA8bGk+ZGVmYXVsdCB2YWx1ZTogJy8nOzwvbGk+XG4gICAgICAgICAqIDwvdWw+XG4gICAgICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgc2VwYXJhdG9yIDogJy8nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaWduYWwgZGlzcGF0Y2hlZCB3aGVuIGhhc2ggdmFsdWUgY2hhbmdlcy5cbiAgICAgICAgICogLSBwYXNzIGN1cnJlbnQgaGFzaCBhcyAxc3QgcGFyYW1ldGVyIHRvIGxpc3RlbmVycyBhbmQgcHJldmlvdXMgaGFzaCB2YWx1ZSBhcyAybmQgcGFyYW1ldGVyLlxuICAgICAgICAgKiBAdHlwZSBzaWduYWxzLlNpZ25hbFxuICAgICAgICAgKi9cbiAgICAgICAgY2hhbmdlZCA6IG5ldyBTaWduYWwoKSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2lnbmFsIGRpc3BhdGNoZWQgd2hlbiBoYXNoZXIgaXMgc3RvcHBlZC5cbiAgICAgICAgICogLSAgcGFzcyBjdXJyZW50IGhhc2ggYXMgZmlyc3QgcGFyYW1ldGVyIHRvIGxpc3RlbmVyc1xuICAgICAgICAgKiBAdHlwZSBzaWduYWxzLlNpZ25hbFxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcHBlZCA6IG5ldyBTaWduYWwoKSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2lnbmFsIGRpc3BhdGNoZWQgd2hlbiBoYXNoZXIgaXMgaW5pdGlhbGl6ZWQuXG4gICAgICAgICAqIC0gcGFzcyBjdXJyZW50IGhhc2ggYXMgZmlyc3QgcGFyYW1ldGVyIHRvIGxpc3RlbmVycy5cbiAgICAgICAgICogQHR5cGUgc2lnbmFscy5TaWduYWxcbiAgICAgICAgICovXG4gICAgICAgIGluaXRpYWxpemVkIDogbmV3IFNpZ25hbCgpLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdGFydCBsaXN0ZW5pbmcvZGlzcGF0Y2hpbmcgY2hhbmdlcyBpbiB0aGUgaGFzaC9oaXN0b3J5LlxuICAgICAgICAgKiA8dWw+XG4gICAgICAgICAqICAgPGxpPmhhc2hlciB3b24ndCBkaXNwYXRjaCBDSEFOR0UgZXZlbnRzIGJ5IG1hbnVhbGx5IHR5cGluZyBhIG5ldyB2YWx1ZSBvciBwcmVzc2luZyB0aGUgYmFjay9mb3J3YXJkIGJ1dHRvbnMgYmVmb3JlIGNhbGxpbmcgdGhpcyBtZXRob2QuPC9saT5cbiAgICAgICAgICogPC91bD5cbiAgICAgICAgICovXG4gICAgICAgIGluaXQgOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYoX2lzQWN0aXZlKSByZXR1cm47XG5cbiAgICAgICAgICAgIF9oYXNoID0gX2dldFdpbmRvd0hhc2goKTtcblxuICAgICAgICAgICAgLy90aG91Z2h0IGFib3V0IGJyYW5jaGluZy9vdmVybG9hZGluZyBoYXNoZXIuaW5pdCgpIHRvIGF2b2lkIGNoZWNraW5nIG11bHRpcGxlIHRpbWVzIGJ1dFxuICAgICAgICAgICAgLy9kb24ndCB0aGluayB3b3J0aCBkb2luZyBpdCBzaW5jZSBpdCBwcm9iYWJseSB3b24ndCBiZSBjYWxsZWQgbXVsdGlwbGUgdGltZXMuXG4gICAgICAgICAgICBpZihfaXNIYXNoQ2hhbmdlU3VwcG9ydGVkKXtcbiAgICAgICAgICAgICAgICBfYWRkTGlzdGVuZXIod2luZG93LCAnaGFzaGNoYW5nZScsIF9jaGVja0hpc3RvcnkpO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKF9pc0xlZ2FjeUlFKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoISBfZnJhbWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3VwZGF0ZUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9jaGVja0ludGVydmFsID0gc2V0SW50ZXJ2YWwoX2NoZWNrSGlzdG9yeSwgUE9PTF9JTlRFUlZBTCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBoYXNoZXIuaW5pdGlhbGl6ZWQuZGlzcGF0Y2goX3RyaW1IYXNoKF9oYXNoKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0b3AgbGlzdGVuaW5nL2Rpc3BhdGNoaW5nIGNoYW5nZXMgaW4gdGhlIGhhc2gvaGlzdG9yeS5cbiAgICAgICAgICogPHVsPlxuICAgICAgICAgKiAgIDxsaT5oYXNoZXIgd29uJ3QgZGlzcGF0Y2ggQ0hBTkdFIGV2ZW50cyBieSBtYW51YWxseSB0eXBpbmcgYSBuZXcgdmFsdWUgb3IgcHJlc3NpbmcgdGhlIGJhY2svZm9yd2FyZCBidXR0b25zIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QsIHVubGVzcyB5b3UgY2FsbCBoYXNoZXIuaW5pdCgpIGFnYWluLjwvbGk+XG4gICAgICAgICAqICAgPGxpPmhhc2hlciB3aWxsIHN0aWxsIGRpc3BhdGNoIGNoYW5nZXMgbWFkZSBwcm9ncmFtYXRpY2FsbHkgYnkgY2FsbGluZyBoYXNoZXIuc2V0SGFzaCgpOzwvbGk+XG4gICAgICAgICAqIDwvdWw+XG4gICAgICAgICAqL1xuICAgICAgICBzdG9wIDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKCEgX2lzQWN0aXZlKSByZXR1cm47XG5cbiAgICAgICAgICAgIGlmKF9pc0hhc2hDaGFuZ2VTdXBwb3J0ZWQpe1xuICAgICAgICAgICAgICAgIF9yZW1vdmVMaXN0ZW5lcih3aW5kb3csICdoYXNoY2hhbmdlJywgX2NoZWNrSGlzdG9yeSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKF9jaGVja0ludGVydmFsKTtcbiAgICAgICAgICAgICAgICBfY2hlY2tJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF9pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaGFzaGVyLnN0b3BwZWQuZGlzcGF0Y2goX3RyaW1IYXNoKF9oYXNoKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59ICAgIElmIGhhc2hlciBpcyBsaXN0ZW5pbmcgdG8gY2hhbmdlcyBvbiB0aGUgYnJvd3NlciBoaXN0b3J5IGFuZC9vciBoYXNoIHZhbHVlLlxuICAgICAgICAgKi9cbiAgICAgICAgaXNBY3RpdmUgOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIF9pc0FjdGl2ZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBGdWxsIFVSTC5cbiAgICAgICAgICovXG4gICAgICAgIGdldFVSTCA6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gUmV0cmlldmUgVVJMIHdpdGhvdXQgcXVlcnkgc3RyaW5nIGFuZCBoYXNoLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0QmFzZVVSTCA6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4gaGFzaGVyLmdldFVSTCgpLnJlcGxhY2UoX2Jhc2VVcmxSZWdleHAsICcnKTsgLy9yZW1vdmVzIGV2ZXJ5dGhpbmcgYWZ0ZXIgJz8nIGFuZC9vciAnIydcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IEhhc2ggdmFsdWUsIGdlbmVyYXRpbmcgYSBuZXcgaGlzdG9yeSByZWNvcmQuXG4gICAgICAgICAqIEBwYXJhbSB7Li4uc3RyaW5nfSBwYXRoICAgIEhhc2ggdmFsdWUgd2l0aG91dCAnIycuIEhhc2hlciB3aWxsIGpvaW5cbiAgICAgICAgICogcGF0aCBzZWdtZW50cyB1c2luZyBgaGFzaGVyLnNlcGFyYXRvcmAgYW5kIHByZXBlbmQvYXBwZW5kIGhhc2ggdmFsdWVcbiAgICAgICAgICogd2l0aCBgaGFzaGVyLmFwcGVuZEhhc2hgIGFuZCBgaGFzaGVyLnByZXBlbmRIYXNoYFxuICAgICAgICAgKiBAZXhhbXBsZSBoYXNoZXIuc2V0SGFzaCgnbG9yZW0nLCAnaXBzdW0nLCAnZG9sb3InKSAtPiAnIy9sb3JlbS9pcHN1bS9kb2xvcidcbiAgICAgICAgICovXG4gICAgICAgIHNldEhhc2ggOiBmdW5jdGlvbihwYXRoKXtcbiAgICAgICAgICAgIHBhdGggPSBfbWFrZVBhdGguYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIGlmKHBhdGggIT09IF9oYXNoKXtcbiAgICAgICAgICAgICAgICAvLyB3ZSBzaG91bGQgc3RvcmUgcmF3IHZhbHVlXG4gICAgICAgICAgICAgICAgX3JlZ2lzdGVyQ2hhbmdlKHBhdGgpO1xuICAgICAgICAgICAgICAgIGlmIChwYXRoID09PSBfaGFzaCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBjaGVjayBpZiBwYXRoIGlzIHN0aWxsID09PSBfaGFzaCB0byBhdm9pZCBlcnJvciBpblxuICAgICAgICAgICAgICAgICAgICAvLyBjYXNlIG9mIG11bHRpcGxlIGNvbnNlY3V0aXZlIHJlZGlyZWN0cyBbaXNzdWUgIzM5XVxuICAgICAgICAgICAgICAgICAgICBpZiAoISBoYXNoZXIucmF3KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoID0gX2VuY29kZVBhdGgocGF0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnIycgKyBwYXRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IEhhc2ggdmFsdWUgd2l0aG91dCBrZWVwaW5nIHByZXZpb3VzIGhhc2ggb24gdGhlIGhpc3RvcnkgcmVjb3JkLlxuICAgICAgICAgKiBTaW1pbGFyIHRvIGNhbGxpbmcgYHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiIy9oYXNoXCIpYCBidXQgd2lsbCBhbHNvIHdvcmsgb24gSUU2LTcuXG4gICAgICAgICAqIEBwYXJhbSB7Li4uc3RyaW5nfSBwYXRoICAgIEhhc2ggdmFsdWUgd2l0aG91dCAnIycuIEhhc2hlciB3aWxsIGpvaW5cbiAgICAgICAgICogcGF0aCBzZWdtZW50cyB1c2luZyBgaGFzaGVyLnNlcGFyYXRvcmAgYW5kIHByZXBlbmQvYXBwZW5kIGhhc2ggdmFsdWVcbiAgICAgICAgICogd2l0aCBgaGFzaGVyLmFwcGVuZEhhc2hgIGFuZCBgaGFzaGVyLnByZXBlbmRIYXNoYFxuICAgICAgICAgKiBAZXhhbXBsZSBoYXNoZXIucmVwbGFjZUhhc2goJ2xvcmVtJywgJ2lwc3VtJywgJ2RvbG9yJykgLT4gJyMvbG9yZW0vaXBzdW0vZG9sb3InXG4gICAgICAgICAqL1xuICAgICAgICByZXBsYWNlSGFzaCA6IGZ1bmN0aW9uKHBhdGgpe1xuICAgICAgICAgICAgcGF0aCA9IF9tYWtlUGF0aC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgaWYocGF0aCAhPT0gX2hhc2gpe1xuICAgICAgICAgICAgICAgIC8vIHdlIHNob3VsZCBzdG9yZSByYXcgdmFsdWVcbiAgICAgICAgICAgICAgICBfcmVnaXN0ZXJDaGFuZ2UocGF0aCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhdGggPT09IF9oYXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGNoZWNrIGlmIHBhdGggaXMgc3RpbGwgPT09IF9oYXNoIHRvIGF2b2lkIGVycm9yIGluXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhc2Ugb2YgbXVsdGlwbGUgY29uc2VjdXRpdmUgcmVkaXJlY3RzIFtpc3N1ZSAjMzldXG4gICAgICAgICAgICAgICAgICAgIGlmICghIGhhc2hlci5yYXcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGggPSBfZW5jb2RlUGF0aChwYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnIycgKyBwYXRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gSGFzaCB2YWx1ZSB3aXRob3V0ICcjJywgYGhhc2hlci5hcHBlbmRIYXNoYCBhbmQgYGhhc2hlci5wcmVwZW5kSGFzaGAuXG4gICAgICAgICAqL1xuICAgICAgICBnZXRIYXNoIDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vZGlkbid0IHVzZWQgYWN0dWFsIHZhbHVlIG9mIHRoZSBgd2luZG93LmxvY2F0aW9uLmhhc2hgIHRvIGF2b2lkIGJyZWFraW5nIHRoZSBhcHBsaWNhdGlvbiBpbiBjYXNlIGB3aW5kb3cubG9jYXRpb24uaGFzaGAgaXNuJ3QgYXZhaWxhYmxlIGFuZCBhbHNvIGJlY2F1c2UgdmFsdWUgc2hvdWxkIGFsd2F5cyBiZSBzeW5jaGVkLlxuICAgICAgICAgICAgcmV0dXJuIF90cmltSGFzaChfaGFzaCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5LjxzdHJpbmc+fSBIYXNoIHZhbHVlIHNwbGl0IGludG8gYW4gQXJyYXkuXG4gICAgICAgICAqL1xuICAgICAgICBnZXRIYXNoQXNBcnJheSA6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4gaGFzaGVyLmdldEhhc2goKS5zcGxpdChoYXNoZXIuc2VwYXJhdG9yKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlcyBhbGwgZXZlbnQgbGlzdGVuZXJzLCBzdG9wcyBoYXNoZXIgYW5kIGRlc3Ryb3kgaGFzaGVyIG9iamVjdC5cbiAgICAgICAgICogLSBJTVBPUlRBTlQ6IGhhc2hlciB3b24ndCB3b3JrIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QsIGhhc2hlciBPYmplY3Qgd2lsbCBiZSBkZWxldGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgZGlzcG9zZSA6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBoYXNoZXIuc3RvcCgpO1xuICAgICAgICAgICAgaGFzaGVyLmluaXRpYWxpemVkLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIGhhc2hlci5zdG9wcGVkLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIGhhc2hlci5jaGFuZ2VkLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIF9mcmFtZSA9IGhhc2hlciA9IHdpbmRvdy5oYXNoZXIgPSBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IEEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICB0b1N0cmluZyA6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4gJ1toYXNoZXIgdmVyc2lvbj1cIicrIGhhc2hlci5WRVJTSU9OICsnXCIgaGFzaD1cIicrIGhhc2hlci5nZXRIYXNoKCkgKydcIl0nO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgaGFzaGVyLmluaXRpYWxpemVkLm1lbW9yaXplID0gdHJ1ZTsgLy9zZWUgIzMzXG5cbiAgICByZXR1cm4gaGFzaGVyO1xuXG59KHdpbmRvdykpO1xuXG5cbiAgICByZXR1cm4gaGFzaGVyO1xufTtcblxuaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ3NpZ25hbHMnXSwgZmFjdG9yeSk7XG59IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdzaWduYWxzJykpO1xufSBlbHNlIHtcbiAgICAvKmpzaGludCBzdWI6dHJ1ZSAqL1xuICAgIHdpbmRvd1snaGFzaGVyJ10gPSBmYWN0b3J5KHdpbmRvd1snc2lnbmFscyddKTtcbn1cblxufSgpKTtcbiIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuIiwiIWZ1bmN0aW9uKGUsbil7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bihleHBvcnRzKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImV4cG9ydHNcIl0sbik6bihlLnBldGl0RG9tPWUucGV0aXREb218fHt9KX0odGhpcyxmdW5jdGlvbihlKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsbil7Zm9yKHZhciByPTA7cjxlLmxlbmd0aDtyKyspe3ZhciBvPWVbcl07aWYoUyhvKSlyZXR1cm4gdChlLHIsZS5zbGljZSgwLHIpLG4pO2Iobyk/biYmIW8uaXNTVkcmJihvLmlzU1ZHPSEwKTplW3JdPXtfdGV4dDpudWxsPT1vP1wiXCI6b319cmV0dXJuIGV9ZnVuY3Rpb24gdChlLG4scixvKXtmb3IodmFyIGk9bjtpPGUubGVuZ3RoO2krKyl7dmFyIGw9ZVtpXTtTKGwpP3QobCwwLHIsbyk6YihsKT8obyYmIWwuaXNTVkcmJihsLmlzU1ZHPSEwKSxyLnB1c2gobCkpOnIucHVzaCh7X3RleHQ6bnVsbD09bD9cIlwiOmx9KX1yZXR1cm4gcn1mdW5jdGlvbiByKGUsbix0LHIpe2lmKHQhPT1yKXJldHVybiEwO2Zvcih2YXIgbyBpbiBlKWlmKGVbb10hPT1uW29dKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIG8oZSl7dmFyIG47aWYobnVsbCE9ZS5fdGV4dCluPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGUuX3RleHQpO2Vsc2UgaWYoITA9PT1lLl92bm9kZSl7dmFyIHQ9ZS50eXBlLHI9ZS5wcm9wcyxsPWUuY29udGVudCxmPWUuaXNTVkc7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpe3ZhciB2O3Y9YShuPWY/ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKEcsdCk6ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0KSxyLHZvaWQgMCksUyhsKT9pKG4sbCk6bi5hcHBlbmRDaGlsZChvKGwpKSxudWxsIT12JiZ1KG4scix2b2lkIDAsdil9ZWxzZSBpZihWKHQpKW49dC5tb3VudChyLGwpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdClpZihWKHQucHJvdG90eXBlKSl7dmFyIGQ9bmV3IHQocixsKTtuPWQubW91bnQocixsKSxlLl9kYXRhPWR9ZWxzZXt2YXIgcD10KHIsbCk7bj1vKHApLGUuX2RhdGE9cH19aWYobnVsbD09bil0aHJvdyBuZXcgRXJyb3IoXCJVbmtvd24gbm9kZSB0eXBlIVwiKTtyZXR1cm4gZS5fbm9kZT1uLG59ZnVuY3Rpb24gaShlLG4pe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06MCxyPWFyZ3VtZW50cy5sZW5ndGg+MyYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTpuLmxlbmd0aC0xLGk9YXJndW1lbnRzWzRdO3Q8PXI7KXt2YXIgbD1uW3QrK107ZS5pbnNlcnRCZWZvcmUobyhsKSxpKX19ZnVuY3Rpb24gbChlLG4pe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTowLHI9YXJndW1lbnRzLmxlbmd0aD4zJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOm4ubGVuZ3RoLTEsbz12b2lkIDA7Zm9yKGUuY2hpbGROb2Rlcy5sZW5ndGg9PT1yLXQrMSYmKGUudGV4dENvbnRlbnQ9XCJcIixvPSEwKTt0PD1yOyl7dmFyIGk9blt0KytdO298fGUucmVtb3ZlQ2hpbGQoaS5fbm9kZSksZihpKX19ZnVuY3Rpb24gZihlKXtpZihTKGUpKWZvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKWYoZVtuXSk7ZWxzZSEwPT09ZS5fdm5vZGUmJihWKGUudHlwZSk/ZS50eXBlLnVubW91bnQoZS5fbm9kZSk6XCJmdW5jdGlvblwiPT10eXBlb2YgZS50eXBlJiZWKGUudHlwZS5wcm90b3R5cGUpP2UuX2RhdGEudW5tb3VudChlLl9ub2RlKTpudWxsIT1lLmNvbnRlbnQmJmYoZS5jb250ZW50KSl9ZnVuY3Rpb24gdShlLG4sdCxyKXtmb3IodmFyIG8saT0wO2k8ci5sZW5ndGg7aSsrKXtvPXJbaV07dmFyIGw9dCYmdFtvXSxmPW5bb107bCE9PWYmJihlW29dPWYpfX1mdW5jdGlvbiBhKGUsbix0KXt2YXIgcj1bXTtmb3IodmFyIG8gaW4gbilpZihvLnN0YXJ0c1dpdGgoXCJvblwiKXx8byBpbiBDKXIucHVzaChvKTtlbHNle3ZhciBpPW51bGwhPXQ/dFtvXTp2b2lkIDAsbD1uW29dO2khPT1sJiZ2KGUsbyxsKX1mb3IobyBpbiB0KW8gaW4gbnx8ZS5yZW1vdmVBdHRyaWJ1dGUobyk7aWYoci5sZW5ndGg+MClyZXR1cm4gcn1mdW5jdGlvbiB2KGUsbix0KXtpZighMD09PXQpZS5zZXRBdHRyaWJ1dGUobixcIlwiKTtlbHNlIGlmKCExPT09dCllLnJlbW92ZUF0dHJpYnV0ZShuKTtlbHNle3ZhciByPU1bbl07dm9pZCAwIT09cj9lLnNldEF0dHJpYnV0ZU5TKHIsbix0KTplLnNldEF0dHJpYnV0ZShuLHQpfX1mdW5jdGlvbiBkKGUsbix0KXt2YXIgaT1uLl9ub2RlO2lmKG49PT1lKXJldHVybiBpO3ZhciBsLHY7aWYobnVsbCE9KGw9bi5fdGV4dCkmJm51bGwhPSh2PWUuX3RleHQpKWwhPT12JiYoaS5ub2RlVmFsdWU9dik7ZWxzZSBpZihuLnR5cGU9PT1lLnR5cGUmJm4uaXNTVkc9PT1lLmlzU1ZHKXt2YXIgcz1uLnR5cGU7aWYoVihzKSlzLnBhdGNoKGksZS5wcm9wcyxuLnByb3BzLGUuY29udGVudCxuLmNvbnRlbnQpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgcylpZihWKHMucHJvdG90eXBlKSl7dmFyIGM9bi5fZGF0YTtjLnBhdGNoKGksZS5wcm9wcyxuLnByb3BzLGUuY29udGVudCxuLmNvbnRlbnQpLGUuX2RhdGE9Y31lbHNlIGlmKChzLnNob3VsZFVwZGF0ZXx8cikoZS5wcm9wcyxuLnByb3BzLGUuY29udGVudCxuLmNvbnRlbnQpKXt2YXIgaD1zKGUucHJvcHMsZS5jb250ZW50KTtpPWQoaCxuLl9kYXRhLHQpLGUuX2RhdGE9aH1lbHNlIGUuX2RhdGE9bi5fZGF0YTtlbHNle2lmKFwic3RyaW5nXCIhPXR5cGVvZiBzKXRocm93IG5ldyBFcnJvcihcIlVua293biBub2RlIHR5cGUhIFwiK3MpO3ZhciB5PWEoaSxlLnByb3BzLG4ucHJvcHMpO3AoaSxlLmNvbnRlbnQsbi5jb250ZW50KSxudWxsIT15JiZ1KGksZS5wcm9wcyxuLnByb3BzLHkpfX1lbHNlIGk9byhlKSx0JiZ0LnJlcGxhY2VDaGlsZChpLG4uX25vZGUpLGYobik7cmV0dXJuIGUuX25vZGU9aSxpfWZ1bmN0aW9uIHAoZSxuLHQpe1Mobil8fFModCk/UyhuKSYmUyh0KT9jKGUsbix0KToobChlLHQsMCx0Lmxlbmd0aC0xKSxpKGUsbikpOm4hPT10JiZkKG4sdCxlKX1mdW5jdGlvbiBzKGUsbil7cmV0dXJuIGUua2V5PT09bi5rZXl9ZnVuY3Rpb24gYyhlLG4sdCl7dmFyIHI9YXJndW1lbnRzLmxlbmd0aD4zJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOjAsdT1hcmd1bWVudHMubGVuZ3RoPjQmJnZvaWQgMCE9PWFyZ3VtZW50c1s0XT9hcmd1bWVudHNbNF06bi5sZW5ndGgtMSxhPWFyZ3VtZW50cy5sZW5ndGg+NSYmdm9pZCAwIT09YXJndW1lbnRzWzVdP2FyZ3VtZW50c1s1XTowLHY9YXJndW1lbnRzLmxlbmd0aD42JiZ2b2lkIDAhPT1hcmd1bWVudHNbNl0/YXJndW1lbnRzWzZdOnQubGVuZ3RoLTE7aWYobiE9PXQpe3ZhciBwLGM9aChuLHQscix1LGEsdixzLGUpO2lmKHIrPWMsYSs9YyxjPXkobix0LHIsdSxhLHYscyxlKSx1LT1jLHYtPWMsIShyPnUmJmE+dikpe2lmKHI8PXUmJmE+dilyZXR1cm4gcD10W2FdLHZvaWQgaShlLG4scix1LHAmJnAuX25vZGUpO2lmKGE8PXYmJnI+dSlsKGUsdCxhLHYpO2Vsc2V7dmFyIF89di1hKzEsaz11LXIrMTtpZihjPS0xLF88ayl7aWYoKGM9dyhuLHQscix1LGEsdixzKSk+PTApe2koZSxuLHIsYy0xLChwPXRbYV0pLl9ub2RlKTt2YXIgeD1jK187Zm9yKHI9YztyPHg7KWQobltyKytdLHRbYSsrXSk7cmV0dXJuIHA9dFt2XSx2b2lkIGkoZSxuLHIsdSxwJiZwLl9ub2RlLm5leHRTaWJsaW5nKX19ZWxzZSBpZihfPmsmJihjPXcodCxuLGEsdixyLHUscykpPj0wKXtmb3IobChlLHQsYSxjLTEpLHg9YytrLGE9YzthPHg7KWQobltyKytdLHRbYSsrXSk7cmV0dXJuIHZvaWQgbChlLHQsYSx2KX1pZihhPT09dil7dmFyIEE9dFthXS5fbm9kZTtyZXR1cm4gaShlLG4scix1LEEpLGUucmVtb3ZlQ2hpbGQoQSksdm9pZCBmKEEpfWlmKHI9PT11KXJldHVybiBlLmluc2VydEJlZm9yZShvKG5bcl0pLHRbYV0uX25vZGUpLHZvaWQgbChlLHQsYSx2KTtnKGUsbix0LHIsdSxhLHYpJiZtKGUsbix0LHIsdSxhLHYpfX19fWZ1bmN0aW9uIGgoZSxuLHQscixvLGksbCxmKXtmb3IodmFyIHUsYSx2PTA7dDw9ciYmbzw9aSYmbCh1PWVbdF0sYT1uW29dKTspZiYmZCh1LGEsZiksdCsrLG8rKyx2Kys7cmV0dXJuIHZ9ZnVuY3Rpb24geShlLG4sdCxyLG8saSxsLGYpe2Zvcih2YXIgdSxhLHY9MDt0PD1yJiZvPD1pJiZsKHU9ZVtyXSxhPW5baV0pOylmJiZkKHUsYSxmKSxyLS0saS0tLHYrKztyZXR1cm4gdn1mdW5jdGlvbiBnKGUsbix0KXt2YXIgcixvLGksbCxmLHUsYSx2PWFyZ3VtZW50cy5sZW5ndGg+MyYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTowLGQ9YXJndW1lbnRzLmxlbmd0aD40JiZ2b2lkIDAhPT1hcmd1bWVudHNbNF0/YXJndW1lbnRzWzRdOm4ubGVuZ3RoLTEscD1hcmd1bWVudHMubGVuZ3RoPjUmJnZvaWQgMCE9PWFyZ3VtZW50c1s1XT9hcmd1bWVudHNbNV06MCxjPWQtdisxLGg9KGFyZ3VtZW50cy5sZW5ndGg+NiYmdm9pZCAwIT09YXJndW1lbnRzWzZdP2FyZ3VtZW50c1s2XTp0Lmxlbmd0aC0xKS1wKzEseT1jK2gsZz1bXTtlOmZvcihyPTA7cjw9eTtyKyspe2lmKHI+NTApcmV0dXJuITA7Zm9yKGE9ci0xLGY9cj9nW3ItMV06WzAsMF0sdT1nW3JdPVtdLG89LXI7bzw9cjtvKz0yKXtmb3IoaT0obD1vPT09LXJ8fG8hPT1yJiZmW2Erby0xXTxmW2ErbysxXT9mW2ErbysxXTpmW2Erby0xXSsxKS1vO2w8aCYmaTxjJiZzKHRbcCtsXSxuW3YraV0pOylsKyssaSsrO2lmKGw9PT1oJiZpPT09YylicmVhayBlO3VbcitvXT1sfX12YXIgbSxrPUFycmF5KHIvMit5LzIpLHc9e30seD1rLmxlbmd0aC0xO2ZvcihyPWcubGVuZ3RoLTE7cj49MDtyLS0pe2Zvcig7bD4wJiZpPjAmJnModFtwK2wtMV0sblt2K2ktMV0pOylrW3gtLV09TixsLS0saS0tO2lmKCFyKWJyZWFrO2E9ci0xLGY9cj9nW3ItMV06WzAsMF0sKG89bC1pKT09PS1yfHxvIT09ciYmZlthK28tMV08ZlthK28rMV0/KGktLSxrW3gtLV09Qik6KGwtLSxrW3gtLV09VSxudWxsIT0obT10W3ArbF0pLmtleSYmKHdbbS5rZXldPXArbCkpfV8oZSxrLG4sdCx2LHAsdyl9ZnVuY3Rpb24gXyhlLG4sdCxyLGksbCx1KXtmb3IodmFyIGEsdixwLHMsYz17fSxoPTAseT1pLGc9bDtoPG4ubGVuZ3RoO2grKyl7dmFyIF89bltoXTtfPT09Tj9kKHRbeSsrXSxyW2crK10sZSk6Xz09PUI/KHM9bnVsbCxudWxsIT0oYT10W3krK10pLmtleSYmKHM9dVthLmtleV0pLG51bGwhPXM/KHA9ZChhLHJbc10pLGNbYS5rZXldPXMpOnA9byhhKSxlLmluc2VydEJlZm9yZShwLGc8ci5sZW5ndGg/cltnXS5fbm9kZTpudWxsKSk6Xz09PVUmJmcrK31mb3IoaD0wLGc9bDtoPG4ubGVuZ3RoO2grKyl7dmFyIG09bltoXTttPT09Tj9nKys6bT09PVUmJihudWxsIT0odj1yW2crK10pLmtleSYmbnVsbCE9Y1t2LmtleV18fChlLnJlbW92ZUNoaWxkKHYuX25vZGUpLGYodikpKX19ZnVuY3Rpb24gbShlLG4sdCxyLG8saSxsKXt2YXIgZix1LGEsdixkPXt9LHA9W10scz0wLGM9by1yKzEsaD1sLWkrMSx5PU1hdGgubWluKGMsaCksZz1BcnJheSh5KzEpO2dbMF09LTE7Zm9yKHZhciBtPTE7bTxnLmxlbmd0aDttKyspZ1ttXT1sKzE7dmFyIHc9QXJyYXkoeSk7Zm9yKG09aTttPD1sO20rKyludWxsIT0odj10W21dLmtleSk/ZFt2XT1tOnAucHVzaChtKTtmb3IobT1yO208PW87bSsrKW51bGwhPShhPW51bGw9PShmPW5bbV0pLmtleT9wW3MrK106ZFtmLmtleV0pJiYodT1rKGcsYSkpPj0wJiYoZ1t1XT1hLHdbdV09e25ld2k6bSxvbGRpOmEscHJldjp3W3UtMV19KTtmb3IodT1nLmxlbmd0aC0xO2dbdV0+bDspdS0tO2Zvcih2YXIgeD13W3VdLEE9QXJyYXkoaCtjLXUpLFM9byxiPWwsVj1BLmxlbmd0aC0xO3g7KXtmb3IodmFyIEc9eCxDPUcubmV3aSxFPUcub2xkaTtTPkM7KUFbVi0tXT1CLFMtLTtmb3IoO2I+RTspQVtWLS1dPVUsYi0tO0FbVi0tXT1OLFMtLSxiLS0seD14LnByZXZ9Zm9yKDtTPj1yOylBW1YtLV09QixTLS07Zm9yKDtiPj1pOylBW1YtLV09VSxiLS07XyhlLEEsbix0LHIsaSxkKX1mdW5jdGlvbiBrKGUsbil7Zm9yKHZhciB0PTEscj1lLmxlbmd0aC0xO3Q8PXI7KXt2YXIgbz1NYXRoLmNlaWwoKHQrcikvMik7bjxlW29dP3I9by0xOnQ9bysxfXJldHVybiB0fWZ1bmN0aW9uIHcoZSxuLHQscixvLGksbCl7Zm9yKHZhciBmPW8sdT0tMSxhPWktbysxO3Q8PXImJnItdCsxPj1hOyl7aWYobChlW3RdLG5bZl0pKXtpZih1PDAmJih1PXQpLCsrZj5pKXJldHVybiB1fWVsc2UgdT0tMSxmPW87dCsrfXJldHVybi0xfXZhciB4PXt9LEE9W10sUz1BcnJheS5pc0FycmF5LGI9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJihudWxsIT1lLl92bm9kZXx8bnVsbCE9ZS5fdGV4dCl9LFY9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUubW91bnQmJmUucGF0Y2gmJmUudW5tb3VudH0sRz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsQz17c2VsZWN0ZWQ6ITAsdmFsdWU6ITAsY2hlY2tlZDohMCxpbm5lckhUTUw6ITB9LEU9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsTT17c2hvdzpFLGFjdHVhdGU6RSxocmVmOkV9LE49MixCPTQsVT04O2UuaD1mdW5jdGlvbihlLHQscil7dmFyIG8saSxsLGY9ITEsdT1hcmd1bWVudHMubGVuZ3RoLTI7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpe2lmKDE9PT11KW89cjtlbHNlIGlmKHU+MSl7Zm9yKGk9QXJyYXkodSksbD0wO2w8dTtsKyspaVtsXT1hcmd1bWVudHNbbCsyXTtvPWl9fWVsc2UgaWYoZj1cInN2Z1wiPT09ZSwxPT09dSlTKHIpP289bihyLGYpOmIocik/KHIuaXNTVkc9ZixvPVtyXSk6bz1be190ZXh0Om51bGw9PXI/XCJcIjpyfV07ZWxzZSBpZih1PjEpe2ZvcihpPUFycmF5KHUpLGw9MDtsPHU7bCsrKWlbbF09YXJndW1lbnRzW2wrMl07bz1uKGksZil9ZWxzZSBvPUE7cmV0dXJue192bm9kZTohMCxpc1NWRzpmLHR5cGU6ZSxrZXk6dCYmdC5rZXl8fG51bGwscHJvcHM6dHx8eCxjb250ZW50Om99fSxlLm1vdW50PW8sZS5wYXRjaD1kLGUudW5tb3VudD1mLGUuZGlmZkNoaWxkcmVuPWMsT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBldGl0LWRvbS5taW4uanMubWFwXG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLypqc2xpbnQgb25ldmFyOnRydWUsIHVuZGVmOnRydWUsIG5ld2NhcDp0cnVlLCByZWdleHA6dHJ1ZSwgYml0d2lzZTp0cnVlLCBtYXhlcnI6NTAsIGluZGVudDo0LCB3aGl0ZTpmYWxzZSwgbm9tZW46ZmFsc2UsIHBsdXNwbHVzOmZhbHNlICovXG4vKmdsb2JhbCBkZWZpbmU6ZmFsc2UsIHJlcXVpcmU6ZmFsc2UsIGV4cG9ydHM6ZmFsc2UsIG1vZHVsZTpmYWxzZSwgc2lnbmFsczpmYWxzZSAqL1xuXG4vKiogQGxpY2Vuc2VcbiAqIEpTIFNpZ25hbHMgPGh0dHA6Ly9taWxsZXJtZWRlaXJvcy5naXRodWIuY29tL2pzLXNpZ25hbHMvPlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBBdXRob3I6IE1pbGxlciBNZWRlaXJvc1xuICogVmVyc2lvbjogMS4wLjAgLSBCdWlsZDogMjY4ICgyMDEyLzExLzI5IDA1OjQ4IFBNKVxuICovXG5cbihmdW5jdGlvbihnbG9iYWwpe1xuXG4gICAgLy8gU2lnbmFsQmluZGluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAvKipcbiAgICAgKiBPYmplY3QgdGhhdCByZXByZXNlbnRzIGEgYmluZGluZyBiZXR3ZWVuIGEgU2lnbmFsIGFuZCBhIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICAgICAqIDxiciAvPi0gPHN0cm9uZz5UaGlzIGlzIGFuIGludGVybmFsIGNvbnN0cnVjdG9yIGFuZCBzaG91bGRuJ3QgYmUgY2FsbGVkIGJ5IHJlZ3VsYXIgdXNlcnMuPC9zdHJvbmc+XG4gICAgICogPGJyIC8+LSBpbnNwaXJlZCBieSBKb2EgRWJlcnQgQVMzIFNpZ25hbEJpbmRpbmcgYW5kIFJvYmVydCBQZW5uZXIncyBTbG90IGNsYXNzZXMuXG4gICAgICogQGF1dGhvciBNaWxsZXIgTWVkZWlyb3NcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKiBAbmFtZSBTaWduYWxCaW5kaW5nXG4gICAgICogQHBhcmFtIHtTaWduYWx9IHNpZ25hbCBSZWZlcmVuY2UgdG8gU2lnbmFsIG9iamVjdCB0aGF0IGxpc3RlbmVyIGlzIGN1cnJlbnRseSBib3VuZCB0by5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBIYW5kbGVyIGZ1bmN0aW9uIGJvdW5kIHRvIHRoZSBzaWduYWwuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc09uY2UgSWYgYmluZGluZyBzaG91bGQgYmUgZXhlY3V0ZWQganVzdCBvbmNlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbbGlzdGVuZXJDb250ZXh0XSBDb250ZXh0IG9uIHdoaWNoIGxpc3RlbmVyIHdpbGwgYmUgZXhlY3V0ZWQgKG9iamVjdCB0aGF0IHNob3VsZCByZXByZXNlbnQgdGhlIGB0aGlzYCB2YXJpYWJsZSBpbnNpZGUgbGlzdGVuZXIgZnVuY3Rpb24pLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbcHJpb3JpdHldIFRoZSBwcmlvcml0eSBsZXZlbCBvZiB0aGUgZXZlbnQgbGlzdGVuZXIuIChkZWZhdWx0ID0gMCkuXG4gICAgICovXG4gICAgZnVuY3Rpb24gU2lnbmFsQmluZGluZyhzaWduYWwsIGxpc3RlbmVyLCBpc09uY2UsIGxpc3RlbmVyQ29udGV4dCwgcHJpb3JpdHkpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSGFuZGxlciBmdW5jdGlvbiBib3VuZCB0byB0aGUgc2lnbmFsLlxuICAgICAgICAgKiBAdHlwZSBGdW5jdGlvblxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fbGlzdGVuZXIgPSBsaXN0ZW5lcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYmluZGluZyBzaG91bGQgYmUgZXhlY3V0ZWQganVzdCBvbmNlLlxuICAgICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9pc09uY2UgPSBpc09uY2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnRleHQgb24gd2hpY2ggbGlzdGVuZXIgd2lsbCBiZSBleGVjdXRlZCAob2JqZWN0IHRoYXQgc2hvdWxkIHJlcHJlc2VudCB0aGUgYHRoaXNgIHZhcmlhYmxlIGluc2lkZSBsaXN0ZW5lciBmdW5jdGlvbikuXG4gICAgICAgICAqIEBtZW1iZXJPZiBTaWduYWxCaW5kaW5nLnByb3RvdHlwZVxuICAgICAgICAgKiBAbmFtZSBjb250ZXh0XG4gICAgICAgICAqIEB0eXBlIE9iamVjdHx1bmRlZmluZWR8bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbGlzdGVuZXJDb250ZXh0O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZWZlcmVuY2UgdG8gU2lnbmFsIG9iamVjdCB0aGF0IGxpc3RlbmVyIGlzIGN1cnJlbnRseSBib3VuZCB0by5cbiAgICAgICAgICogQHR5cGUgU2lnbmFsXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9zaWduYWwgPSBzaWduYWw7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExpc3RlbmVyIHByaW9yaXR5XG4gICAgICAgICAqIEB0eXBlIE51bWJlclxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuICAgIH1cblxuICAgIFNpZ25hbEJpbmRpbmcucHJvdG90eXBlID0ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBiaW5kaW5nIGlzIGFjdGl2ZSBhbmQgc2hvdWxkIGJlIGV4ZWN1dGVkLlxuICAgICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmUgOiB0cnVlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZhdWx0IHBhcmFtZXRlcnMgcGFzc2VkIHRvIGxpc3RlbmVyIGR1cmluZyBgU2lnbmFsLmRpc3BhdGNoYCBhbmQgYFNpZ25hbEJpbmRpbmcuZXhlY3V0ZWAuIChjdXJyaWVkIHBhcmFtZXRlcnMpXG4gICAgICAgICAqIEB0eXBlIEFycmF5fG51bGxcbiAgICAgICAgICovXG4gICAgICAgIHBhcmFtcyA6IG51bGwsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbGwgbGlzdGVuZXIgcGFzc2luZyBhcmJpdHJhcnkgcGFyYW1ldGVycy5cbiAgICAgICAgICogPHA+SWYgYmluZGluZyB3YXMgYWRkZWQgdXNpbmcgYFNpZ25hbC5hZGRPbmNlKClgIGl0IHdpbGwgYmUgYXV0b21hdGljYWxseSByZW1vdmVkIGZyb20gc2lnbmFsIGRpc3BhdGNoIHF1ZXVlLCB0aGlzIG1ldGhvZCBpcyB1c2VkIGludGVybmFsbHkgZm9yIHRoZSBzaWduYWwgZGlzcGF0Y2guPC9wPlxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBbcGFyYW1zQXJyXSBBcnJheSBvZiBwYXJhbWV0ZXJzIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgbGlzdGVuZXJcbiAgICAgICAgICogQHJldHVybiB7Kn0gVmFsdWUgcmV0dXJuZWQgYnkgdGhlIGxpc3RlbmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgZXhlY3V0ZSA6IGZ1bmN0aW9uIChwYXJhbXNBcnIpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGVyUmV0dXJuLCBwYXJhbXM7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmUgJiYgISF0aGlzLl9saXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIHBhcmFtcyA9IHRoaXMucGFyYW1zPyB0aGlzLnBhcmFtcy5jb25jYXQocGFyYW1zQXJyKSA6IHBhcmFtc0FycjtcbiAgICAgICAgICAgICAgICBoYW5kbGVyUmV0dXJuID0gdGhpcy5fbGlzdGVuZXIuYXBwbHkodGhpcy5jb250ZXh0LCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pc09uY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXRhY2goKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlclJldHVybjtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGV0YWNoIGJpbmRpbmcgZnJvbSBzaWduYWwuXG4gICAgICAgICAqIC0gYWxpYXMgdG86IG15U2lnbmFsLnJlbW92ZShteUJpbmRpbmcuZ2V0TGlzdGVuZXIoKSk7XG4gICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufG51bGx9IEhhbmRsZXIgZnVuY3Rpb24gYm91bmQgdG8gdGhlIHNpZ25hbCBvciBgbnVsbGAgaWYgYmluZGluZyB3YXMgcHJldmlvdXNseSBkZXRhY2hlZC5cbiAgICAgICAgICovXG4gICAgICAgIGRldGFjaCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzQm91bmQoKT8gdGhpcy5fc2lnbmFsLnJlbW92ZSh0aGlzLl9saXN0ZW5lciwgdGhpcy5jb250ZXh0KSA6IG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiBiaW5kaW5nIGlzIHN0aWxsIGJvdW5kIHRvIHRoZSBzaWduYWwgYW5kIGhhdmUgYSBsaXN0ZW5lci5cbiAgICAgICAgICovXG4gICAgICAgIGlzQm91bmQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gKCEhdGhpcy5fc2lnbmFsICYmICEhdGhpcy5fbGlzdGVuZXIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBJZiBTaWduYWxCaW5kaW5nIHdpbGwgb25seSBiZSBleGVjdXRlZCBvbmNlLlxuICAgICAgICAgKi9cbiAgICAgICAgaXNPbmNlIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzT25jZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IEhhbmRsZXIgZnVuY3Rpb24gYm91bmQgdG8gdGhlIHNpZ25hbC5cbiAgICAgICAgICovXG4gICAgICAgIGdldExpc3RlbmVyIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3RlbmVyO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtTaWduYWx9IFNpZ25hbCB0aGF0IGxpc3RlbmVyIGlzIGN1cnJlbnRseSBib3VuZCB0by5cbiAgICAgICAgICovXG4gICAgICAgIGdldFNpZ25hbCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaWduYWw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlbGV0ZSBpbnN0YW5jZSBwcm9wZXJ0aWVzXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfZGVzdHJveSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9zaWduYWw7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXI7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5jb250ZXh0O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgdG9TdHJpbmcgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1tTaWduYWxCaW5kaW5nIGlzT25jZTonICsgdGhpcy5faXNPbmNlICsnLCBpc0JvdW5kOicrIHRoaXMuaXNCb3VuZCgpICsnLCBhY3RpdmU6JyArIHRoaXMuYWN0aXZlICsgJ10nO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG5cbi8qZ2xvYmFsIFNpZ25hbEJpbmRpbmc6ZmFsc2UqL1xuXG4gICAgLy8gU2lnbmFsIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUxpc3RlbmVyKGxpc3RlbmVyLCBmbk5hbWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCAnbGlzdGVuZXIgaXMgYSByZXF1aXJlZCBwYXJhbSBvZiB7Zm59KCkgYW5kIHNob3VsZCBiZSBhIEZ1bmN0aW9uLicucmVwbGFjZSgne2ZufScsIGZuTmFtZSkgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEN1c3RvbSBldmVudCBicm9hZGNhc3RlclxuICAgICAqIDxiciAvPi0gaW5zcGlyZWQgYnkgUm9iZXJ0IFBlbm5lcidzIEFTMyBTaWduYWxzLlxuICAgICAqIEBuYW1lIFNpZ25hbFxuICAgICAqIEBhdXRob3IgTWlsbGVyIE1lZGVpcm9zXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgZnVuY3Rpb24gU2lnbmFsKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgQXJyYXkuPFNpZ25hbEJpbmRpbmc+XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9iaW5kaW5ncyA9IFtdO1xuICAgICAgICB0aGlzLl9wcmV2UGFyYW1zID0gbnVsbDtcblxuICAgICAgICAvLyBlbmZvcmNlIGRpc3BhdGNoIHRvIGF3YXlzIHdvcmsgb24gc2FtZSBjb250ZXh0ICgjNDcpXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5kaXNwYXRjaCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBTaWduYWwucHJvdG90eXBlLmRpc3BhdGNoLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgU2lnbmFsLnByb3RvdHlwZSA9IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2lnbmFscyBWZXJzaW9uIE51bWJlclxuICAgICAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgICAgICogQGNvbnN0XG4gICAgICAgICAqL1xuICAgICAgICBWRVJTSU9OIDogJzEuMC4wJyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgU2lnbmFsIHNob3VsZCBrZWVwIHJlY29yZCBvZiBwcmV2aW91c2x5IGRpc3BhdGNoZWQgcGFyYW1ldGVycyBhbmRcbiAgICAgICAgICogYXV0b21hdGljYWxseSBleGVjdXRlIGxpc3RlbmVyIGR1cmluZyBgYWRkKClgL2BhZGRPbmNlKClgIGlmIFNpZ25hbCB3YXNcbiAgICAgICAgICogYWxyZWFkeSBkaXNwYXRjaGVkIGJlZm9yZS5cbiAgICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgbWVtb3JpemUgOiBmYWxzZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3Nob3VsZFByb3BhZ2F0ZSA6IHRydWUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIFNpZ25hbCBpcyBhY3RpdmUgYW5kIHNob3VsZCBicm9hZGNhc3QgZXZlbnRzLlxuICAgICAgICAgKiA8cD48c3Ryb25nPklNUE9SVEFOVDo8L3N0cm9uZz4gU2V0dGluZyB0aGlzIHByb3BlcnR5IGR1cmluZyBhIGRpc3BhdGNoIHdpbGwgb25seSBhZmZlY3QgdGhlIG5leHQgZGlzcGF0Y2gsIGlmIHlvdSB3YW50IHRvIHN0b3AgdGhlIHByb3BhZ2F0aW9uIG9mIGEgc2lnbmFsIHVzZSBgaGFsdCgpYCBpbnN0ZWFkLjwvcD5cbiAgICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZlIDogdHJ1ZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICAgICAgICogQHBhcmFtIHtib29sZWFufSBpc09uY2VcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IFtsaXN0ZW5lckNvbnRleHRdXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbcHJpb3JpdHldXG4gICAgICAgICAqIEByZXR1cm4ge1NpZ25hbEJpbmRpbmd9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfcmVnaXN0ZXJMaXN0ZW5lciA6IGZ1bmN0aW9uIChsaXN0ZW5lciwgaXNPbmNlLCBsaXN0ZW5lckNvbnRleHQsIHByaW9yaXR5KSB7XG5cbiAgICAgICAgICAgIHZhciBwcmV2SW5kZXggPSB0aGlzLl9pbmRleE9mTGlzdGVuZXIobGlzdGVuZXIsIGxpc3RlbmVyQ29udGV4dCksXG4gICAgICAgICAgICAgICAgYmluZGluZztcblxuICAgICAgICAgICAgaWYgKHByZXZJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBiaW5kaW5nID0gdGhpcy5fYmluZGluZ3NbcHJldkluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAoYmluZGluZy5pc09uY2UoKSAhPT0gaXNPbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGNhbm5vdCBhZGQnKyAoaXNPbmNlPyAnJyA6ICdPbmNlJykgKycoKSB0aGVuIGFkZCcrICghaXNPbmNlPyAnJyA6ICdPbmNlJykgKycoKSB0aGUgc2FtZSBsaXN0ZW5lciB3aXRob3V0IHJlbW92aW5nIHRoZSByZWxhdGlvbnNoaXAgZmlyc3QuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiaW5kaW5nID0gbmV3IFNpZ25hbEJpbmRpbmcodGhpcywgbGlzdGVuZXIsIGlzT25jZSwgbGlzdGVuZXJDb250ZXh0LCBwcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkQmluZGluZyhiaW5kaW5nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5tZW1vcml6ZSAmJiB0aGlzLl9wcmV2UGFyYW1zKXtcbiAgICAgICAgICAgICAgICBiaW5kaW5nLmV4ZWN1dGUodGhpcy5fcHJldlBhcmFtcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBiaW5kaW5nO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge1NpZ25hbEJpbmRpbmd9IGJpbmRpbmdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9hZGRCaW5kaW5nIDogZnVuY3Rpb24gKGJpbmRpbmcpIHtcbiAgICAgICAgICAgIC8vc2ltcGxpZmllZCBpbnNlcnRpb24gc29ydFxuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLl9iaW5kaW5ncy5sZW5ndGg7XG4gICAgICAgICAgICBkbyB7IC0tbjsgfSB3aGlsZSAodGhpcy5fYmluZGluZ3Nbbl0gJiYgYmluZGluZy5fcHJpb3JpdHkgPD0gdGhpcy5fYmluZGluZ3Nbbl0uX3ByaW9yaXR5KTtcbiAgICAgICAgICAgIHRoaXMuX2JpbmRpbmdzLnNwbGljZShuICsgMSwgMCwgYmluZGluZyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9pbmRleE9mTGlzdGVuZXIgOiBmdW5jdGlvbiAobGlzdGVuZXIsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy5fYmluZGluZ3MubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGN1cjtcbiAgICAgICAgICAgIHdoaWxlIChuLS0pIHtcbiAgICAgICAgICAgICAgICBjdXIgPSB0aGlzLl9iaW5kaW5nc1tuXTtcbiAgICAgICAgICAgICAgICBpZiAoY3VyLl9saXN0ZW5lciA9PT0gbGlzdGVuZXIgJiYgY3VyLmNvbnRleHQgPT09IGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDaGVjayBpZiBsaXN0ZW5lciB3YXMgYXR0YWNoZWQgdG8gU2lnbmFsLlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gW2NvbnRleHRdXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IGlmIFNpZ25hbCBoYXMgdGhlIHNwZWNpZmllZCBsaXN0ZW5lci5cbiAgICAgICAgICovXG4gICAgICAgIGhhcyA6IGZ1bmN0aW9uIChsaXN0ZW5lciwgY29udGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4T2ZMaXN0ZW5lcihsaXN0ZW5lciwgY29udGV4dCkgIT09IC0xO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgYSBsaXN0ZW5lciB0byB0aGUgc2lnbmFsLlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBTaWduYWwgaGFuZGxlciBmdW5jdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IFtsaXN0ZW5lckNvbnRleHRdIENvbnRleHQgb24gd2hpY2ggbGlzdGVuZXIgd2lsbCBiZSBleGVjdXRlZCAob2JqZWN0IHRoYXQgc2hvdWxkIHJlcHJlc2VudCB0aGUgYHRoaXNgIHZhcmlhYmxlIGluc2lkZSBsaXN0ZW5lciBmdW5jdGlvbikuXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbcHJpb3JpdHldIFRoZSBwcmlvcml0eSBsZXZlbCBvZiB0aGUgZXZlbnQgbGlzdGVuZXIuIExpc3RlbmVycyB3aXRoIGhpZ2hlciBwcmlvcml0eSB3aWxsIGJlIGV4ZWN1dGVkIGJlZm9yZSBsaXN0ZW5lcnMgd2l0aCBsb3dlciBwcmlvcml0eS4gTGlzdGVuZXJzIHdpdGggc2FtZSBwcmlvcml0eSBsZXZlbCB3aWxsIGJlIGV4ZWN1dGVkIGF0IHRoZSBzYW1lIG9yZGVyIGFzIHRoZXkgd2VyZSBhZGRlZC4gKGRlZmF1bHQgPSAwKVxuICAgICAgICAgKiBAcmV0dXJuIHtTaWduYWxCaW5kaW5nfSBBbiBPYmplY3QgcmVwcmVzZW50aW5nIHRoZSBiaW5kaW5nIGJldHdlZW4gdGhlIFNpZ25hbCBhbmQgbGlzdGVuZXIuXG4gICAgICAgICAqL1xuICAgICAgICBhZGQgOiBmdW5jdGlvbiAobGlzdGVuZXIsIGxpc3RlbmVyQ29udGV4dCwgcHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlTGlzdGVuZXIobGlzdGVuZXIsICdhZGQnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3Rlckxpc3RlbmVyKGxpc3RlbmVyLCBmYWxzZSwgbGlzdGVuZXJDb250ZXh0LCBwcmlvcml0eSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBsaXN0ZW5lciB0byB0aGUgc2lnbmFsIHRoYXQgc2hvdWxkIGJlIHJlbW92ZWQgYWZ0ZXIgZmlyc3QgZXhlY3V0aW9uICh3aWxsIGJlIGV4ZWN1dGVkIG9ubHkgb25jZSkuXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIFNpZ25hbCBoYW5kbGVyIGZ1bmN0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gW2xpc3RlbmVyQ29udGV4dF0gQ29udGV4dCBvbiB3aGljaCBsaXN0ZW5lciB3aWxsIGJlIGV4ZWN1dGVkIChvYmplY3QgdGhhdCBzaG91bGQgcmVwcmVzZW50IHRoZSBgdGhpc2AgdmFyaWFibGUgaW5zaWRlIGxpc3RlbmVyIGZ1bmN0aW9uKS5cbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IFtwcmlvcml0eV0gVGhlIHByaW9yaXR5IGxldmVsIG9mIHRoZSBldmVudCBsaXN0ZW5lci4gTGlzdGVuZXJzIHdpdGggaGlnaGVyIHByaW9yaXR5IHdpbGwgYmUgZXhlY3V0ZWQgYmVmb3JlIGxpc3RlbmVycyB3aXRoIGxvd2VyIHByaW9yaXR5LiBMaXN0ZW5lcnMgd2l0aCBzYW1lIHByaW9yaXR5IGxldmVsIHdpbGwgYmUgZXhlY3V0ZWQgYXQgdGhlIHNhbWUgb3JkZXIgYXMgdGhleSB3ZXJlIGFkZGVkLiAoZGVmYXVsdCA9IDApXG4gICAgICAgICAqIEByZXR1cm4ge1NpZ25hbEJpbmRpbmd9IEFuIE9iamVjdCByZXByZXNlbnRpbmcgdGhlIGJpbmRpbmcgYmV0d2VlbiB0aGUgU2lnbmFsIGFuZCBsaXN0ZW5lci5cbiAgICAgICAgICovXG4gICAgICAgIGFkZE9uY2UgOiBmdW5jdGlvbiAobGlzdGVuZXIsIGxpc3RlbmVyQ29udGV4dCwgcHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlTGlzdGVuZXIobGlzdGVuZXIsICdhZGRPbmNlJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0ZXJMaXN0ZW5lcihsaXN0ZW5lciwgdHJ1ZSwgbGlzdGVuZXJDb250ZXh0LCBwcmlvcml0eSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSBhIHNpbmdsZSBsaXN0ZW5lciBmcm9tIHRoZSBkaXNwYXRjaCBxdWV1ZS5cbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgSGFuZGxlciBmdW5jdGlvbiB0aGF0IHNob3VsZCBiZSByZW1vdmVkLlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gW2NvbnRleHRdIEV4ZWN1dGlvbiBjb250ZXh0IChzaW5jZSB5b3UgY2FuIGFkZCB0aGUgc2FtZSBoYW5kbGVyIG11bHRpcGxlIHRpbWVzIGlmIGV4ZWN1dGluZyBpbiBhIGRpZmZlcmVudCBjb250ZXh0KS5cbiAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IExpc3RlbmVyIGhhbmRsZXIgZnVuY3Rpb24uXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdmUgOiBmdW5jdGlvbiAobGlzdGVuZXIsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlTGlzdGVuZXIobGlzdGVuZXIsICdyZW1vdmUnKTtcblxuICAgICAgICAgICAgdmFyIGkgPSB0aGlzLl9pbmRleE9mTGlzdGVuZXIobGlzdGVuZXIsIGNvbnRleHQpO1xuICAgICAgICAgICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmluZGluZ3NbaV0uX2Rlc3Ryb3koKTsgLy9ubyByZWFzb24gdG8gYSBTaWduYWxCaW5kaW5nIGV4aXN0IGlmIGl0IGlzbid0IGF0dGFjaGVkIHRvIGEgc2lnbmFsXG4gICAgICAgICAgICAgICAgdGhpcy5fYmluZGluZ3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgYWxsIGxpc3RlbmVycyBmcm9tIHRoZSBTaWduYWwuXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdmVBbGwgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXMuX2JpbmRpbmdzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChuLS0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9iaW5kaW5nc1tuXS5fZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fYmluZGluZ3MubGVuZ3RoID0gMDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfSBOdW1iZXIgb2YgbGlzdGVuZXJzIGF0dGFjaGVkIHRvIHRoZSBTaWduYWwuXG4gICAgICAgICAqL1xuICAgICAgICBnZXROdW1MaXN0ZW5lcnMgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ3MubGVuZ3RoO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTdG9wIHByb3BhZ2F0aW9uIG9mIHRoZSBldmVudCwgYmxvY2tpbmcgdGhlIGRpc3BhdGNoIHRvIG5leHQgbGlzdGVuZXJzIG9uIHRoZSBxdWV1ZS5cbiAgICAgICAgICogPHA+PHN0cm9uZz5JTVBPUlRBTlQ6PC9zdHJvbmc+IHNob3VsZCBiZSBjYWxsZWQgb25seSBkdXJpbmcgc2lnbmFsIGRpc3BhdGNoLCBjYWxsaW5nIGl0IGJlZm9yZS9hZnRlciBkaXNwYXRjaCB3b24ndCBhZmZlY3Qgc2lnbmFsIGJyb2FkY2FzdC48L3A+XG4gICAgICAgICAqIEBzZWUgU2lnbmFsLnByb3RvdHlwZS5kaXNhYmxlXG4gICAgICAgICAqL1xuICAgICAgICBoYWx0IDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fc2hvdWxkUHJvcGFnYXRlID0gZmFsc2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc3BhdGNoL0Jyb2FkY2FzdCBTaWduYWwgdG8gYWxsIGxpc3RlbmVycyBhZGRlZCB0byB0aGUgcXVldWUuXG4gICAgICAgICAqIEBwYXJhbSB7Li4uKn0gW3BhcmFtc10gUGFyYW1ldGVycyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gZWFjaCBoYW5kbGVyLlxuICAgICAgICAgKi9cbiAgICAgICAgZGlzcGF0Y2ggOiBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAoISB0aGlzLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHBhcmFtc0FyciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksXG4gICAgICAgICAgICAgICAgbiA9IHRoaXMuX2JpbmRpbmdzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBiaW5kaW5ncztcblxuICAgICAgICAgICAgaWYgKHRoaXMubWVtb3JpemUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmV2UGFyYW1zID0gcGFyYW1zQXJyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoISBuKSB7XG4gICAgICAgICAgICAgICAgLy9zaG91bGQgY29tZSBhZnRlciBtZW1vcml6ZVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYmluZGluZ3MgPSB0aGlzLl9iaW5kaW5ncy5zbGljZSgpOyAvL2Nsb25lIGFycmF5IGluIGNhc2UgYWRkL3JlbW92ZSBpdGVtcyBkdXJpbmcgZGlzcGF0Y2hcbiAgICAgICAgICAgIHRoaXMuX3Nob3VsZFByb3BhZ2F0ZSA9IHRydWU7IC8vaW4gY2FzZSBgaGFsdGAgd2FzIGNhbGxlZCBiZWZvcmUgZGlzcGF0Y2ggb3IgZHVyaW5nIHRoZSBwcmV2aW91cyBkaXNwYXRjaC5cblxuICAgICAgICAgICAgLy9leGVjdXRlIGFsbCBjYWxsYmFja3MgdW50aWwgZW5kIG9mIHRoZSBsaXN0IG9yIHVudGlsIGEgY2FsbGJhY2sgcmV0dXJucyBgZmFsc2VgIG9yIHN0b3BzIHByb3BhZ2F0aW9uXG4gICAgICAgICAgICAvL3JldmVyc2UgbG9vcCBzaW5jZSBsaXN0ZW5lcnMgd2l0aCBoaWdoZXIgcHJpb3JpdHkgd2lsbCBiZSBhZGRlZCBhdCB0aGUgZW5kIG9mIHRoZSBsaXN0XG4gICAgICAgICAgICBkbyB7IG4tLTsgfSB3aGlsZSAoYmluZGluZ3Nbbl0gJiYgdGhpcy5fc2hvdWxkUHJvcGFnYXRlICYmIGJpbmRpbmdzW25dLmV4ZWN1dGUocGFyYW1zQXJyKSAhPT0gZmFsc2UpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGb3JnZXQgbWVtb3JpemVkIGFyZ3VtZW50cy5cbiAgICAgICAgICogQHNlZSBTaWduYWwubWVtb3JpemVcbiAgICAgICAgICovXG4gICAgICAgIGZvcmdldCA6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLl9wcmV2UGFyYW1zID0gbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIGFsbCBiaW5kaW5ncyBmcm9tIHNpZ25hbCBhbmQgZGVzdHJveSBhbnkgcmVmZXJlbmNlIHRvIGV4dGVybmFsIG9iamVjdHMgKGRlc3Ryb3kgU2lnbmFsIG9iamVjdCkuXG4gICAgICAgICAqIDxwPjxzdHJvbmc+SU1QT1JUQU5UOjwvc3Ryb25nPiBjYWxsaW5nIGFueSBtZXRob2Qgb24gdGhlIHNpZ25hbCBpbnN0YW5jZSBhZnRlciBjYWxsaW5nIGRpc3Bvc2Ugd2lsbCB0aHJvdyBlcnJvcnMuPC9wPlxuICAgICAgICAgKi9cbiAgICAgICAgZGlzcG9zZSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWxsKCk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fYmluZGluZ3M7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fcHJldlBhcmFtcztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHRvU3RyaW5nIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICdbU2lnbmFsIGFjdGl2ZTonKyB0aGlzLmFjdGl2ZSArJyBudW1MaXN0ZW5lcnM6JysgdGhpcy5nZXROdW1MaXN0ZW5lcnMoKSArJ10nO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG5cbiAgICAvLyBOYW1lc3BhY2UgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKlxuICAgICAqIFNpZ25hbHMgbmFtZXNwYWNlXG4gICAgICogQG5hbWVzcGFjZVxuICAgICAqIEBuYW1lIHNpZ25hbHNcbiAgICAgKi9cbiAgICB2YXIgc2lnbmFscyA9IFNpZ25hbDtcblxuICAgIC8qKlxuICAgICAqIEN1c3RvbSBldmVudCBicm9hZGNhc3RlclxuICAgICAqIEBzZWUgU2lnbmFsXG4gICAgICovXG4gICAgLy8gYWxpYXMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IChzZWUgI2doLTQ0KVxuICAgIHNpZ25hbHMuU2lnbmFsID0gU2lnbmFsO1xuXG5cblxuICAgIC8vZXhwb3J0cyB0byBtdWx0aXBsZSBlbnZpcm9ubWVudHNcbiAgICBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpeyAvL0FNRFxuICAgICAgICBkZWZpbmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2lnbmFsczsgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cyl7IC8vbm9kZVxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHNpZ25hbHM7XG4gICAgfSBlbHNlIHsgLy9icm93c2VyXG4gICAgICAgIC8vdXNlIHN0cmluZyBiZWNhdXNlIG9mIEdvb2dsZSBjbG9zdXJlIGNvbXBpbGVyIEFEVkFOQ0VEX01PREVcbiAgICAgICAgLypqc2xpbnQgc3ViOnRydWUgKi9cbiAgICAgICAgZ2xvYmFsWydzaWduYWxzJ10gPSBzaWduYWxzO1xuICAgIH1cblxufSh0aGlzKSk7XG4iLCIvKipcbiAqIEFjdGl2aXRpZXMgbW9kdWxlXG4gKiBAYXV0aG9yIE1pY2hhZWwgSGVtaW5nd2F5XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbmltcG9ydCB7IGgsIG1vdW50LCBwYXRjaCB9IGZyb20gJ3BldGl0LWRvbScgLy8gVmlydHVhbCBET01cbmltcG9ydCAkIGZyb20gJ2JhbGFqcycgLy8gRE9NIHNlbGVjdG9yIGVuZ2luZVxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJyAvLyBBeGlvcywgb3VyIEFKQVggbGliXG5cbmF4aW9zLmNyZWF0ZSh7XG5cdGJhc2VVUkw6ICdodHRwczovL2RvZS5jb25jb3JkaWEuY2EvY3NscC93cC1qc29uL3dwL3YyLydcbn0pXG5cbi8vIEFwcCBzdGF0ZSBhbmQgcm91dGluZ1xuaW1wb3J0IFN0YXRlIGZyb20gJy4vc3RhdGUuanMnXG5jb25zdCBzdGF0ZSA9IG5ldyBTdGF0ZSgpXG5cbi8vIEhlbHBlcnNcbmltcG9ydCB7IG9uIH0gZnJvbSAnLi91dGlsL2hlbHBlcnMuanMnXG5cbi8vIEFwcCBjb21wb25lbnRzXG5pbXBvcnQgc3RvcnkgZnJvbSAnLi91dGlsL2FjdGl2aXR5LmpzJ1xuaW1wb3J0IGNhdGVnIGZyb20gJy4vdXRpbC9jYXQuanMnXG5cbi8vIERPTVxuY29uc3QgY29udGFpbmVyID0gJC5vbmUoJyNhY3Rpdml0aWVzX19ieS1jYXQnKVxuY29uc3QgY2FyZHMgPSAkKCcuY2F0ZWdvcnktY2FyZCcpXG5jb25zdCBkcmlsbGRvd24gPSAkLm9uZSgnI2RyaWxsZG93bicpXG5jb25zdCBhY3Rpdml0eSA9ICQub25lKCcjYWN0aXZpdHknKVxuY29uc3QgY2F0TWV0YSA9ICQub25lKCcjY2F0LW1ldGEnKVxuXG5cblx0Ly9oaWRlbWV0YTogKCkgPT4gKCcuYWN0aXZpdHktbWV0YScpWzBdLmNsYXNzTmFtZSA9ICdzdG9yaWVzLW1ldGEgaGlkZGVuJyxcblxuXHQvLyBORVdcblx0Ly8gdGVzdFVSTDogKCkgPT4ge1xuXHQvLyBcdGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoJyVjIEhpc3Rvcnkgc3RhdGUnLCAnY29sb3I6ICMzNUI1RkYnKVxuXHQvLyBcdGNvbnNvbGUuaW5mbyh3aW5kb3cuaGlzdG9yeSlcblxuXHQvLyBcdC8vIFRPRE86IHJldHVybiBpZiBVUkwgaXMgdmFsaWQsIGFuZCBzZXQgc3RhdGUgYWNjb3JkaW5nbHlcblx0Ly8gXHRpZiAod2luZG93LmxvY2F0aW9uLmhyZWYpIHt9XG5cdC8vIFx0Y29uc29sZS5ncm91cEVuZCgpXG5cdC8vIH1cblxuXHQvLyBwdXNoU3RhdGU6IChkYXRhKSA9PiB7XG5cdC8vIFx0aWYgKGhpc3RvcnkucHVzaFN0YXRlKSB7XG5cdC8vIFx0XHRpZiAoc3RhdGUuZHJpbGxMZXZlbCA9PSAwKVxuXHQvLyBcdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZS5oaXN0b3J5LCAnJywgZGF0YS5zbHVnKVxuXHQvLyBcdFx0ZWxzZSAvKmlmIChzdGF0ZS5kcmlsbExldmVsID09IDEpKi9cblx0Ly8gXHRcdFx0aGlzdG9yeS5wdXNoU3RhdGUoc3RhdGUuaGlzdG9yeSwgJycsIHN0YXRlLmNhdGVnb3J5RGF0YS5zbHVnICsgJy8nICsgZGF0YS5zbHVnKVxuXHQvLyBcdFx0Ly8gZWxzZSBpZiAoc3RhdGUuZHJpbGxMZXZlbCA9PSAyKVxuXHQvLyBcdFx0Ly8gXHRoaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZS5oaXN0b3J5LCAnJywgc3RhdGUuY2F0ZWdvcnlEYXRhLnNsdWcgKyAnLycgKyBkYXRhLnNsdWcpXG5cdC8vIFx0fVxuXHQvLyB9XG4vLyB9XG5cbmZ1bmN0aW9uIGluaXQgKCkge1xuXHQvLyBzdGF0ZS50ZXN0VVJMKClcblx0c3RhdGUuc2V0RHJpbGxMZXZlbCgwKSAvLyByZXNldHMgY2xhc3NlcyBqdXN0IGluIGNhc2VcblxuXHRjYXJkcy5mb3JFYWNoKGl0ZW0gPT4ge1xuXHRcdG9uKCdjbGljaycsICQub25lKGl0ZW0pLCBldmVudCA9PiB7XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuXHRcdFx0bGV0IElEID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2F0JylcblxuXHRcdFx0aWYgKCFjYXRlZy5pc0NhY2hlZChJRCkpIHtcblx0XHRcdFx0Y2F0ZWcuZ2V0KElELCBhamF4LCBkYXRhID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnUmV0cmlldmVkIGxpdmUgZGF0YTogSUQgIycgKyBJRClcblx0XHRcdFx0XHRzZXRTZWxlY3RlZENhdGVnb3J5KGRhdGEpXG5cdFx0XHRcdH0pXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FicmFfYWMnK0lEKSlcblx0XHRcdFx0Y29uc29sZS5sb2coJ1JldHJpZXZlZCBjYWNoZWQgZGF0YTogSUQgIycgKyBJRClcblx0XHRcdFx0c2V0U2VsZWN0ZWRDYXRlZ29yeShkYXRhKVxuXHRcdFx0fVxuXHRcdFx0c3RhdGUuc2V0TGV2ZWwoMSlcblx0XHR9KVxuXHR9KVxuXG5cdG9uKCdjbGljaycsICQub25lKCcjYmFjay1idXR0b24nKSwgKCkgPT4gc3RhdGUuYmFja29uZSgpIClcbn1cbm9uKCdET01Db250ZW50TG9hZGVkJywgd2luZG93LCBpbml0KCkpXG5cbi8vIHNlbGVjdFxuZnVuY3Rpb24gc2V0U2VsZWN0ZWRDYXRlZ29yeShkYXRhKSB7XG5cdHN0YXRlLnB1c2hTdGF0ZShkYXRhKVxuXHRzdGF0ZS5jYXRlZ29yeURhdGEgPSBkYXRhXG5cdGNhdGVnLnNldERPTShkYXRhLCBzdGF0ZSwgc3RvcnksIGFqYXgpXG59IiwiaW1wb3J0IGhhc2hlciBmcm9tICdoYXNoZXInXG5pbXBvcnQgJCBmcm9tICdiYWxhanMnXG5jb25zdCBhbmltZSA9IHJlcXVpcmUoJ2FuaW1lanMnKVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIge1xuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0Ly8gYWRkIGhhc2ggY2hhbmdlIGxpc3RlbmVyXG5cdFx0aGFzaGVyLmNoYW5nZWQuYWRkKHRoaXMuaGFuZGxlSGFzaENoYW5nZSlcblx0XHQvLyBhZGQgaW5pdGlhbGl6ZWQgbGlzdGVuZXIgKHRvIGdyYWIgaW5pdGlhbCB2YWx1ZSBpbiBjYXNlIGl0IGlzIGFscmVhZHkgc2V0KVxuXHRcdGhhc2hlci5pbml0aWFsaXplZC5hZGQodGhpcy5oYW5kbGVIYXNoQ2hhbmdlKVxuXHRcdC8vIGluaXRpYWxpemUgaGFzaGVyIChzdGFydCBsaXN0ZW5pbmcgZm9yIGhpc3RvcnkgY2hhbmdlcylcblx0XHRoYXNoZXIuaW5pdCgpXG5cdH1cblxuXHRuYXZpZ2F0ZSAoKSB7XG5cdFx0bGV0IGhhc2h0cmluZyA9ICdmb28nXG5cblx0XHQvLyBjaGFuZ2UgaGFzaCB2YWx1ZSAoZ2VuZXJhdGVzIG5ldyBoaXN0b3J5IHJlY29yZClcblx0XHRoYXNoZXIuc2V0SGFzaChoYXNodHJpbmcpXG5cdH1cblxuXHRoYW5kbGVIYXNoQ2hhbmdlIChuZXdIYXNoLCBvbGRIYXNoKSB7XG5cdFx0Y29uc29sZS5sb2coJyVjIG5ld2hhc2g6ICcgKyBuZXdIYXNoLCAnYmFja2dyb3VuZDogYmx1ZScpXG5cdH1cblxuXHRnb3RvIChsZXZlbCwgZGlyKSB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gJC5vbmUoJyNhY3Rpdml0aWVzX19ieS1jYXQnKVxuXHRcdGNvbnN0IGNhcmRzID0gJCgnLmNhdGVnb3J5LWNhcmQnKVxuXHRcdGNvbnN0IGRyaWxsZG93biA9ICQub25lKCcjZHJpbGxkb3duJylcblx0XHRjb25zdCBhY3Rpdml0eSA9ICQub25lKCcjYWN0aXZpdHknKVxuXHRcdGNvbnN0IGNhdE1ldGEgPSAkLm9uZSgnI2NhdC1tZXRhJylcblxuXHRcdHN3aXRjaCAobGV2ZWwpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0ZHJpbGxkb3duLnNldEF0dHJpYnV0ZSgnZGF0YS1hY3RpdmUnLCAnbm9uZScpXG5cdFx0XHRcdGNvbnRhaW5lci5jbGFzc05hbWUgPSAnc2VsZWN0ZWQnXG5cdFx0XHRcdGNhdE1ldGEuY2xhc3NOYW1lID0gJ2hpZGRlbidcblx0XHRcdFx0YW5pbWUoe1xuXHRcdFx0XHRcdHRhcmdldHM6ICcuYWN0aXZpdGllcy1tZXRhIHAnLFxuXHRcdFx0XHRcdG9wYWNpdHk6IFswLCAxXSxcblx0XHRcdFx0XHRkdXJhdGlvbjogNTAwLFxuXHRcdFx0XHRcdGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcblx0XHRcdFx0XHRyZXZlcnNlOiBkaXIsXG5cdFx0XHRcdFx0Y29tcGxldGU6ICgpID0+IHtcblx0XHRcdFx0XHRcdGFuaW1lKHtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0czogY29udGFpbmVyLFxuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiBbMCwgMV0sXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAsXG5cdFx0XHRcdFx0XHRcdHJldmVyc2U6IGRpclxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRicmVhaztcblxuXHRcdFx0Ly8gQWN0aXZpdHkgbGlzdFxuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRpZiAoZGlyID09ICdyZXZlcnNlJykge1xuXHRcdFx0XHRcdGFuaW1lKHtcblx0XHRcdFx0XHRcdHRhcmdldHM6IGFjdGl2aXR5LFxuXHRcdFx0XHRcdFx0b3BhY2l0eTogWzEsMF0sXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogNDAwLFxuXHRcdFx0XHRcdFx0dHJhbnNsYXRlWTogeyB2YWx1ZTogNDAsIGR1cmF0aW9uOiA0MDAgfSxcblx0XHRcdFx0XHRcdGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcblx0XHRcdFx0XHRcdGNvbXBsZXRlOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGFjdGl2aXR5LmNsYXNzTmFtZSA9ICdoaWRkZW4nXG5cdFx0XHRcdFx0XHRcdGFuaW1lKHtcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXRzOiAnI2FjdGl2aXRpZXNfX2J5LWNhdCcsXG5cdFx0XHRcdFx0XHRcdFx0ZGVsYXk6IDEwMCxcblx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5OiBbMSwgMF0sXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDYwMCxcblx0XHRcdFx0XHRcdFx0XHRyZXZlcnNlOiBkaXIsXG5cdFx0XHRcdFx0XHRcdFx0ZWFzaW5nOiAnZWFzZU91dEV4cG8nLFxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRkcmlsbGRvd24uc2V0QXR0cmlidXRlKCdkYXRhLWFjdGl2ZScsICdjYXQnKVxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGFpbmVyLmNsYXNzTmFtZSA9ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXRNZXRhLmNsYXNzTmFtZSA9ICcnXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3Rpdml0eS5jbGFzc05hbWUgPSAnaGlkZGVuJ1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0ICBcdFx0XHRcdFx0fSlcbiAgXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGFuaW1lKHtcblx0XHRcdFx0XHRcdHRhcmdldHM6ICcuYWN0aXZpdGllcy1tZXRhIHAnLFxuXHRcdFx0XHRcdFx0b3BhY2l0eTogWzEsIDBdLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDQwMCxcblx0XHRcdFx0XHRcdHJldmVyc2U6IG9wdHMuZGlyZWN0aW9uLFxuXHRcdFx0XHRcdFx0ZWFzaW5nOiAnZWFzZU91dEV4cG8nLFxuXHRcdFx0XHRcdFx0Y29tcGxldGU6ICgpID0+IHtcblx0XHRcdFx0ICAgICAgYW5pbWUoe1xuXHRcdFx0XHRcdFx0XHRcdHRhcmdldHM6ICcjYWN0aXZpdGllc19fYnktY2F0Jyxcblx0XHRcdFx0XHRcdFx0XHRkZWxheTogMTAwLFxuXHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IFsxLCAwXSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogNTAwLFxuXHRcdFx0XHRcdFx0XHRcdHJldmVyc2U6IG9wdHMuZGlyZWN0aW9uLFxuXHRcdFx0XHRcdFx0XHRcdGVhc2luZzogJ2Vhc2VPdXRFeHBvJyxcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZHJpbGxkb3duLnNldEF0dHJpYnV0ZSgnZGF0YS1hY3RpdmUnLCAnY2F0Jylcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRhaW5lci5jbGFzc05hbWUgPSAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0Y2F0TWV0YS5jbGFzc05hbWUgPSAnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZpdHkuY2xhc3NOYW1lID0gJ2hpZGRlbidcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdCAgXHR9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0YnJlYWs7XG5cblx0XHRcdC8vIEFjdGl2aXR5IEl0ZW1cblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0YWN0aXZpdHkuY2xhc3NOYW1lID0gJydcblx0XHRcdFx0Y2F0TWV0YS5jbGFzc05hbWUgPSAnaGlkZGVuJ1xuXHRcdFx0XHRhbmltZSh7XG5cdFx0XHRcdFx0dGFyZ2V0czogYWN0aXZpdHksXG5cdFx0XHRcdFx0b3BhY2l0eTogWzAsIDFdLFxuXHRcdFx0XHRcdGR1cmF0aW9uOiA0MDAsXG5cdFx0XHRcdFx0dHJhbnNsYXRlWTogeyB2YWx1ZTogLTQwLCBkdXJhdGlvbjogODAwIH0sXG5cdFx0XHRcdFx0ZWFzaW5nOiAnZWFzZUluRXhwbydcblx0XHRcdFx0fSlcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxufSIsImltcG9ydCBSb3V0ZXIgZnJvbSAnLi9yb3V0ZXIuanMnXG5cbmNvbnN0IHIgPSBuZXcgUm91dGVyKClcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGUge1xuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0dGhpcy5kcmlsbExldmVsID0gMFxuXHRcdHRoaXMuYWN0aXZlID0gJ25vbmUnXG5cdFx0dGhpcy5jYXRlZ29yeURhdGEgPSB7fVxuXHRcdHRoaXMuYWN0aXZpdHlEYXRhID0ge31cblx0XHR0aGlzLmhpc3RvcnkgPSB7fVxuXHR9XG5cblx0c2V0RHJpbGxMZXZlbCAobGV2ZWwpIHtcblx0XHRsZXQgZGlyZWN0aW9uID0gKHRoaXMuZHJpbGxMZXZlbCA+IGxldmVsKSA/ICcnIDogJ3JldmVyc2UnXG5cdFx0dGhpcy5kcmlsbExldmVsID0gbGV2ZWxcblxuXHRcdHIuZ290byhsZXZlbCwgZGlyZWN0aW9uKVxuXHR9XG5cblx0Z2V0QnJlYWRjcnVtYiAoKSB7XG5cdFx0bGV0IGJhc2UgPSAnJ1xuXHRcdGxldCBjYXQgPSAnJ1xuXG5cdFx0Ly8gYnJlYWtzIGludGVudGlvbmFsbHkgb21taXRlZCBmb3Igc21hcnQgZm9sbG93LXRocm91Z2hcblx0XHQvLyBkZXBlbmRpbmcgb24gbGV2ZWwsIHRoZSBzdHJpbmcgd2lsbCB1cGRhdGUgcmVsZXZhbnQgcGFydHNcblx0XHRzd2l0Y2goc3RhdGUuZHJpbGxMZXZlbCkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHRyZXR1cm4gbnVsbFxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0Y2F0ID0gJyA+ICcgKyBzdGF0ZS5hY3Rpdml0eURhdGEubmFtZVxuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRiYXNlID0gJ0J5IGNhdGVnb3J5ID4gJyArIHN0YXRlLmNhdGVnb3J5RGF0YS5uYW1lXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4gYmFzZSArIGNhdFxuXHR9XG5cblx0YmFja29uZSAoKSB7IHRoaXMuc2V0RHJpbGxMZXZlbCh0aGlzLmRyaWxsTGV2ZWwgLSAxKSB9XG59IiwiaW1wb3J0ICQgZnJvbSAnYmFsYWpzJ1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuXHQvLyBTdG9yeSBGdW5jdGlvbnNcblx0Z2V0UmVsYXRlZFN0b3JpZXM6IGZ1bmN0aW9uIChxdWVyeSwgY2FsbGJhY2ssIGF4aW9zKSB7XG5cdFx0YXhpb3MuZ2V0KHF1ZXJ5KS50aGVuKGZ1bmN0aW9uKHJlcykge1xuXHRcdFx0Y2FsbGJhY2socmVzLmRhdGEpXG5cdFx0fSkuY2F0Y2goJ2Vycm9yJywgZnVuY3Rpb24gKGUpIHtjb25zb2xlLndhcm4oZSl9KVxuXHR9LFxuXG5cdHNob3dTdG9yeTogZnVuY3Rpb24gKGRhdGEsIHN0YXRlLCBheGlvcykge1xuXHRcdHN0YXRlLmFjdGl2aXR5RGF0YS5uYW1lID0gZGF0YS50aXRsZS5yZW5kZXJlZFxuXG5cdFx0JCgnI2FjdGl2aXR5LXRpdGxlJylbMF0uaW5uZXJIVE1MID0gZGF0YS50aXRsZS5yZW5kZXJlZFxuXHRcdCQoJyNhY3Rpdml0eSBoZWFkZXIgc3BhbicpWzBdLmlubmVySFRNTCA9IHN0YXRlLmdldEJyZWFkY3J1bWIoKVxuXG5cdFx0Ly8gT3ZlcnZpZXcsIHRhYiAxLCBjb250YWluczogb2JqZWN0aXZlLCBnZmEgdGlwcywgbGV2ZWxzXG5cdFx0JCgnI2EtZGVzYy1jJylbMF0uaW5uZXJIVE1MID0gJzxoND5PdmVydmlldzwvaDQ+J1xuXHRcdFx0KyBkYXRhLmFjdGl2aXR5X2Rlc2NyaXB0aW9uX2FjdGl2aXR5X29iamVjdGl2ZVxuXHRcdCQoJyNhLWdmYS1jJylbMF0uaW5uZXJIVE1MID0gJzxoND5Hcm91cCBGYWNpbGl0YXRpb24gVGlwczwvaDQ+J1xuXHRcdFx0KyBkYXRhLmFjdGl2aXR5X2Rlc2NyaXB0aW9uX2FjdGl2aXR5X2dmYVxuXHRcdCQoJyNhLWxldmVsLWMnKVswXS5pbm5lckhUTUwgPSAnPGg0PkxldmVsczwvaDQ+J1xuXHRcdFx0KyBkYXRhLmFjdGl2aXR5X2Rlc2NyaXB0aW9uX2FjdGl2aXR5X2xldmVsXG5cblx0XHQvLyBBY3Rpdml0eSBJbnNpZ2h0c1xuXHRcdC8vIGNoZWNrIGlmIGhhcyBpbnNpZ2h0cywgZGlzcGxheSBpbnNpZ2h0cz9cblx0XHQkKCcjYS1pbnNpZ2h0cy1jJylbMF0uaW5uZXJIVE1MID0gJzxoND5BY3Rpdml0eSBJbnNpZ2h0czwvaDQ+J1xuXHRcdFx0KyBkYXRhLmFjdGl2aXR5X2luc2lnaHRzXG5cblx0XHQvLyBMaW5rZWQgU3RvcmllcywgdGFiIDNcblx0XHR0aGlzLmdldFN0b3JpZXNJbkNhdChkYXRhLmFjdGl2aXR5X2xpbmtlZF9zdG9yaWVzLCBheGlvcylcblxuXHRcdC8vIFJlc291cmNlcywgdGFiIDRcblx0XHRsZXQgcmVzY29udGVudCA9ICQoJyNhLXJlc291cmNlcy1jJylbMF1cblx0XHRpZiAoZGF0YS5hY3Rpdml0eV9yZXNvdXJjZXMgIT0gJycpIHtcblx0XHRcdHJlc2NvbnRlbnQuaW5uZXJIVE1MID0gJzxoND5SZXNvdXJjZXM8L2g0PicgKyBkYXRhLmFjdGl2aXR5X3Jlc291cmNlc1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXNjb250ZW50LmlubmVySFRNTCA9ICdUaGlzIGFjdGl2aXR5IGN1cnJlbnRseSBkb2VzIG5vdCBoYXZlIGFueSBhZGRpdGlvbmFsIHJlc291cmNlcy4nXG5cdFx0fVxuXG5cdFx0JCgnI2FjdGl2aXR5LXZpZGVvLWNvbnRhaW5lcicpWzBdLmlubmVySFRNTCA9IHRoaXMubWFrZUVtYmVkTGluayhkYXRhLmFjdGl2aXR5X3ZpZGVvKVxuXHR9LFxuXG5cdG1ha2VUYWJDb250YWluZXIoKSB7XG5cdFx0Y29uc3QgdGFicyA9ICQoJy5hY3Rpdml0eV9fbmF2LnRhYnMgbGknKSAvLyBHZXQgYWxsIHRhYnNcblxuXHRcdHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuXHRcdFx0bGV0IGxpbmsgPSB0YWIuZmlyc3RDaGlsZFxuXG5cdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXG5cdFx0XHRcdC8vIEdldCBsb2NhdGlvbiBvZiB0YWIncyBjb250ZW50IChocmVmID0+IGlkKVxuXHRcdFx0XHRsZXQgY29udGVudFRhYiA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJylcblxuXHRcdFx0XHQvLyBTZXQgb3RoZXIgdGFicyAmIG5hdiBsYWJlcyBhcyBpbmFjdGl2ZVxuXHRcdFx0XHQkKCcudGFicy1jb250ZW50IGRpdicpLmZvckVhY2goIHQgPT4gdC5jbGFzc05hbWUgPSAnJyApXG5cdFx0XHRcdCQoJy50YWJzIGxpJykuZm9yRWFjaCggbCA9PiBsLmNsYXNzTmFtZSA9ICcnIClcblxuXHRcdFx0XHQvLyBTZXQgc2VsZWN0ZWQgdGFiICYgbmF2IGl0ZW0gYWN0aXZlXG5cdFx0XHRcdHRhYi5jbGFzc05hbWUgPSAnYWN0aXZlJ1xuXHRcdFx0XHQkKGNvbnRlbnRUYWIpWzBdLmNsYXNzTmFtZSA9ICdhY3RpdmUnXG5cdFx0XHR9KTtcblx0XHR9KVxuXHR9LFxuXG5cdHNldEFjdGl2aXR5SWNvbiAocXVlcnksIGF4aW9zKSB7XG5cdFx0YXhpb3MuZ2V0KCdtZWRpYT9wYXJlbnQ9JyArIHF1ZXJ5KS50aGVuKChyZXMpID0+IHtcblx0XHRcdCQoJyNhY3Rpdml0eS1pY29uJylbMF0uaW5uZXJIVE1MID0gJycgLy8gY2xlYXIgb2xkIGltYWdlIGVsZW1zXG5cdFx0XHRjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcblx0XHRcdFx0aWNvbi5zdHlsZS5vcGFjaXR5ID0gMFxuXHRcdFx0XHRpY29uLm9ubG9hZCA9ICgpID0+IHsgJCgnI2FjdGl2aXR5LWljb24gaW1nJylbMF0uc3R5bGUub3BhY2l0eSA9IDEgfVxuXHRcdFx0XHRpY29uLnNyYyA9IHJlcy5kYXRhWzBdLm1lZGlhX2RldGFpbHMuc2l6ZXMudGh1bWJuYWlsLnNvdXJjZV91cmxcblx0XHRcdFx0aWNvbi5hbHQgPSByZXMuZGF0YVswXS5hbHRfdGV4dFxuXHRcdFx0JCgnI2FjdGl2aXR5LWljb24nKVswXS5hcHBlbmRDaGlsZChpY29uKVxuXHRcdH0pLmNhdGNoKCdlcnJvcicsIGUgPT4gY29uc29sZS53YXJuKGUpKVxuXHR9LFxuXG5cdHNldEFjdGl2aXR5TGlzdEljb24gKHF1ZXJ5LCBheGlvcywgZWxlbWVudCkge1xuXHRcdGF4aW9zLmdldCgnbWVkaWE/cGFyZW50PScgKyBxdWVyeSkudGhlbigocmVzKSA9PiB7XG5cdFx0XHRjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcblx0XHRcdFx0aWNvbi5zdHlsZS5vcGFjaXR5ID0gMFxuXHRcdFx0XHRpY29uLmNsYXNzTmFtZSA9ICdsaW1hZ2UnXG5cdFx0XHRcdGljb24ub25sb2FkID0gKCkgPT4gaWNvbi5zdHlsZS5vcGFjaXR5ID0gMVxuXHRcdFx0XHRpY29uLnNyYyA9IHJlcy5kYXRhWzBdLm1lZGlhX2RldGFpbHMuc2l6ZXMudGh1bWJuYWlsLnNvdXJjZV91cmxcblx0XHRcdFx0aWNvbi5hbHQgPSByZXMuZGF0YVswXS5hbHRfdGV4dFxuXHRcdFx0ZWxlbWVudC5hcHBlbmRDaGlsZChpY29uKVxuXHRcdH0pLmNhdGNoKCdlcnJvcicsIGUgPT4gY29uc29sZS53YXJuKGUpKVxuXHR9LFxuXG5cdGdldFN0b3JpZXNJbkNhdCAoc3RvcmllcywgYXhpb3MpIHtcblx0XHQvLyBsZXQgcXVlcnkgPSAnc3Rvcnk/J1xuXHRcdGxldCBxdWVyeSA9ICdzdG9yeT9wZXJfcGFnZT0xMDAmaW5jbHVkZVtdPSdcblxuXHRcdGZvciAobGV0IGkgPSBzdG9yaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHQvLyBxdWVyeSArPSAnaW5jbHVkZVtdPScgKyBzdG9yaWVzW2ldICsgJyYnXG5cdFx0XHRxdWVyeSArPSBzdG9yaWVzW2ldICsgJywnXG5cdFx0fVxuXHRcdHF1ZXJ5ID0gcXVlcnkuc2xpY2UoMCwgLTEpIC8vIHJlbW92ZSBsYXN0IGFtcGVyc2FuZFxuXHRcdGNvbnNvbGUubG9nKHF1ZXJ5KVxuXG5cdFx0YXhpb3MuZ2V0KHF1ZXJ5KS50aGVuKCByZXMgPT4ge1xuXHRcdFx0bGV0IHJldHZhbCA9ICc8dWw+J1xuXHRcdFx0Zm9yICh2YXIgaSA9IHJlcy5kYXRhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG5cdFx0XHRcdHJldHZhbCArPSAnPGxpPjxhIGhyZWY9XCInXG5cdFx0XHRcdFx0KyByZXMuZGF0YVtpXS5saW5rXG5cdFx0XHRcdFx0KyAnXCI+J1xuXHRcdFx0XHRcdCsgcmVzLmRhdGFbaV0udGl0bGUucmVuZGVyZWRcblx0XHRcdFx0XHQrICc8L2E+PC9saT4nXG5cdFx0XHR9XG5cdFx0XHRyZXR2YWwgKyAnPC91bD4nXG5cblx0XHRcdCQoJyNhLXJlbGF0ZWQtYycpWzBdLmlubmVySFRNTCA9ICAnPGg0PkxpbmtlZCBTdG9yaWVzPC9oND4nXG5cdFx0XHQrICdFYWNoIGxpbmsgcG9pbnRzIHRvIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYW5kIGEgcGRmIGRvd25sb2FkIHRvIGVhY2ggc3RvcnknXG5cdFx0XHQrIHJldHZhbFxuXHRcdH0pLmNhdGNoKCdlcnJvcicsIGUgPT4geyBjb25zb2xlLndhcm4oZSkgfSlcblx0fSxcblxuXHRtYWtlRW1iZWRMaW5rKGxpbmspIHtcbiAgICBsZXQgcmVnRXhwID0gL14uKih5b3V0dS5iZVxcL3x2XFwvfHVcXC9cXHdcXC98ZW1iZWRcXC98d2F0Y2hcXD92PXxcXCZ2PSkoW14jXFwmXFw/XSopLiovO1xuICAgIGxldCBtYXRjaCA9IGxpbmsubWF0Y2gocmVnRXhwKTtcblxuICAgIGlmIChtYXRjaCAmJiBtYXRjaFsyXS5sZW5ndGggIT0gMTEpIHtcbiAgICAgIHJldHVybiAnZXJyb3InO1xuICAgIH1cblxuXHRcdGxldCBlbWJlZCA9ICc8aWZyYW1lIHdpZHRoPVwiNTYwXCIgaGVpZ2h0PVwiMzE1XCIgc3JjPVwiLy93d3cueW91dHViZS5jb20vZW1iZWQvJ1xuXHRcdHJldHVybiBlbWJlZCArIG1hdGNoWzJdICsgJ1wiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nXG5cdH1cbn0iLCJpbXBvcnQgJCBmcm9tICdiYWxhanMnXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRpc0NhY2hlZDogZnVuY3Rpb24gKElEKSB7XG5cdFx0cmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhYnJhX2FjJyArIElEKSA/IHRydWUgOiBmYWxzZVxuXHR9LFxuXG5cdGNhY2hlOiBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhYnJhX2FjJyArIGRhdGEuaWQsIEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuXHR9LFxuXG5cdGdldDogZnVuY3Rpb24gKGNhdElELCBheGlvcywgY2FsbGJhY2spIHtcblx0XHRheGlvcy5nZXQoJ2FjdGl2aXR5X2NhdC8nICsgY2F0SUQpLnRoZW4oIHJlc3BvbnNlID0+IHtcblx0XHRcdHRoaXMuY2FjaGUocmVzcG9uc2UuZGF0YSlcblx0XHRcdGNhbGxiYWNrKHJlc3BvbnNlLmRhdGEpXG5cdFx0fSkuY2F0Y2goJ2Vycm9yJywgZnVuY3Rpb24gKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oZXJyb3IpXG5cdFx0XHRyZXR1cm4gbnVsbFxuXHRcdH0pXG5cdH0sXG5cblx0c2V0RE9NOiBmdW5jdGlvbiAoY2F0LCBzdGF0ZSwgc3RvcnksIGF4aW9zKSB7XG5cdFx0Y29uc3QgY20gPSAnI2NhdC1tZXRhJ1xuXHRcdGNvbnN0IGMgPSAkKGNtKVswXVxuXG5cdFx0Ly8gc2V0IG1ldGEgZGVzY3JpcHRpb25cblx0XHQkKGNtICsgJ19faGVhZGVyIGgyJylbMF0uaW5uZXJIVE1MID0gY2F0Lm5hbWVcblx0XHQkKGNtICsgJ19faGVhZGVyIHNwYW4nKVswXS5pbm5lckhUTUwgPSBzdGF0ZS5nZXRCcmVhZGNydW1iKClcblx0XHQkKGNtICsgJ19fY29udGVudCcpWzBdLmlubmVySFRNTCA9IGNhdC5kZXNjcmlwdGlvblxuXG5cdFx0Ly8gc2V0IGFzeW5jXG5cdFx0c2V0VGltZW91dChcblx0XHRcdHN0b3J5LmdldFJlbGF0ZWRTdG9yaWVzKCdhY3Rpdml0eT9wZXJfcGFnZT0xMDAmYWN0aXZpdHlfY2F0PScgKyBjYXQuaWQsIHN0b3JpZXMgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmdyb3VwKCclYyBSZWxhdGVkIFN0b3JpZXMgZm9yIElEICMnICsgY2F0LmlkLCAnY29sb3I6ICNGNzVDMDMnKVxuXHRcdFx0XHRjb25zb2xlLmluZm8oJ1N0b3JpZXM6ICcsIHN0b3JpZXMpXG5cblx0XHRcdFx0Y29uc3QgbGlzdCA9ICQoJyNjYXQtbWV0YV9fbGlzdCcpWzBdXG5cdFx0XHRcdGxpc3QuY2xhc3NOYW1lID0gJ2lzUmVmcmVzaGluZydcblx0XHRcdFx0bGlzdC5pbm5lckhUTUwgPSAnJ1xuXG5cdFx0XHRcdC8vIGNyZWF0ZSBzdG9yeSBwcmV2aWV3c1xuXHRcdFx0XHRmb3IgKGxldCBpID0gc3Rvcmllcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuXHRcdFx0XHRcdGxldCBzID0gc3Rvcmllc1tpXVxuXG5cdFx0XHRcdFx0bGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblx0XHRcdFx0XHRlbC5jbGFzc05hbWUgPSAnYWN0aXZpdHktaXRlbSdcblx0XHRcdFx0XHRlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RvcnknLCBzLmlkKVxuXHRcdFx0XHRcdGVsLmlubmVySFRNTCA9ICc8aDM+JyArIHMudGl0bGUucmVuZGVyZWQgKyAnPC9oMz4nXG5cdFx0XHRcdFx0c3Rvcnkuc2V0QWN0aXZpdHlMaXN0SWNvbihzLmlkLCBheGlvcywgZWwpXG5cblx0XHRcdFx0XHRsaXN0LmFwcGVuZENoaWxkKGVsKVxuXG5cdFx0XHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRzdGF0ZS5zZXRMZXZlbCgyKVxuXG5cdFx0XHRcdFx0XHRzdGF0ZS5wdXNoU3RhdGUocylcblxuXHRcdFx0XHRcdFx0c3RvcnkubWFrZVRhYkNvbnRhaW5lcigpXG5cdFx0XHRcdFx0XHRzdG9yeS5zaG93U3Rvcnkocywgc3RhdGUsIGF4aW9zKVxuXHRcdFx0XHRcdFx0c3Rvcnkuc2V0QWN0aXZpdHlJY29uKHMuaWQsIGF4aW9zKVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zb2xlLmdyb3VwRW5kKClcblxuXHRcdFx0XHRsaXN0LmNsYXNzTmFtZSA9ICcnXG5cdFx0XHR9LCBheGlvc1xuXHRcdCksIDApXG5cdH1cbn0iLCJcbmV4cG9ydCBmdW5jdGlvbiBvbiAoYWN0aW9uLCBlbGVtLCBjYiwgcGFzc2l2ZSkge1xuXHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoYWN0aW9uLCBjYiwgcGFzc2l2ZSlcbn0iXX0=
