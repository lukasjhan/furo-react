!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],t):t((e||self).furoReact={},e.react)}(this,function(e,t){function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=/*#__PURE__*/r(t);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}var a=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},s=Object.prototype.toString;function u(e){return"[object Array]"===s.call(e)}function c(e){return void 0===e}function l(e){return null!==e&&"object"==typeof e}function f(e){if("[object Object]"!==s.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function d(e){return"[object Function]"===s.call(e)}function h(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),u(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var p={isArray:u,isArrayBuffer:function(e){return"[object ArrayBuffer]"===s.call(e)},isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:l,isPlainObject:f,isUndefined:c,isDate:function(e){return"[object Date]"===s.call(e)},isFile:function(e){return"[object File]"===s.call(e)},isBlob:function(e){return"[object Blob]"===s.call(e)},isFunction:d,isStream:function(e){return l(e)&&d(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:h,merge:function e(){var t={};function r(r,n){t[n]=f(t[n])&&f(r)?e(t[n],r):f(r)?e({},r):u(r)?r.slice():r}for(var n=0,o=arguments.length;n<o;n++)h(arguments[n],r);return t},extend:function(e,t,r){return h(t,function(t,n){e[n]=r&&"function"==typeof t?a(t,r):t}),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}};function m(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var g=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(p.isURLSearchParams(t))n=t.toString();else{var o=[];p.forEach(t,function(e,t){null!=e&&(p.isArray(e)?t+="[]":e=[e],p.forEach(e,function(e){p.isDate(e)?e=e.toISOString():p.isObject(e)&&(e=JSON.stringify(e)),o.push(m(t)+"="+m(e))}))}),n=o.join("&")}if(n){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e};function v(){this.handlers=[]}v.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},v.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},v.prototype.forEach=function(e){p.forEach(this.handlers,function(t){null!==t&&e(t)})};var y=v,b=function(e,t){p.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})},w=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},k=function(e,t,r,n,o){var i=new Error(e);return w(i,t,r,n,o)},E=p.isStandardBrowserEnv()?{write:function(e,t,r,n,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),p.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),p.isString(n)&&a.push("path="+n),p.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},P=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],S=p.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=p.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},j={"Content-Type":"application/x-www-form-urlencoded"};function x(e,t){!p.isUndefined(e)&&p.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var C,O={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(C=function(e){return new Promise(function(t,r){var n=e.data,o=e.headers,i=e.responseType;p.isFormData(n)&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var s=e.auth.username||"",u=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(s+":"+u)}var c,l,f=(l=e.url,(c=e.baseURL)&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(l)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(c,l):l);function d(){if(a){var n,o,s,u,c,l="getAllResponseHeaders"in a?(n=a.getAllResponseHeaders(),c={},n?(p.forEach(n.split("\n"),function(e){if(u=e.indexOf(":"),o=p.trim(e.substr(0,u)).toLowerCase(),s=p.trim(e.substr(u+1)),o){if(c[o]&&P.indexOf(o)>=0)return;c[o]="set-cookie"===o?(c[o]?c[o]:[]).concat([s]):c[o]?c[o]+", "+s:s}}),c):c):null;!function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(k("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}(t,r,{data:i&&"text"!==i&&"json"!==i?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:l,config:e,request:a}),a=null}}if(a.open(e.method.toUpperCase(),g(f,e.params,e.paramsSerializer),!0),a.timeout=e.timeout,"onloadend"in a?a.onloadend=d:a.onreadystatechange=function(){a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))&&setTimeout(d)},a.onabort=function(){a&&(r(k("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){r(k("Network Error",e,null,a)),a=null},a.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(k(t,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",a)),a=null},p.isStandardBrowserEnv()){var h=(e.withCredentials||S(f))&&e.xsrfCookieName?E.read(e.xsrfCookieName):void 0;h&&(o[e.xsrfHeaderName]=h)}"setRequestHeader"in a&&p.forEach(o,function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:a.setRequestHeader(t,e)}),p.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),i&&"json"!==i&&(a.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&a.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){a&&(a.abort(),r(e),a=null)}),n||(n=null),a.send(n)})}),C),transformRequest:[function(e,t){return b(t,"Accept"),b(t,"Content-Type"),p.isFormData(e)||p.isArrayBuffer(e)||p.isBuffer(e)||p.isStream(e)||p.isFile(e)||p.isBlob(e)?e:p.isArrayBufferView(e)?e.buffer:p.isURLSearchParams(e)?(x(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):p.isObject(e)||t&&"application/json"===t["Content-Type"]?(x(t,"application/json"),function(e,t,r){if(p.isString(e))try{return(0,JSON.parse)(e),p.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional,r=!(t&&t.silentJSONParsing)&&"json"===this.responseType;if(r||t&&t.forcedJSONParsing&&p.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(r){if("SyntaxError"===e.name)throw w(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(e){O.headers[e]={}}),p.forEach(["post","put","patch"],function(e){O.headers[e]=p.merge(j)});var R=O,T=function(e,t,r){var n=this||R;return p.forEach(r,function(r){e=r.call(n,e,t)}),e},A=function(e){return!(!e||!e.__CANCEL__)};function I(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var U=function(e){return I(e),e.headers=e.headers||{},e.data=T.call(e,e.data,e.headers,e.transformRequest),e.headers=p.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),p.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||R.adapter)(e).then(function(t){return I(e),t.data=T.call(e,t.data,t.headers,e.transformResponse),t},function(t){return A(t)||(I(e),t&&t.response&&(t.response.data=T.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})},N=function(e,t){t=t||{};var r={},n=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function s(e,t){return p.isPlainObject(e)&&p.isPlainObject(t)?p.merge(e,t):p.isPlainObject(t)?p.merge({},t):p.isArray(t)?t.slice():t}function u(n){p.isUndefined(t[n])?p.isUndefined(e[n])||(r[n]=s(void 0,e[n])):r[n]=s(e[n],t[n])}p.forEach(n,function(e){p.isUndefined(t[e])||(r[e]=s(void 0,t[e]))}),p.forEach(o,u),p.forEach(i,function(n){p.isUndefined(t[n])?p.isUndefined(e[n])||(r[n]=s(void 0,e[n])):r[n]=s(void 0,t[n])}),p.forEach(a,function(n){n in t?r[n]=s(e[n],t[n]):n in e&&(r[n]=s(void 0,e[n]))});var c=n.concat(o).concat(i).concat(a),l=Object.keys(e).concat(Object.keys(t)).filter(function(e){return-1===c.indexOf(e)});return p.forEach(l,u),r},L={name:"axios",version:"0.21.4",description:"Promise based HTTP client for the browser and node.js",main:"index.js",scripts:{test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},repository:{type:"git",url:"https://github.com/axios/axios.git"},keywords:["xhr","http","ajax","promise","node"],author:"Matt Zabriskie",license:"MIT",bugs:{url:"https://github.com/axios/axios/issues"},homepage:"https://axios-http.com",devDependencies:{coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},jsdelivr:"dist/axios.min.js",unpkg:"dist/axios.min.js",typings:"./index.d.ts",dependencies:{"follow-redirects":"^1.14.0"},bundlesize:[{path:"./dist/axios.min.js",threshold:"5kB"}]},_={};["object","boolean","number","function","string","symbol"].forEach(function(e,t){_[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});var B={},D=L.version.split(".");function q(e,t){for(var r=t?t.split("."):D,n=e.split("."),o=0;o<3;o++){if(r[o]>n[o])return!0;if(r[o]<n[o])return!1}return!1}_.transitional=function(e,t,r){var n=t&&q(t);function o(e,t){return"[Axios v"+L.version+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,i,a){if(!1===e)throw new Error(o(i," has been removed in "+t));return n&&!B[i]&&(B[i]=!0,console.warn(o(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,i,a)}};var z={isOlderVersion:q,assertOptions:function(e,t,r){if("object"!=typeof e)throw new TypeError("options must be an object");for(var n=Object.keys(e),o=n.length;o-- >0;){var i=n[o],a=t[i];if(a){var s=e[i],u=void 0===s||a(s,i,e);if(!0!==u)throw new TypeError("option "+i+" must be "+u)}else if(!0!==r)throw Error("Unknown option "+i)}},validators:_},F=z.validators;function M(e){this.defaults=e,this.interceptors={request:new y,response:new y}}M.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=N(this.defaults,e)).method=e.method?e.method.toLowerCase():this.defaults.method?this.defaults.method.toLowerCase():"get";var t=e.transitional;void 0!==t&&z.assertOptions(t,{silentJSONParsing:F.transitional(F.boolean,"1.0.0"),forcedJSONParsing:F.transitional(F.boolean,"1.0.0"),clarifyTimeoutError:F.transitional(F.boolean,"1.0.0")},!1);var r=[],n=!0;this.interceptors.request.forEach(function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(n=n&&t.synchronous,r.unshift(t.fulfilled,t.rejected))});var o,i=[];if(this.interceptors.response.forEach(function(e){i.push(e.fulfilled,e.rejected)}),!n){var a=[U,void 0];for(Array.prototype.unshift.apply(a,r),a=a.concat(i),o=Promise.resolve(e);a.length;)o=o.then(a.shift(),a.shift());return o}for(var s=e;r.length;){var u=r.shift(),c=r.shift();try{s=u(s)}catch(e){c(e);break}}try{o=U(s)}catch(e){return Promise.reject(e)}for(;i.length;)o=o.then(i.shift(),i.shift());return o},M.prototype.getUri=function(e){return e=N(this.defaults,e),g(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},p.forEach(["delete","get","head","options"],function(e){M.prototype[e]=function(t,r){return this.request(N(r||{},{method:e,url:t,data:(r||{}).data}))}}),p.forEach(["post","put","patch"],function(e){M.prototype[e]=function(t,r,n){return this.request(N(n||{},{method:e,url:t,data:r}))}});var W=M;function H(e){this.message=e}H.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},H.prototype.__CANCEL__=!0;var J=H;function G(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new J(e),t(r.reason))})}G.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},G.source=function(){var e;return{token:new G(function(t){e=t}),cancel:e}};var K=G;function V(e){var t=new W(e),r=a(W.prototype.request,t);return p.extend(r,W.prototype,t),p.extend(r,t),r}var X=V(R);X.Axios=W,X.create=function(e){return V(N(X.defaults,e))},X.Cancel=J,X.CancelToken=K,X.isCancel=A,X.all=function(e){return Promise.all(e)},X.spread=function(e){return function(t){return e.apply(null,t)}},X.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError};var $=X;$.default=X;var Y=$;Y.defaults.baseURL="https://api.furo.one";var Z=/*#__PURE__*/function(){function e(e){this.domain=e.domain,this.clientId=e.client_id,this.redirectURI=e.redirect_uri,e.api_url&&(Y.defaults.baseURL=e.api_url)}var t=e.prototype;return t.buildAuthorizeUrl=function(e){try{return Promise.resolve(this.domain+"/login/"+this.clientId)}catch(e){return Promise.reject(e)}},t.getUser=function(e){try{return Promise.resolve(localStorage.getItem("furo-"+this.clientId+"-token")).then(function(e){return e?Promise.resolve(Y.get("/users/me",{headers:{Authorization:"Bearer "+e}})).then(function(e){return e.data}):null})}catch(e){return Promise.reject(e)}},t.loginWithRedirect=function(){try{return Promise.resolve(this.buildAuthorizeUrl()).then(function(e){window.location.href=e})}catch(e){return Promise.reject(e)}},t.handleRedirectCallback=function(e){try{var t=this;void 0===e&&(e=window.location.search);var r=new URLSearchParams(e),n=r.get("code"),o=r.get("refresh"),i=r.get("uid");console.log(n,i);var a=o;return Promise.resolve(localStorage.setItem("furo-"+t.clientId+"-token",n)).then(function(){return Promise.resolve(localStorage.setItem("furo-"+t.clientId+"-refresh",a)).then(function(){return{}})})}catch(e){return Promise.reject(e)}},t.checkSession=function(e){try{return Promise.resolve(sessionStorage.getItem("furo-"+this.clientId+"-token"))}catch(e){return Promise.reject(e)}},t.getTokenSilently=function(e){return Promise.resolve()},t.refreshTokenSilently=function(e){try{var t=this;return Promise.resolve(localStorage.getItem("furo-"+t.clientId+"-refresh")).then(function(e){return e?Promise.resolve(localStorage.getItem("furo-"+t.clientId+"-token")).then(function(r){return Promise.resolve(Y.post("/users/refresh",{accessToken:r},{headers:{Authorization:"Bearer "+e}})).then(function(e){var r=e.data,n=r.access_token,o=r.refresh_token;return Promise.resolve(localStorage.setItem("furo-"+t.clientId+"-token",n)).then(function(){return Promise.resolve(localStorage.setItem("furo-"+t.clientId+"-refresh",o)).then(function(){return{access_token:n,refresh_token:o}})})})}):null})}catch(e){return Promise.reject(e)}},t.logout=function(e){try{var t=this;return Promise.resolve(localStorage.removeItem("furo-"+t.clientId+"-token")).then(function(){return Promise.resolve(localStorage.removeItem("furo-"+t.clientId+"-refresh")).then(function(){return Promise.resolve(localStorage.removeItem("furo-user")).then(function(){return{}})})})}catch(e){return Promise.reject(e)}},t.loginWithKakao=function(e){try{if(!e)throw"API KEY is empty";var t=encodeURIComponent("https://auth.furo.one/oauth/kakao/"+this.clientId);return window.location.href="https://kauth.kakao.com/oauth/authorize?client_id="+e+"&redirect_uri="+t+"&response_type=code",Promise.resolve()}catch(e){return Promise.reject(e)}},e}(),Q={isAuthenticated:!1,isLoading:!0},ee=function(e,t){var r,n;switch(t.type){case"LOGIN_POPUP_STARTED":return o({},e,{isLoading:!0});case"LOGIN_POPUP_COMPLETE":case"INITIALISED":return console.log("Furo successfully initialized :)"),o({},e,{isAuthenticated:!!t.user,user:t.user,isLoading:!1,error:void 0});case"HANDLE_REDIRECT_COMPLETE":case"GET_ACCESS_TOKEN_COMPLETE":return(null==(r=e.user)?void 0:r.updated_at)===(null==(n=t.user)?void 0:n.updated_at)?e:o({},e,{isAuthenticated:!!t.user,user:t.user});case"LOGOUT":return console.log("Logged out"),o({},e,{isAuthenticated:!1,user:void 0});case"ERROR":return o({},e,{isLoading:!1,error:t.error})}},te=function(){throw new Error("You forgot to wrap your component in <FuroProvider>.")},re=o({},Q,{buildAuthorizeUrl:te,buildLogoutUrl:te,getAccessTokenSilently:te,getAccessTokenWithPopup:te,getIdTokenClaims:te,loginWithRedirect:te,loginWithPopup:te,loginWithKakao:te,logout:te,handleRedirectCallback:te}),ne=/*#__PURE__*/t.createContext(re),oe=/[?&]code=[^&]+/,ie=/[?&]error=[^&]+/,ae=["clientId","redirectUri","apiUrl","maxAge"],se=["children","skipRedirectCallback","onRedirectCallback"];function ue(e,t){try{var r=e()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}var ce=function(e,t){window.history.replaceState({},document.title,(null==e?void 0:e.returnTo)||window.location.pathname),window.location.href=t.redirectUri};e.FuroProvider=function(e){var r=e.children,a=e.skipRedirectCallback,s=e.onRedirectCallback,u=void 0===s?ce:s,c=i(e,se),l=t.useState(function(){return new Z(function(e){var t=e.clientId,r=e.redirectUri,n=e.apiUrl,a=e.maxAge;return o({},i(e,ae),{client_id:t,redirect_uri:r,api_url:n,max_age:a,furoClient:{name:"furo-react"}})}(c))}),f=l[0],d=t.useReducer(ee,Q),h=d[0],p=d[1];t.useEffect(function(){!function t(){try{var r=ue(function(){function t(){return Promise.resolve(f.getUser()).then(function(e){e||w(),p({type:"INITIALISED",user:e})})}var r=function(){if(void 0===t&&(t=window.location.search),(oe.test(t)||ie.test(t))&&!a)return Promise.resolve(f.handleRedirectCallback()).then(function(){u({},e)});var t;console.log("Getting token from storage... Checking Sessions")}();return r&&r.then?r.then(t):t()},function(e){console.error(e);var r=ue(function(){return Promise.resolve(f.refreshTokenSilently()).then(function(e){e.access_token&&e.refresh_token&&t()})},function(e){p({type:"ERROR",error:e})});return r&&r.then?r.then(function(){}):void 0});return Promise.resolve(r&&r.then?r.then(function(){}):void 0)}catch(e){return Promise.reject(e)}}()},[f,u,a]);var m=t.useCallback(function(e){return f.buildAuthorizeUrl(e)},[f]),g=t.useCallback(function(e){return f.buildLogoutUrl(e)},[f]),v=t.useCallback(function(e){return f.loginWithRedirect(e)},[f]),y=t.useCallback(function(e){return f.loginWithKakao(e)},[f]),b=t.useCallback(function(e){return f.refreshTokenSilently(e)},[f]),w=t.useCallback(function(e){localStorage.removeItem("furo-user"),localStorage.removeItem("furo-"+f.clientId+"-token"),sessionStorage.removeItem("furo-"+f.clientId+"-token"),p({type:"LOGOUT"})},[f]),k=t.useCallback(function(e,t){try{return Promise.resolve(localStorage.getItem("furo-"+f.clientId+"-token"))}catch(e){return Promise.reject(e)}},[f]),E=t.useCallback(function(e){try{return Promise.resolve(function(t,r){try{var n=ue(function(){return Promise.resolve(f.handleRedirectCallback(e))},function(e){throw e})}catch(e){return r(!0,e)}return n&&n.then?n.then(r.bind(null,!1),r.bind(null,!0)):r(!1,n)}(0,function(e,t){return Promise.resolve(f.getUser()).then(function(r){if(p({type:"HANDLE_REDIRECT_COMPLETE",user:r}),e)throw t;return t})}))}catch(e){return Promise.reject(e)}},[f]);/*#__PURE__*/return n.default.createElement(ne.Provider,{value:o({},h,{buildAuthorizeUrl:m,buildLogoutUrl:g,getAccessTokenSilently:k,refreshTokenSilently:b,loginWithRedirect:v,loginWithKakao:y,logout:w,handleRedirectCallback:E})},r)},e.useFuro=function(){return t.useContext(ne)}});
//# sourceMappingURL=furo-react.umd.js.map
