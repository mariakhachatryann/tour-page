<template>
    <div class="flex justify-center w-full items-center my-16 px-4">
        <div class="max-w-[1384px] flex justify-center items-center lg:flex-col-reverse bg-[#F1F7FE] rounded-3xl ">
            <div class="max-w-[530px] my-4 lg:max-w-[960px] px-4 lg:w-full md:mx-4">
                <p class="text-[32px] xl:text-[28px] font-extrabold lg:text-[28px]">Subscription our newsletter and get updated every time</p>
                <p class="font-base text-primaryGrey mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam morbi odio id dictum ut vestibulum. Tempor duis molestie proin nec. Interdum dolor dui venenatis elementum leo eleifend arcu, cursus justo.</p>
                <div class="flex mt-8 sm:flex-col sm:gap-4">
                    <input class="px-4 py-2 w-full mr-4 focus:outline-primaryBlue" type="email" placeholder="Enter email address" />
                    <button class="bg-primaryBlue text-[#FDFFFE] rounded-lg py-3 px-8 font-bold hover:bg-[#4385CE] hover:duration-300 hover:text-[#FDFFFE]">Subscribe</button>
                </div>
            </div>
            <div class="w-full">
                <img src="~/assets/img/frame1.png" class="rounded-3xl w-[780px] h-[472px] lg:w-[960px] lg:h-[312px] bg-cover bg-center"  alt="">
                <!-- <NuxtImg v-once format="webp" src="/frame1.png" class="rounded-3xl w-[780px] h-[472px] lg:w-[960px] lg:h-[312px] sm:max-w-[280px]"></NuxtImg> -->
                <!-- <div class="bg-[url('~/assets/img/frame1.png')] rounded-3xl w-[780px] h-[472px] lg:w-[960px] lg:h-[312px] bg-cover bg-center"></div> -->
            </div>
        </div>
    </div>
</template>