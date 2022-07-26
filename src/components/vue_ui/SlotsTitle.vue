<script>
export default {}
</script>

<template>
  <h1>
    <img src="../../assets/logo.png" alt="">
    <slot></slot>
  </h1>
</template>

<style lang="scss" scoped>
  h1{
    // color: #fff;
    font-size: 30px;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  img{
    width: 25px;
    display: block;
    margin-right: 10px;
  }
</style>