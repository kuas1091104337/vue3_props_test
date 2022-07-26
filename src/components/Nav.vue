<script>
// import { emit } from 'vue';
// import { onMounted } from 'vue';
export default {
  props: {
    open: {
      type: Boolean,
      default: true,
    },
    menuHandle: {
      type: Function,
      default: () => {},
    },
  },
  // setup(props, { emit }) {
  setup(props){
    return { props };
  },
};
</script>

<template>
  <div :class="['nav', { open: props.open }]">
    <a @click="props.menuHandle">close</a>
  </div>
</template>

<style lang="scss">
  .nav{
    width: 350px;
    height: 100%;
    background-color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    transform:translate3d(100%,0,0);
    transition:transform .3s;
    &.open{transform:translate3d(0,0,0);}
    > a{
      text-indent:100%;
      white-space:nowrap;
      width: 44px;
      height: 44px;
      background-color:#666;
      border-radius: 50%;
      overflow:hidden;
      position:absolute;
      top:15px;
      right:15px;
      &:before, &:after{
        content: "";
        width: 32px;
        height: 4px;
        background-color:#fff;
        border-radius: 2px;
        margin: auto;
        position:absolute;
        top:0;
        left:0;
        right: 0;
        bottom: 0;
      }
      &:before{transform:rotate(45deg);}
      &:after{transform:rotate(-45deg);}
    }
  }
</style>