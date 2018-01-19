function getRandCharInAlph() {
		let keyboard = [["q","w","e","r","t","y","u","i","o","p","[","]"],["a","s","d","f","g","h","j","k","l",";","'"],["z","x","c","v","b","n","m",",",".","/"]]
		let randomItem = keyboard[Math.floor(Math.random()*keyboard.length)][Math.floor(Math.random()*keyboard.length)];
		return randomItem;
}

console.log(getRandCharInAlph());