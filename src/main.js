import { createApp } from 'vue'
import App from './AppScrollTo.vue'
// import App from './AppScrollToTest.vue'

// import App from './AppOld.vue'
// import App from './App.vue'
// [重構倒數第22天] - 減少 watch，改用 computed https://ithelp.ithome.com.tw/articles/10261662
// import App from './AppWatch.vue'

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
const app = createApp(App);
// 第7章 - 30單元
import dayjs from 'dayjs';
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
import { numPrice } from '@/lib/tools.js'
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
  }
});
// app.directive('scroll-to-2', {
//   mounted(el, binding) {
//     const {target, head} = binding.value,
//           wScroll = () => {
//             return new Promise((resolve) => {
//               window.scrollTo({
//                 top: document.querySelector(target).offsetTop - document.querySelector(head).offsetHeight,
//                 behavior: 'smooth'
//               });
//               resolve();
//             })
//           },
//           wScrollHandle = async () => {
//             el.removeEventListener('click',wScroll);
//             await wScroll();
//             el.addEventListener('click',wScroll);
//           };
//     el.addEventListener('click',wScrollHandle);
//   }
// });
app.directive('cell-scroll', {
  mounted(el, binding) {
    const {target, head, className} = binding.value;
    el.addEventListener('click',() => {
      if(el.classList.contains(className)) return
      // window.removeEventListener('scroll',debounce);
      const distance = 1000, speed = 300, minSpeed = 300, maxSpeed = 600, rate = speed / distance,
            headH = document.querySelector(head).offsetHeight || 0,
            targetScrollTop = document.querySelector(target).offsetTop - headH,
            currentScrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop),
            srcollTime = Math.round(Math.abs(currentScrollTop - targetScrollTop) * rate);
      srcollTime < minSpeed ? minSpeed : srcollTime > maxSpeed ? maxSpeed : srcollTime
      window.scrollTo({
        top: document.querySelector(target).offsetTop - document.querySelector(head).offsetHeight,
        behavior: 'smooth'
      });
    });
  }
});
import { scrollToSmooth } from '@/lib/scrollToSmooth.js'
app.directive('scroll-to-smooth',{
  mounted(el,binding) {
    const {target, head, time} = binding.value,
          headH = document.querySelector(head).offsetHeight || 0, // 本身外容器高度
          targetScrollTop = document.querySelector(target).offsetTop - headH, // 目標 dom 的 offsetTop
          moveTime = time || 500; // 滑動總時間
    el.addEventListener('click',() => {
      scrollToSmooth(targetScrollTop, moveTime)
    });
  }
});
// import { debounce } from '@/lib/debounce.js'
// window.addEventListener('scroll', debounce(scrollHandle,100))
app.directive('scroll-active', {
  mounted(el,binding) {
    let timer = null;
    const {fixHeadName, addClass, targetName} = binding.value,
          target = document.querySelector(targetName) || null,
          windowH = window.innerHeight,
          offsetTop = target.offsetTop,
          offsetBottom = offsetTop + target.offsetHeight,
          minSpeed = 300, maxSpeed = 600, rate = 300/1000, // speed/distance 300ms走1000px(速率)
          headH = document.querySelector(fixHeadName).offsetHeight || 0,
          targetScrollTop = offsetTop - headH,
          windowResizeHandle = () => {
            if(timer) clearTimeout(timer);
            timer = setTimeout(() => {
              // windowScrollHandle 
              windowH = window.innerHeight;
              offsetTop = target.offsetTop;
              offsetBottom = offsetTop + target.offsetHeight;
              // elClickHandle
              headH = document.querySelector(fixHeadName).offsetHeight || 0;
              targetScrollTop = offsetTop - headH;
            },100);
          },
          elClickHandle = () => {
            if(el.classList.contains(addClass)) return
            el.removeEventListener('click',elClickHandle)
            window.removeEventListener('scroll',windowScrollHandle);
            let startTime = null; // 開始click後的時間標記
            const currentScrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop),
                  moveTime = Math.round(Math.abs(currentScrollTop - targetScrollTop) * rate), // 滑動需要的總時間-1
                  step = (currentTime) => {
                    if(!startTime) startTime = currentTime; // 記錄起始時間
                    const progressTime = currentTime - startTime, // 已經花費的時間
                          moveDistance = Math.abs(progressTime * ((targetScrollTop - currentScrollTop) / moveTime)) // 當前時間點須要移動的距離
                                       // 目標位置低於當前位置滑動算式 Math.min( + )                                // 目標位置高於當前位置滑動算式 Math.max( - )
                    window.scrollTo(0, currentScrollTop < targetScrollTop ? Math.min((currentScrollTop + moveDistance),targetScrollTop) : Math.max((currentScrollTop - moveDistance),targetScrollTop))
                    if(progressTime < moveTime){ // 已經花費的時間 小於 滑動需要的總時間 - 遞迴
                      window.requestAnimationFrame(step)
                    }else{
                      // el.classList.add(addClass);
                      // target.classList.add(addClass);
                      window.addEventListener('scroll',windowScrollHandle);
                      el.addEventListener('click',elClickHandle)
                    }
                  };
            moveTime < minSpeed ? minSpeed : moveTime > maxSpeed ? maxSpeed : moveTime; // 滑動需要的總時間-2
            window.requestAnimationFrame(step);
          },
          windowScrollHandle = () => {
            if(timer) clearTimeout(timer);
            timer = setTimeout(() => {
              const currentScrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop),
                    scrollMiddle = currentScrollTop + windowH/2;
              if(offsetTop < scrollMiddle && offsetBottom > scrollMiddle) {
                if(el.classList.contains(addClass) && target.classList.contains(addClass)) return
                el.classList.add(addClass);
                target.classList.add(addClass);
              }else{
                el.classList.remove(addClass);
                target.classList.remove(addClass);
              }
            },100);
          };
    el.addEventListener('click',elClickHandle);
    window.addEventListener('scroll',windowScrollHandle);
    window.addEventListener('resize',windowResizeHandle);
    const scrollEvent = new Event('scroll');
    window.dispatchEvent(scrollEvent);
  },
  unmounted(){
    el.removeEventListener('click',elClickHandle)
    window.removeEventListener('scroll',windowScrollHandle);
    window.removeEventListener('resize',windowResizeHandle);
  }
});
const VueScrollTo = require('vue-scrollto');
app.use(VueScrollTo).mount('#app');

