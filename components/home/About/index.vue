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
                            <h1 class="title font-semibold text-[1.8rem] sm:text-[2.1rem] lg:text-[3.6rem] cursor-pointer transition-all hover:opacity-70" :key="selected_index">
                                <span v-for="(title_, index) in selected_section.title" :class="`text-${title_.color}`" class="">
                                    {{ title_.text }}
                                </span>
                                <span class="hidden">
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
                    <li v-for="({ label }, index) in sections" :class="{'selected': selected_index === index}" @click="selected_index = index"
                    class="flex items-center font-semibold text-[1.2rem] lg:text-[1.3rem] cursor-pointer" :key="index">
                        {{ label }}
                        <div v-if="(index + 1) !== sections.length" class="cube bg-black-500 mx-4 lg:mx-4 h-[10px] w-[10px]"></div>
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
                title: [
                    {
                        text: '¿Qué ',
                        color: 'blue'
                    },
                    {
                        text: ' es',
                        color: 'separator'
                    },
                    {
                        text: ' IPISA?',
                        color: 'orange-300'
                    }
                ],
                route: '/sobre-nosotros/ipisa',
            },
            {
                label: 'Filosofía',
                icon: 'philosofy',
                show: false,
                idle: false,
                title: [ // title: 'Filosofía del centro',
                    {
                        text: 'Filosofía ',
                        color: 'blue'
                    },
                    {
                        text: ' del',
                        color: 'separator'
                    },
                    {
                        text: ' centro',
                        color: 'orange-300'
                    }
                ],
                route: '/sobre-nosotros/filosofia',
            },
            {
                label: 'Historia',
                icon: 'history',
                show: false,
                idle: false,
                title: [ // title: 'Nuestra trayectoria',
                    {
                        text: 'Nuestra ',
                        color: 'blue'
                    },
                    {
                        text: ' trayectoria',
                        color: 'orange-300'
                    }
                ],
                
                route: '/sobre-nosotros/nuestra-trayectoria',
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
    width: 100%;
}
.illustration.school :deep(svg) {
    max-width: 520px;
    height: 400px;
    transform: translateY(2vw);
}
.illustration.philosofy :deep(svg) {
    height: 300px;
    transform: translateX(-4vw);
}
.illustration.history :deep(svg) {
    height: 300px;
    transform: translateY(40px);
}
.illustration.awards :deep(svg) {
    height: 300px;
}
.content {
    font-family: "Raleway", "Helvetica Neue", Helvetica, sans-serif;
    color: var(--black);
}
.content b {
    font-weight: bold
}
.content ul.navigation {
    display: none; 
    flex-wrap: wrap; 
}
.content ul.navigation li {
    cursor: pointer; 
    transition: var(--default-tw-transition);
}
.content ul.navigation li:hover {
    text-decoration: underline;
}

.content ul.navigation li:nth-child(odd) { color: #FF7320CC; }
.content ul.navigation li:nth-child(odd):hover { color: var(--orange); }
.content ul.navigation li:nth-child(even) { color: #0478E0CC; }
.content ul.navigation li:nth-child(even):hover { color: var(--blue); }

.content ul.navigation li.selected { text-decoration: underline; }
.content ul.navigation li.selected:nth-child(even ) { color: var(--blue); }
.content ul.navigation li.selected:nth-child(odd) { color: var(--orange); }

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

@media (max-width: 576px) {
    .illustration.school :deep(svg) {
        max-width: 300px;
        height: 190px;
    }
}
@media (min-width: 992px) {
    .content ul.navigation {
        display: flex;
    }
    .illustration :deep(svg) {
        padding: 40px;
    }
    .illustration.school :deep(svg) {
        height: 500px;
    }
    .illustration.philosofy :deep(svg) {
        height: 500px;
        transform: translateX(-1vw);
    }
    .illustration.history :deep(svg) {
        height: 460px;
    }
    .illustration.awards :deep(svg) {
        height: 500px;
    }
}
@media (min-width: 1200px) {
    .content {
        margin-left: auto;
    }
    .illustration.awards :deep(svg) {
        max-width: 760px;
    }
    .illustration.school :deep(svg) {
        max-width: 680px;
        transform: translateX(-2vw);
    }
    .illustration.philosofy :deep(svg) {
        max-width: 690px;
    }
    .illustration.history :deep(svg) {
        max-width: 760px;
    }
}
@media (max-width: 1200px) {
    .content ul.navigation {
        justify-content: center;
    }
}
</style>