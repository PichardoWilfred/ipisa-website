<template>
<div class="grid-gallery mt-6">
    <div class="grid-item" v-for="(papo, index) in img" :key="index">
        <img :src="papo" alt="Image 1">
    </div>
</div>
</template>
<script setup>
defineProps(['img']); 
</script>
<style scoped>
.grid-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 20px; /* Adjust the gap between images */
}

@media (max-width: 576px) {
    .grid-gallery {
        grid-template-columns: 1fr;
    }
}

.grid-item img {
    width: 100%;    
    height: 100%;
    object-fit: cover;
}</style>