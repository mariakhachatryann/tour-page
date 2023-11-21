<template>
    <RoutePath />
    <ContactBlock />
    <Footer />
</template>

<script setup>
useHead({
    title: "Contact Us"
})

console.log(useRoute())
console.log(useRouter())
console.log(useRouter().beforeEach(() => console.log("beforeResolve")))
</script>