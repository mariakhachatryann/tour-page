<template>
    <div class="flex py-20  justify-center items-center xl1:px-8 lg:flex-col lg:justify-center lg:items-center lg:px-8">
        <div class="w-[558px] mr-[150px] lg:m-0 lg:w-full lg:flex lg:flex-col lg:text-center lg:mb-8 md:p-0 sm:p-0">
            <h1 class="font-extrabold text-[48px] lg:text-[32px]">{{ $t("mainText") }}</h1>
            <p class="text-primaryGrey font-normal text-base lg:my-4">{{ $t("mainBottom") }}</p>
            <button class="px-8 py-3 lg:px-8 lg:py-3 text-base font-bold mt-7 rounded-lg bg-[#fff] border-solid text-primaryBlue border-[1px] border-primaryBlue">
                <NuxtLink to="/tours">Discover our tours</NuxtLink>
            </button>
        </div>
        <div class="h-[530px] sm:px-1" v-for="(slide, index) in slides" :key="index" :class="{ 'hidden': index !== currentSlide }">
            <div class="relative rounded-t-2xl sm:min-w-[310px] max-w-[794px] lg:max-w-[960px] h-[354px] bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: 'url(' + slide.image + ')' }">
                <div class="flex gap-1 absolute right-[40%] top-4 py-2 px-4 rounded-2xl bg-transparentCol">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.3335 6.87852C2.3335 3.81194 4.89608 1.33334 7.99579 1.33334C11.1042 1.33334 13.6668 3.81194 13.6668 6.87852C13.6668 8.4238 13.1048 9.85843 12.1798 11.0744C11.1594 12.4157 9.9016 13.5843 8.48586 14.5016C8.16184 14.7136 7.86941 14.7296 7.5138 14.5016C6.08999 13.5843 4.83222 12.4157 3.8205 11.0744C2.89482 9.85843 2.3335 8.4238 2.3335 6.87852ZM6.12965 7.05118C6.12965 8.07848 6.96793 8.88646 7.99579 8.88646C9.02432 8.88646 9.87068 8.07848 9.87068 7.05118C9.87068 6.03187 9.02432 5.18456 7.99579 5.18456C6.96793 5.18456 6.12965 6.03187 6.12965 7.05118Z" fill="#FDFFFE"/>
                    </svg>
                    <p class="text-xs font-medium text-[#FDFFFE]">Yerevan</p>
                </div>
                <div class="flex justify-between">
                    <svg @click="prevSlide" class="rounded-t-2xl" width="104" height="354" viewBox="0 0 104 354" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="104" height="354" fill="url(#paint0_linear_1399_2953)"/>
                        <path class="cursor-pointer" d="M51.9994 161C63.0294 161 71.9994 169.972 71.9994 181C71.9994 192.028 63.0294 201 51.9994 201C40.9714 201 31.9995 192.028 31.9995 181C31.9995 169.972 40.9714 161 51.9994 161Z" fill="white"/>
                        <path class="cursor-pointer" d="M55.6441 172.686C55.2621 172.686 54.8781 172.832 54.5861 173.124L47.6121 180.064C47.3301 180.346 47.1721 180.728 47.1721 181.128C47.1721 181.526 47.3301 181.908 47.6121 182.19L54.5861 189.134C55.1721 189.718 56.1201 189.718 56.7061 189.13C57.2901 188.542 57.2881 187.592 56.7021 187.008L50.7961 181.128L56.7021 175.248C57.2881 174.664 57.2901 173.716 56.7061 173.128C56.4141 172.832 56.0281 172.686 55.6441 172.686Z" fill="#1467C2"/>
                        <defs>
                        <linearGradient id="paint0_linear_1399_2953" x1="104" y1="177" x2="1.75888e-10" y2="177" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0C0710" stop-opacity="0"/>
                            <stop offset="1" stop-color="#0C0710" stop-opacity="0.7"/>
                        </linearGradient>
                        </defs>
                    </svg>
                    <svg @click="nextSlide" class="rounded-t-2xl" width="104" height="354" viewBox="0 0 104 354" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="104" height="354" fill="url(#paint0_linear_1399_2948)"/>
                        <path class="cursor-pointer" d="M51.9994 153C63.0294 153 71.9994 161.972 71.9994 173C71.9994 184.028 63.0294 193 51.9994 193C40.9714 193 31.9994 184.028 31.9994 173C31.9994 161.972 40.9714 153 51.9994 153Z" fill="white"/>
                        <path class="cursor-pointer" d="M49.1142 164.558C49.4962 164.558 49.8802 164.704 50.1722 164.996L57.1462 171.936C57.4282 172.218 57.5862 172.6 57.5862 173C57.5862 173.398 57.4282 173.78 57.1462 174.062L50.1722 181.006C49.5862 181.59 48.6382 181.59 48.0522 181.002C47.4682 180.414 47.4702 179.464 48.0562 178.88L53.9622 173L48.0562 167.12C47.4702 166.536 47.4682 165.588 48.0522 165C48.3442 164.704 48.7302 164.558 49.1142 164.558Z" fill="#1467C2"/>
                        <defs>
                        <linearGradient id="paint0_linear_1399_2948" x1="104" y1="177" x2="1.75888e-10" y2="177" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#0C0710" stop-opacity="0.7"/>
                        <stop offset="1" stop-color="#0C0710" stop-opacity="0"/>
                        </linearGradient>
                        </defs>
                    </svg> 
                </div>
            </div>
            <div class="flex sm:flex-col max-w-[794px] sm:max-w-[310px] lg:max-w-[960px] min-h-[170px] rounded-b-2xl bg-[#D0E1F3] py-[20px] px-[21px]">
                <div class="max-w-[586px]">
                    <p class="text-[21px] font-bold leading-8">{{ slide.caption }}</p>
                    <p class="text-[#333B44] text-[14px] mt-2 sm:mb-4">On this tour you will visit Gyumri, the second largest city in Armenia, one of the main cultural centers of the republic. The only Catholic…</p>
                </div>
                <div class="pl-8 min-w-[160px] sm:pl-0">
                    <div class="flex min-w-[110px]">
                        <p class="mr-1 text-base font-medium text-[#000A15]">15,000 AMD</p>
                        <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2806 7.94729C14.2806 10.3114 12.3641 12.2279 10 12.2279C7.63589 12.2279 5.7194 10.3114 5.7194 7.94729C5.7194 5.58318 7.63589 3.66669 10 3.66669C12.3641 3.66669 14.2806 5.58318 14.2806 7.94729ZM2.60742 18.3998C2.60742 15.7468 4.75586 13.5983 7.40885 13.5983H12.5911C15.2441 13.5983 17.3926 15.7468 17.3926 18.3998C17.3926 19.4675 16.5267 20.3334 15.459 20.3334H4.54102C3.47331 20.3334 2.60742 19.4675 2.60742 18.3998Z" fill="#80858A"/>
                            <path d="M29.392 18H28.512V9.504C28.512 9.19467 28.512 8.928 28.512 8.704C28.512 8.48 28.5173 8.272 28.528 8.08C28.5387 7.888 28.544 7.70667 28.544 7.536C28.3947 7.67467 28.256 7.80267 28.128 7.92C28 8.02667 27.8293 8.16 27.616 8.32L26.016 9.552L25.536 8.912L28.64 6.576H29.392V18Z" fill="#4D545B"/>
                        </svg>
                    </div>
                    <button class="bg-primaryBlue text-[#FDFFFE] h-[48px] py-3 px-5 mt-[60px] rounded-lg sm:mt-4 sm:w-full sm:px-0">Order Now</button>
                </div>
            </div>
        </div> 
    </div>
</template>

<script setup>
const slides = [
    {  image: "https://s3-alpha-sig.figma.com/img/2376/8f16/d0ec930bbe4ee6aad7d64a0cbeadfc89?Expires=1696204800&Signature=dzgJoHs4~UBMt9L-bCStUItMLJfpU6zh9lidTrEh-P9nyLJDJ1TQrp-SXJYNcTXWyDj9hwgtWcPufo5zKRxZEawpmtGaZ6WwULmrxf6FA0WM9iHCcuxPeWk4vKLH-gKJMHgoS6dbFcctwiy9fHLYRMagRODmgA4zA-GoBvEpvtEpmQTG~JL0MbBGV~afe3novpSTt~3-c3CXw1i1XEiM-BbjFejZkNtv~7jENa~-N4EeJkcpym1U1rtv4lBNn0Y6S9H4arMSkxGPjq-x2TI2oY0PiCkw~89APdf7QJsnpk96LXA6Dl5012yYqlDOegT~1Wa9c7RMcmoaGW-w1lP5Qg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4", caption: "Sevan (Urban life museum, Black Fortress, walking through the old streets), Harichavank" },
    {  image: "https://s3-alpha-sig.figma.com/img/6f65/9010/f8bd151a032c9206b6ba8b9efae41185?Expires=1696204800&Signature=K8Y-gO42hS55fbM9UjEpKEs-SfKdSkTiyOYWr3GsAYJ8PAdlzIbitZp~lWCrvnDxrCLNvQz0WFqonrCCXG66~xuedfdWmmXfeI3NJm8CwLWb85fCWoGDGjY8X567keDINLGFWmoZ~8-zebis8dVikU6G0gHzMaGSOX5rxRDJlNPGqKBnRYHbj~xQ6Sb37QwfJyW6g6ipCEcnyFe2ti-ReDm6NYVH-UDaQwSt4SkteIiZtiA4Yi-jPmvArHraiV3UuXaHmkmli-pJvSpWVAa0e~Zs8IN-T5pfxfdg-3W7rQt3oRoGVotlbSVEm1LvYhi~eQ6-WU1oalU8o~paduujpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4", caption: "Gyumri (Urban life museum, Black Fortress, walking through the old streets), Harichavank" },
    {  image: "https://s3-alpha-sig.figma.com/img/b6d9/e65e/a6d703aee3ea86c368d2d7d196d50b73?Expires=1696204800&Signature=mS0rD10d~9MIpptgIz-y3WiHJTocaE8UTg5QH78tPQGAPP6MqgfeJN5xAqBHScpi8DaUwPlE0dkVNLxTcuBsXD0B7KWFJ5gO5njKWkj4HniLvRQgfoHkaQpsJ8MI18IedaQiJ9GFa8xmRztURPkrMxY5C-SbeDJm~xwYUp~IytJaWcxNWNTGKcAZnlxqkaPziJYiapVlQ9ewLGBFKnl6oEgT0oQhpC7YLqTPdnKywE0wGXV~vA~GN6KrfC~F0o5n0m50qGvNubUj7EcItNjk6TdKpQcUg7WLYpELPOD-tOwG3lssRFSK4aznc6L4Am8Gd9U0k5EaG2Ju2zH8WTeqXw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4", caption: "Ijevan (Urban life museum, Black Fortress, walking through the old streets), Harichavank" },
]

let currentSlide = ref(0);

function prevSlide() {
    currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
}

function nextSlide() {
    currentSlide.value = (currentSlide.value + 1) % slides.length;
}
</script>