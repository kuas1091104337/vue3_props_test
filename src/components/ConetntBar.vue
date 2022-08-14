<script>
import { ref, computed, watch, onMounted } from 'vue';
export default {
  props:{
    menuContent: {
      type: String,
      default:''
    }
  },
  setup(props){
    // 方法1
    // const text = ref(''),
    //       handleType = (menuContent) => {
    //         if(menuContent === 'home') text.value = '首頁';
    //         if(menuContent === 'about') text.value = '關於我們';
    //       };
    // watch(() => props.menuContent, newVal => handleType(newVal));
    // onMounted(() => handleType(props.menuContent));
    // 方法2
    const text = computed(()=> {
      if(props.menuContent === 'home') return "首頁"
      if(props.menuContent === 'about') return "關於我們"
    });
    console.log(toRefs(props));
    return {props,text}
  },
}
</script>

<template>
  <h1>{{text}} : {{props.menuContent}}</h1> 
</template>

<style lang="scss">
h1 {color: #0cc;}
</style>