<template>
    <section class="w-full max-w-[1680px] mx-auto px-[5vw]">
        <h2 class="flex items-center text-black font-semibold font-raleway text-[1.6rem] sm:text-[2.1rem] lg:text-[3.1rem] cursor-pointer mb-2 transition-all">
            Requisitos de Admisión
            
            <span class="copy-requirements" @click.prevent="copy_requirements">
                <Icon name="ic:outline-content-copy" class="ms-4 font-bold text-[1.8rem] separator mt-1" />
            </span>
        </h2>
        <p class="text-[1rem] text-black font-medium font-raleway max-w-[1100px] mb-5">
            Para formar parte de la comunidad educativa del <b class="text-blue">Instituto</b> <b class="text-orange-300">Politécnico</b> <b class="text-blue">Industrial</b>
            <b class="separator"> de</b> <b class="text-orange-300">Santiago</b> <b>(IPISA),</b> es importante 
            seguir un proceso de admisión que garantice la calidad y excelencia de nuestros estudiantes. A continuación, detallamos 
            los requisitos necesarios para aplicar:
        </p>
        <ol style="list-style: decimal;" >
            <template v-for="({label, content}, index) in requirements" :key="index">
                <li class="text-[1.2rem] text-black font-normal font-raleway max-w-[1400px] mb-4 max-sm:w-[90%] max-sm:mx-auto" >
                    <b>
                        {{ label }}
                    </b>
                    {{ content }}
                    {{ item }}
                    <Icon name="ic:outline-content-copy" class="ms-4 font-bold text-[1.8rem] separator mt-1" />
                </li>
            </template>
            <li>
            </li>
        </ol>
        <p class="text-[1.2rem] text-black font-medium font-raleway max-w-[1200px] mb-10">
            Cumplir con estos requisitos es fundamental para iniciar tu proceso de admisión en IPISA y dar el primer paso hacia una educación técnica de calidad.
        </p>
    </section>
</template>
<script setup>
    const requirements = ref([
        '<b class="underline cursor-pointer">Formulario de Admisión Completo,</b> Debes completar el formulario de admisión proporcionado por la institución, asegurándote de no realizar alteraciones en el mismo.',
        `<b>Fotografías 2×2</b>, Se requieren dos fotografías recientes a color, en formato 2 x 2, donde tu rostro esté claramente visible. Evita usar aretes, maquillaje excesivo, 
        blusas sin mangas, cortes de pelo extravagantes o tintes llamativos. La presentación debe ser sobria.`,
        `<b>Acta de Nacimiento para Fines Escolares:</b> Proporciona una copia del acta de nacimiento, la cual debe ser utilizada con fines escolares.`,
        `<b>Cédula de Identidad de los Padres:</b> Debes incluir una copia de la cédula de identidad tanto del padre como de la madre.
        Asegúrate de que ambas copias incluyan ambas caras y no estén recortadas.`,
        `<b>Certificado Médico:</b> Presenta una copia del certificado médico, que certifique tu estado de salud general.`,
        `<b>Certificado de Conducta Estudiantil:</b> Incluye una copia del certificado de conducta estudiantil emitido por el centro educativo anterior. 
        Este documento reflejará tu comportamiento y desempeño previos.`,
        `<b>Tipificación Sanguínea:</b> Proporciona una copia de tu tipificación sanguínea, un dato importante para posibles situaciones médicas.`,
        `<b>Tarjeta de Vacunas:</b> Incluye una copia de tu tarjeta de vacunas, asegurándote de que ambas caras estén legibles y sin recortes.`,
        `<b>Reporte de Calificaciones Actuales de Octavo:</b> Presenta una copia del reporte de calificaciones actual correspondiente al octavo grado. 
        Este documento reflejará tu desempeño académico en la educación primaria.`,
        `<b>Recibo de Contribución de Gastos de Pre-inscripción:</b> Adquiere el recibo correspondiente por un monto de <b>RD$ 100.00</b> en la caja de la institución.
        Este recibo valida tu proceso de pre-inscripción.`,
    ])
    // const copy_item = ```
    //     <Icon name="ic:outline-content-copy" class="ms-4 font-bold text-[1.8rem] separator mt-1" />
    // ```
    const copy_requirements = () => {
        console.log('uwu?');
    }
</script>