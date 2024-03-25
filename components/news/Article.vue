<template>
    <div v-if="smallVersion" class="article small relative flex flex-wrap w-[30%] mr-[3.33%] mt-6 pt-1">
        <NuxtLink :to="`/noticias/${article_info.id}`" 
        class="image-container relative flex-2 rounded-[8px] w-[160px] h-[105px] overflow-hidden">
            <nuxt-img class="object-cover w-full h-full" placeholder format="webp" sizes="200px" :src="article_info.img" densities="x1 x2" />
        </NuxtLink>
        <div class="article-info flex-1 mt-2">
            <div class="article-content-header absolute top-[-5%] right-[-14px] flex justify-between items-center mb-2 h-[20px]">
                <button @click.prevent="open_share(article_info)" 
                class="share flex items-center content-center justify-center bg-white hover:bg-black-100 active:bg-black-500 rounded-full w-[40px] h-[40px]">
                    <nuxt-icon name="home/news/share" class="phone-icon-color text-[18px] translate-x-[-1px] translate-y-[2px] text-center" filled />
                </button>
            </div>
            <NuxtLink :to="`/noticias/${article_info.id}`" class="article-content max-w-[360px]">
                <h3 class="article-title font-raleway text-black font-bold text-[14px] leading-[16px] mb-[0.2rem]">
                    {{ article_info.title }}
                </h3>
                <div class="flex items-center font-raleway text-separator text-[14px]">
                    <span>
                        2 min
                    </span>
                    <div class="circle bg-[#B5D1FF] rounded-full h-[6px] w-[6px] mx-3"></div>
                    <span class="">
                        {{ short_date }}
                    </span>
                </div>
            </NuxtLink>
        </div>
    </div>

    <div v-else-if="longVersion" class="article relative flex h-[130px] w-full mb-5 last:mb-0">
        <button @click.prevent="open_share(article_info)" class="share absolute top-[-15px] right-[-15px] flex items-center content-center justify-center 
        bg-white hover:bg-black-100 active:bg-black-500 rounded-full w-[40px] h-[40px]">
            <nuxt-icon name="home/news/share" class="phone-icon-color text-[18px] translate-x-[-1px] translate-y-[2px] text-center" filled />
        </button>
        <NuxtLink :to="`/noticias/${article_info.id}`" 
        class="image-container relative flex min-w-[160px] max-w-[160px] h-full rounded-[8px] overflow-hidden">
            <nuxt-img class="object-cover w-full h-full" placeholder format="webp" 
            sizes="380px" :src="article_info.img" densities="x1 x2" />
        </NuxtLink>

        <div class="article-info flex flex-col justify-center ms-6">

            <div class="article-content-header flex justify-between items-center mb-2 h-[20px]">
                <div class="flex font-raleway text-separator h-full">
                    <span class="article-author text-[14px]">
                        {{ article_info.author }}
                    </span>
                    <span class="bg-[#D6E9FF] w-[2px] h-full mx-3"></span>
                    <span class="article-date text-[14px]">
                        {{ long_date }}
                    </span>
                </div>
            </div>

            <NuxtLink :to="`/noticias/${article_info.id}`" class="article-content max-w-[360px]">
                <h3 class="article-title font-raleway text-black font-bold text-[18px] leading-[20px] mb-[0.2rem]">
                    {{ article_info.title }}
                </h3>
                <p class="article-description font-raleway text-black-700 font-medium text-[16px] leading-[18px] transition-all">
                    {{ article_info.description[0] }}
                </p>
            </NuxtLink>

        </div>
    </div>

    <div v-else class="article relative flex flex-col flex-wrap pb-[2rem]">

        <div v-if="!noHeader" class="flex font-raleway mb-2 text-separator h-[20px] text-[14px] sm:text-[16px]">
            <span class="">
                {{ article_info.author }}
            </span>
            <span class="bg-blue-100 w-[2px] h-full mx-4"></span>
            <span class="">
                {{ long_date }}
            </span>
        </div>

        <div class="article-info w-full">
            <div class="article-content-header flex justify-between items-center">
                <NuxtLink :to="`/noticias/${article_info.id}`" 
                class="image-container relative flex-2 rounded-md w-full min-h-[175px] mb-2 overflow-hidden">
                    <nuxt-img class="object-cover w-full h-full" placeholder format="webp" sizes="800px" :src="article_info.img" densities="x1 x2" />
                </NuxtLink>
                <button @click.prevent="open_share(article_info)" class="share absolute min-[1520px]:top-[2%] top-[3%] right-[-20px] min-[1520px]:right-[-20px] flex items-center content-center justify-center
                bg-white hover:bg-black-100 active:bg-black-500 rounded-full w-[40px] h-[40px]">
                    <nuxt-icon name="home/news/share" class="phone-icon-color text-[18px] translate-x-[-1px] translate-y-[2px] text-center" filled />
                </button>
            </div>

            <NuxtLink :to="`/noticias/${article_info.id}`" class="article-content w-full overflow-hidden ">
                <h3 class="article-title font-raleway text-black font-bold text-[22px] leading-[24px] mb-[0.2rem]">
                    {{ article_info.title }}
                </h3>
                <p class="article-description font-medium text-[16px] leading-[18px] font-raleway text-black-700 mt-2 transition-all">
                    {{ article_info.description[0] }}
                </p>
                <div class="flex items-center font-raleway text-separator text-[14px] mt-2 w-full truncate">
                    <span>
                        {{ article_info.topic }}
                    </span>
                    <div class="circle bg-[#B5D1FF] rounded-full h-[6px] w-[6px] mx-3"></div>
                    <span>
                        1 Minuto de Lectura 
                    </span>
                </div>
            </NuxtLink>
        </div>
        <NuxtLink v-if="see_more_btn" :to="`/noticias/${article_info.id}`" class="flex">
            <button class="see-more font-raleway text-black-500 text-[16px] min-[800px]:text-md font-[500] mt-6 mx-auto transition-all">
                <b class="first font-semibold transition-all">Ver</b> <b class="second font-semibold transition-all">más</b> 
                <Icon name="fe:arrow-down" class="ms-2 text-[1.6rem] transition-all" filled />
            </button>
        </NuxtLink>
    </div>
    <Teleport to="body">
        <!-- rounded-t-[20px] -->
        <transition name="fade-fast-2" mode="out-in">
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
<script setup>
    const { noHeader, article_info, see_more_btn } = defineProps({
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
        see_more_btn: {
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
    const social_share = ref(false);
    const link_copied = ref(false);

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
    const article_link = ref(`https://ipisa.edu.do/noticias/${article_info.id}`);
    async function copy_link() {
        try {
            await navigator.clipboard.writeText(article_link.value);
            requirements_copied_text.value = "Enlace de la noticia copiado!";
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

    const requirements_copied_text = ref("Copiar enlace de la noticia");
    
    const long_date = useDateParser(article_info.date_, 'long');
    const short_date = useDateParser(article_info.date_, 'short');

</script>
<style scoped>
    .article.small:nth-child(3n) {
        margin-right: 0;
    }
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
    .article.small h3.article-title {
        overflow: hidden !important;
        display: -webkit-box !important;
        -webkit-line-clamp: 2 !important; /* number of lines to show */
        line-clamp: 2 !important; 
        -webkit-box-orient: vertical !important;
    }
    p.article-description {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        line-clamp: 3; 
        -webkit-box-orient: vertical;
    }
    .article .image-container::after {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        position: absolute;
        top: 0;
        left: 0;
        content: "Ver más ⤴";
        font-weight: 600;
        font-family: var(--raleway);
        font-size: 18px;
        color: transparent;
        width: 100%;
        height: 100%;
        background-color: transparent;

        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 120ms;
    }
    
    .article:hover .image-container::after {
        color: #fff;
    }
    .article:nth-child(odd):hover .image-container::after {
        background-color: #00498d8a;
    }
    .article:nth-child(even):hover .image-container::after {
        background-color: #df75388a;
    }
    .article .image-container img {
        transform: scale(1.1);
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 160ms;
    }
    .article:hover .image-container img{
        transform: scale(1);
    }
    .link-copy {
        opacity: 0.5;
    }
</style>

