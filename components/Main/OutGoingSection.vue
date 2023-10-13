<template>
    <div class="splide flex gap-8 w-full xl:max-w-[1266px] lg:max-w-[1024px] overflow-hidden">
        <div class="splide__track">
            <div class="splide__list flex gap-8" >
                <div v-for="instance in instances" :key="instance" class="splide__slide min-w-[440px] min-h-[432px] rounded-b-2xl sm:min-w-[320px]">
                    <OutgoingBlock :outgoing="outgoings[0]">
                        <template v-slot:title>{{ outgoings[0].title }}</template>
                    </OutgoingBlock>
                </div>
            </div>
            <div class="w-screen flex justify-center items-center">
                <MainSliderArrows /> 
            </div>
        </div>
    </div>
</template>

<script setup>
import Splide from "@splidejs/splide";
import { useOutgoingStore } from "../../stores/store.js"
const { outgoings } = useOutgoingStore();
console.log(outgoings);
const instances = [1, 2, 3, 4, 5];
let selected = ref("tours");

const splideOptions = {
    type: "loop",
    drag: "free",
    perPage: 1,
    arrows: true
};

let splide;

onMounted(() => {
    if (process.client) {
        splide = new Splide(".splide", splideOptions);
        splide.mount();
    }
});

watch(selected, (newValue) => {
    if (process.client && splide) {
        splide.destroy();
        splide.options = splideOptions;
        splide.mount();
    }
});
</script>