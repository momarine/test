import{a as u,U as a,b as s,g as i}from"./index.831bcaab.js";import{v as l}from"./QBtn.30e14a83.js";const f={dark:{type:Boolean,default:null}};function d(e,n){return u(()=>e.dark===null?n.dark.isActive:e.dark)}function k(){let e=null;const n=i();function t(){e!==null&&(clearTimeout(e),e=null)}return a(t),s(t),{removeTimeout:t,registerTimeout(o,r){t(),l(n)===!1&&(e=setTimeout(()=>{e=null,o()},r))}}}export{d as a,k as b,f as u};