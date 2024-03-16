<template>
        <div class="header relative flex items-center justify-between h-[40px]">
            <div class="flex items-center font-inter text-black-600">
                <div class="author pe-5 me-5 border-r-2 border-r-blue-100 ">
                    Daniela Vicente
                </div>
                <time class="">
                    {{ item.date }}
                </time>
            </div>
            <!-- flex  -->
            <button class="share absolute flex items-center content-center justify-center bg-white hover:bg-black-100 rounded-full w-[45px] h-[45px] right-[-20px] bottom-[-20px]">
                <nuxt-icon name="home/news/share" class="phone-icon-color text-[18px] translate-x-[-1px] translate-y-[2px] text-center" filled />
            </button>
        </div>
        <div class="h-[400px] min-[1500px]:h-[250px] rounded-[0.5rem]">
            <nuxt-img class="wallpaper w-full h-full rounded-lg object-cover" loading="lazy"
            format="webp" sizes="600px lg:700px" densities="x1 x2" :src="`${item.img}`" />
        </div>
        <h2 class="news-title text-black font-bold min-[800px]:leading-7 text-[1.25rem] min-[800px]:text-[1.4rem] min-[1200px]:text-[1.6rem] mt-4 mb-1 truncate"> 
            {{ item.title }} 
        </h2>
        <p v-for="(paragraph, index) in item.description" :key="index"
        class="text-black-700 font-medium min-[800px]:text-[15px] min-[1200px]:text-[1rem] leading-6 mb-2"> 
            {{ paragraph }}
        </p>
        <div class="header">
            <div class="flex items-center font-inter text-black-600">
                <span class="author pe-5 me-5 border-r-2 border-r-blue-100">
                    {{ item.topic }}
                </span>
                <time class="">
                    1 minutos leyendo
                </time>
            </div>
        </div>
        <button class="see-more text-black-500 text-[16px] min-[800px]:text-md font-[500] mt-6 mx-auto">
            <b class="first font-semibold">Ver</b> <b class="second font-semibold">más</b> 
            <Icon name="fe:arrow-down" class="ms-2 text-[1.6rem] transition-all" filled />
        </button>
</template>
<style>
.news .header :is(time, span.author) {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.35rem;
}
.news .header button.options {
    transition-duration: 150ms;
}
.news p {
    width: 100%;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    display: -webkit-box;
}
.news cite {
    @apply font-semibold text-gray-300 xl:text-[1rem]
}
.news button.see-more :is(b, span::deep(svg path)) {
    @apply transition-all;
}
/* hover */
.news:hover p {
    color: var(--black);
}

.news:hover button.see-more b.first {
    color: var(--blue);
}
.news:hover button.see-more b.second {
    color: var(--orange-300);
}
.news:hover button.see-more svg {
    animation: bounce-arrow 950ms ease-in-out forwards infinite;
}
@keyframes bounce-arrow {
    0% {
        transform: translateY(0px);
    } 50% {        
        transform: translateY(-6px);
    } 100% {
        transform: translateY(0px);
    }
}
</style>
<script setup>
// { title, img, description, highlight, topic, date, id } title', 'img', 'description', 'highlight', 'topic', 'date', 'id
defineProps(['item'])
</script>