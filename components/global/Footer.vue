<template>
    <footer class="relative flex flex-col bg-white overflow-hidden">
        
        <div class="separator-blue bg-blue w-full h-[40px]" />
        <div class="separator-orange bg-orange-300 w-full h-[30px]" />

        <div class="gear-teeth absolute flex top-[60px] left-0">
            <div v-for="(teeth, index) in Array.from( Array(40).keys() )" class="bg-white w-[40px] h-[50px] first:ms-[12px] mx-[18px]" :key="teeth" />
        </div>

        <div class="footer-content relative overflow-hidden flex flex-col bg-white px-4 lg:px-8 pb-5 pt-10">
            <div class="flex flex-col align-center logo min-[800px]:max-w-[320px]">
                <h4 class="font-raleway text-black-400 font-semibold text-[22px] min-[1400px]:text-[26px] max-md:text-center">
                    ¡Sigue contactándonos!
                </h4>
                <p class="text-black font-raleway font-medium max-w-[372px] text-[14px] min-[800px]:text-[17px] mt-1 mb-2 max-md:text-center max-md:mx-auto">
                    Te invitamos a ser parte de nuestra trayectoria educativa y descubrir cómo podemos impulsar tu futuro.
                </p>
                <div class="flex flex-col items-center">
                    <nuxt-icon name="general/ipisa-logo" class="mx-auto text-[180px]" filled />
                    <h4 class="flex flex-col items-center font-normal font-raleway text-[20px] leading-[21px]">
                        <b class="text-blue">Buenos Cristianos</b>
                        <b class="text-orange">Honrados Ciudadanos.</b>
                    </h4>
                </div>
            </div>
            <div class="links">
                <div class="extracurricular-activities"> <!-- Actividades Extracurriculares -->
                    <h5 class="title">
                        Pastoral
                    </h5>
                    <ul class="activities">
                        <li v-for="({label, address }, index) in extracurricular_activities" :key="index" class="activity">
                            <a href="#">{{ label }}</a>
                        </li>
                    </ul>
                </div>
                <div class="job-insertion">
                    <h5 class="title">
                        Inserción Laboral
                    </h5>
                    <ul class="options">
                        <li class="option">
                            Requisitos Esenciales
                        </li>
                        <li class="option">
                            Formulario de Solicitud
                        </li>
                    </ul>
                </div>
                <div class="about">
                    <h5 class="title">
                        Sobre Nosotros
                    </h5>
                    <ul class="sections">
                        <li class="section">
                            IPISA
                        </li>
                        <li class="section">
                            Filosofía
                        </li>
                        <li class="section">
                            Nuestra Trayectoria
                        </li>
                        <li class="section">
                            Reconocimientos
                        </li>
                        <li class="section">
                            Promociones
                        </li>
                    </ul>
                </div>
                <div class="workshop">
                    <h5 class="title">
                        Talleres
                    </h5>
                    <ul class="workshop-list">
                        <li v-for="({label, address }, index) in workshops" :key="index" class="option">
                            <a href="#">
                                {{ label }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="admissions-info">
                    <div>
                        <h5 class="title">
                            Admisiones
                        </h5>
                        <ul class="admission-options">
                            <li class="option">
                                Requisitos de Admisión
                            </li>
                            <li class="option">
                                Formulario Virtual
                            </li>
                            <li class="option">
                                Estudiantes Admitidos
                            </li>
                        </ul>
                    </div>
                    <div class="max-md:mt-8">
                        <h5 class="title">
                            Informaciones
                        </h5>
                        <ul class="information">
                            <li class="option">
                                Noticias de la Institución
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="location flex flex-col items-center max-sm:mb-6">
                <h4 class="font-raleway text-black-400 font-bold text-[22px] min-[1400px]:text-[26px] max-sm:text-center">
                    Ubicación
                </h4>
                <p class="text-black font-raleway font-medium max-w-[372px] text-[14px] min-[800px]:text-[17px] mt-1 mb-2 max-sm:text-center">
                    Av. Hispanoamericana, Km 1 Santiago, <br />
                    Zona Sur, República Dominicana
                </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15050.64837538612!2d-70.6843685!3d19.4270006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1cf13d5f1c97b%3A0x13c741931d8d644f!2sInstituto%20Polit%C3%A9cnico%20Industrial%20de%20Santiago!5e0!3m2!1ses-419!2sdo!4v1696273194914!5m2!1ses-419!2sdo" 
                width="300" height="230" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

        <div class="separator border-b border-gray-100 my-4" />

        <div class="flex max-[800px]:flex-col items-center w-full justify-between px-6 min-[800px]:px-10 pb-8 min-[800px]:pb-16 pt-2">
            <p class="text-gray-200 font-raleway text-[14px] min-[800px]:text-[16px] max-[800px]:mb-4">
                {{ new Date().getFullYear() }} © IPISA, Todos los Derechos Reservados.
            </p>
            <div class="flex space-x-2 min-[800px]:space-x-4 social-media">
                <a href="https://www.instagram.com/ipisasdb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank">
                    <nuxt-icon name="layout/instagram" class="cursor-pointer text-[30px]" filled />
                </a>
                <a href="https://www.facebook.com/IPISASDB/?locale=es_LA" target="_blank">
                    <nuxt-icon name="layout/facebook" class="cursor-pointer text-[30px]" filled />
                </a>
                <a href="mailto:info@ipisa.edu.do?cc=acct3@example.com?subject=test%20email">
                    <nuxt-icon name="layout/mail" class="cursor-pointer text-[30px]" filled />
                </a>
                <a href="https://create.wa.link/" target="_blank">
                    <nuxt-icon name="layout/whatsapp" class="cursor-pointer text-[30px]" filled />
                </a>
            </div>
        </div>
    </footer>
</template>
<style scoped>
footer .footer-content {
    display: grid;
}
.links {
    display: grid;
    gap: 10px;
}
.extracurricular-activities {
    grid-area: activities;
}
.job-insertion {
    grid-area: job-insertion;
}
.about {
    display: flex;
    flex-direction: column;
    grid-area: about;
}
.workshop {
    grid-area: workshop;
}
.admissions-info {
    grid-area: admissions-info;
}
ul.workshop-list {
    display: grid;
    grid-template-rows: auto;
}
ul.activities {
    display: grid;
    grid-template-rows: auto;
}
@media (max-width: 992px) {
    footer .footer-content {
        justify-content: center;
        grid-template-columns: auto;
        grid-template-rows: auto;
        gap: 22px;
    }
    ul.activities {
        grid-template-columns: repeat(2, 1fr);
    }
    ul.workshop-list {
        grid-template-columns: repeat(2, 1fr);
    }
    .links {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        grid-template-areas:
            "activities activities"
            "workshop workshop"
            "about job-insertion"
            "admissions-info .";
        gap: 20px;
    }
}
@media (min-width: 800px) {
    footer .footer-content {
        grid-template-columns: 280px 1fr;
        gap: 2%;
    }
    .links {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        grid-template-areas:
            "activities activities activities"
            "workshop workshop workshop"
            "admissions-info about job-insertion";
        gap: 6px;
    }
    ul.workshop-list {
        grid-template-columns: repeat(3, 1fr);
    }
    ul.activities {
        grid-template-columns: repeat(3, 1fr);
    }
}
@media (min-width: 1400px) {
    footer .footer-content {
        grid-template-columns: 320px 1fr 300px;
        grid-template-rows: auto;
        justify-content: space-between;
        gap: 5%;
    }
    ul.workshop-list {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
    }
    .links {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: auto;
        grid-template-areas:
        "activities activities activities job-insertion"
        "about workshop workshop admissions-info";
    }
}
.links h5.title {
    color: var(--black-400);
    margin-bottom: 0.5rem; /* 8px */
    font-family: var(--raleway);
    font-weight: 600;
    @apply text-[18px] min-[800px]:text-[22px];
    transition: var(--default-tw-transition);
}
.links ul.activities li.activity, li.section, li.option {
    @apply text-[14px] min-[800px]:text-[16px];
    color: var(--black);
    font-weight: 500;
    font-family: var(--raleway);
    margin-bottom: 0.25rem;
    cursor: pointer; 
    transition: var(--tw-transion-1);
}
.links ul.activities li.activity:hover, li.section:hover, li.option:hover {
    color: var(--black-400);
    text-decoration: underline;
}
</style>
<script setup>
    const extracurricular_activities = ref([
        {
            label: 'Clubes deportivos',
            address: ''
        },
        {
            label: 'Club vocacional',
            address: ''
        },
        {
            label: 'Club de teatro',
            address: ''
        },
        {
            label: 'Taller de líderes',
            address: ''
        },
        {
            label: 'Club de la ONU',
            address: ''
        },
        {
            label: 'Catequesis sacramental',
            address: ''
        },
        {
            label: 'Coro escolar',
            address: ''
        },
        {
            label: 'Servidores del altar',
            address: ''
        },
        {
            label: 'Batón ballet',
            address: ''
        },
        {
            label: 'Abanderados',
            address: ''
        },
        {
            label: 'Club ecológico',
            address: ''
        },
        {
            label: 'Catequesis sacramental',
            address: ''
        },
    ])
    const workshops = ref([
        {
            label: 'Confección & Patronaje',
            address: '',
        },
        {
            label: 'Equipos Electrónicos',
            address: '',
        },
        {
            label: 'Desarrollo & Administración de Aplicaciones Informáticas',
            address: '',
        },
        {
            label: 'Gestión Administrativa &  Tributaria',
            address: '',
        },
        {
            label: 'Electromecánica de Vehículos',
            address: '',
        },
        {
            label: 'Ensamblaje de Muebles',
            address: '',
        },
        {
            label: 'Mecanizado',
            address: '',
        },
        {
            label: 'Instalaciones Eléctricas',
            address: '',
        },
    ])
</script>