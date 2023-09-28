<template>
    <div class="flex justify-center items-center w-full mb-20">
        <form class="max-w-[1384px] w-full flex justify-center p-8 sm:p-4 rounded-3xl flex-col items-center mx-8 border-[1px] border-solid border-[#D0E1F3] bg-[#F1F7FE]">
            <div class="">
                <p class="text-[32px] font-extrabold leading-[48px] text-center">Our Tours in Armenia</p>
                <p class="text-base text-[#4D545B] text-center">Select locations to view transfer options and make a booking in an instant.</p>
            </div>
            <div class="flex w-full md:flex-wrap gap-8 my-8 sm:flex-col">
                <div class="w-2/5 sm:w-full">
                    <p class="text-[#333B44]">Direction</p>
                    <div class="relative bg-white rounded-lg mt-1">
                        <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 10.3178C3.5 5.71789 7.34388 2 11.9934 2C16.6561 2 20.5 5.71789 20.5 10.3178C20.5 12.6357 19.657 14.7876 18.2695 16.6116C16.7388 18.6235 14.8522 20.3765 12.7285 21.7524C12.2425 22.0704 11.8039 22.0944 11.2704 21.7524C9.13474 20.3765 7.24809 18.6235 5.7305 16.6116C4.34198 14.7876 3.5 12.6357 3.5 10.3178ZM9.19423 10.5767C9.19423 12.1177 10.4517 13.3297 11.9934 13.3297C13.5362 13.3297 14.8058 12.1177 14.8058 10.5767C14.8058 9.04779 13.5362 7.77683 11.9934 7.77683C10.4517 7.77683 9.19423 9.04779 9.19423 10.5767Z" fill="#666C73"/>
                        </svg>
                        <input v-model="tourOptions.direaction" class="w-full mt-1 py-3 pl-10 px-4 border-none outline-none sm:w-[288px]" placeholder="Enter your direction" type="text" />
                    </div>
                </div>
                <div class="w-2/5 md:w-1/2">
                    <p class="text-[#333B44]">Start Date</p>
                    <div class="w-full flex border-none mt-1 bg-white rounded-lg">
                        <div class=" pl-4 py-3 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7949 2C16.7949 1.58579 16.4591 1.25 16.0449 1.25C15.6307 1.25 15.2949 1.58579 15.2949 2V2.8291H8.7168V2C8.7168 1.58579 8.38101 1.25 7.9668 1.25C7.55258 1.25 7.2168 1.58579 7.2168 2V2.8476C5.84568 2.94087 4.65193 3.38862 3.76749 4.22937C2.76004 5.18705 2.25 6.5633 2.25 8.22213V17.2718C2.25 18.9507 2.75774 20.3462 3.76225 21.3198C4.76302 22.2898 6.16301 22.7499 7.77096 22.7499H16.229C17.8377 22.7499 19.2366 22.2991 20.2371 21.3438C21.243 20.3834 21.75 19.0051 21.75 17.3474V8.22317C21.7548 6.56549 21.2504 5.18867 20.2448 4.23009C19.3621 3.38865 18.1684 2.94108 16.7949 2.84767V2ZM15.2949 4.3291V5.29078C15.2949 5.70499 15.6307 6.04078 16.0449 6.04078C16.4591 6.04078 16.7949 5.70499 16.7949 5.29078V4.35179C17.854 4.44089 18.6563 4.78814 19.2098 5.31582C19.8507 5.92673 20.2541 6.87097 20.25 8.21982L20.25 8.22213V8.6543H3.75V8.22213C3.75 6.87387 4.1571 5.9286 4.80096 5.31654C5.35711 4.78786 6.16058 4.4407 7.2168 4.35172V5.29078C7.2168 5.70499 7.55258 6.04078 7.9668 6.04078C8.38101 6.04078 8.7168 5.70499 8.7168 5.29078V4.3291H15.2949ZM3.75 10.1543V17.2718C3.75 18.6472 4.1594 19.6158 4.8062 20.2427C5.45673 20.8732 6.44222 21.2499 7.77096 21.2499H16.229C17.5663 21.2499 18.5528 20.878 19.2013 20.2589C19.8444 19.6448 20.25 18.6968 20.25 17.3474V10.1543H3.75ZM16.4424 12.5596C16.0282 12.5596 15.6924 12.8954 15.6924 13.3096C15.6924 13.7238 16.0282 14.0596 16.4424 14.0596H16.4516C16.8659 14.0596 17.2016 13.7238 17.2016 13.3096C17.2016 12.8954 16.8659 12.5596 16.4516 12.5596H16.4424ZM11.2549 13.3096C11.2549 12.8954 11.5907 12.5596 12.0049 12.5596H12.0141C12.4284 12.5596 12.7641 12.8954 12.7641 13.3096C12.7641 13.7238 12.4284 14.0596 12.0141 14.0596H12.0049C11.5907 14.0596 11.2549 13.7238 11.2549 13.3096ZM7.55664 12.5596C7.14243 12.5596 6.80664 12.8954 6.80664 13.3096C6.80664 13.7238 7.14243 14.0596 7.55664 14.0596H7.5659C7.98012 14.0596 8.3159 13.7238 8.3159 13.3096C8.3159 12.8954 7.98012 12.5596 7.5659 12.5596H7.55664ZM15.6924 17.1963C15.6924 16.7821 16.0282 16.4463 16.4424 16.4463H16.4516C16.8659 16.4463 17.2016 16.7821 17.2016 17.1963C17.2016 17.6105 16.8659 17.9463 16.4516 17.9463H16.4424C16.0282 17.9463 15.6924 17.6105 15.6924 17.1963ZM12.0049 16.4463C11.5907 16.4463 11.2549 16.7821 11.2549 17.1963C11.2549 17.6105 11.5907 17.9463 12.0049 17.9463H12.0141C12.4284 17.9463 12.7641 17.6105 12.7641 17.1963C12.7641 16.7821 12.4284 16.4463 12.0141 16.4463H12.0049ZM6.80664 17.1963C6.80664 16.7821 7.14243 16.4463 7.55664 16.4463H7.5659C7.98012 16.4463 8.3159 16.7821 8.3159 17.1963C8.3159 17.6105 7.98012 17.9463 7.5659 17.9463H7.55664C7.14243 17.9463 6.80664 17.6105 6.80664 17.1963Z" fill="#666C73"/>
                            </svg>
                        </div>
                        <date-picker
                            v-model="tourOptions.date"
                            :full-month-name="true"
                            placeholder="Choose date"
                            wrapper-class="p-0 min-w-[120px]"
                            input-class="bg-[#FFF] w-full pl-0 py-4  mr-0 border-none outline-none"
                            :typeable="false"
                            :hideInput="false"
                            icon-width="0" icon-height="0"
                        >
                        </date-picker>
                    </div>
                </div>
                <div class="w-1/5 md:w-1/2">
                    <p class="text-[#333B44]">Duration type</p>
                    <input v-model="tourOptions.type" class="bg-[#FFF] w-full mt-1 py-4 px-4 rounded-lg border-none outline-none" type="text" placeholder="Select type" />
                </div>
            </div>
            <div class="max-w-[406px] w-full mr-auto">
                <p class="text-[#333B44]">Price range</p>
                <div class="flex justify-between mt-2">
                    <p class="text-xs text-[#333B44]">{{ priceRange[0] }} AMD</p>
                    <p class="text-xs text-[#333B44]">{{ priceRange[1] }} AMD</p>
                </div>
                <v-range-slider v-model="priceRange" :max="100000" :min="0" :step="1000" class="align-center"></v-range-slider>
            </div>
            <div class="w-full mt-8">
                <button @click.prevent="submitOptions" class="bg-primaryBlue rounded-lg py-3 px-8 w-full font-bold text-[#FDFFFE]">Find Results</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import DatePicker from "vuejs3-datepicker";
const priceRange = ref([0, 100000])

const tourOptions = reactive({
    direaction: "",
    date: "",
    type: "",
    price: priceRange.value
})

function submitOptions() {
    console.log(tourOptions);
}
</script>

<style>
.v-slider.v-input--horizontal .v-slider-track  {
  background-color: #D0E1F3;
  height: 16px; 
}

.v-slider.v-input--horizontal .v-slider-track__background {
    background: transparent;
}

.v-slider.v-input--horizontal .v-slider-thumb .v-slider-thumb__surface{
    border-radius: 16px;
    border: 4px solid #1467C2;
    background: #FFF;

}

.v-slider.v-input--horizontal .v-slider-track__fill {
    background: #72A4DA;
}

.vuejs3-datepicker__inputvalue {
    min-width: 120px;
}
</style>