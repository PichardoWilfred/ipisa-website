<template>
    <div class="blue-shapes absolute w-full h-full z-20">
        <!-- blue-rectangular-cube-outline -->
        <svg class="blue-rectangular-cube-outline shape" viewBox="0 0 248 118" fill="none">
            <path opacity="0.5" d="M178.884 9.7057L3.71663 216.562C3.37843 216.961 3.40536 217.554 3.77838 217.921L20.4824 234.358M178.884 9.7057L201.508 3.64385C201.853 3.55118 202.222 3.65048 202.475 3.9042L221.189 22.6992M178.884 9.7057L197.699 26.4052M221.189 22.6992L52.6663 232.703C52.4855 232.928 52.2159 233.064 51.9272 233.076L20.4824 234.358M221.189 22.6992L197.699 26.4052M20.4824 234.358L197.699 26.4052" stroke="#0478E0" stroke-width="5.3" stroke-linecap="round"/>
        </svg>
        <!-- blue circle small -->
        <svg class="blue-circle-small shape" viewBox="0 0 82 82" width="82" height="82" fill="none">
            <circle cx="41" cy="41" r="41" fill="url(#paint0_linear_1251_4453)"/>
            <defs>
                <linearGradient id="paint0_linear_1251_4453" x1="11.2137" y1="17.8718" x2="75.6923" y2="70.0855" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4FC0FF"/>
                    <stop offset="1" stop-color="#0060B7"/>
                </linearGradient>
            </defs>
        </svg>
        <!-- blue cube -->
        <svg class="blue-cube shape" viewBox="0 0 165 170" fill="none">
            <path d="M142.628 0L119.789 30.2966L143.56 142.161L165 109.534L142.628 0Z" fill="#307DC2"/>
            <path d="M24.2373 25.6356L0 52.6695L119.788 30.2966L142.627 0L24.2373 25.6356Z" fill="#70B5F3"/>
            <path d="M119.712 30.2966L0 52.5015L25.2779 169.195L143.559 141.793L119.712 30.2966Z" fill="#98CEFF"/>
        </svg>
        <!-- big blue circle -->
        <svg class="big-blue-circle shape" viewBox="0 0 248 118" fill="none">
            <circle cx="124" cy="124" r="124" fill="url(#paint0_linear_1251_4456)"/>
            <defs>
                <linearGradient id="paint0_linear_1251_4456" x1="12.7477" y1="29.5514" x2="322.168" y2="193.533" gradientUnits="userSpaceOnUse">
                    <stop offset="0.265625" stop-color="#5EB1FF"/>
                    <stop offset="0.84198" stop-color="#005DB3"/>
                    <stop offset="1" stop-color="#006FD3"/>
                </linearGradient>
            </defs>
        </svg>
    </div>
</template>
<style scoped>
    .blue-circle-small {
        @apply absolute left-[28%] top-[5%] h-[150px] w-[150px];
        animation-delay: 510ms;
    }   
    .blue-cube {
        @apply absolute left-[8%] bottom-[35%] h-[310px];
        animation-delay: 100ms;
    } 
    .big-blue-circle {
        @apply absolute bottom-[-120px] left-[7%] h-[420px] w-[420px];
        animation-delay: 200ms;
    }
    .blue-rectangular-cube-outline {
        @apply absolute left-[21%] bottom-[-100px] h-[190px];
        animation-delay: 400ms;
    }

</style>