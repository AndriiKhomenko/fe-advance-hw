function addKeyboardLayout() {

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

return keyboard;
}

console.log(addKeyboardLayout());