function isOneEdit(text1:string,text2:string):boolean {
	if (Math.abs(text2.length - text1.length) > 1) return false

	if (text1.length > text2.length) return text1.includes(text2)
	if (text2.length > text1.length) return text2.includes(text1)

	let charDiffCount=0
	for(let i=0;i<text1.length;i++){
		if (text1[i] !== text2[i]) {
			charDiffCount++
		}

	}
	return charDiffCount === 1
	
}
console.log(isOneEdit("banana", "panana"));
