
<script>
export default {
  props: {
    menuHandle: {
      type: Function,
      default: () => {},
    },
  },
  setup(props) {
    return { props };
  },
};
</script>

<template>
  <header>
    <nav>
      <button class="head_btn" @click="props.menuHandle">menu</button>
    </nav>
  </header>
</template>

<style lang="scss">
  header{
    width: 100%;
    height: 44px;
    background-color: #3aa;
    // position: fixed;
    // top: 0;
    // left: 0;
  }
  nav{
    height: 100%;
    padding:0 30px;
  }
  .head_btn{
    text-indent:100%;
    white-space:nowrap;
    width: 44px;
    height: 100%;
    background-color: transparent;
    overflow:hidden;
    border: none;
    position: relative;
    transition: background-color .3s;
    &:hover{background-color: #666;}
    &:after{
      content: "";
      width: 32px;
      height: 4px;
      background-color:#fff;
      border-radius: 2px;
      box-shadow: 0 10px 0 #fff,
                  0 20px 0 #fff;
      position:absolute;
      top:10px;
      left:6px;
    }
  }
</style>