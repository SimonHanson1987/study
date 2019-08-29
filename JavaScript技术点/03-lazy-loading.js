
// 懒加载： 延时加载，是一种对网页性能优化的方式。当页面中需要一次性载入很多图片的时候

// 懒加载原理：
    // 通过动态给img 标签的src 添加图片地址

// 判断元素是否在可视区的方法一：
  // 1. 通过 document.documentElement.clientHeight 获取屏幕可视窗口的高度
  // 2. 通过 Element.offsetTop 获取元素相对于文档顶部的距离
  // 3. 通过 document.documentElement.scrollTop 获取浏览器窗口顶部与文档顶部之间的距离，也就是滚动条滚动的距离
  // 判断 2-3 < 1 是否成立，如果成立，元素就在可视区


  // 方法二： getBoundingClientRect() 来获取元素的大小及位置，此方法返回一个名为 ClientRect 的 DOMRect 对象，包含了 top  right botton  left  width  height 这些值。 这些值都是相对于左上角而言，而不是边距。

