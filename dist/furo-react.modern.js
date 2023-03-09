import e,{createContext as t,useState as r,useReducer as n,useEffect as o,useCallback as i,useContext as a}from"react";import{Buffer as s}from"buffer";function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}var l=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},f=Object.prototype.toString;function d(e){return"[object Array]"===f.call(e)}function h(e){return void 0===e}function p(e){return null!==e&&"object"==typeof e}function m(e){if("[object Object]"!==f.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function g(e){return"[object Function]"===f.call(e)}function y(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),d(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var v={isArray:d,isArrayBuffer:function(e){return"[object ArrayBuffer]"===f.call(e)},isBuffer:function(e){return null!==e&&!h(e)&&null!==e.constructor&&!h(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:p,isPlainObject:m,isUndefined:h,isDate:function(e){return"[object Date]"===f.call(e)},isFile:function(e){return"[object File]"===f.call(e)},isBlob:function(e){return"[object Blob]"===f.call(e)},isFunction:g,isStream:function(e){return p(e)&&g(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:y,merge:function e(){var t={};function r(r,n){t[n]=m(t[n])&&m(r)?e(t[n],r):m(r)?e({},r):d(r)?r.slice():r}for(var n=0,o=arguments.length;n<o;n++)y(arguments[n],r);return t},extend:function(e,t,r){return y(t,function(t,n){e[n]=r&&"function"==typeof t?l(t,r):t}),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}};function w(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var b=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(v.isURLSearchParams(t))n=t.toString();else{var o=[];v.forEach(t,function(e,t){null!=e&&(v.isArray(e)?t+="[]":e=[e],v.forEach(e,function(e){v.isDate(e)?e=e.toISOString():v.isObject(e)&&(e=JSON.stringify(e)),o.push(w(t)+"="+w(e))}))}),n=o.join("&")}if(n){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e};function k(){this.handlers=[]}k.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},k.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},k.prototype.forEach=function(e){v.forEach(this.handlers,function(t){null!==t&&e(t)})};var E=k,S=function(e,t){v.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})},O=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},x=function(e,t,r,n,o){var i=new Error(e);return O(i,t,r,n,o)},R=v.isStandardBrowserEnv()?{write:function(e,t,r,n,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),v.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),v.isString(n)&&a.push("path="+n),v.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},j=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],A=v.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=v.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},T={"Content-Type":"application/x-www-form-urlencoded"};function C(e,t){!v.isUndefined(e)&&v.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var I,U={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(I=function(e){return new Promise(function(t,r){var n=e.data,o=e.headers,i=e.responseType;v.isFormData(n)&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var s=e.auth.username||"",c=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(s+":"+c)}var u,l,f=(l=e.url,(u=e.baseURL)&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(l)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(u,l):l);function d(){if(a){var n,o,s,c,u,l="getAllResponseHeaders"in a?(n=a.getAllResponseHeaders(),u={},n?(v.forEach(n.split("\n"),function(e){if(c=e.indexOf(":"),o=v.trim(e.substr(0,c)).toLowerCase(),s=v.trim(e.substr(c+1)),o){if(u[o]&&j.indexOf(o)>=0)return;u[o]="set-cookie"===o?(u[o]?u[o]:[]).concat([s]):u[o]?u[o]+", "+s:s}}),u):u):null;!function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(x("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}(t,r,{data:i&&"text"!==i&&"json"!==i?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:l,config:e,request:a}),a=null}}if(a.open(e.method.toUpperCase(),b(f,e.params,e.paramsSerializer),!0),a.timeout=e.timeout,"onloadend"in a?a.onloadend=d:a.onreadystatechange=function(){a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))&&setTimeout(d)},a.onabort=function(){a&&(r(x("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){r(x("Network Error",e,null,a)),a=null},a.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(x(t,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",a)),a=null},v.isStandardBrowserEnv()){var h=(e.withCredentials||A(f))&&e.xsrfCookieName?R.read(e.xsrfCookieName):void 0;h&&(o[e.xsrfHeaderName]=h)}"setRequestHeader"in a&&v.forEach(o,function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:a.setRequestHeader(t,e)}),v.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),i&&"json"!==i&&(a.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&a.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){a&&(a.abort(),r(e),a=null)}),n||(n=null),a.send(n)})}),I),transformRequest:[function(e,t){return S(t,"Accept"),S(t,"Content-Type"),v.isFormData(e)||v.isArrayBuffer(e)||v.isBuffer(e)||v.isStream(e)||v.isFile(e)||v.isBlob(e)?e:v.isArrayBufferView(e)?e.buffer:v.isURLSearchParams(e)?(C(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):v.isObject(e)||t&&"application/json"===t["Content-Type"]?(C(t,"application/json"),function(e,t,r){if(v.isString(e))try{return(0,JSON.parse)(e),v.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional,r=!(t&&t.silentJSONParsing)&&"json"===this.responseType;if(r||t&&t.forcedJSONParsing&&v.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(r){if("SyntaxError"===e.name)throw O(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};v.forEach(["delete","get","head"],function(e){U.headers[e]={}}),v.forEach(["post","put","patch"],function(e){U.headers[e]=v.merge(T)});var N=U,P=function(e,t,r){var n=this||N;return v.forEach(r,function(r){e=r.call(n,e,t)}),e},L=function(e){return!(!e||!e.__CANCEL__)};function _(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var B=function(e){return _(e),e.headers=e.headers||{},e.data=P.call(e,e.data,e.headers,e.transformRequest),e.headers=v.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),v.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||N.adapter)(e).then(function(t){return _(e),t.data=P.call(e,t.data,t.headers,e.transformResponse),t},function(t){return L(t)||(_(e),t&&t.response&&(t.response.data=P.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})},D=function(e,t){t=t||{};var r={},n=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function s(e,t){return v.isPlainObject(e)&&v.isPlainObject(t)?v.merge(e,t):v.isPlainObject(t)?v.merge({},t):v.isArray(t)?t.slice():t}function c(n){v.isUndefined(t[n])?v.isUndefined(e[n])||(r[n]=s(void 0,e[n])):r[n]=s(e[n],t[n])}v.forEach(n,function(e){v.isUndefined(t[e])||(r[e]=s(void 0,t[e]))}),v.forEach(o,c),v.forEach(i,function(n){v.isUndefined(t[n])?v.isUndefined(e[n])||(r[n]=s(void 0,e[n])):r[n]=s(void 0,t[n])}),v.forEach(a,function(n){n in t?r[n]=s(e[n],t[n]):n in e&&(r[n]=s(void 0,e[n]))});var u=n.concat(o).concat(i).concat(a),l=Object.keys(e).concat(Object.keys(t)).filter(function(e){return-1===u.indexOf(e)});return v.forEach(l,c),r},$={name:"axios",version:"0.21.4",description:"Promise based HTTP client for the browser and node.js",main:"index.js",scripts:{test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},repository:{type:"git",url:"https://github.com/axios/axios.git"},keywords:["xhr","http","ajax","promise","node"],author:"Matt Zabriskie",license:"MIT",bugs:{url:"https://github.com/axios/axios/issues"},homepage:"https://axios-http.com",devDependencies:{coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},jsdelivr:"dist/axios.min.js",unpkg:"dist/axios.min.js",typings:"./index.d.ts",dependencies:{"follow-redirects":"^1.14.0"},bundlesize:[{path:"./dist/axios.min.js",threshold:"5kB"}]},q={};["object","boolean","number","function","string","symbol"].forEach(function(e,t){q[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});var z={},F=$.version.split(".");function M(e,t){for(var r=t?t.split("."):F,n=e.split("."),o=0;o<3;o++){if(r[o]>n[o])return!0;if(r[o]<n[o])return!1}return!1}q.transitional=function(e,t,r){var n=t&&M(t);function o(e,t){return"[Axios v"+$.version+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,i,a){if(!1===e)throw new Error(o(i," has been removed in "+t));return n&&!z[i]&&(z[i]=!0,console.warn(o(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,i,a)}};var W={isOlderVersion:M,assertOptions:function(e,t,r){if("object"!=typeof e)throw new TypeError("options must be an object");for(var n=Object.keys(e),o=n.length;o-- >0;){var i=n[o],a=t[i];if(a){var s=e[i],c=void 0===s||a(s,i,e);if(!0!==c)throw new TypeError("option "+i+" must be "+c)}else if(!0!==r)throw Error("Unknown option "+i)}},validators:q},H=W.validators;function J(e){this.defaults=e,this.interceptors={request:new E,response:new E}}J.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=D(this.defaults,e)).method=e.method?e.method.toLowerCase():this.defaults.method?this.defaults.method.toLowerCase():"get";var t=e.transitional;void 0!==t&&W.assertOptions(t,{silentJSONParsing:H.transitional(H.boolean,"1.0.0"),forcedJSONParsing:H.transitional(H.boolean,"1.0.0"),clarifyTimeoutError:H.transitional(H.boolean,"1.0.0")},!1);var r=[],n=!0;this.interceptors.request.forEach(function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(n=n&&t.synchronous,r.unshift(t.fulfilled,t.rejected))});var o,i=[];if(this.interceptors.response.forEach(function(e){i.push(e.fulfilled,e.rejected)}),!n){var a=[B,void 0];for(Array.prototype.unshift.apply(a,r),a=a.concat(i),o=Promise.resolve(e);a.length;)o=o.then(a.shift(),a.shift());return o}for(var s=e;r.length;){var c=r.shift(),u=r.shift();try{s=c(s)}catch(e){u(e);break}}try{o=B(s)}catch(e){return Promise.reject(e)}for(;i.length;)o=o.then(i.shift(),i.shift());return o},J.prototype.getUri=function(e){return e=D(this.defaults,e),b(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},v.forEach(["delete","get","head","options"],function(e){J.prototype[e]=function(t,r){return this.request(D(r||{},{method:e,url:t,data:(r||{}).data}))}}),v.forEach(["post","put","patch"],function(e){J.prototype[e]=function(t,r,n){return this.request(D(n||{},{method:e,url:t,data:r}))}});var G=J;function K(e){this.message=e}K.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},K.prototype.__CANCEL__=!0;var V=K;function X(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new V(e),t(r.reason))})}X.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},X.source=function(){var e;return{token:new X(function(t){e=t}),cancel:e}};var Y=X;function Z(e){var t=new G(e),r=l(G.prototype.request,t);return v.extend(r,G.prototype,t),v.extend(r,t),r}var Q=Z(N);Q.Axios=G,Q.create=function(e){return Z(D(Q.defaults,e))},Q.Cancel=V,Q.CancelToken=Y,Q.isCancel=L,Q.all=function(e){return Promise.all(e)},Q.spread=function(e){return function(t){return e.apply(null,t)}},Q.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError};var ee=Q;ee.default=Q;var te=ee;te.defaults.baseURL="https://api.furo.one";class re{constructor(e){this.domain=e.domain,this.clientId=e.client_id,this.redirectURI=e.redirect_uri,e.api_url&&(te.defaults.baseURL=e.api_url)}async buildAuthorizeUrl(e){return`${this.domain}/login/${this.clientId}`}async getUser(e){const t=await localStorage.getItem(`furo-${this.clientId}-token`);if(!t)return null;const{data:r}=await te.get("/users/me",{headers:{Authorization:`Bearer ${t}`}});return r}async loginWithRedirect(){const e=await this.buildAuthorizeUrl();window.location.href=e}async handleRedirectCallback(e=window.location.search){const t=new URLSearchParams(e).get("code"),{access_token:r,refresh_token:n}=await te.post("/sessions/code/authenticate",{code:t});return await localStorage.setItem(`furo-${this.clientId}-token`,r),await localStorage.setItem(`furo-${this.clientId}-refresh`,n),{}}async checkSession(e){return await sessionStorage.getItem(`furo-${this.clientId}-token`)}async getTokenSilently(e){}async refreshTokenSilently(e){const t=await localStorage.getItem(`furo-${this.clientId}-refresh`);if(!t)return null;const r=await localStorage.getItem(`furo-${this.clientId}-token`),{data:n}=await te.post("/sessions/token/refresh",{accessToken:r},{headers:{Authorization:`Bearer ${t}`}}),{access_token:o,refresh_token:i}=n;return await localStorage.setItem(`furo-${this.clientId}-token`,o),await localStorage.setItem(`furo-${this.clientId}-refresh`,i),{access_token:o,refresh_token:i}}async logout(e){return await localStorage.removeItem(`furo-${this.clientId}-token`),await localStorage.removeItem(`furo-${this.clientId}-refresh`),await localStorage.removeItem("furo-user"),{}}async loginWithKakao(e){if(!e)throw"API KEY is empty";const t=encodeURIComponent(`https://auth.furo.one/oauth/kakao/${this.clientId}`);window.location.href=`https://kauth.kakao.com/oauth/authorize?client_id=${e}&redirect_uri=${t}&response_type=code`}}const ne={isAuthenticated:!1,isLoading:!0},oe=(e,t)=>{var r,n;switch(t.type){case"LOGIN_POPUP_STARTED":return c({},e,{isLoading:!0});case"LOGIN_POPUP_COMPLETE":case"INITIALISED":return console.log("Furo successfully initialized :)"),c({},e,{isAuthenticated:!!t.user,user:t.user,isLoading:!1,error:void 0});case"HANDLE_REDIRECT_COMPLETE":case"GET_ACCESS_TOKEN_COMPLETE":return(null==(r=e.user)?void 0:r.updated_at)===(null==(n=t.user)?void 0:n.updated_at)?e:c({},e,{isAuthenticated:!!t.user,user:t.user});case"LOGOUT":return console.log("Logged out"),c({},e,{isAuthenticated:!1,user:void 0});case"ERROR":return c({},e,{isLoading:!1,error:t.error})}},ie=()=>{throw new Error("You forgot to wrap your component in <FuroProvider>.")},ae=/*#__PURE__*/t(c({},ne,{buildAuthorizeUrl:ie,buildLogoutUrl:ie,getAccessTokenSilently:ie,getAccessTokenWithPopup:ie,getIdTokenClaims:ie,loginWithRedirect:ie,loginWithPopup:ie,loginWithKakao:ie,logout:ie,handleRedirectCallback:ie})),se=/[?&]code=[^&]+/,ce=/[?&]error=[^&]+/,ue=["clientId","redirectUri","apiUrl","maxAge"],le=["children","skipRedirectCallback","onRedirectCallback"],fe=(e,t)=>{window.history.replaceState({},document.title,(null==e?void 0:e.returnTo)||window.location.pathname),window.location.href=t.redirectUri},de=t=>{const{children:a,skipRedirectCallback:l,onRedirectCallback:f=fe}=t,d=u(t,le),[h]=r(()=>new re((e=>{const{clientId:t,redirectUri:r,apiUrl:n,maxAge:o}=e;return c({},u(e,ue),{client_id:t,redirect_uri:r,api_url:n,max_age:o,furoClient:{name:"furo-react"}})})(d))),[p,m]=n(oe,ne);o(()=>{const e=async()=>{try{((e=window.location.search)=>se.test(e)||ce.test(e))()&&!l?(await h.handleRedirectCallback(),f({},t)):console.log("Getting token from storage... Checking Sessions");const e=await h.getUser();e||k(),m({type:"INITIALISED",user:e})}catch(t){console.error(t);try{const{access_token:t,refresh_token:r}=await h.refreshTokenSilently();t&&r&&e()}catch(e){m({type:"ERROR",error:e})}}};e()},[h,f,l]);const g=i(e=>h.buildAuthorizeUrl(e),[h]),y=i(e=>h.buildLogoutUrl(e),[h]),v=i(e=>h.loginWithRedirect(e),[h]),w=i(e=>h.loginWithKakao(e),[h]),b=i(e=>h.refreshTokenSilently(e),[h]),k=i(e=>{localStorage.removeItem("furo-user"),localStorage.removeItem(`furo-${h.clientId}-token`),sessionStorage.removeItem(`furo-${h.clientId}-token`),m({type:"LOGOUT"})},[h]),E=i(async(e,t)=>{const r=await localStorage.getItem(`furo-${h.clientId}-token`),n=r.split(".")[1],o=s.from(n,"base64").toString(),i=JSON.parse(o).exp;if(!i)return r;if(Date.now()>=1e3*i){const{access_token:e}=await b();return e}return r},[h]),S=i(async e=>{try{return await h.handleRedirectCallback(e)}catch(e){throw e}finally{m({type:"HANDLE_REDIRECT_COMPLETE",user:await h.getUser()})}},[h]);/*#__PURE__*/return e.createElement(ae.Provider,{value:c({},p,{buildAuthorizeUrl:g,buildLogoutUrl:y,getAccessTokenSilently:E,refreshTokenSilently:b,loginWithRedirect:v,loginWithKakao:w,logout:k,handleRedirectCallback:S})},a)},he=()=>a(ae);export{de as FuroProvider,he as useFuro};
//# sourceMappingURL=furo-react.modern.js.map
