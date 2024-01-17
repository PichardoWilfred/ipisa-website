<template>
    <div class="portrait relative overflow-hidden h-[75vh]">
        <div class="absolute top-0 left-0 w-full h-full bg-[#00488D70] z-10"></div>
        <nuxt-img class="wallpaper w-full h-full object-cover transition-all z-[9]"
        format="webp" :src="picture" sizes="100vw sm:50vw md:400px" :class="{'zoom-in': zoom}"
        :placeholder="img_src(`${picture}`, { h: 10, f: 'jpg', blur: 2, q: 50 })" densities="x1 x2" />
    </div>
</template>
<script setup>
    const props = defineProps(['picture']);

    let wallpaper;
    const img_src = useImage();
    const zoom = ref(true);
    function apply_zoom () { zoom.value = false; }
    onMounted(() => {
        //wallpaper animation 
        wallpaper = document.querySelector("img.wallpaper");
        wallpaper.addEventListener('load', apply_zoom, true);
    });
    onBeforeUnmount(() => {
        wallpaper.removeEventListener('load', apply_zoom, true);
    });
</script>