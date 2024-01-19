<template>
    <about-portrait-component :picture="`modules/workshop/${picture}-1.JPG`" />
    <main class="article flex max-xl:flex-col justify-center px-4 lg:px-24 pt-[4rem] sm:pt-[2rem] mb-28">
        <section>
            <h1 class="title">
                <slot name="title">
                    <span class="text-blue">Página</span> <span class="text-orange">vacía</span>
                </slot>
            </h1>
            <div class="lg:me-10 font-raleway xl:min-w-[640px] xl:max-w-[790px] min-h-[80vh]">
                <p class="text-black text-[1rem] lg:text-lg font-medium min-h-[25vh] xl:min-h-[30vh] mb-[1.8rem] max-lg:mb-[3.8rem]">
                    <slot name="content">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse sit unde porro ipsa dolor velit facilis error minima eligendi beatae? 
                        Expedita ab doloremque et voluptatum quia facilis qui corporis error?
                    </slot>
                </p>
            </div>
        </section>

        <aside class="lg:w-[360px] relative">
            <h1 class="font-raleway font-[700] text-[28px] lg:text-[36px] text-black-400 mt-3 lg:mt-20 mb-4">
                Noticias
            </h1>
            <div class="news-feed">
                <div class="new mb-5">
                    <div class="author flex items-center my-3">
                        <div class="avatar bg-black-600 rounded-full w-[25px] h-[25px] me-3" />
                        <h3 class="font-raleway text-md text-black-600">
                            Autor de Ejemplo
                        </h3>
                    </div>
                    <h2 class="font-raleway font-bold text-black-400 text-xl mb-1">
                        Título de Noticia de Ejemplo
                    </h2>
                    <p class="font-raleway text-black text-[15px] leading-5">
                        Estamos emocionados de dar la bienvenida a nuevos estudiantes y continuar nuestra misión de educar, inspirar y forjar un futuro mejor.
                    </p>
                </div>
            </div>
        </aside>
    </main>
</template>
<script setup>
    const { picture } = useAttrs();
</script>
<style scoped>
</style>