<template>
    <div class="max-w-[984px] pl-4 w-full ">
        <p class="text-[32px] font-extrabold mb-4 text-[#000A15]">Reservation</p>
        <TransferBlock class="cursor-default" :transfer="props.selectedTransfer"></TransferBlock>
        <div class="w-full">
            <p class="text-2xl font-bold text-[#000A15] mb-4">Fill information</p>
            <div class="flex w-full items-center gap-8 md:flex-col md:gap-2 mb-8">
                <div class="max-w-[450px] w-full">
                    <p class="text-[#333B44] mb-1">From</p>
                    <select class="bg-white w-full rounded-lg cursor-pointer py-3 px-4 border-[1px] border-solid border-[#E6E6E7] outline-none ">
                        <option value="1">select</option>
                        <option value="2">select</option>
                        <option value="3">select</option>
                    </select>
                </div>
                <div class="mt-8 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0041 21.9009H44.3919C45.2316 21.9009 46.0712 21.4811 46.2811 20.6414C46.701 19.8018 46.491 18.9621 45.8613 18.3324L37.4648 9.93589C36.6251 9.09624 35.3657 9.09624 34.526 9.93589C33.6863 10.7755 33.6863 12.035 34.526 12.8747L39.354 17.7027H15.0041C13.7446 17.7027 12.905 18.5423 12.905 19.8018C12.905 21.0613 13.7446 21.9009 15.0041 21.9009ZM13.5348 38.0642C13.9546 38.484 14.3744 38.6939 15.0042 38.6939C15.6339 38.6939 16.0537 38.484 16.4735 38.0642C17.3132 37.2245 17.3132 35.965 16.4735 35.1254L11.6455 30.2974H35.9954C37.2549 30.2974 38.0946 29.4577 38.0946 28.1983C38.0946 26.9388 37.2549 26.0991 35.9954 26.0991H6.60763C5.76798 26.0991 5.13824 26.519 4.71842 27.3586C4.29859 28.1983 4.50851 29.0379 5.13824 29.6676L13.5348 38.0642Z" fill="#72A4DA"/>
                    </svg>
                </div>
                <div class="max-w-[450px] w-full">
                    <p class="text-[#333B44] mb-1">To</p>
                    <select class="bg-white w-full rounded-lg cursor-pointer py-3 px-4 border-[1px] border-solid border-[#E6E6E7] outline-none ">
                        <option value="1">select</option>
                        <option value="2">select</option>
                        <option value="3">select</option>
                    </select>
                </div>
            </div>
            <div class="flex w-full gap-8 mb-8 md:flex-col">
                <div class="w-1/2 md:w-full">
                    <p class="text-[#333B44]">Start Address</p>
                    <div class="relative bg-white rounded-lg mt-1">
                        <input class="w-full mt-1 py-3 px-4 rounded-lg outline-none sm:w-[288px] border-[1px] border-solid border-[#E6E6E7]" placeholder="Placeholder" type="text" />
                    </div>
                </div>
                <div class="w-1/2 md:w-full">
                    <p class="text-[#333B44]">Destination address</p>
                    <div class="bg-white rounded-lg mt-1">
                        <input class="w-full mt-1 py-3 px-4 rounded-lg outline-none sm:w-[288px] border-[1px] border-solid border-[#E6E6E7]" placeholder="Enter here" type="text" />
                    </div>
                </div>
            </div>
            <div class="flex sm:flex-col gap-6 w-full lg:flex-wrap">
                <div class="flex max-w-[380px] w-full md:flex-col">
                    <div class="w-1/2 md:w-full">
                        <p class="text-[#333B44] whitespace-nowrap">Transfer date and time</p>
                        <div class="sm:w-full flex border-[1px] border-solid border-[#E6E6E7] mt-1 bg-white rounded-lg">
                            <div class="pl-4 py-4 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7949 2C16.7949 1.58579 16.4591 1.25 16.0449 1.25C15.6307 1.25 15.2949 1.58579 15.2949 2V2.8291H8.7168V2C8.7168 1.58579 8.38101 1.25 7.9668 1.25C7.55258 1.25 7.2168 1.58579 7.2168 2V2.8476C5.84568 2.94087 4.65193 3.38862 3.76749 4.22937C2.76004 5.18705 2.25 6.5633 2.25 8.22213V17.2718C2.25 18.9507 2.75774 20.3462 3.76225 21.3198C4.76302 22.2898 6.16301 22.7499 7.77096 22.7499H16.229C17.8377 22.7499 19.2366 22.2991 20.2371 21.3438C21.243 20.3834 21.75 19.0051 21.75 17.3474V8.22317C21.7548 6.56549 21.2504 5.18867 20.2448 4.23009C19.3621 3.38865 18.1684 2.94108 16.7949 2.84767V2ZM15.2949 4.3291V5.29078C15.2949 5.70499 15.6307 6.04078 16.0449 6.04078C16.4591 6.04078 16.7949 5.70499 16.7949 5.29078V4.35179C17.854 4.44089 18.6563 4.78814 19.2098 5.31582C19.8507 5.92673 20.2541 6.87097 20.25 8.21982L20.25 8.22213V8.6543H3.75V8.22213C3.75 6.87387 4.1571 5.9286 4.80096 5.31654C5.35711 4.78786 6.16058 4.4407 7.2168 4.35172V5.29078C7.2168 5.70499 7.55258 6.04078 7.9668 6.04078C8.38101 6.04078 8.7168 5.70499 8.7168 5.29078V4.3291H15.2949ZM3.75 10.1543V17.2718C3.75 18.6472 4.1594 19.6158 4.8062 20.2427C5.45673 20.8732 6.44222 21.2499 7.77096 21.2499H16.229C17.5663 21.2499 18.5528 20.878 19.2013 20.2589C19.8444 19.6448 20.25 18.6968 20.25 17.3474V10.1543H3.75ZM16.4424 12.5596C16.0282 12.5596 15.6924 12.8954 15.6924 13.3096C15.6924 13.7238 16.0282 14.0596 16.4424 14.0596H16.4516C16.8659 14.0596 17.2016 13.7238 17.2016 13.3096C17.2016 12.8954 16.8659 12.5596 16.4516 12.5596H16.4424ZM11.2549 13.3096C11.2549 12.8954 11.5907 12.5596 12.0049 12.5596H12.0141C12.4284 12.5596 12.7641 12.8954 12.7641 13.3096C12.7641 13.7238 12.4284 14.0596 12.0141 14.0596H12.0049C11.5907 14.0596 11.2549 13.7238 11.2549 13.3096ZM7.55664 12.5596C7.14243 12.5596 6.80664 12.8954 6.80664 13.3096C6.80664 13.7238 7.14243 14.0596 7.55664 14.0596H7.5659C7.98012 14.0596 8.3159 13.7238 8.3159 13.3096C8.3159 12.8954 7.98012 12.5596 7.5659 12.5596H7.55664ZM15.6924 17.1963C15.6924 16.7821 16.0282 16.4463 16.4424 16.4463H16.4516C16.8659 16.4463 17.2016 16.7821 17.2016 17.1963C17.2016 17.6105 16.8659 17.9463 16.4516 17.9463H16.4424C16.0282 17.9463 15.6924 17.6105 15.6924 17.1963ZM12.0049 16.4463C11.5907 16.4463 11.2549 16.7821 11.2549 17.1963C11.2549 17.6105 11.5907 17.9463 12.0049 17.9463H12.0141C12.4284 17.9463 12.7641 17.6105 12.7641 17.1963C12.7641 16.7821 12.4284 16.4463 12.0141 16.4463H12.0049ZM6.80664 17.1963C6.80664 16.7821 7.14243 16.4463 7.55664 16.4463H7.5659C7.98012 16.4463 8.3159 16.7821 8.3159 17.1963C8.3159 17.6105 7.98012 17.9463 7.5659 17.9463H7.55664C7.14243 17.9463 6.80664 17.6105 6.80664 17.1963Z" fill="#000A15"/>
                                </svg>
                            </div>
                            <date-picker
                                :full-month-name="true"
                                placeholder="Choose day"
                                wrapper-class="p-0 min-w-[80px]"
                                input-class="bg-[#FFF] w-full pl-0 py-4  mr-0 border-none outline-none"
                                :typeable="false"
                                :hideInput="false"
                                icon-width="0" icon-height="0"
                            >
                            </date-picker>
                        </div>
                    </div>
                    <div class="w-1/2 mt-6 md:w-full">
                        <div class="flex sm:w-full border-[1px] border-solid border-[#E6E6E7] mt-1 bg-white rounded-lg">
                            <div class="pl-4 py-4 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 3.50049C7.80521 3.50049 4 7.3057 4 12.0005C4 16.6953 7.80521 20.5005 12.5 20.5005C17.1948 20.5005 21 16.6953 21 12.0005C21 7.3057 17.1948 3.50049 12.5 3.50049ZM2.5 12.0005C2.5 6.47727 6.97679 2.00049 12.5 2.00049C18.0232 2.00049 22.5 6.47727 22.5 12.0005C22.5 17.5237 18.0232 22.0005 12.5 22.0005C6.97679 22.0005 2.5 17.5237 2.5 12.0005Z" fill="#000A15"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1602 7.09717C12.5744 7.09717 12.9102 7.43295 12.9102 7.84717V12.2683L16.3144 14.2991C16.6701 14.5113 16.7865 14.9717 16.5743 15.3274C16.362 15.6831 15.9016 15.7995 15.5459 15.5873L11.7759 13.3383C11.5491 13.2029 11.4102 12.9583 11.4102 12.6942V7.84717C11.4102 7.43295 11.7459 7.09717 12.1602 7.09717Z" fill="#000A15"/>
                                </svg>
                            </div>
                            <date-picker
                                :full-month-name="true"
                                placeholder="Choose time"
                                wrapper-class="p-0 max-w-[120px]"
                                input-class="bg-[#FFF] w-full pl-0 py-4  mr-0 border-none outline-none"
                                :typeable="false"
                                :hideInput="false"
                                icon-width="0" icon-height="0"
                            >
                            </date-picker>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="flex gap-2">
                        <p class="text-[#19222C]">Number of persons</p>
                    </div>
                    <div class="flex mt-1 bg-primaryBlue rounded-lg w-[208px]">
                        <div @click="decr" class="flex justify-center items-center bg-primaryBlue rounded-lg py-3 w-14 text-white text-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                                <path d="M16 0.474786V3.52685C16 3.75661 15.8139 3.94304 15.5838 3.94304H9.94226C9.71251 3.94304 6.0578 3.94304 6.0578 3.94304H0.416194C0.186254 3.94304 0 3.75661 0 3.52685V0.474786C0 0.244984 0.186254 0.0585938 0.416194 0.0585938H6.0578H9.94226H15.5838C15.8139 0.0585938 16 0.244984 16 0.474786Z" fill="white"/>
                            </svg>
                        </div>
                        <div class="py-3 w-[108px] bg-white text-center border-[1px] border-solid border-[#E6E6E7] rounded-lg">{{ transferDetails.personNum }}</div>
                        <div @click="incr" class="flex justify-center items-center bg-primaryBlue rounded-lg  py-3 w-14 text-white text-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M16 6.47396V9.52602C16 9.75578 15.8138 9.94221 15.5838 9.94221H9.94224V15.5837C9.94224 15.8138 9.75581 15.9999 9.52605 15.9999H6.47398C6.24436 15.9999 6.05779 15.8138 6.05779 15.5837V9.94221H0.416193C0.186253 9.94221 0 9.75578 0 9.52602V6.47396C0 6.24416 0.186253 6.05777 0.416193 6.05777H6.05779V0.416192C6.05779 0.186161 6.24432 0 6.47398 0H9.52605C9.75581 0 9.94224 0.186161 9.94224 0.416192V6.05777H15.5838C15.8139 6.05777 16 6.24416 16 6.47396Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="max-w-[380px] w-full">
                    <p class="text-[#333B44]">Child seats</p>
                    <div class="bg-white rounded-lg mt-1 w-full">
                        <select class="bg-white w-full border-[1px] border-solid border-[#E6E6E7] rounded-lg cursor-pointer py-3 px-4 outline-none">
                            <option selected disabled value="1" class="text-[#80858A] font-light">Select</option>
                            <option value="1">select</option>
                            <option value="2">select</option>
                            <option value="3">select</option>
                        </select>
                    </div>
                </div>
            </div> 
        </div>
        <div class="bg-[#D0E1F3] w-full h-[1px] my-8"></div>
        <div>
            <CheckInp :forId="'includeReturn'" :inpVal="transferDetails.includeReturn" @changeInp="transferDetails.includeReturn = !transferDetails.includeReturn;">Include return</CheckInp>
            <div class="flex max-w-[400px] mt-4 md:flex-col">
                <div class="w-1/2 md:w-full">
                    <p class="text-[#333B44] whitespace-nowrap">Date and time of return</p>
                    <div class="sm:w-full flex border-[1px] border-solid border-[#E6E6E7] mt-1 bg-white rounded-lg">
                        <div class="pl-4 py-4 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7949 2C16.7949 1.58579 16.4591 1.25 16.0449 1.25C15.6307 1.25 15.2949 1.58579 15.2949 2V2.8291H8.7168V2C8.7168 1.58579 8.38101 1.25 7.9668 1.25C7.55258 1.25 7.2168 1.58579 7.2168 2V2.8476C5.84568 2.94087 4.65193 3.38862 3.76749 4.22937C2.76004 5.18705 2.25 6.5633 2.25 8.22213V17.2718C2.25 18.9507 2.75774 20.3462 3.76225 21.3198C4.76302 22.2898 6.16301 22.7499 7.77096 22.7499H16.229C17.8377 22.7499 19.2366 22.2991 20.2371 21.3438C21.243 20.3834 21.75 19.0051 21.75 17.3474V8.22317C21.7548 6.56549 21.2504 5.18867 20.2448 4.23009C19.3621 3.38865 18.1684 2.94108 16.7949 2.84767V2ZM15.2949 4.3291V5.29078C15.2949 5.70499 15.6307 6.04078 16.0449 6.04078C16.4591 6.04078 16.7949 5.70499 16.7949 5.29078V4.35179C17.854 4.44089 18.6563 4.78814 19.2098 5.31582C19.8507 5.92673 20.2541 6.87097 20.25 8.21982L20.25 8.22213V8.6543H3.75V8.22213C3.75 6.87387 4.1571 5.9286 4.80096 5.31654C5.35711 4.78786 6.16058 4.4407 7.2168 4.35172V5.29078C7.2168 5.70499 7.55258 6.04078 7.9668 6.04078C8.38101 6.04078 8.7168 5.70499 8.7168 5.29078V4.3291H15.2949ZM3.75 10.1543V17.2718C3.75 18.6472 4.1594 19.6158 4.8062 20.2427C5.45673 20.8732 6.44222 21.2499 7.77096 21.2499H16.229C17.5663 21.2499 18.5528 20.878 19.2013 20.2589C19.8444 19.6448 20.25 18.6968 20.25 17.3474V10.1543H3.75ZM16.4424 12.5596C16.0282 12.5596 15.6924 12.8954 15.6924 13.3096C15.6924 13.7238 16.0282 14.0596 16.4424 14.0596H16.4516C16.8659 14.0596 17.2016 13.7238 17.2016 13.3096C17.2016 12.8954 16.8659 12.5596 16.4516 12.5596H16.4424ZM11.2549 13.3096C11.2549 12.8954 11.5907 12.5596 12.0049 12.5596H12.0141C12.4284 12.5596 12.7641 12.8954 12.7641 13.3096C12.7641 13.7238 12.4284 14.0596 12.0141 14.0596H12.0049C11.5907 14.0596 11.2549 13.7238 11.2549 13.3096ZM7.55664 12.5596C7.14243 12.5596 6.80664 12.8954 6.80664 13.3096C6.80664 13.7238 7.14243 14.0596 7.55664 14.0596H7.5659C7.98012 14.0596 8.3159 13.7238 8.3159 13.3096C8.3159 12.8954 7.98012 12.5596 7.5659 12.5596H7.55664ZM15.6924 17.1963C15.6924 16.7821 16.0282 16.4463 16.4424 16.4463H16.4516C16.8659 16.4463 17.2016 16.7821 17.2016 17.1963C17.2016 17.6105 16.8659 17.9463 16.4516 17.9463H16.4424C16.0282 17.9463 15.6924 17.6105 15.6924 17.1963ZM12.0049 16.4463C11.5907 16.4463 11.2549 16.7821 11.2549 17.1963C11.2549 17.6105 11.5907 17.9463 12.0049 17.9463H12.0141C12.4284 17.9463 12.7641 17.6105 12.7641 17.1963C12.7641 16.7821 12.4284 16.4463 12.0141 16.4463H12.0049ZM6.80664 17.1963C6.80664 16.7821 7.14243 16.4463 7.55664 16.4463H7.5659C7.98012 16.4463 8.3159 16.7821 8.3159 17.1963C8.3159 17.6105 7.98012 17.9463 7.5659 17.9463H7.55664C7.14243 17.9463 6.80664 17.6105 6.80664 17.1963Z" fill="#000A15"/>
                            </svg>
                        </div>
                        <date-picker
                            :full-month-name="true"
                            placeholder="Choose day"
                            wrapper-class="p-0 min-w-[80px]"
                            input-class="bg-[#FFF] w-full pl-0 py-4 mr-0 border-none outline-none"
                            :typeable="false"
                            :hideInput="false"
                            icon-width="0" icon-height="0"
                        >
                        </date-picker>
                    </div>
                </div>
                <div class="w-1/2 mt-6 md:w-full">
                    <div class="flex sm:w-full border-[1px] border-solid border-[#E6E6E7] mt-1 bg-white rounded-lg">
                        <div class=" pl-4 py-4 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 3.50049C7.80521 3.50049 4 7.3057 4 12.0005C4 16.6953 7.80521 20.5005 12.5 20.5005C17.1948 20.5005 21 16.6953 21 12.0005C21 7.3057 17.1948 3.50049 12.5 3.50049ZM2.5 12.0005C2.5 6.47727 6.97679 2.00049 12.5 2.00049C18.0232 2.00049 22.5 6.47727 22.5 12.0005C22.5 17.5237 18.0232 22.0005 12.5 22.0005C6.97679 22.0005 2.5 17.5237 2.5 12.0005Z" fill="#000A15"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1602 7.09717C12.5744 7.09717 12.9102 7.43295 12.9102 7.84717V12.2683L16.3144 14.2991C16.6701 14.5113 16.7865 14.9717 16.5743 15.3274C16.362 15.6831 15.9016 15.7995 15.5459 15.5873L11.7759 13.3383C11.5491 13.2029 11.4102 12.9583 11.4102 12.6942V7.84717C11.4102 7.43295 11.7459 7.09717 12.1602 7.09717Z" fill="#000A15"/>
                            </svg>
                        </div>
                        <date-picker
                            :full-month-name="true"
                            placeholder="Choose time"
                            wrapper-class="p-0 min-w-[120px]"
                            input-class="bg-[#FFF] w-full pl-0 py-4  mr-0 border-none outline-none"
                            :typeable="false"
                            :hideInput="false"
                            icon-width="0" icon-height="0"
                        >
                        </date-picker>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import DatePicker from "vuejs3-datepicker";
const props = defineProps(["selectedTransfer"])

const transferDetails = reactive({
    personNum: 0,
    includeReturn: false
})

function incr() {
    transferDetails.personNum++
}

function decr() {
    if (transferDetails.personNum > 0) {
        transferDetails.personNum--
    }
}
</script>