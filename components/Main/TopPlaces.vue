<template>
    <div class="flex flex-col justify-center items-center md:mt-10 mb-20">
        <div class="max-w-[530px] mt-20 flex flex-col justify-center items-center gap-4">
            <h3 class="text-[32px] font-extrabold px-2">Top Places</h3>
            <p class="text-base text-primaryGrey text-center px-2">Lorem ipsum dolor sit amet consectetur. Mus sed augue fames tristique mi elementum volutpat magna. Ut non enim dui vitae egestas justo aliquet sed suspendisse.</p>
            <div class="mt-[30px] mb-10 flex items-center justify-center sm:flex-col">
                <div class="flex md:flex-col" v-for="(tabGroup, index) in tabGroups" :key="index">
                    <div class="w-full flex md:flex-col">
                        <button v-for="(tab, ind) in tabGroup.tabs" :key="tab.key"
                            class="bg-[#E8F0F9] text-[#333B44] md:w-[180px] py-3 px-8 text-base leading-4 line-clamp-1"
                            :class="{
                                'bg-primaryBlue text-white': isActive === tab.key,
                                'hover:bg-[#D0E1F3] hover:duration-300 hover:text-primaryBlue': isActive !== tab.key,
                                'sm:rounded-t-lg md:rounded-tl-lg md:rounded-bl-none rounded-tl-lg rounded-bl-lg': index === 0 && ind === 0,
                                'sm:rounded-b-lg md:rounded-br-lg md:rounded-tr-none rounded-tr-lg rounded-br-lg': index === (tabGroups.length - 1) && (ind === tabGroup.tabs.length - 1),
                                'sm:rounded-bl-none md:rounded-bl-lg': tab.key === 'hotels',
                                'sm:rounded-tr-none md:rounded-tr-lg': tab.key === 'outgoing'
                            }"
                            @click="changeTab(tab.key)">
                            {{ tab.label }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <MainTopTours v-if="selected === 'tours'" />
        <MainTopHotels v-if="selected === 'hotels'" />
        <MainOutGoingSection v-if="selected === 'outgoing'" />
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

const tabGroups = [
    {
        tabs: [
            { key: "tours", label: "Tour" },
            { key: "hotels", label: "Hotels" },
        ]
    },
    {
        tabs: [
            { key: "outgoing", label: "Outgoing tours" },
            { key: "transfer", label: "Transfer" },
        ]
    }
]
</script>