
<script>
export default {
  props:{
    showHandler:{
      type:Function,
      default:() => {}
    }
  },
  setup(props){
    return { props }
  }
};
</script>

<template>
  <a class="title" @click="props.showHandler">課程列表</a>
</template>

<style lang="scss">
.title {
  color: darkslategray;
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  height: 50px;
  background-color: #42b983;
  border-bottom: 1px solid #d2d2d2;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>