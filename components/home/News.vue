<template>
    <section class="relative w-full max-w-[1680px] mx-auto px-[5vw] pt-[6rem] mb-[2rem] z-20" id="news">
        <h2 class="flex items-center text-black font-raleway text-[2.2rem] lg:text-[3.8rem] cursor-pointer mb-2 lg:mb-4 transition-all">
            <nuxt-link to="/noticias">
                <b class="me-2 lg:me-5 text-blue">Últimas</b><b class="text-orange-300">Noticias</b>
            </nuxt-link>
        </h2>
        <div class="news-feed">
            <NuxtLink :to="'noticias/'+id" class="news flex flex-col justify-start font-raleway cursor-pointer" 
            v-for="({title, img, description, highlight, date, id}, index) in news_feed" :key="index">
                <div class="header relative flex items-center justify-between h-[40px]">
                    <div class="flex items-center font-inter text-black-600">
                        <div class="author pe-5 me-5 border-r-2 border-r-blue-100 ">
                            Daniela Vicente
                        </div>
                        <time class="">
                            {{ date }}
                        </time>
                    </div>
                    <!-- flex  -->
                    <button class="share absolute flex items-center content-center justify-center bg-white hover:bg-black-100 rounded-full w-[45px] h-[45px] right-[-20px] bottom-[-20px]">
                        <nuxt-icon name="home/news/share" class="phone-icon-color text-[18px] translate-x-[-1px] translate-y-[2px] text-center" filled />
                    </button>
                </div>
                <div class="h-[400px] min-[1500px]:h-[250px] rounded-[0.5rem]">
                    <nuxt-img class="wallpaper w-full h-full rounded-lg object-cover" loading="lazy"
                    format="webp" sizes="600px lg:700px" densities="x1 x2" :src="`${img}`" />
                </div>
                <h2 class="news-title text-black font-bold min-[800px]:leading-7 text-[1.25rem] min-[800px]:text-[1.4rem] min-[1200px]:text-[1.6rem] mt-4 mb-1 truncate"> 
                    {{ title }} 
                </h2>
                <p class="font-medium text-black-700 min-[800px]:text-[15px] min-[1200px]:text-[1rem] leading-6 mb-2"> 
                    {{ description }} 
                </p>
                <div class="header">
                    <div class="flex items-center font-inter text-black-600">
                        <span class="author pe-5 me-5 border-r-2 border-r-blue-100">
                            Institucional
                        </span>
                        <time class="">
                            1 minutos leyendo
                        </time>
                    </div>
                </div>
                <button class="see-more text-black-500 text-[16px] min-[800px]:text-md font-[500] mt-6">
                    <b class="first font-semibold">Ver</b> <b class="second font-semibold">más</b> 
                    <Icon name="fe:arrow-down" class="ms-2 text-[1.6rem] transition-all" filled />
                </button>
            </NuxtLink>
        </div>
    </section>
</template>
<script setup>
const formatId = (text) => {
    const formattedText = text.toLowerCase().replace(/ /g, '-'); // Convert to lowercase and replace spaces with hyphens
    const currentTime = new Date().getTime().toString().substr(-7); // Get the current time as an arbitrary 7-digit number
    return `${formattedText}-${currentTime}`; // Return the formatted text followed by the current time
}

const news_feed = ref([
    {
        id: formatId("Proceso de admisión año escolar 2024-2025"),
        title: 'Proceso de admisión año escolar 2024-2025',
        description: 'La admisión y disponibilidad de formularios será limitada. Desde el viernes 01 de marzo hasta el viernes 22 de marzo 2024.',
        img: 'https://a.storyblok.com/f/272924/1080x1080/4d742223d3/admision-2.jpg',
        highlight: false,
        date: '23 de Febrero 2024'
    },
    {
        id: formatId("Feliz día del Estudiante"),
        title: 'Feliz día del Estudiante',
        description: 'La educación es el arma más poderosa para cambiar el mundo. Nelson Mandela. ¡Felicidades a ti estudiante, que realizas una de las labores más nobles: estudiar!.',
        img: 'https://a.storyblok.com/f/272924/1440x960/322d285ce2/dia-del-estudiante-1.jpg',
        highlight: false,
        date: '18 de Febrero 2024'
    },
    {
        id: formatId("Miércoles de Ceniza 2024"),
        title: 'Miércoles de Ceniza 2024',
        description: 'Con la imposición de la ceniza se marca el comienzo de la cuaresma, la cual nos llama a seguir el camino hacia Jesucristo, escuchando la Palabra de Dios, orando, compartiendo con el prójimo y haciendo obras buenas. Nos invita a vivir una serie de actitudes cristianas que nos ayudan a parecernos más a Jesús.',
        img: 'https://a.storyblok.com/f/272924/1440x1440/aee3556b1c/miercoles-de-ceniza-1.jpg',
        highlight: false,
        date: '14 de febrero 2024'
    },
    {
        id: formatId("Dia de San Juan Bosco 2024"),
        title: 'Dia de San Juan Bosco 2024',
        description: 'El día de Don Bosco, muy especial para todas las casas salesianas porque celebramos la fiesta de nuestro fundador, San Juan Bosco.',
        img: 'https://a.storyblok.com/f/272924/2048x1365/9d69ca0da3/425781172_823463636461297_4355531572615429854_n.jpg',
        highlight: false,
        date: '7 de febrero 2024'
    }
]);
</script>
<style scoped>
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
/* bounce dot animation on home.css */
@media (max-width: 800px) {
    .news-feed {
        display: grid;
        grid-template-columns: repeat(1, minmax(320px, 1fr));
        grid-template-rows: auto;
        gap: 60px;
    }
}
@media (min-width: 800px) {
    .news-feed {
        display: grid;
        grid-template-columns: repeat(2, minmax(320px, 1fr));
        grid-template-rows: auto;
        gap: 3%;
    }
}
@media (min-width: 1500px) {
    .news-feed {
        grid-template-columns: repeat(4, minmax(320px, 1fr));
        grid-template-rows: auto;
        gap: 2%;
    }
}
</style>