<template>
    <div class="w-full justify-center items-center flex gap-1 sm:mt-14">
        <div class="w-[1384px] flex justify-start p-8  items-center mx-8">
            <p class="text-sm text-[#666C73]">Home</p>
            <svg class="mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.31246 13.0202C5.1172 12.825 5.1172 12.5084 5.31246 12.3131L9.62558 8.00002L5.31246 3.68691C5.1172 3.49164 5.1172 3.17506 5.31246 2.9798C5.50772 2.78454 5.82431 2.78454 6.01957 2.9798L10.6862 7.64647C10.8815 7.84173 10.8815 8.15831 10.6862 8.35357L6.01957 13.0202C5.82431 13.2155 5.50772 13.2155 5.31246 13.0202Z" fill="#80858A"/>
            </svg>
            <p class="text-sm font-medium text-[#000A15]">{{ routeNameCapitalized }}</p>
            <p class="text-sm font-medium text-[#000A15]">{{ props.desc }}</p>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const props = defineProps(["desc"])

const router = useRouter();
const routeName = router.currentRoute.value.name;
const routeNameCapitalized = routeName.slice(0, 1).toUpperCase() + routeName.slice(1).toLowerCase();
console.log(routeNameCapitalized);
console.log(router);
</script>