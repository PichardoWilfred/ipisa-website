import{o as n,c as o,a as e,t as s,b as c,F as i,i as d,d as x,k as p,j as u}from"./entry.1631774a.js";import{_ as h}from"./nuxt-img.4d614009.js";const b={class:"header relative flex items-center justify-between h-[40px]"},f={class:"flex items-center font-inter text-black-600"},g=e("div",{class:"author pe-5 me-5 border-r-2 border-r-blue-100"}," Daniela Vicente ",-1),v={class:""},k={class:"share absolute flex items-center content-center justify-center bg-white hover:bg-black-100 rounded-full w-[45px] h-[45px] right-[-20px] bottom-[-20px]"},w={class:"h-[400px] min-[1500px]:h-[250px] rounded-[0.5rem]"},y={class:"news-title text-black font-bold min-[800px]:leading-7 text-[1.25rem] min-[800px]:text-[1.4rem] min-[1200px]:text-[1.6rem] mt-4 mb-1 truncate"},V={class:"header"},j={class:"flex items-center font-inter text-black-600"},B={class:"author pe-5 me-5 border-r-2 border-r-blue-100"},N=e("time",{class:""}," 1 minutos leyendo ",-1),z={class:"see-more text-black-500 text-[16px] min-[800px]:text-md font-[500] mt-6 mx-auto"},A=e("b",{class:"first font-semibold"},"Ver",-1),D=e("b",{class:"second font-semibold"},"más",-1),F={__name:"PortraitArticle",props:["item"],setup(t){return(P,$)=>{const a=p,r=h,l=u;return n(),o(i,null,[e("div",b,[e("div",f,[g,e("time",v,s(t.item.date),1)]),e("button",k,[c(a,{name:"home/news/share",class:"phone-icon-color text-[18px] translate-x-[-1px] translate-y-[2px] text-center",filled:""})])]),e("div",w,[c(r,{class:"wallpaper w-full h-full rounded-lg object-cover",loading:"lazy",format:"webp",sizes:"600px lg:700px",densities:"x1 x2",src:`${t.item.img}`},null,8,["src"])]),e("h2",y,s(t.item.title),1),(n(!0),o(i,null,d(t.item.description,(m,_)=>(n(),o("p",{key:_,class:"text-black-700 font-medium min-[800px]:text-[15px] min-[1200px]:text-[1rem] leading-6 mb-2"},s(m),1))),128)),e("div",V,[e("div",j,[e("span",B,s(t.item.topic),1),N])]),e("button",z,[A,x(),D,c(l,{name:"fe:arrow-down",class:"ms-2 text-[1.6rem] transition-all",filled:""})])],64)}}},L=F;export{L as _};
