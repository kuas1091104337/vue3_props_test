let scrollToAnimationFuncPools = [] //
function scrollToSmooth(targetPos, moveTime, callBackFn) {
  // 優化避免重複執行 
  scrollToAnimationFuncPools.forEach(id => window.cancelAnimationFrame(id))
  scrollToAnimationFuncPools = []
  const currentPos = window.pageYOffset // 初始位置
  if (currentPos === targetPos) return // 目標位置與初始位置一樣時直接返回
  let startTime = null // 起始時間點初始化
  // 平滑功能使用此函式
  const animationId = window.requestAnimationFrame(function step(currentTime){
    // startTime = !startTime ? currentTime : startTime // 記錄起始時間
    if(!startTime) startTime = currentTime; // 記錄起始時間
    const progress = currentTime - startTime // 已經花費的時間
    // 當前時間點須要移動的距離 Math.min(totalTimestamp*(moveDistance/moveTime),moveDistance)
    // totalTimestamp*(moveDistance/moveTime) & totalTimestamp/(moveTime/moveDistance)
    // const movePos = Math.abs(((targetPos - currentPos) * progress) / moveTime)
    const movePos = Math.abs(progress * ((targetPos - currentPos) / moveTime))
    if(currentPos < targetPos){
      // window.scrollTo(0, currentPos + movePos) // 目標位置低於當前位置滑動算式
      window.scrollTo(0, Math.min((currentPos + movePos),targetPos))
    } else {
      // window.scrollTo(0, currentPos - movePos) // 目標位置高於當前位置滑動算式
      window.scrollTo(0, Math.max((currentPos - movePos),targetPos))
    }
    //  經過的時間小於滑動要的總時間
    if (progress < moveTime) { // 遞迴
      const animationId = window.requestAnimationFrame(step)
      scrollToAnimationFuncPools.push(animationId)
    } else { // 遞迴結束
      // window.scrollTo(0, targetPos)
      if(callBackFn) callBackFn()
    }
  })
  scrollToAnimationFuncPools.push(animationId)
}
app.directive('scroll-to-smooth',{
  mounted(el,binding) {
    const {target, head, time, callBack} = binding.value,
          // 本身外容器高度
          headH = document.querySelector(head).offsetHeight || 0,
          // 目標 dom 的 offsetTop
          targetPos = document.querySelector(target).offsetTop - headH,
          // 滑動總時間
          moveTime = time || 500,
          // 滑動到目標觸發回調
          callBackFn = callBack || null;
    el.addEventListener('click',() => {
      scrollToSmooth(targetPos, moveTime, callBackFn)
    });
  }
});

{/* 
<li v-scroll-to-smooth="{
  target:'.target', //目標容器
  head:'.header', //當前點擊目標的外容器有fix的header之類
  time:1000, //要花多久時間
  callBack: () => console.log('async'), //滑動到目標才觸發
}">
 */}