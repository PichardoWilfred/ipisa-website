<template>
    <about-portrait-component 
    picture="https://a.storyblok.com/f/272924/4000x3000/45405225c8/img_20240307_134158169.jpg"
    picture_name="admissions-wallpaper" wallpaper_phrase="Admisiones" />
    <HomeJobInsertion />
</template>
<script setup>
useSeoMeta({
    title: 'IPISA - Inserción Laboral',
    ogTitle: () => `IPISA - Inserción Laboral`,
    ogDescription: () => `En nuestra institución os enfocamos en brindar educación técnica de alta calidad que prepare a nuestros estudiantes para una exitosa inserción en el mundo laboral.`,
    description: () => `En nuestra institución os enfocamos en brindar educación técnica de alta calidad que prepare a nuestros estudiantes para una exitosa inserción en el mundo laboral. `,
    ogImage: () => 'https://a.storyblok.com/f/272924/1055x582/5ec19f59e9/insercion-laboral.png',
    twitterCard: () => 'https://a.storyblok.com/f/272924/1055x582/5ec19f59e9/insercion-laboral.png',
    language: () => `es` 
});
</script>