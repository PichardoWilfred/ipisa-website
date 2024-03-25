<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';

const route = useRoute().params;

//featured_query
const desktop_query = { path: '/noticias', where: [{ visibility: 'feed' }], limit: 3 }
const mobile_query = { path: '/noticias', where: [{ visibility: 'feed' }], limit: 8 }

const { data } = await useAsyncData('home', () => queryContent(`/noticias/${route.slug}`).findOne());
const social_share = ref(false);

const open_share = (article) => {
    if (window.matchMedia("(max-width: 768px)").matches) {
        navigator.share({
            title: article.title,
            text: article.description,
            url: article_link.value
        });
    }else {
        social_share.value = true;
    }
}

const copy_share_link = () => {
    copy_link();
    link_copied.value = false;
}
const article_link = ref(`https://ipisa.edu.do/noticias/${data.value.id}`);
async function copy_link() {
    try {
        await navigator.clipboard.writeText(article_link.value);
        requirements_copied_text.value = "Enlace de la noticia copiado!";
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

const requirements_copied_text = ref("Copiar enlace de la noticia");
// S.E.O
useSeoMeta({
    title: data.value.title,
    description: data.value.description,
    ogTitle: data.value.title,
    ogDescription: data.value.description,
    ogImage: data.value.wallpaper,
    twitterCard: data.value.img,
});

let formatted_date = useDateParser(data.value.date_);

</script>
<template>
    <ContentDoc v-slot="{ doc }" :path="`/noticias/${route.slug}`">
        <header>
            <about-portrait-component picture_name="news-wallpaper"
            :wallpaper_phrase="doc.title" :picture="doc.wallpaper" />
        </header>
        
        <div class="relative bg-[#D6E9FF] h-[3px] lg:h-[2px] mt-[4rem] lg:mb-[2rem]">
            <div class="absolute lg:hidden px-[1.4rem]">
                <div class="absolute top-[-50%] translate-y-[-30%] square-blue bg-blue w-[220px] h-[12px]" />
                <div class="absolute top-[-50%] translate-y-[-30%] square-orange bg-orange-300 left-[270px] w-[80px] h-[12px]" />
            </div>
        </div>
        <main class="article w-full max-w-[1180px] mx-auto px-[1.4rem] lg:px-[4rem] mb-[2rem] bg-white">

            <div class="article-image-container max-lg:hidden overflow-hidden">
                <nuxt-img class="wallpaper rounded-[1rem] object-cover" 
                loading="lazy" format="webp" sizes="100vw sm:50vw md:1400px lg:1200px" densities="x1 x2"
                :src="doc.img" />
            </div>
            
            <div class="article-decoration max-lg:hidden relative flex bg-[#D6E9FF] h-[3px] my-10">
                <div class="absolute top-[-50%] translate-y-[-30%] square-blue bg-blue w-[220px] h-[12px]" />
                <div class="absolute top-[-50%] translate-y-[-30%] square-orange bg-orange-300 left-[240px] w-[80px] h-[12px]" />
            </div>

            <h2 class="article-title font-raleway text-black text-[2rem] leading-[2rem] min-[880px]:text-[3.4rem] min-[880px]:leading-[3.5rem] font-bold mt-6 mb-4 lg:mt-10 lg:mb-7">
                {{ doc.title }}
            </h2>

            <div class="flex items-center justify-between font-raleway">
                <div class="flex flex-col justify-center">
                    <h3 class="text-black-700 text-[1.4rem] leading-[1.4rem] min-[880px]:text-[1.5rem] min-[880px]:leading-[1.6rem] max-[880px]:mb-2 font-bold">
                        {{ doc.author }}
                    </h3>
                    <div class="flex flex-wrap items-center text-[16px]">
                        <span class="text-black-700">1 min</span>
                        <span class="rounded-full bg-black-500 h-[6px] w-[6px] mx-3"></span>
                        <span class="text-black-700">{{ formatted_date }}</span>
                    </div>
                </div>
                
                <!-- share-button -->
                <button class="share flex items-center content-center justify-center bg-white hover:bg-black-100 active:bg-black-500 rounded-full w-[45px] h-[45px] lg:w-[50px] lg:h-[50px]"
                @click.prevent="open_share(doc)">
                    <nuxt-icon name="home/news/share" class="phone-icon-color text-[20px] lg:text-[26px] translate-x-[-1px] translate-y-[2px] text-center" filled />
                </button>
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
        <div class="hidden md:flex flex-wrap justify-between">
            <ContentList :query="desktop_query" path="/noticias" v-slot="{ list }">
                <div class="featured-news flex flex-wrap">
                    <NewsArticle v-for="(article, index) in list" :key="index" :article_info="article" />
                </div>
            </ContentList>
        </div>
        <div class="w-full md:hidden">
            <ContentList :query="mobile_query" path="/noticias" v-slot="{ list }">
                <swiper :modules="[EffectFade, Autoplay, Navigation, Pagination]"
                :slides-per-view="1.1" :space-between="30" :pagination="{ dynamicBullets: true }"
                class="mobile-portrait-news-feed bg-white mt-4 h-[420px]">
                    <swiper-slide v-for="(article, index) in list" :key="index" class="article bg-white py-3 h-[420px]">
                        <NewsArticle :article_info="article" />
                    </swiper-slide>
                </swiper>
            </ContentList>
        </div>
    </div>
    
    <Teleport to="body">
        <transition name="fade-fast-2" mode="out-in">
            <!-- rounded-t-[20px] -->
            <div v-if="social_share" class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-[70]">
                <div class="share-modal relative bg-white rounded-[20px] w-full max-w-[420px] z-[20] p-6">
                    <div class="share-header flex items-center justify-between">
                        <button class="share absolute top-[-10px] left-[-30px] p-4 flex items-center content-center justify-center bg-white w-[50px] h-[50px] rounded-full ms-2 me-6 cursor-default">
                            <nuxt-icon name="home/news/share" class="phone-icon-color translate-y-[3px] translate-x-[-3px] text-[24px] text-center" filled />
                        </button>
                        <h1 class="text-black font-raleway text-[1.4rem] leading-[1.6rem] font-semibold">
                            Compartir en redes sociales
                        </h1>
                        <button @click.prevent="() => { social_share = false }" 
                            class="flex items-center justify-center hover:bg-black-100 active:bg-black-500 active:text-white separator p-1 w-[35px] h-[35px] rounded-full">
                            <Icon name="material-symbols:close" class="font-bold text-[4rem]" />
                        </button>
                    </div>
                    <div class="flex items-center mt-[0.4rem] text-white"> <!-- v-for="(logo, index) in ['facebook_rounded','instagram','X']" :key="index" -->
                        <SocialShare class="me-3" network="facebook" :url="article_link" :styled="true" :label="false" />
                        <SocialShare class="me-3" network="twitter" :url="article_link" :styled="true" :label="false" />
                        <SocialShare class="me-3" network="linkedin" :url="article_link" :styled="true" :label="false" />
                        <SocialShare class="me-3" network="whatsapp" :url="article_link" :styled="true" :label="false" />
                        <SocialShare class="me-3" network="telegram" :url="article_link" :styled="true" :label="false" />
                        <SocialShare class="last:me-3" network="pinterest" :url="article_link" :styled="true" :label="false" />
                    </div>
                    <div class="relative bg-[#e5f1ff] h-[2px] my-[1rem]" />
                    <div class="relative flex items-center w-full">
                        <button class="social-share tooltip rounded-full flex items-center justify-center
                        bg-black-100 active:bg-black-500 active:text-white separator p-3 transition-all" 
                        @click.prevent="copy_share_link">
                            <span class="tooltip-text text-[16px] mx-3">{{ requirements_copied_text }}</span>
                            <Icon name="ic:outline-content-copy" class="font-bold text-[1.3rem]" />
                        </button>
                        <div class="link-copy w-full relative ms-3 transition-all">
                            <span class="absolute top-[50%] translate-y-[-50%] left-0 
                            font-raleway text-black bg-black-500 text-[1rem] px-3 py-2 font-medium rounded-lg truncate" style="width: inherit;">
                                {{ article_link }}
                            </span>
                        </div>
                    </div>
                </div>
                <div @click.prevent="() => { social_share = false }" class="mask bg-[#003464] absolute top-0 w-full h-full left-0 opacity-[0.4] z-[10]" />
            </div>
        </transition>
    </Teleport>
</template>
<style scoped>
.article .article-content h3.article-title {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
    line-clamp: 1; 
    -webkit-box-orient: vertical;
}
.recommended-articles :deep(.article) .image-container {
    height: 220px;
}
.recommended-articles :deep(.article:nth-child(3n)) { margin-right: 0 !important; }

@media (min-width: 768px) {
    .recommended-articles :deep(.article) {
        margin-right: 25px !important;
    }
    .featured-news .article:last-child {
        margin-right: 0 !important;
    }
}
@media (min-width: 768px) {
    .recommended-articles :deep(.article) {
        width: 100%;
        max-width: 330px;
    }
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