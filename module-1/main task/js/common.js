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

console.log(`Длина первой строки - ${lengthOfFirstLine} символов
Длина второй строки - ${lengthOfSecondLine} символов 
Длина третей строки - ${lengthOfThirdLine} символов

Первый символ первой строки - ${firstSymbolOfFirstLine}
Последний символ первой строки - ${lastSymbolOfFirstLine}

Первый символ второй строки - ${firstSymbolOfSecondLine}
Последний символ второй строки - ${lastSymbolOfSecondLine}

Первый символ третей строки - ${firstSymbolOfThirdLine}
Последний символ третей строки - ${lastSymbolOfThirdLine}

Позиция символа [ - ${positionOfSymbol1}
Позиция символа ] - ${positionOfSymbol2}`);