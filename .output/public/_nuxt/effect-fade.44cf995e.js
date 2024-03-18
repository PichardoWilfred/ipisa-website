import{g as D,b as N,e as j}from"./swiper-vue.f211e3fd.js";function G(y){let{swiper:e,extendParams:t,on:o,emit:u,params:f}=y;e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let d,i,n=f&&f.autoplay?f.autoplay.delay:3e3,s=f&&f.autoplay?f.autoplay.delay:3e3,r,l=new Date().getTime,c,w,g,P,L,v;function O(a){!e||e.destroyed||!e.wrapperEl||a.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",O),E())}const M=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?c=!0:c&&(s=r,c=!1);const a=e.autoplay.paused?r:l+s-new Date().getTime();e.autoplay.timeLeft=a,u("autoplayTimeLeft",a,a/n),i=requestAnimationFrame(()=>{M()})},q=()=>{let a;return e.virtual&&e.params.virtual.enabled?a=e.slides.filter(p=>p.classList.contains("swiper-slide-active"))[0]:a=e.slides[e.activeIndex],a?parseInt(a.getAttribute("data-swiper-autoplay"),10):void 0},b=a=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(i),M();let m=typeof a>"u"?e.params.autoplay.delay:a;n=e.params.autoplay.delay,s=e.params.autoplay.delay;const p=q();!Number.isNaN(p)&&p>0&&typeof a>"u"&&(m=p,n=p,s=p),r=m;const h=e.params.speed,C=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(h,!0,!0),u("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,h,!0,!0),u("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(h,!0,!0),u("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,h,!0,!0),u("autoplay")),e.params.cssMode&&(l=new Date().getTime(),requestAnimationFrame(()=>{b()})))};return m>0?(clearTimeout(d),d=setTimeout(()=>{C()},m)):requestAnimationFrame(()=>{C()}),m},x=()=>{e.autoplay.running=!0,b(),u("autoplayStart")},S=()=>{e.autoplay.running=!1,clearTimeout(d),cancelAnimationFrame(i),u("autoplayStop")},T=(a,m)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(d),a||(v=!0);const p=()=>{u("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",O):E()};if(e.autoplay.paused=!0,m){L&&(r=e.params.autoplay.delay),L=!1,p();return}r=(r||e.params.autoplay.delay)-(new Date().getTime()-l),!(e.isEnd&&r<0&&!e.params.loop)&&(r<0&&(r=0),p())},E=()=>{e.isEnd&&r<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(l=new Date().getTime(),v?(v=!1,b(r)):b(),e.autoplay.paused=!1,u("autoplayResume"))},I=()=>{if(e.destroyed||!e.autoplay.running)return;const a=D();a.visibilityState==="hidden"&&(v=!0,T(!0)),a.visibilityState==="visible"&&E()},A=a=>{a.pointerType==="mouse"&&(v=!0,!(e.animating||e.autoplay.paused)&&T(!0))},F=a=>{a.pointerType==="mouse"&&e.autoplay.paused&&E()},$=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",A),e.el.addEventListener("pointerleave",F))},V=()=>{e.el.removeEventListener("pointerenter",A),e.el.removeEventListener("pointerleave",F)},B=()=>{D().addEventListener("visibilitychange",I)},R=()=>{D().removeEventListener("visibilitychange",I)};o("init",()=>{e.params.autoplay.enabled&&($(),B(),l=new Date().getTime(),x())}),o("destroy",()=>{V(),R(),e.autoplay.running&&S()}),o("beforeTransitionStart",(a,m,p)=>{e.destroyed||!e.autoplay.running||(p||!e.params.autoplay.disableOnInteraction?T(!0,!0):S())}),o("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){S();return}w=!0,g=!1,v=!1,P=setTimeout(()=>{v=!0,g=!0,T(!0)},200)}}),o("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!w)){if(clearTimeout(P),clearTimeout(d),e.params.autoplay.disableOnInteraction){g=!1,w=!1;return}g&&e.params.cssMode&&E(),g=!1,w=!1}}),o("slideChange",()=>{e.destroyed||!e.autoplay.running||(L=!0)}),Object.assign(e.autoplay,{start:x,stop:S,pause:T,resume:E})}function k(y){const{effect:e,swiper:t,on:o,setTranslate:u,setTransition:f,overwriteParams:d,perspective:i,recreateShadows:n,getEffectParams:s}=y;o("beforeInit",()=>{if(t.params.effect!==e)return;t.classNames.push(`${t.params.containerModifierClass}${e}`),i&&i()&&t.classNames.push(`${t.params.containerModifierClass}3d`);const l=d?d():{};Object.assign(t.params,l),Object.assign(t.originalParams,l)}),o("setTranslate",()=>{t.params.effect===e&&u()}),o("setTransition",(l,c)=>{t.params.effect===e&&f(c)}),o("transitionEnd",()=>{if(t.params.effect===e&&n){if(!s||!s().slideShadows)return;t.slides.forEach(l=>{l.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(c=>c.remove())}),n()}});let r;o("virtualUpdate",()=>{t.params.effect===e&&(t.slides.length||(r=!0),requestAnimationFrame(()=>{r&&t.slides&&t.slides.length&&(u(),r=!1)}))})}function U(y,e){const t=N(e);return t!==e&&(t.style.backfaceVisibility="hidden",t.style["-webkit-backface-visibility"]="hidden"),t}function _(y){let{swiper:e,duration:t,transformElements:o,allSlides:u}=y;const{activeIndex:f}=e,d=i=>i.parentElement?i.parentElement:e.slides.filter(s=>s.shadowRoot&&s.shadowRoot===i.parentNode)[0];if(e.params.virtualTranslate&&t!==0){let i=!1,n;u?n=o:n=o.filter(s=>{const r=s.classList.contains("swiper-slide-transform")?d(s):s;return e.getSlideIndex(r)===f}),n.forEach(s=>{j(s,()=>{if(i||!e||e.destroyed)return;i=!0,e.animating=!1;const r=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(r)})})}}function H(y){let{swiper:e,extendParams:t,on:o}=y;t({fadeEffect:{crossFade:!1}}),k({effect:"fade",swiper:e,on:o,setTranslate:()=>{const{slides:d}=e,i=e.params.fadeEffect;for(let n=0;n<d.length;n+=1){const s=e.slides[n];let l=-s.swiperSlideOffset;e.params.virtualTranslate||(l-=e.translate);let c=0;e.isHorizontal()||(c=l,l=0);const w=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(s.progress),0):1+Math.min(Math.max(s.progress,-1),0),g=U(i,s);g.style.opacity=w,g.style.transform=`translate3d(${l}px, ${c}px, 0px)`}},setTransition:d=>{const i=e.slides.map(n=>N(n));i.forEach(n=>{n.style.transitionDuration=`${d}ms`}),_({swiper:e,duration:d,transformElements:i,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}export{G as A,H as E};
