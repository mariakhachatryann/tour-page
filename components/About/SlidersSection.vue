<template>
    <div class="flex justify-center items-center mt-8 px-8">
        <div class="max-w-[1384px] flex w-full flex-col xl:flex-col-reverse gap-6">
            <div class="flex gap-6 w-full">
                <div class="splide w-1/2 h-96 p-0" role="group" aria-label="Splide Basic HTML Example">
                    <div class="splide__track">
                        <ul class="splide__list">
                            <li class="splide__slide">
                                <div class="w-full h-96 rounded-lg bg-[url('~/assets/img/frame7.jpg')] bg-center"></div>
                                <!-- <img class="w-full h-auto" src="~/assets/img/frame7.jpg" alt=""> -->
                            </li>
                            <li class="splide__slide">
                                <div class="w-full h-96 rounded-lg bg-[url('~/assets/img/hotel/hotel.jpg')] bg-center"></div>
                            </li>
                            <li class="splide__slide">
                                <div class="w-full h-96 rounded-lg bg-[url('~/assets/img/frame1.png')] bg-center"></div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="w-1/2 h-96 rounded-lg bg-[url('~/assets/img/frame7.jpg')] bg-center"></div>
            </div>
                <!-- <div class="w-1/2 h-96 rounded-lg bg-[url('~/assets/img/frame7.jpg')] bg-center"></div> -->
        </div>
        <!-- <div class="flex gap-6">
        <div class="w-4/12 h-60 rounded-lg bg-[url('~/assets/img/frame7.jpg')] bg-center"></div>
        <div class="w-8/12 h-60 flex justify-center p-8 flex-col rounded-lg border-[1px] border-solid bg-white">
            <p class="text-[40px] font-extrabold text-[#000A15] leading-[56px]">Some title here</p>
            <p class="text-[#4D545B]">Lorem ipsum dolor sit amet consectetur. Sed nunc accumsan sapien maecenas. Feugiat elementum sed in fringilla consectetur nec augue aliquamasdasd la consectetur nec augue aliquamasdasd </p>
        </div>
        </div> -->
    </div>
</template>

<script setup>
// import '@splidejs/splide/css/sea-green';
import Splide from "@splidejs/splide";

const splideOptions = {
    type: "loop",
    perPage: 1,
    arrows: true
};

let splide;

onMounted(() => {
    if (process.client) {
        splide = new Splide(".splide");
        splide.mount();
    }
});
</script>

<style scoped>
.splide {
    padding: 0;
} 

.splide__arrows {
    display: none;
}

</style>