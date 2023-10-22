<template>
    <div class="bg-white h-screen md:w-[312px] w-[512px]">
        <div class="flex">
            <div class="w-full py-3 px-4 flex justify-between bg-[#E8F0F9]">
                <p class="text-[#000A15] text-[28px] font-extrabold leading-10">My Cart</p>
                <div class="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22.377 8.868L20.2342 16.368C19.9597 17.3287 19.0702 18 18.0705 18H8.787C7.66875 18 6.73425 17.1975 6.56325 16.0928L5.25825 6.86175L4.719 3.627C4.659 3.26325 4.34775 3 3.9795 3H2.25C1.83525 3 1.5 2.664 1.5 2.25C1.5 1.836 1.83525 1.5 2.25 1.5H3.9795C5.085 1.5 6.018 2.29125 6.19875 3.38025L6.63525 6H20.2125C20.925 6 21.579 6.32625 22.0087 6.89475C22.4377 7.46325 22.572 8.1825 22.377 8.868ZM9 19.5C8.17125 19.5 7.5 20.1712 7.5 21C7.5 21.8288 8.17125 22.5 9 22.5C9.82875 22.5 10.5 21.8288 10.5 21C10.5 20.1712 9.82875 19.5 9 19.5ZM18 19.5C17.1713 19.5 16.5 20.1712 16.5 21C16.5 21.8288 17.1713 22.5 18 22.5C18.8288 22.5 19.5 21.8288 19.5 21C19.5 20.1712 18.8288 19.5 18 19.5Z" fill="#1467C2"/>
                    </svg>
                    <div class="rounded-2xl h-6 w-6 items-center bg-[#088C53] text-sm font-medium p-2 border-[1px] border-solid border-white text-[#FDFFFE] flex justify-center">1</div>
                </div>
            </div>
            <div @click="close" class="bg-white p-[17.5px] flex justify-center items-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M16.272 16.272L1.72656 1.72656" stroke="#130F26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.2599 1.73438L1.72656 16.2647" stroke="#130F26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(["closeCart"]);

function close() {
    emit("closeCart")
}
</script>