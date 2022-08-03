<script>
import { ref, onMounted, onUnmounted } from 'vue';
export default {
  setup(){
    const x = ref(0),
          y = ref(0),
          update = (e) => {
            x.value = e.pageX;
            y.value = e.pageY;
          };
    onMounted(() => {
      window.addEventListener('mousemove',update)
    });
    onUnmounted(() => {
      window.removeEventListener('mousemove',update)
    });
    return { x, y, update };
  }
}
</script>

<template>
  <slot :x="x" :y="y"/>
</template>

<style lang="scss">

</style>