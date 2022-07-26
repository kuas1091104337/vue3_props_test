<script>
export default {
  // props:['msg'],
  // 接資料 (子組件) 傳到子組件
  props:{
    txt:String,
    // msg:{
    str:{
      type:String,
      default:'My name is Mike.'
    },
    bool:{
      type:Boolean,
      default:false
    },
    num:{
      type:Number,
      default:0
    },
    arr:{
      type:Array,
      default:() => []
    },
    obj:{
      type:Object,
      default:() => ({})
    },
    func:{
      type:Function,
      default:() => {}
    },
  },
  setup(props){
    console.log(props);
    return {props}
  }
}
</script>

<template>
  <h1>
    {{props.str}},
    {{props.bool}},
    {{props.num}},
    {{props.arr}},
    {{props.obj}},
    {{props.txt}}
  </h1>
</template>

<style lang="scss">
h1{
  color:green;
  font-size: 50px;
}
</style>