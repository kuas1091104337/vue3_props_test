<script>
import { ref, onMounted } from 'vue';
import ConetntBar from '@/components/ConetntBar.vue';
export default {
  components:{ ConetntBar },
  setup(){
    const contentText = ref('home');
    onMounted(() => setTimeout(()=> contentText.value = 'about', 1000));
    return {contentText}
  },
}
</script>

<template>
  <ConetntBar :menuType="contentText" />
</template>

<style lang="scss">
  html, body{
    width: 100%;
    height: 100%;
    background-color: antiquewhite;
  }
  #app {
    color: #2c3e50;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>