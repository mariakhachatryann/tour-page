<template>
    <div>
        <ToursMain :title="compOptions.title" :text="compOptions.text" :src="compOptions.src" />
    </div>
</template>

<script setup>
const compOptions = {
    title: "Transfer",
    text: "Experience seamless and comfortable transfers with our premier tour agency's dedicated transfer service. Whether you're arriving at the airport, train station, or any other location, our professional drivers and modern fleet ensure a safe and luxurious journey to your destination. Sit back and relax as we handle all the logistics, making your travel between places a stress-free and enjoyable part of your overall adventure.",
    src: "frame5.png"
}
</script>