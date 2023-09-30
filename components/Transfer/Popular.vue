<template>
    <div class="w-full justify-center items-center flex mt-20 flex-col">
        <div>
            <p class="text-[32px] leadinf-[48px] font-extrabold text-[#000A15] text-center">
                Popular <span class="text-primaryBlue">Transfers</span>
            </p>
        </div>
        <div class="max-w-[1384px] w-full mt-8 flex flex-col">
            <div class="flex gap-8 mb-8 w-full lg:flex-col">
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
            </div>
        </div>
    </div>
</template>