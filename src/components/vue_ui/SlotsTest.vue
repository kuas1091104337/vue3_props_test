<script>
export default {
  // props:{
  //   content:{
  //     type:String,
  //     default:''
  //   },
  // },
  // setup(props){
  //   return { props };
  // },
}
</script>

<template>
  <h1>
    <img class="icon" src="../../assets/logo.png" alt="">
    <slot>這是預設的內容喔</slot>
    <!-- {{props.content}} -->
  </h1>
</template>

<style lang="scss">

</style>