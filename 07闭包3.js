function outer(x){
	function inner(y){
		console.log(x+y);
	}
	return inner;
}

var inner= outer(4);
inner(5); //9
inner(6);//10
inner(11);//15