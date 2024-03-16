<template>
    <NuxtLink v-if="smallVersion" class="relative article flex flex-wrap w-[33.33%] mt-6 pt-1" to="/noticias/noticia-1">
        <div class="image-container flex-2 bg-[#CDDFFC] rounded-md w-[160px] h-[105px]"></div>
        <div class="article-info flex-1 mt-2">
            <div class="article-content-header absolute top-[-5%] right-[2%] flex justify-between items-center mb-2 h-[20px]">
                <button class="share flex items-center content-center justify-center bg-white hover:bg-black-100 rounded-full w-[30px] h-[30px]">
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
    </NuxtLink>
    <NuxtLink v-else-if="longVersion" to="/noticias/noticia-1" class="article flex flex-wrap h-[115px] w-full mb-8 last:mb-0">
        <!-- min-[1520px]:last:hidden -->
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
                <button class="share flex items-center content-center justify-center bg-white hover:bg-black-100 rounded-full w-[30px] h-[30px]">
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
    </NuxtLink>
    <NuxtLink v-else class="article relative flex flex-wrap w-full max-w-[320px] pb-[2rem] mr-[0.8rem]" to="/noticias/noticia-1">
        <div v-if="!noHeader" class="flex font-raleway mb-2 text-separator h-[20px]">
            <span>
                Daniela Vicente
            </span>
            <span class="bg-blue-100 w-[2px] h-full mx-4"></span>
            <span>
                October 23, 2024
            </span>
        </div>
        <div class="article-info flex-1">
            <div class="article-content-header flex justify-between items-center">
                <div class="image-container flex-2 bg-[#CDDFFC] rounded-md w-full h-[175px] mb-2"></div>
                <button class="share absolute min-[1520px]:top-[2%] top-[3%] min-[1520px]:right-[-7%] right-[-5%] flex items-center content-center justify-center bg-white hover:bg-black-100 rounded-full w-[40px] h-[40px]">
                    <nuxt-icon name="home/news/share" class="phone-icon-color text-[18px] translate-x-[-1px] translate-y-[2px] text-center" filled />
                </button>
            </div>
            <div class="article-content max-w-[360px] overflow-hidden">
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
                        8 minutos
                    </span>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>
<script setup>
    const { noHeader } = defineProps({
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

</style>

