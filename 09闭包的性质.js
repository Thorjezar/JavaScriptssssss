function outer(){
	var count=0;
	function inner(){
		count++;
		console.log(count);
	}
	return inner;
}

var inn1 = outer();
var inn2 = outer();

inn1(); //1
inn1(); //2
inn1();// 3
inn2();//1
inn2();//2
inn1();//4