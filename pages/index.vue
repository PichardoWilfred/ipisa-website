<template>
    <HomePortrait />
    <div class="wallpaper-one relative overflow-hidden z-10">
        <!-- <HomeWallpaperContainerOne /> -->
        <HomeAbout />
        <HomeNews />
        <HomeWorkshop />
    </div>
    <div class="wallpaper-two relative overflow-hidden z-10 bg-white">
        <!-- <HomeWallpaperContainerTwo /> -->
        <HomeAdmissions />
        <HomeActivities />
        <HomeJobInsertion />
    </div>
</template>
<script setup>
import { useLayoutStore } from '@/store/layout';
const layout = useLayoutStore();
layout.$reset();
useHead({
    title: 'IPISA - Buenos Cristianos y Honrados Ciudadanos',
    meta: [{ property: 'og:title', content: `Instituto Politécnico Industrial de Santiago` }]
})
</script>