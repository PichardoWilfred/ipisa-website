<template>
    <section class="relative h-[70vh] w-full z-20">
        <swiper :modules="[Pagination, Navigation, Autoplay, EffectFade]" :slides-per-view="1" :space-between="10" loop pagination navigation autoplay effect="fade" crossFade>
            <swiper-slide>
                <img src="/modules/home/activities/1.png" alt="1" />
            </swiper-slide>
            <swiper-slide>
                <img src="/modules/home/activities/2.png" alt="2" />
            </swiper-slide>
            <swiper-slide>
                <img src="/modules/home/activities/3.png" alt="3" />
            </swiper-slide>
            <swiper-slide>
                <img src="/modules/home/activities/4.png" alt="4" />
            </swiper-slide>
        </swiper>
    </section>
</template>
<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/effect-fade';
</script>
<style>
    .swiper {
        @apply bg-blue-100 h-[70vh];
    }
    .swiper-button-prev, .swiper-button-next {
        @apply text-blue hover:text-blue-200 transition-all;
    }
    .swiper-pagination-bullet {
        @apply transition-all;
    }
    .swiper-pagination-bullet-active:nth-child(even) {
        @apply bg-orange-300;
    }
</style>