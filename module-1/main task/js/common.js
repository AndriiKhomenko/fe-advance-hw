"use strict"

const firstLine = "qwertyuiop[]";
const secondLine = "asdfghjkl;'";
const thirdLine = "zxcvbnm,./";

const lengthOfFirstLine = (firstLine.length);
const lengthOfSecondLine = (secondLine.length);
const lengthOfThirdLine = (thirdLine.length);

let firstSymbolOfFirstLine = (firstLine.charAt(0));
let lastSymbolOfFirstLine = (firstLine.charAt(lengthOfFirstLine-1));

let firstSymbolOfSecondLine = (secondLine.charAt(0));
let lastSymbolOfSecondLine = (secondLine.charAt(lengthOfSecondLine-1));

let firstSymbolOfThirdLine = (thirdLine.charAt(0));
let lastSymbolOfThirdLine = (thirdLine.charAt(lengthOfThirdLine-1));

let positionOfSymbol1 = (firstLine.indexOf("["));
let positionOfSymbol2 = (firstLine.indexOf("]"));

console.log(`Длина первой строки - ${lengthOfFirstLine} символов\nДлина второй строки - ${lengthOfSecondLine} символов\nДлина третей строки - ${lengthOfThirdLine} символов\nПервый символ первой строки - ${firstSymbolOfFirstLine}\nПоследний символ первой строки - ${lastSymbolOfFirstLine}\nПервый символ второй строки - ${firstSymbolOfSecondLine}\nПоследний символ второй строки - ${lastSymbolOfSecondLine}\nПервый символ третей строки - ${firstSymbolOfThirdLine}\nПоследний символ третей строки - ${lastSymbolOfThirdLine}\nПозиция символа [ - ${positionOfSymbol1}\nПозиция символа ] - ${positionOfSymbol2}`);