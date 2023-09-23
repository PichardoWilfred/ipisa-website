<template>
    <section>
        <div class="flex max-lg:flex-col-reverse items-center max-w-[1700px] px-[5vw] mx-auto">
            <div class="illustration" :class="selected_section.icon">
                <nuxt-icon :name="`home/about/${selected_section.icon}`" filled />
            </div>
            <div class="content">
                <h1 class="flex items-end mb-2 font-bold text-[2.1rem] lg:text-[3.6rem] hover:underline cursor-pointer transition-all">
                    {{ selected_section.title }}<span class="max-lg:hidden"><Icon name="fe:link" class="text-[2.5rem] separator mb-3" /></span>
                </h1>
                <p v-html="selected_section.description" class="text-black text-[1.1rem] font-medium lg:max-w-[760px] min-h-[30vh] mb-[1.8rem]"></p>
                
                <ul class="navigation">
                    <li v-for="({ label }, index) in sections"
                    :class="{'selected': selected_index === index}"
                    @click="selected_index = index"
                    class="flex items-center font-bold text-[1.2rem] lg:text-[1.3rem]" :key="index">
                        {{ label }} <div class="cube mx-4 lg:mx-4 h-[10px] w-[10px]"></div>
                    </li>
                </ul>
            </div>
        </div>
        
        <hr class="border-gray-100 mt-[8rem]">
    </section>
</template>

<script setup>
    const selected_index = ref(0);

    const sections = ref([
            { 
                label: 'Nosotros',
                icon: "school",
                title: '¿Qué Ofrece IPISA?',
                description: `El Instituto Politécnico Industrial de Santiago <b>(IPISA)</b> es una institución educativa de renombre que destaca por su enfoque 
                en la formación técnica y su firme compromiso con los valores cristianos. Su lema: <b class="text-blue">"Buenos Cristianos</b> <b class="separator">y</b> 
                <b class="orange">Honrados Ciudadanos"</b>, encapsula su misión de brindar una educación integral que combine habilidades técnicas y valores éticos. 
                <br /> <br/>
                Nos enorgullecemos de ofrecer educación de alta calidad en diversas disciplinas técnicas, preparando a los estudiantes para enfrentar el mundo laboral 
                con confianza y ética. Nuestra énfasis en la <b class="text-blue">excelencia</b> <b class="orange">académica</b>, la formación en valores y una amplia 
                gama de actividades extracurriculares hacen de IPISA una institución educativa de elección para aquellos que buscan una educación técnica sólida y una 
                base sólida en principios éticos.`
            },
            {
                label: 'Filosofía',
                icon: 'philosofy',
                title: 'Filosofía del centro',
                description: `La visión educativa del centro se inspira en el sistema preventivo de <b class="text-blue-300 underline">Don Bosco</b>, fundamentado 
                en <b class="text-blue">la razón</b>, <b class="orange">la religión</b> <b class="separator">y</b> <b class="text-blue">el amor</b>. Este enfoque busca formar a jóvenes centrados en valores éticos y preparados para convertirse en ciudadanos 
                responsables y comprometidos con la sociedad.
                <br /> <br />
                Este sistema educativo se caracteriza por el <b>equilibrio</b> entre la dimensión espiritual y la formación integral de los estudiantes. 
                Promueve valores como la responsabilidad, la calidad, la ciudadanía, la ética, la integridad, la honradez y la justicia. A través de este enfoque, 
                <b>IPISA</b> se esfuerza por brindar una educación de calidad que fortalezca tanto los aspectos humanos y éticos como los <b class="text-blue">técnicos</b> 
                <b class="separator">y</b> <b class="orange">académicos.</b>`
            },
            {
                label: 'Historia',
                icon: 'history',
                title: 'Historia del centro',
                description: `Fundado en <b class="orange">19</b><b class="text-blue">88</b>, el IPISA nació como una respuesta a la creciente demanda de educación técnica en la Región Norte de la República Dominicana. 
                Bajo la dirección de la congregación salesiana y con el respaldo decidido de la comunidad empresarial, este centro educativo asumió desde sus inicios el 
                compromiso de brindar una formación de excelencia a sus estudiantes. 
                <br /> <br />
                Aunque inicialmente fue <b>exclusivo para jóvenes varones, pronto se abrió sus puertas a las mujeres</b> y diversificó su oferta de talleres. Hoy en día, 
                arraigado en los principios del <b class="text-blue">Sistema Preventivo</b> <b class="separator">de</b> <b class="orange">San Juan Bosco</b>, el IPISA ha 
                graduado a más de <b>2,664</b> estudiantes y mantiene vínculos sólidos con una activa comunidad de exalumnos comprometidos con la institución.`
            },
            {
                label: 'Reconocimientos',
                icon: 'awards',
                title: 'Reconocimientos',
                description: `Fundado en <b class="orange">19</b><b class="text-blue">88</b>, el IPISA nació como una respuesta a la creciente demanda de 
                educación técnica en la Región Norte de la República Dominicana. Bajo la dirección de la congregación salesiana y con el respaldo decidido 
                de la comunidad empresarial, este centro educativo asumió desde sus inicios el compromiso de brindar una formación de excelencia a sus 
                estudiantes. 
                <br /> <br />
                Aunque inicialmente fue exclusivo para jóvenes varones, pronto se abrió sus puertas a las mujeres y diversificó su oferta de talleres. Hoy en día, 
                arraigado en los principios del Sistema Preventivo de San Juan Bosco, el IPISA ha graduado a más de 2,664 estudiantes y mantiene vínculos sólidos con 
                una activa comunidad de exalumnos comprometidos con la institución y su misión educativa.`
            },
    ]);
    console.log(sections);
    const selected_section = computed(() => sections.value[selected_index.value]);
</script>
<style scoped>
.illustration :deep(svg) {
    @apply w-full me-[20px] lg:p-[40px];
}
.illustration.school :deep(svg) {
    @apply max-w-[720px] h-[500px];
}
.illustration.philosofy :deep(svg) {
    @apply max-w-[690px] h-[500px];
}
.illustration.history :deep(svg) {
    @apply w-full max-w-[760px] h-[500px];
}
.content {
    @apply font-raleway text-black lg:ms-auto;
}
.content b {
    @apply font-bold;
}
.content ul.navigation {
    @apply flex flex-wrap;
}
.content ul.navigation li {
    @apply cursor-pointer hover:underline transition-all;
}
.content ul.navigation li:nth-child(odd) { @apply text-[#FF7320CC] hover:text-orange; }
.content ul.navigation li:nth-child(odd) .cube { @apply bg-[#FF7320CC]; }
.content ul.navigation li:nth-child(even) { @apply text-[#0478E0CC] hover:text-blue; }
.content ul.navigation li:nth-child(even) .cube { @apply bg-[#0478E0CC]; }

.content ul.navigation li.selected:nth-child(even) .cube { @apply bg-blue; }
.content ul.navigation li.selected:nth-child(odd) .cube { @apply bg-orange; }
.content ul.navigation li.selected { @apply underline; }
.content ul.navigation li.selected:nth-child(even) { @apply text-blue; }
.content ul.navigation li.selected:nth-child(odd) { @apply text-orange; }

</style>