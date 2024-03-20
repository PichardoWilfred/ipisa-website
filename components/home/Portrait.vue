<template>
    <section id="portrait" class="relative flex flex-col justify-end md:justify-center items-center lg:px-8
    h-[780px] lg:h-auto lg:min-h-screen overflow-hidden">
        <div class="absolute md:w-full h-full top-0 left-0">
            <div class="bg-[#00488D99] z-20 absolute top-0 left-0 w-full h-full" />
            <swiper :modules="[Autoplay, EffectFade]" :slides-per-view="1" :space-between="10" loop :autoplay="{ delay: 4000 }" 
            effect="fade" crossFade class="h-full">
                <swiper-slide v-for="(img, index) in imgs_" :key="index">
                    <nuxt-img class="object-cover w-screen h-full"
                    placeholder format="webp" sizes="600px sm:800px lg:1200px xl:100vw"
                    :src="`/f/272924/${(index === 5 ? '4000x3000':'6000x4000')}/${img}/portrait-${(index + 1)}.jpg`" densities="x1 x2"
                    />
                </swiper-slide>
            </swiper>
        </div>
        <div class="relative w-full flex flex-col items-center mb-16 xl:mb-10 z-30">
            <div class="flex flex-col bg-gradient-to-b from-blue-400 to-[#004F9600] 
            pb-3 md:pb-10 pt-8 md:pt-12 px-8 lg:px-16 mb-[1rem] sm:mb-[2rem] md:mt-[10rem] lg:mt-[16rem] 
            md:rounded-xl w-full md:max-w-[600px] lg:max-w-[700px]">
                <h4 class="font-bold font-garamond text-white text-[1.5rem] sm:text-[1.55rem] lg:text-[2.01rem] leading-[1.9rem] sm:leading-[1.6rem] lg:leading-[2.3rem] 
            tracking-[1px] text-center max-lg:max-w-[480px] mx-auto mb-3">
                    FORJANDO UN LEGADO DE EXCELENCIA POR MÁS DE <span class="text-orange">30 AÑOS</span> 
                </h4>
                <p class="font-raleway text-[16px] lg:text-lg 
                text-white text-justify max-lg:text-justify max-lg:mx-auto">
                    Enraizado en los principios salesianos y orientado hacia la excelencia en el aspecto académico y técnico, 
                    <b>IPISA</b> se ha convertido en un referente de prestigio en la educación de la República Dominicana.
                    Te invitamos a ser parte de nuestra trayectoria educativa y descubrir cómo podemos impulsar tu futuro.
                </p>
            </div>
            <nuxt-link to="/sobre-nosotros" prefetch>
                <button class="join font-raleway font-bold text-[1.1rem] text-white hover:text-[#FFFFFFE6] py-3 rounded-xl min-w-[300px] lg:min-w-[370px]">
                    CONOCE A IPISA
                </button>
            </nuxt-link>
        </div>
    </section>
</template>
<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Autoplay, EffectFade } from 'swiper/modules';

    const imgs_ = ref([
        '937f525625', // 1
        'ba2ae85481', // 2
        '386ba5f9ce', // 3
        '38bff178a2', // 4
        'c3bec000d3', // 5
        'c884634ae7', // 6
    ]);
</script>
<style scoped>
    button.join {
        background: linear-gradient(to bottom, #FF6000 0%, #FF3131 50%, #FF6000 100%);
        background-size: auto 200%;
        transition: all 250ms cubic-bezier(.8, .87, 0, .95);
    }
    button.join:hover {
        background-position: bottom right;
    }
</style>