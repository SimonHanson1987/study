// Array.includes()

// Promise.finally()

// 增加了正则的模式


// 面向对象
// 闭包
// 模块化 es6中的模块化



// 面向对象
// 三大特性：
// 封装：不需要知道具体是怎么匹配，怎么实现的
// 继承：重用前任已经封装的代码；
// 多态

// es5中的类
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.sayName = function () {
//   console.log(this.name);
//   console.log(this.age);
// }

// var p = new Person('simon',29)
// p.sayName();
// ---------------------------------------------------------------------------------------------------
// 继承
// function Worker(name, age, job) {
//   Person.call(this, name, age)
//   this.job = job;
// }

// Worker.prototype = new Person();
// Worker.prototype.constructor = Worker;
// Worker.prototype.showJob = function () {
//   console.log(this.job);
// }

// let w = new Worker('blue', 23, '打杂的');
// w.sayName();
// w.showJob();



// ---------------------------------------------------------------------------------------------------

// ES6中的类
// class Person {
//   constructor (name,age) {
//     this.name = name;
//     this.age = age;
//   }

//   show() {
//     console.log(this.name);
//     console.log(this.age);
//   }
// }

// let p = new Person('blue', 18);
// p.show();

// class Worker extends Person {
//   constructor (name, age, job) {
//     super(name, age);
//     this.job = job;
//   }

//   showJob() {
//     console.log(this.job);
//   }
// }

// let w = new Worker('blue', 19, '搭载的');
// w.show();
// w.showJob();


// ES6中多的几个关键字
// class 专门用来声明 类的
// constructor  声明  构造器的
// extends 专门是用来 继承的
// super  超类，父类


// ---------------------------------------------------------------------------------------------------

// 闭包
// 1. 底层: 栈
// 2. 高层: 函数当作对象来处理




// ES6模块化
// js模块系统  --> CMD  --> AMD -->ES6语言提供的模块化的支持
// 虽然 浏览器目前还不支持，但是我们可以用 webpack 来使用。


// ---------------------------------------------------------------------------------------------------

// 模块化如何定义和如何使用
// 一个js文件就是一个模块
// mod1.js 文件
// let a = 12;
// export a;


// 如何引入这个模块
// import * as mod1 from 'mod1';
// console.log(a);


// 需要安装 webpack   npm install webpack -g
// 安装完之后，需要创建一个 webpack.config.js 文件。里面需要设置一些配置
// 这是nodejs的模块化
const path = require('path');
module.exports = {
  // 源文件在哪儿
  // 需要打包输出到那儿

  // 这里有需要注意
  mode: 'production', // 告诉它以何种模式生成 可以是 production/developer
  entry: "./main.js",  // 入口 nodejs中的同级目录 必须带上 ./
  output: { // 出口
    // path: "./dist",  // 这个path 必须是一个绝对路径  告诉它要输出到那个目录下
    path: path.resolve(__dirname,'dist'), // 既给了绝对路径，也给了输出文件的路径
    filename: "bundle.js"  // 打包之后的文件名字
  }
};


/*
webpack编译：
1. entry  入口
2. outpu  输出
    path  绝对路径
    filename  文加名
3. mode  模式
4. 所有的当前路径前面必须加 ./

*/


// ---------------------------------------------------------------------------------------------------

// export let a = xxx;
// export const a = xxxxx;
// export { a, b, c };

// export default  导出默认成员



// import  用法
// import * as mod from './xxx'
// import {a,b,c,aaa} from './xxx'

// import xxx from './mod'  // 专门用来导入默认成员


// 另外两种另类的
// 模块代码引入进来，不引入内部的成员； 比如 图片和css
// import './1.jpg'  直接引入文件就可以可


// 异步引入  希望延迟加载，我们模块有可能加载，也有可能不加载
// import ('./mod1') 把 import 当作函数使用，他是一个 promise 对象，有一个返回值
// import('./mod2.js').then(mod2 => { //这种引入的路径必须是绝对路径
//   console.log('mod2的QQ：' + mod2.qq);
// }, err => {
//   console.log('mod2加载失败...');
// })
// 打包之后，带数字前缀的都是异步加载的


// 我们还可以在一个模块中导出另一个模块中的内容
// 比如我们在 index.js 文件中导出另一个模块中的内容，如下
// export * from './m2.js'
// export {x,ab,abc,xxx} from './m3.js'
// export {default} from './m2.js'



// ---------------------------------------------------------------------------------------------------
