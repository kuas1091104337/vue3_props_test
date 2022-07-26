<script>
import { ref, computed, watch, onMounted } from 'vue';
export default {
  props:{
    styletype: {
      type: String,
      default:''
    }
  },
  setup(props){
    // 方法1
    // const text = ref(''),
    //       handleType = (styletype) => {
    //         if(styletype === 'home') text.value = '首頁';
    //         if(styletype === 'about') text.value = '關於我們';
    //       };
    // watch(() => props.styletype, newVal => handleType(newVal));
    // onMounted(() => handleType(props.styletype));
    // 方法2
    const text = computed(()=> {
      if(props.styletype === 'home') return "首頁"
      if(props.styletype === 'about') return "關於我們"
    });
    return {props,text}
  },
}
</script>

<template>
  <h1>{{text}} : {{props.styletype}}</h1> 
</template>

<style lang="scss">
h1 {color: #0cc;}
</style>