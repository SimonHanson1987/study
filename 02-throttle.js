
// throttle 节流

// 实现节流的基本步骤：
    // 获取第一次触发事件的时间戳
    // 获取第二次触发事件的时间戳
    // 时间差如果大于某个阈值就执行事件，然后重置第一个时间

// throttle 设置固定的函数执行速率，从而降低频繁事件的执行次数。

/** @param fn {function} 实际执行的函数
 * @param delay {Number} 执行间隔时间
 *
 * @return {function}  返回一个节流函数
 *
 */
function throttle(fn, threshhold) {

  // 记录上次执行的时间
  var last;

  // 定时器
  var timer;

  // 指定默认间隔时间
  threshhold || (threshhold = 300);

  // 返回的函数，每隔 threshhold 就执行一次 fn 函数
  return function () {

    // 保存函数调用时的上下文和参数，传递给 fn
    var context = this;
    var args = arguments;

    var now = + new Date();

    // 如果上次指向 fn 函数的时间小于 threshhold，那么就放弃执行 fn， 并重新计时
    if (last && now < last + threshhold) {
      clearTimeout(timer)

      // 保证在当前时间区间结束后，在执行一次 fn
      timer = setTimeout(function () {
        last = now;
        fn.apply(contxt, args)
      }, threshhold)

    } else {
      last = now;
      fn.apply(context, args)
    }
  }
}
