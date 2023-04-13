import{f as _,P as ze,j as b,I as Be,K as re,e as Se,g,k as d,W as Z,h as te,u as Te,l as Pe,n as t,L as W,i as ke,T as ee,X as He,V as Re}from"./light-ddbeb814.js";import{i as Ee}from"./browser-ddb21091.js";import{a as We,u as Ie,c as Fe,N as _e,b as Oe}from"./Loading-7bc32f77.js";import{i as je}from"./is-browser-fc34c9a6.js";import{b as De}from"./light-f2c5e266.js";import{c as oe}from"./color-to-class-b0332f36.js";import{d as q,h as y,al as Le,b as k,a as Ne,n as Ke,i as Ae,c as I}from"./runtime-core.esm-bundler-f0bd303b.js";import{a as Ge,T as Me}from"./runtime-dom.esm-bundler-4c308a5c.js";const Ve=q({name:"FadeInExpandTransition",props:{appear:Boolean,group:Boolean,mode:String,onLeave:Function,onAfterLeave:Function,onAfterEnter:Function,width:Boolean,reverse:Boolean},setup(e,{slots:v}){function m(r){e.width?r.style.maxWidth=`${r.offsetWidth}px`:r.style.maxHeight=`${r.offsetHeight}px`,r.offsetWidth}function c(r){e.width?r.style.maxWidth="0":r.style.maxHeight="0",r.offsetWidth;const{onLeave:h}=e;h&&h()}function x(r){e.width?r.style.maxWidth="":r.style.maxHeight="";const{onAfterLeave:h}=e;h&&h()}function O(r){if(r.style.transition="none",e.width){const h=r.offsetWidth;r.style.maxWidth="0",r.offsetWidth,r.style.transition="",r.style.maxWidth=`${h}px`}else if(e.reverse)r.style.maxHeight=`${r.offsetHeight}px`,r.offsetHeight,r.style.transition="",r.style.maxHeight="0";else{const h=r.offsetHeight;r.style.maxHeight="0",r.offsetWidth,r.style.transition="",r.style.maxHeight=`${h}px`}r.offsetWidth}function P(r){var h;e.width?r.style.maxWidth="":e.reverse||(r.style.maxHeight=""),(h=e.onAfterEnter)===null||h===void 0||h.call(e)}return()=>{const r=e.group?Ge:Me;return y(r,{name:e.width?"fade-in-width-expand-transition":"fade-in-height-expand-transition",mode:e.mode,appear:e.appear,onEnter:O,onAfterEnter:P,onBeforeLeave:m,onLeave:c,onAfterLeave:x},v)}}}),qe=_("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),Qe=q({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){ze("-base-wave",qe,Le(e,"clsPrefix"));const v=k(null),m=k(!1);let c=null;return Ne(()=>{c!==null&&window.clearTimeout(c)}),{active:m,selfRef:v,play(){c!==null&&(window.clearTimeout(c),m.value=!1,c=null),Ke(()=>{var x;(x=v.value)===null||x===void 0||x.offsetHeight,m.value=!0,c=window.setTimeout(()=>{m.value=!1,c=null},1e3)})}}},render(){const{clsPrefix:e}=this;return y("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:$}=Be;function Xe({duration:e=".2s",delay:v=".1s"}={}){return[b("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),b("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),b("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${$},
 max-width ${e} ${$} ${v},
 margin-left ${e} ${$} ${v},
 margin-right ${e} ${$} ${v};
 `),b("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${$} ${v},
 max-width ${e} ${$},
 margin-left ${e} ${$},
 margin-right ${e} ${$};
 `)]}function S(e){return re(e,[255,255,255,.16])}function F(e){return re(e,[0,0,0,.12])}const Ye=Se("n-button-group"),Ue=b([_("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[g("color",[d("border",{borderColor:"var(--n-border-color)"}),g("disabled",[d("border",{borderColor:"var(--n-border-color-disabled)"})]),Z("disabled",[b("&:focus",[d("state-border",{borderColor:"var(--n-border-color-focus)"})]),b("&:hover",[d("state-border",{borderColor:"var(--n-border-color-hover)"})]),b("&:active",[d("state-border",{borderColor:"var(--n-border-color-pressed)"})]),g("pressed",[d("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),g("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[d("border",{border:"var(--n-border-disabled)"})]),Z("disabled",[b("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[d("state-border",{border:"var(--n-border-focus)"})]),b("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[d("state-border",{border:"var(--n-border-hover)"})]),b("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[d("state-border",{border:"var(--n-border-pressed)"})]),g("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[d("state-border",{border:"var(--n-border-pressed)"})])]),g("loading","cursor: wait;"),_("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[g("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),je&&"MozBoxSizing"in document.createElement("div").style?b("&::moz-focus-inner",{border:0}):null,d("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),d("border",{border:"var(--n-border)"}),d("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),d("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[_("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[We({top:"50%",originalTransform:"translateY(-50%)"})]),Xe()]),d("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[b("~",[d("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),g("block",`
 display: flex;
 width: 100%;
 `),g("dashed",[d("border, state-border",{borderStyle:"dashed !important"})]),g("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),b("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),b("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),Je=Object.assign(Object.assign({},te.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!Ee}}),ne=q({name:"Button",props:Je,setup(e){const v=k(null),m=k(null),c=k(!1),x=Ie(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),O=Ae(Ye,{}),{mergedSizeRef:P}=Fe({},{defaultSize:"medium",mergedSize:n=>{const{size:u}=e;if(u)return u;const{size:C}=O;if(C)return C;const{mergedSize:o}=n||{};return o?o.value:"medium"}}),r=I(()=>e.focusable&&!e.disabled),h=n=>{var u;r.value||n.preventDefault(),!e.nativeFocusBehavior&&(n.preventDefault(),!e.disabled&&r.value&&((u=v.value)===null||u===void 0||u.focus({preventScroll:!0})))},ie=n=>{var u;if(!e.disabled&&!e.loading){const{onClick:C}=e;C&&Re(C,n),e.text||(u=m.value)===null||u===void 0||u.play()}},ae=n=>{switch(n.key){case"Enter":if(!e.keyboard)return;c.value=!1}},se=n=>{switch(n.key){case"Enter":if(!e.keyboard||e.loading){n.preventDefault();return}c.value=!0}},le=()=>{c.value=!1},{inlineThemeDisabled:Q,mergedClsPrefixRef:j,mergedRtlRef:de}=Te(e),ce=te("Button","-button",Ue,De,e,j),ue=Pe("Button",de,j),X=I(()=>{const n=ce.value,{common:{cubicBezierEaseInOut:u,cubicBezierEaseOut:C},self:o}=n,{rippleDuration:D,opacityDisabled:H,fontWeight:L,fontWeightStrong:N}=o,p=P.value,{dashed:K,type:z,ghost:A,text:w,color:a,round:Y,circle:G,textColor:B,secondary:fe,tertiary:U,quaternary:he,strong:be}=e,ve={"font-weight":be?N:L};let s={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const R=z==="tertiary",J=z==="default",i=R?"default":z;if(w){const l=B||a;s={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":l||o[t("textColorText",i)],"--n-text-color-hover":l?S(l):o[t("textColorTextHover",i)],"--n-text-color-pressed":l?F(l):o[t("textColorTextPressed",i)],"--n-text-color-focus":l?S(l):o[t("textColorTextHover",i)],"--n-text-color-disabled":l||o[t("textColorTextDisabled",i)]}}else if(A||K){const l=B||a;s={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":a||o[t("rippleColor",i)],"--n-text-color":l||o[t("textColorGhost",i)],"--n-text-color-hover":l?S(l):o[t("textColorGhostHover",i)],"--n-text-color-pressed":l?F(l):o[t("textColorGhostPressed",i)],"--n-text-color-focus":l?S(l):o[t("textColorGhostHover",i)],"--n-text-color-disabled":l||o[t("textColorGhostDisabled",i)]}}else if(fe){const l=J?o.textColor:R?o.textColorTertiary:o[t("color",i)],f=a||l,E=z!=="default"&&z!=="tertiary";s={"--n-color":E?W(f,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":E?W(f,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":E?W(f,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":E?W(f,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":f,"--n-text-color-hover":f,"--n-text-color-pressed":f,"--n-text-color-focus":f,"--n-text-color-disabled":f}}else if(U||he){const l=J?o.textColor:R?o.textColorTertiary:o[t("color",i)],f=a||l;U?(s["--n-color"]=o.colorTertiary,s["--n-color-hover"]=o.colorTertiaryHover,s["--n-color-pressed"]=o.colorTertiaryPressed,s["--n-color-focus"]=o.colorSecondaryHover,s["--n-color-disabled"]=o.colorTertiary):(s["--n-color"]=o.colorQuaternary,s["--n-color-hover"]=o.colorQuaternaryHover,s["--n-color-pressed"]=o.colorQuaternaryPressed,s["--n-color-focus"]=o.colorQuaternaryHover,s["--n-color-disabled"]=o.colorQuaternary),s["--n-ripple-color"]="#0000",s["--n-text-color"]=f,s["--n-text-color-hover"]=f,s["--n-text-color-pressed"]=f,s["--n-text-color-focus"]=f,s["--n-text-color-disabled"]=f}else s={"--n-color":a||o[t("color",i)],"--n-color-hover":a?S(a):o[t("colorHover",i)],"--n-color-pressed":a?F(a):o[t("colorPressed",i)],"--n-color-focus":a?S(a):o[t("colorFocus",i)],"--n-color-disabled":a||o[t("colorDisabled",i)],"--n-ripple-color":a||o[t("rippleColor",i)],"--n-text-color":B||(a?o.textColorPrimary:R?o.textColorTertiary:o[t("textColor",i)]),"--n-text-color-hover":B||(a?o.textColorHoverPrimary:o[t("textColorHover",i)]),"--n-text-color-pressed":B||(a?o.textColorPressedPrimary:o[t("textColorPressed",i)]),"--n-text-color-focus":B||(a?o.textColorFocusPrimary:o[t("textColorFocus",i)]),"--n-text-color-disabled":B||(a?o.textColorDisabledPrimary:o[t("textColorDisabled",i)])};let M={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};w?M={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:M={"--n-border":o[t("border",i)],"--n-border-hover":o[t("borderHover",i)],"--n-border-pressed":o[t("borderPressed",i)],"--n-border-focus":o[t("borderFocus",i)],"--n-border-disabled":o[t("borderDisabled",i)]};const{[t("height",p)]:V,[t("fontSize",p)]:me,[t("padding",p)]:xe,[t("paddingRound",p)]:ye,[t("iconSize",p)]:pe,[t("borderRadius",p)]:ge,[t("iconMargin",p)]:Ce,waveOpacity:we}=o,$e={"--n-width":G&&!w?V:"initial","--n-height":w?"initial":V,"--n-font-size":me,"--n-padding":G||w?"initial":Y?ye:xe,"--n-icon-size":pe,"--n-icon-margin":Ce,"--n-border-radius":w?"initial":G||Y?V:ge};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":u,"--n-bezier-ease-out":C,"--n-ripple-duration":D,"--n-opacity-disabled":H,"--n-wave-opacity":we},ve),s),M),$e)}),T=Q?ke("button",I(()=>{let n="";const{dashed:u,type:C,ghost:o,text:D,color:H,round:L,circle:N,textColor:p,secondary:K,tertiary:z,quaternary:A,strong:w}=e;u&&(n+="a"),o&&(n+="b"),D&&(n+="c"),L&&(n+="d"),N&&(n+="e"),K&&(n+="f"),z&&(n+="g"),A&&(n+="h"),w&&(n+="i"),H&&(n+="j"+oe(H)),p&&(n+="k"+oe(p));const{value:a}=P;return n+="l"+a[0],n+="m"+C[0],n}),X,e):void 0;return{selfElRef:v,waveElRef:m,mergedClsPrefix:j,mergedFocusable:r,mergedSize:P,showBorder:x,enterPressed:c,rtlEnabled:ue,handleMousedown:h,handleKeydown:se,handleBlur:le,handleKeyup:ae,handleClick:ie,customColorCssVars:I(()=>{const{color:n}=e;if(!n)return null;const u=S(n);return{"--n-border-color":n,"--n-border-color-hover":u,"--n-border-color-pressed":F(n),"--n-border-color-focus":u,"--n-border-color-disabled":n}}),cssVars:Q?void 0:X,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{mergedClsPrefix:e,tag:v,onRender:m}=this;m==null||m();const c=ee(this.$slots.default,x=>x&&y("span",{class:`${e}-button__content`},x));return y(v,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&c,y(Ve,{width:!0},{default:()=>ee(this.$slots.icon,x=>(this.loading||this.renderIcon||x)&&y("span",{class:`${e}-button__icon`,style:{margin:He(this.$slots.default)?"0":""}},y(_e,null,{default:()=>this.loading?y(Oe,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):y("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():x)})))}),this.iconPlacement==="left"&&c,this.text?null:y(Qe,{ref:"waveElRef",clsPrefix:e}),this.showBorder?y("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?y("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),so=ne,lo=ne;export{Ve as N,lo as X,so as _,Qe as a,Xe as f};
