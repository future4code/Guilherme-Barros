function sumRecursive(value:number,acc:number=0) {
	if (value===0) {
		return acc
	}
	sumRecursive(value-1,acc+value)
}