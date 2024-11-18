"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[384],{7301:function(e,t,n){n.d(t,{I:function(){return o}});var r=n(5487);function o(e,t,n){var o;if("string"==typeof e){let i=document;t&&((0,r.k)(!!t.current,"Scope provided, but no element detected."),i=t.current),n?(null!==(o=n[e])&&void 0!==o||(n[e]=i.querySelectorAll(e)),e=n[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}},6893:function(e,t,n){n.d(t,{Y:function(){return l}});var r=n(7294),o=n(7301);let i={some:0,all:1};function l(e,{root:t,margin:n,amount:l,once:s=!1}={}){let[f,c]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!e.current||s&&f)return;let r={root:t&&t.current||void 0,margin:n,amount:l};return function(e,t,{root:n,margin:r,amount:l="some"}={}){let s=(0,o.I)(e),f=new WeakMap,c=new IntersectionObserver(e=>{e.forEach(e=>{let n=f.get(e.target);if(!!n!==e.isIntersecting){if(e.isIntersecting){let n=t(e);"function"==typeof n?f.set(e.target,n):c.unobserve(e.target)}else n&&(n(e),f.delete(e.target))}})},{root:n,rootMargin:r,threshold:"number"==typeof l?l:i[l]});return s.forEach(e=>c.observe(e)),()=>c.disconnect()}(e.current,()=>(c(!0),s?void 0:()=>c(!1)),r)},[t,e,n,s,l]),f}},4960:function(e,t,n){n.d(t,{c:function(){return s}});var r=n(7294),o=n(3234),i=n(6014),l=n(6681);function s(e){let t=(0,l.h)(()=>(0,o.BX)(e)),{isStatic:n}=(0,r.useContext)(i._);if(n){let[,n]=(0,r.useState)(e);(0,r.useEffect)(()=>t.on("change",n),[])}return t}},9645:function(e,t,n){let r,o;n.d(t,{v:function(){return I}});var i=n(3234),l=n(6681),s=n(7294),f=n(5487),c=n(7301);let u=new WeakMap;function a({target:e,contentRect:t,borderBoxSize:n}){var r;null===(r=u.get(e))||void 0===r||r.forEach(r=>{r({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function d(e){e.forEach(a)}let g=new Set;var h=n(3967),p=n(3038);let v=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),m=()=>({time:0,x:v(),y:v()}),y={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function w(e,t,n,r){let o=n[t],{length:i,position:l}=y[t],s=o.current,f=n.time;o.current=e["scroll"+l],o.scrollLength=e["scroll"+i]-e["client"+i],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=(0,h.Y)(0,o.scrollLength,o.current);let c=r-f;o.velocity=c>50?0:(0,p.R)(o.current-s,c)}let E={All:[[0,0],[1,1]]},W={start:0,center:.5,end:1};function L(e,t,n=0){let r=0;if(void 0!==W[e]&&(e=W[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(r=t*e),n+r}let x=[0,0];var b=n(1884),B=n(533);let S={x:0,y:0};var k=n(5368);let O=new WeakMap,z=new WeakMap,H=new WeakMap,N=e=>e===document.documentElement?window:e;var X=n(8868);function Y(e,t){(0,f.K)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let A=()=>({scrollX:(0,i.BX)(0),scrollY:(0,i.BX)(0),scrollXProgress:(0,i.BX)(0),scrollYProgress:(0,i.BX)(0)});function I({container:e,target:t,layoutEffect:n=!0,...i}={}){let f=(0,l.h)(A);return(n?X.L:s.useEffect)(()=>(Y("target",t),Y("container",e),function(e,{container:t=document.documentElement,...n}={}){let i=H.get(t);i||(i=new Set,H.set(t,i));let l=function(e,t,n,r={}){return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,r.target,n),update:t=>{w(e,"x",n,t),w(e,"y",n,t),n.time=t,(r.offset||r.target)&&function(e,t,n){let{offset:r=E.All}=n,{target:o=e,axis:i="y"}=n,l="y"===i?"height":"width",s=o!==e?function(e,t){let n={x:0,y:0},r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){let e=r.getBoundingClientRect(),t=(r=r.parentElement).getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else if(r instanceof SVGGraphicsElement){let{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let o=null,i=r.parentNode;for(;!o;)"svg"===i.tagName&&(o=i),i=r.parentNode;r=o}else break;return n}(o,e):S,f=o===e?{width:e.scrollWidth,height:e.scrollHeight}:"getBBox"in o&&"svg"!==o.tagName?o.getBBox():{width:o.clientWidth,height:o.clientHeight},c={width:e.clientWidth,height:e.clientHeight};t[i].offset.length=0;let u=!t[i].interpolate,a=r.length;for(let e=0;e<a;e++){let n=function(e,t,n,r){let o=Array.isArray(e)?e:x,i=0;return"number"==typeof e?o=[e,e]:"string"==typeof e&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,W[e]?e:"0"]),L(o[0],n,r)-L(o[1],t)}(r[e],c[l],f[l],s[i]);u||n===t[i].interpolatorOffsets[e]||(u=!0),t[i].offset[e]=n}u&&(t[i].interpolate=(0,b.s)(t[i].offset,(0,B.Y)(r)),t[i].interpolatorOffsets=[...t[i].offset]),t[i].progress=t[i].interpolate(t[i].current)}(e,n,r)},notify:()=>t(n)}}(t,e,m(),n);if(i.add(l),!O.has(t)){let e=()=>{for(let e of i)e.measure()},n=()=>{for(let e of i)e.update(k.frameData.timestamp)},l=()=>{for(let e of i)e.notify()},s=()=>{k.Wi.read(e,!1,!0),k.Wi.read(n,!1,!0),k.Wi.update(l,!1,!0)};O.set(t,s);let f=N(t);window.addEventListener("resize",s,{passive:!0}),t!==document.documentElement&&z.set(t,"function"==typeof t?(g.add(t),o||(o=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};g.forEach(e=>e(t))},window.addEventListener("resize",o)),()=>{g.delete(t),!g.size&&o&&(o=void 0)}):function(e,t){r||"undefined"==typeof ResizeObserver||(r=new ResizeObserver(d));let n=(0,c.I)(e);return n.forEach(e=>{let n=u.get(e);n||(n=new Set,u.set(e,n)),n.add(t),null==r||r.observe(e)}),()=>{n.forEach(e=>{let n=u.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==r||r.unobserve(e)})}}(t,s)),f.addEventListener("scroll",s,{passive:!0})}let s=O.get(t);return k.Wi.read(s,!1,!0),()=>{var e;(0,k.Pn)(s);let n=H.get(t);if(!n||(n.delete(l),n.size))return;let r=O.get(t);O.delete(t),r&&(N(t).removeEventListener("scroll",r),null===(e=z.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}(({x:e,y:t})=>{f.scrollX.set(e.current),f.scrollXProgress.set(e.progress),f.scrollY.set(t.current),f.scrollYProgress.set(t.progress)},{...i,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[e,t,JSON.stringify(i.offset)]),f}},4002:function(e,t,n){n.d(t,{q:function(){return u}});var r=n(7294),o=n(406),i=n(4960),l=n(6014),s=n(8868),f=n(3189),c=n(5368);function u(e,t={}){let{isStatic:n}=(0,r.useContext)(l._),u=(0,r.useRef)(null),a=(0,i.c)((0,o.i)(e)?e.get():e),d=()=>{u.current&&u.current.stop()};return(0,r.useInsertionEffect)(()=>a.attach((e,r)=>{if(n)return r(e);let o=u.current;return o&&0===o.time&&o.sample(c.frameData.delta),d(),u.current=(0,f.y)({keyframes:[a.get(),e],velocity:a.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:r}),a.get()},d),[JSON.stringify(t)]),(0,s.L)(()=>{if((0,o.i)(e))return e.on("change",e=>a.set(parseFloat(e)))},[a]),a}}}]);