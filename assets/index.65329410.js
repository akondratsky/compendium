import{b as be,g as F,e as xe,r as h,j as t,u as ye,a as l,F as I,O as we,f as Se,B as _e}from"./vendor.3334b5e9.js";import{R as g,a as Re,b as Ce,c as d,d as v,e as R,f as L,g as ke}from"./recoil.e08a8abf.js";import{a4 as Me,z as H}from"./@mui/icons-material.55137512.js";import{Q as G,k as De}from"./react-toastify.a490433a.js";import{d as T,u as Ie,n as Ee,o as Oe,p as O,g as P,A as je,q as Te,r as Pe,v as C,C as $e,w as Be,x as Ve,y as w,k,z as ze,E as Ae,H as Ne,J as Le,K as qe}from"./@mui/material.34ca658c.js";import{f as We}from"./flexsearch.8a2b9c30.js";import{l as Fe}from"./lodash.5e151ad9.js";import{D as He}from"./@mui/x-data-grid.4184495c.js";import"./@emotion/react.1fe74913.js";import"./@emotion/styled.43fc88a8.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();var U,q=be.exports;U=q.createRoot,q.hydrateRoot;var $={},x={exports:{}};(function(e){function a(n){return n&&n.__esModule?n:{default:n}}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports})(x);var E={};const Ge=F(Me);var W;function S(){return W||(W=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a.createSvgIcon}});var a=Ge}(E)),E}const _=F(xe);var Ue=x.exports;Object.defineProperty($,"__esModule",{value:!0});var J=$.default=void 0;Xe(h.exports);var Je=Ue(S()),Ke=_;function K(e){if(typeof WeakMap!="function")return null;var a=new WeakMap,n=new WeakMap;return(K=function(s){return s?n:a})(e)}function Xe(e,a){if(!a&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=K(a);if(n&&n.has(e))return n.get(e);var s={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(s,i,o):s[i]=e[i]}return s.default=e,n&&n.set(e,s),s}var Qe=(0,Je.default)((0,Ke.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub");J=$.default=Qe;const X=[{name:"create-electron-vite",website:"",git:"https://github.com/electron-vite/create-electron-vite",technologies:"react,vue,vanillajs,electron,scss,css,svg,playwright,typescript",version:"",description:'Boilerplate for Electron, agnostic to package manager, to start applications based on Vue, React or "vanilla" typescript. React template is delivered with SCSS, Vue and vanilla with regular CSS.',usage:"npm create electron-vite@latest projectName"},{name:"vitawind",website:"https://vitawind.vercel.app/",git:"https://github.com/huibizhang/vitawind",technologies:"angular,react,vue,vanillajs,tailwindcss,css,svg,typescript,javascript,cra",version:"v2",description:"A scaffolding for projects with tailwindcss v3. Agnostic to the package manager. Has the templates with Vite for Vue and React (javascript and typescript), also supports create-react-app and Angular CLI.",usage:`npm init vitawind test-project -- --{template}
cd test-project
npm install
npm {script}

Next tool can be used to generate installation commands for the vitawind:
https://vitawind.vercel.app/scaffolding/creator`},{name:"create-vite",website:"https://vitejs.dev/guide/#scaffolding-your-first-vite-project",git:"https://github.com/vitejs/vite/tree/main/packages/create-vite",technologies:"react,vue,vanillajs,svelte,lit,preact,vite,swc,typescript,javascript",version:"",description:`Default scaffolder for Vite. List of currently support templates: vanilla, vanilla-ts, vue, vue-ts, react, react-ts, react-swc, react-swc-ts, preact, preact-ts, lit, lit-ts, svelte, svelte-ts.
Also support community templates via degit.`,usage:"npm create vite@latest my-vue-app -- --template {template}"},{name:"create-vite-app",website:"",git:"https://github.com/ErKeLost/create-vite-app",technologies:"vue,vue-router,pinia,eslint,prettier,scss,less,element-plus,open-tiny,ant-design,vuetify,naive ui,devui,arco-design,tdesign,vant,unocss",version:"",description:`Flexible and beautiful interactive CLI which allows to choose and switch a lot of packages and templates. It also includes a bunch of optional plugins to support JSX, legacy browser, PWA, to visualize rollup plugins and others. 
Be ready to cross over comments and untranslated phrases in Chinese.`,usage:"npx create-vite-template@latest"},{name:"nx",website:"https://nx.dev/getting-started/intro",git:"https://github.com/nrwl/nx",technologies:"nx,react,angular,node,svelte,docusaurus,stencil,solidjs,react-native,cypress,storybook,detox,eslint,esbuild,expo,express,jest,javascript,typescript,rollup,rspack,vite,webcomponents,webpack,nest,next,vitepress,playwright,electron,aws,gcp,ionic,module-federation",version:"",description:`Nx is a powerful open-source build system with first class monorepo support that provides tools and techniques for enhancing developer productivity, optimizing CI performance, and maintaining code quality.

Nx includes a feature of a code generation with a looot of options via plugins. It may support even .Net!`,usage:"npx create-nx-workspace@latest"}],Q=g({key:"searchInputValue",default:""}),Y=Re({key:"technologiesInputFamily",default:[]}),Z=Y("filter"),M=Y("editor"),Ye=Ce({key:"technologyListState",get:({get:e})=>e(Z).map(a=>a.name)}),Ze=g({key:"searchResultState",default:[]}),ee=g({key:"darkModeState",default:localStorage.getItem("isDarkMode")==="true"}),te=g({key:"boilerplatesTableState",default:X}),ae=g({key:"isEditDialogOpen",default:!1}),D=g({key:"editableBoilerplateState",default:{isNew:!0,name:"",description:"",git:"",website:"",version:""}}),B=g({key:"changesWereMade",default:!1});var V={},et=x.exports;Object.defineProperty(V,"__esModule",{value:!0});var ne=V.default=void 0,tt=et(S()),at=_,nt=(0,tt.default)((0,at.jsx)("path",{d:"M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"}),"DarkMode");ne=V.default=nt;var z={},rt=x.exports;Object.defineProperty(z,"__esModule",{value:!0});var re=z.default=void 0,st=rt(S()),it=_,ot=(0,st.default)((0,it.jsx)("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"}),"LightMode");re=z.default=ot;const lt=()=>{const[e,a]=d(ee),n=h.exports.useCallback(()=>{a(s=>(localStorage.setItem("isDarkMode",String(!s)),!s)),G.dismiss()},[]);return t(T,{onClick:n,color:"inherit",children:e?t(ne,{}):t(re,{})})};var A={},ct=x.exports;Object.defineProperty(A,"__esModule",{value:!0});var se=A.default=void 0,ut=ct(S()),dt=_,pt=(0,ut.default)((0,dt.jsx)("path",{d:"M3 10h11v2H3v-2zm0-2h11V6H3v2zm0 8h7v-2H3v2zm15.01-3.13.71-.71c.39-.39 1.02-.39 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.71-2.12-2.12zm-.71.71-5.3 5.3V21h2.12l5.3-5.3-2.12-2.12z"}),"EditNote");se=A.default=pt;var N={},mt=x.exports;Object.defineProperty(N,"__esModule",{value:!0});var ie=N.default=void 0,ht=mt(S()),vt=_,gt=(0,ht.default)((0,vt.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");ie=N.default=gt;const oe=()=>{const[e,a]=ye();return[e.get("edit")==="true",r=>{e.set("edit",String(r)),a(e)}]},ft=()=>{const[e,a]=oe();return t(T,{color:"inherit",onClick:()=>a(!e),children:e?t(ie,{}):t(se,{})})},bt=()=>{const e=Ie();return l(I,{children:[t(Ee,{position:"relative",children:l(Oe,{children:[t(O,{variant:"h5",underline:"none",href:"/",color:"inherit",sx:{flexGrow:1},children:"Find your boilerplate"}),t(ft,{}),t(lt,{}),t(T,{color:"inherit",onClick:()=>window.open("https://github.com/akondratsky/compendium","_blank"),children:t(J,{})})]})}),t(we,{}),t(De,{position:"bottom-left",hideProgressBar:!0,closeOnClick:!0,autoClose:2500,theme:e.palette.mode})]})},xt=()=>{const[e,a]=d(Q);return t(P,{label:"Search",fullWidth:!0,margin:"normal",value:e,onChange:({target:{value:n}})=>{a(n)}})},yt=[{name:"angular",label:"Angular"},{name:"react",label:"React"},{name:"vue",label:"Vue"},{name:"vanillajs",label:"Vanilla"},{name:"electron",label:"Electron"},{name:"svelte",label:"Svelte"},{name:"lit",label:"Lit"},{name:"preact",label:"Preact"},{name:"node",label:"Node"},{name:"solidjs",label:"SolidJS"},{name:"react-native",label:"React Native"},{name:"expo",label:"Expo"},{name:"express",label:"Express"},{name:"nest",label:"Nest"},{name:"next",label:"Next"},{name:"vitepress",label:"VitePress"},{name:"ionic",label:"Ionic"},{name:"angular-cli",label:"Angular CLI"},{name:"cra",label:"Create React App (CRA)"},{name:"nx",label:"Nx"},{name:"redux",label:"Redux"},{name:"mobx",label:"MobX"},{name:"recoil",label:""},{name:"pinia",label:"Pinia"},{name:"vue-router"},{name:"tailwindcss",label:"Tailwind CSS"},{name:"scss",label:"SCSS"},{name:"less",label:"Less"},{name:"css",label:"CSS"},{name:"unocss",label:"Unocss"},{name:"vite",label:"Vite"},{name:"webpack",label:"Webpack"},{name:"swc",label:"SWC"},{name:"esbuild",label:"esbuild"},{name:"rollup",label:"Rollup"},{name:"rspack",label:"Rspack"},{name:"svg",label:"SVG"},{name:"e2e",label:"e2e"},{name:"playwright",label:"Playwright"},{name:"jest",label:"Jest"},{name:"typescript",label:""},{name:"javascript",label:""},{name:"eslint",label:"ESLint"},{name:"prettier",label:"Prettier"},{name:"cypress",label:"Cypress"},{name:"detox",label:"Detox"},{name:"docusaurus",label:"Docusaurus"},{name:"storybook",label:"Storybook"},{name:"element-plus",label:"Element Plus"},{name:"open-tiny",label:"OpenTiny (Tiny Vue)"},{name:"ant-design",label:"Ant Design Vue"},{name:"vuetify",label:"Vuetify"},{name:"naive ui",label:"Naive UI"},{name:"devui",label:"DevUI"},{name:"arco-design",label:"Arco Design"},{name:"tdesign",label:"TDesign"},{name:"vant",label:"Vant"},{name:"stencil",label:"Stencil"},{name:"webcomponents",label:"Web Components"},{name:"ci",label:""},{name:"husky",label:""},{name:"ssg",label:"SSG"},{name:"ssr",label:"SSR"},{name:"module-federation",label:"Module Federation"},{name:"aws",label:"AWS"},{name:"gcp",label:"GCP"}],le=e=>{let a=yt;return e!=null&&e.length&&(a=a.filter(({name:n})=>e.includes(n))),a.map(({name:n,label:s})=>({name:n,label:s||n}))},wt=le(),ce=({state:e})=>{const[a,n]=d(e);return t(je,{multiple:!0,options:wt,isOptionEqualToValue:(s,r)=>s.name===r.name,renderInput:s=>t(P,{...s,margin:"normal",label:"Technologies"}),onChange:(s,r)=>n(r),value:a})},f=({label:e,children:a})=>l(Be,{marginY:2,children:[l(C,{variant:"body1",component:"span",fontWeight:700,children:[e,": \xA0"]}),t(C,{variant:"body1",component:"span",children:a})]}),St=({boilerplate:e})=>{const{name:a,description:n,technologies:s,git:r,version:i,website:o,usage:u}=e;return t(Te,{sx:{mt:2},variant:"outlined",children:l(Pe,{children:[t(C,{marginBottom:3,variant:"h5",children:a}),t(f,{label:"Description",children:n}),t(f,{label:"Usage",children:u}),o&&t(f,{label:"Website",children:t(O,{href:o,children:o})}),r&&t(f,{label:"Source",children:t(O,{href:r,children:r})}),s.length>0&&t(f,{label:"Technologies",children:s.map(p=>t($e,{label:p,sx:{mr:1}},p))}),i&&t(f,{label:"Version",children:i})]})})},j=X.map(({technologies:e,...a})=>({...a,technologies:e.split(",").map(n=>n.trim()).filter(Boolean)})),ue=new We.exports.Document({tokenize:"full",document:{id:"id",index:["name","description","technologies","website","git"]}}),de=(e,a="")=>`${e}${a}`;j.forEach(e=>ue.add(de(e.name,e.version),e));const _t=e=>e?ue.search(e,25).reduce((a,n)=>(a.push(...n.result),Fe.exports.uniq(a)),[]).map(a=>(console.log("found",a),j.find(({name:n,version:s})=>de(n,s)===a))):j,Rt=(e,a)=>a.length?e.filter(n=>a.every(s=>n==null?void 0:n.technologies.includes(s))):e,Ct=async(e,a)=>{const n=_t(e);return Rt(n,a)},kt=()=>{const e=v(Q),a=v(Ye),[n,s]=d(Ze);return h.exports.useEffect(()=>{Ct(e,a).then(s)},[e,a]),t(I,{children:n.map(r=>t(St,{boilerplate:r},`${r.name}${r.version}`))})},Mt=()=>l(Ve,{sx:{mt:2},children:[t(ce,{state:Z}),t(xt,{}),t(kt,{})]}),Dt=[{field:"name",flex:1},{field:"git",flex:1},{field:"website",flex:1},{field:"version",flex:0},{field:"description",flex:2},{field:"technologies",flex:1},{field:"usage",flex:2}],It=()=>{const e=v(B);h.exports.useEffect(()=>{e&&window.addEventListener("beforeunload",a=>{const n="There are changes which will be lost";return(a||window.event).returnValue=n,n})},[e])},Et={delimiter:";",fileName:"boilerplates",fields:["name","website","git","technologies","version","description","usage"],getRowsToExport:({apiRef:e})=>e.current.getAllRowIds()},Ot=()=>{const[e]=d(te),a=R(ae),n=L(D),s=R(D),r=L(M),i=R(M),o=v(B);It();const u=h.exports.useRef({}),p=h.exports.useCallback(async()=>{const c=u.current.getDataAsCsv(Et);await navigator.clipboard.writeText(c.replaceAll('""','"')),G.success("Copied to clipboard")},[]),m=()=>{n(),r(),a(!0)},y=({description:c,name:pe,technologies:me,git:he,version:ve,website:ge,usage:fe})=>{s({description:c,isNew:!1,name:pe,git:he,version:ve,website:ge,usage:fe}),i(le(me.split(","))),a(!0)};return l(I,{children:[l(w,{item:!0,container:!0,direction:"row",alignItems:"self-end",children:[t(C,{sx:{mt:4},children:"Edit this and export table to CSV."}),t(k,{sx:{ml:"auto"},variant:o?"contained":"outlined",disabled:!o,onClick:p,children:"Copy CSV"}),t(k,{onClick:m,variant:"outlined",sx:{ml:2},children:"Add Boilerplate"})]}),t(w,{item:!0,flexGrow:1,children:t(He,{apiRef:u,sx:{my:2},autoHeight:!0,onRowDoubleClick:({row:c})=>{y(c)},initialState:{pagination:{paginationModel:{pageSize:10}}},pageSizeOptions:[10,25,50,100],columns:Dt,getRowId:c=>c.name,rows:e})})]})},b=({field:e,...a})=>{const[n,s]=d(D),r=i=>o=>{s(u=>({...u,[i]:o.target.value}))};return t(P,{margin:"dense",label:e,value:n[e],onChange:r(e),...a})},jt=()=>{const[e,a]=d(ae),n=v(D),s=v(M),[r,i]=d(te),o=R(B),u=()=>{const p=()=>({name:n.name,description:n.description,git:n.git,version:n.version,website:n.website,technologies:s.map(y=>y.name).join(","),usage:n.usage});let m;if(n.isNew)m=[...r,p()];else{const y=r.findIndex(c=>c.name===n.name);m=[...r],m.splice(y,1),m.push(p())}i(m),o(!0),a(!1)};return l(ze,{open:e,children:[t(Ae,{sx:{minWidth:500},children:l(w,{container:!0,direction:"column",sx:{width:500},children:[t(b,{field:"name",disabled:!n.isNew}),t(b,{field:"description",multiline:!0,minRows:3}),t(b,{field:"usage",multiline:!0,minRows:2}),t(b,{field:"git"}),t(b,{field:"website"}),t(b,{field:"version"}),t(ce,{state:M})]})}),l(Ne,{children:[t(k,{variant:"contained",onClick:u,children:"Save"}),t(k,{variant:"outlined",onClick:()=>a(!1),children:"Cancel"})]})]})},Tt=()=>t(w,{sx:{px:4,py:2},children:l(w,{container:!0,direction:"column",children:[t(Ot,{}),t(jt,{})]})}),Pt=()=>t("div",{children:"Not Found"}),$t=()=>{const[e]=oe();return e?t(Tt,{}):t(Mt,{})},Bt=[{path:"/",element:t(bt,{}),children:[{index:!0,element:t($t,{})}]},{path:"/*",element:t(Pt,{})}],Vt=()=>{const e=Se(Bt);return t(I,{children:e})};const zt=e=>H({palette:{mode:e?"dark":"light"}}),At=({children:e})=>{const a=v(ee),n=h.exports.useMemo(()=>zt(a),[a]);return l(Le,{theme:n,children:[t(qe,{enableColorScheme:!0}),e]})};H({palette:{mode:"light"}});const Nt=document.getElementById("root"),Lt=U(Nt),qt=t(_e,{basename:"/compendium/",children:t(ke,{children:t(At,{children:t(Vt,{})})})});Lt.render(qt);
