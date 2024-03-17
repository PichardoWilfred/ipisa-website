<template>
    <section class="relative w-full max-w-[1680px] mx-auto px-[5vw] pt-[6rem] mb-[2rem] z-20" id="news">
        <h2 class="flex items-center text-black font-raleway text-[2.2rem] lg:text-[3.8rem] cursor-pointer mb-2 lg:mb-4 transition-all">
            <nuxt-link to="/noticias">
                <b class="me-2 lg:me-5 text-blue">Últimas</b><b class="text-orange-300">Noticias</b>
            </nuxt-link>
        </h2>
        <div class="news-feed">
            <ContentList :query="query" path="/noticias" v-slot="{ list }">
                <nuxt-link :to="'/noticias/'+item.id" v-for="(item, index) in list" class="news flex flex-col font-raleway cursor-pointer">
                    <NewsPortraitArticle :item="item"/>
                </nuxt-link>
            </ContentList>
        </div>
    </section>
</template>
<script setup>
const formatId = (text) => {
    const formattedText = text.toLowerCase().replace(/ /g, '-'); // Convert to lowercase and replace spaces with hyphens
    const currentTime = new Date().getTime().toString().substr(-7); // Get the current time as an arbitrary 7-digit number
    return `${formattedText}-${currentTime}`; // Return the formatted text followed by the current time
}

// Create a query looking into content/articles directory
const query = { path: '/noticias', where: [{ visibility: 'portrait' }], limit: 4 }

</script>
<style scoped>
/* bounce dot animation on home.css */
@media (max-width: 800px) {
    .news-feed {
        display: grid;
        grid-template-columns: repeat(1, minmax(320px, 1fr));
        grid-template-rows: auto;
        gap: 60px;
    }
}
@media (min-width: 800px) {
    .news-feed {
        display: grid;
        grid-template-columns: repeat(2, minmax(320px, 1fr));
        grid-template-rows: auto;
        gap: 3%;
    }
}
@media (min-width: 1500px) {
    .news-feed {
        grid-template-columns: repeat(4, minmax(320px, 1fr));
        grid-template-rows: auto;
        gap: 2%;
    }
}
</style>