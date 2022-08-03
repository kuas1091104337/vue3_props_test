<template>
  <div class="container">
    <header class="head">
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer class="foot">
      <slot name="footer"></slot>
    </footer>
  </div>
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