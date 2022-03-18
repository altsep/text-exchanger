var Y=Object.defineProperty;var B=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var G=(s,n,a)=>n in s?Y(s,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[n]=a,x=(s,n)=>{for(var a in n||(n={}))K.call(n,a)&&G(s,a,n[a]);if(B)for(var a of B(n))Q.call(n,a)&&G(s,a,n[a]);return s};import{u as X,R as e,a as Z,b as ee,L as H,N as z,c as te,d as j,e as ne,B as re}from"./vendor.696df697.js";const se=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}};se();const A="p-4 m-3 rounded-sm font-bold text-base font-mono",R="underline hovered:no-underline",W="items-center justify-center text-lg w-full max-w-5xl resize-none my-3 p-4",F="text-base font-mono cursor-pointer children:py-2 children:px-4 lg:children:py-0 lg:children:px-1 text-right",V="text-base font-mono",k={"black on white":{default:"text-gray-900 bg-gray-50 text-2xl",btn:`text-gray-50 bg-gray-900 hover:bg-gray-400 ${A}`,anchor:`text-gray-600 visited:text-amber-800 ${R}`,userText:`bg-gray-100 border-gray-600 ${W}`,system:`text-gray-400 ${V}`,dropdown:`text-gray-400 children:bg-gray-50 hover:children:bg-gray-200 ${F}`},"white on gray":{default:"text-gray-50 bg-gray-500 text-2xl",btn:`text-gray-500 bg-gray-50 hover:bg-gray-200 ${A}`,anchor:`text-gray-400 visited:text-amber-600 ${R}`,userText:`placeholder:text-gray-300 bg-gray-400 border-gray-600 ${W}`,system:`text-gray-300 ${V}`,dropdown:`text-gray-300 children:bg-gray-500 hover:children:bg-gray-50 ${F}`},"amber on blue":{default:"text-amber-300 bg-blue-900 text-2xl",btn:`text-blue-800 bg-amber-300 hover:bg-amber-500 ${A}`,anchor:`text-amber-600 visited:text-amber-800 ${R}`,userText:`bg-blue-300/10 border-amber-800 ${W}`,system:`text-gray-400 ${V}`,dropdown:`text-gray-400 children:bg-blue-900 hover:children:bg-amber-300 ${F}`}},J=s=>{document.documentElement.setAttribute("data-theme",s),localStorage.setItem("theme",s);const n=k[s].default.split(" "),a=document.querySelector("body");if(a){const r=a.classList;if(r.length>0)for(let t=0;t<n.length;t++)r.replace(r[t],n[t]);else for(const t of n)r.add(t)}};var ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",themes:k,defineTheme:J});(()=>{const s=localStorage.getItem("theme");J(s!==null?s:"black on white")})();const oe="modulepreload",q={},le="/",E=function(n,a){return!a||a.length===0?n():Promise.all(a.map(r=>{if(r=`${le}${r}`,r in q)return;q[r]=!0;const t=r.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":oe,t||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),t)return new Promise((i,l)=>{c.addEventListener("load",i),c.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>n())};function ce(){const s=X({from:{opacity:0},to:{opacity:1},config:{duration:250}});return e.useEffect(()=>{const n=setTimeout(()=>sessionStorage.setItem("descIsFaded","true"),250);return()=>clearTimeout(n)},[s]),e.createElement(Z.div,{className:"flex flex-col items-center w-full max-w-lg",style:sessionStorage.getItem("descIsFaded")!=="true"?s:void 0},e.createElement("p",{className:"curs indent-2"},'This app allows to exchange fragments of text. Press "Generate" to generate a link that could be then sent to another person. Paste the text you wanted to share and press send. The other person will have an option to share their piece of text as well. On press you will be redirected, link will be copied to clipboard. Page will be removed after one week of inactivity.'),e.createElement("p",{className:"curs"},"Have fun!"))}function ie(s){const[n,a]=e.useState({default:"",btn:"",anchor:"",userText:"",system:"",dropdown:""});return e.useEffect(()=>{const r=localStorage.getItem("theme");r&&a(k[r])},[]),e.createElement(ue,{value:{theme:n,setTheme:a}},s.children)}const M=e.createContext({theme:k["black on white"],setTheme:()=>{}}),{Provider:ue,Consumer:Pe}=M,_=()=>e.useContext(M);function me(){const{theme:s}=_();return e.createElement("div",{className:`${s&&s.system}  absolute bottom-0 left-1/2 -translate-x-1/2 p-3 text-xs`},"Reach me\xA0",e.createElement("a",{className:"foot-link",href:"https://altsep.vercel.app/",target:"_blank",rel:"noreferrer"},"here"))}function de(s){const{theme:n,currentPath:a,userId:r,setPageWasDeleted:t,setPagesCreated:o}=s,c=()=>{E(()=>import("./requests.fae15434.js"),[]).then(({removePage:i,getCreatorPages:l})=>{i(a).then(()=>l(r).then(u=>{u&&o(JSON.parse(u))}))}),t(!0)};return e.createElement("button",{className:n.btn,onClick:c},"Remove this page")}function fe(s){const{theme:n,currentPath:a,isCreator:r,creatorText:t,guestText:o,setExists:c}=s,i=()=>{E(()=>import("./requests.fae15434.js"),[]).then(({sendText:l})=>{l({pageName:a,isCreator:r,text:r?t:o}).then(u=>{if(u){const{err:h}=JSON.parse(u);if(h)throw c(!1),Error(h)}}).catch(u=>console.error(u))})};return e.createElement("button",{className:`${n.btn} flex flex-row items-center`,onClick:i},e.createElement("p",null,"Send"),"\xA0",e.createElement("p",{className:"text-xs"},"(128kb max)"))}function ge(s){const{theme:n,isCreator:a,creatorText:r,guestText:t,setCreatorText:o,setGuestText:c,gotText:i}=s,l=()=>{const m=document.querySelector("textarea"),d=window.getSelection();m&&d&&d.toString().length>0?(a?o(f=>f.replace(d.toString(),"")):c(f=>f.replace(d.toString(),"")),m.focus(),setTimeout(()=>{m.value.length>0?(m.style.height="auto",m.style.height=m.scrollHeight+"px"):m.style.height="60px"},0)):(m.focus(),m.setSelectionRange(0,m.value.length))},[u,h]=e.useState("Select all");return e.useEffect(()=>{const m=()=>{const d=window.getSelection();d&&(d.toString().length>0?h("Delete selected"):h("Select all"))};return document.addEventListener("selectionchange",m),()=>{document.removeEventListener("selectionchange",m)}},[i]),e.createElement("button",{className:`${n.btn} ${a?r.length===0&&"hidden":t.length===0&&"hidden"}`,onClick:l},u)}function he(s){const{theme:n,isCreator:a,textElementType:r,setTextElementType:t}=s,o=()=>t(r==="default"?"other":"default");return e.createElement("button",{className:n.btn,onClick:o},r==="default"?a?"Show guest's text":"Show creator's text":"Show your text")}function pe(s){const{theme:n,isCreator:a,creatorText:r,guestText:t,handleChange:o,gotText:c}=s,i=()=>{const l=document.querySelector("textarea");l&&(l.value.length===0?l.style.height="60px":(l.style.height="auto",l.style.height=l.scrollHeight+"px"))};return e.useEffect(()=>{const l=document.querySelector("textarea");l&&(i(),l.selectionStart=l.value.length)},[c]),e.useEffect(()=>{const l=document.querySelector("textarea");return l&&l.addEventListener("input",i),window.addEventListener("resize",i),()=>{l&&l.removeEventListener("input",i),window.removeEventListener("resize",i)}},[c]),e.createElement("div",{className:"flex flex-col items-center justify-center w-full"},e.createElement("h1",{className:"curs"},"Edit your text"),e.createElement("textarea",{className:`${n.userText} shadow-inner shadow-black/25 placeholder:text-base placeholder:font-mono overflow-y-hidden resize-none focus:outline-none`,placeholder:c?"Enter text here...":"Getting data...",value:a?r:t,onChange:o,autoFocus:!0}))}function xe(s){const{theme:n,isCreator:a,textElementType:r,creatorText:t,guestText:o}=s;return e.createElement("div",{className:"flex flex-col items-center justify-center w-full"},e.createElement("h1",{className:"curs"},a?"Guest's text":"Creator's text"),e.createElement("div",{className:`${n.userText} ${r} font-sans whitespace-pre-line break-words`},a?o||e.createElement("p",{className:n&&n.system},"Waiting for guest to send data..."):t||e.createElement("p",{className:n&&n.system},"Waiting for creator to send data...")))}function U(s,n,a){const[r,t]=e.useState(n||"hidden"),[o,c]=e.useState("opacity-0"),{theme:i}=_();return{warning:e.createElement("div",{className:`${i&&i.system} ${r} flex-row justify-center text-center hover:opacity-60 cursor-pointer w-full ${a}`,title:"Hide",onClick:()=>t("hidden"),onMouseEnter:()=>c("opacity-60"),onMouseLeave:()=>c("opacity-0")},e.createElement("p",null,s),"\xA0",e.createElement("button",{className:o},"x")),warningDisplay:r,setWarningDisplay:t}}function Ee(s){const{currentPath:n,userId:a,isCreator:r,date:t,setPageWasDeleted:o,setPagesCreated:c,setExists:i}=s,{theme:l}=_(),[u,h]=e.useState("default"),[m,d]=e.useState(!1),[f,g]=e.useState(""),[y,b]=e.useState(""),v=p=>r?g(p.target.value):b(p.target.value);e.useEffect(()=>{E(()=>import("./requests.fae15434.js"),[]).then(({getText:p})=>p(n).then(C=>{if(C){const{creatorData:w,guestData:I}=JSON.parse(C);g(w),b(I)}}).finally(()=>d(!0)))},[]),e.useEffect(()=>{let p;return E(()=>import("./requests.fae15434.js"),[]).then(({getTextOther:C})=>{p=setInterval(()=>C({pageName:n,isCreator:r}).then(w=>{if(w){const{err:I,text:D}=JSON.parse(w);if(I)throw Error(I);r?b(D):g(D)}}).catch(w=>{console.error(w.message),i(!1)}),3e3)}),()=>clearInterval(p)},[]);const S={theme:l,isCreator:r,textElementType:u,creatorText:f,guestText:y,handleChange:v,gotText:m},O={theme:l,currentPath:n,userId:a,setPageWasDeleted:o,setPagesCreated:c},N={theme:l,currentPath:n,isCreator:r,creatorText:f,guestText:y,setExists:i},T={theme:l,isCreator:r,creatorText:f,guestText:y,setCreatorText:g,setGuestText:b,gotText:m},$={theme:l,isCreator:r,textElementType:u,setTextElementType:h},{warning:L,warningDisplay:P}=U("! Information posted is not secure and is accessible to anyone visiting the page. Take caution not to share any sensitive data.",localStorage.getItem("exchangeWarningDisplay")||"flex");return e.useEffect(()=>{localStorage.setItem("exchangeWarningDisplay",P)},[P]),e.createElement(e.Fragment,null,document.cookie?e.createElement("div",{className:"flex flex-col items-center"},L,e.createElement("div",{className:"m-3 w-full"},u==="default"?e.createElement(pe,x({},S)):e.createElement(xe,x({},S))),e.createElement("div",{className:"flex flex-row flex-wrap justify-center"},u==="default"&&e.createElement(e.Fragment,null,e.createElement(fe,x({},N)),e.createElement(ge,x({},T))),r&&e.createElement(de,x({},O)),e.createElement(he,x({},$))),e.createElement("div",{className:`${l&&l.system} p-3 text-xs flex flex-col items-center`},e.createElement("p",null,"Page created"),e.createElement("p",null,t))):e.createElement("p",null,"Can't identify user! Please enable cookies for this site."))}function ye(s){const{userId:n,setPagesCreated:a}=s,[r,t]=e.useState(!1),{theme:o}=_(),[c,i]=e.useState(3),{p:l}=ee();e.useEffect(()=>{l&&h(l)},[]);const[u,h]=e.useState("");e.useEffect(()=>{const T=setInterval(()=>r&&i($=>$-1),1e3);return()=>clearInterval(T)},[r]);const[m,d]=e.useState(!0),[f,g]=e.useState(!0),[y,b]=e.useState({creator:"",date:""}),[v,S]=e.useState(!1);e.useEffect(()=>{u&&E(()=>import("./requests.fae15434.js"),[]).then(({getInfo:T,updateInfo:$})=>T(u).then(L=>{if(L){const P=JSON.parse(L);if(P.err)throw Error(P.err);{S(!0);const{creator:p,date:C}=P,w={dateStyle:"medium",timeStyle:"medium"},I=new Date(C).toLocaleString("en-US",w);b({creator:p,date:I});const D=Date.now();$({pageName:u,info:{creator:p,date:D}}),p!==n&&d(!1)}}})).catch(T=>console.error(T.message)).finally(()=>g(!1))},[u]);const O={currentPath:u,userId:n,isCreator:m,date:y.date,setPageWasDeleted:t,setPagesCreated:a,setExists:S},N=`${o&&o.system} m-2 mb-4`;return e.createElement(e.Fragment,null,e.createElement("div",{className:`${N} flex flex-row justify-between`},e.createElement(H,{to:"/"},"Return to home page"),e.createElement("p",null,v&&u)),/^\w{6}$/.test(u)&&f?e.createElement("p",{className:N},"Getting data..."):v?r?e.createElement("div",{className:N},e.createElement("p",null,"Page was deleted. You will be redirected in ",c," seconds."),c===0&&e.createElement(z,{to:"/",replace:!0})):e.createElement(Ee,x({},O)):e.createElement("p",{className:N},"Page not found."))}function be(s){const{gotPages:n,pagesCreated:a}=s,{theme:r}=_();return e.useEffect(()=>{const t=document.querySelector(".pages");if(t){const{scrollHeight:o,clientHeight:c,style:i}=t;o>c?i.overflowY="scroll":i.overflowY="auto"}},[n,a]),e.createElement("div",{className:"max-h-min"},n?a.length>0?e.createElement("div",{className:`pages ${r&&r.system} flex flex-row flex-wrap max-w-lg max-h-32`},e.createElement("p",null,"your pages:\xA0"),a.map(t=>e.createElement("div",{key:`link to ${t}`},e.createElement(H,{to:`/${t}`},t),a.length>1&&a.indexOf(t)!==a.length-1&&e.createElement(e.Fragment,null,",\xA0")))):e.createElement(e.Fragment,null,"\xA0"):e.createElement("p",{className:r&&r.system},"Getting data..."))}function ve(){const[s,n]=e.useState(!1),{theme:a,setTheme:r}=_(),t=Object.keys(k);return e.createElement("div",{className:`${a&&a.dropdown} absolute top-0 right-0 z-10`},s?t.map(o=>e.createElement("p",{key:o,onClick:()=>{E(()=>Promise.resolve().then(function(){return ae}),void 0).then(({defineTheme:c})=>c(o)),r(k[o]),n(!1)}},o)):e.createElement("p",{onClick:()=>{n(!0)}},"theme"))}function we(s){const{pagesCreated:n,setPagesCreated:a,setWarningDisplay:r}=s,{theme:t}=_(),[o,c]=e.useState(!1),[i,l]=e.useState(""),[u,h]=e.useState("Generate"),m=()=>{if(n.length<100){h("Working...");const d=document.cookie.split("=")[1];E(()=>import("./gen-str.3e3fc5d6.js"),[]).then(({genAlphanumStr:f})=>{const g=f();l(g);const y={pageName:g,info:{creator:d,date:Date.now()}};E(()=>import("./requests.fae15434.js"),[]).then(({addPage:v})=>{v(y).then(()=>{c(!0),a(S=>[...S,g])})}).catch(v=>console.error(v));const b=location.href+g;navigator.clipboard.writeText(b)}).catch(f=>console.error(f))}else r("flex")};return e.createElement(e.Fragment,null,e.createElement("button",{className:t&&t.btn,onClick:()=>{m()}},u),o&&e.createElement(z,{to:`/${i}`,replace:!0}))}function Se(){const[s,n]=e.useState(""),[a,r]=e.useState(!1),[t,o]=e.useState([]);e.useEffect(()=>{const m=document.cookie.split("=")[1];m?(n(m),r(!1),E(()=>import("./requests.fae15434.js"),[]).then(({getCreatorPages:d})=>d(m).then(f=>{if(f){const g=JSON.parse(f);if(g.err)throw Error(g.err);o(g)}})).catch(d=>console.warn(d.message)).finally(()=>r(!0))):E(()=>import("./gen-str.3e3fc5d6.js"),[]).then(({genAlphanumStr:d})=>{const f=d(32),g="user-id="+f,y=";max-age=2592000;secure;samesite=strict";document.cookie=g+y,n(f)}).catch(d=>console.error(d)).finally(()=>r(!0))},[]);const{warning:c,setWarningDisplay:i}=U("! Cannot create more than 100 pages"),l={pagesCreated:t,setPagesCreated:o,setWarningDisplay:i},u={userId:s,pagesCreated:t,setPagesCreated:o},h={userId:s,pagesCreated:t,setPagesCreated:o,gotPages:a};return e.createElement(te,null,e.createElement(j,{path:"/",element:e.createElement(e.Fragment,null,e.createElement(ve,null),e.createElement("div",{className:"flex flex-col items-center w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-4 children:mb-4"},e.createElement(ce,null),e.createElement("div",{className:"flex flex-row flex-wrap justify-center"},e.createElement(we,x({},l))),c,e.createElement(be,x({},h))),e.createElement(me,null))}),e.createElement(j,{path:":p",element:e.createElement(ye,x({},u))}))}const Te=s=>{s&&s instanceof Function&&E(()=>import("./web-vitals.a2d693e8.js"),[]).then(({getCLS:n,getFID:a,getFCP:r,getLCP:t,getTTFB:o})=>{n(s),a(s),r(s),t(s),o(s)})};ne.render(e.createElement(e.StrictMode,null,e.createElement(re,null,e.createElement(ie,null,e.createElement(Se,null)))),document.getElementById("root"));Te();
