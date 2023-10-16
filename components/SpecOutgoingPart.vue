<template>
    <div class="max-w-[984px] xl:w-full">
        <img class="rounded-lg w-full h-[560px] sm:w-[320px] sm:h-[208px]" src="~/assets/img/outgoing/outgoingTour.jpg" alt="">
        <div class="mt-4 flex justify-between">
            <div class="flex gap-2">
                <img class="w-6 h-6" src="~/assets/img/owl.png" alt="">
                <p class="text-[#666C73]">Comments</p>
                <p class="text=[#333B44] font-medium">(14)</p>
            </div>
            <div class="flex gap-1 bg-transparentCol py-1 px-4 rounded-[40px]">
                <img v-for="star in [0, 1, 2, 3, 4]" :key="star" src="~/assets/img/star.svg" alt="">
            </div>
        </div>
        <div class="mt-4">
            <p class="text-[#000A15] text-[32px] leading-[48px] font-extrabold">{{ props.selectedOutgoing.title }}</p>
        </div>
        <div class="flex mt-2 justify-between">
            <div class="flex mt-2">
                <p class="font-medium mr-2 text-xl">15,000 AMD</p>
                <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2806 7.94729C14.2806 10.3114 12.3641 12.2279 10 12.2279C7.63589 12.2279 5.7194 10.3114 5.7194 7.94729C5.7194 5.58318 7.63589 3.66669 10 3.66669C12.3641 3.66669 14.2806 5.58318 14.2806 7.94729ZM2.60742 18.3998C2.60742 15.7468 4.75586 13.5983 7.40885 13.5983H12.5911C15.2441 13.5983 17.3926 15.7468 17.3926 18.3998C17.3926 19.4675 16.5267 20.3334 15.459 20.3334H4.54102C3.47331 20.3334 2.60742 19.4675 2.60742 18.3998Z" fill="#80858A" />
                    <path d="M29.392 18H28.512V9.504C28.512 9.19467 28.512 8.928 28.512 8.704C28.512 8.48 28.5173 8.272 28.528 8.08C28.5387 7.888 28.544 7.70667 28.544 7.536C28.3947 7.67467 28.256 7.80267 28.128 7.92C28 8.02667 27.8293 8.16 27.616 8.32L26.016 9.552L25.536 8.912L28.64 6.576H29.392V18Z" fill="#4D545B" />
                </svg>
            </div>
            <div>
                <div class="bg-[#5B95D4] text-[#FDFFFE] rounded-[27px] px-3 py-1">7 days / 8 nights</div>
            </div>
        </div>
        <div class="flex gap-1 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.91699 8.59748C2.91699 4.76426 6.12023 1.66602 9.99486 1.66602C13.8804 1.66602 17.0837 4.76426 17.0837 8.59748C17.0837 10.5291 16.3812 12.3224 15.2249 13.8423C13.9493 15.5189 12.3771 16.9797 10.6074 18.1264C10.2024 18.3914 9.83689 18.4114 9.39237 18.1264C7.61261 16.9797 6.0404 15.5189 4.77574 13.8423C3.61865 12.3224 2.91699 10.5291 2.91699 8.59748ZM7.66218 8.81331C7.66218 10.0974 8.71004 11.1074 9.99486 11.1074C11.2805 11.1074 12.3385 10.0974 12.3385 8.81331C12.3385 7.53918 11.2805 6.48004 9.99486 6.48004C8.71004 6.48004 7.66218 7.53918 7.66218 8.81331Z" fill="#1467C2"/>
            </svg>
            <p class="text-primaryBlue font-bold">Location On Map</p>
        </div>
        <div class="flex mt-4 md:flex-col md:gap-2">
            <div class="flex gap-1">
                <img src="~/assets/img/loc.svg" alt="">
                <p class="text-[#666C73] font-normal">Location: <span class="text-[#333B44] font-medium">Egypt</span></p>
            </div>
            <div>
                <p class="text-[#666C73] font-normal ml-5">Adress: <span class="text-[#333B44] font-medium">Yerevan</span></p>
            </div>
        </div>
        <div class="mt-4">
            <p class="text-[#333B44]">This tour visits Khor Virap monastery, a great place to embrace the most picturesque views of Mount Ararat. Then comes Noravank monastery complex, magnificent in its construction, as the church of Holy Mother of God is 2-storied monastery. The last stop is in Tatev monastery, a spiritual center, that had an outstanding scientific and political significance. The monastery is surrounded by beautiful nature. It is here, where one can take the World's longest ropeway without stops – "Tatever".</p>
        </div>
        <div class="mt-8 flex bg-[#F7FAFE] w-full rounded-lg border-[1px] border-solid border-[#D0E1F3]">
            <div class="bg-[url('~/assets/img/transfer/bus.png')] rounded-tl-lg rounded-bl-lg bg-center bg-cover w-14 h-14" ></div>
            <div class="flex w-full justify-between items-center p-4 sm:flex-col">
                <div class="flex gap-2">
                    <p class="text-[#000A15] font-bold">Miniven</p>
                    <svg width="47" height="24" viewBox="0 0 47 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="47" height="24" rx="12" fill="#D0E1F3"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2806 7.94661C22.2806 10.3107 20.3641 12.2272 18 12.2272C15.6359 12.2272 13.7194 10.3107 13.7194 7.94661C13.7194 5.58251 15.6359 3.66602 18 3.66602C20.3641 3.66602 22.2806 5.58251 22.2806 7.94661ZM10.6074 18.3991C10.6074 15.7461 12.7559 13.5977 15.4089 13.5977H20.5911C23.2441 13.5977 25.3926 15.7461 25.3926 18.3991C25.3926 19.4668 24.5267 20.3327 23.459 20.3327H12.541C11.4733 20.3327 10.6074 19.4668 10.6074 18.3991Z" fill="#1467C2"/>
                        <path d="M36.5304 17H35.2704V11.312C35.2704 11.112 35.2704 10.928 35.2704 10.76C35.2784 10.584 35.2864 10.416 35.2944 10.256C35.3024 10.088 35.3104 9.928 35.3184 9.776C35.2144 9.88 35.1064 9.98 34.9944 10.076C34.8824 10.172 34.7544 10.284 34.6104 10.412L33.6744 11.168L33.0264 10.352L35.4744 8.432H36.5304V17Z" fill="#1467C2"/>
                    </svg>
                    <svg width="47" height="24" viewBox="0 0 47 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="47" height="24" rx="12" fill="#D0E1F3"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8998 7.76808V5.9207C20.8998 5.63118 20.6651 5.39648 20.3755 5.39648H15.6249C15.3354 5.39648 15.1007 5.63118 15.1007 5.9207V7.76808H13.6142V18.6019H22.3861V7.76808H20.8998ZM19.8513 7.76391H16.1491V6.44491H19.8513V7.76391ZM11.4489 7.76811C10.4664 7.76811 9.66699 8.56745 9.66699 9.54999V16.82C9.66699 17.8025 10.4664 18.6019 11.4489 18.6019H12.5659V7.76811H11.4489ZM23.4347 7.76811H24.5517C25.5342 7.76811 26.3336 8.56745 26.3336 9.54999V16.82C26.3336 17.8025 25.5342 18.6019 24.5517 18.6019H23.4347V7.76811Z" fill="#1467C2"/>
                        <path d="M38.0424 10.412C38.0424 10.796 37.9664 11.132 37.8144 11.42C37.6704 11.7 37.4624 11.928 37.1904 12.104C36.9184 12.28 36.6064 12.408 36.2544 12.488V12.536C36.9424 12.616 37.4544 12.832 37.7904 13.184C38.1344 13.528 38.3064 13.984 38.3064 14.552C38.3064 15.048 38.1864 15.492 37.9464 15.884C37.7144 16.268 37.3504 16.572 36.8544 16.796C36.3664 17.012 35.7384 17.12 34.9704 17.12C34.5144 17.12 34.0904 17.084 33.6984 17.012C33.3064 16.94 32.9344 16.82 32.5824 16.652V15.5C32.9424 15.684 33.3264 15.824 33.7344 15.92C34.1504 16.016 34.5464 16.064 34.9224 16.064C35.6504 16.064 36.1744 15.928 36.4944 15.656C36.8144 15.376 36.9744 14.988 36.9744 14.492C36.9744 14.172 36.8904 13.912 36.7224 13.712C36.5544 13.504 36.2984 13.352 35.9544 13.256C35.6104 13.152 35.1824 13.1 34.6704 13.1H33.8904V12.056H34.6824C35.1704 12.056 35.5664 11.996 35.8704 11.876C36.1744 11.748 36.3984 11.572 36.5424 11.348C36.6864 11.124 36.7584 10.868 36.7584 10.58C36.7584 10.196 36.6304 9.9 36.3744 9.692C36.1264 9.476 35.7664 9.368 35.2944 9.368C35.0064 9.368 34.7384 9.4 34.4904 9.464C34.2504 9.528 34.0304 9.612 33.8304 9.716C33.6304 9.82 33.4344 9.936 33.2424 10.064L32.6184 9.188C32.9304 8.948 33.3104 8.744 33.7584 8.576C34.2144 8.4 34.7384 8.312 35.3304 8.312C36.2184 8.312 36.8904 8.508 37.3464 8.9C37.8104 9.284 38.0424 9.788 38.0424 10.412Z" fill="#1467C2"/>
                    </svg>
                </div>
                <NuxtLink to="/transfer">
                    <div class="flex gap-1 items-center">
                        <p class="text-primaryBlue font-bold">View Transport</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.641066 13.2759C0.396988 13.0318 0.396988 12.6361 0.641066 12.392L6.03246 7.00065L0.641066 1.60926C0.396988 1.36518 0.396988 0.969453 0.641066 0.725376C0.885144 0.481297 1.28087 0.481297 1.52495 0.725376L7.35828 6.55871C7.60236 6.80279 7.60236 7.19851 7.35828 7.44259L1.52495 13.2759C1.28087 13.52 0.885144 13.52 0.641066 13.2759Z" fill="#1467C2"/>
                        </svg>
                    </div>
                </NuxtLink>
            </div>
        </div>
        <div class="mt-8 flex gap-8 flex-wrap">
            <img v-for="instane in instances" :key="instane" class="h-40 w-40 rounded-lg" src="~/assets/img/tour/specTour.jpg" alt="">
        </div>
        <div class="roundend-lg border-[1px] border-solid border-[#D0E1F3] my-8">
            <div class="py-4 px-2 bg-[#E8F0F9] flex justify-center items-center">
                <p class="text-2xl font-medium text-[#000A15]">Facilities</p>
            </div>
            <div class="p-8 flex gap-4 flex-wrap justify-center">
                <FacButton v-for="facility in selectedOutgoing.facilities" :key="facility">{{ facility }}</FacButton>
            </div>
        </div>
        <ShareComp />
    </div>
</template>

<script setup>
const props = defineProps(["selectedOutgoing"])
const instances = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
</script>