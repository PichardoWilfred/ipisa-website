<template>
    <swiper :modules="[Autoplay, EffectFade, Navigation, Pagination]" :slides-per-view="1" :space-between="10" loop :autoplay="{ delay: 4000 }" 
        effect="fade" crossFade class="mt-6" navigation pagination >
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