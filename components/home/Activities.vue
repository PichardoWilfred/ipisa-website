<template>
    <section class="relative w-full z-20 pt-[4rem] lg:pt-[6rem] mb-[8rem]" id="activities" data-offset="80">
        <h2 class="text-center font-raleway max-w-[1700px] mx-auto px-[5vw] mb-[0.5rem] text-black text-[1.8rem] lg:text-[3.4rem] lg:leading-[3.8rem]">
            <nuxt-link to="/pastoral">
                <b class="text-blue">Galería</b><b class="mx-2 lg:mx-5 text-separator">de</b><b class="text-orange-300">Recuerdos</b>
            </nuxt-link>
        </h2>
        <swiper class="activities" :modules="[Pagination, Navigation, Autoplay, EffectFade]" :slides-per-view="1" :space-between="10" loop 
        :pagination="{ dynamicBullets: true }" navigation 
        :autoplay="{ delay: 20000}" effect="fade" crossFade>
            <swiper-slide v-for="({ img_src }, index) in images" :key="index">
                <nuxt-img class="swiper-img object-cover w-full h-full" alt="" :src="img_src"
                loading="lazy" format="webp" sizes="600px md:800px lg:2200px" placeholder
                densities="x1 x2" />
            </swiper-slide>
        </swiper>
    </section>
</template>
<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
    const images = [
        {
            img_src: 'https://a.storyblok.com/f/272924/6000x4000/8dfb4f902d/slider_3.JPG',
        }, 
        {
            img_src: 'https://a.storyblok.com/f/272924/2048x1365/1cae02cac0/425818719_823458856461775_2719671835861883304_n.jpg' 
        }, 
        {
            img_src: 'https://a.storyblok.com/f/272924/6000x4000/8840c32062/slider_1.JPG' 
        }, 
        {
            img_src: 'https://a.storyblok.com/f/272924/6000x4000/3345fd82a6/slider_2.JPG',
        },
        {
            img_src: 'https://a.storyblok.com/f/272924/6000x4000/9363f0d6da/slider_4.JPG'
        },
        {
            img_src: 'https://a.storyblok.com/f/272924/2048x1365/888665e845/425818185_823467299794264_2987842620928268749_n.jpg'
        },
        {
            img_src: 'https://a.storyblok.com/f/272924/6000x4000/3e3e40d83d/img_6819.JPG'
        },
        {
            img_src: 'https://a.storyblok.com/f/272924/6000x4000/b334d030a5/img_6905.JPG'
        },
        {
            img_src: 'https://a.storyblok.com/f/272924/6000x4000/866ece9977/img_6535.JPG'
        },
        {
            img_src: 'https://a.storyblok.com/f/272924/6000x4000/9f63b502a1/img_6824.JPG'
        },
        {
            img_src: 'https://a.storyblok.com/f/272924/6000x4000/a6a26bc5de/img_2802.jpg'
        },
        {
            img_src: 'https://a.storyblok.com/f/272924/6000x4000/88a30cc590/img_2822.jpg'
        },
        {
            img_src: 'https://a.storyblok.com/f/272924/6000x4000/9a2f6f2f74/img_2714.jpg'
        },
        {
            img_src: 'https://a.storyblok.com/f/272924/6000x4000/0a5aafeb4d/img_2726.jpg'
        },
        {
            img_src: 'https://a.storyblok.com/f/272924/6000x4000/ffb13e0bf8/img_2722.jpg'
        },
        {
            img_src: 'https://a.storyblok.com/f/272924/6000x4000/da4e1a54df/img_6413.JPG'
        },
        {
            img_src: 'https://a.storyblok.com/f/272924/6000x4000/ff74b6c2f9/img_6364.JPG'
        },
        {
            img_src: 'https://a.storyblok.com/f/272924/6000x4000/59d1a5bb7e/img_6365.JPG'
        },
        {
            img_src: 'https://a.storyblok.com/f/272924/6000x4000/821f974af7/img_6392.JPG'
        },
        {
            img_src: 'https://a.storyblok.com/f/272924/6000x4000/c855cb0f3a/img_6368.JPG'
        },
    ];
</script>