<template>
    <section class="flex justify-center items-center bg-[#00488D99] lg:px-8">
        <div class="card">
            <h4 class="title">
                REPRESENTANDO <span class="text-orange">30 AÑOS</span> DE EXCELENCIA ACADÉMICA
            </h4>
            <p class="description">
                El Instituto Politécnico Industrial y de Servicios de Santiago, es un centro educativo 
                que ofrece a la población una formación integral a nivel secundario y preparación técnico-profesional 
                para el mundo laboral.
            </p>
        </div>
    </section>
    <section class="px-10" v-for="section in sections_test" :key="section">
        {{ section }}
    </section>
</template>
<script setup>
const sections_test = ['about', 'news', 'activities'];
</script>
<style scoped>
section {
    @apply h-[120vh] lg:h-screen; 
}
div.card {
    @apply flex flex-col bg-gradient-to-b from-blue-400 to-[#004F9600] py-10 px-8 lg:px-16 sm:rounded-xl lg:max-w-[700px];
}
h4.title {
    @apply font-bold font-garamond text-white max-lg:max-w-[440px] text-[1.3rem] lg:text-[2.4rem] leading-[2rem] lg:leading-[2.7rem] tracking-[1px] mx-auto mb-3 text-center;
}
p.description {
    @apply font-raleway text-lg text-white max-lg:max-w-[440px] max-lg:text-justify max-lg:mx-auto;
}
</style>