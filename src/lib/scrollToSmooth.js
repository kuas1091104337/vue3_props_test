let scrollToAnimationFuncPools = [];
export const scrollToSmooth = (targetScrollTop, moveTime) => {
  // 優化避免重複執行 
  // console.log('id : '+id); // 第2次click時才有 : id : 1 ~ id : 32
  scrollToAnimationFuncPools.forEach(id => window.cancelAnimationFrame(id))
  scrollToAnimationFuncPools = []
  // 初始位置
  const currentScrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
  if (currentScrollTop === targetScrollTop) return // 目標位置與初始位置一樣時直接返回
  let startTime = null, // 起始時間點初始化
      timerId;
  // 平滑功能使用此函式 
  timerId = window.requestAnimationFrame(function step(currentTime){
    if(!startTime) startTime = currentTime; // 記錄起始時間
    const progressTime = currentTime - startTime // 已經花費的時間
    const moveDistance = Math.abs(progressTime * ((targetScrollTop - currentScrollTop) / moveTime)) // 當前時間點須要移動的距離
    //                 目標位置低於當前位置滑動算式 Math.min                                      // 目標位置高於當前位置滑動算式 Math.max
    window.scrollTo(0, currentScrollTop < targetScrollTop ? Math.min((currentScrollTop + moveDistance),targetScrollTop) : Math.max((currentScrollTop - moveDistance),targetScrollTop))
    if (progressTime < moveTime) { // 經過的時間小於滑動要的總時間 - 遞迴
      timerId = window.requestAnimationFrame(step)
      scrollToAnimationFuncPools.push(timerId)
    }
  })
  console.log(timerId); // 第1次是 1, 第2次是 33
  scrollToAnimationFuncPools.push(timerId)
  console.log(scrollToAnimationFuncPools); // [1] 0: 1 1: 2 2: 3 ~ 30: 31 31: 32, [33]
}