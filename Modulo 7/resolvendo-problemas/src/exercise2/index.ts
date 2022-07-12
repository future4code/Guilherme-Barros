function stringCompression(text:string):string {
	const substrings = [];
  let lastChar = text[0];
  let charCount = 0;

  for (const char of text) {
	if (char !== lastChar) {
	  substrings.push(lastChar + charCount);
	  lastChar = char;
	  charCount = 0;
	}
	charCount++;
      }
    
      substrings.push(lastChar + charCount);
      let result = "";
      for (const key of substrings) {
	result += key;
      }
    
      return result.length >text.length ? text : result;
}

console.log(stringCompression("aabcccccaaa"));
