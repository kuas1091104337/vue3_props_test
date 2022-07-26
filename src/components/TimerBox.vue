<script>
import { onMounted, ref } from 'vue';
export default {
  emits:{
    TimeOut:num => (num.value === 0 ? true : false)
    // TimeOut:(num) => {
    //   return num.value === 0 ? true : false;
    //   // if(num.value === 0){
    //   //   return true;
    //   // }else{
    //   //   return false;
    //   // }
    // }
  },
  setup(props, { emit }){
    let timer = null;
    const num = ref(5);
    onMounted(() => {
      timer = setInterval(() => {
        num.value--;
        if(num.value === 0){
          clearInterval(timer);
          emit('TimeOut',num);
        }
      },1000)
    })
    return {num};
  },
}
</script>

<template>
  <h1>{{num}}</h1>
</template>

<style lang="scss">
  h1{
    color: red;
    font-size: 50px;
    position: fixed;
    top: 50px;
    left: 50px;
  }
</style>