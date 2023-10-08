<template>
    <div class="w-full justify-center items-center flex mt-20 flex-col">
        <div>
            <p class="text-[32px] leadinf-[48px] font-extrabold text-[#000A15] text-center">
                Popular <span class="text-primaryBlue">Tours</span> in Armenia
            </p>
        </div>
        <div class="max-w-[1384px] m-8 sm:m-0 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-8">
            <div v-for="(tour, index) in tours" :class="(index + 1) % 3 === 0 ? 'lg:col-span-4 md:col-span-1 max-w-[464px] lg:max-w-full' : 'md:col-span-4 max-w-[464px] md:max-w-full' " :key="tour.id">
                <div class="min-w-[320px] min-h-[602px] rounded-b-2xl sm:min-w-[320px]">
                    <TourBlock :img="tour.img">
                        <template v-slot:title>{{ tour.title.slice(0, 70) }}...</template>
                    </TourBlock>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const tours = [
    { id: 0, title: "Gyumri (Urban life museum, Black Fortress, walking through the old streets), Harichavank", img: "frame.png" },
    { id: 1, title: "Amberd Fortress, Mount Aragats, Lake Kari, Aregi Dry Fruit and Eco-Snack factory, Saghmosavank Monastery, Armenian…", img: "frame8.png" },
    { id: 2, title: "Khor Virap Monastery, Noravank Monastery, Tatev Monastery (wayback on Wings of Tatev Ropeway)", img: "frame.png" },
    { id: 3, title: "Sightseeing and walking tour in Yerevan, Erebuni Museum and Fortress", img: "assets/img/frame8.png" },
    { id: 4, title: "Gyumri (Urban life museum, Black Fortress, walking through the old streets), Harichavank", img: "frame.png" },
    { id: 5, title: "Gyumri (Urban life museum, Black Fortress, walking through the old streets), Harichavank", img: "frame8.png" },
]
</script>