<script>
import { onMounted, ref } from 'vue';
export default {
  props:{},
  // 說明有那些 emit 要傳上去，可以透過arry的方式放進來說明
  // emits:['CallBack'],
  // 用物件{}可以做驗證，把要傳上去的事件變成驗證的函式
  emits:{
    CallBack: number => (number.value === 0)
    // CallBack: (number) => {
    //   return number.value === 0;
    //   // if(number.value === 0){
    //   //   return true;
    //   // }else{
    //   //   return false;
    //   // }
    // },
  },
  // setup(props, context){
  setup(props, { emit }){
    const number = ref(1);
    // onMounted 向上傳
    onMounted(() => {
      // context.emit('CallBack',number);
      // emit('要接收這個物件的名稱',要回傳的內容);
      // emit 會上傳1個 CallBack 事件
      emit('CallBack',number);
    });
    return { number };
  },
};
</script>

<template>
  <h2>{{number}}</h2>
</template>

<style lang="scss">
  h2{
    color:#f0f;
    font-size: 80px;
    position: fixed;
    top: 80px;
    right: 80px;
  }
</style>