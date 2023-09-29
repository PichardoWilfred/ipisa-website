<template>
    <div class="parallax-container">
        <div class="rellax relative top-[-120px] left-[-40px]" data-rellax-percentage="0.3" data-rellax-speed="-8">
            <div class="bubble-background">
                <svg width="398" height="674" viewBox="0 0 598 874" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M597.322 -147.138C597.322 -38.0545 508.893 50.3752 399.809 50.3752C391.949 50.3752 384.196 49.9161 376.576 49.0232C364.462 47.6038 352.663 54.7459 348.438 66.1879C326.831 124.708 280.943 171.466 222.998 194.239C206.985 200.532 199.824 221.422 209.204 235.846C238.228 280.477 255.089 333.744 255.089 390.95C255.089 448.903 237.784 502.815 208.06 547.8C203.764 554.302 203.965 562.819 208.356 569.258V569.258C214.637 578.469 227.829 580.809 238.44 577.39C239.326 577.104 240.225 576.839 241.134 576.595C270.678 568.679 301.044 586.212 308.961 615.755C316.877 645.298 299.344 675.665 269.801 683.581C269.183 683.747 268.565 683.901 267.947 684.044C253.885 687.306 239.31 697.089 236.283 711.203C235.627 714.264 234.89 717.324 234.07 720.381C209.74 811.182 121.482 867.782 30.6962 854.731C25.8141 854.03 20.823 854.742 16.3342 856.786C-21.0901 873.826 -64.4326 878.468 -107.254 866.994C-205.261 840.733 -263.423 739.993 -237.162 641.986C-234.922 633.626 -232.14 625.556 -228.865 617.804C-224.837 608.273 -226.691 597.102 -233.91 589.689C-283.893 538.363 -314.682 468.252 -314.682 390.95C-314.682 251.13 -213.955 134.836 -81.1066 110.673C-64.1758 107.594 -53.883 88.052 -60.3106 72.0889C-70.4819 46.828 -76.0801 19.2343 -76.0801 -9.66691C-76.0801 -130.62 21.972 -228.672 142.925 -228.672C160.445 -228.672 177.484 -226.615 193.814 -222.73C205.678 -219.906 218.157 -225.773 223.692 -236.641C256.334 -300.744 322.944 -344.651 399.809 -344.651C508.893 -344.651 597.322 -256.222 597.322 -147.138Z" fill="#52ADFF"/>
                </svg>     
            </div>
                
        </div>
        <div class="rellax" data-rellax-speed="-4" data-rellax-percentage="0.5">
            <div class="bubble-container one relative left-[40px] top-[50px]">
                <svg width="80" height="80" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="48.1674" cy="48.2817" r="47.9169" fill="#00488D"/>
                </svg>
            </div>
        </div>
        <div class="rellax" data-rellax-speed="-6" data-rellax-percentage="0.5">
            <div class="bubble-container two relative left-[180px] top-[-300px]">
                <svg width="110" height="110" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="74.1488" cy="74.1951" r="73.863" fill="#52ADFF"/>
                </svg>
            </div>
        </div>
        <div class="rellax" data-rellax-speed="-6" data-rellax-percentage="0.5">
            <div class="bubble-container three relative left-[220px] top-[-60px]">
                <svg width="50" height="50" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24.0689" cy="24.4098" r="23.4322" fill="#0478E0"/>
                </svg>
            </div>
        </div>
        <div class="rellax" data-rellax-speed="-6" data-rellax-percentage="0.5">
            <div class="bubble-container four relative left-[320px] top-[-480px]">
                <svg width="42" height="42" viewBox="0 0 82 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40.9132" cy="40.7533" r="40.2146" fill="#B9DEFF"/>
                </svg>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .parallax-container {
        @apply absolute top-0 overflow-hidden w-screen h-[200vh] opacity-[0.3] z-10;
    }
    .bubble-background {
        animation: float-bubble-background 7500ms ease-in-out forwards infinite;
    }
    @keyframes float-bubble-background {
        from {
            transform: translateX(0%);
        } 50% {
            transform: translateX(-1%);
        } to {
            transform: translateX(0%);
        }
    }
    .bubble-container {
        animation: float-bubble ease-in-out forwards infinite;
    }
    .bubble-container.one {
        animation-duration: 2450ms;
    }
    .bubble-container.two {
        animation-duration: 3050ms;
    }
    .bubble-container.three {
        animation-duration: 2800ms;
    }
    .bubble-container.four {
        animation-duration: 1800ms;
    }
    @keyframes float-bubble {
        from {
            transform: translateY(-10px);
        } 50% {
            transform: translateY(0px);
        } to {
            transform: translateY(-10px);
        }
    }
</style>
<script setup>
import Rellax from 'rellax';
onBeforeMount(() => {
    // Start Rellax
    const rellax = new Rellax('.rellax', {
        center:true
    });
    // // Destroy and create again parallax with previous settings
    rellax.refresh();
})
</script>