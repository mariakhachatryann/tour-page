<template>
    <div class="flex justify-center items-center mt-8 px-8">
        <div class="max-w-[1384px] flex w-full flex-col xl:flex-col-reverse gap-6">
            <div class="other flex gap-6 w-full md:flex-col">
                <div id="splider" class="splide md:w-full w-1/2 h-96 p-0" role="group" aria-label="Splide Basic HTML Example">
                    <div class="splide__track">
                        <ul class="splide__list">
                            <li class="splide__slide">
                                <div class="w-full h-96 rounded-lg bg-[url('~/assets/img/hotel/hotel.jpg')] bg-center"></div>
                                <!-- <img class="w-full h-auto" src="~/assets/img/frame7.jpg" alt=""> -->
                            </li>
                            <li class="splide__slide">
                                <div class="w-full h-96 rounded-lg bg-[url('~/assets/img/hotel/hotel1.jpg')] bg-center"></div>
                            </li>
                            <li class="splide__slide">
                                <div class="w-full h-96 rounded-lg bg-[url('~/assets/img/tour/frame3.png')] bg-center"></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="splider2" class="splide w-1/2 md:w-full h-96 p-0" role="group" aria-label="Splide Basic HTML Example">
                    <div class="splide__track">
                        <ul class="splide__list">
                            <li class="splide__slide">
                                <div class="w-full h-96 rounded-lg bg-[url('~/assets/img/hotel/hotel1.jpg')] bg-center"></div>
                                
                            </li>
                            <li class="splide__slide">
                                <div class="w-full h-96 rounded-lg bg-[url('~/assets/img/hotel/hotel2.jpg')] bg-center"></div>
                            </li>
                            <li class="splide__slide">
                                <div class="w-full h-96 rounded-lg bg-[url('~/assets/img/hotel/hotel3.jpg')] bg-center"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                <!-- <div class="w-1/2 h-96 rounded-lg bg-[url('~/assets/img/frame7.jpg')] bg-center"></div> -->
                <div class="other flex gap-6 md:flex-col">
                    <!-- <div class="w-4/12 h-60 rounded-lg bg-[url('~/assets/img/frame7.jpg')] bg-center"></div> -->
                    <div id="splider3" class="splide w-1/2 h-[248px] p-0 md:w-full" role="group" aria-label="Splide Basic HTML Example">
                        <div class="splide__track">
                            <ul class="splide__list">
                                <li class="splide__slide">
                                    <div class="w-full h-[248px] rounded-lg bg-[url('~/assets/img/hotel/hotel2.jpg')] bg-center bg-cover"></div>
                                </li>
                                <li class="splide__slide">
                                    <div class="w-full h-[248px] rounded-lg bg-[url('~/assets/img/hotel/hotel3.jpg')] bg-center bg-cover"></div>
                                </li>
                                <li class="splide__slide">
                                    <div class="w-full h-[248px] rounded-lg bg-[url('~/assets/img/hotel/hotel5.jpg')] bg-center bg-cover"></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="md:w-full w-8/12 h-60 flex justify-center p-8 flex-col rounded-lg border-[1px] border-solid bg-white">
                        <p class="text-[40px] lg:text-[32px] font-extrabold text-[#000A15] leading-[56px]">Some title here</p>
                        <p class="text-[#4D545B] line-clamp-5">Lorem ipsum dolor sit amet consectetur. Sed nunc accumsan sapien maecenas. Feugiat elementum sed in fringilla consectetur nec augue aliquamasdasd la consectetur nec augue aliquamasdasd </p>
                    </div>
                </div>
        </div>
    </div>
</template>

<script setup>
import '@splidejs/splide/css/skyblue';
import Splide from "@splidejs/splide";

const splideOptions = {
    type: "loop",
    perPage: 1,
    arrows: true
};

const sliderOptions2 = {
    type: "loop",
    perPage: 1,
    arrows: true
};

const sliderOptions3 = {
    type: "loop",
    perPage: 1,
    arrows: true
};

let splide;
let splide2;
let splide3;

const initSlider = () => {
    splide = new Splide("#splider", splideOptions);
    splide.mount();
}

const initSlider2 = () => {
    splide2 = new Splide('#splider2', sliderOptions2);
    splide2.mount();
};

const initSlider3 = () => {
    splide2 = new Splide('#splider3', sliderOptions3);
    splide2.mount();
};

const destroySlide = () => {
    if (splide) {
        splide.destroy();
        splide = null;
    }
}

const destroySlider2 = () => {
    if (splide2) {
        splide2.destroy();
        splide2 = null;
    }
};

const destroySlider3 = () => {
    if (splide3) {
        splide3.destroy();
        splide3 = null;
    }
};

onMounted(initSlider);
onMounted(initSlider2);
onMounted(initSlider3);

onUnmounted(destroySlide);
onUnmounted(destroySlider2);
onUnmounted(destroySlider3);
</script>

<style>
/* @import '@splidejs/splide/css/sea-green'; */
.splide {
    padding: 0;
} 

.other .splide__arrows {
    display: none;
}

.other .splide__pagination{
    gap: 8px;
}

.other .splide__pagination__page {
    background: #D0E1F3;
    width: 28px;
    height: 4px;
    border-radius: 2px;
    margin-right: 4px;
}

.other .splide__pagination__page.is-active {
    background: #72A4DA;
}
</style>