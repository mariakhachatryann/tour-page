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

<style scoped>

.script { 
    display: block; 
    position: relative; 
    padding-left: 35px; 
    margin-bottom: 15px; 
    cursor: pointer; 
    font-size: 20px; 
    margin-left: 12px;
} 
  
input[type=checkbox] { 
    visibility: hidden; 
} 
  
.geekmark { 
    position: absolute; 
    top: 0; 
    left: 0; 
    height: 25px; 
    width: 25px; 
    background-color: white; 
    border: 2px #99999F solid;
    border-radius: 3px;
}

.geekmark:hover {
    border: 2px #1467C2 solid;
}

.script:hover {
    color: #1467C2;
}

.script:hover input ~ .geekmark { 
    background-color: white; 
} 
  
.script input:checked ~ .geekmark { 
    background-color: white; 
    border: 2px #1467C2 solid;
}
  
.geekmark:after { 
    content: ""; 
    position: absolute; 
    display: none; 
} 
  
.script input:checked ~ .geekmark:after { 
    display: block; 
} 

.script .geekmark:after { 
    left: 6px; 
    bottom: 6px; 
    width: 10px; 
    height: 10px;
    border-radius: 3px;
    border: 0.5px solid white; 
    background-color: #1467C2;
} 
</style>