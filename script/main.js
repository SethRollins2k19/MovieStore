function addHoverTo(tagName){
	let tags = document.querySelectorAll(tagName);
	
}
function randMathNumber() {
	let lastIndex = Math.floor(Math.random()*60+40);
	let usingArray = generateMassive(lastIndex);
	let inputNumber;
	while(true){
		inputNumber = Number(prompt('Введите порядковый номер от 1 до '+lastIndex,10));
		if(inputNumber<1){
			alert("Число не может быть ниже нуля")
		} else if(inputNumber>lastIndex) {
			alert("Число не может быть больше " + lastIndex)
		} else {
			break;
		}
	}
	alert(usingArray[inputNumber-1]);
}

function generateMassive(fromNum){
	let massive = [];
	for(let i = 0; i <fromNum;i++){
		massive.push(Math.floor(Math.random()*100));
	}
	return massive;
}
randMathNumber();