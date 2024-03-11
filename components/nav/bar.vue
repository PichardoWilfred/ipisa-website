<template>
    <header :class="header_class">
        <nav>
            <div class="upper">
                <Icon v-if="!header_class.transparent" class="salesianos-logo" name="Salesianos" />
                <nuxt-icon @click="scrollToSection('portrait')" name="general/ipisa-logo" class="logo cursor-pointer ms-2 me-auto lg:mx-auto" filled />
                <div class="social-media">
                    <a v-for="({ src, link, email }, index) in social_media" class="icon" :href="link" 
                    target="_blank" @click="call($event, index)">
                        <Icon class="flex-shrink-0" :name="src" size="26px" />
                    </a>
                </div>
                <button class="mobile max-lg:flex hidden justify-center items-center my-auto me-4 w-[50px] h-[50px] rounded-md 
                    border border-black-500 hover:bg-black-500 transition-[background-color]" 
                    @click.prevent="toggle_mobile_menu">
                    <Icon name="fe:bar" size="35px"/>
                </button>
            </div>
            <ul class="navigation hidden lg:flex items-center transition-all">
                <li v-for="({ label, class_, section }, index) in navigation_bar" :key="index" 
                class="item relative cursor-pointer font-raleway font-semibold me-10 last:me-0 text-gray-800 
                before:absolute before:bottom-[-3px] before:rounded-md before:flex before:h-[3px]
                before:bg-orange-300 before:w-0 before:content-[''] 
                hover:before:w-full before:transition-all before:origin-center" 
                :class="class_" @click.prevent="scrollToSection(section)">
                    {{ label }}
                </li>
            </ul>
        </nav>   
        <ul class="mobile-navigation lg:hidden absolute" :class="{ show: mobile_menu }">
            <li v-for="({ label, class_, section }, index) in navigation_bar" :key="index" 
            class="item font-raleway font-semibold text-black hover:text-black-400 
            py-6 border-b border-black-500 hover:bg-black-500 active:bg-gray-100" 
            :class="class_" @click.prevent="scrollToSection(section, 200)">
                {{ label }}
            </li>
            <li>

            </li>
            <li>
                
            </li>
        </ul>
        <ul class="information">
            <li class="cursor-pointer">
                <a class="flex items-center" href="https://maps.app.goo.gl/tq2JfxfJoc67brRX7" target="_blank">
                    <h4 class="font-raleway text-blue me-2 text-end transition-all">
                        Av. Hispanoamericana, Km 1 Santiago,
                        <span class="text-blue-300">Zona Sur, República Dominicana.</span>
                    </h4>
                    <nuxt-icon name="layout/location-color" class="text-[28px] location-icon-color" filled />
                </a>
            </li>
            <li class="cursor-pointer flex items-center mt-2" @click.passive="copy_phone">
                <Icon name="ic:outline-content-copy" class="me-2 font-bold text-[16px] separator" />
                <h4 class="font-raleway text-orange-300 me-2 text-end transition-all">
                    <span class="text-orange-200">(809)</span> 724-5700
                </h4>
                <nuxt-icon name="layout/phone-color" class="text-[26px] phone-icon-color" filled />
            </li>
        </ul>
    </header>
    <div v-if="mobile_menu" class="lg:hidden bg-[#09090970] fixed w-screen h-screen z-[40]" @click="toggle_mobile_menu" />
</template>
<style scoped>
    ul.navigation li.item.focused::after {
        background-color: var(--orange-300);
        position: absolute; 
        border-radius: 100vmax; 
        width: 9px;
        height: 9px;
        top: -2px;
        right: -15px;
    }
    header {
        position: fixed; 
        top: 0; 
        left: 0; 
        border-bottom-width: 1px; 
        border-bottom-color: transparent;
        width: 100%; 
        color: var(--black); 
        background-color: white;
        z-index: 999;
        transition-property: all;
        transition-duration: .15s;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
    }
    header.transparent ul.mobile-navigation {
        right: 0;
    }
    header ul.mobile-navigation {
        top: 93px;
        text-align: center; 
        background-color: white;
        width: 70vw;
        right: -100%;
        height: calc(100vh - 84px);
    }
    header ul.mobile-navigation.show {
        transition: var(--default-tw-transition);
        right: 0;
    }
    header ul.information {
        @apply max-[1300px]:hidden flex;
        position: absolute; 
        top: 4.5rem;
        right: 18px;
        flex-direction: column; 
        align-items: flex-end; 
        font-weight: 700; 
        color: var(--black); 
        max-width: 300px;
        font-size: 14px;
    }
    header ul.information h4 {
        animation: appear 200ms ease-in-out;
    }
    header nav div.upper .logo :deep(svg) {
        @apply max-lg:w-[60px] lg:w-[90px] h-[60px] lg:h-[90px];
        margin-block: 1rem;
        transition-property: all;
        transition-duration: .15s;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
    }
    header nav div.upper svg.salesianos-logo {
        height: auto;
        position: absolute;
        left: 18px;
        top: 32px;
        max-width: 100px;
        @apply hidden lg:flex w-[7vw] xl:w-[11vw];
    }
    header nav {
        @apply lg:mb-4;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    header nav div.upper {
        display: flex;
        width: 100%;
    }
    header nav div.upper div.social-media {
        @apply absolute flex max-lg:left-[50%] lg:right-0 max-lg:translate-x-[-50%];
    }
    header nav div.upper div.social-media a.icon {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40px;
        padding: 12px;
        color: white;
        cursor: pointer;
        transform: translateY(-100%);
        transition: var(--default-tw-transition);
        animation: slide-up-bottom 200ms cubic-bezier(.68,.82,0,.8) forwards;
    }
    @keyframes slide-up-bottom {
        from {
            transform: translateY(-100%);
        } to {
            transform: translateY(0%);
        }
    }
    header nav div.upper div.social-media a.icon:nth-child(2) { animation-delay: 200ms; }
    header nav div.upper div.social-media a.icon:nth-child(3) { animation-delay: 300ms; }
    header nav div.upper div.social-media a.icon:nth-child(4) { animation-delay: 400ms; }
    header nav div.upper div.social-media a.icon:nth-child(5) { animation-delay: 500ms; }
    header nav div.upper div.social-media a.icon:nth-child(odd) { 
        background-color: var(--blue);
    }
    header nav div.upper div.social-media a.icon:nth-child(odd):hover {
        background-color: var(--blue-300);
    }
    header nav div.upper div.social-media a.icon:nth-child(even) { 
        background-color: var(--orange);
    }
    header nav div.upper div.social-media a.icon:nth-child(even):hover { 
        background-color: var(--orange-300);
    }

    header.scrolled {
        top: -200px;
        border-bottom: solid 1px var(--black-500); 
    }
    header.scrolled.up {
        top: 0px;
    }
    header.transparent {
        background-color: #FFFFFF00;
        @apply transition-colors;
    }
    header.transparent ul.information {
        display: none;
    }
    header.transparent ul.navigation li.item {
        color: white;
    }
    header.transparent ul.navigation li.item:hover { color: #ffffffa2; }
    header.transparent ul.navigation li.item::before {
        width: 0;
    }
    header.transparent nav div.upper div.social-media { 
        position: absolute;
        @apply top-[45px] lg:top-[32px] lg:right-[35px];
    }
    header.transparent nav div.upper button.mobile { border-color: #FFFFFFCC; }
    header.transparent nav div.upper button.mobile:hover { background-color: #FFFFFF6B; }
    header.transparent nav div.upper button.mobile ::v-deep(svg) { color: #FFFFFFCC; }
    header.transparent nav div.upper div.social-media a.icon {
        animation: none;
        transform: translateY(0%);
        color: #FFFFFF8C;
        transition-property: color;
    }
    header.transparent nav div.upper div.social-media a.icon:hover {
        color: white;
    }
    header.transparent nav div.upper div.social-media a.icon:is(:nth-child(even), :nth-child(odd)) {
        background-color: #FFFFFF00;
    }
    header.transparent nav div.upper .logo :deep(svg){
        @apply lg:mx-auto my-7 w-[80px] h-[80px] lg:w-[130px] lg:h-[130px];
    }
    header.transparent nav {
        border-bottom-color: #FFFFFF00;
    }
    header.transparent ul.mobile-navigation {
        transform: translateY(-100%);
        top: 0;
        width: 100%;
        height: auto;
    }
    header.transparent ul.mobile-navigation.show {
        animation: slide-up-bottom 500ms ease-in-out forwards;
    }
    header.transparent ul.mobile-navigation li.item {
        padding-block: 1.5rem;
        border-bottom: 1px solid var(--black-500);
    }
    header.transparent ul.mobile-navigation li.item:hover {
        background-color: var(--black-500);
        color: #fff;
    }
    header ul.information :deep(:is(.location-icon-color, .phone-icon-color)) svg {
        overflow: visible;
    }
    header.transparent ul.information :deep(svg:is(.location-icon-color, .phone-icon-color))   {
        animation: none;
    }
    header.scrolled nav ul.navigation {
        margin-right: 0;
    }
    header.scrolled ul.mobile-navigation {
        top: 85px;
    }
</style>
<script setup>
import { useLayoutStore } from '@/store/layout';
const layout = useLayoutStore();

function call (evt, index) {
    evt.preventDefault();
    
    if ((index === 3) && window.matchMedia("(max-width: 768px)").matches) { 
        window.open('tel:+8097245700');
    }else {
        copy_phone();
    }
}
const copy_phone = async () => {
    try {
        await navigator.clipboard.writeText('8097245700');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

const copy_map = async () => {
    try {
        await navigator.clipboard.writeText(''); 
    }
    catch (err) {
        console.error('Failed to copy: ', err);
    }
}

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
        label: 'INICIO',
        section: 'home'
    },
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
];
const addresses = {
    'home': '/',
    'portrait': '/',
    'about': '/sobre-nosotros',
    'news': '/noticias',
    'workshop': '/talleres',
    'admissions': '/admisiones',
    'activities': '/pastoral',
    'job-insertion': '/insercion-laboral',
}
// social-media
const social_media = [
    {   src: 'fe:instagram', 
        link: "https://www.instagram.com/ipisasdb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" 
    },
    {   src: 'icon-park-outline:facebook', 
        link: "https://www.facebook.com/IPISASDB/?locale=es_LA" 
    },
    {   src: 'fe:mail', 
        link: "mailto:info@ipisa.edu.do?cc=acct3@example.com?subject=test%20email",
        email: true,
    },
    {   src: 'material-symbols:phone-in-talk-watchface-indicator-sharp' ,
        link: ""
    },
];
// navigation bar styles
let prevScrollY;
onBeforeMount(() => {
    
})
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
async function scrollToSection (section_, delay = 0 ) { 
    //temporarily it will automatically navigate to the routes
    const in_mobile = window.matchMedia("(max-width: 768px)").matches;
    const in_home = computed(() => router.currentRoute.value.name === 'index');

    await navigateTo({ path: addresses[section_]});
    if (in_mobile && mobile_menu.value) toggle_mobile_menu();
    
    // if (!in_home.value) { return; }
    // setTimeout(() => {
    //     const section = document.querySelector(`section#${section_}`);
    //     const section_offset = parseInt(section.dataset.offset) || 0;
    //     const y = section.getBoundingClientRect().top + window.pageYOffset - (in_mobile ? 60 : 140) + section_offset;
        
    //     window.scrollTo({ top: y, behavior: 'smooth' });
    // }, delay);

    if (in_mobile && mobile_menu.value) {
        toggle_mobile_menu();
    };
}
</script>