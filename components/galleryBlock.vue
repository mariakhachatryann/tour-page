<template>
    <div class="mt-8 flex gap-8 flex-wrap">
        <div @click="openGallery" v-for="instance in instances" :key="instance">
            <img class="h-40 w-40 rounded-lg cursor-pointer" src="~/assets/img/tour/specTour.jpg" alt="">
        </div>
        <div class="w-full flex justify-center items-center" v-if="galleryState">
            <v-overlay v-model="galleryState" class="flex w-full justify-center items-center">
                <v-carousel direction="horizontal" class="rounded-lg max-w-[900px] h-[700px] md:max-w-[500px] md:max-h-[300px] w-full" progress="#1467C2" color="#1467C2" continuous :touch="true" interval="3000" cycle show-arrows="hover">
                        <v-carousel-item class="w-full" >
                            <v-sheet class="max-w-[900px] min-w-[290px] h-[700px] md:max-w-[500px] md:max-h-[300px]">
                                <img class="w-full h-full bg-cover bg-center" src="~/assets/img/hotel/hotel.jpg" />                                    
                            </v-sheet>
                        </v-carousel-item>
                        <v-carousel-item class="w-full" >
                            <v-sheet class="max-w-[900px] min-w-[290px] h-[700px] md:max-w-[500px] md:max-h-[300px]">
                                <img class="w-full h-full bg-cover bg-center" src="~/assets/img/hotel/hotel1.jpg" />                                    
                            </v-sheet>
                        </v-carousel-item>
                        <v-carousel-item class="w-full" >
                            <v-sheet class="max-w-[900px] min-w-[290px] h-[700px] md:max-w-[500px] md:max-h-[300px] w-full">
                                <img class="w-full h-full bg-cover bg-center" src="~/assets/img/hotel/hotel3.jpg" />                                    
                            </v-sheet>
                        </v-carousel-item>
                </v-carousel>
            </v-overlay>
        </div>
    </div>
</template>

<script setup>
const instances = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const galleryState = ref(false);

function openGallery() {
    galleryState.value = !galleryState.value
    console.log("opened");
}
</script>