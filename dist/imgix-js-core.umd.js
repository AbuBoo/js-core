!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).ImgixClient=e()}(this,function(){"use strict";function e(e,t){var r,n=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)),n}function c(n){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?e(Object(o),!0).forEach(function(t){var e,r;e=n,r=o[t=t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(o,t))})}return n}function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(t,e)||r(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(r="Object"===r&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var k="3.7.2",F="function"==typeof atob,t="function"==typeof btoa,i="function"==typeof Buffer;const a="function"==typeof TextDecoder?new TextDecoder:void 0,u="function"==typeof TextEncoder?new TextEncoder:void 0;const s=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),d=(t=>{let r={};return t.forEach((t,e)=>r[t]=e),r})(s),z=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,y=String.fromCharCode.bind(String),p="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):(t,e=t=>t)=>new Uint8Array(Array.prototype.slice.call(t,0).map(e)),g=t=>t.replace(/=/g,"").replace(/[+\/]/g,t=>"+"==t?"-":"_"),b=t=>t.replace(/[^A-Za-z0-9\+\/]/g,"");var v=e=>{let r,n,o,i,a="";var t=e.length%3;for(let t=0;t<e.length;){if(255<(n=e.charCodeAt(t++))||255<(o=e.charCodeAt(t++))||255<(i=e.charCodeAt(t++)))throw new TypeError("invalid character found");r=n<<16|o<<8|i,a+=s[r>>18&63]+s[r>>12&63]+s[r>>6&63]+s[63&r]}return t?a.slice(0,t-3)+"===".substring(t):a};const m=t?t=>btoa(t):i?t=>Buffer.from(t,"binary").toString("base64"):v,w=i?t=>Buffer.from(t).toString("base64"):r=>{let n=[];for(let t=0,e=r.length;t<e;t+=4096)n.push(y.apply(null,r.subarray(t,t+4096)));return m(n.join(""))},A=(t,e=!1)=>e?g(w(t)):w(t),D=t=>{var e;return t.length<2?(e=t.charCodeAt(0))<128?t:e<2048?y(192|e>>>6)+y(128|63&e):y(224|e>>>12&15)+y(128|e>>>6&63)+y(128|63&e):(e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320),y(240|e>>>18&7)+y(128|e>>>12&63)+y(128|e>>>6&63)+y(128|63&e))},W=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,S=t=>t.replace(W,D),x=i?t=>Buffer.from(t,"utf8").toString("base64"):u?t=>w(u.encode(t)):t=>m(S(t)),T=(t,e=!1)=>e?g(x(t)):x(t);t=t=>T(t,!0);const H=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,M=t=>{switch(t.length){case 4:var e=((7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3))-65536;return y(55296+(e>>>10))+y(56320+(1023&e));case 3:return y((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return y((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},P=t=>t.replace(H,M);var U=e=>{if(e=e.replace(/\s+/g,""),!z.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(3&e.length));let r,n="",o,i;for(let t=0;t<e.length;)r=d[e.charAt(t++)]<<18|d[e.charAt(t++)]<<12|(o=d[e.charAt(t++)])<<6|(i=d[e.charAt(t++)]),n+=64===o?y(r>>16&255):64===i?y(r>>16&255,r>>8&255):y(r>>16&255,r>>8&255,255&r);return n};const B=F?t=>atob(b(t)):i?t=>Buffer.from(t,"base64").toString("binary"):U,C=i?t=>p(Buffer.from(t,"base64")):t=>p(B(t),t=>t.charCodeAt(0)),R=t=>C(E(t)),Z=i?t=>Buffer.from(t,"base64").toString("utf8"):a?t=>a.decode(C(t)):t=>P(B(t)),E=t=>b(t.replace(/[-_]/g,t=>"-"==t?"+":"/")),j=t=>Z(E(t));function _(){var t=(t,e)=>Object.defineProperty(String.prototype,t,N(e));t("fromBase64",function(){return j(this)}),t("toBase64",function(t){return T(this,t)}),t("toBase64URI",function(){return T(this,!0)}),t("toBase64URL",function(){return T(this,!0)}),t("toUint8Array",function(){return R(this)})}function q(){var t=(t,e)=>Object.defineProperty(Uint8Array.prototype,t,N(e));t("toBase64",function(t){return A(this,t)}),t("toBase64URI",function(){return A(this,!0)}),t("toBase64URL",function(){return A(this,!0)})}const N=t=>({value:t,enumerable:!1,writable:!0,configurable:!0});const Q={version:k,VERSION:"3.7.2",atob:B,atobPolyfill:U,btoa:m,btoaPolyfill:v,fromBase64:j,toBase64:T,encode:T,encodeURI:t,encodeURL:t,utob:S,btou:P,decode:j,isValid:t=>{if("string"!=typeof t)return!1;t=t.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(t)||!/[^\s0-9a-zA-Z\-_]/.test(t)},fromUint8Array:A,toUint8Array:R,extendString:_,extendUint8Array:q,extendBuiltins:()=>{_(),q()}};function V(t,e){return t(e={exports:{}},e.exports),e.exports}function $(t){return null!=t&&(K(t)||"function"==typeof(e=t).readFloatLE&&"function"==typeof e.slice&&K(e.slice(0,0))||!!t._isBuffer);var e}var G=V(function(t){var i,r;i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&r.rotl(t,8)|4278255360&r.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=r.endian(t[e]);return t},randomBytes:function(t){for(var e=[];0<t;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],r=0,n=0;r<t.length;r++,n+=8)e[n>>>5]|=t[r]<<24-n%32;return e},wordsToBytes:function(t){for(var e=[],r=0;r<32*t.length;r+=8)e.push(t[r>>>5]>>>24-r%32&255);return e},bytesToHex:function(t){for(var e=[],r=0;r<t.length;r++)e.push((t[r]>>>4).toString(16)),e.push((15&t[r]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],r=0;r<t.length;r+=2)e.push(parseInt(t.substr(r,2),16));return e},bytesToBase64:function(t){for(var e=[],r=0;r<t.length;r+=3)for(var n=t[r]<<16|t[r+1]<<8|t[r+2],o=0;o<4;o++)8*r+6*o<=8*t.length?e.push(i.charAt(n>>>6*(3-o)&63)):e.push("=");return e.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var e=[],r=0,n=0;r<t.length;n=++r%4)0!=n&&e.push((i.indexOf(t.charAt(r-1))&Math.pow(2,-2*n+8)-1)<<2*n|i.indexOf(t.charAt(r))>>>6-2*n);return e}},t.exports=r}),O={utf8:{stringToBytes:function(t){return O.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(O.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r));return e},bytesToString:function(t){for(var e=[],r=0;r<t.length;r++)e.push(String.fromCharCode(t[r]));return e.join("")}}},J=O;function K(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}var X=V(function(t){function g(t,e){t.constructor==String?t=(e&&"binary"===e.encoding?w:v).stringToBytes(t):m(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var r=b.bytesToWords(t),e=8*t.length,n=1732584193,o=-271733879,i=-1732584194,a=271733878,u=0;u<r.length;u++)r[u]=16711935&(r[u]<<8|r[u]>>>24)|4278255360&(r[u]<<24|r[u]>>>8);r[e>>>5]|=128<<e%32,r[14+(64+e>>>9<<4)]=e;for(var s=g._ff,c=g._gg,l=g._hh,f=g._ii,u=0;u<r.length;u+=16){var h=n,d=o,y=i,p=a,n=s(n,o,i,a,r[u+0],7,-680876936),a=s(a,n,o,i,r[u+1],12,-389564586),i=s(i,a,n,o,r[u+2],17,606105819),o=s(o,i,a,n,r[u+3],22,-1044525330);n=s(n,o,i,a,r[u+4],7,-176418897),a=s(a,n,o,i,r[u+5],12,1200080426),i=s(i,a,n,o,r[u+6],17,-1473231341),o=s(o,i,a,n,r[u+7],22,-45705983),n=s(n,o,i,a,r[u+8],7,1770035416),a=s(a,n,o,i,r[u+9],12,-1958414417),i=s(i,a,n,o,r[u+10],17,-42063),o=s(o,i,a,n,r[u+11],22,-1990404162),n=s(n,o,i,a,r[u+12],7,1804603682),a=s(a,n,o,i,r[u+13],12,-40341101),i=s(i,a,n,o,r[u+14],17,-1502002290),n=c(n,o=s(o,i,a,n,r[u+15],22,1236535329),i,a,r[u+1],5,-165796510),a=c(a,n,o,i,r[u+6],9,-1069501632),i=c(i,a,n,o,r[u+11],14,643717713),o=c(o,i,a,n,r[u+0],20,-373897302),n=c(n,o,i,a,r[u+5],5,-701558691),a=c(a,n,o,i,r[u+10],9,38016083),i=c(i,a,n,o,r[u+15],14,-660478335),o=c(o,i,a,n,r[u+4],20,-405537848),n=c(n,o,i,a,r[u+9],5,568446438),a=c(a,n,o,i,r[u+14],9,-1019803690),i=c(i,a,n,o,r[u+3],14,-187363961),o=c(o,i,a,n,r[u+8],20,1163531501),n=c(n,o,i,a,r[u+13],5,-1444681467),a=c(a,n,o,i,r[u+2],9,-51403784),i=c(i,a,n,o,r[u+7],14,1735328473),n=l(n,o=c(o,i,a,n,r[u+12],20,-1926607734),i,a,r[u+5],4,-378558),a=l(a,n,o,i,r[u+8],11,-2022574463),i=l(i,a,n,o,r[u+11],16,1839030562),o=l(o,i,a,n,r[u+14],23,-35309556),n=l(n,o,i,a,r[u+1],4,-1530992060),a=l(a,n,o,i,r[u+4],11,1272893353),i=l(i,a,n,o,r[u+7],16,-155497632),o=l(o,i,a,n,r[u+10],23,-1094730640),n=l(n,o,i,a,r[u+13],4,681279174),a=l(a,n,o,i,r[u+0],11,-358537222),i=l(i,a,n,o,r[u+3],16,-722521979),o=l(o,i,a,n,r[u+6],23,76029189),n=l(n,o,i,a,r[u+9],4,-640364487),a=l(a,n,o,i,r[u+12],11,-421815835),i=l(i,a,n,o,r[u+15],16,530742520),n=f(n,o=l(o,i,a,n,r[u+2],23,-995338651),i,a,r[u+0],6,-198630844),a=f(a,n,o,i,r[u+7],10,1126891415),i=f(i,a,n,o,r[u+14],15,-1416354905),o=f(o,i,a,n,r[u+5],21,-57434055),n=f(n,o,i,a,r[u+12],6,1700485571),a=f(a,n,o,i,r[u+3],10,-1894986606),i=f(i,a,n,o,r[u+10],15,-1051523),o=f(o,i,a,n,r[u+1],21,-2054922799),n=f(n,o,i,a,r[u+8],6,1873313359),a=f(a,n,o,i,r[u+15],10,-30611744),i=f(i,a,n,o,r[u+6],15,-1560198380),o=f(o,i,a,n,r[u+13],21,1309151649),n=f(n,o,i,a,r[u+4],6,-145523070),a=f(a,n,o,i,r[u+11],10,-1120210379),i=f(i,a,n,o,r[u+2],15,718787259),o=f(o,i,a,n,r[u+9],21,-343485551),n=n+h>>>0,o=o+d>>>0,i=i+y>>>0,a=a+p>>>0}return b.endian([n,o,i,a])}var b,v,m,w;b=G,v=J.utf8,m=$,w=J.bin,g._ff=function(t,e,r,n,o,i,a){t=t+(e&r|~e&n)+(o>>>0)+a;return(t<<i|t>>>32-i)+e},g._gg=function(t,e,r,n,o,i,a){t=t+(e&n|r&~n)+(o>>>0)+a;return(t<<i|t>>>32-i)+e},g._hh=function(t,e,r,n,o,i,a){t=t+(e^r^n)+(o>>>0)+a;return(t<<i|t>>>32-i)+e},g._ii=function(t,e,r,n,o,i,a){t=t+(r^(e|~n))+(o>>>0)+a;return(t<<i|t>>>32-i)+e},g._blocksize=16,g._digestsize=16,t.exports=function(t,e){if(null==t)throw new Error("Illegal argument "+t);t=b.wordsToBytes(g(t,e));return e&&e.asBytes?t:e&&e.asString?w.bytesToString(t):b.bytesToHex(t)}});const Y=/\+/g;function tt(e=""){try{return decodeURIComponent(""+e)}catch(t){return""+e}}function et(t=""){const e={};for(const o of(t="?"===t[0]?t.substr(1):t).split("&")){var r,n=o.match(/([^=]+)=?(.*)/)||[];n.length<2||"__proto__"!==(r=tt(n[1]))&&"constructor"!==r&&(n=tt((n[2]||"").replace(Y," ")),e[r]?Array.isArray(e[r])?e[r].push(n):e[r]=[e[r],n]:e[r]=n)}return e}function rt(t,e=!1){return/^\w+:\/\/.+/.test(t)||e&&/^\/\/[^/]+/.test(t)}function nt(t){return et(I(t).search)}function I(t="",e){if(!rt(t,!0))return e?I(e+t):ot(t);const[r="",n,o]=(t.replace(/\\/g,"/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1);var[e="",t=""]=(o.match(/([^/?]*)(.*)?/)||[]).splice(1),{pathname:t,search:i,hash:a}=ot(t);return{protocol:r,auth:n?n.substr(0,n.length-1):"",host:e,pathname:t,search:i,hash:a}}function ot(t=""){var[t="",e="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:e,hash:r}}var it=/^(?:[a-z\d\-_]{1,62}\.){0,125}(?:[a-z\d](?:\-(?=\-*[a-z\d])|[a-z]|\d){0,62}\.)[a-z\d]{1,63}$/i,at={1:75,2:50,3:35,4:23,5:20},ut=[1,2,3,4,5],st={domain:null,useHTTPS:!0,includeLibraryParam:!0,urlPrefix:"https://",secureURLToken:null};function L(t){var e=t.url,e=void 0===e?"":e,t=t.useHttps,t=void 0!==t&&t?"https://":"http://";return rt(e,!0)?I(e):L({url:t+e})}function ct(t,e){if(!Number.isInteger(t)||!Number.isInteger(e)||t<=0||e<=0||e<t)throw new Error("The min and max srcset widths can only be passed positive Number values, and min must be less than max. Found min: ".concat(t," and max: ").concat(e,"."))}function lt(t){if("number"!=typeof t||t<.01)throw new Error("The srcset widthTolerance must be a number greater than or equal to 0.01")}return function(){function s(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=this,r=s;if(!(e instanceof r))throw new TypeError("Cannot call a class as a function");if(this.settings=c(c({},st),t),this.targetWidthsCache={},"string"!=typeof this.settings.domain)throw new Error("ImgixClient must be passed a valid string domain");if(null==it.exec(this.settings.domain))throw new Error('Domain must be passed in as fully-qualified domain name and should not include a protocol or any path element, i.e. "example.imgix.net".');this.settings.includeLibraryParam&&(this.settings.libraryParam="js-"+s.version()),this.settings.urlPrefix=this.settings.useHTTPS?"https://":"http://"}var t,e,r;return t=s,r=[{key:"version",value:function(){return"3.5.1"}},{key:"_buildURL",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if(null==t)return"";var t=L({url:t,useHTTPS:r.useHTTPS}),n=t.host,o=t.pathname,t=c(c({},nt(t.search)),e);if(n.length&&o.length)return new s(c({domain:n},r)).buildURL(o,t);throw new Error("_buildURL: URL must match {host}/{pathname}?{query}")}},{key:"_buildSrcSet",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};if(null==t)return"";var t=L({url:t,useHTTPS:n.useHTTPS}),o=t.host,i=t.pathname,t=c(c({},nt(t.search)),e);if(o.length&&i.length)return new s(c({domain:o},n)).buildSrcSet(i,t,r);throw new Error("_buildOneStepURL: URL must match {host}/{pathname}?{query}")}},{key:"targetWidths",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:100,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:8192,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:.08,n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{},o=Math.floor(t),i=Math.floor(e),t=(ct(t,e),lt(r),r+"/"+o+"/"+i);if(t in n)return n[t];if(o===i)return[o];for(var a=[],u=o;u<i;)a.push(Math.round(u)),u*=1+2*r;return a[a.length-1]<i&&a.push(i),n[t]=a}}],(e=[{key:"buildURL",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=this._sanitizePath(t,{encode:!(2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).disablePathEncoding}),e=this._buildParams(e);return this.settings.secureURLToken&&(e=this._signParams(t,e)),this.settings.urlPrefix+this.settings.domain+t+e}},{key:"_buildParams",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=[].concat(h(this.settings.libraryParam?["ixlib=".concat(this.settings.libraryParam)]:[]),h(Object.entries(t).reduce(function(t,e){var e=f(e,2),r=e[0],e=e[1];if(null==e)return t;var n=encodeURIComponent(r),r="64"===r.substr(-2)?Q.encodeURI(e):encodeURIComponent(e);return t.push("".concat(n,"=").concat(r)),t},[])));return"".concat(0<t.length?"?":"").concat(t.join("&"))}},{key:"_signParams",value:function(t,e){t=this.settings.secureURLToken+t+e,t=X(t);return 0<e.length?e+"&s="+t:"?s="+t}},{key:"_sanitizePath",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=t.replace(/^\//,"");return"/"+(t=!1!==e.encode?/^https?:\/\//.test(t)?encodeURIComponent(t):encodeURI(t).replace(/[#?:+]/g,encodeURIComponent):t)}},{key:"buildSrcSet",value:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},n=e.w,o=e.h;return n||o?this._buildDPRSrcSet(t,e,r):this._buildSrcSetPairs(t,e,r)}},{key:"_buildSrcSetPairs",value:function(e){var r=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};t=void 0!==(a=o).widthTolerance?(lt(a.widthTolerance),a.widthTolerance):.08,i=void 0===a.minWidth?100:a.minWidth,a=void 0===a.maxWidth?8192:a.maxWidth,100==i&&8192==a||ct(i,a);var t=f([t,i,a],3),i=t[0],a=t[1],t=t[2];if(o.widths){var u=o.widths;if(!Array.isArray(u)||!u.length)throw new Error("The widths argument can only be passed a valid non-empty array of integers");if(!u.every(function(t){return Number.isInteger(t)&&0<t}))throw new Error("A custom widths argument can only contain positive integer values");u=h(o.widths)}else u=s.targetWidths(a,t,i,this.targetWidthsCache);return u.map(function(t){return"".concat(r.buildURL(e,c(c({},n),{},{w:t}),{disablePathEncoding:o.disablePathEncoding})," ").concat(t,"w")}).join(",\n")}},{key:"_buildDPRSrcSet",value:function(r){var n=this,o=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if(i.devicePixelRatios){var t=i.devicePixelRatios;if(!Array.isArray(t)||!t.length)throw new Error("The devicePixelRatios argument can only be passed a valid non-empty array of integers");if(!t.every(function(t){return"number"==typeof t&&1<=t&&t<=5}))throw new Error("The devicePixelRatios argument can only contain positive integer values between 1 and 5")}var t=i.devicePixelRatios||ut,e=i.disableVariableQuality||!1;if(!e){var a=e;if("boolean"!=typeof a)throw new Error("The disableVariableQuality argument can only be passed a Boolean value")}if(i.variableQualities){a=i.variableQualities;if("object"!==l(a))throw new Error("The variableQualities argument can only be an object")}var u=c(c({},at),i.variableQualities);return(e?t.map(function(t){return"".concat(n.buildURL(r,c(c({},o),{},{dpr:t}),{disablePathEncoding:i.disablePathEncoding})," ").concat(t,"x")}):t.map(function(t){return e=o,t=t,"".concat(n.buildURL(r,c(c({},e),{},{dpr:t,q:e.q||u[t]||u[Math.floor(t)]}),{disablePathEncoding:i.disablePathEncoding})," ").concat(t,"x");var e})).join(",\n")}}])&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),s}()});
