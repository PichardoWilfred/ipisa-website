<template>
    <div class="orange-shapes max-[800px]:hidden absolute w-full h-full z-20">
        <!-- small-orange-circle -->
        <svg class="small-orange-circle shape" width="54" height="54" viewBox="0 0 54 54" fill="none">
            <g data-multiplier="1" id="shape-container">
                <circle cx="27" cy="27" r="27" fill="url(#paint0_linear_1251_4454)"/>
                <defs>
                    <linearGradient id="paint0_linear_1251_4454" x1="66" y1="-2.45455" x2="16.3636" y2="40.0909" gradientUnits="userSpaceOnUse">
                        <stop offset="0.00210214" stop-color="#F44900"/>
                        <stop offset="1" stop-color="#FFA462"/>
                    </linearGradient>
                </defs>
            </g>
        </svg>
        <svg class="orange-comet-1 x-shape" width="272" height="14" viewBox="0 0 272 14" fill="none">
            <g data-multiplier="0.6" id="shape-container">
                <path d="M6.99996 6.88963L264.779 6.88961" stroke="url(#paint0_linear_1251_4466)" stroke-width="13.7051" stroke-linecap="round"/>
                <defs>
                    <linearGradient id="paint0_linear_1251_4466" x1="71.4448" y1="71.3345" x2="200.334" y2="-57.5552" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF6000"/>
                        <stop offset="1" stop-color="#FF6000" stop-opacity="0"/>
                    </linearGradient>
                </defs>
            </g>
        </svg>
        <svg class="orange-comet-2 x-shape" width="154" height="14" viewBox="0 0 154 14" fill="none">
            <g data-multiplier="-1" id="shape-container">
                <path d="M7.16752 7.02202L146.717 7.02201" stroke="url(#paint0_linear_1251_4467)" stroke-width="13.7051" stroke-linecap="round"/>
                <defs>
                    <linearGradient id="paint0_linear_1251_4467" x1="42.0549" y1="41.9094" x2="111.83" y2="-27.8654" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF6000"/>
                    <stop offset="1" stop-color="#F07400" stop-opacity="0"/>
                    </linearGradient>
                </defs>
            </g>
        </svg>
        <!-- orange-small-pyramid  -->
        <svg class="orange-small-pyramid shape" width="155" height="116" viewBox="0 0 155 116" fill="none">
            <g data-multiplier="-1.4" id="shape-container">
                <path d="M11.5903 63.861L75.4399 88.4116L107.706 34.2051L11.5903 63.861Z" fill="#FF8B46"/>
                <path d="M107.234 34.1533L75.0905 88.2922L109.938 138.949L107.234 34.1533Z" fill="#FFA571"/>
                <path d="M75.2468 88.2146L110.241 138.929L42.4882 107.907L11.3821 63.6616L75.2468 88.2146Z" fill="#FFD9C2"/>
            </g>
        </svg>
        <!-- big-orange-circle width="148" height="142" -->
        <svg class="big-orange-circle shape" width="182" height="182" viewBox="0 0 182 182" >
            <g data-multiplier="0.8" id="shape-container">
                <circle cx="91" cy="91" r="91" fill="url(#paint0_linear_1251_4455)"/>
                <defs>
                    <linearGradient id="paint0_linear_1251_4455" x1="222.444" y1="-8.27272" x2="11.2346" y2="182" gradientUnits="userSpaceOnUse">
                    <stop offset="0.580901" stop-color="#FF8F5F"/>
                    <stop offset="1" stop-color="#FF4D4D"/>
                </linearGradient>
                </defs>
            </g>
        </svg>
    </div>
</template>
<style scoped>
.x-shape {
    animation: floating-sideways 2.8s ease-in-out infinite;
    overflow: visible;
    
    transition: 900ms cubic-bezier(0.075, 0.82, 0.165, 1);
}
@keyframes floating-sideways {
    0%, 100% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(-15px); /* Adjust the amount of float */
    }
}
.orange-comet-1 {
    @apply absolute right-[-7%] min-[1160px]:right-[12%] bottom-[83%] min-[1160px]:bottom-[40%] h-[360px] w-[360px];
    animation-delay: 40ms;
}
.orange-comet-2 {
    @apply absolute right-[-9%] min-[1160px]:right-[22%] bottom-[70%] min-[1160px]:bottom-[23%] h-[320px] w-[320px];
    animation-delay: 220ms;
}
.orange-small-pyramid {
    @apply absolute min-[1160px]:right-[22%] right-[5%] bottom-[-1%] h-[245px] w-[245px];
    animation-delay: 120ms;
}
.small-orange-circle {
    @apply absolute right-[28%] top-[5%] h-[100px] w-[100px];
    animation-delay: 230ms;
}
.big-orange-circle {
    @apply absolute right-[-230px] min-[1160px]:right-[-30px] min-[1160px]:bottom-[-120px] bottom-[30%] h-[380px] w-[380px];
    animation-delay: 120ms;
}
</style>