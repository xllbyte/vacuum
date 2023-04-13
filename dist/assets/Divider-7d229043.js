import{f as p,W as c,k as n,g as t,u as f,h as v,i as u}from"./light-ddbeb814.js";import{d as b}from"./light-b52b7e18.js";import{d as x,c as _,h as s,F as C}from"./runtime-core.esm-bundler-f0bd303b.js";const $=p("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[c("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[c("no-title",`
 display: flex;
 align-items: center;
 `)]),n("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),t("title-position-left",[n("line",[t("left",{width:"28px"})])]),t("title-position-right",[n("line",[t("right",{width:"28px"})])]),t("dashed",[n("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),t("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),n("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),c("dashed",[n("line",{backgroundColor:"var(--n-color)"})]),t("dashed",[n("line",{borderColor:"var(--n-color)"})]),t("vertical",{backgroundColor:"var(--n-color)"})]),w=Object.assign(Object.assign({},v.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),P=x({name:"Divider",props:w,setup(r){const{mergedClsPrefixRef:o,inlineThemeDisabled:l}=f(r),d=v("Divider","-divider",$,b,r,o),a=_(()=>{const{common:{cubicBezierEaseInOut:e},self:{color:h,textColor:g,fontWeight:m}}=d.value;return{"--n-bezier":e,"--n-color":h,"--n-text-color":g,"--n-font-weight":m}}),i=l?u("divider",void 0,a,r):void 0;return{mergedClsPrefix:o,cssVars:l?void 0:a,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var r;const{$slots:o,titlePlacement:l,vertical:d,dashed:a,cssVars:i,mergedClsPrefix:e}=this;return(r=this.onRender)===null||r===void 0||r.call(this),s("div",{role:"separator",class:[`${e}-divider`,this.themeClass,{[`${e}-divider--vertical`]:d,[`${e}-divider--no-title`]:!o.default,[`${e}-divider--dashed`]:a,[`${e}-divider--title-position-${l}`]:o.default&&l}],style:i},d?null:s("div",{class:`${e}-divider__line ${e}-divider__line--left`}),!d&&o.default?s(C,null,s("div",{class:`${e}-divider__title`},this.$slots),s("div",{class:`${e}-divider__line ${e}-divider__line--right`})):null)}});export{P as _};
