console.log("hello world");

let form = document.querySelector('form#contact');
let pic = document.querySelector('#bananaDuck');

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your form has been submitted successfully.');
}

function hoverOverPic() {
	alert("You're so beautiful!");
}

pic.addEventListener('mouseover', hoverOverPic)
form.addEventListener('submit', handleSubmit);