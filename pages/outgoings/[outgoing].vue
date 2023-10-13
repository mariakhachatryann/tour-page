<template>
    <RoutePath :desc="selectedOutgoing.title" />
    <div class="w-full justify-center items-center flex px-8">
        <div class="max-w-[1384px]">
            <div class="flex justify-start lg:flex-col gap-8 py-8">
                <SpecOutgoingPart :selectedOutgoing="selectedOutgoing" />
                <div class="min-w-[310px] p-6 rounded-lg max-h-[788px] border-[1px] border-solid border-[#D0E1F3]">
                    <div class="flex flex-col gap-2 lg:flex-row lg:justify-between lg:flex-wrap">
                        <QntInput @add="addQnt(adults)" @subtract="subtrQnt(adults)" :qnt="adults.qnt" :label="'Adults'" :age="'12+'" />
                        <QntInput @add="addQnt(children)" @subtract="subtrQnt(children)" :qnt="children.qnt" :label="'Child'" :age="'2-12'" />
                        <QntInput @add="addQnt(infants)" @subtract="subtrQnt(infants)" :qnt="infants.qnt" :label="'Infant'" :age="'0-1.99'" />
                    </div>
                    <div class="flex justify-between">
                        <p class="text-xl text-[#666C73] font-medium">Total Price:</p>
                        <p class="text-[#000A15] font-medium text-xl">305,000 AMD</p>
                    </div>
                    <div class="flex justify-end">
                        <p class="text-xs text-[#088C53] font-medium">including taxes & fees</p>
                    </div>
                    <button class="w-full my-6 text-white font-bold  bg-primaryBlue rounded-lg px-8 py-3">Apply</button>
                    <div class="flex justify-center gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10.0003 1.66602C5.3945 1.66602 1.66699 5.3931 1.66699 9.99935C1.66699 14.6051 5.39408 18.3327 10.0003 18.3327C14.6062 18.3327 18.3337 14.6056 18.3337 9.99935C18.3337 5.39359 14.6066 1.66602 10.0003 1.66602ZM10.8561 13.3073C10.8561 13.5706 10.4722 13.8338 10.0005 13.8338C9.50687 13.8338 9.15589 13.5706 9.15589 13.3073V9.12806C9.15589 8.82093 9.5069 8.61247 10.0005 8.61247C10.4722 8.61247 10.8561 8.82093 10.8561 9.12806V13.3073ZM10.0005 7.60339C9.49593 7.60339 9.10107 7.23044 9.10107 6.81357C9.10107 6.39675 9.49596 6.03477 10.0005 6.03477C10.4941 6.03477 10.8891 6.39675 10.8891 6.81357C10.8891 7.23044 10.4941 7.60339 10.0005 7.60339Z" fill="#3747A4"/>
                        </svg>
                        <p class="text-[14px] text-[#3747A4] font-extralight mb-2">To secure the booking you can pay just 1 night price:</p>
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center mt-20 flex-col">
                <div class="w-full">
                    <p class="text-[32px] leading-[48px] font-extrabold text-[#000A15] text-center mb-8">
                        Popular <span class="text-primaryBlue">Outgoing Tours</span>
                    </p>
                    <div class="max-w-[1384px] m-8 md:m-0 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-8">
                        <div v-for="(outgoing, index) in outgoings" :class="(index + 1) % 3 === 0 ? 'lg:col-span-4 md:col-span-1 max-w-[464px] lg:max-w-full' : 'md:col-span-4 max-w-[464px] md:max-w-full' " :key="outgoing.id">
                            <div class="min-w-[300px] max-h-[470px] rounded-b-2xl sm:min-w-[300px]">
                                <NuxtLink :to="'/outgoings/' + outgoing.id" target="_blank">
                                    <OutgoingBlock :outgoing="outgoings[index]">
                                        <template v-slot:title>{{ outgoing.title }}</template>
                                    </OutgoingBlock>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <NuxtLink to="/outgoings">
                    <button class="mt-8 flex gap-2 py-2 px-6 bg-[#E8F0F9] rounded-lg font-bold">
                            <p>View All</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.96967 19.5303C7.67678 19.2374 7.67678 18.7626 7.96967 18.4697L14.4393 12L7.96967 5.53033C7.67678 5.23744 7.67678 4.76256 7.96967 4.46967C8.26256 4.17678 8.73744 4.17678 9.03033 4.46967L16.0303 11.4697C16.3232 11.7626 16.3232 12.2374 16.0303 12.5303L9.03033 19.5303C8.73744 19.8232 8.26256 19.8232 7.96967 19.5303Z" fill="#000A15"/>
                            </svg>
                    </button>
                </NuxtLink>
            </div>
        </div>
    </div>
    <MainSubscription />
    <Footer />
</template>

<script setup>
import DatePicker from "vuejs3-datepicker";
import { useOutgoingsStore } from "../../stores/store.js"
const { outgoings } = useOutgoingsStore();

const route = useRoute()
const selected = outgoings.filter(outgoing => outgoing.id == route.params.outgoing);
const [selectedOutgoing ] = selected

useHead({
    title: `${selectedOutgoing.title}`
})

const adults = reactive({
    qnt: 0
})

const children = reactive({
    qnt: 0
})

const infants = reactive({
    qnt: 0 
})

function addQnt(param) {
    param.qnt++
}

function subtrQnt(param) {
    if (param.qnt > 0) {
        param.qnt--
    }
}
</script>