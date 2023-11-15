<template>
    <div :class="{ 'hidden': isLoaded }" class="w-full h-screen flex justify-center items-center">
        <Loader />
    </div>
    <div :class="{ 'block': isLoaded }">
        <NuxtLoadingIndicator :height="20" color="#ff0000" :throttle="300" :duration="4000"></NuxtLoadingIndicator>
        <div class="h-[120px] w-full sm:h-[88px]">
            <Header v-if="!isHeaderHidden" />
            <Nav :scrolled="isHeaderHidden" />
        </div>
        <NuxtPage/>
    </div>
</template>

<script setup>

const nuxtApp = useNuxtApp();
console.log(nuxtApp);
// const show = ref(false);

// addRouteMiddleware('global-loader', () => {
//   show.value = true;
// }, {
//   global: true
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
    }
});
nuxtApp.hook('app:mounted', () => {
    //   show.value = false;
    console.log("hook started");
    setTimeout(() => {

        isLoaded.value = true
    }, 2000)
});

onBeforeUnmount(() => {
    if (process.client) {
        window.removeEventListener("scroll", handleScroll);
    }
});
</script>