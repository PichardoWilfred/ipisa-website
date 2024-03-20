<template>
    <h2 class="flex items-center justify-center text-blackfont-raleway text-[2.2rem] lg:text-[3.8rem] leading-[2.2rem] lg:leading-[3.8rem] mt-4 lg:mt-10 mb-2 lg:mb-3 cursor-pointer">
        <b class="text-blue">Ga</b><b class="text-separator">le</b><b class="text-orange-300">ría</b>
    </h2>
    <swiper :modules="[Autoplay, EffectFade, Navigation, Pagination]" :slides-per-view="1" :space-between="10" loop :autoplay="{ delay: 4000 }" 
        effect="fade" crossFade class="" navigation :pagination="{ dynamicBullets: true }">
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
</script>