<template>
    <div>
        <ToursMain :title="compOptions.title" :text="compOptions.text" :src="compOptions.src" />
        <HotelsSelect />
    </div>
</template>

<script setup>
useHead({
    title: "Hotels"
})
const compOptions = {
    title: "Hotels",
    text: "At [Travel Company Name], we understand that where you stay plays a vital role in creating a memorable travel experience. That's why we handpick accommodations that combine comfort, convenience, and character. Whether you prefer luxury resorts, boutique hotels, charming bed and breakfasts, or budget-friendly options, we have a diverse range of accommodations to suit every preference and budget. Relax in well-appointed rooms, enjoy exceptional service, and revel in the unique ambiance of each carefully selected property.",
    src: "frame4.png"
}
</script>