<script setup>
const route = useRoute().params;

//featured_query
const query = { path: '/noticias', where: [{ visibility: 'feed' }], limit: 3 }

</script>
<template>
    <ContentDoc v-slot="{ doc }" :path="`/noticias/${route.slug}`">
        <header>
            <about-portrait-component picture_name="news-wallpaper"
            :wallpaper_phrase="doc.title" :picture="doc.wallpaper" />
        </header>
        
        <div class="bg-[#ebf4ff] h-[2px] mt-[4rem]"></div>

        <main class="article w-full max-w-[1180px] mx-auto px-[1.4rem] lg:px-[4rem] my-[2rem] bg-white">
            <div class="article-image-container overflow-hidden"> <!-- w-full h-[320px] min-[880px]:h-[700px] min-[880px]:w-[700px]  -->
                <nuxt-img class="wallpaper rounded-[1rem] object-cover" 
                loading="lazy" format="webp" sizes="100vw sm:50vw md:1400px lg:1200px" densities="x1 x2"
                :src="doc.img" />
            </div>
            
            <div class="article-decoration relative flex bg-[#D6E9FF] h-[3px] my-10">
                <div class="absolute top-[-50%] translate-y-[-30%] square-blue bg-blue w-[220px] h-[12px]"></div>
                <div class="absolute top-[-50%] translate-y-[-30%] square-orange bg-orange-300 left-[240px] w-[80px] h-[12px]"></div>
            </div>

            <h2 class="article-title font-raleway text-black text-[2rem] leading-[2.3rem] min-[880px]:text-[3.4rem] min-[880px]:leading-[3.5rem] font-bold mt-10 mb-7">
                {{ doc.title }}
            </h2>
            
            <div class="flex font-raleway">
                <div class="profile-pic bg-black-500 rounded-full h-[60px] w-[60px]"></div>
                <div class="ms-4 flex flex-col justify-center">
                    <h3 class="text-black-700 text-[1.2rem] leading-[1.4rem] min-[880px]:text-[1.4rem] min-[880px]:leading-[1.6rem] max-[880px]:mb-1 font-bold">
                        {{ doc.author }}
                    </h3>
                    <div class="flex flex-wrap items-center text-[12px] min-[880px]:text-[16px]">
                        <span class="text-black-700">Lectura corta</span>
                        <span class="rounded-full bg-black-500 h-[6px] w-[6px] mx-3"></span>
                        <span class="text-black-700">{{ doc.date }}</span>
                    </div>
                </div>
            </div>

            <div class="article-decoration relative flex bg-[#ebf4ff] bg-decorator h-[2px] translate-y-[5px] mt-3 mb-8"></div>
            
            <p class="article-description">
                <ContentRenderer :value="doc" />
            </p>
        </main>
    </ContentDoc>
    <div class="mt-5"></div>
    <ContentSlot class="mt-5" :use="$slots.gallery" />
    <div class="mt-5"></div>

    <div class="recommended-articles-separator relative flex bg-[#D6E9FF] h-[2px] w-full" />

    <div class="recommended-articles w-full max-w-[1180px] flex items-stretch flex-wrap justify-between px-[1.4rem] lg:px-[4rem] pb-[42px] min-[880px]:pb-[20px] mx-auto">
        <h2 class="font-raleway text-black text-[2.2rem] lg:text-[1.8rem] lg:h-[2.4rem] font-bold leading-[1.1] mt-10 mb-3 min-[880px]:mb-4">
            Noticias Recomendadas
        </h2>
        <div class="flex flex-wrap justify-between">
        <ContentList :query="query" path="/noticias" v-slot="{ list }">
            <div class="featured-news flex flex-wrap">
                <NewsArticle v-for="(article, index) in list" :key="index" :article_info="article" />
            </div>
        </ContentList>
        </div>
    </div>

</template>
<style scoped>
.featured-news .article:last-child {
    margin-right: 0 !important;
}
.recommended-articles :deep(.article) .image-container {
    height: 220px;
}
.recommended-articles :deep(.article) {
    margin-right: 25px !important;
}
.recommended-articles :deep(.article) {
    width: 100%;
    max-width: 330px;
}
p.article-description {
    font-family: var(--raleway);
    font-weight: 500;
    text-align: justify;
    font-size: 1rem;
    margin-block: 1rem;
    color: var(--black-700);
}
</style>