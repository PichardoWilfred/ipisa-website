<template>
    <div>
        <header>
            <about-portrait-component 
                picture="https://a.storyblok.com/f/272924/6000x4000/ba2ae85481/portrait-2.jpg"
                picture_name="about-us-wallpaper"
                wallpaper_phrase="Sobre nosotros" />
        </header>
        <div>
            
        </div>
        <main class="min-h-[50vh] bg-white">
            <StoryblokComponent v-if="story" :blok="story.component" />
        </main>
    </div>
</template>
<script setup>
    // const story = await useAsyncStoryblok('news', { version: 'draft' });
</script>