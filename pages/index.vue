<template>
    <HomePortrait />
    <HomeWorkshop />
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
</style>