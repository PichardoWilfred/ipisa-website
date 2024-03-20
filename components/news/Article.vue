<template>
    <NuxtLink v-if="smallVersion" :to="`/noticias/${article_info.id}`" class="relative article flex flex-wrap w-[33.33%] mt-6 pt-1" to="/noticias">
        <div class="image-container flex-2 rounded-[8px] w-[160px] h-[105px] overflow-hidden">
            <nuxt-img class="object-cover w-full h-full" placeholder format="webp" sizes="200px" :src="article_info.img" densities="x1 x2" />
        </div>
        <div class="article-info flex-1 mt-2">
            <div class="article-content-header absolute top-[-5%] right-[2%] flex justify-between items-center mb-2 h-[20px]">
                <button class="share flex items-center content-center justify-center bg-white hover:bg-black-100 rounded-full w-[30px] h-[30px]">
                    <nuxt-icon name="home/news/share" class="phone-icon-color text-[18px] translate-x-[-1px] translate-y-[2px] text-center" filled />
                </button>
            </div>
            <div class="article-content max-w-[360px]">
                <h3 class="article-title font-raleway text-black font-bold text-[14px] leading-[16px] mb-[0.2rem]">
                    {{ article_info.title }}
                </h3>
                <div class="flex items-center font-raleway text-separator text-[14px]">
                    <span>
                        8 min
                    </span>
                    <div class="circle bg-[#B5D1FF] rounded-full h-[6px] w-[6px] mx-2"></div>
                    <span class="">
                        {{ article_info.short_date }}
                    </span>
                </div>
            </div>
        </div>
    </NuxtLink>

    <NuxtLink v-else-if="longVersion" :to="`/noticias/${article_info.id}`" class="article flex h-[130px] w-full mb-5 last:mb-0">
        
        <div class="image-container flex min-w-[160px] max-w-[160px] h-full rounded-[8px] overflow-hidden">
            <nuxt-img class="object-cover w-full h-full" placeholder format="webp" 
            sizes="380px" :src="article_info.img" densities="x1 x2" />
        </div>

        <div class="article-info flex flex-col justify-center ms-6">

            <div class="article-content-header flex justify-between items-center mb-2 h-[20px]">
                <div class="flex font-raleway text-separator h-full">
                    <span class="article-author text-[14px]">
                        {{ article_info.author }}
                    </span>
                    <span class="bg-[#D6E9FF] w-[2px] h-full mx-3"></span>
                    <span class="article-date text-[14px]">
                        {{ article_info.date }}
                    </span>
                </div>
                <button class="share flex items-center content-center justify-center bg-white hover:bg-black-100 rounded-full w-[30px] h-[30px]">
                    <nuxt-icon name="home/news/share" class="phone-icon-color text-[18px] translate-x-[-1px] translate-y-[2px] text-center" filled />
                </button>
            </div>

            <div class="article-content max-w-[360px]">
                <h3 class="article-title font-raleway text-black font-bold text-[18px] leading-[20px] mb-[0.2rem]">
                    {{ article_info.title }}
                </h3>
                <p class="article-description font-raleway text-black-700 font-medium text-[16px] leading-[18px]">
                    {{ article_info.description[0] }}
                </p>
            </div>

        </div>
    </NuxtLink>

    <NuxtLink v-else class="article relative flex flex-wrap pb-[2rem] mr-[0.8rem] last:mr-0" :to="`/noticias/${article_info.id}`">

        <div v-if="!noHeader" class="flex font-raleway mb-2 text-separator h-[20px]">
            <span>
                {{ article_info.author }}
            </span>
            <span class="bg-blue-100 w-[2px] h-full mx-4"></span>
            <span>
                {{ article_info.date }}
            </span>
        </div>

        <div class="article-info w-full">
            <div class="article-content-header flex justify-between items-center">
                <div class="image-container flex-2 rounded-md w-full h-[175px] mb-2 overflow-hidden">
                    <nuxt-img class="object-cover w-full h-full" placeholder format="webp" sizes="800px" :src="article_info.img" densities="x1 x2" />
                </div>
                <button class="share absolute min-[1520px]:top-[2%] top-[3%] min-[1520px]:right-[-7%] right-[-5%] flex items-center content-center justify-center bg-white hover:bg-black-100 rounded-full w-[40px] h-[40px]">
                    <nuxt-icon name="home/news/share" class="phone-icon-color text-[18px] translate-x-[-1px] translate-y-[2px] text-center" filled />
                </button>
            </div>

            <div class="article-content w-full overflow-hidden ">
                <h3 class="article-title font-raleway text-black font-bold text-[22px] leading-[24px] mb-[0.2rem]">
                    {{ article_info.title }}
                </h3>
                <p class="article-description text-[16px] leading-[18px] font-raleway text-black-700 mt-2 transition-all">
                    {{ article_info.description[0] }}
                </p>
                <div class="flex items-center font-raleway text-separator text-[14px] mt-2 w-full truncate">
                    <span>
                        {{ article_info.topic }}
                    </span>
                    <div class="circle bg-[#B5D1FF] rounded-full h-[6px] w-[6px] mx-2"></div>
                    <span>
                        2 minutos de Lectura 
                    </span>
                </div>
            </div>
        </div>

    </NuxtLink>
</template>
<script setup>
    const { noHeader } = defineProps({
        article_info: {
            type: Object,
        },
        noHeader: {
            type:  Boolean,
            default(rawProps) {
                return false;
            }
        },
        smallVersion: {
            type: Boolean,
            default(rawProps) {
                return false;
            }
        },
        longVersion: {
            type: Boolean,
            default(rawProps) {
                return false;
            }
        }
    });
</script>
<style scoped>
    .article:hover p.article-description {
        color: var(--black);
    }
    h3.article-title {
        overflow: hidden !important;
        display: -webkit-box !important;
        -webkit-line-clamp: 1 !important; /* number of lines to show */
        line-clamp: 1 !important; 
        -webkit-box-orient: vertical !important;
    }
    p.article-description {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        line-clamp: 3; 
        -webkit-box-orient: vertical;
    }
</style>

