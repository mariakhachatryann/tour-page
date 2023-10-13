<template>
    <div class="w-full justify-center items-center flex mt-20 flex-col">
        <div>
            <p class="text-[32px] leadinf-[48px] font-extrabold text-[#000A15] text-center">
                Popular <span class="text-primaryBlue">Outgoing Tours</span>
            </p>
        </div>
        <div class="max-w-[1384px] m-8 sm:m-0 w-full grid grid-cols-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <div v-for="(outgoing, index) in outgoings" :class="(index + 1) % 3 === 0 ? 'lg:col-span-4 md:col-span-1 max-w-[464px] lg:max-w-full' : 'md:col-span-4 max-w-[464px] md:max-w-full'" class="md:col-span-4 max-w-[464px] md:max-w-full" :key="outgoing.id">
                <div class="min-w-[320px] rounded-b-2xl sm:min-w-[320px]">
                    <OutgoingBlock :outgoing="outgoings[index]">
                        <template v-slot:title>{{ outgoing.title }}</template>
                    </OutgoingBlock>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useOutgoingStore } from "../../stores/store.js"
const { outgoings } = useOutgoingStore();
</script>