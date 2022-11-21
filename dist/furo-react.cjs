var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=/*#__PURE__*/t(e);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(o[r]=e[r]);return o}var i=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},a=Object.prototype.toString;function s(e){return"[object Array]"===a.call(e)}function u(e){return void 0===e}function c(e){return null!==e&&"object"==typeof e}function l(e){if("[object Object]"!==a.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function f(e){return"[object Function]"===a.call(e)}function d(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var h={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===a.call(e)},isBuffer:function(e){return null!==e&&!u(e)&&null!==e.constructor&&!u(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:c,isPlainObject:l,isUndefined:u,isDate:function(e){return"[object Date]"===a.call(e)},isFile:function(e){return"[object File]"===a.call(e)},isBlob:function(e){return"[object Blob]"===a.call(e)},isFunction:f,isStream:function(e){return c(e)&&f(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:d,merge:function e(){var t={};function r(r,n){t[n]=l(t[n])&&l(r)?e(t[n],r):l(r)?e({},r):s(r)?r.slice():r}for(var n=0,o=arguments.length;n<o;n++)d(arguments[n],r);return t},extend:function(e,t,r){return d(t,function(t,n){e[n]=r&&"function"==typeof t?i(t,r):t}),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}};function p(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var m=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(h.isURLSearchParams(t))n=t.toString();else{var o=[];h.forEach(t,function(e,t){null!=e&&(h.isArray(e)?t+="[]":e=[e],h.forEach(e,function(e){h.isDate(e)?e=e.toISOString():h.isObject(e)&&(e=JSON.stringify(e)),o.push(p(t)+"="+p(e))}))}),n=o.join("&")}if(n){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e};function g(){this.handlers=[]}g.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},g.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},g.prototype.forEach=function(e){h.forEach(this.handlers,function(t){null!==t&&e(t)})};var v=g,y=function(e,t){h.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})},b=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},w=function(e,t,r,n,o){var i=new Error(e);return b(i,t,r,n,o)},k=h.isStandardBrowserEnv()?{write:function(e,t,r,n,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),h.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),h.isString(n)&&a.push("path="+n),h.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},E=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],P=h.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=h.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},S={"Content-Type":"application/x-www-form-urlencoded"};function j(e,t){!h.isUndefined(e)&&h.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var x,C={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(x=function(e){return new Promise(function(t,r){var n=e.data,o=e.headers,i=e.responseType;h.isFormData(n)&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var s=e.auth.username||"",u=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(s+":"+u)}var c,l,f=(l=e.url,(c=e.baseURL)&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(l)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(c,l):l);function d(){if(a){var n,o,s,u,c,l="getAllResponseHeaders"in a?(n=a.getAllResponseHeaders(),c={},n?(h.forEach(n.split("\n"),function(e){if(u=e.indexOf(":"),o=h.trim(e.substr(0,u)).toLowerCase(),s=h.trim(e.substr(u+1)),o){if(c[o]&&E.indexOf(o)>=0)return;c[o]="set-cookie"===o?(c[o]?c[o]:[]).concat([s]):c[o]?c[o]+", "+s:s}}),c):c):null;!function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(w("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}(t,r,{data:i&&"text"!==i&&"json"!==i?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:l,config:e,request:a}),a=null}}if(a.open(e.method.toUpperCase(),m(f,e.params,e.paramsSerializer),!0),a.timeout=e.timeout,"onloadend"in a?a.onloadend=d:a.onreadystatechange=function(){a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))&&setTimeout(d)},a.onabort=function(){a&&(r(w("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){r(w("Network Error",e,null,a)),a=null},a.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(w(t,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",a)),a=null},h.isStandardBrowserEnv()){var p=(e.withCredentials||P(f))&&e.xsrfCookieName?k.read(e.xsrfCookieName):void 0;p&&(o[e.xsrfHeaderName]=p)}"setRequestHeader"in a&&h.forEach(o,function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:a.setRequestHeader(t,e)}),h.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),i&&"json"!==i&&(a.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&a.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){a&&(a.abort(),r(e),a=null)}),n||(n=null),a.send(n)})}),x),transformRequest:[function(e,t){return y(t,"Accept"),y(t,"Content-Type"),h.isFormData(e)||h.isArrayBuffer(e)||h.isBuffer(e)||h.isStream(e)||h.isFile(e)||h.isBlob(e)?e:h.isArrayBufferView(e)?e.buffer:h.isURLSearchParams(e)?(j(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):h.isObject(e)||t&&"application/json"===t["Content-Type"]?(j(t,"application/json"),function(e,t,r){if(h.isString(e))try{return(0,JSON.parse)(e),h.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional,r=!(t&&t.silentJSONParsing)&&"json"===this.responseType;if(r||t&&t.forcedJSONParsing&&h.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(r){if("SyntaxError"===e.name)throw b(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};h.forEach(["delete","get","head"],function(e){C.headers[e]={}}),h.forEach(["post","put","patch"],function(e){C.headers[e]=h.merge(S)});var O=C,R=function(e,t,r){var n=this||O;return h.forEach(r,function(r){e=r.call(n,e,t)}),e},A=function(e){return!(!e||!e.__CANCEL__)};function T(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var I=function(e){return T(e),e.headers=e.headers||{},e.data=R.call(e,e.data,e.headers,e.transformRequest),e.headers=h.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),h.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||O.adapter)(e).then(function(t){return T(e),t.data=R.call(e,t.data,t.headers,e.transformResponse),t},function(t){return A(t)||(T(e),t&&t.response&&(t.response.data=R.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})},U=function(e,t){t=t||{};var r={},n=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function s(e,t){return h.isPlainObject(e)&&h.isPlainObject(t)?h.merge(e,t):h.isPlainObject(t)?h.merge({},t):h.isArray(t)?t.slice():t}function u(n){h.isUndefined(t[n])?h.isUndefined(e[n])||(r[n]=s(void 0,e[n])):r[n]=s(e[n],t[n])}h.forEach(n,function(e){h.isUndefined(t[e])||(r[e]=s(void 0,t[e]))}),h.forEach(o,u),h.forEach(i,function(n){h.isUndefined(t[n])?h.isUndefined(e[n])||(r[n]=s(void 0,e[n])):r[n]=s(void 0,t[n])}),h.forEach(a,function(n){n in t?r[n]=s(e[n],t[n]):n in e&&(r[n]=s(void 0,e[n]))});var c=n.concat(o).concat(i).concat(a),l=Object.keys(e).concat(Object.keys(t)).filter(function(e){return-1===c.indexOf(e)});return h.forEach(l,u),r},N={name:"axios",version:"0.21.4",description:"Promise based HTTP client for the browser and node.js",main:"index.js",scripts:{test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},repository:{type:"git",url:"https://github.com/axios/axios.git"},keywords:["xhr","http","ajax","promise","node"],author:"Matt Zabriskie",license:"MIT",bugs:{url:"https://github.com/axios/axios/issues"},homepage:"https://axios-http.com",devDependencies:{coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},jsdelivr:"dist/axios.min.js",unpkg:"dist/axios.min.js",typings:"./index.d.ts",dependencies:{"follow-redirects":"^1.14.0"},bundlesize:[{path:"./dist/axios.min.js",threshold:"5kB"}]},L={};["object","boolean","number","function","string","symbol"].forEach(function(e,t){L[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});var _={},B=N.version.split(".");function D(e,t){for(var r=t?t.split("."):B,n=e.split("."),o=0;o<3;o++){if(r[o]>n[o])return!0;if(r[o]<n[o])return!1}return!1}L.transitional=function(e,t,r){var n=t&&D(t);function o(e,t){return"[Axios v"+N.version+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,i,a){if(!1===e)throw new Error(o(i," has been removed in "+t));return n&&!_[i]&&(_[i]=!0,console.warn(o(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,i,a)}};var q={isOlderVersion:D,assertOptions:function(e,t,r){if("object"!=typeof e)throw new TypeError("options must be an object");for(var n=Object.keys(e),o=n.length;o-- >0;){var i=n[o],a=t[i];if(a){var s=e[i],u=void 0===s||a(s,i,e);if(!0!==u)throw new TypeError("option "+i+" must be "+u)}else if(!0!==r)throw Error("Unknown option "+i)}},validators:L},z=q.validators;function F(e){this.defaults=e,this.interceptors={request:new v,response:new v}}F.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=U(this.defaults,e)).method=e.method?e.method.toLowerCase():this.defaults.method?this.defaults.method.toLowerCase():"get";var t=e.transitional;void 0!==t&&q.assertOptions(t,{silentJSONParsing:z.transitional(z.boolean,"1.0.0"),forcedJSONParsing:z.transitional(z.boolean,"1.0.0"),clarifyTimeoutError:z.transitional(z.boolean,"1.0.0")},!1);var r=[],n=!0;this.interceptors.request.forEach(function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(n=n&&t.synchronous,r.unshift(t.fulfilled,t.rejected))});var o,i=[];if(this.interceptors.response.forEach(function(e){i.push(e.fulfilled,e.rejected)}),!n){var a=[I,void 0];for(Array.prototype.unshift.apply(a,r),a=a.concat(i),o=Promise.resolve(e);a.length;)o=o.then(a.shift(),a.shift());return o}for(var s=e;r.length;){var u=r.shift(),c=r.shift();try{s=u(s)}catch(e){c(e);break}}try{o=I(s)}catch(e){return Promise.reject(e)}for(;i.length;)o=o.then(i.shift(),i.shift());return o},F.prototype.getUri=function(e){return e=U(this.defaults,e),m(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},h.forEach(["delete","get","head","options"],function(e){F.prototype[e]=function(t,r){return this.request(U(r||{},{method:e,url:t,data:(r||{}).data}))}}),h.forEach(["post","put","patch"],function(e){F.prototype[e]=function(t,r,n){return this.request(U(n||{},{method:e,url:t,data:r}))}});var J=F;function M(e){this.message=e}M.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},M.prototype.__CANCEL__=!0;var W=M;function H(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new W(e),t(r.reason))})}H.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},H.source=function(){var e;return{token:new H(function(t){e=t}),cancel:e}};var G=H;function K(e){var t=new J(e),r=i(J.prototype.request,t);return h.extend(r,J.prototype,t),h.extend(r,t),r}var V=K(O);V.Axios=J,V.create=function(e){return K(U(V.defaults,e))},V.Cancel=W,V.CancelToken=G,V.isCancel=A,V.all=function(e){return Promise.all(e)},V.spread=function(e){return function(t){return e.apply(null,t)}},V.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError};var X=V;X.default=V;var $=X;$.defaults.baseURL="https://api.furo.one";var Y=/*#__PURE__*/function(){function e(e){this.domain=e.domain,this.clientId=e.client_id,this.redirectURI=e.redirect_uri,e.api_url&&($.defaults.baseURL=e.api_url)}var t=e.prototype;return t.buildAuthorizeUrl=function(e){try{return Promise.resolve(this.domain+"/login/"+this.clientId)}catch(e){return Promise.reject(e)}},t.getUser=function(e){try{return Promise.resolve(localStorage.getItem("furo-"+this.clientId+"-token")).then(function(e){return e?Promise.resolve($.get("/users/me",{headers:{Authorization:"Bearer "+e}})).then(function(e){return e.data}):null})}catch(e){return Promise.reject(e)}},t.loginWithRedirect=function(){try{return Promise.resolve(this.buildAuthorizeUrl()).then(function(e){window.location.href=e})}catch(e){return Promise.reject(e)}},t.handleRedirectCallback=function(e){try{var t=this;void 0===e&&(e=window.location.search);var r=new URLSearchParams(e),n=r.get("code"),o=r.get("refresh"),i=(r.get("uid"),n.split(".")[1]),a=Buffer.from(i,"base64"),s=JSON.parse(a.toString()).pid;if(!s||s!==t.clientId)return Promise.resolve(null);var u=o;return Promise.resolve(localStorage.setItem("furo-"+t.clientId+"-token",n)).then(function(){return Promise.resolve(localStorage.setItem("furo-"+t.clientId+"-refresh",u)).then(function(){return{}})})}catch(e){return Promise.reject(e)}},t.checkSession=function(e){try{return Promise.resolve(sessionStorage.getItem("furo-"+this.clientId+"-token"))}catch(e){return Promise.reject(e)}},t.getTokenSilently=function(e){return Promise.resolve()},t.refreshTokenSilently=function(e){try{var t=this;return Promise.resolve(localStorage.getItem("furo-"+t.clientId+"-refresh")).then(function(e){return e?Promise.resolve(localStorage.getItem("furo-"+t.clientId+"-token")).then(function(r){return Promise.resolve($.post("/sessions/token/refresh",{accessToken:r},{headers:{Authorization:"Bearer "+e}})).then(function(e){var r=e.data,n=r.access_token,o=r.refresh_token;return Promise.resolve(localStorage.setItem("furo-"+t.clientId+"-token",n)).then(function(){return Promise.resolve(localStorage.setItem("furo-"+t.clientId+"-refresh",o)).then(function(){return{access_token:n,refresh_token:o}})})})}):null})}catch(e){return Promise.reject(e)}},t.logout=function(e){try{var t=this;return Promise.resolve(localStorage.removeItem("furo-"+t.clientId+"-token")).then(function(){return Promise.resolve(localStorage.removeItem("furo-"+t.clientId+"-refresh")).then(function(){return Promise.resolve(localStorage.removeItem("furo-user")).then(function(){return{}})})})}catch(e){return Promise.reject(e)}},t.loginWithKakao=function(e){try{if(!e)throw"API KEY is empty";var t=encodeURIComponent("https://auth.furo.one/oauth/kakao/"+this.clientId);return window.location.href="https://kauth.kakao.com/oauth/authorize?client_id="+e+"&redirect_uri="+t+"&response_type=code",Promise.resolve()}catch(e){return Promise.reject(e)}},e}(),Z={isAuthenticated:!1,isLoading:!0},Q=function(e,t){var r,o;switch(t.type){case"LOGIN_POPUP_STARTED":return n({},e,{isLoading:!0});case"LOGIN_POPUP_COMPLETE":case"INITIALISED":return console.log("Furo successfully initialized :)"),n({},e,{isAuthenticated:!!t.user,user:t.user,isLoading:!1,error:void 0});case"HANDLE_REDIRECT_COMPLETE":case"GET_ACCESS_TOKEN_COMPLETE":return(null==(r=e.user)?void 0:r.updated_at)===(null==(o=t.user)?void 0:o.updated_at)?e:n({},e,{isAuthenticated:!!t.user,user:t.user});case"LOGOUT":return console.log("Logged out"),n({},e,{isAuthenticated:!1,user:void 0});case"ERROR":return n({},e,{isLoading:!1,error:t.error})}},ee=function(){throw new Error("You forgot to wrap your component in <FuroProvider>.")},te=n({},Z,{buildAuthorizeUrl:ee,buildLogoutUrl:ee,getAccessTokenSilently:ee,getAccessTokenWithPopup:ee,getIdTokenClaims:ee,loginWithRedirect:ee,loginWithPopup:ee,loginWithKakao:ee,logout:ee,handleRedirectCallback:ee}),re=/*#__PURE__*/e.createContext(te),ne=/[?&]code=[^&]+/,oe=/[?&]error=[^&]+/,ie=["clientId","redirectUri","apiUrl","maxAge"],ae=["children","skipRedirectCallback","onRedirectCallback"];function se(e,t){try{var r=e()}catch(e){return t(e)}return r&&r.then?r.then(void 0,t):r}var ue=function(e,t){window.history.replaceState({},document.title,(null==e?void 0:e.returnTo)||window.location.pathname),window.location.href=t.redirectUri};exports.FuroProvider=function(t){var i=t.children,a=t.skipRedirectCallback,s=t.onRedirectCallback,u=void 0===s?ue:s,c=o(t,ae),l=e.useState(function(){return new Y(function(e){var t=e.clientId,r=e.redirectUri,i=e.apiUrl,a=e.maxAge;return n({},o(e,ie),{client_id:t,redirect_uri:r,api_url:i,max_age:a,furoClient:{name:"furo-react"}})}(c))}),f=l[0],d=e.useReducer(Q,Z),h=d[0],p=d[1];e.useEffect(function(){!function e(){try{var r=se(function(){function e(){return Promise.resolve(f.getUser()).then(function(e){e||w(),p({type:"INITIALISED",user:e})})}var r=function(){if(void 0===e&&(e=window.location.search),(ne.test(e)||oe.test(e))&&!a)return Promise.resolve(f.handleRedirectCallback()).then(function(){u({},t)});var e;console.log("Getting token from storage... Checking Sessions")}();return r&&r.then?r.then(e):e()},function(t){console.error(t);var r=se(function(){return Promise.resolve(f.refreshTokenSilently()).then(function(t){t.access_token&&t.refresh_token&&e()})},function(e){p({type:"ERROR",error:e})});return r&&r.then?r.then(function(){}):void 0});return Promise.resolve(r&&r.then?r.then(function(){}):void 0)}catch(e){return Promise.reject(e)}}()},[f,u,a]);var m=e.useCallback(function(e){return f.buildAuthorizeUrl(e)},[f]),g=e.useCallback(function(e){return f.buildLogoutUrl(e)},[f]),v=e.useCallback(function(e){return f.loginWithRedirect(e)},[f]),y=e.useCallback(function(e){return f.loginWithKakao(e)},[f]),b=e.useCallback(function(e){return f.refreshTokenSilently(e)},[f]),w=e.useCallback(function(e){localStorage.removeItem("furo-user"),localStorage.removeItem("furo-"+f.clientId+"-token"),sessionStorage.removeItem("furo-"+f.clientId+"-token"),p({type:"LOGOUT"})},[f]),k=e.useCallback(function(e,t){try{return Promise.resolve(localStorage.getItem("furo-"+f.clientId+"-token")).then(function(e){var t=e.split(".")[1],r=Buffer.from(t,"base64").toString(),n=JSON.parse(r).exp;return n&&Date.now()>=1e3*n?Promise.resolve(b()).then(function(e){return e.access_token}):e})}catch(e){return Promise.reject(e)}},[f]),E=e.useCallback(function(e){try{return Promise.resolve(function(t,r){try{var n=se(function(){return Promise.resolve(f.handleRedirectCallback(e))},function(e){throw e})}catch(e){return r(!0,e)}return n&&n.then?n.then(r.bind(null,!1),r.bind(null,!0)):r(!1,n)}(0,function(e,t){return Promise.resolve(f.getUser()).then(function(r){if(p({type:"HANDLE_REDIRECT_COMPLETE",user:r}),e)throw t;return t})}))}catch(e){return Promise.reject(e)}},[f]);/*#__PURE__*/return r.default.createElement(re.Provider,{value:n({},h,{buildAuthorizeUrl:m,buildLogoutUrl:g,getAccessTokenSilently:k,refreshTokenSilently:b,loginWithRedirect:v,loginWithKakao:y,logout:w,handleRedirectCallback:E})},i)},exports.useFuro=function(){return e.useContext(re)};
//# sourceMappingURL=furo-react.cjs.map
