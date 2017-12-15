/*
  Есть 3 переменные в которых хранится  размер
  составляющих блочной модели в формате Npx,
  где N это число с плавающей запятой.
  
  Используя эти переменные, запишите в 
  переменную totalWidth общую ширину 
  блока в формате Npx.
  
  К примеру "сумма" '20.20px' и '30.25px'
  будет равна '50.45px'.
  
  Если все верно, то в консоли будет
  выведена строка '125.85px'
*/

const padding = parseFloat("20.25px");
const border = parseFloat("5.15px");
const contentWidth = parseFloat("100.45px");

let totalWidth;

totalWidth = padding + border + contentWidth;

console.log(totalWidth + "px"); // '125.85px'
