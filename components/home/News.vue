<template>
    <section class="relative w-full max-w-[1680px] mx-auto px-[5vw] pt-[6rem] mb-[8rem] z-20" id="news">
        <h2 class="flex items-center text-black font-raleway text-[2.2rem] lg:text-[3.8rem] cursor-pointer mb-2 lg:mb-4 transition-all">
            <nuxt-link to="/noticias">
                <b class="me-2 lg:me-5 text-blue">Últimas</b><b class="text-orange-300">Noticias</b>
            </nuxt-link>
        </h2>
        <div class="news-feed">
            <div class="news" v-for="({title, img, description, highlight, date}, index) in news_feed" :key="index">
                <div class="header">
                    <div class="flex items-center font-inter">
                        <author class="pe-5 me-5 border-r-2 border-r-blue-100">
                            Daniela Vicente
                        </author>
                        <time class="">
                            {{ date }}
                        </time>
                    </div>
                    <button class="options">
                        <nuxt-icon name="home/news/options" filled class="text-[1.8rem]"/>
                    </button>
                </div>
                <div class="bg-blue-100 h-[250px] rounded-[0.5rem]" />
                <h2> {{ title }} </h2>
                <p> {{ description }} </p>
                <div class="header">
                    <div class="flex items-center font-inter">
                        <author class="pe-5 me-5 border-r-2 border-r-blue-100">
                            Institucional
                        </author>
                        <time class="">
                            {{ index + 1 }} minutos leyendo
                        </time>
                    </div>
                    <button class="options">
                        <nuxt-icon name="home/news/options" filled class="text-[1.8rem]"/>
                    </button>
                </div>
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
    @apply relative flex items-center justify-between h-[40px];
}
.news .header :is(time, author) {
    @apply font-normal text-[1rem] leading-[1.35rem] ;
    color:  var(--separator);
}
.news .header button.options {
    @apply hidden absolute right-0 flex items-center content-center justify-center hover:bg-white-100 rounded-full h-[38px] w-[38px] transition-all;
    transition-duration: 150ms;
}
.news img {
    @apply my-3 min-[1200px]:my-3 w-full h-[320px] object-cover rounded-lg;
}
.news h2 {
    @apply mt-4 mb-1 text-black font-bold min-[800px]:leading-9 text-[1.25rem] min-[800px]:text-[1.4rem] min-[1200px]:text-[1.6rem] truncate;
}
.news p {
    @apply font-medium text-black-700 min-[800px]:text-[15px] min-[1200px]:text-[1rem] leading-6 mb-2;
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
    @apply hidden text-[16px] min-[800px]:text-xl font-[500] mt-auto;
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
        grid-template-rows: 470px;
        gap: 2%;
    }
}
</style>