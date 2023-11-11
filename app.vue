<template>
    <div v-if="!isLoaded" class="w-full h-screen flex justify-center items-center">
        <Loader />
    </div>
    <div v-else>
        <NuxtLoadingIndicator :height="20" color="#ff0000" :throttle="300" :duration="4000"></NuxtLoadingIndicator>
        <div class="h-[120px] w-full sm:h-[88px]">
            <Header v-if="!isHeaderHidden" />
            <Nav :scrolled="isHeaderHidden" />
        </div>
        <NuxtPage/>
    </div>
</template>

<script setup>

// const nuxtApp = useNuxtApp();
// const show = ref(false);

// addRouteMiddleware('global-loader', () => {
//   show.value = true;
// }, {
//   global: true
// });

// nuxtApp.hook('page:finish', () => {
//   show.value = false;
// });
const isHeaderHidden = ref(false);
const isLoaded = ref(false);

const handleScroll = () => {
    const scrollY = window.scrollY;
    isHeaderHidden.value = scrollY > 25;
};

onMounted(() => {
    if (process.client) {
        window.addEventListener("scroll", handleScroll);
        setTimeout(() => {
            isLoaded.value = true
        }, 500)
    }
});

onBeforeUnmount(() => {
    if (process.client) {
        window.removeEventListener("scroll", handleScroll);
    }
});
</script>