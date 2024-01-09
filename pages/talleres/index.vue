<template>
    <WallpaperPlaceholder />   
    <main class="min-h-[50vh] py-24">
        <div class="flex-col items-center">
            <button class="font-raleway font-medium text-[2rem] bg-blue-300 text-white px-10 py-4 radius-[4px] max-w-[320px]" 
            @click.prevent="trigger_animation">
                animate
            </button>
        </div>
        <div class="relative max-sm:py-[20rem] w-[98%] min-[1480px]:w-[85%] mx-auto">
            <div class="absolute w-full h-full z-30">
                <div v-if="in_tablet" class="tablet-color-bg" :class="[{'blue-animation': blue_animation, 'orange-animation': orange_animation}]" />
                <div v-if="!in_tablet" class="desktop-color-bg" :class="[{'color-animation': color_animation }]">
                    <!-- <div class="middle-bg" /> -->
                </div>
            </div>
            <div class="card-container z-40" ref="card_container">
                <div class="card" v-for="({ icon, title, icon_class, show_element, description }, index) in cards" :key="index" @mousemove.passive="trackMouse"
                :ref="(el) => { cards[index].element = el}" :class="[icon_class]">
                    <nuxt-icon class="mx-auto max-[1480px]:min-[800px]:mx-[0] mb-5 px-5" :name="icon" filled />
                    <div class="flex flex-col max-[1480px]:min-[800px]:items-start">
                        <h4 class="max-[1480px]:min-[800px]:text-start text-center my-[10px] font-bold font-raleway text-[1.3rem] leading-[20px]">
                            <template v-for="({ name, class_, br }, title_index) in title" >
                                <span v-if="!br" :class="class_" :key="title_index">
                                    {{ name }}
                                </span>
                                <br v-else />
                            </template>
                        </h4>
                        <p class="max-[1480px]:min-[800px]:text-start text-center font-raleway text-[#7D96BD] font-medium leading-[18px] max-w-[310px] mx-auto">
                            {{ description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>



    //(TODO) convert this into somethign with animation end
    const temp_timer = ref(0);

    const color_animation = ref(false);
    // these are reserved for medium & tablet
    const blue_animation = ref(false);
    const orange_animation = ref(false);

    const observer = ref(null);
    const once = ref(true);

    function trigger_animation() {
        if (in_tablet.value) {
            once.value = false;
            clearTimeout(temp_timer.value);
            blue_animation.value =! blue_animation.value;
            temp_timer.value = setTimeout(() => {
                orange_animation.value =! orange_animation.value;
            }, 650);
        }else {
            color_animation.value =! color_animation.value;
        }
    }
    const card_container = ref(null);

    const in_tablet = ref(false);

    // cards
    const cards = reactive([
        {
            icon: 'workshop/confeccion-patronaje',
            icon_class: 'confeccion',
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
            icon: 'workshop/desarrollo-aplicaciones-informaticas',
            icon_class: 'desarrollo',
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
            icon: 'workshop/electromecanica-vehiculos',
            icon_class: 'electromecanica',
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
            icon: 'workshop/gestion-administrativa-tributaria',
            icon_class: 'gestion',
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
            icon: 'workshop/equipos-electronicos',
            icon_class: 'equipos',
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
            icon: 'workshop/ensamblaje-muebles',
            icon_class: 'ensamblaje',
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
            icon: 'workshop/mecanizado',
            icon_class: 'mecanizado',
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
            icon: 'workshop/instalaciones-electricas',
            icon_class: 'instalaciones',
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

    const clientX = ref(0);
    const clientY = ref(0);


    const trackMouse = (e) => { // for translating the shapes depending on the mouse
        // const parentRect = card_container.value.getBoundingClientRect(); // Get the parent's bounding client
        // clientX.value = e.clientX - parentRect.left;
        // clientY.value = e.clientY - parentRect.top;

        // document.querySelectorAll("#shape-container").forEach( (shape) => {
        //     const multiplier = shape.getAttribute("data-multiplier");

        //     let x_axis = clientX.value * multiplier / 100;
        //     let y_axis = clientY.value * multiplier / 100;

        //     shape.style.transform = `translateX(${x_axis}px) translateY(${y_axis}px)`;
        // });
    }
    onMounted(() => {
        in_tablet.value = window.matchMedia("(min-width: 800px) and (max-width: 1480px)").matches;
        // callback
        function observer_callback(entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) if (once.value) trigger_animation();
            });
        }
        observer.value = new IntersectionObserver(observer_callback, { threshold: in_tablet.value ? 0.5 : 1 }); // to disconnect it later
        observer.value.observe(card_container.value);
    });
    onBeforeUnmount(() => {
        observer.value.disconnect();
        clearTimeout(temp_timer.value);
    });
</script>
<style scoped>
.card-container {
    position: relative;
    display: grid;
    justify-content: center;
    gap: 2px;
    border: 3px solid white;
}
.card {
    @apply flex flex-col 
    max-[1480px]:min-[800px]:flex-row max-[1480px]:min-[800px]:items-center justify-center 
    cursor-pointer min-[800px]:bg-white transition-all;
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
    @apply scale-[1.1] translate-y-[15px];
}
.card.desarrollo h4 {
    @apply text-[0.99rem];
}
.card:is(.gestion, .electromecanica) h4 {
    @apply text-[1.2rem];
}
.white-blur {
    @apply absolute top-0 left-0 w-full h-full z-30;
    background: linear-gradient(98deg, rgba(255, 255, 255, 0.404) 25%, rgba(255, 255, 255, 0.40) 78.3%);
    backdrop-filter: blur(6px);
}
.desktop-color-bg {
    position: relative; width: 100%; height: 100%; overflow: hidden;
    @apply transition-all;
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

.desktop-color-bg.color-animation::before { /* animation */
    content: '';
    display: block;
    position: absolute;
    top: 0px;
    left: 0;
    width: 43%;
    height: 20%;
    animation: blue-vertical-movement 500ms ease-in-out 1 forwards 120ms;
}
.desktop-color-bg.color-animation::after { /* animation */
    content: '';
    display: block;
    position: absolute;
    top: 0px;
    right: 0;
    width: 43%;
    height: 20%;
    animation: orange-vertical-movement 500ms ease-in-out 1 forwards 120ms;
}
.middle-bg {
    position: absolute;
    display: block;
    top: 0;
    left: 48%;
    width: 5%;
    height: 20%;
}
.desktop-color-bg.color-animation .middle-bg {
    animation: gray-vertical-movement 500ms ease-in-out 1 forwards 120ms;
}
@keyframes gray-vertical-movement {
    from {
        transform: translateY(-120%);
        background: linear-gradient(180deg, #c3d4eb 0%, #94acc9 54.64%, #c3d4eb 107.14%);
    }
    to {
        transform: translateY(500%);
        background: linear-gradient(180deg, #c3d4eb 0%, #94acc9 54.64%, #c3d4eb 107.14%);
    }
}
/* background: linear-gradient(180deg, #F1F7FF 0%, #CEE4FF 54.64%, #F1F7FF 107.14%); */
.tablet-color-bg {
    position: relative; width: 100%; height: 100%; overflow: hidden;
    @apply transition-all;
}
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
@keyframes orange-vertical-movement {
    from {
        transform: translateY(-120%);
        background: linear-gradient(180deg, #ffede1 0.3%, #FFBF99 23.3%, #FFAB79 51.83%, #FFCAAB 74.8%, #ffede1 100.3%);
    }
    to {
        transform: translateY(500%);
        background: linear-gradient(180deg, #ffede1 0.3%, #FFBF99 23.3%, #FFAB79 51.83%, #FFCAAB 74.8%, #ffede1 100.3%);
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
        grid-template-rows: repeat(8, 282px);
        gap: 50vh;
    }
}

</style>

