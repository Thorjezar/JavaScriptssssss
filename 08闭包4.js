function fun1(a,b){
	function fun2(a){
		console.log(a+b); //a是自己传来的 b是fun1传来的
	}
	return fun2;
}

var fn = fun1(3,5); //3是fun1的形参a 5是给fun1的形参b
fn(8); //结果13

