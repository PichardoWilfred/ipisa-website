<template>
    <about-portrait-component 
    picture="https://a.storyblok.com/f/272924/4000x3000/8a38807947/portrait-7.jpg" 
    picture_name="philosofy"
    wallpaper_phrase="Los Talleres" />
    <main class="info py-[4rem] sm:py-[2rem]">
        <h1 class="title">
            <span class="text-blue">Nuestros</span> <span class="orange">Talleres</span>
        </h1>
        <p class="text-justify text-black font-raleway text-[1.1rem] mx-auto w-[90%] min-[1400px]:w-[50%] mb-14">
            En IPISA, cada taller es una puerta de entrada a la excelencia académica y técnica. 
            Desde el fascinante universo de la Electrónica hasta la precisión del Mecanizado, nuestros programas están diseñados para nutrir 
            a los estudiantes con habilidades prácticas y conocimientos especializados. 
            <br><br>
            Cada taller es una oportunidad para forjar un camino 
            hacia el éxito, proporcionando a los estudiantes una base sólida y las herramientas necesarias para sobresalir en sus respectivos campos. 
            <b> Te invitamos a explorar cada taller en detalle y descubrir cómo en IPISA, estamos construyendo el futuro a través de la 
            educación de calidad. </b>
        </p>
        <div class="relative top-0 left-0 max-sm:py-[6rem] w-full min-[1480px]:w-[85%] mx-auto mb-[10rem] md:rounded-[35px] md:overflow-hidden">
            <!-- <div class="max-md:absolute top-0 left-0 w-full h-full"> -->
                <div class="workshop-image sticky md:absolute top-0 left-0 w-full h-screen md:h-[120vh] md:w-screen lg:w-full lg:h-full transition-all z-20">
                    <template v-if="!in_mobile">
                        <div v-if="in_tablet" class="tablet-color-bg relative w-full h-full overflow-hidden transition-all" 
                        :class="[{'blue-animation': blue_animation, 'orange-animation': orange_animation}]" />
                        <div v-if="!in_tablet" class="desktop-color-bg relative w-full h-full overflow-hidden transition-all" 
                        :class="[{'color-animation': color_animation }]" />
                    </template>
                    <template v-else>
                        <div class="absolute opacity-30 md:opacity-0 top-0 left-0 w-full h-full bg-white z-20" />
                    </template>
                    <nuxt-img v-for="({ img, name }, index) in cards" 
                    :src="`https://a.storyblok.com/f/272924/6000x4000/${img}/${name}-1.JPG`" sizes="600px md:1200px" densities="x1 x2"
                    class="absolute top-0 left-0 w-screen h-screen md:w-full md:h-full opacity-0 object-cover transition-all" 
                    :class="{'workshop-focused': (name === focused_workshop)}"
                    />
                </div>
            <!-- </div> -->
            <div class="card-container max-md:border-0 md:border-[5px] md:border-[white] md:radius-[30px] z-30" 
            ref="card_container" :class="{'translucent': enable_background}">
                <div class="card max-[1480px]:min-[800px]:flex-row max-[1480px]:min-[800px]:items-center
                flex flex-col justify-center md:bg-white text-black-700 object-cover cursor-pointer transition-all" 
                v-for="({ name, icon, title, description,  }, index) in cards" :key="index" :id="name" :class="[name]" 
                @click.prevent="go_to_workshop(icon)" @mouseenter.prevent="apply_background(name)">
                    <nuxt-icon class="no-shadow mx-auto max-[1480px]:min-[800px]:mx-[0] max-md:pt-10 mb-5 px-5" 
                    :name="`workshop/${icon}`" filled />
                    <div class="flex flex-col max-[1480px]:min-[800px]:items-start max-md:pb-10">
                        <h4 class="max-[1480px]:min-[800px]:text-start text-center my-[10px] font-bold font-raleway text-[1.3rem] leading-[20px]">
                            <template v-for="({ name, class_, br }, title_index) in title" >
                                <span v-if="!br" :class="class_" :key="title_index">
                                    {{ name }}
                                </span>
                                <br v-else />
                            </template>
                        </h4>
                        <p class="max-[1480px]:min-[800px]:text-start text-center font-raleway leading-[18px] max-w-[310px] md:mb-5 mx-auto">
                            {{ description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
    const go_to_workshop = async (path) => {    
        await navigateTo({ path: `talleres/${path}`});
    }
    const temp_timer = ref(0);

    const color_animation = ref(false);
    // these are reserved for medium & tablet
    const blue_animation = ref(false);
    const orange_animation = ref(false);

    const observer = ref(null);
    const once = ref(true);

    function trigger_animation() {
        once.value = false;
        if (in_tablet.value) {
            clearTimeout(temp_timer.value);
            blue_animation.value =! blue_animation.value; // ternary cause of debugging purposes
            temp_timer.value = setTimeout(() => {
                orange_animation.value =! orange_animation.value;
            }, 650);
        }else {
            color_animation.value =! color_animation.value; // ternary cause of debugging purposes
        }
        background_image_timer.value = setTimeout(() => {
            enable_background.value = true;
        }, in_tablet.value ? 1300 : 650);
    }
    const card_container = ref(null);

    const in_tablet = ref(false);
    const in_mobile = ref(false);

    // cards
    const cards = reactive([
        {
            icon: 'confeccion-patronaje',
            name: 'confeccion',
            img: 'c42bb835ec',
            title: [
                {
                    class_: 'blue',
                    name: 'Confección'
                },
                {
                    class_: 'separator',
                    name: ' & '
                },
                {
                    class_: 'orange',
                    name: 'Patronaje'
                },
            ],
            description: "Enseñanza de técnicas de costura, diseño y confección de prendas de vestir.",
            element: null,
            show_element: false
        },        
        {
            icon: 'desarrollo-aplicaciones-informaticas',
            name: 'desarrollo',
            img: '57f64b960e',
            title: [
                {
                    class_: 'blue',
                    name: 'Desarrollo'
                },
                {
                    class_: 'separator',
                    name: ' & '
                },
                {
                    class_: 'orange',
                    name: 'Administración'
                },
                {
                    br: true
                },
                {
                    class_: 'separator',
                    name: ' de '
                },
                {
                    class_: 'blue',
                    name: 'Aplicaciones'
                },
                {
                    class_: 'orange',
                    name: ' Informáticas'
                }
            ],
            description: "Formación en software, programación, redes y tecnologías de la información.",
            element: null,
            show_element: false
        },
        {
            icon: 'electromecanica-vehiculos',
            name: 'electromecanica',
            img: 'cd58eae062',
            title: [
                {
                    class_: 'blue',
                    name: 'Electromecánica'
                },
                {
                    class_: 'separator',
                    name: ' de '
                },
                { 
                    br: true
                },
                {
                    class_: 'orange',
                    name: 'Vehículos'
                },
            ],
            description: "Estudio de motores, sistemas de transmisión, mantenimiento y reparación de vehículos.",
            element: null,
            show_element: false
        },
        {
            icon: 'gestion-administrativa-tributaria',
            name: 'gestion',
            img: 'f44213de5b',
            title: [
                {
                    class_: 'blue',
                    name: 'Gestión Administrativa'
                },
                {
                    class_: 'separator',
                    name: ' & '
                },
                { 
                    br: true
                },
                {
                    class_: 'orange',
                    name: 'Tributaria'
                },
            ],
            description: "Enfoque en principios contables, análisis financiero y gestión financiera empresarial.",
            element: null,
            show_element: false
        },
        {
            icon: 'equipos-electronicos',
            name: 'equipos',
            img: '0b7d736aa0',
            title: [
                {
                    class_: 'blue',
                    name: 'Equipos '
                },
                {
                    class_: 'orange',
                    name: 'Electrónicos'
                },
            ],
            description: "Enfoque en circuitos, componentes electrónicos y sistemas de control electrónico.",
            element: null,
            show_element: false
        },
        {
            icon: 'ensamblaje-muebles',
            name: 'ensamblaje',
            img: 'c20dbecd13',
            title: [
                {
                    class_: 'blue',
                    name: 'Ensamblaje'
                },
                {
                    class_: 'separator',
                    name: ' de '
                },
                {
                    class_: 'orange',
                    name: 'Muebles'
                },
            ],
            description: "Enseñanza de técnicas de carpintería, trabajos en madera y diseño de muebles.",
            element: null,
            show_element: false
        },
        {
            icon: 'mecanizado',
            name: 'mecanizado',
            img: 'b57f103738',
            title: [
                {
                    class_: 'blue',
                    name: 'Meca'
                },
                {
                    class_: 'orange',
                    name: 'nizado'
                },
            ],
            description: "Aprendizaje en maquinaria, sistemas industriales y procesos de fabricación.",
            element: null,
            show_element: false
        },
        {
            icon: 'instalaciones-electricas',
            name: 'instalaciones',
            img: '99374acc05',
            title: [
                {
                    class_: 'blue',
                    name: 'Instalaciones '
                },
                {
                    class_: 'orange',
                    name: 'Eléctricas'
                },
            ],
            description: "Formación en instalaciones eléctricas, sistemas de iluminación y circuitos eléctricos.",
            element: null,
            show_element: false
        }
    ]);
    const img_src = useImage();

    const focused_workshop = ref(null);
    const background_image_timer = ref(0);
    const enable_background = ref(false);
    const background_timer = ref(0);

    const apply_background = (workshop) => {
        clearTimeout(background_timer.value);
        background_timer.value = setTimeout(() => {
            if (focused_workshop.value === workshop || !enable_background.value) return;
            focused_workshop.value = workshop;
        }, 120);
    }
    
    onMounted(() => {
        in_tablet.value = window.matchMedia("(min-width: 800px) and (max-width: 1480px)").matches;
        in_mobile.value = window.matchMedia("(max-width: 992px)").matches;
        if (in_mobile.value) {
            function observe_card_callback(entries, observer) { // callback
                enable_background.value = true;
                entries.forEach(({ target, intersectionRatio}) => {
                    if ((intersectionRatio * 100) > 50.00) {
                        apply_background(target.id);
                    }
                });
            }
            observer.value = new IntersectionObserver(observe_card_callback, { threshold: in_tablet.value ? 0.5 : 1 }); // to disconnect it later
            cards.map(({ name }) => {
                const element = document.querySelector(`#${name}`);
                observer.value.observe(element);
            });
        }else {
            function observe_container_callback(entries, observer) { // callback
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (once.value) trigger_animation();
                    }
                });
            }
            observer.value = new IntersectionObserver(observe_container_callback, { threshold: in_tablet.value ? 0.5 : 1 }); // to disconnect it later
            observer.value.observe(card_container.value);
        }
    });
    onBeforeUnmount(() => {
        observer.value.disconnect();
        
        clearTimeout(background_timer.value);
        clearTimeout(temp_timer.value);
        clearTimeout(background_image_timer.value);

    });
</script>
<style scoped>
div.portrait :deep(img.wallpaper) {
    object-position: 0px 35%;
}
.card-container {
    position: relative;
    display: grid;
    justify-content: center;
    gap: 2px;
}
img.workshop-focused {
    opacity: 0.25;
    animation: zoom-in 150ms ease-in-out forwards;
}
@keyframes zoom-in {
    from {
        filter: blur(10px);
        transform: scale(1.05);
    }to {
        filter: blur(0px);
        transform: scale(1);
    }
}
.card-container.translucent {
    animation: card-container-show 300ms ease-in-out forwards;
}
@keyframes card-container-show {
    from {  
        opacity: 0;
        gap: 2px;
    } to {
        opacity: 1;
        gap: 0px;
    }
}
.card-container.translucent .card {
    font-weight: 500;
    color: #5E6B81;
    background-color: transparent;
    
    border-left: 2px solid white;
    border-bottom: 2px solid white;
}
.card-container.translucent .card:hover {
    background-color: white;
    color: var(--black-700);
    border-color: transparent;
}
.card-container.translucent .card :deep(svg) .shadow {
    opacity: 0; 
    transition: var(--default-tw-transition);
}
.card-container.translucent .card:hover :deep(svg) .shadow {
    opacity: 1;
}
.card.confeccion :deep(svg){
    width: 140px;
    height: 130px;
}
.card.desarrollo :deep(svg){
    width: 180px;
    height: 110px;
}
.card.electromecanica :deep(svg){
    width: 170px;
    height: 95px;
}
.card.gestion :deep(svg){
    width: 160px;
    height: 120px;
}
.card.equipos :deep(svg) {
    width: 160px;
    height: 145px;
    transform: translateX(20px) translateY(20px);
}
.card.ensamblaje :deep(svg) {
    width: 180px;
    height: 120px;
}
.card.mecanizado :deep(svg) {
    width: 190px;
    height: 130px;
}
.card.instalaciones :deep(svg) {
    width: 130px;
    height: 110px;
}
.card-container .card :deep(svg) {
    transform: scale(1.1) translateY(15px)
}
.card.desarrollo h4 {
    font-size: 0.99rem;
}
.card:is(.gestion, .electromecanica) h4 {
    font-size: 1.2rem;
}
.desktop-color-bg.color-animation {
    animation: gray-background 800ms ease-in-out 1;
}
@keyframes gray-background {
    0% {
        background-color: white;
    }
    15%, 85% {
        background-color: #E9F3FF;
    }
    100% {
        background-color: white;
    }
}
.desktop-color-bg.color-animation::after { /* animation */
    content: '';
    display: block;
    position: absolute;
    top: 0px;
    right: 0;
    width: 100%;
    height: 20%;
    animation: color-vertical-movement 500ms ease-in-out 1 forwards 120ms;
}
@keyframes color-vertical-movement {
    from {
        transform: translateY(-120%);
        background: linear-gradient(180deg, #DAEEFF 0%, #6FBBFF 40%, #52ADFF 53.5%, #85C5FF 65%, #DAEEFF 100%);
    }
    40% {
        background: linear-gradient(180deg, #DAEEFF 0%, #6FBBFF 40%, #52ADFF 53.5%, #85C5FF 65%, #DAEEFF 100%);
    }
    45% {
        background: linear-gradient(180deg, #F1F7FF 0%, #CEE4FF 54.64%, #F1F7FF 107.14%);
    }
    50% {
        background: linear-gradient(180deg, #ffede1 0.3%, #FFBF99 23.3%, #FFAB79 51.83%, #FFCAAB 74.8%, #ffede1 100.3%);
    }
    to {
        transform: translateY(495%);
        background: linear-gradient(180deg, #ffede1 0.3%, #FFBF99 23.3%, #FFAB79 51.83%, #FFCAAB 74.8%, #ffede1 100.3%);
    }
}
.middle-bg {
    position: absolute;
    display: block;
    top: 0;
    left: 48%;
    width: 5%;
    height: 20%;
}
/* background: linear-gradient(180deg, #F1F7FF 0%, #CEE4FF 54.64%, #F1F7FF 107.14%); */
.tablet-color-bg.blue-animation { /* animation */
    animation: blue-background 700ms ease-in-out 1;
}
@keyframes blue-background {
    0% {
        background-color: white;
    }
    15%, 85% {
        background-color: #DAEEFF;
    }
    100% {
        background-color: white;
    }
}
.tablet-color-bg.blue-animation::before { /* animation */
    content: '';
    display: block;
    position: relative;
    width: 100%;
    height: 50%;
    animation: blue-vertical-movement 500ms ease-in-out 1 forwards 120ms;
}
@keyframes blue-vertical-movement {
    from {
        transform: translateY(-120%);
        background: linear-gradient(180deg, #DAEEFF 0%, #6FBBFF 40%, #52ADFF 53.5%, #85C5FF 65%, #DAEEFF 100%);
    }
    to {
        transform: translateY(500%);
        background: linear-gradient(180deg, #DAEEFF 0%, #6FBBFF 40%, #52ADFF 53.5%, #85C5FF 65%, #DAEEFF 100%);
    }
}
.tablet-color-bg.orange-animation { /* animation */
    animation: orange-background 700ms ease-in-out 1;
}
@keyframes orange-background {
    0% {
        background-color: white;
    }
    15%, 85% {
        background-color: #FFD9C2;
    }
    100% {
        background-color: white;
    }
}
.tablet-color-bg.orange-animation::after { /* animation */
    content: '';
    display: block;
    position: relative;
    top: -50%;
    width: 10%;
    height: 100%;
    animation: horizontal-movement 400ms ease-in-out 1 forwards 120ms;
}
@keyframes horizontal-movement {
    from {
        transform: translateX(-20%);
        background: linear-gradient(270deg, #FFD9C2 0.3%, #FFBF99 23.3%, #FF7320 51.83%, #FFCAAB 74.8%, #FFD9C2 100.3%);
    }
    to {
        transform: translateX(1000%);
        background: linear-gradient(270deg, #FFD9C2 0.3%, #FFBF99 23.3%, #FF7320 51.83%, #FFCAAB 74.8%, #FFD9C2 100.3%);
    }
}
@media (min-width: 800px) and (max-width: 1480px) {
    .card-container {
        grid-template-columns: repeat(2, 50%);
        grid-template-rows: repeat(4, 270px);
    }
    .card-container .card { gap: 2px; }
    .card.confeccion :deep(svg) {
        width: 10vw;
    }
    .card.desarrollo :deep(svg) {
        width: 15vw;
    }
    .card.electromecanica :deep(svg) {
        width: 13vw;
    }
    .card.gestion :deep(svg) {
        width: 13vw;
    }
    .card.equipos :deep(svg) {
        width: 13vw;
        transform: translateX(7px) translateY(20px);
    }
    .card.ensamblaje :deep(svg) {
        width: 12vw;
    }
    .card.mecanizado :deep(svg) {
        width: 10vw;
    }
    .card.instalaciones :deep(svg) {
        width: 10vw;
    }
}

@media (min-width: 1480px) {
    .card-container {
        grid-template-columns: repeat(4, 25%);
        grid-template-rows: repeat(2, 50%);
        height: 100%;
    }
}
@media (max-width: 800px) {
    .card-container {
        grid-template-columns: repeat(1, min(470px, 81.5vw));
        grid-template-rows: repeat(8, 80vh);
        row-gap: 20vh;
    }
    .card-container .card:first-child { padding-top: 20vh; }
    .card-container .card:last-child { padding-bottom: 20vh; }
    .card-container.translucent .card {
        border-color: transparent;
    }
    .card-container.translucent .card:hover {
        background-color: transparent;
    }
}

</style>

