<script>
export default {
  // props:{},
  // setup(props){
  //   return { props };
  // },
}
</script>

<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
  <!-- <div class="wrap">
    <header class="head">
      <slot name="HD"></slot>
    </header>
    <main class="ma">
      <slot name="MA"></slot>
    </main>
    <footer class="foot">
      <slot name="FT"></slot>
    </footer>
  </div> -->
</template>

<style lang="scss">
  header,main,footer{color: #fff;}
  header{background-color: #0f0;}
  main{background-color: #f00;}
  footer{background-color: #00f;}
  // .head,.ma,.foot{color: #fff;}
  // .head{background-color: #0f0;}
  // .ma{background-color: #f00;}
  // .foot{background-color: #00f;}
</style>