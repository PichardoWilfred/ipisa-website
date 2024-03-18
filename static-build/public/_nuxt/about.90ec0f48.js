import{_ as K}from"./portrait-component.cdfe7f15.js";import{_ as Q}from"./PortraitArticle.c91cee9e.js";import{_ as X,B as Z,r,q as ee,aA as te,s as oe,c as n,b as y,u as t,a as e,Y as V,v as D,F as c,i as v,w as E,h as g,n as F,A as H,T as ne,o,d as P,t as u,aB as ae,p as se,f as le,e as ie,j as re}from"./entry.103c70bd.js";import ce from"./ContentList.8028fe93.js";import{o as ue}from"./index.49dc4c1d.js";import{v as _e}from"./index.40e44fb1.js";import"./nuxt-img.a7876981.js";import"./vue.f36acd1f.838757f3.js";import"./_commonjsHelpers.725317a4.js";import"./ContentQuery.8cab3c50.js";import"./query.886f6ee4.js";import"./preview.dd2190ff.js";const N=x=>(se("data-v-2c2faa02"),x=x(),le(),x),de={class:"about-article info flex max-xl:flex-col justify-center px-4 lg:px-24 pt-[4rem] mb-28"},me={class:"title"},pe=N(()=>e("span",{class:"text-blue"},"Página",-1)),ve=N(()=>e("span",{class:"text-orange"},"vacía",-1)),he={class:"lg:me-10 font-raleway xl:min-w-[640px] xl:max-w-[790px] min-h-[80vh]"},fe={class:"text-black text-[1rem] lg:text-lg font-medium min-h-[25vh] xl:min-h-[30vh] mb-[1.8rem] max-lg:mb-[3.8rem]"},be={class:"lg:w-[360px] relative"},ge={class:"navigation"},xe={class:"font-raleway font-bold text-black text-xl"},we=["onClick"],ke={class:"alphabet me-1"},ye={class:"text-black hover:underline cursor-pointer"},Ce=N(()=>e("h1",{class:"font-raleway font-[700] text-[28px] lg:text-[36px] text-black-400 mt-3 lg:mt-20 mb-4"}," Noticias ",-1)),Ie={class:"news-feed"},qe={class:"font-raleway font-bold text-black text-xl mb-2"},Be=["onClick"],Se={class:"text-black hover:underline"},Te={class:"rounded-xl bg-black-500 h-[3px] w-full my-1"},Le={class:"navigation scrolled"},$e={class:"font-raleway font-bold text-black text-xl"},Ee=["onClick"],Ne={class:"text-black hover:underline cursor-pointer"},ze={class:"fixed top-0 left-0 h-screen w-screen bg-[#09090970] z-40"},Ae={__name:"about",setup(x){const R=Z(),w=r(R.about_navigation),W={path:"/noticias",where:[{visibility:"portrait"}],limit:2},z=r(0),C=r(0),I=r(null);function q(a,l=0){const f=window.matchMedia("(max-width: 678px)").matches;s.value=null,s.value=document.querySelector(`#anchor-${a}`);const i=s.value.getBoundingClientRect(),T=i.top>=0&&i.left>=0&&i.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&i.right<=(window.innerWidth||document.documentElement.clientWidth);if(s.value.classList.contains("highlight")&&s.value.classList.remove("highlight"),T){C.value=setTimeout(()=>{s.value.classList.add("highlight")},180);return}z.value=setTimeout(()=>{if(!s.value)return;const L=parseInt(s.value.dataset.offset)||0,$=s.value.getBoundingClientRect().top+window.pageYOffset-(f?100:180)+L;window.scrollTo({top:$,behavior:"smooth"})},l)}const A=r(null),h=r(!1),B=r(!1),O=r(!1),k=r(!1),s=r(null),Y=([a])=>{B.value=a.isIntersecting,a.isIntersecting||(O.value=!0,k.value=!1)};ue(A,j);function j(a,l=!1){h.value&&(h.value=!1),l&&q(a,120)}const S=r([..."abcdefghijklmnopqrstuvwxyz"].map(a=>a));ee(()=>{function a(l,f){l.forEach(i=>{s.value&&i.target.id===s.value.id&&(C.value=setTimeout(()=>{s.value.classList.add("highlight")},180))})}I.value=new IntersectionObserver(a),w.value.map(({list:l})=>{l.map(({anchor:f})=>{const i=document.querySelector(`#anchor-${f}`);i&&I.value.observe(i)})})});const{picture:U,picture_name:G,wallpaper_phrase:J}=te();return oe(()=>{I.value.disconnect(),clearTimeout(z.value),clearTimeout(C.value)}),(a,l)=>{const f=K,i=Q,T=ie,L=ce,$=re;return o(),n(c,null,[y(f,{picture:t(U),picture_name:t(G),wallpaper_phrase:t(J)},null,8,["picture","picture_name","wallpaper_phrase"]),e("main",de,[e("section",null,[e("h1",me,[V(a.$slots,"title",{},()=>[pe,P(),ve],!0)]),e("div",he,[e("p",fe,[V(a.$slots,"content",{},()=>[P(" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse sit unde porro ipsa dolor velit facilis error minima eligendi beatae? Expedita ab doloremque et voluptatum quia facilis qui corporis error? ")],!0)])])]),e("aside",be,[D((o(),n("nav",ge,[(o(!0),n(c,null,v(t(w),({title:_,list:d},b)=>(o(),n("ol",{key:b,class:"text-black mb-2 last:mb-0"},[e("h1",xe,u(_),1),(o(!0),n(c,null,v(d,(m,p)=>(o(),n("li",{key:p,onClick:g(M=>q(m.anchor),["prevent"])},[e("span",ke,u(t(S)[p])+". ",1),e("span",ye,u(m.label),1)],8,we))),128))]))),128))])),[[t(_e),[Y]]]),Ce,e("div",Ie,[y(L,{query:W,path:"/noticias",fields:"title,description,img"},{default:E(({list:_})=>[(o(!0),n(c,null,v(_,(d,b)=>(o(),H(T,{to:"/noticias/"+d.id,class:"news flex flex-col font-raleway cursor-pointer mb-12"},{default:E(()=>[y(i,{item:d},null,8,["item"])]),_:2},1032,["to"]))),256))]),_:1})])])]),e("button",{class:"mobile-navigation xl:hidden fixed bottom-[12px] right-[12px] bg-blue rounded-full text-white-200 font-bold p-2 hover:bg-blue-400 active:bg-blue-400 transition-all",ref:"mobile-navigation",onClick:l[0]||(l[0]=g(()=>{h.value=!0},["prevent"]))},[y($,{name:"mdi-light:layers",size:"48px"})],512),e("nav",{class:F(["navigation mobile",{show:t(h)}]),ref_key:"mobile_navigation",ref:A},[(o(!0),n(c,null,v(t(w),({title:_,list:d},b)=>(o(),n("ol",{key:b},[e("h1",qe,u(_),1),(o(!0),n(c,null,v(d,(m,p)=>(o(),n("li",{key:p,onClick:g(M=>j(m.anchor,!0),["prevent"])},[e("span",Se,u(t(S)[p])+". "+u(m.label),1)],8,Be))),128))]))),128))],2),e("div",{class:F(["scrolled-navigation-container hidden md:flex",{opened:t(k),available:!t(B),not_available:t(B)&&t(O)}])},[e("div",{onClick:l[1]||(l[1]=g(()=>{k.value=!t(k)},["prevent"])),class:"draggable"},[(o(),n(c,null,v([0,0,0],_=>e("div",Te)),64))]),e("nav",Le,[(o(!0),n(c,null,v(t(w),({title:_,list:d},b)=>(o(),n("ol",{key:b},[e("h1",$e,u(_),1),(o(!0),n(c,null,v(d,(m,p)=>(o(),n("li",{key:p,onClick:g(M=>q(m.anchor),["prevent"])},[e("span",Ne,u(t(S)[p])+". "+u(m.label),1)],8,Ee))),128))]))),128))])],2),(o(),H(ne,{name:"fade",mode:"out-in",key:t(h)},{default:E(()=>[D(e("div",ze,null,512),[[ae,t(h)]])]),_:1}))],64)}}},Ge=X(Ae,[["__scopeId","data-v-2c2faa02"]]);export{Ge as default};
