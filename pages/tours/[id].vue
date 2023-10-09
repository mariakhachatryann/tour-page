<template>
    <RoutePath :desc="selected[0].desc" />
    <div class="w-full justify-center items-center flex px-8">
        <div class="w-[1384px] flex justify-start xl:flex-col gap-8">
            <SpecTourPart :selectedTour="selected[0]" />
            <div class="w-[368px] p-6 rounded-lg h-[566px] border-[1px] border-solid border-[#D0E1F3]">
                <div class="flex gap-2">
                    <p class="font-light text-[#666C73] mr-2">Direction:</p>
                    <p class="text-[#000A15] font-medium">{{ selected[0].direction }}</p>
                </div>
                <div class="flex gap-2 mt-3 mb-6">
                    <p class="font-light text-[#666C73] mr-2">Start date and time:</p>
                    <p class="text-[#000A15] font-medium">30 Jun, 2023 | 05:00</p>
                </div>
                <div>
                    <div class="flex gap-2">
                        <p class="text-[#19222C] mr-2">Adults</p>
                        <p class="text-[#666C73] font-medium">(age 3-8)</p>
                    </div>
                    <div class="flex mt-1 bg-primaryBlue rounded-lg w-[160px]">
                        <div class="flex justify-center items-center bg-primaryBlue rounded-lg py-3 w-14 text-white text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                                <path d="M16 0.474786V3.52685C16 3.75661 15.8139 3.94304 15.5838 3.94304H9.94226C9.71251 3.94304 6.0578 3.94304 6.0578 3.94304H0.416194C0.186254 3.94304 0 3.75661 0 3.52685V0.474786C0 0.244984 0.186254 0.0585938 0.416194 0.0585938H6.0578H9.94226H15.5838C15.8139 0.0585938 16 0.244984 16 0.474786Z" fill="white"/>
                            </svg>
                        </div>
                        <div class="py-3 w-16 bg-white text-center border-[1px] border-solid border-[#E6E6E7] rounded-lg">0</div>
                        <div class="flex justify-center items-center bg-primaryBlue rounded-lg  py-3 w-14 text-white text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M16 6.47396V9.52602C16 9.75578 15.8138 9.94221 15.5838 9.94221H9.94224V15.5837C9.94224 15.8138 9.75581 15.9999 9.52605 15.9999H6.47398C6.24436 15.9999 6.05779 15.8138 6.05779 15.5837V9.94221H0.416193C0.186253 9.94221 0 9.75578 0 9.52602V6.47396C0 6.24416 0.186253 6.05777 0.416193 6.05777H6.05779V0.416192C6.05779 0.186161 6.24432 0 6.47398 0H9.52605C9.75581 0 9.94224 0.186161 9.94224 0.416192V6.05777H15.5838C15.8139 6.05777 16 6.24416 16 6.47396Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    <div class="max-w-[320px] h-[1px] bg-[#D0E1F3] my-4"></div>
                </div>
                <div>
                    <div class="flex gap-2">
                        <p class="text-[#19222C] mr-2">Child</p>
                        <p class="text-[#666C73] font-medium">(age 3-8)</p>
                    </div>
                    <div class="flex mt-1 bg-primaryBlue rounded-lg w-[160px]">
                        <div class="flex justify-center items-center bg-primaryBlue rounded-lg py-3 w-14 text-white text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                                <path d="M16 0.474786V3.52685C16 3.75661 15.8139 3.94304 15.5838 3.94304H9.94226C9.71251 3.94304 6.0578 3.94304 6.0578 3.94304H0.416194C0.186254 3.94304 0 3.75661 0 3.52685V0.474786C0 0.244984 0.186254 0.0585938 0.416194 0.0585938H6.0578H9.94226H15.5838C15.8139 0.0585938 16 0.244984 16 0.474786Z" fill="white"/>
                            </svg>
                        </div>
                        <div class="py-3 w-16 bg-white text-center border-[1px] border-solid border-[#E6E6E7] rounded-lg">0</div>
                        <div class="flex justify-center items-center bg-primaryBlue rounded-lg  py-3 w-14 text-white text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M16 6.47396V9.52602C16 9.75578 15.8138 9.94221 15.5838 9.94221H9.94224V15.5837C9.94224 15.8138 9.75581 15.9999 9.52605 15.9999H6.47398C6.24436 15.9999 6.05779 15.8138 6.05779 15.5837V9.94221H0.416193C0.186253 9.94221 0 9.75578 0 9.52602V6.47396C0 6.24416 0.186253 6.05777 0.416193 6.05777H6.05779V0.416192C6.05779 0.186161 6.24432 0 6.47398 0H9.52605C9.75581 0 9.94224 0.186161 9.94224 0.416192V6.05777H15.5838C15.8139 6.05777 16 6.24416 16 6.47396Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    <div class="max-w-[320px] h-[1px] bg-[#D0E1F3] my-4"></div>
                </div>
                <div>
                    <div class="flex gap-2">
                        <p class="text-[#19222C] mr-2">Adults</p>
                        <p class="text-[#666C73] font-medium">(age 3-8)</p>
                    </div>
                    <div class="flex mt-1 bg-primaryBlue rounded-lg w-[160px]">
                        <div class="flex justify-center items-center bg-primaryBlue rounded-lg py-3 w-14 text-white text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                                <path d="M16 0.474786V3.52685C16 3.75661 15.8139 3.94304 15.5838 3.94304H9.94226C9.71251 3.94304 6.0578 3.94304 6.0578 3.94304H0.416194C0.186254 3.94304 0 3.75661 0 3.52685V0.474786C0 0.244984 0.186254 0.0585938 0.416194 0.0585938H6.0578H9.94226H15.5838C15.8139 0.0585938 16 0.244984 16 0.474786Z" fill="white"/>
                            </svg>
                        </div>
                        <div class="py-3 w-16 bg-white text-center border-[1px] border-solid border-[#E6E6E7] rounded-lg">0</div>
                        <div class="flex justify-center items-center bg-primaryBlue rounded-lg  py-3 w-14 text-white text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M16 6.47396V9.52602C16 9.75578 15.8138 9.94221 15.5838 9.94221H9.94224V15.5837C9.94224 15.8138 9.75581 15.9999 9.52605 15.9999H6.47398C6.24436 15.9999 6.05779 15.8138 6.05779 15.5837V9.94221H0.416193C0.186253 9.94221 0 9.75578 0 9.52602V6.47396C0 6.24416 0.186253 6.05777 0.416193 6.05777H6.05779V0.416192C6.05779 0.186161 6.24432 0 6.47398 0H9.52605C9.75581 0 9.94224 0.186161 9.94224 0.416192V6.05777H15.5838C15.8139 6.05777 16 6.24416 16 6.47396Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                    <div class="max-w-[320px] h-[1px] bg-[#D0E1F3] my-4"></div>
                </div>
                <div class="flex justify-between">
                    <p class="text-xl text-[#666C73] font-medium">Total Price:</p>
                    <p class="text-[#000A15] font-medium text-xl">15,000 AMD</p>
                </div>
                <div class="flex justify-center items-center gap-2 w-full mt-6 bg-primaryBlue rounded-lg px-8 py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" viewBox="0 0 25 18" fill="none">
                        <path d="M12.05 6.98625C12.0238 6.7425 12.0088 6.49125 12.0088 6.24C12.0088 5.985 12.0238 5.73375 12.05 5.48625H5.16876L4.5875 3.2775C4.50125 2.9475 4.20125 2.71875 3.86375 2.71875H1.25C0.8375 2.71875 0.5 3.05625 0.5 3.46875C0.5 3.88125 0.8375 4.21875 1.25 4.21875H3.28625L3.8675 6.43125C3.8675 6.435 3.87125 6.435 3.87125 6.435L5.69376 13.4625C5.78001 13.7925 6.08001 14.0213 6.42126 14.0213H6.51126C6.40251 14.2913 6.34251 14.5838 6.34251 14.8913C6.34251 16.1963 7.40376 17.2575 8.70876 17.2575C10.0138 17.2575 11.075 16.1963 11.075 14.8913C11.075 14.5838 11.015 14.2913 10.9063 14.0213H12.6913C12.5825 14.2913 12.5225 14.5838 12.5225 14.8913C12.5225 16.1963 13.5838 17.2575 14.8888 17.2575C16.1938 17.2575 17.255 16.1963 17.255 14.8913C17.255 14.5838 17.195 14.2913 17.0863 14.0213H17.1763C17.5175 14.0213 17.8175 13.7925 17.9038 13.4625L17.9825 13.1588C17.255 13.0538 16.565 12.8325 15.9275 12.5213C13.82 11.4863 12.3088 9.42001 12.05 6.98625ZM9.57501 14.8913C9.57501 15.3675 9.18876 15.7575 8.70876 15.7575C8.23251 15.7575 7.84251 15.3675 7.84251 14.8913C7.84251 14.4113 8.23251 14.0213 8.70876 14.0213C9.18876 14.0213 9.57501 14.4113 9.57501 14.8913ZM15.755 14.8913C15.755 15.3675 15.365 15.7575 14.8888 15.7575C14.4088 15.7575 14.0225 15.3675 14.0225 14.8913C14.0225 14.4113 14.4088 14.0213 14.8888 14.0213C15.365 14.0213 15.755 14.4113 15.755 14.8913Z" fill="white"/>
                        <path d="M19.0025 0.742188C15.9725 0.742188 13.5088 3.20969 13.5088 6.23969C13.5088 9.2697 15.9725 11.7335 19.0025 11.7335C22.0363 11.7335 24.5001 9.2697 24.5001 6.23969C24.5001 3.20969 22.0363 0.742188 19.0025 0.742188ZM20.6338 6.9897H19.7525V7.87095C19.7525 8.28345 19.4188 8.62095 19.0025 8.62095C18.59 8.62095 18.2525 8.28345 18.2525 7.87095V6.9897H17.375C16.9588 6.9897 16.625 6.65219 16.625 6.23969C16.625 5.82344 16.9588 5.48969 17.375 5.48969H18.2525V4.60844C18.2525 4.19219 18.59 3.85844 19.0025 3.85844C19.4188 3.85844 19.7525 4.19219 19.7525 4.60844V5.48969H20.6338C21.05 5.48969 21.3838 5.82344 21.3838 6.23969C21.3838 6.65219 21.05 6.9897 20.6338 6.9897Z" fill="white"/>
                    </svg>
                    <p class="text-white font-bold ">Add to Cart</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
useHead({
    title: `Tour: ${route.params.id}`
})

import { useToursStore } from "../../stores/store.js"
const { tours } = useToursStore();

console.log(tours);

const selected = tours.filter(tour => tour.id == route.params.id);
console.log(selected[0]);
</script>