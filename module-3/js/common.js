const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

let arr1 = alphabet.slice(0,12);
let arr2 = alphabet.slice(12,23);
let arr3 = alphabet.slice(23,33);

arr1 = arr1.split('');
arr2 = arr2.split('');
arr3 = arr3.split('');

let keyboard = [];
keyboard.push(arr1);
keyboard.push(arr2);
keyboard.push(arr3);

let h = keyboard[1][5] + keyboard[0][2] + keyboard[1][8] + keyboard[1][8] + keyboard[0][8];
let j = keyboard[1][6] + keyboard[1][0] + keyboard[2][3] + keyboard[1][0] + keyboard[1][1] + keyboard[2][2] + keyboard[0][3] + keyboard[0][7] + keyboard[0][9] + keyboard[0][4];
let t = keyboard[0][4] + keyboard[0][3] + keyboard[1][0] + keyboard[0][7] + keyboard[2][5] + keyboard[0][2] + keyboard[0][3];

console.log(h);
console.log(j);
console.log(t);
