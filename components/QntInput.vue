<template>
    <div>
        <div class="flex gap-2">
            <p class="text-[#19222C]">{{ props.label }}</p>
            <p class="text-[#666C73] font-medium">({{ props.age }})</p>
        </div>
        <div class="flex mt-1 bg-primaryBlue rounded-lg w-[160px]">
            <div @click="decr" class="flex justify-center items-center bg-primaryBlue rounded-lg py-3 w-14 text-white text-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewBox="0 0 16 4" fill="none">
                    <path d="M16 0.474786V3.52685C16 3.75661 15.8139 3.94304 15.5838 3.94304H9.94226C9.71251 3.94304 6.0578 3.94304 6.0578 3.94304H0.416194C0.186254 3.94304 0 3.75661 0 3.52685V0.474786C0 0.244984 0.186254 0.0585938 0.416194 0.0585938H6.0578H9.94226H15.5838C15.8139 0.0585938 16 0.244984 16 0.474786Z" fill="white"/>
                </svg>
            </div>
            <div class="py-3 w-16 bg-white text-center border-[1px] border-solid border-[#E6E6E7] rounded-lg">{{ props.qnt }}</div>
            <div @click="incr" class="flex justify-center items-center bg-primaryBlue rounded-lg  py-3 w-14 text-white text-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M16 6.47396V9.52602C16 9.75578 15.8138 9.94221 15.5838 9.94221H9.94224V15.5837C9.94224 15.8138 9.75581 15.9999 9.52605 15.9999H6.47398C6.24436 15.9999 6.05779 15.8138 6.05779 15.5837V9.94221H0.416193C0.186253 9.94221 0 9.75578 0 9.52602V6.47396C0 6.24416 0.186253 6.05777 0.416193 6.05777H6.05779V0.416192C6.05779 0.186161 6.24432 0 6.47398 0H9.52605C9.75581 0 9.94224 0.186161 9.94224 0.416192V6.05777H15.5838C15.8139 6.05777 16 6.24416 16 6.47396Z" fill="white"/>
                </svg>
            </div>
        </div>
        <div class="max-w-[320px] h-[1px] bg-[#D0E1F3] my-4"></div>
    </div>
</template>

<script setup>
const props = defineProps(["label", "age", "qnt"])
const emit = defineEmits(["add", "subtract"])

function incr() {
    emit("add")
}

function decr() {
    emit("subtract")
}
</script>