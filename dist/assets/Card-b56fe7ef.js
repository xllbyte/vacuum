import{S as y,A as be,c as fe,f as b,j as t,P as $,g as l,W as ge,R as ve,k as c,Q as pe,a5 as he,u as me,h as w,O as Ce,l as xe,n as m,i as ye,T as g,V as ze}from"./light-ddbeb814.js";import{i as Se,g as ke}from"./isSymbol-944790fb.js";import{d as h,i as $e,h as i,al as R,c as z}from"./runtime-core.esm-bundler-f0bd303b.js";function we(e){return Object.keys(e)}function Re(e,n){for(var r=-1,o=e==null?0:e.length,a=Array(o);++r<o;)a[r]=n(e[r],r,e);return a}var Be=1/0,S=y?y.prototype:void 0,k=S?S.toString:void 0;function B(e){if(typeof e=="string")return e;if(be(e))return Re(e,B)+"";if(Se(e))return k?k.call(e):"";var n=e+"";return n=="0"&&1/e==-Be?"-0":n}function Te(e){return e==null?"":B(e)}function Pe(e,n,r){var o=-1,a=e.length;n<0&&(n=-n>a?0:a+n),r=r>a?a:r,r<0&&(r+=a),a=n>r?0:r-n>>>0,n>>>=0;for(var d=Array(a);++o<a;)d[o]=e[o+n];return d}function Me(e,n,r){var o=e.length;return r=r===void 0?o:r,!n&&r>=o?e:Pe(e,n,r)}var _e="\\ud800-\\udfff",Le="\\u0300-\\u036f",je="\\ufe20-\\ufe2f",Oe="\\u20d0-\\u20ff",Ie=Le+je+Oe,Ae="\\ufe0e\\ufe0f",Ee="\\u200d",Fe=RegExp("["+Ee+_e+Ie+Ae+"]");function T(e){return Fe.test(e)}function He(e){return e.split("")}var P="\\ud800-\\udfff",Ne="\\u0300-\\u036f",Ve="\\ufe20-\\ufe2f",We="\\u20d0-\\u20ff",De=Ne+Ve+We,Ue="\\ufe0e\\ufe0f",Ze="["+P+"]",C="["+De+"]",x="\\ud83c[\\udffb-\\udfff]",qe="(?:"+C+"|"+x+")",M="[^"+P+"]",_="(?:\\ud83c[\\udde6-\\uddff]){2}",L="[\\ud800-\\udbff][\\udc00-\\udfff]",Je="\\u200d",j=qe+"?",O="["+Ue+"]?",Ke="(?:"+Je+"(?:"+[M,_,L].join("|")+")"+O+j+")*",Ye=O+j+Ke,Qe="(?:"+[M+C+"?",C,_,L,Ze].join("|")+")",Xe=RegExp(x+"(?="+x+")|"+Qe+Ye,"g");function Ge(e){return e.match(Xe)||[]}function eo(e){return T(e)?Ge(e):He(e)}function oo(e){return function(n){n=Te(n);var r=T(n)?eo(n):void 0,o=r?r[0]:n.charAt(0),a=r?Me(r,1).join(""):n.slice(1);return o[e]()+a}}var ro=oo("toUpperCase");const no=ro;function to(e,n){return h({name:no(e),setup(){var r;const o=(r=$e(fe,null))===null||r===void 0?void 0:r.mergedIconsRef;return()=>{var a;const d=(a=o==null?void 0:o.value)===null||a===void 0?void 0:a[e];return d?d():n}}})}const ao=to("close",i("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},i("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},i("g",{fill:"currentColor","fill-rule":"nonzero"},i("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),so=b("base-icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[t("svg",`
 height: 1em;
 width: 1em;
 `)]),io=h({name:"BaseIcon",props:{role:String,ariaLabel:String,ariaDisabled:{type:Boolean,default:void 0},ariaHidden:{type:Boolean,default:void 0},clsPrefix:{type:String,required:!0},onClick:Function,onMousedown:Function,onMouseup:Function},setup(e){$("-base-icon",so,R(e,"clsPrefix"))},render(){return i("i",{class:`${this.clsPrefix}-base-icon`,onClick:this.onClick,onMousedown:this.onMousedown,onMouseup:this.onMouseup,role:this.role,"aria-label":this.ariaLabel,"aria-hidden":this.ariaHidden,"aria-disabled":this.ariaDisabled},this.$slots)}}),lo=b("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[l("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),t("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),ge("disabled",[t("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),t("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),t("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),t("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),t("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),l("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),l("round",[t("&::before",`
 border-radius: 50%;
 `)])]),co=h({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return $("-base-close",lo,R(e,"clsPrefix")),()=>{const{clsPrefix:n,disabled:r,absolute:o,round:a,isButtonTag:d}=e;return i(d?"button":"div",{type:d?"button":void 0,tabindex:r||!e.focusable?-1:0,"aria-disabled":r,"aria-label":"close",role:d?void 0:"button",disabled:r,class:[`${n}-base-close`,o&&`${n}-base-close--absolute`,r&&`${n}-base-close--disabled`,a&&`${n}-base-close--round`],onMousedown:f=>{e.focusable||f.preventDefault()},onClick:e.onClick},i(io,{clsPrefix:n},{default:()=>i(ao,null)}))}}}),uo=t([b("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[ve({background:"var(--n-color-modal)"}),l("hoverable",[t("&:hover","box-shadow: var(--n-box-shadow);")]),l("content-segmented",[t(">",[c("content",{paddingTop:"var(--n-padding-bottom)"})])]),l("content-soft-segmented",[t(">",[c("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),l("footer-segmented",[t(">",[c("footer",{paddingTop:"var(--n-padding-bottom)"})])]),l("footer-soft-segmented",[t(">",[c("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),t(">",[b("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[c("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),c("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),c("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),c("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),c("content","flex: 1; min-width: 0;"),c("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[t("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),c("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),b("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[t("img",`
 display: block;
 width: 100%;
 `)]),l("bordered",`
 border: 1px solid var(--n-border-color);
 `,[t("&:target","border-color: var(--n-color-target);")]),l("action-segmented",[t(">",[c("action",[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("content-segmented, content-soft-segmented",[t(">",[c("content",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("footer-segmented, footer-soft-segmented",[t(">",[c("footer",{transition:"border-color 0.3s var(--n-bezier)"},[t("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("embedded",`
 background-color: var(--n-color-embedded);
 `)]),pe(b("card",`
 background: var(--n-color-modal);
 `,[l("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),he(b("card",`
 background: var(--n-color-popover);
 `,[l("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),I={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},po=we(I),bo=Object.assign(Object.assign({},w.props),I),ho=h({name:"Card",props:bo,setup(e){const n=()=>{const{onClose:s}=e;s&&ze(s)},{inlineThemeDisabled:r,mergedClsPrefixRef:o,mergedRtlRef:a}=me(e),d=w("Card","-card",uo,Ce,e,o),v=xe("Card",a,o),f=z(()=>{const{size:s}=e,{self:{color:p,colorModal:A,colorTarget:E,textColor:F,titleTextColor:H,titleFontWeight:N,borderColor:V,actionColor:W,borderRadius:D,lineHeight:U,closeIconColor:Z,closeIconColorHover:q,closeIconColorPressed:J,closeColorHover:K,closeColorPressed:Y,closeBorderRadius:Q,closeIconSize:X,closeSize:G,boxShadow:ee,colorPopover:oe,colorEmbedded:re,colorEmbeddedModal:ne,colorEmbeddedPopover:te,[m("padding",s)]:ae,[m("fontSize",s)]:se,[m("titleFontSize",s)]:ie},common:{cubicBezierEaseInOut:de}}=d.value,{top:le,left:ce,bottom:ue}=ke(ae);return{"--n-bezier":de,"--n-border-radius":D,"--n-color":p,"--n-color-modal":A,"--n-color-popover":oe,"--n-color-embedded":re,"--n-color-embedded-modal":ne,"--n-color-embedded-popover":te,"--n-color-target":E,"--n-text-color":F,"--n-line-height":U,"--n-action-color":W,"--n-title-text-color":H,"--n-title-font-weight":N,"--n-close-icon-color":Z,"--n-close-icon-color-hover":q,"--n-close-icon-color-pressed":J,"--n-close-color-hover":K,"--n-close-color-pressed":Y,"--n-border-color":V,"--n-box-shadow":ee,"--n-padding-top":le,"--n-padding-bottom":ue,"--n-padding-left":ce,"--n-font-size":se,"--n-title-font-size":ie,"--n-close-size":G,"--n-close-icon-size":X,"--n-close-border-radius":Q}}),u=r?ye("card",z(()=>e.size[0]),f,e):void 0;return{rtlEnabled:v,mergedClsPrefix:o,mergedTheme:d,handleCloseClick:n,cssVars:r?void 0:f,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){const{segmented:e,bordered:n,hoverable:r,mergedClsPrefix:o,rtlEnabled:a,onRender:d,embedded:v,tag:f,$slots:u}=this;return d==null||d(),i(f,{class:[`${o}-card`,this.themeClass,v&&`${o}-card--embedded`,{[`${o}-card--rtl`]:a,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:n,[`${o}-card--hoverable`]:r}],style:this.cssVars,role:this.role},g(u.cover,s=>s&&i("div",{class:`${o}-card-cover`,role:"none"},s)),g(u.header,s=>s||this.title||this.closable?i("div",{class:`${o}-card-header`,style:this.headerStyle},i("div",{class:`${o}-card-header__main`,role:"heading"},s||this.title),g(u["header-extra"],p=>p&&i("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},p)),this.closable?i(co,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),g(u.default,s=>s&&i("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},s)),g(u.footer,s=>s&&[i("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},s)]),g(u.action,s=>s&&i("div",{class:`${o}-card__action`,role:"none"},s)))}});export{co as N,ho as _,io as a,po as b,I as c,Re as d,we as k,to as r,Te as t};
