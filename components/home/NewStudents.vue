<template>
    <section class="students-list px-[5vw] py-[5rem] mt-[70px] pt-[2rem]">
        <div class="mx-auto"></div>
        <h2 class="flex justify-center items-center text-black font-semibold font-raleway text-[1.6rem] sm:text-[2.1rem] lg:text-[3.1rem] cursor-pointer mb-2 lg:mb-4 transition-all">
            <b class="text-blue">Listado </b> <b class="separator mx-3">de</b> <b class="text-orange-300">Admitidos</b>
            <span class="copy-requirements">
                <Icon name="ic:outline-content-copy" class="ms-4 font-bold text-[1.8rem] separator mt-1" />
            </span>
        </h2>
        <p class="text-justify lg:text-center text-[1.2rem] text-black font-medium font-raleway max-w-[900px] mb-10 mx-auto">
            <b>¡Felicidades a todos los estudiantes que han sido admitidos en el centro! </b> Vuestra admisión
            es un paso importante en vuestro viaje educativo y profesional, y estamos emocionados de teneros 
            como parte de <b class="text-blue">nuestra</b> <b class="orange">comunidad.</b> Esperamos que vuestro tiempo con nosotros sea una experiencia enriquecedora 
            y llena de aprendizaje. <b>¡Bienvenidos a la familia de</b> <b class="separator">IPISA!</b>
        </p>

        <div class="table-pagination mobile">
            <button class="pagination-btn" @click.prevent="set_index(0, 'substract')">
                <nuxt-icon name="home/new-students/arrow-table" class="left text-[18px]" filled />
            </button>
            <ul class="pagination">
                <template v-if="show_first_page">
                    <li :class="{ active: 1 === page_index }" 
                    @click.prevent="set_index(1, 'change')">
                        1
                    </li>
                    <li>
                        ...
                    </li>
                </template>
                <li v-for="(page, index_) of pagination" :key="index_" :class="{ active: page === page_index }" 
                @click.prevent="set_index(page, 'change')">
                    {{ page }}
                </li>
                <template v-if="show_last_page">
                    <li>
                        ...
                    </li>
                    <li :class="{ active: last_page === page_index}" 
                    @click.prevent="set_index(last_page, 'change')">
                        {{ last_page }}
                    </li>
                </template>
            </ul>
            <button class="pagination-btn" @click.prevent="set_index(0, 'add')">
                <nuxt-icon name="home/new-students/arrow-table" class="right text-[18px]" filled />
            </button>
        </div>
        <Transition name="fade-fast" mode="out-in">
            <div class="table-container" :key="page_index">
                <ul class="column mx-auto w-full" v-for="(column, index) of columns_" :key="index">
                    <li class="row" v-for="({ name, inner_index }, j) in column" :key="j" :class="{'with-border': index >= 1}">
                        <span class="font-inter mr-3 text-black-600 text-xl">
                            {{ inner_index }}
                        </span>
                        {{ name }}
                    </li>
                </ul>
            </div>
        </Transition>
        <div class="table-pagination">
            <button class="pagination-btn" @click.prevent="set_index(0, 'substract')">
                <nuxt-icon name="home/new-students/arrow-table" class="left text-[18px]" filled />
            </button>
            <ul class="pagination">
                <template v-if="show_first_page">
                    <li :class="{ active: 1 === page_index }" 
                    @click.prevent="set_index(1, 'change')">
                        1
                    </li>
                    <li>
                        ...
                    </li>
                </template>
                <li v-for="(page, index_) of pagination" :key="index_" :class="{ active: page === page_index }" 
                @click.prevent="set_index(page, 'change')">
                    {{ page }}
                </li>
                <template v-if="show_last_page">
                    <li>
                        ...
                    </li>
                    <li :class="{ active: last_page === page_index}" 
                    @click.prevent="set_index(last_page, 'change')">
                        {{ last_page }}
                    </li>
                </template>
            </ul>
            <button class="pagination-btn" @click.prevent="set_index(0, 'add')">
                <nuxt-icon name="home/new-students/arrow-table" class="right text-[18px]" filled />
            </button>
        </div>
        
    </section>
</template>
<script setup>
    const list_ = ref([ // List example of new students.
        //1
        "Juan Carlos Pérez",
        "Ana María Rodríguez Sánchez",
        "Manuel Antonio García",
        "Maria Isabel Martínez",
        "Luis Miguel Hernández Guzmán",
        "Carmen Julia Sánchez Pérez",
        "Antonio José Ramírez Ortiz",
        "Rosa Mercedes Díaz",
        "Ramón Andrés Rodríguez",
        "Isabel Francisca Pérez Santana",
        "Pedro Alejandro López",
        "Yolanda Elizabeth Ramírez Fernández",
        "Rafael Eduardo Jiménez",
        "Margarita Elisa Guerrero Cordero",
        "José Manuel Santos Rosario",
        "Juana de la Cruz Reyes",
        "Fernando Andrés Castillo Valdez",
        
        "Altagracia Josefina Fernández Núñez",
        "Miguel Ángel Medina García",
        "Mercedes Inés Díaz Marte",
        "Guillermo José López Santos",
        "Francisca Rosario Suero Almonte",
        "Carlos Enrique García Rosario",
        "Matilde Dolores Pérez",
        "Eduardo Antonio Santos Polanco",
        "Beatriz Margarita Almonte Rosario",
        "Francisco Antonio Pérez Medina",
        "Belkis Cristina Santana",
        "Alejandro José Rodríguez Castillo",
        "Teresa Inmaculada Cruz Núñez",
        "Joaquín Manuel Guzmán",
        "Inés Aurora Díaz Hernández",
        "Javier Fernando De La Cruz",
        "Rosario Mercedes López Martínez",
        
        "Felipe Juan Díaz",
        "Adriana Alejandra Rodríguez",
        "Ignacio Alberto Sánchez",
        "Esperanza Eugenia López Pérez",
        "Fernando Emilio Ortiz",
        "Silvia Elena Suero",
        "Manuel Francisco Santana Rodríguez",
        "Victoria Eugenia Pérez",
        "Luis Roberto Castillo",
        "Laura Patricia Jiménez",
        "Roberto Antonio Guzmán López",
        "Catalina María Martínez",
        "Pedro José Rodríguez",
        "Rosa María Almonte",
        "Carlos Ernesto García",
        "Adela Josefina Santana",
        "Marcos Antonio Pérez",
        //2
        "Diana Carolina Rodríguez",
        "Ismael Rafael Ramírez",
        "Esther Rosario Cruz",
        "Diego Alejandro López",
        "Marta Inés Suero",
        "Marcelino Esteban Sánchez",
        "Miriam Elizabeth Fernández",
        "José Antonio Pérez Santana",
        "Ana Dolores Rodríguez",
        "Ramón Emilio Sánchez Castillo",
        "Isabel Cristina Guerrero",
        "Joaquín Enrique Díaz",
        "Rosario De La Cruz",
        "Luis Alberto Guzmán",
        "Catalina Mercedes Ortiz",
        "Rafael Antonio Santana López",
        "Elena Inmaculada Pérez",
        
        "Felipe Francisco Jiménez",
        "Diana Margarita Almonte",
        "Miguel Ángel López Sánchez",
        "Teresa Josefina García",
        "Manuel Alejandro Santos",
        "Lucía Isabel Rodríguez",
        "Juan Carlos Pérez Jiménez",
        "María Francisca Sánchez",
        "Pedro Miguel Santana",
        "Rosa María López Guzmán",
        "Luis Antonio Martínez",
        "Ana Inés Rodríguez Pérez",
        "Joaquín Alejandro Díaz",
        "Margarita Inmaculada Suero",
        "Rafael Emilio Castillo",
        "Eva Catalina Guerrero",
        "Ignacio José Ramírez",
        
        "Esperanza María De La Cruz",
        "Carlos Eduardo Almonte",
        "Carmen Luisa Ortiz",
        "Juan Manuel García Santana",
        "Adela Margarita Pérez",
        "Fernando Emilio Guzmán",
        "Laura Carolina Santana",
        "Manuel Alejandro Díaz",
        "Antonia Inés López",
        "Miguel Ángel Guerrero Pérez",
        "Fátima Elena Martínez",
        "José Francisco Ramírez Santana",
        "María Luisa De La Cruz",
        "Luis Alberto Castillo Sánchez",
        "Eva Inés Rodríguez",
        "José Antonio Sánchez García",
        "Rosa María Almonte Pérez",
        //3
        "Roberto Carlos Jiménez",
        "Isabel Luisa Díaz",
        "Diego Antonio Santos López",
        "Ana Carolina Guerrero",
        "Rafael Andrés Ortiz Santana",
        "Elena María Pérez",
        "Manuel Alejandro García De La Cruz",
        "Mercedes Inés Martínez",
        "Miguel Ángel López Rodríguez",
        "Eva Francisca Guerrero Santana",
        "Luciano Antonio Ramírez",
        "Juana Margarita Castillo",
        "Fernando Emilio Sánchez Martínez",
        "Rosa María Pérez López",
        "Joaquín Andrés Rodríguez De La Cruz",
        "Carmen Inés Almonte",
        "Antonio José Díaz Santana",
        
        "Sofía Cristina Ortiz",
        "Manuel Alejandro Guzmán Pérez",
        "María Isabel García",
        "Luis Antonio Santana",
        "Margarita Inés Martínez Sánchez",
        "José Eduardo Guerrero Rodríguez",
        "Luz María Castillo Pérez",
        "Rafael Alejandro Ramírez Santana",
        "Catalina Isabel López",
        "Diego José Ortiz Guerrero",
        "Teresa Margarita Pérez De La Cruz",
        "Joaquín Andrés Sánchez",
        "Isabel María De La Cruz Santana",
        "Juan Carlos García Jiménez",
        "Ana Inés Guerrero López",
        "Fernando Antonio Rodríguez",
        "Margarita Isabel Martínez Santana",
        
        "Manuel Alejandro Ramírez López",
        "Lucía Inmaculada Almonte",
        "Roberto Antonio Pérez Santana",
        "Ana Cristina De La Cruz Martínez",
        "Miguel Ángel Ortiz Jiménez",
        "Sofía Luisa García López",
        "José Antonio Guerrero Ramírez",
        "María Luisa Pérez Santana",
        "Luis Eduardo Sánchez López",
        "Elena Margarita Castillo",
        "Juan Carlos Martínez Jiménez",
        "Teresa Inés Santana Guerrero",
        "Luis Francisco De La Cruz Pérez",
        "Ana María Sánchez Martínez",
        "Roberto Antonio Ramírez Jiménez",
        "Fernando Emilio Guerrero Santana",
        "Rosa María Pérez López",
        //
        "Margarita Isabel López Santana",
        "Joaquín Alejandro Castillo",
        "Eva María Guerrero De La Cruz",
        "Manuel Antonio Ortiz Sánchez",
        "Lucía Carolina Pérez Jiménez",
        "Miguel Ángel Santana Martínez",
        "Luis Eduardo Ramírez López",
        "Teresa Inés Guerrero Santana",
        "Carlos Enrique García Jiménez",
        "Isabel María Martínez Santana",
        "Diego Antonio De La Cruz Sánchez",
        "Ana Luisa Pérez Jiménez",
        "José Antonio López",
        "Carmen Inés Ramírez Santana",
        "Rafael Emilio Martínez Jiménez",
        "Sofía Margarita Sánchez",
        "Manuel Alejandro Castillo Santana",
        "Fátima Luisa Guerrero Jiménez",
        "Juana María Pérez López",
        "Ignacio José Ortiz",
        "Luz María De La Cruz Santana",
        "Joaquín Alejandro Pérez Jiménez",
        "Ana Margarita López Santana",
        "Fernando Emilio Sánchez Jiménez",
        "Margarita Isabel Ramírez Santana",
        "Luis Francisco Guerrero",
        "María Inmaculada Martínez López",
        "Rafael Antonio López Santana",
        "Isabel Cristina De La Cruz Guerrero",
        "Carlos Eduardo Sánchez Jiménez",
        "Lucía Isabel Ramírez Santana",
        "Antonio José Guerrero",
        "Teresa Inmaculada De La Cruz",
        "Juan Carlos Sánchez López",
        "Ana Cristina Martínez Santana",
        "Roberto Antonio Guerrero Jiménez",
        "Eva Inmaculada Pérez Santana",
        "Manuel Francisco Ortiz López",
        "Sofía Luisa De La Cruz Santana",
        "Miguel Ángel Guerrero Jiménez",
        "Margarita Isabel Sánchez Santana",
        "Luis Eduardo Pérez López",
        "Rosa María De La Cruz Guerrero",
        "José Antonio Castillo Jiménez",
        "Carmen Margarita Ramírez Santana",
        "Carlos Enrique Ortiz López",
        "Ana Luisa Guerrero Jiménez",
        "Fernando Antonio Sánchez Santana",
        "María Isabel De La Cruz",
        "Diego Alejandro Pérez López",
        "Sofía Cristina Guerrero Santana",
        "Manuel Alejandro Ramírez Santana",
        "Teresa Margarita Sánchez López",
        "José Eduardo De La Cruz Jiménez",
        "Luz María Guerrero Santana",
        "Lucía Inmaculada Ortiz López",
        "Juan Carlos Guerrero Jiménez",
        "Rafael Alejandro Pérez Santana",
        "Fátima Elena Sánchez López",
        "Ana Margarita De La Cruz Jiménez",
        "Miguel Ángel Ortiz Santana",
        "Joaquín Andrés Guerrero López",
        "Sofía Margarita Ramírez Santana",
        "Luis Francisco Ortiz López",
        "Roberto Antonio Guerrero Santana",
        "María Inmaculada De La Cruz Jiménez",
        "Rafael Antonio Ortiz López",
        "Isabel Cristina Guerrero Santana",
        "Carlos Eduardo Pérez Santana",
        "Lucía Isabel Sánchez López",
        "Antonio José Ortiz López",
        "Teresa Inmaculada Guerrero Santana",
        "Juan Carlos Guerrero Santana",
        "Eva Inmaculada Ortiz López",
        "Roberto Antonio Pérez López",
        "Ana Cristina Guerrero Santana",
        "Diego Antonio Guerrero Santana",
        "María Inmaculada Guerrero Santana",
        "Luis Eduardo Guerrero Santana",
        "Rafael Alejandro Guerrero Santana",
        "Fátima Elena Guerrero Santana",
        "Sofía Margarita Guerrero Santana",
        "Roberto Antonio Ortiz Santana",
        "Isabel Cristina Guerrero Santana",
        "Carlos Eduardo Guerrero Santana",

        "Teresa Inmaculada Guerrero Santana"
    ]);
    const columns_ = ref([0, 0, 0]); //The array that we are going to populate.
    let viewport = () => { // getting the actual view_port
            let viewport_;
            const display = {
                xl: window.matchMedia("(min-width: 1400px)").matches,
                lg: window.matchMedia("(min-width: 1200px)").matches,
                md: window.matchMedia("(min-width: 768px)").matches,
                mobile: true,
            }
            // 
            let entries = Object.entries(display);
            for (let index = 0; index < entries.length; index++) {
                const property = entries[index][0];
                if (display[property]) {
                    viewport_ = property;
                    break;
                }
            }
            return viewport_;
    };

    let available_columns = () => { // getting the array size in question
        let visible_columns_;
        switch (viewport()) {
            case 'xl':
                visible_columns_ = [0, 0, 0];
                break;
            case 'lg':
                visible_columns_ = [0, 0];
                break;
            case 'md':
                visible_columns_ = [0, 0];
                break;
            default:
                visible_columns_ = [0];
                break;
        }
        return visible_columns_;
    };
    const column_limit = ref(0);
    const set_columns = () => {
        let starting = (row_limit.value * column_limit.value * page_index.value) - (column_limit.value * row_limit.value);
        let limit = starting + row_limit.value;

        let inner_index = starting + 1; // asigning the indexes within
        for (let i = 0; i < column_limit.value; i++) { // getting the values out of the list
            let column = [];
            for (let j = starting; j < limit; j++) {
                column.push( { inner_index, name: list_.value[j] } );
                inner_index++;
            }
            columns_.value[i] = column;

            starting = limit; // set the start.
            limit = (limit + row_limit.value); // set the limits.
        }
    }

    const row_limit = ref(17); // amounts of allowed rows.

    // const pagination_limit = ref(3);
    const page_index = ref(1);

    const first_page = ref(0); 
    const last_page = ref(0); //maximun of pages that a set of students can have (re-defined on set_columns)

    const pagination = ref([]);

    const show_last_page = ref(false);
    const show_first_page = ref(false);

    const set_index = ( new_index, type = 'change' ) => { // index
        switch (type) {
            case 'change':
                page_index.value = new_index;
                break;
            case 'dots-backwards':
                break;
            case 'dots-forwards':
                console.log(number); 
                break;
            case 'substract':
                page_index.value = (page_index.value > 1) ? page_index.value - 1 : last_page.value;
                break;
            case 'add':
                page_index.value = (page_index.value + 1) <= last_page.value ? page_index.value + 1:1;
                break;
            default:
                break;
        }
    }
    
    watch(page_index, (new_page_index, old_page_index) => {
        set_columns();
        if (pagination.value.length >= 7) return;
        const largest_value = pagination.value[pagination.value.length - 1];
        const smallest_value = pagination.value[0];

        let starting_value = largest_value;
         // check if its larger or smaller.
        if (new_page_index > old_page_index) { //the index increased in value
            if (new_page_index > largest_value) { // need a new pages group
                if (new_page_index === last_page.value) { // if went directly to the last one
                    starting_value = last_page.value - 3;
                    for (let index = 0; index < pagination.value.length; index++) {
                        pagination.value[index] = starting_value + (index + 1);
                    }
                    show_last_page.value = false;
                    show_first_page.value = true;
                    return;
                }
                if (!show_first_page.value) show_first_page.value = true; // if we haven't pass the first set

                if ((smallest_value + 6) >= last_page.value) { // if we are approaching the last page
                    starting_value = last_page.value - 3;
                    show_last_page.value = false;
                }
                for (let index = 0; index < pagination.value.length; index++) { //asigning the new values
                    pagination.value[index] = starting_value + (index + 1);
                }

                if ( pagination.value.indexOf(new_page_index) === -1 ) { // In case the index is not inside the pagination array
                    pagination.value.unshift((pagination.value[0] - 1));
                }
            }
        }else {
            const create_first_page = () => {
                show_first_page.value = false;
                show_last_page.value = true;
                for (let index = 0; index < 3; index++) {
                    pagination.value[index] = (index + 1);
                }
                if (pagination.value.length >= 4) pagination.value.pop();
            }
            if (new_page_index === 1) { // went to the first one
                create_first_page();
                return;
            }
            if (smallest_value > new_page_index) { //we needing a new group
                const starting_value = smallest_value - 3;
                
                if (starting_value <= 1) {
                    create_first_page();
                    return;
                };
                
                for (let index = 0; index < 3; index++) {
                    pagination.value[index] = starting_value + index;
                }
                show_first_page.value = true;
                show_last_page.value = true;
            }
        }
    });
    
    onMounted(() => {
        columns_.value = available_columns() || [0, 0, 0]; // setting the amount of columns visible depeding on the viewport 
        column_limit.value = columns_.value.length;
        last_page.value = Math.ceil(list_.value.length / (row_limit.value * column_limit.value)); // setting the amount of pages
        Array.from( Array(last_page.value).keys() ).map((_, index) => { //setting the initial value of the pagination elements
            pagination.value.push((index + 1));
        });
        // first_page.value = pagination[0];
        set_columns();
        if (pagination.value.length >= 7) {
            show_last_page.value = true; //show last and first option
            pagination.value = [];
            for (let index = 1; index <= 3; index++) {
                pagination.value.push(index);
            }
        }
        
    });

</script>
<style scoped>

.table-container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    justify-items: center;
    @apply overflow-hidden rounded-xl;
}

@media (min-width: 768px) {
    .table-container {
        grid-template-columns: repeat(1, 1fr);
    }
}
@media (min-width: 1200px) {
    .table-container {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (min-width: 1400px) {
    .table-container {
        grid-template-columns: repeat(3, 1fr);
    }
}
.table-container ul.column {
    @apply overflow-hidden;
}
.table-container ul.column li.row {
    @apply overflow-hidden font-raleway font-bold text-black py-3 px-3 odd:bg-white-200 border-b border-black-500;
}
.table-container ul.column li.row {
    @apply last:border-[0px];
}
.table-container ul.column li.row.with-border {
    @apply border-l border-black-500;
}
.table-pagination {
    @apply flex justify-center items-center mt-6;
}
.table-pagination.mobile {
    @apply lg:hidden mt-0 mb-5;
}
.table-pagination .pagination {
    @apply flex mx-auto lg:mx-3;
}
.table-pagination .pagination li {
    @apply font-inter cursor-pointer flex items-center justify-center font-bold me-1 lg:me-2 last:me-0 text-[18px] text-black-600 w-[38px] h-[38px] rounded-full hover:bg-white-200;
}
.table-pagination .pagination li.active {
    @apply  text-black-700 bg-white-200;
}
.pagination-btn {
    @apply flex items-center justify-center cursor-pointer w-[35px] h-[35px] font-raleway text-[4rem] text-black font-bold hover:bg-white-200 rounded-full transition-all;
}
.pagination-btn .left {
    @apply ps-[2px];
    transform: rotate(180deg) translateY(1.5px);
    transform-origin: center;
}

.pagination-btn .right {
    transform:translateY(.5px);
}
</style>