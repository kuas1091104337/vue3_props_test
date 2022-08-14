<script>
import { ref, watch } from 'vue';
export default {
  setup(){
    // const imgIdx = ref(0);
    const imgIdx = ref(0), // 紀錄上一個點擊的按鈕索引
          transType = ref('right'), // 當前的 transition-group 的 name
          slidList = ref([
            { id: '1', src: "https://source.unsplash.com/600x400?1" },
            { id: '2', src: "https://source.unsplash.com/600x400?2" },
            { id: '3', src: "https://source.unsplash.com/600x400?3" },
            { id: '4', src: "https://source.unsplash.com/600x400?4" },
            { id: '5', src: "https://source.unsplash.com/600x400?5" },
            { id: '6', src: "https://source.unsplash.com/600x400?6" },
            { id: '7', src: "https://source.unsplash.com/600x400?7" },
            { id: '8', src: "https://source.unsplash.com/600x400?8" },
          ]),
          bannerGo = idx => { // idx 紀錄現在按鈕索引
            transType.value = idx > imgIdx.value ? "right" : "left";
            imgIdx.value = idx;
          },
          // transition、transition-group 有 Lifecycle Hooks，after-leave 是當你動畫執行結束之後會觸發
          afterLeave = () => console.log(imgIdx.value, transType.value);
          // banerGo = idx => imgIdx.value = idx;
    watch(imgIdx,(newIdx,oldIdx) => console.log(`new : ${newIdx+1}, old : ${oldIdx+1}`));
    return { imgIdx, transType, slidList, bannerGo, afterLeave };
  },
}
</script>

<template>
  <div class="content">
    <div class="content_mid">
      <a class="content_prev"></a>
      <transition-group 
        :name="transType"
        @after-leave="afterLeave"
      >
        <img
          v-for="(item, idx) in slidList" 
          v-show="imgIdx === idx" 
          :key="item.id" 
          :src="item.src"
        />
      </transition-group>
      <a class="content_next"></a>
    </div>
    <nav class="content_menu">
      <a
        v-for="(item, idx) in slidList"
        :key="item.id"
        :class="['content_menu_item',{active: imgIdx === idx}]"
        @click="bannerGo(idx)"
      >
        {{idx + 1}}
      </a>
    </nav>
  </div>
</template>

<style lang="scss">
  html, body, #app{
    width: 100%;
    height: 100%;
  }
  body{margin: 0;}
  #app{
    background-color: #233245;
    display: flex;
  }
  .content {
    width: 600px;
    height: 400px;
    margin: auto;
    &_mid{
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden; 
      margin-bottom: 20px;
      > img{
        position: absolute;
        top: 0;
        right: 0;
      }
    }
    &_menu{
      display: flex;
      justify-content:center;
      &_item{
        text-align: center;
        line-height: 20px;
        width: 20px;
        height: 20px;
        background-color: white;
        border-radius: 50%;
        cursor: pointer;
        margin: 5px;
        transition: color .4s, background-color .4s;
        &.active{
          color: #fff;
          background-color: #40c297;
        }
      }
    }
  }
  .left, .right{
    &-enter, &-leave{
      &-active{transition: transform .4s}
    }
  }
  .left-enter-from, .right-leave-to{transform: translate(-100%)}
  .left-leave-to, .right-enter-from{transform: translate(100%)}
  .left-enter-to, .left-leave-from, .right-enter-to, .right-leave-from {transform: translate(0)}
  // .slids{
  //   &-enter, &-leave{
  //     &-active{transition: transform .4s ease;}
  //   }
  //   &-enter-from{transform: translate(-100%);}
  //   &-leave-to{transform: translate(100%)}
  //   &-enter-to, &-leave-from {transform: translate(0)}
  // }
  // .left-enter, .left-leave, .right-enter, .right-leave{
  // .fade{
  //   &-enter, &-leave {
  //     &-active{transition: opacity .4s;}
  //   }
  //   &-enter-from, &-leave-to {opacity: 0;}
  //   &-enter-to, &-leave-from {opacity: 1;}
  // }
</style>