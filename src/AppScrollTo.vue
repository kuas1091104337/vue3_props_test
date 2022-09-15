<script setup>
import { computed, ref } from 'vue';
import InputBar from '@/components/InputBar.vue';
import style_1 from '@/components/style-1.vue';
import style_2 from '@/components/style-2.vue';
import style_3 from '@/components/style-3.vue';
const num = ref(0),
      styleTpe = ref(1),
      inputHandle = (val) => num.value = val,
      changeComponent = (idx) => styleTpe.value = idx,
      displayComponent = computed(() => {
        switch(styleTpe.value) {
          case 1 :
            return style_1
            break;
          case 2 :
            return style_2
            break;
          case 3 :
            return style_3
            break;
          default :
            return style_3
        }
      });
</script>
<template>
  <!-- <li v-scroll-to-smooth="{
    target:'.target', //目標容器
    head:'.header', //當前點擊目標的外容器有fix的header之類
    time:1000, //要花多久時間
    callBack: () => console.log('async'), //滑動到目標才觸發
  }"> 
  v-cell-scroll="{
    target:'.list_item-1',
    head:'.menu',
    className:'active'
  }"
  v-scroll-to="{
    target:'.list_item-1', // 目標容器
    head:'.menu' // 當前點擊目標的外容器有fixed的header之類
  }"
  -->
  <ul class="menu">
    <li class="menu_item"
      v-scroll-active="{
        fixHeadName:'.menu',
        addClass:'active',// 要加上的 class
        targetName:'.list_item-1'// 目標容器
      }"
    >01</li>
    <li class="menu_item"
      v-scroll-active="{
        fixHeadName:'.menu',
        addClass:'active',
        targetName:'.list_item-2'
      }"
    >02</li>
    <li class="menu_item"
      v-scroll-active="{
        fixHeadName:'.menu',
        addClass:'active',
        targetName:'.list_item-3'
      }"
    >03</li>
    <li class="menu_item"
      v-scroll-active="{
        fixHeadName:'.menu',
        addClass:'active',
        targetName:'.list_item-4'
      }"
    >04</li>
    <li class="menu_item"
      v-scroll-active="{
        fixHeadName:'.menu',
        addClass:'active',
        targetName:'.list_item-5'
      }"
    >05</li>
  </ul>
  <ul class="list">
    <li class="list_item list_item-1">
      <div class="testBox">
        <p>{{num}}</p>
        <InputBar v-model="num" @inputData="inputHandle"/>
      </div>
      <span>list - 01</span>
    </li>
    <li class="list_item list_item-2">
      <div class="boxTest">
        <button @click="changeComponent(1)">component - 01</button>
        <button @click="changeComponent(2)">component - 02</button>
        <button @click="changeComponent(3)">component - 03</button>
        <component :is="displayComponent"/>
      </div>
      <span>list - 02</span>
    </li>
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
  ul{ list-style: none; }
  #app {
    height: 100%;
    padding-top: 44px;
    // margin-top: 44px;
  }
  .testBox{
    position:absolute;
    top:100px;
    left:100px;
    input{ display: block; }
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
    z-index:1;
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
      &.active > span{
        color: #fff;
        text-shadow: 0 0 5px rgba(#000,.2),
                     0 0 10px rgba(#000,.3),
                     0 0 15px rgba(#000,.4),
                     0 0 20px rgba(#000,.5);
        transform:scale3d(1.35,1.35,1);
        transition: color .4s, transform .4s;
      }
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
        font-size: 60px;
        font-weight: bold;
        margin:auto;
      }
    }
  }
</style>