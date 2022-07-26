
<script>
import { reactive } from 'vue';
export default {
  // 透過 props 方法，來說明要傳進來的 props
  props:{
    open:{
      type:Boolean,
      default:true
    },
  },
  setup(props){
    const listArr = reactive([
            { name: "2020 Vue3 專業職人 | 入門篇" },
            { name: "2020 Vue3 專業職人 | 加值篇" },
            { name: "2020 Vue3 專業職人 | 進階篇" },
            { name: "現代 JavaScript 職人之路｜入門篇" },
            { name: "現代 JavaScript 職人之路｜中階實戰篇" },
          ]);
    return { listArr, props }
  }
}
</script>

<template>
  <Transition name="open">
    <!-- <ul :class="['box gogo',{open:props.open}]"> -->
    <ul v-show="props.open" class="box">
      <li v-for="(list, idx) in listArr" :key="list.name">
        {{idx + 1}}. {{list.name}}
      </li>
    </ul>
  </Transition>
</template>

<style lang="scss">
  .box {
    width: 100%;
    display: block;
    background-color: #fff;
    /* height: 0; */
    /* transition: height 0.4s; */
    /* max-height: 0; */
    transition: max-height 0.6s;
    &.open {
      /* height: 200px; */
      /* max-height: 400px;
      overflow: auto; */
    }
    > li {
      color: darkslategray;
      font-size: 12px;
      width: 100%;
      height: 40px;
      border-bottom: 1px solid #d2d2d2;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .open{
    &-enter, &-leave {
      &-active{transition: height .4s ease;}
    }
    &-enter-from, &-leave-to {height: 0;}
    &-enter-to, &-leave-from {height: 200px;}
  }
</style>