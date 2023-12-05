<template>
    <NuxtLayout name="blank">
        <template #title>
            <span class="text-blue">Historia</span> <span class="separator">del</span> <span class="text-orange">Centro</span>
        </template>
        <template #content>
            <h2 class="subtitle mt-4" id="anchor-origin">
                Origen y Fundación
            </h2>
            El Instituto Politécnico Industrial de Santiago (IPISA) tuvo su génesis en la apremiante demanda empresarial del norte del país por técnicos 
            altamente competentes. Esta necesidad resonó con <b>Monseñor Roque Adames</b>, entonces Obispo de la Diócesis de Santiago, quien, sensibilizado 
            ante este requerimiento, propuso a la Secretaría de Estado de Educación Bellas Artes y Cultos (actual Ministerio de Educación de la República 
            Dominicana, MINERD) la instauración de un politécnico bajo la dirección de la congregación salesiana. Esta recomendación se cimentaba en la 
            filosofía distintiva de los salesianos de formar individuos íntegros como "<b>Buenos Cristianos y Honrados Ciudadanos</b>", junto con su vasta 
            experiencia en educación técnica.
            <br><br>
            El año crucial de <b>1987</b> selló el compromiso con la creación del Instituto Politécnico Industrial de Santiago, con la firma del contrato 
            entre la Secretaría de Educación, representada por el Lic. Pedro C. Pichardo, y la Sociedad Salesiana, bajo la tutela del P. Ángel R. Soto, 
            Inspector de las Antillas. Este acuerdo fue recibido con entusiasmo no solo por el empresariado sino por toda la región del Cibao.
            <br><br>

            <h2 class="subtitle mt-4" id="anchor-beginning">
                Inicios y Desarrollo
            </h2>
            La génesis de IPISA se materializó el <b>11 de enero de 1988</b>, cuando con la participación de <b>131 estudiantes</b>, se dio inicio a sus 
            actividades con una semana de ambientación. La inauguración oficial, el jueves <b>14</b>, contó con la presencia destacada del entonces Presidente 
            de la República, el Dr. Joaquín Balaguer. Para el lunes <b>18</b> del mismo mes, se formalizó el comienzo de las labores académicas y administrativas 
            correspondientes al segundo semestre del año escolar 1987-1988.
            <br><br>

            <h2 class="subtitle mt-4" id="anchor-development">
                Crecimiento y Adaptación
            </h2>
            La evolución de IPISA continuó con la creación en <b>2007</b> de dos nuevos talleres de servicios: Informática y Contabilidad y Finanzas. Estos avances 
            fortalecieron la capacidad de la institución para satisfacer la creciente demanda regional y nacional de técnicos con valores arraigados en la ética 
            cristiana y humana. Desde <b>2004</b>, IPISA no solo se ha dedicado a la formación de técnicos medios, sino que también ha enfocado sus esfuerzos en 
            la capacitación de técnicos básicos a través de la Unidad de Educación Continuada (UEC), fortaleciendo así su labor social con los jóvenes más necesitados 
            y consolidando sus vínculos con el entorno empresarial.
            <br><br>

            Con el paso del tiempo, IPISA ha labrado su identidad como un centro educativo de <b>confiabilidad inquebrantable, comprometido con la excelencia y 
            la calidad</b>. Ofreciendo una educación integral fundamentada en la tríada de <b>religión, razón y amor</b>, pilares del Sistema Preventivo de 
            San Juan Bosco.
            <br><br>
            
            <h2 class="subtitle mt-4" id="anchor-community">
                Comunidad y Logros
            </h2>
            La comunidad de IPISA se enriquece con la Asociación de Exalumnos, cuyo respaldo y continua participación brindan un apoyo invaluable a la institución.
            Hasta el año <b>2015</b>, IPISA se enorgullece de haber graduado a <b>2,664 estudiantes</b>, <b>30</b> de los cuales han retornado como parte del cuerpo 
            docente.
            <br><br>
            <h1 class="pasdmasmpod" id="anchor-papo">
                papoooo
            </h1>
        </template>
    </NuxtLayout>
</template>
<script setup>

import { useLayoutStore } from '@/store/layout';
const layout_store = useLayoutStore();
const about_navigation = [
    {
        title: 'Historia del centro',
        list: [
            {
                label: 'Origen y Fundación',
                anchor: 'origin'
            },
            {
                label: 'Inicios y Desarrollo',
                anchor: 'beginning'
            },
            {
                label: 'Crecimiento y Adaptación',
                anchor: 'development'
            },
            {
                label: 'Comunidad y Logros',
                anchor: 'community'
            },
        ]
    },
]
layout_store.$patch({ about_navigation });
</script>