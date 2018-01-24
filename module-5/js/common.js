const keyboard = {
    layouts: {
        en: {
            topRow: ["q","w","e","r","t","y","u","i","o","p","[","]"],
            middleRow: ["a","s","d","f","g","h","j","k","l",";","'"],
            bottomRow: ["z","x","c","v","b","n","m",",",".","/"]
        },
        ru: {
            topRow: ["й","ц","у","к","е","н","г","ш","щ","з","х","ъ"],
            middleRow: ["ф","ы","в","а","п","р","о","л","д","ж","э"],
            bottomRow: ["я","ч","с","м","и","т","ь","б","ю","."]
        },
        ua: {
            topRow: ["й","ц","у","к","е","н","г","ш","щ","з","х","ї"],
            middleRow: ["ф","і","в","а","п","р","о","л","д","ж","є"],
            bottomRow: ["я","ч","с","м","и","т","ь","б","ю","."]
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};

flag = false;
while (flag === false){
    var language = prompt("Выберите язык: en-0, ru-1, ua-2", '');
    if ((language === "0") || (language === "1") || (language === "2") || (language === null)){
        flag = true;
    }
    else {
        alert("Выбран недоступный язык");
    }
}

let i = Object.keys(keyboard.layouts);
let j = Object.values(keyboard.layouts);
keyboard.currentLang = i[language];
console.log("Вы выбрали " + i[language] + " язык");
var result = Object.values(j[language]);
console.log("Выбранная раскладка - " + result);

function getRandCharInAlph(){
    let randomItem = result[Math.floor(Math.random()*result.length)][Math.floor(Math.random()*result.length)];
    return randomItem;
}

console.log("Случайный символ из выбраной раскладки - " + getRandCharInAlph());