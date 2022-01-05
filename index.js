const enterEl = document.querySelector("#entering");
const btnEnter = document.querySelector('#increment-btn');
const btnSave = document.querySelector('#save-btn');
const saveEl = document.querySelector('#save-p');
let count = 0;

function increment(){
	count = count + 1;
	enterEl.textContent = count;
}
btnEnter.addEventListener('click',increment);

function save(){
let countStr = count + ' - '	
	saveEl.textContent += countStr
	count=0;
}

btnSave.addEventListener('click',save);
