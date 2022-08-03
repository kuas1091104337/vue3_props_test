<script>
export default {
  props:{
    content:{
      type:String,
      default:''
    },
  },
  setup(props){
    return { props };
  }
}
</script>

<template>
  <h1 class="slotsTitle">
    <img class="icon" src="../../assets/logo.png" alt="">
    {{props.content}}
  </h1>
</template>

<style lang="scss" scoped>
  .slotsTitle{
    color: red;
    font-weight: normal;
    font-style: italic;
    display: flex;
    align-items:center;
    > .icon{
      width: 50px;
      margin-right: 12px;
    }
  }
</style>