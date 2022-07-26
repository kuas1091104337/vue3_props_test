<script>
import { reactive, onMounted, onUnmounted } from 'vue';
import gsap from "gsap";
export default {
  setup(){
    // 給 gsap 的實體存放
    let $gsap = null;
    const picArr = reactive([
            {num:1,src:'https://source.unsplash.com/user/erondu/240x240'},
            {num:2,src:'https://source.unsplash.com/user/erondu/240x240'},
            {num:3,src:'https://source.unsplash.com/user/erondu/240x240'},
            {num:4,src:'https://source.unsplash.com/user/erondu/240x240'},
            {num:5,src:'https://source.unsplash.com/user/erondu/240x240'},
            {num:6,src:'https://source.unsplash.com/user/erondu/240x240'},
            {num:7,src:'https://source.unsplash.com/user/erondu/240x240'},
            {num:8,src:'https://source.unsplash.com/user/erondu/240x240'},
            {num:9,src:'https://source.unsplash.com/user/erondu/240x240'},
            {num:10,src:'https://source.unsplash.com/user/erondu/240x240'},
            {num:11,src:'https://source.unsplash.com/user/erondu/240x240'},
          ]),
          // getDocumentHeight = () => { // 抓 document 的高
          //   const $body = document.body,
          //         $html = document.documentElement;
          //   return Math.max($body.offsetHeight, $body.scrollHeight, $html.offsetHeight, $html.scrollHeight)
          // },
          // 抓卷軸的位置
          gsapInit = () => { // 動畫初始化
            // $gsap 給 gsap 的實體存放用
            // .timeline : 控制動畫執行的時間線，可以產生補間影格讓動畫依序執行。
            $gsap = gsap.timeline({defaults:{duration:1}});
            $gsap.to('.pic1',{'margin-left':0,'opacity':1});
            $gsap.to('.pic2',{'margin-left':0,'opacity':1});
            $gsap.to('.pic3',{'margin-top':0,'opacity':1});
            $gsap.to('.pic4',{'transform':'scale(1)','opacity':1});
            $gsap.to('.pic5',{'width':'240px','opacity':1});
            $gsap.to('.pic6',{'transform':'scaleX(1)','opacity':1});
            $gsap.to('.pic7',{'margin-left':0,'opacity':1});
            $gsap.to('.pic8',{'margin-left':0,'opacity':1});
            $gsap.to('.pic9',{'transform':'scaleY(1)','opacity':1});
            $gsap.to('.pic10',{'margin-top':0,'opacity':1});
            $gsap.to('.pic11',{'width':'240px','opacity':1});
            // 把動畫整個先暫停下來
            $gsap.pause();
          },
          gsapScrollHandle = () =>{ // 抓卷軸的位置
            // const docHeight = getDocumentHeight(); // const scrollPercent = document.scrollingElement.scrollTop / (docHeight - window.innerHeight);
            const scrollPercent = document.scrollingElement.scrollTop / (document.documentElement.scrollHeight - window.innerHeight);
            console.log(scrollPercent);
            // 然後把這個百分比塞入
            $gsap.progress(scrollPercent); // 是百分比是從0~1
          };
    onMounted(()=> {
      gsapInit();
      // scroll事件來跑我們動畫的補間進度
      window.addEventListener('scroll',gsapScrollHandle);
    })
    onUnmounted(()=> { // 等同於 Vue2 的 destroyed
      window.removeEventListener('scroll',gsapScrollHandle);
    })
    return { picArr };
  },
}
</script>

<template>
  <div id="box">
    <div v-for="item in picArr" :key="item.num" :class="['pic pic'+item.num]"><img :src="item.src"></div>
  </div>
</template>

<style lang="scss">
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html, body{
    width: 100%;
    height: 100%;
    background-color: cadetblue;
  }
  #box{
    width: 240px;
    margin: 0 auto;
    padding: 250px 0;
  }
  .pic{
    width: 240px;
    background-color: #fff;
    overflow: hidden;
    opacity: 0;
    margin-bottom: 20px;
    > img{
      width: 240px;
      display: block;
    }
    &1, &7{margin-left: -100px;}
    &2, &8{margin-left: 100px;}
    &3, &10{margin-top: 100px;}
    &4{transform: scale(0);}
    &5, &11{width: 0;}
    &6{transform:scaleX(-1.4);}
    &9{transform:scaleY(-1.4);}
  }
</style>