<template>
    <swiper :modules="[Autoplay, EffectFade]" :slides-per-view="1" :space-between="10" loop :autoplay="{ delay: 4000 }" 
        effect="fade" crossFade class="mt-3">
            <swiper-slide v-for="(img, index) in img" :key="index">
                <nuxt-img class="object-cover w-full h-[500px]"
                placeholder format="webp" sizes="600px sm:800px lg:1200px"
                :src="img" densities="x1 x2" />
            </swiper-slide>
        </swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';

defineProps(['img']); 

// :img_='["https://a.storyblok.com/f/272924/2048x1365/9d69ca0da3/425781172_823463636461297_4355531572615429854_n.jpg"]'
// const imgs = ref([
//     'https://a.storyblok.com/f/272924/2048x1365/9d69ca0da3/425781172_823463636461297_4355531572615429854_n.jpg'
// ])
</script>