import {myFunction} from './myFunction';

(function (){
	console.log('hello world');	
	//myFunction();	
	var functionInstantiation = myFunction();
	functionInstantiation.myInnerFunction();
	//console.log(myFunction);
	
})();
