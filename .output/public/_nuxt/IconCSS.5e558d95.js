import{I as l,ay as _,az as m,l as o,o as d,c as f,ax as x,_ as S}from"./entry.1631774a.js";const z=l({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(r){const n=r;_(e=>({"17e81e26":u.value}));const s=m(),p=o(()=>{var e;return((((e=s.nuxtIcon)==null?void 0:e.aliases)||{})[n.name]||n.name).replace(/^i-/,"")}),u=o(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),a=o(()=>{var t,c,i;if(!n.size&&typeof((t=s.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((c=s.nuxtIcon)!=null&&c.size))return;const e=n.size||((i=s.nuxtIcon)==null?void 0:i.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,t)=>(d(),f("span",{style:x({width:a.value,height:a.value})},null,4))}});const v=S(z,[["__scopeId","data-v-2717c442"]]);export{v as default};
