<template>
    <NuxtLayout name="workshop" picture="https://a.storyblok.com/f/272924/6000x4000/99374acc05/instalaciones-1.JPG" 
    workshop_name="instalaciones-electricas" type="Industrial" internship="720" portrait_title="Instalaciones Eléctricas">
        <template #workshop-title>
            <span class="text-blue me-3">Instalaciones </span> 
            <span class="text-orange">Eléctricas</span>
        </template>
        <template #workshop-description>
            Formación en instalaciones eléctricas, sistemas de iluminación y circuitos eléctricos.
        </template>
        
        <template #content>
            El taller de <b>Instalaciones Eléctricas</b>, conocido también como Electricidad, ofrece una formación especializada en el montaje,
            mantenimiento y desarrollo de sistemas eléctricos. Este programa capacita a los participantes para intervenir en la fabricación, 
            ensamblaje y mantenimiento de equipos, abarcando desde la instalación y reparación hasta la creación de circuitos y sistemas 
            automatizados. 
            <br><br>
            A través de un enfoque práctico y tecnológico, se prepara a los estudiantes para enfrentar los desafíos de un entorno profesional 
            diverso y en constante evolución en el ámbito de la tecnología eléctrica y electrónica.
            <br>
            <h2 class="subtitle">Unidades de Competencia</h2>
            <ul class="workshop-list" style="margin-bottom: 0;">
                <li>Representar gráficamente instalaciones y redes eléctricas de baja tensión, siguiendo la normativa eléctrica.</li>
                <li>Montar y mantener instalaciones eléctricas de baja tensión en edificios de viviendas, edificios comerciales, de oficinas y de una o varias industrias.</li>
                <li>Montar y mantener instalaciones eléctricas de baja tensión en </li>
                <li>Montar y mantener redes eléctricas aéreas de baja tensión. </li>
                <li>Montar y mantener redes eléctricas subterráneas de baja tensión.</li>
                <li>Montar y mantener máquinas eléctricas.</li>
                <li>Montar y mantener instalaciones de automatismos en el entorno de viviendas y pequeñas industrias.</li>
            </ul>
            <h2 class="subtitle">Ámbito Profesional</h2>
            Desarrolla su actividad profesional en pequeñas y medianas empresas, mayoritariamente privadas, por cuenta propia o ajena, en las 
            áreas de montaje y mantenimiento de instalaciones eléctricas de baja tensión (BT), conforme con el Código Eléctrico Nacional (CEN).
            <br>
            <h2 class="subtitle">Módulos Formativos Asociados a Unidades de Competencia</h2>
            <ul class="workshop-list" style="margin-bottom: 0;">
                <li>Dibujo técnico en circuitos eléctricos.</li>
                <li>Instalaciones eléctricas en viviendas y edificios.</li>
                <li>Instalaciones eléctricas en edificios de oficinas, comercios e industrias.</li>
                <li>Redes eléctricas aéreas de baja tensión.</li>
                <li>Redes eléctricas subterráneas de baja tensión.</li>
                <li>Montaje y mantenimiento de máquinas eléctricas.</li>
                <li>Instalaciones eléctricas automatizadas en viviendas y edificios.</li>
                <li>Módulo de Formación en centros de trabajo.</li>
            </ul>
            <h2 class="subtitle">Sectores Productivos</h2>
            Se ubica en el sector de producción y distribución de energía eléctrica, en las actividades de montaje y mantenimiento de las instalaciones
            eléctricas de baja tensión contempladas en el ámbito del Código Eléctrico Nacional (CEN): instalaciones de baja tensión (BT) en edificios 
            de viviendas; instalaciones de baja tensión (BT) en edificios de oficinas; instalaciones de baja tensión (BT) en edificios comerciales; 
            instalaciones de baja tensión (BT) en edificios de industrias específicas; instalaciones de baja tensión (BT) en edificios destinados 
            a una concentración de industrias.
            <br>
            <h2 class="subtitle" style="margin-bottom: 0;">Módulos Comunes</h2>
            <ul class="workshop-list">
                <li>Ofimática</li>
                <li>Emprendimiento</li>
                <li>Formación y Orientación Laboral</li>
            </ul>
        </template>
    </NuxtLayout>
</template>
<script setup>

useSeoMeta({
    title: 'Instalaciones Eléctricas',
    ogTitle: () => `Instalaciones Eléctricas`,
    ogDescription: () => `El taller de Instalaciones Eléctricas, conocido también como Electricidad, ofrece una formación especializada en el montaje,
            mantenimiento y desarrollo de sistemas eléctricos. Este programa capacita a los participantes para intervenir en la fabricación, 
            ensamblaje y mantenimiento de equipos, abarcando desde la instalación y reparación hasta la creación de circuitos y sistemas 
            automatizados.`,
    description: () => `El taller de Instalaciones Eléctricas, conocido también como Electricidad, ofrece una formación especializada en el montaje,
            mantenimiento y desarrollo de sistemas eléctricos. Este programa capacita a los participantes para intervenir en la fabricación, 
            ensamblaje y mantenimiento de equipos, abarcando desde la instalación y reparación hasta la creación de circuitos y sistemas 
            automatizados.`,
    ogImage: () => `https://a.storyblok.com/f/272924/3039x1676/d7fd5d41f6/seo-main-panel.png`,
    twitterCard: 'https://a.storyblok.com/f/272924/3039x1676/d7fd5d41f6/seo-main-panel.png',
    language: () => `es`
});

const workshop_imgs = ref([
    "https://a.storyblok.com/f/272924/6000x4000/4fc50fd670/instalaciones-1.JPG",
    "https://a.storyblok.com/f/272924/6000x4000/44652b631f/instalaciones-2.JPG",
]);
</script>