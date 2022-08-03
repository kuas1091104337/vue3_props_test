<script>
import { onMounted, ref } from 'vue';
export default {
  props: ['api-url', 'per-page'],
  setup() {
    const items = ref([]);
    onMounted(() => {
      // mock remote data fetching
      setTimeout(() => {
        items.value = [
          {
            body: 'Scoped Slots Guide',
            username: 'Evan You',
            likes: 20
          },
          { body: 'Vue Tutorial', username: 'Natalia Tepluhina', likes: 10 }
        ]
      }, 1000)
    });
    return { items }
  },
}
</script>

<template>
  <ul class="colorWrap">
    <li class="colorWrap_item" v-if="!items.length">
      Loading...
    </li>
    <li class="colorWrap_item" v-for="item in items">
      <slot name="item" v-bind="item"/>
    </li>
  </ul>
</template>

<style lang="scss">
  .colorWrap{
    background: linear-gradient(315deg, #42d392 25%, #647eff);
    list-style-type: none;
    padding: 5px;
    &_item{
      background-color: #fff;
      padding: 5px 20px;
      margin: 10px;
    }
  }
</style>