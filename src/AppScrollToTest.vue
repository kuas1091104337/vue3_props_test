<script>
import { ref, onMounted } from 'vue';
export default {
  setup(){
    const menuH = ref(0),
          menuEvent = ref(null),
          onDone = () => alert('done'),
          onCancel = () => {
            alert('canceled')
            console.log(e)
          };
    onMounted(() => {
      menuH.value = menuEvent.value.offsetHeight*-1;
    });
    return { menuEvent, menuH, onDone, onCancel };
  },
};
</script>
 
<template>
<!-- <a href="#" v-scroll-to="{
  el: '#element', 要滾動到的元素
  container: '#container', 需要滾動的容器
  duration: 500, 滾動動畫的持續時間(以毫秒為單位)
  lazy: false, 默認情況下，targetX/targetY 在滾動開始時計算一次，但是如果目標可能在滾動期間移動 - 設置lazy為false將強制在每個滾動步驟中重新計算 targetX/targetY。
  easing: 'linear', 動畫時使用的曲線函數
  offset: -200, 滾動時應使用的偏移量
  force: true, 指示是否應執行滾動
  cancelable: true, 指示用戶是否可以取消滾動
  onStart: onStart, 滾動開始時,應調用的回調函數
  onDone: onDone, 滾動結束時,應調用的回調函數
  onCancel: onCancel, 滾動時已被用戶中止(用戶滾動,單擊等),應調用的回調函數
  x: false, 滾動x軸
  y: true 滾動y軸
}"> -->
  <ul class="menu" ref="menuEvent">
    <li class="menu_item"
        v-scroll-to="{
          el:'#item-1',
          offset:menuH
        }"
    >01</li>
    <li class="menu_item"
        v-scroll-to="{
          el:'#item-2',
          offset:menuH,
          onDone: onDone,
          onCancel: onCancel
        }"
    >02</li>
    <li class="menu_item"
        v-scroll-to="{el:'#item-3',offset:menuH}"
    >03</li>
    <li class="menu_item"
        v-scroll-to="{el:'#item-4',offset:menuH}"
    >04</li>
    <li class="menu_item"
        v-scroll-to="{el:'#item-5',offset:menuH}"
    >05</li>
  </ul>
  <ul class="list">
    <li class="list_item list_item-1" id="item-1"><span>list - 01</span></li>
    <li class="list_item list_item-2" id="item-2"><span>list - 02</span></li>
    <li class="list_item list_item-3" id="item-3"><span>list - 03</span></li>
    <li class="list_item list_item-4" id="item-4"><span>list - 04</span></li>
    <li class="list_item list_item-5" id="item-5"><span>list - 05</span></li>
  </ul>
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
  // body{padding-top:44px;}
  ul{
    list-style: none;
  }
  #app {
    height: 100%;
    padding-top: 44px;
    // margin-top: 44px;
  }
  .menu{
    line-height: 44px;
    width: 100%;
    height: 44px;
    display: flex;
    justify-content:center;
    background-color: red;
    position: fixed;
    top: 0;
    left: 0;
    &_item{
      color: #fff;
      background-color: blue;
      padding:0 20px;
      &.active{background-color: red;}
    }
  }
  .list{
    height: 100%;
    &_item{
      display: flex;
      &-1{
        height: 100%;
        background-color:orange;
      }
      &-2{
        height: 110%;
        background-color:yellow;
      }
      &-3{
        height: 120%;
        background-color:greenyellow;
      }
      &-4{
        height: 130%;
        background-color:green;
      }
      &-5{
        height: 140%;
        background-color:blue;
      }
      &-6{
        height: 150%;
        background-color:purple;
      }
      > span{
        font-size: 80px;
        font-weight: bold;
        margin:auto;
      }
    }
  }
</style>