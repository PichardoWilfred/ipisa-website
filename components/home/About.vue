<template>
    <section class="relative pt-[4rem] lg:pt-[8rem] mb-[3rem] z-20">
        <div class="flex flex-col-reverse xl:flex-row items-center max-w-[1700px] px-[5vw] mx-auto min-h-[552px]">

            <Transition name="fade" mode="out-in">    
                <div class="illustration" :class="selected_section.icon" v-intersection-observer="[onView, {threshold: 0.9}]" :key="selected_index">
                    <nuxt-icon :name="`home/about/${selected_section.icon}`" :class="{'show': selected_section.show, 'idle': selected_section.idle}" filled />
                </div>
            </Transition>

            <div class="content">
                <div class="flex relative items-center max-lg:mb-3">
                    <Transition name="fade" mode="out-in">
                        <h1 class="flex items-end font-bold text-[1.8rem] sm:text-[2.1rem] lg:text-[3.6rem] cursor-pointer transition-all" :key="selected_index" >
                            <a class="hover:underline">
                                {{ selected_section.title }}
                            </a>
                            <span class="max-lg:hidden">
                                <Icon name="fe:link" class=" ms-1 text-[2.5rem] separator mb-3" />
                            </span>
                        </h1>
                    </Transition>

                    <span class="cursor-pointer lg:hidden flex items-center justify-center ms-auto rounded-full hover:bg-white-100" @click="toggleDropdown">
                        <Icon name="material-symbols:keyboard-arrow-down" class="text-[2.7rem] mt-auto transition-all" />
                    </span>

                    <Transition>
                        <ul v-if="dropdown_menu" ref="dropdown" class="absolute bg-white top-0 right-0 border border-gray-100 rounded-lg shadow-md transition-all">
                            <li v-for="({ label }, index) in sections" @click.prevent="select_index_mobile(index)"
                            class="cursor-pointer hover:bg-white-100 hover:text-gray-400 hover:border-gray-300 text-[20px] py-2 px-4 font-raleway border-b border-gray-100 no-underline last:border-0">
                                {{ label }}
                            </li>
                        </ul>
                    </Transition>
                </div>
                <Transition name="fade" mode="out-in">
                    <p v-html="selected_section.description" :key="selected_index" 
                    class="text-black text-[1.1rem] font-medium xl:min-w-[640px] xl:max-w-[760px] min-h-[25vh] xl:min-h-[30vh] mb-[1.8rem] max-lg:mb-[3.8rem]"></p>
                </Transition>
                
                <ul class="navigation">
                    <li v-for="({ label }, index) in sections"
                    :class="{'selected': selected_index === index}"
                    @click="selected_index = index"
                    class="flex items-center font-bold text-[1.2rem] lg:text-[1.3rem] cursor-pointer" :key="index">
                        {{ label }} <div class="cube mx-4 lg:mx-4 h-[10px] w-[10px]"></div>
                    </li>
                </ul>
            </div>
        </div>
        
        <!-- <hr class="border-gray-100 mt-[8rem]"> -->
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
                title: '¿Qué Ofrece IPISA?',
                description: `El Instituto Politécnico Industrial de Santiago <b>(IPISA)</b> es una institución educativa de renombre que destaca por su enfoque 
                en la formación técnica y su firme compromiso con los valores cristianos. Su lema: <b class="text-blue">"Buenos Cristianos</b> <b class="separator">y</b> 
                <b class="orange">Honrados Ciudadanos"</b>, encapsula su misión de brindar una educación integral que combine habilidades técnicas y valores éticos. 
                <br /> <br/>
                Nos enorgullecemos de ofrecer educación de alta calidad en diversas disciplinas técnicas, preparando a los estudiantes para enfrentar el mundo laboral 
                con confianza y ética. Nuestra énfasis en la <b class="text-blue">excelencia</b> <b class="orange">académica</b>, la formación en valores y una amplia 
                gama de actividades extracurriculares hacen de IPISA una institución educativa de elección para aquellos que buscan una educación técnica sólida y una 
                base sólida en principios éticos.`
            },
            {
                label: 'Filosofía',
                icon: 'philosofy',
                show: false,
                idle: false,
                title: 'Filosofía del centro',
                description: `La visión educativa del centro se inspira en el sistema preventivo de <b class="text-blue-300 underline">Don Bosco</b>, fundamentado 
                en <b class="text-blue">la razón,</b> <b class="orange">la religión</b> <b class="separator">y</b> <b class="text-blue">el amor</b>. Este enfoque busca formar a jóvenes centrados en valores éticos y preparados para convertirse en ciudadanos 
                responsables y comprometidos con la sociedad.
                <br /> <br />
                Este sistema educativo se caracteriza por el <b>equilibrio</b> entre la dimensión espiritual y la formación integral de los estudiantes. 
                Promueve valores como la responsabilidad, la calidad, la ciudadanía, la ética, la integridad, la honradez y la justicia. A través de este enfoque, 
                <b>IPISA</b> se esfuerza por brindar una educación de calidad que fortalezca tanto los aspectos humanos y éticos como los <b class="text-blue">técnicos</b> 
                <b class="separator">y</b> <b class="orange">académicos.</b>`
            },
            {
                label: 'Historia',
                icon: 'history',
                show: false,
                idle: false,
                title: 'Historia del centro',
                description: `Fundado en <b class="orange">19</b><b class="text-blue">88</b>, el IPISA nació como una respuesta a la creciente demanda de educación técnica en la Región Norte de la República Dominicana. 
                Bajo la dirección de la congregación salesiana y con el respaldo decidido de la comunidad empresarial, este centro educativo asumió desde sus inicios el 
                compromiso de brindar una formación de excelencia a sus estudiantes. 
                <br /> <br />
                Aunque inicialmente fue <b>exclusivo para jóvenes varones, pronto se abrió sus puertas a las mujeres</b> y diversificó su oferta de talleres. Hoy en día, 
                arraigado en los principios del <b class="text-blue">Sistema Preventivo</b> <b class="separator">de</b> <b class="orange">San Juan Bosco</b>, el IPISA ha 
                graduado a más de <b>2,664</b> estudiantes y mantiene vínculos sólidos con una activa comunidad de exalumnos comprometidos con la institución.`
            },
            {
                label: 'Reconocimientos',
                icon: 'awards',
                show: false,
                idle: false,
                title: 'Reconocimientos',
                description: `Fundado en <b class="orange">19</b><b class="text-blue">88</b>, el IPISA nació como una respuesta a la creciente demanda de 
                educación técnica en la Región Norte de la República Dominicana. Bajo la dirección de la congregación salesiana y con el respaldo decidido 
                de la comunidad empresarial, este centro educativo asumió desde sus inicios el compromiso de brindar una formación de excelencia a sus 
                estudiantes. 
                <br /> <br />
                Aunque inicialmente fue exclusivo para jóvenes varones, pronto se abrió sus puertas a las mujeres y diversificó su oferta de talleres. Hoy en día, 
                arraigado en los principios del Sistema Preventivo de San Juan Bosco, el IPISA ha graduado a más de 2,664 estudiantes y mantiene vínculos sólidos con 
                una activa comunidad de exalumnos comprometidos con la institución y su misión educativa.`
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
    // const debug_animation = ref('');
    
    // const show_animation = () => {
    //     if (debug_animation.value === 'show') {
    //         clearTimeout(animation_timeout.value); 
    //     }else {
    //         debug_animation.value = 'show';
    //         animation_timeout = setTimeout(() => {
    //             debug_animation.value = 'idle';
    //         }, 1900);
    //     }
    // }
    onBeforeUnmount(() => {
        clearTimeout(animation_timeout.value)
    })
</script>
<style scoped>
.illustration :deep(svg) {
    @apply w-full lg:p-[40px];
}
.illustration.school :deep(svg) {
    @apply xl:max-w-[680px] max-sm:max-w-[300px] max-sm:h-[190px] max-w-[520px] h-[400px] lg:h-[500px] translate-y-[2vw];
}
.illustration.philosofy :deep(svg) {
    @apply xl:max-w-[690px] h-[300px] lg:h-[500px] translate-x-[-2vw] lg:translate-x-[30px];
}
.illustration.history :deep(svg) {
    @apply xl:max-w-[760px] h-[300px] lg:h-[500px] translate-y-[60px];
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

.fade-enter-active, .fade-leave-active { transition: opacity 300ms var(--ease-1); }
.fade-enter-from, .fade-leave-to { opacity: 0; }

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



</style>