<template>
    <section class="relative pt-[4rem] md:pt-[4rem] xl:pt-[8rem] z-20" id="about">
        <div class="flex flex-col-reverse xl:flex-row items-center max-w-[1700px] px-[5vw] mx-auto min-h-[552px]">
            <Transition name="fade" mode="out-in">    
                <div class="illustration" :class="selected_section.icon" 
                v-intersection-observer="[onView, { threshold: 0.9 }]" :key="selected_index">
                    <nuxt-icon :name="`home/about/${selected_section.icon}`" 
                    :class="{'show': selected_section.show, 'idle': selected_section.idle}" filled />
                </div>
            </Transition>
            
            <div class="content">
                <div class="flex relative items-center max-lg:mb-3">
                    <nuxt-link :to="sections[selected_index].route">
                        <Transition name="fade" mode="out-in">
                            <h1 class="flex items-end font-semibold text-[1.8rem] sm:text-[2.1rem] lg:text-[3.6rem] cursor-pointer transition-all" :key="selected_index" >
                                <span class="hover:underline text-black-400">
                                    {{ selected_section.title }}
                                </span>
                                <span class="max-lg:hidden">
                                    <Icon name="fe:link" class=" ms-1 text-[2.5rem] separator mb-3" />
                                </span>
                            </h1>
                        </Transition>
                    </nuxt-link>

                    <span v-intersection-observer="[move_arrow, { threshold: 0.9 }]" :class="{'move': move}" 
                    class="cursor-pointer lg:hidden flex items-center justify-center ms-auto rounded-full hover:bg-white-100" @click="toggleDropdown">
                        <Icon name="material-symbols:keyboard-arrow-down" class="icon-arrow-down rounded-full relative bottom-1 text-[2.7rem] mt-auto transition-all" />
                    </span>

                    <Transition>
                        <ul v-if="dropdown_menu" ref="dropdown" class="absolute bg-white top-0 right-0 border border-black-500 rounded-lg shadow-md transition-all">
                            <li v-for="({ label }, index) in sections" @click.prevent="select_index_mobile(index)"
                            class="cursor-pointer hover:bg-white-100 hover:text-gray-400 hover:border-gray-300 text-[20px] py-2 px-4 font-raleway border-b border-black-500 no-underline last:border-0">
                                {{ label }}
                            </li>
                        </ul>
                    </Transition>
                </div>
                <Transition name="fade" mode="out-in">
                    <p :key="selected_index" class="text-black text-[1.1rem] font-medium xl:min-w-[640px] xl:max-w-[760px] min-h-[25vh] xl:min-h-[31vh] mb-[1.8rem] max-lg:mb-[3.8rem]">
                        <HomeAboutDescription :index="selected_index" />
                    </p>
                </Transition>
                <ul class="navigation">
                    <li v-for="({ label }, index) in sections"
                    :class="{'selected': selected_index === index}"
                    @click="selected_index = index"
                    class="flex items-center font-semibold text-[1.2rem] lg:text-[1.3rem] cursor-pointer" :key="index">
                        {{ label }} <div class="cube mx-4 lg:mx-4 h-[10px] w-[10px]"></div>
                    </li>
                </ul>
            </div>
        </div>
        
    </section>
</template>
<script setup>
    import { onClickOutside } from '@vueuse/core';
    import { vIntersectionObserver } from '@vueuse/components';

    // mobile-dropdown
    const dropdown = ref(null);
    function close () {
        if (dropdown_menu.value) {
            dropdown_menu.value = false;
        }
    }
    onClickOutside(dropdown, close);
    const move = ref(false);
    const move_arrow = ([{ isIntersecting }]) => { 
        move.value = isIntersecting;
    }
    
    const select_index_mobile = (index) => {
        selected_index.value = index;
        dropdown_menu.value = false;
    }
    const dropdown_menu = ref(false);
    const toggleDropdown = () => {
        dropdown_menu.value =! dropdown_menu.value;
    }
    // section manager
    const selected_index = ref(0);
    const sections = ref([
            { 
                label: 'Nosotros',
                icon: "school",
                show: false,
                idle: false,
                title: '¿Qué es IPISA?',
                route: '/sobre-nosotros/ipisa',
            },
            {
                label: 'Filosofía',
                icon: 'philosofy',
                show: false,
                idle: false,
                title: 'Filosofía del centro',
                route: '/sobre-nosotros/filosofia',
            },
            {
                label: 'Historia',
                icon: 'history',
                show: false,
                idle: false,
                title: 'Nuestra trayectoria',
                route: '/sobre-nosotros/nuestra-trayectoria',
            },
            {
                label: 'Reconocimientos',
                icon: 'awards',
                show: false,
                idle: false,
                title: 'Reconocimientos',
                route: '/sobre-nosotros/reconocimientos',
            },
    ]);

    const selected_section = computed(() => sections.value[selected_index.value]);

    let animation_timeout = ref(0);
    watch(selected_index, (newVal, oldVal) => {
        // whenever we change the index we cancel the last show animation
        sections.value[oldVal].show = false;
        // we 
        if ( !sections.value[newVal].idle ) { 
            sections.value[selected_index.value].show = true;  
        } 

        animation_timeout = setTimeout( () => {
            sections.value[newVal].idle = true;
        }, 1400);
    })
    // animation
    function onView([{ isIntersecting }]) {
        if (isIntersecting && !sections.value[selected_index.value].idle) {
            sections.value[selected_index.value].show = true
            animation_timeout = setTimeout( () => {
                sections.value[selected_index.value].idle = true;
            }, 1400);
        };
    }

    onBeforeUnmount(() => {
        clearTimeout(animation_timeout.value)
    })
</script>
<style scoped>
.illustration :deep(svg) {
    @apply w-full lg:p-[40px];
}
.illustration.school :deep(svg) {
    @apply xl:max-w-[680px] max-sm:max-w-[300px] max-sm:h-[190px] max-w-[520px] h-[400px] lg:h-[500px] translate-y-[2vw] xl:translate-x-[-2vw];
}
.illustration.philosofy :deep(svg) {
    @apply xl:max-w-[690px] h-[300px] lg:h-[500px] translate-x-[-4vw] lg:translate-x-[-1-vw];
}
.illustration.history :deep(svg) {
    @apply xl:max-w-[760px] h-[300px] lg:h-[460px] translate-y-[40px];
}
.illustration.awards :deep(svg) {
    @apply xl:max-w-[760px] h-[300px] lg:h-[500px];
}
.content {
    @apply font-raleway text-black xl:ms-auto;
}
.content b {
    @apply font-bold;
}

.content ul.navigation {
    @apply hidden lg:flex flex-wrap max-xl:justify-center mt-auto;
}
.content ul.navigation li {
    @apply cursor-pointer hover:underline transition-all;
}
.content ul.navigation li:nth-child(odd) { @apply text-[#FF7320CC] hover:text-orange; }
.content ul.navigation li:nth-child(odd) .cube { @apply bg-[#FF7320CC]; }
.content ul.navigation li:nth-child(even) { @apply text-[#0478E0CC] hover:text-blue; }
.content ul.navigation li:nth-child(even) .cube { @apply bg-[#0478E0CC]; }

.content ul.navigation li.selected:nth-child(even) .cube { @apply bg-blue; }
.content ul.navigation li.selected:nth-child(odd) .cube { @apply bg-orange; }
.content ul.navigation li.selected { @apply underline; }
.content ul.navigation li.selected:nth-child(even) { @apply text-blue; }
.content ul.navigation li.selected:nth-child(odd) { @apply text-orange; }

.move .icon-arrow-down {
    animation: move-blink 550ms ease backwards 350ms 2;
}

@keyframes move-blink {
    0% {
        transform: translateY(0px);
    } 50% {
        transform: translateY(-6px);
        background-color: #f5f2f2;
    }
    100% {
        transform: translateY(0px);
    }
}
</style>