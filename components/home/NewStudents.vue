<template>
    <section class="students-list px-[5vw] py-[5rem] mt-[70px] pt-[2rem]">
        <div class="mx-auto"></div>
        <h2 class="flex lg:justify-center items-center text-black font-raleway text-[1.6rem] sm:text-[2.1rem] lg:text-[3.1rem] cursor-pointer mb-2 lg:mb-4 transition-all">
            <b class="text-blue">Listado </b> <b class="separator mx-3">de</b> <b class="text-orange-300">Admitidos</b>
            <span class="copy-requirements">
                <Icon name="ic:outline-content-copy" class="ms-4 font-bold text-[1.8rem] separator mt-1" />
            </span>
        </h2>
        <p class="text-justify lg:text-center text-[1.1rem] text-black font-medium font-raleway max-sm:leading-7 max-w-[900px] mb-10 mx-auto">
            <b>¡Felicidades a todos los estudiantes que han sido admitidos en el centro! </b> Vuestra admisión
            es un paso importante en vuestro viaje educativo y profesional, y estamos emocionados de teneros 
            como parte de <b class="text-blue">nuestra</b> <b class="orange">comunidad.</b> Esperamos que vuestro tiempo con nosotros sea una experiencia enriquecedora 
            y llena de aprendizaje. <b>¡Bienvenidos a la familia de</b> <b class="separator">IPISA!</b>
        </p>

        <div class="table-pagination mobile" :class="{disabled: search_by === 'number'}">
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
        <div class="table-header">
            <div class="flex items-end justify-end min-h-[42px] w-full sm:max-w-[320px]">
                <span class="font-raleway font-medium text-[12px] text-black mb-1 transition-all" 
                :class="{'text-orange-300': search_by_error}">
                    {{ search_by_error_label }}
                </span>
            </div>
            <div class="input-container" :class="{'error': search_by_error}" >
                <icon name="fe:search" filled size="24px" class="search-icon text-black-500 me-2 transition-all" />
                
                <Transition name="fade-fast-2" mode="out-in">
                    <input v-if="search_by === 'name'" type="text" class="search" v-model="search_by_name" @input="only_letters"
                    placeholder="Buscar por nombre" pattern="[A-Za-z]+" />
                    <input v-else-if="search_by === 'number'" type="number" class="search" v-model="search_by_number" @keydown="only_numbers"
                    placeholder="Buscar por número" />
                </Transition>
                
                <button class="search" @click.prevent="toggle_search_by()">
                    <Transition name="fade-fast-2" mode="out-in">
                        <icon v-if="search_by === 'name'" name="mdi:format-letter-case" filled size="24px" class="duration-75" :class="{'error': search_by_error}" />
                        <icon v-else-if="search_by === 'number'" name="tabler:list-numbers" filled size="24px" class="duration-75" :class="{'error': search_by_error}" />
                    </Transition>
                </button>

            </div>
        </div>
        <Transition name="fade-fast" mode="out-in">
            <div class="table-container" :key="page_index">
                <ul class="column mx-auto w-full" v-for="(column, index) of columns_" :key="index">
                    <li class="row" v-for="({ name, list_index }, j) in column" :key="j" :class="{'with-border': index >= 1}">
                        <span class="flex justify-center min-w-[40px] font-inter mr-3 text-black-600 text-xl">
                            {{ (list_index > 0) ? list_index: '‎'}}
                        </span>
                        <span>
                            {{ name }}
                        </span>
                    </li>
                </ul>
            </div>
        </Transition>
        <div class="table-pagination" :class="{disabled: search_by === 'number'}">
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
                    <li :class="{ active: last_page === page_index }" 
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
        // //1
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

    const search_by_number = ref(null);
    const search_by_name = ref('');

    const search_by = ref('name');

    const search_by_error = ref(false);
    // const show_search_by_error = ref(false);
    const search_by_error_label = ref(''); 
    let error_timeout;

    const trigger_error = (type) => {
        const labels = {
            number: "Porfavor, ingrese un número válido",
            letters: 'Porfavor, ingrese un caracter válido'
        }
        search_by_error_label.value = labels[type];
        
        clearTimeout(error_timeout);
        search_by_error.value = true;
        error_timeout = setTimeout(() => {
            search_by_error.value = false;
        }, 500);
    } 
    
    const only_letters = (event) => {
        const only_letters = /[^A-Za-z\s]/g;
        const typed_content = event.target.value;
        if (only_letters.test(typed_content)) {
            trigger_error('letters')
        } else {
            search_by_error_label.value = "";
        };

        search_by_name.value = typed_content.replace(only_letters, ''); // Replace non-letter characters with an empty string
    }
    const only_numbers = (event) => {
        const typed_content = event.target.value;
        const keyCode = event.keyCode || event.which;
                            // Numbers                           // Numeric keypad                   // Backspace      // Delete         // Left arrow     // Right arrow
        const is_number = !((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105) || keyCode === 8 || keyCode === 46 || keyCode === 37 || keyCode === 39) // onkeydown="return event.keyCode !== 69"
        // Check for non-numeric keys excluding special keys
        if (is_number) {
            event.preventDefault(); // Prevent default action (i.e., prevent entering non-numeric input)
            trigger_error('number');
        }else {
            search_by_error_label.value = "";
        }
    }

    const found_number = ref(null);

    const filtered_list = computed(() => {
        let filtered_ = [];
        if (search_by.value === 'name') { // numbers
            filtered_ = list_.value.filter(item => 
                item.toLowerCase().includes(search_by_name.value.toLowerCase())
            );
        }

        if(search_by.value === 'number') { // names
            if (search_by_number.value) {
                let result = '';
                list_.value.map((_, index_) => {
                    if (search_by_number.value === (index_ + 1) ) {
                        result = list_.value[index_];
                        found_number.value = index_ + 1;
                    }
                });
                filtered_.push(result);
            }else {
                filtered_ = list_.value;
            }
        }
        
        return filtered_;
    });
    
    watch(search_by_name, (value) => {
        page_index.value = 1;
        set_pagination();
    });

    watch(search_by_number, () => {
        page_index.value = 1;
        set_pagination();
    });

    const toggle_search_by = () => { //change filter to
        if (search_by.value === 'name') { // numbers
            search_by.value = 'number';
        }else if(search_by.value === 'number') { // names
            search_by.value = 'name';
        }

        search_by_number.value = null;
        search_by_name.value = '';
        page_index.value = 1;
    }

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
        
        let list_index = (search_by.value === 'number' && search_by_number.value) ? found_number.value : (starting + 1);

        for (let i = 0; i < column_limit.value; i++) { // getting the values out of the list
            let column = [];
            for (let j = starting; j < limit; j++) {
                if (search_by_number.value) { //number filter
                    column.push( { list_index: ((filtered_list.value[0] === filtered_list.value[j]) ? list_index : 0), name: filtered_list.value[j] } ); // only add the found one
                } else if (search_by_name.value !== '') { //name filter
                    column.push( { list_index: (list_.value.indexOf(filtered_list.value[j]) + 1), name: filtered_list.value[j] } );
                } else {
                    column.push( { list_index, name: filtered_list.value[j] } );
                    list_index++;
                }
            }
            columns_.value[i] = column;

            starting = limit; // set the start.
            limit = (limit + row_limit.value); // set the limits.
        }
    }

    const row_limit = ref(17); // amounts of allowed rows.

    const page_index = ref(1);

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
        if (last_page.value >= 7) {
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
            }else { // the index decreased in value
                const create_first_page = () => {
                    show_first_page.value = false;
                    show_last_page.value = true;
                    for (let index = 0; index < pagination.value.length; index++) {
                        pagination.value[index] = (index + 1);
                    }
                    if (pagination.value.length >= 4) pagination.value.pop(); // if we have added an aditional page before we need to get rid of it
                    // in case there's not many pages?
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
        };
    });
    
    const set_pagination = () => {
        columns_.value = available_columns() || [0, 0, 0]; // setting the amount of columns visible depeding on the viewport 
        column_limit.value = columns_.value.length;
        last_page.value = Math.ceil(filtered_list.value.length / (row_limit.value * column_limit.value)); // setting the amount of pages
        
        pagination.value = [];
        Array.from( Array(last_page.value).keys() ).map((_, index) => { //setting the initial value of the pagination elements
            pagination.value.push((index + 1));
        });
        set_columns();
        if (pagination.value.length >= 7) {
            show_last_page.value = true; //show last and first option
            pagination.value = [];
            for (let index = 1; index <= 3; index++) {
                pagination.value.push(index);
            }
        }else {
            show_last_page.value = false;
            show_first_page.value = false;
        }
    }
    onMounted(() => {
        set_pagination();
    });
    onBeforeUnmount(() => {
        clearTimeout(error_timeout);
    })
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
/*  */
.table-header {
    @apply flex flex-col items-end mb-4;
}
.table-header .input-container {
    @apply flex items-center border-2 border-black-500 ps-2 py-1 max-md:mb-4 rounded-md w-full sm:max-w-[320px] min-h-[42px] transition-all;
}
.table-header .input-container.error {
    @apply border-orange-200;
}
.table-header .input-container.error .search-icon{
    @apply text-orange-300;
}
.table-header .input-container input.search {
    @apply text-base text-black font-semibold font-raleway grow
    placeholder:text-[15px] placeholder:text-[#AABDD8];
}
.table-header .input-container.error input.search {
    @apply text-orange-300 placeholder:text-orange-100;
}
.table-header .input-container button.search {
    @apply flex items-center hover:bg-[#CEE3FF80] active:bg-[#CEE3FF80] rounded-full p-1 me-1 text-black transition-all;
}
.table-header .input-container button.search :deep(svg path) {
    @apply transition-all delay-75;
}
.table-header .input-container button.search :deep(svg.error path) {
    fill: #FF8B46;
    stroke: #FF8B46;
}
.table-header .input-container input.search:is(:focus, :focus-within, :focus-visible) {
    @apply outline-none;
}

.table-container ul.column {
    @apply overflow-hidden;
}
.table-container ul.column li.row {
    @apply flex overflow-hidden font-raleway font-[600] text-black py-3 px-3 odd:bg-white-200 border-b border-black-500;
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
.table-pagination.disabled {
    opacity: 0.3;
    pointer-events: none;
}
.table-pagination.mobile {
    @apply lg:hidden mt-0;
}
.table-pagination .pagination {
    @apply flex mx-auto lg:mx-3;
}
.table-pagination .pagination li {
    @apply font-inter cursor-pointer flex items-center justify-center font-bold me-1 lg:me-2 last:me-0 text-[18px] text-black-600 w-[34px] h-[34px] lg:w-[38px] lg:h-[38px] rounded-full hover:bg-white-200;
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
input[type=number] {
    -moz-appearance: textfield; /* Firefox */
}
</style>