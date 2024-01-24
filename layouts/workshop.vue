<template>
    <about-portrait-component :picture="`modules/workshop/${picture}-1.JPG`" />
    <main class="info workshop-detail 
    flex flex-col justify-center 
    px-4 lg:px-24 pt-[4rem] sm:pt-[2rem] mb-28 mx-auto w-full 
    md:max-w-[1020px] min-h-[80vh]" 
    :class="workshop_name">
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
                <span class="font-semibold text-[1.8rem] lg:text-2xl">
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
                <span class="font-semibold text-[1.8rem] lg:text-2xl">Horas de pasantía</span>
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
    const { picture, workshop_name, type, internship } = useAttrs();
</script>
<style>
main.info.workshop-detail div.workshop-hero svg {
    margin-bottom: 18px;
}
main.info.workshop-detail ul.workshop-list {
    list-style-type: disc; 
    margin-top: 0.25rem; 
    padding-inline-start: 1.4rem; /* 16px */
}

main.info.workshop-detail
div.workshop-hero span.workshop-logo-wrapper {
    display: flex;
    justify-content: center;
    font-size: 50vw;
}

main.info.workshop-detail.desarrollo-aplicaciones-informaticas
div.workshop-hero span.workshop-logo-wrapper svg {
    width: 14rem;
    height: 9rem;
}
main.info.workshop-detail.equipos-electronicos
div.workshop-hero span.workshop-logo-wrapper svg {
    width: 14rem;
    height: 12rem;
    transform: translateX(25px);
}
main.info.workshop-detail.electromecanica-vehiculos
div.workshop-hero span.workshop-logo-wrapper svg {
    width: 14rem;
    height: 9rem;
}

main.info.workshop-detail.ensamblaje-muebles
div.workshop-hero span.workshop-logo-wrapper svg {
    width: 15rem;
    height: 8rem;
    margin-top: 1rem;
}

main.info.workshop-detail p.description {
    font-family: var(--raleway);
    font-weight: 500;
    color: var(--black);
    text-align: justify;
    font-size: 1rem;
    margin-bottom: 2rem;
}
main.info.workshop-detail 
div.workshop-hero h1.workshop-title {
    display: flex; 
    flex-wrap: wrap; 
    justify-content: center;

    font-size: 1.875rem;
    font-weight: 700; 
    text-align: center; 
    line-height: 2rem;

    margin-bottom: 0.55rem;
    margin-inline: auto;
}
main.confeccion-patronaje.workshop-detail 
div.workshop-hero h1.workshop-title {
    font-size: 1.75rem;
}
main.instalaciones-electricas.workshop-detail 
div.workshop-hero h1.workshop-title {
    font-size: 1.675rem;
}
main.desarrollo-aplicaciones-informaticas.workshop-detail 
div.workshop-hero h1.workshop-title {
    font-size: 1.45rem;
    line-height: 1.6rem;
}
main.ensamblaje-muebles.workshop-detail 
div.workshop-hero h1.workshop-title {
    font-size: 1.775rem;
}
/*  */
@media (min-width: 640px) {
    main.info.workshop-detail ul.workshop-list {
        margin-top: 0.75rem; 
    }
}

@media (min-width: 992px) {
    main.info.workshop-detail p.description {
        margin-bottom: 1.8rem;
        line-height: 1.75rem; 
        font-size: 1.1rem;
    }
    main.info.workshop-detail 
    div.workshop-hero span.workshop-logo-wrapper {
        font-size: 15rem;
    }
    main.info.workshop-detail.desarrollo-aplicaciones-informaticas
    div.workshop-hero span.workshop-logo-wrapper svg {
        width: 17rem;
        height: 10rem;
        margin-top: 3rem;
    }
    main.info.workshop-detail.equipos-electronicos
    div.workshop-hero span.workshop-logo-wrapper svg {
        width: 24rem;
        height: 14rem;
        transform: translateX(32px);
    }
    main.info.workshop-detail.electromecanica-vehiculos
    div.workshop-hero span.workshop-logo-wrapper svg {
        width: 18rem;
        height: 12rem;
        margin-top: 2rem;
    }
    main.info.workshop-detail.ensamblaje-muebles
    div.workshop-hero span.workshop-logo-wrapper svg {
        width: 18rem;
        height: 10rem;
    }
    main.info.workshop-detail 
    div.workshop-hero  h1.workshop-title {
        font-size: 2.55rem;
        line-height: 2.8rem;  
        margin-bottom: 0.5rem; 
        max-width: 500px;
    }
    main.workshop-detail.confeccion-patronaje 
    div.workshop-hero h1.workshop-title {
        font-size: 2.25rem;
    }
    main.workshop-detail.desarrollo-aplicaciones-informaticas  
    div.workshop-hero h1.workshop-title {
        font-size: 2.1rem;
        line-height: 2.3rem;
        max-width: 550px;
    }
}
</style>