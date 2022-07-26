<script>
// import { ref } from 'vue';
// import SlotsTest from '@/components/vue_ui/SlotsTest.vue';
// import SlotsMain from '@/components/vue_ui/SlotsMain.vue';
// import SlotsMain from '@/components/vue_ui/SlotsMain.vue';
import SlotsTitle from '@/components/vue_ui/SlotsTitle.vue';

export default {
  components:{
    // SlotsTest, SlotsMain, SlotScoped
    SlotsTitle
  },
  // setup(){
  //   const T1 = ref('最新消息'),
  //         T2 = ref('關於我們'),
  //         T3 = ref('熱門商品'),
  //         T4 = ref('你也感興趣的') ;
  //   return { T1,T2,T3,T4 };
  // }
  data(){
    return {};
  },
}
</script>

<template>
  <!-- <SlotsTest :content='T1'/>
  <SlotsTest :content="T2"/>
  <SlotsTest :content="T3"/>
  <SlotsTest :content="T4"/> -->
  <!-- <SlotsTest>最新消息</SlotsTest>
  <SlotsTest>關於我們</SlotsTest>
  <SlotsTest>熱門商品</SlotsTest>
  <SlotsTest>你也感興趣的</SlotsTest>
  <SlotsTest></SlotsTest> -->
  <div class="slots-wrap">
    <slots-title>最新消息</slots-title>
    <slots-title>
      <div><a href="javascript:;">mike</a></div>
    </slots-title>
  </div>
  <!-- <slot-scoped :idx="1">
    <h1 slot-scope="props">
      {{props.data}}<br/>
      {{props.getUser}}
    </h1>
  </slot-scoped>
  <slots-main>
    <h1 v-for="idx in 5" :key="idx" slot="header">title2 header</h1>
    <h1 slot="main">title2 main</h1>
    <h1 slot="footer">title2 footer</h1>
    <h1 slot="HD">header text</h1>
    <h3 v-for="idx in 5" :key="idx" slot="MA">main text</h3>
    <p slot="FT">footer text</p>
  </slots-main>
  <slots-test>最新消息</slots-test>
  <slots-test>關於我們</slots-test>
  <slots-test>熱門商品</slots-test>
  <slots-test>你也感興趣的</slots-test>
  <slots-test></slots-test> -->
</template>
<style lang="scss">
  .slots-wrap{
    position:absolute;
    top:0;
    left:50%;
  }
</style>