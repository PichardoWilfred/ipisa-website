<template>
    <header :class="header_class">
        <nav>
            <div class="upper">
                <Icon v-if="!header_class.transparent" class="salesianos-logo" name="Salesianos" />
                <nuxt-icon name="general/ipisa-logo" class="logo" filled />
                <!-- <navIpisa-logo class="logo" /> -->
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
                <li v-for="({ label, class_ }, index) in navigation_bar" :key="index" class="item" :class="class_">
                    {{ label }}
                </li>
            </ul>
        </nav>   
        <ul v-if="mobile_menu" class="mobile-navigation" :class="{show: mobile_menu }">
            <li v-for="({ label, class_ }, index) in navigation_bar" :key="index" class="item" :class="class_">
                {{ label }}
            </li>
        </ul>
        <ul class="information">
            <li class="flex">
                <h4 class="text-blue me-2">
                    Av. Hispanoamericana, Km 1 Santiago,
                    <span class="text-blue-300">Zona Sur, República Dominicana.</span>
                </h4>
                <Icon name="LocationColor" class="location-icon-color" size="35px"/>
            </li>
            <li class="flex items-center mt-2">
                <h4 class="text-blue me-2">
                    <span class="text-blue-300">(809)</span> 724-5700
                </h4>
                <Icon name="PhoneColor" class="phone-icon-color" size="25px"/>
            </li>
        </ul>
    </header>
    <div v-if="mobile_menu" class="mask" @click="toggle_mobile_menu" />
</template>
<style scoped>
    ul.navigation li.item {
        @apply relative cursor-pointer font-raleway font-bold me-10 last:me-0;
    }
    ul.navigation li.item.focused {
        @apply after:absolute after:rounded-full after:w-[9px] after:h-[9px] after:bg-orange-300 after:top-[-2px] after:right-[-15px];
    }
    header {
        @apply fixed w-full left-0 text-black bg-white top-0 border-b border-b-[transparent] transition-all z-30;
    }
    header ul.mobile-navigation {
        @apply lg:hidden absolute top-[93px] right-0 bg-white text-center w-[70vw];
        height: calc(100vh - 84px);
    }
    header ul.mobile-navigation li.item {
        @apply font-raleway font-bold text-black hover:text-[#8b8b8b] py-6 border-b border-gray-100 hover:bg-gray-100 active:bg-gray-100;
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
        @apply ms-4 me-auto lg:mx-auto;
    }
    header nav div.upper .logo :deep(svg) {
        /* max-w-[60px] */
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
        @apply bg-[#FFFFFF00] text-white hover:text-white transition-colors;
    }
    header.transparent ul.information {
        @apply hidden;
    }
    header.transparent nav div.upper div.social-media { 
        @apply absolute top-[45px] lg:top-[32px] lg:right-[35px];
    }
    header.transparent nav div.upper button.mobile {
        @apply border-white hover:bg-[#FFFFFF6B];
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
//style classes
const header_class = reactive({
    transparent: true,
    scrolled: false,
    up: false
})
//social-media
const navigation_bar = [
    {
        label: 'NOSOTROS'
    },
    {
        label: 'TALLERES'
    },
    {
        label: 'INFORMACIONES'
    },
    {
        label: 'INSERCIÓN LABORAL'
    },
    {
        label: 'PASTORAL'
    },
    {
        label: 'ADMISIONES',
        class_: 'focused'
    }
]
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
// scroll modes
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

    header_class.transparent = window.scrollY < 100;
    header_class.scrolled = window.scrollY > 800; // scrolling past the limit
    header_class.up = currentScrollY < prevScrollY.value && window.scrollY > 800; // scrolling up

    prevScrollY.value = currentScrollY;
}
const mobile_menu = ref(false);
const toggle_mobile_menu = () => {
    mobile_menu.value =! mobile_menu.value;
    const body = document.querySelector("body");
    if (mobile_menu.value) {

        const scrollTop = window.pageYOffset || document.body.scrollTop;
        const scrollLeft = window.pageXOffset || document.body.scrollLeft;

        window.onscroll = () => {
            window.scrollTo(scrollLeft, scrollTop);
        }
        
        body.style.overflowY = 'hidden';
    }else {
        window.onscroll = () => {};
        body.style.overflowY = 'auto';
    }
}
</script>