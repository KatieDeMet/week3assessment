let restBtn = document.querySelector('#restaurantBtn');
let restArray = ["Dockside 'N Duck", "Crispy Duck", "Cravings"];

function recommend(arr) {
    let random = Math.floor(Math.random() * arr.length);
    console.log(random);
    let recommendation = restArray[random];
    console.log(recommendation);
    alert(`We recommend you visit ${recommendation} today!`);
}

restBtn.addEventListener('click', () => recommend(restArray));