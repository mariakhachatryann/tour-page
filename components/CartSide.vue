<template>
    <div class="bg-white h-screen md:w-[312px] w-[512px]" :class="{'overflow-y-scroll': [...tours, ...transfers].length > 1 }">
        <div class="flex">
            <div class="w-full py-3 px-4 flex justify-between bg-[#E8F0F9]">
                <p class="text-[#000A15] text-[28px] font-extrabold leading-10">My Cart</p>
                <div class="flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M22.377 8.868L20.2342 16.368C19.9597 17.3287 19.0702 18 18.0705 18H8.787C7.66875 18 6.73425 17.1975 6.56325 16.0928L5.25825 6.86175L4.719 3.627C4.659 3.26325 4.34775 3 3.9795 3H2.25C1.83525 3 1.5 2.664 1.5 2.25C1.5 1.836 1.83525 1.5 2.25 1.5H3.9795C5.085 1.5 6.018 2.29125 6.19875 3.38025L6.63525 6H20.2125C20.925 6 21.579 6.32625 22.0087 6.89475C22.4377 7.46325 22.572 8.1825 22.377 8.868ZM9 19.5C8.17125 19.5 7.5 20.1712 7.5 21C7.5 21.8288 8.17125 22.5 9 22.5C9.82875 22.5 10.5 21.8288 10.5 21C10.5 20.1712 9.82875 19.5 9 19.5ZM18 19.5C17.1713 19.5 16.5 20.1712 16.5 21C16.5 21.8288 17.1713 22.5 18 22.5C18.8288 22.5 19.5 21.8288 19.5 21C19.5 20.1712 18.8288 19.5 18 19.5Z" fill="#1467C2"/>
                    </svg>
                    <div class="rounded-2xl h-6 w-6 items-center bg-[#088C53] text-sm font-medium p-2 border-[1px] border-solid border-white text-[#FDFFFE] flex justify-center">{{ transfers.length + tours.length }}</div>
                </div>
            </div>
            <div @click="close" class="bg-white p-[17.5px] flex justify-center items-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M16.272 16.272L1.72656 1.72656" stroke="#130F26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.2599 1.73438L1.72656 16.2647" stroke="#130F26" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
        <div v-if="!transfers.length && !tours.length" class="h-full w-full flex justify-center items-center flex-col gap-2">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="104" height="104" viewBox="0 0 104 104" fill="none">
                    <path d="M96.967 38.428L87.6817 70.928C86.4922 75.0912 82.6377 78 78.3055 78H38.077C33.2312 78 29.1817 74.5225 28.4408 69.7353L22.7857 29.7343L20.449 15.717C20.189 14.1407 18.8403 13 17.2445 13H9.75C7.95275 13 6.5 11.544 6.5 9.75C6.5 7.956 7.95275 6.5 9.75 6.5H17.2445C22.035 6.5 26.078 9.92875 26.8612 14.6477L28.7527 26H87.5875C90.675 26 93.509 27.4137 95.3712 29.8772C97.2302 32.3407 97.812 35.4575 96.967 38.428ZM39 84.5C35.4087 84.5 32.5 87.4088 32.5 91C32.5 94.5912 35.4087 97.5 39 97.5C42.5912 97.5 45.5 94.5912 45.5 91C45.5 87.4088 42.5912 84.5 39 84.5ZM78 84.5C74.4087 84.5 71.5 87.4088 71.5 91C71.5 94.5912 74.4087 97.5 78 97.5C81.5912 97.5 84.5 94.5912 84.5 91C84.5 87.4088 81.5912 84.5 78 84.5Z" fill="#999DA1"/>
                </svg>
            </div>
            <p class="text-[#000A15] font-bold leading-8">Cart is empty</p>
        </div>
        <div class="w-full flex justify-center items-center mt-10 flex-col" v-else>
            <div v-if="transfers.length" class="max-w-[1384px] w-full mx-4 p-4">
                <div class="bg-white border-[1px] border-solid border-[#D0E1F3] rounded-t-2xl">
                    <p class="text-center text-primaryDark text-2xl font-bold bg-[#E8F0F9] rounded-t-2xl px-8 py-2 leading-8">Transport</p>
                </div>
                <div class="border-b-[1px] border-x-[1px] rounded-b-2xl border-solid border-[#D0E1F3]">
                    <TransferCart :font-size="'14px'" v-for="(transfer, index) in transfers" :key="transfer" :transfer="transfer" :id="index" />
                </div>
            </div>
            <div v-if="tours.length" class="max-w-[1384px] w-full mx-4 p-4">
                <div class="bg-white border-[1px] border-solid border-[#D0E1F3] rounded-t-2xl">
                    <p class="text-center text-primaryDark text-2xl font-bold bg-[#E8F0F9] rounded-t-2xl px-8 py-2 leading-8">Tours</p>
                </div>
                <div class="border-b-[1px] border-x-[1px] rounded-b-2xl border-solid border-[#D0E1F3]">
                    <TourCart :font-size="'14px'" v-for="(tour, index) in tours" :key="tour" :tour="tour" :id="index" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(["closeCart"]);

function close() {
    emit("closeCart");
}

const transfersData = JSON.parse(localStorage.getItem("transfers"));
const toursData = JSON.parse(localStorage.getItem("tours"));
let transfers = transfersData ? transfersData : [];
let tours = toursData ? toursData : [];

onMounted(() => {
    if (transfersData === null) {
        transfers = [];
    } 
    if (toursData === null) {
        tours = []
    }
});

console.log(tours);
</script>