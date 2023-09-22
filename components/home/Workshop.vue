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
            <div class="card" v-for="({ icon, title, icon_class }, index) in cards" :key="index">
                <nuxt-icon :name="icon" filled :class="icon_class" />
                <h4>
                    <template v-for="({ name, class_, br }, title_index) in title" >
                        <span v-if="!br" :class="class_" :key="title_index">
                            {{ name }}
                        </span>
                        <br v-else />
                    </template>
                </h4>
            </div>
            <!-- <div class="card">
                
                <h4>
                    <span class="blue">Instalaciones </span>
                    <span class="orange">Eléctricas</span>
                </h4>
            </div> -->
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
            icon: 'workshop/confeccion-patronaje',
            icon_class: '',
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
            ]
        },        
        {
            icon: 'workshop/desarrollo-aplicaciones-informaticas',
            icon_class: '',
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
            ]
        },
        {
            icon: 'workshop/electromecanica-vehiculos',
            icon_class: '',
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
                    class_: 'orange',
                    name: 'Vehículos'
                },
            ]
        },
        {
            icon: 'workshop/gestion-administrativa-tributaria',
            icon_class: '',
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
                    class_: 'orange',
                    name: 'Tributaria'
                },
            ]
        },
        {
            icon: 'workshop/equipos-electronicos',
            icon_class: '',
            title: [
                {
                    class_: 'blue',
                    name: 'Equipos '
                },
                {
                    class_: 'orange',
                    name: 'Electrónicos'
                },
            ]
        },
        {
            icon: 'workshop/ensamblaje-muebles',
            icon_class: '',
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
            ]
        },
        {
            icon: 'workshop/mecanizado',
            icon_class: '',
            title: [
                {
                    class_: 'blue',
                    name: 'Meca'
                },
                {
                    class_: 'orange',
                    name: 'nizado'
                },
            ]
        }
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