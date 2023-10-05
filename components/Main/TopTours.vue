<template>
    <div class="splide flex gap-8 w-full xl:max-w-[1266px] lg:max-w-[1024px] overflow-hidden">
        <div class="splide__track">
            <div class="splide__list h-[600px] flex gap-8">
                <div v-for="instance in instances" :key="instance" class="splide__slide min-w-[416px] h-[602px] max-w-[430px] rounded-b-2xl sm:min-w-[320px]">
                    <TourBlock />
                </div>
            </div>
            <div class="w-screen flex gap-8 justify-center items-center">
                <MainSliderArrows />
            </div>
        </div>
    </div>
</template>

<script setup>
import Splide from "@splidejs/splide";

const instances = [1, 2, 3, 4, 5];

const splideOptions = {
    type: "loop",
    drag: "free",
    arrows: true,
    perPage: 1
};

let splide;

onMounted(() => {
    splide = new Splide(".splide", splideOptions);
    splide.mount();    
});

onUnmounted(() => {
    splide = undefined
}) 

</script>


<style>



</style>