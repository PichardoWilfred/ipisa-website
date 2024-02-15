<template>
    <div class="portrait relative overflow-hidden h-screen sm:h-[55vh]">

        <div class="absolute sm:hidden top-[50%] left-0 w-full z-20 py-10">
            <h1 class="font-raleway font-bold text-[#ffffffbd] mx-auto text-center text-[32px]">
                {{ wallpaper_phrase }}
            </h1>
        </div>

        <div class="absolute top-0 left-0 w-full h-full bg-[#00488D70] z-10" />

        <nuxt-img class="wallpaper w-full h-full object-cover transition-all z-[9]" :class="[{'zoom-in': zoom}, picture_name]"
        format="png" :src="picture" sizes="100vw sm:50vw md:1400px lg:2200px" densities="x1 x2" />

    </div>
</template>
<script setup>
    const props = defineProps(['picture', 'picture_name', 'wallpaper_phrase']);

    let zoom_timeout;
    let wallpaper;

    const zoom = ref(true);
    function apply_zoom () { zoom.value = false; }
    
    onMounted(() => { // wallpaper animation
        wallpaper = document.querySelector("img.wallpaper");
        wallpaper.addEventListener('load', apply_zoom, true);
        zoom_timeout = setTimeout(() => {
            if (wallpaper.complete) { zoom.value = false; }
        }, 500);
    });
    onBeforeUnmount(() => {
        wallpaper.removeEventListener('load', apply_zoom, true);
        clearTimeout(zoom_timeout);
    });
</script>