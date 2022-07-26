<script>
export default {
  setup(){
    const handleClick = (num,e) => console.log(num,e.target);
    return { handleClick };
  },
}
</script>

<template>
  <a @click="handleClick(100,$event)" class="eventA" href="javascript:;">click event</a>
</template>

<style lang="scss">
  .eventA{
    color: orange;
    font-size: 50px;
    position: fixed;
    left: 50px;
    bottom: 50px;
  }
</style>