<template>
    <section class="relative w-full z-20 pt-[4rem] lg:pt-[6rem] mb-[8rem]" id="activities" data-offset="80">
        <div></div>
        <h2 class="text-center font-raleway max-w-[1700px] mx-auto px-[5vw] mb-[2rem] text-black text-[2.2rem] lg:text-[3.6rem] lg:leading-[3.8rem]">
            <nuxt-link to="/pastoral">
                <b class="text-blue">Galería</b><b class="mx-2 lg:mx-5 text-separator">de</b><b class="text-orange-300">Recuerdos</b>
            </nuxt-link>
        </h2>
        <swiper class="activities" :modules="[Pagination, Navigation, Autoplay, EffectFade]" :slides-per-view="1" :space-between="10" loop pagination navigation 
        :autoplay="{ delay: 20000}" effect="fade" crossFade>
            <swiper-slide v-for="(img, index) in images" :key="index">
                <nuxt-img 
                loading="lazy"
                format="webp"
                sizes="600px md:800px lg:1200px"
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
    
    const images = [
        'https://a.storyblok.com/f/272924/6000x4000/8840c32062/slider_1.JPG', 
        'https://a.storyblok.com/f/272924/6000x4000/3345fd82a6/slider_2.JPG', 
        'https://a.storyblok.com/f/272924/6000x4000/8dfb4f902d/slider_3.JPG', 
        'https://a.storyblok.com/f/272924/6000x4000/9363f0d6da/slider_4.JPG',
        'https://a.storyblok.com/f/272924/6000x4000/3e3e40d83d/img_6819.JPG',
        'https://a.storyblok.com/f/272924/6000x4000/9f63b502a1/img_6824.JPG',
        'https://a.storyblok.com/f/272924/6000x4000/b334d030a5/img_6905.JPG',
        '',
        '',
        '',
        ]
</script>