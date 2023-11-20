<template>
    <div class="wallpaper bg-[#00488D99] h-screen sm:h-[80vh] mb-10 lg:mb-16"></div>
    <main class="article flex max-lg:flex-col justify-between px-4 lg:px-24">
        <section>
            <h1 class="title">
                <slot name="title">
                    <span class="text-blue">Página</span> <span class="text-orange">vacía</span>
                </slot>
            </h1>
            <div class="content">
                <p class="default-text">
                    <slot name="content">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse sit unde porro ipsa dolor velit facilis error minima eligendi beatae? 
                        Expedita ab doloremque et voluptatum quia facilis qui corporis error?
                    </slot>
                </p>
            </div>
        </section>

        <aside class="lg:w-[370px] ">
            <nav class="navigation">
                <ol v-for="({ title, list }, index) in navigation_" :key="index">
                    <h1 class="navigation-title">
                        {{ title }}
                    </h1>
                    <li v-for="(section, index_) in list" :key="index_">
                        <span class="alphabet me-1">
                            {{ alphabet[index_] }}.
                        </span>
                        <span class="hover:underline">
                            {{ section }}
                        </span>
                    </li>
                </ol>
            </nav>
            <h1 class="font-raleway font-[700] text-[28px] lg:text-[36px] text-black-400 mt-20 mb-4">
                Noticias
            </h1>
            <div class="news-feed">
                <div class="new mb-10">
                    <img src="/modules/home/news/new-1.png" alt="carajitos" />
                    <div class="author">
                        <div class="avatar bg-black-600 rounded-full w-[25px] h-[25px] me-3" />
                        <h3 class="font-raleway text-md text-black-600">
                            Guillermo López Santos.
                        </h3>
                    </div>
                    <h2 class="font-raleway font-bold text-black-400 text-xl mb-1">
                        Título de Noticia de Ejemplo
                    </h2>
                    <p class="font-raleway text-black-700 text-[15px] leading-5">
                        Estamos emocionados de dar la bienvenida a nuevos estudiantes y continuar nuestra misión de educar, inspirar y forjar un futuro mejor.
                    </p>
                </div>
            </div>
        </aside>
    </main>
    
    <!-- <div class="news" v-for="({title, img, description, highlight, date}, index) in news_feed" :key="index">
        <div class="header">
            <time>
                {{ date }}
            </time>
            <button class="options">
                <nuxt-icon name="home/news/options" filled class="text-[1.8rem]"/>
            </button>
        </div>
        <img :src="`modules/home/news/${img}`" alt="titulo" srcset="">
        <h2> {{ title }} </h2>
        <p> {{ description }} </p>
        <button class="see-more">
            <b class="first">Ver</b> <b class="second">más</b> <Icon name="fe:arrow-down" class="text-[1.6rem]" filled />
        </button>
    </div> -->

    <button class="mobile-navigation" ref="mobile-navigation" @click.prevent="() => { show_navigation = true; }">
        <Icon name="mdi-light:layers" size="48px" />
    </button>
    
    <nav class="navigation mobile" ref="mobile_navigation" :class="{ show: show_navigation }">
        <ol v-for="({ title, list }, index) in navigation_" :key="index">
            <h1 class="navigation-title">
                {{ title }}
            </h1>
            <li v-for="(section, index_) in list" :key="index_" @click.prevent="close_navigation">
                <span class="hover:underline">
                    {{ alphabet[index_] }}. {{ section }}
                </span>
            </li>
        </ol>
    </nav>

    <Transition name="fade" mode="out-in" :key="show_navigation">
        <div v-show="show_navigation" class="mobile-navigation-mask" />
    </Transition>
</template>
<script setup>
    import { onClickOutside } from '@vueuse/core';
    
    const mobile_navigation = ref(null); // linked to a div
    const show_navigation = ref(false);

    onClickOutside(mobile_navigation, close_navigation);
    function close_navigation () {
        if (show_navigation.value) show_navigation.value = false; 
    }

    const navigation_ = ref([
        {
            title: '¿Qué es IPISA?',
            list: [
                'Presentación',
                'Presentando a IPISA',
            ] 
        },
        {
            title: 'Actualidad',
            list: ['Noticias']
        },
        {
            title: 'Nuestra Identidad',
            list: [
                'Lema',
                'Emblema',
                'Bandera',
                'Himno'
            ]
        }
        
    ]);
    const alphabet = ref([...'abcdefghijklmnopqrstuvwxyz'].map((letter) => letter));


    const news_feed =  ref([...Array(4).keys()]);
</script>
<style scoped>
    section div.content {
        @apply lg:pe-8 min-h-[80vh] font-raleway;
    }
    section h1.title {
        @apply text-black font-raleway font-semibold text-[1.8rem] sm:text-[2.1rem] lg:text-[3.8rem] cursor-pointer mb-2 lg:mb-3;
    }
    section p.default-text {
        @apply text-black text-[1rem] lg:text-lg font-medium xl:min-w-[640px] xl:max-w-[1020px] min-h-[25vh] xl:min-h-[30vh] mb-[1.8rem] max-lg:mb-[3.8rem];
    }
    .mobile-navigation-mask {
        @apply fixed top-0 left-0 h-screen w-screen bg-[#09090970] z-40;
    }
    nav.navigation {
        @apply max-lg:hidden max-lg:fixed left-0 bottom-0 flex flex-col bg-white w-full p-6 lg:rounded-lg z-50 transition-all;
        transition-duration: 250ms;
        box-shadow: 0px 0.4147px 1.65879px 0px rgba(99, 160, 255, 0.35);
    }
    nav.navigation.mobile {
        @apply flex lg:hidden;
        bottom: -100%;
    }
    nav.navigation.mobile.show {
        bottom: 0;
    }
    nav.navigation ol {
        @apply text-black mb-2;
    }
    nav.navigation ol h1.navigation-title {
        @apply font-raleway font-bold text-black text-xl;
    }
    nav.navigation ol li {
        @apply font-raleway text-lg text-black active:text-black-600 ps-4 font-normal cursor-pointer transition-all;
    }
    button.mobile-navigation {
        @apply lg:hidden fixed bottom-[12px] right-[12px] bg-blue rounded-full text-white-200 font-bold p-2 hover:bg-blue-400 active:bg-blue-400 transition-all;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
    .news-feed .new {
        @apply mb-5;
    }
    .news-feed .new .author {
        @apply flex items-center my-3;
    }
    .news-feed .new img {
        @apply w-[480px] h-[210px] object-cover;
    }
</style>