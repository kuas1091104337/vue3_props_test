<script>
// 第4章 - 27、28、29單元
import { onMounted, ref } from 'vue';
export default {
  setup(){
    const num = ref(123456789),
          newNum = ref(null),
          txtInput =ref(null),
          newPrice = () => {};
    onMounted(() => {
      console.log(txtInput.value.offsetHeight);
    //   // document.getElementById('txtBar').focus();
    //   // console.log(txtInput.value);
    //   txtInput.value.focus();
    })
    return { num, newNum, newPrice, txtInput };
  },
}
</script>

<template>
  <div class="refsTest">
    <!-- ref="txtInput" -->
    <input
      v-focus 
      ref="txtInput"
      v-model="num"
      class="txtBar" 
      type="text" 
      placeholder="input text"
    />
    <h3 v-price="num"></h3>
    <h3 v-price="987654321"></h3>
    <input
      v-model="newNum"
      class="txtBar" 
      type="text"
      placeholder="input text2"
    />
    <h3>{{newNum}}</h3>
  </div>
</template>

<style lang="scss">
  .txtBar{
    width: 350px;
    height: 30px;
    background-color:#fff;
    border: 2px solid blue;
    border-radius:5px;
    padding:0 8px;
    &:focus{outline: none;}
  }
  .refsTest{
    position: absolute;
    bottom: 80px;
    left: 50%;
  }
</style>