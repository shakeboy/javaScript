/**
 *
 * 检查数据类型typeof
 * @type {number}
 *
 * Number.MAX_VALUE
 * 1.7976931348623157e+308----->Infinity
 * Number.MIN_VALUE
 * 5e-324
 */
let a =13;
let b = "13";
alert(a);
console.log(a);
console.log(typeof a);
console.log(b);
console.log(typeof b);
console.log(Number.MAX_VALUE*2);
console.log(typeof Number.MAX_VALUE);
console.log(Number.MIN_VALUE/2);
console.log(typeof Number.MIN_VALUE);
console.log(Number.EPSILON);
console.log(Number.POSITIVE_INFINITY);
console.log('"abc"*"sss"');
console.log("abc"*"sss");
//Number
console.log(155555*59594);
//浮点数 运算。。。。。。0.30000000000000004
//可能得到一个不精确的值，所以千万不要使用js进行精确度要求高的运算
let c = 0.1 + 0.2;
console.log(c)