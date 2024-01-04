<template>
    <section class="relative w-full max-w-[1680px] mx-auto px-[5vw] pt-[2rem] z-20" id="admissions">
        <div class="relative content z-30">
            <h2 class="flex justify-center items-center text-black font-normal font-raleway text-[1.6rem] sm:text-[2.1rem] lg:text-[3.1rem] cursor-pointer mb-2 lg:mb-4 transition-all">
                <b class="text-blue">Requisitos </b> <b class="separator mx-3">de</b> <b class="text-orange-300">Admisión</b>
                <span class="copy-requirements" @click.prevent="copy_requirements">
                    <Icon name="ic:outline-content-copy" class="ms-4 font-bold text-[1.8rem] separator mt-1" />
                </span>
            </h2>
            <p class="text-[1.1rem] text-black font-medium font-raleway max-w-[900px] mb-10 mx-auto">
                Para formar parte de la comunidad educativa del Instituto Politécnico Industrial de Santiago <b>(IPISA),</b> es importante 
                seguir un proceso de admisión que garantice la calidad y excelencia de nuestros estudiantes. A continuación, detallamos 
                los requisitos necesarios para aplicar:
            </p>
            <p class="hidden text-[1.2rem] text-black font-medium font-raleway max-w-[1200px] mb-14">
                Cumplir con estos requisitos es fundamental para iniciar tu proceso de admisión en IPISA y dar el primer paso hacia una educación técnica de calidad.
            </p>
        </div>
        <div class="requirements-list">
            <div class="requirement" v-for="({ label, label_class, content, icon }, index) in requirements" :key="index"
            :class="index % 2 === 0 ? 'orange':'blue'">
                <div class="number">
                    <span>
                        {{ index + 1 }}
                    </span>
                </div>
                <div class="text">
                    <h2 class="">
                        {{ label }}
                    </h2>
                    <p class="font-raleway text-black">
                        {{ content }}
                    </p>
                </div>
                <div class="icon-container">
                    <nuxt-icon filled :name="`home/requirements/requirement-${icon}`" class="text-[4rem]" />
                </div>
            </div>
        </div>
        <div class="home-admission-required hidden relative justify-center h-[35vh] z-10 overflow-hidden">
            <div class="absolute top-0">
                <HomeAdmissionRequirementBoard class="mx-auto max-lg:w-[100%] lg:w-[1200px] max-lg:h-[240px]" />
            </div>
            <div class="absolute top-[100px]">
                <HomeAdmissionKids class="w-[340px] h-[320px]"/>
            </div>
        </div>

    </section>
</template>
<style scoped>
.requirements-list {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 180px;
    column-gap: 120px;
    row-gap: 40px;
}
@media (max-width: 768px) {
    .requirements-list {
    grid-template-rows: 380px;
}
}
@media (min-width: 1200px) {
    .requirements-list {
        grid-template-columns: repeat(2, 1fr);
    }
}
.requirement {
    @apply bg-white flex rounded-lg items-center justify-center relative max-w-[680px] border-[8px] h-[300px] lg:h-[180px];
}
.requirement.orange {
    @apply border-[#FFA36C]
}
.requirement.blue {
    @apply border-blue-200
}
.requirement .text {
    @apply pl-6 pr-16 lg:pl-10 lg:pr-20 lg:py-7 relative z-10;
}
.requirement .text h2 {
    @apply font-bold text-[1.2rem];
}
.requirement.orange .text h2 {
    @apply text-orange;
}
.requirement.blue .text h2 {
    @apply text-blue;
}
.requirement .text p {
    @apply font-medium;
}
.requirement .number {
    @apply absolute flex items-center justify-center top-[-8%] lg:top-[50%] translate-y-[-50%] left-[-22%] lg:left-[-12%] translate-x-[12%] bg-white p-8 text-[4rem] font-raleway text-center rounded-full w-[120px] h-[120px];
}
.requirement .number span {
    @apply font-bold text-[4rem] leading-3;
}
.requirement.orange .number span {
    @apply text-orange-200 text-[#FFA36C];
}

.requirement .icon-container {
    @apply absolute right-[-24%] max-lg:top-[70%] lg:right-[-12%] translate-x-[-12%] flex justify-center items-center rounded-full w-[120px] h-[120px] z-[5];
}
.requirement .icon-container :deep(svg) {
    @apply mb-0;
}
.requirement.blue .icon-container {
    @apply bg-[#CEE8FF];
}
.requirement.orange .icon-container {
    @apply text-orange-200 bg-[#FFE9DC];
}
</style>
<script setup>
    const requirements = ref([
    {
        label: 'Formulario de Admisión Completo',
        content: 'Debes completar el formulario de admisión proporcionado por la institución, asegurándote de no realizar alteraciones en el mismo.',
        label_class: 'cursor-pointer',
        icon: 'form'
    },
    {
        label: 'Fotografías 2×2',
        content: 'Se requieren dos fotografías recientes a color, en formato 2 x 2, donde tu rostro esté claramente visible. Evita usar aretes, maquillaje excesivo, blusas sin mangas, cortes de pelo extravagantes o tintes llamativos. La presentación debe ser sobria.',
        label_class: '',
        icon: 'picture'
    },
    {
        label: 'Acta de Nacimiento para Fines Escolares',
        content: 'Proporciona una copia del acta de nacimiento, la cual debe ser utilizada con fines escolares.',
        label_class: '',
        icon: 'acta'
    },
    {
        label: 'Cédula de Identidad de los Padres',
        content: 'Debes incluir una copia de la cédula de identidad tanto del padre como de la madre. Asegúrate de que ambas copias incluyan ambas caras y no estén recortadas.',
        label_class: '',
        icon: 'ced'
    },
    {
        label: 'Certificado Médico',
        content: 'Presenta una copia del certificado médico, que certifique tu estado de salud general.',
        label_class: '',
        icon: 'med'
    },
    {
        label: 'Certificado de Conducta Estudiantil',
        content: 'Incluye una copia del certificado de conducta estudiantil emitido por el centro educativo anterior. Este documento reflejará tu comportamiento y desempeño previos.',
        label_class: '',
        icon: 'conduct'
    },
    {
        label: 'Tipificación Sanguínea',
        content: 'Proporciona una copia de tu tipificación sanguínea, un dato importante para posibles situaciones médicas.',
        label_class: '',
        icon: 'blood'
    },
    {
        label: 'Tarjeta de Vacunas',
        content: 'Incluye una copia de tu tarjeta de vacunas, asegurándote de que ambas caras estén legibles y sin recortes.',
        label_class: '',
        icon: 'vax'
    },
    {
        label: 'Reporte de Calificaciones Actuales de Octavo',
        content: 'Presenta una copia del reporte de calificaciones actual correspondiente al octavo grado. Este documento reflejará tu desempeño académico en la educación primaria.',
        label_class: '',
        icon: 'grades'
    },
    {
        label: 'Recibo de Contribución de Gastos de Pre-inscripción',
        content: 'Adquiere el recibo correspondiente por un monto de RD$ 100.00 en la caja de la institución. Este recibo valida tu proceso de pre-inscripción.',
        label_class: 'bill',
        icon: 'bill'
    },
]);
    const copy_requirements = () => {
        console.log('uwu?');
    }
</script>