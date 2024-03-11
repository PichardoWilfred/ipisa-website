<script setup>
    import { useLayoutStore } from '@/store/layout';

    const layout = useLayoutStore();

    
    layout.$reset();

    useHead({
        title: 'IPISA - Buenos Cristianos y Honrados Ciudadanos',
        meta: [ 
            { 
                property: 'og:title', 
                content: `Instituto Politécnico Industrial de Santiago` 
            },
            {
                name: 'description', 
                content: 'IPISA es una institución educativa de renombre que destaca por su enfoque en la formación técnica y su firme compromiso con los valores cristianos. Su lema: "Buenos Cristianos y Honrados Ciudadanos", encapsula su misión de brindar una educación integral que combine habilidades técnicas y valores éticos.' 
            }
        ]
    });

</script>
<template>
    <HomePortrait />
    <div class="wallpaper-one relative overflow-hidden z-10">
        <!-- <HomeWallpaperContainerOne /> -->
        <HomeAbout />
        <HomeNews />
        <LazyHomeWorkshop />
        <LazyHomeActivities />
    </div>
    <div class="wallpaper-two relative overflow-hidden z-10 bg-white">
        <!-- <HomeWallpaperContainerTwo /> -->
        <!-- <HomeNewStudents /> -->
        <!--  -->
        <!-- <HomeJobInsertion /> -->
    </div>
</template>
