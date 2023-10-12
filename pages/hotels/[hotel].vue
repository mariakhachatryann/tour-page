<template>
    <RoutePath />
    <div class="w-full justify-center items-center flex px-8">
        <div class="max-w-[1384px]">
            <div class="flex justify-start lg:flex-col gap-8 py-8">
                <SpecHotelPart :selectedHotel="selected[0]" />
                <div class="min-w-[310px] p-6 rounded-lg max-h-[788px] border-[1px] border-solid border-[#D0E1F3]">
                    <div class="flex flex-col gap-2 whitespace-pre-wrap">
                        <div class="w-full mb-6">
                            <p class="text-[#333B44] whitespace-nowrap">Transfer date and time</p>
                            <div class="flex border-[1px] border-solid border-[#E6E6E7] mt-1 bg-white rounded-lg">
                                <div class=" pl-4 py-3 mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7949 2C16.7949 1.58579 16.4591 1.25 16.0449 1.25C15.6307 1.25 15.2949 1.58579 15.2949 2V2.8291H8.7168V2C8.7168 1.58579 8.38101 1.25 7.9668 1.25C7.55258 1.25 7.2168 1.58579 7.2168 2V2.8476C5.84568 2.94087 4.65193 3.38862 3.76749 4.22937C2.76004 5.18705 2.25 6.5633 2.25 8.22213V17.2718C2.25 18.9507 2.75774 20.3462 3.76225 21.3198C4.76302 22.2898 6.16301 22.7499 7.77096 22.7499H16.229C17.8377 22.7499 19.2366 22.2991 20.2371 21.3438C21.243 20.3834 21.75 19.0051 21.75 17.3474V8.22317C21.7548 6.56549 21.2504 5.18867 20.2448 4.23009C19.3621 3.38865 18.1684 2.94108 16.7949 2.84767V2ZM15.2949 4.3291V5.29078C15.2949 5.70499 15.6307 6.04078 16.0449 6.04078C16.4591 6.04078 16.7949 5.70499 16.7949 5.29078V4.35179C17.854 4.44089 18.6563 4.78814 19.2098 5.31582C19.8507 5.92673 20.2541 6.87097 20.25 8.21982L20.25 8.22213V8.6543H3.75V8.22213C3.75 6.87387 4.1571 5.9286 4.80096 5.31654C5.35711 4.78786 6.16058 4.4407 7.2168 4.35172V5.29078C7.2168 5.70499 7.55258 6.04078 7.9668 6.04078C8.38101 6.04078 8.7168 5.70499 8.7168 5.29078V4.3291H15.2949ZM3.75 10.1543V17.2718C3.75 18.6472 4.1594 19.6158 4.8062 20.2427C5.45673 20.8732 6.44222 21.2499 7.77096 21.2499H16.229C17.5663 21.2499 18.5528 20.878 19.2013 20.2589C19.8444 19.6448 20.25 18.6968 20.25 17.3474V10.1543H3.75ZM16.4424 12.5596C16.0282 12.5596 15.6924 12.8954 15.6924 13.3096C15.6924 13.7238 16.0282 14.0596 16.4424 14.0596H16.4516C16.8659 14.0596 17.2016 13.7238 17.2016 13.3096C17.2016 12.8954 16.8659 12.5596 16.4516 12.5596H16.4424ZM11.2549 13.3096C11.2549 12.8954 11.5907 12.5596 12.0049 12.5596H12.0141C12.4284 12.5596 12.7641 12.8954 12.7641 13.3096C12.7641 13.7238 12.4284 14.0596 12.0141 14.0596H12.0049C11.5907 14.0596 11.2549 13.7238 11.2549 13.3096ZM7.55664 12.5596C7.14243 12.5596 6.80664 12.8954 6.80664 13.3096C6.80664 13.7238 7.14243 14.0596 7.55664 14.0596H7.5659C7.98012 14.0596 8.3159 13.7238 8.3159 13.3096C8.3159 12.8954 7.98012 12.5596 7.5659 12.5596H7.55664ZM15.6924 17.1963C15.6924 16.7821 16.0282 16.4463 16.4424 16.4463H16.4516C16.8659 16.4463 17.2016 16.7821 17.2016 17.1963C17.2016 17.6105 16.8659 17.9463 16.4516 17.9463H16.4424C16.0282 17.9463 15.6924 17.6105 15.6924 17.1963ZM12.0049 16.4463C11.5907 16.4463 11.2549 16.7821 11.2549 17.1963C11.2549 17.6105 11.5907 17.9463 12.0049 17.9463H12.0141C12.4284 17.9463 12.7641 17.6105 12.7641 17.1963C12.7641 16.7821 12.4284 16.4463 12.0141 16.4463H12.0049ZM6.80664 17.1963C6.80664 16.7821 7.14243 16.4463 7.55664 16.4463H7.5659C7.98012 16.4463 8.3159 16.7821 8.3159 17.1963C8.3159 17.6105 7.98012 17.9463 7.5659 17.9463H7.55664C7.14243 17.9463 6.80664 17.6105 6.80664 17.1963Z" fill="#000A15"/>
                                    </svg>
                                </div>
                                <date-picker
                                    :full-month-name="true"
                                    placeholder="Choose day"
                                    wrapper-class="p-0 min-w-[120px]"
                                    input-class="bg-[#FFF] w-full pl-0 py-3  mr-0 border-none outline-none"
                                    :typeable="false"
                                    :hideInput="false"
                                    icon-width="0" icon-height="0"
                                >
                                </date-picker>
                            </div>
                        </div>
                        <div class="w-full mb-6">
                            <p class="text-[#333B44] whitespace-nowrap">Date and time of return</p>
                            <div class="flex border-[1px] border-solid border-[#E6E6E7] mt-1 bg-white rounded-lg">
                                <div class=" pl-4 py-3 mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7949 2C16.7949 1.58579 16.4591 1.25 16.0449 1.25C15.6307 1.25 15.2949 1.58579 15.2949 2V2.8291H8.7168V2C8.7168 1.58579 8.38101 1.25 7.9668 1.25C7.55258 1.25 7.2168 1.58579 7.2168 2V2.8476C5.84568 2.94087 4.65193 3.38862 3.76749 4.22937C2.76004 5.18705 2.25 6.5633 2.25 8.22213V17.2718C2.25 18.9507 2.75774 20.3462 3.76225 21.3198C4.76302 22.2898 6.16301 22.7499 7.77096 22.7499H16.229C17.8377 22.7499 19.2366 22.2991 20.2371 21.3438C21.243 20.3834 21.75 19.0051 21.75 17.3474V8.22317C21.7548 6.56549 21.2504 5.18867 20.2448 4.23009C19.3621 3.38865 18.1684 2.94108 16.7949 2.84767V2ZM15.2949 4.3291V5.29078C15.2949 5.70499 15.6307 6.04078 16.0449 6.04078C16.4591 6.04078 16.7949 5.70499 16.7949 5.29078V4.35179C17.854 4.44089 18.6563 4.78814 19.2098 5.31582C19.8507 5.92673 20.2541 6.87097 20.25 8.21982L20.25 8.22213V8.6543H3.75V8.22213C3.75 6.87387 4.1571 5.9286 4.80096 5.31654C5.35711 4.78786 6.16058 4.4407 7.2168 4.35172V5.29078C7.2168 5.70499 7.55258 6.04078 7.9668 6.04078C8.38101 6.04078 8.7168 5.70499 8.7168 5.29078V4.3291H15.2949ZM3.75 10.1543V17.2718C3.75 18.6472 4.1594 19.6158 4.8062 20.2427C5.45673 20.8732 6.44222 21.2499 7.77096 21.2499H16.229C17.5663 21.2499 18.5528 20.878 19.2013 20.2589C19.8444 19.6448 20.25 18.6968 20.25 17.3474V10.1543H3.75ZM16.4424 12.5596C16.0282 12.5596 15.6924 12.8954 15.6924 13.3096C15.6924 13.7238 16.0282 14.0596 16.4424 14.0596H16.4516C16.8659 14.0596 17.2016 13.7238 17.2016 13.3096C17.2016 12.8954 16.8659 12.5596 16.4516 12.5596H16.4424ZM11.2549 13.3096C11.2549 12.8954 11.5907 12.5596 12.0049 12.5596H12.0141C12.4284 12.5596 12.7641 12.8954 12.7641 13.3096C12.7641 13.7238 12.4284 14.0596 12.0141 14.0596H12.0049C11.5907 14.0596 11.2549 13.7238 11.2549 13.3096ZM7.55664 12.5596C7.14243 12.5596 6.80664 12.8954 6.80664 13.3096C6.80664 13.7238 7.14243 14.0596 7.55664 14.0596H7.5659C7.98012 14.0596 8.3159 13.7238 8.3159 13.3096C8.3159 12.8954 7.98012 12.5596 7.5659 12.5596H7.55664ZM15.6924 17.1963C15.6924 16.7821 16.0282 16.4463 16.4424 16.4463H16.4516C16.8659 16.4463 17.2016 16.7821 17.2016 17.1963C17.2016 17.6105 16.8659 17.9463 16.4516 17.9463H16.4424C16.0282 17.9463 15.6924 17.6105 15.6924 17.1963ZM12.0049 16.4463C11.5907 16.4463 11.2549 16.7821 11.2549 17.1963C11.2549 17.6105 11.5907 17.9463 12.0049 17.9463H12.0141C12.4284 17.9463 12.7641 17.6105 12.7641 17.1963C12.7641 16.7821 12.4284 16.4463 12.0141 16.4463H12.0049ZM6.80664 17.1963C6.80664 16.7821 7.14243 16.4463 7.55664 16.4463H7.5659C7.98012 16.4463 8.3159 16.7821 8.3159 17.1963C8.3159 17.6105 7.98012 17.9463 7.5659 17.9463H7.55664C7.14243 17.9463 6.80664 17.6105 6.80664 17.1963Z" fill="#000A15"/>
                                    </svg>
                                </div>
                                <date-picker
                                    :full-month-name="true"
                                    placeholder="Choose day"
                                    wrapper-class="p-0 min-w-[120px]"
                                    input-class="bg-[#FFF] w-full pl-0 py-3  mr-0 border-none outline-none"
                                    :typeable="false"
                                    :hideInput="false"
                                    icon-width="0" icon-height="0"
                                >
                                </date-picker>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 lg:flex-row lg:justify-between lg:flex-wrap">
                        <QntInput @add="addQnt(adults)" @subtract="subtrQnt(adults)" :qnt="adults.qnt" :label="'Adults'" :age="'3-8'" />
                        <QntInput @add="addQnt(children)" @subtract="subtrQnt(children)" :qnt="children.qnt" :label="'Child'" :age="'3-8'" />
                        <QntInput @add="addQnt(infants)" @subtract="subtrQnt(infants)" :qnt="infants.qnt" :label="'Infant'" :age="'0-3'" />
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
                        Suggested <span class="text-primaryBlue">Hotels</span> in Armenia
                    </p>
                    <div class="max-w-[1384px] m-8 md:m-0 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-8">
                        <div v-for="(hotel, index) in hotels.slice(0, 3)" :class="(index + 1) % 3 === 0 ? 'lg:col-span-4 md:col-span-1 max-w-[464px] lg:max-w-full' : 'md:col-span-4 max-w-[464px] md:max-w-full' " :key="hotel.id">
                            <div class="min-w-[300px] min-h-[602px] rounded-b-2xl sm:min-w-[300px]">
                                <NuxtLink :to="'/hotels/' + hotel.id" target="_blank">
                                    <HotelBlock :img="hotel.img" :hotelFac="hotel.facilities">
                                        <template v-slot:title>{{ hotel.title }}</template>
                                    </HotelBlock>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <NuxtLink to="/hotels">
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
    <!-- <MainSubscription />
    <Footer /> -->
</template>

<script setup>4
import DatePicker from "vuejs3-datepicker";
import { useHotelsStore } from "../../stores/store.js"
const { hotels } = useHotelsStore();

const route = useRoute()
const selected = hotels.filter(hotel => hotel.id == route.params.hotel);
console.log(selected[0]);

useHead({
    title: `${selected[0].title}`
})

let adults = reactive({
    qnt: 0
})
const children = reactive({
    qnt: 0
})
const infants = reactive({
    qnt: 0 
})


console.log(hotels);


function addQnt(param) {
    param.qnt++
}

function subtrQnt(param) {
    if (param.qnt > 0) {
        param.qnt--
    }
}
</script>