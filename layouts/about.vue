<template>
    <about-portrait-component :picture="picture" :picture_name="picture_name" :wallpaper_phrase="wallpaper_phrase"/>
    <main class="about-article info flex max-xl:flex-col justify-center px-4 lg:px-24 pt-[4rem] mb-28">
        <section>
            <h1 class="title">
                <slot name="title">
                    <span class="text-blue">Página</span> <span class="text-orange">vacía</span>
                </slot>
            </h1>
            <div class="lg:me-10 font-raleway xl:min-w-[640px] xl:max-w-[790px] min-h-[80vh]">
                <p class="text-black text-[1rem] lg:text-lg font-medium min-h-[25vh] xl:min-h-[30vh] mb-[1.8rem] max-lg:mb-[3.8rem]">
                    <slot name="content">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse sit unde porro ipsa dolor velit facilis error minima eligendi beatae? 
                        Expedita ab doloremque et voluptatum quia facilis qui corporis error?
                    </slot>
                </p>
            </div>
        </section>

        <aside class="lg:w-[360px] relative">
            <nav v-intersection-observer="[static_navigation_visible]" class="navigation">
                <ol v-for="({ title, list }, index) in navigation_" :key="index" class="text-black mb-2 last:mb-0">
                    <h1 class="font-raleway font-bold text-black text-xl">
                        {{ title }}
                    </h1>
                    <li v-for="(section, index_) in list" :key="index_" @click.prevent="scroll_to(section.anchor)">
                        <span class="alphabet me-1">
                            {{ alphabet[index_] }}.
                        </span>
                        <span class="text-black hover:underline cursor-pointer">
                            {{ section.label }}
                        </span>
                    </li>
                </ol>
            </nav>
            <h1 class="font-raleway font-[700] text-[28px] lg:text-[36px] text-black-400 mt-3 lg:mt-20 mb-4">
                Noticias
            </h1>
            
            <div class="news-feed">
                <div class="new mb-5">
                    <nuxt-img src="/modules/home/news/new-1.png" alt="estudiantes" class="w-[480px] h-[210px] object-cover" />
                    <div class="author flex items-center my-3">
                        <div class="avatar bg-black-600 rounded-full w-[25px] h-[25px] me-3" />
                        <h3 class="font-raleway text-md text-black-600">
                            Autor de Ejemplo
                        </h3>
                    </div>
                    <h2 class="font-raleway font-bold text-black-400 text-xl mb-1">
                        Título de Noticia de Ejemplo
                    </h2>
                    <p class="font-raleway text-black text-[15px] leading-5">
                        Estamos emocionados de dar la bienvenida a nuevos estudiantes y continuar nuestra misión de educar, inspirar y forjar un futuro mejor.
                    </p>
                </div>
            </div>
        </aside>
    </main>

    <button class="mobile-navigation xl:hidden fixed bottom-[12px] right-[12px] bg-blue rounded-full text-white-200 font-bold p-2 hover:bg-blue-400 active:bg-blue-400 transition-all" ref="mobile-navigation" @click.prevent="() => { show_navigation = true; }">
        <Icon name="mdi-light:layers" size="48px" />
    </button>
    
    <nav class="navigation mobile" ref="mobile_navigation" :class="{ show: show_navigation }">
        <ol v-for="({ title, list }, index) in navigation_" :key="index">
            <h1 class="font-raleway font-bold text-black text-xl mb-2">
                {{ title }}
            </h1>
            <li v-for="(section, index_) in list" :key="index_" @click.prevent="close_navigation(section.anchor, true)">
                <span class="text-black hover:underline">
                    {{ alphabet[index_] }}. {{ section.label }}
                </span>
            </li>
        </ol>
    </nav>

    <div class="scrolled-navigation-container hidden md:flex"
    :class="{ 
        opened: navigation_opened,
        available: !navigation_visible,
        not_available: (navigation_visible && enable_navigation_visible), 
    }">
        <div @click.prevent="() => {navigation_opened = !navigation_opened}" class="draggable">
            <div v-for="_ of [0,0,0]" class="rounded-xl bg-black-500 h-[3px] w-full my-1" />
        </div>
        <nav class="navigation scrolled">
            <ol v-for="({ title, list }, index) in navigation_" :key="index">
                <h1 class="font-raleway font-bold text-black text-xl">
                    {{ title }}
                </h1>
                <li v-for="(section, index_) in list" :key="index_" @click.prevent="scroll_to(section.anchor)">
                    <span class="text-black hover:underline cursor-pointer">
                        {{ alphabet[index_] }}. {{ section.label }}
                    </span>
                </li>
            </ol>
        </nav>
    </div>

    <Transition name="fade" mode="out-in" :key="show_navigation">
        <div v-show="show_navigation" class="fixed top-0 left-0 h-screen w-screen bg-[#09090970] z-40" />
    </Transition>
    
</template>
<script setup>
    import { onClickOutside } from '@vueuse/core';
    import { vIntersectionObserver } from '@vueuse/components';
    import { useLayoutStore } from '@/store/layout';

    const layout = useLayoutStore();
    // origin
    const navigation_ = ref(layout.about_navigation); // getting it's page navigation.
    
    const scroll_timeout = ref(0);
    const scroll_highlight = ref(0);
    const observer = ref(null);

    function scroll_to (section_, delay = 0) {
        const in_mobile = window.matchMedia("(max-width: 678px)").matches;
        focused_anchor.value = null;
        focused_anchor.value = document.querySelector(`#anchor-${section_}`);
        const rect = focused_anchor.value.getBoundingClientRect(); 
        const already_visible = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
        if (focused_anchor.value.classList.contains("highlight")) { focused_anchor.value.classList.remove("highlight"); }

        if (already_visible) {
            scroll_highlight.value = setTimeout(() => {
                focused_anchor.value.classList.add("highlight");
            }, 180);
            return;
        }
        scroll_timeout.value = setTimeout(() => { // if we need to scroll
            if (!focused_anchor.value) return;
            const section_offset = parseInt(focused_anchor.value.dataset.offset) || 0;
            const top = focused_anchor.value.getBoundingClientRect().top + window.pageYOffset - (in_mobile ? 100 : 180) + section_offset;
            
            window.scrollTo({ top, behavior: 'smooth' });
        }, delay);
    }

    const mobile_navigation = ref(null); // linked to a div
    const show_navigation = ref(false);

    const navigation_visible = ref(false);
    const enable_navigation_visible = ref(false);
    const navigation_opened = ref(false);

    const focused_anchor = ref(null);
    // const focused_anchor_timeout = ref(null);

    const static_navigation_visible = ([ value ]) => {
        navigation_visible.value = value.isIntersecting;
        if (!value.isIntersecting) {
            enable_navigation_visible.value = true;
            navigation_opened.value = false;
        };
    }

    onClickOutside(mobile_navigation, close_navigation); //mobile navigation show/hide
    function close_navigation (section, scroll = false) {
        if (show_navigation.value) show_navigation.value = false; 
        if (scroll) scroll_to(section, 120);
    }

    const alphabet = ref([...'abcdefghijklmnopqrstuvwxyz'].map((letter) => letter));
    onMounted(() => {
        // callback
        function callback(entries, observer) {
            entries.forEach((entry) => {
                if (!focused_anchor.value) return;
                if (entry.target.id !== focused_anchor.value.id) return; 
                scroll_highlight.value = setTimeout(() => {
                    focused_anchor.value.classList.add("highlight");
                }, 180);
            });
        }
        observer.value = new IntersectionObserver(callback); // to disconnect it later
        navigation_.value.map(({ list }) => {
            list.map(({ anchor }) => {
                const anchor_element = document.querySelector(`#anchor-${anchor}`);
                if (anchor_element) observer.value.observe(anchor_element);
            });
        });
    });
    
    const { picture, picture_name, wallpaper_phrase } = useAttrs();

    onBeforeUnmount(() => {
        observer.value.disconnect();

        clearTimeout(scroll_timeout.value);
        clearTimeout(scroll_highlight.value);
    });
</script>
<style scoped>
    .scrolled-navigation-container {
        position: fixed;
        bottom: 50%;
        align-items: center ;
        width: max-content;
        right: -100%;
        transition: all 180ms var(--ease-1);
        transform: translateY(50%);
    }
    .scrolled-navigation-container.not_available {
        right: -100%;
    }
    .scrolled-navigation-container.available {
        right: -390px;
    }
    .scrolled-navigation-container.opened {
        transform: translateX(-390px) translateY(50%);
    }
    .scrolled-navigation-container .draggable {
        display: flex; 
        position: relative; 
        z-index: 10; 
        padding: 0.5rem; 
        flex-direction: column; 
        justify-content: center; 
        align-content: center; 
        align-items: center;
        border-radius: 0.5rem; 
        border-top-right-radius: 0; 
        border-bottom-right-radius: 0; 
        border-width: 2px; 
        border-right-width: 0;
        border-color: var(--black-500);
        background-color: #ffffff; 
        cursor: pointer; 
        right: -1px;
        height: 90px;
        width: 40px;
    }
    .scrolled-navigation-container nav.navigation {
        position: relative; 
        top: 0; 
        padding: 1.25rem; 
        width: 390px;
    }
    nav.navigation {
        display: flex; 
        bottom: 0; 
        left: 0; 
        flex-direction: column; 
        top: 20vh;
        background-color: #ffffff; 
        z-index: 50; 
        padding: 1.5rem; 
        width: 100%; 
        transition: var(--default-tw-transition);
        transition-duration: 250ms;
        box-shadow: 0px 0.4147px 1.65879px 0px rgba(99, 160, 255, 0.35);
        @apply max-xl:hidden lg:rounded-lg;
    }
    nav.navigation.mobile {
        position: fixed;
        overflow-y: scroll;
        max-height: 420px;
        @apply flex xl:hidden overflow-y-scroll;
        top: unset !important;
        bottom: -100%;
    }
    nav.navigation.mobile.show {
        bottom: 0;
    }
    button.mobile-navigation {
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
</style>