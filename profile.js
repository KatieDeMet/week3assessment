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

color.addEventListener('click', sendAlert);
place.addEventListener('click', sendAlert);
ritual.addEventListener('click', sendAlert);