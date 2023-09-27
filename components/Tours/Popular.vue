<template>
    <div class="w-full justify-center items-center flex mt-20 flex-col">
        <div>
            <p class="text-[32px] leadinf-[48px] font-extrabold text-[#000A15]">
                Popular <span class="text-primaryBlue">Tours</span> in Armenia
            </p>
        </div>
        <div class="w-[1384px] grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-8 mt-8">
            <div class="col-span-1 xl:ml-20 xl:w-[464px] xl:mr-8">
                <TourBlock />
            </div>
            <div class="col-span-1 xl:w-[464px] xl:ml-40">
                <TourBlock />
            </div>
            <div class="col-span-1 xl:col-span-2 xl:max-w-full">
                <TourBlock />
            </div>
            <div class="col-span-1 xl:w-1/2">
                <TourBlock />
            </div>
            <div class="col-span-1 xl:w-1/2">
                <TourBlock />
            </div>
            <div class="col-span-1 xl:col-span-2">
                <TourBlock />
            </div>
        </div>
    </div>
  <!-- <div class="w-full justify-center items-center flex mt-20 flex-col">
        <div>
            <p class="text-[32px] leadinf-[48px] font-extrabold text-[#000A15]">Popular <span class="text-primaryBlue">Tours</span> in Armenia</p>
        </div>
        <div class="flex w-[1384px] xl:flex-wrap gap-8 mt-8">
            <div class="w-1/3">
                <TourBlock />
            </div>
            <div class="w-1/3">
                <TourBlock />
            </div>
            <div class="w-1/3 grow max-w-full">
                <TourBlock />
            </div>
            <div class="w-1/3 grow max-w-full">
                <TourBlock />
            </div>
            <div class="w-1/3 grow max-w-full">
                <TourBlock />
            </div>
            <div class="w-1/3 grow max-w-full">
                <TourBlock />
            </div>
        </div>
    </div> -->
</template>