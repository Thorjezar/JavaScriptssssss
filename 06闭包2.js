var inner;
function outer(){
	var num1 = 260;
	var num2 = 360;
	// inner 变成一个函数
	inner=function(){
		alert(num1);
		alert(num2);
	}
}
outer();
var num1 = 300;
var num2 =100;
inner(); //弹出 260 360