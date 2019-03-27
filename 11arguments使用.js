function fun1(a,b){
	var len=arguments.length;
	if(len==1){
		return arguments[0]*2;
	}else if(len==2){
		return a+b;
	}else{
		throw new Error("参数必须是1个或者2个");
	}
}

function fun2(){
	var sum = 0;
	for(var i=0;i<arguments.length;i++)
	{
		sum += arguments[i];
	}
	return sum;
}

console.log(fun2(1));
console.log(fun2(1,2));
console.log(fun2(1,3,4));
