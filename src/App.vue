<script>
import { ref } from 'vue';
import Header from '@/components/Header.vue';
import Nav from '@/components/Nav.vue';
export default {
  components:{ Header, Nav },
  setup(){
    const open = ref(true),
          anim = ref(false),
          animClick = () => anim.value = !anim.value,
          menuHandle = () => open.value = !open.value;
    return { open, menuHandle, anim, animClick };
  },
};
</script>
 
<template>
  <Header :menuHandle="menuHandle" />
  <Nav :open="open" :menuHandle="menuHandle" />
  <button @click="animClick">click</button>
  <Transition name="fade">
    <div v-if="anim" class="box"></div>
  </Transition>
  <Transition name="scale">
    <div v-if="anim" class="box"></div>
  </Transition>
</template>

<style lang="scss">
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html, body {
    width: 100%;
    height: 100%;
    background-color: slategray;
  }
  #app {height: 100%;}
  .box{
    width: 100px;
    height: 100px;
    background-color:blue;
  }
  .fade{
    &-enter, &-leave {
      &-active{transition: opacity 5s ease;}
    }
    &-enter-from, &-leave-to {opacity: 0;}
    &-enter-to, &-leave-from {opacity: 1;}
  }
  .scale{
    &-enter, &-leave{
      &-active{animation: scale-in 5s;}
    }
    &-leave-active {animation-direction: reverse;}
  }
  @keyframes scale-in {
    0% { transform: scale(0); }
    50% {transform: scale(1.25); }
    100% { transform: scale(1); }
  }
</style>