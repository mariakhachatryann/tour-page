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
                    <NuxtLink :to="'/tours/' + tour.id" target="_blank">
                        <TourBlock :tour="tours[index]">
                            <template v-slot:title>{{ tour.title.slice(0, 70) }}...</template>
                        </TourBlock>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useToursStore } from "../../stores/store.js"
const { tours } = useToursStore();
</script>