/*
  Есть 3 переменные в которых хранится  размер
  составляющих блочной модели в формате Npx,
  где N это целое число.
  
  Используя эти переменные, запишите в 
  переменную totalWidth общую ширину 
  блока в формате Npx.
  
  К примеру "сумма" '20px' и '30px'
  будет равна '50px'.
  
  Если все верно, то в консоли будет
  выведена строка '125px'
*/

const padding = parseInt("20px");
const border = parseInt("5px");
const contentWidth = parseInt("100px");

let totalWidth;

totalWidth = padding + border + contentWidth;

console.log(totalWidth + "px"); // '125px'