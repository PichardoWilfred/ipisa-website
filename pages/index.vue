<template>
    <HomePortrait />
    <div class="wallpaper-one relative overflow-hidden z-20">
        <HomeWallpaperContainerOne />
        <HomeAbout />
        <HomeWorkshop />
    </div>
    <HomeAdmissions />
    <HomeActivities />
</template>
<script setup>
useHead({
    title: 'IPISA - Buenos Cristianos y Honrados Ciudadanos',
    meta: [{ property: 'og:title', content: `Instituto Politécnico Industrial de Santiago` }]
})
</script>