let keyTrainer = {
	chars: ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"],
	charCount:   function setCharCount(){
								while(checkPositiveInteger() === false) {
									var result = parseFloat(prompt("Введите количество символов",""));
								}
							return result;
								function checkPositiveInteger(){
								return Number.isInteger(result);
								}
								},
	task: function createTask(){
					let result = new Array(count_array);
					for(let i=0; i<count_array; i++){
						result[i] = keyTrainer.chars[Math.floor(Math.random()*keyTrainer.chars.length)];
					}	
					result = result.toString();
					result = result.replace(/,/g,"");
				return result;
				},
	userInput: function startTask(){
							let result = prompt(res_array,"Напишите здесь такую же строку");
							return result;
							},
	userErrors: function countErrors(){
								var k=0;
								for(var i=0; i<res_array.length; i++){
									if(res_array[i] !== newStr[i]){
									k++;
								}
								}
								if(k>0){return "Количество ошибок = " + k}
									else{return "Поздравляем, ошибок нет!"}
							}
};
let count_array = keyTrainer.charCount();
let res_array = keyTrainer.task();
let newStr = keyTrainer.userInput();
let count_Errors = keyTrainer.userErrors();

console.log(count_Errors);