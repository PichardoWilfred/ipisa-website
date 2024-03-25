<template>
    <section class="relative w-full max-w-[1680px] mx-auto px-[5vw] pt-[6rem] mb-[2rem] z-20" id="news">
        <h2 class="flex items-center font-raleway text-[2.2rem] lg:text-[3.8rem] cursor-pointer mb-2 lg:mb-4 transition-all">
            <nuxt-link to="/noticias" class="font-medium max-sm:mx-auto ">
                <b class="me-2 lg:me-5 text-blue">Últimas</b><b class="text-orange-300">Noticias</b>
            </nuxt-link>
        </h2>
        <div class="news-feed flex">
            <ContentList :query="query" path="/noticias" v-slot="{ list }">
                <NewsArticle v-for="(item, index) in list" :article_info="item" :key="index" see_more_btn />
            </ContentList>
        </div>
    </section>
</template>
<script setup>
// SSR
const formatId = (text) => {
    const formattedText = text.toLowerCase().replace(/ /g, '-'); // Convert to lowercase and replace spaces with hyphens
    const currentTime = new Date().getTime().toString().substr(-7); // Get the current time as an arbitrary 7-digit number
    return `${formattedText}-${currentTime}`; // Return the formatted text followed by the current time
}

// Create a query looking into content/articles directory
const query = { path: '/noticias', where: [{ visibility: 'feed' }], limit: 4 }

</script>
<style scoped>
.article :deep(p.article-description) {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3; 
    -webkit-box-orient: vertical;
}
.news-feed :deep(.article) .image-container {
    height: 220px;
}
.news-feed .article:hover :deep(p.article-description){
    color: var(--black)
}
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