
<template>
    <section class="job-insertion relative max-[680px]:pb-[20rem] px-[5vw] mt-28 sm:h-[130vh] lg:h-[92vh] overflow-hidden" 
    v-intersection-observer="[onView, { threshold: 0.9 }]" id="job-insertion">
        <h2 class="text-black font-normal font-raleway text-[1.6rem] sm:text-[2.1rem] lg:text-[3.1rem] 
        cursor-pointer mb-2 lg:mb-4 transition-all">
            <b class="text-blue">Inserción</b> <b class="text-orange-300">Laboral</b>
        </h2>
        <div class="relative bg-white max-w-[1100px] z-20">
            <p class="section-text">
                En nuestra institución os enfocamos en brindar educación técnica de alta calidad que prepare a nuestros estudiantes 
                para una exitosa inserción en el <b> mundo laboral.</b> Nuestra formación se basa en la práctica y el aprendizaje de habilidades, 
                en colaboración con industrias líderes, para asegurar que los <b>graduados estén preparados desde el primer día para enfrentar 
                los desafíos del mercado laboral actual.</b>
            </p>
            <p class="section-text">
                Además de la formación técnica, ofrecemos servicios de<b> orientación laboral</b> y <b>asesoramiento</b> para ayudar a 
                los estudiantes a encontrar oportunidades de empleo, <b>crear currículos efectivos </b> y mejorar sus habilidades de entrevista. 
            </p>
            <p class="section-text sm:max-w-[88%]">
                Invitamos a empresas externas interesadas en colaborar centro a explorar oportunidades de asociación con nosotros. 
                Si su empresa está buscando establecer vínculos con una institución educativa líder en formación técnica y profesional, 
                y está dispuesta a contribuir al crecimiento y desarrollo de futuros talentos, lo invitamos a completar <b class="underline"> nuestro formulario 
                de colaboración.</b>
            </p>
        </div>
            <nuxt-icon class="girl-chair-shadow z-10" name="home/job-insertion/girl-chair-shadow" filled />
            <nuxt-icon class="girl-chair z-10" name="home/job-insertion/girl-chair" filled />

            <nuxt-icon class="dots z-10" name="home/job-insertion/dots" filled />

            <nuxt-icon class="building z-10" name="home/job-insertion/buildings" filled />
            
            <nuxt-icon class="bubble one z-10" :class="{ visible }" name="home/job-insertion/bubble-1" filled />
            <nuxt-icon class="bubble two z-10" :class="{ visible }" name="home/job-insertion/bubble-2" filled />
            <nuxt-icon class="bubble three z-10" :class="{ visible }" name="home/job-insertion/bubble-3" filled />
        <!-- </div> -->
    </section>
</template>
<script setup>
import { vIntersectionObserver } from '@vueuse/components';
const visible = ref(false);

const onView = ([{ isIntersecting }]) => {
    const in_mobile = window.matchMedia("(max-width: 678px)").matches;
    if (isIntersecting || in_mobile) { visible.value = true; }
}
onMounted(() => {
    const bubbles = document.querySelectorAll('span.bubble');
    for (const bubble of bubbles) {
        bubble.addEventListener("animationend", (element) => {
            const bubble_ = element.target;
            if ( bubble_.classList.contains('visible') ) {
                bubble_.classList.add('idle');
                bubble_.classList.remove('visible');
            }
        })
    }
})
</script>
<style scoped>
.section-text {
    @apply text-[1.1rem] text-black font-medium font-raleway mb-10 lg:mb-6;
}
.girl-chair {
    @apply absolute max-[680px]:text-[30vw] text-[200px] lg:text-[250px] left-[20px] bottom-[-20px] sm:bottom-[-50px];
}
.girl-chair-shadow {
    @apply absolute max-[680px]:text-[30vw] text-[200px] lg:text-[270px] left-[40px] bottom-[-50px];
}
.building {
    @apply absolute text-[48rem] max-[680px]:text-[90vw] min-[1400px]:text-[50vw] 
    right-[-90px] sm:right-[-140px] min-[1400px]:right-[-140px] 
    bottom-[-100px] min-[1400px]:bottom-[-140px];
}
.bubble {
    @apply absolute text-[12vw] max-[680px]:text-[20vw] min-[1400px]:text-[11rem];
}
.bubble.one {
    @apply max-[680px]:bottom-[130px] max-[680px]:right-[14%] 
    sm:right-[150px] sm:bottom-[380px]
    min-[1400px]:right-[230px] min-[1400px]:bottom-[480px];
}
.bubble.two {
    @apply max-[680px]:right-[4%] max-[680px]:bottom-[4%]
    sm:right-[7px] sm:bottom-[180px]
    min-[1400px]:right-[50px] min-[1400px]:bottom-[200px];
}
.bubble.three {
    @apply max-[680px]:bottom-[3%] max-[680px]:right-[27%]
    sm:right-[284px] sm:bottom-[160px] 
    min-[1400px]:right-[400px] min-[1400px]:bottom-[200px];
}

.dots {
    @apply hidden min-[1390px]:flex absolute min-[1390px]:bottom-[-24%] min-[1390px]:left-[30%] text-[25vw];
}
</style>