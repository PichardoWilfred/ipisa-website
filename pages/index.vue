<script setup>
    import { useLayoutStore } from '@/store/layout';

    const layout = useLayoutStore();
    layout.$reset();

    useSeoMeta({
        title: 'IPISA - Inicio',
        ogTitle: () => `IPISA - Buenos Cristianos y Honrados Ciudadanos`,
        ogDescription: () => `IPISA es una institución educativa de renombre que destaca por su enfoque en la formación técnica y su firme compromiso con los valores cristianos.`,
        description: () => `IPISA es una institución educativa de renombre que destaca por su enfoque en la formación técnica y su firme compromiso con los valores cristianos.`,
        ogImage: () => 'https://a.storyblok.com/f/272924/3039x1676/d7fd5d41f6/seo-main-panel.png',
        twitterCard: () => 'https://a.storyblok.com/f/272924/3039x1676/d7fd5d41f6/seo-main-panel.png',
        language: () => `es`
    });

</script>
<template>
    <HomePortrait />
    <div class="wallpaper-one relative overflow-hidden z-10">
        <!-- <HomeWallpaperContainerOne /> -->
        <HomeAbout />
        <div class="h-[3px] w-full bg-black-100 mt-[3rem]"></div>
        <HomeNews />
        <WorkshopCards/>
        <div class="h-[3px] w-full bg-black-100 mt-[6rem] lg:mt-[9rem]"></div>
        <LazyHomeActivities />
    </div>
    <div class="wallpaper-two relative overflow-hidden z-10 bg-white">
        <!-- <HomeWallpaperContainerTwo /> -->
        <!-- <HomeNewStudents /> -->
        <!-- <HomeJobInsertion /> -->
    </div>
</template>
