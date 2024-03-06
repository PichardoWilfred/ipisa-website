<script setup>
    let layout_mode = ref(false);
    const change_layout = () => {
        layout_mode.value = !layout_mode.value; 
    }
</script>
<template>
    <div class="bg-[#D6E9FF] w-full h-[2px] mt-[8rem]" />
    <section class="w-full max-w-[1620px] mx-auto px-[1.4rem] lg:px-[4rem] mt-[4rem] mb-[8rem] ">

        <div class="news-feed-header flex items-end justify-between flex-wrap max-lg:mb-6">

            <h1 class="flex font-raleway text-separator text-[2.2rem] lg:text-[4.2rem] lg:leading-[4.2rem] lg:h-[4.2rem] font-bold">
                <span class="orange">Noticias</span><span class="mx-2 lg:mx-3">del</span><span class="text-blue"> Centro</span>
            </h1>
            
            <div class="input-container">
                <icon name="fe:search" filled size="24px" class="search-icon text-black-500 me-2 transition-all" />
                <input type="text" class="search" placeholder="Titular de noticia" pattern="[A-Za-z]+" />
            </div>

        </div>
        <!-- min-[1460px]:flex hidden -->
        <div class="news-feed-content flex flex-wrap justify-start space-between">
            <!-- featured article -->
            <div class="featured-article flex-1 flex max-xl:min-h-[480px] min-[1460px]:pe-10 lg:mt-8">
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
            <div class="featured-new max-w-[520px] flex flex-col flex-2 lg:mt-8">
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
                        <div v-for="(article, index) in [1, 2, 3, 4, 5]" :key="index" class="article flex flex-wrap h-[115px] w-full mb-8 last:mb-0 min-[1520px]:last:hidden">
                            <div class="image-container flex-2 bg-[#CDDFFC] rounded-md w-[160px] h-full"></div>
                            <div class="article-info flex-1 ms-6">
                                <div class="article-content-header flex justify-between items-center mb-2 h-[20px]">
                                    <div class="flex font-raleway text-[#CDDFFC] h-full">
                                        <span class="author text-[14px]">
                                            Daniela Vicente
                                        </span>
                                        <span class="bg-[#D6E9FF] w-[2px] h-full mx-3"></span>
                                        <span class="author text-[14px]">
                                            24 de Agosto 2023
                                        </span>
                                    </div>
                                    <button class="share flex items-center content-center justify-center bg-[#F1F8FF] rounded-full w-[30px] h-[30px]">
                                        <nuxt-icon name="home/news/share" class="phone-icon-color text-[18px] translate-x-[-1px] translate-y-[2px] text-center" filled />
                                    </button>
                                </div>
                                <div class="article-content max-w-[360px]">
                                    <h3 class="font-raleway text-black font-bold text-[18px] leading-[20px] mb-[0.2rem]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </h3>
                                    <p class="font-raleway text-separator text-[14px]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div class="featured-news flex flex-wrap">
                        <div v-for="(article, index) in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="index" class="relative article flex flex-wrap w-[33.33%] mt-6 pt-1">
                            <div class="image-container flex-2 bg-[#CDDFFC] rounded-md w-[160px] h-[105px]"></div>
                            <div class="article-info flex-1 mt-2">
                                <div class="article-content-header absolute top-[-5%] right-[2%] flex justify-between items-center mb-2 h-[20px]">
                                    <button class="share flex items-center content-center justify-center bg-[#F1F8FF] rounded-full w-[30px] h-[30px]">
                                        <nuxt-icon name="home/news/share" class="phone-icon-color text-[18px] translate-x-[-1px] translate-y-[2px] text-center" filled />
                                    </button>
                                </div>
                                <div class="article-content max-w-[360px]">
                                    <h3 class="article-title font-raleway text-black font-bold text-[14px] leading-[16px] mb-[0.2rem]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </h3>
                                    <div class="flex items-center font-raleway text-separator text-[14px]">
                                        <span>
                                            8 min
                                        </span>
                                        <div class="circle bg-[#B5D1FF] rounded-full h-[6px] w-[6px] mx-2"></div>
                                        <span class="">
                                            24/08/2023
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>

            <div class="recommended-news max-[1520px]:flex hidden flex-col flex-1 lg:mt-8 ms-8">
                <div>
                    <div class="featured-news-decoration relative flex bg-[#D6E9FF] h-[3px] translate-y-[5px] w-full"></div>
                    <h2 class="font-raleway text-black text-[2.2rem] lg:text-[1.8rem] lg:h-[2.4rem] font-bold mt-4 mb-6">Recomendadas</h2>
                </div>
                
                <div class="relative flex items-stretch flex-wrap justify-between">
                    <div class="relative article flex flex-wrap w-[45%] pb-[1.85rem]" v-for="(article, index) in [1, 2, 3, 4]" :key="index">
                        <div class="image-container flex-2 bg-[#CDDFFC] rounded-md w-full h-[175px]"></div>
                        <div class="article-info flex-1 mt-2">
                            <div class="article-content-header absolute top-[-5%] right-[-4%] flex justify-between items-center mb-2 h-[20px]">
                                <button class="share flex items-center content-center justify-center bg-white hover:bg-[#F1F8FF] rounded-full w-[40px] h-[40px]">
                                    <nuxt-icon name="home/news/share" class="phone-icon-color text-[18px] translate-x-[-1px] translate-y-[2px] text-center" filled />
                                </button>

                            </div>
                            <div class="article-content max-w-[360px]">
                                <h3 class="article-title font-raleway text-black font-bold text-[20px] leading-[22px] mb-[0.2rem]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </h3>
                                <p class="article-description text-[16px] leading-[18px] font-raleway text-black-700">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                </p>
                                <div class="flex items-center font-raleway text-separator text-[14px] mt-3 w-full truncate">
                                    <span>
                                        Extracurricular
                                    </span>
                                    <div class="circle bg-[#B5D1FF] rounded-full h-[6px] w-[6px] mx-2"></div>
                                    <span>
                                        8 minutos de lectura
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute bottom-[-33px] flex justify-center w-full">
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

<style>
span.date {
    /* overflow: hidden; */
    /* display: -webkit-box; */
    -webkit-line-clamp: 1; /* number of lines to show */
    /* line-clamp: 1;  */
    /* -webkit-box-orient: vertical; */
}
.recommended-articles .article:last-child {
    padding-bottom: 0;
}
:is(.recommended-news, .featured-news) .article .article-content :is(p.article-description, h3.article-title) {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
            line-clamp: 2; 
    -webkit-box-orient: vertical;
}
button.share {
    box-shadow: 0px 0.761455px 3.04582px rgba(181, 209, 255, 0.25);
}
</style>