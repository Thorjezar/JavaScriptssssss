function outer(){
	var num = 666;
	function inner(){
		console.log(num);
	}
	return inner; // outer函数返回 inner函数的引用
}

var inner = outer(); //inner就是inner()函数
inner(); //结果666