<script>
export default {
  setup(){
    return {};
  },
}
</script>

<template>
  <h1 class="slotsTitle">
    <img class="icon" src="../../assets/logo.png" alt="">
    <slot>這是預設的內容喔</slot>
  </h1>
</template>

<style lang="scss">
  .slotsTitle{
    color: blue;
    font-weight: normal;
    font-style: italic;
    display: flex;
    align-items:center;
    > .icon{
      width: 50px;
      margin-right: 12px;
    }
  }
  @layer two first;
  @layer first {
    .slotsTitle{
      color: red;
    }
  }
  @layer two {
    .slotsTitle{
      color: green !important;
    }
  }
</style>