<script setup>
const emit = defineEmits(['inputData']),
      dataChange = (e) => {
        console.log(e.srcElement.value);
        emit('inputData',e.srcElement.value)
      }
</script>

<template>
  <input type="number" @change="dataChange">
</template>

<style lang="scss">

</style>