<template>
    <section class="relative w-full z-20 pt-[4rem] lg:pt-[6rem]" id="activities" data-offset="80">
        <swiper :modules="[Pagination, Navigation, Autoplay, EffectFade]" :slides-per-view="1" :space-between="10" loop pagination navigation 
        :autoplay="{delay: 20000}" effect="fade" crossFade>
            <swiper-slide v-for="(img, index) in [1, 2, 3, 4]" :key="index">
                <div class="image-text">
                    <h2 class="image-title">
                        Titular de Ejemplo grande
                    </h2>
                    <p class="image-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, inventore. Molestiae illum ad eligendi repellendus fuga sint repellat voluptate possimus quibusdam, quasi fugiat eaque dicta dignissimos nisi odio qui sapiente.
                    </p>
                </div>
                <nuxt-img :src="`/modules/home/extracurricular/slider_${img}.JPG`" class="swiper-img" alt="sa" />
            </swiper-slide>
        </swiper>
    </section>
</template>
<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
</script>
<style>
.swiper {
    @apply bg-blue-100 h-[70vh];
}
.swiper .swiper-slide {
    user-select: none;
}
.swiper-button-prev, .swiper-button-next {
    @apply text-blue hover:text-blue-200 transition-all;
    height: 80px !important;
    width: 70px !important;
}
.swiper-pagination-bullet {
    @apply transition-all;
}
.swiper-pagination-bullet-active:nth-child(even) {
    @apply bg-orange-300;
}
/* swiper */
.swiper .swiper-slide {
    user-select: none;
}
.swiper .swiper-slide img.swiper-img {
    object-fit: cover;
    object-position: 0px -190px;
    user-select: none;
}
.swiper .swiper-slide .image-text {
    @apply absolute;
    top: 60px;
    left: 50px;
}
.swiper .swiper-slide .image-text h2.image-title {
    @apply font-raleway font-semibold text-white text-6xl mb-3;
}
.swiper .swiper-slide .image-text p.image-description {
    @apply font-raleway font-normal text-white text-2xl max-w-[620px] ps-2;
}
</style>