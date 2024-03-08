<script setup>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Pagination } from 'swiper/modules';

    let layout_mode = ref(false);
    const change_layout = () => {
        layout_mode.value = !layout_mode.value; 
    }
</script>
<template>
    <div class="relative flex flex-col">
        <div class="min-[880px]:hidden absolute w-full bg-white h-[40px] top-[-20px] rounded-[80px]"></div>

        <div class="hidden max-[880px]:flex justify-between w-full max-w-[1620px] mx-auto px-[1.4rem] mt-[2.5rem]">
            <h1 class="font-raleway text-black text-[2.2rem] leading-[2rem] font-bold">
                Noticias
            </h1>
            <icon name="fe:search" filled size="38px" 
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
                    <div class="flex flex-col w-[54px] h-[200px] me-[15px]">
                        <div class="w-full bg-blue h-[120px] mb-4" />
                        <div class="w-full bg-orange-300 h-[70px]" />
                    </div>
                    <div class="flex flex-col min-w-[315px]">
                        <h2 class="translate-y-[-12px] font-raleway text-black font-bold text-[3rem] leading-[3.3rem] xl:text-[3.3vw] xl:leading-[3.6vw] mb-4">
                            IPISA encabeza competición de las Naciones Unidas
                        </h2>
                        <p class="font-raleway text-black-700 text-[1.2rem] leading-[20px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            <br><br>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
                <!-- feature-image -->
                <div class="bg-[#E3F0FF] h-full w-full min-w-[400px] rounded-lg"></div>
            </div>

            <div class="featured-new max-w-[520px] max-[1070px]:hidden flex flex-col flex-2 lg:mt-8">
                <!-- news-header -->
                <div class="featured-new-decoration relative flex bg-[#D6E9FF] h-[3px] translate-y-[5px]">
                    <div class="absolute top-[-50%] translate-y-[-30%] square-blue bg-blue w-[220px] h-[12px]"></div>
                    <div class="absolute top-[-50%] translate-y-[-30%] square-orange bg-orange-300 left-[240px] w-[80px] h-[12px]"></div>
                </div>

                <div class="featured-news-header flex flex-wrap justify-between mt-4">
                    <h2 class="font-raleway text-black text-[2.2rem] lg:text-[1.8rem] lg:h-[2.4rem] font-bold">Historias destacadas</h2>
                    <button @click.prevent="change_layout" class="flex justify-center items-center bg-[#D6E9FF] rounded-full w-[40px] h-[40px] transition-all">
                        <Transition name="fade-fast-2" mode="out-in">
                            <nuxt-icon v-if="layout_mode" name="home/news/layout-options" class="layout-list text-[20px] text-center" filled />
                            <nuxt-icon v-else name="home/news/list-options" class="layout-list text-[20px] text-center" filled />
                        </Transition>
                    </button>
                </div>
                <!-- layout-mode -->
                <template v-if="layout_mode">
                    <div class="recommended-articles flex flex-col h-full mt-6">
                        <!-- v-for="(article, index) in [1, 2, 3, 4, 5]" :key="index" -->
                        <!-- to="noticias/noticia-1" -->
                        <NewsArticle v-for="(article, index) in [1, 2, 3, 4, 5]" :key="index" longVersion />
                    </div>
                </template>
                <template v-else>
                    <div class="featured-news flex flex-wrap">
                        <NewsArticle v-for="(article, index) in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="index" smallVersion />
                        <!-- to="noticias/noticia-1" -->
                    </div>
                </template>
            </div>

            <div class="small-recommended-news max-[1520px]:flex hidden flex-col flex-1 lg:mt-8 min-[880px]:ms-8 mt-8">
                <div>
                    <div class="featured-news-decoration relative flex bg-[#D6E9FF] h-[2px] translate-y-[5px] w-full"></div>
                    <h2 class="font-raleway text-black text-[1.6rem] min-[880px]:text-[2.2rem] lg:text-[1.8rem] lg:h-[2.4rem] font-bold mt-4 mb-6">
                        Recomendadas
                    </h2>
                </div>
                
                <div class="relative flex items-stretch flex-wrap justify-between pb-[42px] min-[880px]:pb-[20px]">
                    
                    <NewsArticle v-for="(article, index) in [1, 2, 3, 4,]" :key="index" />
                    <!-- <div v-for="(article, index) in [1, 2, 3, 4]" :key="index"
                    class="article relative flex flex-col flex-wrap max-w-[380px] w-full min-[880px]:w-[45%] pb-[1.85rem]">
                        <div class="min-[1070px]:hidden flex font-raleway mb-2 text-separator h-[20px]">
                            <span>
                                Daniela Vicente
                            </span>
                            <span class="mx-4 bg-blue-100 w-[2px] h-full"></span>
                            <span>
                                October 23, 2024
                            </span>
                        </div>
                        <div class="article-info flex-1">
                            <div class="article-content-header flex justify-between items-center">
                                <div class="image-container flex-2 bg-[#CDDFFC] rounded-md w-full h-[175px] mb-4"></div>
                                <button class="share absolute top-[10px] right-[-12px] min-[880px]:top-[1%] min-[880px]:right-[-5%] min-[1070px]:top-[-5%] min-[1070px]:right-[-20px]
                                flex items-center content-center justify-center
                                bg-white hover:bg-[#F1F8FF] rounded-full w-[40px] h-[40px]">
                                    <nuxt-icon name="home/news/share" class="phone-icon-color text-[18px] translate-x-[-1px] translate-y-[2px] text-center" filled />
                                </button>
                            </div>
                            <div class="article-content max-w-[360px] overflow-hidden">
                                <h3 class="article-title font-raleway text-black font-bold text-[20px] leading-[22px] mb-[0.2rem]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </h3>
                                <p class="article-description text-[16px] leading-[18px] font-raleway text-separator">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                </p>
                                <div class="flex items-center font-raleway text-separator text-[14px] mt-3 w-full truncate">
                                    <span>
                                        Extracurricular
                                    </span>
                                    <div class="circle bg-[#B5D1FF] rounded-full h-[6px] w-[6px] mx-2"></div>
                                    <span>
                                        8 minutos
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div> -->
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

            <div class="recommended-news min-[1520px]:flex hidden flex-col flex-1 lg:mt-8 ms-8 mt-8">
                <div> <!-- title-card -->
                    <div class="featured-news-decoration relative flex bg-[#D6E9FF] h-[2px] translate-y-[5px] w-full"></div>
                    <h2 class="font-raleway text-black text-[2.2rem] lg:text-[1.8rem] lg:h-[2.4rem] font-bold mt-4 mb-6">Recomendadas</h2>
                </div>
                
                <div class="relative flex items-stretch flex-wrap justify-between pb-[20px]">
                    <NewsArticle v-for="(article, index) in [1, 2, 3, 4, 5, 6, 7, 8]" :key="index" />
                    <!-- recommended-articles-navigation -->
                    <div class="absolute bottom-[0px] min-[1070px]:flex hidden justify-center w-full">
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
        </div>
    </section>
</template>