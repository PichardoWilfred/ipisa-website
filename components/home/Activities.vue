<template>
    <section class="relative w-full z-20 pt-[4rem] lg:pt-[6rem]" id="activities" data-offset="80">
        <swiper class="activities" :modules="[Pagination, Navigation, Autoplay, EffectFade]" :slides-per-view="1" :space-between="10" loop pagination navigation 
        :autoplay="{ delay: 20000}" effect="fade" crossFade>
            <swiper-slide v-for="(img, index) in images" :key="index">
                <nuxt-img 
                format="webp"
                sizes="600px md:1200px lg:2200px"
                :src="`/f/272924/6000x4000/${img}/slider_${(index + 1)}.JPG`" 
                densities="x1 x2"
                class="swiper-img object-cover w-full h-full" alt="sa" />
            </swiper-slide>
        </swiper>
    </section>
</template>
<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
    
    const img_src = useImage();

    const images = [ '8840c32062', '2de373f659', '8dfb4f902d', '9363f0d6da']
</script>