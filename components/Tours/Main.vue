<template>
    <div class="w-full flex h-[392px] xl:h-[320px] md:flex-col sm:mt-20 md:mb-80 sm:mb-40">       
        <div class="w-full max-w-[1212px] md:max-w-[769px] py-24 px-64 xl:px-8 lg:py-[50px] bg-gradient-to-r from-blue-500 to-blue-900">
            <p class="text-[40px] xl:text-[32px] lg:text-[28px] leading-[56px] font-extrabold text-[#FDFFFE]">{{ $t(props.title) }}</p>
            <p class="text-base xl:text-sm text-[#FDFFFE] line-clamp-[7]">{{ $t(props.text) }}</p>
        </div>
        <div class="max-w-[708px] xl:max-w-[769px] sm:h-[240px]">
            <img v-if="routeName === 'tours'" src="~/assets/img/tour/frame3.png" class="w-full h-full" />
            <img v-else-if="routeName === 'hotels'" src="~/assets/img/hotel/banner.png" class="w-full h-full" />
            <img v-else-if="routeName === 'transfer'" src="~/assets/img/transfer/banner.png" class="w-full h-full" />
            <img v-else src="~/assets/img/outgoing/banner.png" class="w-full h-full" />
            <!-- <nuxt-img :src="props.src" class="w-full h-full" /> -->
        </div>
    </div>
    <RoutePath />
</template>

<script setup>
import { useRouter } from "vue-router";
const props = defineProps(["title", "text", "src"])

const router = useRouter();
const routeName = router.currentRoute.value.name;
</script>