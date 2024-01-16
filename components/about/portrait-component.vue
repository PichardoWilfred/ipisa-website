<template>
    <div class="portrait relative overflow-hidden h-[75vh]">
        <div class="absolute top-0 left-0 w-full h-full bg-[#00488D70] z-10"></div>
        <nuxt-img class="wallpaper w-full h-full object-cover transition-all z-[9]" :class="{'zoom-in': zoom}"
        format="webp" :src="picture" sizes="100vw sm:50vw md:400px"
        :placeholder="[50, 25, 75, 5]" densities="x1 x2" />
    </div>
</template>
<script setup>
    const props = defineProps(['picture','zoom']);

    let wallpaper;
    const zoom = ref(true);
    function apply_zoom () {
        zoom.value = false;
    }
    onMounted(() => {
        //wallpaper animation 
        wallpaper = document.querySelector("img.wallpaper");
        wallpaper.addEventListener('load', apply_zoom, true);
    });
    onBeforeUnmount(() => {
        wallpaper.removeEventListener('load', apply_zoom, true);
    });
</script>