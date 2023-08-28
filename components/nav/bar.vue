<template>
    <header :class="header_class" class="fixed w-full left-0">
        <nav class="w-full flex items-center">
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
    @apply relative cursor-pointer font-raleway font-bold me-12 last:me-0;
}
ul.navigation li.item.focused {
    @apply after:absolute after:rounded-full after:w-[9px] after:h-[9px] after:bg-orange after:top-[-2px] after:right-[-15px];
}
header {
    @apply text-black bg-white top-0 transition-all;
}
header nav svg.logo {
    @apply my-3 transition-all w-[90px] h-[90px];
}

header nav {
    @apply border-b border-b-[transparent];
}
header nav ul.navigation {
    @apply flex items-center px-8 py-10 min-h-[150px] transition-all;
}
header.scrolled {
    @apply top-[-200px];
}
header.scrolled.up {
    @apply top-0;
}
header.transparent {
    @apply bg-[#FFFFFF00] text-white;
}
header.transparent nav svg.logo {
    @apply my-7 w-[115px] h-[115px];
}
header.transparent nav ul.navigation {
    @apply py-16 px-8;
}
header.transparent nav {
    @apply border-b-[transparent];
}
header.scrolled nav {
    @apply border-b-gray-100;
}
header.scrolled nav ul.navigation {
    @apply me-0 py-7;
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
    if (window.scrollY > 100) { // scrolling past the limit
        header_class.transparent = false;
    }else {
        header_class.transparent = true;
    }

    if (window.scrollY > 800) { // scrolling past the limit
        header_class.scrolled = true;
    }else {
        header_class.scrolled = false;
    }

    if (currentScrollY < prevScrollY.value && window.scrollY > 800) { // scrolling up
        header_class.up = true;
    }else {
        header_class.up = false;
    }
    prevScrollY.value = currentScrollY;
}
</script>