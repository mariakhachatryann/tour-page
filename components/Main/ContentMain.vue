<template>
    <div class="flex py-20 px-8 justify-center items-center lg:flex-col lg:justify-center lg:items-center lg:px-8">
        <div class="w-[558px] mr-[150px] lg:m-0 lg:w-full lg:flex lg:items-center lg:flex-col lg:text-center lg:mb-8 md:p-0 sm:p-0">
            <h1 class="font-extrabold text-[48px] lg:text-[32px]">{{ $t("mainText") }}</h1>
            <p class="text-primaryGrey font-normal text-base lg:my-4">{{ $t("mainBottom") }}</p>
            <button class="px-8 py-3 lg:px-4 lg:max-w-[790px] lg:w-full lg:py-3 text-base font-bold mt-7 rounded-lg bg-[#fff] border-solid text-primaryBlue border-[1px] border-primaryBlue hover:bg-primaryBlue hover:text-white hover:duration-300">
                <NuxtLink to="/tours">Discover our tours</NuxtLink>
            </button>
        </div>
        <div class="h-[530px] sm:px-1" >
            <div id="splider" class="splide h-[354px]">
                <div class="splide__track h-[354px]">
                    <ul class="splide__list h-[354px]">
                        <div data-splide-interval="3500" class="splide__slide relative rounded-t-2xl sm:max-w-[310px] sm:w-full max-w-[794px] lg:max-w-[960px] h-[354px] bg-cover bg-center bg-no-repeat bg-[url('~/assets/img/tour/frame.png')]"> </div>
                        <div data-splide-interval="3500" class="splide__slide relative rounded-t-2xl sm:max-w-[310px] sm:w-full max-w-[794px] lg:max-w-[960px] h-[354px] bg-cover bg-center bg-no-repeat bg-[url('~/assets/img/hotel/hotel.jpg')]" ></div>
                        <div data-splide-interval="3500" class="splide__slide relative rounded-t-2xl sm:max-w-[310px] sm:w-full max-w-[794px] lg:max-w-[960px] h-[354px] bg-cover bg-center bg-no-repeat bg-[url('~/assets/img/tour/frame9.png')]" ></div>
                    </ul>
                    <div class="splide__arrows top-0">
                        <svg class="splide__arrow splide__arrow--prev rounded-t-2xl" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M19.9994 -0.000396729C31.0294 -0.000396729 39.9994 8.9716 39.9994 19.9996C39.9994 31.0276 31.0294 39.9996 19.9994 39.9996C8.97145 39.9996 -0.000549316 31.0276 -0.000549316 19.9996C-0.000549316 8.9716 8.97145 -0.000396729 19.9994 -0.000396729Z" fill="white"/>
                            <path d="M23.6441 11.6859C23.2621 11.6859 22.8781 11.8319 22.5861 12.1239L15.6121 19.0639C15.3301 19.3459 15.1721 19.7279 15.1721 20.1279C15.1721 20.5259 15.3301 20.9079 15.6121 21.1899L22.5861 28.1339C23.1721 28.7179 24.1201 28.7179 24.7061 28.1299C25.2901 27.5419 25.2881 26.5919 24.7021 26.0079L18.7961 20.1279L24.7021 14.2479C25.2881 13.6639 25.2901 12.7159 24.7061 12.1279C24.4141 11.8319 24.0281 11.6859 23.6441 11.6859Z" fill="#1467C2"/>
                        </svg>
                        <svg class="splide__arrow splide__arrow--next rounded-t-2xl" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M19.9994 -0.000396729C31.0294 -0.000396729 39.9994 8.9716 39.9994 19.9996C39.9994 31.0276 31.0294 39.9996 19.9994 39.9996C8.97139 39.9996 -0.000610352 31.0276 -0.000610352 19.9996C-0.000610352 8.9716 8.97139 -0.000396729 19.9994 -0.000396729Z" fill="white"/>
                            <path d="M17.1142 11.5582C17.4962 11.5582 17.8802 11.7042 18.1722 11.9962L25.1462 18.9362C25.4282 19.2182 25.5862 19.6002 25.5862 20.0002C25.5862 20.3982 25.4282 20.7802 25.1462 21.0622L18.1722 28.0062C17.5862 28.5902 16.6382 28.5902 16.0522 28.0022C15.4682 27.4142 15.4702 26.4642 16.0562 25.8802L21.9622 20.0002L16.0562 14.1202C15.4702 13.5362 15.4682 12.5882 16.0522 12.0002C16.3442 11.7042 16.7302 11.5582 17.1142 11.5582Z" fill="#1467C2"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="flex sm:flex-col max-w-[794px] sm:max-w-[310px] lg:max-w-[960px] min-h-[170px] rounded-b-2xl bg-[#D0E1F3] py-[20px] px-[21px]">
                <div class="max-w-[586px]">
                    <p class="text-[21px] font-bold leading-8 line-clamp-2">Gyumri (Urban life museum, Black Fortress, walking through the old streets), Harichavank</p>
                    <p class="text-[#333B44] text-[14px] mt-2 sm:mb-4 line-clamp-3">On this tour you will visit Gyumri, the second largest city in Armenia, one of the main cultural centers of the republic. The only Catholic…</p>
                </div>
                <div class="pl-8 min-w-[160px] sm:pl-0 ">
                    <div class="flex min-w-[110px]">
                        <p class="mr-[2px] text-base font-medium text-[#000A15] sm:mr-0 line-clamp-1">15,000 AMD</p>
                        <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2806 7.94729C14.2806 10.3114 12.3641 12.2279 10 12.2279C7.63589 12.2279 5.7194 10.3114 5.7194 7.94729C5.7194 5.58318 7.63589 3.66669 10 3.66669C12.3641 3.66669 14.2806 5.58318 14.2806 7.94729ZM2.60742 18.3998C2.60742 15.7468 4.75586 13.5983 7.40885 13.5983H12.5911C15.2441 13.5983 17.3926 15.7468 17.3926 18.3998C17.3926 19.4675 16.5267 20.3334 15.459 20.3334H4.54102C3.47331 20.3334 2.60742 19.4675 2.60742 18.3998Z" fill="#80858A"/>
                            <path d="M29.392 18H28.512V9.504C28.512 9.19467 28.512 8.928 28.512 8.704C28.512 8.48 28.5173 8.272 28.528 8.08C28.5387 7.888 28.544 7.70667 28.544 7.536C28.3947 7.67467 28.256 7.80267 28.128 7.92C28 8.02667 27.8293 8.16 27.616 8.32L26.016 9.552L25.536 8.912L28.64 6.576H29.392V18Z" fill="#4D545B"/>
                        </svg>
                    </div>
                    <button class="bg-primaryBlue text-[#FDFFFE] h-[48px] py-3 px-5 mt-[60px] rounded-lg sm:mt-4 sm:w-full sm:px-0 hover:bg-[#4385CE] hover:duration-300 hover:text-[#FDFFFE]">Order Now</button>
                </div>
            </div>
        </div> 
    </div>
</template>

<script setup>
import Splide from "@splidejs/splide";
import '@splidejs/splide/css';

const splideOptions = {
    type: "loop",
    perPage: 1,
    arrows: true,
    pagination: false,
    autoplay: true,
    drag: true
};

let splide;

const initSplide = () => {
    splide = new Splide("#splider", splideOptions);
    splide.mount();
}

const destroySplide = () => {
    if (splide) {
        splide.destroy();
        splide = null;
    }
}

onMounted(initSplide);
onUnmounted(destroySplide);
</script>