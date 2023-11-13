<template>
    <header :class="header_class">
        <nav>
            <div class="upper">
                <Icon v-if="!header_class.transparent" class="salesianos-logo" name="Salesianos" />
                <nuxt-icon @click="scrollToSection('portrait')" name="general/ipisa-logo" class="logo" filled />
                <div class="social-media">
                    <div v-for="({ src }, index) in social_media" class="icon">
                        <Icon class="flex-shrink-0" :name="src" size="26px" />
                    </div>
                </div>
                <button class="mobile" @click.prevent="toggle_mobile_menu">
                    <Icon name="fe:bar" size="35px"/>
                </button>
            </div>
            <ul class="navigation">
                <li v-for="({ label, class_, section }, index) in navigation_bar" :key="index" 
                class="item" :class="class_" @click.prevent="scrollToSection(section)">
                    {{ label }}
                </li>
            </ul>
        </nav>   
        <ul v-if="mobile_menu" class="mobile-navigation" :class="{ show: mobile_menu }">
            <li v-for="({ label, class_, section }, index) in navigation_bar" :key="index" class="item" 
            :class="class_" @click.prevent="scrollToSection(section, 200 )">
                {{ label }}
            </li>
        </ul>
        <ul class="information">
            <li class="flex items-center">
                <h4 class="text-blue me-2">
                    Av. Hispanoamericana, Km 1 Santiago,
                    <span class="text-blue-300">Zona Sur, República Dominicana.</span>
                </h4>
                
                <nuxt-icon name="layout/location-color" class="text-[28px] location-icon-color" filled />
            </li>
            <li class="flex items-center mt-2">
                <h4 class="text-orange-300 me-2">
                    <span class="text-orange-200">(809)</span> 724-5700
                </h4>
                <nuxt-icon name="layout/phone-color" class="text-[26px] phone-icon-color" filled />
            </li>
        </ul>
    </header>
    <div v-if="mobile_menu" class="mask" @click="toggle_mobile_menu" />
</template>
<style scoped>
    header ul.navigation li.item {
        @apply relative cursor-pointer font-raleway font-bold me-10 last:me-0 text-black-100 
        before:absolute before:bottom-[-3px] before:rounded-md before:flex before:h-[3px]
        before:bg-orange-300 before:w-0 before:content-[''] 
        hover:before:w-full before:transition-all before:origin-center;
    }
    ul.navigation li.item.focused {
        @apply after:absolute after:rounded-full after:w-[9px] after:h-[9px] after:bg-orange-300 after:top-[-2px] after:right-[-15px];
    }
    header {
        @apply fixed w-full left-0 text-black bg-white 
        top-0 border-b border-b-[transparent] transition-all z-[999];
        transition-duration: 250ms;
    }
    header ul.mobile-navigation {
        @apply lg:hidden absolute top-[93px] right-0 bg-white text-center w-[70vw];
        height: calc(100vh - 84px);
    }
    header ul.mobile-navigation li.item {
        @apply font-raleway font-bold text-black hover:text-[#8b8b8b] 
        py-6 border-b border-gray-100 hover:bg-gray-100 active:bg-gray-100;
    }
    header ul.information {
        @apply absolute top-[4.5rem] right-[18px] max-xl:hidden flex flex-col items-end text-black font-raleway font-bold max-w-[300px] text-end text-[14px];
    }
    header ul.information h4 {
        @apply transition-all;
    }
    header ul.information h4 {
        animation: appear 200ms ease-in-out;
    }
    header nav div.upper .logo {
        @apply cursor-pointer ms-2 me-auto lg:mx-auto;
    }
    header nav div.upper .logo :deep(svg) {
        @apply my-4 max-lg:w-[60px] lg:w-[90px] h-[60px] lg:h-[90px] transition-all;
    }
    header nav div.upper svg.salesianos-logo {
        @apply hidden lg:flex absolute left-[18px] top-[32px] max-w-[100px] w-[7vw] xl:w-[11vw] h-auto;
    }
    header nav {
        @apply w-full flex flex-col items-center lg:mb-4 justify-center;
    }
    header nav div.upper {
        @apply flex w-full;
    }
    header nav ul.navigation {
        @apply hidden lg:flex items-center transition-all;
    }
    header nav div.upper div.social-media {
        @apply absolute flex max-lg:left-[50%] lg:right-0 max-lg:translate-x-[-50%];
    }
    header nav div.upper button.mobile {
        @apply max-lg:flex hidden justify-center items-center my-auto me-4 w-[50px] h-[50px] rounded-md border border-gray-100 hover:bg-gray-100 transition-[background-color];
    }
    header nav div.upper div.social-media div.icon {
        @apply flex items-center justify-center h-[40px] w-[40px] p-3 text-white cursor-pointer transition-all;
        transform: translateY(-100%);
        animation: slide-up-bottom 200ms cubic-bezier(.68,.82,0,.8) forwards;
    }
    @keyframes slide-up-bottom {
        from {
            transform: translateY(-100%);
        } to {
            transform: translateY(0%);
        }
    }
    header nav div.upper div.social-media div.icon:nth-child(2) { animation-delay: 200ms; }
    header nav div.upper div.social-media div.icon:nth-child(3) { animation-delay: 300ms; }
    header nav div.upper div.social-media div.icon:nth-child(4) { animation-delay: 400ms; }
    header nav div.upper div.social-media div.icon:nth-child(5) { animation-delay: 500ms; }
    header nav div.upper div.social-media div.icon:nth-child(odd) { @apply bg-blue hover:bg-blue-300; }
    header nav div.upper div.social-media div.icon:nth-child(even) { @apply bg-orange hover:bg-orange-300; }

    header.scrolled {
        @apply top-[-200px] border-b-gray-100;
    }
    header.scrolled.up {
        @apply top-0;
    }
    header.transparent {
        @apply bg-[#FFFFFF00] transition-colors;
    }
    header.transparent ul.information {
        @apply hidden;
    }
    header.transparent ul.navigation li.item {
        @apply before:w-0 text-white hover:text-[#ffffffa2];
    }
    header.transparent nav div.upper div.social-media { 
        @apply absolute top-[45px] lg:top-[32px] lg:right-[35px];
    }
    header.transparent nav div.upper button.mobile {
        @apply border-white hover:bg-[#FFFFFF6B];
    }
    header.transparent nav div.upper button.mobile ::v-deep(svg) {
        @apply text-white;
    }
    header.transparent nav div.upper div.social-media div.icon {
        animation: none;
        transform: translateY(0%);
        @apply text-[#FFFFFF8C] hover:text-white transition-[color];
    }
    header.transparent nav div.upper div.social-media div.icon:is(:nth-child(even), :nth-child(odd)) {
        @apply bg-[transparent];
    }
    header.transparent nav div.upper .logo :deep(svg){
        @apply lg:mx-auto my-7 w-[80px] h-[80px] lg:w-[130px] lg:h-[130px];
    }
    header.transparent nav {
        @apply border-b-[transparent];
    }
    header.transparent ul.mobile-navigation {
        @apply top-0 w-full translate-y-[-100%] h-auto;
    }
    header.transparent ul.mobile-navigation.show {
        animation: slide-up-bottom 500ms ease-in-out forwards;
    }
    header.transparent ul.mobile-navigation li.item {
        @apply py-6 border-b border-gray-100 hover:bg-gray-100 hover:text-white;
    }
    header ul.information :deep(:is(.location-icon-color, .phone-icon-color)) svg {
        @apply overflow-visible;
    }
    header.transparent ul.information :deep(svg:is(.location-icon-color, .phone-icon-color))   {
        animation: none;
    }
    header.scrolled nav ul.navigation {
        @apply me-0;
    }
    header.scrolled ul.mobile-navigation {
        @apply top-[85px];
    }
    .mask {
        @apply lg:hidden bg-[#09090970] fixed w-screen h-screen z-20;
    }
</style>
<script setup>
import { useLayoutStore } from '@/store/layout';
const layout = useLayoutStore();
// layout.$patch({scroll_breakpoint: 400})

// router
const router = useRouter();
//navigation bar classes
const header_class = reactive({
    transparent: true,
    scrolled: false,
    up: false
})
const navigation_bar = [
    {
        label: 'NOSOTROS',
        section: 'about' 
    },
    {
        label: 'NOTICIAS',
        section: 'news'
    },
    {
        label: 'TALLERES',
        section: 'workshop'
    },
    {
        label: 'ADMISIONES',
        section: 'admissions',
        class_: 'focused'
    },
    {
        label: 'PASTORAL',
        section: 'activities'
    },
    {
        label: 'INSERCIÓN LABORAL',
        section: 'job-insertion'
    },
]
// socialmedia
const social_media = [
    {
        src: 'fe:instagram'
    },
    {
        src: 'icon-park-outline:facebook'
    },
    {
        src: 'fe:mail'
    },
    {
        src: 'ic:baseline-whatsapp'
    }
];
// navigation bar styles
let prevScrollY;
onMounted(() => {
    prevScrollY = ref(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    handleScroll() // in case
});
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
const handleScroll = () => {
    const currentScrollY = window.scrollY;

    header_class.transparent = currentScrollY < 100;
    header_class.scrolled = currentScrollY > layout.scroll_breakpoint; // scrolling past the limit
    header_class.up = currentScrollY < prevScrollY.value && currentScrollY > layout.scroll_breakpoint; // scrolling up

    prevScrollY.value = currentScrollY;
}
const mobile_menu = ref(false);

const toggle_mobile_menu = () => {
    mobile_menu.value =! mobile_menu.value;
    const body = document.querySelector("body");

    if (mobile_menu.value) {
        const scrollTop = window.pageYOffset || document.body.scrollTop;
        const scrollLeft = window.pageXOffset || document.body.scrollLeft;

        window.onscroll = () => { window.scrollTo(scrollLeft, scrollTop); }
        body.style.overflowY = 'hidden';
    }else {
        window.onscroll = () => {};
        body.style.overflowY = 'auto';
    }
}
// scroll navigation
const scrollToSection = async (section_, delay = 0 ) => {
    const in_mobile = window.matchMedia("(max-width: 768px)").matches;
    const in_home = computed(() => router.currentRoute.value.name === 'index');

    if (!in_home.value) {
        await navigateTo({ path: "/" });
        return;
    }
    setTimeout(() => {
        const section = document.querySelector(`section#${section_}`);
        const section_offset = parseInt(section.dataset.offset) || 0;
        const y = section.getBoundingClientRect().top + window.pageYOffset - (in_mobile ? 60 : 140) + section_offset;
        
        window.scrollTo({ top: y, behavior: 'smooth' });
    }, delay);
    if (in_mobile ) toggle_mobile_menu();
}
</script>