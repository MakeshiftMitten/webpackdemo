function myFunction(){
	console.log("my function");

	this.myInnerFunction = function() {
		console.log("my inner function");
	}
}

export {myFunction};