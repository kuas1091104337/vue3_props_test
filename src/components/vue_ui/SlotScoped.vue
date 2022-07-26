<script>
export default {
  props:['idx'],
  data(){
    return {
      user:['mike','andy','scars','jacky']
    };
  },
  computed:{
    getUser(){
      return this.user[this.idx];
    }
  }
}
</script>

<template>
  <h1>
    <slot :data="user" :getUser="getUser"></slot>
  </h1>
</template>

<style lang="scss">

</style>