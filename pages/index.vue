<template>
    <HomePortrait />
    <div class="wallpaper-one relative overflow-hidden z-20">
        <HomeWallpaperContainerOne />
        <HomeAbout />
        <HomeNews />
        <HomeWorkshop />
    </div>
    <div class="wallpaper-two relative overflow-hidden z-30 bg-white">
        <HomeWallpaperContainerTwo />
        <HomeAdmissions />
        <HomeActivities />
        <HomeJobInsertion />
        <div class="h-[60vh]"></div>
    </div>
</template>
<script setup>
useHead({
    title: 'IPISA - Buenos Cristianos y Honrados Ciudadanos',
    meta: [{ property: 'og:title', content: `Instituto Politécnico Industrial de Santiago` }]
})
</script>