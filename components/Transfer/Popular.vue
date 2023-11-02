<template>
    <div class="w-full justify-center items-center flex mt-20 flex-col p-8">
        <div>
            <p class="text-[32px] leadinf-[48px] font-extrabold text-[#000A15] text-center">
                Popular <span class="text-primaryBlue">Transfers</span>
            </p>
        </div>
        <div class="max-w-[1384px] m-8 sm:m-0 w-full mt-8 flex flex-col">
            <div class="flex gap-8 lg:flex-col" v-for="group in transferGroups" :key="group.id">
                <div class="w-full" v-for="(block, index) in group.blocks" :key="block.id">
                    <NuxtLink :to="'/transfer/' + group.blocks[index].id" target="_blank">
                        <TransferBlock :transfer="group.blocks[index]" />
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useTransfersStore } from "../../stores/store.js"
const { transfers } = useTransfersStore();

const transferGroups = [
    {
        id: 1,
        blocks: [
            transfers[0],
            transfers[1]
        ],
    },
    {
        id: 2,
        blocks: [
            transfers[2],
            transfers[3]
        ],
    },
    {
        id: 3,
        blocks: [
            transfers[4],
            transfers[5]
        ],
    },
]
</script>
