let keyboard = {
	topRow: ["q","w","e","r","t","y","u","i","o","p"],
	middleRow: ["a","s","d","f","g","h","j","k","l"],
	bottomRow: ["z","x","c","v","b","n","m"]
};

function createLayout(){
	var keyObj = Object.keys(keyboard);
	var valObj = Object.values(keyboard);
	for(var i=0; i<valObj.length; i++){
		var container = document.createElement("div");
		container.id = keyObj[i];
			for(var j=0; j<valObj[i].length; j++){
				var btn = document.createElement("button");
				var t = document.createTextNode(valObj[i][j]);
				btn.appendChild(t);
				container.appendChild(btn);
			}
		document.body.appendChild(container);
	}	
}

createLayout();
console.log((Object.values(keyboard)).length);