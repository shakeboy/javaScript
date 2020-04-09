/**
 * 数据类型指字面量的类型
 * 在js中一共有六种数据类型
 *      String
 *      Number
 *      Boolean
 *      Null
 *      Undefined
 *      Object
 *
 *      其中String Number Boolean Null Undefined 基本数据类型
 *      Object是引用数据类型
 *
 */
    //String，使用双引号或者单引号，不要混着用
    //引号不能随意嵌套，双引号里不能放双引号，单引号里不能放单引号
    //单引号里面可以放双引号，双引号里可以放单引号
    //可以用\转义字符，表示特殊字符
    //\t制表符
    //\n换行
    //\"双引号
    //\'单引号
    //\\单斜杠
let str = "String数据类型";
alert(str);
let str1 = '石义钊："我真可爱"!';
let str2 = "石义钊：'我真可爱'！";
let str3 = "石义钊：\"我真可爱\"!";
let str4 = "石义钊：\'我"+str+"真\n可爱\'!";
str = 456;
alert(str4);