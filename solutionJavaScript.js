// Convert string to lower case
// S = "ABCddE"

const toLowerCase = function(s){

	let lowerCaseString = '';
	
	for(let i = 0; i < s.length; i++){
		
		//convert each string into its equivalent ASCII code
		let letterASCII = s[i].charCodeAt(0)
		
		// Check if the ASCII lies within range of Capital Letters
		if(letterASCII >= 65 && letterASCII <= 90 ){
			
			//if yes then increment code by 32
			letterASCII += 32;
		
		} else {
			
			lowerCaseString += s[i];
			continue;
		
		}
		
		//convert the lowerCase ASCII equivalent to char
		let lowerCaseChar = String.fromCharCode(letterASCII);
		
		lowerCaseString += lowerCaseChar;
		
	}
	
	return lowerCaseString;
}

let S = "ABCddE";
console.log(toLowerCase(S));
