<script>
import { ref } from 'vue';
export default {
  setup(){
    const name = ref(''),
          password = ref(''),
          submitLogin = () => {
            console.log({name, password})
            // 表單送出後，清掉跟表單有關的 localStorage
            for (var key in localStorage) {
              if (/^form-(.+)/.test(key)) localStorage.removeItem(key);
            }
            alert("登入成功");
            name.value = '';
            password.value = '';
          }
    return {name, password, submitLogin}
  },
}
</script>

<template>
  <div class="loginBox">
    <div class="center">
      <div class="input-box">
        <p>NAME</p>
        <input
          class="name"
          type="text"
          placeholder="輸入使用者名稱"
          v-model-save="name"
          :value="name"
        />
      </div>
      <div class="input-box mb-20">
        <p>PASSWORD</p>
        <input
          class="password"
          type="password"
          placeholder="輸入密碼"
          v-model-save="password"
          :value="password"
        />
      </div>
      <button class="btn" @click="submitLogin">登入</button>
    </div>
  </div>
</template>

<style lang="scss">
  html, body {
    width: 100%;
    height: 100%;
    background-color: slategrey;
  }
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }
  #app {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .loginBox {
    width: 250px;
    background-color: rgb(6, 43, 73);
    box-shadow: 0 0 1px rgb(26, 29, 53);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  p, label {
    color: white;
    font-size: 14px;
    margin-bottom: 6px;
  }
  input{
    &[type="text"], &[type="password"], &[type="number"]{
      font-size: 12px;
      width: 180px;
      height: 24px;
      padding-left: 5px;
    }
    &[type="radio"] { margin: 0 7px; }
  }
  .input-box {margin-bottom: 20px;}
  label { margin-right: 15px; }
  p.error {
    color: rgb(255, 119, 119);
    font-size: 12px;
    padding-top: 4px;
  }
  .mb-20 { margin-bottom: 30px; }
  h1 { color: aliceblue; }
  .btn {
    font-size: 12px;
    line-height: 20px;
    width: 100%;
    background-color: snow;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
</style>