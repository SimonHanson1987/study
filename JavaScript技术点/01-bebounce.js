// debounce 防抖
// 简单理解： 多次触发的相同事件合并为一次触发


/**@param fn {function} 实际要执行的函数
 * @param delay {number} 延迟时间，单位毫秒
 *
 * @return {function}  返回一个 防反跳 的函数
 */
function debounce(fn, delay) {
  // 定时器,用来 setTimeout
  var timer;

  // 返回一个函数，这个函数会在 delay 毫秒 之后执行 fn 函数
  return function () {
    // 保存函数调用时的上下文和参数，传递给 fn
    var context = this;
    var args = arguments;

    // 每次这个返回函数被调用的时候，就清楚定时器，以保证不执行 fn
    clearTimeout(timer);

    // 当返回的函数被最后一调用后，再过 delay 毫秒就执行 fn
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay)
  }
}



/**在一表单输入框中，想当用户停止输入之后，在调用 ajax 请求 */
// input.addEventListener('keyup', debounce(() => ajax(...), 1000), false);



// 立即执行版的节流
/*
 * @desc 函数防抖
 * @param  func 函数
 * @param wait  延迟执行时间 delay
 *
 * @param immediate  true 表立即执行, false 表非立即执行
 *
 */
function debounce(func, wait, immediate) {
  var timeout;

  return function () {
    var context = this;
    var args = arguments;

    if (tiemout) {
      clearTimeout(timeout);
    }

    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);

      if (callNow) {
        func.apply(context, args);
      }
    } else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait);
    }
  }
}
