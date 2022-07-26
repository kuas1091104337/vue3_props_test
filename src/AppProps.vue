<script>
import { ref } from 'vue';
import TitleBar from '@/components/TitleBar.vue';
import ListItem from '@/components/ListItem.vue';
import TimerBox from '@/components/TimerBox.vue';
import EmitTest from '@/components/EmitTest.vue';
import EventBack from '@/components/EventBack.vue';
// 第4章 - 27、28、29單元
import TemplateRefs from '@/components/TemplateRefs.vue';
import SlotsTitle from '@/components/vue_ui/SlotsTitle.vue';
export default {
  components:{
    TitleBar, ListItem, TimerBox, EmitTest, EventBack, TemplateRefs, SlotsTitle,
  },
  setup(){
    const isOpen = ref(true),
          showHandlerFn = () => isOpen.value = !isOpen.value,
          callBackFn = (number) => console.log('app=>',number),
          timeOutFn = (num) => console.log('time is over', num.value);
    return { isOpen, showHandlerFn, timeOutFn, callBackFn };
  },
};
</script>

<template>
  <TitleBar :showHandler='showHandlerFn' />
  <ListItem :open='isOpen' />
  <TimerBox @TimeOut='timeOutFn'/>
  <EmitTest @CallBack='callBackFn' />
  <EventBack />
  <!-- 第4章 - 27、28、29單元 -->
  <TemplateRefs />
  <SlotsTitle />
  <!-- <SlotsTitle>mike<SlotsTitle/>
  <slots-title>mike<slots-title/>
  <slots-title>
    <div><a href="">mike</a></div>
  <slots-title/> -->
</template>

<style lang="scss">
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  img { transition: opacity 0.3s; }
  html, body {
    width: 100%;
    height: 100%;
    background-color: slategray;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #app {
    width: 400px;
    overflow: hidden;
    border: 1px solid #42b983;
    border-radius: 10px;
  }
</style>