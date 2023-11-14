<template>
    <div :class="{ 'fixed z-10': props.scrolled}" class="w-full bg-white border-b-[1px] border-solid border-[#E6E7E8]">
        <div class="w-full flex justify-evenly gap-14 h-[80px] pt-2 xl:justify-between px-8 sm:gap-2 sm:px-1 sm:justify-between">
            <NuxtLink to="/" class="w-[152px] h-[48px] bg-[#E8F0F9] mt-2 text-center items-center">
                <p class="text-2xl text-[#01000E] font-bold p-1">LOGO</p>
            </NuxtLink>
            <div class="mt-2 w-[470px] sm:hidden lg:hidden flex items-center" :class="{ ' lg:hidden': !menu}">
                <ul class="menu flex gap-2 justify-start sm:hidden items-center">
                    <NuxtLink @click="closeMenu" to="/tours" class="text-[16px] text-primaryGrey p-2 whitespace-nowrap cursor-pointer hover:text-primaryBlue hover:duration-300">Tours</NuxtLink>
                    <NuxtLink @click="closeMenu" to="/hotels" class="text-[16px] text-primaryGrey p-2 whitespace-nowrap cursor-pointer hover:text-primaryBlue hover:duration-300">Hotels</NuxtLink>
                    <NuxtLink @click="closeMenu" to="/transfer" class="text-[16px] text-primaryGrey p-2 whitespace-nowrap cursor-pointer hover:text-primaryBlue hover:duration-300">Transfer</NuxtLink>
                    <NuxtLink @click="closeMenu" to="/outgoings"  class="text-[16px] text-primaryGrey p-2 whitespace-nowrap cursor-pointer hover:text-primaryBlue hover:duration-300">Outgoing tours</NuxtLink>
                    <NuxtLink @click="closeMenu" to="/contact" class="text-[16px] text-primaryGrey p-2 whitespace-nowrap cursor-pointer hover:text-primaryBlue hover:duration-300">Contact us</NuxtLink>
                </ul>
            </div>
            <div class="flex flex-row md:justify-between items-center gap-4">
                <div @click="openCart = !openCart" class="cursor-pointer relative">
                    <div class="bg-[#E8F0F9] rounded-lg p-3 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M22.377 8.868L20.2342 16.368C19.9597 17.3287 19.0702 18 18.0705 18H8.787C7.66875 18 6.73425 17.1975 6.56325 16.0928L5.25825 6.86175L4.719 3.627C4.659 3.26325 4.34775 3 3.9795 3H2.25C1.83525 3 1.5 2.664 1.5 2.25C1.5 1.836 1.83525 1.5 2.25 1.5H3.9795C5.085 1.5 6.018 2.29125 6.19875 3.38025L6.63525 6H20.2125C20.925 6 21.579 6.32625 22.0087 6.89475C22.4377 7.46325 22.572 8.1825 22.377 8.868ZM9 19.5C8.17125 19.5 7.5 20.1712 7.5 21C7.5 21.8288 8.17125 22.5 9 22.5C9.82875 22.5 10.5 21.8288 10.5 21C10.5 20.1712 9.82875 19.5 9 19.5ZM18 19.5C17.1713 19.5 16.5 20.1712 16.5 21C16.5 21.8288 17.1713 22.5 18 22.5C18.8288 22.5 19.5 21.8288 19.5 21C19.5 20.1712 18.8288 19.5 18 19.5Z" fill="#1467C2"/>
                        </svg>
                    </div>
                    <div class="absolute bottom-8 left-8">
                        <div class=" rounded-full bg-[#088C53] text-white p-2 w-6 h-6 flex items-center">{{ transfers.length + tours.length }}</div>
                    </div>
                </div>
                <div class="cursor-pointer h-6">
                    <Transition name="rotate" mode="out-in">
                        <svg v-if="!menu" @click="toggleMenu" class="mx-2 hidden lg:block rotate" :class="{ 'sm:hidden': menu }" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path  fill-rule="evenodd" clip-rule="evenodd" d="M3.21582 6.50977H20.7845C21.4548 6.50977 22 6.06133 22 5.50988C22 4.95844 21.4548 4.50977 20.7845 4.50977H3.21582C2.54544 4.50977 2 4.95844 2 5.50988C2 6.06133 2.54544 6.50977 3.21582 6.50977ZM20.7845 10.7842H3.21582C2.54544 10.7842 2 11.2329 2 11.7843C2 12.3357 2.54544 12.7842 3.21582 12.7842H20.7845C21.4548 12.7842 22 12.3357 22 11.7843C22 11.2329 21.4548 10.7842 20.7845 10.7842ZM3.21582 17.0586H20.7845C21.4549 17.0586 22 17.5074 22 18.0588C22 18.6102 21.4548 19.0586 20.7845 19.0586H3.21582C2.54544 19.0586 2 18.6102 2 18.0588C2 17.5074 2.54544 17.0586 3.21582 17.0586Z" fill="#000A15"/>
                        </svg>                   
                        <svg v-else @click="toggleMenu" class="mx-2 hidden sm:block lg:block rotate" :class="{ 'sm:hidden md:hidden': !menu }" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path  fill-rule="evenodd" clip-rule="evenodd" d="M7.70711 6.29289C7.31658 5.90237 6.68342 5.90237 6.29289 6.29289C5.90237 6.68342 5.90237 7.31658 6.29289 7.70711L10.5835 11.9977L6.29296 16.2874C5.9024 16.6778 5.90234 17.311 6.29283 17.7016C6.68331 18.0921 7.31648 18.0922 7.70704 17.7017L11.9977 13.4119L16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L13.412 11.9978L17.6995 7.71108C18.0901 7.32059 18.0902 6.68743 17.6997 6.29687C17.3092 5.9063 16.676 5.90625 16.2855 6.29673L11.9978 10.5836L7.70711 6.29289Z" fill="#000A15"/>
                        </svg>
                    </Transition>  
                </div>
                <button @click="overlay = !overlay" class="m-2 w-[113px] h-[48px] bg-[#fff] text-primaryBlue border-[1px] border-solid rounded-lg border-primaryBlue font-bold lg:hidden md:hidden sm:hidden hover:bg-primaryBlue hover:text-white hover:duration-300">Log in</button>
                <button @click="overlay1 = !overlay1" class="m-2 w-[113px] h-[48px] bg-primaryBlue text-white border-[1px] rounded-lg border-primaryBlue font-bold lg:hidden md:hidden sm:hidden hover:bg-[#4385CE] hover:duration-300 hover:text-[#FDFFFE]">Join us</button>
            </div>
        </div>
        <div class="w-full">
            <Transition name="slide-fade" mode="in-out">
                <div v-if="menu" class="z-10 bg-white absolute w-full pb-8" :class="{ 'sm:block lg:block': menu }">
                    <ul class="flex justify-center items-center flex-col">
                        <li class="w-full text-center mb-4 py-2 text-xl font-medium leading-7 bg-[#E8F0F9] text-[#000A15]">Menu</li>
                        <NuxtLink @click="closeMenu" to="/tours" class="hover:text-primaryBlue text-center w-full mb-4 py-2 text-xl font-medium leading-7 text-primaryGrey cursor-pointer">Tours</NuxtLink>
                        <NuxtLink @click="closeMenu" to="/hotels" class="hover:text-primaryBlue w-full text-center mb-4 py-2 text-xl font-medium leading-7 text-primaryGrey cursor-pointer">Hotels</NuxtLink>
                        <NuxtLink @click="closeMenu" to="/transfer" class="hover:text-primaryBlue w-full text-center mb-4 py-2 text-xl font-medium leading-7 text-primaryGrey cursor-pointer">Transfer</NuxtLink>
                        <NuxtLink @click="closeMenu" to="/outgoings" class="hover:text-primaryBlue w-full text-center mb-4 py-2 text-xl font-medium leading-7 text-primaryGrey cursor-pointer">Outgoing tours</NuxtLink>
                        <NuxtLink @click="closeMenu" to="/contact" class="hover:text-primaryBlue w-full text-center mb-4 py-2 text-xl font-medium leading-7 text-primaryGrey cursor-pointer">Contact Us</NuxtLink>
                        <div class="flex w-full">
                            <button @click="() => { overlay = !overlay, closeMenu() }" class="m-2 w-1/2 h-[48px] bg-[#fff] text-primaryBlue border-solid border-[1px] rounded-lg border-primaryBlue font-bold hover:bg-primaryBlue hover:text-white hover:duration-300">Log in</button>
                            <button @click="() => { overlay1 = !overlay1, closeMenu() }" class="m-2 w-1/2 h-[48px] bg-primaryBlue text-white border-solid border-[1px] rounded-lg border-primaryBlue font-bold hover:bg-[#4385CE] hover:duration-300 hover:text-[#FDFFFE]">Join us</button>
                        </div>
                    </ul>
                </div>
            </Transition>
        </div>
    </div>
    <v-overlay transition="scroll-y-transition" scroll-strategy="close" class="flex w-full h-full justify-center items-center" v-model="overlay">
        <AuthenticationLog @createAccount="() => { overlay = false; overlay1 = true }" @showRecPass="() => { overlay = false; overlayPass = true}" @closeLog="overlay = !overlay" />
    </v-overlay>
    <v-overlay transition="scroll-y-transition" scroll-strategy="close" class="flex justify-center h-[1100px]" v-model="overlay1">
        <AuthenticationJoin @showRecPass="() => { overlay1 = false; overlayPass = true}" @closeJoin="overlay1 = !overlay1" />
    </v-overlay>
    <v-overlay transition="scroll-y-transition" scroll-strategy="close" class="flex justify-center items-center overflow-scroll h-full" v-model="overlayPass">
        <AuthenticationRecoverPass @closeLog="overlayPass = false" />
    </v-overlay>
    <v-overlay transition="slide-x-reverse-transition" v-model="openCart" class="h-full w-[512px] md:w-[312px] ml-auto absolute">
        <CartSide @closeCart="openCart = false" />
    </v-overlay>
</template>

<script setup>
const props = defineProps(["scrolled"])
let menu = ref(false);
const overlay = ref(false);
const overlay1 = ref(false);
const overlayPass = ref(false);
const openCart = ref(false);
const transfers = ref([]);
const tours = ref([]);

function toggleMenu() {
    menu.value = !menu.value;
}

function closeMenu() {
    menu.value = false;
}

onMounted(() => {
    const transfersData = JSON.parse(localStorage.getItem("transfers"));
    const toursData = JSON.parse(localStorage.getItem("tours"));
    if (transfersData === null) {
        transfers.value = [];
    } else {
        transfers.value = transfersData;
    }

    if (toursData === null) {
        tours.value = [];
    } else {
        tours.value = toursData;
    }
});
</script>

<style>
.rotate-enter-active, .rotate-leave-active {
    transition: transform 0.2s ease;
}

.rotate-enter, .rotate-leave-to {
    transform: rotate(0deg);
}

.rotate-enter-to, .rotate-leave {
    transform: rotate(180deg);
}

.slide-fade-enter-active, .slide-fade-leave-active {
    transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
}

.slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}

.slide-fade-enter-from, .slide-fade-leave {
    opacity: 0.7;
    transform: translateY(-10px);
}

.router-link-active {
    @apply text-primaryBlue;
}

.menu a {
    text-decoration: none;
    position: relative;
}

.menu a::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #4385CE;
    bottom: 0px;
    left: 0;
    transform: scaleX(0); 
    transform-origin: left;
    transition: transform 0.4s;
}

.menu a:hover::before {
    transform: scaleX(1);
}
</style>