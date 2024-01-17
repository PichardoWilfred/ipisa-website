<template>
    <section class="mt-[70px] relative pt-[2rem] h-[auto] z-20" id="workshop">
        <div class="font-raleway max-w-[1700px] mx-auto px-[5vw] mb-[3rem] text-black">
            <h1 class="text-[2.2rem] lg:text-[3.6rem] max-lg:mb-3">
                <b class="text-blue">Nuestros</b> <b class="orange">Talleres</b> (testing no bg)
            </h1>
            <p class="font-medium text-[1.1rem] max-w-[900px]">
                Nuestra área técnica es el corazón de la formación que ofrece la institución. Aquí, los estudiantes tienen la oportunidad de adquirir habilidades técnicas y conocimientos especializados en una variedad de disciplinas, preparándolos para enfrentar con éxito los desafíos del mundo laboral.
                <br><br>
                <span class="max-md:font-semibold">
                    <span class="text-blue">A continuación, te presentaremos de manera formal </span> 
                    <nuxt-link to="/talleres" class="text-orange-300 underline cursor-pointer">los diversos talleres disponibles en el centro.</nuxt-link>
                </span>
            </p>
        </div>
        <div class="relative bg-white py-[8rem] z-10" id="card-container" >
            <div v-if="!in_mobile" class="absolute max-lg:flex-col flex w-full h-full overflow-hidden top-0 left-0" ref="container">
                <HomeWorkshopBlueShapes />
                <HomeWorkshopOrangeShapes />
                <div class="blue-background color-background" />
                <div class="orange-background color-background" />
                <div class="white-blur" />
            </div>
            <div class="card-container relative w-[85%] h-full mx-auto z-40" @mousemove.passive="trackMouse"> 
                <div class="card flex flex-col justify-end rounded-[20px] cursor-pointer transition-all" @click.prevent="go_to_workshop(card_name)"
                v-for="({ title, card_name, show_element }, index) in cards" :key="index" :id="card_name"
                :class="[card_name, {'in-viewport': show_element }]">
                    <nuxt-icon class="mx-auto" :name="`workshop/${card_name}`" filled />
                    <h4>
                        <template v-for="({ name, class_, br }, title_index) in title" >
                            <span v-if="!br" :class="class_" :key="title_index">
                                {{ name }}
                            </span>
                            <br v-else />
                        </template>
                    </h4>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
    import { useIntersectionObserver } from '@vueuse/core';
    
    // cards
    const cards = reactive([
        {
            card_name: 'confeccion-patronaje',
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
            show_element: false
        },        
        {
            card_name: 'desarrollo-aplicaciones-informaticas',
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
            show_element: false
        },
        {
            card_name: 'electromecanica-vehiculos',
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
            show_element: false
        },
        {
            card_name: 'gestion-administrativa-tributaria',
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
            show_element: false
        },
        {
            card_name: 'equipos-electronicos',
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
            show_element: false
        },
        {
            card_name: 'ensamblaje-muebles',
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
            show_element: false
        },
        {
            card_name: 'mecanizado',
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
            show_element: false
        },
        {
            card_name: 'instalaciones-electricas',
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
            show_element: false
        }
    ]);
    const clientX = ref(0);
    const clientY = ref(0);

    const card_container = ref(null);
    const go_to_workshop = async (path) => {    
        await navigateTo({ path: `talleres/${path}`});
    }
    const trackMouse = (e) => { // for translating the shapes depending on the mouse
        const parentRect = card_container.value.getBoundingClientRect(); // Get the parent's bounding client
        clientX.value = e.clientX - parentRect.left;
        clientY.value = e.clientY - parentRect.top;

        document.querySelectorAll("#shape-container").forEach( (shape) => {
            const multiplier = shape.getAttribute("data-multiplier");

            let x_axis = clientX.value * multiplier / 100;
            let y_axis = clientY.value * multiplier / 100;

            shape.style.transform = `translateX(${x_axis}px) translateY(${y_axis}px)`;
        });
    }

    // mobile
    const in_mobile = ref(true);
    onMounted(() => {
        card_container.value = document.querySelector("#card-container");
        cards.map(({ card_name }, index) => { // for showing presenting the workshop cards.
            const element = document.querySelector(`#${card_name}`);
            const { stop } = useIntersectionObserver(element, ([{ isIntersecting }], observerElement) => {
                if (isIntersecting) {
                    cards[index].show_element = true; 
                    stop();
                }
            }, { threshold: 1 });
        });
        in_mobile.value = window.matchMedia("(max-width: 800px)").matches;
    });


</script>
<style scoped>
.card-container {
    display: grid;
    justify-content: center;
    gap: 22px;
}
.card {
    border: 4px solid rgba(255, 255, 255, 0.70);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.60) 100%);
    backdrop-filter: blur(10px);
}
.card-container .card.in-viewport {
    animation: show-card 850ms cubic-bezier(.68,.82,0,.8) forwards;
}
@keyframes show-card {
    from {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.60) 100%);
    } to {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.90) 93.68%, rgba(255, 255, 255, 0.60) 104.25%);
;
    }
}

.card:is(:nth-child(3), :nth-child(4), :nth-child(7), :nth-child(8)) { box-shadow: 0px 1px 3px 0px #FFC6A4; }
.card:is(:nth-child(3), :nth-child(4), :nth-child(7), :nth-child(8)):hover { box-shadow: 0px 1px 3px 0px #ff9a5f; }
.card:is(:nth-child(1), :nth-child(2), :nth-child(5), :nth-child(6)) { box-shadow: 0px 1px 3px 0px #B2DBFF; }
.card:is(:nth-child(1), :nth-child(2), :nth-child(5), :nth-child(6)):hover { box-shadow: 0px 1px 3px 0px #47a9ff; }

.card span {
    @apply mb-3;
}
.card-container .card :deep(svg) {
    transform: scale(1.1) translateY(15px);
    transform-origin: bottom;
}
.card-container .card.in-viewport :deep(svg) {
    transform: scale(1.1) translateY(15px);
    animation: present-form 600ms cubic-bezier(.68,.82,0,.8)  forwards 500ms;
}
@keyframes present-form {
    from {
        transform: scale(1.1) translateY(15px);
    } to {
        transform: scale(1) translateY(0px);
    }
}
.card-container .card.in-viewport :deep(svg) .shadow {
    opacity: 0;
    transform: scale(0);
    transform-origin: bottom;
}
.card-container .card.in-viewport :deep(svg) .shadow {
    animation: appear-shadow 450ms cubic-bezier(.68,.82,0,.8)  forwards 600ms;
}
@keyframes appear-shadow {
    from {
        opacity: 0;
        transform: scale(0);
    } to {
        opacity: 1;
        transform: scale(1);
    }
}
.card.confeccion-patronaje :deep(svg){
    width: 140px;
    height: 130px;
}
.card.desarrollo-aplicaciones-informaticas :deep(svg){
    width: 180px;
    height: 110px;
}
.card.electromecanica-vehiculos :deep(svg){
    width: 170px;
    height: 95px;
}
.card.gestion-administrativa-tributaria :deep(svg){
    width: 160px;
    height: 120px;
}
.card.equipos-electronicos :deep(svg) {
    width: 160px;
    height: 145px;
}
.card.ensamblaje-muebles :deep(svg) {
    width: 180px;
    height: 120px;
}
.card.mecanizado :deep(svg) {
    width: 190px;
    height: 130px;
}
.card.instalaciones-electricas :deep(svg) {
    width: 130px;
    height: 110px;
}
.card h4 {
    @apply mb-[22px] font-bold font-raleway text-center text-[1.3rem] leading-[21px];
    opacity: 0;
}
.card-container .card.in-viewport h4 {
    animation: slide-in 500ms cubic-bezier(.68,.82,0,.8)  forwards 250ms;
}
@keyframes slide-in {
    from {
        opacity: 0;
        transform: translateY(30px);
    } to {
        opacity: 1;
        transform: translateY(0px);
    }
}
.card.desarrollo-aplicaciones-informaticas h4 {
    @apply text-[0.99rem];
}
.card:is(.gestion-administrativa-tributaria, .electromecanica-vehiculos) h4 {
    @apply text-[1.05rem];
}
.card-container.blue {
    box-shadow: 0px 1px 2px 0px #B2DBFF;
}
.white-blur {
    @apply absolute top-0 left-0 w-full h-full z-30;
    background: linear-gradient(98deg, rgba(255, 255, 255, 0.404) 25%, rgba(255, 255, 255, 0.40) 78.3%);
    backdrop-filter: blur(6px);
}
.blue-background {
    background: linear-gradient(118deg, #0478E0 13.94%, #0478E000 66.24%);
    backdrop-filter: blur(2px);
}
@media (max-width: 1160px) {
    .blue-background {
        background: linear-gradient(120deg, #0478E0 3.94%, #0478E000 30.24%);
    }
    .orange-background {
        background: linear-gradient(284deg, #FF7420 2.73%, rgba(255, 116, 32, 0.64) 34.25%, rgba(255, 116, 32, 0.00) 73.9%);
    }
}
@media (max-width: 850px) {
    .blue-background {
        background: linear-gradient(120deg, #0478E0 3.94%, #0478E000 30.24%);
    }
    .orange-background {
        background: linear-gradient(284deg, #FF7420 2.73%, rgba(255, 116, 32, 0.64) 34.25%, rgba(255, 116, 32, 0.00) 73.9%);
    }
}


.orange-background {
    @apply max-[800px]:bg-orange-200 right-0;
    background: linear-gradient(284deg, #FF7420 8.73%, rgba(255, 116, 32, 0.64) 10.25%, rgba(255, 116, 32, 0.00) 73.9%);
    backdrop-filter: blur(2px);
}
.color-background {
    @apply absolute w-full h-full min-[800px]:w-[40%] min-[800px]:h-full z-10 opacity-[0.6];
}

@media (max-width: 800px) {
    
    .blue-background {
        background: linear-gradient(180deg, #0478E0 19.94%, #0478E000 45.24%);
    }    
    .orange-background {
        background: linear-gradient(300deg, #FF7420 -13.27%, rgba(255, 116, 32, 0.64) 10.25%, rgba(255, 116, 32, 0.00) 73.9%);
    }
}
@media (min-width: 1600px) {
    .card-container {
        grid-template-columns: repeat(4, 360px);
        grid-template-rows: repeat(2, 232px);
    }
}
@media (max-width: 1600px) {
    section {
        max-height: unset !important;
        height: unset !important;
    }
    .card-container {
        width: 95%;
        grid-template-columns: repeat(4, 21.5vw);
        grid-template-rows: repeat(2, 232px);
    }
}

@media (max-width: 1176px) {
    .card-container {
        grid-template-columns: repeat(2, 360px);
        grid-template-rows: repeat(4, 232px);
    }
    .card:nth-child(odd) { box-shadow: 0px 1px 3px 0px #B2DBFF; }

    .card:nth-child(odd):hover { box-shadow: 0px 1px 3px 0px #47a9ff; }

    .card:nth-child(even) { box-shadow: 0px 1px 3px 0px #FFC6A4; }
    
    .card:nth-child(even):hover { box-shadow: 0px 1px 3px 0px #ff9a5f; }
}

@media (max-width: 800px) {
    .card-container {
        grid-template-columns: repeat(1, min(470px, 81.5vw));
        grid-template-rows: repeat(8, 232px);
        gap: 32px;
    }
    .card:is(:nth-child(1), :nth-child(2), :nth-child(7), :nth-child(8)){ 
        box-shadow: 0px 1px 3px 0px #B2DBFF; 
    }
    .card:is(:nth-child(5), :nth-child(6), :nth-child(7), :nth-child(8)) { 
        box-shadow: 0px 1px 3px 0px #FFC6A4; 
    }
    

    .card:is(:nth-child(1), :nth-child(2), :nth-child(7), :nth-child(8)):hover { box-shadow: 0px 1px 3px 0px #47a9ff; }

    
    .card:is(:nth-child(5), :nth-child(6), :nth-child(7), :nth-child(8)):hover { box-shadow: 0px 1px 3px 0px #ff9a5f; }
}
</style>