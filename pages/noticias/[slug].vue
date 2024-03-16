<script setup>
const route = useRoute().params;


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
                        Daniela Vicente
                    </h3>
                    <div class="flex flex-wrap items-center text-[12px] min-[880px]:text-[16px]">
                        <span class="text-black-700">8 minutos de lectura</span>
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
    <div class="mt-3"></div>
    <ContentSlot class="mt-3" :use="$slots.gallery" />
    <div class="mt-3"></div>
    <!-- <div class="bg-[#37393b] h-[2px] mt-[2rem] mb-[1rem]"></div> -->

    <div class="recommended-articles w-full max-w-[1180px] flex items-stretch flex-wrap justify-between px-[1.4rem] lg:px-[4rem] pb-[42px] min-[880px]:pb-[20px] mx-auto">
        <h2 class="font-raleway text-black text-[2.2rem] lg:text-[1.8rem] lg:h-[2.4rem] font-bold leading-[1.1] mt-2 mb-6 min-[880px]:mb-4">Noticias Recomendadas</h2>
        <div class="flex flex-wrap justify-between">
            <NewsArticle v-for="(article, index) in [1, 2, 3, 4, 5, 6]" :key="index" />
            <!-- <div class="article relative flex flex-col flex-wrap max-w-[310px] w-full pb-[1.85rem]">
                <div class="flex font-raleway mb-2 text-separator h-[20px]">
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
                        <button class="share absolute min-[1070px]:top-[2%] top-[3%] min-[1070px]:right-[-7%] right-[-5%] flex items-center content-center justify-center bg-white hover:bg-black-100 rounded-full w-[40px] h-[40px]">
                            <nuxt-icon name="home/news/share" class="phone-icon-color text-[18px] translate-x-[-1px] translate-y-[2px] text-center" filled />
                        </button>
                    </div>
                    <div class="article-content max-w-[360px] overflow-hidden">
                        <h3 class="article-title font-raleway text-black font-bold text-[20px] leading-[22px] mb-[0.5rem]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </h3>
                        <p class="article-description text-[16px] leading-[20px] font-raleway text-black-700">
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
            
        </div>
    </div>

</template>
<style>
p.article-description {
    font-family: var(--raleway);
    font-weight: 500;
    color: var(--black);
    text-align: justify;
    font-size: 1rem;
    margin-block: 1rem;
}
</style>