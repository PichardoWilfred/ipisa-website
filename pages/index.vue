<script setup>
    import { useLayoutStore } from '@/store/layout';

    const layout = useLayoutStore();

    
    layout.$reset();

    useHead({
        title: 'IPISA - Buenos Cristianos y Honrados Ciudadanos',
        meta: [ { property: 'og:title', content: `Instituto Politécnico Industrial de Santiago` } ]
    });

</script>
<template>
    <HomePortrait />
    <div class="wallpaper-one relative overflow-hidden z-10">
        <!-- <HomeWallpaperContainerOne /> -->
        <HomeAbout />
        <HomeNews />

        <div class="my-[5rem] py-[5rem] bg-blue-100">
        </div>
    </div>
    <div class="wallpaper-two relative overflow-hidden z-10 bg-white">
        <!-- <HomeWallpaperContainerTwo /> -->
        <HomeActivities />
        <HomeWorkshop />
        <HomeNewStudents />
        <HomeAdmissions />
        <HomeJobInsertion />
    </div>
</template>
