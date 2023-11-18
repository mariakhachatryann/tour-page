<template>
    <div class="relative max-w-[984px] xl:w-full">
        <img class="rounded-lg w-full h-[560px] sm:w-[320px] sm:h-[208px]" src="~/assets/img/tour/frame.png" alt="">
        <div class="mt-4 flex gap-2">
            <img class="w-6 h-6" src="~/assets/img/owl.png" alt="">
            <p class="text-[#666C73]">Comments</p>
            <p class="text-[#333B44] font-medium">(14)</p>
        </div>
        <div class="mt-4">
            <p class="text-[#000A15] text-[32px] leading-[48px] font-extrabold">{{ props.selectedTour.title }}</p>
        </div>
        <div class="flex mt-4">
            <p class="font-medium mr-2 text-xl">15,000 AMD</p>
            <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2806 7.94729C14.2806 10.3114 12.3641 12.2279 10 12.2279C7.63589 12.2279 5.7194 10.3114 5.7194 7.94729C5.7194 5.58318 7.63589 3.66669 10 3.66669C12.3641 3.66669 14.2806 5.58318 14.2806 7.94729ZM2.60742 18.3998C2.60742 15.7468 4.75586 13.5983 7.40885 13.5983H12.5911C15.2441 13.5983 17.3926 15.7468 17.3926 18.3998C17.3926 19.4675 16.5267 20.3334 15.459 20.3334H4.54102C3.47331 20.3334 2.60742 19.4675 2.60742 18.3998Z" fill="#80858A" />
                <path d="M29.392 18H28.512V9.504C28.512 9.19467 28.512 8.928 28.512 8.704C28.512 8.48 28.5173 8.272 28.528 8.08C28.5387 7.888 28.544 7.70667 28.544 7.536C28.3947 7.67467 28.256 7.80267 28.128 7.92C28 8.02667 27.8293 8.16 27.616 8.32L26.016 9.552L25.536 8.912L28.64 6.576H29.392V18Z" fill="#4D545B" />
            </svg>
        </div>
        <div class="flex mt-4 sm:flex-col sm:gap-2">
            <div class="flex gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.9165 8.59748C2.9165 4.76426 6.11974 1.66602 9.99438 1.66602C13.8799 1.66602 17.0832 4.76426 17.0832 8.59748C17.0832 10.5291 16.3807 12.3224 15.2244 13.8423C13.9488 15.5189 12.3766 16.9797 10.607 18.1264C10.2019 18.3914 9.8364 18.4114 9.39188 18.1264C7.61212 16.9797 6.03991 15.5189 4.77525 13.8423C3.61816 12.3224 2.9165 10.5291 2.9165 8.59748ZM7.66169 8.81331C7.66169 10.0974 8.70955 11.1074 9.99438 11.1074C11.28 11.1074 12.338 10.0974 12.338 8.81331C12.338 7.53918 11.28 6.48004 9.99438 6.48004C8.70955 6.48004 7.66169 7.53918 7.66169 8.81331Z" fill="#1467C2"/>
                </svg>
                <p class="text-primaryBlue font-bold">Start Location:</p>
            </div>
            <p class="text-[#333B44] font-medium ml-2">96, Nalbandyan str.</p>
            <p class="text-[#666C73] font-normal ml-5">Languages <span class="text-[#333B44] font-medium">ENG, RU, HY</span></p>
        </div>
        <div class="flex mt-4 sm:flex-col sm:gap-2">
            <div class="flex">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M15.8926 4.10741C14.3186 2.53346 12.2259 1.66663 10 1.66663C7.77411 1.66663 5.6814 2.53346 4.10744 4.10741C2.53348 5.68137 1.66669 7.77405 1.66669 9.99996C1.66669 12.2259 2.53348 14.3186 4.10744 15.8925C5.6814 17.4664 7.77411 18.3333 10 18.3333C12.2259 18.3333 14.3186 17.4665 15.8926 15.8925C17.4666 14.3185 18.3334 12.2259 18.3334 9.99996C18.3334 7.77405 17.4666 5.68134 15.8926 4.10741ZM10 16.6976C6.30689 16.6976 3.30236 13.6931 3.30236 9.99996C3.30236 9.99391 3.30256 9.98792 3.30259 9.98193C3.30259 9.9804 3.30236 9.97893 3.30236 9.9774C3.30236 9.97483 3.30269 9.97236 3.30275 9.96982C3.319 6.32096 6.26779 3.3523 9.90901 3.30348C9.91662 3.30312 9.92417 3.30234 9.93189 3.30234C9.93651 3.30234 9.941 3.30289 9.94559 3.30302C9.96376 3.30289 9.98186 3.30234 10.0001 3.30234C13.6932 3.30234 16.6977 6.30689 16.6977 9.99999C16.6977 13.6931 13.6932 16.6976 10 16.6976Z" fill="#666C73" />
                    <path d="M15.0875 10.4023C14.8152 10.4023 14.5944 10.1815 14.5944 9.9092C14.5944 9.63687 14.8152 9.41611 15.0875 9.41611H15.6819C15.4027 6.67926 13.1831 4.50813 10.425 4.30429V4.8217C10.425 5.09404 10.2042 5.3148 9.93186 5.3148C9.65953 5.3148 9.43876 5.09404 9.43876 4.8217V4.31607C6.72144 4.58235 4.55695 6.7608 4.31206 9.48424H4.84436C5.11669 9.48424 5.33746 9.70501 5.33746 9.97734C5.33746 10.2497 5.11669 10.4704 4.84436 10.4704H4.30803C4.53475 13.2377 6.74263 15.4524 9.50692 15.6899V15.0648C9.50692 14.7925 9.72769 14.5717 10 14.5717C10.2724 14.5717 10.4931 14.7925 10.4931 15.0648V15.6899C13.28 15.4504 15.5014 13.2013 15.6971 10.4023H15.0875ZM11.9961 8.7012L10.3487 10.3486C10.2562 10.4411 10.1308 10.4931 10.0001 10.4931C9.86929 10.4931 9.74384 10.4411 9.65139 10.3486L6.78378 7.48101C6.5912 7.28847 6.5912 6.97626 6.78378 6.78368C6.97632 6.59111 7.28853 6.59111 7.48111 6.78368L10.0001 9.30263L11.2988 8.00387C11.4914 7.81129 11.8036 7.81129 11.9962 8.00387C12.1887 8.19641 12.1887 8.50865 11.9961 8.7012Z" fill="#666C73" />
                </svg>
                <p class="ml-1 mr-4 m-[-2.5px]">
                    <span class="text-[#666C73]">Start time:</span> 11:40 PM
                </p>
            </div>
            <div class="flex">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M10 1.66663C8.35185 1.66663 6.74068 2.15537 5.37027 3.07105C3.99986 3.98672 2.93176 5.28821 2.30103 6.81093C1.6703 8.33365 1.50527 10.0092 1.82681 11.6257C2.14836 13.2422 2.94203 14.7271 4.10747 15.8925C5.2729 17.058 6.75776 17.8516 8.37427 18.1732C9.99078 18.4947 11.6663 18.3297 13.1891 17.699C14.7118 17.0682 16.0133 16.0001 16.9289 14.6297C17.8446 13.2593 18.3334 11.6481 18.3334 9.99996C18.3307 7.79062 17.4519 5.67252 15.8897 4.11028C14.3275 2.54804 12.2094 1.66923 10 1.66663ZM12.8084 12.8083C12.6663 12.9503 12.4736 13.0301 12.2727 13.0301C12.0719 13.0301 11.8792 12.9503 11.7371 12.8083L9.46442 10.5356C9.32233 10.3935 9.24249 10.2009 9.24245 9.99996V5.4545C9.24245 5.25358 9.32226 5.06089 9.46434 4.91882C9.60641 4.77674 9.7991 4.69693 10 4.69693C10.2009 4.69693 10.3936 4.77674 10.5357 4.91882C10.6778 5.06089 10.7576 5.25358 10.7576 5.4545V9.68632L12.8084 11.7371C12.9504 11.8791 13.0302 12.0718 13.0302 12.2727C13.0302 12.4736 12.9504 12.6662 12.8084 12.8083Z" fill="#666C73" />
                </svg>
                <p class="ml-1 m-[-2.5px]">
                    <span class="text-[#666C73]">Duration time:</span> Full day
                </p>
            </div>
        </div>
        <div class="mt-4">
            <p class="text-[#333B44]">This tour visits Khor Virap monastery, a great place to embrace the most picturesque views of Mount Ararat. Then comes Noravank monastery complex, magnificent in its construction, as the church of Holy Mother of God is 2-storied monastery. The last stop is in Tatev monastery, a spiritual center, that had an outstanding scientific and political significance. The monastery is surrounded by beautiful nature. It is here, where one can take the World's longest ropeway without stops – "Tatever".</p>
        </div>
        <div class="mt-8 flex gap-8 flex-wrap">
            <div @click="openGallery" v-for="instane in instances" :key="instane">
                <img class="h-40 w-40 rounded-lg cursor-pointer" src="~/assets/img/tour/specTour.jpg" alt="">
            </div>
            <div class="w-full flex justify-center items-center px-5" v-if="galleryState">
                <v-overlay v-model="galleryState" class="flex w-full justify-center items-center">
                    <v-carousel class="rounded-lg max-w-[900px] h-[700px] md:max-w-[500px] md:max-h-[300px] w-full" progress color="#739EDA" continuous :touch="true" interval="5000" cycle show-arrows="hover">
                        <v-carousel-item class="max-w-[900px] h-[700px] md:max-w-[500px] md:max-h-[300px] w-full" v-for="item in [1, 2, 3, 4, 5, 6]" :key="item" transition="slide-x-transition">
                            <v-sheet class="w-full">
                                <div class="max-w-[900px] h-[700px] md:max-w-[500px] md:max-h-[300px] w-full">
                                    <img class="w-[900px] h-[700px] md:w-[500px] md:h-[300px] bg-cover bg-center" src="~/assets/img/hotel/hotel.jpg" />
                                    <!-- <div class="bg-[#eb7434] w-[900px] h-[700px] md:w-[500px] md:h-[300px] text-center">{{ item }}</div> -->
                                </div>
                            </v-sheet>
                        </v-carousel-item>
                    </v-carousel>
                </v-overlay>
                    <!-- <div class="w-full absolute z-50 flex justify-center items-center">
                        <div id="spliderGallery" class="splide w-full h-[500px] mt-10">
                            <div class="splide__track h-[500px] w-full">
                                <ul class="splide__list h-[500px] w-full gap-6">
                                    <div data-splide-interval="3500" class="splide__slide ml-20 w-[400px] bg-cover bg-center bg-no-repeat bg-[url('~/assets/img/tour/frame.png')]"> </div>
                                    <div data-splide-interval="3500" class="splide__slide ml-20 w-[400px] bg-cover bg-center bg-no-repeat bg-[url('~/assets/img/hotel/hotel.jpg')]" ></div>
                                    <div data-splide-interval="3500" class="splide__slide ml-20 w-[400px] bg-cover bg-center bg-no-repeat bg-[url('~/assets/img/tour/frame9.png')]" ></div>
                                    <div data-splide-interval="3500" class="splide__slide ml-20 w-[400px] bg-cover bg-center bg-no-repeat bg-[url('~/assets/img/tour/specTour.jpg')]" ></div>
                                </ul>
                            </div>
                        </div>
                    </div> -->
            </div>
        </div>
        <ShareComp />
    </div>
</template>

<script setup>
import Splide from "@splidejs/splide";
// import '@splidejs/splide/css';
const props = defineProps(["selectedTour"])
const instances = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const galleryState = ref(false);

function openGallery() {
    galleryState.value = !galleryState.value
    console.log("opened");
}


const splideOptions = {
    type   : 'loop',
  perPage: 3,
  perMove: 1,
  focus  : 'center',
};

let splide;

// const initSplide = 

const destroySplide = () => {
    if (splide) {
        splide.destroy();
    }
}


// onMounted(() => {
//     splide = new Splide("#spliderGallery", splideOptions);
//     splide.mount();    
// });
// onUnmounted(destroySplide);
</script>