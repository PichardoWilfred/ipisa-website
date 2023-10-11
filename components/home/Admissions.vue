<template>
    <section class="relative w-full max-w-[1680px] mx-auto px-[5vw] pt-[8rem] z-20">
        <div class="relative content xl:bg-white z-30">
            <h2 class="flex items-center text-black font-semibold font-raleway text-[1.6rem] sm:text-[2.1rem] lg:text-[3.1rem] cursor-pointer mb-2 lg:mb-4 transition-all">
            <b class="text-blue">Requisitos </b> <b class="separator mx-3">de</b> <b class="text-orange-300">Admisión</b>
            <span class="copy-requirements" @click.prevent="copy_requirements">
                <Icon name="ic:outline-content-copy" class="ms-4 font-bold text-[1.8rem] separator mt-1" />
            </span>
            </h2>
            <p class="text-[1.2rem] text-black font-medium font-raleway max-w-[1100px] mb-5">
                Para formar parte de la comunidad educativa del <b class="text-blue">Instituto</b> <b class="text-orange-300">Politécnico</b> <b class="text-blue">Industrial</b>
                <b class="separator"> de</b> <b class="text-orange-300">Santiago</b> <b>(IPISA),</b> es importante 
                seguir un proceso de admisión que garantice la calidad y excelencia de nuestros estudiantes. A continuación, detallamos 
                los requisitos necesarios para aplicar:
            </p>
            <ol style="list-style: decimal;" >
                <li v-for="({label, label_class, content}, index) in requirements" :key="index" 
                class="text-[1rem] text-black font-raleway font-medium max-w-[1400px] mb-4 max-sm:w-[90%] max-sm:mx-auto">
                    <b :class="label_class" class="underline">
                        {{ label }}
                    </b>
                    {{ content }}
                    <Icon name="ic:outline-content-copy" class="ms-2 font-bold text-[1.7rem] lg:text-[1.4rem] separator mt-1" />
                </li>
            </ol>
            <p class="text-[1.2rem] text-black font-medium font-raleway max-w-[1200px] mb-14">
                Cumplir con estos requisitos es fundamental para iniciar tu proceso de admisión en IPISA y dar el primer paso hacia una educación técnica de calidad.
            </p>
        </div>

        <div class="home-admission-required relative flex justify-center h-[35vh] z-10 overflow-hidden">
            <div class="absolute top-0">
                <HomeAdmissionRequirementBoard class="mx-auto max-lg:w-[100%] lg:w-[1200px] max-lg:h-[240px]" />
            </div>
            <div class="absolute top-[100px]">
                <HomeAdmissionKids class="w-[340px] h-[320px]"/>
            </div>
            <!-- <div class="rellax" data-rellax-percentage="0.3" data-rellax-speed="-9">
                <HomeAdmissionRequirementBoard />
            </div>            
            <div class="rellax" data-rellax-percentage="0.3" data-rellax-speed="-14">
            </div> -->
            <!-- home/requirements/requirement-board -->
            <!-- <nuxt-icon name="home/requirements/requirement-board" class="text-[880px]" /> -->
        </div>

    </section>
</template>
<script setup>
    import Rellax from 'rellax';
    onBeforeMount(() => {
        const rellax = new Rellax('.rellax', { // Start Rellax
            center: true
        });
        rellax.refresh(); // Destroy and create again parallax with previous settings
    })
    const requirements = ref([
    {
        label: 'Formulario de Admisión Completo,',
        content: 'Debes completar el formulario de admisión proporcionado por la institución, asegurándote de no realizar alteraciones en el mismo.',
        label_class: 'cursor-pointer',
    },
    {
        label: 'Fotografías 2×2',
        content: 'Se requieren dos fotografías recientes a color, en formato 2 x 2, donde tu rostro esté claramente visible. Evita usar aretes, maquillaje excesivo, blusas sin mangas, cortes de pelo extravagantes o tintes llamativos. La presentación debe ser sobria.',
        label_class: '',
    },
    {
        label: 'Acta de Nacimiento para Fines Escolares:',
        content: 'Proporciona una copia del acta de nacimiento, la cual debe ser utilizada con fines escolares.',
        label_class: '',
    },
    {
        label: 'Cédula de Identidad de los Padres:',
        content: 'Debes incluir una copia de la cédula de identidad tanto del padre como de la madre. Asegúrate de que ambas copias incluyan ambas caras y no estén recortadas.',
        label_class: '',
    },
    {
        label: 'Certificado Médico:',
        content: 'Presenta una copia del certificado médico, que certifique tu estado de salud general.',
        label_class: '',
    },
    {
        label: 'Certificado de Conducta Estudiantil:',
        content: 'Incluye una copia del certificado de conducta estudiantil emitido por el centro educativo anterior. Este documento reflejará tu comportamiento y desempeño previos.',
        label_class: '',
    },
    {
        label: 'Tipificación Sanguínea:',
        content: 'Proporciona una copia de tu tipificación sanguínea, un dato importante para posibles situaciones médicas.',
        label_class: '',
    },
    {
        label: 'Tarjeta de Vacunas:',
        content: 'Incluye una copia de tu tarjeta de vacunas, asegurándote de que ambas caras estén legibles y sin recortes.',
        label_class: '',
    },
    {
        label: 'Reporte de Calificaciones Actuales de Octavo:',
        content: 'Presenta una copia del reporte de calificaciones actual correspondiente al octavo grado. Este documento reflejará tu desempeño académico en la educación primaria.',
        label_class: '',
    },
    {
        label: 'Recibo de Contribución de Gastos de Pre-inscripción:',
        content: 'Adquiere el recibo correspondiente por un monto de RD$ 100.00 en la caja de la institución. Este recibo valida tu proceso de pre-inscripción.',
        label_class: '',
    },
])
    // const copy_item = ```
    //     <Icon name="ic:outline-content-copy" class="ms-4 font-bold text-[1.8rem] separator mt-1" />
    // ```
    const copy_requirements = () => {
        console.log('uwu?');
    }
</script>