<template>
    <div class="w-full justify-center items-center flex mt-20 flex-col">
        <div>
            <p class="text-[32px] leadinf-[48px] font-extrabold text-[#000A15] text-center">
                Popular <span class="text-primaryBlue">Transfers</span>
            </p>
        </div>
        <div class="max-w-[1384px] m-8 sm:m-0 w-full mt-8 flex flex-col">
            <div class="flex gap-8 mb-8 lg:flex-col" v-for="group in transferGroups" :key="group.id">
                <TransferBlock v-for="(block, index) in group.blocks" :transfer="group.blocks[index]" :key="block.id" />
            </div>
            <!-- <div class="flex gap-8 mb-8 lg:flex-col">
                <TransferBlock />
                <TransferBlock />
            </div>
            <div class="flex gap-8 mb-8 lg:flex-col">
                <TransferBlock />
                <TransferBlock />
            </div>
            <div class="flex gap-8 lg:flex-col">
                <TransferBlock />
                <TransferBlock />
            </div> -->
        </div>
    </div>
</template>

<script setup>
import { useTransfersStore } from "../../stores/store.js"
const { transfers } = useTransfersStore();

console.log(transfers);

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
