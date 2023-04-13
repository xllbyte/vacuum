import{v as nt,a as ot}from"./runtime-dom.esm-bundler-4c308a5c.js";import{ag as it,e as st,t as lt,f as r,g as c,j as x,k as A,W as dt,u as ct,h as he,n as _,i as bt,T as de,V as M}from"./light-ddbeb814.js";import{d as N,b as S,h as s,i as ge,c as V,ah as ft,F as ut,v as G,p as pt,al as B,g as vt,n as K,w as ht,at as gt}from"./runtime-core.esm-bundler-f0bd303b.js";import{a as mt,N as xt}from"./Card-b56fe7ef.js";import{A as yt}from"./Add-0a86f6af.js";import{r as wt}from"./render-694098f6.js";import{o as Rt}from"./omit-b0e7e098.js";import{t as Ct}from"./light-bcfa0aa4.js";import{u as ce}from"./use-compitable-7fe5a3c6.js";import{f as q}from"./flatten-997edf61.js";import{u as zt}from"./use-merged-state-c45842e4.js";import{t as J}from"./throttle-dc3115ae.js";import{c as St,a as be,o as $t}from"./cssr-0446b946.js";import{V as fe}from"./VResizeObserver-aa804d72.js";const Pt=be(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[be("&::-webkit-scrollbar",{width:0,height:0})]),Tt=N({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=S(null);function n(l){!(l.currentTarget.offsetWidth<l.currentTarget.scrollWidth)||l.deltaY===0||(l.currentTarget.scrollLeft+=l.deltaY+l.deltaX,l.preventDefault())}const b=it();return Pt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:St,ssr:b}),Object.assign({selfRef:e,handleWheel:n},{scrollTo(...l){var g;(g=e.value)===null||g===void 0||g.scrollTo(...l)}})},render(){return s("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),ee=st("n-tabs"),me={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Xt=N({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:me,setup(e){const n=ge(ee,null);return n||lt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return s("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),_t=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Rt(me,["displayDirective"])),Z=N({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:_t,setup(e){const{mergedClsPrefixRef:n,valueRef:b,typeRef:y,closableRef:l,tabStyleRef:g,tabChangeIdRef:u,onBeforeLeaveRef:w,triggerRef:m,handleAdd:R,activateTab:z,handleClose:v}=ge(ee);return{trigger:m,mergedClosable:V(()=>{if(e.internalAddable)return!1;const{closable:f}=e;return f===void 0?l.value:f}),style:g,clsPrefix:n,value:b,type:y,handleClose(f){f.stopPropagation(),!e.disabled&&v(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){R();return}const{name:f}=e,C=++u.id;if(f!==b.value){const{value:h}=w;h?Promise.resolve(h(e.name,b.value)).then(L=>{L&&u.id===C&&z(f)}):z(f)}}}},render(){const{internalAddable:e,clsPrefix:n,name:b,disabled:y,label:l,tab:g,value:u,mergedClosable:w,style:m,trigger:R,$slots:{default:z}}=this,v=l??g;return s("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?s("div",{class:`${n}-tabs-tab-pad`}):null,s("div",Object.assign({key:b,"data-name":b,"data-disabled":y?!0:void 0},ft({class:[`${n}-tabs-tab`,u===b&&`${n}-tabs-tab--active`,y&&`${n}-tabs-tab--disabled`,w&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`],onClick:R==="click"?this.activateTab:void 0,onMouseenter:R==="hover"?this.activateTab:void 0,style:e?void 0:m},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),s("span",{class:`${n}-tabs-tab__label`},e?s(ut,null,s("div",{class:`${n}-tabs-tab__height-placeholder`}," "),s(mt,{clsPrefix:n},{default:()=>s(yt,null)})):z?z():typeof v=="object"?v:wt(v??b)),w&&this.type==="card"?s(xt,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:y}):null))}}),Wt=r("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[c("segment-type",[r("tabs-rail",[x("&.transition-disabled","color: red;",[r("tabs-tab",`
 transition: none;
 `)])])]),c("left, right",`
 flex-direction: row;
 `,[r("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),c("right",`
 flex-direction: row-reverse;
 `,[r("tabs-bar",`
 left: 0;
 `)]),c("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[r("tabs-bar",`
 top: 0;
 `)]),r("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[r("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[r("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[c("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),x("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),c("flex",[r("tabs-nav",{width:"100%"},[r("tabs-wrapper",{width:"100%"},[r("tabs-tab",{marginRight:0})])])]),r("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[A("prefix, suffix",`
 display: flex;
 align-items: center;
 `),A("prefix","padding-right: 16px;"),A("suffix","padding-left: 16px;")]),r("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[c("shadow-before",[x("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),c("shadow-after",[x("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),r("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[x("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),x("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),x("&::before",`
 left: 0;
 `),x("&::after",`
 right: 0;
 `)]),r("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),r("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),r("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),r("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[c("disabled",{cursor:"not-allowed"}),A("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),A("label",`
 display: flex;
 align-items: center;
 `)]),r("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[x("&.transition-disabled",`
 transition: none;
 `),c("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),r("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),r("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[x("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),x("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),x("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),x("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),x("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),r("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),c("line-type, bar-type",[r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[x("&:hover",{color:"var(--n-tab-text-color-hover)"}),c("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),c("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),r("tabs-nav",[c("line-type",[A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),c("card-type",[A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[c("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[A("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),dt("disabled",[x("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),c("closable","padding-right: 6px;"),c("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),c("disabled","color: var(--n-tab-text-color-disabled);")]),r("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),c("left, right",[r("tabs-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-pad",`
 height: var(--n-tab-gap);
 width: 100%;
 `)])]),r("tabs-nav-scroll-content",`
 border-bottom: none;
 `)]),c("left",[r("tabs-nav-scroll-content",`
 box-sizing: border-box;
 border-right: 1px solid var(--n-tab-border-color);
 `)]),c("right",[r("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `)]),c("bottom",[r("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 border-bottom: none;
 `)])])]),At=Object.assign(Object.assign({},he.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Yt=N({name:"Tabs",props:At,setup(e,{slots:n}){var b,y,l,g;const{mergedClsPrefixRef:u,inlineThemeDisabled:w}=ct(e),m=he("Tabs","-tabs",Wt,Ct,e,u),R=S(null),z=S(null),v=S(null),f=S(null),C=S(null),h=S(!0),L=S(!0),$=ce(e,["labelSize","size"]),F=ce(e,["activeName","value"]),d=S((y=(b=F.value)!==null&&b!==void 0?b:e.defaultValue)!==null&&y!==void 0?y:n.default?(g=(l=q(n.default())[0])===null||l===void 0?void 0:l.props)===null||g===void 0?void 0:g.name:null),p=zt(F,d),j={id:0},xe=V(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});G(p,()=>{j.id=0,H(),ae()});function U(){var t;const{value:a}=p;return a===null?null:(t=R.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function ye(t){if(e.type==="card")return;const{value:a}=z;if(a&&t){const o=`${u.value}-tabs-bar--disabled`,{barWidth:i,placement:T}=e;if(t.dataset.disabled==="true"?a.classList.add(o):a.classList.remove(o),["top","bottom"].includes(T)){if(te(["top","maxHeight","height"]),typeof i=="number"&&t.offsetWidth>=i){const P=Math.floor((t.offsetWidth-i)/2)+t.offsetLeft;a.style.left=`${P}px`,a.style.maxWidth=`${i}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",a.offsetWidth}else{if(te(["left","maxWidth","width"]),typeof i=="number"&&t.offsetHeight>=i){const P=Math.floor((t.offsetHeight-i)/2)+t.offsetTop;a.style.top=`${P}px`,a.style.maxHeight=`${i}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",a.offsetHeight}}}function te(t){const{value:a}=z;if(a)for(const o of t)a.style[o]=""}function H(){if(e.type==="card")return;const t=U();t&&ye(t)}function ae(t){var a;const o=(a=C.value)===null||a===void 0?void 0:a.$el;if(!o)return;const i=U();if(!i)return;const{scrollLeft:T,offsetWidth:P}=o,{offsetLeft:E,offsetWidth:D}=i;T>E?o.scrollTo({top:0,left:E,behavior:"smooth"}):E+D>T+P&&o.scrollTo({top:0,left:E+D-P,behavior:"smooth"})}const O=S(null);let X=0,W=null;function we(t){const a=O.value;if(a){X=t.getBoundingClientRect().height;const o=`${X}px`,i=()=>{a.style.height=o,a.style.maxHeight=o};W?(i(),W(),W=null):W=i}}function Re(t){const a=O.value;if(a){const o=t.getBoundingClientRect().height,i=()=>{document.body.offsetHeight,a.style.maxHeight=`${o}px`,a.style.height=`${Math.max(X,o)}px`};W?(W(),W=null,i()):W=i}}function Ce(){const t=O.value;t&&(t.style.maxHeight="",t.style.height="")}const re={value:[]},ne=S("next");function ze(t){const a=p.value;let o="next";for(const i of re.value){if(i===a)break;if(i===t){o="prev";break}}ne.value=o,Se(t)}function Se(t){const{onActiveNameChange:a,onUpdateValue:o,"onUpdate:value":i}=e;a&&M(a,t),o&&M(o,t),i&&M(i,t),d.value=t}function $e(t){const{onClose:a}=e;a&&M(a,t)}function oe(){const{value:t}=z;if(!t)return;const a="transition-disabled";t.classList.add(a),H(),t.classList.remove(a)}let ie=0;function Pe(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||ie===t.contentRect.width)return;ie=t.contentRect.width;const{type:o}=e;(o==="line"||o==="bar")&&oe(),o!=="segment"&&Y((a=C.value)===null||a===void 0?void 0:a.$el)}const Te=J(Pe,64);G([()=>e.justifyContent,()=>e.size],()=>{K(()=>{const{type:t}=e;(t==="line"||t==="bar")&&oe()})});const I=S(!1);function _e(t){var a;const{target:o,contentRect:{width:i}}=t,T=o.parentElement.offsetWidth;if(!I.value)T<i&&(I.value=!0);else{const{value:P}=f;if(!P)return;T-i>P.$el.offsetWidth&&(I.value=!1)}Y((a=C.value)===null||a===void 0?void 0:a.$el)}const We=J(_e,64);function Ae(){const{onAdd:t}=e;t&&t(),K(()=>{const a=U(),{value:o}=C;!a||!o||o.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function Y(t){if(!t)return;const{scrollLeft:a,scrollWidth:o,offsetWidth:i}=t;h.value=a<=0,L.value=a+i>=o}const Le=J(t=>{Y(t.target)},64);pt(ee,{triggerRef:B(e,"trigger"),tabStyleRef:B(e,"tabStyle"),paneClassRef:B(e,"paneClass"),paneStyleRef:B(e,"paneStyle"),mergedClsPrefixRef:u,typeRef:B(e,"type"),closableRef:B(e,"closable"),valueRef:p,tabChangeIdRef:j,onBeforeLeaveRef:B(e,"onBeforeLeave"),activateTab:ze,handleClose:$e,handleAdd:Ae}),$t(()=>{H(),ae()}),vt(()=>{const{value:t}=v;if(!t||["left","right"].includes(e.placement))return;const{value:a}=u,o=`${a}-tabs-nav-scroll-wrapper--shadow-before`,i=`${a}-tabs-nav-scroll-wrapper--shadow-after`;h.value?t.classList.remove(o):t.classList.add(o),L.value?t.classList.remove(i):t.classList.add(i)});const se=S(null);G(p,()=>{if(e.type==="segment"){const t=se.value;t&&K(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const Be={syncBarPosition:()=>{H()}},le=V(()=>{const{value:t}=$,{type:a}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],i=`${t}${o}`,{self:{barColor:T,closeIconColor:P,closeIconColorHover:E,closeIconColorPressed:D,tabColor:je,tabBorderColor:ke,paneTextColor:Ee,tabFontWeight:Fe,tabBorderRadius:He,tabFontWeightActive:Oe,colorSegment:Ie,fontWeightStrong:De,tabColorSegment:Me,closeSize:Ve,closeIconSize:Ne,closeColorHover:Ue,closeColorPressed:Xe,closeBorderRadius:Ye,[_("panePadding",t)]:Ge,[_("tabPadding",i)]:Ke,[_("tabPaddingVertical",i)]:qe,[_("tabGap",i)]:Je,[_("tabTextColor",a)]:Qe,[_("tabTextColorActive",a)]:Ze,[_("tabTextColorHover",a)]:et,[_("tabTextColorDisabled",a)]:tt,[_("tabFontSize",t)]:at},common:{cubicBezierEaseInOut:rt}}=m.value;return{"--n-bezier":rt,"--n-color-segment":Ie,"--n-bar-color":T,"--n-tab-font-size":at,"--n-tab-text-color":Qe,"--n-tab-text-color-active":Ze,"--n-tab-text-color-disabled":tt,"--n-tab-text-color-hover":et,"--n-pane-text-color":Ee,"--n-tab-border-color":ke,"--n-tab-border-radius":He,"--n-close-size":Ve,"--n-close-icon-size":Ne,"--n-close-color-hover":Ue,"--n-close-color-pressed":Xe,"--n-close-border-radius":Ye,"--n-close-icon-color":P,"--n-close-icon-color-hover":E,"--n-close-icon-color-pressed":D,"--n-tab-color":je,"--n-tab-font-weight":Fe,"--n-tab-font-weight-active":Oe,"--n-tab-padding":Ke,"--n-tab-padding-vertical":qe,"--n-tab-gap":Je,"--n-pane-padding":Ge,"--n-font-weight-strong":De,"--n-tab-color-segment":Me}}),k=w?bt("tabs",V(()=>`${$.value[0]}${e.type[0]}`),le,e):void 0;return Object.assign({mergedClsPrefix:u,mergedValue:p,renderedNames:new Set,tabsRailElRef:se,tabsPaneWrapperRef:O,tabsElRef:R,barElRef:z,addTabInstRef:f,xScrollInstRef:C,scrollWrapperElRef:v,addTabFixed:I,tabWrapperStyle:xe,handleNavResize:Te,mergedSize:$,handleScroll:Le,handleTabsResize:We,cssVars:w?void 0:le,themeClass:k==null?void 0:k.themeClass,animationDirection:ne,renderNameListRef:re,onAnimationBeforeLeave:we,onAnimationEnter:Re,onAnimationAfterEnter:Ce,onRender:k==null?void 0:k.onRender},Be)},render(){const{mergedClsPrefix:e,type:n,placement:b,addTabFixed:y,addable:l,mergedSize:g,renderNameListRef:u,onRender:w,$slots:{default:m,prefix:R,suffix:z}}=this;w==null||w();const v=m?q(m()).filter(d=>d.type.__TAB_PANE__===!0):[],f=m?q(m()).filter(d=>d.type.__TAB__===!0):[],C=!f.length,h=n==="card",L=n==="segment",$=!h&&!L&&this.justifyContent;u.value=[];const F=()=>{const d=s("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},$?null:s("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),C?v.map((p,j)=>(u.value.push(p.props.name),Q(s(Z,Object.assign({},p.props,{internalCreatedByPane:!0,internalLeftPadded:j!==0&&(!$||$==="center"||$==="start"||$==="end")}),p.children?{default:p.children.tab}:void 0)))):f.map((p,j)=>(u.value.push(p.props.name),Q(j!==0&&!$?ve(p):p))),!y&&l&&h?pe(l,(C?v.length:f.length)!==0):null,$?null:s("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return s("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},h&&l?s(fe,{onResize:this.handleTabsResize},{default:()=>d}):d,h?s("div",{class:`${e}-tabs-pad`}):null,h?null:s("div",{ref:"barElRef",class:`${e}-tabs-bar`}))};return s("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${g}-size`,$&&`${e}-tabs--flex`,`${e}-tabs--${b}`],style:this.cssVars},s("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav--${b}`,`${e}-tabs-nav`]},de(R,d=>d&&s("div",{class:`${e}-tabs-nav__prefix`},d)),L?s("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},C?v.map((d,p)=>(u.value.push(d.props.name),s(Z,Object.assign({},d.props,{internalCreatedByPane:!0,internalLeftPadded:p!==0}),d.children?{default:d.children.tab}:void 0))):f.map((d,p)=>(u.value.push(d.props.name),p===0?d:ve(d)))):s(fe,{onResize:this.handleNavResize},{default:()=>s("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(b)?s(Tt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:F}):s("div",{class:`${e}-tabs-nav-y-scroll`},F()))}),y&&l&&h?pe(l,!0):null,de(z,d=>d&&s("div",{class:`${e}-tabs-nav__suffix`},d))),C&&(this.animated?s("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},ue(v,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):ue(v,this.mergedValue,this.renderedNames)))}});function ue(e,n,b,y,l,g,u){const w=[];return e.forEach(m=>{const{name:R,displayDirective:z,"display-directive":v}=m.props,f=h=>z===h||v===h,C=n===R;if(m.key!==void 0&&(m.key=R),C||f("show")||f("show:lazy")&&b.has(R)){b.has(R)||b.add(R);const h=!f("if");w.push(h?ht(m,[[nt,C]]):m)}}),u?s(ot,{name:`${u}-transition`,onBeforeLeave:y,onEnter:l,onAfterEnter:g},{default:()=>w}):w}function pe(e,n){return s(Z,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function ve(e){const n=gt(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function Q(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{Xt as _,Yt as a};
