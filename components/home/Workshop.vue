<template>
    <section class="relative py-[8rem] my-[8rem] bg-white z-10 h-[3rem]">
        <div class="absolute flex w-full h-full overflow-hidden top-0 left-0" ref="container" @mousemove="trackMouse">
            <HomeWorkshopBlueShapes />
            <HomeWorkshopOrangeShapes />
            <div class="blue-background color-background" />
            <div class="orange-background right-0 color-background" />
            <div class="white-blur" />
        </div>
        <div class="card-container">
            <div class="card" v-for="({icon, title}, index) in cards" :key="index">
                <nuxt-icon :name="icon" filled />
                <h4 v-html="title"></h4>
            </div>
            <div class="card">
                
                <h4>
                    <span class="blue">Desarrollo </span>
                    <span class="separator">& </span>
                    <span class="orange">Administración </span>
                    <br />
                    <span class="separator">de </span>
                    <span class="blue">Aplicaciones </span>
                    <span class="orange">Informáticas</span>
                </h4>
            </div>
            <div class="card">
                
                <h4>
                    <span class="blue">Electromecánica </span>
                    <span class="separator">de </span>
                    <span class="orange">Vehículos </span>
                </h4>
            </div>
            <div class="card">
                
                <h4>
                    <span class="blue">Gestión Administrativa </span>
                    <span class="separator">& </span>
                    <span class="orange">Tributaria </span>
                </h4>
            </div>
            <!--  -->
            
            <div class="card">
                
                <h4>
                    <span class="blue">Equipos </span>
                    <span class="orange">Electrónicos</span>
                </h4>
            </div>
            <div class="card">
                
                <h4>
                    <span class="blue">Ensamblaje </span>
                    <span class="separator">de </span>
                    <span class="orange">Muebles</span>
                </h4>
            </div>
            <div class="card">
                
                <h4>
                    <span class="blue">Meca</span>
                    <span class="orange">nizado</span>
                </h4>
            </div>
            <div class="card">
                
                <h4>
                    <span class="blue">Instalaciones </span>
                    <span class="orange">Eléctricas</span>
                </h4>
            </div>
        </div>
    </section>
</template>
<script setup>


    const mouseX = ref(0);
    const mouseY = ref(0);

    const container = ref(null);

    const trackMouse = (event) => {
        const rect = container.value.getBoundingClientRect();
        mouseX.value = event.clientX - rect.left;
        mouseY.value = event.clientY - rect.top;
        // console.log(`x: (${mouseX.value}), y: (${mouseY.value})`);
    };
    onMounted(() => {
        const shapes = ref(document.querySelectorAll(".shape"));
        const values = `translate(${mouseX.value / 20}px, ${mouseY.value / 20}px)`;
    });

    // cards
    const cards = reactive([
        {
            icon: 'workshop/confeccion-patronaje.svg',
            title: '<span class="blue">Confección</span><span class="separator"> & </span><span class="orange">Patronaje</span>'
        },        
        {
            icon: 'workshop/confeccion-patronaje.svg',
            title: '<span class="blue">Confección</span><span class="separator"> & </span><span class="orange">Patronaje</span>'
        },
    ])
</script>
<style scoped>
section {
    max-height: 74vh !important;
}
.card-container {
    display: grid;
    justify-content: center;
    gap: 22px;
    @apply relative w-[85%] h-full mx-auto z-40;
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
        grid-template-columns: repeat(3, 360px);
        grid-template-rows: repeat(3, 232px);
    }
}

@media (max-width: 1176px) {
    .card-container {
        grid-template-columns: repeat(2, 360px);
        grid-template-rows: repeat(4, 232px);
    }
}

@media (max-width: 800px) {
    .card-container {
        grid-template-columns: repeat(1, 320px);
        grid-template-rows: repeat(8, 232px);
        gap: 32px;
    }
}
.card {
    @apply flex flex-col rounded-[20px];
    border: 4px solid rgba(255, 255, 255, 0.70);
    background: linear-gradient(117deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.60) 100%);
    backdrop-filter: blur(10px);
}
.card svg {
    width: 200px;
    height: 400px;
}
.card h4 {
    @apply font-bold font-raleway text-center text-[1.25rem];
}
.card h4 span.blue {
    @apply text-[#55AFFF];
}
.card h4 span.orange {
    @apply text-orange-300;
}
.card h4 span.separator {
    @apply text-[#A9C2E0];
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
.orange-background {
    background: linear-gradient(284deg, #FF7420 8.73%, rgba(255, 116, 32, 0.64) 34.25%, rgba(255, 116, 32, 0.00) 73.9%);
    backdrop-filter: blur(2px);
}
.color-background {
    @apply w-[40%] h-full z-10 opacity-[0.6] absolute;
}
</style>