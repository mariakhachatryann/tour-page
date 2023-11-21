<template>
    <div>
        <MainContentMain />
        <MainTopPlaces /> 
        <MainAbout /> 
        <MainAchieved /> 
        <MainSubscription />
        <Footer />
    </div>
</template>

<script setup>

useHead({
    title: "Home"
})

// onBeforeRouteUpdate(() => {
//     changed.value = true;
//     console.log("geledfv");
// })
</script>