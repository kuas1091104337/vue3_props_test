import { createApp } from 'vue'
import dayjs from 'dayjs';
// import App from './AppOld.vue'
// import App from './App.vue'
// [重構倒數第22天] - 減少 watch，改用 computed https://ithelp.ithome.com.tw/articles/10261662
import App from './AppWatch.vue'

// [重構倒數第01天] - Vue的表單自動暫存 https://ithelp.ithome.com.tw/articles/10274667
// import App from './AppForm.vue'
// [重構倒數第13天] - Vue3定義自己的模板語法 (第7章 - 30單元)
// import App from './AppDirective.vue'
// 第7章 - 31單元
// import App from './AppSlots.vue'
// import App from './AppAnim1.vue'
// import App from './AppGSAP2.vue'
// import App from './AppBanner.vue'
// 第4章 - 27、28、29單元
// import App from './AppProps.vue'
// 第4章 - 28單元
// import { numPrice } from '@/lib/tools.js'
const app = createApp(App);
// 第7章 - 30單元
app.directive("timeFormat", {
  mounted(el,binding) {
    const time = dayjs(binding.value).format("YYYY 年 MM 月 DD 日");
    el.innerText = time;
  }
});
import errorImg from "./assets/error.png";
app.directive("src", (el, binding) => {
  el.style.opacity = 0;
  if(binding.value){
    const img = new Image();
    img.src = binding.value;
    img.onload = () => {
      // console.log('onload');
      el.src = binding.value;
      el.style.opacity = 1;
    };
    img.onerror = () => {
      // console.log('onerror');
      el.src = errorImg;
      el.style.opacity = 1;
    };
  }
});
// 第4章 - 27單元
app.directive('focus',{
  mounted(el){ el.focus(); console.log(el); }
});
// 第4章 - 28單元
app.directive('price',{
  // dom render 完後，只會執行1次
  mounted(el, num){ el.innerHTML = numPrice(num.value) },
    // const newPrice = numPrice(num.value);
    // el.innerHTML = newPrice;
    // console.log(el, num.value);
  // 傳入的值被改變時觸發
  updated(el, num){ el.innerHTML = numPrice(num.value) }
});
// [重構倒數第01天] - Vue的表單自動暫存 (有暫存功能的 v-model)
app.directive('model-save', {
  mounted(el,binding) { // binding = Proxy, binding.value = v-model-save 代入的參數
    // 定義 3 個儲存的 function
          // 1.寫入 Input DOM 的 value
    const setInputValue = value => el.value = value,
          // 2.同步 Vue 中宣告的變數(資料)，類似 v-model
          // instance透過directive傳入的proxy物件，修改裡面的proxy物件參數(binding)，上層傳入的資料就會跟著被修改
          setSyncDate = value => binding.instance[el.className] = value,
          // 3.塞入 localStorage 暫存資料
          setLocalStorage = value => localStorage.setItem(`form-${el.className}`, value);
    // 檢查目前是 localStorage 有沒有暫存的資料，沒有就設置(setItem) 給vms_name、vms_password的ref
    if(!localStorage[`form-${el.className}`]) setLocalStorage(binding.value);
    // 寫入值到input裡面，用localStorage的值寫入
    setInputValue(localStorage[`form-${el.className}`]);
    // 同步 Vue 中宣告的變數
    setSyncDate(el.value);
    // 傳進來的 el 塞入 handleSave 的 function
    el.handleSave = (e) => {
      setLocalStorage(e.target.value);
      setSyncDate(e.target.value);
    }
    el.addEventListener("input", el.handleSave);
    el.addEventListener("change", el.handleSave);
  },
  unmounted(el) {
    el.removeEventListener("input", el.handleSave);
    el.removeEventListener("change", el.handleSave);
  },
});

app.mount('#app');

