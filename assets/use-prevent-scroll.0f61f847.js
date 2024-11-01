import{b as $,V as C,w as W,o as k,g as B,d as q,m as p,l as c,y as F,W as N}from"./index.831bcaab.js";import{f as _,g as M,i as j}from"./QBtn.30e14a83.js";function oe(e,o,r){let l;function i(){l!==void 0&&(C.remove(l),l=void 0)}return $(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){l={condition:()=>r.value===!0,handler:o},C.add(l)}}}const te={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},le=["beforeShow","show","beforeHide","hide"];function re({showing:e,canShow:o,hideOnRouteChange:r,handleShow:l,handleHide:i,processOnMount:w}){const n=B(),{props:s,emit:d,proxy:L}=n;let u;function O(t){e.value===!0?g(t):V(t)}function V(t){if(s.disable===!0||t!==void 0&&t.qAnchorHandled===!0||o!==void 0&&o(t)!==!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(d("update:modelValue",!0),u=t,q(()=>{u===t&&(u=void 0)})),(s.modelValue===null||f===!1)&&S(t)}function S(t){e.value!==!0&&(e.value=!0,d("beforeShow",t),l!==void 0?l(t):d("show",t))}function g(t){if(s.disable===!0)return;const f=s["onUpdate:modelValue"]!==void 0;f===!0&&(d("update:modelValue",!1),u=t,q(()=>{u===t&&(u=void 0)})),(s.modelValue===null||f===!1)&&H(t)}function H(t){e.value!==!1&&(e.value=!1,d("beforeHide",t),i!==void 0?i(t):d("hide",t))}function x(t){s.disable===!0&&t===!0?s["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):t===!0!==e.value&&(t===!0?S:H)(u)}W(()=>s.modelValue,x),r!==void 0&&_(n)===!0&&W(()=>L.$route.fullPath,()=>{r.value===!0&&e.value===!0&&g()}),w===!0&&k(()=>{x(s.modelValue)});const P={show:V,hide:g,toggle:O};return Object.assign(L,P),P}const ie=[Element,String],D=[null,document,document.body,document.scrollingElement,document.documentElement];function ne(e,o){let r=j(o);if(r===void 0){if(e==null)return window;r=e.closest(".scroll,.scroll-y,.overflow-auto")}return D.includes(r)?window:r}function I(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function K(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let h;function se(){if(h!==void 0)return h;const e=document.createElement("p"),o=document.createElement("div");M(e,{width:"100%",height:"200px"}),M(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const r=e.offsetWidth;o.style.overflow="scroll";let l=e.offsetWidth;return r===l&&(l=o.clientWidth),o.remove(),h=r-l,h}function R(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let m=0,b,T,v,E=!1,X,Y,A,a=null;function G(e){J(e)&&F(e)}function J(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const o=N(e),r=e.shiftKey&&!e.deltaX,l=!r&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=r||l?e.deltaY:e.deltaX;for(let w=0;w<o.length;w++){const n=o[w];if(R(n,l))return l?i<0&&n.scrollTop===0?!0:i>0&&n.scrollTop+n.clientHeight===n.scrollHeight:i<0&&n.scrollLeft===0?!0:i>0&&n.scrollLeft+n.clientWidth===n.scrollWidth}return!0}function U(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function y(e){E!==!0&&(E=!0,requestAnimationFrame(()=>{E=!1;const{height:o}=e.target,{clientHeight:r,scrollTop:l}=document.scrollingElement;(v===void 0||o!==window.innerHeight)&&(v=r-o,document.scrollingElement.scrollTop=l),l>v&&(document.scrollingElement.scrollTop-=Math.ceil((l-v)/8))}))}function z(e){const o=document.body,r=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:i}=window.getComputedStyle(o);b=K(window),T=I(window),X=o.style.left,Y=o.style.top,A=window.location.href,o.style.left=`-${b}px`,o.style.top=`-${T}px`,i!=="hidden"&&(i==="scroll"||o.scrollWidth>window.innerWidth)&&o.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||o.scrollHeight>window.innerHeight)&&o.classList.add("q-body--force-scrollbar-y"),o.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,p.is.ios===!0&&(r===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",y,c.passiveCapture),window.visualViewport.addEventListener("scroll",y,c.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",U,c.passiveCapture))}p.is.desktop===!0&&p.is.mac===!0&&window[`${e}EventListener`]("wheel",G,c.notPassive),e==="remove"&&(p.is.ios===!0&&(r===!0?(window.visualViewport.removeEventListener("resize",y,c.passiveCapture),window.visualViewport.removeEventListener("scroll",y,c.passiveCapture)):window.removeEventListener("scroll",U,c.passiveCapture)),o.classList.remove("q-body--prevent-scroll"),o.classList.remove("q-body--force-scrollbar-x"),o.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,o.style.left=X,o.style.top=Y,window.location.href===A&&window.scrollTo(b,T),v=void 0)}function Q(e){let o="add";if(e===!0){if(m++,a!==null){clearTimeout(a),a=null;return}if(m>1)return}else{if(m===0||(m--,m>0))return;if(o="remove",p.is.ios===!0&&p.is.nativeMobile===!0){a!==null&&clearTimeout(a),a=setTimeout(()=>{z(o),a=null},100);return}}z(o)}function de(){let e;return{preventBodyScroll(o){o!==e&&(e!==void 0||o===!0)&&(e=o,Q(o))}}}export{le as a,re as b,oe as c,de as d,I as e,K as f,ne as g,se as h,ie as s,te as u};
