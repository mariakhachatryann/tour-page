<template>
    <div>
        <ToursMain title="hotelPageTitle" text="hotelPageDesc" src="frame4.png" />
        <HotelsSelect />
        <HotelsPopular />
        <MainSubscription />
        <Footer />  
    </div>
</template>

<script setup>
useHead({
    title: "Hotels"
})
</script>