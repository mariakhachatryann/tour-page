<template>
    <div class="flex justify-evenly gap-14 h-[80px] bg-white py-2 xl:justify-between px-8 sm:gap-2 sm:px-1 sm:justify-between">
        <NuxtLink to="/" class="w-[152px] h-[48px] bg-[#E8F0F9] mt-2 text-center items-center">
            <p class="text-2xl text-[#01000E] font-bold p-1">LOGO</p>
        </NuxtLink>
        <div class="mt-2 w-[470px] sm:hidden md:hidden" :class="{ 'lg:hidden md:hidden': !menu}">
            <ul class="flex justify-start sm:hidden">
                <NuxtLink to="/tours" class="text-[16px] text-primaryGrey p-2 mr-2 cursor-pointer hover:text-primaryBlue">Tours</NuxtLink>
                <li class="text-[16px] text-primaryGrey p-2 mr-2 cursor-pointer hover:text-primaryBlue">Hotels</li>
                <li class="text-[16px] text-primaryGrey p-2 mr-2 cursor-pointer hover:text-primaryBlue">Transfer</li>
                <li class="text-[16px] text-primaryGrey p-2 mr-2 cursor-pointer hover:text-primaryBlue">Outgoing tours</li>
                <li class="text-[16px] text-primaryGrey p-2 mr-2 cursor-pointer hover:text-primaryBlue">Contact us</li>
            </ul>
        </div>
        <div class="flex md:justify-between">
            <div>
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="8" width="48" height="48" rx="8" fill="#E8F0F9"/>
                    <path d="M34.377 28.868L32.2342 36.368C31.9597 37.3287 31.0702 38 30.0705 38H20.787C19.6687 38 18.7343 37.1975 18.5633 36.0928L17.2583 26.8618L16.719 23.627C16.659 23.2632 16.3478 23 15.9795 23H14.25C13.8353 23 13.5 22.664 13.5 22.25C13.5 21.836 13.8353 21.5 14.25 21.5H15.9795C17.085 21.5 18.018 22.2912 18.1988 23.3802L18.6353 26H32.2125C32.925 26 33.579 26.3263 34.0087 26.8947C34.4377 27.4632 34.572 28.1825 34.377 28.868ZM21 39.5C20.1712 39.5 19.5 40.1712 19.5 41C19.5 41.8288 20.1712 42.5 21 42.5C21.8287 42.5 22.5 41.8288 22.5 41C22.5 40.1712 21.8287 39.5 21 39.5ZM30 39.5C29.1713 39.5 28.5 40.1712 28.5 41C28.5 41.8288 29.1713 42.5 30 42.5C30.8288 42.5 31.5 41.8288 31.5 41C31.5 40.1712 30.8288 39.5 30 39.5Z" fill="#1467C2"/>
                    <rect x="32.5" y="0.5" width="23" height="23" rx="11.5" fill="#088C53"/>
                    <path d="M44.708 17H43.238V10.364C43.238 10.1307 43.238 9.916 43.238 9.72C43.2473 9.51467 43.2567 9.31867 43.266 9.132C43.2753 8.936 43.2847 8.74933 43.294 8.572C43.1727 8.69333 43.0467 8.81 42.916 8.922C42.7853 9.034 42.636 9.16467 42.468 9.314L41.376 10.196L40.62 9.244L43.476 7.004H44.708V17Z" fill="#FDFFFE"/>
                    <rect x="32.5" y="0.5" width="23" height="23" rx="11.5" stroke="white"/>
                </svg>
            </div>
            <div class="cursor-pointer ">
                <svg @click="toggleMenu" class="m-2 mt-5 ml-2" :class="{ 'hidden sm:block lg:block md:block': !menu, 'sm:hidden md:hidden': menu }" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.21582 6.50977H20.7845C21.4548 6.50977 22 6.06133 22 5.50988C22 4.95844 21.4548 4.50977 20.7845 4.50977H3.21582C2.54544 4.50977 2 4.95844 2 5.50988C2 6.06133 2.54544 6.50977 3.21582 6.50977ZM20.7845 10.7842H3.21582C2.54544 10.7842 2 11.2329 2 11.7843C2 12.3357 2.54544 12.7842 3.21582 12.7842H20.7845C21.4548 12.7842 22 12.3357 22 11.7843C22 11.2329 21.4548 10.7842 20.7845 10.7842ZM3.21582 17.0586H20.7845C21.4549 17.0586 22 17.5074 22 18.0588C22 18.6102 21.4548 19.0586 20.7845 19.0586H3.21582C2.54544 19.0586 2 18.6102 2 18.0588C2 17.5074 2.54544 17.0586 3.21582 17.0586Z" fill="#000A15"/>
                </svg>
                <svg @click="toggleMenu" class="m-2 mt-5 ml-2 hidden sm:block md:block" :class="{ 'sm:hidden md:hidden': !menu }" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.70711 6.29289C7.31658 5.90237 6.68342 5.90237 6.29289 6.29289C5.90237 6.68342 5.90237 7.31658 6.29289 7.70711L10.5835 11.9977L6.29296 16.2874C5.9024 16.6778 5.90234 17.311 6.29283 17.7016C6.68331 18.0921 7.31648 18.0922 7.70704 17.7017L11.9977 13.4119L16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L13.412 11.9978L17.6995 7.71108C18.0901 7.32059 18.0902 6.68743 17.6997 6.29687C17.3092 5.9063 16.676 5.90625 16.2855 6.29673L11.9978 10.5836L7.70711 6.29289Z" fill="#000A15"/>
                </svg>
            </div>
            <button class="m-2 w-[113px] h-[48px] bg-white text-primaryBlue border-[1px] rounded-lg border-primaryBlue font-bold lg:hidden md:hidden sm:hidden">Log in</button>
            <button class="m-2 w-[113px] h-[48px] bg-primaryBlue text-white border-[1px] rounded-lg border-primaryBlue font-bold lg:hidden md:hidden sm:hidden">Join us</button>
        </div>
    </div>
    <div class="hidden z-10 bg-white absolute w-full pb-8" :class="{ 'sm:block md:block': menu}">
        <div>
            <ul>
                <li class="w-full text-center mb-4 py-2 text-xl font-medium leading-7 bg-[#E8F0F9] text-[#000A15]">Menu</li>
                <li class="w-full text-center mb-4 py-2 text-xl font-medium leading-7 text-primaryGrey cursor-pointer">Tours</li>
                <li class="w-full text-center mb-4 py-2 text-xl font-medium leading-7 text-primaryGrey cursor-pointer">Hotels</li>
                <li class="w-full text-center mb-4 py-2 text-xl font-medium leading-7 text-primaryGrey cursor-pointer">Transfer</li>
                <li class="w-full text-center mb-4 py-2 text-xl font-medium leading-7 text-primaryGrey cursor-pointer">Outgoing tours</li>
                <li class="w-full text-center mb-4 py-2 text-xl font-medium leading-7 text-primaryGrey cursor-pointer">Contact Us</li>
            </ul>
        </div>
    </div>
</template>

<script setup>
let menu = ref(false);

function toggleMenu() {
    menu.value = !menu.value
}
</script>

<style>
.router-link-active {
    @apply text-primaryBlue;
}
</style>