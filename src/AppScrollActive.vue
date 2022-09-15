<script>
import { ref, onMounted } from 'vue';
export default {
  setup(){
    const menuH = ref(0),
          menuEvent = ref(null),
          spyDomChange(node) {
            if (this.activeMenu != node.name) this.activeMenu = node.name
          },
          scrollTo(name){
              scrollWatch.scrollTo(name)
          };
    onMounted(() => {
      menuH.value = menuEvent.value.offsetHeight*-1;
    });
    return { menuEvent, menuH, spyDomChange, scrollTo };
  },
};
</script>
 
<template>
  <ul class="menu" ref="menuEvent">
      <li class="menu_item">01</li>
      <li class="menu_item">02</li>
      <li class="menu_item">03</li>
      <li class="menu_item">04</li>
      <li class="menu_item">05</li>
  </ul>
  <ul class="list">
    <li class="list_item list_item-1"><span>list - 01</span></li>
    <li class="list_item list_item-2"><span>list - 02</span></li>
    <li class="list_item list_item-3"><span>list - 03</span></li>
    <li class="list_item list_item-4"><span>list - 04</span></li>
    <li class="list_item list_item-5"><span>list - 05</span></li>
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