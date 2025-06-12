var Yd=Object.defineProperty;var Gd=(e,i,r)=>i in e?Yd(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r;var Bs=(e,i,r)=>Gd(e,typeof i!="symbol"?i+"":i,r);(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))l(d);new MutationObserver(d=>{for(const m of d)if(m.type==="childList")for(const w of m.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&l(w)}).observe(document,{childList:!0,subtree:!0});function r(d){const m={};return d.integrity&&(m.integrity=d.integrity),d.referrerPolicy&&(m.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?m.credentials="include":d.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function l(d){if(d.ep)return;d.ep=!0;const m=r(d);fetch(d.href,m)}})();const Kd="modulepreload",qd=function(e){return"/"+e},Ds={},Ei=function(i,r,l){let d=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const w=document.querySelector("meta[property=csp-nonce]"),v=(w==null?void 0:w.nonce)||(w==null?void 0:w.getAttribute("nonce"));d=Promise.allSettled(r.map(C=>{if(C=qd(C),C in Ds)return;Ds[C]=!0;const p=C.endsWith(".css"),k=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${C}"]${k}`))return;const R=document.createElement("link");if(R.rel=p?"stylesheet":Kd,p||(R.as="script"),R.crossOrigin="",R.href=C,v&&R.setAttribute("nonce",v),document.head.appendChild(R),p)return new Promise((T,I)=>{R.addEventListener("load",T),R.addEventListener("error",()=>I(new Error(`Unable to preload CSS for ${C}`)))})}))}function m(w){const v=new Event("vite:preloadError",{cancelable:!0});if(v.payload=w,window.dispatchEvent(v),!v.defaultPrevented)throw w}return d.then(w=>{for(const v of w||[])v.status==="rejected"&&m(v.reason);return i().catch(m)})},Xd="aztec-build-out-of-memory-repro",Jd="0.0.0",Qd="module",eh={dev:"vite",build:"ls dist",preview:"vite preview"},th={vite:"^5.4.11","vite-plugin-node-polyfills":"^0.21.0","vite-plugin-top-level-await":"^1.4.1"},nh={"@aztec/bb.js":"0.84.0","@noir-lang/noir_js":"^1.0.0-beta.6"},rh="yarn@1.22.22+sha512.a6b2f7906b721bba3d67d4aff083df04dad64c399707841b7acf00f6b133b7ac24255f2652fa22ae3534329dc6180534e98d17432037ff6fd140556e2bb3137e",ah={name:Xd,private:!0,version:Jd,type:Qd,scripts:eh,devDependencies:th,dependencies:nh,packageManager:rh};var ih={};/*! For license information please see index.js.LICENSE.txt */var xc={742:(e,i)=>{i.byteLength=p,i.toByteArray=R,i.fromByteArray=N;for(var r=[],l=[],d=typeof Uint8Array<"u"?Uint8Array:Array,m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",w=0,v=m.length;w<v;++w)r[w]=m[w],l[m.charCodeAt(w)]=w;l[45]=62,l[95]=63;function C(F){var U=F.length;if(U%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var P=F.indexOf("=");P===-1&&(P=U);var j=P===U?0:4-P%4;return[P,j]}function p(F){var U=C(F),P=U[0],j=U[1];return(P+j)*3/4-j}function k(F,U,P){return(U+P)*3/4-P}function R(F){var U,P=C(F),j=P[0],$=P[1],M=new d(k(F,j,$)),H=0,ie=$>0?j-4:j,W;for(W=0;W<ie;W+=4)U=l[F.charCodeAt(W)]<<18|l[F.charCodeAt(W+1)]<<12|l[F.charCodeAt(W+2)]<<6|l[F.charCodeAt(W+3)],M[H++]=U>>16&255,M[H++]=U>>8&255,M[H++]=U&255;return $===2&&(U=l[F.charCodeAt(W)]<<2|l[F.charCodeAt(W+1)]>>4,M[H++]=U&255),$===1&&(U=l[F.charCodeAt(W)]<<10|l[F.charCodeAt(W+1)]<<4|l[F.charCodeAt(W+2)]>>2,M[H++]=U>>8&255,M[H++]=U&255),M}function T(F){return r[F>>18&63]+r[F>>12&63]+r[F>>6&63]+r[F&63]}function I(F,U,P){for(var j,$=[],M=U;M<P;M+=3)j=(F[M]<<16&16711680)+(F[M+1]<<8&65280)+(F[M+2]&255),$.push(T(j));return $.join("")}function N(F){for(var U,P=F.length,j=P%3,$=[],M=16383,H=0,ie=P-j;H<ie;H+=M)$.push(I(F,H,H+M>ie?ie:H+M));return j===1?(U=F[P-1],$.push(r[U>>2]+r[U<<4&63]+"==")):j===2&&(U=(F[P-2]<<8)+F[P-1],$.push(r[U>>10]+r[U>>4&63]+r[U<<2&63]+"=")),$.join("")}},764:(e,i,r)=>{const l=r(742),d=r(645),m=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;i.lW=p,i.h2=50;const w=2147483647;p.TYPED_ARRAY_SUPPORT=v(),!p.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function v(){try{const g=new Uint8Array(1),c={foo:function(){return 42}};return Object.setPrototypeOf(c,Uint8Array.prototype),Object.setPrototypeOf(g,c),g.foo()===42}catch{return!1}}Object.defineProperty(p.prototype,"parent",{enumerable:!0,get:function(){if(p.isBuffer(this))return this.buffer}}),Object.defineProperty(p.prototype,"offset",{enumerable:!0,get:function(){if(p.isBuffer(this))return this.byteOffset}});function C(g){if(g>w)throw new RangeError('The value "'+g+'" is invalid for option "size"');const c=new Uint8Array(g);return Object.setPrototypeOf(c,p.prototype),c}function p(g,c,f){if(typeof g=="number"){if(typeof c=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return I(g)}return k(g,c,f)}p.poolSize=8192;function k(g,c,f){if(typeof g=="string")return N(g,c);if(ArrayBuffer.isView(g))return U(g);if(g==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof g);if(Pe(g,ArrayBuffer)||g&&Pe(g.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Pe(g,SharedArrayBuffer)||g&&Pe(g.buffer,SharedArrayBuffer)))return P(g,c,f);if(typeof g=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const y=g.valueOf&&g.valueOf();if(y!=null&&y!==g)return p.from(y,c,f);const A=j(g);if(A)return A;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof g[Symbol.toPrimitive]=="function")return p.from(g[Symbol.toPrimitive]("string"),c,f);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof g)}p.from=function(g,c,f){return k(g,c,f)},Object.setPrototypeOf(p.prototype,Uint8Array.prototype),Object.setPrototypeOf(p,Uint8Array);function R(g){if(typeof g!="number")throw new TypeError('"size" argument must be of type number');if(g<0)throw new RangeError('The value "'+g+'" is invalid for option "size"')}function T(g,c,f){return R(g),g<=0?C(g):c!==void 0?typeof f=="string"?C(g).fill(c,f):C(g).fill(c):C(g)}p.alloc=function(g,c,f){return T(g,c,f)};function I(g){return R(g),C(g<0?0:$(g)|0)}p.allocUnsafe=function(g){return I(g)},p.allocUnsafeSlow=function(g){return I(g)};function N(g,c){if((typeof c!="string"||c==="")&&(c="utf8"),!p.isEncoding(c))throw new TypeError("Unknown encoding: "+c);const f=M(g,c)|0;let y=C(f);const A=y.write(g,c);return A!==f&&(y=y.slice(0,A)),y}function F(g){const c=g.length<0?0:$(g.length)|0,f=C(c);for(let y=0;y<c;y+=1)f[y]=g[y]&255;return f}function U(g){if(Pe(g,Uint8Array)){const c=new Uint8Array(g);return P(c.buffer,c.byteOffset,c.byteLength)}return F(g)}function P(g,c,f){if(c<0||g.byteLength<c)throw new RangeError('"offset" is outside of buffer bounds');if(g.byteLength<c+(f||0))throw new RangeError('"length" is outside of buffer bounds');let y;return c===void 0&&f===void 0?y=new Uint8Array(g):f===void 0?y=new Uint8Array(g,c):y=new Uint8Array(g,c,f),Object.setPrototypeOf(y,p.prototype),y}function j(g){if(p.isBuffer(g)){const c=$(g.length)|0,f=C(c);return f.length===0||g.copy(f,0,0,c),f}if(g.length!==void 0)return typeof g.length!="number"||wt(g.length)?C(0):F(g);if(g.type==="Buffer"&&Array.isArray(g.data))return F(g.data)}function $(g){if(g>=w)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+w.toString(16)+" bytes");return g|0}p.isBuffer=function(c){return c!=null&&c._isBuffer===!0&&c!==p.prototype},p.compare=function(c,f){if(Pe(c,Uint8Array)&&(c=p.from(c,c.offset,c.byteLength)),Pe(f,Uint8Array)&&(f=p.from(f,f.offset,f.byteLength)),!p.isBuffer(c)||!p.isBuffer(f))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(c===f)return 0;let y=c.length,A=f.length;for(let S=0,B=Math.min(y,A);S<B;++S)if(c[S]!==f[S]){y=c[S],A=f[S];break}return y<A?-1:A<y?1:0},p.isEncoding=function(c){switch(String(c).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},p.concat=function(c,f){if(!Array.isArray(c))throw new TypeError('"list" argument must be an Array of Buffers');if(c.length===0)return p.alloc(0);let y;if(f===void 0)for(f=0,y=0;y<c.length;++y)f+=c[y].length;const A=p.allocUnsafe(f);let S=0;for(y=0;y<c.length;++y){let B=c[y];if(Pe(B,Uint8Array))S+B.length>A.length?(p.isBuffer(B)||(B=p.from(B)),B.copy(A,S)):Uint8Array.prototype.set.call(A,B,S);else if(p.isBuffer(B))B.copy(A,S);else throw new TypeError('"list" argument must be an Array of Buffers');S+=B.length}return A};function M(g,c){if(p.isBuffer(g))return g.length;if(ArrayBuffer.isView(g)||Pe(g,ArrayBuffer))return g.byteLength;if(typeof g!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof g);const f=g.length,y=arguments.length>2&&arguments[2]===!0;if(!y&&f===0)return 0;let A=!1;for(;;)switch(c){case"ascii":case"latin1":case"binary":return f;case"utf8":case"utf-8":return ye(g).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return f*2;case"hex":return f>>>1;case"base64":return ke(g).length;default:if(A)return y?-1:ye(g).length;c=(""+c).toLowerCase(),A=!0}}p.byteLength=M;function H(g,c,f){let y=!1;if((c===void 0||c<0)&&(c=0),c>this.length||((f===void 0||f>this.length)&&(f=this.length),f<=0)||(f>>>=0,c>>>=0,f<=c))return"";for(g||(g="utf8");;)switch(g){case"hex":return Br(this,c,f);case"utf8":case"utf-8":return pt(this,c,f);case"ascii":return ga(this,c,f);case"latin1":case"binary":return Tr(this,c,f);case"base64":return tt(this,c,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return wa(this,c,f);default:if(y)throw new TypeError("Unknown encoding: "+g);g=(g+"").toLowerCase(),y=!0}}p.prototype._isBuffer=!0;function ie(g,c,f){const y=g[c];g[c]=g[f],g[f]=y}p.prototype.swap16=function(){const c=this.length;if(c%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let f=0;f<c;f+=2)ie(this,f,f+1);return this},p.prototype.swap32=function(){const c=this.length;if(c%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let f=0;f<c;f+=4)ie(this,f,f+3),ie(this,f+1,f+2);return this},p.prototype.swap64=function(){const c=this.length;if(c%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let f=0;f<c;f+=8)ie(this,f,f+7),ie(this,f+1,f+6),ie(this,f+2,f+5),ie(this,f+3,f+4);return this},p.prototype.toString=function(){const c=this.length;return c===0?"":arguments.length===0?pt(this,0,c):H.apply(this,arguments)},p.prototype.toLocaleString=p.prototype.toString,p.prototype.equals=function(c){if(!p.isBuffer(c))throw new TypeError("Argument must be a Buffer");return this===c?!0:p.compare(this,c)===0},p.prototype.inspect=function(){let c="";const f=i.h2;return c=this.toString("hex",0,f).replace(/(.{2})/g,"$1 ").trim(),this.length>f&&(c+=" ... "),"<Buffer "+c+">"},m&&(p.prototype[m]=p.prototype.inspect),p.prototype.compare=function(c,f,y,A,S){if(Pe(c,Uint8Array)&&(c=p.from(c,c.offset,c.byteLength)),!p.isBuffer(c))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof c);if(f===void 0&&(f=0),y===void 0&&(y=c?c.length:0),A===void 0&&(A=0),S===void 0&&(S=this.length),f<0||y>c.length||A<0||S>this.length)throw new RangeError("out of range index");if(A>=S&&f>=y)return 0;if(A>=S)return-1;if(f>=y)return 1;if(f>>>=0,y>>>=0,A>>>=0,S>>>=0,this===c)return 0;let B=S-A,ne=y-f;const ce=Math.min(B,ne),oe=this.slice(A,S),he=c.slice(f,y);for(let we=0;we<ce;++we)if(oe[we]!==he[we]){B=oe[we],ne=he[we];break}return B<ne?-1:ne<B?1:0};function W(g,c,f,y,A){if(g.length===0)return-1;if(typeof f=="string"?(y=f,f=0):f>2147483647?f=2147483647:f<-2147483648&&(f=-2147483648),f=+f,wt(f)&&(f=A?0:g.length-1),f<0&&(f=g.length+f),f>=g.length){if(A)return-1;f=g.length-1}else if(f<0)if(A)f=0;else return-1;if(typeof c=="string"&&(c=p.from(c,y)),p.isBuffer(c))return c.length===0?-1:se(g,c,f,y,A);if(typeof c=="number")return c=c&255,typeof Uint8Array.prototype.indexOf=="function"?A?Uint8Array.prototype.indexOf.call(g,c,f):Uint8Array.prototype.lastIndexOf.call(g,c,f):se(g,[c],f,y,A);throw new TypeError("val must be string, number or Buffer")}function se(g,c,f,y,A){let S=1,B=g.length,ne=c.length;if(y!==void 0&&(y=String(y).toLowerCase(),y==="ucs2"||y==="ucs-2"||y==="utf16le"||y==="utf-16le")){if(g.length<2||c.length<2)return-1;S=2,B/=2,ne/=2,f/=2}function ce(he,we){return S===1?he[we]:he.readUInt16BE(we*S)}let oe;if(A){let he=-1;for(oe=f;oe<B;oe++)if(ce(g,oe)===ce(c,he===-1?0:oe-he)){if(he===-1&&(he=oe),oe-he+1===ne)return he*S}else he!==-1&&(oe-=oe-he),he=-1}else for(f+ne>B&&(f=B-ne),oe=f;oe>=0;oe--){let he=!0;for(let we=0;we<ne;we++)if(ce(g,oe+we)!==ce(c,we)){he=!1;break}if(he)return oe}return-1}p.prototype.includes=function(c,f,y){return this.indexOf(c,f,y)!==-1},p.prototype.indexOf=function(c,f,y){return W(this,c,f,y,!0)},p.prototype.lastIndexOf=function(c,f,y){return W(this,c,f,y,!1)};function te(g,c,f,y){f=Number(f)||0;const A=g.length-f;y?(y=Number(y),y>A&&(y=A)):y=A;const S=c.length;y>S/2&&(y=S/2);let B;for(B=0;B<y;++B){const ne=parseInt(c.substr(B*2,2),16);if(wt(ne))return B;g[f+B]=ne}return B}function G(g,c,f,y){return Wt(ye(c,g.length-f),g,f,y)}function J(g,c,f,y){return Wt(St(c),g,f,y)}function Oe(g,c,f,y){return Wt(ke(c),g,f,y)}function et(g,c,f,y){return Wt(Le(c,g.length-f),g,f,y)}p.prototype.write=function(c,f,y,A){if(f===void 0)A="utf8",y=this.length,f=0;else if(y===void 0&&typeof f=="string")A=f,y=this.length,f=0;else if(isFinite(f))f=f>>>0,isFinite(y)?(y=y>>>0,A===void 0&&(A="utf8")):(A=y,y=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const S=this.length-f;if((y===void 0||y>S)&&(y=S),c.length>0&&(y<0||f<0)||f>this.length)throw new RangeError("Attempt to write outside buffer bounds");A||(A="utf8");let B=!1;for(;;)switch(A){case"hex":return te(this,c,f,y);case"utf8":case"utf-8":return G(this,c,f,y);case"ascii":case"latin1":case"binary":return J(this,c,f,y);case"base64":return Oe(this,c,f,y);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return et(this,c,f,y);default:if(B)throw new TypeError("Unknown encoding: "+A);A=(""+A).toLowerCase(),B=!0}},p.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function tt(g,c,f){return c===0&&f===g.length?l.fromByteArray(g):l.fromByteArray(g.slice(c,f))}function pt(g,c,f){f=Math.min(g.length,f);const y=[];let A=c;for(;A<f;){const S=g[A];let B=null,ne=S>239?4:S>223?3:S>191?2:1;if(A+ne<=f){let ce,oe,he,we;switch(ne){case 1:S<128&&(B=S);break;case 2:ce=g[A+1],(ce&192)===128&&(we=(S&31)<<6|ce&63,we>127&&(B=we));break;case 3:ce=g[A+1],oe=g[A+2],(ce&192)===128&&(oe&192)===128&&(we=(S&15)<<12|(ce&63)<<6|oe&63,we>2047&&(we<55296||we>57343)&&(B=we));break;case 4:ce=g[A+1],oe=g[A+2],he=g[A+3],(ce&192)===128&&(oe&192)===128&&(he&192)===128&&(we=(S&15)<<18|(ce&63)<<12|(oe&63)<<6|he&63,we>65535&&we<1114112&&(B=we))}}B===null?(B=65533,ne=1):B>65535&&(B-=65536,y.push(B>>>10&1023|55296),B=56320|B&1023),y.push(B),A+=ne}return Mn(y)}const Ir=4096;function Mn(g){const c=g.length;if(c<=Ir)return String.fromCharCode.apply(String,g);let f="",y=0;for(;y<c;)f+=String.fromCharCode.apply(String,g.slice(y,y+=Ir));return f}function ga(g,c,f){let y="";f=Math.min(g.length,f);for(let A=c;A<f;++A)y+=String.fromCharCode(g[A]&127);return y}function Tr(g,c,f){let y="";f=Math.min(g.length,f);for(let A=c;A<f;++A)y+=String.fromCharCode(g[A]);return y}function Br(g,c,f){const y=g.length;(!c||c<0)&&(c=0),(!f||f<0||f>y)&&(f=y);let A="";for(let S=c;S<f;++S)A+=Fr[g[S]];return A}function wa(g,c,f){const y=g.slice(c,f);let A="";for(let S=0;S<y.length-1;S+=2)A+=String.fromCharCode(y[S]+y[S+1]*256);return A}p.prototype.slice=function(c,f){const y=this.length;c=~~c,f=f===void 0?y:~~f,c<0?(c+=y,c<0&&(c=0)):c>y&&(c=y),f<0?(f+=y,f<0&&(f=0)):f>y&&(f=y),f<c&&(f=c);const A=this.subarray(c,f);return Object.setPrototypeOf(A,p.prototype),A};function Ce(g,c,f){if(g%1!==0||g<0)throw new RangeError("offset is not uint");if(g+c>f)throw new RangeError("Trying to access beyond buffer length")}p.prototype.readUintLE=p.prototype.readUIntLE=function(c,f,y){c=c>>>0,f=f>>>0,y||Ce(c,f,this.length);let A=this[c],S=1,B=0;for(;++B<f&&(S*=256);)A+=this[c+B]*S;return A},p.prototype.readUintBE=p.prototype.readUIntBE=function(c,f,y){c=c>>>0,f=f>>>0,y||Ce(c,f,this.length);let A=this[c+--f],S=1;for(;f>0&&(S*=256);)A+=this[c+--f]*S;return A},p.prototype.readUint8=p.prototype.readUInt8=function(c,f){return c=c>>>0,f||Ce(c,1,this.length),this[c]},p.prototype.readUint16LE=p.prototype.readUInt16LE=function(c,f){return c=c>>>0,f||Ce(c,2,this.length),this[c]|this[c+1]<<8},p.prototype.readUint16BE=p.prototype.readUInt16BE=function(c,f){return c=c>>>0,f||Ce(c,2,this.length),this[c]<<8|this[c+1]},p.prototype.readUint32LE=p.prototype.readUInt32LE=function(c,f){return c=c>>>0,f||Ce(c,4,this.length),(this[c]|this[c+1]<<8|this[c+2]<<16)+this[c+3]*16777216},p.prototype.readUint32BE=p.prototype.readUInt32BE=function(c,f){return c=c>>>0,f||Ce(c,4,this.length),this[c]*16777216+(this[c+1]<<16|this[c+2]<<8|this[c+3])},p.prototype.readBigUInt64LE=nt(function(c){c=c>>>0,At(c,"offset");const f=this[c],y=this[c+7];(f===void 0||y===void 0)&&Zt(c,this.length-8);const A=f+this[++c]*2**8+this[++c]*2**16+this[++c]*2**24,S=this[++c]+this[++c]*2**8+this[++c]*2**16+y*2**24;return BigInt(A)+(BigInt(S)<<BigInt(32))}),p.prototype.readBigUInt64BE=nt(function(c){c=c>>>0,At(c,"offset");const f=this[c],y=this[c+7];(f===void 0||y===void 0)&&Zt(c,this.length-8);const A=f*2**24+this[++c]*2**16+this[++c]*2**8+this[++c],S=this[++c]*2**24+this[++c]*2**16+this[++c]*2**8+y;return(BigInt(A)<<BigInt(32))+BigInt(S)}),p.prototype.readIntLE=function(c,f,y){c=c>>>0,f=f>>>0,y||Ce(c,f,this.length);let A=this[c],S=1,B=0;for(;++B<f&&(S*=256);)A+=this[c+B]*S;return S*=128,A>=S&&(A-=Math.pow(2,8*f)),A},p.prototype.readIntBE=function(c,f,y){c=c>>>0,f=f>>>0,y||Ce(c,f,this.length);let A=f,S=1,B=this[c+--A];for(;A>0&&(S*=256);)B+=this[c+--A]*S;return S*=128,B>=S&&(B-=Math.pow(2,8*f)),B},p.prototype.readInt8=function(c,f){return c=c>>>0,f||Ce(c,1,this.length),this[c]&128?(255-this[c]+1)*-1:this[c]},p.prototype.readInt16LE=function(c,f){c=c>>>0,f||Ce(c,2,this.length);const y=this[c]|this[c+1]<<8;return y&32768?y|4294901760:y},p.prototype.readInt16BE=function(c,f){c=c>>>0,f||Ce(c,2,this.length);const y=this[c+1]|this[c]<<8;return y&32768?y|4294901760:y},p.prototype.readInt32LE=function(c,f){return c=c>>>0,f||Ce(c,4,this.length),this[c]|this[c+1]<<8|this[c+2]<<16|this[c+3]<<24},p.prototype.readInt32BE=function(c,f){return c=c>>>0,f||Ce(c,4,this.length),this[c]<<24|this[c+1]<<16|this[c+2]<<8|this[c+3]},p.prototype.readBigInt64LE=nt(function(c){c=c>>>0,At(c,"offset");const f=this[c],y=this[c+7];(f===void 0||y===void 0)&&Zt(c,this.length-8);const A=this[c+4]+this[c+5]*2**8+this[c+6]*2**16+(y<<24);return(BigInt(A)<<BigInt(32))+BigInt(f+this[++c]*2**8+this[++c]*2**16+this[++c]*2**24)}),p.prototype.readBigInt64BE=nt(function(c){c=c>>>0,At(c,"offset");const f=this[c],y=this[c+7];(f===void 0||y===void 0)&&Zt(c,this.length-8);const A=(f<<24)+this[++c]*2**16+this[++c]*2**8+this[++c];return(BigInt(A)<<BigInt(32))+BigInt(this[++c]*2**24+this[++c]*2**16+this[++c]*2**8+y)}),p.prototype.readFloatLE=function(c,f){return c=c>>>0,f||Ce(c,4,this.length),d.read(this,c,!0,23,4)},p.prototype.readFloatBE=function(c,f){return c=c>>>0,f||Ce(c,4,this.length),d.read(this,c,!1,23,4)},p.prototype.readDoubleLE=function(c,f){return c=c>>>0,f||Ce(c,8,this.length),d.read(this,c,!0,52,8)},p.prototype.readDoubleBE=function(c,f){return c=c>>>0,f||Ce(c,8,this.length),d.read(this,c,!1,52,8)};function Ie(g,c,f,y,A,S){if(!p.isBuffer(g))throw new TypeError('"buffer" argument must be a Buffer instance');if(c>A||c<S)throw new RangeError('"value" argument is out of bounds');if(f+y>g.length)throw new RangeError("Index out of range")}p.prototype.writeUintLE=p.prototype.writeUIntLE=function(c,f,y,A){if(c=+c,f=f>>>0,y=y>>>0,!A){const ne=Math.pow(2,8*y)-1;Ie(this,c,f,y,ne,0)}let S=1,B=0;for(this[f]=c&255;++B<y&&(S*=256);)this[f+B]=c/S&255;return f+y},p.prototype.writeUintBE=p.prototype.writeUIntBE=function(c,f,y,A){if(c=+c,f=f>>>0,y=y>>>0,!A){const ne=Math.pow(2,8*y)-1;Ie(this,c,f,y,ne,0)}let S=y-1,B=1;for(this[f+S]=c&255;--S>=0&&(B*=256);)this[f+S]=c/B&255;return f+y},p.prototype.writeUint8=p.prototype.writeUInt8=function(c,f,y){return c=+c,f=f>>>0,y||Ie(this,c,f,1,255,0),this[f]=c&255,f+1},p.prototype.writeUint16LE=p.prototype.writeUInt16LE=function(c,f,y){return c=+c,f=f>>>0,y||Ie(this,c,f,2,65535,0),this[f]=c&255,this[f+1]=c>>>8,f+2},p.prototype.writeUint16BE=p.prototype.writeUInt16BE=function(c,f,y){return c=+c,f=f>>>0,y||Ie(this,c,f,2,65535,0),this[f]=c>>>8,this[f+1]=c&255,f+2},p.prototype.writeUint32LE=p.prototype.writeUInt32LE=function(c,f,y){return c=+c,f=f>>>0,y||Ie(this,c,f,4,4294967295,0),this[f+3]=c>>>24,this[f+2]=c>>>16,this[f+1]=c>>>8,this[f]=c&255,f+4},p.prototype.writeUint32BE=p.prototype.writeUInt32BE=function(c,f,y){return c=+c,f=f>>>0,y||Ie(this,c,f,4,4294967295,0),this[f]=c>>>24,this[f+1]=c>>>16,this[f+2]=c>>>8,this[f+3]=c&255,f+4};function at(g,c,f,y,A){Un(c,y,A,g,f,7);let S=Number(c&BigInt(4294967295));g[f++]=S,S=S>>8,g[f++]=S,S=S>>8,g[f++]=S,S=S>>8,g[f++]=S;let B=Number(c>>BigInt(32)&BigInt(4294967295));return g[f++]=B,B=B>>8,g[f++]=B,B=B>>8,g[f++]=B,B=B>>8,g[f++]=B,f}function mt(g,c,f,y,A){Un(c,y,A,g,f,7);let S=Number(c&BigInt(4294967295));g[f+7]=S,S=S>>8,g[f+6]=S,S=S>>8,g[f+5]=S,S=S>>8,g[f+4]=S;let B=Number(c>>BigInt(32)&BigInt(4294967295));return g[f+3]=B,B=B>>8,g[f+2]=B,B=B>>8,g[f+1]=B,B=B>>8,g[f]=B,f+8}p.prototype.writeBigUInt64LE=nt(function(c,f=0){return at(this,c,f,BigInt(0),BigInt("0xffffffffffffffff"))}),p.prototype.writeBigUInt64BE=nt(function(c,f=0){return mt(this,c,f,BigInt(0),BigInt("0xffffffffffffffff"))}),p.prototype.writeIntLE=function(c,f,y,A){if(c=+c,f=f>>>0,!A){const ce=Math.pow(2,8*y-1);Ie(this,c,f,y,ce-1,-ce)}let S=0,B=1,ne=0;for(this[f]=c&255;++S<y&&(B*=256);)c<0&&ne===0&&this[f+S-1]!==0&&(ne=1),this[f+S]=(c/B>>0)-ne&255;return f+y},p.prototype.writeIntBE=function(c,f,y,A){if(c=+c,f=f>>>0,!A){const ce=Math.pow(2,8*y-1);Ie(this,c,f,y,ce-1,-ce)}let S=y-1,B=1,ne=0;for(this[f+S]=c&255;--S>=0&&(B*=256);)c<0&&ne===0&&this[f+S+1]!==0&&(ne=1),this[f+S]=(c/B>>0)-ne&255;return f+y},p.prototype.writeInt8=function(c,f,y){return c=+c,f=f>>>0,y||Ie(this,c,f,1,127,-128),c<0&&(c=255+c+1),this[f]=c&255,f+1},p.prototype.writeInt16LE=function(c,f,y){return c=+c,f=f>>>0,y||Ie(this,c,f,2,32767,-32768),this[f]=c&255,this[f+1]=c>>>8,f+2},p.prototype.writeInt16BE=function(c,f,y){return c=+c,f=f>>>0,y||Ie(this,c,f,2,32767,-32768),this[f]=c>>>8,this[f+1]=c&255,f+2},p.prototype.writeInt32LE=function(c,f,y){return c=+c,f=f>>>0,y||Ie(this,c,f,4,2147483647,-2147483648),this[f]=c&255,this[f+1]=c>>>8,this[f+2]=c>>>16,this[f+3]=c>>>24,f+4},p.prototype.writeInt32BE=function(c,f,y){return c=+c,f=f>>>0,y||Ie(this,c,f,4,2147483647,-2147483648),c<0&&(c=4294967295+c+1),this[f]=c>>>24,this[f+1]=c>>>16,this[f+2]=c>>>8,this[f+3]=c&255,f+4},p.prototype.writeBigInt64LE=nt(function(c,f=0){return at(this,c,f,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),p.prototype.writeBigInt64BE=nt(function(c,f=0){return mt(this,c,f,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Dr(g,c,f,y,A,S){if(f+y>g.length)throw new RangeError("Index out of range");if(f<0)throw new RangeError("Index out of range")}function ze(g,c,f,y,A){return c=+c,f=f>>>0,A||Dr(g,c,f,4),d.write(g,c,f,y,23,4),f+4}p.prototype.writeFloatLE=function(c,f,y){return ze(this,c,f,!0,y)},p.prototype.writeFloatBE=function(c,f,y){return ze(this,c,f,!1,y)};function Rr(g,c,f,y,A){return c=+c,f=f>>>0,A||Dr(g,c,f,8),d.write(g,c,f,y,52,8),f+8}p.prototype.writeDoubleLE=function(c,f,y){return Rr(this,c,f,!0,y)},p.prototype.writeDoubleBE=function(c,f,y){return Rr(this,c,f,!1,y)},p.prototype.copy=function(c,f,y,A){if(!p.isBuffer(c))throw new TypeError("argument should be a Buffer");if(y||(y=0),!A&&A!==0&&(A=this.length),f>=c.length&&(f=c.length),f||(f=0),A>0&&A<y&&(A=y),A===y||c.length===0||this.length===0)return 0;if(f<0)throw new RangeError("targetStart out of bounds");if(y<0||y>=this.length)throw new RangeError("Index out of range");if(A<0)throw new RangeError("sourceEnd out of bounds");A>this.length&&(A=this.length),c.length-f<A-y&&(A=c.length-f+y);const S=A-y;return this===c&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(f,y,A):Uint8Array.prototype.set.call(c,this.subarray(y,A),f),S},p.prototype.fill=function(c,f,y,A){if(typeof c=="string"){if(typeof f=="string"?(A=f,f=0,y=this.length):typeof y=="string"&&(A=y,y=this.length),A!==void 0&&typeof A!="string")throw new TypeError("encoding must be a string");if(typeof A=="string"&&!p.isEncoding(A))throw new TypeError("Unknown encoding: "+A);if(c.length===1){const B=c.charCodeAt(0);(A==="utf8"&&B<128||A==="latin1")&&(c=B)}}else typeof c=="number"?c=c&255:typeof c=="boolean"&&(c=Number(c));if(f<0||this.length<f||this.length<y)throw new RangeError("Out of range index");if(y<=f)return this;f=f>>>0,y=y===void 0?this.length:y>>>0,c||(c=0);let S;if(typeof c=="number")for(S=f;S<y;++S)this[S]=c;else{const B=p.isBuffer(c)?c:p.from(c,A),ne=B.length;if(ne===0)throw new TypeError('The value "'+c+'" is invalid for argument "value"');for(S=0;S<y-f;++S)this[S+f]=B[S%ne]}return this};const gt={};function On(g,c,f){gt[g]=class extends f{constructor(){super(),Object.defineProperty(this,"message",{value:c.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${g}]`,this.stack,delete this.name}get code(){return g}set code(A){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:A,writable:!0})}toString(){return`${this.name} [${g}]: ${this.message}`}}}On("ERR_BUFFER_OUT_OF_BOUNDS",function(g){return g?`${g} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),On("ERR_INVALID_ARG_TYPE",function(g,c){return`The "${g}" argument must be of type number. Received type ${typeof c}`},TypeError),On("ERR_OUT_OF_RANGE",function(g,c,f){let y=`The value of "${g}" is out of range.`,A=f;return Number.isInteger(f)&&Math.abs(f)>2**32?A=Nn(String(f)):typeof f=="bigint"&&(A=String(f),(f>BigInt(2)**BigInt(32)||f<-(BigInt(2)**BigInt(32)))&&(A=Nn(A)),A+="n"),y+=` It must be ${c}. Received ${A}`,y},RangeError);function Nn(g){let c="",f=g.length;const y=g[0]==="-"?1:0;for(;f>=y+4;f-=3)c=`_${g.slice(f-3,f)}${c}`;return`${g.slice(0,f)}${c}`}function ba(g,c,f){At(c,"offset"),(g[c]===void 0||g[c+f]===void 0)&&Zt(c,g.length-(f+1))}function Un(g,c,f,y,A,S){if(g>f||g<c){const B=typeof c=="bigint"?"n":"";let ne;throw c===0||c===BigInt(0)?ne=`>= 0${B} and < 2${B} ** ${(S+1)*8}${B}`:ne=`>= -(2${B} ** ${(S+1)*8-1}${B}) and < 2 ** ${(S+1)*8-1}${B}`,new gt.ERR_OUT_OF_RANGE("value",ne,g)}ba(y,A,S)}function At(g,c){if(typeof g!="number")throw new gt.ERR_INVALID_ARG_TYPE(c,"number",g)}function Zt(g,c,f){throw Math.floor(g)!==g?(At(g,f),new gt.ERR_OUT_OF_RANGE("offset","an integer",g)):c<0?new gt.ERR_BUFFER_OUT_OF_BOUNDS:new gt.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${c}`,g)}const O=/[^+/0-9A-Za-z-_]/g;function Te(g){if(g=g.split("=")[0],g=g.trim().replace(O,""),g.length<2)return"";for(;g.length%4!==0;)g=g+"=";return g}function ye(g,c){c=c||1/0;let f;const y=g.length;let A=null;const S=[];for(let B=0;B<y;++B){if(f=g.charCodeAt(B),f>55295&&f<57344){if(!A){if(f>56319){(c-=3)>-1&&S.push(239,191,189);continue}else if(B+1===y){(c-=3)>-1&&S.push(239,191,189);continue}A=f;continue}if(f<56320){(c-=3)>-1&&S.push(239,191,189),A=f;continue}f=(A-55296<<10|f-56320)+65536}else A&&(c-=3)>-1&&S.push(239,191,189);if(A=null,f<128){if((c-=1)<0)break;S.push(f)}else if(f<2048){if((c-=2)<0)break;S.push(f>>6|192,f&63|128)}else if(f<65536){if((c-=3)<0)break;S.push(f>>12|224,f>>6&63|128,f&63|128)}else if(f<1114112){if((c-=4)<0)break;S.push(f>>18|240,f>>12&63|128,f>>6&63|128,f&63|128)}else throw new Error("Invalid code point")}return S}function St(g){const c=[];for(let f=0;f<g.length;++f)c.push(g.charCodeAt(f)&255);return c}function Le(g,c){let f,y,A;const S=[];for(let B=0;B<g.length&&!((c-=2)<0);++B)f=g.charCodeAt(B),y=f>>8,A=f%256,S.push(A),S.push(y);return S}function ke(g){return l.toByteArray(Te(g))}function Wt(g,c,f,y){let A;for(A=0;A<y&&!(A+f>=c.length||A>=g.length);++A)c[A+f]=g[A];return A}function Pe(g,c){return g instanceof c||g!=null&&g.constructor!=null&&g.constructor.name!=null&&g.constructor.name===c.name}function wt(g){return g!==g}const Fr=function(){const g="0123456789abcdef",c=new Array(256);for(let f=0;f<16;++f){const y=f*16;for(let A=0;A<16;++A)c[y+A]=g[f]+g[A]}return c}();function nt(g){return typeof BigInt>"u"?Ct:g}function Ct(){throw new Error("BigInt not supported")}},227:(e,i,r)=>{i.formatArgs=d,i.save=m,i.load=w,i.useColors=l,i.storage=v(),i.destroy=(()=>{let p=!1;return()=>{p||(p=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),i.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function l(){return typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function d(p){if(p[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+p[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const k="color: "+this.color;p.splice(1,0,k,"color: inherit");let R=0,T=0;p[0].replace(/%[a-zA-Z%]/g,I=>{I!=="%%"&&(R++,I==="%c"&&(T=R))}),p.splice(T,0,k)}i.log=console.debug||console.log||(()=>{});function m(p){try{p?i.storage.setItem("debug",p):i.storage.removeItem("debug")}catch{}}function w(){let p;try{p=i.storage.getItem("debug")}catch{}return!p&&typeof process<"u"&&"env"in process&&(p=ih.DEBUG),p}function v(){try{return localStorage}catch{}}e.exports=r(447)(i);const{formatters:C}=e.exports;C.j=function(p){try{return JSON.stringify(p)}catch(k){return"[UnexpectedJSONParseError]: "+k.message}}},447:(e,i,r)=>{function l(d){w.debug=w,w.default=w,w.coerce=T,w.disable=p,w.enable=C,w.enabled=k,w.humanize=r(824),w.destroy=I,Object.keys(d).forEach(N=>{w[N]=d[N]}),w.names=[],w.skips=[],w.formatters={};function m(N){let F=0;for(let U=0;U<N.length;U++)F=(F<<5)-F+N.charCodeAt(U),F|=0;return w.colors[Math.abs(F)%w.colors.length]}w.selectColor=m;function w(N){let F,U=null,P,j;function $(...M){if(!$.enabled)return;const H=$,ie=Number(new Date),W=ie-(F||ie);H.diff=W,H.prev=F,H.curr=ie,F=ie,M[0]=w.coerce(M[0]),typeof M[0]!="string"&&M.unshift("%O");let se=0;M[0]=M[0].replace(/%([a-zA-Z%])/g,(G,J)=>{if(G==="%%")return"%";se++;const Oe=w.formatters[J];if(typeof Oe=="function"){const et=M[se];G=Oe.call(H,et),M.splice(se,1),se--}return G}),w.formatArgs.call(H,M),(H.log||w.log).apply(H,M)}return $.namespace=N,$.useColors=w.useColors(),$.color=w.selectColor(N),$.extend=v,$.destroy=w.destroy,Object.defineProperty($,"enabled",{enumerable:!0,configurable:!1,get:()=>U!==null?U:(P!==w.namespaces&&(P=w.namespaces,j=w.enabled(N)),j),set:M=>{U=M}}),typeof w.init=="function"&&w.init($),$}function v(N,F){const U=w(this.namespace+(typeof F>"u"?":":F)+N);return U.log=this.log,U}function C(N){w.save(N),w.namespaces=N,w.names=[],w.skips=[];let F;const U=(typeof N=="string"?N:"").split(/[\s,]+/),P=U.length;for(F=0;F<P;F++)U[F]&&(N=U[F].replace(/\*/g,".*?"),N[0]==="-"?w.skips.push(new RegExp("^"+N.slice(1)+"$")):w.names.push(new RegExp("^"+N+"$")))}function p(){const N=[...w.names.map(R),...w.skips.map(R).map(F=>"-"+F)].join(",");return w.enable(""),N}function k(N){if(N[N.length-1]==="*")return!0;let F,U;for(F=0,U=w.skips.length;F<U;F++)if(w.skips[F].test(N))return!1;for(F=0,U=w.names.length;F<U;F++)if(w.names[F].test(N))return!0;return!1}function R(N){return N.toString().substring(2,N.toString().length-2).replace(/\.\*\?$/,"*")}function T(N){return N instanceof Error?N.stack||N.message:N}function I(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return w.enable(w.load()),w}e.exports=l},645:(e,i)=>{i.read=function(r,l,d,m,w){var v,C,p=w*8-m-1,k=(1<<p)-1,R=k>>1,T=-7,I=d?w-1:0,N=d?-1:1,F=r[l+I];for(I+=N,v=F&(1<<-T)-1,F>>=-T,T+=p;T>0;v=v*256+r[l+I],I+=N,T-=8);for(C=v&(1<<-T)-1,v>>=-T,T+=m;T>0;C=C*256+r[l+I],I+=N,T-=8);if(v===0)v=1-R;else{if(v===k)return C?NaN:(F?-1:1)*(1/0);C=C+Math.pow(2,m),v=v-R}return(F?-1:1)*C*Math.pow(2,v-m)},i.write=function(r,l,d,m,w,v){var C,p,k,R=v*8-w-1,T=(1<<R)-1,I=T>>1,N=w===23?Math.pow(2,-24)-Math.pow(2,-77):0,F=m?0:v-1,U=m?1:-1,P=l<0||l===0&&1/l<0?1:0;for(l=Math.abs(l),isNaN(l)||l===1/0?(p=isNaN(l)?1:0,C=T):(C=Math.floor(Math.log(l)/Math.LN2),l*(k=Math.pow(2,-C))<1&&(C--,k*=2),C+I>=1?l+=N/k:l+=N*Math.pow(2,1-I),l*k>=2&&(C++,k/=2),C+I>=T?(p=0,C=T):C+I>=1?(p=(l*k-1)*Math.pow(2,w),C=C+I):(p=l*Math.pow(2,I-1)*Math.pow(2,w),C=0));w>=8;r[d+F]=p&255,F+=U,p/=256,w-=8);for(C=C<<w|p,R+=w;R>0;r[d+F]=C&255,F+=U,C/=256,R-=8);r[d+F-U]|=P*128}},824:e=>{var i=1e3,r=i*60,l=r*60,d=l*24,m=d*7,w=d*365.25;e.exports=function(R,T){T=T||{};var I=typeof R;if(I==="string"&&R.length>0)return v(R);if(I==="number"&&isFinite(R))return T.long?p(R):C(R);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(R))};function v(R){if(R=String(R),!(R.length>100)){var T=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(R);if(T){var I=parseFloat(T[1]),N=(T[2]||"ms").toLowerCase();switch(N){case"years":case"year":case"yrs":case"yr":case"y":return I*w;case"weeks":case"week":case"w":return I*m;case"days":case"day":case"d":return I*d;case"hours":case"hour":case"hrs":case"hr":case"h":return I*l;case"minutes":case"minute":case"mins":case"min":case"m":return I*r;case"seconds":case"second":case"secs":case"sec":case"s":return I*i;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return I;default:return}}}}function C(R){var T=Math.abs(R);return T>=d?Math.round(R/d)+"d":T>=l?Math.round(R/l)+"h":T>=r?Math.round(R/r)+"m":T>=i?Math.round(R/i)+"s":R+"ms"}function p(R){var T=Math.abs(R);return T>=d?k(R,T,d,"day"):T>=l?k(R,T,l,"hour"):T>=r?k(R,T,r,"minute"):T>=i?k(R,T,i,"second"):R+" ms"}function k(R,T,I,N){var F=T>=I*1.5;return Math.round(R/I)+" "+N+(F?"s":"")}},477:e=>{e.exports=function(i,r,l,d){var m=self||window;try{try{var w;try{w=new m.Blob([i])}catch{var v=m.BlobBuilder||m.WebKitBlobBuilder||m.MozBlobBuilder||m.MSBlobBuilder;w=new v,w.append(i),w=w.getBlob()}var C=m.URL||m.webkitURL,p=C.createObjectURL(w),k=new m[r](p,l);return C.revokeObjectURL(p),k}catch{return new m[r]("data:application/javascript,".concat(encodeURIComponent(i)),l)}}catch{if(!d)throw Error("Inline worker is not supported");return new m[r](d,l)}}}},Rs={};function ee(e){var i=Rs[e];if(i!==void 0)return i.exports;var r=Rs[e]={exports:{}};return xc[e](r,r.exports,ee),r.exports}ee.m=xc;ee.n=e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return ee.d(i,{a:i}),i};(()=>{var e=Object.getPrototypeOf?r=>Object.getPrototypeOf(r):r=>r.__proto__,i;ee.t=function(r,l){if(l&1&&(r=this(r)),l&8||typeof r=="object"&&r&&(l&4&&r.__esModule||l&16&&typeof r.then=="function"))return r;var d=Object.create(null);ee.r(d);var m={};i=i||[null,e({}),e([]),e(e)];for(var w=l&2&&r;typeof w=="object"&&!~i.indexOf(w);w=e(w))Object.getOwnPropertyNames(w).forEach(v=>m[v]=()=>r[v]);return m.default=()=>r,ee.d(d,m),d}})();ee.d=(e,i)=>{for(var r in i)ee.o(i,r)&&!ee.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:i[r]})};ee.f={},ee.e=e=>Promise.all(Object.keys(ee.f).reduce((i,r)=>(ee.f[r](e,i),i),[]));ee.u=e=>""+e+".6386c00ebfb22619e11b.js";ee.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i);(()=>{var e={},i="@aztec/bb.js:";ee.l=(r,l,d,m)=>{if(e[r]){e[r].push(l);return}var w,v;if(d!==void 0)for(var C=document.getElementsByTagName("script"),p=0;p<C.length;p++){var k=C[p];if(k.getAttribute("src")==r||k.getAttribute("data-webpack")==i+d){w=k;break}}w||(v=!0,w=document.createElement("script"),w.type="module",w.charset="utf-8",w.timeout=120,ee.nc&&w.setAttribute("nonce",ee.nc),w.setAttribute("data-webpack",i+d),w.src=r),e[r]=[l];var R=(I,N)=>{w.onerror=w.onload=null,clearTimeout(T);var F=e[r];if(delete e[r],w.parentNode&&w.parentNode.removeChild(w),F&&F.forEach(U=>U(N)),I)return I(N)},T=setTimeout(R.bind(null,void 0,{type:"timeout",target:w}),12e4);w.onerror=R.bind(null,w.onerror),w.onload=R.bind(null,w.onload),v&&document.head.appendChild(w)}})();ee.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};(()=>{var e;if(typeof import.meta.url=="string"&&(e=import.meta.url),!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),ee.p=e})();(()=>{var e={826:0};ee.f.j=(l,d)=>{var m=ee.o(e,l)?e[l]:void 0;if(m!==0)if(m)d.push(m[2]);else{var w=new Promise((k,R)=>m=e[l]=[k,R]);d.push(m[2]=w);var v=ee.p+ee.u(l),C=new Error,p=k=>{if(ee.o(e,l)&&(m=e[l],m!==0&&(e[l]=void 0),m)){var R=k&&(k.type==="load"?"missing":k.type),T=k&&k.target&&k.target.src;C.message="Loading chunk "+l+` failed.
(`+R+": "+T+")",C.name="ChunkLoadError",C.type=R,C.request=T,m[1](C)}};ee.l(v,p,"chunk-"+l,l)}};var i=(l,d)=>{var[m,w,v]=d,C,p,k=0;if(m.some(T=>e[T]!==0)){for(C in w)ee.o(w,C)&&(ee.m[C]=w[C]);if(v)var R=v(ee)}for(l&&l(d);k<m.length;k++)p=m[k],ee.o(e,p)&&e[p]&&e[p][0](),e[p]=0},r=globalThis.webpackChunk_aztec_bb_js=globalThis.webpackChunk_aztec_bb_js||[];r.forEach(i.bind(null,0)),r.push=i.bind(null,r.push.bind(r))})();var Ke={};(()=>{ee.d(Ke,{Dv:()=>Wd,Zh:()=>Xt,AL:()=>qr,tD:()=>bd,i2:()=>R,Fr:()=>S,pS:()=>T,ld:()=>ze,yh:()=>Zd,_7:()=>Pd,H2:()=>Xa,ly:()=>qa});function*e(){const t=[1,1,1,2,4,8,16,32,64];let a=0;for(;;)yield t[Math.min(a++,t.length-1)]}function*i(t){for(const a of t)yield a}async function r(t,a=e()){for(;;)try{return await t()}catch(n){const o=a.next().value;if(o===void 0)throw n;await new Promise(s=>setTimeout(s,o*1e3));continue}}class l{constructor(a){this.numPoints=a}async init(){await this.downloadG1Data(),await this.downloadG2Data()}async streamG1Data(){return(await this.fetchG1Data()).body}async streamG2Data(){return(await this.fetchG2Data()).body}async downloadG1Data(){const a=await this.fetchG1Data();return this.data=new Uint8Array(await a.arrayBuffer())}async downloadG2Data(){const a=await this.fetchG2Data();return this.g2Data=new Uint8Array(await a.arrayBuffer())}getG1Data(){return this.data}getG2Data(){return this.g2Data}async fetchG1Data(){if(this.numPoints===0)return new Response(new Uint8Array([]));const a=this.numPoints*64-1;return await r(()=>fetch("https://aztec-ignition.s3.amazonaws.com/MAIN%20IGNITION/flat/g1.dat",{headers:{Range:`bytes=0-${a}`},cache:"force-cache"}),i([5,5,5]))}async fetchG2Data(){return await r(()=>fetch("https://aztec-ignition.s3.amazonaws.com/MAIN%20IGNITION/flat/g2.dat",{cache:"force-cache"}),i([5,5,5]))}}class d{constructor(a){this.numPoints=a}async init(){await this.downloadG1Data()}async downloadG1Data(){const a=await this.fetchG1Data();return this.data=new Uint8Array(await a.arrayBuffer())}async streamG1Data(){return(await this.fetchG1Data()).body}getG1Data(){return this.data}async fetchG1Data(){if(this.numPoints===0)return new Response(new Uint8Array([]));const a=28,n=a+(this.numPoints*64-1);return await fetch("https://aztec-ignition.s3.amazonaws.com/TEST%20GRUMPKIN/monomial/transcript00.dat",{headers:{Range:`bytes=${a}-${n}`},cache:"force-cache"})}}function m(t){return new Promise((a,n)=>{t.oncomplete=t.onsuccess=()=>a(t.result),t.onabort=t.onerror=()=>n(t.error)})}function w(t,a){const n=indexedDB.open(t);n.onupgradeneeded=()=>n.result.createObjectStore(a);const o=m(n);return(s,u)=>o.then(h=>u(h.transaction(a,s).objectStore(a)))}let v;function C(){return v||(v=w("keyval-store","keyval")),v}function p(t,a=C()){return a("readonly",n=>m(n.get(t)))}function k(t,a,n=C()){return n("readwrite",o=>(o.put(a,t),m(o.transaction)))}class R{constructor(a){this.numPoints=a}static async new(a){const n=new R(a);return await n.init(),n}async init(){const a=await p("g1Data"),n=await p("g2Data"),o=new l(this.numPoints),s=this.numPoints*64;!a||a.length<s?(this.g1Data=await o.downloadG1Data(),await k("g1Data",this.g1Data)):this.g1Data=a,n?this.g2Data=n:(this.g2Data=await o.downloadG2Data(),await k("g2Data",this.g2Data))}getG1Data(){return this.g1Data}getG2Data(){return this.g2Data}}class T{constructor(a){this.numPoints=a}static async new(a){const n=new T(a);return await n.init(),n}async init(){const a=await p("grumpkinG1Data"),n=new d(this.numPoints),o=this.numPoints*64;!a||a.length<o?(this.g1Data=await n.downloadG1Data(),await k("grumpkinG1Data",this.g1Data)):this.g1Data=a}getG1Data(){return this.g1Data}}const I=Symbol("Comlink.proxy"),N=Symbol("Comlink.endpoint"),F=Symbol("Comlink.releaseProxy"),U=Symbol("Comlink.finalizer"),P=Symbol("Comlink.thrown"),j=t=>typeof t=="object"&&t!==null||typeof t=="function",$={canHandle:t=>j(t)&&t[I],serialize(t){const{port1:a,port2:n}=new MessageChannel;return W(t,a),[n,[n]]},deserialize(t){return t.start(),G(t)}},M={canHandle:t=>j(t)&&P in t,serialize({value:t}){let a;return t instanceof Error?a={isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:a={isError:!1,value:t},[a,[]]},deserialize(t){throw t.isError?Object.assign(new Error(t.value.message),t.value):t.value}},H=new Map([["proxy",$],["throw",M]]);function ie(t,a){for(const n of t)if(a===n||n==="*"||n instanceof RegExp&&n.test(a))return!0;return!1}function W(t,a=globalThis,n=["*"]){a.addEventListener("message",function o(s){if(!s||!s.data)return;if(!ie(n,s.origin)){console.warn(`Invalid origin '${s.origin}' for comlink proxy`);return}const{id:u,type:h,path:_}=Object.assign({path:[]},s.data),E=(s.data.argumentList||[]).map(at);let b;try{const x=_.slice(0,-1).reduce((z,D)=>z[D],t),L=_.reduce((z,D)=>z[D],t);switch(h){case"GET":b=L;break;case"SET":x[_.slice(-1)[0]]=at(s.data.value),b=!0;break;case"APPLY":b=L.apply(x,E);break;case"CONSTRUCT":{const z=new L(...E);b=Ce(z)}break;case"ENDPOINT":{const{port1:z,port2:D}=new MessageChannel;W(t,D),b=wa(z,[z])}break;case"RELEASE":b=void 0;break;default:return}}catch(x){b={value:x,[P]:0}}Promise.resolve(b).catch(x=>({value:x,[P]:0})).then(x=>{const[L,z]=Ie(x);a.postMessage(Object.assign(Object.assign({},L),{id:u}),z),h==="RELEASE"&&(a.removeEventListener("message",o),te(a),U in t&&typeof t[U]=="function"&&t[U]())}).catch(x=>{const[L,z]=Ie({value:new TypeError("Unserializable return value"),[P]:0});a.postMessage(Object.assign(Object.assign({},L),{id:u}),z)})}),a.start&&a.start()}function se(t){return t.constructor.name==="MessagePort"}function te(t){se(t)&&t.close()}function G(t,a){return Mn(t,[],a)}function J(t){if(t)throw new Error("Proxy has been released and is not useable")}function Oe(t){return mt(t,{type:"RELEASE"}).then(()=>{te(t)})}const et=new WeakMap,tt="FinalizationRegistry"in globalThis&&new FinalizationRegistry(t=>{const a=(et.get(t)||0)-1;et.set(t,a),a===0&&Oe(t)});function pt(t,a){const n=(et.get(a)||0)+1;et.set(a,n),tt&&tt.register(t,a,t)}function Ir(t){tt&&tt.unregister(t)}function Mn(t,a=[],n=function(){}){let o=!1;const s=new Proxy(n,{get(u,h){if(J(o),h===F)return()=>{Ir(s),Oe(t),o=!0};if(h==="then"){if(a.length===0)return{then:()=>s};const _=mt(t,{type:"GET",path:a.map(E=>E.toString())}).then(at);return _.then.bind(_)}return Mn(t,[...a,h])},set(u,h,_){J(o);const[E,b]=Ie(_);return mt(t,{type:"SET",path:[...a,h].map(x=>x.toString()),value:E},b).then(at)},apply(u,h,_){J(o);const E=a[a.length-1];if(E===N)return mt(t,{type:"ENDPOINT"}).then(at);if(E==="bind")return Mn(t,a.slice(0,-1));const[b,x]=Tr(_);return mt(t,{type:"APPLY",path:a.map(L=>L.toString()),argumentList:b},x).then(at)},construct(u,h){J(o);const[_,E]=Tr(h);return mt(t,{type:"CONSTRUCT",path:a.map(b=>b.toString()),argumentList:_},E).then(at)}});return pt(s,t),s}function ga(t){return Array.prototype.concat.apply([],t)}function Tr(t){const a=t.map(Ie);return[a.map(n=>n[0]),ga(a.map(n=>n[1]))]}const Br=new WeakMap;function wa(t,a){return Br.set(t,a),t}function Ce(t){return Object.assign(t,{[I]:!0})}function Ie(t){for(const[a,n]of H)if(n.canHandle(t)){const[o,s]=n.serialize(t);return[{type:"HANDLER",name:a,value:o},s]}return[{type:"RAW",value:t},Br.get(t)||[]]}function at(t){switch(t.type){case"HANDLER":return H.get(t.name).deserialize(t.value);case"RAW":return t.value}}function mt(t,a,n){return new Promise(o=>{const s=Dr();t.addEventListener("message",function u(h){!h.data||!h.data.id||h.data.id!==s||(t.removeEventListener("message",u),o(h.data))}),t.start&&t.start(),t.postMessage(Object.assign({id:s},a),n)})}function Dr(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}class ze extends Uint8Array{}function Rr(t){const a=new Uint8Array(1);return a[0]=t?1:0,a}function gt(t,a=4){const n=new Uint8Array(a);return new DataView(n.buffer).setUint32(n.byteLength-4,t,!1),n}function On(t,a=4){const n=new Uint8Array(a);return new DataView(n.buffer).setInt32(n.byteLength-4,t,!1),n}function Nn(t){const a=t.reduce((s,u)=>s+u.length,0),n=new Uint8Array(a);let o=0;for(const s of t)n.set(s,o),o+=s.length;return n}function ba(t){return t.reduce((a,n)=>a+n.toString(16).padStart(2,"0"),"")}function Un(t){return Nn([On(t.length),t])}function At(t,a=32){const n=new Uint8Array(a);for(let o=0;o<a;o++)n[a-o-1]=Number(t>>BigInt(o*8)&0xffn);return n}function Zt(t){return Nn([gt(t.length),...t.flat()])}function O(t){return Array.isArray(t)?Zt(t.map(O)):t instanceof ze?t:t instanceof Uint8Array?Un(t):typeof t=="boolean"?Rr(t):typeof t=="number"?gt(t):typeof t=="bigint"?At(t):typeof t=="string"?Un(new TextEncoder().encode(t)):t.toBuffer()}class Te{constructor(a,n=0){this.buffer=a,this.index=n}static asReader(a){return a instanceof Te?a:new Te(a)}readNumber(){const a=new DataView(this.buffer.buffer,this.buffer.byteOffset+this.index,4);return this.index+=4,a.getUint32(0,!1)}readBoolean(){return this.index+=1,!!this.buffer.at(this.index-1)}readBytes(a){return this.index+=a,this.buffer.slice(this.index-a,this.index)}readNumberVector(){return this.readVector({fromBuffer:a=>a.readNumber()})}readVector(a){const n=this.readNumber(),o=new Array(n);for(let s=0;s<n;s++)o[s]=a.fromBuffer(this);return o}readArray(a,n){const o=new Array(a);for(let s=0;s<a;s++)o[s]=n.fromBuffer(this);return o}readObject(a){return a.fromBuffer(this)}peekBytes(a){return this.buffer.subarray(this.index,a?this.index+a:void 0)}readString(){return new TextDecoder().decode(this.readBuffer())}readBuffer(){const a=this.readNumber();return this.readBytes(a)}readMap(a){const n=this.readNumber(),o={};for(let s=0;s<n;s++){const u=this.readString(),h=this.readObject(a);o[u]=h}return o}}function ye(){return{SIZE_IN_BYTES:1,fromBuffer:t=>Te.asReader(t).readBoolean()}}function St(){return{SIZE_IN_BYTES:4,fromBuffer:t=>Te.asReader(t).readNumber()}}function Le(t){return{fromBuffer:a=>Te.asReader(a).readVector(t)}}function ke(){return{fromBuffer:t=>Te.asReader(t).readBuffer()}}function Wt(){return{fromBuffer:t=>Te.asReader(t).readString()}}class Pe{constructor(a){this.value=a}static fromBuffer(a){const n=Te.asReader(a);return new this(n.readBytes(this.SIZE_IN_BYTES))}toBuffer(){return this.value}}Pe.SIZE_IN_BYTES=4;const wt=t=>{const n=(()=>{if(typeof window<"u"&&window.crypto)return window.crypto;if(typeof globalThis<"u"&&globalThis.crypto)return globalThis.crypto})();if(!n)throw new Error("randomBytes UnsupportedEnvironment");const o=new Uint8Array(t),s=65536;if(t>s)for(let u=0;u<t;u+=s)n.getRandomValues(o.subarray(u,u+s));else n.getRandomValues(o);return o};var Fr=ee(764).lW;function nt(t){return(t.readBigUInt64BE(0)<<192n)+(t.readBigUInt64BE(8)<<128n)+(t.readBigUInt64BE(16)<<64n)+t.readBigUInt64BE(24)}function Ct(t){const a=Fr.from(t);return nt(a)}function g(t,a=32){if(a!=32)throw new Error(`Only 32 bytes supported for conversion from bigint to buffer, attempted byte length: ${a}`);const n=Fr.alloc(a);return n.writeBigUInt64BE(t>>192n,0),n.writeBigUInt64BE(t>>128n&0xffffffffffffffffn,8),n.writeBigUInt64BE(t>>64n&0xffffffffffffffffn,16),n.writeBigUInt64BE(t&0xffffffffffffffffn,24),n}function c(t,a=32){return new Uint8Array(g(t,a))}var f=ee(764).lW,y,A;class S{constructor(a){const n=typeof a=="bigint"?a:a instanceof f?nt(a):Ct(a);if(n>y.MAX_VALUE)throw new Error(`Value 0x${n.toString(16)} is greater or equal to field modulus.`);this.value=typeof a=="bigint"?c(a):a instanceof f?new Uint8Array(a):a}static random(){const a=Ct(wt(64))%y.MODULUS;return new this(a)}static fromBuffer(a){const n=Te.asReader(a);return new this(n.readBytes(this.SIZE_IN_BYTES))}static fromBufferReduce(a){const n=Te.asReader(a);return new this(Ct(n.readBytes(this.SIZE_IN_BYTES))%y.MODULUS)}static fromString(a){return this.fromBuffer(f.from(a.replace(/^0x/i,""),"hex"))}toBuffer(){return this.value}toString(){return"0x"+ba(this.toBuffer())}equals(a){return this.value.every((n,o)=>n===a.value[o])}isZero(){return this.value.every(a=>a===0)}}y=S,S.ZERO=new y(0n),S.MODULUS=0x30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001n,S.MAX_VALUE=y.MODULUS-1n,S.SIZE_IN_BYTES=32;class B{constructor(a){if(this.value=a,a>A.MAX_VALUE)throw new Error(`Fq out of range ${a}.`)}static random(){const a=Ct(wt(64))%A.MODULUS;return new this(a)}static fromBuffer(a){const n=Te.asReader(a);return new this(Ct(n.readBytes(this.SIZE_IN_BYTES)))}static fromBufferReduce(a){const n=Te.asReader(a);return new this(Ct(n.readBytes(this.SIZE_IN_BYTES))%S.MODULUS)}static fromString(a){return this.fromBuffer(f.from(a.replace(/^0x/i,""),"hex"))}toBuffer(){return g(this.value,A.SIZE_IN_BYTES)}toString(){return"0x"+this.value.toString(16)}equals(a){return this.value===a.value}isZero(){return this.value===0n}}A=B,B.MODULUS=0x30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47n,B.MAX_VALUE=A.MODULUS-1n,B.SIZE_IN_BYTES=32;var ne=ee(764).lW;class ce{constructor(a,n){this.x=a,this.y=n}static random(){return new ce(S.random(),S.random())}static fromBuffer(a){const n=Te.asReader(a);return new this(S.fromBuffer(n),S.fromBuffer(n))}static fromString(a){return ce.fromBuffer(ne.from(a.replace(/^0x/i,""),"hex"))}toBuffer(){return ne.concat([this.x.toBuffer(),this.y.toBuffer()])}toString(){return"0x"+this.toBuffer().toString("hex")}equals(a){return this.x.equals(a.x)&&this.y.equals(a.y)}}ce.SIZE_IN_BYTES=64,ce.EMPTY=new ce(S.ZERO,S.ZERO);class oe{constructor(a){this.buffer=a}static fromBuffer(a){const n=Te.asReader(a);return new oe(n.readBytes(this.SIZE_IN_BYTES))}static random(){return new oe(wt(this.SIZE_IN_BYTES))}toBuffer(){return this.buffer}}oe.SIZE_IN_BYTES=32;class he{constructor(a){this.buffer=a}static fromBuffer(a){const n=Te.asReader(a);return new he(n.readBytes(this.SIZE_IN_BYTES))}static random(){return new he(wt(this.SIZE_IN_BYTES))}toBuffer(){return this.buffer}}he.SIZE_IN_BYTES=128;function we(t,a=!1){const n=new DataView(t.buffer,t.byteOffset,t.byteLength);let o=0,s=t.byteLength>>>2;a&&(s=n.getUint32(0,!1),o=4);const u=new Array(s);for(let h=0;h<s;h++)u[h]=n.getUint32(o,!1),o+=4;return u}class fl{constructor(a){this.wasm=a}async pedersenCommit(a,n){const o=[a,n].map(O),s=[ce];return(await this.wasm.callWasmExport("pedersen_commit",o,s.map(_=>_.SIZE_IN_BYTES))).map((_,E)=>s[E].fromBuffer(_))[0]}async pedersenHash(a,n){const o=[a,n].map(O),s=[S];return(await this.wasm.callWasmExport("pedersen_hash",o,s.map(_=>_.SIZE_IN_BYTES))).map((_,E)=>s[E].fromBuffer(_))[0]}async pedersenHashes(a,n){const o=[a,n].map(O),s=[S];return(await this.wasm.callWasmExport("pedersen_hashes",o,s.map(_=>_.SIZE_IN_BYTES))).map((_,E)=>s[E].fromBuffer(_))[0]}async pedersenHashBuffer(a,n){const o=[a,n].map(O),s=[S];return(await this.wasm.callWasmExport("pedersen_hash_buffer",o,s.map(_=>_.SIZE_IN_BYTES))).map((_,E)=>s[E].fromBuffer(_))[0]}async poseidon2Hash(a){const n=[a].map(O),o=[S];return(await this.wasm.callWasmExport("poseidon2_hash",n,o.map(h=>h.SIZE_IN_BYTES))).map((h,_)=>o[_].fromBuffer(h))[0]}async poseidon2HashAccumulate(a){const n=[a].map(O),o=[S];return(await this.wasm.callWasmExport("poseidon2_hash_accumulate",n,o.map(h=>h.SIZE_IN_BYTES))).map((h,_)=>o[_].fromBuffer(h))[0]}async poseidon2Hashes(a){const n=[a].map(O),o=[S];return(await this.wasm.callWasmExport("poseidon2_hashes",n,o.map(h=>h.SIZE_IN_BYTES))).map((h,_)=>o[_].fromBuffer(h))[0]}async poseidon2Permutation(a){const n=[a].map(O),o=[Le(S)];return(await this.wasm.callWasmExport("poseidon2_permutation",n,o.map(h=>h.SIZE_IN_BYTES))).map((h,_)=>o[_].fromBuffer(h))[0]}async blake2s(a){const n=[a].map(O),o=[oe];return(await this.wasm.callWasmExport("blake2s",n,o.map(h=>h.SIZE_IN_BYTES))).map((h,_)=>o[_].fromBuffer(h))[0]}async blake2sToField(a){const n=[a].map(O),o=[S];return(await this.wasm.callWasmExport("blake2s_to_field_",n,o.map(h=>h.SIZE_IN_BYTES))).map((h,_)=>o[_].fromBuffer(h))[0]}async schnorrComputePublicKey(a){const n=[a].map(O),o=[ce];return(await this.wasm.callWasmExport("schnorr_compute_public_key",n,o.map(h=>h.SIZE_IN_BYTES))).map((h,_)=>o[_].fromBuffer(h))[0]}async schnorrNegatePublicKey(a){const n=[a].map(O),o=[ce];return(await this.wasm.callWasmExport("schnorr_negate_public_key",n,o.map(h=>h.SIZE_IN_BYTES))).map((h,_)=>o[_].fromBuffer(h))[0]}async schnorrConstructSignature(a,n){const o=[a,n].map(O),s=[oe,oe];return(await this.wasm.callWasmExport("schnorr_construct_signature",o,s.map(_=>_.SIZE_IN_BYTES))).map((_,E)=>s[E].fromBuffer(_))}async schnorrVerifySignature(a,n,o,s){const u=[a,n,o,s].map(O),h=[ye()];return(await this.wasm.callWasmExport("schnorr_verify_signature",u,h.map(b=>b.SIZE_IN_BYTES))).map((b,x)=>h[x].fromBuffer(b))[0]}async schnorrMultisigCreateMultisigPublicKey(a){const n=[a].map(O),o=[he];return(await this.wasm.callWasmExport("schnorr_multisig_create_multisig_public_key",n,o.map(h=>h.SIZE_IN_BYTES))).map((h,_)=>o[_].fromBuffer(h))[0]}async schnorrMultisigValidateAndCombineSignerPubkeys(a){const n=[a].map(O),o=[ce,ye()];return(await this.wasm.callWasmExport("schnorr_multisig_validate_and_combine_signer_pubkeys",n,o.map(h=>h.SIZE_IN_BYTES))).map((h,_)=>o[_].fromBuffer(h))}async schnorrMultisigConstructSignatureRound1(){const a=[].map(O),n=[he,he];return(await this.wasm.callWasmExport("schnorr_multisig_construct_signature_round_1",a,n.map(u=>u.SIZE_IN_BYTES))).map((u,h)=>n[h].fromBuffer(u))}async schnorrMultisigConstructSignatureRound2(a,n,o,s,u){const h=[a,n,o,s,u].map(O),_=[B,ye()];return(await this.wasm.callWasmExport("schnorr_multisig_construct_signature_round_2",h,_.map(x=>x.SIZE_IN_BYTES))).map((x,L)=>_[L].fromBuffer(x))}async schnorrMultisigCombineSignatures(a,n,o,s){const u=[a,n,o,s].map(O),h=[oe,oe,ye()];return(await this.wasm.callWasmExport("schnorr_multisig_combine_signatures",u,h.map(b=>b.SIZE_IN_BYTES))).map((b,x)=>h[x].fromBuffer(b))}async aesEncryptBufferCbc(a,n,o,s){const u=[a,n,o,s].map(O),h=[ke()];return(await this.wasm.callWasmExport("aes_encrypt_buffer_cbc",u,h.map(b=>b.SIZE_IN_BYTES))).map((b,x)=>h[x].fromBuffer(b))[0]}async aesDecryptBufferCbc(a,n,o,s){const u=[a,n,o,s].map(O),h=[ke()];return(await this.wasm.callWasmExport("aes_decrypt_buffer_cbc",u,h.map(b=>b.SIZE_IN_BYTES))).map((b,x)=>h[x].fromBuffer(b))[0]}async srsInitSrs(a,n,o){const s=[a,n,o].map(O),u=[];(await this.wasm.callWasmExport("srs_init_srs",s,u.map(_=>_.SIZE_IN_BYTES))).map((_,E)=>u[E].fromBuffer(_))}async srsInitGrumpkinSrs(a,n){const o=[a,n].map(O),s=[];(await this.wasm.callWasmExport("srs_init_grumpkin_srs",o,s.map(h=>h.SIZE_IN_BYTES))).map((h,_)=>s[_].fromBuffer(h))}async examplesSimpleCreateAndVerifyProof(){const a=[].map(O),n=[ye()];return(await this.wasm.callWasmExport("examples_simple_create_and_verify_proof",a,n.map(u=>u.SIZE_IN_BYTES))).map((u,h)=>n[h].fromBuffer(u))[0]}async testThreads(a,n){const o=[a,n].map(O),s=[St()];return(await this.wasm.callWasmExport("test_threads",o,s.map(_=>_.SIZE_IN_BYTES))).map((_,E)=>s[E].fromBuffer(_))[0]}async commonInitSlabAllocator(a){const n=[a].map(O),o=[];(await this.wasm.callWasmExport("common_init_slab_allocator",n,o.map(u=>u.SIZE_IN_BYTES))).map((u,h)=>o[h].fromBuffer(u))}async acirGetCircuitSizes(a,n,o){const s=[a,n,o].map(O),u=[St(),St()];return(await this.wasm.callWasmExport("acir_get_circuit_sizes",s,u.map(E=>E.SIZE_IN_BYTES))).map((E,b)=>u[b].fromBuffer(E))}async acirGatesAztecClient(a){const n=[a].map(O),o=[ke()],s=await this.wasm.callWasmExport("acir_gates_aztec_client",n,o.map(u=>u.SIZE_IN_BYTES));return we(s[0],!0)}async acirNewAcirComposer(a){const n=[a].map(O),o=[Pe];return(await this.wasm.callWasmExport("acir_new_acir_composer",n,o.map(h=>h.SIZE_IN_BYTES))).map((h,_)=>o[_].fromBuffer(h))[0]}async acirDeleteAcirComposer(a){const n=[a].map(O),o=[];(await this.wasm.callWasmExport("acir_delete_acir_composer",n,o.map(u=>u.SIZE_IN_BYTES))).map((u,h)=>o[h].fromBuffer(u))}async acirInitProvingKey(a,n,o){const s=[a,n,o].map(O),u=[];(await this.wasm.callWasmExport("acir_init_proving_key",s,u.map(_=>_.SIZE_IN_BYTES))).map((_,E)=>u[E].fromBuffer(_))}async acirCreateProof(a,n,o,s){const u=[a,n,o,s].map(O),h=[ke()];return(await this.wasm.callWasmExport("acir_create_proof",u,h.map(b=>b.SIZE_IN_BYTES))).map((b,x)=>h[x].fromBuffer(b))[0]}async acirProveAndVerifyUltraHonk(a,n,o){const s=[a,n,o].map(O),u=[ye()];return(await this.wasm.callWasmExport("acir_prove_and_verify_ultra_honk",s,u.map(E=>E.SIZE_IN_BYTES))).map((E,b)=>u[b].fromBuffer(E))[0]}async acirProveAndVerifyMegaHonk(a,n,o){const s=[a,n,o].map(O),u=[ye()];return(await this.wasm.callWasmExport("acir_prove_and_verify_mega_honk",s,u.map(E=>E.SIZE_IN_BYTES))).map((E,b)=>u[b].fromBuffer(E))[0]}async acirFoldAndVerifyProgramStack(a,n,o){const s=[a,n,o].map(O),u=[ye()];return(await this.wasm.callWasmExport("acir_fold_and_verify_program_stack",s,u.map(E=>E.SIZE_IN_BYTES))).map((E,b)=>u[b].fromBuffer(E))[0]}async acirLoadVerificationKey(a,n){const o=[a,n].map(O),s=[];(await this.wasm.callWasmExport("acir_load_verification_key",o,s.map(h=>h.SIZE_IN_BYTES))).map((h,_)=>s[_].fromBuffer(h))}async acirInitVerificationKey(a){const n=[a].map(O),o=[];(await this.wasm.callWasmExport("acir_init_verification_key",n,o.map(u=>u.SIZE_IN_BYTES))).map((u,h)=>o[h].fromBuffer(u))}async acirGetVerificationKey(a){const n=[a].map(O),o=[ke()];return(await this.wasm.callWasmExport("acir_get_verification_key",n,o.map(h=>h.SIZE_IN_BYTES))).map((h,_)=>o[_].fromBuffer(h))[0]}async acirGetProvingKey(a,n,o){const s=[a,n,o].map(O),u=[ke()];return(await this.wasm.callWasmExport("acir_get_proving_key",s,u.map(E=>E.SIZE_IN_BYTES))).map((E,b)=>u[b].fromBuffer(E))[0]}async acirVerifyProof(a,n){const o=[a,n].map(O),s=[ye()];return(await this.wasm.callWasmExport("acir_verify_proof",o,s.map(_=>_.SIZE_IN_BYTES))).map((_,E)=>s[E].fromBuffer(_))[0]}async acirGetSolidityVerifier(a){const n=[a].map(O),o=[Wt()];return(await this.wasm.callWasmExport("acir_get_solidity_verifier",n,o.map(h=>h.SIZE_IN_BYTES))).map((h,_)=>o[_].fromBuffer(h))[0]}async acirSerializeProofIntoFields(a,n,o){const s=[a,n,o].map(O),u=[Le(S)];return(await this.wasm.callWasmExport("acir_serialize_proof_into_fields",s,u.map(E=>E.SIZE_IN_BYTES))).map((E,b)=>u[b].fromBuffer(E))[0]}async acirSerializeVerificationKeyIntoFields(a){const n=[a].map(O),o=[Le(S),S];return(await this.wasm.callWasmExport("acir_serialize_verification_key_into_fields",n,o.map(h=>h.SIZE_IN_BYTES))).map((h,_)=>o[_].fromBuffer(h))}async acirProveAndVerifyAztecClient(a,n){const o=[a,n].map(O),s=[ye()];return(await this.wasm.callWasmExport("acir_prove_and_verify_aztec_client",o,s.map(_=>_.SIZE_IN_BYTES))).map((_,E)=>s[E].fromBuffer(_))[0]}async acirProveAztecClient(a,n){const o=[a,n].map(O),s=[ke(),ke()],h=(await this.wasm.callWasmExport("acir_prove_aztec_client",o,s.map(_=>_.SIZE_IN_BYTES))).map((_,E)=>s[E].fromBuffer(_));return[h[0],h[1]]}async acirVerifyAztecClient(a,n){const o=[a,n].map(O),s=[ye()];return(await this.wasm.callWasmExport("acir_verify_aztec_client",o,s.map(_=>_.SIZE_IN_BYTES))).map((_,E)=>s[E].fromBuffer(_))[0]}async acirProveUltraHonk(a,n,o){const s=[a,n,o].map(O),u=[ke()];return(await this.wasm.callWasmExport("acir_prove_ultra_honk",s,u.map(E=>E.SIZE_IN_BYTES))).map((E,b)=>u[b].fromBuffer(E))[0]}async acirProveUltraKeccakHonk(a,n,o){const s=[a,n,o].map(O),u=[ke()];return(await this.wasm.callWasmExport("acir_prove_ultra_keccak_honk",s,u.map(E=>E.SIZE_IN_BYTES))).map((E,b)=>u[b].fromBuffer(E))[0]}async acirVerifyUltraHonk(a,n){const o=[a,n].map(O),s=[ye()];return(await this.wasm.callWasmExport("acir_verify_ultra_honk",o,s.map(_=>_.SIZE_IN_BYTES))).map((_,E)=>s[E].fromBuffer(_))[0]}async acirVerifyUltraKeccakHonk(a,n){const o=[a,n].map(O),s=[ye()];return(await this.wasm.callWasmExport("acir_verify_ultra_keccak_honk",o,s.map(_=>_.SIZE_IN_BYTES))).map((_,E)=>s[E].fromBuffer(_))[0]}async acirWriteVkUltraHonk(a,n){const o=[a,n].map(O),s=[ke()];return(await this.wasm.callWasmExport("acir_write_vk_ultra_honk",o,s.map(_=>_.SIZE_IN_BYTES))).map((_,E)=>s[E].fromBuffer(_))[0]}async acirWriteVkUltraKeccakHonk(a,n){const o=[a,n].map(O),s=[ke()];return(await this.wasm.callWasmExport("acir_write_vk_ultra_keccak_honk",o,s.map(_=>_.SIZE_IN_BYTES))).map((_,E)=>s[E].fromBuffer(_))[0]}async acirHonkSolidityVerifier(a,n){const o=[a,n].map(O),s=[ke()];return(await this.wasm.callWasmExport("acir_honk_solidity_verifier",o,s.map(_=>_.SIZE_IN_BYTES))).map((_,E)=>s[E].fromBuffer(_))[0]}async acirProofAsFieldsUltraHonk(a){const n=[a].map(O),o=[Le(S)];return(await this.wasm.callWasmExport("acir_proof_as_fields_ultra_honk",n,o.map(h=>h.SIZE_IN_BYTES))).map((h,_)=>o[_].fromBuffer(h))[0]}async acirVkAsFieldsUltraHonk(a){const n=[a].map(O),o=[Le(S)];return(await this.wasm.callWasmExport("acir_vk_as_fields_ultra_honk",n,o.map(h=>h.SIZE_IN_BYTES))).map((h,_)=>o[_].fromBuffer(h))[0]}async acirVkAsFieldsMegaHonk(a){const n=[a].map(O),o=[Le(S)];return(await this.wasm.callWasmExport("acir_vk_as_fields_mega_honk",n,o.map(h=>h.SIZE_IN_BYTES))).map((h,_)=>o[_].fromBuffer(h))[0]}}class dl{constructor(a){this.wasm=a}pedersenCommit(a,n){const o=[a,n].map(O),s=[ce];return this.wasm.callWasmExport("pedersen_commit",o,s.map(_=>_.SIZE_IN_BYTES)).map((_,E)=>s[E].fromBuffer(_))[0]}pedersenHash(a,n){const o=[a,n].map(O),s=[S];return this.wasm.callWasmExport("pedersen_hash",o,s.map(_=>_.SIZE_IN_BYTES)).map((_,E)=>s[E].fromBuffer(_))[0]}pedersenHashes(a,n){const o=[a,n].map(O),s=[S];return this.wasm.callWasmExport("pedersen_hashes",o,s.map(_=>_.SIZE_IN_BYTES)).map((_,E)=>s[E].fromBuffer(_))[0]}pedersenHashBuffer(a,n){const o=[a,n].map(O),s=[S];return this.wasm.callWasmExport("pedersen_hash_buffer",o,s.map(_=>_.SIZE_IN_BYTES)).map((_,E)=>s[E].fromBuffer(_))[0]}poseidon2Hash(a){const n=[a].map(O),o=[S];return this.wasm.callWasmExport("poseidon2_hash",n,o.map(h=>h.SIZE_IN_BYTES)).map((h,_)=>o[_].fromBuffer(h))[0]}poseidon2HashAccumulate(a){const n=[a].map(O),o=[S];return this.wasm.callWasmExport("poseidon2_hash_accumulate",n,o.map(h=>h.SIZE_IN_BYTES)).map((h,_)=>o[_].fromBuffer(h))[0]}poseidon2Hashes(a){const n=[a].map(O),o=[S];return this.wasm.callWasmExport("poseidon2_hashes",n,o.map(h=>h.SIZE_IN_BYTES)).map((h,_)=>o[_].fromBuffer(h))[0]}poseidon2Permutation(a){const n=[a].map(O),o=[Le(S)];return this.wasm.callWasmExport("poseidon2_permutation",n,o.map(h=>h.SIZE_IN_BYTES)).map((h,_)=>o[_].fromBuffer(h))[0]}blake2s(a){const n=[a].map(O),o=[oe];return this.wasm.callWasmExport("blake2s",n,o.map(h=>h.SIZE_IN_BYTES)).map((h,_)=>o[_].fromBuffer(h))[0]}blake2sToField(a){const n=[a].map(O),o=[S];return this.wasm.callWasmExport("blake2s_to_field_",n,o.map(h=>h.SIZE_IN_BYTES)).map((h,_)=>o[_].fromBuffer(h))[0]}schnorrComputePublicKey(a){const n=[a].map(O),o=[ce];return this.wasm.callWasmExport("schnorr_compute_public_key",n,o.map(h=>h.SIZE_IN_BYTES)).map((h,_)=>o[_].fromBuffer(h))[0]}schnorrNegatePublicKey(a){const n=[a].map(O),o=[ce];return this.wasm.callWasmExport("schnorr_negate_public_key",n,o.map(h=>h.SIZE_IN_BYTES)).map((h,_)=>o[_].fromBuffer(h))[0]}schnorrConstructSignature(a,n){const o=[a,n].map(O),s=[oe,oe];return this.wasm.callWasmExport("schnorr_construct_signature",o,s.map(_=>_.SIZE_IN_BYTES)).map((_,E)=>s[E].fromBuffer(_))}schnorrVerifySignature(a,n,o,s){const u=[a,n,o,s].map(O),h=[ye()];return this.wasm.callWasmExport("schnorr_verify_signature",u,h.map(b=>b.SIZE_IN_BYTES)).map((b,x)=>h[x].fromBuffer(b))[0]}schnorrMultisigCreateMultisigPublicKey(a){const n=[a].map(O),o=[he];return this.wasm.callWasmExport("schnorr_multisig_create_multisig_public_key",n,o.map(h=>h.SIZE_IN_BYTES)).map((h,_)=>o[_].fromBuffer(h))[0]}schnorrMultisigValidateAndCombineSignerPubkeys(a){const n=[a].map(O),o=[ce,ye()];return this.wasm.callWasmExport("schnorr_multisig_validate_and_combine_signer_pubkeys",n,o.map(h=>h.SIZE_IN_BYTES)).map((h,_)=>o[_].fromBuffer(h))}schnorrMultisigConstructSignatureRound1(){const a=[].map(O),n=[he,he];return this.wasm.callWasmExport("schnorr_multisig_construct_signature_round_1",a,n.map(u=>u.SIZE_IN_BYTES)).map((u,h)=>n[h].fromBuffer(u))}schnorrMultisigConstructSignatureRound2(a,n,o,s,u){const h=[a,n,o,s,u].map(O),_=[B,ye()];return this.wasm.callWasmExport("schnorr_multisig_construct_signature_round_2",h,_.map(x=>x.SIZE_IN_BYTES)).map((x,L)=>_[L].fromBuffer(x))}schnorrMultisigCombineSignatures(a,n,o,s){const u=[a,n,o,s].map(O),h=[oe,oe,ye()];return this.wasm.callWasmExport("schnorr_multisig_combine_signatures",u,h.map(b=>b.SIZE_IN_BYTES)).map((b,x)=>h[x].fromBuffer(b))}aesEncryptBufferCbc(a,n,o,s){const u=[a,n,o,s].map(O),h=[ke()];return this.wasm.callWasmExport("aes_encrypt_buffer_cbc",u,h.map(b=>b.SIZE_IN_BYTES)).map((b,x)=>h[x].fromBuffer(b))[0]}aesDecryptBufferCbc(a,n,o,s){const u=[a,n,o,s].map(O),h=[ke()];return this.wasm.callWasmExport("aes_decrypt_buffer_cbc",u,h.map(b=>b.SIZE_IN_BYTES)).map((b,x)=>h[x].fromBuffer(b))[0]}srsInitSrs(a,n,o){const s=[a,n,o].map(O),u=[];this.wasm.callWasmExport("srs_init_srs",s,u.map(_=>_.SIZE_IN_BYTES)).map((_,E)=>u[E].fromBuffer(_))}srsInitGrumpkinSrs(a,n){const o=[a,n].map(O),s=[];this.wasm.callWasmExport("srs_init_grumpkin_srs",o,s.map(h=>h.SIZE_IN_BYTES)).map((h,_)=>s[_].fromBuffer(h))}examplesSimpleCreateAndVerifyProof(){const a=[].map(O),n=[ye()];return this.wasm.callWasmExport("examples_simple_create_and_verify_proof",a,n.map(u=>u.SIZE_IN_BYTES)).map((u,h)=>n[h].fromBuffer(u))[0]}testThreads(a,n){const o=[a,n].map(O),s=[St()];return this.wasm.callWasmExport("test_threads",o,s.map(_=>_.SIZE_IN_BYTES)).map((_,E)=>s[E].fromBuffer(_))[0]}commonInitSlabAllocator(a){const n=[a].map(O),o=[];this.wasm.callWasmExport("common_init_slab_allocator",n,o.map(u=>u.SIZE_IN_BYTES)).map((u,h)=>o[h].fromBuffer(u))}acirGetCircuitSizes(a,n,o){const s=[a,n,o].map(O),u=[St(),St()];return this.wasm.callWasmExport("acir_get_circuit_sizes",s,u.map(E=>E.SIZE_IN_BYTES)).map((E,b)=>u[b].fromBuffer(E))}acirNewAcirComposer(a){const n=[a].map(O),o=[Pe];return this.wasm.callWasmExport("acir_new_acir_composer",n,o.map(h=>h.SIZE_IN_BYTES)).map((h,_)=>o[_].fromBuffer(h))[0]}acirDeleteAcirComposer(a){const n=[a].map(O),o=[];this.wasm.callWasmExport("acir_delete_acir_composer",n,o.map(u=>u.SIZE_IN_BYTES)).map((u,h)=>o[h].fromBuffer(u))}acirInitProvingKey(a,n,o){const s=[a,n,o].map(O),u=[];this.wasm.callWasmExport("acir_init_proving_key",s,u.map(_=>_.SIZE_IN_BYTES)).map((_,E)=>u[E].fromBuffer(_))}acirCreateProof(a,n,o,s){const u=[a,n,o,s].map(O),h=[ke()];return this.wasm.callWasmExport("acir_create_proof",u,h.map(b=>b.SIZE_IN_BYTES)).map((b,x)=>h[x].fromBuffer(b))[0]}acirProveAndVerifyUltraHonk(a,n,o){const s=[a,n,o].map(O),u=[ye()];return this.wasm.callWasmExport("acir_prove_and_verify_ultra_honk",s,u.map(E=>E.SIZE_IN_BYTES)).map((E,b)=>u[b].fromBuffer(E))[0]}acirProveAndVerifyMegaHonk(a,n,o){const s=[a,n,o].map(O),u=[ye()];return this.wasm.callWasmExport("acir_prove_and_verify_mega_honk",s,u.map(E=>E.SIZE_IN_BYTES)).map((E,b)=>u[b].fromBuffer(E))[0]}acirFoldAndVerifyProgramStack(a,n,o){const s=[a,n,o].map(O),u=[ye()];return this.wasm.callWasmExport("acir_fold_and_verify_program_stack",s,u.map(E=>E.SIZE_IN_BYTES)).map((E,b)=>u[b].fromBuffer(E))[0]}acirLoadVerificationKey(a,n){const o=[a,n].map(O),s=[];this.wasm.callWasmExport("acir_load_verification_key",o,s.map(h=>h.SIZE_IN_BYTES)).map((h,_)=>s[_].fromBuffer(h))}acirInitVerificationKey(a){const n=[a].map(O),o=[];this.wasm.callWasmExport("acir_init_verification_key",n,o.map(u=>u.SIZE_IN_BYTES)).map((u,h)=>o[h].fromBuffer(u))}acirGetVerificationKey(a){const n=[a].map(O),o=[ke()];return this.wasm.callWasmExport("acir_get_verification_key",n,o.map(h=>h.SIZE_IN_BYTES)).map((h,_)=>o[_].fromBuffer(h))[0]}acirGetProvingKey(a,n,o){const s=[a,n,o].map(O),u=[ke()];return this.wasm.callWasmExport("acir_get_proving_key",s,u.map(E=>E.SIZE_IN_BYTES)).map((E,b)=>u[b].fromBuffer(E))[0]}acirVerifyProof(a,n){const o=[a,n].map(O),s=[ye()];return this.wasm.callWasmExport("acir_verify_proof",o,s.map(_=>_.SIZE_IN_BYTES)).map((_,E)=>s[E].fromBuffer(_))[0]}acirGetSolidityVerifier(a){const n=[a].map(O),o=[Wt()];return this.wasm.callWasmExport("acir_get_solidity_verifier",n,o.map(h=>h.SIZE_IN_BYTES)).map((h,_)=>o[_].fromBuffer(h))[0]}acirSerializeProofIntoFields(a,n,o){const s=[a,n,o].map(O),u=[Le(S)];return this.wasm.callWasmExport("acir_serialize_proof_into_fields",s,u.map(E=>E.SIZE_IN_BYTES)).map((E,b)=>u[b].fromBuffer(E))[0]}acirSerializeVerificationKeyIntoFields(a){const n=[a].map(O),o=[Le(S),S];return this.wasm.callWasmExport("acir_serialize_verification_key_into_fields",n,o.map(h=>h.SIZE_IN_BYTES)).map((h,_)=>o[_].fromBuffer(h))}acirProveUltraHonk(a,n,o){const s=[a,n,o].map(O),u=[ke()];return this.wasm.callWasmExport("acir_prove_ultra_honk",s,u.map(E=>E.SIZE_IN_BYTES)).map((E,b)=>u[b].fromBuffer(E))[0]}acirVerifyUltraHonk(a,n){const o=[a,n].map(O),s=[ye()];return this.wasm.callWasmExport("acir_verify_ultra_honk",o,s.map(_=>_.SIZE_IN_BYTES)).map((_,E)=>s[E].fromBuffer(_))[0]}acirWriteVkUltraHonk(a,n){const o=[a,n].map(O),s=[ke()];return this.wasm.callWasmExport("acir_write_vk_ultra_honk",o,s.map(_=>_.SIZE_IN_BYTES)).map((_,E)=>s[E].fromBuffer(_))[0]}acirProofAsFieldsUltraHonk(a){const n=[a].map(O),o=[Le(S)];return this.wasm.callWasmExport("acir_proof_as_fields_ultra_honk",n,o.map(h=>h.SIZE_IN_BYTES)).map((h,_)=>o[_].fromBuffer(h))[0]}acirVkAsFieldsUltraHonk(a){const n=[a].map(O),o=[Le(S)];return this.wasm.callWasmExport("acir_vk_as_fields_ultra_honk",n,o.map(h=>h.SIZE_IN_BYTES)).map((h,_)=>o[_].fromBuffer(h))[0]}acirVkAsFieldsMegaHonk(a){const n=[a].map(O),o=[Le(S)];return this.wasm.callWasmExport("acir_vk_as_fields_mega_honk",n,o.map(h=>h.SIZE_IN_BYTES)).map((h,_)=>o[_].fromBuffer(h))[0]}}var hl=ee(227),it=ee.n(hl),_l=ee(477),Zi=ee.n(_l);function pl(){return Zi()(`/*! For license information please see main.worker.worker.js.LICENSE.txt */
var __webpack_modules__ = {
    227: (module, exports, __webpack_require__) => {
        exports.formatArgs = formatArgs;
        exports.save = save;
        exports.load = load;
        exports.useColors = useColors;
        exports.storage = localstorage();
        exports.destroy = (() => {
            let warned = false;
            return () => {
                if (!warned) {
                    warned = true;
                    console.warn("Instance method \`debug.destroy()\` is deprecated and no longer does anything. It will be removed in the next major version of \`debug\`.");
                }
            };
        })();
        exports.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ];
        function useColors() {
            if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
                return true;
            }
            if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\\/(\\d+)/)) {
                return false;
            }
            return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\\/(\\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\\/(\\d+)/);
        }
        function formatArgs(args) {
            args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
            if (!this.useColors) {
                return;
            }
            const c = "color: " + this.color;
            args.splice(1, 0, c, "color: inherit");
            let index = 0;
            let lastC = 0;
            args[0].replace(/%[a-zA-Z%]/g, (match => {
                if (match === "%%") {
                    return;
                }
                index++;
                if (match === "%c") {
                    lastC = index;
                }
            }));
            args.splice(lastC, 0, c);
        }
        exports.log = console.debug || console.log || (() => {});
        function save(namespaces) {
            try {
                if (namespaces) {
                    exports.storage.setItem("debug", namespaces);
                } else {
                    exports.storage.removeItem("debug");
                }
            } catch (error) {}
        }
        function load() {
            let r;
            try {
                r = exports.storage.getItem("debug");
            } catch (error) {}
            if (!r && typeof process !== "undefined" && "env" in process) {
                r = process.env.DEBUG;
            }
            return r;
        }
        function localstorage() {
            try {
                return localStorage;
            } catch (error) {}
        }
        module.exports = __webpack_require__(447)(exports);
        const {formatters} = module.exports;
        formatters.j = function(v) {
            try {
                return JSON.stringify(v);
            } catch (error) {
                return "[UnexpectedJSONParseError]: " + error.message;
            }
        };
    },
    447: (module, __unused_webpack_exports, __webpack_require__) => {
        function setup(env) {
            createDebug.debug = createDebug;
            createDebug.default = createDebug;
            createDebug.coerce = coerce;
            createDebug.disable = disable;
            createDebug.enable = enable;
            createDebug.enabled = enabled;
            createDebug.humanize = __webpack_require__(824);
            createDebug.destroy = destroy;
            Object.keys(env).forEach((key => {
                createDebug[key] = env[key];
            }));
            createDebug.names = [];
            createDebug.skips = [];
            createDebug.formatters = {};
            function selectColor(namespace) {
                let hash = 0;
                for (let i = 0; i < namespace.length; i++) {
                    hash = (hash << 5) - hash + namespace.charCodeAt(i);
                    hash |= 0;
                }
                return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
            }
            createDebug.selectColor = selectColor;
            function createDebug(namespace) {
                let prevTime;
                let enableOverride = null;
                let namespacesCache;
                let enabledCache;
                function debug(...args) {
                    if (!debug.enabled) {
                        return;
                    }
                    const self = debug;
                    const curr = Number(new Date);
                    const ms = curr - (prevTime || curr);
                    self.diff = ms;
                    self.prev = prevTime;
                    self.curr = curr;
                    prevTime = curr;
                    args[0] = createDebug.coerce(args[0]);
                    if (typeof args[0] !== "string") {
                        args.unshift("%O");
                    }
                    let index = 0;
                    args[0] = args[0].replace(/%([a-zA-Z%])/g, ((match, format) => {
                        if (match === "%%") {
                            return "%";
                        }
                        index++;
                        const formatter = createDebug.formatters[format];
                        if (typeof formatter === "function") {
                            const val = args[index];
                            match = formatter.call(self, val);
                            args.splice(index, 1);
                            index--;
                        }
                        return match;
                    }));
                    createDebug.formatArgs.call(self, args);
                    const logFn = self.log || createDebug.log;
                    logFn.apply(self, args);
                }
                debug.namespace = namespace;
                debug.useColors = createDebug.useColors();
                debug.color = createDebug.selectColor(namespace);
                debug.extend = extend;
                debug.destroy = createDebug.destroy;
                Object.defineProperty(debug, "enabled", {
                    enumerable: true,
                    configurable: false,
                    get: () => {
                        if (enableOverride !== null) {
                            return enableOverride;
                        }
                        if (namespacesCache !== createDebug.namespaces) {
                            namespacesCache = createDebug.namespaces;
                            enabledCache = createDebug.enabled(namespace);
                        }
                        return enabledCache;
                    },
                    set: v => {
                        enableOverride = v;
                    }
                });
                if (typeof createDebug.init === "function") {
                    createDebug.init(debug);
                }
                return debug;
            }
            function extend(namespace, delimiter) {
                const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
                newDebug.log = this.log;
                return newDebug;
            }
            function enable(namespaces) {
                createDebug.save(namespaces);
                createDebug.namespaces = namespaces;
                createDebug.names = [];
                createDebug.skips = [];
                let i;
                const split = (typeof namespaces === "string" ? namespaces : "").split(/[\\s,]+/);
                const len = split.length;
                for (i = 0; i < len; i++) {
                    if (!split[i]) {
                        continue;
                    }
                    namespaces = split[i].replace(/\\*/g, ".*?");
                    if (namespaces[0] === "-") {
                        createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
                    } else {
                        createDebug.names.push(new RegExp("^" + namespaces + "$"));
                    }
                }
            }
            function disable() {
                const namespaces = [ ...createDebug.names.map(toNamespace), ...createDebug.skips.map(toNamespace).map((namespace => "-" + namespace)) ].join(",");
                createDebug.enable("");
                return namespaces;
            }
            function enabled(name) {
                if (name[name.length - 1] === "*") {
                    return true;
                }
                let i;
                let len;
                for (i = 0, len = createDebug.skips.length; i < len; i++) {
                    if (createDebug.skips[i].test(name)) {
                        return false;
                    }
                }
                for (i = 0, len = createDebug.names.length; i < len; i++) {
                    if (createDebug.names[i].test(name)) {
                        return true;
                    }
                }
                return false;
            }
            function toNamespace(regexp) {
                return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\\.\\*\\?$/, "*");
            }
            function coerce(val) {
                if (val instanceof Error) {
                    return val.stack || val.message;
                }
                return val;
            }
            function destroy() {
                console.warn("Instance method \`debug.destroy()\` is deprecated and no longer does anything. It will be removed in the next major version of \`debug\`.");
            }
            createDebug.enable(createDebug.load());
            return createDebug;
        }
        module.exports = setup;
    },
    824: module => {
        var s = 1e3;
        var m = s * 60;
        var h = m * 60;
        var d = h * 24;
        var w = d * 7;
        var y = d * 365.25;
        module.exports = function(val, options) {
            options = options || {};
            var type = typeof val;
            if (type === "string" && val.length > 0) {
                return parse(val);
            } else if (type === "number" && isFinite(val)) {
                return options.long ? fmtLong(val) : fmtShort(val);
            }
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
        };
        function parse(str) {
            str = String(str);
            if (str.length > 100) {
                return;
            }
            var match = /^(-?(?:\\d+)?\\.?\\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
            if (!match) {
                return;
            }
            var n = parseFloat(match[1]);
            var type = (match[2] || "ms").toLowerCase();
            switch (type) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return n * y;

              case "weeks":
              case "week":
              case "w":
                return n * w;

              case "days":
              case "day":
              case "d":
                return n * d;

              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return n * h;

              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return n * m;

              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return n * s;

              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return n;

              default:
                return undefined;
            }
        }
        function fmtShort(ms) {
            var msAbs = Math.abs(ms);
            if (msAbs >= d) {
                return Math.round(ms / d) + "d";
            }
            if (msAbs >= h) {
                return Math.round(ms / h) + "h";
            }
            if (msAbs >= m) {
                return Math.round(ms / m) + "m";
            }
            if (msAbs >= s) {
                return Math.round(ms / s) + "s";
            }
            return ms + "ms";
        }
        function fmtLong(ms) {
            var msAbs = Math.abs(ms);
            if (msAbs >= d) {
                return plural(ms, msAbs, d, "day");
            }
            if (msAbs >= h) {
                return plural(ms, msAbs, h, "hour");
            }
            if (msAbs >= m) {
                return plural(ms, msAbs, m, "minute");
            }
            if (msAbs >= s) {
                return plural(ms, msAbs, s, "second");
            }
            return ms + " ms";
        }
        function plural(ms, msAbs, n, name) {
            var isPlural = msAbs >= n * 1.5;
            return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
        }
    },
    477: module => {
        module.exports = function(content, workerConstructor, workerOptions, url) {
            var globalScope = self || window;
            try {
                try {
                    var blob;
                    try {
                        blob = new globalScope.Blob([ content ]);
                    } catch (e) {
                        var BlobBuilder = globalScope.BlobBuilder || globalScope.WebKitBlobBuilder || globalScope.MozBlobBuilder || globalScope.MSBlobBuilder;
                        blob = new BlobBuilder;
                        blob.append(content);
                        blob = blob.getBlob();
                    }
                    var URL = globalScope.URL || globalScope.webkitURL;
                    var objectURL = URL.createObjectURL(blob);
                    var worker = new globalScope[workerConstructor](objectURL, workerOptions);
                    URL.revokeObjectURL(objectURL);
                    return worker;
                } catch (e) {
                    return new globalScope[workerConstructor]("data:application/javascript,".concat(encodeURIComponent(content)), workerOptions);
                }
            } catch (e) {
                if (!url) {
                    throw Error("Inline worker is not supported");
                }
                return new globalScope[workerConstructor](url, workerOptions);
            }
        };
    }
};

var __webpack_module_cache__ = {};

function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
        return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
        exports: {}
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
}

(() => {
    __webpack_require__.n = module => {
        var getter = module && module.__esModule ? () => module["default"] : () => module;
        __webpack_require__.d(getter, {
            a: getter
        });
        return getter;
    };
})();

(() => {
    __webpack_require__.d = (exports, definition) => {
        for (var key in definition) {
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: definition[key]
                });
            }
        }
    };
})();

(() => {
    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
})();

var __webpack_exports__ = {};

(() => {
    const proxyMarker = Symbol("Comlink.proxy");
    const createEndpoint = Symbol("Comlink.endpoint");
    const releaseProxy = Symbol("Comlink.releaseProxy");
    const finalizer = Symbol("Comlink.finalizer");
    const throwMarker = Symbol("Comlink.thrown");
    const isObject = val => typeof val === "object" && val !== null || typeof val === "function";
    const proxyTransferHandler = {
        canHandle: val => isObject(val) && val[proxyMarker],
        serialize(obj) {
            const {port1, port2} = new MessageChannel;
            expose(obj, port1);
            return [ port2, [ port2 ] ];
        },
        deserialize(port) {
            port.start();
            return wrap(port);
        }
    };
    const throwTransferHandler = {
        canHandle: value => isObject(value) && throwMarker in value,
        serialize({value}) {
            let serialized;
            if (value instanceof Error) {
                serialized = {
                    isError: true,
                    value: {
                        message: value.message,
                        name: value.name,
                        stack: value.stack
                    }
                };
            } else {
                serialized = {
                    isError: false,
                    value
                };
            }
            return [ serialized, [] ];
        },
        deserialize(serialized) {
            if (serialized.isError) {
                throw Object.assign(new Error(serialized.value.message), serialized.value);
            }
            throw serialized.value;
        }
    };
    const transferHandlers = new Map([ [ "proxy", proxyTransferHandler ], [ "throw", throwTransferHandler ] ]);
    function isAllowedOrigin(allowedOrigins, origin) {
        for (const allowedOrigin of allowedOrigins) {
            if (origin === allowedOrigin || allowedOrigin === "*") {
                return true;
            }
            if (allowedOrigin instanceof RegExp && allowedOrigin.test(origin)) {
                return true;
            }
        }
        return false;
    }
    function expose(obj, ep = globalThis, allowedOrigins = [ "*" ]) {
        ep.addEventListener("message", (function callback(ev) {
            if (!ev || !ev.data) {
                return;
            }
            if (!isAllowedOrigin(allowedOrigins, ev.origin)) {
                console.warn(\`Invalid origin '\${ev.origin}' for comlink proxy\`);
                return;
            }
            const {id, type, path} = Object.assign({
                path: []
            }, ev.data);
            const argumentList = (ev.data.argumentList || []).map(fromWireValue);
            let returnValue;
            try {
                const parent = path.slice(0, -1).reduce(((obj, prop) => obj[prop]), obj);
                const rawValue = path.reduce(((obj, prop) => obj[prop]), obj);
                switch (type) {
                  case "GET":
                    {
                        returnValue = rawValue;
                    }
                    break;

                  case "SET":
                    {
                        parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);
                        returnValue = true;
                    }
                    break;

                  case "APPLY":
                    {
                        returnValue = rawValue.apply(parent, argumentList);
                    }
                    break;

                  case "CONSTRUCT":
                    {
                        const value = new rawValue(...argumentList);
                        returnValue = proxy(value);
                    }
                    break;

                  case "ENDPOINT":
                    {
                        const {port1, port2} = new MessageChannel;
                        expose(obj, port2);
                        returnValue = transfer(port1, [ port1 ]);
                    }
                    break;

                  case "RELEASE":
                    {
                        returnValue = undefined;
                    }
                    break;

                  default:
                    return;
                }
            } catch (value) {
                returnValue = {
                    value,
                    [throwMarker]: 0
                };
            }
            Promise.resolve(returnValue).catch((value => ({
                value,
                [throwMarker]: 0
            }))).then((returnValue => {
                const [wireValue, transferables] = toWireValue(returnValue);
                ep.postMessage(Object.assign(Object.assign({}, wireValue), {
                    id
                }), transferables);
                if (type === "RELEASE") {
                    ep.removeEventListener("message", callback);
                    closeEndPoint(ep);
                    if (finalizer in obj && typeof obj[finalizer] === "function") {
                        obj[finalizer]();
                    }
                }
            })).catch((error => {
                const [wireValue, transferables] = toWireValue({
                    value: new TypeError("Unserializable return value"),
                    [throwMarker]: 0
                });
                ep.postMessage(Object.assign(Object.assign({}, wireValue), {
                    id
                }), transferables);
            }));
        }));
        if (ep.start) {
            ep.start();
        }
    }
    function isMessagePort(endpoint) {
        return endpoint.constructor.name === "MessagePort";
    }
    function closeEndPoint(endpoint) {
        if (isMessagePort(endpoint)) endpoint.close();
    }
    function wrap(ep, target) {
        return createProxy(ep, [], target);
    }
    function throwIfProxyReleased(isReleased) {
        if (isReleased) {
            throw new Error("Proxy has been released and is not useable");
        }
    }
    function releaseEndpoint(ep) {
        return requestResponseMessage(ep, {
            type: "RELEASE"
        }).then((() => {
            closeEndPoint(ep);
        }));
    }
    const proxyCounter = new WeakMap;
    const proxyFinalizers = "FinalizationRegistry" in globalThis && new FinalizationRegistry((ep => {
        const newCount = (proxyCounter.get(ep) || 0) - 1;
        proxyCounter.set(ep, newCount);
        if (newCount === 0) {
            releaseEndpoint(ep);
        }
    }));
    function registerProxy(proxy, ep) {
        const newCount = (proxyCounter.get(ep) || 0) + 1;
        proxyCounter.set(ep, newCount);
        if (proxyFinalizers) {
            proxyFinalizers.register(proxy, ep, proxy);
        }
    }
    function unregisterProxy(proxy) {
        if (proxyFinalizers) {
            proxyFinalizers.unregister(proxy);
        }
    }
    function createProxy(ep, path = [], target = function() {}) {
        let isProxyReleased = false;
        const proxy = new Proxy(target, {
            get(_target, prop) {
                throwIfProxyReleased(isProxyReleased);
                if (prop === releaseProxy) {
                    return () => {
                        unregisterProxy(proxy);
                        releaseEndpoint(ep);
                        isProxyReleased = true;
                    };
                }
                if (prop === "then") {
                    if (path.length === 0) {
                        return {
                            then: () => proxy
                        };
                    }
                    const r = requestResponseMessage(ep, {
                        type: "GET",
                        path: path.map((p => p.toString()))
                    }).then(fromWireValue);
                    return r.then.bind(r);
                }
                return createProxy(ep, [ ...path, prop ]);
            },
            set(_target, prop, rawValue) {
                throwIfProxyReleased(isProxyReleased);
                const [value, transferables] = toWireValue(rawValue);
                return requestResponseMessage(ep, {
                    type: "SET",
                    path: [ ...path, prop ].map((p => p.toString())),
                    value
                }, transferables).then(fromWireValue);
            },
            apply(_target, _thisArg, rawArgumentList) {
                throwIfProxyReleased(isProxyReleased);
                const last = path[path.length - 1];
                if (last === createEndpoint) {
                    return requestResponseMessage(ep, {
                        type: "ENDPOINT"
                    }).then(fromWireValue);
                }
                if (last === "bind") {
                    return createProxy(ep, path.slice(0, -1));
                }
                const [argumentList, transferables] = processArguments(rawArgumentList);
                return requestResponseMessage(ep, {
                    type: "APPLY",
                    path: path.map((p => p.toString())),
                    argumentList
                }, transferables).then(fromWireValue);
            },
            construct(_target, rawArgumentList) {
                throwIfProxyReleased(isProxyReleased);
                const [argumentList, transferables] = processArguments(rawArgumentList);
                return requestResponseMessage(ep, {
                    type: "CONSTRUCT",
                    path: path.map((p => p.toString())),
                    argumentList
                }, transferables).then(fromWireValue);
            }
        });
        registerProxy(proxy, ep);
        return proxy;
    }
    function myFlat(arr) {
        return Array.prototype.concat.apply([], arr);
    }
    function processArguments(argumentList) {
        const processed = argumentList.map(toWireValue);
        return [ processed.map((v => v[0])), myFlat(processed.map((v => v[1]))) ];
    }
    const transferCache = new WeakMap;
    function transfer(obj, transfers) {
        transferCache.set(obj, transfers);
        return obj;
    }
    function proxy(obj) {
        return Object.assign(obj, {
            [proxyMarker]: true
        });
    }
    function windowEndpoint(w, context = globalThis, targetOrigin = "*") {
        return {
            postMessage: (msg, transferables) => w.postMessage(msg, targetOrigin, transferables),
            addEventListener: context.addEventListener.bind(context),
            removeEventListener: context.removeEventListener.bind(context)
        };
    }
    function toWireValue(value) {
        for (const [name, handler] of transferHandlers) {
            if (handler.canHandle(value)) {
                const [serializedValue, transferables] = handler.serialize(value);
                return [ {
                    type: "HANDLER",
                    name,
                    value: serializedValue
                }, transferables ];
            }
        }
        return [ {
            type: "RAW",
            value
        }, transferCache.get(value) || [] ];
    }
    function fromWireValue(value) {
        switch (value.type) {
          case "HANDLER":
            return transferHandlers.get(value.name).deserialize(value.value);

          case "RAW":
            return value.value;
        }
    }
    function requestResponseMessage(ep, msg, transfers) {
        return new Promise((resolve => {
            const id = generateUUID();
            ep.addEventListener("message", (function l(ev) {
                if (!ev.data || !ev.data.id || ev.data.id !== id) {
                    return;
                }
                ep.removeEventListener("message", l);
                resolve(ev.data);
            }));
            if (ep.start) {
                ep.start();
            }
            ep.postMessage(Object.assign({
                id
            }, msg), transfers);
        }));
    }
    function generateUUID() {
        return new Array(4).fill(0).map((() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16))).join("-");
    }
    var browser = __webpack_require__(227);
    var browser_default = __webpack_require__.n(browser);
    function getSharedMemoryAvailable() {
        const globalScope = typeof window !== "undefined" ? window : globalThis;
        return typeof SharedArrayBuffer !== "undefined" && globalScope.crossOriginIsolated;
    }
    function getRemoteBarretenbergWasm(worker) {
        return wrap(worker);
    }
    function getNumCpu() {
        return navigator.hardwareConcurrency;
    }
    function threadLogger() {
        return undefined;
    }
    function killSelf() {
        self.close();
    }
    var inline = __webpack_require__(477);
    var inline_default = __webpack_require__.n(inline);
    function Worker_fn() {
        return inline_default()('/*! For license information please see thread.worker.worker.worker.js.LICENSE.txt */\\nvar __webpack_modules__ = {\\n    227: (module, exports, __webpack_require__) => {\\n        exports.formatArgs = formatArgs;\\n        exports.save = save;\\n        exports.load = load;\\n        exports.useColors = useColors;\\n        exports.storage = localstorage();\\n        exports.destroy = (() => {\\n            let warned = false;\\n            return () => {\\n                if (!warned) {\\n                    warned = true;\\n                    console.warn("Instance method \`debug.destroy()\` is deprecated and no longer does anything. It will be removed in the next major version of \`debug\`.");\\n                }\\n            };\\n        })();\\n        exports.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ];\\n        function useColors() {\\n            if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {\\n                return true;\\n            }\\n            if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\\\\/(\\\\d+)/)) {\\n                return false;\\n            }\\n            return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\\\\/(\\\\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\\\\/(\\\\d+)/);\\n        }\\n        function formatArgs(args) {\\n            args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);\\n            if (!this.useColors) {\\n                return;\\n            }\\n            const c = "color: " + this.color;\\n            args.splice(1, 0, c, "color: inherit");\\n            let index = 0;\\n            let lastC = 0;\\n            args[0].replace(/%[a-zA-Z%]/g, (match => {\\n                if (match === "%%") {\\n                    return;\\n                }\\n                index++;\\n                if (match === "%c") {\\n                    lastC = index;\\n                }\\n            }));\\n            args.splice(lastC, 0, c);\\n        }\\n        exports.log = console.debug || console.log || (() => {});\\n        function save(namespaces) {\\n            try {\\n                if (namespaces) {\\n                    exports.storage.setItem("debug", namespaces);\\n                } else {\\n                    exports.storage.removeItem("debug");\\n                }\\n            } catch (error) {}\\n        }\\n        function load() {\\n            let r;\\n            try {\\n                r = exports.storage.getItem("debug");\\n            } catch (error) {}\\n            if (!r && typeof process !== "undefined" && "env" in process) {\\n                r = process.env.DEBUG;\\n            }\\n            return r;\\n        }\\n        function localstorage() {\\n            try {\\n                return localStorage;\\n            } catch (error) {}\\n        }\\n        module.exports = __webpack_require__(447)(exports);\\n        const {formatters} = module.exports;\\n        formatters.j = function(v) {\\n            try {\\n                return JSON.stringify(v);\\n            } catch (error) {\\n                return "[UnexpectedJSONParseError]: " + error.message;\\n            }\\n        };\\n    },\\n    447: (module, __unused_webpack_exports, __webpack_require__) => {\\n        function setup(env) {\\n            createDebug.debug = createDebug;\\n            createDebug.default = createDebug;\\n            createDebug.coerce = coerce;\\n            createDebug.disable = disable;\\n            createDebug.enable = enable;\\n            createDebug.enabled = enabled;\\n            createDebug.humanize = __webpack_require__(824);\\n            createDebug.destroy = destroy;\\n            Object.keys(env).forEach((key => {\\n                createDebug[key] = env[key];\\n            }));\\n            createDebug.names = [];\\n            createDebug.skips = [];\\n            createDebug.formatters = {};\\n            function selectColor(namespace) {\\n                let hash = 0;\\n                for (let i = 0; i < namespace.length; i++) {\\n                    hash = (hash << 5) - hash + namespace.charCodeAt(i);\\n                    hash |= 0;\\n                }\\n                return createDebug.colors[Math.abs(hash) % createDebug.colors.length];\\n            }\\n            createDebug.selectColor = selectColor;\\n            function createDebug(namespace) {\\n                let prevTime;\\n                let enableOverride = null;\\n                let namespacesCache;\\n                let enabledCache;\\n                function debug(...args) {\\n                    if (!debug.enabled) {\\n                        return;\\n                    }\\n                    const self = debug;\\n                    const curr = Number(new Date);\\n                    const ms = curr - (prevTime || curr);\\n                    self.diff = ms;\\n                    self.prev = prevTime;\\n                    self.curr = curr;\\n                    prevTime = curr;\\n                    args[0] = createDebug.coerce(args[0]);\\n                    if (typeof args[0] !== "string") {\\n                        args.unshift("%O");\\n                    }\\n                    let index = 0;\\n                    args[0] = args[0].replace(/%([a-zA-Z%])/g, ((match, format) => {\\n                        if (match === "%%") {\\n                            return "%";\\n                        }\\n                        index++;\\n                        const formatter = createDebug.formatters[format];\\n                        if (typeof formatter === "function") {\\n                            const val = args[index];\\n                            match = formatter.call(self, val);\\n                            args.splice(index, 1);\\n                            index--;\\n                        }\\n                        return match;\\n                    }));\\n                    createDebug.formatArgs.call(self, args);\\n                    const logFn = self.log || createDebug.log;\\n                    logFn.apply(self, args);\\n                }\\n                debug.namespace = namespace;\\n                debug.useColors = createDebug.useColors();\\n                debug.color = createDebug.selectColor(namespace);\\n                debug.extend = extend;\\n                debug.destroy = createDebug.destroy;\\n                Object.defineProperty(debug, "enabled", {\\n                    enumerable: true,\\n                    configurable: false,\\n                    get: () => {\\n                        if (enableOverride !== null) {\\n                            return enableOverride;\\n                        }\\n                        if (namespacesCache !== createDebug.namespaces) {\\n                            namespacesCache = createDebug.namespaces;\\n                            enabledCache = createDebug.enabled(namespace);\\n                        }\\n                        return enabledCache;\\n                    },\\n                    set: v => {\\n                        enableOverride = v;\\n                    }\\n                });\\n                if (typeof createDebug.init === "function") {\\n                    createDebug.init(debug);\\n                }\\n                return debug;\\n            }\\n            function extend(namespace, delimiter) {\\n                const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);\\n                newDebug.log = this.log;\\n                return newDebug;\\n            }\\n            function enable(namespaces) {\\n                createDebug.save(namespaces);\\n                createDebug.namespaces = namespaces;\\n                createDebug.names = [];\\n                createDebug.skips = [];\\n                let i;\\n                const split = (typeof namespaces === "string" ? namespaces : "").split(/[\\\\s,]+/);\\n                const len = split.length;\\n                for (i = 0; i < len; i++) {\\n                    if (!split[i]) {\\n                        continue;\\n                    }\\n                    namespaces = split[i].replace(/\\\\*/g, ".*?");\\n                    if (namespaces[0] === "-") {\\n                        createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));\\n                    } else {\\n                        createDebug.names.push(new RegExp("^" + namespaces + "$"));\\n                    }\\n                }\\n            }\\n            function disable() {\\n                const namespaces = [ ...createDebug.names.map(toNamespace), ...createDebug.skips.map(toNamespace).map((namespace => "-" + namespace)) ].join(",");\\n                createDebug.enable("");\\n                return namespaces;\\n            }\\n            function enabled(name) {\\n                if (name[name.length - 1] === "*") {\\n                    return true;\\n                }\\n                let i;\\n                let len;\\n                for (i = 0, len = createDebug.skips.length; i < len; i++) {\\n                    if (createDebug.skips[i].test(name)) {\\n                        return false;\\n                    }\\n                }\\n                for (i = 0, len = createDebug.names.length; i < len; i++) {\\n                    if (createDebug.names[i].test(name)) {\\n                        return true;\\n                    }\\n                }\\n                return false;\\n            }\\n            function toNamespace(regexp) {\\n                return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\\\\.\\\\*\\\\?$/, "*");\\n            }\\n            function coerce(val) {\\n                if (val instanceof Error) {\\n                    return val.stack || val.message;\\n                }\\n                return val;\\n            }\\n            function destroy() {\\n                console.warn("Instance method \`debug.destroy()\` is deprecated and no longer does anything. It will be removed in the next major version of \`debug\`.");\\n            }\\n            createDebug.enable(createDebug.load());\\n            return createDebug;\\n        }\\n        module.exports = setup;\\n    },\\n    824: module => {\\n        var s = 1e3;\\n        var m = s * 60;\\n        var h = m * 60;\\n        var d = h * 24;\\n        var w = d * 7;\\n        var y = d * 365.25;\\n        module.exports = function(val, options) {\\n            options = options || {};\\n            var type = typeof val;\\n            if (type === "string" && val.length > 0) {\\n                return parse(val);\\n            } else if (type === "number" && isFinite(val)) {\\n                return options.long ? fmtLong(val) : fmtShort(val);\\n            }\\n            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));\\n        };\\n        function parse(str) {\\n            str = String(str);\\n            if (str.length > 100) {\\n                return;\\n            }\\n            var match = /^(-?(?:\\\\d+)?\\\\.?\\\\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);\\n            if (!match) {\\n                return;\\n            }\\n            var n = parseFloat(match[1]);\\n            var type = (match[2] || "ms").toLowerCase();\\n            switch (type) {\\n              case "years":\\n              case "year":\\n              case "yrs":\\n              case "yr":\\n              case "y":\\n                return n * y;\\n\\n              case "weeks":\\n              case "week":\\n              case "w":\\n                return n * w;\\n\\n              case "days":\\n              case "day":\\n              case "d":\\n                return n * d;\\n\\n              case "hours":\\n              case "hour":\\n              case "hrs":\\n              case "hr":\\n              case "h":\\n                return n * h;\\n\\n              case "minutes":\\n              case "minute":\\n              case "mins":\\n              case "min":\\n              case "m":\\n                return n * m;\\n\\n              case "seconds":\\n              case "second":\\n              case "secs":\\n              case "sec":\\n              case "s":\\n                return n * s;\\n\\n              case "milliseconds":\\n              case "millisecond":\\n              case "msecs":\\n              case "msec":\\n              case "ms":\\n                return n;\\n\\n              default:\\n                return undefined;\\n            }\\n        }\\n        function fmtShort(ms) {\\n            var msAbs = Math.abs(ms);\\n            if (msAbs >= d) {\\n                return Math.round(ms / d) + "d";\\n            }\\n            if (msAbs >= h) {\\n                return Math.round(ms / h) + "h";\\n            }\\n            if (msAbs >= m) {\\n                return Math.round(ms / m) + "m";\\n            }\\n            if (msAbs >= s) {\\n                return Math.round(ms / s) + "s";\\n            }\\n            return ms + "ms";\\n        }\\n        function fmtLong(ms) {\\n            var msAbs = Math.abs(ms);\\n            if (msAbs >= d) {\\n                return plural(ms, msAbs, d, "day");\\n            }\\n            if (msAbs >= h) {\\n                return plural(ms, msAbs, h, "hour");\\n            }\\n            if (msAbs >= m) {\\n                return plural(ms, msAbs, m, "minute");\\n            }\\n            if (msAbs >= s) {\\n                return plural(ms, msAbs, s, "second");\\n            }\\n            return ms + " ms";\\n        }\\n        function plural(ms, msAbs, n, name) {\\n            var isPlural = msAbs >= n * 1.5;\\n            return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");\\n        }\\n    }\\n};\\n\\nvar __webpack_module_cache__ = {};\\n\\nfunction __webpack_require__(moduleId) {\\n    var cachedModule = __webpack_module_cache__[moduleId];\\n    if (cachedModule !== undefined) {\\n        return cachedModule.exports;\\n    }\\n    var module = __webpack_module_cache__[moduleId] = {\\n        exports: {}\\n    };\\n    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);\\n    return module.exports;\\n}\\n\\n(() => {\\n    __webpack_require__.n = module => {\\n        var getter = module && module.__esModule ? () => module["default"] : () => module;\\n        __webpack_require__.d(getter, {\\n            a: getter\\n        });\\n        return getter;\\n    };\\n})();\\n\\n(() => {\\n    __webpack_require__.d = (exports, definition) => {\\n        for (var key in definition) {\\n            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {\\n                Object.defineProperty(exports, key, {\\n                    enumerable: true,\\n                    get: definition[key]\\n                });\\n            }\\n        }\\n    };\\n})();\\n\\n(() => {\\n    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);\\n})();\\n\\nvar __webpack_exports__ = {};\\n\\n(() => {\\n    const proxyMarker = Symbol("Comlink.proxy");\\n    const createEndpoint = Symbol("Comlink.endpoint");\\n    const releaseProxy = Symbol("Comlink.releaseProxy");\\n    const finalizer = Symbol("Comlink.finalizer");\\n    const throwMarker = Symbol("Comlink.thrown");\\n    const isObject = val => typeof val === "object" && val !== null || typeof val === "function";\\n    const proxyTransferHandler = {\\n        canHandle: val => isObject(val) && val[proxyMarker],\\n        serialize(obj) {\\n            const {port1, port2} = new MessageChannel;\\n            expose(obj, port1);\\n            return [ port2, [ port2 ] ];\\n        },\\n        deserialize(port) {\\n            port.start();\\n            return comlink_wrap(port);\\n        }\\n    };\\n    const throwTransferHandler = {\\n        canHandle: value => isObject(value) && throwMarker in value,\\n        serialize({value}) {\\n            let serialized;\\n            if (value instanceof Error) {\\n                serialized = {\\n                    isError: true,\\n                    value: {\\n                        message: value.message,\\n                        name: value.name,\\n                        stack: value.stack\\n                    }\\n                };\\n            } else {\\n                serialized = {\\n                    isError: false,\\n                    value\\n                };\\n            }\\n            return [ serialized, [] ];\\n        },\\n        deserialize(serialized) {\\n            if (serialized.isError) {\\n                throw Object.assign(new Error(serialized.value.message), serialized.value);\\n            }\\n            throw serialized.value;\\n        }\\n    };\\n    const transferHandlers = new Map([ [ "proxy", proxyTransferHandler ], [ "throw", throwTransferHandler ] ]);\\n    function isAllowedOrigin(allowedOrigins, origin) {\\n        for (const allowedOrigin of allowedOrigins) {\\n            if (origin === allowedOrigin || allowedOrigin === "*") {\\n                return true;\\n            }\\n            if (allowedOrigin instanceof RegExp && allowedOrigin.test(origin)) {\\n                return true;\\n            }\\n        }\\n        return false;\\n    }\\n    function expose(obj, ep = globalThis, allowedOrigins = [ "*" ]) {\\n        ep.addEventListener("message", (function callback(ev) {\\n            if (!ev || !ev.data) {\\n                return;\\n            }\\n            if (!isAllowedOrigin(allowedOrigins, ev.origin)) {\\n                console.warn(\`Invalid origin \\'\${ev.origin}\\' for comlink proxy\`);\\n                return;\\n            }\\n            const {id, type, path} = Object.assign({\\n                path: []\\n            }, ev.data);\\n            const argumentList = (ev.data.argumentList || []).map(fromWireValue);\\n            let returnValue;\\n            try {\\n                const parent = path.slice(0, -1).reduce(((obj, prop) => obj[prop]), obj);\\n                const rawValue = path.reduce(((obj, prop) => obj[prop]), obj);\\n                switch (type) {\\n                  case "GET":\\n                    {\\n                        returnValue = rawValue;\\n                    }\\n                    break;\\n\\n                  case "SET":\\n                    {\\n                        parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);\\n                        returnValue = true;\\n                    }\\n                    break;\\n\\n                  case "APPLY":\\n                    {\\n                        returnValue = rawValue.apply(parent, argumentList);\\n                    }\\n                    break;\\n\\n                  case "CONSTRUCT":\\n                    {\\n                        const value = new rawValue(...argumentList);\\n                        returnValue = proxy(value);\\n                    }\\n                    break;\\n\\n                  case "ENDPOINT":\\n                    {\\n                        const {port1, port2} = new MessageChannel;\\n                        expose(obj, port2);\\n                        returnValue = transfer(port1, [ port1 ]);\\n                    }\\n                    break;\\n\\n                  case "RELEASE":\\n                    {\\n                        returnValue = undefined;\\n                    }\\n                    break;\\n\\n                  default:\\n                    return;\\n                }\\n            } catch (value) {\\n                returnValue = {\\n                    value,\\n                    [throwMarker]: 0\\n                };\\n            }\\n            Promise.resolve(returnValue).catch((value => ({\\n                value,\\n                [throwMarker]: 0\\n            }))).then((returnValue => {\\n                const [wireValue, transferables] = toWireValue(returnValue);\\n                ep.postMessage(Object.assign(Object.assign({}, wireValue), {\\n                    id\\n                }), transferables);\\n                if (type === "RELEASE") {\\n                    ep.removeEventListener("message", callback);\\n                    closeEndPoint(ep);\\n                    if (finalizer in obj && typeof obj[finalizer] === "function") {\\n                        obj[finalizer]();\\n                    }\\n                }\\n            })).catch((error => {\\n                const [wireValue, transferables] = toWireValue({\\n                    value: new TypeError("Unserializable return value"),\\n                    [throwMarker]: 0\\n                });\\n                ep.postMessage(Object.assign(Object.assign({}, wireValue), {\\n                    id\\n                }), transferables);\\n            }));\\n        }));\\n        if (ep.start) {\\n            ep.start();\\n        }\\n    }\\n    function isMessagePort(endpoint) {\\n        return endpoint.constructor.name === "MessagePort";\\n    }\\n    function closeEndPoint(endpoint) {\\n        if (isMessagePort(endpoint)) endpoint.close();\\n    }\\n    function comlink_wrap(ep, target) {\\n        return createProxy(ep, [], target);\\n    }\\n    function throwIfProxyReleased(isReleased) {\\n        if (isReleased) {\\n            throw new Error("Proxy has been released and is not useable");\\n        }\\n    }\\n    function releaseEndpoint(ep) {\\n        return requestResponseMessage(ep, {\\n            type: "RELEASE"\\n        }).then((() => {\\n            closeEndPoint(ep);\\n        }));\\n    }\\n    const proxyCounter = new WeakMap;\\n    const proxyFinalizers = "FinalizationRegistry" in globalThis && new FinalizationRegistry((ep => {\\n        const newCount = (proxyCounter.get(ep) || 0) - 1;\\n        proxyCounter.set(ep, newCount);\\n        if (newCount === 0) {\\n            releaseEndpoint(ep);\\n        }\\n    }));\\n    function registerProxy(proxy, ep) {\\n        const newCount = (proxyCounter.get(ep) || 0) + 1;\\n        proxyCounter.set(ep, newCount);\\n        if (proxyFinalizers) {\\n            proxyFinalizers.register(proxy, ep, proxy);\\n        }\\n    }\\n    function unregisterProxy(proxy) {\\n        if (proxyFinalizers) {\\n            proxyFinalizers.unregister(proxy);\\n        }\\n    }\\n    function createProxy(ep, path = [], target = function() {}) {\\n        let isProxyReleased = false;\\n        const proxy = new Proxy(target, {\\n            get(_target, prop) {\\n                throwIfProxyReleased(isProxyReleased);\\n                if (prop === releaseProxy) {\\n                    return () => {\\n                        unregisterProxy(proxy);\\n                        releaseEndpoint(ep);\\n                        isProxyReleased = true;\\n                    };\\n                }\\n                if (prop === "then") {\\n                    if (path.length === 0) {\\n                        return {\\n                            then: () => proxy\\n                        };\\n                    }\\n                    const r = requestResponseMessage(ep, {\\n                        type: "GET",\\n                        path: path.map((p => p.toString()))\\n                    }).then(fromWireValue);\\n                    return r.then.bind(r);\\n                }\\n                return createProxy(ep, [ ...path, prop ]);\\n            },\\n            set(_target, prop, rawValue) {\\n                throwIfProxyReleased(isProxyReleased);\\n                const [value, transferables] = toWireValue(rawValue);\\n                return requestResponseMessage(ep, {\\n                    type: "SET",\\n                    path: [ ...path, prop ].map((p => p.toString())),\\n                    value\\n                }, transferables).then(fromWireValue);\\n            },\\n            apply(_target, _thisArg, rawArgumentList) {\\n                throwIfProxyReleased(isProxyReleased);\\n                const last = path[path.length - 1];\\n                if (last === createEndpoint) {\\n                    return requestResponseMessage(ep, {\\n                        type: "ENDPOINT"\\n                    }).then(fromWireValue);\\n                }\\n                if (last === "bind") {\\n                    return createProxy(ep, path.slice(0, -1));\\n                }\\n                const [argumentList, transferables] = processArguments(rawArgumentList);\\n                return requestResponseMessage(ep, {\\n                    type: "APPLY",\\n                    path: path.map((p => p.toString())),\\n                    argumentList\\n                }, transferables).then(fromWireValue);\\n            },\\n            construct(_target, rawArgumentList) {\\n                throwIfProxyReleased(isProxyReleased);\\n                const [argumentList, transferables] = processArguments(rawArgumentList);\\n                return requestResponseMessage(ep, {\\n                    type: "CONSTRUCT",\\n                    path: path.map((p => p.toString())),\\n                    argumentList\\n                }, transferables).then(fromWireValue);\\n            }\\n        });\\n        registerProxy(proxy, ep);\\n        return proxy;\\n    }\\n    function myFlat(arr) {\\n        return Array.prototype.concat.apply([], arr);\\n    }\\n    function processArguments(argumentList) {\\n        const processed = argumentList.map(toWireValue);\\n        return [ processed.map((v => v[0])), myFlat(processed.map((v => v[1]))) ];\\n    }\\n    const transferCache = new WeakMap;\\n    function transfer(obj, transfers) {\\n        transferCache.set(obj, transfers);\\n        return obj;\\n    }\\n    function proxy(obj) {\\n        return Object.assign(obj, {\\n            [proxyMarker]: true\\n        });\\n    }\\n    function windowEndpoint(w, context = globalThis, targetOrigin = "*") {\\n        return {\\n            postMessage: (msg, transferables) => w.postMessage(msg, targetOrigin, transferables),\\n            addEventListener: context.addEventListener.bind(context),\\n            removeEventListener: context.removeEventListener.bind(context)\\n        };\\n    }\\n    function toWireValue(value) {\\n        for (const [name, handler] of transferHandlers) {\\n            if (handler.canHandle(value)) {\\n                const [serializedValue, transferables] = handler.serialize(value);\\n                return [ {\\n                    type: "HANDLER",\\n                    name,\\n                    value: serializedValue\\n                }, transferables ];\\n            }\\n        }\\n        return [ {\\n            type: "RAW",\\n            value\\n        }, transferCache.get(value) || [] ];\\n    }\\n    function fromWireValue(value) {\\n        switch (value.type) {\\n          case "HANDLER":\\n            return transferHandlers.get(value.name).deserialize(value.value);\\n\\n          case "RAW":\\n            return value.value;\\n        }\\n    }\\n    function requestResponseMessage(ep, msg, transfers) {\\n        return new Promise((resolve => {\\n            const id = generateUUID();\\n            ep.addEventListener("message", (function l(ev) {\\n                if (!ev.data || !ev.data.id || ev.data.id !== id) {\\n                    return;\\n                }\\n                ep.removeEventListener("message", l);\\n                resolve(ev.data);\\n            }));\\n            if (ep.start) {\\n                ep.start();\\n            }\\n            ep.postMessage(Object.assign({\\n                id\\n            }, msg), transfers);\\n        }));\\n    }\\n    function generateUUID() {\\n        return new Array(4).fill(0).map((() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16))).join("-");\\n    }\\n    function getSharedMemoryAvailable() {\\n        const globalScope = typeof window !== "undefined" ? window : globalThis;\\n        return typeof SharedArrayBuffer !== "undefined" && globalScope.crossOriginIsolated;\\n    }\\n    function getRemoteBarretenbergWasm(worker) {\\n        return wrap(worker);\\n    }\\n    function getNumCpu() {\\n        return navigator.hardwareConcurrency;\\n    }\\n    function threadLogger() {\\n        return undefined;\\n    }\\n    function killSelf() {\\n        self.close();\\n    }\\n    var browser = __webpack_require__(227);\\n    var browser_default = __webpack_require__.n(browser);\\n    const randomBytes = len => {\\n        const getWebCrypto = () => {\\n            if (typeof window !== "undefined" && window.crypto) return window.crypto;\\n            if (typeof globalThis !== "undefined" && globalThis.crypto) return globalThis.crypto;\\n            return undefined;\\n        };\\n        const crypto = getWebCrypto();\\n        if (!crypto) {\\n            throw new Error("randomBytes UnsupportedEnvironment");\\n        }\\n        const buf = new Uint8Array(len);\\n        const MAX_BYTES = 65536;\\n        if (len > MAX_BYTES) {\\n            for (let generated = 0; generated < len; generated += MAX_BYTES) {\\n                crypto.getRandomValues(buf.subarray(generated, generated + MAX_BYTES));\\n            }\\n        } else {\\n            crypto.getRandomValues(buf);\\n        }\\n        return buf;\\n    };\\n    class BarretenbergWasmBase {\\n        constructor() {\\n            this.memStore = {};\\n            this.logger = browser_default()("bb.js:bb_wasm_base");\\n        }\\n        getImportObj(memory) {\\n            const importObj = {\\n                wasi_snapshot_preview1: {\\n                    random_get: (out, length) => {\\n                        out = out >>> 0;\\n                        const randomData = randomBytes(length);\\n                        const mem = this.getMemory();\\n                        mem.set(randomData, out);\\n                    },\\n                    clock_time_get: (a1, a2, out) => {\\n                        out = out >>> 0;\\n                        const ts = BigInt((new Date).getTime()) * 1000000n;\\n                        const view = new DataView(this.getMemory().buffer);\\n                        view.setBigUint64(out, ts, true);\\n                    },\\n                    proc_exit: () => {\\n                        this.logger("PANIC: proc_exit was called.");\\n                        throw new Error;\\n                    }\\n                },\\n                env: {\\n                    logstr: addr => {\\n                        const str = this.stringFromAddress(addr);\\n                        const m = this.getMemory();\\n                        const str2 = \`\${str} (mem: \${(m.length / (1024 * 1024)).toFixed(2)}MiB)\`;\\n                        this.logger(str2);\\n                    },\\n                    get_data: (keyAddr, outBufAddr) => {\\n                        const key = this.stringFromAddress(keyAddr);\\n                        outBufAddr = outBufAddr >>> 0;\\n                        const data = this.memStore[key];\\n                        if (!data) {\\n                            this.logger(\`get_data miss \${key}\`);\\n                            return;\\n                        }\\n                        this.writeMemory(outBufAddr, data);\\n                    },\\n                    set_data: (keyAddr, dataAddr, dataLength) => {\\n                        const key = this.stringFromAddress(keyAddr);\\n                        dataAddr = dataAddr >>> 0;\\n                        this.memStore[key] = this.getMemorySlice(dataAddr, dataAddr + dataLength);\\n                    },\\n                    memory\\n                }\\n            };\\n            return importObj;\\n        }\\n        exports() {\\n            return this.instance.exports;\\n        }\\n        call(name, ...args) {\\n            if (!this.exports()[name]) {\\n                throw new Error(\`WASM function \${name} not found.\`);\\n            }\\n            try {\\n                return this.exports()[name](...args) >>> 0;\\n            } catch (err) {\\n                const message = \`WASM function \${name} aborted, error: \${err}\`;\\n                this.logger(message);\\n                this.logger(err.stack);\\n                throw err;\\n            }\\n        }\\n        memSize() {\\n            return this.getMemory().length;\\n        }\\n        getMemorySlice(start, end) {\\n            return this.getMemory().subarray(start, end).slice();\\n        }\\n        writeMemory(offset, arr) {\\n            const mem = this.getMemory();\\n            mem.set(arr, offset);\\n        }\\n        getMemory() {\\n            return new Uint8Array(this.memory.buffer);\\n        }\\n        stringFromAddress(addr) {\\n            addr = addr >>> 0;\\n            const m = this.getMemory();\\n            let i = addr;\\n            for (;m[i] !== 0; ++i) ;\\n            const textDecoder = new TextDecoder("ascii");\\n            return textDecoder.decode(m.slice(addr, i));\\n        }\\n    }\\n    class BarretenbergWasmThread extends BarretenbergWasmBase {\\n        async initThread(module, memory) {\\n            this.logger = threadLogger() || this.logger;\\n            this.memory = memory;\\n            this.instance = await WebAssembly.instantiate(module, this.getImportObj(this.memory));\\n        }\\n        destroy() {\\n            killSelf();\\n        }\\n        getImportObj(memory) {\\n            const baseImports = super.getImportObj(memory);\\n            return {\\n                ...baseImports,\\n                wasi: {\\n                    "thread-spawn": () => {\\n                        this.logger("PANIC: threads cannot spawn threads!");\\n                        this.logger((new Error).stack);\\n                        killSelf();\\n                    }\\n                },\\n                env: {\\n                    ...baseImports.env,\\n                    env_hardware_concurrency: () => 1\\n                }\\n            };\\n        }\\n    }\\n    self.onmessage = function(e) {\\n        if (e.data.debug) {\\n            browser_default().enable(e.data.debug);\\n        }\\n    };\\n    expose(new BarretenbergWasmThread);\\n    self.postMessage({\\n        ready: true\\n    });\\n    const thread_worker = null;\\n})();', "Worker", undefined, undefined);
    }
    function createThreadWorker() {
        const worker = new Worker_fn;
        const debugStr = browser_default().disable();
        browser_default().enable(debugStr);
        worker.postMessage({
            debug: debugStr
        });
        return worker;
    }
    const randomBytes = len => {
        const getWebCrypto = () => {
            if (typeof window !== "undefined" && window.crypto) return window.crypto;
            if (typeof globalThis !== "undefined" && globalThis.crypto) return globalThis.crypto;
            return undefined;
        };
        const crypto = getWebCrypto();
        if (!crypto) {
            throw new Error("randomBytes UnsupportedEnvironment");
        }
        const buf = new Uint8Array(len);
        const MAX_BYTES = 65536;
        if (len > MAX_BYTES) {
            for (let generated = 0; generated < len; generated += MAX_BYTES) {
                crypto.getRandomValues(buf.subarray(generated, generated + MAX_BYTES));
            }
        } else {
            crypto.getRandomValues(buf);
        }
        return buf;
    };
    class BarretenbergWasmBase {
        constructor() {
            this.memStore = {};
            this.logger = browser_default()("bb.js:bb_wasm_base");
        }
        getImportObj(memory) {
            const importObj = {
                wasi_snapshot_preview1: {
                    random_get: (out, length) => {
                        out = out >>> 0;
                        const randomData = randomBytes(length);
                        const mem = this.getMemory();
                        mem.set(randomData, out);
                    },
                    clock_time_get: (a1, a2, out) => {
                        out = out >>> 0;
                        const ts = BigInt((new Date).getTime()) * 1000000n;
                        const view = new DataView(this.getMemory().buffer);
                        view.setBigUint64(out, ts, true);
                    },
                    proc_exit: () => {
                        this.logger("PANIC: proc_exit was called.");
                        throw new Error;
                    }
                },
                env: {
                    logstr: addr => {
                        const str = this.stringFromAddress(addr);
                        const m = this.getMemory();
                        const str2 = \`\${str} (mem: \${(m.length / (1024 * 1024)).toFixed(2)}MiB)\`;
                        this.logger(str2);
                    },
                    get_data: (keyAddr, outBufAddr) => {
                        const key = this.stringFromAddress(keyAddr);
                        outBufAddr = outBufAddr >>> 0;
                        const data = this.memStore[key];
                        if (!data) {
                            this.logger(\`get_data miss \${key}\`);
                            return;
                        }
                        this.writeMemory(outBufAddr, data);
                    },
                    set_data: (keyAddr, dataAddr, dataLength) => {
                        const key = this.stringFromAddress(keyAddr);
                        dataAddr = dataAddr >>> 0;
                        this.memStore[key] = this.getMemorySlice(dataAddr, dataAddr + dataLength);
                    },
                    memory
                }
            };
            return importObj;
        }
        exports() {
            return this.instance.exports;
        }
        call(name, ...args) {
            if (!this.exports()[name]) {
                throw new Error(\`WASM function \${name} not found.\`);
            }
            try {
                return this.exports()[name](...args) >>> 0;
            } catch (err) {
                const message = \`WASM function \${name} aborted, error: \${err}\`;
                this.logger(message);
                this.logger(err.stack);
                throw err;
            }
        }
        memSize() {
            return this.getMemory().length;
        }
        getMemorySlice(start, end) {
            return this.getMemory().subarray(start, end).slice();
        }
        writeMemory(offset, arr) {
            const mem = this.getMemory();
            mem.set(arr, offset);
        }
        getMemory() {
            return new Uint8Array(this.memory.buffer);
        }
        stringFromAddress(addr) {
            addr = addr >>> 0;
            const m = this.getMemory();
            let i = addr;
            for (;m[i] !== 0; ++i) ;
            const textDecoder = new TextDecoder("ascii");
            return textDecoder.decode(m.slice(addr, i));
        }
    }
    class HeapAllocator {
        constructor(wasm) {
            this.wasm = wasm;
            this.allocs = [];
            this.inScratchRemaining = 1024;
            this.outScratchRemaining = 1024;
        }
        getInputs(buffers) {
            return buffers.map((bufOrNum => {
                if (typeof bufOrNum === "object") {
                    if (bufOrNum.length <= this.inScratchRemaining) {
                        const ptr = this.inScratchRemaining -= bufOrNum.length;
                        this.wasm.writeMemory(ptr, bufOrNum);
                        return ptr;
                    } else {
                        const ptr = this.wasm.call("bbmalloc", bufOrNum.length);
                        this.wasm.writeMemory(ptr, bufOrNum);
                        this.allocs.push(ptr);
                        return ptr;
                    }
                } else {
                    return bufOrNum;
                }
            }));
        }
        getOutputPtrs(outLens) {
            return outLens.map((len => {
                const size = len || 4;
                if (size <= this.outScratchRemaining) {
                    return this.outScratchRemaining -= size;
                } else {
                    const ptr = this.wasm.call("bbmalloc", size);
                    this.allocs.push(ptr);
                    return ptr;
                }
            }));
        }
        addOutputPtr(ptr) {
            if (ptr >= 1024) {
                this.allocs.push(ptr);
            }
        }
        freeAll() {
            for (const ptr of this.allocs) {
                this.wasm.call("bbfree", ptr);
            }
        }
    }
    class BarretenbergWasmMain extends BarretenbergWasmBase {
        constructor() {
            super(...arguments);
            this.workers = [];
            this.remoteWasms = [];
            this.nextWorker = 0;
            this.nextThreadId = 1;
        }
        getNumThreads() {
            return this.workers.length + 1;
        }
        async init(module, threads = Math.min(getNumCpu(), BarretenbergWasmMain.MAX_THREADS), logger = browser_default()("bb.js:bb_wasm"), initial = 32, maximum = 2 ** 16) {
            this.logger = logger;
            const initialMb = initial * 2 ** 16 / (1024 * 1024);
            const maxMb = maximum * 2 ** 16 / (1024 * 1024);
            const shared = getSharedMemoryAvailable();
            this.logger(\`Initializing bb wasm: initial memory \${initial} pages \${initialMb}MiB; \` + \`max memory: \${maximum} pages, \${maxMb}MiB; \` + \`threads: \${threads}; shared memory: \${shared}\`);
            this.logger("saleel: calling new WebAssembly.Memory");
            this.memory = new WebAssembly.Memory({
                initial,
                maximum,
                shared
            });
            this.logger("saleel: calling new WebAssembly.Memory done");
            this.logger("saleel: calling WebAssembly.instantiate");
            const instance = await WebAssembly.instantiate(module, this.getImportObj(this.memory));
            this.logger("saleel: calling WebAssembly.instantiate done");
            this.instance = instance;
            this.call("_initialize");
            if (threads > 1) {
                this.logger(\`Creating \${threads} worker threads\`);
                this.workers = await Promise.all(Array.from({
                    length: threads - 1
                }).map(createThreadWorker));
                this.remoteWasms = await Promise.all(this.workers.map(getRemoteBarretenbergWasm));
                await Promise.all(this.remoteWasms.map((w => w.initThread(module, this.memory))));
            }
        }
        async destroy() {
            await Promise.all(this.workers.map((w => w.terminate())));
        }
        getImportObj(memory) {
            const baseImports = super.getImportObj(memory);
            return {
                ...baseImports,
                wasi: {
                    "thread-spawn": arg => {
                        arg = arg >>> 0;
                        const id = this.nextThreadId++;
                        const worker = this.nextWorker++ % this.remoteWasms.length;
                        this.remoteWasms[worker].call("wasi_thread_start", id, arg).catch(this.logger);
                        return id;
                    }
                },
                env: {
                    ...baseImports.env,
                    env_hardware_concurrency: () => this.remoteWasms.length + 1
                }
            };
        }
        callWasmExport(funcName, inArgs, outLens) {
            const alloc = new HeapAllocator(this);
            const inPtrs = alloc.getInputs(inArgs);
            const outPtrs = alloc.getOutputPtrs(outLens);
            this.call(funcName, ...inPtrs, ...outPtrs);
            const outArgs = this.getOutputArgs(outLens, outPtrs, alloc);
            alloc.freeAll();
            return outArgs;
        }
        getOutputArgs(outLens, outPtrs, alloc) {
            return outLens.map(((len, i) => {
                if (len) {
                    return this.getMemorySlice(outPtrs[i], outPtrs[i] + len);
                }
                const slice = this.getMemorySlice(outPtrs[i], outPtrs[i] + 4);
                const ptr = new DataView(slice.buffer, slice.byteOffset, slice.byteLength).getUint32(0, true);
                alloc.addOutputPtr(ptr);
                const lslice = this.getMemorySlice(ptr, ptr + 4);
                const length = new DataView(lslice.buffer, lslice.byteOffset, lslice.byteLength).getUint32(0, false);
                return this.getMemorySlice(ptr + 4, ptr + 4 + length);
            }));
        }
    }
    BarretenbergWasmMain.MAX_THREADS = 32;
    self.onmessage = function(e) {
        if (e.data.debug) {
            browser_default().enable(e.data.debug);
        }
    };
    expose(new BarretenbergWasmMain);
    self.postMessage({
        ready: true
    });
    const main_worker = null;
})();`,"Worker",void 0,void 0)}function ml(){const t=new pl,a=it().disable();return it().enable(a),t.postMessage({debug:a}),t}function Wi(){const t=typeof window<"u"?window:globalThis;return typeof SharedArrayBuffer<"u"&&t.crossOriginIsolated}function $i(t){return G(t)}function gl(){return navigator.hardwareConcurrency}function wl(){return Zi()(`/*! For license information please see thread.worker.worker.js.LICENSE.txt */
var __webpack_modules__ = {
    227: (module, exports, __webpack_require__) => {
        exports.formatArgs = formatArgs;
        exports.save = save;
        exports.load = load;
        exports.useColors = useColors;
        exports.storage = localstorage();
        exports.destroy = (() => {
            let warned = false;
            return () => {
                if (!warned) {
                    warned = true;
                    console.warn("Instance method \`debug.destroy()\` is deprecated and no longer does anything. It will be removed in the next major version of \`debug\`.");
                }
            };
        })();
        exports.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ];
        function useColors() {
            if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
                return true;
            }
            if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\\/(\\d+)/)) {
                return false;
            }
            return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\\/(\\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\\/(\\d+)/);
        }
        function formatArgs(args) {
            args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
            if (!this.useColors) {
                return;
            }
            const c = "color: " + this.color;
            args.splice(1, 0, c, "color: inherit");
            let index = 0;
            let lastC = 0;
            args[0].replace(/%[a-zA-Z%]/g, (match => {
                if (match === "%%") {
                    return;
                }
                index++;
                if (match === "%c") {
                    lastC = index;
                }
            }));
            args.splice(lastC, 0, c);
        }
        exports.log = console.debug || console.log || (() => {});
        function save(namespaces) {
            try {
                if (namespaces) {
                    exports.storage.setItem("debug", namespaces);
                } else {
                    exports.storage.removeItem("debug");
                }
            } catch (error) {}
        }
        function load() {
            let r;
            try {
                r = exports.storage.getItem("debug");
            } catch (error) {}
            if (!r && typeof process !== "undefined" && "env" in process) {
                r = process.env.DEBUG;
            }
            return r;
        }
        function localstorage() {
            try {
                return localStorage;
            } catch (error) {}
        }
        module.exports = __webpack_require__(447)(exports);
        const {formatters} = module.exports;
        formatters.j = function(v) {
            try {
                return JSON.stringify(v);
            } catch (error) {
                return "[UnexpectedJSONParseError]: " + error.message;
            }
        };
    },
    447: (module, __unused_webpack_exports, __webpack_require__) => {
        function setup(env) {
            createDebug.debug = createDebug;
            createDebug.default = createDebug;
            createDebug.coerce = coerce;
            createDebug.disable = disable;
            createDebug.enable = enable;
            createDebug.enabled = enabled;
            createDebug.humanize = __webpack_require__(824);
            createDebug.destroy = destroy;
            Object.keys(env).forEach((key => {
                createDebug[key] = env[key];
            }));
            createDebug.names = [];
            createDebug.skips = [];
            createDebug.formatters = {};
            function selectColor(namespace) {
                let hash = 0;
                for (let i = 0; i < namespace.length; i++) {
                    hash = (hash << 5) - hash + namespace.charCodeAt(i);
                    hash |= 0;
                }
                return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
            }
            createDebug.selectColor = selectColor;
            function createDebug(namespace) {
                let prevTime;
                let enableOverride = null;
                let namespacesCache;
                let enabledCache;
                function debug(...args) {
                    if (!debug.enabled) {
                        return;
                    }
                    const self = debug;
                    const curr = Number(new Date);
                    const ms = curr - (prevTime || curr);
                    self.diff = ms;
                    self.prev = prevTime;
                    self.curr = curr;
                    prevTime = curr;
                    args[0] = createDebug.coerce(args[0]);
                    if (typeof args[0] !== "string") {
                        args.unshift("%O");
                    }
                    let index = 0;
                    args[0] = args[0].replace(/%([a-zA-Z%])/g, ((match, format) => {
                        if (match === "%%") {
                            return "%";
                        }
                        index++;
                        const formatter = createDebug.formatters[format];
                        if (typeof formatter === "function") {
                            const val = args[index];
                            match = formatter.call(self, val);
                            args.splice(index, 1);
                            index--;
                        }
                        return match;
                    }));
                    createDebug.formatArgs.call(self, args);
                    const logFn = self.log || createDebug.log;
                    logFn.apply(self, args);
                }
                debug.namespace = namespace;
                debug.useColors = createDebug.useColors();
                debug.color = createDebug.selectColor(namespace);
                debug.extend = extend;
                debug.destroy = createDebug.destroy;
                Object.defineProperty(debug, "enabled", {
                    enumerable: true,
                    configurable: false,
                    get: () => {
                        if (enableOverride !== null) {
                            return enableOverride;
                        }
                        if (namespacesCache !== createDebug.namespaces) {
                            namespacesCache = createDebug.namespaces;
                            enabledCache = createDebug.enabled(namespace);
                        }
                        return enabledCache;
                    },
                    set: v => {
                        enableOverride = v;
                    }
                });
                if (typeof createDebug.init === "function") {
                    createDebug.init(debug);
                }
                return debug;
            }
            function extend(namespace, delimiter) {
                const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
                newDebug.log = this.log;
                return newDebug;
            }
            function enable(namespaces) {
                createDebug.save(namespaces);
                createDebug.namespaces = namespaces;
                createDebug.names = [];
                createDebug.skips = [];
                let i;
                const split = (typeof namespaces === "string" ? namespaces : "").split(/[\\s,]+/);
                const len = split.length;
                for (i = 0; i < len; i++) {
                    if (!split[i]) {
                        continue;
                    }
                    namespaces = split[i].replace(/\\*/g, ".*?");
                    if (namespaces[0] === "-") {
                        createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
                    } else {
                        createDebug.names.push(new RegExp("^" + namespaces + "$"));
                    }
                }
            }
            function disable() {
                const namespaces = [ ...createDebug.names.map(toNamespace), ...createDebug.skips.map(toNamespace).map((namespace => "-" + namespace)) ].join(",");
                createDebug.enable("");
                return namespaces;
            }
            function enabled(name) {
                if (name[name.length - 1] === "*") {
                    return true;
                }
                let i;
                let len;
                for (i = 0, len = createDebug.skips.length; i < len; i++) {
                    if (createDebug.skips[i].test(name)) {
                        return false;
                    }
                }
                for (i = 0, len = createDebug.names.length; i < len; i++) {
                    if (createDebug.names[i].test(name)) {
                        return true;
                    }
                }
                return false;
            }
            function toNamespace(regexp) {
                return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\\.\\*\\?$/, "*");
            }
            function coerce(val) {
                if (val instanceof Error) {
                    return val.stack || val.message;
                }
                return val;
            }
            function destroy() {
                console.warn("Instance method \`debug.destroy()\` is deprecated and no longer does anything. It will be removed in the next major version of \`debug\`.");
            }
            createDebug.enable(createDebug.load());
            return createDebug;
        }
        module.exports = setup;
    },
    824: module => {
        var s = 1e3;
        var m = s * 60;
        var h = m * 60;
        var d = h * 24;
        var w = d * 7;
        var y = d * 365.25;
        module.exports = function(val, options) {
            options = options || {};
            var type = typeof val;
            if (type === "string" && val.length > 0) {
                return parse(val);
            } else if (type === "number" && isFinite(val)) {
                return options.long ? fmtLong(val) : fmtShort(val);
            }
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
        };
        function parse(str) {
            str = String(str);
            if (str.length > 100) {
                return;
            }
            var match = /^(-?(?:\\d+)?\\.?\\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
            if (!match) {
                return;
            }
            var n = parseFloat(match[1]);
            var type = (match[2] || "ms").toLowerCase();
            switch (type) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return n * y;

              case "weeks":
              case "week":
              case "w":
                return n * w;

              case "days":
              case "day":
              case "d":
                return n * d;

              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return n * h;

              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return n * m;

              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return n * s;

              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return n;

              default:
                return undefined;
            }
        }
        function fmtShort(ms) {
            var msAbs = Math.abs(ms);
            if (msAbs >= d) {
                return Math.round(ms / d) + "d";
            }
            if (msAbs >= h) {
                return Math.round(ms / h) + "h";
            }
            if (msAbs >= m) {
                return Math.round(ms / m) + "m";
            }
            if (msAbs >= s) {
                return Math.round(ms / s) + "s";
            }
            return ms + "ms";
        }
        function fmtLong(ms) {
            var msAbs = Math.abs(ms);
            if (msAbs >= d) {
                return plural(ms, msAbs, d, "day");
            }
            if (msAbs >= h) {
                return plural(ms, msAbs, h, "hour");
            }
            if (msAbs >= m) {
                return plural(ms, msAbs, m, "minute");
            }
            if (msAbs >= s) {
                return plural(ms, msAbs, s, "second");
            }
            return ms + " ms";
        }
        function plural(ms, msAbs, n, name) {
            var isPlural = msAbs >= n * 1.5;
            return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
        }
    }
};

var __webpack_module_cache__ = {};

function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
        return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
        exports: {}
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
}

(() => {
    __webpack_require__.n = module => {
        var getter = module && module.__esModule ? () => module["default"] : () => module;
        __webpack_require__.d(getter, {
            a: getter
        });
        return getter;
    };
})();

(() => {
    __webpack_require__.d = (exports, definition) => {
        for (var key in definition) {
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: definition[key]
                });
            }
        }
    };
})();

(() => {
    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
})();

var __webpack_exports__ = {};

(() => {
    const proxyMarker = Symbol("Comlink.proxy");
    const createEndpoint = Symbol("Comlink.endpoint");
    const releaseProxy = Symbol("Comlink.releaseProxy");
    const finalizer = Symbol("Comlink.finalizer");
    const throwMarker = Symbol("Comlink.thrown");
    const isObject = val => typeof val === "object" && val !== null || typeof val === "function";
    const proxyTransferHandler = {
        canHandle: val => isObject(val) && val[proxyMarker],
        serialize(obj) {
            const {port1, port2} = new MessageChannel;
            expose(obj, port1);
            return [ port2, [ port2 ] ];
        },
        deserialize(port) {
            port.start();
            return comlink_wrap(port);
        }
    };
    const throwTransferHandler = {
        canHandle: value => isObject(value) && throwMarker in value,
        serialize({value}) {
            let serialized;
            if (value instanceof Error) {
                serialized = {
                    isError: true,
                    value: {
                        message: value.message,
                        name: value.name,
                        stack: value.stack
                    }
                };
            } else {
                serialized = {
                    isError: false,
                    value
                };
            }
            return [ serialized, [] ];
        },
        deserialize(serialized) {
            if (serialized.isError) {
                throw Object.assign(new Error(serialized.value.message), serialized.value);
            }
            throw serialized.value;
        }
    };
    const transferHandlers = new Map([ [ "proxy", proxyTransferHandler ], [ "throw", throwTransferHandler ] ]);
    function isAllowedOrigin(allowedOrigins, origin) {
        for (const allowedOrigin of allowedOrigins) {
            if (origin === allowedOrigin || allowedOrigin === "*") {
                return true;
            }
            if (allowedOrigin instanceof RegExp && allowedOrigin.test(origin)) {
                return true;
            }
        }
        return false;
    }
    function expose(obj, ep = globalThis, allowedOrigins = [ "*" ]) {
        ep.addEventListener("message", (function callback(ev) {
            if (!ev || !ev.data) {
                return;
            }
            if (!isAllowedOrigin(allowedOrigins, ev.origin)) {
                console.warn(\`Invalid origin '\${ev.origin}' for comlink proxy\`);
                return;
            }
            const {id, type, path} = Object.assign({
                path: []
            }, ev.data);
            const argumentList = (ev.data.argumentList || []).map(fromWireValue);
            let returnValue;
            try {
                const parent = path.slice(0, -1).reduce(((obj, prop) => obj[prop]), obj);
                const rawValue = path.reduce(((obj, prop) => obj[prop]), obj);
                switch (type) {
                  case "GET":
                    {
                        returnValue = rawValue;
                    }
                    break;

                  case "SET":
                    {
                        parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);
                        returnValue = true;
                    }
                    break;

                  case "APPLY":
                    {
                        returnValue = rawValue.apply(parent, argumentList);
                    }
                    break;

                  case "CONSTRUCT":
                    {
                        const value = new rawValue(...argumentList);
                        returnValue = proxy(value);
                    }
                    break;

                  case "ENDPOINT":
                    {
                        const {port1, port2} = new MessageChannel;
                        expose(obj, port2);
                        returnValue = transfer(port1, [ port1 ]);
                    }
                    break;

                  case "RELEASE":
                    {
                        returnValue = undefined;
                    }
                    break;

                  default:
                    return;
                }
            } catch (value) {
                returnValue = {
                    value,
                    [throwMarker]: 0
                };
            }
            Promise.resolve(returnValue).catch((value => ({
                value,
                [throwMarker]: 0
            }))).then((returnValue => {
                const [wireValue, transferables] = toWireValue(returnValue);
                ep.postMessage(Object.assign(Object.assign({}, wireValue), {
                    id
                }), transferables);
                if (type === "RELEASE") {
                    ep.removeEventListener("message", callback);
                    closeEndPoint(ep);
                    if (finalizer in obj && typeof obj[finalizer] === "function") {
                        obj[finalizer]();
                    }
                }
            })).catch((error => {
                const [wireValue, transferables] = toWireValue({
                    value: new TypeError("Unserializable return value"),
                    [throwMarker]: 0
                });
                ep.postMessage(Object.assign(Object.assign({}, wireValue), {
                    id
                }), transferables);
            }));
        }));
        if (ep.start) {
            ep.start();
        }
    }
    function isMessagePort(endpoint) {
        return endpoint.constructor.name === "MessagePort";
    }
    function closeEndPoint(endpoint) {
        if (isMessagePort(endpoint)) endpoint.close();
    }
    function comlink_wrap(ep, target) {
        return createProxy(ep, [], target);
    }
    function throwIfProxyReleased(isReleased) {
        if (isReleased) {
            throw new Error("Proxy has been released and is not useable");
        }
    }
    function releaseEndpoint(ep) {
        return requestResponseMessage(ep, {
            type: "RELEASE"
        }).then((() => {
            closeEndPoint(ep);
        }));
    }
    const proxyCounter = new WeakMap;
    const proxyFinalizers = "FinalizationRegistry" in globalThis && new FinalizationRegistry((ep => {
        const newCount = (proxyCounter.get(ep) || 0) - 1;
        proxyCounter.set(ep, newCount);
        if (newCount === 0) {
            releaseEndpoint(ep);
        }
    }));
    function registerProxy(proxy, ep) {
        const newCount = (proxyCounter.get(ep) || 0) + 1;
        proxyCounter.set(ep, newCount);
        if (proxyFinalizers) {
            proxyFinalizers.register(proxy, ep, proxy);
        }
    }
    function unregisterProxy(proxy) {
        if (proxyFinalizers) {
            proxyFinalizers.unregister(proxy);
        }
    }
    function createProxy(ep, path = [], target = function() {}) {
        let isProxyReleased = false;
        const proxy = new Proxy(target, {
            get(_target, prop) {
                throwIfProxyReleased(isProxyReleased);
                if (prop === releaseProxy) {
                    return () => {
                        unregisterProxy(proxy);
                        releaseEndpoint(ep);
                        isProxyReleased = true;
                    };
                }
                if (prop === "then") {
                    if (path.length === 0) {
                        return {
                            then: () => proxy
                        };
                    }
                    const r = requestResponseMessage(ep, {
                        type: "GET",
                        path: path.map((p => p.toString()))
                    }).then(fromWireValue);
                    return r.then.bind(r);
                }
                return createProxy(ep, [ ...path, prop ]);
            },
            set(_target, prop, rawValue) {
                throwIfProxyReleased(isProxyReleased);
                const [value, transferables] = toWireValue(rawValue);
                return requestResponseMessage(ep, {
                    type: "SET",
                    path: [ ...path, prop ].map((p => p.toString())),
                    value
                }, transferables).then(fromWireValue);
            },
            apply(_target, _thisArg, rawArgumentList) {
                throwIfProxyReleased(isProxyReleased);
                const last = path[path.length - 1];
                if (last === createEndpoint) {
                    return requestResponseMessage(ep, {
                        type: "ENDPOINT"
                    }).then(fromWireValue);
                }
                if (last === "bind") {
                    return createProxy(ep, path.slice(0, -1));
                }
                const [argumentList, transferables] = processArguments(rawArgumentList);
                return requestResponseMessage(ep, {
                    type: "APPLY",
                    path: path.map((p => p.toString())),
                    argumentList
                }, transferables).then(fromWireValue);
            },
            construct(_target, rawArgumentList) {
                throwIfProxyReleased(isProxyReleased);
                const [argumentList, transferables] = processArguments(rawArgumentList);
                return requestResponseMessage(ep, {
                    type: "CONSTRUCT",
                    path: path.map((p => p.toString())),
                    argumentList
                }, transferables).then(fromWireValue);
            }
        });
        registerProxy(proxy, ep);
        return proxy;
    }
    function myFlat(arr) {
        return Array.prototype.concat.apply([], arr);
    }
    function processArguments(argumentList) {
        const processed = argumentList.map(toWireValue);
        return [ processed.map((v => v[0])), myFlat(processed.map((v => v[1]))) ];
    }
    const transferCache = new WeakMap;
    function transfer(obj, transfers) {
        transferCache.set(obj, transfers);
        return obj;
    }
    function proxy(obj) {
        return Object.assign(obj, {
            [proxyMarker]: true
        });
    }
    function windowEndpoint(w, context = globalThis, targetOrigin = "*") {
        return {
            postMessage: (msg, transferables) => w.postMessage(msg, targetOrigin, transferables),
            addEventListener: context.addEventListener.bind(context),
            removeEventListener: context.removeEventListener.bind(context)
        };
    }
    function toWireValue(value) {
        for (const [name, handler] of transferHandlers) {
            if (handler.canHandle(value)) {
                const [serializedValue, transferables] = handler.serialize(value);
                return [ {
                    type: "HANDLER",
                    name,
                    value: serializedValue
                }, transferables ];
            }
        }
        return [ {
            type: "RAW",
            value
        }, transferCache.get(value) || [] ];
    }
    function fromWireValue(value) {
        switch (value.type) {
          case "HANDLER":
            return transferHandlers.get(value.name).deserialize(value.value);

          case "RAW":
            return value.value;
        }
    }
    function requestResponseMessage(ep, msg, transfers) {
        return new Promise((resolve => {
            const id = generateUUID();
            ep.addEventListener("message", (function l(ev) {
                if (!ev.data || !ev.data.id || ev.data.id !== id) {
                    return;
                }
                ep.removeEventListener("message", l);
                resolve(ev.data);
            }));
            if (ep.start) {
                ep.start();
            }
            ep.postMessage(Object.assign({
                id
            }, msg), transfers);
        }));
    }
    function generateUUID() {
        return new Array(4).fill(0).map((() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16))).join("-");
    }
    function getSharedMemoryAvailable() {
        const globalScope = typeof window !== "undefined" ? window : globalThis;
        return typeof SharedArrayBuffer !== "undefined" && globalScope.crossOriginIsolated;
    }
    function getRemoteBarretenbergWasm(worker) {
        return wrap(worker);
    }
    function getNumCpu() {
        return navigator.hardwareConcurrency;
    }
    function threadLogger() {
        return undefined;
    }
    function killSelf() {
        self.close();
    }
    var browser = __webpack_require__(227);
    var browser_default = __webpack_require__.n(browser);
    const randomBytes = len => {
        const getWebCrypto = () => {
            if (typeof window !== "undefined" && window.crypto) return window.crypto;
            if (typeof globalThis !== "undefined" && globalThis.crypto) return globalThis.crypto;
            return undefined;
        };
        const crypto = getWebCrypto();
        if (!crypto) {
            throw new Error("randomBytes UnsupportedEnvironment");
        }
        const buf = new Uint8Array(len);
        const MAX_BYTES = 65536;
        if (len > MAX_BYTES) {
            for (let generated = 0; generated < len; generated += MAX_BYTES) {
                crypto.getRandomValues(buf.subarray(generated, generated + MAX_BYTES));
            }
        } else {
            crypto.getRandomValues(buf);
        }
        return buf;
    };
    class BarretenbergWasmBase {
        constructor() {
            this.memStore = {};
            this.logger = browser_default()("bb.js:bb_wasm_base");
        }
        getImportObj(memory) {
            const importObj = {
                wasi_snapshot_preview1: {
                    random_get: (out, length) => {
                        out = out >>> 0;
                        const randomData = randomBytes(length);
                        const mem = this.getMemory();
                        mem.set(randomData, out);
                    },
                    clock_time_get: (a1, a2, out) => {
                        out = out >>> 0;
                        const ts = BigInt((new Date).getTime()) * 1000000n;
                        const view = new DataView(this.getMemory().buffer);
                        view.setBigUint64(out, ts, true);
                    },
                    proc_exit: () => {
                        this.logger("PANIC: proc_exit was called.");
                        throw new Error;
                    }
                },
                env: {
                    logstr: addr => {
                        const str = this.stringFromAddress(addr);
                        const m = this.getMemory();
                        const str2 = \`\${str} (mem: \${(m.length / (1024 * 1024)).toFixed(2)}MiB)\`;
                        this.logger(str2);
                    },
                    get_data: (keyAddr, outBufAddr) => {
                        const key = this.stringFromAddress(keyAddr);
                        outBufAddr = outBufAddr >>> 0;
                        const data = this.memStore[key];
                        if (!data) {
                            this.logger(\`get_data miss \${key}\`);
                            return;
                        }
                        this.writeMemory(outBufAddr, data);
                    },
                    set_data: (keyAddr, dataAddr, dataLength) => {
                        const key = this.stringFromAddress(keyAddr);
                        dataAddr = dataAddr >>> 0;
                        this.memStore[key] = this.getMemorySlice(dataAddr, dataAddr + dataLength);
                    },
                    memory
                }
            };
            return importObj;
        }
        exports() {
            return this.instance.exports;
        }
        call(name, ...args) {
            if (!this.exports()[name]) {
                throw new Error(\`WASM function \${name} not found.\`);
            }
            try {
                return this.exports()[name](...args) >>> 0;
            } catch (err) {
                const message = \`WASM function \${name} aborted, error: \${err}\`;
                this.logger(message);
                this.logger(err.stack);
                throw err;
            }
        }
        memSize() {
            return this.getMemory().length;
        }
        getMemorySlice(start, end) {
            return this.getMemory().subarray(start, end).slice();
        }
        writeMemory(offset, arr) {
            const mem = this.getMemory();
            mem.set(arr, offset);
        }
        getMemory() {
            return new Uint8Array(this.memory.buffer);
        }
        stringFromAddress(addr) {
            addr = addr >>> 0;
            const m = this.getMemory();
            let i = addr;
            for (;m[i] !== 0; ++i) ;
            const textDecoder = new TextDecoder("ascii");
            return textDecoder.decode(m.slice(addr, i));
        }
    }
    class BarretenbergWasmThread extends BarretenbergWasmBase {
        async initThread(module, memory) {
            this.logger = threadLogger() || this.logger;
            this.memory = memory;
            this.instance = await WebAssembly.instantiate(module, this.getImportObj(this.memory));
        }
        destroy() {
            killSelf();
        }
        getImportObj(memory) {
            const baseImports = super.getImportObj(memory);
            return {
                ...baseImports,
                wasi: {
                    "thread-spawn": () => {
                        this.logger("PANIC: threads cannot spawn threads!");
                        this.logger((new Error).stack);
                        killSelf();
                    }
                },
                env: {
                    ...baseImports.env,
                    env_hardware_concurrency: () => 1
                }
            };
        }
    }
    self.onmessage = function(e) {
        if (e.data.debug) {
            browser_default().enable(e.data.debug);
        }
    };
    expose(new BarretenbergWasmThread);
    self.postMessage({
        ready: true
    });
    const thread_worker = null;
})();`,"Worker",void 0,void 0)}function bl(){const t=new wl,a=it().disable();return it().enable(a),t.postMessage({debug:a}),t}class yl{constructor(){this.memStore={},this.logger=it()("bb.js:bb_wasm_base")}getImportObj(a){return{wasi_snapshot_preview1:{random_get:(o,s)=>{o=o>>>0;const u=wt(s);this.getMemory().set(u,o)},clock_time_get:(o,s,u)=>{u=u>>>0;const h=BigInt(new Date().getTime())*1000000n;new DataView(this.getMemory().buffer).setBigUint64(u,h,!0)},proc_exit:()=>{throw this.logger("PANIC: proc_exit was called."),new Error}},env:{logstr:o=>{const s=this.stringFromAddress(o),u=this.getMemory(),h=`${s} (mem: ${(u.length/(1024*1024)).toFixed(2)}MiB)`;this.logger(h)},get_data:(o,s)=>{const u=this.stringFromAddress(o);s=s>>>0;const h=this.memStore[u];if(!h){this.logger(`get_data miss ${u}`);return}this.writeMemory(s,h)},set_data:(o,s,u)=>{const h=this.stringFromAddress(o);s=s>>>0,this.memStore[h]=this.getMemorySlice(s,s+u)},memory:a}}}exports(){return this.instance.exports}call(a,...n){if(!this.exports()[a])throw new Error(`WASM function ${a} not found.`);try{return this.exports()[a](...n)>>>0}catch(o){const s=`WASM function ${a} aborted, error: ${o}`;throw this.logger(s),this.logger(o.stack),o}}memSize(){return this.getMemory().length}getMemorySlice(a,n){return this.getMemory().subarray(a,n).slice()}writeMemory(a,n){this.getMemory().set(n,a)}getMemory(){return new Uint8Array(this.memory.buffer)}stringFromAddress(a){a=a>>>0;const n=this.getMemory();let o=a;for(;n[o]!==0;++o);return new TextDecoder("ascii").decode(n.slice(a,o))}}class vl{constructor(a){this.wasm=a,this.allocs=[],this.inScratchRemaining=1024,this.outScratchRemaining=1024}getInputs(a){return a.map(n=>{if(typeof n=="object")if(n.length<=this.inScratchRemaining){const o=this.inScratchRemaining-=n.length;return this.wasm.writeMemory(o,n),o}else{const o=this.wasm.call("bbmalloc",n.length);return this.wasm.writeMemory(o,n),this.allocs.push(o),o}else return n})}getOutputPtrs(a){return a.map(n=>{const o=n||4;if(o<=this.outScratchRemaining)return this.outScratchRemaining-=o;{const s=this.wasm.call("bbmalloc",o);return this.allocs.push(s),s}})}addOutputPtr(a){a>=1024&&this.allocs.push(a)}freeAll(){for(const a of this.allocs)this.wasm.call("bbfree",a)}}class zr extends yl{constructor(){super(...arguments),this.workers=[],this.remoteWasms=[],this.nextWorker=0,this.nextThreadId=1}getNumThreads(){return this.workers.length+1}async init(a,n=Math.min(gl(),zr.MAX_THREADS),o=it()("bb.js:bb_wasm"),s=32,u=2**16){this.logger=o;const h=s*2**16/(1024*1024),_=u*2**16/(1024*1024),E=Wi();this.logger(`Initializing bb wasm: initial memory ${s} pages ${h}MiB; max memory: ${u} pages, ${_}MiB; threads: ${n}; shared memory: ${E}`),this.logger("saleel: calling new WebAssembly.Memory"),this.memory=new WebAssembly.Memory({initial:s,maximum:u,shared:E}),this.logger("saleel: calling new WebAssembly.Memory done"),this.logger("saleel: calling WebAssembly.instantiate");const b=await WebAssembly.instantiate(a,this.getImportObj(this.memory));this.logger("saleel: calling WebAssembly.instantiate done"),this.instance=b,this.call("_initialize"),n>1&&(this.logger(`Creating ${n} worker threads`),this.workers=await Promise.all(Array.from({length:n-1}).map(bl)),this.remoteWasms=await Promise.all(this.workers.map($i)),await Promise.all(this.remoteWasms.map(x=>x.initThread(a,this.memory))))}async destroy(){await Promise.all(this.workers.map(a=>a.terminate()))}getImportObj(a){const n=super.getImportObj(a);return{...n,wasi:{"thread-spawn":o=>{o=o>>>0;const s=this.nextThreadId++,u=this.nextWorker++%this.remoteWasms.length;return this.remoteWasms[u].call("wasi_thread_start",s,o).catch(this.logger),s}},env:{...n.env,env_hardware_concurrency:()=>this.remoteWasms.length+1}}}callWasmExport(a,n,o){const s=new vl(this),u=s.getInputs(n),h=s.getOutputPtrs(o);this.call(a,...u,...h);const _=this.getOutputArgs(o,h,s);return s.freeAll(),_}getOutputArgs(a,n,o){return a.map((s,u)=>{if(s)return this.getMemorySlice(n[u],n[u]+s);const h=this.getMemorySlice(n[u],n[u]+4),_=new DataView(h.buffer,h.byteOffset,h.byteLength).getUint32(0,!0);o.addOutputPtr(_);const E=this.getMemorySlice(_,_+4),b=new DataView(E.buffer,E.byteOffset,E.byteLength).getUint32(0,!1);return this.getMemorySlice(_+4,_+4+b)})}}zr.MAX_THREADS=32;const El=4,Hi=0,Vi=1,xl=2;function un(t){let a=t.length;for(;--a>=0;)t[a]=0}const kl=0,ji=1,Al=2,Sl=3,Cl=258,ya=29,Ln=256,Pn=Ln+1+ya,fn=30,va=19,Yi=2*Pn+1,$t=15,Ea=16,Il=7,xa=256,Gi=16,Ki=17,qi=18,ka=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),Mr=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),Tl=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),Xi=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Bl=512,bt=new Array((Pn+2)*2);un(bt);const Zn=new Array(fn*2);un(Zn);const Wn=new Array(Bl);un(Wn);const $n=new Array(Cl-Sl+1);un($n);const Aa=new Array(ya);un(Aa);const Or=new Array(fn);un(Or);function Sa(t,a,n,o,s){this.static_tree=t,this.extra_bits=a,this.extra_base=n,this.elems=o,this.max_length=s,this.has_stree=t&&t.length}let Ji,Qi,eo;function Ca(t,a){this.dyn_tree=t,this.max_code=0,this.stat_desc=a}const to=t=>t<256?Wn[t]:Wn[256+(t>>>7)],Hn=(t,a)=>{t.pending_buf[t.pending++]=a&255,t.pending_buf[t.pending++]=a>>>8&255},Ze=(t,a,n)=>{t.bi_valid>Ea-n?(t.bi_buf|=a<<t.bi_valid&65535,Hn(t,t.bi_buf),t.bi_buf=a>>Ea-t.bi_valid,t.bi_valid+=n-Ea):(t.bi_buf|=a<<t.bi_valid&65535,t.bi_valid+=n)},ot=(t,a,n)=>{Ze(t,n[a*2],n[a*2+1])},no=(t,a)=>{let n=0;do n|=t&1,t>>>=1,n<<=1;while(--a>0);return n>>>1},Dl=t=>{t.bi_valid===16?(Hn(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=t.bi_buf&255,t.bi_buf>>=8,t.bi_valid-=8)},Rl=(t,a)=>{const n=a.dyn_tree,o=a.max_code,s=a.stat_desc.static_tree,u=a.stat_desc.has_stree,h=a.stat_desc.extra_bits,_=a.stat_desc.extra_base,E=a.stat_desc.max_length;let b,x,L,z,D,V,be=0;for(z=0;z<=$t;z++)t.bl_count[z]=0;for(n[t.heap[t.heap_max]*2+1]=0,b=t.heap_max+1;b<Yi;b++)x=t.heap[b],z=n[n[x*2+1]*2+1]+1,z>E&&(z=E,be++),n[x*2+1]=z,!(x>o)&&(t.bl_count[z]++,D=0,x>=_&&(D=h[x-_]),V=n[x*2],t.opt_len+=V*(z+D),u&&(t.static_len+=V*(s[x*2+1]+D)));if(be!==0){do{for(z=E-1;t.bl_count[z]===0;)z--;t.bl_count[z]--,t.bl_count[z+1]+=2,t.bl_count[E]--,be-=2}while(be>0);for(z=E;z!==0;z--)for(x=t.bl_count[z];x!==0;)L=t.heap[--b],!(L>o)&&(n[L*2+1]!==z&&(t.opt_len+=(z-n[L*2+1])*n[L*2],n[L*2+1]=z),x--)}},ro=(t,a,n)=>{const o=new Array($t+1);let s=0,u,h;for(u=1;u<=$t;u++)s=s+n[u-1]<<1,o[u]=s;for(h=0;h<=a;h++){let _=t[h*2+1];_!==0&&(t[h*2]=no(o[_]++,_))}},Fl=()=>{let t,a,n,o,s;const u=new Array($t+1);for(n=0,o=0;o<ya-1;o++)for(Aa[o]=n,t=0;t<1<<ka[o];t++)$n[n++]=o;for($n[n-1]=o,s=0,o=0;o<16;o++)for(Or[o]=s,t=0;t<1<<Mr[o];t++)Wn[s++]=o;for(s>>=7;o<fn;o++)for(Or[o]=s<<7,t=0;t<1<<Mr[o]-7;t++)Wn[256+s++]=o;for(a=0;a<=$t;a++)u[a]=0;for(t=0;t<=143;)bt[t*2+1]=8,t++,u[8]++;for(;t<=255;)bt[t*2+1]=9,t++,u[9]++;for(;t<=279;)bt[t*2+1]=7,t++,u[7]++;for(;t<=287;)bt[t*2+1]=8,t++,u[8]++;for(ro(bt,Pn+1,u),t=0;t<fn;t++)Zn[t*2+1]=5,Zn[t*2]=no(t,5);Ji=new Sa(bt,ka,Ln+1,Pn,$t),Qi=new Sa(Zn,Mr,0,fn,$t),eo=new Sa(new Array(0),Tl,0,va,Il)},ao=t=>{let a;for(a=0;a<Pn;a++)t.dyn_ltree[a*2]=0;for(a=0;a<fn;a++)t.dyn_dtree[a*2]=0;for(a=0;a<va;a++)t.bl_tree[a*2]=0;t.dyn_ltree[xa*2]=1,t.opt_len=t.static_len=0,t.sym_next=t.matches=0},io=t=>{t.bi_valid>8?Hn(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0},oo=(t,a,n,o)=>{const s=a*2,u=n*2;return t[s]<t[u]||t[s]===t[u]&&o[a]<=o[n]},Ia=(t,a,n)=>{const o=t.heap[n];let s=n<<1;for(;s<=t.heap_len&&(s<t.heap_len&&oo(a,t.heap[s+1],t.heap[s],t.depth)&&s++,!oo(a,o,t.heap[s],t.depth));)t.heap[n]=t.heap[s],n=s,s<<=1;t.heap[n]=o},so=(t,a,n)=>{let o,s,u=0,h,_;if(t.sym_next!==0)do o=t.pending_buf[t.sym_buf+u++]&255,o+=(t.pending_buf[t.sym_buf+u++]&255)<<8,s=t.pending_buf[t.sym_buf+u++],o===0?ot(t,s,a):(h=$n[s],ot(t,h+Ln+1,a),_=ka[h],_!==0&&(s-=Aa[h],Ze(t,s,_)),o--,h=to(o),ot(t,h,n),_=Mr[h],_!==0&&(o-=Or[h],Ze(t,o,_)));while(u<t.sym_next);ot(t,xa,a)},Ta=(t,a)=>{const n=a.dyn_tree,o=a.stat_desc.static_tree,s=a.stat_desc.has_stree,u=a.stat_desc.elems;let h,_,E=-1,b;for(t.heap_len=0,t.heap_max=Yi,h=0;h<u;h++)n[h*2]!==0?(t.heap[++t.heap_len]=E=h,t.depth[h]=0):n[h*2+1]=0;for(;t.heap_len<2;)b=t.heap[++t.heap_len]=E<2?++E:0,n[b*2]=1,t.depth[b]=0,t.opt_len--,s&&(t.static_len-=o[b*2+1]);for(a.max_code=E,h=t.heap_len>>1;h>=1;h--)Ia(t,n,h);b=u;do h=t.heap[1],t.heap[1]=t.heap[t.heap_len--],Ia(t,n,1),_=t.heap[1],t.heap[--t.heap_max]=h,t.heap[--t.heap_max]=_,n[b*2]=n[h*2]+n[_*2],t.depth[b]=(t.depth[h]>=t.depth[_]?t.depth[h]:t.depth[_])+1,n[h*2+1]=n[_*2+1]=b,t.heap[1]=b++,Ia(t,n,1);while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],Rl(t,a),ro(n,E,t.bl_count)},co=(t,a,n)=>{let o,s=-1,u,h=a[0*2+1],_=0,E=7,b=4;for(h===0&&(E=138,b=3),a[(n+1)*2+1]=65535,o=0;o<=n;o++)u=h,h=a[(o+1)*2+1],!(++_<E&&u===h)&&(_<b?t.bl_tree[u*2]+=_:u!==0?(u!==s&&t.bl_tree[u*2]++,t.bl_tree[Gi*2]++):_<=10?t.bl_tree[Ki*2]++:t.bl_tree[qi*2]++,_=0,s=u,h===0?(E=138,b=3):u===h?(E=6,b=3):(E=7,b=4))},lo=(t,a,n)=>{let o,s=-1,u,h=a[0*2+1],_=0,E=7,b=4;for(h===0&&(E=138,b=3),o=0;o<=n;o++)if(u=h,h=a[(o+1)*2+1],!(++_<E&&u===h)){if(_<b)do ot(t,u,t.bl_tree);while(--_!==0);else u!==0?(u!==s&&(ot(t,u,t.bl_tree),_--),ot(t,Gi,t.bl_tree),Ze(t,_-3,2)):_<=10?(ot(t,Ki,t.bl_tree),Ze(t,_-3,3)):(ot(t,qi,t.bl_tree),Ze(t,_-11,7));_=0,s=u,h===0?(E=138,b=3):u===h?(E=6,b=3):(E=7,b=4)}},zl=t=>{let a;for(co(t,t.dyn_ltree,t.l_desc.max_code),co(t,t.dyn_dtree,t.d_desc.max_code),Ta(t,t.bl_desc),a=va-1;a>=3&&t.bl_tree[Xi[a]*2+1]===0;a--);return t.opt_len+=3*(a+1)+5+5+4,a},Ml=(t,a,n,o)=>{let s;for(Ze(t,a-257,5),Ze(t,n-1,5),Ze(t,o-4,4),s=0;s<o;s++)Ze(t,t.bl_tree[Xi[s]*2+1],3);lo(t,t.dyn_ltree,a-1),lo(t,t.dyn_dtree,n-1)},Ol=t=>{let a=4093624447,n;for(n=0;n<=31;n++,a>>>=1)if(a&1&&t.dyn_ltree[n*2]!==0)return Hi;if(t.dyn_ltree[9*2]!==0||t.dyn_ltree[10*2]!==0||t.dyn_ltree[13*2]!==0)return Vi;for(n=32;n<Ln;n++)if(t.dyn_ltree[n*2]!==0)return Vi;return Hi};let uo=!1;const Nl=t=>{uo||(Fl(),uo=!0),t.l_desc=new Ca(t.dyn_ltree,Ji),t.d_desc=new Ca(t.dyn_dtree,Qi),t.bl_desc=new Ca(t.bl_tree,eo),t.bi_buf=0,t.bi_valid=0,ao(t)},fo=(t,a,n,o)=>{Ze(t,(kl<<1)+(o?1:0),3),io(t),Hn(t,n),Hn(t,~n),n&&t.pending_buf.set(t.window.subarray(a,a+n),t.pending),t.pending+=n},Ul=t=>{Ze(t,ji<<1,3),ot(t,xa,bt),Dl(t)},Ll=(t,a,n,o)=>{let s,u,h=0;t.level>0?(t.strm.data_type===xl&&(t.strm.data_type=Ol(t)),Ta(t,t.l_desc),Ta(t,t.d_desc),h=zl(t),s=t.opt_len+3+7>>>3,u=t.static_len+3+7>>>3,u<=s&&(s=u)):s=u=n+5,n+4<=s&&a!==-1?fo(t,a,n,o):t.strategy===El||u===s?(Ze(t,(ji<<1)+(o?1:0),3),so(t,bt,Zn)):(Ze(t,(Al<<1)+(o?1:0),3),Ml(t,t.l_desc.max_code+1,t.d_desc.max_code+1,h+1),so(t,t.dyn_ltree,t.dyn_dtree)),ao(t),o&&io(t)},Pl=(t,a,n)=>(t.pending_buf[t.sym_buf+t.sym_next++]=a,t.pending_buf[t.sym_buf+t.sym_next++]=a>>8,t.pending_buf[t.sym_buf+t.sym_next++]=n,a===0?t.dyn_ltree[n*2]++:(t.matches++,a--,t.dyn_ltree[($n[n]+Ln+1)*2]++,t.dyn_dtree[to(a)*2]++),t.sym_next===t.sym_end);var Zl=Nl,Wl=fo,$l=Ll,Hl=Pl,Vl=Ul,jl={_tr_init:Zl,_tr_stored_block:Wl,_tr_flush_block:$l,_tr_tally:Hl,_tr_align:Vl},Vn=(t,a,n,o)=>{let s=t&65535|0,u=t>>>16&65535|0,h=0;for(;n!==0;){h=n>2e3?2e3:n,n-=h;do s=s+a[o++]|0,u=u+s|0;while(--h);s%=65521,u%=65521}return s|u<<16|0};const Yl=()=>{let t,a=[];for(var n=0;n<256;n++){t=n;for(var o=0;o<8;o++)t=t&1?3988292384^t>>>1:t>>>1;a[n]=t}return a},Gl=new Uint32Array(Yl());var Be=(t,a,n,o)=>{const s=Gl,u=o+n;t^=-1;for(let h=o;h<u;h++)t=t>>>8^s[(t^a[h])&255];return t^-1},Ht={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},Vt={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:Kl,_tr_stored_block:Ba,_tr_flush_block:ql,_tr_tally:It,_tr_align:Xl}=jl,{Z_NO_FLUSH:Tt,Z_PARTIAL_FLUSH:Jl,Z_FULL_FLUSH:Ql,Z_FINISH:qe,Z_BLOCK:ho,Z_OK:Re,Z_STREAM_END:_o,Z_STREAM_ERROR:st,Z_DATA_ERROR:eu,Z_BUF_ERROR:Da,Z_DEFAULT_COMPRESSION:tu,Z_FILTERED:nu,Z_HUFFMAN_ONLY:Nr,Z_RLE:ru,Z_FIXED:au,Z_DEFAULT_STRATEGY:iu,Z_UNKNOWN:ou,Z_DEFLATED:Ur}=Vt,su=9,cu=15,lu=8,Ra=256+1+29,uu=30,fu=19,du=2*Ra+1,hu=15,le=3,Bt=258,ct=Bt+le+1,_u=32,dn=42,Fa=57,za=69,Ma=73,Oa=91,Na=103,jt=113,jn=666,Ne=1,hn=2,Yt=3,_n=4,pu=3,Gt=(t,a)=>(t.msg=Ht[a],a),po=t=>t*2-(t>4?9:0),Dt=t=>{let a=t.length;for(;--a>=0;)t[a]=0},mu=t=>{let a,n,o,s=t.w_size;a=t.hash_size,o=a;do n=t.head[--o],t.head[o]=n>=s?n-s:0;while(--a);a=s,o=a;do n=t.prev[--o],t.prev[o]=n>=s?n-s:0;while(--a)};let Rt=(t,a,n)=>(a<<t.hash_shift^n)&t.hash_mask;const $e=t=>{const a=t.state;let n=a.pending;n>t.avail_out&&(n=t.avail_out),n!==0&&(t.output.set(a.pending_buf.subarray(a.pending_out,a.pending_out+n),t.next_out),t.next_out+=n,a.pending_out+=n,t.total_out+=n,t.avail_out-=n,a.pending-=n,a.pending===0&&(a.pending_out=0))},He=(t,a)=>{ql(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,a),t.block_start=t.strstart,$e(t.strm)},_e=(t,a)=>{t.pending_buf[t.pending++]=a},Yn=(t,a)=>{t.pending_buf[t.pending++]=a>>>8&255,t.pending_buf[t.pending++]=a&255},Ua=(t,a,n,o)=>{let s=t.avail_in;return s>o&&(s=o),s===0?0:(t.avail_in-=s,a.set(t.input.subarray(t.next_in,t.next_in+s),n),t.state.wrap===1?t.adler=Vn(t.adler,a,s,n):t.state.wrap===2&&(t.adler=Be(t.adler,a,s,n)),t.next_in+=s,t.total_in+=s,s)},mo=(t,a)=>{let n=t.max_chain_length,o=t.strstart,s,u,h=t.prev_length,_=t.nice_match;const E=t.strstart>t.w_size-ct?t.strstart-(t.w_size-ct):0,b=t.window,x=t.w_mask,L=t.prev,z=t.strstart+Bt;let D=b[o+h-1],V=b[o+h];t.prev_length>=t.good_match&&(n>>=2),_>t.lookahead&&(_=t.lookahead);do if(s=a,!(b[s+h]!==V||b[s+h-1]!==D||b[s]!==b[o]||b[++s]!==b[o+1])){o+=2,s++;do;while(b[++o]===b[++s]&&b[++o]===b[++s]&&b[++o]===b[++s]&&b[++o]===b[++s]&&b[++o]===b[++s]&&b[++o]===b[++s]&&b[++o]===b[++s]&&b[++o]===b[++s]&&o<z);if(u=Bt-(z-o),o=z-Bt,u>h){if(t.match_start=a,h=u,u>=_)break;D=b[o+h-1],V=b[o+h]}}while((a=L[a&x])>E&&--n!==0);return h<=t.lookahead?h:t.lookahead},pn=t=>{const a=t.w_size;let n,o,s;do{if(o=t.window_size-t.lookahead-t.strstart,t.strstart>=a+(a-ct)&&(t.window.set(t.window.subarray(a,a+a-o),0),t.match_start-=a,t.strstart-=a,t.block_start-=a,t.insert>t.strstart&&(t.insert=t.strstart),mu(t),o+=a),t.strm.avail_in===0)break;if(n=Ua(t.strm,t.window,t.strstart+t.lookahead,o),t.lookahead+=n,t.lookahead+t.insert>=le)for(s=t.strstart-t.insert,t.ins_h=t.window[s],t.ins_h=Rt(t,t.ins_h,t.window[s+1]);t.insert&&(t.ins_h=Rt(t,t.ins_h,t.window[s+le-1]),t.prev[s&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=s,s++,t.insert--,!(t.lookahead+t.insert<le)););}while(t.lookahead<ct&&t.strm.avail_in!==0)},go=(t,a)=>{let n=t.pending_buf_size-5>t.w_size?t.w_size:t.pending_buf_size-5,o,s,u,h=0,_=t.strm.avail_in;do{if(o=65535,u=t.bi_valid+42>>3,t.strm.avail_out<u||(u=t.strm.avail_out-u,s=t.strstart-t.block_start,o>s+t.strm.avail_in&&(o=s+t.strm.avail_in),o>u&&(o=u),o<n&&(o===0&&a!==qe||a===Tt||o!==s+t.strm.avail_in)))break;h=a===qe&&o===s+t.strm.avail_in?1:0,Ba(t,0,0,h),t.pending_buf[t.pending-4]=o,t.pending_buf[t.pending-3]=o>>8,t.pending_buf[t.pending-2]=~o,t.pending_buf[t.pending-1]=~o>>8,$e(t.strm),s&&(s>o&&(s=o),t.strm.output.set(t.window.subarray(t.block_start,t.block_start+s),t.strm.next_out),t.strm.next_out+=s,t.strm.avail_out-=s,t.strm.total_out+=s,t.block_start+=s,o-=s),o&&(Ua(t.strm,t.strm.output,t.strm.next_out,o),t.strm.next_out+=o,t.strm.avail_out-=o,t.strm.total_out+=o)}while(h===0);return _-=t.strm.avail_in,_&&(_>=t.w_size?(t.matches=2,t.window.set(t.strm.input.subarray(t.strm.next_in-t.w_size,t.strm.next_in),0),t.strstart=t.w_size,t.insert=t.strstart):(t.window_size-t.strstart<=_&&(t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,t.insert>t.strstart&&(t.insert=t.strstart)),t.window.set(t.strm.input.subarray(t.strm.next_in-_,t.strm.next_in),t.strstart),t.strstart+=_,t.insert+=_>t.w_size-t.insert?t.w_size-t.insert:_),t.block_start=t.strstart),t.high_water<t.strstart&&(t.high_water=t.strstart),h?_n:a!==Tt&&a!==qe&&t.strm.avail_in===0&&t.strstart===t.block_start?hn:(u=t.window_size-t.strstart,t.strm.avail_in>u&&t.block_start>=t.w_size&&(t.block_start-=t.w_size,t.strstart-=t.w_size,t.window.set(t.window.subarray(t.w_size,t.w_size+t.strstart),0),t.matches<2&&t.matches++,u+=t.w_size,t.insert>t.strstart&&(t.insert=t.strstart)),u>t.strm.avail_in&&(u=t.strm.avail_in),u&&(Ua(t.strm,t.window,t.strstart,u),t.strstart+=u,t.insert+=u>t.w_size-t.insert?t.w_size-t.insert:u),t.high_water<t.strstart&&(t.high_water=t.strstart),u=t.bi_valid+42>>3,u=t.pending_buf_size-u>65535?65535:t.pending_buf_size-u,n=u>t.w_size?t.w_size:u,s=t.strstart-t.block_start,(s>=n||(s||a===qe)&&a!==Tt&&t.strm.avail_in===0&&s<=u)&&(o=s>u?u:s,h=a===qe&&t.strm.avail_in===0&&o===s?1:0,Ba(t,t.block_start,o,h),t.block_start+=o,$e(t.strm)),h?Yt:Ne)},La=(t,a)=>{let n,o;for(;;){if(t.lookahead<ct){if(pn(t),t.lookahead<ct&&a===Tt)return Ne;if(t.lookahead===0)break}if(n=0,t.lookahead>=le&&(t.ins_h=Rt(t,t.ins_h,t.window[t.strstart+le-1]),n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),n!==0&&t.strstart-n<=t.w_size-ct&&(t.match_length=mo(t,n)),t.match_length>=le)if(o=It(t,t.strstart-t.match_start,t.match_length-le),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=le){t.match_length--;do t.strstart++,t.ins_h=Rt(t,t.ins_h,t.window[t.strstart+le-1]),n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart;while(--t.match_length!==0);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=Rt(t,t.ins_h,t.window[t.strstart+1]);else o=It(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(o&&(He(t,!1),t.strm.avail_out===0))return Ne}return t.insert=t.strstart<le-1?t.strstart:le-1,a===qe?(He(t,!0),t.strm.avail_out===0?Yt:_n):t.sym_next&&(He(t,!1),t.strm.avail_out===0)?Ne:hn},mn=(t,a)=>{let n,o,s;for(;;){if(t.lookahead<ct){if(pn(t),t.lookahead<ct&&a===Tt)return Ne;if(t.lookahead===0)break}if(n=0,t.lookahead>=le&&(t.ins_h=Rt(t,t.ins_h,t.window[t.strstart+le-1]),n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=le-1,n!==0&&t.prev_length<t.max_lazy_match&&t.strstart-n<=t.w_size-ct&&(t.match_length=mo(t,n),t.match_length<=5&&(t.strategy===nu||t.match_length===le&&t.strstart-t.match_start>4096)&&(t.match_length=le-1)),t.prev_length>=le&&t.match_length<=t.prev_length){s=t.strstart+t.lookahead-le,o=It(t,t.strstart-1-t.prev_match,t.prev_length-le),t.lookahead-=t.prev_length-1,t.prev_length-=2;do++t.strstart<=s&&(t.ins_h=Rt(t,t.ins_h,t.window[t.strstart+le-1]),n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart);while(--t.prev_length!==0);if(t.match_available=0,t.match_length=le-1,t.strstart++,o&&(He(t,!1),t.strm.avail_out===0))return Ne}else if(t.match_available){if(o=It(t,0,t.window[t.strstart-1]),o&&He(t,!1),t.strstart++,t.lookahead--,t.strm.avail_out===0)return Ne}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(o=It(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<le-1?t.strstart:le-1,a===qe?(He(t,!0),t.strm.avail_out===0?Yt:_n):t.sym_next&&(He(t,!1),t.strm.avail_out===0)?Ne:hn},gu=(t,a)=>{let n,o,s,u;const h=t.window;for(;;){if(t.lookahead<=Bt){if(pn(t),t.lookahead<=Bt&&a===Tt)return Ne;if(t.lookahead===0)break}if(t.match_length=0,t.lookahead>=le&&t.strstart>0&&(s=t.strstart-1,o=h[s],o===h[++s]&&o===h[++s]&&o===h[++s])){u=t.strstart+Bt;do;while(o===h[++s]&&o===h[++s]&&o===h[++s]&&o===h[++s]&&o===h[++s]&&o===h[++s]&&o===h[++s]&&o===h[++s]&&s<u);t.match_length=Bt-(u-s),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=le?(n=It(t,1,t.match_length-le),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(n=It(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),n&&(He(t,!1),t.strm.avail_out===0))return Ne}return t.insert=0,a===qe?(He(t,!0),t.strm.avail_out===0?Yt:_n):t.sym_next&&(He(t,!1),t.strm.avail_out===0)?Ne:hn},wu=(t,a)=>{let n;for(;;){if(t.lookahead===0&&(pn(t),t.lookahead===0)){if(a===Tt)return Ne;break}if(t.match_length=0,n=It(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,n&&(He(t,!1),t.strm.avail_out===0))return Ne}return t.insert=0,a===qe?(He(t,!0),t.strm.avail_out===0?Yt:_n):t.sym_next&&(He(t,!1),t.strm.avail_out===0)?Ne:hn};function lt(t,a,n,o,s){this.good_length=t,this.max_lazy=a,this.nice_length=n,this.max_chain=o,this.func=s}const Gn=[new lt(0,0,0,0,go),new lt(4,4,8,4,La),new lt(4,5,16,8,La),new lt(4,6,32,32,La),new lt(4,4,16,16,mn),new lt(8,16,32,32,mn),new lt(8,16,128,128,mn),new lt(8,32,128,256,mn),new lt(32,128,258,1024,mn),new lt(32,258,258,4096,mn)],bu=t=>{t.window_size=2*t.w_size,Dt(t.head),t.max_lazy_match=Gn[t.level].max_lazy,t.good_match=Gn[t.level].good_length,t.nice_match=Gn[t.level].nice_length,t.max_chain_length=Gn[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=le-1,t.match_available=0,t.ins_h=0};function yu(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Ur,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(du*2),this.dyn_dtree=new Uint16Array((2*uu+1)*2),this.bl_tree=new Uint16Array((2*fu+1)*2),Dt(this.dyn_ltree),Dt(this.dyn_dtree),Dt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(hu+1),this.heap=new Uint16Array(2*Ra+1),Dt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*Ra+1),Dt(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Kn=t=>{if(!t)return 1;const a=t.state;return!a||a.strm!==t||a.status!==dn&&a.status!==Fa&&a.status!==za&&a.status!==Ma&&a.status!==Oa&&a.status!==Na&&a.status!==jt&&a.status!==jn?1:0},wo=t=>{if(Kn(t))return Gt(t,st);t.total_in=t.total_out=0,t.data_type=ou;const a=t.state;return a.pending=0,a.pending_out=0,a.wrap<0&&(a.wrap=-a.wrap),a.status=a.wrap===2?Fa:a.wrap?dn:jt,t.adler=a.wrap===2?0:1,a.last_flush=-2,Kl(a),Re},bo=t=>{const a=wo(t);return a===Re&&bu(t.state),a},vu=(t,a)=>Kn(t)||t.state.wrap!==2?st:(t.state.gzhead=a,Re),yo=(t,a,n,o,s,u)=>{if(!t)return st;let h=1;if(a===tu&&(a=6),o<0?(h=0,o=-o):o>15&&(h=2,o-=16),s<1||s>su||n!==Ur||o<8||o>15||a<0||a>9||u<0||u>au||o===8&&h!==1)return Gt(t,st);o===8&&(o=9);const _=new yu;return t.state=_,_.strm=t,_.status=dn,_.wrap=h,_.gzhead=null,_.w_bits=o,_.w_size=1<<_.w_bits,_.w_mask=_.w_size-1,_.hash_bits=s+7,_.hash_size=1<<_.hash_bits,_.hash_mask=_.hash_size-1,_.hash_shift=~~((_.hash_bits+le-1)/le),_.window=new Uint8Array(_.w_size*2),_.head=new Uint16Array(_.hash_size),_.prev=new Uint16Array(_.w_size),_.lit_bufsize=1<<s+6,_.pending_buf_size=_.lit_bufsize*4,_.pending_buf=new Uint8Array(_.pending_buf_size),_.sym_buf=_.lit_bufsize,_.sym_end=(_.lit_bufsize-1)*3,_.level=a,_.strategy=u,_.method=n,bo(t)},Eu=(t,a)=>yo(t,a,Ur,cu,lu,iu),xu=(t,a)=>{if(Kn(t)||a>ho||a<0)return t?Gt(t,st):st;const n=t.state;if(!t.output||t.avail_in!==0&&!t.input||n.status===jn&&a!==qe)return Gt(t,t.avail_out===0?Da:st);const o=n.last_flush;if(n.last_flush=a,n.pending!==0){if($e(t),t.avail_out===0)return n.last_flush=-1,Re}else if(t.avail_in===0&&po(a)<=po(o)&&a!==qe)return Gt(t,Da);if(n.status===jn&&t.avail_in!==0)return Gt(t,Da);if(n.status===dn&&n.wrap===0&&(n.status=jt),n.status===dn){let s=Ur+(n.w_bits-8<<4)<<8,u=-1;if(n.strategy>=Nr||n.level<2?u=0:n.level<6?u=1:n.level===6?u=2:u=3,s|=u<<6,n.strstart!==0&&(s|=_u),s+=31-s%31,Yn(n,s),n.strstart!==0&&(Yn(n,t.adler>>>16),Yn(n,t.adler&65535)),t.adler=1,n.status=jt,$e(t),n.pending!==0)return n.last_flush=-1,Re}if(n.status===Fa){if(t.adler=0,_e(n,31),_e(n,139),_e(n,8),n.gzhead)_e(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),_e(n,n.gzhead.time&255),_e(n,n.gzhead.time>>8&255),_e(n,n.gzhead.time>>16&255),_e(n,n.gzhead.time>>24&255),_e(n,n.level===9?2:n.strategy>=Nr||n.level<2?4:0),_e(n,n.gzhead.os&255),n.gzhead.extra&&n.gzhead.extra.length&&(_e(n,n.gzhead.extra.length&255),_e(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(t.adler=Be(t.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=za;else if(_e(n,0),_e(n,0),_e(n,0),_e(n,0),_e(n,0),_e(n,n.level===9?2:n.strategy>=Nr||n.level<2?4:0),_e(n,pu),n.status=jt,$e(t),n.pending!==0)return n.last_flush=-1,Re}if(n.status===za){if(n.gzhead.extra){let s=n.pending,u=(n.gzhead.extra.length&65535)-n.gzindex;for(;n.pending+u>n.pending_buf_size;){let _=n.pending_buf_size-n.pending;if(n.pending_buf.set(n.gzhead.extra.subarray(n.gzindex,n.gzindex+_),n.pending),n.pending=n.pending_buf_size,n.gzhead.hcrc&&n.pending>s&&(t.adler=Be(t.adler,n.pending_buf,n.pending-s,s)),n.gzindex+=_,$e(t),n.pending!==0)return n.last_flush=-1,Re;s=0,u-=_}let h=new Uint8Array(n.gzhead.extra);n.pending_buf.set(h.subarray(n.gzindex,n.gzindex+u),n.pending),n.pending+=u,n.gzhead.hcrc&&n.pending>s&&(t.adler=Be(t.adler,n.pending_buf,n.pending-s,s)),n.gzindex=0}n.status=Ma}if(n.status===Ma){if(n.gzhead.name){let s=n.pending,u;do{if(n.pending===n.pending_buf_size){if(n.gzhead.hcrc&&n.pending>s&&(t.adler=Be(t.adler,n.pending_buf,n.pending-s,s)),$e(t),n.pending!==0)return n.last_flush=-1,Re;s=0}n.gzindex<n.gzhead.name.length?u=n.gzhead.name.charCodeAt(n.gzindex++)&255:u=0,_e(n,u)}while(u!==0);n.gzhead.hcrc&&n.pending>s&&(t.adler=Be(t.adler,n.pending_buf,n.pending-s,s)),n.gzindex=0}n.status=Oa}if(n.status===Oa){if(n.gzhead.comment){let s=n.pending,u;do{if(n.pending===n.pending_buf_size){if(n.gzhead.hcrc&&n.pending>s&&(t.adler=Be(t.adler,n.pending_buf,n.pending-s,s)),$e(t),n.pending!==0)return n.last_flush=-1,Re;s=0}n.gzindex<n.gzhead.comment.length?u=n.gzhead.comment.charCodeAt(n.gzindex++)&255:u=0,_e(n,u)}while(u!==0);n.gzhead.hcrc&&n.pending>s&&(t.adler=Be(t.adler,n.pending_buf,n.pending-s,s))}n.status=Na}if(n.status===Na){if(n.gzhead.hcrc){if(n.pending+2>n.pending_buf_size&&($e(t),n.pending!==0))return n.last_flush=-1,Re;_e(n,t.adler&255),_e(n,t.adler>>8&255),t.adler=0}if(n.status=jt,$e(t),n.pending!==0)return n.last_flush=-1,Re}if(t.avail_in!==0||n.lookahead!==0||a!==Tt&&n.status!==jn){let s=n.level===0?go(n,a):n.strategy===Nr?wu(n,a):n.strategy===ru?gu(n,a):Gn[n.level].func(n,a);if((s===Yt||s===_n)&&(n.status=jn),s===Ne||s===Yt)return t.avail_out===0&&(n.last_flush=-1),Re;if(s===hn&&(a===Jl?Xl(n):a!==ho&&(Ba(n,0,0,!1),a===Ql&&(Dt(n.head),n.lookahead===0&&(n.strstart=0,n.block_start=0,n.insert=0))),$e(t),t.avail_out===0))return n.last_flush=-1,Re}return a!==qe?Re:n.wrap<=0?_o:(n.wrap===2?(_e(n,t.adler&255),_e(n,t.adler>>8&255),_e(n,t.adler>>16&255),_e(n,t.adler>>24&255),_e(n,t.total_in&255),_e(n,t.total_in>>8&255),_e(n,t.total_in>>16&255),_e(n,t.total_in>>24&255)):(Yn(n,t.adler>>>16),Yn(n,t.adler&65535)),$e(t),n.wrap>0&&(n.wrap=-n.wrap),n.pending!==0?Re:_o)},ku=t=>{if(Kn(t))return st;const a=t.state.status;return t.state=null,a===jt?Gt(t,eu):Re},Au=(t,a)=>{let n=a.length;if(Kn(t))return st;const o=t.state,s=o.wrap;if(s===2||s===1&&o.status!==dn||o.lookahead)return st;if(s===1&&(t.adler=Vn(t.adler,a,n,0)),o.wrap=0,n>=o.w_size){s===0&&(Dt(o.head),o.strstart=0,o.block_start=0,o.insert=0);let E=new Uint8Array(o.w_size);E.set(a.subarray(n-o.w_size,n),0),a=E,n=o.w_size}const u=t.avail_in,h=t.next_in,_=t.input;for(t.avail_in=n,t.next_in=0,t.input=a,pn(o);o.lookahead>=le;){let E=o.strstart,b=o.lookahead-(le-1);do o.ins_h=Rt(o,o.ins_h,o.window[E+le-1]),o.prev[E&o.w_mask]=o.head[o.ins_h],o.head[o.ins_h]=E,E++;while(--b);o.strstart=E,o.lookahead=le-1,pn(o)}return o.strstart+=o.lookahead,o.block_start=o.strstart,o.insert=o.lookahead,o.lookahead=0,o.match_length=o.prev_length=le-1,o.match_available=0,t.next_in=h,t.input=_,t.avail_in=u,o.wrap=s,Re};var Su=Eu,Cu=yo,Iu=bo,Tu=wo,Bu=vu,Du=xu,Ru=ku,Fu=Au,zu="pako deflate (from Nodeca project)",qn={deflateInit:Su,deflateInit2:Cu,deflateReset:Iu,deflateResetKeep:Tu,deflateSetHeader:Bu,deflate:Du,deflateEnd:Ru,deflateSetDictionary:Fu,deflateInfo:zu};const Mu=(t,a)=>Object.prototype.hasOwnProperty.call(t,a);var Ou=function(t){const a=Array.prototype.slice.call(arguments,1);for(;a.length;){const n=a.shift();if(n){if(typeof n!="object")throw new TypeError(n+"must be non-object");for(const o in n)Mu(n,o)&&(t[o]=n[o])}}return t},Nu=t=>{let a=0;for(let o=0,s=t.length;o<s;o++)a+=t[o].length;const n=new Uint8Array(a);for(let o=0,s=0,u=t.length;o<u;o++){let h=t[o];n.set(h,s),s+=h.length}return n},Lr={assign:Ou,flattenChunks:Nu};let vo=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{vo=!1}const Xn=new Uint8Array(256);for(let t=0;t<256;t++)Xn[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;Xn[254]=Xn[254]=1;var Uu=t=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(t);let a,n,o,s,u,h=t.length,_=0;for(s=0;s<h;s++)n=t.charCodeAt(s),(n&64512)===55296&&s+1<h&&(o=t.charCodeAt(s+1),(o&64512)===56320&&(n=65536+(n-55296<<10)+(o-56320),s++)),_+=n<128?1:n<2048?2:n<65536?3:4;for(a=new Uint8Array(_),u=0,s=0;u<_;s++)n=t.charCodeAt(s),(n&64512)===55296&&s+1<h&&(o=t.charCodeAt(s+1),(o&64512)===56320&&(n=65536+(n-55296<<10)+(o-56320),s++)),n<128?a[u++]=n:n<2048?(a[u++]=192|n>>>6,a[u++]=128|n&63):n<65536?(a[u++]=224|n>>>12,a[u++]=128|n>>>6&63,a[u++]=128|n&63):(a[u++]=240|n>>>18,a[u++]=128|n>>>12&63,a[u++]=128|n>>>6&63,a[u++]=128|n&63);return a};const Lu=(t,a)=>{if(a<65534&&t.subarray&&vo)return String.fromCharCode.apply(null,t.length===a?t:t.subarray(0,a));let n="";for(let o=0;o<a;o++)n+=String.fromCharCode(t[o]);return n};var Pu=(t,a)=>{const n=a||t.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(t.subarray(0,a));let o,s;const u=new Array(n*2);for(s=0,o=0;o<n;){let h=t[o++];if(h<128){u[s++]=h;continue}let _=Xn[h];if(_>4){u[s++]=65533,o+=_-1;continue}for(h&=_===2?31:_===3?15:7;_>1&&o<n;)h=h<<6|t[o++]&63,_--;if(_>1){u[s++]=65533;continue}h<65536?u[s++]=h:(h-=65536,u[s++]=55296|h>>10&1023,u[s++]=56320|h&1023)}return Lu(u,s)},Zu=(t,a)=>{a=a||t.length,a>t.length&&(a=t.length);let n=a-1;for(;n>=0&&(t[n]&192)===128;)n--;return n<0||n===0?a:n+Xn[t[n]]>a?n:a},Jn={string2buf:Uu,buf2string:Pu,utf8border:Zu};function Wu(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var Eo=Wu;const xo=Object.prototype.toString,{Z_NO_FLUSH:$u,Z_SYNC_FLUSH:Hu,Z_FULL_FLUSH:Vu,Z_FINISH:ju,Z_OK:Pr,Z_STREAM_END:Yu,Z_DEFAULT_COMPRESSION:Gu,Z_DEFAULT_STRATEGY:Ku,Z_DEFLATED:qu}=Vt;function Qn(t){this.options=Lr.assign({level:Gu,method:qu,chunkSize:16384,windowBits:15,memLevel:8,strategy:Ku},t||{});let a=this.options;a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Eo,this.strm.avail_out=0;let n=qn.deflateInit2(this.strm,a.level,a.method,a.windowBits,a.memLevel,a.strategy);if(n!==Pr)throw new Error(Ht[n]);if(a.header&&qn.deflateSetHeader(this.strm,a.header),a.dictionary){let o;if(typeof a.dictionary=="string"?o=Jn.string2buf(a.dictionary):xo.call(a.dictionary)==="[object ArrayBuffer]"?o=new Uint8Array(a.dictionary):o=a.dictionary,n=qn.deflateSetDictionary(this.strm,o),n!==Pr)throw new Error(Ht[n]);this._dict_set=!0}}Qn.prototype.push=function(t,a){const n=this.strm,o=this.options.chunkSize;let s,u;if(this.ended)return!1;for(a===~~a?u=a:u=a===!0?ju:$u,typeof t=="string"?n.input=Jn.string2buf(t):xo.call(t)==="[object ArrayBuffer]"?n.input=new Uint8Array(t):n.input=t,n.next_in=0,n.avail_in=n.input.length;;){if(n.avail_out===0&&(n.output=new Uint8Array(o),n.next_out=0,n.avail_out=o),(u===Hu||u===Vu)&&n.avail_out<=6){this.onData(n.output.subarray(0,n.next_out)),n.avail_out=0;continue}if(s=qn.deflate(n,u),s===Yu)return n.next_out>0&&this.onData(n.output.subarray(0,n.next_out)),s=qn.deflateEnd(this.strm),this.onEnd(s),this.ended=!0,s===Pr;if(n.avail_out===0){this.onData(n.output);continue}if(u>0&&n.next_out>0){this.onData(n.output.subarray(0,n.next_out)),n.avail_out=0;continue}if(n.avail_in===0)break}return!0},Qn.prototype.onData=function(t){this.chunks.push(t)},Qn.prototype.onEnd=function(t){t===Pr&&(this.result=Lr.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};function Pa(t,a){const n=new Qn(a);if(n.push(t,!0),n.err)throw n.msg||Ht[n.err];return n.result}function Xu(t,a){return a=a||{},a.raw=!0,Pa(t,a)}function Ju(t,a){return a=a||{},a.gzip=!0,Pa(t,a)}var Qu=Qn,ef=Pa,tf=Xu,nf=Ju,rf=Vt,af={Deflate:Qu,deflate:ef,deflateRaw:tf,gzip:nf,constants:rf};const Zr=16209,of=16191;var sf=function(a,n){let o,s,u,h,_,E,b,x,L,z,D,V,be,re,Q,de,q,Z,ue,Se,Y,me,ae,X;const K=a.state;o=a.next_in,ae=a.input,s=o+(a.avail_in-5),u=a.next_out,X=a.output,h=u-(n-a.avail_out),_=u+(a.avail_out-257),E=K.dmax,b=K.wsize,x=K.whave,L=K.wnext,z=K.window,D=K.hold,V=K.bits,be=K.lencode,re=K.distcode,Q=(1<<K.lenbits)-1,de=(1<<K.distbits)-1;e:do{V<15&&(D+=ae[o++]<<V,V+=8,D+=ae[o++]<<V,V+=8),q=be[D&Q];t:for(;;){if(Z=q>>>24,D>>>=Z,V-=Z,Z=q>>>16&255,Z===0)X[u++]=q&65535;else if(Z&16){ue=q&65535,Z&=15,Z&&(V<Z&&(D+=ae[o++]<<V,V+=8),ue+=D&(1<<Z)-1,D>>>=Z,V-=Z),V<15&&(D+=ae[o++]<<V,V+=8,D+=ae[o++]<<V,V+=8),q=re[D&de];n:for(;;){if(Z=q>>>24,D>>>=Z,V-=Z,Z=q>>>16&255,Z&16){if(Se=q&65535,Z&=15,V<Z&&(D+=ae[o++]<<V,V+=8,V<Z&&(D+=ae[o++]<<V,V+=8)),Se+=D&(1<<Z)-1,Se>E){a.msg="invalid distance too far back",K.mode=Zr;break e}if(D>>>=Z,V-=Z,Z=u-h,Se>Z){if(Z=Se-Z,Z>x&&K.sane){a.msg="invalid distance too far back",K.mode=Zr;break e}if(Y=0,me=z,L===0){if(Y+=b-Z,Z<ue){ue-=Z;do X[u++]=z[Y++];while(--Z);Y=u-Se,me=X}}else if(L<Z){if(Y+=b+L-Z,Z-=L,Z<ue){ue-=Z;do X[u++]=z[Y++];while(--Z);if(Y=0,L<ue){Z=L,ue-=Z;do X[u++]=z[Y++];while(--Z);Y=u-Se,me=X}}}else if(Y+=L-Z,Z<ue){ue-=Z;do X[u++]=z[Y++];while(--Z);Y=u-Se,me=X}for(;ue>2;)X[u++]=me[Y++],X[u++]=me[Y++],X[u++]=me[Y++],ue-=3;ue&&(X[u++]=me[Y++],ue>1&&(X[u++]=me[Y++]))}else{Y=u-Se;do X[u++]=X[Y++],X[u++]=X[Y++],X[u++]=X[Y++],ue-=3;while(ue>2);ue&&(X[u++]=X[Y++],ue>1&&(X[u++]=X[Y++]))}}else if(Z&64){a.msg="invalid distance code",K.mode=Zr;break e}else{q=re[(q&65535)+(D&(1<<Z)-1)];continue n}break}}else if(Z&64)if(Z&32){K.mode=of;break e}else{a.msg="invalid literal/length code",K.mode=Zr;break e}else{q=be[(q&65535)+(D&(1<<Z)-1)];continue t}break}}while(o<s&&u<_);ue=V>>3,o-=ue,V-=ue<<3,D&=(1<<V)-1,a.next_in=o,a.next_out=u,a.avail_in=o<s?5+(s-o):5-(o-s),a.avail_out=u<_?257+(_-u):257-(u-_),K.hold=D,K.bits=V};const gn=15,ko=852,Ao=592,So=0,Za=1,Co=2,cf=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),lf=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),uf=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),ff=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var er=(t,a,n,o,s,u,h,_)=>{const E=_.bits;let b=0,x=0,L=0,z=0,D=0,V=0,be=0,re=0,Q=0,de=0,q,Z,ue,Se,Y,me=null,ae;const X=new Uint16Array(gn+1),K=new Uint16Array(gn+1);let ut=null,Xr,wn,Jt;for(b=0;b<=gn;b++)X[b]=0;for(x=0;x<o;x++)X[a[n+x]]++;for(D=E,z=gn;z>=1&&X[z]===0;z--);if(D>z&&(D=z),z===0)return s[u++]=1<<24|64<<16|0,s[u++]=1<<24|64<<16|0,_.bits=1,0;for(L=1;L<z&&X[L]===0;L++);for(D<L&&(D=L),re=1,b=1;b<=gn;b++)if(re<<=1,re-=X[b],re<0)return-1;if(re>0&&(t===So||z!==1))return-1;for(K[1]=0,b=1;b<gn;b++)K[b+1]=K[b]+X[b];for(x=0;x<o;x++)a[n+x]!==0&&(h[K[a[n+x]]++]=x);if(t===So?(me=ut=h,ae=20):t===Za?(me=cf,ut=lf,ae=257):(me=uf,ut=ff,ae=0),de=0,x=0,b=L,Y=u,V=D,be=0,ue=-1,Q=1<<D,Se=Q-1,t===Za&&Q>ko||t===Co&&Q>Ao)return 1;for(;;){Xr=b-be,h[x]+1<ae?(wn=0,Jt=h[x]):h[x]>=ae?(wn=ut[h[x]-ae],Jt=me[h[x]-ae]):(wn=96,Jt=0),q=1<<b-be,Z=1<<V,L=Z;do Z-=q,s[Y+(de>>be)+Z]=Xr<<24|wn<<16|Jt|0;while(Z!==0);for(q=1<<b-1;de&q;)q>>=1;if(q!==0?(de&=q-1,de+=q):de=0,x++,--X[b]===0){if(b===z)break;b=a[n+h[x]]}if(b>D&&(de&Se)!==ue){for(be===0&&(be=D),Y+=L,V=b-be,re=1<<V;V+be<z&&(re-=X[V+be],!(re<=0));)V++,re<<=1;if(Q+=1<<V,t===Za&&Q>ko||t===Co&&Q>Ao)return 1;ue=de&Se,s[ue]=D<<24|V<<16|Y-u|0}}return de!==0&&(s[Y+de]=b-be<<24|64<<16|0),_.bits=D,0};const df=0,Io=1,To=2,{Z_FINISH:Bo,Z_BLOCK:hf,Z_TREES:Wr,Z_OK:Kt,Z_STREAM_END:_f,Z_NEED_DICT:pf,Z_STREAM_ERROR:Xe,Z_DATA_ERROR:Do,Z_MEM_ERROR:Ro,Z_BUF_ERROR:mf,Z_DEFLATED:Fo}=Vt,$r=16180,zo=16181,Mo=16182,Oo=16183,No=16184,Uo=16185,Lo=16186,Po=16187,Zo=16188,Wo=16189,Hr=16190,yt=16191,Wa=16192,$o=16193,$a=16194,Ho=16195,Vo=16196,jo=16197,Yo=16198,Vr=16199,jr=16200,Go=16201,Ko=16202,qo=16203,Xo=16204,Jo=16205,Ha=16206,Qo=16207,es=16208,Ee=16209,ts=16210,ns=16211,gf=852,wf=592,bf=15,rs=t=>(t>>>24&255)+(t>>>8&65280)+((t&65280)<<8)+((t&255)<<24);function yf(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const qt=t=>{if(!t)return 1;const a=t.state;return!a||a.strm!==t||a.mode<$r||a.mode>ns?1:0},as=t=>{if(qt(t))return Xe;const a=t.state;return t.total_in=t.total_out=a.total=0,t.msg="",a.wrap&&(t.adler=a.wrap&1),a.mode=$r,a.last=0,a.havedict=0,a.flags=-1,a.dmax=32768,a.head=null,a.hold=0,a.bits=0,a.lencode=a.lendyn=new Int32Array(gf),a.distcode=a.distdyn=new Int32Array(wf),a.sane=1,a.back=-1,Kt},is=t=>{if(qt(t))return Xe;const a=t.state;return a.wsize=0,a.whave=0,a.wnext=0,as(t)},os=(t,a)=>{let n;if(qt(t))return Xe;const o=t.state;return a<0?(n=0,a=-a):(n=(a>>4)+5,a<48&&(a&=15)),a&&(a<8||a>15)?Xe:(o.window!==null&&o.wbits!==a&&(o.window=null),o.wrap=n,o.wbits=a,is(t))},ss=(t,a)=>{if(!t)return Xe;const n=new yf;t.state=n,n.strm=t,n.window=null,n.mode=$r;const o=os(t,a);return o!==Kt&&(t.state=null),o},vf=t=>ss(t,bf);let cs=!0,Va,ja;const Ef=t=>{if(cs){Va=new Int32Array(512),ja=new Int32Array(32);let a=0;for(;a<144;)t.lens[a++]=8;for(;a<256;)t.lens[a++]=9;for(;a<280;)t.lens[a++]=7;for(;a<288;)t.lens[a++]=8;for(er(Io,t.lens,0,288,Va,0,t.work,{bits:9}),a=0;a<32;)t.lens[a++]=5;er(To,t.lens,0,32,ja,0,t.work,{bits:5}),cs=!1}t.lencode=Va,t.lenbits=9,t.distcode=ja,t.distbits=5},ls=(t,a,n,o)=>{let s;const u=t.state;return u.window===null&&(u.wsize=1<<u.wbits,u.wnext=0,u.whave=0,u.window=new Uint8Array(u.wsize)),o>=u.wsize?(u.window.set(a.subarray(n-u.wsize,n),0),u.wnext=0,u.whave=u.wsize):(s=u.wsize-u.wnext,s>o&&(s=o),u.window.set(a.subarray(n-o,n-o+s),u.wnext),o-=s,o?(u.window.set(a.subarray(n-o,n),0),u.wnext=o,u.whave=u.wsize):(u.wnext+=s,u.wnext===u.wsize&&(u.wnext=0),u.whave<u.wsize&&(u.whave+=s))),0},xf=(t,a)=>{let n,o,s,u,h,_,E,b,x,L,z,D,V,be,re=0,Q,de,q,Z,ue,Se,Y,me;const ae=new Uint8Array(4);let X,K;const ut=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(qt(t)||!t.output||!t.input&&t.avail_in!==0)return Xe;n=t.state,n.mode===yt&&(n.mode=Wa),h=t.next_out,s=t.output,E=t.avail_out,u=t.next_in,o=t.input,_=t.avail_in,b=n.hold,x=n.bits,L=_,z=E,me=Kt;e:for(;;)switch(n.mode){case $r:if(n.wrap===0){n.mode=Wa;break}for(;x<16;){if(_===0)break e;_--,b+=o[u++]<<x,x+=8}if(n.wrap&2&&b===35615){n.wbits===0&&(n.wbits=15),n.check=0,ae[0]=b&255,ae[1]=b>>>8&255,n.check=Be(n.check,ae,2,0),b=0,x=0,n.mode=zo;break}if(n.head&&(n.head.done=!1),!(n.wrap&1)||(((b&255)<<8)+(b>>8))%31){t.msg="incorrect header check",n.mode=Ee;break}if((b&15)!==Fo){t.msg="unknown compression method",n.mode=Ee;break}if(b>>>=4,x-=4,Y=(b&15)+8,n.wbits===0&&(n.wbits=Y),Y>15||Y>n.wbits){t.msg="invalid window size",n.mode=Ee;break}n.dmax=1<<n.wbits,n.flags=0,t.adler=n.check=1,n.mode=b&512?Wo:yt,b=0,x=0;break;case zo:for(;x<16;){if(_===0)break e;_--,b+=o[u++]<<x,x+=8}if(n.flags=b,(n.flags&255)!==Fo){t.msg="unknown compression method",n.mode=Ee;break}if(n.flags&57344){t.msg="unknown header flags set",n.mode=Ee;break}n.head&&(n.head.text=b>>8&1),n.flags&512&&n.wrap&4&&(ae[0]=b&255,ae[1]=b>>>8&255,n.check=Be(n.check,ae,2,0)),b=0,x=0,n.mode=Mo;case Mo:for(;x<32;){if(_===0)break e;_--,b+=o[u++]<<x,x+=8}n.head&&(n.head.time=b),n.flags&512&&n.wrap&4&&(ae[0]=b&255,ae[1]=b>>>8&255,ae[2]=b>>>16&255,ae[3]=b>>>24&255,n.check=Be(n.check,ae,4,0)),b=0,x=0,n.mode=Oo;case Oo:for(;x<16;){if(_===0)break e;_--,b+=o[u++]<<x,x+=8}n.head&&(n.head.xflags=b&255,n.head.os=b>>8),n.flags&512&&n.wrap&4&&(ae[0]=b&255,ae[1]=b>>>8&255,n.check=Be(n.check,ae,2,0)),b=0,x=0,n.mode=No;case No:if(n.flags&1024){for(;x<16;){if(_===0)break e;_--,b+=o[u++]<<x,x+=8}n.length=b,n.head&&(n.head.extra_len=b),n.flags&512&&n.wrap&4&&(ae[0]=b&255,ae[1]=b>>>8&255,n.check=Be(n.check,ae,2,0)),b=0,x=0}else n.head&&(n.head.extra=null);n.mode=Uo;case Uo:if(n.flags&1024&&(D=n.length,D>_&&(D=_),D&&(n.head&&(Y=n.head.extra_len-n.length,n.head.extra||(n.head.extra=new Uint8Array(n.head.extra_len)),n.head.extra.set(o.subarray(u,u+D),Y)),n.flags&512&&n.wrap&4&&(n.check=Be(n.check,o,D,u)),_-=D,u+=D,n.length-=D),n.length))break e;n.length=0,n.mode=Lo;case Lo:if(n.flags&2048){if(_===0)break e;D=0;do Y=o[u+D++],n.head&&Y&&n.length<65536&&(n.head.name+=String.fromCharCode(Y));while(Y&&D<_);if(n.flags&512&&n.wrap&4&&(n.check=Be(n.check,o,D,u)),_-=D,u+=D,Y)break e}else n.head&&(n.head.name=null);n.length=0,n.mode=Po;case Po:if(n.flags&4096){if(_===0)break e;D=0;do Y=o[u+D++],n.head&&Y&&n.length<65536&&(n.head.comment+=String.fromCharCode(Y));while(Y&&D<_);if(n.flags&512&&n.wrap&4&&(n.check=Be(n.check,o,D,u)),_-=D,u+=D,Y)break e}else n.head&&(n.head.comment=null);n.mode=Zo;case Zo:if(n.flags&512){for(;x<16;){if(_===0)break e;_--,b+=o[u++]<<x,x+=8}if(n.wrap&4&&b!==(n.check&65535)){t.msg="header crc mismatch",n.mode=Ee;break}b=0,x=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),t.adler=n.check=0,n.mode=yt;break;case Wo:for(;x<32;){if(_===0)break e;_--,b+=o[u++]<<x,x+=8}t.adler=n.check=rs(b),b=0,x=0,n.mode=Hr;case Hr:if(n.havedict===0)return t.next_out=h,t.avail_out=E,t.next_in=u,t.avail_in=_,n.hold=b,n.bits=x,pf;t.adler=n.check=1,n.mode=yt;case yt:if(a===hf||a===Wr)break e;case Wa:if(n.last){b>>>=x&7,x-=x&7,n.mode=Ha;break}for(;x<3;){if(_===0)break e;_--,b+=o[u++]<<x,x+=8}switch(n.last=b&1,b>>>=1,x-=1,b&3){case 0:n.mode=$o;break;case 1:if(Ef(n),n.mode=Vr,a===Wr){b>>>=2,x-=2;break e}break;case 2:n.mode=Vo;break;case 3:t.msg="invalid block type",n.mode=Ee}b>>>=2,x-=2;break;case $o:for(b>>>=x&7,x-=x&7;x<32;){if(_===0)break e;_--,b+=o[u++]<<x,x+=8}if((b&65535)!==(b>>>16^65535)){t.msg="invalid stored block lengths",n.mode=Ee;break}if(n.length=b&65535,b=0,x=0,n.mode=$a,a===Wr)break e;case $a:n.mode=Ho;case Ho:if(D=n.length,D){if(D>_&&(D=_),D>E&&(D=E),D===0)break e;s.set(o.subarray(u,u+D),h),_-=D,u+=D,E-=D,h+=D,n.length-=D;break}n.mode=yt;break;case Vo:for(;x<14;){if(_===0)break e;_--,b+=o[u++]<<x,x+=8}if(n.nlen=(b&31)+257,b>>>=5,x-=5,n.ndist=(b&31)+1,b>>>=5,x-=5,n.ncode=(b&15)+4,b>>>=4,x-=4,n.nlen>286||n.ndist>30){t.msg="too many length or distance symbols",n.mode=Ee;break}n.have=0,n.mode=jo;case jo:for(;n.have<n.ncode;){for(;x<3;){if(_===0)break e;_--,b+=o[u++]<<x,x+=8}n.lens[ut[n.have++]]=b&7,b>>>=3,x-=3}for(;n.have<19;)n.lens[ut[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,X={bits:n.lenbits},me=er(df,n.lens,0,19,n.lencode,0,n.work,X),n.lenbits=X.bits,me){t.msg="invalid code lengths set",n.mode=Ee;break}n.have=0,n.mode=Yo;case Yo:for(;n.have<n.nlen+n.ndist;){for(;re=n.lencode[b&(1<<n.lenbits)-1],Q=re>>>24,de=re>>>16&255,q=re&65535,!(Q<=x);){if(_===0)break e;_--,b+=o[u++]<<x,x+=8}if(q<16)b>>>=Q,x-=Q,n.lens[n.have++]=q;else{if(q===16){for(K=Q+2;x<K;){if(_===0)break e;_--,b+=o[u++]<<x,x+=8}if(b>>>=Q,x-=Q,n.have===0){t.msg="invalid bit length repeat",n.mode=Ee;break}Y=n.lens[n.have-1],D=3+(b&3),b>>>=2,x-=2}else if(q===17){for(K=Q+3;x<K;){if(_===0)break e;_--,b+=o[u++]<<x,x+=8}b>>>=Q,x-=Q,Y=0,D=3+(b&7),b>>>=3,x-=3}else{for(K=Q+7;x<K;){if(_===0)break e;_--,b+=o[u++]<<x,x+=8}b>>>=Q,x-=Q,Y=0,D=11+(b&127),b>>>=7,x-=7}if(n.have+D>n.nlen+n.ndist){t.msg="invalid bit length repeat",n.mode=Ee;break}for(;D--;)n.lens[n.have++]=Y}}if(n.mode===Ee)break;if(n.lens[256]===0){t.msg="invalid code -- missing end-of-block",n.mode=Ee;break}if(n.lenbits=9,X={bits:n.lenbits},me=er(Io,n.lens,0,n.nlen,n.lencode,0,n.work,X),n.lenbits=X.bits,me){t.msg="invalid literal/lengths set",n.mode=Ee;break}if(n.distbits=6,n.distcode=n.distdyn,X={bits:n.distbits},me=er(To,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,X),n.distbits=X.bits,me){t.msg="invalid distances set",n.mode=Ee;break}if(n.mode=Vr,a===Wr)break e;case Vr:n.mode=jr;case jr:if(_>=6&&E>=258){t.next_out=h,t.avail_out=E,t.next_in=u,t.avail_in=_,n.hold=b,n.bits=x,sf(t,z),h=t.next_out,s=t.output,E=t.avail_out,u=t.next_in,o=t.input,_=t.avail_in,b=n.hold,x=n.bits,n.mode===yt&&(n.back=-1);break}for(n.back=0;re=n.lencode[b&(1<<n.lenbits)-1],Q=re>>>24,de=re>>>16&255,q=re&65535,!(Q<=x);){if(_===0)break e;_--,b+=o[u++]<<x,x+=8}if(de&&!(de&240)){for(Z=Q,ue=de,Se=q;re=n.lencode[Se+((b&(1<<Z+ue)-1)>>Z)],Q=re>>>24,de=re>>>16&255,q=re&65535,!(Z+Q<=x);){if(_===0)break e;_--,b+=o[u++]<<x,x+=8}b>>>=Z,x-=Z,n.back+=Z}if(b>>>=Q,x-=Q,n.back+=Q,n.length=q,de===0){n.mode=Jo;break}if(de&32){n.back=-1,n.mode=yt;break}if(de&64){t.msg="invalid literal/length code",n.mode=Ee;break}n.extra=de&15,n.mode=Go;case Go:if(n.extra){for(K=n.extra;x<K;){if(_===0)break e;_--,b+=o[u++]<<x,x+=8}n.length+=b&(1<<n.extra)-1,b>>>=n.extra,x-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=Ko;case Ko:for(;re=n.distcode[b&(1<<n.distbits)-1],Q=re>>>24,de=re>>>16&255,q=re&65535,!(Q<=x);){if(_===0)break e;_--,b+=o[u++]<<x,x+=8}if(!(de&240)){for(Z=Q,ue=de,Se=q;re=n.distcode[Se+((b&(1<<Z+ue)-1)>>Z)],Q=re>>>24,de=re>>>16&255,q=re&65535,!(Z+Q<=x);){if(_===0)break e;_--,b+=o[u++]<<x,x+=8}b>>>=Z,x-=Z,n.back+=Z}if(b>>>=Q,x-=Q,n.back+=Q,de&64){t.msg="invalid distance code",n.mode=Ee;break}n.offset=q,n.extra=de&15,n.mode=qo;case qo:if(n.extra){for(K=n.extra;x<K;){if(_===0)break e;_--,b+=o[u++]<<x,x+=8}n.offset+=b&(1<<n.extra)-1,b>>>=n.extra,x-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){t.msg="invalid distance too far back",n.mode=Ee;break}n.mode=Xo;case Xo:if(E===0)break e;if(D=z-E,n.offset>D){if(D=n.offset-D,D>n.whave&&n.sane){t.msg="invalid distance too far back",n.mode=Ee;break}D>n.wnext?(D-=n.wnext,V=n.wsize-D):V=n.wnext-D,D>n.length&&(D=n.length),be=n.window}else be=s,V=h-n.offset,D=n.length;D>E&&(D=E),E-=D,n.length-=D;do s[h++]=be[V++];while(--D);n.length===0&&(n.mode=jr);break;case Jo:if(E===0)break e;s[h++]=n.length,E--,n.mode=jr;break;case Ha:if(n.wrap){for(;x<32;){if(_===0)break e;_--,b|=o[u++]<<x,x+=8}if(z-=E,t.total_out+=z,n.total+=z,n.wrap&4&&z&&(t.adler=n.check=n.flags?Be(n.check,s,z,h-z):Vn(n.check,s,z,h-z)),z=E,n.wrap&4&&(n.flags?b:rs(b))!==n.check){t.msg="incorrect data check",n.mode=Ee;break}b=0,x=0}n.mode=Qo;case Qo:if(n.wrap&&n.flags){for(;x<32;){if(_===0)break e;_--,b+=o[u++]<<x,x+=8}if(n.wrap&4&&b!==(n.total&4294967295)){t.msg="incorrect length check",n.mode=Ee;break}b=0,x=0}n.mode=es;case es:me=_f;break e;case Ee:me=Do;break e;case ts:return Ro;case ns:default:return Xe}return t.next_out=h,t.avail_out=E,t.next_in=u,t.avail_in=_,n.hold=b,n.bits=x,(n.wsize||z!==t.avail_out&&n.mode<Ee&&(n.mode<Ha||a!==Bo))&&ls(t,t.output,t.next_out,z-t.avail_out),L-=t.avail_in,z-=t.avail_out,t.total_in+=L,t.total_out+=z,n.total+=z,n.wrap&4&&z&&(t.adler=n.check=n.flags?Be(n.check,s,z,t.next_out-z):Vn(n.check,s,z,t.next_out-z)),t.data_type=n.bits+(n.last?64:0)+(n.mode===yt?128:0)+(n.mode===Vr||n.mode===$a?256:0),(L===0&&z===0||a===Bo)&&me===Kt&&(me=mf),me},kf=t=>{if(qt(t))return Xe;let a=t.state;return a.window&&(a.window=null),t.state=null,Kt},Af=(t,a)=>{if(qt(t))return Xe;const n=t.state;return n.wrap&2?(n.head=a,a.done=!1,Kt):Xe},Sf=(t,a)=>{const n=a.length;let o,s,u;return qt(t)||(o=t.state,o.wrap!==0&&o.mode!==Hr)?Xe:o.mode===Hr&&(s=1,s=Vn(s,a,n,0),s!==o.check)?Do:(u=ls(t,a,n,n),u?(o.mode=ts,Ro):(o.havedict=1,Kt))};var Cf=is,If=os,Tf=as,Bf=vf,Df=ss,Rf=xf,Ff=kf,zf=Af,Mf=Sf,Of="pako inflate (from Nodeca project)",vt={inflateReset:Cf,inflateReset2:If,inflateResetKeep:Tf,inflateInit:Bf,inflateInit2:Df,inflate:Rf,inflateEnd:Ff,inflateGetHeader:zf,inflateSetDictionary:Mf,inflateInfo:Of};function Nf(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var Uf=Nf;const us=Object.prototype.toString,{Z_NO_FLUSH:Lf,Z_FINISH:Pf,Z_OK:tr,Z_STREAM_END:Ya,Z_NEED_DICT:Ga,Z_STREAM_ERROR:Zf,Z_DATA_ERROR:fs,Z_MEM_ERROR:Wf}=Vt;function nr(t){this.options=Lr.assign({chunkSize:1024*64,windowBits:15,to:""},t||{});const a=this.options;a.raw&&a.windowBits>=0&&a.windowBits<16&&(a.windowBits=-a.windowBits,a.windowBits===0&&(a.windowBits=-15)),a.windowBits>=0&&a.windowBits<16&&!(t&&t.windowBits)&&(a.windowBits+=32),a.windowBits>15&&a.windowBits<48&&(a.windowBits&15||(a.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Eo,this.strm.avail_out=0;let n=vt.inflateInit2(this.strm,a.windowBits);if(n!==tr)throw new Error(Ht[n]);if(this.header=new Uf,vt.inflateGetHeader(this.strm,this.header),a.dictionary&&(typeof a.dictionary=="string"?a.dictionary=Jn.string2buf(a.dictionary):us.call(a.dictionary)==="[object ArrayBuffer]"&&(a.dictionary=new Uint8Array(a.dictionary)),a.raw&&(n=vt.inflateSetDictionary(this.strm,a.dictionary),n!==tr)))throw new Error(Ht[n])}nr.prototype.push=function(t,a){const n=this.strm,o=this.options.chunkSize,s=this.options.dictionary;let u,h,_;if(this.ended)return!1;for(a===~~a?h=a:h=a===!0?Pf:Lf,us.call(t)==="[object ArrayBuffer]"?n.input=new Uint8Array(t):n.input=t,n.next_in=0,n.avail_in=n.input.length;;){for(n.avail_out===0&&(n.output=new Uint8Array(o),n.next_out=0,n.avail_out=o),u=vt.inflate(n,h),u===Ga&&s&&(u=vt.inflateSetDictionary(n,s),u===tr?u=vt.inflate(n,h):u===fs&&(u=Ga));n.avail_in>0&&u===Ya&&n.state.wrap>0&&t[n.next_in]!==0;)vt.inflateReset(n),u=vt.inflate(n,h);switch(u){case Zf:case fs:case Ga:case Wf:return this.onEnd(u),this.ended=!0,!1}if(_=n.avail_out,n.next_out&&(n.avail_out===0||u===Ya))if(this.options.to==="string"){let E=Jn.utf8border(n.output,n.next_out),b=n.next_out-E,x=Jn.buf2string(n.output,E);n.next_out=b,n.avail_out=o-b,b&&n.output.set(n.output.subarray(E,E+b),0),this.onData(x)}else this.onData(n.output.length===n.next_out?n.output:n.output.subarray(0,n.next_out));if(!(u===tr&&_===0)){if(u===Ya)return u=vt.inflateEnd(this.strm),this.onEnd(u),this.ended=!0,!0;if(n.avail_in===0)break}}return!0},nr.prototype.onData=function(t){this.chunks.push(t)},nr.prototype.onEnd=function(t){t===tr&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=Lr.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};function Ka(t,a){const n=new nr(a);if(n.push(t),n.err)throw n.msg||Ht[n.err];return n.result}function $f(t,a){return a=a||{},a.raw=!0,Ka(t,a)}var Hf=nr,Vf=Ka,jf=$f,Yf=Ka,Gf=Vt,Kf={Inflate:Hf,inflate:Vf,inflateRaw:jf,ungzip:Yf,constants:Gf};const{Deflate:qf,deflate:Xf,deflateRaw:Jf,gzip:Qf}=af,{Inflate:ed,inflate:td,inflateRaw:nd,ungzip:rd}=Kf;var ad=qf,id=Xf,od=Jf,sd=Qf,cd=ed,ld=td,ud=nd,fd=rd,dd=Vt,hd={Deflate:ad,deflate:id,deflateRaw:od,gzip:sd,Inflate:cd,inflate:ld,inflateRaw:ud,ungzip:fd,constants:dd};async function _d(t,a){let n;if(a){const _=t?"-threads":"",E=a.split("/").slice(0,-1).join("/"),b=a.split("/").pop(),[x,...L]=b.split(".");n=`${E}/${x}${_}.${L.join(".")}`}else n=t?(await Ei(async()=>{const{default:_}=await import("./barretenberg-threads-q260GJI_.js");return{default:_}},[])).default:(await Ei(async()=>{const{default:_}=await import("./barretenberg-BNYrJMUL.js");return{default:_}},[])).default;const s=await(await fetch(n)).arrayBuffer(),u=new Uint8Array(s);return u[0]===31&&u[1]===139&&u[2]===8?hd.ungzip(u).buffer:u}async function ds(t=32,a,n=it()("bb.js:fetch_mat")){const o=Wi(),s=o?await pd(n):1,u=Math.min(t,s,32);n(`Fetching bb wasm from ${a??"default location"}`);const h=await _d(o,a);n(`Compiling bb wasm of ${h.byteLength} bytes`);const _=await WebAssembly.compile(h);return n("Compilation of bb wasm complete"),{module:_,threads:u}}async function pd(t){if(typeof navigator<"u"&&navigator.hardwareConcurrency)return navigator.hardwareConcurrency;try{return(await ee.e(522).then(ee.t.bind(ee,522,23))).cpus().length}catch(a){return t(`Could not detect environment to query number of threads. Falling back to one thread. Error: ${a.message??a}`),1}}const hs=32;function qa(t,a){const n=t.slice(0,a*hs);return{proof:t.slice(a*hs),publicInputs:n}}function Xa(t,a){return Uint8Array.from([...t,...a])}function Ja(t){const a=Qa(t.publicInputs);return Uint8Array.from([...a,...t.proof])}function Yr(t){const n=[];for(let o=0;o<t.length;o+=32){const s=t.slice(o,o+32);n.push(s)}return n.map(gd)}function Qa(t){const a=t.map(wd);return md(a)}function md(t){const a=t.reduce((s,u)=>s+u.length,0),n=new Uint8Array(a);let o=0;for(const s of t)n.set(s,o),o+=s.length;return n}function gd(t){const a=[];return t.forEach(function(n){let o=n.toString(16);o.length%2&&(o="0"+o),a.push(o)}),"0x"+a.join("")}function wd(t){const a=BigInt(t).toString(16).padStart(64,"0"),n=a.length/2,o=new Uint8Array(n);let s=0,u=0;for(;s<n;)o[s]=parseInt(a.slice(u,u+2),16),s+=1,u+=2;return o}class bd{constructor(a={threads:1}){this.options=a}async instantiate(){if(!this.api){const a=await Xt.new(this.options);await a.initSRSForCircuitSize(0),this.acirComposer=await a.acirNewAcirComposer(0),this.api=a}}async verifyUltraPlonkProof(a,n){await this.instantiate(),await this.api.acirLoadVerificationKey(this.acirComposer,new ze(n));const o=Ja(a);return await this.api.acirVerifyProof(this.acirComposer,o)}async verifyUltraHonkProof(a,n){await this.instantiate();const o=Xa(Qa(a.publicInputs),a.proof);return await this.api.acirVerifyUltraHonk(o,new ze(n))}async destroy(){this.api&&await this.api.destroy()}}var Ve=Uint8Array,rr=Uint16Array,yd=Int32Array,_s=new Ve([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ps=new Ve([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),vd=new Ve([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ms=function(t,a){for(var n=new rr(31),o=0;o<31;++o)n[o]=a+=1<<t[o-1];for(var s=new yd(n[30]),o=1;o<30;++o)for(var u=n[o];u<n[o+1];++u)s[u]=u-n[o]<<5|o;return{b:n,r:s}},gs=ms(_s,2),ws=gs.b,Ed=gs.r;ws[28]=258,Ed[258]=28;for(var xd=ms(ps,0),kd=xd.b,bs=new rr(32768),ve=0;ve<32768;++ve){var Ft=(ve&43690)>>1|(ve&21845)<<1;Ft=(Ft&52428)>>2|(Ft&13107)<<2,Ft=(Ft&61680)>>4|(Ft&3855)<<4,bs[ve]=((Ft&65280)>>8|(Ft&255)<<8)>>1}for(var ar=function(t,a,n){for(var o=t.length,s=0,u=new rr(a);s<o;++s)t[s]&&++u[t[s]-1];var h=new rr(a);for(s=1;s<a;++s)h[s]=h[s-1]+u[s-1]<<1;var _;{_=new rr(1<<a);var E=15-a;for(s=0;s<o;++s)if(t[s])for(var b=s<<4|t[s],x=a-t[s],L=h[t[s]-1]++<<x,z=L|(1<<x)-1;L<=z;++L)_[bs[L]>>E]=b}return _},ir=new Ve(288),ve=0;ve<144;++ve)ir[ve]=8;for(var ve=144;ve<256;++ve)ir[ve]=9;for(var ve=256;ve<280;++ve)ir[ve]=7;for(var ve=280;ve<288;++ve)ir[ve]=8;for(var ys=new Ve(32),ve=0;ve<32;++ve)ys[ve]=5;var Ad=ar(ir,9),Sd=ar(ys,5),ei=function(t){for(var a=t[0],n=1;n<t.length;++n)t[n]>a&&(a=t[n]);return a},rt=function(t,a,n){var o=a/8|0;return(t[o]|t[o+1]<<8)>>(a&7)&n},ti=function(t,a){var n=a/8|0;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>(a&7)},Cd=function(t){return(t+7)/8|0},Id=function(t,a,n){return(n==null||n>t.length)&&(n=t.length),new Ve(t.subarray(a,n))},Td=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],je=function(t,a,n){var o=new Error(a||Td[t]);if(o.code=t,Error.captureStackTrace&&Error.captureStackTrace(o,je),!n)throw o;return o},ni=function(t,a,n,o){var s=t.length,u=0;if(!s||a.f&&!a.l)return n||new Ve(0);var h=!n,_=h||a.i!=2,E=a.i;h&&(n=new Ve(s*3));var b=function(Cs){var Is=n.length;if(Cs>Is){var Ts=new Ve(Math.max(Is*2,Cs));Ts.set(n),n=Ts}},x=a.f||0,L=a.p||0,z=a.b||0,D=a.l,V=a.d,be=a.m,re=a.n,Q=s*8;do{if(!D){x=rt(t,L,1);var de=rt(t,L+1,3);if(L+=3,de)if(de==1)D=Ad,V=Sd,be=9,re=5;else if(de==2){var Se=rt(t,L,31)+257,Y=rt(t,L+10,15)+4,me=Se+rt(t,L+5,31)+1;L+=14;for(var ae=new Ve(me),X=new Ve(19),K=0;K<Y;++K)X[vd[K]]=rt(t,L+K*3,7);L+=Y*3;for(var ut=ei(X),Xr=(1<<ut)-1,wn=ar(X,ut),K=0;K<me;){var Jt=wn[rt(t,L,Xr)];L+=Jt&15;var q=Jt>>4;if(q<16)ae[K++]=q;else{var bn=0,Jr=0;for(q==16?(Jr=3+rt(t,L,3),L+=2,bn=ae[K-1]):q==17?(Jr=3+rt(t,L,7),L+=3):q==18&&(Jr=11+rt(t,L,127),L+=7);Jr--;)ae[K++]=bn}}var xs=ae.subarray(0,Se),zt=ae.subarray(Se);be=ei(xs),re=ei(zt),D=ar(xs,be),V=ar(zt,re)}else je(1);else{var q=Cd(L)+4,Z=t[q-4]|t[q-3]<<8,ue=q+Z;if(ue>s){E&&je(0);break}_&&b(z+Z),n.set(t.subarray(q,ue),z),a.b=z+=Z,a.p=L=ue*8,a.f=x;continue}if(L>Q){E&&je(0);break}}_&&b(z+131072);for(var Hd=(1<<be)-1,Vd=(1<<re)-1,ai=L;;ai=L){var bn=D[ti(t,L)&Hd],yn=bn>>4;if(L+=bn&15,L>Q){E&&je(0);break}if(bn||je(2),yn<256)n[z++]=yn;else if(yn==256){ai=L,D=null;break}else{var ks=yn-254;if(yn>264){var K=yn-257,or=_s[K];ks=rt(t,L,(1<<or)-1)+ws[K],L+=or}var ii=V[ti(t,L)&Vd],oi=ii>>4;ii||je(3),L+=ii&15;var zt=kd[oi];if(oi>3){var or=ps[oi];zt+=ti(t,L)&(1<<or)-1,L+=or}if(L>Q){E&&je(0);break}_&&b(z+131072);var As=z+ks;if(z<zt){var Ss=u-zt,jd=Math.min(zt,As);for(Ss+z<0&&je(3);z<jd;++z)n[z]=o[Ss+z]}for(;z<As;++z)n[z]=n[z-zt]}}a.l=D,a.p=ai,a.b=z,a.f=x,D&&(x=1,a.m=be,a.d=V,a.n=re)}while(!x);return z!=n.length&&h?Id(n,0,z):n.subarray(0,z)},Bd=new Ve(0),Dd=function(t){(t[0]!=31||t[1]!=139||t[2]!=8)&&je(6,"invalid gzip data");var a=t[3],n=10;a&4&&(n+=(t[10]|t[11]<<8)+2);for(var o=(a>>3&1)+(a>>4&1);o>0;o-=!t[n++]);return n+(a&2)},Rd=function(t){var a=t.length;return(t[a-4]|t[a-3]<<8|t[a-2]<<16|t[a-1]<<24)>>>0},Fd=function(t,a){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&je(6,"invalid zlib data"),(t[1]>>5&1)==+!a&&je(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};function zd(t,a){return ni(t,{i:2},a,a)}function Md(t,a){var n=Dd(t);return n+8>t.length&&je(6,"invalid gzip data"),ni(t.subarray(n,-8),{i:2},new Ve(Rd(t)),a)}function Od(t,a){return ni(t.subarray(Fd(t,a),-4),{i:2},a,a)}function Gr(t,a){return t[0]==31&&t[1]==139&&t[2]==8?Md(t,a):(t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31?zd(t,a):Od(t,a)}typeof TextEncoder<"u"&&new TextEncoder;var Nd=typeof TextDecoder<"u"&&new TextDecoder,Ud=0;try{Nd.decode(Bd,{stream:!0}),Ud=1}catch{}var vs=ee(764).lW;class Ld extends Error{constructor(a){super(a)}}class Pd{constructor(a,n={threads:1},o={recursive:!1}){this.backendOptions=n,this.circuitOptions=o,this.acirUncompressedBytecode=Es(a)}async instantiate(){if(!this.api){const a=await Xt.new(this.backendOptions),n=!1,[o,s]=await a.acirGetCircuitSizes(this.acirUncompressedBytecode,this.circuitOptions.recursive,n);await a.initSRSForCircuitSize(s),this.acirComposer=await a.acirNewAcirComposer(s),await a.acirInitProvingKey(this.acirComposer,this.acirUncompressedBytecode,this.circuitOptions.recursive),this.api=a}}async generateProof(a){await this.instantiate();const n=await this.api.acirCreateProof(this.acirComposer,this.acirUncompressedBytecode,this.circuitOptions.recursive,Gr(a)),s=n.length-2144,u=n.slice(0,s),h=n.slice(s),_=Yr(u);return{proof:h,publicInputs:_}}async generateRecursiveProofArtifacts(a,n=0){await this.instantiate();const o=Ja(a),s=(await this.api.acirSerializeProofIntoFields(this.acirComposer,o,n)).slice(n);await this.api.acirInitVerificationKey(this.acirComposer);const u=await this.api.acirSerializeVerificationKeyIntoFields(this.acirComposer);return{proofAsFields:s.map(h=>h.toString()),vkAsFields:u[0].map(h=>h.toString()),vkHash:u[1].toString()}}async verifyProof(a){await this.instantiate(),await this.api.acirInitVerificationKey(this.acirComposer);const n=Ja(a);return await this.api.acirVerifyProof(this.acirComposer,n)}async getVerificationKey(){return await this.instantiate(),await this.api.acirInitVerificationKey(this.acirComposer),await this.api.acirGetVerificationKey(this.acirComposer)}async getSolidityVerifier(){return await this.instantiate(),await this.api.acirInitVerificationKey(this.acirComposer),await this.api.acirGetSolidityVerifier(this.acirComposer)}async destroy(){this.api&&await this.api.destroy()}}class Zd{constructor(a,n={threads:1},o={recursive:!1}){this.backendOptions=n,this.circuitOptions=o,this.acirUncompressedBytecode=Es(a)}async instantiate(){if(!this.api){const a=await Xt.new(this.backendOptions);await a.acirInitSRS(this.acirUncompressedBytecode,this.circuitOptions.recursive,!0),this.api=a}}async generateProof(a,n){await this.instantiate();const s=await(n!=null&&n.keccak?this.api.acirProveUltraKeccakHonk.bind(this.api):this.api.acirProveUltraHonk.bind(this.api))(this.acirUncompressedBytecode,this.circuitOptions.recursive,Gr(a)),h=await(n!=null&&n.keccak?this.api.acirWriteVkUltraKeccakHonk.bind(this.api):this.api.acirWriteVkUltraHonk.bind(this.api))(this.acirUncompressedBytecode,this.circuitOptions.recursive),_=await this.api.acirVkAsFieldsUltraHonk(new ze(h)),E=Number(_[1].toString()),{proof:b,publicInputs:x}=qa(s,E),L=Yr(x);return{proof:b,publicInputs:L}}async generateProofForRecursiveAggregation(a,n){await this.instantiate();const s=await(n!=null&&n.keccak?this.api.acirProveUltraKeccakHonk.bind(this.api):this.api.acirProveUltraHonk.bind(this.api))(this.acirUncompressedBytecode,this.circuitOptions.recursive,Gr(a)),h=await(n!=null&&n.keccak?this.api.acirWriteVkUltraKeccakHonk.bind(this.api):this.api.acirWriteVkUltraHonk.bind(this.api))(this.acirUncompressedBytecode,this.circuitOptions.recursive),_=await this.api.acirVkAsFieldsUltraHonk(new ze(h)),x=Number(_[1].toString())-16,{proof:L,publicInputs:z}=qa(s,x),D=Yr(z);return{proof:Yr(L),publicInputs:D}}async verifyProof(a,n){await this.instantiate();const o=Xa(Qa(a.publicInputs),a.proof),s=n!=null&&n.keccak?this.api.acirWriteVkUltraKeccakHonk.bind(this.api):this.api.acirWriteVkUltraHonk.bind(this.api),u=n!=null&&n.keccak?this.api.acirVerifyUltraKeccakHonk.bind(this.api):this.api.acirVerifyUltraHonk.bind(this.api),h=await s(this.acirUncompressedBytecode,this.circuitOptions.recursive);return await u(o,new ze(h))}async getVerificationKey(a){return await this.instantiate(),a!=null&&a.keccak?await this.api.acirWriteVkUltraKeccakHonk(this.acirUncompressedBytecode,this.circuitOptions.recursive):await this.api.acirWriteVkUltraHonk(this.acirUncompressedBytecode,this.circuitOptions.recursive)}async getSolidityVerifier(a){await this.instantiate();const n=a??await this.api.acirWriteVkUltraKeccakHonk(this.acirUncompressedBytecode,this.circuitOptions.recursive);return await this.api.acirHonkSolidityVerifier(this.acirUncompressedBytecode,new ze(n))}async generateRecursiveProofArtifacts(a,n){await this.instantiate();const o=await this.api.acirWriteVkUltraHonk(this.acirUncompressedBytecode,this.circuitOptions.recursive),s=await this.api.acirVkAsFieldsUltraHonk(o);return{proofAsFields:[],vkAsFields:s.map(u=>u.toString()),vkHash:""}}async destroy(){this.api&&await this.api.destroy()}}class Wd{constructor(a,n={threads:1}){this.acirMsgpack=a,this.options=n}async instantiate(){if(!this.api){const a=await Xt.new(this.options);await a.initSRSClientIVC(),this.api=a}}async prove(a){await this.instantiate();const n=await this.api.acirProveAztecClient(this.acirMsgpack,a),[o,s]=n;if(!await this.verify(o,s))throw new Ld("Failed to verify the private (ClientIVC) transaction proof!");return n}async verify(a,n){return await this.instantiate(),this.api.acirVerifyAztecClient(a,n)}async proveAndVerify(a){return await this.instantiate(),this.api.acirProveAndVerifyAztecClient(this.acirMsgpack,a)}async gates(){return await this.instantiate(),this.api.acirGatesAztecClient(this.acirMsgpack)}async destroy(){this.api&&await this.api.destroy()}}function Es(t){const a=$d(t);return Gr(a)}function $d(t){if(typeof vs<"u"){const a=vs.from(t,"base64");return new Uint8Array(a.buffer,a.byteOffset,a.byteLength)}else{if(typeof atob=="function")return Uint8Array.from(atob(t),a=>a.charCodeAt(0));throw new Error("No implementation found for base64 decoding.")}}class Xt extends fl{constructor(a,n,o){super(n),this.worker=a,this.options=o}static async new(a={}){var h,_;const n=ml(),o=$i(n),{module:s,threads:u}=await ds(a.threads,a.wasmPath,a.logger);return await o.init(s,u,Ce(a.logger??it()("bb.js:bb_wasm_async")),(h=a.memory)==null?void 0:h.initial,(_=a.memory)==null?void 0:_.maximum),new Xt(n,o,a)}async getNumThreads(){return await this.wasm.getNumThreads()}async initSRSForCircuitSize(a){const n=await R.new(a+1,this.options.crsPath,this.options.logger);await this.srsInitSrs(new ze(n.getG1Data()),n.numPoints,new ze(n.getG2Data()))}async initSRSClientIVC(){const a=await R.new(1048577,this.options.crsPath,this.options.logger),n=await T.new(2**16+1,this.options.crsPath,this.options.logger);await this.srsInitSrs(new ze(a.getG1Data()),a.numPoints,new ze(a.getG2Data())),await this.srsInitGrumpkinSrs(new ze(n.getG1Data()),n.numPoints)}async acirInitSRS(a,n,o){const[s,u]=await this.acirGetCircuitSizes(a,n,o);return this.initSRSForCircuitSize(u)}async destroy(){await this.wasm.destroy(),await this.worker.terminate()}}let ri,Kr;class qr extends dl{constructor(a){super(a)}static async new(a,n=it()("bb.js:bb_wasm_sync")){const o=new zr,{module:s,threads:u}=await ds(1,a,n);return await o.init(s,u,n),new qr(o)}static async initSingleton(a,n=it()("bb.js:bb_wasm_sync")){return ri||(ri=qr.new(a,n)),Kr=await ri,Kr}static getSingleton(){if(!Kr)throw new Error("First call BarretenbergSync.initSingleton() on @aztec/bb.js module.");return Kr}getWasm(){return this.wasm}}})();Ke.Dv;var oh=Ke.Zh;Ke.AL;Ke.tD;Ke.i2;Ke.Fr;Ke.pS;Ke.ld;var sh=Ke.yh;Ke._7;Ke.H2;Ke.ly;let ge;function cr(e){const i=ge.__externref_table_alloc();return ge.__wbindgen_export_2.set(i,e),i}function vn(e,i){try{return e.apply(this,i)}catch(r){const l=cr(r);ge.__wbindgen_exn_store(l)}}const kc=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&kc.decode();let lr=null;function Sn(){return(lr===null||lr.byteLength===0)&&(lr=new Uint8Array(ge.memory.buffer)),lr}function En(e,i){return e=e>>>0,kc.decode(Sn().subarray(e,e+i))}let on=0;const ia=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},ch=typeof ia.encodeInto=="function"?function(e,i){return ia.encodeInto(e,i)}:function(e,i){const r=ia.encode(e);return i.set(r),{read:e.length,written:r.length}};function si(e,i,r){if(r===void 0){const v=ia.encode(e),C=i(v.length,1)>>>0;return Sn().subarray(C,C+v.length).set(v),on=v.length,C}let l=e.length,d=i(l,1)>>>0;const m=Sn();let w=0;for(;w<l;w++){const v=e.charCodeAt(w);if(v>127)break;m[d+w]=v}if(w!==l){w!==0&&(e=e.slice(w)),d=r(d,l,l=w+e.length*3,1)>>>0;const v=Sn().subarray(d+w,d+l),C=ch(e,v);w+=C.written,d=r(d,l,w,1)>>>0}return on=w,d}let en=null;function Mt(){return(en===null||en.buffer.detached===!0||en.buffer.detached===void 0&&en.buffer!==ge.memory.buffer)&&(en=new DataView(ge.memory.buffer)),en}function Qt(e){return e==null}const Fs=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(e=>{ge.__wbindgen_export_6.get(e.dtor)(e.a,e.b)});function lh(e,i,r,l){const d={a:e,b:i,cnt:1,dtor:r},m=(...w)=>{d.cnt++;const v=d.a;d.a=0;try{return l(v,d.b,...w)}finally{--d.cnt===0?(ge.__wbindgen_export_6.get(d.dtor)(v,d.b),Fs.unregister(d)):d.a=v}};return m.original=d,Fs.register(m,d,d),m}function xi(e){const i=typeof e;if(i=="number"||i=="boolean"||e==null)return`${e}`;if(i=="string")return`"${e}"`;if(i=="symbol"){const d=e.description;return d==null?"Symbol":`Symbol(${d})`}if(i=="function"){const d=e.name;return typeof d=="string"&&d.length>0?`Function(${d})`:"Function"}if(Array.isArray(e)){const d=e.length;let m="[";d>0&&(m+=xi(e[0]));for(let w=1;w<d;w++)m+=", "+xi(e[w]);return m+="]",m}const r=/\[object ([^\]]+)\]/.exec(toString.call(e));let l;if(r&&r.length>1)l=r[1];else return toString.call(e);if(l=="Object")try{return"Object("+JSON.stringify(e)+")"}catch{return"Object"}return e instanceof Error?`${e.name}: ${e.message}
${e.stack}`:l}function uh(e,i){const r=i(e.length*1,1)>>>0;return Sn().set(e,r/1),on=e.length,r}function fh(e,i,r){const l=uh(e,ge.__wbindgen_malloc),d=on;return ge.executeProgram(l,d,i,r)}function dh(e){const i=ge.__wbindgen_export_2.get(e);return ge.__externref_table_dealloc(e),i}function hh(e,i){return e=e>>>0,Sn().subarray(e/1,e/1+i)}function _h(e){const i=ge.compressWitnessStack(e);if(i[3])throw dh(i[2]);var r=hh(i[0],i[1]).slice();return ge.__wbindgen_free(i[0],i[1]*1,1),r}function ph(e,i,r){ge.closure255_externref_shim(e,i,r)}function mh(e,i,r,l,d){ge.closure807_externref_shim(e,i,r,l,d)}function zs(e,i,r,l){ge.closure811_externref_shim(e,i,r,l)}async function gh(e,i){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,i)}catch(l){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",l);else throw l}const r=await e.arrayBuffer();return await WebAssembly.instantiate(r,i)}else{const r=await WebAssembly.instantiate(e,i);return r instanceof WebAssembly.Instance?{instance:r,module:e}:r}}function wh(){const e={};return e.wbg={},e.wbg.__wbg_call_672a4d21634d4a24=function(){return vn(function(i,r){return i.call(r)},arguments)},e.wbg.__wbg_call_7cccdd69e0791ae2=function(){return vn(function(i,r,l){return i.call(r,l)},arguments)},e.wbg.__wbg_call_833bed5770ea2041=function(){return vn(function(i,r,l,d){return i.call(r,l,d)},arguments)},e.wbg.__wbg_constructor_057bae5a20622f39=function(i){return new Error(i)},e.wbg.__wbg_constructor_37b4c4c6c4cd93e2=function(i){return new Error(i)},e.wbg.__wbg_debug_3cb59063b29f58c1=function(i){console.debug(i)},e.wbg.__wbg_debug_e17b51583ca6a632=function(i,r,l,d){console.debug(i,r,l,d)},e.wbg.__wbg_error_524f506f44df1645=function(i){console.error(i)},e.wbg.__wbg_error_7534b8e9a36f1ab4=function(i,r){let l,d;try{l=i,d=r,console.error(En(i,r))}finally{ge.__wbindgen_free(l,d,1)}},e.wbg.__wbg_error_80de38b3f7cc3c3c=function(i,r,l,d){console.error(i,r,l,d)},e.wbg.__wbg_forEach_d6a05ca96422eff9=function(i,r,l){try{var d={a:r,b:l},m=(w,v,C)=>{const p=d.a;d.a=0;try{return mh(p,d.b,w,v,C)}finally{d.a=p}};i.forEach(m)}finally{d.a=d.b=0}},e.wbg.__wbg_forEach_e1cf6f7c8ecb7dae=function(i,r,l){try{var d={a:r,b:l},m=(w,v)=>{const C=d.a;d.a=0;try{return zs(C,d.b,w,v)}finally{d.a=C}};i.forEach(m)}finally{d.a=d.b=0}},e.wbg.__wbg_fromEntries_524679eecb0bdc2e=function(){return vn(function(i){return Object.fromEntries(i)},arguments)},e.wbg.__wbg_from_2a5d3e218e67aa85=function(i){return Array.from(i)},e.wbg.__wbg_get_b9b93047fe3cf45b=function(i,r){return i[r>>>0]},e.wbg.__wbg_info_033d8b8a0838f1d3=function(i,r,l,d){console.info(i,r,l,d)},e.wbg.__wbg_info_3daf2e093e091b66=function(i){console.info(i)},e.wbg.__wbg_length_e2d2a49132c1b256=function(i){return i.length},e.wbg.__wbg_new_23a2665fac83c611=function(i,r){try{var l={a:i,b:r},d=(w,v)=>{const C=l.a;l.a=0;try{return zs(C,l.b,w,v)}finally{l.a=C}};return new Promise(d)}finally{l.a=l.b=0}},e.wbg.__wbg_new_2a807b4b89247fc6=function(){return new Map},e.wbg.__wbg_new_5e0be73521bc8c17=function(){return new Map},e.wbg.__wbg_new_6cb84102b00476a8=function(){return new Array},e.wbg.__wbg_new_78feb108b6472713=function(){return new Array},e.wbg.__wbg_new_8a6f238a6ece86ea=function(){return new Error},e.wbg.__wbg_new_c68d7209be747379=function(i,r){return new Error(En(i,r))},e.wbg.__wbg_newnoargs_105ed471475aaf50=function(i,r){return new Function(En(i,r))},e.wbg.__wbg_parse_def2e24ef1252aff=function(){return vn(function(i,r){return JSON.parse(En(i,r))},arguments)},e.wbg.__wbg_push_737cfc8c1432c2c6=function(i,r){return i.push(r)},e.wbg.__wbg_queueMicrotask_97d92b4fcc8a61c5=function(i){queueMicrotask(i)},e.wbg.__wbg_queueMicrotask_d3219def82552485=function(i){return i.queueMicrotask},e.wbg.__wbg_resolve_4851785c9c5f573d=function(i){return Promise.resolve(i)},e.wbg.__wbg_reverse_71c11f9686a5c11b=function(i){return i.reverse()},e.wbg.__wbg_set_8fc6bf8a5b1071d1=function(i,r,l){return i.set(r,l)},e.wbg.__wbg_set_bb8cecf6a62b9f46=function(){return vn(function(i,r,l){return Reflect.set(i,r,l)},arguments)},e.wbg.__wbg_setcause_180f5110152d3ce3=function(i,r){i.cause=r},e.wbg.__wbg_stack_0ed75d68575b0f3c=function(i,r){const l=r.stack,d=si(l,ge.__wbindgen_malloc,ge.__wbindgen_realloc),m=on;Mt().setInt32(i+4*1,m,!0),Mt().setInt32(i+4*0,d,!0)},e.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07=function(){const i=typeof global>"u"?null:global;return Qt(i)?0:cr(i)},e.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0=function(){const i=typeof globalThis>"u"?null:globalThis;return Qt(i)?0:cr(i)},e.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819=function(){const i=typeof self>"u"?null:self;return Qt(i)?0:cr(i)},e.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40=function(){const i=typeof window>"u"?null:window;return Qt(i)?0:cr(i)},e.wbg.__wbg_then_44b73946d2fb3e7d=function(i,r){return i.then(r)},e.wbg.__wbg_then_48b406749878a531=function(i,r,l){return i.then(r,l)},e.wbg.__wbg_values_fcb8ba8c0aad8b58=function(i){return Object.values(i)},e.wbg.__wbg_warn_4ca3906c248c47c4=function(i){console.warn(i)},e.wbg.__wbg_warn_aaf1f4664a035bd6=function(i,r,l,d){console.warn(i,r,l,d)},e.wbg.__wbindgen_cb_drop=function(i){const r=i.original;return r.cnt--==1?(r.a=0,!0):!1},e.wbg.__wbindgen_closure_wrapper739=function(i,r,l){return lh(i,r,256,ph)},e.wbg.__wbindgen_debug_string=function(i,r){const l=xi(r),d=si(l,ge.__wbindgen_malloc,ge.__wbindgen_realloc),m=on;Mt().setInt32(i+4*1,m,!0),Mt().setInt32(i+4*0,d,!0)},e.wbg.__wbindgen_init_externref_table=function(){const i=ge.__wbindgen_export_2,r=i.grow(4);i.set(0,void 0),i.set(r+0,void 0),i.set(r+1,null),i.set(r+2,!0),i.set(r+3,!1)},e.wbg.__wbindgen_is_array=function(i){return Array.isArray(i)},e.wbg.__wbindgen_is_function=function(i){return typeof i=="function"},e.wbg.__wbindgen_is_string=function(i){return typeof i=="string"},e.wbg.__wbindgen_is_undefined=function(i){return i===void 0},e.wbg.__wbindgen_number_get=function(i,r){const l=r,d=typeof l=="number"?l:void 0;Mt().setFloat64(i+8*1,Qt(d)?0:d,!0),Mt().setInt32(i+4*0,!Qt(d),!0)},e.wbg.__wbindgen_number_new=function(i){return i},e.wbg.__wbindgen_string_get=function(i,r){const l=r,d=typeof l=="string"?l:void 0;var m=Qt(d)?0:si(d,ge.__wbindgen_malloc,ge.__wbindgen_realloc),w=on;Mt().setInt32(i+4*1,w,!0),Mt().setInt32(i+4*0,m,!0)},e.wbg.__wbindgen_string_new=function(i,r){return En(i,r)},e.wbg.__wbindgen_throw=function(i,r){throw new Error(En(i,r))},e}function bh(e,i){return ge=e.exports,Ac.__wbindgen_wasm_module=i,en=null,lr=null,ge.__wbindgen_start(),ge}async function Ac(e){if(ge!==void 0)return ge;typeof e<"u"&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),typeof e>"u"&&(e=new URL("/assets/acvm_js_bg-BCJU0JTa.wasm",import.meta.url));const i=wh();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:r,module:l}=await gh(await e,i);return bh(r,l)}let Ae;const Sc=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&Sc.decode();let ur=null;function oa(){return(ur===null||ur.byteLength===0)&&(ur=new Uint8Array(Ae.memory.buffer)),ur}function Qr(e,i){return e=e>>>0,Sc.decode(oa().subarray(e,e+i))}function Cc(e){const i=Ae.__externref_table_alloc();return Ae.__wbindgen_export_3.set(i,e),i}function Ms(e,i){try{return e.apply(this,i)}catch(r){const l=Cc(r);Ae.__wbindgen_exn_store(l)}}let ua=0;const sa=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},yh=typeof sa.encodeInto=="function"?function(e,i){return sa.encodeInto(e,i)}:function(e,i){const r=sa.encode(e);return i.set(r),{read:e.length,written:r.length}};function Os(e,i,r){if(r===void 0){const v=sa.encode(e),C=i(v.length,1)>>>0;return oa().subarray(C,C+v.length).set(v),ua=v.length,C}let l=e.length,d=i(l,1)>>>0;const m=oa();let w=0;for(;w<l;w++){const v=e.charCodeAt(w);if(v>127)break;m[d+w]=v}if(w!==l){w!==0&&(e=e.slice(w)),d=r(d,l,l=w+e.length*3,1)>>>0;const v=oa().subarray(d+w,d+l),C=yh(e,v);w+=C.written,d=r(d,l,w,1)>>>0}return ua=w,d}let tn=null;function xn(){return(tn===null||tn.buffer.detached===!0||tn.buffer.detached===void 0&&tn.buffer!==Ae.memory.buffer)&&(tn=new DataView(Ae.memory.buffer)),tn}function ca(e){return e==null}function In(e){const i=Ae.__wbindgen_export_3.get(e);return Ae.__externref_table_dealloc(e),i}function vh(e,i,r){const l=Ae.abiEncode(e,i,ca(r)?0:Cc(r));if(l[2])throw In(l[1]);return In(l[0])}function Eh(e,i){const r=Ae.abiDecode(e,i);if(r[2])throw In(r[1]);return In(r[0])}function xh(e,i){const r=Ae.abiDecodeError(e,i);if(r[2])throw In(r[1]);return In(r[0])}function kh(e,i,r,l){Ae.closure163_externref_shim(e,i,r,l)}async function Ah(e,i){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,i)}catch(l){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",l);else throw l}const r=await e.arrayBuffer();return await WebAssembly.instantiate(r,i)}else{const r=await WebAssembly.instantiate(e,i);return r instanceof WebAssembly.Instance?{instance:r,module:e}:r}}function Sh(){const e={};return e.wbg={},e.wbg.__wbg_constructor_18cb56d3ad626c63=function(i){return new Error(i)},e.wbg.__wbg_error_7534b8e9a36f1ab4=function(i,r){let l,d;try{l=i,d=r,console.error(Qr(i,r))}finally{Ae.__wbindgen_free(l,d,1)}},e.wbg.__wbg_forEach_e1cf6f7c8ecb7dae=function(i,r,l){try{var d={a:r,b:l},m=(w,v)=>{const C=d.a;d.a=0;try{return kh(C,d.b,w,v)}finally{d.a=C}};i.forEach(m)}finally{d.a=d.b=0}},e.wbg.__wbg_new_481820c155731f92=function(){return new Map},e.wbg.__wbg_new_8a6f238a6ece86ea=function(){return new Error},e.wbg.__wbg_parse_def2e24ef1252aff=function(){return Ms(function(i,r){return JSON.parse(Qr(i,r))},arguments)},e.wbg.__wbg_set_8fc6bf8a5b1071d1=function(i,r,l){return i.set(r,l)},e.wbg.__wbg_stack_0ed75d68575b0f3c=function(i,r){const l=r.stack,d=Os(l,Ae.__wbindgen_malloc,Ae.__wbindgen_realloc),m=ua;xn().setInt32(i+4*1,m,!0),xn().setInt32(i+4*0,d,!0)},e.wbg.__wbg_stringify_f7ed6987935b4a24=function(){return Ms(function(i){return JSON.stringify(i)},arguments)},e.wbg.__wbindgen_init_externref_table=function(){const i=Ae.__wbindgen_export_3,r=i.grow(4);i.set(0,void 0),i.set(r+0,void 0),i.set(r+1,null),i.set(r+2,!0),i.set(r+3,!1)},e.wbg.__wbindgen_is_undefined=function(i){return i===void 0},e.wbg.__wbindgen_number_get=function(i,r){const l=r,d=typeof l=="number"?l:void 0;xn().setFloat64(i+8*1,ca(d)?0:d,!0),xn().setInt32(i+4*0,!ca(d),!0)},e.wbg.__wbindgen_number_new=function(i){return i},e.wbg.__wbindgen_string_get=function(i,r){const l=r,d=typeof l=="string"?l:void 0;var m=ca(d)?0:Os(d,Ae.__wbindgen_malloc,Ae.__wbindgen_realloc),w=ua;xn().setInt32(i+4*1,w,!0),xn().setInt32(i+4*0,m,!0)},e.wbg.__wbindgen_string_new=function(i,r){return Qr(i,r)},e.wbg.__wbindgen_throw=function(i,r){throw new Error(Qr(i,r))},e}function Ch(e,i){return Ae=e.exports,ki.__wbindgen_wasm_module=i,tn=null,ur=null,Ae.__wbindgen_start(),Ae}async function ki(e){if(Ae!==void 0)return Ae;typeof e<"u"&&(Object.getPrototypeOf(e)===Object.prototype?{module_or_path:e}=e:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),typeof e>"u"&&(e=new URL("/assets/noirc_abi_wasm_bg-S5za8SxL.wasm",import.meta.url));const i=Sh();(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:r,module:l}=await Ah(await e,i);return Ch(r,l)}function Ic(e){if(typeof Buffer<"u")return Buffer.from(e,"base64");if(typeof atob=="function")return Uint8Array.from(atob(e),i=>i.charCodeAt(0));throw new Error("No implementation found for base64 decoding.")}/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */const Ih=4,Ns=0,Us=1,Th=2;function Rn(e){let i=e.length;for(;--i>=0;)e[i]=0}const Bh=0,Tc=1,Dh=2,Rh=3,Fh=258,zi=29,kr=256,mr=kr+1+zi,Cn=30,Mi=19,Bc=2*mr+1,nn=15,ci=16,zh=7,Oi=256,Dc=16,Rc=17,Fc=18,Ai=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),la=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),Mh=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),zc=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Oh=512,xt=new Array((mr+2)*2);Rn(xt);const hr=new Array(Cn*2);Rn(hr);const gr=new Array(Oh);Rn(gr);const wr=new Array(Fh-Rh+1);Rn(wr);const Ni=new Array(zi);Rn(Ni);const fa=new Array(Cn);Rn(fa);function li(e,i,r,l,d){this.static_tree=e,this.extra_bits=i,this.extra_base=r,this.elems=l,this.max_length=d,this.has_stree=e&&e.length}let Mc,Oc,Nc;function ui(e,i){this.dyn_tree=e,this.max_code=0,this.stat_desc=i}const Uc=e=>e<256?gr[e]:gr[256+(e>>>7)],br=(e,i)=>{e.pending_buf[e.pending++]=i&255,e.pending_buf[e.pending++]=i>>>8&255},We=(e,i,r)=>{e.bi_valid>ci-r?(e.bi_buf|=i<<e.bi_valid&65535,br(e,e.bi_buf),e.bi_buf=i>>ci-e.bi_valid,e.bi_valid+=r-ci):(e.bi_buf|=i<<e.bi_valid&65535,e.bi_valid+=r)},dt=(e,i,r)=>{We(e,r[i*2],r[i*2+1])},Lc=(e,i)=>{let r=0;do r|=e&1,e>>>=1,r<<=1;while(--i>0);return r>>>1},Nh=e=>{e.bi_valid===16?(br(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=e.bi_buf&255,e.bi_buf>>=8,e.bi_valid-=8)},Uh=(e,i)=>{const r=i.dyn_tree,l=i.max_code,d=i.stat_desc.static_tree,m=i.stat_desc.has_stree,w=i.stat_desc.extra_bits,v=i.stat_desc.extra_base,C=i.stat_desc.max_length;let p,k,R,T,I,N,F=0;for(T=0;T<=nn;T++)e.bl_count[T]=0;for(r[e.heap[e.heap_max]*2+1]=0,p=e.heap_max+1;p<Bc;p++)k=e.heap[p],T=r[r[k*2+1]*2+1]+1,T>C&&(T=C,F++),r[k*2+1]=T,!(k>l)&&(e.bl_count[T]++,I=0,k>=v&&(I=w[k-v]),N=r[k*2],e.opt_len+=N*(T+I),m&&(e.static_len+=N*(d[k*2+1]+I)));if(F!==0){do{for(T=C-1;e.bl_count[T]===0;)T--;e.bl_count[T]--,e.bl_count[T+1]+=2,e.bl_count[C]--,F-=2}while(F>0);for(T=C;T!==0;T--)for(k=e.bl_count[T];k!==0;)R=e.heap[--p],!(R>l)&&(r[R*2+1]!==T&&(e.opt_len+=(T-r[R*2+1])*r[R*2],r[R*2+1]=T),k--)}},Pc=(e,i,r)=>{const l=new Array(nn+1);let d=0,m,w;for(m=1;m<=nn;m++)d=d+r[m-1]<<1,l[m]=d;for(w=0;w<=i;w++){let v=e[w*2+1];v!==0&&(e[w*2]=Lc(l[v]++,v))}},Lh=()=>{let e,i,r,l,d;const m=new Array(nn+1);for(r=0,l=0;l<zi-1;l++)for(Ni[l]=r,e=0;e<1<<Ai[l];e++)wr[r++]=l;for(wr[r-1]=l,d=0,l=0;l<16;l++)for(fa[l]=d,e=0;e<1<<la[l];e++)gr[d++]=l;for(d>>=7;l<Cn;l++)for(fa[l]=d<<7,e=0;e<1<<la[l]-7;e++)gr[256+d++]=l;for(i=0;i<=nn;i++)m[i]=0;for(e=0;e<=143;)xt[e*2+1]=8,e++,m[8]++;for(;e<=255;)xt[e*2+1]=9,e++,m[9]++;for(;e<=279;)xt[e*2+1]=7,e++,m[7]++;for(;e<=287;)xt[e*2+1]=8,e++,m[8]++;for(Pc(xt,mr+1,m),e=0;e<Cn;e++)hr[e*2+1]=5,hr[e*2]=Lc(e,5);Mc=new li(xt,Ai,kr+1,mr,nn),Oc=new li(hr,la,0,Cn,nn),Nc=new li(new Array(0),Mh,0,Mi,zh)},Zc=e=>{let i;for(i=0;i<mr;i++)e.dyn_ltree[i*2]=0;for(i=0;i<Cn;i++)e.dyn_dtree[i*2]=0;for(i=0;i<Mi;i++)e.bl_tree[i*2]=0;e.dyn_ltree[Oi*2]=1,e.opt_len=e.static_len=0,e.sym_next=e.matches=0},Wc=e=>{e.bi_valid>8?br(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0},Ls=(e,i,r,l)=>{const d=i*2,m=r*2;return e[d]<e[m]||e[d]===e[m]&&l[i]<=l[r]},fi=(e,i,r)=>{const l=e.heap[r];let d=r<<1;for(;d<=e.heap_len&&(d<e.heap_len&&Ls(i,e.heap[d+1],e.heap[d],e.depth)&&d++,!Ls(i,l,e.heap[d],e.depth));)e.heap[r]=e.heap[d],r=d,d<<=1;e.heap[r]=l},Ps=(e,i,r)=>{let l,d,m=0,w,v;if(e.sym_next!==0)do l=e.pending_buf[e.sym_buf+m++]&255,l+=(e.pending_buf[e.sym_buf+m++]&255)<<8,d=e.pending_buf[e.sym_buf+m++],l===0?dt(e,d,i):(w=wr[d],dt(e,w+kr+1,i),v=Ai[w],v!==0&&(d-=Ni[w],We(e,d,v)),l--,w=Uc(l),dt(e,w,r),v=la[w],v!==0&&(l-=fa[w],We(e,l,v)));while(m<e.sym_next);dt(e,Oi,i)},Si=(e,i)=>{const r=i.dyn_tree,l=i.stat_desc.static_tree,d=i.stat_desc.has_stree,m=i.stat_desc.elems;let w,v,C=-1,p;for(e.heap_len=0,e.heap_max=Bc,w=0;w<m;w++)r[w*2]!==0?(e.heap[++e.heap_len]=C=w,e.depth[w]=0):r[w*2+1]=0;for(;e.heap_len<2;)p=e.heap[++e.heap_len]=C<2?++C:0,r[p*2]=1,e.depth[p]=0,e.opt_len--,d&&(e.static_len-=l[p*2+1]);for(i.max_code=C,w=e.heap_len>>1;w>=1;w--)fi(e,r,w);p=m;do w=e.heap[1],e.heap[1]=e.heap[e.heap_len--],fi(e,r,1),v=e.heap[1],e.heap[--e.heap_max]=w,e.heap[--e.heap_max]=v,r[p*2]=r[w*2]+r[v*2],e.depth[p]=(e.depth[w]>=e.depth[v]?e.depth[w]:e.depth[v])+1,r[w*2+1]=r[v*2+1]=p,e.heap[1]=p++,fi(e,r,1);while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],Uh(e,i),Pc(r,C,e.bl_count)},Zs=(e,i,r)=>{let l,d=-1,m,w=i[0*2+1],v=0,C=7,p=4;for(w===0&&(C=138,p=3),i[(r+1)*2+1]=65535,l=0;l<=r;l++)m=w,w=i[(l+1)*2+1],!(++v<C&&m===w)&&(v<p?e.bl_tree[m*2]+=v:m!==0?(m!==d&&e.bl_tree[m*2]++,e.bl_tree[Dc*2]++):v<=10?e.bl_tree[Rc*2]++:e.bl_tree[Fc*2]++,v=0,d=m,w===0?(C=138,p=3):m===w?(C=6,p=3):(C=7,p=4))},Ws=(e,i,r)=>{let l,d=-1,m,w=i[0*2+1],v=0,C=7,p=4;for(w===0&&(C=138,p=3),l=0;l<=r;l++)if(m=w,w=i[(l+1)*2+1],!(++v<C&&m===w)){if(v<p)do dt(e,m,e.bl_tree);while(--v!==0);else m!==0?(m!==d&&(dt(e,m,e.bl_tree),v--),dt(e,Dc,e.bl_tree),We(e,v-3,2)):v<=10?(dt(e,Rc,e.bl_tree),We(e,v-3,3)):(dt(e,Fc,e.bl_tree),We(e,v-11,7));v=0,d=m,w===0?(C=138,p=3):m===w?(C=6,p=3):(C=7,p=4)}},Ph=e=>{let i;for(Zs(e,e.dyn_ltree,e.l_desc.max_code),Zs(e,e.dyn_dtree,e.d_desc.max_code),Si(e,e.bl_desc),i=Mi-1;i>=3&&e.bl_tree[zc[i]*2+1]===0;i--);return e.opt_len+=3*(i+1)+5+5+4,i},Zh=(e,i,r,l)=>{let d;for(We(e,i-257,5),We(e,r-1,5),We(e,l-4,4),d=0;d<l;d++)We(e,e.bl_tree[zc[d]*2+1],3);Ws(e,e.dyn_ltree,i-1),Ws(e,e.dyn_dtree,r-1)},Wh=e=>{let i=4093624447,r;for(r=0;r<=31;r++,i>>>=1)if(i&1&&e.dyn_ltree[r*2]!==0)return Ns;if(e.dyn_ltree[9*2]!==0||e.dyn_ltree[10*2]!==0||e.dyn_ltree[13*2]!==0)return Us;for(r=32;r<kr;r++)if(e.dyn_ltree[r*2]!==0)return Us;return Ns};let $s=!1;const $h=e=>{$s||(Lh(),$s=!0),e.l_desc=new ui(e.dyn_ltree,Mc),e.d_desc=new ui(e.dyn_dtree,Oc),e.bl_desc=new ui(e.bl_tree,Nc),e.bi_buf=0,e.bi_valid=0,Zc(e)},$c=(e,i,r,l)=>{We(e,(Bh<<1)+(l?1:0),3),Wc(e),br(e,r),br(e,~r),r&&e.pending_buf.set(e.window.subarray(i,i+r),e.pending),e.pending+=r},Hh=e=>{We(e,Tc<<1,3),dt(e,Oi,xt),Nh(e)},Vh=(e,i,r,l)=>{let d,m,w=0;e.level>0?(e.strm.data_type===Th&&(e.strm.data_type=Wh(e)),Si(e,e.l_desc),Si(e,e.d_desc),w=Ph(e),d=e.opt_len+3+7>>>3,m=e.static_len+3+7>>>3,m<=d&&(d=m)):d=m=r+5,r+4<=d&&i!==-1?$c(e,i,r,l):e.strategy===Ih||m===d?(We(e,(Tc<<1)+(l?1:0),3),Ps(e,xt,hr)):(We(e,(Dh<<1)+(l?1:0),3),Zh(e,e.l_desc.max_code+1,e.d_desc.max_code+1,w+1),Ps(e,e.dyn_ltree,e.dyn_dtree)),Zc(e),l&&Wc(e)},jh=(e,i,r)=>(e.pending_buf[e.sym_buf+e.sym_next++]=i,e.pending_buf[e.sym_buf+e.sym_next++]=i>>8,e.pending_buf[e.sym_buf+e.sym_next++]=r,i===0?e.dyn_ltree[r*2]++:(e.matches++,i--,e.dyn_ltree[(wr[r]+kr+1)*2]++,e.dyn_dtree[Uc(i)*2]++),e.sym_next===e.sym_end);var Yh=$h,Gh=$c,Kh=Vh,qh=jh,Xh=Hh,Jh={_tr_init:Yh,_tr_stored_block:Gh,_tr_flush_block:Kh,_tr_tally:qh,_tr_align:Xh};const Qh=(e,i,r,l)=>{let d=e&65535|0,m=e>>>16&65535|0,w=0;for(;r!==0;){w=r>2e3?2e3:r,r-=w;do d=d+i[l++]|0,m=m+d|0;while(--w);d%=65521,m%=65521}return d|m<<16|0};var yr=Qh;const e_=()=>{let e,i=[];for(var r=0;r<256;r++){e=r;for(var l=0;l<8;l++)e=e&1?3988292384^e>>>1:e>>>1;i[r]=e}return i},t_=new Uint32Array(e_()),n_=(e,i,r,l)=>{const d=t_,m=l+r;e^=-1;for(let w=l;w<m;w++)e=e>>>8^d[(e^i[w])&255];return e^-1};var De=n_,Tn={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},Ar={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:r_,_tr_stored_block:Ci,_tr_flush_block:a_,_tr_tally:Ut,_tr_align:i_}=Jh,{Z_NO_FLUSH:Lt,Z_PARTIAL_FLUSH:o_,Z_FULL_FLUSH:s_,Z_FINISH:Je,Z_BLOCK:Hs,Z_OK:Fe,Z_STREAM_END:Vs,Z_STREAM_ERROR:ht,Z_DATA_ERROR:c_,Z_BUF_ERROR:di,Z_DEFAULT_COMPRESSION:l_,Z_FILTERED:u_,Z_HUFFMAN_ONLY:ea,Z_RLE:f_,Z_FIXED:d_,Z_DEFAULT_STRATEGY:h_,Z_UNKNOWN:__,Z_DEFLATED:_a}=Ar,p_=9,m_=15,g_=8,w_=29,b_=256,Ii=b_+1+w_,y_=30,v_=19,E_=2*Ii+1,x_=15,fe=3,Nt=258,_t=Nt+fe+1,k_=32,Bn=42,Ui=57,Ti=69,Bi=73,Di=91,Ri=103,rn=113,fr=666,Ue=1,Fn=2,sn=3,zn=4,A_=3,an=(e,i)=>(e.msg=Tn[i],i),js=e=>e*2-(e>4?9:0),Ot=e=>{let i=e.length;for(;--i>=0;)e[i]=0},S_=e=>{let i,r,l,d=e.w_size;i=e.hash_size,l=i;do r=e.head[--l],e.head[l]=r>=d?r-d:0;while(--i);i=d,l=i;do r=e.prev[--l],e.prev[l]=r>=d?r-d:0;while(--i)};let C_=(e,i,r)=>(i<<e.hash_shift^r)&e.hash_mask,Pt=C_;const Ye=e=>{const i=e.state;let r=i.pending;r>e.avail_out&&(r=e.avail_out),r!==0&&(e.output.set(i.pending_buf.subarray(i.pending_out,i.pending_out+r),e.next_out),e.next_out+=r,i.pending_out+=r,e.total_out+=r,e.avail_out-=r,i.pending-=r,i.pending===0&&(i.pending_out=0))},Ge=(e,i)=>{a_(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,i),e.block_start=e.strstart,Ye(e.strm)},pe=(e,i)=>{e.pending_buf[e.pending++]=i},sr=(e,i)=>{e.pending_buf[e.pending++]=i>>>8&255,e.pending_buf[e.pending++]=i&255},Fi=(e,i,r,l)=>{let d=e.avail_in;return d>l&&(d=l),d===0?0:(e.avail_in-=d,i.set(e.input.subarray(e.next_in,e.next_in+d),r),e.state.wrap===1?e.adler=yr(e.adler,i,d,r):e.state.wrap===2&&(e.adler=De(e.adler,i,d,r)),e.next_in+=d,e.total_in+=d,d)},Hc=(e,i)=>{let r=e.max_chain_length,l=e.strstart,d,m,w=e.prev_length,v=e.nice_match;const C=e.strstart>e.w_size-_t?e.strstart-(e.w_size-_t):0,p=e.window,k=e.w_mask,R=e.prev,T=e.strstart+Nt;let I=p[l+w-1],N=p[l+w];e.prev_length>=e.good_match&&(r>>=2),v>e.lookahead&&(v=e.lookahead);do if(d=i,!(p[d+w]!==N||p[d+w-1]!==I||p[d]!==p[l]||p[++d]!==p[l+1])){l+=2,d++;do;while(p[++l]===p[++d]&&p[++l]===p[++d]&&p[++l]===p[++d]&&p[++l]===p[++d]&&p[++l]===p[++d]&&p[++l]===p[++d]&&p[++l]===p[++d]&&p[++l]===p[++d]&&l<T);if(m=Nt-(T-l),l=T-Nt,m>w){if(e.match_start=i,w=m,m>=v)break;I=p[l+w-1],N=p[l+w]}}while((i=R[i&k])>C&&--r!==0);return w<=e.lookahead?w:e.lookahead},Dn=e=>{const i=e.w_size;let r,l,d;do{if(l=e.window_size-e.lookahead-e.strstart,e.strstart>=i+(i-_t)&&(e.window.set(e.window.subarray(i,i+i-l),0),e.match_start-=i,e.strstart-=i,e.block_start-=i,e.insert>e.strstart&&(e.insert=e.strstart),S_(e),l+=i),e.strm.avail_in===0)break;if(r=Fi(e.strm,e.window,e.strstart+e.lookahead,l),e.lookahead+=r,e.lookahead+e.insert>=fe)for(d=e.strstart-e.insert,e.ins_h=e.window[d],e.ins_h=Pt(e,e.ins_h,e.window[d+1]);e.insert&&(e.ins_h=Pt(e,e.ins_h,e.window[d+fe-1]),e.prev[d&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=d,d++,e.insert--,!(e.lookahead+e.insert<fe)););}while(e.lookahead<_t&&e.strm.avail_in!==0)},Vc=(e,i)=>{let r=e.pending_buf_size-5>e.w_size?e.w_size:e.pending_buf_size-5,l,d,m,w=0,v=e.strm.avail_in;do{if(l=65535,m=e.bi_valid+42>>3,e.strm.avail_out<m||(m=e.strm.avail_out-m,d=e.strstart-e.block_start,l>d+e.strm.avail_in&&(l=d+e.strm.avail_in),l>m&&(l=m),l<r&&(l===0&&i!==Je||i===Lt||l!==d+e.strm.avail_in)))break;w=i===Je&&l===d+e.strm.avail_in?1:0,Ci(e,0,0,w),e.pending_buf[e.pending-4]=l,e.pending_buf[e.pending-3]=l>>8,e.pending_buf[e.pending-2]=~l,e.pending_buf[e.pending-1]=~l>>8,Ye(e.strm),d&&(d>l&&(d=l),e.strm.output.set(e.window.subarray(e.block_start,e.block_start+d),e.strm.next_out),e.strm.next_out+=d,e.strm.avail_out-=d,e.strm.total_out+=d,e.block_start+=d,l-=d),l&&(Fi(e.strm,e.strm.output,e.strm.next_out,l),e.strm.next_out+=l,e.strm.avail_out-=l,e.strm.total_out+=l)}while(w===0);return v-=e.strm.avail_in,v&&(v>=e.w_size?(e.matches=2,e.window.set(e.strm.input.subarray(e.strm.next_in-e.w_size,e.strm.next_in),0),e.strstart=e.w_size,e.insert=e.strstart):(e.window_size-e.strstart<=v&&(e.strstart-=e.w_size,e.window.set(e.window.subarray(e.w_size,e.w_size+e.strstart),0),e.matches<2&&e.matches++,e.insert>e.strstart&&(e.insert=e.strstart)),e.window.set(e.strm.input.subarray(e.strm.next_in-v,e.strm.next_in),e.strstart),e.strstart+=v,e.insert+=v>e.w_size-e.insert?e.w_size-e.insert:v),e.block_start=e.strstart),e.high_water<e.strstart&&(e.high_water=e.strstart),w?zn:i!==Lt&&i!==Je&&e.strm.avail_in===0&&e.strstart===e.block_start?Fn:(m=e.window_size-e.strstart,e.strm.avail_in>m&&e.block_start>=e.w_size&&(e.block_start-=e.w_size,e.strstart-=e.w_size,e.window.set(e.window.subarray(e.w_size,e.w_size+e.strstart),0),e.matches<2&&e.matches++,m+=e.w_size,e.insert>e.strstart&&(e.insert=e.strstart)),m>e.strm.avail_in&&(m=e.strm.avail_in),m&&(Fi(e.strm,e.window,e.strstart,m),e.strstart+=m,e.insert+=m>e.w_size-e.insert?e.w_size-e.insert:m),e.high_water<e.strstart&&(e.high_water=e.strstart),m=e.bi_valid+42>>3,m=e.pending_buf_size-m>65535?65535:e.pending_buf_size-m,r=m>e.w_size?e.w_size:m,d=e.strstart-e.block_start,(d>=r||(d||i===Je)&&i!==Lt&&e.strm.avail_in===0&&d<=m)&&(l=d>m?m:d,w=i===Je&&e.strm.avail_in===0&&l===d?1:0,Ci(e,e.block_start,l,w),e.block_start+=l,Ye(e.strm)),w?sn:Ue)},hi=(e,i)=>{let r,l;for(;;){if(e.lookahead<_t){if(Dn(e),e.lookahead<_t&&i===Lt)return Ue;if(e.lookahead===0)break}if(r=0,e.lookahead>=fe&&(e.ins_h=Pt(e,e.ins_h,e.window[e.strstart+fe-1]),r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),r!==0&&e.strstart-r<=e.w_size-_t&&(e.match_length=Hc(e,r)),e.match_length>=fe)if(l=Ut(e,e.strstart-e.match_start,e.match_length-fe),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=fe){e.match_length--;do e.strstart++,e.ins_h=Pt(e,e.ins_h,e.window[e.strstart+fe-1]),r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart;while(--e.match_length!==0);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=Pt(e,e.ins_h,e.window[e.strstart+1]);else l=Ut(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(l&&(Ge(e,!1),e.strm.avail_out===0))return Ue}return e.insert=e.strstart<fe-1?e.strstart:fe-1,i===Je?(Ge(e,!0),e.strm.avail_out===0?sn:zn):e.sym_next&&(Ge(e,!1),e.strm.avail_out===0)?Ue:Fn},kn=(e,i)=>{let r,l,d;for(;;){if(e.lookahead<_t){if(Dn(e),e.lookahead<_t&&i===Lt)return Ue;if(e.lookahead===0)break}if(r=0,e.lookahead>=fe&&(e.ins_h=Pt(e,e.ins_h,e.window[e.strstart+fe-1]),r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=fe-1,r!==0&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-_t&&(e.match_length=Hc(e,r),e.match_length<=5&&(e.strategy===u_||e.match_length===fe&&e.strstart-e.match_start>4096)&&(e.match_length=fe-1)),e.prev_length>=fe&&e.match_length<=e.prev_length){d=e.strstart+e.lookahead-fe,l=Ut(e,e.strstart-1-e.prev_match,e.prev_length-fe),e.lookahead-=e.prev_length-1,e.prev_length-=2;do++e.strstart<=d&&(e.ins_h=Pt(e,e.ins_h,e.window[e.strstart+fe-1]),r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart);while(--e.prev_length!==0);if(e.match_available=0,e.match_length=fe-1,e.strstart++,l&&(Ge(e,!1),e.strm.avail_out===0))return Ue}else if(e.match_available){if(l=Ut(e,0,e.window[e.strstart-1]),l&&Ge(e,!1),e.strstart++,e.lookahead--,e.strm.avail_out===0)return Ue}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(l=Ut(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<fe-1?e.strstart:fe-1,i===Je?(Ge(e,!0),e.strm.avail_out===0?sn:zn):e.sym_next&&(Ge(e,!1),e.strm.avail_out===0)?Ue:Fn},I_=(e,i)=>{let r,l,d,m;const w=e.window;for(;;){if(e.lookahead<=Nt){if(Dn(e),e.lookahead<=Nt&&i===Lt)return Ue;if(e.lookahead===0)break}if(e.match_length=0,e.lookahead>=fe&&e.strstart>0&&(d=e.strstart-1,l=w[d],l===w[++d]&&l===w[++d]&&l===w[++d])){m=e.strstart+Nt;do;while(l===w[++d]&&l===w[++d]&&l===w[++d]&&l===w[++d]&&l===w[++d]&&l===w[++d]&&l===w[++d]&&l===w[++d]&&d<m);e.match_length=Nt-(m-d),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=fe?(r=Ut(e,1,e.match_length-fe),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=Ut(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(Ge(e,!1),e.strm.avail_out===0))return Ue}return e.insert=0,i===Je?(Ge(e,!0),e.strm.avail_out===0?sn:zn):e.sym_next&&(Ge(e,!1),e.strm.avail_out===0)?Ue:Fn},T_=(e,i)=>{let r;for(;;){if(e.lookahead===0&&(Dn(e),e.lookahead===0)){if(i===Lt)return Ue;break}if(e.match_length=0,r=Ut(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(Ge(e,!1),e.strm.avail_out===0))return Ue}return e.insert=0,i===Je?(Ge(e,!0),e.strm.avail_out===0?sn:zn):e.sym_next&&(Ge(e,!1),e.strm.avail_out===0)?Ue:Fn};function ft(e,i,r,l,d){this.good_length=e,this.max_lazy=i,this.nice_length=r,this.max_chain=l,this.func=d}const dr=[new ft(0,0,0,0,Vc),new ft(4,4,8,4,hi),new ft(4,5,16,8,hi),new ft(4,6,32,32,hi),new ft(4,4,16,16,kn),new ft(8,16,32,32,kn),new ft(8,16,128,128,kn),new ft(8,32,128,256,kn),new ft(32,128,258,1024,kn),new ft(32,258,258,4096,kn)],B_=e=>{e.window_size=2*e.w_size,Ot(e.head),e.max_lazy_match=dr[e.level].max_lazy,e.good_match=dr[e.level].good_length,e.nice_match=dr[e.level].nice_length,e.max_chain_length=dr[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=fe-1,e.match_available=0,e.ins_h=0};function D_(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=_a,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(E_*2),this.dyn_dtree=new Uint16Array((2*y_+1)*2),this.bl_tree=new Uint16Array((2*v_+1)*2),Ot(this.dyn_ltree),Ot(this.dyn_dtree),Ot(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(x_+1),this.heap=new Uint16Array(2*Ii+1),Ot(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*Ii+1),Ot(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Sr=e=>{if(!e)return 1;const i=e.state;return!i||i.strm!==e||i.status!==Bn&&i.status!==Ui&&i.status!==Ti&&i.status!==Bi&&i.status!==Di&&i.status!==Ri&&i.status!==rn&&i.status!==fr?1:0},jc=e=>{if(Sr(e))return an(e,ht);e.total_in=e.total_out=0,e.data_type=__;const i=e.state;return i.pending=0,i.pending_out=0,i.wrap<0&&(i.wrap=-i.wrap),i.status=i.wrap===2?Ui:i.wrap?Bn:rn,e.adler=i.wrap===2?0:1,i.last_flush=-2,r_(i),Fe},Yc=e=>{const i=jc(e);return i===Fe&&B_(e.state),i},R_=(e,i)=>Sr(e)||e.state.wrap!==2?ht:(e.state.gzhead=i,Fe),Gc=(e,i,r,l,d,m)=>{if(!e)return ht;let w=1;if(i===l_&&(i=6),l<0?(w=0,l=-l):l>15&&(w=2,l-=16),d<1||d>p_||r!==_a||l<8||l>15||i<0||i>9||m<0||m>d_||l===8&&w!==1)return an(e,ht);l===8&&(l=9);const v=new D_;return e.state=v,v.strm=e,v.status=Bn,v.wrap=w,v.gzhead=null,v.w_bits=l,v.w_size=1<<v.w_bits,v.w_mask=v.w_size-1,v.hash_bits=d+7,v.hash_size=1<<v.hash_bits,v.hash_mask=v.hash_size-1,v.hash_shift=~~((v.hash_bits+fe-1)/fe),v.window=new Uint8Array(v.w_size*2),v.head=new Uint16Array(v.hash_size),v.prev=new Uint16Array(v.w_size),v.lit_bufsize=1<<d+6,v.pending_buf_size=v.lit_bufsize*4,v.pending_buf=new Uint8Array(v.pending_buf_size),v.sym_buf=v.lit_bufsize,v.sym_end=(v.lit_bufsize-1)*3,v.level=i,v.strategy=m,v.method=r,Yc(e)},F_=(e,i)=>Gc(e,i,_a,m_,g_,h_),z_=(e,i)=>{if(Sr(e)||i>Hs||i<0)return e?an(e,ht):ht;const r=e.state;if(!e.output||e.avail_in!==0&&!e.input||r.status===fr&&i!==Je)return an(e,e.avail_out===0?di:ht);const l=r.last_flush;if(r.last_flush=i,r.pending!==0){if(Ye(e),e.avail_out===0)return r.last_flush=-1,Fe}else if(e.avail_in===0&&js(i)<=js(l)&&i!==Je)return an(e,di);if(r.status===fr&&e.avail_in!==0)return an(e,di);if(r.status===Bn&&r.wrap===0&&(r.status=rn),r.status===Bn){let d=_a+(r.w_bits-8<<4)<<8,m=-1;if(r.strategy>=ea||r.level<2?m=0:r.level<6?m=1:r.level===6?m=2:m=3,d|=m<<6,r.strstart!==0&&(d|=k_),d+=31-d%31,sr(r,d),r.strstart!==0&&(sr(r,e.adler>>>16),sr(r,e.adler&65535)),e.adler=1,r.status=rn,Ye(e),r.pending!==0)return r.last_flush=-1,Fe}if(r.status===Ui){if(e.adler=0,pe(r,31),pe(r,139),pe(r,8),r.gzhead)pe(r,(r.gzhead.text?1:0)+(r.gzhead.hcrc?2:0)+(r.gzhead.extra?4:0)+(r.gzhead.name?8:0)+(r.gzhead.comment?16:0)),pe(r,r.gzhead.time&255),pe(r,r.gzhead.time>>8&255),pe(r,r.gzhead.time>>16&255),pe(r,r.gzhead.time>>24&255),pe(r,r.level===9?2:r.strategy>=ea||r.level<2?4:0),pe(r,r.gzhead.os&255),r.gzhead.extra&&r.gzhead.extra.length&&(pe(r,r.gzhead.extra.length&255),pe(r,r.gzhead.extra.length>>8&255)),r.gzhead.hcrc&&(e.adler=De(e.adler,r.pending_buf,r.pending,0)),r.gzindex=0,r.status=Ti;else if(pe(r,0),pe(r,0),pe(r,0),pe(r,0),pe(r,0),pe(r,r.level===9?2:r.strategy>=ea||r.level<2?4:0),pe(r,A_),r.status=rn,Ye(e),r.pending!==0)return r.last_flush=-1,Fe}if(r.status===Ti){if(r.gzhead.extra){let d=r.pending,m=(r.gzhead.extra.length&65535)-r.gzindex;for(;r.pending+m>r.pending_buf_size;){let v=r.pending_buf_size-r.pending;if(r.pending_buf.set(r.gzhead.extra.subarray(r.gzindex,r.gzindex+v),r.pending),r.pending=r.pending_buf_size,r.gzhead.hcrc&&r.pending>d&&(e.adler=De(e.adler,r.pending_buf,r.pending-d,d)),r.gzindex+=v,Ye(e),r.pending!==0)return r.last_flush=-1,Fe;d=0,m-=v}let w=new Uint8Array(r.gzhead.extra);r.pending_buf.set(w.subarray(r.gzindex,r.gzindex+m),r.pending),r.pending+=m,r.gzhead.hcrc&&r.pending>d&&(e.adler=De(e.adler,r.pending_buf,r.pending-d,d)),r.gzindex=0}r.status=Bi}if(r.status===Bi){if(r.gzhead.name){let d=r.pending,m;do{if(r.pending===r.pending_buf_size){if(r.gzhead.hcrc&&r.pending>d&&(e.adler=De(e.adler,r.pending_buf,r.pending-d,d)),Ye(e),r.pending!==0)return r.last_flush=-1,Fe;d=0}r.gzindex<r.gzhead.name.length?m=r.gzhead.name.charCodeAt(r.gzindex++)&255:m=0,pe(r,m)}while(m!==0);r.gzhead.hcrc&&r.pending>d&&(e.adler=De(e.adler,r.pending_buf,r.pending-d,d)),r.gzindex=0}r.status=Di}if(r.status===Di){if(r.gzhead.comment){let d=r.pending,m;do{if(r.pending===r.pending_buf_size){if(r.gzhead.hcrc&&r.pending>d&&(e.adler=De(e.adler,r.pending_buf,r.pending-d,d)),Ye(e),r.pending!==0)return r.last_flush=-1,Fe;d=0}r.gzindex<r.gzhead.comment.length?m=r.gzhead.comment.charCodeAt(r.gzindex++)&255:m=0,pe(r,m)}while(m!==0);r.gzhead.hcrc&&r.pending>d&&(e.adler=De(e.adler,r.pending_buf,r.pending-d,d))}r.status=Ri}if(r.status===Ri){if(r.gzhead.hcrc){if(r.pending+2>r.pending_buf_size&&(Ye(e),r.pending!==0))return r.last_flush=-1,Fe;pe(r,e.adler&255),pe(r,e.adler>>8&255),e.adler=0}if(r.status=rn,Ye(e),r.pending!==0)return r.last_flush=-1,Fe}if(e.avail_in!==0||r.lookahead!==0||i!==Lt&&r.status!==fr){let d=r.level===0?Vc(r,i):r.strategy===ea?T_(r,i):r.strategy===f_?I_(r,i):dr[r.level].func(r,i);if((d===sn||d===zn)&&(r.status=fr),d===Ue||d===sn)return e.avail_out===0&&(r.last_flush=-1),Fe;if(d===Fn&&(i===o_?i_(r):i!==Hs&&(Ci(r,0,0,!1),i===s_&&(Ot(r.head),r.lookahead===0&&(r.strstart=0,r.block_start=0,r.insert=0))),Ye(e),e.avail_out===0))return r.last_flush=-1,Fe}return i!==Je?Fe:r.wrap<=0?Vs:(r.wrap===2?(pe(r,e.adler&255),pe(r,e.adler>>8&255),pe(r,e.adler>>16&255),pe(r,e.adler>>24&255),pe(r,e.total_in&255),pe(r,e.total_in>>8&255),pe(r,e.total_in>>16&255),pe(r,e.total_in>>24&255)):(sr(r,e.adler>>>16),sr(r,e.adler&65535)),Ye(e),r.wrap>0&&(r.wrap=-r.wrap),r.pending!==0?Fe:Vs)},M_=e=>{if(Sr(e))return ht;const i=e.state.status;return e.state=null,i===rn?an(e,c_):Fe},O_=(e,i)=>{let r=i.length;if(Sr(e))return ht;const l=e.state,d=l.wrap;if(d===2||d===1&&l.status!==Bn||l.lookahead)return ht;if(d===1&&(e.adler=yr(e.adler,i,r,0)),l.wrap=0,r>=l.w_size){d===0&&(Ot(l.head),l.strstart=0,l.block_start=0,l.insert=0);let C=new Uint8Array(l.w_size);C.set(i.subarray(r-l.w_size,r),0),i=C,r=l.w_size}const m=e.avail_in,w=e.next_in,v=e.input;for(e.avail_in=r,e.next_in=0,e.input=i,Dn(l);l.lookahead>=fe;){let C=l.strstart,p=l.lookahead-(fe-1);do l.ins_h=Pt(l,l.ins_h,l.window[C+fe-1]),l.prev[C&l.w_mask]=l.head[l.ins_h],l.head[l.ins_h]=C,C++;while(--p);l.strstart=C,l.lookahead=fe-1,Dn(l)}return l.strstart+=l.lookahead,l.block_start=l.strstart,l.insert=l.lookahead,l.lookahead=0,l.match_length=l.prev_length=fe-1,l.match_available=0,e.next_in=w,e.input=v,e.avail_in=m,l.wrap=d,Fe};var N_=F_,U_=Gc,L_=Yc,P_=jc,Z_=R_,W_=z_,$_=M_,H_=O_,V_="pako deflate (from Nodeca project)",_r={deflateInit:N_,deflateInit2:U_,deflateReset:L_,deflateResetKeep:P_,deflateSetHeader:Z_,deflate:W_,deflateEnd:$_,deflateSetDictionary:H_,deflateInfo:V_};const j_=(e,i)=>Object.prototype.hasOwnProperty.call(e,i);var Y_=function(e){const i=Array.prototype.slice.call(arguments,1);for(;i.length;){const r=i.shift();if(r){if(typeof r!="object")throw new TypeError(r+"must be non-object");for(const l in r)j_(r,l)&&(e[l]=r[l])}}return e},G_=e=>{let i=0;for(let l=0,d=e.length;l<d;l++)i+=e[l].length;const r=new Uint8Array(i);for(let l=0,d=0,m=e.length;l<m;l++){let w=e[l];r.set(w,d),d+=w.length}return r},pa={assign:Y_,flattenChunks:G_};let Kc=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{Kc=!1}const vr=new Uint8Array(256);for(let e=0;e<256;e++)vr[e]=e>=252?6:e>=248?5:e>=240?4:e>=224?3:e>=192?2:1;vr[254]=vr[254]=1;var K_=e=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(e);let i,r,l,d,m,w=e.length,v=0;for(d=0;d<w;d++)r=e.charCodeAt(d),(r&64512)===55296&&d+1<w&&(l=e.charCodeAt(d+1),(l&64512)===56320&&(r=65536+(r-55296<<10)+(l-56320),d++)),v+=r<128?1:r<2048?2:r<65536?3:4;for(i=new Uint8Array(v),m=0,d=0;m<v;d++)r=e.charCodeAt(d),(r&64512)===55296&&d+1<w&&(l=e.charCodeAt(d+1),(l&64512)===56320&&(r=65536+(r-55296<<10)+(l-56320),d++)),r<128?i[m++]=r:r<2048?(i[m++]=192|r>>>6,i[m++]=128|r&63):r<65536?(i[m++]=224|r>>>12,i[m++]=128|r>>>6&63,i[m++]=128|r&63):(i[m++]=240|r>>>18,i[m++]=128|r>>>12&63,i[m++]=128|r>>>6&63,i[m++]=128|r&63);return i};const q_=(e,i)=>{if(i<65534&&e.subarray&&Kc)return String.fromCharCode.apply(null,e.length===i?e:e.subarray(0,i));let r="";for(let l=0;l<i;l++)r+=String.fromCharCode(e[l]);return r};var X_=(e,i)=>{const r=i||e.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(e.subarray(0,i));let l,d;const m=new Array(r*2);for(d=0,l=0;l<r;){let w=e[l++];if(w<128){m[d++]=w;continue}let v=vr[w];if(v>4){m[d++]=65533,l+=v-1;continue}for(w&=v===2?31:v===3?15:7;v>1&&l<r;)w=w<<6|e[l++]&63,v--;if(v>1){m[d++]=65533;continue}w<65536?m[d++]=w:(w-=65536,m[d++]=55296|w>>10&1023,m[d++]=56320|w&1023)}return q_(m,d)},J_=(e,i)=>{i=i||e.length,i>e.length&&(i=e.length);let r=i-1;for(;r>=0&&(e[r]&192)===128;)r--;return r<0||r===0?i:r+vr[e[r]]>i?r:i},Er={string2buf:K_,buf2string:X_,utf8border:J_};function Q_(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var qc=Q_;const Xc=Object.prototype.toString,{Z_NO_FLUSH:ep,Z_SYNC_FLUSH:tp,Z_FULL_FLUSH:np,Z_FINISH:rp,Z_OK:da,Z_STREAM_END:ap,Z_DEFAULT_COMPRESSION:ip,Z_DEFAULT_STRATEGY:op,Z_DEFLATED:sp}=Ar;function Li(e){this.options=pa.assign({level:ip,method:sp,chunkSize:16384,windowBits:15,memLevel:8,strategy:op},e||{});let i=this.options;i.raw&&i.windowBits>0?i.windowBits=-i.windowBits:i.gzip&&i.windowBits>0&&i.windowBits<16&&(i.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new qc,this.strm.avail_out=0;let r=_r.deflateInit2(this.strm,i.level,i.method,i.windowBits,i.memLevel,i.strategy);if(r!==da)throw new Error(Tn[r]);if(i.header&&_r.deflateSetHeader(this.strm,i.header),i.dictionary){let l;if(typeof i.dictionary=="string"?l=Er.string2buf(i.dictionary):Xc.call(i.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(i.dictionary):l=i.dictionary,r=_r.deflateSetDictionary(this.strm,l),r!==da)throw new Error(Tn[r]);this._dict_set=!0}}Li.prototype.push=function(e,i){const r=this.strm,l=this.options.chunkSize;let d,m;if(this.ended)return!1;for(i===~~i?m=i:m=i===!0?rp:ep,typeof e=="string"?r.input=Er.string2buf(e):Xc.call(e)==="[object ArrayBuffer]"?r.input=new Uint8Array(e):r.input=e,r.next_in=0,r.avail_in=r.input.length;;){if(r.avail_out===0&&(r.output=new Uint8Array(l),r.next_out=0,r.avail_out=l),(m===tp||m===np)&&r.avail_out<=6){this.onData(r.output.subarray(0,r.next_out)),r.avail_out=0;continue}if(d=_r.deflate(r,m),d===ap)return r.next_out>0&&this.onData(r.output.subarray(0,r.next_out)),d=_r.deflateEnd(this.strm),this.onEnd(d),this.ended=!0,d===da;if(r.avail_out===0){this.onData(r.output);continue}if(m>0&&r.next_out>0){this.onData(r.output.subarray(0,r.next_out)),r.avail_out=0;continue}if(r.avail_in===0)break}return!0};Li.prototype.onData=function(e){this.chunks.push(e)};Li.prototype.onEnd=function(e){e===da&&(this.result=pa.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};const ta=16209,cp=16191;var lp=function(i,r){let l,d,m,w,v,C,p,k,R,T,I,N,F,U,P,j,$,M,H,ie,W,se,te,G;const J=i.state;l=i.next_in,te=i.input,d=l+(i.avail_in-5),m=i.next_out,G=i.output,w=m-(r-i.avail_out),v=m+(i.avail_out-257),C=J.dmax,p=J.wsize,k=J.whave,R=J.wnext,T=J.window,I=J.hold,N=J.bits,F=J.lencode,U=J.distcode,P=(1<<J.lenbits)-1,j=(1<<J.distbits)-1;e:do{N<15&&(I+=te[l++]<<N,N+=8,I+=te[l++]<<N,N+=8),$=F[I&P];t:for(;;){if(M=$>>>24,I>>>=M,N-=M,M=$>>>16&255,M===0)G[m++]=$&65535;else if(M&16){H=$&65535,M&=15,M&&(N<M&&(I+=te[l++]<<N,N+=8),H+=I&(1<<M)-1,I>>>=M,N-=M),N<15&&(I+=te[l++]<<N,N+=8,I+=te[l++]<<N,N+=8),$=U[I&j];n:for(;;){if(M=$>>>24,I>>>=M,N-=M,M=$>>>16&255,M&16){if(ie=$&65535,M&=15,N<M&&(I+=te[l++]<<N,N+=8,N<M&&(I+=te[l++]<<N,N+=8)),ie+=I&(1<<M)-1,ie>C){i.msg="invalid distance too far back",J.mode=ta;break e}if(I>>>=M,N-=M,M=m-w,ie>M){if(M=ie-M,M>k&&J.sane){i.msg="invalid distance too far back",J.mode=ta;break e}if(W=0,se=T,R===0){if(W+=p-M,M<H){H-=M;do G[m++]=T[W++];while(--M);W=m-ie,se=G}}else if(R<M){if(W+=p+R-M,M-=R,M<H){H-=M;do G[m++]=T[W++];while(--M);if(W=0,R<H){M=R,H-=M;do G[m++]=T[W++];while(--M);W=m-ie,se=G}}}else if(W+=R-M,M<H){H-=M;do G[m++]=T[W++];while(--M);W=m-ie,se=G}for(;H>2;)G[m++]=se[W++],G[m++]=se[W++],G[m++]=se[W++],H-=3;H&&(G[m++]=se[W++],H>1&&(G[m++]=se[W++]))}else{W=m-ie;do G[m++]=G[W++],G[m++]=G[W++],G[m++]=G[W++],H-=3;while(H>2);H&&(G[m++]=G[W++],H>1&&(G[m++]=G[W++]))}}else if(M&64){i.msg="invalid distance code",J.mode=ta;break e}else{$=U[($&65535)+(I&(1<<M)-1)];continue n}break}}else if(M&64)if(M&32){J.mode=cp;break e}else{i.msg="invalid literal/length code",J.mode=ta;break e}else{$=F[($&65535)+(I&(1<<M)-1)];continue t}break}}while(l<d&&m<v);H=N>>3,l-=H,N-=H<<3,I&=(1<<N)-1,i.next_in=l,i.next_out=m,i.avail_in=l<d?5+(d-l):5-(l-d),i.avail_out=m<v?257+(v-m):257-(m-v),J.hold=I,J.bits=N};const An=15,Ys=852,Gs=592,Ks=0,_i=1,qs=2,up=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),fp=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),dp=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),hp=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),_p=(e,i,r,l,d,m,w,v)=>{const C=v.bits;let p=0,k=0,R=0,T=0,I=0,N=0,F=0,U=0,P=0,j=0,$,M,H,ie,W,se=null,te;const G=new Uint16Array(An+1),J=new Uint16Array(An+1);let Oe=null,et,tt,pt;for(p=0;p<=An;p++)G[p]=0;for(k=0;k<l;k++)G[i[r+k]]++;for(I=C,T=An;T>=1&&G[T]===0;T--);if(I>T&&(I=T),T===0)return d[m++]=1<<24|64<<16|0,d[m++]=1<<24|64<<16|0,v.bits=1,0;for(R=1;R<T&&G[R]===0;R++);for(I<R&&(I=R),U=1,p=1;p<=An;p++)if(U<<=1,U-=G[p],U<0)return-1;if(U>0&&(e===Ks||T!==1))return-1;for(J[1]=0,p=1;p<An;p++)J[p+1]=J[p]+G[p];for(k=0;k<l;k++)i[r+k]!==0&&(w[J[i[r+k]]++]=k);if(e===Ks?(se=Oe=w,te=20):e===_i?(se=up,Oe=fp,te=257):(se=dp,Oe=hp,te=0),j=0,k=0,p=R,W=m,N=I,F=0,H=-1,P=1<<I,ie=P-1,e===_i&&P>Ys||e===qs&&P>Gs)return 1;for(;;){et=p-F,w[k]+1<te?(tt=0,pt=w[k]):w[k]>=te?(tt=Oe[w[k]-te],pt=se[w[k]-te]):(tt=96,pt=0),$=1<<p-F,M=1<<N,R=M;do M-=$,d[W+(j>>F)+M]=et<<24|tt<<16|pt|0;while(M!==0);for($=1<<p-1;j&$;)$>>=1;if($!==0?(j&=$-1,j+=$):j=0,k++,--G[p]===0){if(p===T)break;p=i[r+w[k]]}if(p>I&&(j&ie)!==H){for(F===0&&(F=I),W+=R,N=p-F,U=1<<N;N+F<T&&(U-=G[N+F],!(U<=0));)N++,U<<=1;if(P+=1<<N,e===_i&&P>Ys||e===qs&&P>Gs)return 1;H=j&ie,d[H]=I<<24|N<<16|W-m|0}}return j!==0&&(d[W+j]=p-F<<24|64<<16|0),v.bits=I,0};var pr=_p;const pp=0,Jc=1,Qc=2,{Z_FINISH:Xs,Z_BLOCK:mp,Z_TREES:na,Z_OK:cn,Z_STREAM_END:gp,Z_NEED_DICT:wp,Z_STREAM_ERROR:Qe,Z_DATA_ERROR:el,Z_MEM_ERROR:tl,Z_BUF_ERROR:bp,Z_DEFLATED:Js}=Ar,ma=16180,Qs=16181,ec=16182,tc=16183,nc=16184,rc=16185,ac=16186,ic=16187,oc=16188,sc=16189,ha=16190,Et=16191,pi=16192,cc=16193,mi=16194,lc=16195,uc=16196,fc=16197,dc=16198,ra=16199,aa=16200,hc=16201,_c=16202,pc=16203,mc=16204,gc=16205,gi=16206,wc=16207,bc=16208,xe=16209,nl=16210,rl=16211,yp=852,vp=592,Ep=15,xp=Ep,yc=e=>(e>>>24&255)+(e>>>8&65280)+((e&65280)<<8)+((e&255)<<24);function kp(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const ln=e=>{if(!e)return 1;const i=e.state;return!i||i.strm!==e||i.mode<ma||i.mode>rl?1:0},al=e=>{if(ln(e))return Qe;const i=e.state;return e.total_in=e.total_out=i.total=0,e.msg="",i.wrap&&(e.adler=i.wrap&1),i.mode=ma,i.last=0,i.havedict=0,i.flags=-1,i.dmax=32768,i.head=null,i.hold=0,i.bits=0,i.lencode=i.lendyn=new Int32Array(yp),i.distcode=i.distdyn=new Int32Array(vp),i.sane=1,i.back=-1,cn},il=e=>{if(ln(e))return Qe;const i=e.state;return i.wsize=0,i.whave=0,i.wnext=0,al(e)},ol=(e,i)=>{let r;if(ln(e))return Qe;const l=e.state;return i<0?(r=0,i=-i):(r=(i>>4)+5,i<48&&(i&=15)),i&&(i<8||i>15)?Qe:(l.window!==null&&l.wbits!==i&&(l.window=null),l.wrap=r,l.wbits=i,il(e))},sl=(e,i)=>{if(!e)return Qe;const r=new kp;e.state=r,r.strm=e,r.window=null,r.mode=ma;const l=ol(e,i);return l!==cn&&(e.state=null),l},Ap=e=>sl(e,xp);let vc=!0,wi,bi;const Sp=e=>{if(vc){wi=new Int32Array(512),bi=new Int32Array(32);let i=0;for(;i<144;)e.lens[i++]=8;for(;i<256;)e.lens[i++]=9;for(;i<280;)e.lens[i++]=7;for(;i<288;)e.lens[i++]=8;for(pr(Jc,e.lens,0,288,wi,0,e.work,{bits:9}),i=0;i<32;)e.lens[i++]=5;pr(Qc,e.lens,0,32,bi,0,e.work,{bits:5}),vc=!1}e.lencode=wi,e.lenbits=9,e.distcode=bi,e.distbits=5},cl=(e,i,r,l)=>{let d;const m=e.state;return m.window===null&&(m.wsize=1<<m.wbits,m.wnext=0,m.whave=0,m.window=new Uint8Array(m.wsize)),l>=m.wsize?(m.window.set(i.subarray(r-m.wsize,r),0),m.wnext=0,m.whave=m.wsize):(d=m.wsize-m.wnext,d>l&&(d=l),m.window.set(i.subarray(r-l,r-l+d),m.wnext),l-=d,l?(m.window.set(i.subarray(r-l,r),0),m.wnext=l,m.whave=m.wsize):(m.wnext+=d,m.wnext===m.wsize&&(m.wnext=0),m.whave<m.wsize&&(m.whave+=d))),0},Cp=(e,i)=>{let r,l,d,m,w,v,C,p,k,R,T,I,N,F,U=0,P,j,$,M,H,ie,W,se;const te=new Uint8Array(4);let G,J;const Oe=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(ln(e)||!e.output||!e.input&&e.avail_in!==0)return Qe;r=e.state,r.mode===Et&&(r.mode=pi),w=e.next_out,d=e.output,C=e.avail_out,m=e.next_in,l=e.input,v=e.avail_in,p=r.hold,k=r.bits,R=v,T=C,se=cn;e:for(;;)switch(r.mode){case ma:if(r.wrap===0){r.mode=pi;break}for(;k<16;){if(v===0)break e;v--,p+=l[m++]<<k,k+=8}if(r.wrap&2&&p===35615){r.wbits===0&&(r.wbits=15),r.check=0,te[0]=p&255,te[1]=p>>>8&255,r.check=De(r.check,te,2,0),p=0,k=0,r.mode=Qs;break}if(r.head&&(r.head.done=!1),!(r.wrap&1)||(((p&255)<<8)+(p>>8))%31){e.msg="incorrect header check",r.mode=xe;break}if((p&15)!==Js){e.msg="unknown compression method",r.mode=xe;break}if(p>>>=4,k-=4,W=(p&15)+8,r.wbits===0&&(r.wbits=W),W>15||W>r.wbits){e.msg="invalid window size",r.mode=xe;break}r.dmax=1<<r.wbits,r.flags=0,e.adler=r.check=1,r.mode=p&512?sc:Et,p=0,k=0;break;case Qs:for(;k<16;){if(v===0)break e;v--,p+=l[m++]<<k,k+=8}if(r.flags=p,(r.flags&255)!==Js){e.msg="unknown compression method",r.mode=xe;break}if(r.flags&57344){e.msg="unknown header flags set",r.mode=xe;break}r.head&&(r.head.text=p>>8&1),r.flags&512&&r.wrap&4&&(te[0]=p&255,te[1]=p>>>8&255,r.check=De(r.check,te,2,0)),p=0,k=0,r.mode=ec;case ec:for(;k<32;){if(v===0)break e;v--,p+=l[m++]<<k,k+=8}r.head&&(r.head.time=p),r.flags&512&&r.wrap&4&&(te[0]=p&255,te[1]=p>>>8&255,te[2]=p>>>16&255,te[3]=p>>>24&255,r.check=De(r.check,te,4,0)),p=0,k=0,r.mode=tc;case tc:for(;k<16;){if(v===0)break e;v--,p+=l[m++]<<k,k+=8}r.head&&(r.head.xflags=p&255,r.head.os=p>>8),r.flags&512&&r.wrap&4&&(te[0]=p&255,te[1]=p>>>8&255,r.check=De(r.check,te,2,0)),p=0,k=0,r.mode=nc;case nc:if(r.flags&1024){for(;k<16;){if(v===0)break e;v--,p+=l[m++]<<k,k+=8}r.length=p,r.head&&(r.head.extra_len=p),r.flags&512&&r.wrap&4&&(te[0]=p&255,te[1]=p>>>8&255,r.check=De(r.check,te,2,0)),p=0,k=0}else r.head&&(r.head.extra=null);r.mode=rc;case rc:if(r.flags&1024&&(I=r.length,I>v&&(I=v),I&&(r.head&&(W=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Uint8Array(r.head.extra_len)),r.head.extra.set(l.subarray(m,m+I),W)),r.flags&512&&r.wrap&4&&(r.check=De(r.check,l,I,m)),v-=I,m+=I,r.length-=I),r.length))break e;r.length=0,r.mode=ac;case ac:if(r.flags&2048){if(v===0)break e;I=0;do W=l[m+I++],r.head&&W&&r.length<65536&&(r.head.name+=String.fromCharCode(W));while(W&&I<v);if(r.flags&512&&r.wrap&4&&(r.check=De(r.check,l,I,m)),v-=I,m+=I,W)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=ic;case ic:if(r.flags&4096){if(v===0)break e;I=0;do W=l[m+I++],r.head&&W&&r.length<65536&&(r.head.comment+=String.fromCharCode(W));while(W&&I<v);if(r.flags&512&&r.wrap&4&&(r.check=De(r.check,l,I,m)),v-=I,m+=I,W)break e}else r.head&&(r.head.comment=null);r.mode=oc;case oc:if(r.flags&512){for(;k<16;){if(v===0)break e;v--,p+=l[m++]<<k,k+=8}if(r.wrap&4&&p!==(r.check&65535)){e.msg="header crc mismatch",r.mode=xe;break}p=0,k=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=Et;break;case sc:for(;k<32;){if(v===0)break e;v--,p+=l[m++]<<k,k+=8}e.adler=r.check=yc(p),p=0,k=0,r.mode=ha;case ha:if(r.havedict===0)return e.next_out=w,e.avail_out=C,e.next_in=m,e.avail_in=v,r.hold=p,r.bits=k,wp;e.adler=r.check=1,r.mode=Et;case Et:if(i===mp||i===na)break e;case pi:if(r.last){p>>>=k&7,k-=k&7,r.mode=gi;break}for(;k<3;){if(v===0)break e;v--,p+=l[m++]<<k,k+=8}switch(r.last=p&1,p>>>=1,k-=1,p&3){case 0:r.mode=cc;break;case 1:if(Sp(r),r.mode=ra,i===na){p>>>=2,k-=2;break e}break;case 2:r.mode=uc;break;case 3:e.msg="invalid block type",r.mode=xe}p>>>=2,k-=2;break;case cc:for(p>>>=k&7,k-=k&7;k<32;){if(v===0)break e;v--,p+=l[m++]<<k,k+=8}if((p&65535)!==(p>>>16^65535)){e.msg="invalid stored block lengths",r.mode=xe;break}if(r.length=p&65535,p=0,k=0,r.mode=mi,i===na)break e;case mi:r.mode=lc;case lc:if(I=r.length,I){if(I>v&&(I=v),I>C&&(I=C),I===0)break e;d.set(l.subarray(m,m+I),w),v-=I,m+=I,C-=I,w+=I,r.length-=I;break}r.mode=Et;break;case uc:for(;k<14;){if(v===0)break e;v--,p+=l[m++]<<k,k+=8}if(r.nlen=(p&31)+257,p>>>=5,k-=5,r.ndist=(p&31)+1,p>>>=5,k-=5,r.ncode=(p&15)+4,p>>>=4,k-=4,r.nlen>286||r.ndist>30){e.msg="too many length or distance symbols",r.mode=xe;break}r.have=0,r.mode=fc;case fc:for(;r.have<r.ncode;){for(;k<3;){if(v===0)break e;v--,p+=l[m++]<<k,k+=8}r.lens[Oe[r.have++]]=p&7,p>>>=3,k-=3}for(;r.have<19;)r.lens[Oe[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,G={bits:r.lenbits},se=pr(pp,r.lens,0,19,r.lencode,0,r.work,G),r.lenbits=G.bits,se){e.msg="invalid code lengths set",r.mode=xe;break}r.have=0,r.mode=dc;case dc:for(;r.have<r.nlen+r.ndist;){for(;U=r.lencode[p&(1<<r.lenbits)-1],P=U>>>24,j=U>>>16&255,$=U&65535,!(P<=k);){if(v===0)break e;v--,p+=l[m++]<<k,k+=8}if($<16)p>>>=P,k-=P,r.lens[r.have++]=$;else{if($===16){for(J=P+2;k<J;){if(v===0)break e;v--,p+=l[m++]<<k,k+=8}if(p>>>=P,k-=P,r.have===0){e.msg="invalid bit length repeat",r.mode=xe;break}W=r.lens[r.have-1],I=3+(p&3),p>>>=2,k-=2}else if($===17){for(J=P+3;k<J;){if(v===0)break e;v--,p+=l[m++]<<k,k+=8}p>>>=P,k-=P,W=0,I=3+(p&7),p>>>=3,k-=3}else{for(J=P+7;k<J;){if(v===0)break e;v--,p+=l[m++]<<k,k+=8}p>>>=P,k-=P,W=0,I=11+(p&127),p>>>=7,k-=7}if(r.have+I>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=xe;break}for(;I--;)r.lens[r.have++]=W}}if(r.mode===xe)break;if(r.lens[256]===0){e.msg="invalid code -- missing end-of-block",r.mode=xe;break}if(r.lenbits=9,G={bits:r.lenbits},se=pr(Jc,r.lens,0,r.nlen,r.lencode,0,r.work,G),r.lenbits=G.bits,se){e.msg="invalid literal/lengths set",r.mode=xe;break}if(r.distbits=6,r.distcode=r.distdyn,G={bits:r.distbits},se=pr(Qc,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,G),r.distbits=G.bits,se){e.msg="invalid distances set",r.mode=xe;break}if(r.mode=ra,i===na)break e;case ra:r.mode=aa;case aa:if(v>=6&&C>=258){e.next_out=w,e.avail_out=C,e.next_in=m,e.avail_in=v,r.hold=p,r.bits=k,lp(e,T),w=e.next_out,d=e.output,C=e.avail_out,m=e.next_in,l=e.input,v=e.avail_in,p=r.hold,k=r.bits,r.mode===Et&&(r.back=-1);break}for(r.back=0;U=r.lencode[p&(1<<r.lenbits)-1],P=U>>>24,j=U>>>16&255,$=U&65535,!(P<=k);){if(v===0)break e;v--,p+=l[m++]<<k,k+=8}if(j&&!(j&240)){for(M=P,H=j,ie=$;U=r.lencode[ie+((p&(1<<M+H)-1)>>M)],P=U>>>24,j=U>>>16&255,$=U&65535,!(M+P<=k);){if(v===0)break e;v--,p+=l[m++]<<k,k+=8}p>>>=M,k-=M,r.back+=M}if(p>>>=P,k-=P,r.back+=P,r.length=$,j===0){r.mode=gc;break}if(j&32){r.back=-1,r.mode=Et;break}if(j&64){e.msg="invalid literal/length code",r.mode=xe;break}r.extra=j&15,r.mode=hc;case hc:if(r.extra){for(J=r.extra;k<J;){if(v===0)break e;v--,p+=l[m++]<<k,k+=8}r.length+=p&(1<<r.extra)-1,p>>>=r.extra,k-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=_c;case _c:for(;U=r.distcode[p&(1<<r.distbits)-1],P=U>>>24,j=U>>>16&255,$=U&65535,!(P<=k);){if(v===0)break e;v--,p+=l[m++]<<k,k+=8}if(!(j&240)){for(M=P,H=j,ie=$;U=r.distcode[ie+((p&(1<<M+H)-1)>>M)],P=U>>>24,j=U>>>16&255,$=U&65535,!(M+P<=k);){if(v===0)break e;v--,p+=l[m++]<<k,k+=8}p>>>=M,k-=M,r.back+=M}if(p>>>=P,k-=P,r.back+=P,j&64){e.msg="invalid distance code",r.mode=xe;break}r.offset=$,r.extra=j&15,r.mode=pc;case pc:if(r.extra){for(J=r.extra;k<J;){if(v===0)break e;v--,p+=l[m++]<<k,k+=8}r.offset+=p&(1<<r.extra)-1,p>>>=r.extra,k-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=xe;break}r.mode=mc;case mc:if(C===0)break e;if(I=T-C,r.offset>I){if(I=r.offset-I,I>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=xe;break}I>r.wnext?(I-=r.wnext,N=r.wsize-I):N=r.wnext-I,I>r.length&&(I=r.length),F=r.window}else F=d,N=w-r.offset,I=r.length;I>C&&(I=C),C-=I,r.length-=I;do d[w++]=F[N++];while(--I);r.length===0&&(r.mode=aa);break;case gc:if(C===0)break e;d[w++]=r.length,C--,r.mode=aa;break;case gi:if(r.wrap){for(;k<32;){if(v===0)break e;v--,p|=l[m++]<<k,k+=8}if(T-=C,e.total_out+=T,r.total+=T,r.wrap&4&&T&&(e.adler=r.check=r.flags?De(r.check,d,T,w-T):yr(r.check,d,T,w-T)),T=C,r.wrap&4&&(r.flags?p:yc(p))!==r.check){e.msg="incorrect data check",r.mode=xe;break}p=0,k=0}r.mode=wc;case wc:if(r.wrap&&r.flags){for(;k<32;){if(v===0)break e;v--,p+=l[m++]<<k,k+=8}if(r.wrap&4&&p!==(r.total&4294967295)){e.msg="incorrect length check",r.mode=xe;break}p=0,k=0}r.mode=bc;case bc:se=gp;break e;case xe:se=el;break e;case nl:return tl;case rl:default:return Qe}return e.next_out=w,e.avail_out=C,e.next_in=m,e.avail_in=v,r.hold=p,r.bits=k,(r.wsize||T!==e.avail_out&&r.mode<xe&&(r.mode<gi||i!==Xs))&&cl(e,e.output,e.next_out,T-e.avail_out),R-=e.avail_in,T-=e.avail_out,e.total_in+=R,e.total_out+=T,r.total+=T,r.wrap&4&&T&&(e.adler=r.check=r.flags?De(r.check,d,T,e.next_out-T):yr(r.check,d,T,e.next_out-T)),e.data_type=r.bits+(r.last?64:0)+(r.mode===Et?128:0)+(r.mode===ra||r.mode===mi?256:0),(R===0&&T===0||i===Xs)&&se===cn&&(se=bp),se},Ip=e=>{if(ln(e))return Qe;let i=e.state;return i.window&&(i.window=null),e.state=null,cn},Tp=(e,i)=>{if(ln(e))return Qe;const r=e.state;return r.wrap&2?(r.head=i,i.done=!1,cn):Qe},Bp=(e,i)=>{const r=i.length;let l,d,m;return ln(e)||(l=e.state,l.wrap!==0&&l.mode!==ha)?Qe:l.mode===ha&&(d=1,d=yr(d,i,r,0),d!==l.check)?el:(m=cl(e,i,r,r),m?(l.mode=nl,tl):(l.havedict=1,cn))};var Dp=il,Rp=ol,Fp=al,zp=Ap,Mp=sl,Op=Cp,Np=Ip,Up=Tp,Lp=Bp,Pp="pako inflate (from Nodeca project)",kt={inflateReset:Dp,inflateReset2:Rp,inflateResetKeep:Fp,inflateInit:zp,inflateInit2:Mp,inflate:Op,inflateEnd:Np,inflateGetHeader:Up,inflateSetDictionary:Lp,inflateInfo:Pp};function Zp(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var Wp=Zp;const ll=Object.prototype.toString,{Z_NO_FLUSH:$p,Z_FINISH:Hp,Z_OK:xr,Z_STREAM_END:yi,Z_NEED_DICT:vi,Z_STREAM_ERROR:Vp,Z_DATA_ERROR:Ec,Z_MEM_ERROR:jp}=Ar;function Cr(e){this.options=pa.assign({chunkSize:1024*64,windowBits:15,to:""},e||{});const i=this.options;i.raw&&i.windowBits>=0&&i.windowBits<16&&(i.windowBits=-i.windowBits,i.windowBits===0&&(i.windowBits=-15)),i.windowBits>=0&&i.windowBits<16&&!(e&&e.windowBits)&&(i.windowBits+=32),i.windowBits>15&&i.windowBits<48&&(i.windowBits&15||(i.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new qc,this.strm.avail_out=0;let r=kt.inflateInit2(this.strm,i.windowBits);if(r!==xr)throw new Error(Tn[r]);if(this.header=new Wp,kt.inflateGetHeader(this.strm,this.header),i.dictionary&&(typeof i.dictionary=="string"?i.dictionary=Er.string2buf(i.dictionary):ll.call(i.dictionary)==="[object ArrayBuffer]"&&(i.dictionary=new Uint8Array(i.dictionary)),i.raw&&(r=kt.inflateSetDictionary(this.strm,i.dictionary),r!==xr)))throw new Error(Tn[r])}Cr.prototype.push=function(e,i){const r=this.strm,l=this.options.chunkSize,d=this.options.dictionary;let m,w,v;if(this.ended)return!1;for(i===~~i?w=i:w=i===!0?Hp:$p,ll.call(e)==="[object ArrayBuffer]"?r.input=new Uint8Array(e):r.input=e,r.next_in=0,r.avail_in=r.input.length;;){for(r.avail_out===0&&(r.output=new Uint8Array(l),r.next_out=0,r.avail_out=l),m=kt.inflate(r,w),m===vi&&d&&(m=kt.inflateSetDictionary(r,d),m===xr?m=kt.inflate(r,w):m===Ec&&(m=vi));r.avail_in>0&&m===yi&&r.state.wrap>0&&e[r.next_in]!==0;)kt.inflateReset(r),m=kt.inflate(r,w);switch(m){case Vp:case Ec:case vi:case jp:return this.onEnd(m),this.ended=!0,!1}if(v=r.avail_out,r.next_out&&(r.avail_out===0||m===yi))if(this.options.to==="string"){let C=Er.utf8border(r.output,r.next_out),p=r.next_out-C,k=Er.buf2string(r.output,C);r.next_out=p,r.avail_out=l-p,p&&r.output.set(r.output.subarray(C,C+p),0),this.onData(k)}else this.onData(r.output.length===r.next_out?r.output:r.output.subarray(0,r.next_out));if(!(m===xr&&v===0)){if(m===yi)return m=kt.inflateEnd(this.strm),this.onEnd(m),this.ended=!0,!0;if(r.avail_in===0)break}}return!0};Cr.prototype.onData=function(e){this.chunks.push(e)};Cr.prototype.onEnd=function(e){e===xr&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=pa.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};function Pi(e,i){const r=new Cr(i);if(r.push(e),r.err)throw r.msg||Tn[r.err];return r.result}function Yp(e,i){return i=i||{},i.raw=!0,Pi(e,i)}var Gp=Cr,Kp=Pi,qp=Yp,Xp=Pi,Jp=Ar,Qp={Inflate:Gp,inflate:Kp,inflateRaw:qp,ungzip:Xp,constants:Jp};const{Inflate:xm,inflate:em,inflateRaw:km,ungzip:Am}=Qp;var tm=em;function nm(e){return JSON.parse(tm(Ic(e),{to:"string",raw:!0})).debug_infos}function rm(e,i,r){if(!("callStack"in e)||!e.callStack)return;const{callStack:l,brilligFunctionId:d}=e;if(!i)return l;try{return am(l,i,r,d)}catch{return l}}function am(e,i,r,l){let d=e.flatMap(m=>im(m,i,r,l));if(d.length>0){const m=e[e.length-1].split(".");if(m.length===2){const w=i.acir_locations[m[0]];if(w!==void 0){const v=i.location_tree.locations[w];d=ul(v,i.location_tree.locations,r).concat(d)}}}return d}function ul(e,i,r){const l=[];for(;e.parent!==null;){const{file:d,span:m}=e.value,{path:w,source:v}=r[d],C=v.substring(m.start,m.end),k=v.substring(0,m.start).split(`
`),R=k.length,T=k[k.length-1].length+1;l.push({filePath:w,line:R,column:T,locationText:C}),e=i[e.parent]}return l.reverse()}function im(e,i,r,l){let d=i.acir_locations[e];const m=om(e);if(l!==void 0&&m!==void 0&&(d=i.brillig_locations[l][m],d===void 0))return[];if(d===void 0)return[];const w=i.location_tree.locations[d];return ul(w,i.location_tree.locations,r)}function om(e){const i=e.split(".");if(i.length===2)return i[1]}const sm=async(e,i)=>{if(e=="print")return[];throw Error(`Unexpected oracle during execution: ${e}(${i.join(", ")})`)};function cm(e,i){const r=i;if(i.rawAssertionPayload)try{const l=xh(e.abi,i.rawAssertionPayload);typeof l=="string"?r.message=`Circuit execution failed: ${l}`:r.decodedAssertionPayload=l}catch{}try{const l=rm(i,nm(e.debug_symbols)[i.acirFunctionId],e.file_map);r.noirCallStack=l==null?void 0:l.map(d=>typeof d=="string"?`at opcode ${d}`:`at ${d.locationText} (${d.filePath}:${d.line}:${d.column})`)}catch{}return r}async function lm(e,i,r=sm){const l=vh(e.abi,i);try{return await fh(Ic(e.bytecode),l,r)}catch(d){throw typeof d=="object"&&d!==null&&"rawAssertionPayload"in d?cm(e,d):new Error(`Circuit execution failed: ${d}`)}}class um{constructor(i){Bs(this,"circuit");this.circuit=i}async init(){typeof ki=="function"&&await Promise.all([ki(),Ac()])}async execute(i,r){await this.init();const l=await lm(this.circuit,i,r),d=l[0].witness,{return_value:m}=Eh(this.circuit.abi,d);return{witness:_h(l),returnValue:m}}}Me(`bb.js version: ${ah.dependencies["@aztec/bb.js"]}`);function Me(e){console.log(e),document.getElementById("logs").innerHTML+=e+"<br/>"}const fm=async()=>{try{document.getElementById("logs").innerHTML="",Me("Initializing...");const e=Number(document.getElementById("threads").value),i=await Ei(()=>import("./circuit-DSKVwO02.js"),[]),r=new um(i),l=new sh(i.bytecode,{threads:Number(e),logger:p=>{Me(p)}}),d=performance.now(),{witness:m}=await r.execute({x:3,y:3}),w=await l.generateProof(m),v=performance.now()-d;Me(`Proof generated in ${v}ms`);const C=await l.verifyProof(w);Me(`Proof verified: ${C}`)}catch(e){Me(e)}};document.getElementById("generate-proof").addEventListener("click",fm);async function dm(){document.getElementById("logs").innerHTML="";try{const e=Number(document.getElementById("initial-memory").value),i=Number(document.getElementById("maximum-memory").value),r=Number(document.getElementById("threads").value);Me("Calling  Barretenberg.new");const l=await oh.new({threads:r,logger:d=>Me(d),memory:{initial:e,maximum:i}});Me("Barretenberg.new done")}catch(e){Me(`


Error


`),Me(e)}}async function hm(){document.getElementById("logs").innerHTML="";try{const e=Number(document.getElementById("initial-memory").value),i=Number(document.getElementById("maximum-memory").value),r=e*2**16/(1024*1024),l=i*2**16/(1024*1024);Me("Calling new WebAssembly.Memory directly"),Me(`Initializing bb wasm: initial memory ${e} pages ${r}MiB; max memory: ${i} pages, ${l}MiB;`);const d=new WebAssembly.Memory({initial:e,maximum:i,shared:!0});Me(`Calling new WebAssembly.Memory done

`)}catch(e){Me(`


Error


`),Me(e)}}document.getElementById("load-wasm").addEventListener("click",hm);document.getElementById("load-bb-wasm").addEventListener("click",dm);
