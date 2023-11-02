<template>
    <div class="md:px-4 bg-[#E8F0F9] hover:bg-[#fff] hover:scale-95 hover:duration-300 hover:shadow-xl rounded-2xl">
        <div :style="{ backgroundImage: `url(${imgSrc})` }" class="relative p-[0.5px] rounded-t-2xl h-[278px] bg-cover bg-center bg-no-repeat">
            <div class="absolute py-2 px-4 rounded-t-2xl rounded-br-2xl bg-transparentCol">
                <div class="flex gap-1">
                    <img src="~/assets/img/loc.svg" alt="">
                    <p class="text-xs font-medium text-[#FDFFFE]">Yerevan</p>
                </div>
                <div class="mt-1 flex gap-[5px]">
                    <img v-for="star in [0, 1, 2, 3, 4]" :key="star" src="~/assets/img/star.svg" alt="">
                </div>
            </div>
        </div>
        <div class="p-4 rounded-b-2xl">
            <p class="text-xl font-bold leading-[30px] line-clamp-1">
                <slot name="title"></slot>
            </p>
            <div class="flex mt-2">
                <p class="font-medium mr-2">15,000 AMD</p>
                <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2806 7.94729C14.2806 10.3114 12.3641 12.2279 10 12.2279C7.63589 12.2279 5.7194 10.3114 5.7194 7.94729C5.7194 5.58318 7.63589 3.66669 10 3.66669C12.3641 3.66669 14.2806 5.58318 14.2806 7.94729ZM2.60742 18.3998C2.60742 15.7468 4.75586 13.5983 7.40885 13.5983H12.5911C15.2441 13.5983 17.3926 15.7468 17.3926 18.3998C17.3926 19.4675 16.5267 20.3334 15.459 20.3334H4.54102C3.47331 20.3334 2.60742 19.4675 2.60742 18.3998Z" fill="#80858A"/>
                    <path d="M29.392 18H28.512V9.504C28.512 9.19467 28.512 8.928 28.512 8.704C28.512 8.48 28.5173 8.272 28.528 8.08C28.5387 7.888 28.544 7.70667 28.544 7.536C28.3947 7.67467 28.256 7.80267 28.128 7.92C28 8.02667 27.8293 8.16 27.616 8.32L26.016 9.552L25.536 8.912L28.64 6.576H29.392V18Z" fill="#4D545B"/>
                </svg>
            </div>
            <div class="flex mt-2 gap-2">
                <FacButton v-for="fac in props.hotel.facilities.slice(0, 3)" :key="fac">{{ fac }}</FacButton>
                <div class="rounded-2xl bg-[#72A4DA] text-[#FDFFFE] font-medium px-2 py-1">+4</div>
            </div>
            <div class="mt-4">
                <p class="text-xs text-[#80858A]">Favourite Choice</p>
                <div class="flex gap-2 w-full bg-[#F1F7FE] mt-2 p-2 rounded-lg border-[1px] border-[#D0E1F3]">
                    <img class="w-[56px] h-[56px] rounded-lg" src="~/assets/img/transfer/bus.png" alt="">
                    <div class="flex flex-col gap-2">
                        <div>
                            <p class="text-[#000A15] font-medium">Miniven</p>
                        </div>
                        <div class="flex gap-2">
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["hotel"])

import hotel from "~/assets/img/hotel/hotel.jpg";
import hotel1 from "~/assets/img/hotel/hotel1.jpg";
import hotel2 from "~/assets/img/hotel/hotel2.jpg";
import hotel3 from "~/assets/img/hotel/hotel3.jpg";
import hotel4 from "~/assets/img/hotel/hotel4.jpg";
import hotel5 from "~/assets/img/hotel/hotel5.jpg";

const imgSources = { hotel, hotel1, hotel2, hotel3, hotel4, hotel5, };
const imgSrc = computed(() => imgSources[props.hotel.img] || hotel);
</script>
