console.log(23+"10");
// 取整
var num = parseInt(12.45);
console.log(num);
//字符串转整数
console.log(parseInt("100"));
console.log(parseInt("-100"));
console.log(parseInt("100cccc"));
console.log(parseInt("100.123123"));
console.log(parseInt("asdasd")); //NaN
console.log(parseInt("哈哈")); //NaN
// console.log(typeof(parseInt("-100")));

console.log(parseFloat("1231"));
console.log(parseFloat("434.34.2")); //434.34
console.log(parseFloat(".7888"));//0.7888 
console.log(parseFloat(".78e3"));  //780
console.log(parseFloat(".78e3a"));  //数字780
console.log(parseFloat("a.78e3a"));  //NaN