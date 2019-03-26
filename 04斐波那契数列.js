function fib(i){
	if(i==1||i==2){
		return 1;
	}
	else{
		//i>2
		return fib(i-1)+fib(i-2);
	}
}
for(var i=1;i<=20;i++){
	console.log("第"+i+"项斐波那契数列是"+fib(i));
}