const colorBtn = document.querySelector('#color');

const placeBtn = document.querySelector('#place');

const ritualBtn = document.querySelector('#ritual');

const resItalian = document.querySelector('#italian');

const resHomestyle = document.querySelector('#homestyle');

const resCheeseSteak = document.querySelector('#cheeseSteak');

const resSub = document.querySelector('#subs')

const randBtn = document.querySelector('#random')

const restrauntArr = [resHomestyle, resItalian, resCheeseSteak, resSub]


const colorBtnAlert = () => {
    alert('My favorite color is pink')
}

const placeBtnAlert = () => {
    alert('My favorite place is Japan')
}
const ritualBtnAlert = () => {
    alert('My favorite ritual is stretching')
}





colorBtn.addEventListener('click', colorBtnAlert);

placeBtn.addEventListener('click', placeBtnAlert);

ritualBtn.addEventListener('click', ritualBtnAlert);

randBtn.addEventListener('click', randomRes);