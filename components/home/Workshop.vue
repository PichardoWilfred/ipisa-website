<template>
    <section class="relative py-[8rem] bg-white z-10">
        <div class="relative flex lg:justify-between w-full h-full overflow-hidden" ref="container" @mousemove="trackMouse">
            <HomeWorkshopBlueShapes />
            <HomeWorkshopOrangeShapes />
            <div class="blue-background w-[40%] h-full z-10" />
            <div class="orange-background w-[40%] h-full z-10" />
            <div class="white-blur" />
        </div>
    </section>
</template>
<script setup>
    const mouseX = ref(0);
    const mouseY = ref(0);

    const container = ref(null);

    const trackMouse = (event) => {
        const rect = container.value.getBoundingClientRect();
        mouseX.value = event.clientX - rect.left;
        mouseY.value = event.clientY - rect.top;
        // console.log(`x: (${mouseX.value}), y: (${mouseY.value})`);
    };
    onMounted(() => {
        const shapes = ref(document.querySelectorAll(".shape"));
        // shapes.value[1].style.transform = "translateY(1px);"
    
    })
    // watch(mouseX, (oldValue, newValue) => {
    //     for (const key in shapes) {
    //         const element = shapes[key];
    //         console.log(element);
    //     }
    // });
// const shapes = document.querySelectorAll(".shape");
//     for (const key in shapes) {
//         const element = shapes[key];
//         element.style.transform = `translateY('1px')`;
//     }

</script>
<style scoped>

.white-blur {
    @apply absolute w-full h-full z-40;
    background: linear-gradient(98deg, rgba(255, 255, 255, 0.404) 25%, rgba(255, 255, 255, 0.40) 78.3%);
    backdrop-filter: blur(6px);
}
.blue-background {
    opacity: 0.6;
    background: linear-gradient(118deg, #0086FF 13.94%, rgba(0, 134, 255, 0.00) 66.24%);
    backdrop-filter: blur(2px);
}
.orange-background {
    opacity: 0.6;
    background: linear-gradient(284deg, #FF7420 8.73%, rgba(255, 116, 32, 0.64) 34.25%, rgba(255, 116, 32, 0.00) 73.9%);
    backdrop-filter: blur(2px);
}
</style>