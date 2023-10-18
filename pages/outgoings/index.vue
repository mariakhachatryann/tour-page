<template>
    <div>
        <ToursMain title="outgoingPageTitle" text="outgoingPageDesc" src="frame6.png" />
        <OutgoingSelect />
        <OutgoingPopular />
        <MainSubscription />
        <Footer />
    </div>
</template>

<script setup>
useHead({
    title: "Outgoing tours"
})
</script>