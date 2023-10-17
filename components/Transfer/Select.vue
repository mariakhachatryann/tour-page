<template>
    <div class="flex justify-center items-center w-full mb-20">
        <form class="max-w-[1384px] w-full flex justify-center p-8 sm:p-4 rounded-3xl flex-col items-center mx-8 border-[1px] border-solid border-[#D0E1F3] bg-[#F1F7FE]">
            <div class="flex md:flex-wrap max-w-[1384px] w-full">
                <div class="w-full">
                    <div class="mb-8">
                        <p class="text-[32px] font-extrabold leading-[48px] text-center">Calculation of transfers</p>
                        <p class="text-base text-[#4D545B] text-center">Select locations to view transfer options and make a booking in an instant.</p>
                    </div>
                    <div class="flex w-full items-center gap-8 sm:flex-col md:gap-2">
                        <div class="max-w-[450px] w-full">
                            <p class="text-[#333B44] mb-1">From</p>
                            <select class="bg-white w-full rounded-lg cursor-pointer py-3 px-4 border-none outline-none ">
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
                            <select class="bg-white w-full rounded-lg cursor-pointer py-3 px-4 border-none outline-none ">
                                <option value="1">select</option>
                                <option value="2">select</option>
                                <option value="3">select</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="ml-8 mt-auto md:w-full md:ml-0">
                    <button @click.prevent="submitOptions" class="bg-primaryBlue text-[#FDFFFE] rounded-lg w-[193px] h-[48px] md:w-full md:mt-8">Calculate Result</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
// const tourOptions = reactive({
//     direaction: "",
//     date: "",
//     type: "",
//     price: priceRange.value
// })


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