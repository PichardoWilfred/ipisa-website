<template>
    <div class="portrait parallax-container relative overflow-hidden h-screen md:h-[30vh] lg:h-[55vh]">

        <div v-if="wallpaper_phrase_ !== '' " class="absolute md:hidden top-[40%] left-0 w-full z-20 py-10">
            <h1 class="flex justify-center items-end font-raleway font-bold text-[#ffffffbd] text-center text-[32px] mx-[3rem]">
                {{ wallpaper_phrase_ }}
                <div class="blinking-cursor bg-white mb-2 ms-1 h-[4px] w-[16px]" :class="{ 'removed': remove_typewritter }"></div>
            </h1>
        </div>

        <div class="absolute top-0 left-0 w-full h-full bg-[#00488D70] z-10" />

        <div class="parallax-layer rellax absolute md:top-[-330px] lg:top-[-135px] left-0 bottom-0 right-0 w-full h-full" data-rellax-percentage="0.1" data-rellax-speed="-7">
            <nuxt-img 
                loading="lazy"
                class="wallpaper w-full h-[105%] object-cover transition-all z-[9]" 
                :class="[{'zoom-in': zoom}, picture_name]"
                format="webp" :src="picture" 
                sizes="600px sm:600px lg:900px" densities="x1 x2" />
        </div>

    </div>
</template>
<script setup>
    import Rellax from 'rellax';
    const { picture, picture_name, wallpaper_phrase } = defineProps(['picture', 'picture_name', 'wallpaper_phrase']);

    let zoom_timeout;
    let wallpaper;

    const zoom = ref(true);
    function apply_zoom () { zoom.value = false; }
    
    let wallpaper_phrase_ = ref('');
    let write_timeout = 0;
    let remove_typewritter = ref(false);

    function type_writter(wallpaper_phrase_arg, wallpaper_phrase_, speed) {
        return new Promise(resolve => {
            let i = 0;
            function write_character() {
                if (i < wallpaper_phrase_arg.length) {
                    wallpaper_phrase_.value += wallpaper_phrase_arg.charAt(i);
                    i++;
                    write_timeout = setTimeout(write_character, speed);
                } else {
                    resolve();
                }
            }
            write_character();
        });
    }

    let rellax;
    onMounted(() => {
        nextTick(() => { // "relax" parallax-module
            rellax = new Rellax('.rellax', { center: true });
            rellax.refresh(); // Destroy and create again parallax with previous settings
        });
        // wallpaper animation
        wallpaper = document.querySelector("img.wallpaper");
        wallpaper.addEventListener('load', apply_zoom, true);
        zoom_timeout = setTimeout(() => {
            if (wallpaper.complete) { zoom.value = false; }
        }, 0);
        // mobile type writter animation
        type_writter(wallpaper_phrase, wallpaper_phrase_, 85).then(() => {
            remove_typewritter.value = true;
        });
    });
    onBeforeUnmount(() => {
        wallpaper.removeEventListener('load', apply_zoom, true);
        clearTimeout(zoom_timeout);
        clearTimeout(write_timeout);
    });
</script>
<style scoped>
div.portrait { }
div.parallax-container {
    perspective: 10px;
    transform-style: preserve-3d;
}
div.parallax-container div.parallax-layer {
    transform: translateZ(-2px);
}
.blinking-cursor {
    animation: blinking-animation 550ms infinite;
}
@keyframes blinking-animation {
    from {
        opacity: 0;
    } 50% {
        opacity: 1;
    } to {
        opacity: 0;
    }
}
.blinking-cursor.removed {
    display: none;
    opacity: 0 !important;
    animation: none !important;
}
</style>