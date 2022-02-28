var X=Object.defineProperty,Z=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var J=(e,t,o)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,p=(e,t)=>{for(var o in t||(t={}))te.call(t,o)&&J(e,o,t[o]);if(G)for(var o of G(t))re.call(t,o)&&J(e,o,t[o]);return e},S=(e,t)=>Z(e,ee(t));import{j as L,u as ne,R as l,a as se,N as B,L as _,b as oe,c as O,d as ae,B as ce}from"./vendor.93fbe2f2.js";const le=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}};le();const j="p-4 m-3 rounded-sm font-bold text-base font-mono",D="underline hovered:no-underline",R="items-center justify-center text-lg w-full max-w-5xl resize-none my-4 p-4",W="text-base font-mono cursor-pointer children:py-2 children:px-4 lg:children:py-0 lg:children:px-1 text-right",N={"black on white":{default:"text-gray-900 bg-gray-50 text-2xl",btn:`text-gray-50 bg-gray-900 hover:bg-gray-400 ${j}`,anchor:`text-gray-600 visited:text-amber-800 ${D}`,userText:`bg-gray-100 border-gray-600 ${R}`,system:"text-gray-400 text-base font-mono",dropdown:`text-gray-400 children:bg-gray-50 hover:children:bg-gray-200 ${W}`},"white on gray":{default:"text-gray-50 bg-gray-500 text-2xl",btn:`text-gray-500 bg-gray-50 hover:bg-gray-200 ${j}`,anchor:`text-gray-400 visited:text-amber-600 ${D}`,userText:`placeholder:text-gray-300 bg-gray-400 border-gray-600 ${R}`,system:"text-gray-300 text-base font-mono",dropdown:`text-gray-300 children:bg-gray-500 hover:children:bg-gray-50 ${W}`},"amber on blue":{default:"text-amber-300 bg-blue-900 text-2xl",btn:`text-blue-800 bg-amber-300 hover:bg-amber-500 ${j}`,anchor:`text-amber-600 visited:text-amber-800 ${D}`,userText:`bg-blue-300/10 border-amber-800 ${R}`,system:"text-gray-400 text-base font-mono",dropdown:`text-gray-400 children:bg-blue-900 hover:children:bg-amber-300 ${W}`}},V=e=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e);const t=N[e].default.split(" "),o=document.querySelector("body");if(o){const a=o.classList;if(a.length>0)for(let r=0;r<t.length;r++)a.replace(a[r],t[r]);else for(const r of t)a.add(r)}};var ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",themes:N,defineTheme:V});(()=>{const e=localStorage.getItem("theme");V(e!==null?e:"black on white")})();const de="modulepreload",H={},ue="/",A=function(t,o){return!o||o.length===0?t():Promise.all(o.map(a=>{if(a=`${ue}${a}`,a in H)return;H[a]=!0;const r=a.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${n}`))return;const c=document.createElement("link");if(c.rel=r?"stylesheet":de,r||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),r)return new Promise((h,d)=>{c.addEventListener("load",h),c.addEventListener("error",d)})})).then(()=>t())},s=L.exports.jsx,u=L.exports.jsxs,w=L.exports.Fragment;function he(){const e=ne({from:{opacity:0},to:{opacity:1},config:{duration:250}});return l.useEffect(()=>{const t=setTimeout(()=>sessionStorage.setItem("descIsFaded","true"),250);return()=>clearTimeout(t)},[e]),u(se.div,{className:"flex flex-col items-center w-full max-w-lg p-4",style:sessionStorage.getItem("descIsFaded")!=="true"?e:void 0,children:[s("p",{className:"curs indent-2",children:'This app allows to exchange fragments of text. Press "Generate" to generate a link that could be then sent to another person. Paste the text you wanted to share and press send. The other person will have an option to share their piece of text as well. On press you will be redirected, link will be copied to clipboard.'}),s("p",{className:"curs",children:"Have fun!"})]})}function fe(e){const[t,o]=l.useState();return l.useEffect(()=>{const a=localStorage.getItem("theme");a&&o(N[a])},[]),s(me,{value:{theme:t,setTheme:o},children:e.children})}const M=l.createContext({theme:N["black on white"],setTheme:()=>{}}),{Provider:me,Consumer:Pe}=M,T=()=>l.useContext(M);function ge(){const{theme:e}=T();return u("div",{className:`${e&&e.system}  absolute bottom-0 left-1/2 -translate-x-1/2 p-3 text-xs`,children:["Reach me\xA0",s("a",{className:"foot-link",href:"https://altsep.vercel.app/#contacts",target:"_blank",rel:"noreferrer",children:"here"})]})}function xe(e){const{setExchangeArr:t}=e,{theme:o}=T(),[a,r]=l.useState(!1),[n,c]=l.useState(""),h=d=>{d.preventDefault();const i=document.cookie.split("=")[1];A(()=>import("./gen-str.3e3fc5d6.js"),[]).then(({genAlphanumStr:m})=>{const v=m();c(v),t(b=>[...b,{type:"exchange",path:v,date:Date.now(),creator:i}]),r(!0);const f=location.href+v;navigator.clipboard.writeText(f)}).catch(m=>{console.log(m)})};return u(w,{children:[s("button",{className:o&&o.btn,onClick:h,children:"Generate"}),a&&s(B,{to:`/${n}`,replace:!0})]})}function pe(e){const{setExchangeArr:t,currentPath:o,setPageWasDeleted:a}=e,{theme:r}=T(),n=()=>{a(!0),t(c=>c.filter(h=>h.path!==o))};return s("button",{className:r&&r.btn,onClick:n,children:"Remove this page"})}function ye(e){const{pageWasDeleted:t,isAppLoaded:o}=e,{theme:a}=T(),[r,n]=l.useState(3);return l.useEffect(()=>{const c=setInterval(()=>t&&n(h=>h-1),1e3);return()=>clearInterval(c)},[]),u("div",{className:`${a&&a.system} m-2`,children:[s("div",{className:"mb-4",children:s(_,{to:"/",children:"Return to home page"})}),o&&(t?u(w,{children:[u("p",{children:["Page was deleted. You will be redirected in ",r," seconds."]}),r===0&&s(B,{to:"/",replace:!0})]}):s("p",{children:"Page not found."}))]})}function be(e){const{userId:t,exchangeArr:o}=e,{theme:a}=T();return s(w,{children:(()=>{const r=o.filter(n=>n.creator===t);return r.length>0&&u("div",{className:`${a&&a.system} flex flex-row flex-wrap max-w-3xl p-4`,children:["your pages:\xA0",r.map(n=>u("div",{children:[s(_,{to:`/${n.path}`,children:n.path}),r.length>1&&r.indexOf(n)!==r.length-1&&s(w,{children:",\xA0"})]},`link to ${n.path}`))]})})()})}const I=async()=>{try{return await(await fetch("/api")).json()}catch(e){console.log(e)}},U=async e=>{try{return await(await fetch("/api",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).json()}catch(t){console.log(t)}};function ve(e){const{isLoading:t,isCreator:o,textElementType:a,creatorText:r,guestText:n,handleChange:c,theme:h}=e,d=()=>{const i=document.querySelector("textarea");i&&(i.style.setProperty("height","auto"),i.style.setProperty("height",i.scrollHeight+"px"))};return l.useEffect(()=>{const i=document.querySelector("textarea");if(!t&&i){d(),i.value.length===0&&i.style.setProperty("height","60px");const m=i.value.length*2;i.selectionStart=m}},[t,a]),l.useEffect(()=>{const i=document.querySelector("textarea");return i&&(i.addEventListener("input",d),window.addEventListener("resize",d)),()=>{i&&(i.removeEventListener("input",d),window.removeEventListener("resize",d))}},[t]),u("div",{className:"flex flex-col items-center justify-center w-full",children:[s("h1",{className:"curs",children:"Edit your text"}),s("textarea",{className:`${h&&h.userText} shadow-inner shadow-black/25 placeholder:text-base placeholder:font-mono overflow-y-hidden resize-none focus:outline-none`,placeholder:"Enter text here...",value:o?r:n,onChange:c,autoFocus:!0})]})}function we(e){const{isCreator:t,textElementType:o,creatorText:a,guestText:r,theme:n}=e;return u("div",{className:"flex flex-col items-center justify-center w-full",children:[s("h1",{className:"curs",children:t?"Guest's text":"Creator's text"}),s("div",{className:`${n&&n.userText} ${o} font-sans whitespace-pre-line break-words`,children:t?r||s("p",{className:n&&n.system,children:"Waiting for guest to send data..."}):a||s("p",{className:n&&n.system,children:"Waiting for creator to send data..."})})]})}function Te(e){const{currentPath:t,userId:o,setExchangeArr:a,setPageWasDeleted:r}=e,{theme:n}=T(),[c,h]=l.useState(),[d,i]=l.useState(!0),[m,v]=l.useState("default"),[f,b]=l.useState(""),[C,E]=l.useState(""),[F,q]=l.useState(!1);l.useEffect(()=>{q(!0),r(!1),I().then(({data:g})=>{h(S(p({},JSON.parse(g).filter(y=>y.path===t)[0]),{date:Date.now()})),q(!1)})},[]);const K=g=>d?b(g.target.value):E(g.target.value),Y=()=>{I().then(({data:g})=>{const y=JSON.parse(g).filter(x=>x.path===t)[0];if(c&&d){const x=y.guestText;h(S(p({},c),{creatorText:f,guestText:x}))}else if(c){const x=y.creatorText;h(S(p({},c),{guestText:C,creatorText:x}))}})};l.useEffect(()=>{let g,y;return c&&(o===c.creator?i(!0):i(!1),g=setInterval(()=>o===c.creator&&I().then(({data:x})=>{const P=JSON.parse(x).filter($=>$.path===t)[0].guestText;E(P)}),5e3),y=setInterval(()=>o!==c.creator&&I().then(({data:x})=>{const P=JSON.parse(x).filter($=>$.path===t)[0].creatorText;b(P)}),5e3)),()=>{clearInterval(g),clearInterval(y)}},[c]),l.useEffect(()=>{if(c){const{creatorText:g,guestText:y}=c;g&&b(g),y&&E(y),a(x=>{const k=x.slice(),P=k.findIndex($=>$.path===c.path);return k[P]=c,k})}},[c]);const Q=()=>v(m==="default"?"other":"default"),z={isLoading:F,isCreator:d,textElementType:m,creatorText:f,guestText:C,handleChange:K,theme:n};return u(w,{children:[u("div",{className:`${n&&n.system} flex flex-row justify-between m-2 mb-12`,children:[s(_,{to:"/",children:"Return to home page"}),s("p",{children:t})]}),s("div",{className:"flex flex-col items-center justify-center",children:F?s("p",{className:n&&n.system,children:"Getting data..."}):document.cookie?u(w,{children:[m==="default"?s(ve,p({},z)):s(we,p({},z)),u("div",{className:"flex flex-row flex-wrap justify-center",children:[m==="default"&&u("button",{className:`${n&&n.btn} flex flex-row items-center`,onClick:Y,children:[s("p",{children:"Send"}),"\xA0",s("p",{className:"text-xs",children:"(128kb max)"})]}),d&&s(pe,S(p({},e),{setPageWasDeleted:r})),s("button",{className:n&&n.btn,onClick:Q,children:m==="default"?d?"Show guest's text":"Show creator's text":"Show your text"})]})]}):s("p",{children:"Can't identify user! Please enable cookies for this site."})})]})}function Se(){const[e,t]=l.useState(!1),{theme:o,setTheme:a}=T(),r=Object.keys(N);return s("div",{className:`${o&&o.dropdown} absolute top-0 right-0 z-10`,children:e?r.map(n=>s("p",{onClick:()=>{A(()=>Promise.resolve().then(function(){return ie}),void 0).then(({defineTheme:c})=>c(n)),a(N[n]),t(!1)},children:n},n)):s("p",{onClick:()=>{t(!0)},children:"theme"})})}function Ne(){const[e,t]=l.useState([]),[o,a]=l.useState(!1),[r,n]=l.useState("");l.useEffect(()=>{I().then(({data:f})=>{f&&t(JSON.parse(f)),a(!0)})},[]),l.useEffect(()=>{const f=document.cookie.split("=")[1];f?n(f):A(()=>import("./gen-str.3e3fc5d6.js"),[]).then(({genAlphanumStr:b})=>{const C="user-id="+b(32),E=";max-age=2592000;secure;samesite=strict";document.cookie=C+E}).catch(b=>console.log(b)),o&&U(e)},[e]);const c={setExchangeArr:t,getData:I,setData:U},[h,d]=l.useState(!1),i={userId:r,exchangeArr:e,setExchangeArr:t,setPageWasDeleted:d},m={isAppLoaded:o,pageWasDeleted:h,setPageWasDeleted:d},v={userId:r,exchangeArr:e};return s("div",{children:u(oe,{children:[s(O,{path:"/",element:u(w,{children:[s(Se,{}),u("div",{className:"flex flex-col items-center w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",children:[s(he,{}),s(xe,p({},c)),s(be,p({},v))]}),s(ge,{})]})}),e!==void 0&&e.map(f=>s(O,{path:`/${f.path}`,element:s(Te,S(p({},i),{currentPath:f.path}))},f.path)),s(O,{path:"*",element:s(ye,p({},m))})]})})}const Ie=e=>{e&&e instanceof Function&&A(()=>import("./web-vitals.8ad394cc.js"),[]).then(({getCLS:t,getFID:o,getFCP:a,getLCP:r,getTTFB:n})=>{t(e),o(e),a(e),r(e),n(e)})};ae.render(s(l.StrictMode,{children:s(ce,{children:s(fe,{children:s(Ne,{})})})}),document.getElementById("root"));Ie();
