/////1
let arr_1 = [101, 202, 303, 404, 505];
let arr_2 = [606, 707, 808, 909];
let superArr = [...arr_1, ...arr_2];
console.log(...superArr);
/////

/////2
superArr;
console.log(Math.min(...superArr));
/////

/////3
let obj = { width: 300, height: 550 };
let obj2 = {
  ...obj,
  area() {
    return obj2.width * obj2.height;
  },
};
console.log(obj2.width);
console.log(obj2.height);
console.log(obj2.area());
/////4

function f(a, b, c, ...rest) {
  console.log(a, b, c, rest);
}
f(35, 34, 562, 54343, 45343, 453, "sfdsf", "afdf");
/////
