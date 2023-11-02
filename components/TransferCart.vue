<template>
    <div class="p-6">
        <div class="w-full flex justify-between">
            <p class="text-[#000A15] text-xl font-bold leading-[30px]">{{ props.transfer.title }}</p>
            <div class="flex gap-2">
                <div class="bg-[#E8F0F9] rounded-lg p-2 cursor-pointer h-9">
                    <svg class="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2336 8.30334L15.1004 7.2212C15.4973 6.71059 15.6384 6.12025 15.5061 5.51916C15.3915 4.97271 15.0564 4.45314 14.5537 4.05899L13.3279 3.08255C12.2609 2.23153 10.9381 2.32111 10.1797 3.29755L9.34374 4.33579C9.25555 4.44687 9.27054 4.60633 9.37989 4.69591C9.65221 4.9165 10.1825 5.34639 10.7978 5.84517C11.874 6.71769 13.2103 7.80103 13.8809 8.34365C13.9893 8.43144 14.1463 8.41352 14.2336 8.30334ZM8.59085 5.75321L13.0874 9.38662C13.1959 9.47351 13.2144 9.63297 13.1297 9.74405L7.79895 16.6902C7.46385 17.1193 6.97001 17.362 6.4409 17.371L3.5308 17.4068C3.37559 17.4086 3.23979 17.3011 3.20452 17.147L2.54313 14.2715C2.42849 13.7429 2.54313 13.1965 2.87823 12.7755L8.23547 5.79621C8.32189 5.68423 8.4815 5.66452 8.59085 5.75321ZM16.6605 15.7945H11.9153C11.4523 15.7945 11.0757 16.177 11.0757 16.6473C11.0757 17.1185 11.4523 17.5001 11.9153 17.5001H16.6605C17.1235 17.5001 17.5 17.1185 17.5 16.6473C17.5 16.177 17.1235 15.7945 16.6605 15.7945Z" fill="#1467C2"/>
                    </svg>
                </div>
                <div @click="remove(props.id)" class="bg-[#F5D1D1] rounded-lg p-2 cursor-pointer h-9">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9059 4.37121C17.2301 4.37121 17.5 4.63953 17.5 4.98202V5.29868C17.5 5.63283 17.2301 5.90949 16.9059 5.90949H3.09488C2.76988 5.90949 2.5 5.63283 2.5 5.29868V4.98202C2.5 4.63953 2.76988 4.37121 3.09488 4.37121H5.52464C6.01821 4.37121 6.44775 4.01955 6.55879 3.52457L6.68603 2.95626C6.88378 2.18212 7.53458 1.66797 8.2802 1.66797H11.7206C12.4581 1.66797 13.1154 2.18212 13.3059 2.91626L13.442 3.52374C13.5522 4.01955 13.9818 4.37121 14.4762 4.37121H16.9059ZM15.6716 15.9464C15.9253 13.5824 16.3695 7.96505 16.3695 7.90839C16.3857 7.73756 16.3297 7.57507 16.2187 7.44341C16.0996 7.32174 15.9488 7.24841 15.7827 7.24841H4.22389C4.05694 7.24841 3.89809 7.32174 3.78787 7.44341C3.67602 7.57507 3.62091 7.73756 3.62902 7.90839C3.6305 7.9188 3.64644 8.11664 3.67308 8.44739C3.79143 9.91685 4.1211 14.0099 4.33412 15.9464C4.48486 17.3722 5.42094 18.2697 6.77684 18.3022C7.82315 18.3264 8.90106 18.3347 10.0033 18.3347C11.0415 18.3347 12.0967 18.3264 13.1746 18.3022C14.5775 18.2772 15.5128 17.3972 15.6716 15.9464Z" fill="#D13030"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="my-4 flex gap-4 md:flex-col w-full">
            <div class="md:flex md:justify-center w-[94px] md:w-full">
                <div class="rounded-md bg-[url('~/assets/img/transfer/bus1.jpg')] bg-center bg-cover w-[94px] h-[88px]"></div>
            </div>
            <div class="w-full">
                <div class="w-full flex justify-between flex-col">
                    <div class="flex gap-2">
                        <p class="text-[#000A15] text-base font-medium leading-[30px]">{{ props.transfer.from }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.66942 14.5996H29.2613C29.8211 14.5996 30.3808 14.3198 30.5208 13.76C30.8007 13.2002 30.6607 12.6405 30.2409 12.2206L24.6432 6.62295C24.0834 6.06318 23.2438 6.06318 22.684 6.62295C22.1243 7.18272 22.1243 8.02237 22.684 8.58214L25.9027 11.8008H9.66942C8.82977 11.8008 8.27 12.3606 8.27 13.2002C8.27 14.0399 8.82977 14.5996 9.66942 14.5996ZM8.68986 25.3751C8.96975 25.655 9.24963 25.795 9.66946 25.795C10.0893 25.795 10.3692 25.655 10.649 25.3751C11.2088 24.8154 11.2088 23.9757 10.649 23.4159L7.43038 20.1973H23.6637C24.5033 20.1973 25.0631 19.6375 25.0631 18.7979C25.0631 17.9582 24.5033 17.3984 23.6637 17.3984H4.07178C3.51201 17.3984 3.09218 17.6783 2.8123 18.2381C2.53242 18.7979 2.67236 19.3576 3.09218 19.7775L8.68986 25.3751Z" fill="#72A4DA"/>
                        </svg>
                        <p class="text-[#000A15] text-base font-medium leading-[30px]">{{ props.transfer.to }}</p>
                    </div>
                    <div class="px-3 py-1 w-20 text-[#47CB92] text-xs font-semibold rounded-3xl border-[1px] border-solid border-[#47CB92]">Popular</div>
                </div>
                <div class="w-full flex mt-2 flex-col lg:gap-1">
                    <div class="flex gap-2 w-full">
                        <p :style="{ fontSize: props.fontSize }" class="font-light text-[#666C73]">Transfer date and time:</p>
                        <p :style="{ fontSize: props.fontSize }" class="text-[#000A15] font-medium">{{ props.transfer.date }} | {{ props.transfer.time }}</p>
                    </div>
                    <div class="flex gap-2 w-full" v-if="props.transfer.includeReturn">
                        <p :style="{ fontSize: props.fontSize }" class="font-light text-[#666C73]">Date and time of return:</p>
                        <p :style="{ fontSize: props.fontSize }" class="text-[#000A15] font-medium">{{ props.transfer.returnDate }} | {{ props.transfer.returnTime }}</p>
                    </div>
                </div>
                <div class="w-full flex gap-1 flex-col">
                    <div class="flex gap-2 w-full mt-1">
                        <p :style="{ fontSize: props.fontSize }" class="font-light text-[#666C73]">Start address:</p>
                        <p :style="{ fontSize: props.fontSize }" class="text-[#000A15] font-medium">{{ props.transfer.startAdress }}</p>
                    </div>
                    <div class="flex gap-2 w-full mt-1">
                        <p :style="{ fontSize: props.fontSize }" class="font-light text-[#666C73]">Destination address:</p>
                        <p :style="{ fontSize: props.fontSize }" class="text-[#000A15] font-medium">{{ props.transfer.destinationAdress }}</p>
                    </div>
                </div>
                <div class="w-full flex gap-8 md:flex-col md:gap-1">
                    <div class="flex gap-2 mt-3 sm:flex-col md:mt-0">
                        <p class="font-light text-[#666C73]">Adults:</p>
                        <p class="text-[#000A15] font-medium">1</p>
                    </div>
                    <div class="flex gap-2 mt-3 sm:flex-col md:mt-0">
                        <p class="font-light text-[#666C73]">Child:</p>
                        <p class="text-[#000A15] font-medium">1</p>
                    </div>
                    <div class="flex gap-2 mt-3 sm:flex-col md:mt-0">
                        <p class="font-light text-[#666C73]">Infant:</p>
                        <p class="text-[#000A15] font-medium">1</p>
                    </div>
                    <!-- <div class="flex gap-2 mt-3 sm:flex-col">
                        <p :style="{ fontSize: props.fontSize }" class="font-light text-[#666C73]">Number of persons:</p>
                        <p :style="{ fontSize: props.fontSize }" class="text-[#000A15] font-medium">{{ props.transfer.personNum }}</p>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="w-full bg-[#B9D1ED] h-[1px] mt-6"></div>
        <div class="w-full flex justify-between pt-4 items-center md:flex-col md:gap-1">
            <div class="flex gap-2 mt-2">
                <svg width="47" height="24" viewBox="0 0 47 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="47" height="24" rx="12" fill="#D0E1F3"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2806 7.9471C22.2806 10.3112 20.3641 12.2277 18 12.2277C15.6359 12.2277 13.7194 10.3112 13.7194 7.9471C13.7194 5.58299 15.6359 3.6665 18 3.6665C20.3641 3.6665 22.2806 5.58299 22.2806 7.9471ZM10.6074 18.3996C10.6074 15.7466 12.7559 13.5981 15.4089 13.5981H20.5911C23.2441 13.5981 25.3926 15.7466 25.3926 18.3996C25.3926 19.4673 24.5267 20.3332 23.459 20.3332H12.541C11.4733 20.3332 10.6074 19.4673 10.6074 18.3996Z" fill="#1467C2"/>
                    <path d="M36.5304 17H35.2704V11.312C35.2704 11.112 35.2704 10.928 35.2704 10.76C35.2784 10.584 35.2864 10.416 35.2944 10.256C35.3024 10.088 35.3104 9.928 35.3184 9.776C35.2144 9.88 35.1064 9.98 34.9944 10.076C34.8824 10.172 34.7544 10.284 34.6104 10.412L33.6744 11.168L33.0264 10.352L35.4744 8.432H36.5304V17Z" fill="#1467C2"/>
                </svg>
                <svg width="47" height="24" viewBox="0 0 47 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="47" height="24" rx="12" fill="#D0E1F3"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8993 7.76905V5.92167C20.8993 5.63216 20.6646 5.39746 20.3751 5.39746H15.6244C15.3349 5.39746 15.1002 5.63216 15.1002 5.92167V7.76905H13.6138V18.6029H22.3856V7.76905H20.8993ZM19.8508 7.76489H16.1486V6.44589H19.8508V7.76489ZM11.4484 7.76908C10.4659 7.76908 9.6665 8.56842 9.6665 9.55097V16.821C9.6665 17.8035 10.4659 18.6029 11.4484 18.6029H12.5654V7.76908H11.4484ZM23.4342 7.76908H24.5512C25.5337 7.76908 26.3331 8.56842 26.3331 9.55097V16.821C26.3331 17.8035 25.5337 18.6029 24.5512 18.6029H23.4342V7.76908Z" fill="#1467C2"/>
                    <path d="M38.0424 10.412C38.0424 10.796 37.9664 11.132 37.8144 11.42C37.6704 11.7 37.4624 11.928 37.1904 12.104C36.9184 12.28 36.6064 12.408 36.2544 12.488V12.536C36.9424 12.616 37.4544 12.832 37.7904 13.184C38.1344 13.528 38.3064 13.984 38.3064 14.552C38.3064 15.048 38.1864 15.492 37.9464 15.884C37.7144 16.268 37.3504 16.572 36.8544 16.796C36.3664 17.012 35.7384 17.12 34.9704 17.12C34.5144 17.12 34.0904 17.084 33.6984 17.012C33.3064 16.94 32.9344 16.82 32.5824 16.652V15.5C32.9424 15.684 33.3264 15.824 33.7344 15.92C34.1504 16.016 34.5464 16.064 34.9224 16.064C35.6504 16.064 36.1744 15.928 36.4944 15.656C36.8144 15.376 36.9744 14.988 36.9744 14.492C36.9744 14.172 36.8904 13.912 36.7224 13.712C36.5544 13.504 36.2984 13.352 35.9544 13.256C35.6104 13.152 35.1824 13.1 34.6704 13.1H33.8904V12.056H34.6824C35.1704 12.056 35.5664 11.996 35.8704 11.876C36.1744 11.748 36.3984 11.572 36.5424 11.348C36.6864 11.124 36.7584 10.868 36.7584 10.58C36.7584 10.196 36.6304 9.9 36.3744 9.692C36.1264 9.476 35.7664 9.368 35.2944 9.368C35.0064 9.368 34.7384 9.4 34.4904 9.464C34.2504 9.528 34.0304 9.612 33.8304 9.716C33.6304 9.82 33.4344 9.936 33.2424 10.064L32.6184 9.188C32.9304 8.948 33.3104 8.744 33.7584 8.576C34.2144 8.4 34.7384 8.312 35.3304 8.312C36.2184 8.312 36.8904 8.508 37.3464 8.9C37.8104 9.284 38.0424 9.788 38.0424 10.412Z" fill="#1467C2"/>
                </svg>
            </div>
            <div>
                <p class="text-[#4D545B] font-medium">Price: <span class="text-[#000A15] font-bold">50,000 AMD</span></p>
            </div>
        </div>
        <div class="w-full bg-[#B9D1ED] h-[1px] mt-6"></div>
    </div>
</template>

<script setup>
const props = defineProps(["fontSize", "transfer", "id"])
import { useMyCart } from "~/stores/store";
const myCart = useMyCart();
const { removeFromCart } = myCart;

function remove(index) {
    removeFromCart(index);
    window.location.reload()

}
</script>