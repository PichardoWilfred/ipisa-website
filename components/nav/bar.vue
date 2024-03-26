<template>
    <header :class="header_class">
        <nav>
            <div class="upper">
                <Transition name="fade-fast-2" mode="out-in">
                    <div v-if="!header_class.transparent" class="flex flex-col">
                        <NuxtLink to="https://www.salesianos.es/salesianos/" target="_blank" rel="noopener">
                            <Icon class="salesianos-logo" name="Salesianos" />
                        </NuxtLink>
                    </div>
                </Transition>
                <nuxt-link to="/" class="logo active:scale-90 cursor-pointer ms-2 me-auto lg:mx-auto transition-all">
                    <nuxt-icon @click="scrollToSection('portrait')" name="general/ipisa-logo" filled />
                </nuxt-link>
                <div class="social-media">
                    <NuxtLink to="https://ipisa.ses.edu.do/" target="_blank" title="Aula Virtual" class="icon edu-coco bg-blue-200" rel="noopener">
                        <nuxt-icon class="flex-shrink-0 text-[26px] text-white-100" name="layout/aula-virtual" filled />
                    </NuxtLink>
                    <NuxtLink v-for="({ src, link, email }, index) in social_media" class="icon" :to="link" target="_blank">
                        <Icon class="flex-shrink-0" :name="src" size="26px" />
                    </NuxtLink>
                    <NuxtLink to="tel:8097245700" class="icon" rel="noopener">
                        <Icon class="flex-shrink-0" size="26px" name="material-symbols:phone-in-talk-watchface-indicator-sharp" />
                    </NuxtLink>
                </div>
                <button class="mobile max-lg:flex hidden justify-center items-center my-auto me-4 w-[50px] h-[50px] rounded-md 
                    border border-black-500 hover:bg-black-500 transition-[background-color]" 
                    @click.prevent="toggle_mobile_menu">
                    <Icon name="fe:bar" size="35px"/>
                </button>
            </div>
            <ul class="navigation hidden lg:flex items-center transition-all">
                <!-- @click.prevent="scrollToSection(section)" -->
                <li v-for="({ label, class_, section, route }, index) in navigation_bar" :key="index" 
                class="item relative cursor-pointer font-raleway font-semibold last:me-0 me-7 xl:me-10 text-gray-800
                before:absolute before:bottom-[-3px] before:rounded-md before:flex before:h-[3px]
                before:bg-orange-300 before:w-0 before:content-['']
                hover:before:w-full before:transition-all before:origin-center" :class="[class_, in_route(route) ? 'before:w-full':'' ]" >
                    <NuxtLink class="w-full h-full" :to="route">
                    {{ label }}
                    </NuxtLink>
                </li>
            </ul>
        </nav>   
        <ul class="mobile-navigation lg:hidden absolute" :class="{ show: mobile_menu }">
            <li v-for="({ label, class_, section, route }, index) in navigation_bar" :key="index" @click.native="scrollToSection(section, 200)"
            class="item flex items-center justify-center font-raleway font-semibold text-black hover:text-black-400 border-b border-black-500 hover:bg-black-500 active:bg-gray-100" :class="class_">
                <nuxt-link :to="route" class="h-full w-full py-6">
                    {{ label }}
                </nuxt-link>
            </li>
            <template v-if="!header_class.transparent">
                <li class="cursor-pointer my-5 me-4">
                    <NuxtLink class="flex items-center justify-end text-[13px] font-bold" to="https://maps.app.goo.gl/tq2JfxfJoc67brRX7" target="_blank">
                        <h4 class="font-raleway text-blue me-2 text-end transition-all">
                            Av. Hispanoamericana, Km 1 Santiago,
                            <span class="text-blue-300">Zona Sur, República Dominicana.</span>
                        </h4>
                        <nuxt-icon name="layout/location-color" class="text-[28px] location-icon-color" filled />
                    </NuxtLink>
                </li>
                <li class="flex justify-end cursor-pointer my-5 me-4">
                    <button class="flex justify-end text-[17px] font-bold" @click.prevent="copy_phone">
                        <Icon name="ic:outline-content-copy" class="ms-auto me-2 text-[16px] separator" />
                        <h4 class="font-raleway text-orange-300 me-2 text-end transition-all">
                            <span class="text-orange-200">(809)</span> 724-5700
                        </h4>
                        <nuxt-icon name="layout/phone-color" class="text-[26px] phone-icon-color" filled />
                    </button>
                </li>
            </template>
        </ul>
        <ul class="information">
            <li class="school-address cursor-pointer">
                <a class="flex items-center" href="https://maps.app.goo.gl/tq2JfxfJoc67brRX7" target="_blank">
                    <h4 class="font-raleway text-blue me-2 text-end transition-all">
                        Av. Hispanoamericana, Km 1 Santiago,
                        <span class="text-blue-300">Zona Sur, República Dominicana.</span>
                    </h4>
                    <nuxt-icon name="layout/location-color" class="text-[28px] location-icon-color" filled />
                </a>
            </li>
            <li class="phone-number tooltip cursor-pointer flex items-center mt-2" @click.passive="copy_phone">
                <button class="copy-number flex justify-center items-center p-2 me-2 rounded-full hover:bg-black-100 active:bg-black-500">
                    <span class="tooltip-text text-[16px] mx-3 font-normal px-6">{{ requirements_copied_text }}</span>
                    <Icon name="ic:outline-content-copy" class="font-bold text-[16px] separator" />
                </button>
                <h6 class="font-raleway text-orange-300 me-2 text-end transition-all">
                    <span class="text-orange-200">(809)</span> 724-5700
                </h6>
                <nuxt-icon name="layout/phone-color" class="text-[26px] phone-icon-color" filled />
            </li>
        </ul>
    </header>
    <Transition name="fade-fast-2" mode="out-in">
        <div v-if="mobile_menu" class="lg:hidden bg-[#09090970] fixed w-screen h-screen z-[40]" @click="toggle_mobile_menu" />
    </Transition>
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
    ul.information li:is(.school-address, .phone-number) {
        position: relative;
        z-index: 2;
    }
    ul.information li:is(.school-address, .phone-number) > * {
        position: relative;
        z-index: 2;
    }
    ul.information li:is(.school-address, .phone-number)::after {
        content:'';
        position: absolute;
        top: -3px;
        left: -3px;
        width: 105%;
        height: 120%;
        z-index: 1;
        border-radius: 5px;
        transition: all 130ms cubic-bezier(.68,.82,0,.8);
    }
    ul.information li:is(.school-address, .phone-number):hover::after {
        background-color: var(--black-100);
    }
    ul.information li:is(.school-address, .phone-number):active::after {
        background-color: var(--black-200);
    }
    header {
        position: fixed; 
        top: 0; 
        left: 0; 
        /* border-bottom-width: 1px;  */
        /* border-bottom-color: transparent; */
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
        top: 92px;
        text-align: center; 
        background-color: white;
        width: 70vw;
        right: -100%;
        height: calc(100vh - 94px);
    }
    header ul.mobile-navigation.show {
        overflow-y: scroll;
        transition: var(--default-tw-transition);
        right: 0;
    }
    header ul.information {
        display: flex;
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
        height: 60px;
        margin-block: 1rem;
        transition-property: all;
        transition-duration: .15s;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
    }
    header nav div.upper svg.salesianos-logo {
        width: 7vw;
        height: auto;
        position: absolute;
        left: 18px;
        top: 32px;
        max-width: 100px;
    }
    header nav {
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
        position: absolute;
        display: flex;
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
    /*  */
    header.transparent nav div.upper div.social-media a.icon.edu-coco {
        background-color: transparent !important;
        /* transition: var(--default-tw-transition); */
    }
    header.transparent nav div.upper div.social-media a.icon.edu-coco:hover {
        background-color: #FFFFFF6B !important;
    }
    header nav div.upper div.social-media a.icon.edu-coco {
        background-color: var(--blue-300) !important;
        transition: var(--default-tw-transition);
    }
    header nav div.upper div.social-media a.icon.edu-coco:hover {
        background-color: var(--blue-200) !important;
    }
    /*  */
    header nav div.upper div.social-media a.icon:nth-child(even) { 
        background-color: var(--orange);
    }
    header nav div.upper div.social-media a.icon:nth-child(even):hover { 
        background-color: var(--orange-300);
    }
    header.scrolled {
        top: -200px;
    }
    header.scrolled.up {
        top: 0px;
    }
    header.transparent {
        background-color: #FFFFFF00;
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
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
        top: 45px;
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
        width: 72px;
        height: 72px;
        margin-block: 1.75rem;
    }
    header.transparent nav {
        border-bottom-color: #FFFFFF00;
    }
    header.transparent ul.mobile-navigation {
        transform: translateY(-100%);
        top: 0;
        width: 100%;
        height: auto;
        z-index: 3;
    }
    header.transparent ul.mobile-navigation.show {
        animation: slide-up-bottom 500ms ease-in-out forwards;
    }
    header.transparent ul.mobile-navigation li.item {
        /* padding-block: 1.5rem; */
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
    
    @media (min-width: 992px) {
        header nav { margin-bottom: 1rem; /* 16px */ }
        header.scrolled { border-bottom: solid 1px var(--black-500); }
        header.transparent nav div.upper .logo :deep(svg){
            width: 130px;
            height: 130px;
            margin-inline: auto;
        }
        header nav div.upper .logo :deep(svg) {
            width: 90px;
            height: 90px;
        }
        header nav div.upper div.social-media { right: 0; }
    }

    @media (min-width: 1200px) {
        header.transparent nav div.upper div.social-media { 
            top: 35px;
            right: 35px;
        }
        header nav div.upper div.social-media {
            right: 0;
        }
        
        /* header nav div.upper svg.salesianos-logo { display: flex;  } */
    }

    @media (max-width: 992px) {
        header nav div.upper .logo :deep(svg) {
            width: 60px;
        }
        header nav {
            position: relative;
            z-index: 3;
            box-shadow: 0px 0.761455px 3.04582px rgba(181, 209, 255, 0.25);
        }
        header.transparent nav {
            position: relative;
            z-index: 3;
            box-shadow: unset;
        }
        
        header nav div.upper div.social-media {
            left: 50%;
            transform: translateX(-50%);
        }
        header nav div.upper div.social-media {
            left: 50%;
            transform: translateX(-50%);
        }
    }
    @media (max-width: 1100px) {
        header nav div.upper svg.salesianos-logo { display: none; }
    }
    @media (max-width: 1380px) {
        header ul.information { display: none; }
        header nav div.upper svg.salesianos-logo { width: 11vw; }
    }
</style>
<script setup>
import { useLayoutStore } from '@/store/layout';
const layout = useLayoutStore();

const requirements_copied_text = ref('Copiar telefóno');

// function call (evt, index) {
//     if ((index === 3) && window.matchMedia("(max-width: 768px)").matches) {
//         evt.preventDefault();
//         window.open('tel:8097245700');
//     }else {
//         copy_phone();
//     }
// }
const copy_phone = async () => {
    try {
        await navigator.clipboard.writeText('8097245700');
        requirements_copied_text.value = 'Número telefónico copiado!'
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

const in_route = (route) => { 
    const actual_route = router.currentRoute.value.path.substring(1);
    const route_name = route.substring(1);
    
    let index = actual_route.indexOf("/");
    
    if (index === -1) { //if we are dealing with a root route
        return actual_route === route_name; // just compare it raw
    }else { // cut the part besides de backslash, and compare that
        return route_name === actual_route.substring(0, index);
    }
};

// router
const router = useRouter();

//navigation bar classes
const header_class = reactive({
    transparent: true,
    scrolled: false,
    up: false
})
const navigation_bar = [
    // {
    //     label: 'INICIO',
    //     section: 'home',
    //     route: '/',
    // },
    {
        label: 'NOSOTROS',
        section: 'about',
        route: '/sobre-nosotros',
    },
    {
        label: 'NOTICIAS',
        section: 'news',
        route: '/noticias',
    },
    {
        label: 'TALLERES',
        section: 'workshop',
        route: '/talleres',
    },
    {
        label: 'ADMISIONES',
        section: 'admissions',
        route: '/admisiones',
        class_: 'focused'
    },
    {
        label: 'PASTORAL',
        section: 'activities',
        route: '/pastoral',
    },
    {
        label: 'INSERCIÓN LABORAL',
        section: 'job-insertion',
        route: '/insercion-laboral',
    },
    {
        label: 'ACUAPONÍA EDUCATIVA',
        section: 'educational-aquaponics',
        route: '/acuaponia-educativa',
    },
];
const addresses = {
    // 'home': '/',
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
    // const in_home = computed(() => router.currentRoute.value.name === 'index');

    // await navigateTo({ path: addresses[section_]});
    if (in_mobile && mobile_menu.value) toggle_mobile_menu();
    
    // if (!in_home.value) { return; }
    // setTimeout(() => {
    //     const section = document.querySelector(`section#${section_}`);
    //     const section_offset = parseInt(section.dataset.offset) || 0;
    //     const y = section.getBoundingClientRect().top + window.pageYOffset - (in_mobile ? 60 : 140) + section_offset;
        
    //     window.scrollTo({ top: y, behavior: 'smooth' });
    // }, delay);

}
</script>