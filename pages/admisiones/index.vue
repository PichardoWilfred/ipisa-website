<template>
    
    <about-portrait-component picture="https://a.storyblok.com/f/272924/4000x3000/45405225c8/img_20240307_134158169.jpg"
        picture_name="admissions-wallpaper" wallpaper_phrase="Admisiones" />
    <HomeAdmissions />
    <div class="bg-[#CEE3FF] w-full h-[1px] mt-[8rem]" />
    <HomeNewStudents /> 
</template>
<script setup>

useSeoMeta({
    title: 'Admisiones',
    ogTitle: () => `IPISA - Requisitos de Admisión`,
    ogDescription: () => `Para formar parte de nuestra comunidad educativa es importante seguir un proceso de admisión que garantice la calidad y excelencia de nuestros estudiantes.`,
    description: () => `Para formar parte de nuestra comunidad educativa es importante seguir un proceso de admisión que garantice la calidad y excelencia de nuestros estudiantes.`,
    ogImage: () => 'https://a.storyblok.com/f/272924/1055x582/f87cfe4837/admisiones-del-centro.png',
    twitterCard: () => 'https://a.storyblok.com/f/272924/1055x582/f87cfe4837/admisiones-del-centro.png',
    language: () => `es` 
});
</script>