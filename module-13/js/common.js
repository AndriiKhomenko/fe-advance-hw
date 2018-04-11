const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");
const inputs = document.getElementsByClassName("validate");
let objResult = {};
let dataOfUser = {};


function validate(e) {
	e.preventDefault();
  objResult.flagFirstName = inputs[0].checkValidity();
  objResult.flagLastName = inputs[1].checkValidity();
  objResult.flagTel = inputs[2].checkValidity();

  if(inputs[0].checkValidity()){
  	dataOfUser.firstName = inputs[0].getAttribute("placeholder") + " - " + inputs[0].value;
  } else {
  	dataOfUser.firstName = inputs[0].getAttribute("placeholder") + " - failed validation";
  };

  if(inputs[1].checkValidity()){
  	dataOfUser.secondName = inputs[1].getAttribute("placeholder") + " - " + inputs[1].value;
  } else {
  	dataOfUser.secondName = inputs[1].getAttribute("placeholder") + " - failed validation";
  };

  if(inputs[2].checkValidity()){
  	dataOfUser.tel = inputs[2].getAttribute("placeholder") + " - " + inputs[2].value;
  } else {
  	dataOfUser.tel = inputs[2].getAttribute("placeholder") + " - failed validation";
  };

  console.log(objResult);

}

function showResults() {
	for(let key in dataOfUser){
		let liElement = document.createElement("li");
		liElement.textContent = dataOfUser[key];
		resultsList.appendChild(liElement);
	}
}

submitBtn.addEventListener("click", validate);
submitBtn.addEventListener("click", showResults);