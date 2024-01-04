<template>
    <section id="portrait" class="flex flex-col justify-center items-center lg:px-8 h-[120vh] lg:h-screen">
        <div class="absolute w-full h-full top-0 left-0">
            <div class="bg-[#00488D99] z-20 absolute top-0 left-0 w-full h-full" />
            <nuxt-img src="/modules/home/wallpaper/portrait-1.jpg" class="w-full h-full z-10" 
                sizes="100vw sm:50vw md:400px xl:100%"
                :placeholder="[50, 25, 75, 5]"
                densities="x1 x2" />
        </div>
        <div class="flex flex-col items-center relative z-30">
            <div class="card">
                <h4 class="title">
                    FORJANDO UN LEGADO DE EXCELENCIA POR MÁS DE <span class="text-orange">30 AÑOS</span> 
                </h4>
                <p class="description">
                    Enraizado en los principios salesianos y orientado hacia la excelencia en el aspecto académico y técnico, 
                    <b>IPISA</b> se ha convertido en un referente de prestigio en la educación de la República Dominicana.
                    Te invitamos a ser parte de nuestra trayectoria educativa y descubrir cómo podemos impulsar tu futuro.
                </p>
            </div>
            <button class="font-raleway font-bold text-[1.3rem] text-white bg-gradient-to-b from-[#FF6000] to-[#FF4A4A] py-3 rounded-xl min-w-[300px] lg:min-w-[370px]">
                ÚNETE A NOSOTROS
            </button>
        </div>
    </section>
</template>
<style scoped>
    div.card {
        @apply flex flex-col bg-gradient-to-b from-blue-400 to-[#004F9600] pb-10 pt-12 px-4 sm:px-6 lg:px-16 mb-[2rem] lg:mt-[8rem] sm:rounded-xl lg:max-w-[700px];
    }
    h4.title {
        @apply font-bold font-garamond text-white max-lg:max-w-[440px] text-[1.4rem] lg:text-[2.01rem] leading-[1.75rem] lg:leading-[2.3rem] tracking-[1px] mx-auto mb-3 text-center;
    }
    p.description {
        @apply font-raleway text-[16px] lg:text-lg text-white max-lg:max-w-[440px] max-lg:text-justify max-lg:mx-auto text-justify;
    }
</style>