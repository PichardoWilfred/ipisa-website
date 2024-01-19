<template>
    <section class="relative w-full z-20 pt-[4rem] lg:pt-[6rem]" id="activities" data-offset="80">
        <swiper class="activities" :modules="[Pagination, Navigation, Autoplay, EffectFade]" :slides-per-view="1" :space-between="10" loop pagination navigation 
        :autoplay="{ delay: 20000}" effect="fade" crossFade>
            <swiper-slide v-for="(img, index) in [1, 2, 3, 4]" :key="index">
                <!-- <div class="image-text">
                    <h2 class="image-title">
                        Titular de Ejemplo grande
                    </h2>
                    <p class="image-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, inventore. Molestiae illum ad eligendi repellendus fuga sint repellat voluptate possimus quibusdam, quasi fugiat eaque dicta dignissimos nisi odio qui sapiente.
                    </p>
                </div> -->
                <nuxt-img 
                :placeholder="img_src(`/modules/home/wallpaper/portrait-${img}.jpg`, { w: 10, h: 10, f: 'jpg', blur: 2, q: 'lightest' })"
                densities="x1 x2"
                :src="`/modules/home/extracurricular/slider_${img}.JPG`" 
                class="swiper-img object-cover w-full h-full" alt="sa" />
            </swiper-slide>
        </swiper>
    </section>
</template>
<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
    
    const img_src = useImage();
</script>