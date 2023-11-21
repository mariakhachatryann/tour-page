<template>
    <div v-if="!isLoaded" class="w-full h-screen flex justify-center items-center">
        <Loader />
    </div>
    <!-- <div > -->
    <div :class="{ 'block': isLoaded, 'hidden': !isLoaded }">
        <NuxtLoadingIndicator :class="{ 'opacity': changed }" :height="3" color="#df6838" :throttle="600" :duration="10000"></NuxtLoadingIndicator>
        <div class="h-[120px] w-full sm:h-[88px]">
            <Header v-if="!isHeaderHidden" />
            <Nav :scrolled="isHeaderHidden" />
        </div>
        <NuxtPage v-if="!changed" />
    </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();
const isHeaderHidden = ref(false);
const isLoaded = ref(false);
const route = useRoute();

const handleScroll = () => {
    const scrollY = window.scrollY;
    isHeaderHidden.value = scrollY > 25;
};

onMounted(() => {
    if (process.client) {
        setTimeout(() => {
            isLoaded.value = true
        }, 500)
        window.addEventListener("scroll", handleScroll);
    }
});

onBeforeUnmount(() => {
    if (process.client) {
        window.removeEventListener("scroll", handleScroll);
    }
});

const changed = ref(false);

watch(() => route.fullPath, () => {
    changed.value = true;
    setTimeout(() => {
        changed.value = false
    }, 500)
})

// nuxtApp.hook("page:start", () => {
//     isLoaded.value = true;
//   });
//   nuxtApp.hook("page:finish", () => {
//     isLoaded.value = false;
//   });

// onNuxtReady(() => isLoaded.value = true)
// onBeforeRouteUpdate(() => changed.value = false)

</script>

<style>
.nuxt-loading-indicator {
    transform: none !important;
}

.opacity {
    opacity: 1 !important;
}

.opacity0 {
    opacity: 0 !important;
}
</style>