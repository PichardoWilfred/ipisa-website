<template>
    <NuxtLayout name="workshop" 
    picture="https://a.storyblok.com/f/272924/6000x4000/cd58eae062/electromecanica-1.JPG" workshop_name="electromecanica-vehiculos"
    type="Industrial" internship="720" portrait_title="Electromecánica de Vehículos" :workshop_imgs="workshop_imgs">
        <template #workshop-title>
            <span id="anchor-ipisa" class="text-blue">Electromecánica</span> 
            <span class="separator mx-2 md:mx-3">de</span> 
            <span class="text-orange">Vehículos</span>
        </template>
        <template #workshop-description>
            Estudio de motores, sistemas de transmisión, mantenimiento y reparación de vehículos.
        </template>
        
        <template #content>
            El Taller de <b>Electromecánica de Vehículos</b>, se enfoca en la formación especializada en el mantenimiento y reparación de vehículos. 
            Proporciona habilidades técnicas clave para abordar sistemas de motor, dirección, suspensión, transmisión, sistemas eléctricos y electrónicos, 
            entre otros.
            <br>
            <h2 class="subtitle">Ámbito Profesional</h2>
            Este(a) profesional ejerce su actividad en el sector de Electromecánica de Vehículos, tanto en grandes, medianas y pequeñas empresas, 
            como en talleres especializados en mantenimiento y reparación de vehículos. Desarrolla procesos de ejecución en estas áreas.
            
            <h2 class="subtitle" style="margin-bottom: 0;">Ocupaciones y Puestos de Trabajo Relevantes</h2>
            <ul class="workshop-list">
                <li>Mecánico y reparador de vehículos de motor.</li>
                <li>Mecánico y reparador de máquinas agrícolas e industriales.</li>
                <li>Reparador de bicicletas y afines.</li>
                <li>Reparador de alternadores y motor de arranque.</li>
                <li>Encargado del taller de electromecánica.</li>
                <li>Mecánico de motores.</li>
                <li>Electricista y electrónico de vehículos, entre otros.</li>
            </ul>
            
            <h2 class="subtitle" style="margin-bottom: 0;">Módulos Formativos Asociados a Unidades de Competencia</h2>
            <ul class="workshop-list">
                <li>Realizar actividades de información, recepción y comunicación con clientes internos y externos, siguiendo los protocolos establecidos en la organización.</li>
                <li>Organizar, actualizar y archivar información en soporte convencional y/o digital, aplicando procedimientos de seguridad y protección de datos.</li>
                <li>Reparadores de alternadores y motor de arranque.</li>
                <li>Encargado del taller de electromecánica.</li>
                <li>Mecánico de motores.</li>
                <li>Electricista y electrónico de vehículos.</li>
                <li>Mecánicos de vehículos de carreras.</li>
                <li>Reparador de los sistemas de transmisión y frenos del vehículos.</li>
                <li>Mecánico de los sistemas de seguridad, confortabilidad y personificación de vehículos.</li>
                <li>Electromecánico de vehículos</li>
                <li>Mecánico de sistema de inyección de gasolina.</li>
                <li>Mecánico de inyección diésel.</li>
                <li>Mecánico de conversión GLP-GNV.</li>
                <li>Mecánico de trenes.</li>
                <li>Mecánicos y reparadores de máquinas agrícolas, extractivas y de la construcción.</li>
                <li>Reparadores de motocicletas, bicicletas y afines.</li>
                <li>Mecánico de transmisión.</li>
                <li>Instalador de alarma para vehículos.</li>
                <li>Técnico de seguridad electrónica del vehículo.</li>
                <li>Reparador de sistema de dirección y encendido.</li>
            </ul>
            <h2 class="subtitle" style="margin-bottom: 0;">Módulos Formativos Asociados a Unidades de Competencia</h2>
            <ul class="workshop-list">
                <li>Motor de combustión interna.</li>
                <li>Componentes y sistemas auxiliares del motor.</li>
                <li>Sistemas de dirección y suspensión.</li>
                <li>Sistemas de alimentación, inyección y sobrealimentación.</li>
                <li>Sistemas de transmisión, frenos y trenes de rodaje.</li>
                <li>Sistemas de carga y arranque.</li>
                <li>Sistemas eléctricos y electrónicos.</li>
                <li>Sistemas de seguridad, confortabilidad y personificación.</li>
                <li>Riesgos laborales y medioambientales en los procesos industriales de fabricación, instalación y mantenimiento.</li>
                <li>Módulo de formación en centros de trabajo.</li>
            </ul>
            <h2 class="subtitle" style="margin-bottom: 0;">Módulos Comunes</h2>
            <ul class="workshop-list">
                <li>Ofimática.</li>
                <li>Emprendimiento.</li>
                <li>Formación y Orientación Laboral.</li>
            </ul>
        </template>
        <template #workshop-summary>
            Los graduados de este taller están preparados para desempeñar roles fundamentales en la industria del mantenimiento vehicular, 
            con conocimientos sólidos en sistemas complejos y diversas áreas de trabajo, permitiéndoles integrarse exitosamente en el sector automotriz.
        </template>
    </NuxtLayout>
</template>
<script setup>
useSeoMeta({
    title: 'Electromecánica de Vehículos',
    ogTitle: () => `Electromecánica de Vehículos`,
    ogDescription: () => `El Taller de Electromecánica de Vehículos, se enfoca en la formación especializada en el mantenimiento y reparación de vehículos. 
            Proporciona habilidades técnicas clave para abordar sistemas de motor, dirección, suspensión, transmisión, sistemas eléctricos y electrónicos, 
            entre otros.`,
    description: () => `El Taller de Electromecánica de Vehículos, se enfoca en la formación especializada en el mantenimiento y reparación de vehículos. 
            Proporciona habilidades técnicas clave para abordar sistemas de motor, dirección, suspensión, transmisión, sistemas eléctricos y electrónicos, 
            entre otros.`,
    ogImage: () => `https://a.storyblok.com/f/272924/3039x1676/d7fd5d41f6/seo-main-panel.png`,
    twitterCard: 'https://a.storyblok.com/f/272924/3039x1676/d7fd5d41f6/seo-main-panel.png',
    language: () => `es`
});

const workshop_imgs = ref([
    "https://a.storyblok.com/f/272924/6000x4000/cd58eae062/electromecanica-1.JPG",
    "https://a.storyblok.com/f/272924/6000x4000/5c28a0add2/electromecanica-2.JPG",
    "https://a.storyblok.com/f/272924/6000x4000/387935ba73/electromecanica-3.JPG",
    "https://a.storyblok.com/f/272924/6000x4000/c1d80a9e73/electromecanica-4.JPG",
    "https://a.storyblok.com/f/272924/6000x4000/e3432b7f19/electromecanica-5.JPG",
    "https://a.storyblok.com/f/272924/6000x4000/f269e2ba0d/electromecanica-6.JPG",
]);
</script>