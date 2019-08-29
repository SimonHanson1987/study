
// Object.keys()  返回一个由一个对象的自身可枚举的属性组成的数组
let simpleColors = {
  colorA: 'white',
  colorB: 'black'
};

let natureColor = {
  colorC: 'green',
  colorD:'yellow'
}


Object.setPrototypeOf(natureColors, simpleColors);
console.log(Object.keys(natureColors));
