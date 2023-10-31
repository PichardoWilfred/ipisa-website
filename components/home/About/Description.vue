<template>
    <!-- I know this is a war crime, but I swear there's not other way around it, not with dynamic components nor layouts -->
    <template v-if="index === 0">
        El <NuxtLink to="sobre-nosotros" class="underline cursor-pointer">Instituto Politécnico Industrial de Santiago <b>(IPISA)</b></NuxtLink> es 
        una institución educativa de renombre que destaca por su enfoque en la formación técnica y su firme compromiso 
        con los valores cristianos. Su lema: <b class="text-blue">"Buenos Cristianos</b> <b class="separator">y</b> 
        <b class="orange"> Honrados Ciudadanos",</b> encapsula su misión de brindar una educación integral que combine 
        habilidades técnicas y valores éticos. 
        <br /> <br/>
        Nos enorgullecemos de ofrecer educación de alta calidad en diversas disciplinas técnicas, preparando a los estudiantes para enfrentar el mundo laboral 
        con confianza y ética. Nuestra énfasis en la <b class="text-blue">excelencia</b> <b class="orange">académica</b>, la formación en valores y una amplia 
        gama de actividades extracurriculares hacen de IPISA una institución educativa de elección para aquellos que buscan una educación técnica con base sólida 
        en principios éticos.
    </template>
    <template v-else-if="index === 1">
        La visión educativa del centro se inspira en el sistema preventivo de <NuxtLink to="/sobre-nosotros/filosofía" class="text-blue underline cursor-pointer">Don Bosco</NuxtLink>, fundamentado 
        en <b class="text-blue">la razón,</b> <b class="orange">la religión</b> <b class="separator">y</b> <b class="text-blue">el amor</b>. Este enfoque busca formar a jóvenes centrados en valores éticos y preparados para convertirse en ciudadanos 
        responsables y comprometidos con la sociedad.
        <br /> <br />
        Este sistema educativo se caracteriza por el <b>equilibrio</b> entre la dimensión espiritual y la formación integral de los estudiantes. 
        Promueve valores como la responsabilidad, la calidad, la ciudadanía, la ética, la integridad, la honradez y la justicia. A través de este enfoque, 
        <b>IPISA</b> se esfuerza por brindar una educación de calidad que fortalezca tanto los aspectos humanos y éticos como los <b class="text-blue">técnicos</b> <b class="separator">y </b> <b class="orange">académicos.</b>
    </template>
    <template v-else-if="index === 2">
        Fundado en <b class="orange">19</b><b class="text-blue">88</b>, el IPISA nació como una respuesta a la creciente demanda de educación técnica en la Región Norte de la República Dominicana. 
        Bajo la dirección de la congregación salesiana y con el respaldo decidido de la comunidad empresarial, este centro educativo asumió desde sus inicios el 
        compromiso de brindar una formación de excelencia a sus estudiantes. 
        <br /> <br />
        Aunque inicialmente fue <b>exclusivo para jóvenes varones, pronto se abrió sus puertas a las mujeres</b> y diversificó su oferta de talleres. Hoy en día, 
        arraigado en los principios del <b class="text-blue">Sistema Preventivo</b> <b class="separator">de</b> <b class="orange">San Juan Bosco</b>, el IPISA ha 
        graduado a más de <b>2,664</b> estudiantes y mantiene vínculos sólidos con una activa comunidad de exalumnos comprometidos con la institución.
    </template>
    <template v-else-if="index === 3">
        Fundado en <b class="orange">19</b><b class="text-blue">88</b>, el IPISA nació como una respuesta a la creciente demanda de educación técnica en la Región Norte de la República Dominicana. 
        Bajo la dirección de la congregación salesiana y con el respaldo decidido de la comunidad empresarial, este centro educativo asumió desde sus inicios el 
        compromiso de brindar una formación de excelencia a sus estudiantes. 
        <br /> <br />
        Aunque inicialmente fue <b>exclusivo para jóvenes varones, pronto se abrió sus puertas a las mujeres</b> y diversificó su oferta de talleres. Hoy en día, 
        arraigado en los principios del <b class="text-blue">Sistema Preventivo</b> <b class="separator">de</b> <b class="orange">San Juan Bosco</b>, el IPISA ha 
        graduado a más de <b>2,664</b> estudiantes y mantiene vínculos sólidos con una activa comunidad de exalumnos comprometidos con la institución.
    </template>
</template>
<script setup>
    const props = defineProps(['index']);
</script>