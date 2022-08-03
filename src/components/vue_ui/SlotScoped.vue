<script>
import { computed, onMounted, reactive, ref } from 'vue';
export default {
  setup(){
    const done = ref(false);
    return { done };
  }
}
</script>

<template>
  <div class="boxWrap">
    <input type="checkbox" v-model="done">
    <span :class="{done}">
      <slot></slot>
    </span>
    <slot name="description"></slot>
    <button><slot name="btn-txt">Highlight</slot></button>
  </div>
</template>

<style lang="scss">
  .done{
    color: green;
    text-decoration: line-through;
  }
</style>