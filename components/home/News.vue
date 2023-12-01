<template>
    <section class="relative w-full max-w-[1680px] mx-auto px-[5vw] pt-[6rem] mb-[2rem] z-20" id="news">
        <h2 
        class="flex items-center text-black font-raleway text-[1.6rem] sm:text-[2.1rem] lg:text-[3.8rem] cursor-pointer mb-2 lg:mb-4 transition-all">
            <b class="me-2 lg:me-5 text-blue">Últimas</b> <b class="text-orange-300">Noticias</b>
        </h2>
        <div class="news-feed">
            <div class="news" v-for="({title, img, description, highlight, date}, index) in news_feed" :key="index">
                <div class="header">
                    <time>
                        {{ date }}
                    </time>
                    <button class="options">
                        <nuxt-icon name="home/news/options" filled class="text-[1.8rem]"/>
                    </button>
                </div>
                <nuxt-img :src="`modules/home/news/${img}`" alt="titulo" srcset="" />
                <h2> {{ title }} </h2>
                <p> {{ description }} </p>
                <button class="see-more">
                    <b class="first">Ver</b> <b class="second">más</b> <Icon name="fe:arrow-down" class="text-[1.6rem]" filled />
                </button>
            </div>
        </div>
    </section>
</template>
<script setup>
const news_feed = ref([
    {
        img: 'new-1.png',
        title: 'Inauguración del Nuevo Laboratorio de Tecnología',
        description: 'El IPISA se complace en anunciar la apertura de su moderno laboratorio de tecnología, equipado con tecnología de vanguardia para potenciar la formación de nuestros estudiantes.',
        highlight: false,
        date: '3 de Enero 2023'
    },
    {
        img: 'new-2.png',
        title: 'Excelentes Resultados en la Competencia Regional de Electrónica',
        description: 'Nuestros talentosos estudiantes de electrónica lograron destacarse en la competencia regional, demostrando su habilidad y conocimiento en esta disciplina.',
        highlight: false,
        date: '15 de Febrero 2023'
    },
    {
        img: 'new-3.png',
        title: 'Nuevo Taller de Robótica para la Formación de Futuros Ingenieros',
        description: 'El IPISA continúa ampliando sus recursos educativos con la incorporación de un taller de robótica de última generación, preparando a nuestros estudiantes para carreras en ingeniería.',
        highlight: false,
        date: '7 de Abril 2023'
    },
]);
</script>
<style scoped>
.news {
    @apply flex flex-col justify-start font-raleway cursor-pointer;
}
.news .header {
    @apply relative flex items-center justify-between h-[30px];
}
.news .header time {
    @apply font-normal text-[1rem] leading-3;
    color:  var(--separator);
}
.news .header button.options {
    @apply absolute right-0 flex items-center content-center justify-center hover:bg-white-100 rounded-full h-[38px] w-[38px] transition-all;
    transition-duration: 150ms;
}
.news img {
    @apply my-3 min-[1200px]:my-3 w-full h-[320px] object-cover rounded-lg;
}
.news h2 {
    @apply mb-1 text-black-400 font-bold min-[800px]:leading-9 text-[1.25rem] min-[800px]:text-[1.4rem] min-[1200px]:text-[1.6rem] truncate;
}
.news p {
    @apply text-black min-[800px]:text-[15px] min-[1200px]:text-[1rem] leading-6 mb-2;
    width: 100%;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    display: -webkit-box;
}
.news cite {
    @apply font-semibold text-gray-300 xl:text-[1rem]
}
.news button.see-more {
    @apply text-[16px] min-[800px]:text-xl font-[500] mt-auto;
    color:  var(--separator);
}
.news button.see-more :is(b, span::deep(svg path)) {
    @apply transition-all;
}
/* hover */
.news:hover p {
    @apply text-black;
}
.news:hover button.see-more b.first {
    @apply text-blue;
}
.news:hover button.see-more b.second {
    @apply text-orange-300;
}
.news:hover button.see-more svg {
    @apply transition-all;  
}
.news:hover button.see-more svg {
    animation: bounce-arrow 950ms ease-in-out forwards infinite ;
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
/* bounce dot animation on home.css */
@media (max-width: 800px) {
    .news-feed {
        display: grid;
        grid-template-columns: repeat(1, minmax(320px, 1fr));
        gap: 4%;
    }
}
@media (min-width: 800px) {
    .news-feed {
        display: grid;
        grid-template-columns: repeat(2, minmax(320px, 1fr));
        gap: 3%;
    }
}
@media (min-width: 1200px) {
    .news-feed {
        grid-template-columns: repeat(3, minmax(320px, 1fr));
        grid-template-rows: 540px;
        gap: 2%;
    }
}
</style>