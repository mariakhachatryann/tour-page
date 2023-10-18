<template>
    <div>
        <ToursMain title="tourPageTitle" text="tourPageDesc" src="frame3.png" />
        <ToursSelect />
        <ToursPopular />
        <MainSubscription />
        <Footer />        
    </div>
</template>

<script setup>
useHead({
    title: "Tours"
})
</script>