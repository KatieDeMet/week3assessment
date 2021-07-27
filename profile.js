let color = document.querySelector('#color');
let place = document.querySelector('#place');
let ritual = document.querySelector('#ritual');

function sendAlert(event) {
    let type = event.target.value;
    if(type === 'color') {
        alert("My favorite color is rainbow!")
    } else if(type === 'place') {
        alert("My favorite place is home!")
    } else {
        alert("My favorite ritual is snuggling before bed!")
    }
}

let button = document.querySelectorAll('.favoriteButton');
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', sendAlert);
}