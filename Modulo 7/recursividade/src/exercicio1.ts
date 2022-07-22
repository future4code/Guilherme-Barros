function recursiveCrescent(value:number){
	if(value>=0){
		recursiveCrescent(value-1)
		console.log(value);
		
	}
}
function recursiveDecrescent(value:number) {
	if(value>=0){
		console.log(value);
		recursiveDecrescent(value-1)
	}
}