<template>
    <RoutePath :desc="selectedTransfer.title" />
    <div class="w-full justify-center items-center flex px-8">
        <div class="max-w-[1384px] w-full">
            <div class="w-full flex justify-start lg:flex-col gap-4 py-8">
                <SpecTransferPart @provide-options="getOptions" :selectedTransfer="selectedTransfer" />
                <div class="w-[322px] lg:w-full p-6 rounded-lg max-h-[550px] border-[1px] border-solid border-[#D0E1F3]">
                    <div class="flex gap-2 whitespace-pre-wrap">
                        <p class="font-light text-[#666C73]">Transport: </p>
                        <p class="text-[#000A15] font-medium">{{ selectedTransfer.title }}</p>
                    </div>
                    <div class="flex gap-2 mt-3 mb-6 sm:flex-col">
                        <p class="font-light text-[#666C73]">Transfer date and time:</p>
                        <p class="text-[#000A15] font-medium whitespace-normal">{{ transferDetails.date || dateFormat(new Date()) }} | {{ transferDetails.time || "12:00" }}</p>
                    </div>
                    <div class="flex gap-2 mt-3 sm:flex-col">
                        <p class="font-light text-[#666C73]">From: </p>
                        <p class="text-[#000A15] font-medium whitespace-normal">{{ transferDetails.from || 'Gyumri' }}</p>
                    </div>
                    <div class="flex gap-2 mt-3 sm:flex-col">
                        <p class="font-light text-[#666C73]">To: </p>
                        <p class="text-[#000A15] font-medium whitespace-normal">{{ transferDetails.to || 'Yerevan' }}</p>
                    </div>
                    <div v-if="transferDetails.includeReturn" class="flex gap-2 mt-3 mb-6 sm:flex-col">
                        <p class="font-light text-[#666C73]">Date and time of return:</p>
                        <p class="text-[#000A15] font-medium whitespace-normal">{{ transferDetails.returnDate }} | {{ transferDetails.return.time }}</p>
                    </div>
                    <div class="bg-[#D0E1F3] w-full h-[1px] my-8"></div>
                    <div class="flex justify-between">
                        <p class="text-xl text-[#666C73] font-medium">Total Price:</p>
                        <p class="text-[#000A15] font-medium text-xl">45,000 AMD</p>
                    </div>
                    <button @click="addTransfer" class="flex justify-center text-white font-bold  items-center gap-2 w-full mt-6 cursor-pointer hover:bg-[#4385CE] hover:duration-300 hover:text-[#FDFFFE] bg-primaryBlue rounded-lg px-8 py-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" viewBox="0 0 25 18" fill="none">
                            <path d="M12.05 6.98625C12.0238 6.7425 12.0088 6.49125 12.0088 6.24C12.0088 5.985 12.0238 5.73375 12.05 5.48625H5.16876L4.5875 3.2775C4.50125 2.9475 4.20125 2.71875 3.86375 2.71875H1.25C0.8375 2.71875 0.5 3.05625 0.5 3.46875C0.5 3.88125 0.8375 4.21875 1.25 4.21875H3.28625L3.8675 6.43125C3.8675 6.435 3.87125 6.435 3.87125 6.435L5.69376 13.4625C5.78001 13.7925 6.08001 14.0213 6.42126 14.0213H6.51126C6.40251 14.2913 6.34251 14.5838 6.34251 14.8913C6.34251 16.1963 7.40376 17.2575 8.70876 17.2575C10.0138 17.2575 11.075 16.1963 11.075 14.8913C11.075 14.5838 11.015 14.2913 10.9063 14.0213H12.6913C12.5825 14.2913 12.5225 14.5838 12.5225 14.8913C12.5225 16.1963 13.5838 17.2575 14.8888 17.2575C16.1938 17.2575 17.255 16.1963 17.255 14.8913C17.255 14.5838 17.195 14.2913 17.0863 14.0213H17.1763C17.5175 14.0213 17.8175 13.7925 17.9038 13.4625L17.9825 13.1588C17.255 13.0538 16.565 12.8325 15.9275 12.5213C13.82 11.4863 12.3088 9.42001 12.05 6.98625ZM9.57501 14.8913C9.57501 15.3675 9.18876 15.7575 8.70876 15.7575C8.23251 15.7575 7.84251 15.3675 7.84251 14.8913C7.84251 14.4113 8.23251 14.0213 8.70876 14.0213C9.18876 14.0213 9.57501 14.4113 9.57501 14.8913ZM15.755 14.8913C15.755 15.3675 15.365 15.7575 14.8888 15.7575C14.4088 15.7575 14.0225 15.3675 14.0225 14.8913C14.0225 14.4113 14.4088 14.0213 14.8888 14.0213C15.365 14.0213 15.755 14.4113 15.755 14.8913Z" fill="white"/>
                            <path d="M19.0025 0.742188C15.9725 0.742188 13.5088 3.20969 13.5088 6.23969C13.5088 9.2697 15.9725 11.7335 19.0025 11.7335C22.0363 11.7335 24.5001 9.2697 24.5001 6.23969C24.5001 3.20969 22.0363 0.742188 19.0025 0.742188ZM20.6338 6.9897H19.7525V7.87095C19.7525 8.28345 19.4188 8.62095 19.0025 8.62095C18.59 8.62095 18.2525 8.28345 18.2525 7.87095V6.9897H17.375C16.9588 6.9897 16.625 6.65219 16.625 6.23969C16.625 5.82344 16.9588 5.48969 17.375 5.48969H18.2525V4.60844C18.2525 4.19219 18.59 3.85844 19.0025 3.85844C19.4188 3.85844 19.7525 4.19219 19.7525 4.60844V5.48969H20.6338C21.05 5.48969 21.3838 5.82344 21.3838 6.23969C21.3838 6.65219 21.05 6.9897 20.6338 6.9897Z" fill="white"/>
                        </svg>
                        <p class="text-white font-bold ">Add to Cart</p>
                    </button>
                </div>
            </div>
            <div class="flex w-full justify-center items-center my-20 flex-col">
                <p class="text-[32px] leading-[48px] font-extrabold text-[#000A15] text-center mb-8">
                    Popular <span class="text-primaryBlue">Transfers</span>
                </p>
                <div class="max-w-[1384px] m-8 sm:m-0 w-full mt-8 flex flex-col">
                    <div class="flex gap-8 lg:flex-col" v-for="group in transferGroups" :key="group.id">
                        <div class="w-full" v-for="(block, index) in group.blocks" :key="block.id">
                            <NuxtLink :to="'/transfer/' + group.blocks[index].id" target="_blank">
                                <TransferBlock :transfer="group.blocks[index]" />
                            </NuxtLink>
                        </div>
                    </div>
                </div>
                <NuxtLink to="/transfer">
                    <button class="mt-8 flex gap-2 py-2 px-6 bg-[#E8F0F9] rounded-lg font-bold">
                            <p>View All</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.96967 19.5303C7.67678 19.2374 7.67678 18.7626 7.96967 18.4697L14.4393 12L7.96967 5.53033C7.67678 5.23744 7.67678 4.76256 7.96967 4.46967C8.26256 4.17678 8.73744 4.17678 9.03033 4.46967L16.0303 11.4697C16.3232 11.7626 16.3232 12.2374 16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z" fill="#000A15"/>
                            </svg>
                    </button>
                </NuxtLink>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import { useTransfersStore } from "../../stores/store.js"
import { useMyCart } from "~/stores/store";
const { transfers } = useTransfersStore();
const route = useRoute();
const myCart = useMyCart();
const { transferToCart } = myCart;
const { dateFormat } = useUtils();

let transferDetails = reactive({});

const selected = transfers.filter(transfer => transfer.id == route.params.reservation);
const [selectedTransfer ] = selected

useHead({
    title: `${selectedTransfer.title}`
})

function getOptions(details) {
    Object.assign(transferDetails, details);
    details = {}
}

function addTransfer() {
    if (transferDetails.from && transferDetails.to && transferDetails.startAdress && transferDetails.destinationAdress && transferDetails.date && transferDetails.time) {
        let toData = {...transferDetails, ...selectedTransfer}
        transferToCart(toData)
    }
    window.location.reload()
}

const transferGroups = [
    {
        id: 1,
        blocks: [
            transfers[0],
            transfers[1]
        ]
    },
    {
        id: 2,
        blocks: [
            transfers[2],
            transfers[3]
        ]
    },
    {
        id: 3,
        blocks: [
            transfers[4],
            transfers[5]
        ]
    },
]

</script>

<style>
input::-webkit-calendar-picker-indicator {
    width: 24px;
    height: 24px;
    cursor: pointer;
}

.vuejs3-datepicker__inputvalue {
    min-width: 80px !important;
}
</style>