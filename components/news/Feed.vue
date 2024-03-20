<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination } from 'swiper/modules';

    let layout_mode = ref(true);
    const change_layout = () => {
        layout_mode.value = !layout_mode.value; 
    }

    // Create a query looking into content/articles directory
    const query = { path: '/noticias', where: [{ visibility: 'feed' }], limit: 5 }
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
            
            <div class="max-[880px]:hidden flex">
                <div class="input-container ms-auto mt-4">
                    <icon name="fe:search" filled size="24px" class="search-icon text-black-500 me-2 transition-all" />
                    <input type="text" class="search" placeholder="Titular de noticia" pattern="[A-Za-z]+" />
                </div>    
            </div>
            <!-- portrait-news -->
            <div class="w-full min-[880px]:hidden">
                <swiper :modules="[Pagination]" :slides-per-view="1.15" :space-between="20" pagination class="mobile-portrait-news-feed bg-white mt-4 h-[340px]">
                    <swiper-slide v-for="(article, index) in [1, 2, 3, 4, 5, 6, 7, 8]" :key="index" class="article bg-white py-3 pe-3 h-[350px]">
                        <div class="article-container overflow-hidden">
                            <div class="article-image-container flex-2 bg-[#CDDFFC] rounded-md w-full h-[170px]"></div>
                            <div class="article-info flex-1 mt-2">
                                <div class="article-content">
                                    <h3 class="article-title font-raleway text-black font-bold text-[20px] leading-[22px] mb-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </h3>
                                    <p class="article-description text-[16px] leading-[18px] font-raleway text-separator">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>

        </div>
        <!-- min-[1460px]:flex hidden -->
        <div class="news-feed-content flex flex-wrap justify-start space-between">
            <!-- featured article -->
            <div class="featured-article flex-1 hidden min-[800px]:flex max-xl:min-h-[480px] min-[1460px]:pe-10 lg:mt-8">
                <!-- featured-article-content -->
                <div class="featured-article-title flex items-start max-w-[520px] me-8">
                    <div class="flex flex-col w-[150px] h-[200px] me-[15px]">
                        <div class="w-full bg-blue h-[120px] mb-4" />
                        <div class="w-full bg-orange-300 h-[70px]" />
                    </div>
                    <div class="relative flex flex-col min-w-[315px]">
                        <h2 class="translate-y-[-12px] font-raleway text-black font-bold text-[3rem] leading-[3.3rem] xl:text-[3.3vw] xl:leading-[3.6vw] mb-4">
                            <nuxt-link to="/noticias/dia-de-san-juan-bosco-2024">
                                IPISA celebra el día de Don Bosco 2024.
                            </nuxt-link>
                        </h2>
                        <p class="relative font-raleway text-black-700 text-[1.2rem] leading-[23px] max-height-[420px] overflow-hidden">
                            San Juan Bosco hizo de ilusionista y malabarista para divertir y educar a los jóvenes. 
                            En 1953, en España, Don Bosco fue proclamado patrono de los magos e ilusionistas.
                            <br><br>
                            También los soldados del Cuerpo de Especialistas del Ejército de Tierra tiene asignado como patrón a Don Bosco, 
                            según explica el arzobispado Castrense, por concesión de la Congregación para el Culto Divino.
                            <br><br>
                            Don Bosco, además, es patrón de los Editores Católicos desde 1946; en el 1958 fue declarado patrono de los 
                            aprendices de Italia. En España, además, es el santo protector de los estudiantes de Formación Profesional y su 
                            fiesta, hasta hace poco, se celebraba en todos los centros educativos que impartían este tipo de formación. 
                            En algunas listas de patronos celestiales de oficios muy terrenales, Don Bosco aparece como el santo al que 
                            recurren los actores de doblaje, los capellanes de cárceles, y las personas que trabajan en el circo.
                        </p>
                        
                        <div class="flex justify-center items-center bg-gradient-to-t from-[#FFFFFF] to-[#ffffff00] absolute left-0 bottom-0 w-full h-[65px] transition-all">
                            <nuxt-link to="/noticias/dia-de-san-juan-bosco-2024">
                                <button class="see-more font-raleway text-black-600 text-[16px] min-[800px]:text-md font-[500] mt-12 h-[40px] w-[120px]">
                                    <b class="first font-semibold">Ver</b> <b class="second font-semibold">más</b>
                                    <Icon name="fe:arrow-down" class="ms-2 text-[1.6rem] transition-all" filled />
                                </button>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
                <!--  -->
                <!-- feature-image -->
                <div class="bg-[#E3F0FF] h-full w-full min-w-[400px] rounded-lg overflow-hidden">
                    <nuxt-link to="/noticias/dia-de-san-juan-bosco-2024">
                        <nuxt-img class="swiper-img object-cover w-full h-full" alt="" src="https://a.storyblok.com/f/272924/2048x1365/9d69ca0da3/425781172_823463636461297_4355531572615429854_n.jpg"
                        loading="lazy" format="webp" sizes="600px md:800px lg:1200px" placeholder
                        densities="x1 x2" />
                    </nuxt-link>
                </div>
            </div>

            <div class="featured-new w-full max-w-[520px] max-[1070px]:hidden flex flex-col items-between flex-2 h-full lg:mt-8">
                <!-- news-header -->
                <div class="featured-new-decoration relative flex bg-[#D6E9FF] h-[3px] translate-y-[5px]">
                    <div class="absolute top-[-50%] translate-y-[-30%] square-blue bg-blue w-[220px] h-[12px]"></div>
                    <div class="absolute top-[-50%] translate-y-[-30%] square-orange bg-orange-300 left-[240px] w-[80px] h-[12px]"></div>
                </div>

                <div class="featured-news-header flex flex-wrap justify-between mt-4">
                    <h2 class="font-raleway text-black text-[2.2rem] lg:text-[1.8rem] lg:h-[2.4rem] font-bold">Historias destacadas</h2>
                    <button @click.prevent="change_layout" class="flex justify-center items-center bg-white active:bg-[#D6E9FF] rounded-full w-[40px] h-[40px] transition-all">
                        <Transition name="fade-fast-2" mode="out-in">
                            <nuxt-icon v-if="layout_mode" name="home/news/layout-options" class="layout-list text-[20px] text-center" filled />
                            <nuxt-icon v-else name="home/news/list-options" class="layout-list text-[20px] text-center" filled />
                        </Transition>
                    </button>
                </div>
                <!-- layout-mode -->
                <Transition name="fade-fast-2" mode="out-in">
                    <div v-if="layout_mode" class="h-full">
                        <ContentList :query="query" path="/noticias" v-slot="{ list }">
                                <div class="recommended-articles flex flex-col justify-between h-full mt-6">
                                    <NewsArticle v-for="(article, index) in list" :key="index" :article_info="article" longVersion />
                                </div>
                        </ContentList>
                    </div>
                    <div v-else class="h-full">
                        <ContentList :query="query" path="/noticias" v-slot="{ list }">
                            <div class="featured-news flex flex-wrap">
                                <NewsArticle v-for="(article, index) in list" :key="index" :article_info="article" smallVersion />
                            </div>
                        </ContentList>
                    </div>
                </Transition>
            </div>

            <div class="small-recommended-news max-[1520px]:flex hidden flex-col flex-1 lg:mt-8 min-[880px]:ms-8 mt-8">
                <div>
                    <div class="featured-news-decoration relative flex bg-[#D6E9FF] h-[2px] translate-y-[5px] w-full"></div>
                    <h2 class="font-raleway text-black text-[1.6rem] min-[880px]:text-[2.2rem] lg:text-[1.8rem] lg:h-[2.4rem] font-bold mt-4 mb-6">
                        Recomendadas
                    </h2>
                </div>
                
                <div class="relative flex items-stretch flex-wrap justify-between pb-[42px] min-[880px]:pb-[20px]">
                    
                    <ContentList :query="query" path="/noticias" v-slot="{ list }">
                        <NewsArticle v-for="(article, index) in list" :article_info="article" :key="index" />
                    </ContentList>

                    <div class="absolute bottom-[0px] max-[1070px]:flex hidden justify-center w-full">
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
                    </div>
                </div>
            </div>

            <div class="recommended-news relative min-[1520px]:flex hidden flex-col flex-1 lg:mt-8 ms-8 mt-8 overflow-visible">
                <div> <!-- title-card -->
                    <div class="featured-news-decoration relative flex bg-[#D6E9FF] h-[2px] translate-y-[5px] w-full"></div>
                    <h2 class="font-raleway text-black text-[2.2rem] lg:text-[1.8rem] lg:h-[2.4rem] font-bold mt-4 mb-6">Recomendadas</h2>
                </div>
                
                <div class="news relative flex items-stretch flex-wrap justify-between pb-[32px]">
                    <ContentList :query="query" path="/noticias" v-slot="{ list }"> <!-- Default view -->
                        <NewsArticle v-for="(article, index) in list" :article_info="article" :key="index" class="min-w-[23%] w-full max-w-[23%]" />
                    </ContentList>
                </div>
                
                <div class="absolute bottom-[0px] min-[1070px]:flex hidden justify-center w-full opacity-40"> <!-- recommended-articles-navigation -->
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
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
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