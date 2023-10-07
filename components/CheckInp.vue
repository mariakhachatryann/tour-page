<template>
    <label :for="props.forId" :class="checked ? 'text-primaryBlue' : 'text-[#4D545B]'" class="script cursor-pointer"> 
      <slot></slot>
      <input v-model="checked" type="checkbox" :id="props.forId"> 
      <span class="geekmark"></span> 
    </label> 
</template>
  
<script setup>
    const props = defineProps(["forId", "inpVal"]);
    const emit = defineEmits(["changeInp"]);
    const checked = ref(props.inpVal);

    watch(checked, () => {
        emit("changeInp");
    });
</script>