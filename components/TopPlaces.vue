<template>
    <div class="flex flex-col justify-center items-center md:mt-20 flex-nowrap">
        <div class="max-w-[530px] mt-[160px] flex flex-col justify-center items-center gap-4">
            <h3 class="text-[32px] font-extrabold">Top Places</h3>
            <p class="text-base text-[#4D545B] text-center">Lorem ipsum dolor sit amet consectetur. Mus sed augue fames tristique mi elementum volutpat magna. Ut non enim dui vitae egestas justo aliquet sed suspendisse.</p>
            <div class="mt-[30px] mb-10">
                <button class="bg-[#E8F0F9] text-[#333B44] py-2 px-8 text-base" :class="{ 'bg-primaryBlue text-white rounded-lg': isActive === 'tours'}" @click="changeTab('tours')">Tour</button>
                <button class="bg-[#E8F0F9] text-[#333B44] py-2 px-8 text-base" :class="{ 'bg-primaryBlue text-white rounded-lg': isActive === 'hotels'}" @click="changeTab('hotels')">Hotels</button>
                <button class="bg-[#E8F0F9] text-[#333B44] py-2 px-8 text-base" :class="{ 'bg-primaryBlue text-white rounded-lg': isActive === 'outgoing'}" @click="changeTab('outgoing')">Outgoing tours</button>
                <button class="bg-[#E8F0F9] text-[#333B44] py-2 px-8 text-base" :class="{ 'bg-primaryBlue text-white rounded-lg': isActive === 'transfer'}" @click="changeTab('transfer')">Transfer</button>
            </div>
        </div>
        <div class="flex gap-8 w-full xl:max-w-[1266px] lg:max-w-[1024px] overflow-hidden">
            <TopTours v-if="selected === 'tours'" v-for="instance in instances" :key="instance" />
            <TopHotels v-if="selected === 'hotels'" v-for="instance in instances" :key="instance" />
            <OutGoing v-if="selected === 'outgoing'" v-for="instance in instances" :key="instance" />
            <Transfer v-if="selected === 'transfer'" v-for="instance in instances" :key="instance" />
        </div>
        <div class="flex mt-[36px]">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9994 -0.000366211C31.0294 -0.000366211 39.9994 8.97163 39.9994 19.9996C39.9994 31.0276 31.0294 39.9996 19.9994 39.9996C8.97145 39.9996 -0.000549316 31.0276 -0.000549316 19.9996C-0.000549316 8.97163 8.97145 -0.000366211 19.9994 -0.000366211Z" fill="white"/>
                <path d="M23.6441 11.6859C23.2621 11.6859 22.8781 11.8319 22.5861 12.1239L15.6121 19.0639C15.3301 19.3459 15.1721 19.7279 15.1721 20.1279C15.1721 20.5259 15.3301 20.9079 15.6121 21.1899L22.5861 28.1339C23.1721 28.7179 24.1201 28.7179 24.7061 28.1299C25.2901 27.5419 25.2881 26.5919 24.7021 26.0079L18.7961 20.1279L24.7021 14.2479C25.2881 13.6639 25.2901 12.7159 24.7061 12.1279C24.4141 11.8319 24.0281 11.6859 23.6441 11.6859Z" fill="#1467C2"/>
            </svg>
            <svg class="mt-2 mx-8" width="132" height="20" viewBox="0 0 132 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6" cy="10" r="6" fill="#B9D1ED"/>
                <circle cx="34" cy="10" r="6" fill="#B9D1ED"/>
                <circle cx="66" cy="10" r="8.5" fill="#1467C2" stroke="#FDFFFE" stroke-width="3"/>
                <circle cx="98" cy="10" r="6" fill="#B9D1ED"/>
                <circle cx="126" cy="10" r="6" fill="#B9D1ED"/>
            </svg>
            <svg class="mt-[-2px]" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.9994 3.99963C35.0294 3.99963 43.9994 12.9716 43.9994 23.9996C43.9994 35.0276 35.0294 43.9996 23.9994 43.9996C12.9714 43.9996 3.99939 35.0276 3.99939 23.9996C3.99939 12.9716 12.9714 3.99963 23.9994 3.99963Z" fill="white"/>
                <path d="M21.1142 15.5582C21.4962 15.5582 21.8802 15.7042 22.1722 15.9962L29.1462 22.9362C29.4282 23.2182 29.5862 23.6002 29.5862 24.0002C29.5862 24.3982 29.4282 24.7802 29.1462 25.0622L22.1722 32.0062C21.5862 32.5902 20.6382 32.5902 20.0522 32.0022C19.4682 31.4142 19.4702 30.4642 20.0562 29.8802L25.9622 24.0002L20.0562 18.1202C19.4702 17.5362 19.4682 16.5882 20.0522 16.0002C20.3442 15.7042 20.7302 15.5582 21.1142 15.5582Z" fill="#1467C2"/>
            </svg>
        </div>
    </div> 
</template>

<script setup>
const instances = [1, 2, 3, 4, 5];
let selected = ref("tours");
let isActive = ref("tours");

function changeTab(tab) {
    selected.value = tab
    isActive.value = tab
}
</script>