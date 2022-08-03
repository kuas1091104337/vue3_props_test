<script>
// 第7章 - 30單元
import { ref, onMounted } from 'vue';
import axios from "axios";
// import 要載入的 from '@/components/要載入的.vue';
export default {
  // components:{ 要載入的 },
  setup(){
    const postCard = ref([]), // .card_wrap
          imgArr = ref([]), // .box
          DataValue = ref([]), // .cardList s-1
          isLoad = ref(true),
          getCard = ref([]), // .cardList s-2
          getLoad = ref(true),
          LoadImg = (imgUrl) => {
            let i = 0;
            imgUrl.forEach(item_src => {
              const img = new Image();
              img.src = item_src;
              img.onload = () => {
                i += 1;
                if(i === imgUrl.length) isLoad.value = false;
              }
            })
          };
    onMounted(() => {
      axios.get('https://60bd9841ace4d50017aab3ec.mockapi.io/api/post_card')
      .then(function(res){
        postCard.value = res.data;
        // console.log(res.data);
      }).catch(function(error){
        // console.log(error.response.data);
      });
      axios.get("https://610cd85966dd8f0017b76eb5.mockapi.io/api/employee_list")
      .then((res) => { imgArr.value = res.data; });
      // .cardList s-1
      fetch('https://610cd85966dd8f0017b76eb5.mockapi.io/api/card')
      // 操作 res 屬性、方法，使用 json() 可以得到 json 物件，返回 Promise 的 resolves
      .then(res => res.json())
      .then(res => { // 實際存取到資料
        DataValue.value = res; // 取得 api 資料
        // 取出大小圖資料用陣列包裝[[],[],[]...]
        const imgArr = res.map(item => [item.avatar, item.content]);
        // 展開二維陣列 ...imgArr，在串接全陪圖片在一維陣列
        LoadImg([].concat(...imgArr));
      })
      .catch((error) => { // 錯誤回應
        console.log(error);
      });
      // .cardList s-2
      axios
      .get("https://60bd9841ace4d50017aab3ec.mockapi.io/api/post_card")
      .then((res) => {
        getCard.value = res.data;
        getLoad.value = false;
      });
    })
    return { postCard, imgArr, DataValue, isLoad, getCard, getLoad };
  },
}
</script>

<template>
  <div class="card_wrap">
    <div :class="['card', {loading: getLoad}]" v-for="card in getCard" :key="card.id">
      <header class="card_head">
        <div class="card_head_wrap">
          <img v-src="card.avatar" class="card_head_img" />
        </div>
        <div>
          <h1>{{getLoad ? '' : card.name}}</h1>
          <p v-timeFormat="card.post_date"></p>
        </div>
      </header>
      <p class="card_content">{{getLoad ? '' : card.content}}</p>
      <div class="card_postPhoto">
        <img class="card_main" v-src="card.photo" :alt="card.content" />
      </div>
    </div>
  </div>
  <div class="card_wrap red">
    <div class="card" v-for="item in postCard" :key="item.id">
      <header class="card_head">
        <img :src="item.avatar" class="card_head_avatar">
        <div>
          <h1>{{item.name}}</h1>
          <p v-timeFormat="item.post_date"></p>
        </div>
      </header>
      <p class="card_content">{{item.content}}</p>
      <img class="card_postPhoto" :src="item.photo" :alt="item.content">
    </div>
  </div>

  <div class="cardList_wrap">
    <div :class="['cardList', {load: isLoad}]" v-for="item in DataValue" :key="item.id">
      <header class="cardList_head">
        <div class="cardList_photo">
          <img :src="item.avatar">
        </div>
        <p class="cardList_name">{{ isLoad ? "" : item.username }}</p>
      </header>
      <p class="cardList_txt">{{ isLoad ? '' : item.text }}</p>
      <main class="cardList_main">
        <img :src="item.content">
      </main>
    </div>
  </div>
  <div class="cardList_wrap">
    <div class="cardList" v-for="item in DataValue" :key="item.id">
      <header class="cardList_head">
        <div class="cardList_photo">
          <img :src="item.avatar">
        </div>
        <p>{{item.username}}</p>
      </header>
      <p class="cardList_txt">{{item.text}}</p>
      <main class="cardList_main">
        <img :src="item.content">
      </main>
    </div>
  </div>
  
  <div class="box">
    <img class="box_img" v-for="item in imgArr" v-src="item.avatar" :key="item.id" />
    <img class="box_img" v-src="'https://media2.giphy.com/media/dqCzXP6iGRc5bgmDDb/giphy123.gif'" />
  </div>
</template>

<style lang="scss">
* {
  // box-sizing: border-box;
  padding: 0;
  margin: 0;
}
img { display: block; }
html, body {
  width: 100%;
  height: 100%;
  background-color: #ddd;
}
.red{background-color: red;}
@keyframes loading {
  0%{ background-position: 200% 0;}
  100%{ background-position: 0% 0;}
}
#app { padding: 40px 0 0 0; }
.card {
  color: #666;
  font-size: 14px;
  line-height: 18px;
  width: 400px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(#000, 0.3);
  margin: 0 15px 30px;
  &_wrap{
    display: flex;
    justify-content:center;
    flex-wrap:wrap;
    padding: 0 15px;
  }
  &_head {
    display: flex;
    align-items:center;
    padding: 10px 10px 0px;
    margin: 0 0 5px;
    &_avatar, &_wrap {
      width: 40px;
      height: 40px;
      background-color:#ededed;
      border-radius: 50px;
      margin-right: 10px;
      overflow: hidden;
    }
    h1{
      font-size: 16px;
      padding:2px 0;
      margin-bottom: 5px;
    }
  }
  &_content {
    padding: 0px 10px;
    margin-bottom: 10px;
  }
  &_main, &_head_img{
    width: 100%;
    transition: opacity .3s;
  }
  &_postPhoto{
    width: 100%;
    height: 300px;
    background-color: #ededed;
  }
}
.loading{
  h1, p {
    color: rgba(#fff, 0);
    width: 220px;
    height: 18px;
    background-color: #ededed;
    background-image: linear-gradient(100deg, 
      rgba(#fff, 0) 30%,
      rgba(#fff, 0.65) 50.5%,
      rgba(#fff, 0) 0%
    );
    background-size: 200% 100%;
    animation:loading 2s ease-in-out infinite;
  }
  .card_content{margin-left: 10px;}
}
// .loading, 
.card_head_wrap, .card_postPhoto{
  background-color:#ededed;
  background-image: linear-gradient(100deg, 
    rgba(#fff, 0) 30%,
    rgba(#fff, 0.65) 50.5%,
    rgba(#fff, 0) 0%
  );
  background-size: 200% 100%;
  animation:loading 2s ease-in-out infinite;
}
.box{
  display: flex;
  flex-wrap: wrap;
  width: 800px;
  background-color: #9ff;
  padding: 50px;
  margin:0 auto;
  &_img {
    width: 100px;
    height: 100px;
    transition: opacity 0.3s;
  }
}
.cardList{
  font-size: 14px;
  line-height: 20px;
  width: 300px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 1px 5px rgba(#000,.2);
  margin: 0 20px 40px;
  &_wrap{
    display: flex;
    justify-content:center;
    flex-wrap:wrap;
    padding: 40px 20px 0;
  }
  &_head{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
  }
  &_photo{
    margin-right: 10px;
    > img{border-radius: 50%;}
  }
  &_txt{
    padding: 0 10px;
    margin-bottom: 10px;
  }
  img{
    opacity: 1;
    transition: opacity .3s;
  }
}
.load {
  height: 380px;
  &.cardList img{opacity: 0;}
  .cardList{
    &_name{ width: 40%;}
    &_photo{
      width: 30px;
      height: 30px;
      border-radius: 50px;
    }
    &_txt{
      width: 70%;
      margin: 0 auto 10px 10px;
    }
    &_main{ height: 300px; }
    &_name, &_txt{height: 20px;}
    &_photo, &_name, &_txt, &_main{
      background-color:#ededed;
      background-image: linear-gradient(100deg, 
        rgba(#fff, 0) 30%,
        rgba(#fff, 0.65) 50.5%,
        rgba(#fff, 0) 0%
      );
      background-size: 200% 100%;
      animation:loading 2s ease-in-out infinite;
    }
  }
}
</style>