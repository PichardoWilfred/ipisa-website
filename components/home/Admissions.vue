<template>
    <section class="relative w-full max-w-[1680px] mx-auto px-[5vw] pt-[2rem] z-20" id="admissions">
        <div class="relative content z-30">
            <h2 class="flex justify-center items-center text-black font-normal font-raleway text-[1.6rem] sm:text-[2.1rem] lg:text-[3.1rem] cursor-pointer mb-2 lg:mb-4 transition-all">
                <b class="text-blue">Requisitos </b> <b class="separator mx-3">de</b> <b class="text-orange-300">Admisión</b>
                <span class="copy-requirements" @click.prevent="copy_requirements">
                    <Icon name="ic:outline-content-copy" class="ms-4 font-bold text-[1.8rem] separator" />
                </span>
            </h2>
            <p class="text-justify text-[1.1rem] text-black font-medium font-raleway max-w-[860px] mb-10 mx-auto">
                Para formar parte de nuestra comunidad educativa es importante 
                seguir un proceso de admisión que garantice la calidad y excelencia de nuestros estudiantes. <i>A continuación, detallamos 
                los requisitos necesarios para aplicar:</i>
            </p>
            <p class="hidden text-[1.2rem] text-black font-medium font-raleway max-w-[1200px] mb-14">
                Cumplir con estos requisitos es fundamental para iniciar tu proceso de admisión en IPISA y dar el primer paso hacia una educación técnica de calidad.
            </p>
        </div>
        <div class="requirements-list mt-16">
            <div class="requirement" v-for="({ label, content, icon }, index) in requirements" :key="index"
            :class="(index % 2 === 0) ? 'orange':'blue'">
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
                <div class="icon-container absolute top-[89%] lg:top-[75%] lg:right-[-8%] max-lg:left-[50%] max-lg:translate-x-[-50%]
                flex justify-center items-center rounded-full w-[85px] h-[85px] z-[5]">
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
    justify-content: center;

    grid-template-rows: repeat(10, 60vh);
    grid-template-columns: 1fr;

    column-gap: 65px;
    row-gap: 125px;
}
.requirement {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #FFF;

    height: 100%;
    width: 100%;

    border-radius: 0.5rem;
    border: 3px solid transparent;

    margin-inline: auto;
}
.requirement.orange { border-color: #ffc39f; }
.requirement.blue { border-color: var(--blue-200); }
.requirement .text {
    position: relative;
    padding: 4rem 30px;
    z-index: 10;
}
.requirement .text h2 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.1;
    text-align: start;
    margin-bottom: 0.7rem;
}
.requirement.orange .text h2 { color: var(--orange); }
.requirement.blue .text h2 { color: var(--blue); }
.requirement .text p {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.3;
    text-align: justify;
}
.requirement .number {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 9999px;
    text-align: center;
    background-color: #ffffff;
    border: 3px solid;
    
    position: absolute;
    top: -12%;
    left: 50%;
    transform: translateX(-50%);

    font-size: 4rem;
    width: 70px;
    height: 70px;
}
.requirement .number span {
    font-size: 2rem;
    line-height: .75rem; 
    font-weight: 700; 
}
.requirement.orange .number span { }
.requirement .icon-container :deep(svg) {
    margin-bottom: 0;
    padding: 5px;
}
.requirement.blue .icon-container { background-color: #CEE8FF; }
.requirement.orange .icon-container {
    color: var(--orange-200);
    background-color: #FFE9DC;
}
@media (min-width: 992px) {
    .requirements-list {
        grid-template-rows: repeat(5, auto);
        row-gap: 65px;
    }
    .requirement {
        max-width: 680px;
    }
    .requirement .text h2 {
        line-height: 1.3;
        font-size: 1.2rem;
        margin-bottom: 0.2rem;
    }
    .requirement .text {
        padding: 1.35rem 5vw;
    }
    .requirement .text p { font-size: inherit; }
    .requirement .number {
        top: -23%;
        left: -7%;
        transform: translateX(0%);
    }
}
@media (min-width: 1200px) {
    .requirement .text {
        padding: 1rem 2vw;
    }
}
@media (min-width: 1400px) {
    .requirements-list {
        grid-template-columns: repeat(2, 580px);
        column-gap: 75px;
        row-gap: 65px;
    }
}
</style>
<script setup>
    const requirements = ref([
    {
        label: 'Formulario de Admisión Completo',
        content: 'Debes completar el formulario de admisión proporcionado por la institución, asegurándote de no realizar alteraciones en el mismo.',
        label_class: '',
        icon: 'form'
    },
    {
        label: 'Fotografías 2×2',
        content: 'Se requieren dos fotografías recientes a color, en formato 2 × 2, donde tu rostro esté claramente visible. Evita usar aretes, maquillaje excesivo, blusas sin mangas, cortes de pelo extravagantes o tintes llamativos.',
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
    async function  copy_requirements () {
        try {
            const text_ = `Requisitos de admisión:
            1- Formulario de Admisión Completo 
            2- Fotografías 2×2 
            3- Acta de Nacimiento para Fines Escolares 
            4- Cédula de Identidad de los Padres 
            5- Certificado Médico 
            6- Certificado de Conducta Estudiantil 
            7- Tipificación Sanguínea 
            8- Tarjeta de Vacunas 
            9- Reporte de Calificaciones Actuales de Octavo 
            10- Recibo de Contribución de Gastos de Pre-inscripción`
            await navigator.clipboard.writeText(text_);

        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
</script>