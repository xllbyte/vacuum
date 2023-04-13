import{c,b as m,v as b,f as v,r as y,i as k,p as _,a as x,d as h,h as a,al as $}from"./runtime-core.esm-bundler-f0bd303b.js";import{e as B,j as d,I,f as C,k as s,P as R}from"./light-ddbeb814.js";import{T as S}from"./runtime-dom.esm-bundler-4c308a5c.js";function L(e){const t=c(e),o=m(t.value);return b(t,i=>{o.value=i}),typeof e=="function"?o:{__v_isRef:!0,get value(){return o.value},set value(i){e.set(i)}}}function T(){const e=m(!1);return v(()=>{e.value=!0}),y(e)}const g=B("n-form-item");function E(e,{defaultSize:t="medium",mergedSize:o,mergedDisabled:i}={}){const r=k(g,null);_(g,null);const n=c(o?()=>o(r):()=>{const{size:l}=e;if(l)return l;if(r){const{mergedSize:f}=r;if(f.value!==void 0)return f.value}return t}),w=c(i?()=>i(r):()=>{const{disabled:l}=e;return l!==void 0?l:r?r.disabled.value:!1}),p=c(()=>{const{status:l}=e;return l||(r==null?void 0:r.mergedValidationStatus.value)});return x(()=>{r&&r.restoreValidation()}),{mergedSizeRef:n,mergedDisabledRef:w,mergedStatusRef:p,nTriggerFormBlur(){r&&r.handleContentBlur()},nTriggerFormChange(){r&&r.handleContentChange()},nTriggerFormFocus(){r&&r.handleContentFocus()},nTriggerFormInput(){r&&r.handleContentInput()}}}const z=h({name:"BaseIconSwitchTransition",setup(e,{slots:t}){const o=T();return()=>a(S,{name:"icon-switch-transition",appear:o.value},t)}}),{cubicBezierEaseInOut:F}=I;function u({originalTransform:e="",left:t=0,top:o=0,transition:i=`all .3s ${F} !important`}={}){return[d("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:t,top:o,opacity:0}),d("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:t,top:o,opacity:1}),d("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:t,top:o,transition:i})]}const N=d([d("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),d("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),d("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),d("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),C("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[s("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[u()]),s("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[s("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),s("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[s("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[s("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),s("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[s("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),s("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[s("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),s("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[u({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),j={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},K=h({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},j),setup(e){R("-base-loading",N,$(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:t,strokeWidth:o,stroke:i,scale:r}=this,n=t/r;return a("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},a(z,null,{default:()=>this.show?a("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},a("div",{class:`${e}-base-loading__container`},a("div",{class:`${e}-base-loading__container-layer`},a("div",{class:`${e}-base-loading__container-layer-left`},a("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*n} ${2*n}`,xmlns:"http://www.w3.org/2000/svg",style:{color:i}},a("circle",{fill:"none",stroke:"currentColor","stroke-width":o,"stroke-linecap":"round",cx:n,cy:n,r:t-o/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),a("div",{class:`${e}-base-loading__container-layer-patch`},a("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*n} ${2*n}`,xmlns:"http://www.w3.org/2000/svg",style:{color:i}},a("circle",{fill:"none",stroke:"currentColor","stroke-width":o,"stroke-linecap":"round",cx:n,cy:n,r:t-o/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t}))),a("div",{class:`${e}-base-loading__container-layer-right`},a("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*n} ${2*n}`,xmlns:"http://www.w3.org/2000/svg",style:{color:i}},a("circle",{fill:"none",stroke:"currentColor","stroke-width":o,"stroke-linecap":"round",cx:n,cy:n,r:t-o/2,"stroke-dasharray":4.91*t,"stroke-dashoffset":2.46*t})))))):a("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}});export{z as N,u as a,K as b,E as c,g as f,T as i,L as u};
