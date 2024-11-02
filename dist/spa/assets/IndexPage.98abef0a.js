import{k as le,m as Q,n as se,p as ue,q as R,s as U,v as W,y as Y,x as X,r as z,a as v,w as A,g as H,h as p,T as ce,Y as de,c as G,Z as ve,o as re,b as ie,V as Z,_ as fe,e as J,f as I,j as me,B as pe,F as ee,G as ge,H as te,N as q,I as B,O as he,P as ye,R as xe,K as be}from"./index.703205af.js";import{g as ne,s as ae,c as Ce}from"./selection.a7bb75ad.js";import{b as Pe,u as _e,a as qe}from"./use-timeout.359578be.js";import{j as we,h as K,f as Se,b as ke,e as k,c as $e}from"./QBtn.6e655cb3.js";function Te(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((i,r)=>{const l=parseFloat(i);l&&(n[r]=l)}),n}var Ie=le({name:"touch-swipe",beforeMount(e,{value:n,arg:i,modifiers:r}){if(r.mouse!==!0&&Q.has.touch!==!0)return;const l=r.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:Te(i),direction:ne(r),noop:se,mouseStart(s){ae(s,t)&&ue(s)&&(R(t,"temp",[[document,"mousemove","move",`notPassive${l}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(s,!0))},touchStart(s){if(ae(s,t)){const o=s.target;R(t,"temp",[[o,"touchmove","move","notPassiveCapture"],[o,"touchcancel","end","notPassiveCapture"],[o,"touchend","end","notPassiveCapture"]]),t.start(s)}},start(s,o){Q.is.firefox===!0&&U(e,!0);const f=W(s);t.event={x:f.left,y:f.top,time:Date.now(),mouse:o===!0,dir:!1}},move(s){if(t.event===void 0)return;if(t.event.dir!==!1){Y(s);return}const o=Date.now()-t.event.time;if(o===0)return;const f=W(s),y=f.left-t.event.x,u=Math.abs(y),g=f.top-t.event.y,m=Math.abs(g);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&m<t.sensitivity[1]){t.end(s);return}}else if(window.getSelection().toString()!==""){t.end(s);return}else if(u<t.sensitivity[2]&&m<t.sensitivity[2])return;const b=u/o,C=m/o;t.direction.vertical===!0&&u<m&&u<100&&C>t.sensitivity[0]&&(t.event.dir=g<0?"up":"down"),t.direction.horizontal===!0&&u>m&&m<100&&b>t.sensitivity[0]&&(t.event.dir=y<0?"left":"right"),t.direction.up===!0&&u<m&&g<0&&u<100&&C>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<m&&g>0&&u<100&&C>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>m&&y<0&&m<100&&b>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>m&&y>0&&m<100&&b>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(Y(s),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ce(),t.styleCleanup=$=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const P=()=>{document.body.classList.remove("no-pointer-events--children")};$===!0?setTimeout(P,50):P()}),t.handler({evt:s,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:o,distance:{x:u,y:m}})):t.end(s)},end(s){t.event!==void 0&&(X(t,"temp"),Q.is.firefox===!0&&U(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),s!==void 0&&t.event.dir!==!1&&Y(s),t.event=void 0)}};if(e.__qtouchswipe=t,r.mouse===!0){const s=r.mouseCapture===!0||r.mousecapture===!0?"Capture":"";R(t,"main",[[e,"mousedown","mouseStart",`passive${s}`]])}Q.has.touch===!0&&R(t,"main",[[e,"touchstart","touchStart",`passive${r.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const i=e.__qtouchswipe;i!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&i.end(),i.handler=n.value),i.direction=ne(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(X(n,"main"),X(n,"temp"),Q.is.firefox===!0&&U(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function Be(){let e=Object.create(null);return{getCache:(n,i)=>e[n]===void 0?e[n]=typeof i=="function"?i():i:e[n],setCache(n,i){e[n]=i},hasCache(n){return Object.hasOwnProperty.call(e,n)},clearCache(n){n!==void 0?delete e[n]:e=Object.create(null)}}}const Ae={name:{required:!0},disable:Boolean},oe={setup(e,{slots:n}){return()=>p("div",{class:"q-panel scroll",role:"tabpanel"},K(n.default))}},Fe={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Ne=["update:modelValue","beforeTransition","transition"];function Ve(){const{props:e,emit:n,proxy:i}=H(),{getCache:r}=Be(),{registerTimeout:l}=Pe();let t,s;const o=z(null),f=z(null);function y(a){const c=e.vertical===!0?"up":"left";_((i.$q.lang.rtl===!0?-1:1)*(a.direction===c?1:-1))}const u=v(()=>[[Ie,y,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),g=v(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),m=v(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),b=v(()=>`--q-transition-duration: ${e.transitionDuration}ms`),C=v(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),$=v(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),P=v(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);A(()=>e.modelValue,(a,c)=>{const x=w(a)===!0?V(a):-1;s!==!0&&T(x===-1?0:x<V(c)?-1:1),o.value!==x&&(o.value=x,n("beforeTransition",a,c),l(()=>{n("transition",a,c)},e.transitionDuration))});function F(){_(1)}function L(){_(-1)}function N(a){n("update:modelValue",a)}function w(a){return a!=null&&a!==""}function V(a){return t.findIndex(c=>c.props.name===a&&c.props.disable!==""&&c.props.disable!==!0)}function E(){return t.filter(a=>a.props.disable!==""&&a.props.disable!==!0)}function T(a){const c=a!==0&&e.animated===!0&&o.value!==-1?"q-transition--"+(a===-1?g.value:m.value):null;f.value!==c&&(f.value=c)}function _(a,c=o.value){let x=c+a;for(;x!==-1&&x<t.length;){const O=t[x];if(O!==void 0&&O.props.disable!==""&&O.props.disable!==!0){T(a),s=!0,n("update:modelValue",O.props.name),setTimeout(()=>{s=!1});return}x+=a}e.infinite===!0&&t.length!==0&&c!==-1&&c!==t.length&&_(a,a===-1?t.length:-1)}function M(){const a=V(e.modelValue);return o.value!==a&&(o.value=a),!0}function d(){const a=w(e.modelValue)===!0&&M()&&t[o.value];return e.keepAlive===!0?[p(de,$.value,[p(P.value===!0?r(C.value,()=>({...oe,name:C.value})):oe,{key:C.value,style:b.value},()=>a)])]:[p("div",{class:"q-panel scroll",style:b.value,key:C.value,role:"tabpanel"},[a])]}function S(){if(t.length!==0)return e.animated===!0?[p(ce,{name:f.value},d)]:d()}function D(a){return t=we(K(a.default,[])).filter(c=>c.props!==null&&c.props.slot===void 0&&w(c.props.name)===!0),t.length}function h(){return t}return Object.assign(i,{next:F,previous:L,goTo:N}),{panelIndex:o,panelDirectives:u,updatePanelsList:D,updatePanelIndex:M,getPanelContent:S,getEnabledPanels:E,getPanels:h,isValidPanelName:w,keepAliveProps:$,needsUniqueKeepAliveWrapper:P,goToPanelByOffset:_,goToPanel:N,nextPanel:F,previousPanel:L}}var Ee=G({name:"QCarouselSlide",props:{...Ae,imgSrc:String},setup(e,{slots:n}){const i=v(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>p("div",{class:"q-carousel__slide",style:i.value},K(n.default))}});let j=0;const De={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Qe=["update:fullscreen","fullscreen"];function je(){const e=H(),{props:n,emit:i,proxy:r}=e;let l,t,s;const o=z(!1);Se(e)===!0&&A(()=>r.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&u()}),A(()=>n.fullscreen,g=>{o.value!==g&&f()}),A(o,g=>{i("update:fullscreen",g),i("fullscreen",g)});function f(){o.value===!0?u():y()}function y(){o.value!==!0&&(o.value=!0,s=r.$el.parentNode,s.replaceChild(t,r.$el),document.body.appendChild(r.$el),j++,j===1&&document.body.classList.add("q-body--fullscreen-mixin"),l={handler:u},Z.add(l))}function u(){o.value===!0&&(l!==void 0&&(Z.remove(l),l=void 0),s.replaceChild(r.$el,t),o.value=!1,j=Math.max(0,j-1),j===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),r.$el.scrollIntoView!==void 0&&setTimeout(()=>{r.$el.scrollIntoView()})))}return ve(()=>{t=document.createElement("span")}),re(()=>{n.fullscreen===!0&&y()}),ie(u),Object.assign(r,{toggleFullscreen:f,setFullscreen:y,exitFullscreen:u}),{inFullscreen:o,toggleFullscreen:f}}const Le=["top","right","bottom","left"],Me=["regular","flat","outline","push","unelevated"];var Oe=G({name:"QCarousel",props:{..._e,...Fe,...De,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Me.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Le.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Qe,...Ne],setup(e,{slots:n}){const{proxy:{$q:i}}=H(),r=qe(e,i);let l=null,t;const{updatePanelsList:s,getPanelContent:o,panelDirectives:f,goToPanel:y,previousPanel:u,nextPanel:g,getEnabledPanels:m,panelIndex:b}=Ve(),{inFullscreen:C}=je(),$=v(()=>C.value!==!0&&e.height!==void 0?{height:e.height}:{}),P=v(()=>e.vertical===!0?"vertical":"horizontal"),F=v(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),L=v(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(C.value===!0?" fullscreen":"")+(r.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${P.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${F.value}`:"")),N=v(()=>{const d=[e.prevIcon||i.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||i.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&i.lang.rtl===!0?d.reverse():d}),w=v(()=>e.navigationIcon||i.iconSet.carousel.navigationIcon),V=v(()=>e.navigationActiveIcon||w.value),E=v(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));A(()=>e.modelValue,()=>{e.autoplay&&T()}),A(()=>e.autoplay,d=>{d?T():l!==null&&(clearTimeout(l),l=null)});function T(){const d=fe(e.autoplay)===!0?Math.abs(e.autoplay):5e3;l!==null&&clearTimeout(l),l=setTimeout(()=>{l=null,d>=0?g():u()},d)}re(()=>{e.autoplay&&T()}),ie(()=>{l!==null&&clearTimeout(l)});function _(d,S){return p("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${d} q-carousel__navigation--${F.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[p("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},m().map(S))])}function M(){const d=[];if(e.navigation===!0){const S=n["navigation-icon"]!==void 0?n["navigation-icon"]:h=>p(k,{key:"nav"+h.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${h.active===!0?"":"in"}active`,...h.btnProps,onClick:h.onClick}),D=t-1;d.push(_("buttons",(h,a)=>{const c=h.props.name,x=b.value===a;return S({index:a,maxIndex:D,name:c,active:x,btnProps:{icon:x===!0?V.value:w.value,size:"sm",...E.value},onClick:()=>{y(c)}})}))}else if(e.thumbnails===!0){const S=e.controlColor!==void 0?` text-${e.controlColor}`:"";d.push(_("thumbnails",D=>{const h=D.props;return p("img",{key:"tmb#"+h.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${h.name===e.modelValue?"":"in"}active`+S,src:h.imgSrc||h["img-src"],onClick:()=>{y(h.name)}})}))}return e.arrows===!0&&b.value>=0&&((e.infinite===!0||b.value>0)&&d.push(p("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${P.value} absolute flex flex-center`},[p(k,{icon:N.value[0],...E.value,onClick:u})])),(e.infinite===!0||b.value<t-1)&&d.push(p("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${P.value} absolute flex flex-center`},[p(k,{icon:N.value[1],...E.value,onClick:g})]))),$e(n.control,d)}return()=>(t=s(n),p("div",{class:L.value,style:$.value},[ke("div",{class:"q-carousel__slides-container"},o(),"sl-cont",e.swipeable,()=>f.value)].concat(M())))}}),Re=G({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:n}){const{proxy:{$q:i}}=H(),r=J(me,I);if(r===I)return console.error("QPage needs to be a deep child of QLayout"),I;if(J(pe,I)===I)return console.error("QPage needs to be child of QPageContainer"),I;const t=v(()=>{const o=(r.header.space===!0?r.header.size:0)+(r.footer.space===!0?r.footer.size:0);if(typeof e.styleFn=="function"){const f=r.isContainer.value===!0?r.containerHeight.value:i.screen.height;return e.styleFn(o,f)}return{minHeight:r.isContainer.value===!0?r.containerHeight.value-o+"px":i.screen.height===0?o!==0?`calc(100vh - ${o}px)`:"100vh":i.screen.height-o+"px"}}),s=v(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>p("main",{class:s.value,style:t.value},K(n.default))}}),ze="/assets/boat.47d1fcff.png",He="/assets/40910.d4097d53.jpg";const Ke={class:"q-pa-md",style:{width:"400px"}},We={__name:"IndexPage",setup(e){const n=z(2),i=[{id:1,name:"slide1",src:"~assets/40910.jpg",price:2e3},{id:2,name:"slide2",src:"~assets/boat.png",price:4e3},{id:3,name:"slide3",src:"~assets/40910.jpg",price:1e4}];return(r,l)=>(ee(),ge(Re,{class:"flex flex-center"},{default:te(()=>[l[1]||(l[1]=q("div",null,[q("img",{alt:"Quasar logo",src:ze,style:{width:"200px"}})],-1)),q("div",Ke,[B(Oe,{animated:"",modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=t=>n.value=t),arrows:"",navigation:"",infinite:""},{default:te(()=>[(ee(),he(xe,null,ye(i,t=>B(Ee,{key:t.id,name:t.name,"img-src":t.src},null,8,["name","img-src"])),64))]),_:1},8,["modelValue"])]),l[2]||(l[2]=q("div",null,[q("br"),be(" momarine ")],-1)),l[3]||(l[3]=q("div",{class:"text-center full-width"}," \u82A6\u5C4B\u5E02\u65B0\u6D5C\u753A\uFF12\u756A\uFF12-203\u53F7 \u3088\u308D\u3057\u304F\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059 ",-1)),B(k,{class:"q-ma-xl",label:"\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u306D",color:"red",onClick:r.push},null,8,["onClick"]),B(k,{class:"q-ma-xl",round:"",color:"amber",glossy:"","text-color":"black",icon:"layers_clear"}),B(k,{onClick:r.push2,class:"q-ma-xl glossy",rounded:"",color:"deep-orange",label:"Glossy Rounded"},null,8,["onClick"]),B(k,{class:"q-ma-xl",href:"https://momarine-c.jp/",target:"_blank",label:"\u30DB\u30FC\u30E0\u30DA\u30FC\u30B8\u30FC",color:"purple"}),l[4]||(l[4]=q("div",null,[q("img",{alt:"Quasar logo",src:He,style:{width:"300px"}})],-1))]),_:1}))}};export{We as default};