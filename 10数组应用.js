// console.log(1000%7)

//今天是周二 1000天后是周几
// 1000%7   (1000%7+2)%7

var arr = ["周日","周一","周二","周三","周四","周五","周六"];

var index = (1000%7+2)%7;

console.log(arr[index]);

var arr2 = [,,,];
arr2 = arr2.join("I");
console.log(arr2);

// 数字的正序排列
var arr3 = [508,123,446,2,80,39,129];
arr3.sort(function(a,b) {
	if(a<b){
		return -1;
	}else if(a==b){
		return 0;
	}else {
		return 1;
	}
});
console.log(arr3);