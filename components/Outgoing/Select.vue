<template>
    <div class="flex justify-center items-center w-full mb-20">
        <form class="max-w-[1384px] w-full flex justify-center p-8 sm:p-4 rounded-3xl flex-col items-center mx-8 border-[1px] border-solid border-[#D0E1F3] bg-[#F1F7FE]">
            <div class="">
                <p class="text-[32px] font-extrabold leading-[48px] text-center">Calculation of Package</p>
                <p class="text-base text-[#4D545B] text-center">Select options to view outgoing tours and make a reservation.</p>
            </div>
            <div class="flex w-full items-center gap-8 md:flex-col md:gap-2">
                <div class="max-w-[604] w-full">
                    <p class="text-[#333B44] mb-1">From</p>
                    <div class="py-3 flex px-4 gap-2 bg-white w-full rounded-lg ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21.953 4.52654C21.9074 4.3696 21.8435 4.21808 21.7633 4.07625C21.3819 3.40231 20.6787 3 19.8821 3C19.4715 3 19.0622 3.1119 18.6982 3.3236L18.6883 3.32938L14.8192 5.78778L7.59608 3.34269C6.53088 2.98211 5.36256 3.10366 4.39072 3.67609C4.16462 3.8092 4.02431 4.05736 4.02447 4.32365C4.02466 4.58998 4.16533 4.83794 4.39158 4.97073L10.4794 8.54392L6.526 11.0966L3.1288 10.8502C2.91821 10.835 2.71032 10.8837 2.52735 10.9914C2.21223 11.1768 2.01544 11.5089 2.00087 11.8797C1.9863 12.2504 2.15637 12.5975 2.45587 12.8081L3.94911 13.8582L4.6454 15.0845C4.77517 15.3405 5.00279 15.5346 5.27357 15.6191C5.37392 15.6504 5.47759 15.6658 5.58092 15.6658C5.76494 15.6658 5.94803 15.6168 6.10971 15.5214L6.11783 15.5166L21.4807 5.7598C21.8972 5.5079 22.0913 5.00249 21.953 4.52654Z" fill="#666C73"/>
                            <path d="M21.4137 19.5814H2.58959C2.26576 19.5814 2.00326 19.8493 2.00326 20.1796C2.00326 20.51 2.2658 20.7778 2.58959 20.7778H21.4137C21.7375 20.7778 22 20.5099 22 20.1796C22 19.8492 21.7375 19.5814 21.4137 19.5814Z" fill="#666C73"/>
                        </svg>
                        <select class="w-full cursor-pointer border-none outline-none ">
                            <option disabled selected value="1">select</option>
                            <option value="2">select</option>
                            <option value="3">select</option>
                        </select>
                    </div>
                </div>
                <div class="mt-8 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0041 21.9009H44.3919C45.2316 21.9009 46.0712 21.4811 46.2811 20.6414C46.701 19.8018 46.491 18.9621 45.8613 18.3324L37.4648 9.93589C36.6251 9.09624 35.3657 9.09624 34.526 9.93589C33.6863 10.7755 33.6863 12.035 34.526 12.8747L39.354 17.7027H15.0041C13.7446 17.7027 12.905 18.5423 12.905 19.8018C12.905 21.0613 13.7446 21.9009 15.0041 21.9009ZM13.5348 38.0642C13.9546 38.484 14.3744 38.6939 15.0042 38.6939C15.6339 38.6939 16.0537 38.484 16.4735 38.0642C17.3132 37.2245 17.3132 35.965 16.4735 35.1254L11.6455 30.2974H35.9954C37.2549 30.2974 38.0946 29.4577 38.0946 28.1983C38.0946 26.9388 37.2549 26.0991 35.9954 26.0991H6.60763C5.76798 26.0991 5.13824 26.519 4.71842 27.3586C4.29859 28.1983 4.50851 29.0379 5.13824 29.6676L13.5348 38.0642Z" fill="#72A4DA"/>
                    </svg>
                </div>
                <div class="max-w-[604px] w-full">
                    <p class="text-[#333B44] mb-1">To</p>
                    <div class="py-3 flex px-4 gap-2 bg-white w-full rounded-lg ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M21.2624 12.7775C20.962 12.5062 20.5885 12.3142 20.1822 12.2224L20.1712 12.2199L15.7145 11.389L12.0485 4.90101C11.5079 3.94425 10.5729 3.25764 9.48309 3.01731C9.22954 2.96149 8.96283 3.04289 8.78681 3.22993C8.6108 3.41693 8.54967 3.68388 8.62732 3.92651L10.7166 10.4562L6.13584 9.63578L3.81385 7.2184C3.66991 7.06853 3.48546 6.96533 3.2805 6.9201C2.9273 6.84218 2.56364 6.94507 2.30763 7.19565C2.05162 7.44628 1.94638 7.80223 2.02615 8.14791L2.42368 9.87137L2.12177 11.192C2.04736 11.4574 2.08544 11.7441 2.22759 11.9822C2.37407 12.2275 2.62055 12.4039 2.90383 12.4662L2.91297 12.4682L20.6058 15.7704C20.6795 15.7858 20.7532 15.7932 20.8261 15.7932C21.2196 15.7932 21.5869 15.5759 21.7673 15.2169C21.8378 15.0766 21.8914 14.9281 21.9264 14.7756C22.0932 14.0507 21.8451 13.3037 21.2624 12.7775Z" fill="#666C73"/>
                            <path d="M21.4165 19.8576H2.68033C2.35803 19.8576 2.09674 20.1133 2.09674 20.4288C2.09674 20.7443 2.35803 21 2.68033 21H21.4164C21.7387 21 22 20.7443 22 20.4288C22 20.1133 21.7388 19.8576 21.4165 19.8576Z" fill="#666C73"/>
                        </svg>
                        <select class="w-full cursor-pointer border-none outline-none">
                            <option value="1">select</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="flex w-full gap-8 md:flex-col mt-8">
                <div class="w-1/2 flex md:flex-col md:w-full">
                    <div class="w-1/2 md:w-full">
                        <p class="text-[#333B44] whitespace-nowrap">Transfer date and time</p>
                        <div class="md:w-full flex border-[1px] border-solid border-[#E6E6E7] mt-1 bg-white rounded-lg">
                            <div class="pl-4 py-4 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7949 2C16.7949 1.58579 16.4591 1.25 16.0449 1.25C15.6307 1.25 15.2949 1.58579 15.2949 2V2.8291H8.7168V2C8.7168 1.58579 8.38101 1.25 7.9668 1.25C7.55258 1.25 7.2168 1.58579 7.2168 2V2.8476C5.84568 2.94087 4.65193 3.38862 3.76749 4.22937C2.76004 5.18705 2.25 6.5633 2.25 8.22213V17.2718C2.25 18.9507 2.75774 20.3462 3.76225 21.3198C4.76302 22.2898 6.16301 22.7499 7.77096 22.7499H16.229C17.8377 22.7499 19.2366 22.2991 20.2371 21.3438C21.243 20.3834 21.75 19.0051 21.75 17.3474V8.22317C21.7548 6.56549 21.2504 5.18867 20.2448 4.23009C19.3621 3.38865 18.1684 2.94108 16.7949 2.84767V2ZM15.2949 4.3291V5.29078C15.2949 5.70499 15.6307 6.04078 16.0449 6.04078C16.4591 6.04078 16.7949 5.70499 16.7949 5.29078V4.35179C17.854 4.44089 18.6563 4.78814 19.2098 5.31582C19.8507 5.92673 20.2541 6.87097 20.25 8.21982L20.25 8.22213V8.6543H3.75V8.22213C3.75 6.87387 4.1571 5.9286 4.80096 5.31654C5.35711 4.78786 6.16058 4.4407 7.2168 4.35172V5.29078C7.2168 5.70499 7.55258 6.04078 7.9668 6.04078C8.38101 6.04078 8.7168 5.70499 8.7168 5.29078V4.3291H15.2949ZM3.75 10.1543V17.2718C3.75 18.6472 4.1594 19.6158 4.8062 20.2427C5.45673 20.8732 6.44222 21.2499 7.77096 21.2499H16.229C17.5663 21.2499 18.5528 20.878 19.2013 20.2589C19.8444 19.6448 20.25 18.6968 20.25 17.3474V10.1543H3.75ZM16.4424 12.5596C16.0282 12.5596 15.6924 12.8954 15.6924 13.3096C15.6924 13.7238 16.0282 14.0596 16.4424 14.0596H16.4516C16.8659 14.0596 17.2016 13.7238 17.2016 13.3096C17.2016 12.8954 16.8659 12.5596 16.4516 12.5596H16.4424ZM11.2549 13.3096C11.2549 12.8954 11.5907 12.5596 12.0049 12.5596H12.0141C12.4284 12.5596 12.7641 12.8954 12.7641 13.3096C12.7641 13.7238 12.4284 14.0596 12.0141 14.0596H12.0049C11.5907 14.0596 11.2549 13.7238 11.2549 13.3096ZM7.55664 12.5596C7.14243 12.5596 6.80664 12.8954 6.80664 13.3096C6.80664 13.7238 7.14243 14.0596 7.55664 14.0596H7.5659C7.98012 14.0596 8.3159 13.7238 8.3159 13.3096C8.3159 12.8954 7.98012 12.5596 7.5659 12.5596H7.55664ZM15.6924 17.1963C15.6924 16.7821 16.0282 16.4463 16.4424 16.4463H16.4516C16.8659 16.4463 17.2016 16.7821 17.2016 17.1963C17.2016 17.6105 16.8659 17.9463 16.4516 17.9463H16.4424C16.0282 17.9463 15.6924 17.6105 15.6924 17.1963ZM12.0049 16.4463C11.5907 16.4463 11.2549 16.7821 11.2549 17.1963C11.2549 17.6105 11.5907 17.9463 12.0049 17.9463H12.0141C12.4284 17.9463 12.7641 17.6105 12.7641 17.1963C12.7641 16.7821 12.4284 16.4463 12.0141 16.4463H12.0049ZM6.80664 17.1963C6.80664 16.7821 7.14243 16.4463 7.55664 16.4463H7.5659C7.98012 16.4463 8.3159 16.7821 8.3159 17.1963C8.3159 17.6105 7.98012 17.9463 7.5659 17.9463H7.55664C7.14243 17.9463 6.80664 17.6105 6.80664 17.1963Z" fill="#000A15"/>
                                </svg>
                            </div>
                            <date-picker
                                v-model="outgoingOptions.date"
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
                        <div class="flex md:w-full border-[1px] border-solid border-[#E6E6E7] mt-1 bg-white rounded-lg">
                            <div class="pl-4 py-4 mr-2">
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
                <div class="w-1/2 flex md:flex-col md:w-full">
                    <div class="w-1/2 md:w-full">
                        <p class="text-[#333B44] whitespace-nowrap">Date and time of return</p>
                        <div class="flex border-[1px] border-solid border-[#E6E6E7] mt-1 bg-white rounded-lg">
                            <div class="pl-4 py-4 mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7949 2C16.7949 1.58579 16.4591 1.25 16.0449 1.25C15.6307 1.25 15.2949 1.58579 15.2949 2V2.8291H8.7168V2C8.7168 1.58579 8.38101 1.25 7.9668 1.25C7.55258 1.25 7.2168 1.58579 7.2168 2V2.8476C5.84568 2.94087 4.65193 3.38862 3.76749 4.22937C2.76004 5.18705 2.25 6.5633 2.25 8.22213V17.2718C2.25 18.9507 2.75774 20.3462 3.76225 21.3198C4.76302 22.2898 6.16301 22.7499 7.77096 22.7499H16.229C17.8377 22.7499 19.2366 22.2991 20.2371 21.3438C21.243 20.3834 21.75 19.0051 21.75 17.3474V8.22317C21.7548 6.56549 21.2504 5.18867 20.2448 4.23009C19.3621 3.38865 18.1684 2.94108 16.7949 2.84767V2ZM15.2949 4.3291V5.29078C15.2949 5.70499 15.6307 6.04078 16.0449 6.04078C16.4591 6.04078 16.7949 5.70499 16.7949 5.29078V4.35179C17.854 4.44089 18.6563 4.78814 19.2098 5.31582C19.8507 5.92673 20.2541 6.87097 20.25 8.21982L20.25 8.22213V8.6543H3.75V8.22213C3.75 6.87387 4.1571 5.9286 4.80096 5.31654C5.35711 4.78786 6.16058 4.4407 7.2168 4.35172V5.29078C7.2168 5.70499 7.55258 6.04078 7.9668 6.04078C8.38101 6.04078 8.7168 5.70499 8.7168 5.29078V4.3291H15.2949ZM3.75 10.1543V17.2718C3.75 18.6472 4.1594 19.6158 4.8062 20.2427C5.45673 20.8732 6.44222 21.2499 7.77096 21.2499H16.229C17.5663 21.2499 18.5528 20.878 19.2013 20.2589C19.8444 19.6448 20.25 18.6968 20.25 17.3474V10.1543H3.75ZM16.4424 12.5596C16.0282 12.5596 15.6924 12.8954 15.6924 13.3096C15.6924 13.7238 16.0282 14.0596 16.4424 14.0596H16.4516C16.8659 14.0596 17.2016 13.7238 17.2016 13.3096C17.2016 12.8954 16.8659 12.5596 16.4516 12.5596H16.4424ZM11.2549 13.3096C11.2549 12.8954 11.5907 12.5596 12.0049 12.5596H12.0141C12.4284 12.5596 12.7641 12.8954 12.7641 13.3096C12.7641 13.7238 12.4284 14.0596 12.0141 14.0596H12.0049C11.5907 14.0596 11.2549 13.7238 11.2549 13.3096ZM7.55664 12.5596C7.14243 12.5596 6.80664 12.8954 6.80664 13.3096C6.80664 13.7238 7.14243 14.0596 7.55664 14.0596H7.5659C7.98012 14.0596 8.3159 13.7238 8.3159 13.3096C8.3159 12.8954 7.98012 12.5596 7.5659 12.5596H7.55664ZM15.6924 17.1963C15.6924 16.7821 16.0282 16.4463 16.4424 16.4463H16.4516C16.8659 16.4463 17.2016 16.7821 17.2016 17.1963C17.2016 17.6105 16.8659 17.9463 16.4516 17.9463H16.4424C16.0282 17.9463 15.6924 17.6105 15.6924 17.1963ZM12.0049 16.4463C11.5907 16.4463 11.2549 16.7821 11.2549 17.1963C11.2549 17.6105 11.5907 17.9463 12.0049 17.9463H12.0141C12.4284 17.9463 12.7641 17.6105 12.7641 17.1963C12.7641 16.7821 12.4284 16.4463 12.0141 16.4463H12.0049ZM6.80664 17.1963C6.80664 16.7821 7.14243 16.4463 7.55664 16.4463H7.5659C7.98012 16.4463 8.3159 16.7821 8.3159 17.1963C8.3159 17.6105 7.98012 17.9463 7.5659 17.9463H7.55664C7.14243 17.9463 6.80664 17.6105 6.80664 17.1963Z" fill="#000A15"/>
                                </svg>
                            </div>
                            <date-picker
                                :full-month-name="true"
                                placeholder="Choose day"
                                wrapper-class="p-0 min-w-[120px]"
                                input-class="bg-[#FFF] w-full pl-0 py-4  mr-0 border-none outline-none"
                                :typeable="false"
                                :hideInput="false"
                                icon-width="0" icon-height="0"
                            >
                            </date-picker>
                        </div>
                    </div>
                    <div class="w-1/2 mt-6 md:w-full">
                        <div class="flex border-[1px] border-solid border-[#E6E6E7] mt-1 bg-white rounded-lg">
                            <div class="pl-4 py-4 mr-2">
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
            <div class="flex w-full gap-8 my-8 md:flex-col">
                <div class="w-1/2 md:w-full">
                    <p class="text-[#333B44]">Resorts</p>
                    <div class="relative bg-white rounded-lg mt-1 md:w-full">
                        <select class="bg-white w-full rounded-lg cursor-pointer py-3 px-4 border-none outline-none ">
                            <option value="1">select</option>
                            <option value="2">select</option>
                            <option value="3">select</option>
                        </select>
                    </div>
                </div>
                <div class="w-1/2 md:w-full">
                    <p class="text-[#333B44]">Hotel name</p>
                    <div class="bg-white rounded-lg mt-1">
                        <select class="bg-white w-full rounded-lg cursor-pointer py-3 px-4 border-none outline-none ">
                            <option value="1">select</option>
                            <option value="2">select</option>
                            <option value="3">select</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="flex w-full gap-8 mb-8 md:flex-col">
                <div class="w-1/4 md:w-full">
                    <p class="text-[#333B44]">Citizenship</p>
                    <div class="bg-white rounded-lg mt-1">
                        <select class="bg-white w-full rounded-lg cursor-pointer py-3 px-4 border-none outline-none ">
                            <option value="1">select</option>
                            <option value="1">Yes</option>
                            <option value="1">No</option>
                        </select>
                    </div>
                </div>
                <div class="w-1/4 md:w-full">
                    <p class="text-[#333B44]">Adult</p>
                    <div class="bg-white rounded-lg mt-1">
                        <input v-model="outgoingOptions.direaction" class="w-full mt-1 py-3 px-4 border-none outline-none sm:w-[288px]" placeholder="Enter here" type="text" />
                    </div>
                </div>
                <div class="w-1/4 md:w-full">
                    <p class="text-[#333B44]">Child</p>
                    <div class="bg-white rounded-lg mt-1">
                        <input v-model="outgoingOptions.direaction" class="w-full mt-1 py-3 px-4 border-none outline-none sm:w-[288px]" placeholder="Enter here" type="text" />
                    </div>
                </div>
                <div class="w-1/4 md:w-full">
                    <p class="text-[#333B44]">Child seats</p>
                    <div class="bg-white rounded-lg mt-1">
                        <select class="bg-white  rounded-lg cursor-pointer py-3 px-4 border-none outline-none">
                            <option selected disabled value="1" class="text-[#80858A] font-light">Select</option>
                            <option value="1">select</option>
                            <option value="2">select</option>
                            <option value="3"><select name="" id=""></select></option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="flex justify-start w-full gap-8 mb-8 md:flex-col">
                <div class="max-w-[406px] w-full">
                    <p class="text-[#333B44]">Price range</p>
                    <div class="flex justify-between mt-2">
                        <p class="text-xs text-[#333B44]">{{ priceRange[0] }} AMD</p>
                        <p class="text-xs text-[#333B44]">{{ priceRange[1] }} AMD</p>
                    </div>
                    <v-range-slider v-model="priceRange" :max="100000" :min="0" :step="1000" class="align-center"></v-range-slider>
                </div>
                <div>
                    <p class="text-[#333B44] mb-1">Choose rate</p>
                    <Rating :max-rating="5" :initial-rating="0"></Rating>
                </div>
                <div class="flex mt-7">
                    <!-- <input type="checkbox" class="cursor-pointer w-5 h-5" name="" id="hotOffer">
                    <label for="hotOffer" class="ml-3 cursor-pointer">Hot offer</label> -->
                    <CheckInp :forId="'hotOffer'" :inpVal="outgoingOptions.hotOffer" @changeInp="outgoingOptions.hotOffer = !outgoingOptions.hotOffer;">Hot offer</CheckInp>
                </div>
            </div>
            <div class="w-full gap-8 mb-8 md:flex-col">
                <p class="text-base font-medium text-[#19222C] mb-4">Extra Needs</p>
                <div class="flex gap-4 flex-wrap">
                    <CheckInp :forId="'wheelchair'" :inpVal="outgoingOptions.wheelchair" @changeInp="outgoingOptions.wheelchair = !outgoingOptions.wheelchair;">Wheelchair</CheckInp> 
                    <CheckInp :forId="'pets'" :inpVal="outgoingOptions.pets" @changeInp="outgoingOptions.pets = !outgoingOptions.pets;">Pets</CheckInp>                    
                    <CheckInp :forId="'insurance'" :inpVal="outgoingOptions.insurance" @changeInp="outgoingOptions.insurance = !outgoingOptions.insurance;">Insurance</CheckInp>
                    <CheckInp :forId="'individualTransfer'" :inpVal="outgoingOptions.individualTransfer" @changeInp="outgoingOptions.individualTransfer = !outgoingOptions.individualTransfer;">Individual transfer</CheckInp>                 
                    <CheckInp :forId="'firstSeats'" :inpVal="outgoingOptions.firstSeats" @changeInp="outgoingOptions.firstSeats = !outgoingOptions.firstSeats;">First seats</CheckInp>
                    <CheckInp :forId="'sportEquipment'" :inpVal="outgoingOptions.sportEquipment" @changeInp="outgoingOptions.sportEquipment = !outgoingOptions.sportEquipment;">Sport equipment</CheckInp>
                </div>
            </div>
            <div class="w-full mt-8">
                <button @click.prevent="submitOptions" class="bg-primaryBlue rounded-lg py-3 px-8 w-full font-bold text-[#FDFFFE]">Find Results</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import DatePicker from "vuejs3-datepicker";
const priceRange = ref([0, 100000]);
const rating = ref("")

const outgoingOptions = reactive({
    direaction: "",
    date: "",
    type: "",
    price: priceRange.value,
    hotOffer: false,
    wheelchair: false,
    pets: false,
    insurance: false,
    individualTransfer: false,
    firstSeats: false,
    sportEquipment: false
})

function submitOptions() {
    console.log(outgoingOptions);
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

.vuejs3-datepicker input{
    min-width: 80px;
}
</style>