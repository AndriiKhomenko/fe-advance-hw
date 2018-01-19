function getRandCharInRow(row) {
	row = prompt("Введите номер строки от 0 до 2");
	let keyboard = [["q","w","e","r","t","y","u","i","o","p","[","]"],["a","s","d","f","g","h","j","k","l",";","'"],["z","x","c","v","b","n","m",",",".","/"]]
	let randomItem = keyboard[row][Math.floor(Math.random()*keyboard.length)];
	return randomItem;
}

console.log(getRandCharInRow());