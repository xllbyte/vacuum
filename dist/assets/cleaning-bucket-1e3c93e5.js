import{T as Y}from"./runtime-dom.esm-bundler-4c308a5c.js";import{u as G}from"./use-locale-30d180b9.js";import{b as J}from"./Loading-7bc32f77.js";import{i as F,c as x,d as k,b as q,f as I,v as N,al as H,h as g,p as X,n as O,j as ee,z as oe,A as ne}from"./runtime-core.esm-bundler-f0bd303b.js";import{c as te,b as Q,j as z,f as B,g as E,k as V,u as Z,h as M,i as K,M as le,e as re,w as W}from"./light-ddbeb814.js";import{f as ie}from"./fade-in-scale-up.cssr-9e1e30d5.js";import{a as se}from"./light-f7c48211.js";import{t as ae}from"./throttle-dc3115ae.js";import{N as ce}from"./Scrollbar-2e2dcb58.js";function A(e,o){const n=F(te,null);return x(()=>e.hljs||(n==null?void 0:n.mergedHljsRef.value))}const de=e=>{const{textColor2:o,fontSize:n,fontWeightStrong:i,textColor3:a}=e;return{textColor:o,fontSize:n,fontWeightStrong:i,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:a}},ue={name:"Code",common:Q,self:de},D=ue,he=z([B("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[E("show-line-numbers",`
 display: flex;
 `),V("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),E("word-wrap",[z("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),z("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),z("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:e})=>{const o=`${e.bPrefix}code`;return[`${o} .hljs-comment,
 ${o} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${o} .hljs-doctag,
 ${o} .hljs-keyword,
 ${o} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${o} .hljs-section,
 ${o} .hljs-name,
 ${o} .hljs-selector-tag,
 ${o} .hljs-deletion,
 ${o} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${o} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${o} .hljs-string,
 ${o} .hljs-regexp,
 ${o} .hljs-addition,
 ${o} .hljs-attribute,
 ${o} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${o} .hljs-built_in,
 ${o} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${o} .hljs-attr,
 ${o} .hljs-variable,
 ${o} .hljs-template-variable,
 ${o} .hljs-type,
 ${o} .hljs-selector-class,
 ${o} .hljs-selector-attr,
 ${o} .hljs-selector-pseudo,
 ${o} .hljs-number {
 color: var(--n-hue-6);
 }`,`${o} .hljs-symbol,
 ${o} .hljs-bullet,
 ${o} .hljs-link,
 ${o} .hljs-meta,
 ${o} .hljs-selector-id,
 ${o} .hljs-title {
 color: var(--n-hue-2);
 }`,`${o} .hljs-emphasis {
 font-style: italic;
 }`,`${o} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${o} .hljs-link {
 text-decoration: underline;
 }`]}]),fe=Object.assign(Object.assign({},M.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),me=k({name:"Code",props:fe,setup(e,{slots:o}){const{internalNoHighlight:n}=e,{mergedClsPrefixRef:i,inlineThemeDisabled:a}=Z(),c=q(null),T=n?{value:void 0}:A(e),C=(t,u,d)=>{const{value:h}=T;return!h||!(t&&h.getLanguage(t))?null:h.highlight(d?u.trim():u,{language:t}).value},w=x(()=>e.inline||e.wordWrap?!1:e.showLineNumbers),b=()=>{if(o.default)return;const{value:t}=c;if(!t)return;const{language:u}=e,d=e.uri?window.decodeURIComponent(e.code):e.code;if(u){const s=C(u,d,e.trim);if(s!==null){if(e.inline)t.innerHTML=s;else{const l=t.querySelector(".__code__");l&&t.removeChild(l);const r=document.createElement("pre");r.className="__code__",r.innerHTML=s,t.appendChild(r)}return}}if(e.inline){t.textContent=d;return}const h=t.querySelector(".__code__");if(h)h.textContent=d;else{const s=document.createElement("pre");s.className="__code__",s.textContent=d,t.innerHTML="",t.appendChild(s)}};I(b),N(H(e,"language"),b),N(H(e,"code"),b),n||N(T,b);const _=M("Code","-code",he,D,e,i),R=x(()=>{const{common:{cubicBezierEaseInOut:t,fontFamilyMono:u},self:{textColor:d,fontSize:h,fontWeightStrong:s,lineNumberTextColor:l,"mono-3":r,"hue-1":p,"hue-2":j,"hue-3":f,"hue-4":y,"hue-5":L,"hue-5-2":S,"hue-6":$,"hue-6-2":m}}=_.value,{internalFontSize:P}=e;return{"--n-font-size":P?`${P}px`:h,"--n-font-family":u,"--n-font-weight-strong":s,"--n-bezier":t,"--n-text-color":d,"--n-mono-3":r,"--n-hue-1":p,"--n-hue-2":j,"--n-hue-3":f,"--n-hue-4":y,"--n-hue-5":L,"--n-hue-5-2":S,"--n-hue-6":$,"--n-hue-6-2":m,"--n-line-number-text-color":l}}),v=a?K("code",x(()=>`${e.internalFontSize||"a"}`),R,e):void 0;return{mergedClsPrefix:i,codeRef:c,mergedShowLineNumbers:w,lineNumbers:x(()=>{let t=1;const u=[];let d=!1;for(const h of e.code)h===`
`?(d=!0,u.push(t++)):d=!1;return d||u.push(t++),u.join(`
`)}),cssVars:a?void 0:R,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){var e,o;const{mergedClsPrefix:n,wordWrap:i,mergedShowLineNumbers:a,onRender:c}=this;return c==null||c(),g("code",{class:[`${n}-code`,this.themeClass,i&&`${n}-code--word-wrap`,a&&`${n}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},a?g("pre",{class:`${n}-code__line-numbers`},this.lineNumbers):null,(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e))}}),ge=e=>{const{textColor2:o,modalColor:n,borderColor:i,fontSize:a,primaryColor:c}=e;return{loaderFontSize:a,loaderTextColor:o,loaderColor:n,loaderBorder:`1px solid ${i}`,loadingColor:c}},be=le({name:"Log",common:Q,peers:{Scrollbar:se,Code:D},self:ge}),ve=be,pe=k({name:"LogLoader",props:{clsPrefix:{type:String,required:!0}},setup(){return{locale:G("Log").localeRef}},render(){const{clsPrefix:e}=this;return g("div",{class:`${e}-log-loader`},g(J,{clsPrefix:e,strokeWidth:24,scale:.85}),g("span",{class:`${e}-log-loader__content`},this.locale.loading))}}),U=re("n-log"),je=k({props:{line:{type:String,default:""}},setup(e){const{trimRef:o,highlightRef:n,languageRef:i,mergedHljsRef:a}=F(U),c=q(null),T=x(()=>o.value?e.line.trim():e.line);function C(){c.value&&(c.value.innerHTML=w(i.value,T.value))}function w(b,_){const{value:R}=a;return R&&b&&R.getLanguage(b)?R.highlight(_,{language:b}).value:_}return I(()=>{n.value&&C()}),N(H(e,"line"),()=>{n.value&&C()}),{highlight:n,selfRef:c,maybeTrimmedLines:T}},render(){const{highlight:e,maybeTrimmedLines:o}=this;return g("pre",{ref:"selfRef"},e?null:o)}}),$e=B("log",`
 position: relative;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
`,[z("pre",`
 white-space: pre-wrap;
 word-break: break-word;
 margin: 0;
 `),B("log-loader",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 position: absolute;
 right: 16px;
 top: 8px;
 height: 34px;
 border-radius: 17px;
 line-height: 34px;
 white-space: nowrap;
 overflow: hidden;
 border: var(--n-loader-border);
 color: var(--n-loader-text-color);
 background-color: var(--n-loader-color);
 font-size: var(--n-loader-font-size);
 `,[ie(),V("content",`
 display: inline-block;
 vertical-align: bottom;
 line-height: 34px;
 padding-left: 40px;
 padding-right: 20px;
 white-space: nowrap;
 `),B("base-loading",`
 color: var(--n-loading-color);
 position: absolute;
 left: 12px;
 top: calc(50% - 10px);
 font-size: 20px;
 width: 20px;
 height: 20px;
 display: inline-block;
 `)])]),xe=Object.assign(Object.assign({},M.props),{loading:Boolean,trim:Boolean,log:String,fontSize:{type:Number,default:14},lines:{type:Array,default:()=>[]},lineHeight:{type:Number,default:1.25},language:String,rows:{type:Number,default:15},offsetTop:{type:Number,default:0},offsetBottom:{type:Number,default:0},hljs:Object,onReachTop:Function,onReachBottom:Function,onRequireMore:Function}),ke=k({name:"Log",props:xe,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:n}=Z(e),i=q(!1),a=x(()=>e.language!==void 0),c=x(()=>`calc(${Math.round(e.rows*e.lineHeight*e.fontSize)}px)`),T=x(()=>{const{log:l}=e;return l?l.split(`
`):e.lines}),C=q(null),w=M("Log","-log",$e,ve,e,o);function b(l){const r=l.target,p=r.firstElementChild;if(i.value){O(()=>{i.value=!1});return}const j=r.offsetHeight,f=r.scrollTop,y=p.offsetHeight,L=f,S=y-f-j;if(L<=e.offsetTop){const{onReachTop:$,onRequireMore:m}=e;m&&m("top"),$&&$()}if(S<=e.offsetBottom){const{onReachBottom:$,onRequireMore:m}=e;m&&m("bottom"),$&&$()}}const _=ae(R,300);function R(l){if(i.value){O(()=>{i.value=!1});return}if(C.value){const{containerRef:r,contentRef:p}=C.value;if(r&&p){const j=r.offsetHeight,f=r.scrollTop,y=p.offsetHeight,L=f,S=y-f-j,$=l.deltaY;if(L===0&&$<0){const{onRequireMore:m}=e;m&&m("top")}if(S<=0&&$>0){const{onRequireMore:m}=e;m&&m("bottom")}}}}function v(l){const{value:r}=C;if(!r)return;const{slient:p,top:j,position:f}=l;p&&(i.value=!0),j!==void 0?r.scrollTo({left:0,top:j}):(f==="bottom"||f==="top")&&r.scrollTo({position:f})}function t(l=!1){W("log","`scrollToTop` is deprecated, please use `scrollTo({ position: 'top'})` instead."),v({position:"top",slient:l})}function u(l=!1){W("log","`scrollToTop` is deprecated, please use `scrollTo({ position: 'bottom'})` instead."),v({position:"bottom",slient:l})}X(U,{languageRef:H(e,"language"),mergedHljsRef:A(e),trimRef:H(e,"trim"),highlightRef:a});const d={scrollTo:v},h=x(()=>{const{self:{loaderFontSize:l,loaderTextColor:r,loaderColor:p,loaderBorder:j,loadingColor:f},common:{cubicBezierEaseInOut:y}}=w.value;return{"--n-bezier":y,"--n-loader-font-size":l,"--n-loader-border":j,"--n-loader-color":p,"--n-loader-text-color":r,"--n-loading-color":f}}),s=n?K("log",void 0,h,e):void 0;return Object.assign(Object.assign({},d),{mergedClsPrefix:o,scrollbarRef:C,mergedTheme:w,styleHeight:c,mergedLines:T,scrollToTop:t,scrollToBottom:u,handleWheel:_,handleScroll:b,cssVars:n?void 0:h,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender})},render(){const{mergedClsPrefix:e,mergedTheme:o,onRender:n}=this;return n==null||n(),g("div",{class:[`${e}-log`,this.themeClass],style:[{lineHeight:this.lineHeight,height:this.styleHeight},this.cssVars],onWheelPassive:this.handleWheel},[g(ce,{ref:"scrollbarRef",theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,onScroll:this.handleScroll},{default:()=>g(me,{internalNoHighlight:!0,internalFontSize:this.fontSize,theme:o.peers.Code,themeOverrides:o.peerOverrides.Code},{default:()=>this.mergedLines.map((i,a)=>g(je,{key:a,line:i}))})}),g(Y,{name:"fade-in-scale-up-transition"},{default:()=>this.loading?g(pe,{clsPrefix:e}):null})])}}),Ce={class:"inline-block",viewBox:"0 0 24 24",width:"1em",height:"1em"},Re=ne("path",{fill:"currentColor",d:"M8.75 23q-.75 0-1.312-.488q-.563-.487-.663-1.237L5 8h14l-1.775 13.275q-.1.75-.663 1.237Q16 23 15.25 23ZM12 16q1.25 0 2.125-.875T15 13v-2h-2v2q0 .425-.287.712Q12.425 14 12 14t-.712-.288Q11 13.425 11 13v-2H9v2q0 1.25.875 2.125T12 16Zm3-9q-.625 0-1.062-.438Q13.5 6.125 13.5 5.5t.438-1.062Q14.375 4 15 4t1.062.438q.438.437.438 1.062t-.438 1.062Q15.625 7 15 7Zm-5-1q-1.05 0-1.775-.725Q7.5 4.55 7.5 3.5q0-1.05.725-1.775Q8.95 1 10 1q1.05 0 1.775.725q.725.725.725 1.775q0 1.05-.725 1.775Q11.05 6 10 6Z"},null,-1),Te=[Re];function ye(e,o){return ee(),oe("svg",Ce,Te)}const Me={name:"material-symbols-cleaning-bucket",render:ye};export{ke as _,Me as a};
