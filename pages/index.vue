<template>
    <section class="flex justify-center items-center bg-[#00488D99]">
        <div class="flex flex-col bg-gradient-to-b from-blue-400 to-[#004F9600] py-10 px-16 rounded-xl max-w-[700px]">
            <h4 class="font-bold font-garamond text-white text-[2.4rem] leading-[2.7rem] tracking-[1px] mb-3 text-center">
                REPRESENTANDO <span class="text-orange">30 AÑOS</span> DE EXCELENCIA ACADÉMICA
            </h4>
            <p class="text-lg text-white font-raleway">
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
    @apply h-screen;
}
</style>