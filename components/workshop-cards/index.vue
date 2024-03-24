<template>
  <div
    class="workshop-menu-container relative top-0 left-0 w-full min-[1280px]:w-[95%] mx-auto mb-[10rem] min-[1080px]:rounded-[35px] md:overflow-hidden"
    :class="{ '!rounded-[0px] !mx-[0px] !w-full': variant === 'cards' }"
  >
    <div class="absolute top-0 left-0 w-full lg:w-[112%] h-full">
      <div
        class="workshop-image sticky md:absolute top-0 left-0 w-full h-screen md:w-screen md:h-[100vh] lg:w-[112%] lg:h-[105%] transition-all z-20"
      >
        <template v-if="!in_mobile">
          <div
            v-if="in_tablet"
            class="tablet-color-bg relative w-full h-full overflow-hidden transition-all"
            :class="[
              {
                'blue-animation': blue_animation,
                'orange-animation': orange_animation,
              },
            ]"
          />
          <div
            v-if="!in_tablet"
            class="desktop-color-bg relative w-full h-full overflow-hidden transition-all"
            :class="[{ 'color-animation': color_animation }]"
          />
        </template>
        <template v-else>
          <div
            class="absolute opacity-30 md:opacity-0 top-0 left-0 w-full h-full bg-white z-20"
          />
        </template>
        <div
          v-if="variant === 'cards'"
          class="absolute max-lg:flex-col flex w-full h-full overflow-hidden top-0 left-0 blur"
          ref="container"
        >
          <HomeWorkshopBlueShapes />
          <HomeWorkshopOrangeShapes />
          <div class="blue-background color-background" />
          <div class="orange-background color-background" />
          <div class="white-blur" />
        </div>
        <nuxt-img
          v-if="variant !== 'cards' || in_mobile"
          v-for="({ img, name }, index) in cards"
          :key="index"
          loading="lazy"
          :src="`https://a.storyblok.com/f/272924/6000x4000/${img}/${name}-1.JPG`"
          sizes="600px md:800px"
          densities="x1 x2"
          class="absolute top-0 left-0 w-screen h-screen md:w-[112%] md:h-[120vh] opacity-0 object-cover transition-all object-center"
          :class="{ 'workshop-focused': name === focused_workshop }"
        />
      </div>
    </div>

    <div
      class="card-container md:radius-[30px] z-30 max-md:h-[100vh] max-md:snap-y max-md:snap-mandatory max-md:overflow-scroll"
      :class="{
        translucent: variant !== 'cards',
        'flex p-10 gap-4 radius-none': variant === 'cards' && !in_mobile,
      }"
      ref="card_container"
      @scroll="apply_background"
    >
      <div
        class="card max-[1080px]:min-[800px]:flex-row max-[1080px]:min-[800px]:items-center flex flex-col justify-center bg-none md:bg-white text-black-700 object-cover cursor-pointer transition-all snap-center"
        v-for="({ name, icon, title, description }, index) in cards"
        :key="index"
        :id="name"
        :class="{
          'justify-center rounded-[20px] bg-white m-3 p-2 drop-shadow-2xl':
            variant === 'cards' && !in_mobile,
          [name]: true,
        }"
        @click.prevent="go_to_workshop(icon)"
        @mouseenter.prevent="apply_background_desktop(name)"
      >
        <nuxt-icon
          class="no-shadow mx-auto max-[1080px]:min-[800px]:mx-[0] max-md:pt-10 mb-5 px-5"
          :class="{ '': variant === 'cards' }"
          :name="`workshop/${icon}`"
          filled
        />
        <div
          class="flex flex-col max-[1080px]:min-[800px]:items-start items-center max-md:pb-10"
        >
          <h4
            class="max-[1080px]:min-[800px]:text-start text-center my-[10px] font-bold font-raleway text-[1.3rem] leading-[20px]"
          >
            <template v-for="({ name, class_, br }, title_index) in title">
              <span v-if="!br" :class="class_" :key="title_index">
                {{ name }}
              </span>
              <br v-else />
            </template>
          </h4>
          <p
            v-if="variant !== 'cards' || in_mobile"
            class="max-[1080px]:min-[800px]:text-start text-center font-raleway min-[1080px]:mx-4 min-[1080px]:text-[16px] leading-[18px] max-w-[310px] md:mb-5 mx-auto"
          >
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// @ts-nocheck
useSeoMeta({
  title: "IPISA - Nuestros Talleres",
  ogTitle: () => `IPISA - Nuestros Talleres`,
  ogDescription: () =>
    `Cada taller es una oportunidad para forjar un camino hacia el éxito, proporcionando a los estudiantes una base sólida y las herramientas necesarias para sobresalir en sus respectivos campos.`,
  description: () =>
    `Cada taller es una oportunidad para forjar un camino hacia el éxito, proporcionando a los estudiantes una base sólida y las herramientas necesarias para sobresalir en sus respectivos campos.`,
  ogImage: () =>
    "https://a.storyblok.com/f/272924/1055x582/742e24fb5e/nuestro-talleres.png",
  twitterCard: () =>
    "https://a.storyblok.com/f/272924/1055x582/742e24fb5e/nuestro-talleres.png",
  language: () => `es`,
});

const { variant } = defineProps({
  variant: String,
});

const go_to_workshop = async (path) => {
  await navigateTo({ path: `talleres/${path}` });
};
const temp_timer = ref(0);

const color_animation = ref(false);
// these are reserved for medium & tablet
const blue_animation = ref(false);
const orange_animation = ref(false);

const observer = ref(null);
const once = ref(true);

// TODO: fix auto center scrollable view of talleres
// function go_to_position(target) {
//     if (window.scrollY !== target.offsetParent.offsetTop) {
//         setInterval(() => {
//             target.scrollIntoView()
//         }, 1000)
//     }
// }

function trigger_animation() {
  once.value = false;
  if (in_tablet.value) {
    clearTimeout(temp_timer.value);
    blue_animation.value = !blue_animation.value; // ternary cause of debugging purposes
    temp_timer.value = setTimeout(() => {
      orange_animation.value = !orange_animation.value;
    }, 650);
  } else {
    color_animation.value = !color_animation.value; // ternary cause of debugging purposes
  }
  background_image_timer.value = setTimeout(
    () => {},
    in_tablet.value ? 1300 : 650
  );
}
const card_container = ref(null);

const in_tablet = ref(false);
const in_mobile = ref(false);

// cards
const cards = reactive([
  {
    icon: "confeccion-patronaje",
    name: "confeccion",
    img: "c42bb835ec",
    title: [
      {
        class_: "blue",
        name: "Confección",
      },
      {
        class_: "separator",
        name: " & ",
      },
      {
        class_: "orange",
        name: "Patronaje",
      },
    ],
    description:
      "Enseñanza de técnicas de costura, diseño y confección de prendas de vestir.",
    element: null,
    show_element: false,
  },
  {
    icon: "desarrollo-aplicaciones-informaticas",
    name: "desarrollo",
    img: "57f64b960e",
    title: [
      {
        class_: "blue",
        name: "Desarrollo",
      },
      {
        class_: "separator",
        name: " & ",
      },
      {
        class_: "orange",
        name: "Administración",
      },
      {
        br: true,
      },
      {
        class_: "separator",
        name: " de ",
      },
      {
        class_: "blue",
        name: "Aplicaciones",
      },
      {
        class_: "orange",
        name: " Informáticas",
      },
    ],
    description:
      "Formación en software, programación, redes y tecnologías de la información.",
    element: null,
    show_element: false,
  },
  {
    icon: "electromecanica-vehiculos",
    name: "electromecanica",
    img: "cd58eae062",
    title: [
      {
        class_: "blue",
        name: "Electromecánica",
      },
      {
        class_: "separator",
        name: " de ",
      },
      {
        br: true,
      },
      {
        class_: "orange",
        name: "Vehículos",
      },
    ],
    description:
      "Estudio de motores, sistemas de transmisión, mantenimiento y reparación de vehículos.",
    element: null,
    show_element: false,
  },
  {
    icon: "gestion-administrativa-tributaria",
    name: "gestion",
    img: "90ab2f2f06",
    title: [
      {
        class_: "blue",
        name: "Gestión Administrativa",
      },
      {
        class_: "separator",
        name: " & ",
      },
      {
        br: true,
      },
      {
        class_: "orange",
        name: "Tributaria",
      },
    ],
    description:
      "Enfoque en principios contables, análisis financiero y gestión financiera empresarial.",
    element: null,
    show_element: false,
  },
  {
    icon: "equipos-electronicos",
    name: "equipos",
    img: "0b7d736aa0",
    title: [
      {
        class_: "blue",
        name: "Equipos ",
      },
      {
        class_: "orange",
        name: "Electrónicos",
      },
    ],
    description:
      "Enfoque en circuitos, componentes electrónicos y sistemas de control electrónico.",
    element: null,
    show_element: false,
  },
  {
    icon: "ensamblaje-muebles",
    name: "ensamblaje",
    img: "c20dbecd13",
    title: [
      {
        class_: "blue",
        name: "Ensamblaje",
      },
      {
        class_: "separator",
        name: " de ",
      },
      {
        class_: "orange",
        name: "Muebles",
      },
    ],
    description:
      "Enseñanza de técnicas de carpintería, trabajos en madera y diseño de muebles.",
    element: null,
    show_element: false,
  },
  {
    icon: "mecanizado",
    name: "mecanizado",
    img: "b57f103738",
    title: [
      {
        class_: "blue",
        name: "Meca",
      },
      {
        class_: "orange",
        name: "nizado",
      },
    ],
    description:
      "Aprendizaje en maquinaria, sistemas industriales y procesos de fabricación.",
    element: null,
    show_element: false,
  },
  {
    icon: "instalaciones-electricas",
    name: "instalaciones",
    img: "4fc50fd670",
    title: [
      {
        class_: "blue",
        name: "Instalaciones ",
      },
      {
        class_: "orange",
        name: "Eléctricas",
      },
    ],
    description:
      "Formación en instalaciones eléctricas, sistemas de iluminación y circuitos eléctricos.",
    element: null,
    show_element: false,
  },
]);

const focused_workshop = ref(null);
const background_image_timer = ref(0);
const background_timer = ref(0);
var lastIndex = -1;

const apply_background = ({ target }) => {
  const newIndex = Math.floor(
    target?.scrollTop / target?.firstElementChild?.clientHeight
  );
  if (lastIndex != newIndex && (variant !== "cards" || in_mobile)) {
    clearTimeout(background_timer.value);
    background_timer.value = setTimeout(() => {
      if (focused_workshop.value === cards[newIndex || 0]?.name) return;
      focused_workshop.value = cards[newIndex || 0]?.name;
    }, 120);
    lastIndex = newIndex;
  }
};

const apply_background_desktop = (workshop) => {
  clearTimeout(background_timer.value);
  background_timer.value = setTimeout(() => {
    if (focused_workshop.value === workshop || variant === "cards") return;
    focused_workshop.value = workshop;
  }, 120);
};

onMounted(() => {
  in_tablet.value = window.matchMedia(
    "(min-width: 768px) and (max-width: 1080px)"
  ).matches;
  in_mobile.value = window.matchMedia("(max-width: 992px)").matches;
  apply_background({ target: document.querySelector(".card-container") });
  if (in_mobile.value) {
    function observe_card_callback(entries, observer) {
      // callback
      entries.forEach(({ target, intersectionRatio }) => {
        if (intersectionRatio * 100 > 50.0) {
          apply_background(target.id);
        }
      });
    }

    // TODO: fix auto center scrollable view of talleres
    // document.querySelector('.card-container').addEventListener('scroll', ({target}) => go_to_position(target))

    observer.value = new IntersectionObserver(observe_card_callback, {
      threshold: in_tablet.value ? 0.5 : 1,
    }); // to disconnect it later
    cards.map(({ name }) => {
      const element = document.querySelector(`#${name}`);
      observer.value.observe(element);
    });
  } else {
    function observe_container_callback(entries, observer) {
      // callback
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (once.value) trigger_animation();
        }
      });
    }
    observer.value = new IntersectionObserver(observe_container_callback, {
      threshold: in_tablet.value ? 0.5 : 1,
    }); // to disconnect it later
    observer.value.observe(card_container.value);
  }
});
onBeforeUnmount(() => {
  observer.value.disconnect();

  clearTimeout(background_timer.value);
  clearTimeout(temp_timer.value);
  clearTimeout(background_image_timer.value);
});
</script>
<style scoped>
/* .workshop-menu-container {
    box-shadow:
        0 0 0 5px var(--white),
        0 0 0 10px var(--orange-100),
        0 0 0 15px var(--white),
        0 0 0 20px var(--blue-100);
} */
div.portrait :deep(img.wallpaper) {
  object-position: 0px 35%;
}
.card-container {
  position: relative;
  display: grid;
  justify-content: center;
  gap: 2px;
}
img.workshop-focused {
  opacity: 0.25;
  animation: zoom-in 150ms ease-in-out forwards;
}
@keyframes zoom-in {
  from {
    filter: blur(10px);
    transform: scale(1.05);
  }
  to {
    filter: blur(0px);
    transform: scale(1);
  }
}
.card-container.translucent {
  animation: card-container-show 300ms ease-in-out forwards;
}
@keyframes card-container-show {
  from {
    opacity: 0;
    gap: 2px;
  }
  to {
    opacity: 1;
    gap: 0px;
  }
}
.card-container.translucent .card {
  font-weight: 500;
  color: #5e6b81;
  background-color: transparent;

  border-left: 2px solid white;
  border-bottom: 2px solid white;
}
@media (min-width: 1080px) {
  .card-container.translucent
    .card:is(.equipos, .ensamblaje, .mecanizado, .instalaciones) {
    border-bottom: 0;
  }
  .card-container.translucent .card:is(.confeccion, .equipos) {
    border-left: 0;
  }
}
.card-container.translucent .card:hover {
  background-color: white;
  color: var(--black-700);
  border-color: transparent;
}
.blue-background {
  background: linear-gradient(118deg, #0478e0 13.94%, #0478e000 66.24%);
  backdrop-filter: blur(2px);
}
.orange-background {
  right: 0;
  background: linear-gradient(
    284deg,
    #ff7420 8.73%,
    rgba(255, 116, 32, 0.64) 10.25%,
    rgba(255, 116, 32, 0) 73.9%
  );
  backdrop-filter: blur(2px);
}
.card-container.translucent .card :deep(svg) .shadow {
  opacity: 0;
  transition: var(--default-tw-transition);
}
.card-container.translucent .card:hover :deep(svg) .shadow {
  opacity: 1;
}
.card.confeccion :deep(svg) {
  width: 140px;
  height: 130px;
}
.card.desarrollo :deep(svg) {
  width: 180px;
  height: 110px;
}
.card.electromecanica :deep(svg) {
  width: 170px;
  height: 95px;
}
.card.gestion :deep(svg) {
  width: 160px;
  height: 120px;
}
.card.equipos :deep(svg) {
  width: 160px;
  height: 145px;
  transform: translateX(20px) translateY(20px);
}
.card.ensamblaje :deep(svg) {
  width: 180px;
  height: 120px;
}
.card.mecanizado :deep(svg) {
  width: 190px;
  height: 130px;
}
.card.instalaciones :deep(svg) {
  width: 130px;
  height: 110px;
}
.card-container .card :deep(svg) {
  transform: scale(1.1) translateY(15px);
}
.card.desarrollo h4 {
  font-size: 0.99rem;
}
.card:is(.gestion, .electromecanica) h4 {
  font-size: 1.2rem;
}
.desktop-color-bg.color-animation {
  animation: gray-background 800ms ease-in-out 1;
}
@keyframes gray-background {
  0% {
    background-color: white;
  }
  15%,
  85% {
    background-color: #e9f3ff;
  }
  100% {
    background-color: white;
  }
}
.desktop-color-bg.color-animation::after {
  /* animation */
  content: "";
  display: block;
  position: absolute;
  top: 0px;
  right: 0;
  width: 100%;
  height: 20%;
  animation: color-vertical-movement 500ms ease-in-out 1 forwards 120ms;
}
@keyframes color-vertical-movement {
  from {
    transform: translateY(-120%);
    background: linear-gradient(
      180deg,
      #daeeff 0%,
      #6fbbff 40%,
      #52adff 53.5%,
      #85c5ff 65%,
      #daeeff 100%
    );
  }
  40% {
    background: linear-gradient(
      180deg,
      #daeeff 0%,
      #6fbbff 40%,
      #52adff 53.5%,
      #85c5ff 65%,
      #daeeff 100%
    );
  }
  45% {
    background: linear-gradient(
      180deg,
      #f1f7ff 0%,
      #cee4ff 54.64%,
      #f1f7ff 107.14%
    );
  }
  50% {
    background: linear-gradient(
      180deg,
      #ffede1 0.3%,
      #ffbf99 23.3%,
      #ffab79 51.83%,
      #ffcaab 74.8%,
      #ffede1 100.3%
    );
  }
  to {
    transform: translateY(495%);
    background: linear-gradient(
      180deg,
      #ffede1 0.3%,
      #ffbf99 23.3%,
      #ffab79 51.83%,
      #ffcaab 74.8%,
      #ffede1 100.3%
    );
  }
}
.middle-bg {
  position: absolute;
  display: block;
  top: 0;
  left: 48%;
  width: 5%;
  height: 20%;
}
/* background: linear-gradient(180deg, #F1F7FF 0%, #CEE4FF 54.64%, #F1F7FF 107.14%); */
.tablet-color-bg.blue-animation {
  /* animation */
  animation: blue-background 700ms ease-in-out 1;
}
@keyframes blue-background {
  0% {
    background-color: white;
  }
  15%,
  85% {
    background-color: #daeeff;
  }
  100% {
    background-color: white;
  }
}
.tablet-color-bg.blue-animation::before {
  /* animation */
  content: "";
  display: block;
  position: relative;
  width: 100%;
  height: 50%;
  animation: blue-vertical-movement 500ms ease-in-out 1 forwards 120ms;
}
@keyframes blue-vertical-movement {
  from {
    transform: translateY(-120%);
    background: linear-gradient(
      180deg,
      #daeeff 0%,
      #6fbbff 40%,
      #52adff 53.5%,
      #85c5ff 65%,
      #daeeff 100%
    );
  }
  to {
    transform: translateY(500%);
    background: linear-gradient(
      180deg,
      #daeeff 0%,
      #6fbbff 40%,
      #52adff 53.5%,
      #85c5ff 65%,
      #daeeff 100%
    );
  }
}
.tablet-color-bg.orange-animation {
  /* animation */
  animation: orange-background 700ms ease-in-out 1;
}
@keyframes orange-background {
  0% {
    background-color: white;
  }
  15%,
  85% {
    background-color: #ffd9c2;
  }
  100% {
    background-color: white;
  }
}
.tablet-color-bg.orange-animation::after {
  /* animation */
  content: "";
  display: block;
  position: relative;
  top: -50%;
  width: 10%;
  height: 100%;
  animation: horizontal-movement 400ms ease-in-out 1 forwards 120ms;
}
@keyframes horizontal-movement {
  from {
    transform: translateX(-20%);
    background: linear-gradient(
      270deg,
      #ffd9c2 0.3%,
      #ffbf99 23.3%,
      #ff7320 51.83%,
      #ffcaab 74.8%,
      #ffd9c2 100.3%
    );
  }
  to {
    transform: translateX(1000%);
    background: linear-gradient(
      270deg,
      #ffd9c2 0.3%,
      #ffbf99 23.3%,
      #ff7320 51.83%,
      #ffcaab 74.8%,
      #ffd9c2 100.3%
    );
  }
}
@media (min-width: 768px) and (max-width: 1080px) {
  .card-container {
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(4, 270px);
  }
  .card-container .card {
    gap: 2px;
  }
  .card.confeccion :deep(svg) {
    width: 10vw;
  }
  .card.desarrollo :deep(svg) {
    width: 15vw;
  }
  .card.electromecanica :deep(svg) {
    width: 13vw;
  }
  .card.gestion :deep(svg) {
    width: 13vw;
  }
  .card.equipos :deep(svg) {
    width: 13vw;
    transform: translateX(7px) translateY(20px);
  }
  .card.ensamblaje :deep(svg) {
    width: 12vw;
  }
  .card.mecanizado :deep(svg) {
    width: 10vw;
  }
  .card.instalaciones :deep(svg) {
    width: 10vw;
  }
}

@media (min-width: 1080px) {
  .card-container {
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: repeat(2, 50%);
    height: 100%;
  }
}
@media (max-width: 768px) {
  .card-container {
    grid-template-columns: repeat(1, min(470px, 81.5vw));
    grid-template-rows: repeat(8, 100vh);
  }
  .card-container.translucent .card {
    border-color: transparent;
  }
  .card-container.translucent .card:hover {
    background-color: transparent;
  }
}
@media (max-width: 800px) {
  .blue-background {
    background: linear-gradient(180deg, #0478e0 19.94%, #0478e000 45.24%);
  }
  .orange-background {
    background: linear-gradient(
      300deg,
      #ff7420 -13.27%,
      rgba(255, 116, 32, 0.64) 10.25%,
      rgba(255, 116, 32, 0) 73.9%
    );
  }
  .card h4 {
    opacity: 1;
  }
  .card-container .card :deep(svg) {
    transform: unset;
    transform-origin: unset;
  }
}
@media (max-width: 1160px) {
  .blue-background {
    background: linear-gradient(120deg, #0478e0 3.94%, #0478e000 30.24%);
  }
  .orange-background {
    background: linear-gradient(
      284deg,
      #ff7420 2.73%,
      rgba(255, 116, 32, 0.64) 34.25%,
      rgba(255, 116, 32, 0) 73.9%
    );
  }
}
@media (max-width: 850px) {
  .blue-background {
    background: linear-gradient(120deg, #0478e0 3.94%, #0478e000 30.24%);
  }
  .orange-background {
    background: linear-gradient(
      284deg,
      #ff7420 2.73%,
      rgba(255, 116, 32, 0.64) 34.25%,
      rgba(255, 116, 32, 0) 73.9%
    );
  }
}
.color-background {
  @apply absolute w-full h-full min-[800px]:w-[40%] min-[800px]:h-full z-10 opacity-[0.6];
}
</style>
