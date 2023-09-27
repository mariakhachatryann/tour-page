<template>
    <div class="flex flex-col justify-center items-center md:mt-20 flex-nowrap">
        <div class="max-w-[530px] mt-[160px] flex flex-col justify-center items-center gap-4">
            <h3 class="text-[32px] font-extrabold">Top Places</h3>
            <p class="text-base text-primaryGrey text-center">Lorem ipsum dolor sit amet consectetur. Mus sed augue fames tristique mi elementum volutpat magna. Ut non enim dui vitae egestas justo aliquet sed suspendisse.</p>
            <div class="mt-[30px] mb-10">
                <button class="bg-[#E8F0F9] text-[#333B44] py-2 px-8 text-base" :class="{ 'bg-primaryBlue text-white rounded-lg': isActive === 'tours'}" @click="changeTab('tours')">Tour</button>
                <button class="bg-[#E8F0F9] text-[#333B44] py-2 px-8 text-base" :class="{ 'bg-primaryBlue text-white rounded-lg': isActive === 'hotels'}" @click="changeTab('hotels')">Hotels</button>
                <button class="bg-[#E8F0F9] text-[#333B44] py-2 px-8 text-base" :class="{ 'bg-primaryBlue text-white rounded-lg': isActive === 'outgoing'}" @click="changeTab('outgoing')">Outgoing tours</button>
                <button class="bg-[#E8F0F9] text-[#333B44] py-2 px-8 text-base" :class="{ 'bg-primaryBlue text-white rounded-lg': isActive === 'transfer'}" @click="changeTab('transfer')">Transfer</button>
            </div>
        </div>
        <MainTopTours v-if="selected === 'tours'" />
        <MainTopHotels v-if="selected === 'hotels'" />
        <MainOutGoing v-if="selected === 'outgoing'" />
        <MainTransfer v-if="selected === 'transfer'" />
    </div> 
</template>

<script setup>
let selected = ref("tours");
let isActive = ref("tours");

function changeTab(tab) {
    selected.value = tab;
    isActive.value = tab;
}
</script>