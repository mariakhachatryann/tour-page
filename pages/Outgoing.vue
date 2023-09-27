<template>
    <div>
        <ToursMain :title="compOptions.title" :text="compOptions.text" :src="compOptions.src" />
    </div>
</template>

<script setup>
const compOptions = {
    title: "Outgoing Tours",
    text: "Embark on an extraordinary adventure with our abroad destinations. We take you beyond borders to discover the world's most enchanting places. From the sun-kissed beaches of the Caribbean to the vibrant markets of Asia, the ancient ruins of Europe to the exotic landscapes of Africa, our abroad destinations offer a kaleidoscope of cultures, natural beauty, and awe-inspiring sights.",
    src: "frame6.png"
}
</script>