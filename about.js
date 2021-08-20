console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted sucessfully!');
}

const picCompliment = () => {
	alert('😉👍 Lookin Good!')
}


let form = document.querySelector('form#contact');

const catPicture = document.querySelector("#cat-pic")

form.addEventListener('submit', handleSubmit);

catPicture.addEventListener('mouseover', picCompliment)