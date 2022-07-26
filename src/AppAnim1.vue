<script>
import { ref } from 'vue';
export default {
  setup(){
    const isOpen = ref(false),
          menuOpen = () => isOpen.value = !isOpen.value,
          isError = ref(false),
          alertHandle = (bool) => isError.value = bool;
    return { isOpen, menuOpen, isError, alertHandle };
  },
}
</script>

<template>
  <a href="javascript:;" :class="['menuBtn', {open:isOpen}]" @click="menuOpen"></a>
  <div class="content">
    <button class="content_button" @click="alertHandle(true)">開啟Alert</button>
  </div>
  <div :class="['menu', {open:isOpen}]">
    <ul class="menu_nav">
      <li><a href="javascript:;">abous</a></li>
      <li><a href="javascript:;">content</a></li>
      <li><a href="javascript:;">user</a></li>
      <li><a href="javascript:;">address</a></li>
    </ul>
  </div>
  <div :class="['alert', {open: isError}]">
    <i class="alert_icon" @click="alertHandle(false)"></i>
    <h1>發生未知的錯誤</h1>
  </div>
</template>

<style lang="scss">
  @keyframes showAnim {
    0% {bottom: -90%;}
    70% {bottom: 70%;}
    100% {bottom: 50%;}
  }
  *{ box-sizing: border-box; }
  html, body, #app{
    width: 100%;
    height: 100%;
  }
  body{margin: 0;}
  #app{position: relative;}
  .menuBtn{
    color: #fff;
    width: 44px;
    height: 44px;
    position: absolute;
    top: 50px;
    right: 50px;
    z-index: 1;
    &.open{
      &:before, &:after{background-color: #000;}
      &:before{
        top:18px;
        box-shadow: 0 0 0 #fff;
        transform: rotate(45deg);
      }
      &:after{
        bottom:18px;
        transform: rotate(-45deg);
      }
    }
    &:before, &:after{
      content:"";
      width: 42px;
      height: 8px;
      background-color: #fff;
      border-radius: 5px;
      position:absolute;
      left:1px;
      transition: .4s;
    }
    &:before{
      top:2px;
      box-shadow: 0 16px 0 #fff;
    }
    &:after{bottom:2px;}
  }
  .content{
    width: 100%;
    height: 100%;
    display: flex;
    background:url("https://source.unsplash.com/collection/190727/1600x900") no-repeat center/cover;
    &_button{
      font-size: 30px;
      width: 200px;
      height: 50px;
      border-radius: 50px;
      margin: auto;
    }
  }
  .menu{
    width: 350px;
    height: 100%;
    display: flex;
    background-color: #fff;
    position: fixed;
    right:0;
    top: 0;
    transition: transform .4s;
    transform: translate(100%);
    &.open{transform: translate(0);}
    &_nav{
      width: 100%;
      height: 300px;
      margin: auto;
      padding: 0;
      > li{
          display: block;
          width: 100%;
          height: 25%;
      }
      a{
        color: #000;
        font-size: 22px;
        line-height: 3;
        text-decoration: none;
        width: 100%;
        height: 100%;
        display: block;
        padding-left: 50px;
      }
    }
  }
  .alert{
    color: red;
    width: 500px;
    height: 400px;
    background-color: #fff;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 0 30px rgba(#000, 0.5);
    position: absolute;
    bottom: -100%;
    left: 50%;
    transform: translate(-50%, 50%);
    &_icon{
      width: 44px;
      height: 44px;
      position: relative;
      &:before, &:after{
        content:"";
        width: 42px;
        height: 8px;
        background-color: red;
        border-radius: 5px;
        margin: auto;
        position:absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      &:before{transform: rotate(45deg);}
      &:after{transform: rotate(-45deg);}
    }
    &.open {animation: showAnim .45s ease-in-out 1 forwards;}
  }
</style>