<script>
export default {
  setup(){
    return {};
  },
}
</script>

<template>
  <button class="fancy-btn">
    <slot></slot>
  </button>
</template>

<style lang="scss">
  @keyframes animt_btn{
    0%{background-position: 0 0;}
    100%{background-position: 400% 0;}
  }
  .fancy-btn {
    color: #fff;
    // background-image: linear-gradient(135deg, #42d392 12.5%, #647eff 50%, #42d392 87.5%);
    background-image: linear-gradient(135deg, #42d392 6.25%, #647eff 25%, #42d392 43.75%, #42d392 56.25%, #647eff 75%, #42d392 93.75%);
    background-size: 400% 100%;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    padding: 5px 10px;
    margin: 5px;
    animation:animt_btn 12s linear infinite;
  }
</style>