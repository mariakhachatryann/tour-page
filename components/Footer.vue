<template>
    <div class="w-full flex justify-center items-center">
        <div class="max-w-[1384px] flex justify-evenly w-full gap-[26px] xl1:px-4 sm:flex-col md:px-2">
            <div class="max-w-[55%]">
                <div class="border-l-[3px] border-primaryBlue pl-4 mb-6 sm:pl-2">
                    <p class="text-sm font-light text-primaryBlue mb-2">Tours</p>
                    <p class="text-[#19222C] text-base">+374 44 44 44 44</p>
                </div>
                <div class="border-l-[3px] border-primaryBlue pl-4 mb-6 ">
                    <p class="text-sm font-light text-primaryBlue mb-2">Email for us</p>
                    <p class="text-[#19222C] text-base">info@something.com</p>
                </div>
                <div class="border-l-[3px] border-primaryBlue pl-4 mb-6 ">
                    <p class="text-sm font-light text-primaryBlue mb-2">Socials</p>
                    <div class="flex gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9984 3.85181C9.78308 3.85181 9.50506 3.86148 8.63498 3.90104C7.76659 3.94077 7.17385 4.07812 6.6552 4.27964C6.1187 4.48779 5.66361 4.76622 5.21021 5.21935C4.75648 5.67231 4.47778 6.12697 4.26876 6.66278C4.06653 7.18111 3.92888 7.77345 3.88979 8.64067C3.85105 9.50992 3.84085 9.78784 3.84085 12.001C3.84085 14.2142 3.85071 14.4911 3.89013 15.3604C3.93007 16.2279 4.06755 16.8201 4.2691 17.3383C4.47761 17.8743 4.75631 18.3289 5.20987 18.7819C5.6631 19.2352 6.11819 19.5143 6.65435 19.7224C7.17334 19.924 7.76625 20.0613 8.63447 20.101C9.50455 20.1406 9.7824 20.1503 11.9975 20.1503C14.213 20.1503 14.4902 20.1406 15.3603 20.101C16.2287 20.0613 16.8221 19.924 17.3411 19.7224C17.8774 19.5143 18.3318 19.2352 18.7851 18.7819C19.2388 18.3289 19.5175 17.8743 19.7265 17.3384C19.927 16.8201 20.0647 16.2278 20.1055 15.3606C20.1446 14.4913 20.1548 14.2142 20.1548 12.001C20.1548 9.78784 20.1446 9.51009 20.1055 8.64084C20.0647 7.77328 19.927 7.18111 19.7265 6.66295C19.5175 6.12697 19.2388 5.67231 18.7851 5.21935C18.3313 4.76605 17.8776 4.48762 17.3406 4.27964C16.8206 4.07812 16.2275 3.94077 15.3591 3.90104C14.489 3.86148 14.212 3.85181 11.996 3.85181H11.9984ZM11.2666 5.32037C11.4838 5.32003 11.7262 5.32037 11.9984 5.32037C14.1763 5.32037 14.4345 5.32818 15.2945 5.36722C16.0898 5.40356 16.5215 5.53632 16.809 5.64786C17.1897 5.79557 17.4611 5.97213 17.7464 6.25736C18.0319 6.54258 18.2086 6.81422 18.3568 7.19452C18.4685 7.48144 18.6015 7.91267 18.6377 8.70722C18.6768 9.56628 18.6853 9.82434 18.6853 11.9992C18.6853 14.174 18.6768 14.4321 18.6377 15.2911C18.6013 16.0857 18.4685 16.5169 18.3568 16.8038C18.209 17.1841 18.0319 17.4549 17.7464 17.74C17.4609 18.0252 17.1898 18.2018 16.809 18.3495C16.5218 18.4615 16.0898 18.5939 15.2945 18.6303C14.4346 18.6693 14.1763 18.6778 11.9984 18.6778C9.8203 18.6778 9.56216 18.6693 8.70227 18.6303C7.90696 18.5936 7.47532 18.4608 7.18762 18.3493C6.80695 18.2016 6.53505 18.025 6.24956 17.7398C5.96406 17.4546 5.78732 17.1836 5.63914 16.8031C5.52749 16.5162 5.39443 16.085 5.35823 15.2904C5.31914 14.4314 5.31133 14.1733 5.31133 11.9971C5.31133 9.82095 5.31914 9.56425 5.35823 8.70518C5.3946 7.91063 5.52749 7.4794 5.63914 7.19214C5.78698 6.81184 5.96406 6.5402 6.24956 6.25498C6.53505 5.96976 6.80695 5.79319 7.18762 5.64515C7.47515 5.53309 7.90696 5.40067 8.70227 5.36417C9.45476 5.33021 9.74638 5.32003 11.2666 5.31833V5.32037ZM16.3526 6.67348C16.1589 6.67348 15.9697 6.73084 15.8087 6.83831C15.6477 6.94578 15.5223 7.09853 15.4482 7.27723C15.3741 7.45594 15.3547 7.65259 15.3925 7.84229C15.4303 8.03199 15.5236 8.20624 15.6605 8.34299C15.7975 8.47974 15.9719 8.57285 16.1618 8.61054C16.3517 8.64824 16.5485 8.62882 16.7274 8.55476C16.9062 8.48069 17.0591 8.35529 17.1666 8.19443C17.2741 8.03357 17.3315 7.84447 17.3314 7.65105C17.3314 7.11116 16.893 6.67314 16.3526 6.67314V6.67348ZM11.9984 7.81607C9.68503 7.81607 7.80942 9.68988 7.80942 12.001C7.80942 14.3122 9.68503 16.1852 11.9984 16.1852C14.3118 16.1852 16.1869 14.3122 16.1869 12.001C16.1869 9.68988 14.3116 7.81607 11.9982 7.81607H11.9984ZM11.9984 9.28463C13.5 9.28463 14.7174 10.5007 14.7174 12.001C14.7174 13.5012 13.5 14.7174 11.9984 14.7174C10.4967 14.7174 9.27939 13.5012 9.27939 12.001C9.27939 10.5007 10.4967 9.28463 11.9984 9.28463Z" fill="#000A15"/>
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 9.92308H13.6667V7.15385C13.6667 6.38954 14.264 6.46154 15 6.46154H16.3333V3H13.6667C11.4573 3 9.66667 4.85954 9.66667 7.15385V9.92308H7V13.3846H9.66667V21H13.6667V13.3846H15.6667L17 9.92308Z" fill="#000A15"/>
                        </svg>
                    </div>
                </div>
                <p class="text-sm text-[#4D545B] sm:w-full">Open repair of infrarenal aortic aneurysm or dissection, plus repair of associated arterial trauma, following unsuccessful endovascular repair; aorto-bifemoral prosthesis  </p>
            </div>
            <div class="w-1/2 flex justify-center md:flex-col sm:w-full">
                <div class="mr-[64px]">
                    <p class="text-[#5B95D4] text-xl font-medium mb-4 md:flex-col">Company & Support</p>
                    <ul class="flex flex-col gap-2">
                        <NuxtLink to="/about" class="text-primaryGrey cursor-pointer">About us</NuxtLink>
                        <NuxtLink to="/contact" class="text-primaryGrey cursor-pointer">Contact us</NuxtLink>
                        <NuxtLink to="/privacyPolicy" class="text-primaryGrey cursor-pointer">Privacy & Policy</NuxtLink>
                        <NuxtLink to="/conditions" class="text-primaryGrey cursor-pointer">Terms of conditions</NuxtLink>
                    </ul>
                </div>
                <div class="md:mt-8">
                    <p class="text-[#5B95D4] text-xl font-medium mb-4">Services</p>
                    <ul class="flex flex-col gap-2">
                        <NuxtLink to="/tours" class="text-primaryGrey">Tours</NuxtLink>
                        <NuxtLink to="/hotels" class="text-primaryGrey">Hotels</NuxtLink>
                        <NuxtLink to="/transfer" class="text-primaryGrey">Transfer</NuxtLink>
                        <NuxtLink to="/outgoings" class="text-primaryGrey">Abroad</NuxtLink>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="max-w-[1856px] h-[1px] bg-[#D0E1F3] my-8 mx-8"></div>
    <div class="w-full flex justify-center items-center">
        <div class="max-w-[1384px] w-full flex justify-between items-center gap-8 pb-12 md:flex-col xl1:px-8">
            <div class="w-[152px] h-12 bg-[#E8F0F9] mt-2 text-center items-center">
                <p class="text-2xl text-[#01000E] font-bold p-1">LOGO</p>
            </div>
            <p class="tracking-[.28px] text-[#000A15] sm:text-center">© 2023 Unknown. All rights reserved </p>
            <p class="text-[#000A15]"><span class="text-[#80858A]">by</span><a href="https://www.hsrocket.com/en/" target="_blank"> HS Rocket</a></p>
        </div>
    </div>
</template>