<script>
import { reactive, ref } from 'vue';
import SlotsTest from '@/components/vue_ui/SlotsTest.vue';
import PropsLikeSlots from '@/components/vue_ui/PropsLikeSlots.vue';
import NamedSlots from '@/components/vue_ui/NamedSlots.vue';
import SlotsTitle from '@/components/vue_ui/SlotsTitle.vue';
import FancyButton from '@/components/vue_ui/FancyButton.vue';
import MyComponent from '@/components/vue_ui/MyComponent.vue';
import FancyList from '@/components/vue_ui/FancyList.vue';
import MouseTracker from '@/components/vue_ui/MouseTracker.vue';
import SlotScoped from '@/components/vue_ui/SlotScoped.vue';

export default {
  components:{
    PropsLikeSlots, SlotsTest, SlotsTitle, NamedSlots, FancyButton, MyComponent, FancyList, MouseTracker, SlotScoped
  },
  setup(){
    const T1 = ref('最新消息'),
          T2 = ref('關於我們'),
          T3 = ref('熱門商品'),
          T4 = ref('你也感興趣的'),
          dataArr = reactive([
            '最新消息','關於我們','熱門商品','你也感興趣的'
          ]),
          slotData1 = ref('header'),
          slotData2 = ref('default'),
          slotData3 = ref('footer');
    return { T1,T2,T3,T4,dataArr,slotData1,slotData2,slotData3 };
  }
}
</script>

<template>
  <div class="wrap">
    <div class="wrap_item">
      <PropsLikeSlots :content='T1'/>
      <PropsLikeSlots :content="T2"/>
      <PropsLikeSlots :content="T3"/>
      <PropsLikeSlots :content="T4"/>
      <PropsLikeSlots v-for="item in dataArr" :key="item" :content="item"/>
      <slots-test>{{T1}}</slots-test>
      <slots-test>{{T2}}</slots-test>
      <slots-test>{{T3}}</slots-test>
      <slots-test>{{T4}}</slots-test>
      <slots-test v-for="(item, idx) in dataArr" :key="idx">{{item}}</slots-test>
      <slots-test></slots-test>
    </div>
    <div class="wrap_item">
      <slots-title>最新消息</slots-title>
      <slots-title>
        <span><a href="javascript:;">slots裡面可組資料</a></span>
      </slots-title>
      <named-slots>
        <template v-slot:header>
          header slot 的內容
        </template>
      </named-slots>
      <named-slots>
        <template #header>
          <h1>Here might be a page title</h1>
        </template>
        <template #default>
          <p>A paragraph for the main content.</p>
          <p>And another one.</p>
        </template>
        <template #footer>
          <p>Here's some contact info</p>
        </template>
      </named-slots>
      <named-slots>
        <template #header>
          <h1>Here might be a page title</h1>
        </template>
        <!-- 隱式默認槽 -->
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
        <template #footer>
          <p>Here's some contact info</p>
        </template>
      </named-slots>
      <named-slots>
        <template v-slot:[slotData1]>
          header slot 的內容
        </template>
      </named-slots>
      <named-slots>
        <template #[slotData1]>
          <h1>Here might be a page title</h1>
        </template>
        <template #[slotData2]>
          <p>A paragraph for the main content.</p>
          <p>And another one.</p>
        </template>
        <template #[slotData3]>
          <p>Here's some contact info</p>
        </template>
      </named-slots>
      <fancy-button>Click me!</fancy-button>
      <my-component v-slot="slotProps">
        {{slotProps.text}}{{ slotProps.count }}
      </my-component>
      <my-component v-slot="{text,count}">
        {{text}}{{count}}
      </my-component>
      <fancy-list api-url="url" :per-page="10">
        <template #item="{body,username,likes}">
          <div class="item">
            <p>{{body}}</p>
            <p class="meta">by {{username}} | {{likes}} likes</p>
          </div>
        </template>
      </fancy-list>
      <mouse-tracker v-slot="{ x, y }">
        Mouse is at: {{ x }}, {{ y }}
      </mouse-tracker>
      <slot-scoped>
        Buy bananas
        <template #description>
          <p>Here's some contact info</p>
        </template>
        <template #btn-txt>
          <span>Make it nice</span>
        </template>
      </slot-scoped>
      <slot-scoped>Eat bananas</slot-scoped>
      <slot-scoped>Celeberate!</slot-scoped>
      
    </div>
  </div>
  <!-- <h1 v-for="idx in 5" :key="idx" slot="header">title2 header</h1>
  <h1 slot="footer">title2 footer</h1>
  <h1 slot="HD">header text</h1>
  <h3 v-for="idx in 5" :key="idx" slot="MA">main text</h3>
  <p slot="FT">footer text</p> -->
  <!-- <slot-scoped :idx="1">
    <h1 slot-scope="props">
      {{props.data}}<br/>
      {{props.getUser}}
    </h1>
  </slot-scoped> -->
</template>
<style lang="scss">
  body{margin: 0;}
  .wrap{
    display: flex;
    &_item{
      width: 50%;
      padding: 30px;
    }
  }
  .meta {
    color: #42b883;
    font-size: 0.8em;
  }
</style>