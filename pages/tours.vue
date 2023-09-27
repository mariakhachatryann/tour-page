<template>
    <div>
        <ToursMain :title="compOptions.title" :text="compOptions.text" :src="compOptions.src" />
        <ToursSelect />
        <!-- <ToursPopular /> -->
        <!-- <MainSubscription /> -->
        <!-- <Footer />         -->
    </div>
</template>

<script setup>
const compOptions = {
    title: "Our Tours",
    text: "Discover the wonders of the world with our meticulously crafted itineraries, curated to provide a perfect blend of adventure, culture, and relaxation. Whether you're a solo traveler, a couple seeking a romantic getaway, or a group of friends looking for an unforgettable experience, we have the ideal tour for you.",
    src: "frame3.png"
}
</script>