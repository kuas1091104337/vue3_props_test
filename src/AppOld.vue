<script>
import { reactive, ref } from 'vue';
import PropsTest from "@/components/PropsTest.vue";

export default {
  components:{
    PropsTest
  },
  setup(){
    // 當成props傳遞到子組件
    // 傳資料 (父組件) 向下傳遞
    const str = ref('Hello Mike!'),
          bool = ref(true),
          num = ref(123),
          arr = reactive([]),
          obj = reactive({}),
          func = () => {};
    return {str,bool,num,arr,obj,func};
  }
}
</script>

<template>
<!-- :msg可以放資料、txt只能放字串 -->
  <PropsTest
    :str="str"
    :bool="bool"
    :num="num"
    :arr="arr"
    :obj="obj"
    :func="handClickFn"
    txt="abcd1234"
  />
  <PropsTest txt="ggyy"/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
