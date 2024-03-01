
<script setup>
    const story = await useStoryblok('/noticias', { version: 'draft' });
    onMounted(() => {
        console.log(story.value);
    });
</script>
<template>
    <div>
        <header>
            <about-portrait-component
                picture="https://a.storyblok.com/f/272924/6000x4000/ba2ae85481/portrait-2.jpg"
                picture_name="about-us-wallpaper"
                wallpaper_phrase="Sobre nosotros" />
        </header>
        <main class="min-h-[50vh] bg-white">
            <StoryblokComponent v-if="story" :blok="story.content" />
        </main>
    </div>
</template>