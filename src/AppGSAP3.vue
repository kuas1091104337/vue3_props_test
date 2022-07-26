<script>
const { onMounted, onUnmounted } = Vue;
import gsap from "gsap";
export default {
  setup(){
      let tl = null;
      // 抓 document 的 高
      const getDocumentHeight = () => {
        const body = document.body;
        const html = document.documentElement;
        return Math.max(
          body.offsetHeight,
          body.scrollHeight,
          html.clientHeight,
          html.offsetHeight,
          html.scrollHeight
        )
      }
    
      // 抓卷軸的位置
      const documentTop = () => (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      
      const gsapInit = () => {
        tl = gsap.timeline({defaults: { duration: 1 }});
        tl.to(".pic1", {"margin-left": 0, "opacity":1});
        tl.to(".pic2", {"margin-left": 0, "opacity":1});
        tl.to(".pic3", {"margin-top": 0, "opacity":1});
        tl.to(".pic4", {"transform": "scale(1)", "opacity":1, ease: Bounce.easeOut});
        tl.to(".pic5", {"width": "240px", "opacity":1});
        tl.to(".pic6", {"transform":"scaleX(1)", "opacity":1});
        tl.to(".pic7", {"margin-left": 0, "opacity":1});
        tl.to(".pic8", {"margin-left": 0, "opacity":1});
        tl.to(".pic9", {"transform":"scaleY(1)","opacity":1});
        tl.to(".pic10", {"margin-top": 0, "opacity":1});
        tl.to(".pic11", {"width": "240px", "opacity":1});
        tl.pause();
      }
    
      const handleWinScroll = () =>{
          const scrollTop = documentTop();
          const docHeight = getDocumentHeight();
          const winHeight = window.innerHeight;
          const scrollPercent = (scrollTop) / (docHeight - winHeight);
          tl.progress(scrollPercent);
      }
    
      onMounted(()=> {
          gsapInit();
          window.addEventListener("scroll", handleWinScroll);
      })
      // 等同於 Vue2 的 destroyed
      onUnmounted(()=> {
          window.removeEventListener("scroll" ,handleWinScroll);
      })
      return {}
  }
};
</script>

<template>
  <div id="box">
      <div class="pic pic1"><img src="https://source.unsplash.com/user/erondu/240x240" alt=""></div>
      <div class="pic pic2"><img src="https://source.unsplash.com/user/erondu/240x240" alt=""></div>
      <div class="pic pic3"><img src="https://source.unsplash.com/user/erondu/240x240" alt=""></div>
      <div class="pic pic4"><img src="https://source.unsplash.com/user/erondu/240x240" alt=""></div>
      <div class="pic pic5"><img src="https://source.unsplash.com/user/erondu/240x240" alt=""></div>
      <div class="pic pic6"><img src="https://source.unsplash.com/user/erondu/240x240" alt=""></div>
      <div class="pic pic7"><img src="https://source.unsplash.com/user/erondu/240x240" alt=""></div>
      <div class="pic pic8"><img src="https://source.unsplash.com/user/erondu/240x240" alt=""></div>
      <div class="pic pic9"><img src="https://source.unsplash.com/user/erondu/240x240" alt=""></div>
      <div class="pic pic10"><img src="https://source.unsplash.com/user/erondu/240x240" alt=""></div>
      <div class="pic pic11"><img src="https://source.unsplash.com/user/erondu/240x240" alt=""></div>
  </div>
</template>

<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html,body{
    width: 100%;
    height: 100%;
    background-color: cadetblue;
}
#box{
    width: 240px;
    height: auto;
    margin: 0 auto;
    padding-top: 250px;
}
.pic{
    width: 240px;
    height: auto;
    overflow: hidden;
    background-color: #fff;
    margin-bottom: 20px;
    opacity: 0;
}
.pic > img{
    display: block;
    width: 240px;
    height: auto;
}
.pic1{
    margin-left: -100px;
}
.pic2{
    margin-left: 100px;
}
.pic3{
    margin-top: 100px;
}
.pic4{
    transform: scale(0);
}
.pic5{
    width: 0;
}
.pic6{
    transform:scaleX(-1.4);
}
.pic7{
    margin-left: -100px;
}
.pic8{
    margin-left: 100px;
}
.pic9{
    transform:scaleY(-1.4);
}
.pic10{
    margin-top: 100px;
}
.pic11{
    width: 0;
}
</style>