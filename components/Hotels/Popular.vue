<template>
    <div class="w-full justify-center items-center flex mt-20 flex-col px-4 sm:px-1">
        <div>
            <p class="text-[32px] leadinf-[48px] font-extrabold text-[#000A15] text-center">
                Popular <span class="text-primaryBlue">Hotels</span> in Armenia
            </p>
        </div>
        <div class="max-w-[1384px] md:w-full mt-8 sm:m-1 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
            <div v-for="(hotel, index) in hotels" :class="(index + 1) % 3 === 0 ? 'lg:col-span-4 md:col-span-1 max-w-[464px] lg:max-w-full' : 'md:col-span-4 max-w-[464px] md:max-w-full'" :key="index">
                <div class="min-w-[300px] min-h-[520px] rounded-b-2xl">
                    <NuxtLink :to="'/hotels/' + hotel.id" target="_blank">
                        <HotelBlock :hotel="hotels[index]">
                            <template v-slot:title>{{ hotel.title }}</template>
                        </HotelBlock>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useHotelsStore } from "../../stores/store.js"
const { hotels } = useHotelsStore();
</script>