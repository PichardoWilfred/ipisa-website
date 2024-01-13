<template>
    <div class="portrait relative overflow-hidden h-[75vh]">
        <div class="absolute top-0 left-0 w-full h-full bg-[#00488D70] z-10"></div>
        <nuxt-img  class="wallpaper w-full h-full object-cover transition-all z-[9]" :class="{'zoom-in': zoom}"
        format="webp" src="/modules/home/wallpaper/portrait-2.JPG" sizes="100vw sm:50vw md:400px"
        :placeholder="[50, 25, 75, 5]" densities="x1 x2" />
    </div>
    <section class="content-navigation pt-[4rem] sm:pt-[2rem]">
        <h1 class="font-raleway text-center font-semibold text-[2.1rem] lg:text-[3.6rem]">
            <span class="text-blue">Conoce </span> <span class="separator"> al </span><span class="orange"> Centro </span>
        </h1>
        <p class="text-center text-black font-raleway text-[1.1rem] mx-auto w-[90%] sm:w-[70%] xl:w-[50%] mb-4">
            Descubre más sobre el <b>Instituto Politécnico Industrial de Santiago (IPISA) </b>explorando lo que tenemos para ofrecerte. 
            Sumérgete en nuestro mundo educativo donde la excelencia académica se combina con una sólida base de 
            <b class="text-blue font-bold">valores</b> <b class="orange">cristianos.</b>
            Aprende sobre nuestra filosofía educativa, inspirada en el sistema preventivo de Don Bosco, que promueve <b>la razón, la religión</b> 
            y <b>el amor</b> como pilares de formación.
        </p>
        <div class="about-modules">
            <template v-for="({ title, description, icon, link }, index) in sections">
                <nuxt-link :to="link" class="module" :class="icon">
                    <nuxt-icon :name="`home/about/${icon}`" class="illustration idle flex items-center justify-center mb-7 " filled :class="icon" />
                    <h1 class="font-semibold min-[800px]:leading-9 text-[1.5rem] min-[800px]:text-[1.4rem] min-[1200px]:text-[1.6rem] mb-2 text-black-400 truncate text-center">
                        <span v-for="({ color, word, space }, index) in title" :key="index" :class="`hovered-${color}`">
                            {{ word }}<span v-if="space" class="mx-[4px]"></span> 
                        </span>
                    </h1>
                    <p class="text-justify font-medium text-black-700">
                        {{ description }}
                    </p>
                </nuxt-link>
                <div class="column-separator bg-black-500 w-[1px] min-[1300px]:h-full mx-auto" />
            </template>
        </div>
    </section>
</template>
<script setup>
import { useLayoutStore } from '@/store/layout';

let wallpaper;
const zoom = ref(true);
function interpolate () {  // zoom.value !=  zoom.value | not working for some reason ???
    zoom.value = (zoom.value) ? false : true;
}
function apply_zoom () {
    zoom.value = false;
}

const sections = ref([
    {
        title: [
            { color: 'blue', word: 'Filo' },
            { color: 'orange', word: 'sofía' },
        ],
        link: 'sobre-nosotros/filosofia',
        icon: 'philosofy',
        description: "Arraigada en el sistema preventivo de Don Bosco. Nuestra visión es formar a jóvenes fuertes en valores éticos y ciudadanos comprometidos con la sociedad."
    },
    {
        title: [
            { color: 'blue', word: 'Sobre' },
            { space: true },
            { color: 'orange', word: 'Nosotros' },
        ],
        link: 'sobre-nosotros/ipisa',
        icon: 'school',
        description: "Descubre en IPISA una educación técnica de calidad que se basa en sólidos valores cristianos y una misión de formación integral."
    },
    {
        title: [
            { color: 'blue', word: 'Nuestra' },
            { space: true },
            { color: 'orange', word: 'Trayectoria' },
        ],
        link: 'sobre-nosotros/nuestra-trayectoria',
        icon: 'history',
        description: "Con un testimonio de más de 30 años dedicados a la formación de jóvenes con excelencia. Desde su fundación en 1988, el centro ha pasado por cambios importantes."
    },
    {
        title: [
            { color: 'blue', word: 'Recono' },
            { color: 'orange', word: 'cimientos' },
        ],
        link: '',
        icon: 'awards',
        description: "Arraigada en el sistema preventivo de Don Bosco. Nuestra visión es formar a jóvenes fuertes en valores éticos y ciudadanos comprometidos con la sociedad."
    },
]);

const layout = useLayoutStore();
layout.$patch({ scroll_breakpoint: 600 });

onMounted(() => {
    wallpaper = document.querySelector("img.wallpaper");
    wallpaper.addEventListener('load', apply_zoom, true);
});
onBeforeUnmount(() => {
    wallpaper.removeEventListener('load', apply_zoom, true);
});
</script>
<style scoped>
div.portrait img.wallpaper {
    object-position: 0px 0px;
    transition: all 150ms cubic-bezier(0.23, 1, 0.32, 1);
}
div.portrait img.wallpaper.zoom-in {
    filter: blur(10px);
    transform: scale(1.3);
}
.about-modules {
    display: grid;
    grid-template-rows: 500px 2px 500px 2px 500px 2px 500px;
    grid-template-columns: 1fr;
    grid-template-areas:
        "school"
        "separator-one"
        "philosofy"
        "separator-two"
        "history"
        "separator-three"
        "awards";
    @apply items-center justify-center mx-auto w-[85%] pb-[140px] sm:pt-[50px];
}

@media (min-width: 768px) {
    .about-modules {
        grid-template-areas:"school separator-one philosofy"
                            "separator-two separator-two separator-two"
                            "history separator-three awards";
        grid-template-rows: 500px 2px 500px;
        grid-template-columns: 1fr 2px 1fr;
        column-gap: 2.3vw;
    }
}
@media (min-width: 1300px) {
    .about-modules {
        grid-template-areas: "school separator-one philosofy separator-two history separator-three awards";
        grid-template-rows: 500px;
        grid-template-columns: 1fr 2px 1fr 2px 1fr 2px 1fr;
        column-gap: 2.3vw;
    }
}
.about-modules .module {
    @apply flex flex-col items-center justify-around font-raleway my-7 min-[992px]:mx-auto min-[992px]:w-[80%] min-[1300px]:w-full cursor-pointer;
}
.about-modules .module .illustration { @apply transition-all; }
.about-modules .module:hover .illustration { transform: scale(1.05); }
.about-modules .module.school { grid-area: school; }
.about-modules .module.philosofy { grid-area: philosofy; }
.about-modules .module.history { grid-area: history; }
.about-modules .module.awards { grid-area: awards; }

.module .illustration :deep(svg) {
    @apply w-[95%] h-[250px] overflow-visible;
}
.module .illustration.school :deep(svg) {
    @apply max-lg:max-w-[300px] max-sm:h-[190px] max-w-[420px] xl:max-w-[350px] translate-y-[20px];
}
.module .illustration.philosofy :deep(svg) {
    @apply max-lg:max-w-[300px] xl:max-w-[320px];
}
.module .illustration.history :deep(svg) {
    @apply max-lg:max-w-[300px] max-w-[760px] xl:max-w-[340px] translate-y-[20px];
}
.module .illustration.awards :deep(svg) {
    @apply max-lg:max-w-[300px] xl:max-w-[360px];
}
.about-modules .module:hover span:is(.hovered-blue, .hovered-orange) {
    @apply transition-all;
}
.about-modules .module:hover span.hovered-blue {  color: #0478E0 !important; }
.about-modules .module:hover span.hovered-orange { color: #FF8B46 !important; }

</style>