<template>
    <header :class="header_class" class="fixed w-full left-0">
        <nav>
            <div class="upper">
                <Icon v-if="!header_class.transparent" class="salesianos-logo" name="Salesianos" />
                <ipisa-logo class="logo" />
                <div class="social-media">
                    <div v-for="({ src }, index) in social_media" class="icon">
                        <Icon class="flex-shrink-0" :name="src" size="26px" />
                    </div>
                </div>
            </div>
            <ul class="navigation">
                <li v-for="({ label, class_ }, index) in navigation_bar" :key="index" class="item" :class="class_">
                    {{ label }}
                </li>
            </ul>
        </nav>
    </header>
</template>
<style scoped>
ul.navigation li.item {
    @apply relative cursor-pointer font-raleway font-bold me-10 last:me-0;
}
ul.navigation li.item.focused {
    @apply after:absolute after:rounded-full after:w-[9px] after:h-[9px] after:bg-orange-300 after:top-[-2px] after:right-[-15px];
}
header {
    @apply text-black bg-white top-0 border-b border-b-[transparent] transition-all;
}
header nav div.upper svg.logo {
    @apply my-4 mx-auto w-[90px] h-[90px] transition-all;
}
header nav div.upper svg.salesianos-logo {
    @apply absolute left-[18px] top-[32px] max-w-[100px] w-[7vw] xl:w-[11vw] h-auto;
}
header nav {
    @apply w-full flex flex-col items-center mb-4 justify-center;
}
header nav div.upper {
    @apply flex w-full;
}
header nav ul.navigation {
    @apply hidden lg:flex items-center transition-all;
}
header nav div.upper div.social-media {
    @apply absolute flex right-0;
}
header nav div.upper div.social-media div.icon {
    @apply flex items-center justify-center h-[40px] w-[40px] p-3 text-white cursor-pointer;
}
header nav div.upper div.social-media div.icon {
    transform: translateY(-100%);
    animation: slide-up-bottom 200ms cubic-bezier(.68,.82,0,.8) forwards;
}
@keyframes slide-up-bottom {
    from {
        transform: translateY(-100%);
    }to {
        transform: translateY(0%);
    }
}
header nav div.upper div.social-media div.icon:nth-child(2) { animation-delay: 200ms; }
header nav div.upper div.social-media div.icon:nth-child(3) { animation-delay: 300ms; }
header nav div.upper div.social-media div.icon:nth-child(4) { animation-delay: 400ms; }
header nav div.upper div.social-media div.icon:nth-child(5) { animation-delay: 500ms; }
header nav div.upper div.social-media div.icon:nth-child(odd) { @apply bg-blue; }
header nav div.upper div.social-media div.icon:nth-child(even) { @apply bg-orange; }
header.scrolled {
    @apply top-[-200px] border-b-gray-100;
}
header.scrolled.up {
    @apply top-0;
}
header.transparent {
    @apply bg-[#FFFFFF00] text-white transition-colors;
}
header.transparent nav div.upper div.social-media { 
    @apply absolute lg:right-[32px];
}
header.transparent nav div.upper div.social-media div.icon {
    @apply lg:mt-8 text-[#FFFFFFCC];
    animation: none;
    transform: translateY(0%);
}
header.transparent nav div.upper div.social-media div.icon:is(:nth-child(even), :nth-child(odd)) {
    @apply bg-[transparent];
}
header.transparent nav div.upper svg.logo {
    @apply my-7 w-[130px] h-[130px] lg:w-[130px] lg:h-[130px];
}
header.transparent nav ul.navigation {
    @apply px-8;
}
header.transparent nav {
    @apply border-b-[transparent];
}
header.scrolled nav ul.navigation {
    @apply me-0;
}
</style>
<script setup>
const header_class = reactive({
    transparent: true,
    scrolled: false,
    up: false
})
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
</script>