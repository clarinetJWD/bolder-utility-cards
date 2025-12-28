function e(e,t,r,o){var i,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,o);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(n<3?i(a):n>3?i(t,r,a):i(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}function t(e,t,r,o){return new(r||(r=Promise))((function(i,n){function a(e){try{d(o.next(e))}catch(e){n(e)}}function s(e){try{d(o.throw(e))}catch(e){n(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}d((o=o.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const r=window,o=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;let a=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(o&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&n.set(t,e))}return e}toString(){return this.cssText}};const s=e=>new a("string"==typeof e?e:e+"",void 0,i),d=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1]),e[0]);return new a(r,e,i)},l=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return s(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var c;const h=window,u=h.trustedTypes,p=u?u.emptyScript:"",_=h.reactiveElementPolyfillSupport,b={toAttribute(e,t){switch(t){case Boolean:e=e?p:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},g=(e,t)=>t!==e&&(t==t||e==e),v={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:g},f="finalized";let m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,r)=>{const o=this._$Ep(r,t);void 0!==o&&(this._$Ev.set(o,r),e.push(o))})),e}static createProperty(e,t=v){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r="symbol"==typeof e?Symbol():"__"+e,o=this.getPropertyDescriptor(e,r,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(o){const i=this[e];this[t]=o,this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||v}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const r of t)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Ep(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,r;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(r=e.hostConnected)||void 0===r||r.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{o?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const o=document.createElement("style"),i=r.litNonce;void 0!==i&&o.setAttribute("nonce",i),o.textContent=t.cssText,e.appendChild(o)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=v){var o;const i=this.constructor._$Ep(e,r);if(void 0!==i&&!0===r.reflect){const n=(void 0!==(null===(o=r.converter)||void 0===o?void 0:o.toAttribute)?r.converter:b).toAttribute(t,r.type);this._$El=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$El=null}}_$AK(e,t){var r;const o=this.constructor,i=o._$Ev.get(e);if(void 0!==i&&this._$El!==i){const e=o.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(r=e.converter)||void 0===r?void 0:r.fromAttribute)?e.converter:b;this._$El=i,this[i]=n.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,r){let o=!0;void 0!==e&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||g)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(r)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var y;m[f]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==_||_({ReactiveElement:m}),(null!==(c=h.reactiveElementVersions)&&void 0!==c?c:h.reactiveElementVersions=[]).push("1.6.3");const w=window,k=w.trustedTypes,C=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,$="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,S="?"+x,A=`<${S}>`,E=document,O=()=>E.createComment(""),z=e=>null===e||"object"!=typeof e&&"function"!=typeof e,T=Array.isArray,P="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,K=/>/g,H=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,R=/"/g,N=/^(?:script|style|textarea|title)$/i,U=(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),L=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),V=new WeakMap,D=E.createTreeWalker(E,129,null,!1);function F(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}let q=class e{constructor({strings:t,_$litType$:r},o){let i;this.parts=[];let n=0,a=0;const s=t.length-1,d=this.parts,[l,c]=((e,t)=>{const r=e.length-1,o=[];let i,n=2===t?"<svg>":"",a=M;for(let t=0;t<r;t++){const r=e[t];let s,d,l=-1,c=0;for(;c<r.length&&(a.lastIndex=c,d=a.exec(r),null!==d);)c=a.lastIndex,a===M?"!--"===d[1]?a=B:void 0!==d[1]?a=K:void 0!==d[2]?(N.test(d[2])&&(i=RegExp("</"+d[2],"g")),a=H):void 0!==d[3]&&(a=H):a===H?">"===d[0]?(a=null!=i?i:M,l=-1):void 0===d[1]?l=-2:(l=a.lastIndex-d[2].length,s=d[1],a=void 0===d[3]?H:'"'===d[3]?R:I):a===R||a===I?a=H:a===B||a===K?a=M:(a=H,i=void 0);const h=a===H&&e[t+1].startsWith("/>")?" ":"";n+=a===M?r+A:l>=0?(o.push(s),r.slice(0,l)+$+r.slice(l)+x+h):r+x+(-2===l?(o.push(void 0),t):h)}return[F(e,n+(e[r]||"<?>")+(2===t?"</svg>":"")),o]})(t,r);if(this.el=e.createElement(l,o),D.currentNode=this.el.content,2===r){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=D.nextNode())&&d.length<s;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith($)||t.startsWith(x)){const r=c[a++];if(e.push(t),void 0!==r){const e=i.getAttribute(r.toLowerCase()+$).split(x),t=/([.?@])?(.*)/.exec(r);d.push({type:1,index:n,name:t[2],strings:e,ctor:"."===t[1]?X:"?"===t[1]?Y:"@"===t[1]?ee:J})}else d.push({type:6,index:n})}for(const t of e)i.removeAttribute(t)}if(N.test(i.tagName)){const e=i.textContent.split(x),t=e.length-1;if(t>0){i.textContent=k?k.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],O()),D.nextNode(),d.push({type:2,index:++n});i.append(e[t],O())}}}else if(8===i.nodeType)if(i.data===S)d.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(x,e+1));)d.push({type:7,index:n}),e+=x.length-1}n++}}static createElement(e,t){const r=E.createElement("template");return r.innerHTML=e,r}};function W(e,t,r=e,o){var i,n,a,s;if(t===L)return t;let d=void 0!==o?null===(i=r._$Co)||void 0===i?void 0:i[o]:r._$Cl;const l=z(t)?void 0:t._$litDirective$;return(null==d?void 0:d.constructor)!==l&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===l?d=void 0:(d=new l(e),d._$AT(e,r,o)),void 0!==o?(null!==(a=(s=r)._$Co)&&void 0!==a?a:s._$Co=[])[o]=d:r._$Cl=d),void 0!==d&&(t=W(e,d._$AS(e,t.values),d,o)),t}let G=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:r},parts:o}=this._$AD,i=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:E).importNode(r,!0);D.currentNode=i;let n=D.nextNode(),a=0,s=0,d=o[0];for(;void 0!==d;){if(a===d.index){let t;2===d.type?t=new Z(n,n.nextSibling,this,e):1===d.type?t=new d.ctor(n,d.name,d.strings,this,e):6===d.type&&(t=new te(n,this,e)),this._$AV.push(t),d=o[++s]}a!==(null==d?void 0:d.index)&&(n=D.nextNode(),a++)}return D.currentNode=E,i}v(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},Z=class e{constructor(e,t,r,o){var i;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cp=null===(i=null==o?void 0:o.isConnected)||void 0===i||i}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=W(this,e,t),z(e)?e===j||null==e||""===e?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==L&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>T(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==j&&z(this._$AH)?this._$AA.nextSibling.data=e:this.$(E.createTextNode(e)),this._$AH=e}g(e){var t;const{values:r,_$litType$:o}=e,i="number"==typeof o?this._$AC(e):(void 0===o.el&&(o.el=q.createElement(F(o.h,o.h[0]),this.options)),o);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===i)this._$AH.v(r);else{const e=new G(i,this),t=e.u(this.options);e.v(r),this.$(t),this._$AH=e}}_$AC(e){let t=V.get(e.strings);return void 0===t&&V.set(e.strings,t=new q(e)),t}T(t){T(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,i=0;for(const n of t)i===r.length?r.push(o=new e(this.k(O()),this.k(O()),this,this.options)):o=r[i],o._$AI(n),i++;i<r.length&&(this._$AR(o&&o._$AB.nextSibling,i),r.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}},J=class{constructor(e,t,r,o,i){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,o){const i=this.strings;let n=!1;if(void 0===i)e=W(this,e,t,0),n=!z(e)||e!==this._$AH&&e!==L,n&&(this._$AH=e);else{const o=e;let a,s;for(e=i[0],a=0;a<i.length-1;a++)s=W(this,o[r+a],t,a),s===L&&(s=this._$AH[a]),n||(n=!z(s)||s!==this._$AH[a]),s===j?e=j:e!==j&&(e+=(null!=s?s:"")+i[a+1]),this._$AH[a]=s}n&&!o&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}},X=class extends J{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}};const Q=k?k.emptyScript:"";let Y=class extends J{constructor(){super(...arguments),this.type=4}j(e){e&&e!==j?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}},ee=class extends J{constructor(e,t,r,o,i){super(e,t,r,o,i),this.type=5}_$AI(e,t=this){var r;if((e=null!==(r=W(this,e,t,0))&&void 0!==r?r:j)===L)return;const o=this._$AH,i=e===j&&o!==j||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==j&&(o===j||i);i&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==r?r:this.element,e):this._$AH.handleEvent(e)}};class te{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}}const re=w.litHtmlPolyfillSupport;null==re||re(q,Z),(null!==(y=w.litHtmlVersions)&&void 0!==y?y:w.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var oe,ie;let ne=class extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{var o,i;const n=null!==(o=null==r?void 0:r.renderBefore)&&void 0!==o?o:t;let a=n._$litPart$;if(void 0===a){const e=null!==(i=null==r?void 0:r.renderBefore)&&void 0!==i?i:null;n._$litPart$=a=new Z(t.insertBefore(O(),e),e,void 0,null!=r?r:{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return L}};ne.finalized=!0,ne._$litElement$=!0,null===(oe=globalThis.litElementHydrateSupport)||void 0===oe||oe.call(globalThis,{LitElement:ne});const ae=globalThis.litElementPolyfillSupport;null==ae||ae({LitElement:ne}),(null!==(ie=globalThis.litElementVersions)&&void 0!==ie?ie:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const se="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,de=(e,t,r=null)=>{for(;t!==r;){const r=t.nextSibling;e.removeChild(t),t=r}},le=`{{lit-${String(Math.random()).slice(2)}}}`,ce=`\x3c!--${le}--\x3e`,he=new RegExp(`${le}|${ce}`),ue="$lit$";class pe{constructor(e,t){this.parts=[],this.element=t;const r=[],o=[],i=document.createTreeWalker(t.content,133,null,!1);let n=0,a=-1,s=0;const{strings:d,values:{length:l}}=e;for(;s<l;){const e=i.nextNode();if(null!==e){if(a++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:r}=t;let o=0;for(let e=0;e<r;e++)_e(t[e].name,ue)&&o++;for(;o-- >0;){const t=d[s],r=ve.exec(t)[2],o=r.toLowerCase()+ue,i=e.getAttribute(o);e.removeAttribute(o);const n=i.split(he);this.parts.push({type:"attribute",index:a,name:r,strings:n}),s+=n.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(le)>=0){const o=e.parentNode,i=t.split(he),n=i.length-1;for(let t=0;t<n;t++){let r,n=i[t];if(""===n)r=ge();else{const e=ve.exec(n);null!==e&&_e(e[2],ue)&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-5)+e[3]),r=document.createTextNode(n)}o.insertBefore(r,e),this.parts.push({type:"node",index:++a})}""===i[n]?(o.insertBefore(ge(),e),r.push(e)):e.data=i[n],s+=n}}else if(8===e.nodeType)if(e.data===le){const t=e.parentNode;null!==e.previousSibling&&a!==n||(a++,t.insertBefore(ge(),e)),n=a,this.parts.push({type:"node",index:a}),null===e.nextSibling?e.data="":(r.push(e),a--),s++}else{let t=-1;for(;-1!==(t=e.data.indexOf(le,t+1));)this.parts.push({type:"node",index:-1}),s++}}else i.currentNode=o.pop()}for(const e of r)e.parentNode.removeChild(e)}}const _e=(e,t)=>{const r=e.length-t.length;return r>=0&&e.slice(r)===t},be=e=>-1!==e.index,ge=()=>document.createComment(""),ve=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function fe(e,t){const{element:{content:r},parts:o}=e,i=document.createTreeWalker(r,133,null,!1);let n=ye(o),a=o[n],s=-1,d=0;const l=[];let c=null;for(;i.nextNode();){s++;const e=i.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(l.push(e),null===c&&(c=e)),null!==c&&d++;void 0!==a&&a.index===s;)a.index=null!==c?-1:a.index-d,n=ye(o,n),a=o[n]}l.forEach((e=>e.parentNode.removeChild(e)))}const me=e=>{let t=11===e.nodeType?0:1;const r=document.createTreeWalker(e,133,null,!1);for(;r.nextNode();)t++;return t},ye=(e,t=-1)=>{for(let r=t+1;r<e.length;r++){const t=e[r];if(be(t))return r}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const we=new WeakMap,ke=e=>"function"==typeof e&&we.has(e),Ce={},$e={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class xe{constructor(e,t,r){this.__parts=[],this.template=e,this.processor=t,this.options=r}update(e){let t=0;for(const r of this.__parts)void 0!==r&&r.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=se?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],r=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let i,n=0,a=0,s=o.nextNode();for(;n<r.length;)if(i=r[n],be(i)){for(;a<i.index;)a++,"TEMPLATE"===s.nodeName&&(t.push(s),o.currentNode=s.content),null===(s=o.nextNode())&&(o.currentNode=t.pop(),s=o.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(s,i.name,i.strings,this.options));n++}else this.__parts.push(void 0),n++;return se&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Se=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),Ae=` ${le} `;class Ee{constructor(e,t,r,o){this.strings=e,this.values=t,this.type=r,this.processor=o}getHTML(){const e=this.strings.length-1;let t="",r=!1;for(let o=0;o<e;o++){const e=this.strings[o],i=e.lastIndexOf("\x3c!--");r=(i>-1||r)&&-1===e.indexOf("--\x3e",i+1);const n=ve.exec(e);t+=null===n?e+(r?Ae:ce):e.substr(0,n.index)+n[1]+n[2]+ue+n[3]+le}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==Se&&(t=Se.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Oe{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(ge()),this.endNode=e.appendChild(ge())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=ge()),e.__insert(this.endNode=ge())}insertAfterPart(e){e.__insert(this.startNode=ge()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;ke(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=Ce,e(this)}const e=this.__pendingValue;e!==Ce&&((e=>null===e||!("object"==typeof e||"function"==typeof e))(e)?e!==this.value&&this.__commitText(e):e instanceof Ee?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):(e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]))(e)?this.__commitIterable(e):e===$e?(this.value=$e,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,r="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=r:this.__commitNode(document.createTextNode(r)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof xe&&this.value.template===t)this.value.update(e.values);else{const r=new xe(t,e.processor,this.options),o=r._clone();r.update(e.values),this.__commitNode(o),this.value=r}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let r,o=0;for(const i of e)r=t[o],void 0===r&&(r=new Oe(this.options),t.push(r),0===o?r.appendIntoPart(this):r.insertAfterPart(t[o-1])),r.setValue(i),r.commit(),o++;o<t.length&&(t.length=o,this.clear(r&&r.endNode))}clear(e=this.startNode){de(this.startNode.parentNode,e.nextSibling,this.endNode)}}let ze=!1;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
function Te(e){let t=Pe.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Pe.set(e.type,t));let r=t.stringsArray.get(e.strings);if(void 0!==r)return r;const o=e.strings.join(le);return r=t.keyString.get(o),void 0===r&&(r=new pe(e,e.getTemplateElement()),t.keyString.set(o,r)),t.stringsArray.set(e.strings,r),r}(()=>{try{const e={get capture(){return ze=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();const Pe=new Map,Me=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Be=(e,t)=>`${e}--${t}`;let Ke=!0;void 0===window.ShadyCSS?Ke=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Ke=!1);const He=e=>t=>{const r=Be(t.type,e);let o=Pe.get(r);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},Pe.set(r,o));let i=o.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(le);if(i=o.keyString.get(n),void 0===i){const r=t.getTemplateElement();Ke&&window.ShadyCSS.prepareTemplateDom(r,e),i=new pe(t,r),o.keyString.set(n,i)}return o.stringsArray.set(t.strings,i),i},Ie=["html","svg"],Re=new Set,Ne=(e,t,r)=>{Re.add(e);const o=r?r.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:n}=i;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(o,e);const a=document.createElement("style");for(let e=0;e<n;e++){const t=i[e];t.parentNode.removeChild(t),a.textContent+=t.textContent}(e=>{Ie.forEach((t=>{const r=Pe.get(Be(t,e));void 0!==r&&r.keyString.forEach((e=>{const{element:{content:t}}=e,r=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{r.add(e)})),fe(e,r)}))}))})(e);const s=o.content;r?function(e,t,r=null){const{element:{content:o},parts:i}=e;if(null==r)return void o.appendChild(t);const n=document.createTreeWalker(o,133,null,!1);let a=ye(i),s=0,d=-1;for(;n.nextNode();)for(d++,n.currentNode===r&&(s=me(t),r.parentNode.insertBefore(t,r));-1!==a&&i[a].index===d;){if(s>0){for(;-1!==a;)i[a].index+=s,a=ye(i,a);return}a=ye(i,a)}}(r,a,s.firstChild):s.insertBefore(a,s.firstChild),window.ShadyCSS.prepareTemplateStyles(o,e);const d=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==d)t.insertBefore(d.cloneNode(!0),t.firstChild);else if(r){s.insertBefore(a,s.firstChild);const e=new Set;e.add(a),fe(r,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const Ue={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Le=(e,t)=>t!==e&&(t==t||e==e),je={attribute:!0,type:String,converter:Ue,reflect:!1,hasChanged:Le},Ve="finalized";class De extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,r)=>{const o=this._attributeNameForProperty(r,t);void 0!==o&&(this._attributeToPropertyMap.set(o,r),e.push(o))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=je){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const r="symbol"==typeof e?Symbol():`__${e}`,o=this.getPropertyDescriptor(e,r,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(o){const i=this[e];this[t]=o,this.requestUpdateInternal(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||je}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(Ve)||e.finalize(),this[Ve]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const r of t)this.createProperty(r,e[r])}}static _attributeNameForProperty(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,r=Le){return r(e,t)}static _propertyValueFromAttribute(e,t){const r=t.type,o=t.converter||Ue,i="function"==typeof o?o:o.fromAttribute;return i?i(e,r):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const r=t.type,o=t.converter;return(o&&o.toAttribute||Ue.toAttribute)(e,r)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,r){t!==r&&this._attributeToProperty(e,r)}_propertyToAttribute(e,t,r=je){const o=this.constructor,i=o._attributeNameForProperty(e,r);if(void 0!==i){const e=o._propertyValueToAttribute(t,r);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const r=this.constructor,o=r._attributeToPropertyMap.get(e);if(void 0!==o){const e=r.getPropertyOptions(o);this._updateState=16|this._updateState,this[o]=r._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,r){let o=!0;if(void 0!==e){const i=this.constructor;r=r||i.getPropertyOptions(e),i._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}De[Ve]=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Fe=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:r,elements:o}=t;return{kind:r,elements:o,finisher(t){window.customElements.define(e,t)}}})(e,t),qe=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(r){r.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}};function We(e){return(t,r)=>void 0!==r?((e,t,r)=>{t.constructor.createProperty(r,e)})(e,t,r):qe(e,t)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Ge=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ze=Symbol();class Je{constructor(e,t){if(t!==Ze)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(Ge?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const Xe={};class Qe extends De{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,r)=>e.reduceRight(((e,r)=>Array.isArray(r)?t(r,e):(e.add(r),e)),r),r=t(e,new Set),o=[];r.forEach((e=>o.unshift(e))),this._styles=o}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!Ge){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return new Je(String(t),Ze)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Ge?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==Xe&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return Xe}}var Ye,et;Qe.finalized=!0,Qe.render=(e,t,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const o=r.scopeName,i=Me.has(t),n=Ke&&11===t.nodeType&&!!t.host,a=n&&!Re.has(o),s=a?document.createDocumentFragment():t;if(((e,t,r)=>{let o=Me.get(t);void 0===o&&(de(t,t.firstChild),Me.set(t,o=new Oe(Object.assign({templateFactory:Te},r))),o.appendInto(t)),o.setValue(e),o.commit()})(e,s,Object.assign({templateFactory:He(o)},r)),a){const e=Me.get(s);Me.delete(s);const r=e.value instanceof xe?e.value.template:void 0;Ne(o,s,r),de(t,t.firstChild),t.appendChild(s),Me.set(t,e)}!i&&n&&window.ShadyCSS.styleElement(t.host)},Qe.shadowRootOptions={mode:"open"},function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(Ye||(Ye={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(et||(et={}));var tt=function(e,t,r,o){o=o||{},r=null==r?{}:r;var i=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return i.detail=r,e.dispatchEvent(i),i},rt=new Set(["call-service","divider","section","weblink","cast","select"]),ot={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"};var it={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},nt={editor:it},at=Object.freeze({__proto__:null,default:nt,editor:it}),st={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},dt={editor:st},lt=Object.freeze({__proto__:null,default:dt,editor:st}),ct={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},ht={editor:ct},ut=Object.freeze({__proto__:null,default:ht,editor:ct}),pt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},_t={editor:pt},bt=Object.freeze({__proto__:null,default:_t,editor:pt}),gt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},vt={editor:gt},ft={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},mt={editor:ft},yt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},wt={editor:yt},kt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Ct={editor:kt},$t={title:"Title",subtitle:"Sub-Title",icon:"Icon",header:"Header Settings",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?",keep_settings:"Keep Inner Card Settings",container_card_settings:"Container Card Settings",inner_cards:"Container Card Inner Cards:"},xt={editor:$t},St={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},At={editor:St},Et={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Ot={editor:Et},zt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Tt={editor:zt},Pt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Mt={editor:Pt},Bt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Kt={editor:Bt},Ht={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},It={editor:Ht},Rt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Nt={editor:Rt},Ut={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Lt={editor:Ut},jt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Vt={editor:jt},Dt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Ft={editor:Dt},qt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Wt={editor:qt},Gt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Zt={editor:Gt},Jt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Xt={editor:Jt},Qt={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Yt={editor:Qt},er={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},tr={editor:er},rr={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},or={editor:rr},ir={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},nr={editor:ir},ar={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},sr={editor:ar},dr={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},lr={editor:dr},cr={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},hr={editor:cr},ur={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},pr={editor:ur},_r={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},br={editor:_r},gr={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},vr={editor:gr},fr={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},mr={editor:fr},yr={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},wr={editor:yr},kr={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Cr={editor:kr},$r={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},xr={editor:$r},Sr={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Ar={editor:Sr},Er={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Or={editor:Er},zr={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Tr={editor:zr},Pr={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Mr={editor:Pr},Br={title:"Title",mode:"Mode",cards:"Cards",horizontal:"Horizontal",vertical:"Vertical",keep_margin:"Keep Margin",keep_background:"Keep Background",keep_box_shadow:"Keep Box Shadow",keep_outer_padding:"Keep Outer Padding",keep_border_radius:"Keep Border Radius",card_background_override:"Card Background Color Override",is_inner_container:"Is Inner Container?"},Kr={editor:Br};const Hr={ar:at,bg:lt,cs:Object.freeze({__proto__:null,default:vt,editor:gt}),ca:bt,cy:Object.freeze({__proto__:null,default:mt,editor:ft}),da:ut,de:Object.freeze({__proto__:null,default:wt,editor:yt}),el:Object.freeze({__proto__:null,default:Ct,editor:kt}),en:Object.freeze({__proto__:null,default:xt,editor:$t}),es:Object.freeze({__proto__:null,default:At,editor:St}),et:Object.freeze({__proto__:null,default:Ot,editor:Et}),fi:Object.freeze({__proto__:null,default:Tt,editor:zt}),fr:Object.freeze({__proto__:null,default:Mt,editor:Pt}),he:Object.freeze({__proto__:null,default:Kt,editor:Bt}),hu:Object.freeze({__proto__:null,default:It,editor:Ht}),hr:Object.freeze({__proto__:null,default:Nt,editor:Rt}),id:Object.freeze({__proto__:null,default:Lt,editor:Ut}),is:Object.freeze({__proto__:null,default:Vt,editor:jt}),it:Object.freeze({__proto__:null,default:Ft,editor:Dt}),ko:Object.freeze({__proto__:null,default:Wt,editor:qt}),lb:Object.freeze({__proto__:null,default:Zt,editor:Gt}),lt:Object.freeze({__proto__:null,default:Xt,editor:Jt}),nb:Object.freeze({__proto__:null,default:Yt,editor:Qt}),nl:Object.freeze({__proto__:null,default:tr,editor:er}),pl:Object.freeze({__proto__:null,default:or,editor:rr}),ptbr:Object.freeze({__proto__:null,default:nr,editor:ir}),pt:Object.freeze({__proto__:null,default:sr,editor:ar}),ro:Object.freeze({__proto__:null,default:lr,editor:dr}),ru:Object.freeze({__proto__:null,default:hr,editor:cr}),sk:Object.freeze({__proto__:null,default:pr,editor:ur}),sl:Object.freeze({__proto__:null,default:br,editor:_r}),sr:Object.freeze({__proto__:null,default:vr,editor:gr}),srlatn:Object.freeze({__proto__:null,default:mr,editor:fr}),sv:Object.freeze({__proto__:null,default:wr,editor:yr}),th:Object.freeze({__proto__:null,default:Cr,editor:kr}),tr:Object.freeze({__proto__:null,default:xr,editor:$r}),uk:Object.freeze({__proto__:null,default:Ar,editor:Sr}),ur:Object.freeze({__proto__:null,default:Or,editor:Er}),vi:Object.freeze({__proto__:null,default:Tr,editor:zr}),zhcn:Object.freeze({__proto__:null,default:Mr,editor:Pr}),zhtw:Object.freeze({__proto__:null,default:Kr,editor:Br})};function Ir(e,t){let r;const o=t.replace(/['"]+/g,"").replace("-","_").replace("_","").toLowerCase();try{r=e.split(".").reduce(((e,t)=>e[t]),Hr[o])}catch(t){r=e.split(".").reduce(((e,t)=>e[t]),Hr.en)}return void 0===r&&(r=e.split(".").reduce(((e,t)=>e[t]),Hr.en)),r}var Rr,Nr="1.4.1";console.info(`%c BOLDER-HEADER-CARD \n%c   Version ${Nr}   `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"bolder-header-card",name:"Bolder Header Card",description:"A header card with optional buttons that allows for customization and theming."});let Ur=Rr=class extends ne{set hass(e){Rr._hass=e}static getLocale(){var e,t;return null!==(t=null===(e=Rr._hass)||void 0===e?void 0:e.locale.language)&&void 0!==t?t:"en-US"}static computeLabel(e){return Ir("editor."+e.name,e.locale)}static getConfigElement(){return t(this,void 0,void 0,(function*(){return yield Promise.resolve().then((function(){return oo})),document.createElement("bolder-header-card-editor")}))}static get styles(){return[d`${s("\n    :host {\n      /*** Card Variables */\n      --bolder-header-card-background_internal: var(--bolder-header-card-background, var(--ha-card-background, var(--card-background-color)));\n      --bolder-header-card-border-color_internal: var(--bolder-header-card-border-color, var(--ha-card-border-color, var(--divider-color, #e0e0e0)));\n      --bolder-header-card-border-style_internal: var(--bolder-header-card-border-style, var(--ha-card-border-style, solid));\n      --bolder-header-card-border-width_internal: var(--bolder-header-card-border-width, var(--ha-card-border-width, 0px));\n      --bolder-header-card-border-radius_internal: var(--bolder-header-card-border-radius, var(--ha-card-border-radius, 0px));\n      --bolder-header-card-box-shadow_internal: var(--bolder-header-card-box-shadow, var(--ha-card-box-shadow));\n      --bolder-header-card-backdrop-filter_internal: var(--bolder-header-card-backdrop-filter, var(--ha-card-backdrop-filter, none));\n      --bolder-header-card-gap_internal: var(--bolder-header-card-gap, 0px);\n      --bolder-header-card-padding_internal: var(--bolder-header-card-padding, 12px 16px 16px);\n\n      /*** Header */\n      --bolder-header-card-header-padding_internal: var(--bolder-header-card-header-padding, 0 0 0 0);\n      --bolder-header-card-header-margin_internal: var(--bolder-header-card-header-margin, 0 0 0 0);\n      --bolder-header-card-header-gap_internal: var(--bolder-header-card-header-gap, 0);\n\n      /*** Title Text */\n      --bolder-header-card-title-color_internal: var(--bolder-header-card-title-color, var(--bolder-header-card-text-color, var(--ha-heading-card-title-color, var(--primary-text-color))));\n      --bolder-header-card-title-outline-color_internal: var(--bolder-header-card-title-outline-color, var(--bolder-header-card-text-outline-color, transparent));\n      --bolder-header-card-title-size_internal: var(--bolder-container-card-title-size, var(--ha-heading-card-title-font-size, var(--headline-font-size, 16px)));\n      --bolder-header-card-title-weight_internal: var(--bolder-header-card-title-weight, var(--ha-heading-card-title-font-weight, 400));\n      --bolder-header-card-title-line-height_internal: var(--bolder-header-card-title-line-height, normal);\n      --bolder-header-card-title-padding_internal: var(--bolder-header-card-title-padding, 0 0 0 0);\n      --bolder-header-card-title-margin_internal: var(--bolder-header-card-title-margin, 0 0 0 0);\n\n      /*** Subtitle Text */\n      --bolder-header-card-subtitle-color_internal: var(--bolder-header-card-subtitle-color, var(--bolder-header-card-text-color, var(--ha-heading-card-subtitle-color,var(--secondary-text-color))));\n      --bolder-header-card-subtitle-outline-color_internal: var(--bolder-header-card-subtitle-outline-color, var(--bolder-header-card-text-outline-color, transparent));\n      --bolder-header-card-subtitle-size_internal: var(--bolder-container-card-title-size, var(--ha-heading-card-subtitle-font-size, var(--mdc-typography-subtitle1-font-size, 1rem)));\n      --bolder-header-card-subtitle-weight_internal: var(--bolder-header-card-subtitle-weight, var(--ha-heading-card-subtitle-font-weight, inherit));\n      --bolder-header-card-subtitle-line-height_internal: var(--bolder-header-card-subtitle-line-height, normal);\n      --bolder-header-card-subtitle-padding_internal: var(--bolder-header-card-subtitle-padding, 0 0 0 0);\n      --bolder-header-card-subtitle-margin_internal: var(--bolder-header-card-subtitle-margin, 0 0 0 0);\n\n      /*** Icon */\n      --bolder-header-card-icon-size_internal: var(--bolder-header-card-icon-size, calc(var(--bolder-header-card-title-size_internal) * 1.0));\n      --bolder-header-card-icon-gap_internal: var(--bolder-header-card-icon-gap, 10px);\n      --bolder-header-card-icon-vertical-alignment_internal: var(--bolder-header-card-icon-vertical-alignment, center);\n      --bolder-header-card-icon-color_internal: var(--bolder-header-card-icon-color, var(--primary-text-color));\n      --bolder-header-card-icon-background_internal: var(--bolder-header-card-icon-background, none);\n      --bolder-header-card-icon-padding_internal: var(--bolder-header-card-icon-padding, 0 0 0 0);\n      --bolder-header-card-icon-margin_internal: var(--bolder-header-card-icon-margin, 0 0 0 0);\n      --bolder-header-card-icon-opacity_internal: var(--bolder-header-card-icon-opacity, 1.0);\n      --bolder-header-card-icon-border-radius_internal: var(--bolder-header-card-icon-border-radius, 10px);\n\n      --bolder-header-card-icon-hover-color_internal: var(--bolder-header-card-icon-hover-color, var(--bolder-header-card-icon-color, var(--primary-text-color)));\n      --bolder-header-card-icon-hover-background_internal: var(--bolder-header-card-icon-hover-background, var(--bolder-header-card-icon-background, none));\n      --bolder-header-card-icon-hover-padding_internal: var(--bolder-header-card-icon-hover-padding, var(--bolder-header-card-icon-padding, 0 0 0 0));\n      --bolder-header-card-icon-hover-margin_internal: var(--bolder-header-card-icon-hover-margin, var(--bolder-header-card-icon-margin, 0 0 0 0));\n      --bolder-header-card-icon-hover-opacity_internal: var(--bolder-header-card-icon-hover-opacity, var(--bolder-header-card-icon-opacity, 1.0));\n      --bolder-header-card-icon-hover-border-radius_internal: var(--bolder-header-card-icon-hover-border-radius, 10px);\n\n      --bolder-header-card-button-label-gap_internal: var(--bolder-header-card-button-label-gap, 8px);\n      --bolder-header-card-button-focus-color_internal: var(--bolder-header-card-button-focus-color, var(--secondary-text-color));\n      --bolder-header-card-button-icon-color_internal: var(--bolder-header-card-button-icon-color, var(--primary-text-color));\n      --bolder-header-card-button-background-color_internal: var(--bolder-header-card-button-background-color, var(--disabled-color));\n      --bolder-header-card-button-background-opacity_internal: var(--bolder-header-card-button-background-opacity, 0.2);\n      --bolder-header-card-button-border-radius_internal: var(--bolder-header-card-button-border-radius, 10px);\n      --bolder-header-card-button-padding_internal: var(--bolder-header-card-button-padding, 8px);\n      --bolder-header-card-button-icon-size_internal: var(--bolder-header-card-button-icon-size, 20px);\n      --bolder-header-card-button-hover-background-color_internal: var(--bolder-header-card-button-hover-background-color, var(--secondary-text-color));\n      --bolder-header-card-button-spacing_internal: var(--bolder-header-card-button-spacing, 8px);\n      --bolder-header-card-button-height_internal: var(--bolder-header-card-button-height, 40px);\n      --bolder-header-card-button-width_internal: var(--bolder-header-card-button-width, 40px);\n      --bolder-header-card-button-group-background_internal: var(--bolder-header-card-button-group-background, transparent);\n      --bolder-header-card-button-group-border-radius_internal: var(--bolder-header-card-button-group-border-radius, var(--bolder-header-card-button-border-radius_internal));\n    }\n\n    ha-card {\n      height: 100%;\n      overflow: hidden;\n      display: flex;\n      justify-content: space-between;\n      box-shadow: var(--bolder-header-card-box-shadow_internal);\n      border-radius: var(--bolder-header-card-border-radius_internal);\n      background: var(--bolder-header-card-background_internal);\n      border-color: var(--bolder-header-card-border-color_internal);\n      border-style: var(--bolder-header-card-border-style_internal);\n      border-width: var(--bolder-header-card-border-width_internal);\n      backdrop-filter: var(--bolder-header-card-backdrop-filter_internal);\n      padding: var(--bolder-header-card-padding_internal);\n      margin-bottom: var(--bolder-header-card-gap_internal);\n    }\n\n    ha-icon {\n      fill: var(--bolder-header-card-icon-color_internal);\n      background: var(--bolder-header-card-icon-background_internal);\n      padding: var(--bolder-header-card-icon-padding_internal);\n      margin: var(--bolder-header-card-icon-margin_internal);\n      opacity: var(--bolder-header-card-icon-opacity_internal);\n      border-radius: var(--bolder-header-card-icon-border-radius_internal);\n    }\n\n    ha-icon:hover {\n      fill: var(--bolder-header-card-icon-hover-color_internal);\n      background: var(--bolder-header-card-icon-hover-background_internal);\n      padding: var(--bolder-header-card-icon-hover-padding_internal);\n      margin: var(--bolder-header-card-icon-hover-margin_internal);\n      opacity: var(--bolder-header-card-icon-hover-opacity_internal);\n      border-radius: var(--bolder-header-card-icon-hover-border-radius_internal);\n    }\n\n    ha-control-button-group {\n      --control-button-group-spacing: var(--bolder-header-card-button-spacing_internal);\n      --control-button-group-thickness: var(--bolder-header-card-button-height_internal);\n      background: var(--bolder-header-card-button-group-background_internal);\n      border-radius: var(--bolder-header-card-button-group-border-radius_internal);\n    }\n    ha-control-button {\n      --control-button-focus-color: var(--bolder-header-card-button-focus-color_internal);\n      --control-button-icon-color: var(--bolder-header-card-button-icon-color_internal);\n      --control-button-background-color: var(--bolder-header-card-button-background-color_internal);\n      --control-button-background-opacity: var(--bolder-header-card-button-background-opacity_internal);\n      --control-button-border-radius: var(--bolder-header-card-button-border-radius_internal);\n      --control-button-padding: var(--bolder-header-card-button-padding_internal);\n      --mdc-icon-size: var(--bolder-header-card-button-icon-size_internal);\n      --ha-ripple-color: var(--bolder-header-card-button-hover-background-color_internal);\n      height: var(--bolder-header-card-button-height_internal);\n      width: var(--bolder-header-card-button-width_internal);\n    }\n\n    .header-icon-container {\n      --mdc-icon-size: var(--bolder-header-card-icon-size_internal);\n      display: flex;\n      align-items: var(--bolder-header-card-icon-vertical-alignment_internal);\n      gap: var(--bolder-header-card-icon-gap_internal);\n      padding: var(--bolder-header-card-header-padding_internal);\n    }\n\n    .header-container {\n      display: flex;\n      flex-direction: column;\n      gap: var(--bolder-header-card-header-gap_internal);\n      padding: var(--bolder-header-card-header-padding_internal);\n      margin: var(--bolder-header-card-header-margin_internal);\n    }\n\n    .card-title {\n      color: var(--bolder-header-card-title-color_internal);\n      text-shadow: -1px -1px 0 var(--bolder-header-card-title-outline-color_internal), 1px -1px 0 var(--bolder-header-card-title-outline-color_internal), 1px 1px 0 var(--bolder-header-card-title-outline-color_internal), -1px 1px 0 var(--bolder-header-card-title-outline-color_internal);\n      font-size: var(--bolder-header-card-title-size_internal);\n      font-weight: var(--bolder-header-card-title-weight_internal);\n      line-height: var(--bolder-header-card-title-line-height_internal);\n      padding: var(--bolder-header-card-title-padding_internal);\n      margin: var(--bolder-header-card-title-margin_internal);\n    }\n\n    .card-subtitle {\n      color: var(--bolder-header-card-subtitle-color_internal);\n      text-shadow: -1px -1px 0 var(--bolder-header-card-subtitle-outline-color_internal), 1px -1px 0 var(--bolder-header-card-subtitle-outline-color_internal), 1px 1px 0 var(--bolder-header-card-subtitle-outline-color_internal), -1px 1px 0 var(--bolder-header-card-subtitle-outline-color_internal);\n      font-size: var(--bolder-header-card-subtitle-size_internal);\n      font-weight: var(--bolder-header-card-subtitle-weight_internal);\n      line-height: var(--bolder-header-card-subtitle-line-height_internal);\n      padding: var(--bolder-header-card-subtitle-padding_internal);\n      margin: var(--bolder-header-card-subtitle-margin_internal);\n    }\n    .button-label-container {\n      display: flex;\n      align-items: center;\n      gap: var(--bolder-header-card-button-label-gap_internal);\n    }\n  ")}`]}setConfig(e){var t,r,o,i;this._config=Object.assign(Object.assign({},e),{title:null!==(t=e.title)&&void 0!==t?t:"",subtitle:null!==(r=e.subtitle)&&void 0!==r?r:void 0,icon:null!==(o=e.icon)&&void 0!==o?o:void 0,styles:null!==(i=e.styles)&&void 0!==i?i:[]})}setPartialConfig(e){var t,r,o,i,n,a,s,d,l;this._config={type:"custom:bolder-header-card",title:null!==(o=null!==(t=e.title)&&void 0!==t?t:null===(r=this._config)||void 0===r?void 0:r.title)&&void 0!==o?o:"",subtitle:null!==(i=e.subtitle)&&void 0!==i?i:null===(n=this._config)||void 0===n?void 0:n.subtitle,icon:null!==(a=e.icon)&&void 0!==a?a:null===(s=this._config)||void 0===s?void 0:s.icon,styles:null!==(d=e.styles)&&void 0!==d?d:null===(l=this._config)||void 0===l?void 0:l.styles}}updated(e){super.updated(e)}render(){return Rr._hass&&this._config?U`
      <ha-card>
        <div class="header-icon-container">
          ${this._config.icon?U`<ha-icon icon="${this._config.icon}"></ha-icon>`:U``}
          <div class="header-container">
            ${this._renderTitle()}
            ${this._renderSubtitle()}
          </div>
        </div>
        <div class="button-label-container">
          <!-- Shhh, secret new feature -->
          <!--<ha-control-button-group>
          <p>Label</p>
            <ha-control-button .label=${"poop"}><ha-icon icon="${this._config.icon}"></ha-control-button>
            <ha-control-button .label=${"poop"}><ha-icon icon="${this._config.icon}"></ha-control-button>
          </ha-control-button-group>-->
        </div>
        <style>${this._config.styles?d`${this.getStyleOverrideFromConfig(this._config.styles)}`:d``}</style>
      </ha-card>
    `:U``}_renderTitle(){var e,t;return(null===(e=this._config)||void 0===e?void 0:e.title)?U`<h1 class="card-title">${null===(t=this._config)||void 0===t?void 0:t.title}</h1>`:U``}_renderSubtitle(){var e,t;return(null===(e=this._config)||void 0===e?void 0:e.subtitle)?U`<p class="card-subtitle">${null===(t=this._config)||void 0===t?void 0:t.subtitle}</p>`:U``}_checkIfPropertyExists(e,t){return t in e}getCardSize(){return t(this,void 0,void 0,(function*(){return 1}))}getStyleOverrideFromConfig(e){const t=e.map((e=>e.variable.startsWith("bolder-header-card-")?`--${e.variable}_internal: ${e.value} !important;`:`--bolder-header-card-${e.variable}_internal: ${e.value} !important;`));return d`
:host { 
  ${s(t.join("\n"))} 
}`}};var Lr;e([We({attribute:!1})],Ur.prototype,"_config",void 0),Ur=Rr=e([Fe("bolder-header-card")],Ur),console.info(`%c BOLDER-CONTAINER-CARD \n%c   Version ${Nr}   `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"bolder-container-card",name:"Bolder Container Card",description:"A container card like Stack In Card that allows for more customization and theming."}),window.customCards.push({type:"extended-tile-card",name:"Extended Tile Card",description:"A container card like Stack In Card that allows for more customization and theming."});const jr=window.loadCardHelpers?window.loadCardHelpers():void 0,Vr=customElements.get("hui-tile-card");let Dr=class extends Vr{render(){const e=super.render();return U`${e}<style>/*#info { display: none; }*/ .content { flex: none !important; } .container.horizontal hui-card-features { flex: 1 !important; width: unset !important; } .primary { font-size: 100pt !important;}</style>`}};Dr.styles=d`
    :host {
      --tile-color: var(--state-inactive-color);
      -webkit-tap-highlight-color: transparent;
    }
    ha-card:has(.background:focus-visible) {
      --shadow-default: var(--ha-card-box-shadow, 0 0 0 0 transparent);
      --shadow-focus: 0 0 0 1px var(--tile-color);
      border-color: var(--tile-color);
      box-shadow: var(--shadow-default), var(--shadow-focus);
    }
    ha-card {
      --ha-ripple-color: var(--tile-color);
      --ha-ripple-hover-opacity: 0.04;
      --ha-ripple-pressed-opacity: 0.12;
      height: 100%;
      transition:
        box-shadow 180ms ease-in-out,
        border-color 180ms ease-in-out;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    ha-card.active {
      --tile-color: var(--state-icon-color);
    }
    [role="button"] {
      cursor: pointer;
      pointer-events: auto;
    }
    [role="button"]:focus {
      outline: none;
    }
    .background {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      border-radius: var(--ha-card-border-radius, 12px);
      margin: calc(-1 * var(--ha-card-border-width, 1px));
      overflow: hidden;
    }
    .container {
      margin: calc(-1 * var(--ha-card-border-width, 1px));
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .container.horizontal {
      flex-direction: row;
    }

    .content {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px;
      flex: 1;
      min-width: 0;
      box-sizing: border-box;
      pointer-events: none;
      gap: 10px;
    }

    .vertical {
      flex-direction: column;
      text-align: center;
      justify-content: center;
    }
    .vertical ha-tile-info {
      width: 100%;
      flex: none;
    }
    ha-tile-icon {
      --tile-icon-color: var(--tile-color);
      position: relative;
      padding: 6px;
      margin: -6px;
    }
    ha-tile-badge {
      position: absolute;
      top: 3px;
      right: 3px;
      inset-inline-end: 3px;
      inset-inline-start: initial;
    }
    ha-tile-info {
      position: relative;
      min-width: 0;
      transition: background-color 180ms ease-in-out;
      box-sizing: border-box;
    }
    hui-card-features {
      --feature-color: var(--tile-color);
      padding: 0 12px 12px 12px;
    }
    .container.horizontal hui-card-features {
      width: calc(50% - var(--column-gap, 0px) / 2 - 12px);
      flex: none;
      --feature-height: 36px;
      padding: 0 12px;
      padding-inline-start: 0;
    }

    ha-tile-icon[data-domain="alarm_control_panel"][data-state="pending"],
    ha-tile-icon[data-domain="alarm_control_panel"][data-state="arming"],
    ha-tile-icon[data-domain="alarm_control_panel"][data-state="triggered"],
    ha-tile-icon[data-domain="lock"][data-state="jammed"] {
      animation: pulse 1s infinite;
    }

    ha-tile-badge.not-found {
      --tile-badge-background-color: var(--red-color);
    }

    @keyframes pulse {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `,Dr=e([Fe("extended-tile-card")],Dr);let Fr=Lr=class extends ne{set hass(e){Lr._hass=e,this._card&&(this._card.hass=e),this._header&&(this._header.hass=e)}static getLocale(){var e,t;return null!==(t=null===(e=Lr._hass)||void 0===e?void 0:e.locale.language)&&void 0!==t?t:"en-US"}static computeLabel(e){return Ir("editor."+e.name,e.locale)}static getConfigElement(){return t(this,void 0,void 0,(function*(){return yield Promise.resolve().then((function(){return zn})),document.createElement("bolder-container-card-editor")}))}static get styles(){const e=document.documentElement,t=getComputedStyle(e).getPropertyValue("--bolder-container-card-gap").trim();return[d`${s((r=!!t,`\n    :host {\n      /*** Card Variables */\n      --bolder-container-card-background_internal: var(--bolder-container-card-background, transparent);\n      --bolder-container-card-border-color_internal: var(--bolder-container-card-border-color, var(--ha-card-border-color, var(--divider-color, #e0e0e0)));\n      --bolder-container-card-border-style_internal: var(--bolder-container-card-border-style, var(--ha-card-border-style, solid));\n      --bolder-container-card-border-width_internal: var(--bolder-container-card-border-width, var(--ha-card-border-width, 0px));\n      --bolder-container-card-border-radius_internal: var(--bolder-container-card-border-radius, var(--ha-card-border-radius, 0px));\n      --bolder-container-card-box-shadow_internal: var(--bolder-container-card-box-shadow, var(--ha-card-box-shadow));\n      --bolder-container-card-padding_internal: var(--bolder-container-card-padding, var(--ha-card-padding, 10px));\n      --bolder-container-card-backdrop-filter_internal: var(--bolder-container-card-backdrop-filter, var(--ha-card-backdrop-filter, none));\n\n      /*** Title Text */\n      --bolder-header-card-background: var(--bolder-container-card-title-background, var(--bolder-container-card-title-background_internal));\n      --bolder-header-card-title-color: var(--bolder-container-card-title-color, var(--bolder-container-card-title-color_internal));\n      --bolder-header-card-gap: var(--bolder-container-card-title-gap, var(--bolder-container-card-title-gap_internal));\n      --bolder-header-card-backdrop-filter_internal: var(--bolder-container-card-title-backdrop-filter, var(--bolder-container-card-title-backdrop-filter_internal));\n      --bolder-header-card-title-outline-color: var(--bolder-container-card-title-outline-color, var(--bolder-container-card-title-outline-color_internal));\n      --bolder-header-card-title-size: var(--bolder-container-card-title-size, var(--bolder-container-card-title-size_internal));\n      --bolder-header-card-title-weight: var(--bolder-container-card-title-weight, var(--bolder-container-card-title-weight_internal));\n      --bolder-header-card-title-line-height: var(--bolder-container-card-title-line-height, var(--bolder-container-card-title-line-height_internal));\n      --bolder-header-card-padding: var(--bolder-container-card-title-padding, var(--bolder-container-card-title-padding_internal));\n\n      /*** Layout */\n      ${r?"--vertical-stack-card-gap: var(--bolder-container-card-gap);":""}\n    }\n\n    ha-card {\n      height: 100%;\n      overflow: hidden;\n      box-shadow: var(--bolder-container-card-box-shadow_internal);\n      border-radius: var(--bolder-container-card-border-radius_internal);\n      background: var(--bolder-container-card-background_internal);\n      border-color: var(--bolder-container-card-border-color_internal);\n      border-style: var(--bolder-container-card-border-style_internal);\n      border-width: var(--bolder-container-card-border-width_internal);\n      padding: 0 0 0 0;\n      backdrop-filter: var(--bolder-container-card-backdrop-filter_internal);\n    }\n  \n    ha-card.outer-padding {\n      padding: var(--bolder-container-card-padding_internal);\n    }\n\n    ha-card.inner-container {\n      box-shadow: none;\n      border-radius: 0px;\n      background: transparent;\n      border: none;\n      padding: 0 0 0 0;\n      backdrop-filter: none;\n    }\n\n    .card-header {\n      color: var(--bolder-container-card-title-color_internal);\n      background: var(--bolder-container-card-title-background_internal);\n      text-shadow: -1px -1px 0 var(--bolder-container-card-title-outline-color_internal), 1px -1px 0 var(--bolder-container-card-title-outline-color_internal), 1px 1px 0 var(--bolder-container-card-title-outline-color_internal), -1px 1px 0 var(--bolder-container-card-title-outline-color_internal);\n      font-size: var(--bolder-container-card-title-size_internal);\n      line-height: var(--bolder-container-card-title-line-height_internal);\n      padding: var(--bolder-container-card-title-padding_internal);\n      font-weight: var(--bolder-container-card-title-weight_internal);\n      margin-bottom: var(--bolder-container-card-title-gap_internal);\n      backdrop-filter: var(--bolder-container-card-title-backdrop-filter_internal);\n    }\n\n  `))}`,d`
        :host {
          display: block;
          min-height: 1px; /* Prevent 0px height on Android */
        }
        .card-wrapper {
          min-height: 1px; /* Ensure wrapper has minimum height */
          display: block;
        }
      `];var r}setConfig(e){var t,r,o,i,n,a,s,d,l,c,h;if(!e.cards)throw new Error("There is no cards parameter defined");this._config=Object.assign(Object.assign({},e),{mode:null!==(t=e.mode)&&void 0!==t?t:"vertical",header:null!==(r=e.header)&&void 0!==r?r:void 0,keep_background:null===(o=e.keep_background)||void 0===o||o,keep_margin:null!==(i=e.keep_margin)&&void 0!==i&&i,keep_box_shadow:null!==(n=e.keep_box_shadow)&&void 0!==n&&n,keep_border_radius:null!==(a=e.keep_border_radius)&&void 0!==a&&a,keep_outer_padding:null!==(s=e.keep_outer_padding)&&void 0!==s&&s,card_background_override:null!==(d=e.card_background_override)&&void 0!==d?d:void 0,is_inner_container:null!==(l=e.is_inner_container)&&void 0!==l&&l,cards:null!==(c=e.cards)&&void 0!==c?c:[],styles:null!==(h=e.styles)&&void 0!==h?h:[]}),this._createHeader(),this._createStack()}connectedCallback(){super.connectedCallback(),window.setTimeout((()=>{this._setupObservers()}),0)}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=void 0),this._mutationObserver&&(this._mutationObserver.disconnect(),this._mutationObserver=void 0)}_setupObservers(){if(this.shadowRoot){if(!this._resizeObserver){const e=this.shadowRoot.querySelector("ha-card");e&&(this._resizeObserver=new ResizeObserver((e=>{for(const t of e)t.contentRect.height<1&&window.setTimeout((()=>{this.requestUpdate(),window.dispatchEvent(new Event("resize"))}),10)})),this._resizeObserver.observe(e))}if(!this._mutationObserver){const e=this.shadowRoot.querySelector(".card-wrapper");e&&(this._mutationObserver=new MutationObserver((()=>{window.setTimeout((()=>{window.dispatchEvent(new Event("resize"))}),50)})),this._mutationObserver.observe(e,{childList:!0,subtree:!0}))}}}updated(e){super.updated(e),this._setupObservers(),this._card?(this._waitForChildren(this._card,!1),window.setTimeout((()=>{this.updateStyleOnTimeout()}),1),window.setTimeout((()=>{this.updateStyleOnTimeout()}),500)):this._cardPromise&&this._cardPromise.then((()=>{window.setTimeout((()=>{this.requestUpdate(),window.dispatchEvent(new Event("resize"))}),50)}))}updateStyleOnTimeout(){var e,t,r,o;if((null===(e=this._config)||void 0===e?void 0:e.keep_background)||this._waitForChildren(this._card,!0),(null===(t=this._card)||void 0===t?void 0:t.shadowRoot)&&(null===(o=null===(r=this._config)||void 0===r?void 0:r.styles)||void 0===o?void 0:o.find((e=>"bolder-container-card-gap"===e.variable||"gap"===e.variable)))){const e=this._card.shadowRoot.getElementById("root");e&&(e.style="--vertical-stack-card-gap: var(--bolder-container-card-gap_internal)")}}_createStack(){return t(this,void 0,void 0,(function*(){this._cardPromise=this._createCard({type:`${this._config.mode}-stack`,cards:this._config.cards}),this._card=yield this._cardPromise,this.requestUpdate(),yield this.updateComplete,this._card&&this._card.updateComplete&&(yield this._card.updateComplete),window.setTimeout((()=>{window.dispatchEvent(new Event("resize"))}),10),window.setTimeout((()=>{window.dispatchEvent(new Event("resize")),this.requestUpdate()}),100),window.setTimeout((()=>{window.dispatchEvent(new Event("resize"))}),500)}))}_createHeader(){return t(this,void 0,void 0,(function*(){var e,t;(null===(e=this._config)||void 0===e?void 0:e.header)&&(this._header=new Ur,this._header.setPartialConfig(null===(t=this._config)||void 0===t?void 0:t.header))}))}render(){return Lr._hass&&this._config?U`
      <ha-card class="
      ${this._config.is_inner_container?"inner-container ":""}
      ${this._config.keep_outer_padding?"outer-padding ":""}
      ">
      ${this._config.header?U`${this._header}`:U``}
        <div class="card-wrapper">${this._card||U``}</div>
        <style>${this._config.styles?d`${this.getStyleOverrideFromConfig(this._config.styles)}`:d``}</style>
      </ha-card>
    `:U``}_updateStyle(e,t){var r,o,i,n,a,s;e&&((null===(r=this._config)||void 0===r?void 0:r.keep_box_shadow)||(e.style.boxShadow="none"),!(null===(o=this._config)||void 0===o?void 0:o.keep_background)&&t&&"true"!==getComputedStyle(e).getPropertyValue("--keep-background").trim()&&(e.style.background=null!==(n=null===(i=this._config)||void 0===i?void 0:i.card_background_override)&&void 0!==n?n:"transparent",void 0===(null===(a=this._config)||void 0===a?void 0:a.card_background_override)&&(e.style.backdropFilter="none")),(null===(s=this._config)||void 0===s?void 0:s.keep_border_radius)||(e.style.borderRadius="0"))}_loopChildren(e,t){e.childNodes.forEach((e=>{var r;"STACK-IN-CARD"!==e.tagName&&(!(null===(r=this._config)||void 0===r?void 0:r.keep_margin)&&e.style&&(e.style.margin="0px"),this._waitForChildren(e,t))}))}_updateChildren(e,t){if(e)if(e.shadowRoot){const r=e.shadowRoot.querySelector("ha-card");if(r)this._updateStyle(r,t);else{const r=e.shadowRoot.getElementById("root")||e.shadowRoot.getElementById("card");if(!r)return;this._loopChildren(r,t)}}else"function"==typeof e.querySelector&&e.querySelector("ha-card")&&this._updateStyle(e.querySelector("ha-card"),t),this._loopChildren(e,t)}_checkIfPropertyExists(e,t){return t in e}_waitForChildren(e,t){void 0!==e&&(this._checkIfPropertyExists(e,"updateComplete")?null!==e.updateComplete?e.updateComplete.then((()=>{this._updateChildren(e,t)})):window.setTimeout((()=>{this._waitForChildren(e,t)}),10):this._updateChildren(e,t))}_createCard(e){return t(this,void 0,void 0,(function*(){let t;return t=jr?(yield jr).createCardElement(e):function(e,t){void 0===t&&(t=!1);var r=function(e,t){return o("hui-error-card",{type:"error",error:e,config:t})},o=function(e,t){var o=window.document.createElement(e);try{if(!o.setConfig)return;o.setConfig(t)}catch(o){return console.error(e,o),r(o.message,t)}return o};if(!e||"object"!=typeof e||!t&&!e.type)return r("No type defined",e);var i=e.type;if(i&&i.startsWith("custom:"))i=i.substr(7);else if(t)if(rt.has(i))i="hui-"+i+"-row";else{if(!e.entity)return r("Invalid config given.",e);var n=e.entity.split(".",1)[0];i="hui-"+(ot[n]||"text")+"-entity-row"}else i="hui-"+i+"-card";if(customElements.get(i))return o(i,e);var a=r("Custom element doesn't exist: "+e.type+".",e);a.style.display="None";var s=setTimeout((function(){a.style.display=""}),2e3);return customElements.whenDefined(e.type).then((function(){clearTimeout(s),tt(a,"ll-rebuild",{},a)})),a}(e),Lr._hass&&(t.hass=Lr._hass),t&&t.addEventListener("ll-rebuild",(r=>{r.stopPropagation(),this._rebuildCard(t,e)}),{once:!0}),t}))}_rebuildCard(e,r){return t(this,void 0,void 0,(function*(){const t=yield this._createCard(r);return e.replaceWith(t),this._card=t,window.setTimeout((()=>{this.updateStyleOnTimeout()}),1),window.setTimeout((()=>{this.updateStyleOnTimeout()}),500),t}))}getCardSize(){return t(this,void 0,void 0,(function*(){if(this._cardPromise)try{yield this._cardPromise}catch(e){yield new Promise((e=>window.setTimeout(e,100)))}if(!this._card){for(let e=0;e<3&&(yield new Promise((e=>window.setTimeout(e,50))),!this._card);e++);if(!this._card)return 1}try{const e=yield this._computeCardSize(this._card),t=Math.max(1,e);if(this.shadowRoot){const e=this.shadowRoot.querySelector("ha-card");e&&0===e.offsetHeight&&1===t&&window.setTimeout((()=>{this.requestUpdate(),window.dispatchEvent(new Event("resize"))}),10)}return t}catch(e){return 1}}))}_computeCardSize(e){return"function"==typeof e.getCardSize?e.getCardSize():customElements.get(e.localName)?1:customElements.whenDefined(e.localName).then((()=>this._computeCardSize(e)))}getStyleOverrideFromConfig(e){var t,r;const o=e.map((e=>e.variable.startsWith("bolder-container-card-")?`--${e.variable}_internal: ${e.value} !important;`:`--bolder-container-card-${e.variable}_internal: ${e.value} !important;`));return null===(r=null===(t=this._config)||void 0===t?void 0:t.keep_background)||void 0===r||r||(o.push("--bolder-container-card-title-backdrop-filter_internal: none !important;"),o.push("--bolder-container-card-title-background_internal: none !important;")),d`
:host { 
  ${s(o.join("\n"))} 
}`}};e([We({attribute:!1})],Fr.prototype,"_card",void 0),e([We({attribute:!1})],Fr.prototype,"_header",void 0),e([We({attribute:!1})],Fr.prototype,"_config",void 0),Fr=Lr=e([Fe("bolder-container-card")],Fr);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const qr=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:r,elements:o}=t;return{kind:r,elements:o,finisher(t){customElements.define(e,t)}}})(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Wr=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},Gr=(e,t,r)=>{t.constructor.createProperty(r,e)};function Zr(e){return(t,r)=>void 0!==r?Gr(e,t,r):Wr(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function Jr(e){return Zr({...e,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Xr(e,t){return(({finisher:e,descriptor:t})=>(r,o)=>{var i;if(void 0===o){const o=null!==(i=r.originalKey)&&void 0!==i?i:r.key,n=null!=t?{kind:"method",placement:"prototype",key:o,descriptor:t(r.key)}:{...r,key:o};return null!=e&&(n.finisher=function(t){e(t,o)}),n}{const i=r.constructor;void 0!==t&&Object.defineProperty(r,o,t(o)),null==e||e(i,o)}})({descriptor:r=>{const o={get(){var t,r;return null!==(r=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==r?r:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof r?Symbol():"__"+r;o.get=function(){var r,o;return void 0===this[t]&&(this[t]=null!==(o=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e))&&void 0!==o?o:null),this[t]}}return o}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qr;null===(Qr=window.HTMLSlotElement)||void 0===Qr||Qr.prototype.assignedElements;var Yr,eo=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function to(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(o=e[r],i=t[r],!(o===i||eo(o)&&eo(i)))return!1;var o,i;return!0}let ro=Yr=class extends ne{setConfig(e){this.config=e}getLocale(){var e,t;return null!==(t=null!==(e=this.config.locale)&&void 0!==e?e:this.hass.locale.language)&&void 0!==t?t:"en-GB"}render(){if(!this.hass)return j;const e=[{name:"header",type:"expandable",flatten:!0,expanded:!0,locale:this.getLocale(),schema:Yr._schema(this.getLocale())}];return U`
      <ha-form
      .hass=${this.hass}
      .data=${this.config}
      .schema=${e}
      .computeLabel=${e=>function(e){return Ir("editor."+e.name,e.locale)}(e)}
      @value-changed=${e=>{this.valueChanged(e)}}
      ></ha-form>
    `}valueChanged(e){if(!this.config||!this.hass)return;const t=Object.assign({},this.config);Yr.getConfigFromValueChangedObject(t,e.detail.value),this.config=t;const r=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(r)}static getConfigFromValueChangedObject(e,t){e.title=t.title,e.subtitle=t.subtitle,e.icon=t.icon,e.styles=t.styles}localize(e,t){return Ir("editor."+e,t)}};ro._schema=function(e,t){void 0===t&&(t=to);var r=null;function o(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];if(r&&r.lastThis===this&&t(o,r.lastArgs))return r.lastResult;var n=e.apply(this,o);return r={lastResult:n,lastArgs:o,lastThis:this},n}return o.clear=function(){r=null},o}((e=>[{name:"title",locale:e,selector:{text:{}}},{name:"subtitle",locale:e,selector:{text:{}}},{name:"icon",locale:e,selector:{icon:{}}}])),e([Zr({attribute:!1})],ro.prototype,"hass",void 0),e([Jr()],ro.prototype,"config",void 0),ro=Yr=e([qr("bolder-header-card-editor")],ro);var oo=Object.freeze({__proto__:null,get BolderHeaderCardEditor(){return ro}});function io(e){if(!e||"object"!=typeof e)return e;if("[object Date]"==Object.prototype.toString.call(e))return new Date(e.getTime());if(Array.isArray(e))return e.map(io);var t={};return Object.keys(e).forEach((function(r){t[r]=io(e[r])})),t}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let no=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ao={},so=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends no{constructor(){super(...arguments),this.key=j}render(e,t){return this.key=e,t}update(e,[t,r]){return t!==this.key&&(((e,t=ao)=>{e._$AH=t;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */})(e),this.key=t),r}}),lo=globalThis,co=lo.ShadowRoot&&(void 0===lo.ShadyCSS||lo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ho=Symbol(),uo=new WeakMap;let po=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==ho)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(co&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=uo.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&uo.set(t,e))}return e}toString(){return this.cssText}};const _o=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[o+1]),e[0]);return new po(r,e,ho)},bo=co?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new po("string"==typeof e?e:e+"",void 0,ho))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:go,defineProperty:vo,getOwnPropertyDescriptor:fo,getOwnPropertyNames:mo,getOwnPropertySymbols:yo,getPrototypeOf:wo}=Object,ko=globalThis,Co=ko.trustedTypes,$o=Co?Co.emptyScript:"",xo=ko.reactiveElementPolyfillSupport,So=(e,t)=>e,Ao={toAttribute(e,t){switch(t){case Boolean:e=e?$o:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},Eo=(e,t)=>!go(e,t),Oo={attribute:!0,type:String,converter:Ao,reflect:!1,useDefault:!1,hasChanged:Eo};Symbol.metadata??=Symbol("metadata"),ko.litPropertyMetadata??=new WeakMap;let zo=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Oo){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);void 0!==o&&vo(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:i}=fo(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const n=o?.call(this);i?.call(this,t),this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Oo}static _$Ei(){if(this.hasOwnProperty(So("elementProperties")))return;const e=wo(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(So("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(So("properties"))){const e=this.properties,t=[...mo(e),...yo(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(bo(e))}else void 0!==e&&t.push(bo(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(co)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const r of t){const t=document.createElement("style"),o=lo.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=r.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(void 0!==o&&!0===r.reflect){const i=(void 0!==r.converter?.toAttribute?r.converter:Ao).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){const r=this.constructor,o=r._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=r.getPropertyOptions(o),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:Ao;this._$Em=o,this[o]=i.fromAttribute(t,e.type)??this._$Ej?.get(o)??null,this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){const o=this.constructor,i=this[e];if(r??=o.getPropertyOptions(e),!((r.hasChanged??Eo)(i,t)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,r))))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:i},n){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==i||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e){const{wrapped:e}=r,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,r,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};zo.elementStyles=[],zo.shadowRootOptions={mode:"open"},zo[So("elementProperties")]=new Map,zo[So("finalized")]=new Map,xo?.({ReactiveElement:zo}),(ko.reactiveElementVersions??=[]).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const To=globalThis,Po=To.trustedTypes,Mo=Po?Po.createPolicy("lit-html",{createHTML:e=>e}):void 0,Bo="$lit$",Ko=`lit$${Math.random().toFixed(9).slice(2)}$`,Ho="?"+Ko,Io=`<${Ho}>`,Ro=document,No=()=>Ro.createComment(""),Uo=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Lo=Array.isArray,jo="[ \t\n\f\r]",Vo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Do=/-->/g,Fo=/>/g,qo=RegExp(`>|${jo}(?:([^\\s"'>=/]+)(${jo}*=${jo}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Wo=/'/g,Go=/"/g,Zo=/^(?:script|style|textarea|title)$/i,Jo=(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),Xo=Symbol.for("lit-noChange"),Qo=Symbol.for("lit-nothing"),Yo=new WeakMap,ei=Ro.createTreeWalker(Ro,129);function ti(e,t){if(!Lo(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Mo?Mo.createHTML(t):t}const ri=(e,t)=>{const r=e.length-1,o=[];let i,n=2===t?"<svg>":3===t?"<math>":"",a=Vo;for(let t=0;t<r;t++){const r=e[t];let s,d,l=-1,c=0;for(;c<r.length&&(a.lastIndex=c,d=a.exec(r),null!==d);)c=a.lastIndex,a===Vo?"!--"===d[1]?a=Do:void 0!==d[1]?a=Fo:void 0!==d[2]?(Zo.test(d[2])&&(i=RegExp("</"+d[2],"g")),a=qo):void 0!==d[3]&&(a=qo):a===qo?">"===d[0]?(a=i??Vo,l=-1):void 0===d[1]?l=-2:(l=a.lastIndex-d[2].length,s=d[1],a=void 0===d[3]?qo:'"'===d[3]?Go:Wo):a===Go||a===Wo?a=qo:a===Do||a===Fo?a=Vo:(a=qo,i=void 0);const h=a===qo&&e[t+1].startsWith("/>")?" ":"";n+=a===Vo?r+Io:l>=0?(o.push(s),r.slice(0,l)+Bo+r.slice(l)+Ko+h):r+Ko+(-2===l?t:h)}return[ti(e,n+(e[r]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class oi{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let i=0,n=0;const a=e.length-1,s=this.parts,[d,l]=ri(e,t);if(this.el=oi.createElement(d,r),ei.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=ei.nextNode())&&s.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(Bo)){const t=l[n++],r=o.getAttribute(e).split(Ko),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:i,name:a[2],strings:r,ctor:"."===a[1]?di:"?"===a[1]?li:"@"===a[1]?ci:si}),o.removeAttribute(e)}else e.startsWith(Ko)&&(s.push({type:6,index:i}),o.removeAttribute(e));if(Zo.test(o.tagName)){const e=o.textContent.split(Ko),t=e.length-1;if(t>0){o.textContent=Po?Po.emptyScript:"";for(let r=0;r<t;r++)o.append(e[r],No()),ei.nextNode(),s.push({type:2,index:++i});o.append(e[t],No())}}}else if(8===o.nodeType)if(o.data===Ho)s.push({type:2,index:i});else{let e=-1;for(;-1!==(e=o.data.indexOf(Ko,e+1));)s.push({type:7,index:i}),e+=Ko.length-1}i++}}static createElement(e,t){const r=Ro.createElement("template");return r.innerHTML=e,r}}function ii(e,t,r=e,o){if(t===Xo)return t;let i=void 0!==o?r._$Co?.[o]:r._$Cl;const n=Uo(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),void 0===n?i=void 0:(i=new n(e),i._$AT(e,r,o)),void 0!==o?(r._$Co??=[])[o]=i:r._$Cl=i),void 0!==i&&(t=ii(e,i._$AS(e,t.values),i,o)),t}class ni{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=(e?.creationScope??Ro).importNode(t,!0);ei.currentNode=o;let i=ei.nextNode(),n=0,a=0,s=r[0];for(;void 0!==s;){if(n===s.index){let t;2===s.type?t=new ai(i,i.nextSibling,this,e):1===s.type?t=new s.ctor(i,s.name,s.strings,this,e):6===s.type&&(t=new hi(i,this,e)),this._$AV.push(t),s=r[++a]}n!==s?.index&&(i=ei.nextNode(),n++)}return ei.currentNode=Ro,o}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class ai{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,o){this.type=2,this._$AH=Qo,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ii(this,e,t),Uo(e)?e===Qo||null==e||""===e?(this._$AH!==Qo&&this._$AR(),this._$AH=Qo):e!==this._$AH&&e!==Xo&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>Lo(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Qo&&Uo(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ro.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,o="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=oi.createElement(ti(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new ni(o,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=Yo.get(e.strings);return void 0===t&&Yo.set(e.strings,t=new oi(e)),t}k(e){Lo(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const i of e)o===t.length?t.push(r=new ai(this.O(No()),this.O(No()),this,this.options)):r=t[o],r._$AI(i),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class si{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,i){this.type=1,this._$AH=Qo,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Qo}_$AI(e,t=this,r,o){const i=this.strings;let n=!1;if(void 0===i)e=ii(this,e,t,0),n=!Uo(e)||e!==this._$AH&&e!==Xo,n&&(this._$AH=e);else{const o=e;let a,s;for(e=i[0],a=0;a<i.length-1;a++)s=ii(this,o[r+a],t,a),s===Xo&&(s=this._$AH[a]),n||=!Uo(s)||s!==this._$AH[a],s===Qo?e=Qo:e!==Qo&&(e+=(s??"")+i[a+1]),this._$AH[a]=s}n&&!o&&this.j(e)}j(e){e===Qo?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class di extends si{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Qo?void 0:e}}class li extends si{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Qo)}}class ci extends si{constructor(e,t,r,o,i){super(e,t,r,o,i),this.type=5}_$AI(e,t=this){if((e=ii(this,e,t,0)??Qo)===Xo)return;const r=this._$AH,o=e===Qo&&r!==Qo||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==Qo&&(r===Qo||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class hi{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ii(this,e)}}const ui=To.litHtmlPolyfillSupport;ui?.(oi,ai),(To.litHtmlVersions??=[]).push("3.3.0");const pi=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let _i=class extends zo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{const o=r?.renderBefore??t;let i=o._$litPart$;if(void 0===i){const e=r?.renderBefore??null;o._$litPart$=i=new ai(t.insertBefore(No(),e),e,void 0,r??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Xo}};_i._$litElement$=!0,_i.finalized=!0,pi.litElementHydrateSupport?.({LitElement:_i});const bi=pi.litElementPolyfillSupport;bi?.({LitElement:_i}),(pi.litElementVersions??=[]).push("4.2.0");var gi=_o`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,vi=_o`
  :host {
    display: contents;
  }
`,fi=Object.defineProperty,mi=Object.getOwnPropertyDescriptor,yi=Object.getOwnPropertySymbols,wi=Object.prototype.hasOwnProperty,ki=Object.prototype.propertyIsEnumerable,Ci=e=>{throw TypeError(e)},$i=(e,t,r)=>t in e?fi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,xi=(e,t)=>{for(var r in t||(t={}))wi.call(t,r)&&$i(e,r,t[r]);if(yi)for(var r of yi(t))ki.call(t,r)&&$i(e,r,t[r]);return e},Si=(e,t,r,o)=>{for(var i,n=o>1?void 0:o?mi(t,r):t,a=e.length-1;a>=0;a--)(i=e[a])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&fi(t,r,n),n},Ai=(e,t,r)=>t.has(e)||Ci("Cannot "+r);function Ei(e,t){const r=xi({waitUntilFirstUpdate:!1},t);return(t,o)=>{const{update:i}=t,n=Array.isArray(e)?e:[e];t.update=function(e){n.forEach((t=>{const i=t;if(e.has(i)){const t=e.get(i),n=this[i];t!==n&&(r.waitUntilFirstUpdate&&!this.hasUpdated||this[o](t,n))}})),i.call(this,e)}}}var Oi=_o`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;const zi={attribute:!0,type:String,converter:Ao,reflect:!1,hasChanged:Eo},Ti=(e=zi,t,r)=>{const{kind:o,metadata:i}=r;let n=globalThis.litPropertyMetadata.get(i);if(void 0===n&&globalThis.litPropertyMetadata.set(i,n=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),n.set(r.name,e),"accessor"===o){const{name:o}=r;return{set(r){const i=t.get.call(this);t.set.call(this,r),this.requestUpdate(o,i,e)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=r;return function(r){const i=this[o];t.call(this,r),this.requestUpdate(o,i,e)}}throw Error("Unsupported decorator location: "+o)};function Pi(e){return(t,r)=>"object"==typeof r?Ti(e,t,r):((e,t,r)=>{const o=t.hasOwnProperty(r);return t.constructor.createProperty(r,e),o?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function Mi(e){return Pi({...e,state:!0,attribute:!1})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function Bi(e,t){return(t,r,o)=>((e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,r),r))(t,r,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}var Ki,Hi=class extends _i{constructor(){var e,t,r;super(),e=this,r=!1,(t=Ki).has(e)?Ci("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach((([e,t])=>{this.constructor.define(e,t)}))}emit(e,t){const r=new CustomEvent(e,xi({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const o=customElements.get(e);if(!o){try{customElements.define(e,t,r)}catch(o){customElements.define(e,class extends t{},r)}return}let i=" (unknown version)",n=i;"version"in t&&t.version&&(i=" v"+t.version),"version"in o&&o.version&&(n=" v"+o.version),i&&n&&i===n||console.warn(`Attempted to register <${e}>${i}, but <${e}>${n} has already been registered.`)}attributeChangedCallback(e,t,r){var o,i;Ai(o=this,i=Ki,"read from private field"),i.get(o)||(this.constructor.elementProperties.forEach(((e,t)=>{e.reflect&&null!=this[t]&&this.initialReflectedProperties.set(t,this[t])})),((e,t,r,o)=>{Ai(e,t,"write to private field"),t.set(e,r)})(this,Ki,!0)),super.attributeChangedCallback(e,t,r)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach(((t,r)=>{e.has(r)&&null==this[r]&&(this[r]=t)}))}};Ki=new WeakMap,Hi.version="2.20.1",Hi.dependencies={},Si([Pi()],Hi.prototype,"dir",2),Si([Pi()],Hi.prototype,"lang",2);var Ii=class extends Hi{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver((e=>{this.emit("sl-resize",{detail:{entries:e}})})),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const e=this.shadowRoot.querySelector("slot");if(null!==e){const t=e.assignedElements({flatten:!0});this.observedElements.forEach((e=>this.resizeObserver.unobserve(e))),this.observedElements=[],t.forEach((e=>{this.resizeObserver.observe(e),this.observedElements.push(e)}))}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return Jo` <slot @slotchange=${this.handleSlotChange}></slot> `}};function Ri(e,t,r="vertical",o="smooth"){const i=function(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}(e,t),n=i.top+t.scrollTop,a=i.left+t.scrollLeft,s=t.scrollLeft,d=t.scrollLeft+t.offsetWidth,l=t.scrollTop,c=t.scrollTop+t.offsetHeight;"horizontal"!==r&&"both"!==r||(a<s?t.scrollTo({left:a,behavior:o}):a+e.clientWidth>d&&t.scrollTo({left:a-t.offsetWidth+e.clientWidth,behavior:o})),"vertical"!==r&&"both"!==r||(n<l?t.scrollTo({top:n,behavior:o}):n+e.clientHeight>c&&t.scrollTo({top:n-t.offsetHeight+e.clientHeight,behavior:o}))}Ii.styles=[Oi,vi],Si([Pi({type:Boolean,reflect:!0})],Ii.prototype,"disabled",2),Si([Ei("disabled",{waitUntilFirstUpdate:!0})],Ii.prototype,"handleDisabledChange",1);var Ni=_o`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,Ui="";function Li(e){Ui=e}var ji={name:"default",resolver:e=>function(e=""){if(!Ui){const e=[...document.getElementsByTagName("script")],t=e.find((e=>e.hasAttribute("data-shoelace")));if(t)Li(t.getAttribute("data-shoelace"));else{const t=e.find((e=>/shoelace(\.min)?\.js($|\?)/.test(e.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(e.src)));let r="";t&&(r=t.getAttribute("src")),Li(r.split("/").slice(0,-1).join("/"))}}return Ui.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}(`assets/icons/${e}.svg`)},Vi={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',copy:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},Di=[ji,{name:"system",resolver:e=>e in Vi?`data:image/svg+xml,${encodeURIComponent(Vi[e])}`:""}],Fi=[];function qi(e){return Di.find((t=>t.name===e))}var Wi=_o`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var Gi,Zi=Symbol(),Ji=Symbol(),Xi=new Map,Qi=class extends Hi{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let o;if(null==t?void 0:t.spriteSheet)return this.svg=Jo`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(o=await fetch(e,{mode:"cors"}),!o.ok)return 410===o.status?Zi:Ji}catch(e){return Ji}try{const e=document.createElement("div");e.innerHTML=await o.text();const t=e.firstElementChild;if("svg"!==(null==(r=null==t?void 0:t.tagName)?void 0:r.toLowerCase()))return Zi;Gi||(Gi=new DOMParser);const i=Gi.parseFromString(t.outerHTML,"text/html").body.querySelector("svg");return i?(i.part.add("svg"),document.adoptNode(i)):Zi}catch(e){return Zi}}connectedCallback(){var e;super.connectedCallback(),e=this,Fi.push(e)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var e;super.disconnectedCallback(),e=this,Fi=Fi.filter((t=>t!==e))}getIconSource(){const e=qi(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),o=r?qi(this.library):void 0;if(!t)return void(this.svg=null);let i=Xi.get(t);if(i||(i=this.resolveIcon(t,o),Xi.set(t,i)),!this.initialRender)return;const n=await i;if(n===Ji&&Xi.delete(t),t===this.getIconSource().url)if(((e,t)=>void 0!==e?._$litType$)(n)){if(this.svg=n,o){await this.updateComplete;const e=this.shadowRoot.querySelector("[part='svg']");"function"==typeof o.mutator&&e&&o.mutator(e)}}else switch(n){case Ji:case Zi:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),null==(e=null==o?void 0:o.mutator)||e.call(o,this.svg),this.emit("sl-load")}}render(){return this.svg}};Qi.styles=[Oi,Wi],Si([Mi()],Qi.prototype,"svg",2),Si([Pi({reflect:!0})],Qi.prototype,"name",2),Si([Pi()],Qi.prototype,"src",2),Si([Pi()],Qi.prototype,"label",2),Si([Pi({reflect:!0})],Qi.prototype,"library",2),Si([Ei("label")],Qi.prototype,"handleLabelChange",1),Si([Ei(["name","src","library"])],Qi.prototype,"setIcon",1);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Yi=1;let en=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tn=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends en{constructor(e){if(super(e),e.type!==Yi||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const r=e.element.classList;for(const e of this.st)e in t||(r.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(r.add(e),this.st.add(e)):(r.remove(e),this.st.delete(e)))}return Xo}}),rn=Symbol.for(""),on=e=>{if(e?.r===rn)return e?._$litStatic$},nn=(e,...t)=>({_$litStatic$:t.reduce(((t,r,o)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[o+1]),e[0]),r:rn}),an=new Map,sn=(e=>(t,...r)=>{const o=r.length;let i,n;const a=[],s=[];let d,l=0,c=!1;for(;l<o;){for(d=t[l];l<o&&void 0!==(n=r[l],i=on(n));)d+=i+t[++l],c=!0;l!==o&&s.push(n),a.push(d),l++}if(l===o&&a.push(t[o]),c){const e=a.join("$$lit$$");void 0===(t=an.get(e))&&(a.raw=a,an.set(e,t=a)),r=s}return e(t,...r)})(Jo),dn=e=>e??Qo;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ln=class extends Hi{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?nn`a`:nn`button`;return sn`
      <${t}
        part="base"
        class=${tn({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${dn(e?void 0:this.disabled)}
        type=${dn(e?void 0:"button")}
        href=${dn(e?this.href:void 0)}
        target=${dn(e?this.target:void 0)}
        download=${dn(e?this.download:void 0)}
        rel=${dn(e&&this.target?"noreferrer noopener":void 0)}
        role=${dn(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${dn(this.name)}
          library=${dn(this.library)}
          src=${dn(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};ln.styles=[Oi,Ni],ln.dependencies={"sl-icon":Qi},Si([Bi(".icon-button")],ln.prototype,"button",2),Si([Mi()],ln.prototype,"hasFocus",2),Si([Pi()],ln.prototype,"name",2),Si([Pi()],ln.prototype,"library",2),Si([Pi()],ln.prototype,"src",2),Si([Pi()],ln.prototype,"href",2),Si([Pi()],ln.prototype,"target",2),Si([Pi()],ln.prototype,"download",2),Si([Pi()],ln.prototype,"label",2),Si([Pi({type:Boolean,reflect:!0})],ln.prototype,"disabled",2);const cn=new Set,hn=new Map;let un,pn="ltr",_n="en";const bn="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(bn){const e=new MutationObserver(vn);pn=document.documentElement.dir||"ltr",_n=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function gn(...e){e.map((e=>{const t=e.$code.toLowerCase();hn.has(t)?hn.set(t,Object.assign(Object.assign({},hn.get(t)),e)):hn.set(t,e),un||(un=e)})),vn()}function vn(){bn&&(pn=document.documentElement.dir||"ltr",_n=document.documentElement.lang||navigator.language),[...cn.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}let fn=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){cn.add(this.host)}hostDisconnected(){cn.delete(this.host)}dir(){return`${this.host.dir||pn}`.toLowerCase()}lang(){return`${this.host.lang||_n}`.toLowerCase()}getTranslationData(e){var t,r;const o=new Intl.Locale(e.replace(/_/g,"-")),i=null==o?void 0:o.language.toLowerCase(),n=null!==(r=null===(t=null==o?void 0:o.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==r?r:"";return{locale:o,language:i,region:n,primary:hn.get(`${i}-${n}`),secondary:hn.get(i)}}exists(e,t){var r;const{primary:o,secondary:i}=this.getTranslationData(null!==(r=t.lang)&&void 0!==r?r:this.lang());return t=Object.assign({includeFallback:!1},t),!!(o&&o[e]||i&&i[e]||t.includeFallback&&un&&un[e])}term(e,...t){const{primary:r,secondary:o}=this.getTranslationData(this.lang());let i;if(r&&r[e])i=r[e];else if(o&&o[e])i=o[e];else{if(!un||!un[e])return console.error(`No translation found for: ${String(e)}`),String(e);i=un[e]}return"function"==typeof i?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(e,t)}};var mn={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};gn(mn);var yn=mn,wn=class extends fn{};gn(yn);var kn=class extends Hi{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new wn(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver((()=>{this.repositionIndicator(),this.updateScrollControls()})),this.mutationObserver=new MutationObserver((e=>{const t=e.filter((({target:e})=>{if(e===this)return!0;if(e.closest("sl-tab-group")!==this)return!1;const t=e.tagName.toLowerCase();return"sl-tab"===t||"sl-tab-panel"===t}));if(0!==t.length)if(t.some((e=>!["aria-labelledby","aria-controls"].includes(e.attributeName)))&&setTimeout((()=>this.setAriaLabels())),t.some((e=>"disabled"===e.attributeName)))this.syncTabsAndPanels();else if(t.some((e=>"active"===e.attributeName))){const e=t.filter((e=>"active"===e.attributeName&&"sl-tab"===e.target.tagName.toLowerCase())).map((e=>e.target)),r=e.find((e=>e.active));r&&this.setActiveTab(r)}})),this.updateComplete.then((()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then((()=>{const e=new IntersectionObserver(((e,t)=>{var r;e[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(null!=(r=this.getActiveTab())?r:this.tabs[0],{emitEvents:!1}),t.unobserve(e[0].target))}));e.observe(this.tabGroup)}))}))}disconnectedCallback(){var e,t;super.disconnectedCallback(),null==(e=this.mutationObserver)||e.disconnect(),this.nav&&(null==(t=this.resizeObserver)||t.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter((e=>"sl-tab-panel"===e.tagName.toLowerCase()))}getActiveTab(){return this.tabs.find((e=>e.active))}handleClick(e){const t=e.target.closest("sl-tab");(null==t?void 0:t.closest("sl-tab-group"))===this&&null!==t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}handleKeyDown(e){const t=e.target.closest("sl-tab");if((null==t?void 0:t.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&null!==t&&(this.setActiveTab(t,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const t=this.tabs.find((e=>e.matches(":focus"))),r="rtl"===this.localize.dir();let o=null;if("sl-tab"===(null==t?void 0:t.tagName.toLowerCase())){if("Home"===e.key)o=this.focusableTabs[0];else if("End"===e.key)o=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&e.key===(r?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&"ArrowUp"===e.key){const e=this.tabs.findIndex((e=>e===t));o=this.findNextFocusableTab(e,"backward")}else if(["top","bottom"].includes(this.placement)&&e.key===(r?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&"ArrowDown"===e.key){const e=this.tabs.findIndex((e=>e===t));o=this.findNextFocusableTab(e,"forward")}if(!o)return;o.tabIndex=0,o.focus({preventScroll:!0}),"auto"===this.activation?this.setActiveTab(o,{scrollBehavior:"smooth"}):this.tabs.forEach((e=>{e.tabIndex=e===o?0:-1})),["top","bottom"].includes(this.placement)&&Ri(o,this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=xi({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const r=this.activeTab;this.activeTab=e,this.tabs.forEach((e=>{e.active=e===this.activeTab,e.tabIndex=e===this.activeTab?0:-1})),this.panels.forEach((e=>{var t;return e.active=e.name===(null==(t=this.activeTab)?void 0:t.panel)})),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Ri(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(r&&this.emit("sl-tab-hide",{detail:{name:r.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach((e=>{const t=this.panels.find((t=>t.name===e.panel));t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))}))}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,r=e.clientHeight,o="rtl"===this.localize.dir(),i=this.getAllTabs(),n=i.slice(0,i.indexOf(e)).reduce(((e,t)=>({left:e.left+t.clientWidth,top:e.top+t.clientHeight})),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=o?-1*n.left+"px":`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${n.top}px`}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter((e=>!e.disabled)),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then((()=>this.updateScrollControls()))}findNextFocusableTab(e,t){let r=null;const o="forward"===t?1:-1;let i=e+o;for(;e<this.tabs.length;){if(r=this.tabs[i]||null,null===r){r="forward"===t?this.focusableTabs[0]:this.focusableTabs[this.focusableTabs.length-1];break}if(!r.disabled)break;i+=o}return r}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return"rtl"===this.localize.dir()?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find((t=>t.panel===e));t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e="rtl"===this.localize.dir();return Jo`
      <div
        part="base"
        class=${tn({"tab-group":!0,"tab-group--top":"top"===this.placement,"tab-group--bottom":"bottom"===this.placement,"tab-group--start":"start"===this.placement,"tab-group--end":"end"===this.placement,"tab-group--rtl":"rtl"===this.localize.dir(),"tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?Jo`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${tn({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?Jo`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${tn({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};kn.styles=[Oi,gi],kn.dependencies={"sl-icon-button":ln,"sl-resize-observer":Ii},Si([Bi(".tab-group")],kn.prototype,"tabGroup",2),Si([Bi(".tab-group__body")],kn.prototype,"body",2),Si([Bi(".tab-group__nav")],kn.prototype,"nav",2),Si([Bi(".tab-group__indicator")],kn.prototype,"indicator",2),Si([Mi()],kn.prototype,"hasScrollControls",2),Si([Mi()],kn.prototype,"shouldHideScrollStartButton",2),Si([Mi()],kn.prototype,"shouldHideScrollEndButton",2),Si([Pi()],kn.prototype,"placement",2),Si([Pi()],kn.prototype,"activation",2),Si([Pi({attribute:"no-scroll-controls",type:Boolean})],kn.prototype,"noScrollControls",2),Si([Pi({attribute:"fixed-scroll-controls",type:Boolean})],kn.prototype,"fixedScrollControls",2),Si([function(e){return(t,r)=>{const o="function"==typeof t?t:t[r];Object.assign(o,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */({passive:!0})],kn.prototype,"updateScrollButtons",1),Si([Ei("noScrollControls",{waitUntilFirstUpdate:!0})],kn.prototype,"updateScrollControls",1),Si([Ei("placement",{waitUntilFirstUpdate:!0})],kn.prototype,"syncIndicator",1);var Cn=(e,t)=>{let r=0;return function(...o){window.clearTimeout(r),r=window.setTimeout((()=>{e.call(this,...o)}),t)}},$n=(e,t,r)=>{const o=e[t];e[t]=function(...e){o.call(this,...e),r.call(this,o,...e)}};(()=>{if("undefined"==typeof window)return;if(!("onscrollend"in window)){const e=new Set,t=new WeakMap,r=t=>{for(const r of t.changedTouches)e.add(r.identifier)},o=t=>{for(const r of t.changedTouches)e.delete(r.identifier)};document.addEventListener("touchstart",r,!0),document.addEventListener("touchend",o,!0),document.addEventListener("touchcancel",o,!0),$n(EventTarget.prototype,"addEventListener",(function(r,o){if("scrollend"!==o)return;const i=Cn((()=>{e.size?i():this.dispatchEvent(new Event("scrollend"))}),100);r.call(this,"scroll",i,{passive:!0}),t.set(this,i)})),$n(EventTarget.prototype,"removeEventListener",(function(e,r){if("scrollend"!==r)return;const o=t.get(this);o&&e.call(this,"scroll",o,{passive:!0})}))}})();var xn=_o`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,Sn=0,An=class extends Hi{constructor(){super(...arguments),this.localize=new wn(this),this.attrId=++Sn,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,Jo`
      <div
        part="base"
        class=${tn({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?Jo`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};An.styles=[Oi,xn],An.dependencies={"sl-icon-button":ln},Si([Bi(".tab")],An.prototype,"tab",2),Si([Pi({reflect:!0})],An.prototype,"panel",2),Si([Pi({type:Boolean,reflect:!0})],An.prototype,"active",2),Si([Pi({type:Boolean,reflect:!0})],An.prototype,"closable",2),Si([Pi({type:Boolean,reflect:!0})],An.prototype,"disabled",2),Si([Pi({type:Number,reflect:!0})],An.prototype,"tabIndex",2),Si([Ei("active")],An.prototype,"handleActiveChange",1),Si([Ei("disabled")],An.prototype,"handleDisabledChange",1),An.define("sl-tab");let En=class extends kn{constructor(){super(...arguments),this._mouseIsDown=!1,this._scrolled=!1,this._scrollStartX=0,this._scrollLeft=0,this._mouseDown=e=>{const t=this._scrollContainer;t&&(this._scrollStartX=e.pageX-t.offsetLeft,this._scrollLeft=t.scrollLeft,this._mouseIsDown=!0,this._scrolled=!1,window.addEventListener("mousemove",this._mouseMove),window.addEventListener("mouseup",this._mouseUp,{once:!0}))},this._mouseUp=()=>{this._mouseIsDown=!1,this._scrolled&&(this._mouseReleasedAt=(new Date).getTime()),window.removeEventListener("mousemove",this._mouseMove)},this._mouseMove=e=>{if(!this._mouseIsDown)return;const t=this._scrollContainer;if(!t)return;const r=e.pageX-t.offsetLeft-this._scrollStartX;this._scrolled||(this._scrolled=Math.abs(r)>1),t.scrollLeft=this._scrollLeft-r}}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousemove",this._mouseMove),window.removeEventListener("mouseup",this._mouseUp)}setAriaLabels(){}getAllPanels(){return[]}firstUpdated(e){super.firstUpdated(e);const t=this._scrollContainer;t&&t.addEventListener("mousedown",this._mouseDown)}handleClick(e){this._mouseReleasedAt&&(new Date).getTime()-this._mouseReleasedAt<100||super.handleClick(e)}};En.styles=[gi,d`
      :host {
        --sl-spacing-3x-small: 0.125rem;
        --sl-spacing-2x-small: 0.25rem;
        --sl-spacing-x-small: 0.5rem;
        --sl-spacing-small: 0.75rem;
        --sl-spacing-medium: 1rem;
        --sl-spacing-large: 1.25rem;
        --sl-spacing-x-large: 1.75rem;
        --sl-spacing-2x-large: 2.25rem;
        --sl-spacing-3x-large: 3rem;
        --sl-spacing-4x-large: 4.5rem;

        --sl-transition-x-slow: 1000ms;
        --sl-transition-slow: 500ms;
        --sl-transition-medium: 250ms;
        --sl-transition-fast: 150ms;
        --sl-transition-x-fast: 50ms;
        --transition-speed: var(--sl-transition-fast);
        --sl-border-radius-small: 0.1875rem;
        --sl-border-radius-medium: 0.25rem;
        --sl-border-radius-large: 0.5rem;
        --sl-border-radius-x-large: 1rem;
        --sl-border-radius-circle: 50%;
        --sl-border-radius-pill: 9999px;

        --sl-color-neutral-600: inherit;

        --sl-font-weight-semibold: 500;
        --sl-font-size-small: 14px;

        --sl-color-primary-600: var(
          --ha-tab-active-text-color,
          var(--primary-color)
        );
        --track-color: var(--ha-tab-track-color, var(--divider-color));
        --indicator-color: var(--ha-tab-indicator-color, var(--primary-color));
      }
      ::slotted(sl-tab:not([active])) {
        opacity: 0.8;
      }
    `],e([Xr(".tab-group__nav",!0)],En.prototype,"_scrollContainer",void 0),En=e([qr("sl-tab-group")],En);let On=class extends ne{constructor(){super(...arguments),this._selectedCard=0,this._GUImode=!0,this._guiModeAvailable=!0,this._keys=new Map}setConfig(e){var t,r,o,i,n,a,s;const d=null!==(r=null===(t=e.cards)||void 0===t?void 0:t.slice(0,3).map((e=>e.type)).join(","))&&void 0!==r?r:"",l=`${null!==(i=null===(o=e.cards)||void 0===o?void 0:o.length)&&void 0!==i?i:0}-${d}-${null!==(n=e.mode)&&void 0!==n?n:"vertical"}`,c=void 0!==this._previousConfigHash&&this._previousConfigHash!==l;if(this.config=e,this.config.header&&e.header&&(this.config.header.styles=e.header.styles),c)this._selectedCard=0,this._keys.clear(),this._GUImode=!0,this._guiModeAvailable=!0;else{const t=null!==(s=null===(a=e.cards)||void 0===a?void 0:a.length)&&void 0!==s?s:0;(this._selectedCard>=t||this._selectedCard<0)&&(this._selectedCard=0,this._keys.clear())}this._previousConfigHash=l}formData(){return this.config}render(){var e,t,r,o,i,n,a,s,d,l;if(!this.hass||!this.config)return j;const c=this._selectedCard,h=null!==(t=null===(e=this.config.cards)||void 0===e?void 0:e.length)&&void 0!==t?t:0,u=this._GUImode,p=[{title:this.localize("container_card_settings",this.getLocale()),type:"expandable",flatten:!1,expanded:!1,locale:this.getLocale(),schema:[{name:"mode",locale:this.getLocale(),selector:{select:{multiple:!1,options:[{label:this.localize("vertical",this.getLocale()),value:"vertical"},{label:this.localize("horizontal",this.getLocale()),value:"horizontal"}]}}},{name:"is_inner_container",locale:this.getLocale(),selector:{boolean:{}}},{name:"header",type:"expandable",flatten:!1,expanded:!1,locale:this.getLocale(),schema:ro._schema(this.getLocale())},{title:this.localize("keep_settings",this.getLocale()),type:"expandable",flatten:!1,expanded:!1,locale:this.getLocale(),schema:[{name:"keep_margin",locale:this.getLocale(),selector:{boolean:{}}},{name:"keep_background",locale:this.getLocale(),selector:{boolean:{}}},{name:"keep_box_shadow",locale:this.getLocale(),selector:{boolean:{}}},{name:"keep_border_radius",locale:this.getLocale(),selector:{boolean:{}}},{name:"keep_outer_padding",locale:this.getLocale(),selector:{boolean:{}}}]},{name:"card_background_override",locale:this.getLocale(),selector:{text:{}}}]},{name:"inner_cards",locale:this.getLocale(),selector:{constant:{value:this.localize("inner_cards",this.getLocale())}}}];return U`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${p}
        .computeLabel=${e=>this.computeLabel(e)}
        @value-changed=${e=>{this.valueChanged(e)}}
      ></ha-form>
      <div class="card-config">
        <div class="toolbar">
          <sl-tab-group>
            ${null===(r=this.config.cards)||void 0===r?void 0:r.map(((e,t)=>U`<sl-tab 
                  slot="nav" 
                  .panel=${t.toString()} 
                  .active=${t===c}
                  @click=${e=>{this._handleTabClick(t,e)}}
                >
                  ${t+1}
                </sl-tab>`))}
          </sl-tab-group>
          <ha-icon-button
            @click=${()=>{this._handleAddCard()}}
            .path=${"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"}
          ></ha-icon-button>
        </div>

        <div id="editor">
          ${c<h?U`
                <div id="card-options">
                  <ha-icon-button
                    class="gui-mode-button"
                    @click=${()=>{this._toggleMode()}}
                    .disabled=${!this._guiModeAvailable}
                    .label=${null===(o=this.hass)||void 0===o?void 0:o.localize(u?"ui.panel.lovelace.editor.edit_card.show_code_editor":"ui.panel.lovelace.editor.edit_card.show_visual_editor")}
                    .path=${u?"M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z":"M11 15H17V17H11V15M9 7H7V9H9V7M11 13H17V11H11V13M11 9H17V7H11V9M9 11H7V13H9V11M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H5V19H19V5M9 15H7V17H9V15Z"}
                  ></ha-icon-button>

                  <ha-icon-button-arrow-prev
                    .disabled=${0===c}
                    .label=${null===(i=this.hass)||void 0===i?void 0:i.localize("ui.panel.lovelace.editor.edit_card.move_before")}
                    @click=${e=>{this._handleMove(e)}}
                    .move=${-1}
                  ></ha-icon-button-arrow-prev>

                  <ha-icon-button-arrow-next
                    .label=${null===(n=this.hass)||void 0===n?void 0:n.localize("ui.panel.lovelace.editor.edit_card.move_after")}
                    .disabled=${c===h-1}
                    @click=${e=>{this._handleMove(e)}}
                    .move=${1}
                  ></ha-icon-button-arrow-next>

                  <ha-icon-button
                    .label=${null===(a=this.hass)||void 0===a?void 0:a.localize("ui.panel.lovelace.editor.edit_card.copy")}
                    .path=${"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}
                    @click=${()=>{this._handleCopyCard()}}
                  ></ha-icon-button>

                  <ha-icon-button
                    .label=${null===(s=this.hass)||void 0===s?void 0:s.localize("ui.panel.lovelace.editor.edit_card.cut")}
                    .path=${"M19,3L13,9L15,11L22,4V3M12,12.5A0.5,0.5 0 0,1 11.5,12A0.5,0.5 0 0,1 12,11.5A0.5,0.5 0 0,1 12.5,12A0.5,0.5 0 0,1 12,12.5M6,20A2,2 0 0,1 4,18C4,16.89 4.9,16 6,16A2,2 0 0,1 8,18C8,19.11 7.1,20 6,20M6,8A2,2 0 0,1 4,6C4,4.89 4.9,4 6,4A2,2 0 0,1 8,6C8,7.11 7.1,8 6,8M9.64,7.64C9.87,7.14 10,6.59 10,6A4,4 0 0,0 6,2A4,4 0 0,0 2,6A4,4 0 0,0 6,10C6.59,10 7.14,9.87 7.64,9.64L10,12L7.64,14.36C7.14,14.13 6.59,14 6,14A4,4 0 0,0 2,18A4,4 0 0,0 6,22A4,4 0 0,0 10,18C10,17.41 9.87,16.86 9.64,16.36L12,14L19,21H22V20L9.64,7.64Z"}
                    @click=${()=>{this._handleCutCard()}}
                  ></ha-icon-button>

                  <ha-icon-button
                    .label=${null===(d=this.hass)||void 0===d?void 0:d.localize("ui.panel.lovelace.editor.edit_card.delete")}
                    .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
                    @click=${()=>{this._handleDeleteCard()}}
                  ></ha-icon-button>
                </div>
                ${so(this._getKey(null!==(l=this.config.cards)&&void 0!==l?l:[],c),U`<hui-card-element-editor
                    .hass=${this.hass}
                    .value=${this.config.cards?this.config.cards[c]:[]}
                    .lovelace=${this.lovelace}
                    @config-changed=${e=>{this._handleConfigChanged(e)}}
                    @GUImode-changed=${e=>{this._handleGUIModeChanged(e)}}
                  ></hui-card-element-editor>`)}
              `:U`
                <hui-card-picker
                  .hass=${this.hass}
                  .lovelace=${this.lovelace}
                  @config-changed=${e=>{this._handleCardPicked(e)}}
                ></hui-card-picker>
              `}
        </div>
      </div>
    `}getLocale(){var e,t;return null!==(t=null!==(e=this.config.locale)&&void 0!==e?e:this.hass.locale.language)&&void 0!==t?t:"en-US"}computeLabel(e){return Ir("editor."+e.name,e.locale)}localize(e,t){return Ir("editor."+e,t)}_handleTabClick(e,t){t&&t.stopPropagation(),this._selectedCard!==e&&(this._setMode(!0),this._guiModeAvailable=!0,this._selectedCard=e)}_handleSelectedCard(e){var t,r;e.stopPropagation();const o=parseInt(null!==(r=null!==(t=e.detail.name)&&void 0!==t?t:e.detail.panel)&&void 0!==r?r:e.detail,10);this._selectedCard===o||isNaN(o)||(this._setMode(!0),this._guiModeAvailable=!0,this._selectedCard=o)}_setMode(e){this._GUImode=e,this._cardEditorEl&&(this._cardEditorEl.GUImode=e)}_handleAddCard(){return t(this,void 0,void 0,(function*(){var e,t,r,o;this._selectedCard=null!==(r=null===(t=null===(e=this.config)||void 0===e?void 0:e.cards)||void 0===t?void 0:t.length)&&void 0!==r?r:0,yield this.updateComplete,null===(o=this.renderRoot.querySelector("sl-tab-group"))||void 0===o||o.syncIndicator()}))}_toggleMode(){var e;null===(e=this._cardEditorEl)||void 0===e||e.toggleMode()}_handleMove(e){var t;if(!this.config)return;const r=e.currentTarget.move,o=this._selectedCard+r,i=[...null!==(t=this.config.cards)&&void 0!==t?t:[]],n=i.splice(this._selectedCard,1)[0];i.splice(o,0,n),this.config=Object.assign(Object.assign({},this.config),{cards:i}),this._selectedCard=o,this._keys.clear(),tt(this,"config-changed",{config:this.config})}_handleCopyCard(){this.config&&(this._clipboard=io(this.config.cards?this.config.cards[this._selectedCard]:[]))}_handleCutCard(){this._handleCopyCard(),this._handleDeleteCard()}_handleDeleteCard(){var e;if(!this.config)return;const t=[...null!==(e=this.config.cards)&&void 0!==e?e:[]];t.splice(this._selectedCard,1),this.config=Object.assign(Object.assign({},this.config),{cards:t}),this._selectedCard=Math.max(0,this._selectedCard-1),this._keys.clear(),tt(this,"config-changed",{config:this.config})}_getKey(e,t){var r;const o=`${null!==(r=this._previousConfigHash)&&void 0!==r?r:"initial"}-${e[t].type}-${t}-${e.length}`;return this._keys.has(o)||this._keys.set(o,Math.random().toString()),this._keys.get(o)}_handleCardPicked(e){var t;if(e.stopPropagation(),!this.config)return;const r=e.detail.config,o=[...null!==(t=this.config.cards)&&void 0!==t?t:[],r];this.config=Object.assign(Object.assign({},this.config),{cards:o}),this._keys.clear(),tt(this,"config-changed",{config:this.config})}_handleConfigChanged(e){var t;if(e.stopPropagation(),!this.config)return;const r=[...null!==(t=this.config.cards)&&void 0!==t?t:[]],o=e.detail.config;r[this._selectedCard]=o,this.config=Object.assign(Object.assign({},this.config),{cards:r}),this._guiModeAvailable=e.detail.guiModeAvailable,tt(this,"config-changed",{config:this.config})}_handleGUIModeChanged(e){e.stopPropagation(),this._GUImode=e.detail.guiMode,this._guiModeAvailable=e.detail.guiModeAvailable}valueChanged(e){if(!this.config||!this.hass)return;const t=Object.assign({},this.config);t.mode=e.detail.value.mode,t.keep_background=e.detail.value.keep_background,t.keep_border_radius=e.detail.value.keep_border_radius,t.keep_box_shadow=e.detail.value.keep_box_shadow,t.keep_margin=e.detail.value.keep_margin,t.keep_outer_padding=e.detail.value.keep_outer_padding,t.card_background_override=e.detail.value.card_background_override,t.is_inner_container=e.detail.value.is_inner_container,t.cards=e.detail.value.cards,t.styles=e.detail.value.styles;const r=Object.assign({},this.config.header);ro.getConfigFromValueChangedObject(r,e.detail.value.header),t.header=r,this.config=t;const o=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(o)}};e([Zr({attribute:!1})],On.prototype,"hass",void 0),e([Zr({attribute:!1})],On.prototype,"lovelace",void 0),e([Jr()],On.prototype,"config",void 0),e([Jr()],On.prototype,"_selectedCard",void 0),e([Jr()],On.prototype,"_GUImode",void 0),e([Jr()],On.prototype,"_guiModeAvailable",void 0),e([Xr("hui-card-element-editor")],On.prototype,"_cardEditorEl",void 0),On=e([qr("bolder-container-card-editor")],On);var zn=Object.freeze({__proto__:null,get BolderContainerCardEditor(){return On}});
