<template>
    <about-portrait-component :picture="picture" :class="workshop_name" :wallpaper_phrase="portrait_title" />
    <main class="info workshop-detail flex flex-col justify-center
    px-4 lg:px-24 pt-[4rem] sm:pt-[2rem] mb-28 mx-auto w-full
    md:max-w-[1120px] min-h-[80vh]" :class="workshop_name">
        <section class="w-full">
            <div class="workshop-hero font-raleway">
                <nuxt-icon class="workshop-logo-wrapper" :name="`workshop/${workshop_name}`" filled />
                <h1 class="workshop-title">
                    <slot name="workshop-title"></slot>
                </h1>
                <p class="workshop-description text-black-700 mx-auto font-medium text-lg text-center leading-6 mb-8
                sm:max-w-[420px] sm:mb-6">
                    <slot name="workshop-description"></slot>
                </p>
            </div>
            <p class="description flex flex-col items-center">
                <span class="font-bold text-[1.8rem] lg:text-2xl">
                    Modelo
                </span>
                <span class="font-medium text-[1.4rem] lg:text-xl">
                    {{ type }}
                </span>
            </p>
            <p class="description">
                <slot name="content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse sit unde porro ipsa dolor velit facilis error minima eligendi beatae? 
                    Expedita ab doloremque et voluptatum quia facilis qui corporis error?
                </slot>
            </p>
            <slot name="workshop-gallery">
                <div class="flex justify-center items-center w-full h-[20vh] bg-black-500 rounded mb-10">
                    <h1 class="font-raleway text-2xl mx-auto font-bold text-black-700">
                        Gallery
                    </h1>
                </div>
            </slot>
            <p class="description summary">
                <slot name="workshop-summary"></slot>
            </p>
            <p class="description flex flex-col justify-center items-center">
                <span class="font-bold text-[1.8rem] lg:text-2xl">Horas de pasantía</span>
                <span class="font-medium text-[1.4rem] lg:text-xl">{{ internship }} horas</span>
            </p>
        </section>
        <div class="news-section lg:w-[360px] relative">
            <h1 class="font-raleway font-[700] text-[28px] lg:text-[36px] text-black-400 mt-3 lg:mt-10 mb-4">
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
        </div>
    </main>
</template>
<script setup>
    const { picture, workshop_name, type, internship, portrait_title } = useAttrs();
</script>