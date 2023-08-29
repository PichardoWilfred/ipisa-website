<template>
    <header :class="header_class" class="fixed w-full left-0">
        <nav>
            <div>
                <ipisa-logo class="logo" />
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
header nav svg.logo {
    @apply my-4 transition-all w-[90px] h-[90px];
}

header nav {
    @apply w-full flex flex-col items-center mb-4 justify-center;
}
header nav ul.navigation {
    @apply flex items-center px-8 transition-all;
}
header.scrolled {
    @apply top-[-200px] border-b-gray-100;
}
header.scrolled.up {
    @apply top-0;
}
header.transparent {
    @apply bg-[#FFFFFF00] text-white transition-colors;
}
header.transparent nav svg.logo {
    @apply my-7 w-[130px] h-[130px];
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
import { onMounted, onBeforeUnmount, reactive, ref } from 'vue';

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
let prevScrollY;
onMounted(() => {
    prevScrollY = ref(window.scrollY);
    window.addEventListener('scroll', handleScroll);
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