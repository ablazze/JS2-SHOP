!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=27)}([function(e,t,n){"use strict";var r=n(2),o=n(11),i=Object.prototype.toString;function a(e){return"[object Array]"===i.call(e)}function s(e){return null!==e&&"object"==typeof e}function c(e){return"[object Function]"===i.call(e)}function u(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:c,isStream:function(e){return s(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:u,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]="object"==typeof n?e({},n):n}for(var r=0,o=arguments.length;r<o;r++)u(arguments[r],n);return t},extend:function(e,t,n){return u(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){e.exports=n(10)},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var r=n(0),o=n(17),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(void 0!==t&&"[object process]"===Object.prototype.toString.call(t)?s=n(6):"undefined"!=typeof XMLHttpRequest&&(s=n(6)),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(i)})),e.exports=c}).call(this,n(16))},function(e,t,n){"use strict";var r=n(0),o=n(18),i=n(3),a=n(20),s=n(21),c=n(7);e.exports=function(e){return new Promise((function(t,u){var l=e.data,p=e.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",m=e.auth.password||"";p.Authorization="Basic "+btoa(f+":"+m)}if(d.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?a(d.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:n,config:e,request:d};o(t,u,r),d=null}},d.onabort=function(){d&&(u(c("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){u(c("Network Error",e,null,d)),d=null},d.ontimeout=function(){u(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var h=n(22),v=(e.withCredentials||s(e.url))&&e.xsrfCookieName?h.read(e.xsrfCookieName):void 0;v&&(p[e.xsrfHeaderName]=v)}if("setRequestHeader"in d&&r.forEach(p,(function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)})),e.withCredentials&&(d.withCredentials=!0),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),u(e),d=null)})),void 0===l&&(l=null),d.send(l)}))}},function(e,t,n){"use strict";var r=n(19);e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){t=t||{};var n={};return r.forEach(["url","method","params","data"],(function(e){void 0!==t[e]&&(n[e]=t[e])})),r.forEach(["headers","auth","proxy"],(function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):void 0!==t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):void 0!==e[o]&&(n[o]=e[o])})),r.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])})),n}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){"use strict";var r=n(0),o=n(2),i=n(12),a=n(8);function s(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=s(n(5));c.Axios=i,c.create=function(e){return s(a(c.defaults,e))},c.Cancel=n(9),c.CancelToken=n(25),c.isCancel=n(4),c.all=function(e){return Promise.all(e)},c.spread=n(26),e.exports=c,e.exports.default=c},function(e,t){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}},function(e,t,n){"use strict";var r=n(0),o=n(3),i=n(13),a=n(14),s=n(8);function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method=e.method?e.method.toLowerCase():"get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}})),e.exports=c},function(e,t,n){"use strict";var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,n){"use strict";var r=n(0),o=n(15),i=n(4),a=n(5),s=n(23),c=n(24);function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.baseURL&&!s(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return u(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],l=!1,p=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):p=-1,u.length&&f())}function f(){if(!l){var e=s(d);l=!0;for(var t=u.length;t;){for(c=u,u=[];++p<t;)c&&c[p].run();p=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||l||s(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){"use strict";var r=n(7);e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(9);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r);new Vue({el:"#root",data:{isError:!1,API:"http://localhost:3000"},methods:{getJson(e){return fetch(e).then(e=>e.json()).catch(e=>this.isError=!0)}},components:{products:{data:()=>({catalogUrl:"/catalogData?page=1",data:[],filteredData:[]}),methods:{filter(e){let t=new RegExp(e,"i");this.filtered=this.products.filter(e=>t.test(e.product_name))},makeGETRequest(e,t){let n;window.XMLHttpRequest?n=new XMLHttpRequest:window.ActiveXObject&&(n=new ActiveXObject("Microsoft.XMLHTTP")),n.onreadystatechange=function(){4===n.readyState&&t(n.responseText)},n.open("GET",e,!0),n.setRequestHeader("Content-Type","application/json; charset=UTF-8"),n.send()},makePOSTRequest(e,t,n){let r;window.XMLHttpRequest?r=new XMLHttpRequest:window.ActiveXObject&&(r=new ActiveXObject("Microsoft.XMLHTTP")),r.onreadystatechange=function(){4===r.readyState&&n(r.responseText)},r.open("POST",e,!0),r.setRequestHeader("Content-Type","application/json; charset=UTF-8"),r.send(t)}},mounted(){this.makeGETRequest(this.catalogUrl,e=>{this.data=JSON.parse(e),this.filteredData=JSON.parse(e),console.log("goods=",e)})},components:{"product-item":{props:["id","img","name","price"],template:'<div class="product-item" >\n            <div class="desc" @click="buy">\n                <img width="100" height="140" :src="imgSource" alt="">\n                <div>{{this.name}}</div>\n                <div>{{this.price}}</div>\n                \x3c!--<button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>--\x3e\n            </div>\n        </div>',methods:{buy:function(){const e={id:this.id,name:this.name,price:this.price,img:this.img,quantity:1};this.$root.$refs.cart.addProduct(e)}},computed:{imgSource:function(){return"/img/"+this.img}}}},template:'<div class="products">\n            <product-item\n            v-for="product of filteredData"\n            :key="product.id"\n            :id="product.id"\n            :name="product.product_name"\n            :price="product.price"\n            :img="product.img">\n            </product-item>\n        </div>'},cart:{data:()=>({cartItems:[],showCart:!0}),methods:{addProduct(e){o.a.post(`${this.$root.API}/addToCart`,e).then(e=>{console.log("response = ",e),console.log("response.data",e.data);const t=e.data;1==t.result&&(this.cartItems=t.cart),alert("Товар добавлен в корзину")})},removeProduct(e){o.a.post(`${this.$root.API}/removeFromCart`,{productId:e}).then(t=>{console.log("response = ",t),this.cartItems=this.cartItems.filter(t=>t.id!==e)})}},mounted(){o.a.get(`${this.$root.API}/getCart`).then(e=>{console.log("getCart = ",e);const t=e.data;for(let e of t)this.cartItems.push(e)})},template:'<div>\n            <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>\n            <div class="cart-block" v-show="showCart">\n                        <p v-if="!cartItems.length">Корзина пуста</p>\n                        <cart-item\n                        v-for="item of cartItems"\n                        :key="item.id"\n                        :id="item.id"\n                        :price="item.price"\n                        :name="item.name"\n                        :img="item.img"\n                        :quantity="item.quantity"\n                        @remove="removeProduct(item.id)"\n                        ></cart-item>\n                    </div>\n            </div>',components:{"cart-item":{props:["id","name","price","quantity","img"],template:'<div class="cart-item" >\n                    <div class="product-bio">\n                        <img :src="imgSource" alt="Some image">\n                        <div class="product-desc">\n                            <p class="product-title">{{name}}</p>\n                            <p class="product-quantity">Quantity: {{quantity}}</p>\n                            <p class="product-single-price">$ {{price}} each</p>\n                        </div>\n                    </div>\n                    <div class="right-block">\n                        <p class="product-price">$ {{price*quantity}} full price</p>\n                        <button class="del-btn" @click="$emit(\'remove\')">&times;</button>\n                    </div>\n                </div>',computed:{imgSource:function(){return"/img/"+this.img}}}}},registration:{data:function(){return{username:"",password:"",email:"",gender:"",credit_card:"",bio:""}},template:'\n        <div class="registration">\n            <form action="/register" method="POST" @submit.prevent="handleSubmit">\n                <input type="text" name="username" value="" placeholder="username">\n                    <span></span>\n                <input type="password" name="password" value="" placeholder="password">\n                    <span></span>\n                <input type="email" name="email" value="" placeholder="email">\n                    <span></span>\n                <select name="gender">\n                    <option value="m" selected>Мужчина</option>\n                    <option value="f">Женщина</option>\n                </select>\n                    <span></span>\n                <input type="text" name="credit_card" value="" placeholder="credit card">\n                    <span></span>\n                <input type="text" name="bio" value="" placeholder="bio">\n                    <span></span>\n                <input type="submit" value="Register">\n            </form>\n        </div>',methods:{handleSubmit:function(e){console.log("submit!!!");const t=new FormData(e.target),n=this.validate(t);if(console.log("valid = ",n),!n)return;console.log("ajax request");const r={};for(var[i,a]of t.entries())r[i]=a;o()({method:"post",url:e.target.getAttribute("action"),data:r,config:{headers:{"Content-Type":"multipart/form-data"}}}).then(e=>{console.log("response = ",e);const t=e.data;if(1===t.result)location.href="/account";else{const e=(t.errors||[]).join(",\n");alert(e)}})},validate(e){let t=!0;for(let e of document.querySelectorAll(".registration form input + span"))e.textContent="";for(let e of document.querySelectorAll(".registration form input"))e.classList.remove("error");for(var[n,r]of e.entries())console.log(n,r),"username"==n?null===r.match(/^[a-zA-Z]+$/gi)&&(document.querySelector(`.registration form input[name="${n}"]`).classList.add("error"),document.querySelector(`.registration form input[name="${n}"] + span`).textContent="Неправильный формат имени!",t=!1):"password"==n?r||(document.querySelector(`.registration form input[name="${n}"]`).classList.add("error"),document.querySelector(`.registration form input[name="${n}"] + span`).textContent="Неправильный формат пароля!",t=!1):"email"==n?null===r.match(/^[a-zA-Z]+(\.|\-)?[a-zA-Z]+@mail.ru$/gi)&&(document.querySelector(`.registration form input[name="${n}"]`).classList.add("error"),document.querySelector(`.registration form input[name="${n}"] + span`).textContent="Неправильный формат email!",t=!1):"credit_card"==n&&r&&null===r.match(/^[0-9]{7}-[0-9]{4}-[0-9]{6}-[0-9]{3}$/gi)&&(document.querySelector(`.registration form input[name="${n}"]`).classList.add("error"),document.querySelector(`.registration form input[name="${n}"] + span`).textContent="Неправильный формат кредитной карты!",t=!1);return t}}},account:{data:function(){return{username:"",password:"",email:"",gender:"",credit_card:"",bio:""}},template:'\n        <div>\n            <div>{{ username }}</div>\n            <div>{{ email }}</div>\n            <div class="account">\n                <form action="/update" method="POST" @submit.prevent="handleSubmit">\n                    <input type="text" name="username" v-model="username" placeholder="username">\n                        <span></span>\n                    <input type="password" name="password" v-model="password"  placeholder="password">\n                        <span></span>\n                    <input type="email" name="email" v-model="email"  placeholder="email">\n                        <span></span>\n                    <select name="gender" v-model="gender">\n                        <option value="m" selected>Мужчина</option>\n                        <option value="f">Женщина</option>\n                    </select>\n                        <span></span>\n                    <input type="text" name="credit_card" v-model="credit_card"  placeholder="credit card">\n                        <span></span>\n                    <input type="text" name="bio" v-model="bio"  placeholder="bio">\n                        <span></span>\n                    <input type="submit" value="Save">\n                </form>\n            </div>\n            <button @click="logout">Выйти</button>\n        </div>\n        ',created:function(){o.a.get("/user").then(e=>{console.log("response = ",e);const t=e.data;this.username=t.username,this.password=t.password,this.email=t.email,this.gender=t.gender,this.credit_card=t.credit_card,this.bio=t.bio})},methods:{logout:function(){o.a.post("/logout",{}).then((function(e){console.log("response = ",e),1===e.data.result&&(location.href="/")}))},handleSubmit:function(){const e={};e.username=this.username,e.password=this.password,e.email=this.email,e.gender=this.gender,e.credit_card=this.credit_card,e.bio=this.bio,console.log("data = ",e),this.validate(e)?o.a.post("/update",e).then(e=>{console.log("response = ",e),1===e.data.result?alert("Изменения успешно сохранены"):alert("Server error")}):console.log("Форма не валидна")},validate(e){let t=!0;for(let e of document.querySelectorAll(".account form input + span"))e.textContent="";for(let e of document.querySelectorAll(".account form input"))e.classList.remove("error");for(let n in e){const r=e[n];"username"==n?null===r.match(/^[a-zA-Z]+$/gi)&&(document.querySelector(`.account form input[name="${n}"]`).classList.add("error"),document.querySelector(`.account form input[name="${n}"] + span`).textContent="Неправильный формат имени!",t=!1):"password"==n?r||(document.querySelector(`.account form input[name="${n}"]`).classList.add("error"),document.querySelector(`.account form input[name="${n}"] + span`).textContent="Неправильный формат пароля!",t=!1):"email"==n?null===r.match(/^[a-zA-Z]+(\.|\-)?[a-zA-Z]+@mail.ru$/gi)&&(document.querySelector(`.account form input[name="${n}"]`).classList.add("error"),document.querySelector(`.account form input[name="${n}"] + span`).textContent="Неправильный формат email!",t=!1):"credit_card"==n&&r&&null===r.match(/^[0-9]{7}-[0-9]{4}-[0-9]{6}-[0-9]{3}$/gi)&&(document.querySelector(`.account form input[name="${n}"]`).classList.add("error"),document.querySelector(`.account form input[name="${n}"] + span`).textContent="Неправильный формат кредитной карты!",t=!1)}return t}}},login:{data:function(){return{username:"",password:""}},template:'<div>\n    <h4 class="checkout__list_drop_content_h4">Already registed?</h4>\n    <p class="checkout__list_drop_content_paragraph checkout__list_drop_content_paragraph_bottom27">\n    Please log in below</p>\n    <label class="checkout__list_drop_content_label_2">USERNAME<span\n    class="checkout__list_drop_content_paragraph_red">*</span> <br>\n    <input type="text" v-model="username"><br>\n    </label>\n    <label class="checkout__list_drop_content_label_2">PASSWORD <span\n    class="checkout__list_drop_content_paragraph_red">*</span><br>\n    <input type="password" v-model="password">\n    </label>\n    <p class="checkout__list_drop_content_paragraph checkout__list_drop_content_paragraph_red">*\n    Required Fileds</p>\n    <div class="flex">\n    <div class="checkout__list_drop_button checkout__list_drop_button2 bxbb" @click="login">Log in</div>\n    <a class="checkout__list_drop_content_forgot" href="#">Forgot Password ?</a>\n    </div>\n    </div>\n    ',methods:{login:function(){const{username:e,password:t}=this;o.a.post("/login",{username:e,password:t}).then(e=>{console.log("response = ",e);const t=e.data;t.result?location.href="/account":alert(t.errors.join("\n"))})}}},review:{props:["admin"],data:function(){return{reviews:[],reviewText:""}},template:'\n    <div class="container">\n        <div v-for="item in reviews">\n            {{item.text}}<button @click="removeReview(item.id)" v-if="admin">X</button>\n            <button @click="approveReview(item.id)" v-if="admin && !item.approved">Approve</button>\n        </div>\n        <textarea placeholder="Ваш отзыв" v-model="reviewText" v-if="!admin"></textarea>\n        <button @click="sendReview" v-if="!admin">Отправить</button>\n    </div>\n    ',methods:{sendReview:function(e){console.log("send",this.reviewText),o.a.post("/addReview",{text:this.reviewText}).then(e=>{const t=e.data;1===t.result?alert("Ваш отзыв отправлен на модерацию"):alert(t.errors.join("\n"))})},removeReview:function(e){console.log("id = ",e),o.a.post("/removeReview",{id:e}).then(e=>{const t=e.data;1===t.result?this.reviews=t.reviews:alert(t.errors.join("\n"))})},approveReview:function(e){o.a.post("/approveReview",{id:e}).then(e=>{const t=e.data;1===t.result?(this.reviews=t.reviews,alert("Подтвержден!")):alert(t.errors.join("\n"))})}},created:function(){o.a.get("/reviews").then(e=>{const t=e.data;1===t.result&&(console.log("reviews type = ",typeof t.reviews),this.reviews=t.reviews)})}}},mounted(){console.log("root refs = ",this.$refs)}})}]);