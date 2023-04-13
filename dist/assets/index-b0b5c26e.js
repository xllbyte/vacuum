import{d as b,c as W,h as p,j as _,k as y,l as c,A as M,q as u,ay as P,C as A,u as v,z as Q,F as X,B as Z}from"./runtime-core.esm-bundler-f0bd303b.js";import{_ as D}from"./Card-b56fe7ef.js";import{j as h,f as t,W as oe,g as I,k as Y,Q as ne,a5 as re,u as se,h as ee,n as L,i as ie}from"./light-ddbeb814.js";import{d as ae}from"./light-0472106f.js";import{u as le}from"./use-compitable-7fe5a3c6.js";import{f as ce}from"./flatten-997edf61.js";import{g as de}from"./get-slot-1efb97e5.js";import{_ as pe}from"./Tag-23d0dbb9.js";import{N as ue}from"./Space-3c4da91a.js";import"./isSymbol-944790fb.js";import"./_common-991711fd.js";import"./color-to-class-b0332f36.js";import"./is-browser-fc34c9a6.js";import"./_common-89f2509f.js";function J(e,i="default",s=[]){const{children:a}=e;if(a!==null&&typeof a=="object"&&!Array.isArray(a)){const m=a[i];if(typeof m=="function")return m()}return s}const te="DESCRIPTION_ITEM_FLAG";function me(e){return typeof e=="object"&&e&&!Array.isArray(e)?e.type&&e.type[te]:!1}const be=h([t("descriptions",{fontSize:"var(--n-font-size)"},[t("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),t("descriptions-table-wrapper",[t("descriptions-table",[t("descriptions-table-row",[t("descriptions-table-header",{padding:"var(--n-th-padding)"}),t("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),oe("bordered",[t("descriptions-table-wrapper",[t("descriptions-table",[t("descriptions-table-row",[h("&:last-child",[t("descriptions-table-content",{paddingBottom:0})])])])])]),I("left-label-placement",[t("descriptions-table-content",[h("> *",{verticalAlign:"top"})])]),I("left-label-align",[h("th",{textAlign:"left"})]),I("center-label-align",[h("th",{textAlign:"center"})]),I("right-label-align",[h("th",{textAlign:"right"})]),I("bordered",[t("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[t("descriptions-table",[t("descriptions-table-row",[h("&:not(:last-child)",[t("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),t("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),t("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[h("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),t("descriptions-table-content",[h("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),t("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),t("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[t("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[t("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[t("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),t("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Y("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),Y("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),t("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),ne(t("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),re(t("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),ge=Object.assign(Object.assign({},ee.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelStyle:[Object,String],contentStyle:[Object,String]}),U=b({name:"Descriptions",props:ge,setup(e){const{mergedClsPrefixRef:i,inlineThemeDisabled:s}=se(e),a=ee("Descriptions","-descriptions",be,ae,e,i),m=W(()=>{const{size:n,bordered:l}=e,{common:{cubicBezierEaseInOut:f},self:{titleTextColor:r,thColor:$,thColorModal:w,thColorPopover:T,thTextColor:N,thFontWeight:H,tdTextColor:B,tdColor:o,tdColorModal:C,tdColorPopover:O,borderColor:g,borderColorModal:x,borderColorPopover:z,borderRadius:V,lineHeight:S,[L("fontSize",n)]:k,[L(l?"thPaddingBordered":"thPadding",n)]:E,[L(l?"tdPaddingBordered":"tdPadding",n)]:j}}=a.value;return{"--n-title-text-color":r,"--n-th-padding":E,"--n-td-padding":j,"--n-font-size":k,"--n-bezier":f,"--n-th-font-weight":H,"--n-line-height":S,"--n-th-text-color":N,"--n-td-text-color":B,"--n-th-color":$,"--n-th-color-modal":w,"--n-th-color-popover":T,"--n-td-color":o,"--n-td-color-modal":C,"--n-td-color-popover":O,"--n-border-radius":V,"--n-border-color":g,"--n-border-color-modal":x,"--n-border-color-popover":z}}),d=s?ie("descriptions",W(()=>{let n="";const{size:l,bordered:f}=e;return f&&(n+="a"),n+=l[0],n}),m,e):void 0;return{mergedClsPrefix:i,cssVars:s?void 0:m,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender,compitableColumn:le(e,["columns","column"]),inlineThemeDisabled:s}},render(){const e=this.$slots.default,i=e?ce(e()):[];i.length;const{compitableColumn:s,labelPlacement:a,labelAlign:m,size:d,bordered:n,title:l,cssVars:f,mergedClsPrefix:r,separator:$,onRender:w}=this;w==null||w();const T=i.filter(o=>me(o)),N={span:0,row:[],secondRow:[],rows:[]},B=T.reduce((o,C,O)=>{const g=C.props||{},x=T.length-1===O,z=["label"in g?g.label:J(C,"label")],V=[J(C)],S=g.span||1,k=o.span;o.span+=S;const E=g.labelStyle||g["label-style"]||this.labelStyle,j=g.contentStyle||g["content-style"]||this.contentStyle;if(a==="left")n?o.row.push(p("th",{class:`${r}-descriptions-table-header`,colspan:1,style:E},z),p("td",{class:`${r}-descriptions-table-content`,colspan:x?(s-k)*2+1:S*2-1,style:j},V)):o.row.push(p("td",{class:`${r}-descriptions-table-content`,colspan:x?(s-k)*2:S*2},p("span",{class:`${r}-descriptions-table-content__label`,style:E},[...z,$&&p("span",{class:`${r}-descriptions-separator`},$)]),p("span",{class:`${r}-descriptions-table-content__content`,style:j},V)));else{const q=x?(s-k)*2:S*2;o.row.push(p("th",{class:`${r}-descriptions-table-header`,colspan:q,style:E},z)),o.secondRow.push(p("td",{class:`${r}-descriptions-table-content`,colspan:q,style:j},V))}return(o.span>=s||x)&&(o.span=0,o.row.length&&(o.rows.push(o.row),o.row=[]),a!=="left"&&o.secondRow.length&&(o.rows.push(o.secondRow),o.secondRow=[])),o},N).rows.map(o=>p("tr",{class:`${r}-descriptions-table-row`},o));return p("div",{style:f,class:[`${r}-descriptions`,this.themeClass,`${r}-descriptions--${a}-label-placement`,`${r}-descriptions--${m}-label-align`,`${r}-descriptions--${d}-size`,n&&`${r}-descriptions--bordered`]},l||this.$slots.header?p("div",{class:`${r}-descriptions-header`},l||de(this,"header")):null,p("div",{class:`${r}-descriptions-table-wrapper`},p("table",{class:`${r}-descriptions-table`},p("tbody",null,B))))}}),he={label:String,span:{type:Number,default:1},labelStyle:[Object,String],contentStyle:[Object,String]},G=b({name:"DescriptionsItem",[te]:!0,props:he,render(){return null}}),_e=M("p",{class:"leading-24px"}," Soybean Admin 是一个基于 Vue3、Vite、Naive UI、TypeScript 的中后台解决方案，它使用了最新的前端技术栈，并提炼了典型的业务模型，页面，包括二次封装组件、动态菜单、权限校验、粒子化权限控制等功能，它可以帮助你快速搭建企业级中后台项目，相信不管是从新技术使用还是其他方面，都能帮助到你。 ",-1),ve=b({name:"ProjectIntroduction"}),fe=b({...ve,setup(e){return(i,s)=>{const a=D;return _(),y(a,{title:"关于",bordered:!1,size:"large",class:"rounded-16px shadow-sm"},{default:c(()=>[_e]),_:1})}}}),ye="Vacuum-reflux-furnace",xe="1.0.0",Se="A fresh and elegant admin template, based on Vue3、Vite3、TypeScript、NaiveUI and UnoCSS. 一个基于Vue3、Vite3、TypeScript、NaiveUI and UnoCSS的清新优雅的中后台模版。",we={name:"真空回流炉",email:"honghuangdc@gmail.com",url:"https://github.com/honghuangdc"},Ce="MIT",ze="https://github.com/honghuangdc/soybean-admin",Ve={url:"https://github.com/honghuangdc/soybean-admin.git"},ke={url:"https://github.com/honghuangdc/soybean-admin/issues"},Ee=["Vue","Vue3","admin","admin-template","vue-admin","vue-admin-template","Vite3","Vite","vite-admin","TypeScript","TS","NaiveUI","naive-ui","naive-admin","NaiveUI-Admin","naive-ui-admin","UnoCSS"],je={dev:"cross-env VITE_SERVICE_ENV=dev vite","dev:test":"cross-env VITE_SERVICE_ENV=test vite","dev:prod":"cross-env VITE_SERVICE_ENV=prod vite",build:"cross-env VITE_SERVICE_ENV=dev vite build","build:dev":"cross-env VITE_SERVICE_ENV=dev vite build","build:test":"cross-env VITE_SERVICE_ENV=test vite build","build:vercel":"cross-env VITE_HASH_ROUTE=Y VITE_VERCEL=Y vite build",preview:"vite preview",typecheck:"vue-tsc --noEmit --skipLibCheck",lint:"eslint . --fix",commit:"soy git-commit",cleanup:"soy cleanup","update-pkg":"soy update-pkg",tsx:"tsx",logo:"tsx ./scripts/logo.ts",changelog:"conventional-changelog -p angular -i CHANGELOG.md -s",release:"standard-version",prepare:"simple-git-hooks"},Ie={"@antv/data-set":"^0.11.8","@antv/g2":"^4.2.9","@better-scroll/core":"^2.5.0","@soybeanjs/vue-admin-layout":"^1.1.1","@soybeanjs/vue-admin-tab":"^1.0.5","@vueuse/core":"^9.12.0",axios:"0.27.2",clipboard:"^2.0.11",colord:"^2.9.3","crypto-js":"^4.1.1",dayjs:"^1.11.7",echarts:"^5.4.1","form-data":"^4.0.0","lodash-es":"^4.17.21","naive-ui":"2.34.3",pinia:"^2.0.30","print-js":"^1.6.0",qs:"^6.11.0","simple-keyboard":"^3.5.23","simple-keyboard-layouts":"^3.1.277",swiper:"^9.0.3","ua-parser-js":"^1.0.33",uuid:"^9.0.0",vditor:"^3.9.0",vue:"3.2.47","vue-i18n":"^9.2.2","vue-router":"^4.1.6",vuedraggable:"^4.1.0",wangeditor:"^4.7.15",xgplayer:"^2.32.2"},$e={"@amap/amap-jsapi-types":"^0.0.10","@iconify/json":"^2.2.19","@iconify/vue":"^4.1.0","@soybeanjs/cli":"^0.1.6","@soybeanjs/vite-plugin-vue-page-route":"^0.0.5","@types/bmapgl":"^0.0.5","@types/crypto-js":"^4.1.1","@types/node":"18.13.0","@types/qs":"^6.9.7","@types/ua-parser-js":"^0.7.36","@unocss/preset-uno":"^0.49.4","@unocss/vite":"^0.49.4","@vitejs/plugin-vue":"^4.0.0","@vitejs/plugin-vue-jsx":"^3.0.0","conventional-changelog":"^3.1.25","cross-env":"^7.0.3",eslint:"^8.33.0","eslint-config-soybeanjs-vue":"^0.2.3","lint-staged":"12.5.0",mockjs:"^1.1.0","rollup-plugin-visualizer":"^5.9.0",sass:"^1.58.0","simple-git-hooks":"^2.8.1","standard-version":"^9.5.0",tsx:"^3.12.3",typescript:"4.9.5","unplugin-icons":"^0.15.2","unplugin-vue-components":"0.23.0","unplugin-vue-macros":"1.6.4",vite:"^4.1.1","vite-plugin-compression":"^0.5.1","vite-plugin-html":"^3.2.0","vite-plugin-mock":"^2.9.6","vite-plugin-progress":"^0.0.6","vite-plugin-pwa":"^0.14.3","vite-plugin-svg-icons":"^2.0.1","vue-tsc":"^1.0.24"},Te={patchedDependencies:{"mockjs@1.1.0":"patches/mockjs@1.1.0.patch"}},Re={name:ye,version:xe,description:Se,author:we,license:Ce,homepage:ze,repository:Ve,bugs:ke,keywords:Ee,scripts:je,dependencies:Ie,devDependencies:$e,pnpm:Te,"simple-git-hooks":{"commit-msg":"pnpm soy git-commit-verify","pre-commit":"pnpm typecheck && pnpm lint-staged"},"lint-staged":{"*":"eslint . --fix"}},R=Re;function K(e){const[i,s]=e;return{name:i,version:s}}const F={name:R.name,version:R.version,dependencies:Object.entries(R.dependencies).map(e=>K(e)),devDependencies:Object.entries(R.devDependencies).map(e=>K(e))},Pe=M("a",{class:"text-primary",href:"https://github.com/honghuangdc/soybean-admin",target:"_blank"},"Github地址",-1),Ae=M("a",{class:"text-primary",href:"https://soybean.pro",target:"_blank"},"预览地址",-1),De=b({name:"ProjectInfo"}),Ne=b({...De,setup(e){const{version:i}=F,s="2023-04-11 17:49:54";return(a,m)=>{const d=pe,n=G,l=U,f=D;return _(),y(f,{title:"项目信息",bordered:!1,size:"small",class:"rounded-16px shadow-sm"},{default:c(()=>[u(l,{"label-placement":"left",bordered:"",size:"small",column:2},{default:c(()=>[u(n,{label:"版本"},{default:c(()=>[u(d,{type:"primary"},{default:c(()=>[P(A(v(i)),1)]),_:1})]),_:1}),u(n,{label:"最后编译时间"},{default:c(()=>[u(d,{type:"primary"},{default:c(()=>[P(A(v(s)),1)]),_:1})]),_:1}),u(n,{label:"Github地址"},{default:c(()=>[Pe]),_:1}),u(n,{label:"预览地址"},{default:c(()=>[Ae]),_:1})]),_:1})]),_:1})}}}),Be=b({name:"ProDependency"}),Oe=b({...Be,setup(e){const{dependencies:i}=F;return(s,a)=>{const m=G,d=U,n=D;return _(),y(n,{title:"生产环境依赖",bordered:!1,size:"small",class:"rounded-16px shadow-sm"},{default:c(()=>[u(d,{"label-placement":"left",bordered:"",size:"small"},{default:c(()=>[(_(!0),Q(X,null,Z(v(i),l=>(_(),y(m,{key:l.name,label:l.name},{default:c(()=>[P(A(l.version),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1})}}}),Le=b({name:"DevDependency"}),Me=b({...Le,setup(e){const{devDependencies:i}=F;return(s,a)=>{const m=G,d=U,n=D;return _(),y(n,{title:"开发环境依赖",bordered:!1,size:"small",class:"rounded-16px shadow-sm"},{default:c(()=>[u(d,{"label-placement":"left",bordered:"",size:"small"},{default:c(()=>[(_(!0),Q(X,null,Z(v(i),l=>(_(),y(m,{key:l.name,label:l.name},{default:c(()=>[P(A(l.version),1)]),_:2},1032,["label"]))),128))]),_:1})]),_:1})}}}),ot=b({__name:"index",setup(e){return(i,s)=>{const a=ue;return _(),y(a,{vertical:!0,size:16},{default:c(()=>[u(v(fe)),u(v(Ne)),u(v(Oe)),u(v(Me))]),_:1})}}});export{ot as default};
