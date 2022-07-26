<script>
import { ref } from 'vue';
import gsap from "gsap";
// import 要載入的 from '@/components/要載入的.vue';
export default {
  // components:{ 要載入的 },
  setup(){
    const open = ref(true),
          boxGo = () => {
            gsap.timeline({defaults:{duration:1,ease:'elastic'}})
                .to('.box1',{x:100})
                .to('.box2',{y:100})
                .to('.box2',{x:100,duration:0.3});
          }
          // boxGo = () => gsap.to(".box", {duration: 1, x: 200, ease: "elastic"});
    return { open, boxGo };
  },
}
</script>

<template>
  <div class="box1"></div>
  <div class="box2"></div>
  <button id="btn" @click="boxGo">click</button>
</template>

<style lang="scss">
html{
  height: 100%;
}
body{
  height: 300%;
}
.box1, .box2{
  width: 100px;
  height: 100px;
}
.box1{background-color:red;}
.box2{background-color:blue;}
#btn{
}
</style>