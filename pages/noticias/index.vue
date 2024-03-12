<template>
    <div>
        <header>
            <about-portrait-component
                picture="https://a.storyblok.com/f/272924/4000x3000/3cf86178c4/img_20240307_134206084-1.jpg"
                picture_name="news-wallpaper"
                wallpaper_phrase="Noticias del centro" />
        </header>
        <main class="min-h-[50vh] bg-white">
            <NewsFeed />
        </main>
    </div>
</template>
<script setup>
useSeoMeta({
    title: 'IPISA - Noticias',
    ogTitle: () => `IPISA - Noticias`,
    ogDescription: () => `Entérate de las últimas noticias del Centro.`,
    description: () => `Entérate de las últimas noticias del Centro.`,
    ogImage: () => 'https://a.storyblok.com/f/272924/1055x582/b5381de68b/noticias-del-centro.png',
    twitterCard: () => 'https://a.storyblok.com/f/272924/1055x582/b5381de68b/noticias-del-centro.png',
    language: () => `es` 
});
</script>