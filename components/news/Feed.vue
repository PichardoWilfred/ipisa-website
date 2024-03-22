<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination } from 'swiper/modules';

    let layout_mode = ref(true);
    const change_layout = () => {
        layout_mode.value = !layout_mode.value; 
    }

    // Create a query looking into content/articles directory
    const recommended_query = { path: '/noticias', where: [{ visibility: 'feed' }], limit: 16 }
    const featured_query_tiles = { path: '/noticias', where: [{ visibility: 'feed' }], limit: 9 }
    const query = { path: '/noticias', where: [{ visibility: 'feed' }], limit: 10 }
    //featured_query
    const featured_query = { path: '/noticias', where: [{ visibility: 'feed' }], limit: 4 }

    function get_date() {
        const months = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];

        const currentDate = new Date();
        const dayOfMonth = currentDate.getDate();
        const monthIndex = currentDate.getMonth();
        const month = months[monthIndex];
        const year = currentDate.getFullYear();

        const formattedDate = `${dayOfMonth} de ${month}, ${year}`;
        return formattedDate;
    }
    const small_bar = ref('bg-orange-300');
    const big_bar = ref('bg-blue');

    const toggle_bar_color = () => {
        if (big_bar.value === 'bg-blue') {
            big_bar.value = "bg-orange-300";
            small_bar.value = "bg-blue";
        }else {
            big_bar.value = "bg-blue";
            small_bar.value = "bg-orange-300";
        }
    }
</script>
<template>
    <div class="relative flex flex-col">
        <div class="min-[880px]:hidden absolute w-full bg-white h-[40px] top-[-20px] rounded-[80px]"></div>

        <div class="hidden max-[880px]:flex justify-between w-full max-w-[1620px] mx-auto px-[1.4rem] mt-[2.5rem]">
            <h1 class="font-raleway text-black text-[2.2rem] leading-[2rem] font-bold">
                Noticias
            </h1>
            <Icon name="fe:search" filled size="38px" 
            class="search-icon text-black ms-auto me-2 cursor-pointer transition-all" />
        </div>
        <div class="hidden max-md:flex font-raleway mt-1 mb-2 text-separator px-[1.4rem]">
            {{ get_date() }}
        </div>

        <div class="relative flex w-full bg-[#D6E9FF] h-[2px] translate-y-[5px] mt-[1rem] min-[880px]:mt-[7rem]">
            <div class="hidden max-[880px]:flex absolute top-[-50%] left-[20px] w-[140px] translate-y-[-30%] square-blue bg-blue h-[12px]"></div>
            <div class="hidden max-[880px]:flex absolute top-[-50%] translate-y-[-30%] square-orange bg-orange-300 left-[180px] w-[80px] h-[12px]"></div>
        </div>
    </div>


    <section class="w-full max-w-[1620px] mx-auto px-[1.4rem] lg:px-[4rem] mt-[2rem] min-[880px]:mt-[4rem] mb-[8rem] overflow-hidden">

        <div class="news-feed-header flex items-end justify-between flex-wrap">

            <h1 class="min-[880px]:flex hidden font-raleway text-separator text-[2.2rem] lg:text-[4.2rem] lg:leading-[4.2rem] lg:h-[4.2rem] font-bold">
                <span class="orange">Noticias</span><span class="mx-2 lg:mx-3">del</span><span class="text-blue"> Centro</span>
            </h1>
            <!-- portrait-news -->
            <div class="w-full min-[880px]:hidden">
                <ContentList :query="query" path="/noticias" v-slot="{ list }">
                    <swiper :modules="[Pagination]" :slides-per-view="1.1" :space-between="20" :pagination="{ dynamicBullets: true }"
                    class="mobile-portrait-news-feed bg-white mt-4 h-[415px]">
                        <swiper-slide v-for="(article, index) in list" :key="index" class="bg-white py-3 h-[415px]">
                            <NewsArticle :article_info="article" />
                        </swiper-slide>
                    </swiper>
                </ContentList>
            </div>
        </div>
        <div class="news-feed-content flex flex-wrap justify-start space-between">
            <div class="featured-article flex-1 hidden min-[800px]:flex max-xl:min-h-[480px] min-[1460px]:pe-10 mt-8"> <!-- featured article -->

                <ContentQuery path="/noticias/dia-de-san-juan-bosco-2024" find="one" v-slot="{ data: featured_article }">
                    <div class="featured-article-title flex items-start max-w-[520px] me-8"> <!-- featured-article-content -->
                        <div class="flex flex-col w-[90px] h-[200px] me-[15px]">
                            <div class="w-full h-[120px] mb-4 transition-all" :class="big_bar" /> <!-- bg-blue -->
                            <div class="w-full h-[70px] transition-all" :class="small_bar" /> <!-- bg-orange-300 -->
                        </div>
                        <div class="relative flex flex-col min-w-[315px]">
                            <h2 @mouseover.passive="toggle_bar_color" 
                            class="translate-y-[-12px] font-raleway text-black hover:text-black-400 font-bold text-[3rem] leading-[3.3rem] xl:text-[3.3vw] xl:leading-[3.6vw] mb-4">
                                <nuxt-link :to="`/noticias/${featured_article.id}`">
                                    {{ featured_article.title }}
                                </nuxt-link>
                            </h2>
                            <nuxt-link :to="`/noticias/${featured_article.id}`">
                                <p v-for="(paragraph, index) in featured_article.description" :key="index" @mouseover.passive="toggle_bar_color"
                                class="relative font-raleway text-black-700 hover:text-black text-[1.2rem] leading-[23px] max-height-[420px] overflow-hidden cursor-pointer">
                                    {{ paragraph }}
                                    <br /><br />
                                </p>
                            </nuxt-link>
                            <div class="flex justify-center items-center bg-gradient-to-t from-[#FFFFFF] to-[#ffffff00] 
                            absolute left-0 bottom-0 w-full h-[65px] transition-all">
                                <nuxt-link :to="`/noticias/${featured_article.id}`">
                                    <button class="see-more font-raleway text-black-600 text-[16px] min-[800px]:text-md font-[500] mt-12 h-[40px] w-[120px]">
                                        <b class="first font-semibold transition-all">Ver</b> <b class="second font-semibold transition-all">más</b>
                                        <Icon name="fe:arrow-down" class="ms-2 text-[1.6rem] transition-all" filled />
                                    </button>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="bg-[#E3F0FF] h-full w-full min-w-[400px] rounded-lg overflow-hidden"> <!-- feature-image -->
                        <nuxt-link to="/noticias/dia-de-san-juan-bosco-2024">
                            <nuxt-img class="swiper-img object-cover w-full h-full hover:scale-100 scale-125 transition-all" alt="" :src="featured_article.img"
                            loading="lazy" format="webp" sizes="600px md:800px lg:1200px" placeholder
                            densities="x1 x2" />
                        </nuxt-link>
                    </div>
                </ContentQuery>
            </div>

            <div class="featured-new w-full max-w-[520px] max-[1070px]:hidden flex flex-col items-between flex-2 h-full lg:mt-8">
                <div class="featured-new-decoration relative flex bg-[#D6E9FF] h-[3px] translate-y-[5px]"> <!-- news-header -->
                    <div class="absolute top-[-50%] translate-y-[-30%] square-blue bg-blue w-[220px] h-[12px]"></div>
                    <div class="absolute top-[-50%] translate-y-[-30%] square-orange bg-orange-300 left-[240px] w-[80px] h-[12px]"></div>
                </div>

                <div class="featured-news-header flex flex-wrap justify-between mt-4">
                    <h2 class="font-raleway text-black text-[2.2rem] lg:text-[1.8rem] lg:h-[2.4rem] font-bold">Historias destacadas</h2>
                    <button @click.prevent="change_layout" class="flex justify-center items-center bg-white hover:bg-black-100 active:bg-black-500 active:scale-75 rounded-full w-[40px] h-[40px] transition-all">
                        <Transition name="fade-fast-2" mode="out-in">
                            <nuxt-icon v-if="layout_mode" name="home/news/layout-options" class="layout-list text-[20px] text-center" filled />
                            <nuxt-icon v-else name="home/news/list-options" class="layout-list text-[20px] text-center" filled />
                        </Transition>
                    </button>
                </div>
                <!-- layout-mode -->
                <Transition name="fade-fast-2" mode="out-in">
                    <div v-if="layout_mode" class="h-full">
                        <ContentList :query="featured_query" path="/noticias" v-slot="{ list }">
                            <div class="recommended-articles flex flex-col justify-between h-full mt-6">
                                <NewsArticle v-for="(article, index) in list" :key="index" :article_info="article" longVersion />
                            </div>
                        </ContentList>
                    </div>
                    <div v-else class="h-full">
                        <ContentList :query="featured_query_tiles" path="/noticias" v-slot="{ list }">
                            <div class="featured-news flex flex-wrap">
                                <NewsArticle v-for="(article, index) in list" :key="index" :article_info="article" smallVersion />
                            </div>
                        </ContentList>
                    </div>
                </Transition>
            </div>
            <!-- small-recommended-news -->
            <div class="small-recommended-news max-[1620px]:flex hidden flex-col flex-1 lg:mt-8 min-[880px]:ms-8 mt-8">
                <div>
                    <div class="featured-news-decoration relative flex bg-[#D6E9FF] h-[2px] translate-y-[5px] w-full"></div>
                    <h2 class="font-raleway text-black text-[1.6rem] min-[880px]:text-[2.2rem] lg:text-[1.8rem] lg:h-[2.4rem] font-bold mt-4 mb-6">
                        Recomendadas
                    </h2>
                </div>
                
                <div class="news relative flex items-stretch flex-wrap justify-between pb-[42px] min-[880px]:pb-[20px]">
                    
                    <ContentList :query="query" path="/noticias" v-slot="{ list }"> <!-- news-article-navigation -->
                        <NewsArticle v-for="(article, index) in list" :article_info="article" :key="index" />
                    </ContentList>
                    <!-- <div class="absolute bottom-[0px] max-[1070px]:flex hidden justify-center w-full opacity-25">
                        <div class="table-pagination">
                            <button class="pagination-btn">
                                <nuxt-icon name="home/new-students/arrow-table" class="left text-[18px]" filled />
                            </button>
                            <ul class="pagination">
                                <li v-for="(page, index_) of [1,2,3,4,5]" :key="index_">
                                    {{ page }}
                                </li>
                            </ul>
                            <button class="pagination-btn">
                                <nuxt-icon name="home/new-students/arrow-table" class="right text-[18px]" filled />
                            </button>
                        </div>
                    </div> -->
                </div>
            </div>

            <div class="recommended-news relative min-[1620px]:flex hidden flex-col flex-1 lg:mt-8 ms-8 mt-8 overflow-visible">
                <div> <!-- title-card -->
                    <div class="featured-news-decoration relative flex bg-[#D6E9FF] h-[2px] translate-y-[5px] w-full"></div>
                    <h2 class="font-raleway text-black text-[2.2rem] lg:text-[1.8rem] lg:h-[2.4rem] font-bold mt-4 mb-6">Recomendadas</h2>
                </div>
                
                <div class="news relative flex items-stretch flex-wrap pb-[32px]">
                    <ContentList :query="recommended_query" path="/noticias" v-slot="{ list }"> <!-- Default view -->
                        <NewsArticle v-for="(article, index) in list" :article_info="article" :key="index" />
                    </ContentList>
                </div>
                <!-- recommended-articles-navigation -->
                <!-- <div class="absolute bottom-[0px] min-[1070px]:flex hidden justify-center w-full opacity-40"> 
                    <div class="table-pagination">
                        <button class="pagination-btn">
                            <nuxt-icon name="home/new-students/arrow-table" class="left text-[18px]" filled />
                        </button>
                        <ul class="pagination">
                            <li v-for="(page, index_) of [1,2,3,4,5]" :key="index_">
                                {{ page }}
                            </li>
                        </ul>
                        <button class="pagination-btn">
                            <nuxt-icon name="home/new-students/arrow-table" class="right text-[18px]" filled />
                        </button>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>
<style scoped>
:is(.news-feed-header, .recommended-news, .small-recommended-news) :deep(.article .image-container) {
    height: 220px;
}
.recommended-news .news {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 22px;
}
.small-recommended-news .article {
    width: 100%;
    max-width: 350px;
}

.small-recommended-news .news {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
}

@media (max-width: 690px) {
    .small-recommended-news .article {
        width: 100%;
        max-width: unset;
    }
    .small-recommended-news .news {
        display: grid;
        grid-template-columns: 1fr;
        gap: 18px;
    }
}
button.see-more:hover b.first {
    color: var(--blue);
}
button.see-more:hover b.second {
    color: var(--orange-300);
}
button.see-more:hover svg {
    animation: bounce-arrow 950ms ease-in-out forwards infinite;
}
@keyframes bounce-arrow {
    0% {
        transform: translateY(0px);
    } 50% {        
        transform: translateY(-6px);
    } 100% {
        transform: translateY(0px);
    }
}
</style>