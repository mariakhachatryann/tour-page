<template>
    <div class="splide splide3 flex gap-8 w-full xl:max-w-[1266px] lg:max-w-[1024px] overflow-hidden">
        <div class="splide__track h-[500px]">
            <div class="splide__list h-[500px] flex gap-8" >
                <div v-for="instance in instances" :key="instance" class="splide__slide min-w-[440px] min-h-[432px] max-w-[430px] rounded-b-2xl sm:min-w-[320px]">
                    <OutgoingBlock :outgoing="outgoings[0]">
                        <template v-slot:title>{{ outgoings[0].title }}</template>
                    </OutgoingBlock>
                </div>
            </div>
            <div class="splide__arrows mt-10">
                <button class="splide__arrow top splide__arrow--prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M19.9995 -0.000366211C31.0295 -0.000366211 39.9995 8.97163 39.9995 19.9996C39.9995 31.0276 31.0295 39.9996 19.9995 39.9996C8.97151 39.9996 -0.000488281 31.0276 -0.000488281 19.9996C-0.000488281 8.97163 8.97151 -0.000366211 19.9995 -0.000366211Z" fill="white"/>
                        <path d="M17.1142 11.5582C17.4962 11.5582 17.8802 11.7042 18.1722 11.9962L25.1462 18.9362C25.4282 19.2182 25.5862 19.6002 25.5862 20.0002C25.5862 20.3982 25.4282 20.7802 25.1462 21.0622L18.1722 28.0062C17.5862 28.5902 16.6382 28.5902 16.0522 28.0022C15.4682 27.4142 15.4702 26.4642 16.0562 25.8802L21.9622 20.0002L16.0562 14.1202C15.4702 13.5362 15.4682 12.5882 16.0522 12.0002C16.3442 11.7042 16.7302 11.5582 17.1142 11.5582Z" fill="#1467C2"/>
                    </svg>
		        </button>
		        <button class="splide__arrow top splide__arrow--next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M19.9995 -0.000366211C31.0295 -0.000366211 39.9995 8.97163 39.9995 19.9996C39.9995 31.0276 31.0295 39.9996 19.9995 39.9996C8.97151 39.9996 -0.000488281 31.0276 -0.000488281 19.9996C-0.000488281 8.97163 8.97151 -0.000366211 19.9995 -0.000366211Z" fill="white"/>
                        <path d="M17.1142 11.5582C17.4962 11.5582 17.8802 11.7042 18.1722 11.9962L25.1462 18.9362C25.4282 19.2182 25.5862 19.6002 25.5862 20.0002C25.5862 20.3982 25.4282 20.7802 25.1462 21.0622L18.1722 28.0062C17.5862 28.5902 16.6382 28.5902 16.0522 28.0022C15.4682 27.4142 15.4702 26.4642 16.0562 25.8802L21.9622 20.0002L16.0562 14.1202C15.4702 13.5362 15.4682 12.5882 16.0522 12.0002C16.3442 11.7042 16.7302 11.5582 17.1142 11.5582Z" fill="#1467C2"/>
                    </svg>
		        </button>
            </div>
            <ul class="splide__pagination mt-10 w-screen flex gap-4 justify-center items-center"></ul>
        </div>
    </div>
</template>

<script setup>
import Splide from "@splidejs/splide";
import { useOutgoingsStore } from "../../stores/store.js"
const { outgoings } = useOutgoingsStore();

const instances = [1, 2, 3, 4, 5];
let selected = ref("tours");

const splideOptions = {
    type: "loop",
    drag: "free",
    perPage: 1,
    arrows: true
};

let splide;

const initSplide = () => {
    splide = new Splide(".splide3", splideOptions);
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

<style scoped>
.top {
    top: 480px;
}
</style>