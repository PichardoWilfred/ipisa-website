<script setup>
    import { useLayoutStore } from '@/store/layout';

    const layout = useLayoutStore();
    layout.$reset();
    useSeoMeta({
        title: 'IPISA - Inicio',
        ogTitle: () => `IPISA - Buenos Cristianos y Honrados Ciudadanos`,
        ogDescription: () => `IPISA es una institución educativa de renombre que destaca por su enfoque en la formación técnica y su firme compromiso con los valores cristianos. Su lema: "Buenos Cristianos y Honrados Ciudadanos", encapsula su misión de brindar una educación integral que combine habilidades técnicas y valores éticos.`,
        description: () => `IPISA es una institución educativa de renombre que destaca por su enfoque en la formación técnica y su firme compromiso con los valores cristianos. Su lema: "Buenos Cristianos y Honrados Ciudadanos", encapsula su misión de brindar una educación integral que combine habilidades técnicas y valores éticos.`,
        ogImage: () => 'https://a.storyblok.com/f/272924/1055x582/125792b188/seo-main-panel-small.png',
        twitterCard: () => 'https://a.storyblok.com/f/272924/1055x582/125792b188/seo-main-panel-small.png',
        language: () => `es` 
    });

</script>
<template>
    <HomePortrait />
    <div class="wallpaper-one relative overflow-hidden z-10">
        <!-- <HomeWallpaperContainerOne /> -->
        <HomeAbout />
        <div class="h-[3px] w-full bg-black-200 mt-[3rem]"></div>
        <HomeNews />
        <LazyHomeWorkshop />
        
        <div class="h-[3px] w-full bg-black-200 mt-[6rem] lg:mt-[12rem]"></div>
        <LazyHomeActivities />
    </div>
    <div class="wallpaper-two relative overflow-hidden z-10 bg-white">
        <!-- <HomeWallpaperContainerTwo /> -->
        <!-- <HomeNewStudents /> -->
        <!--  -->
        <!-- <HomeJobInsertion /> -->
    </div>
</template>
