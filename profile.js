const colorBtn = document.querySelector('#color');

const placeBtn = document.querySelector('#place');

const ritualBtn = document.querySelector('#ritual');



// const colorBtnAlert = () => {
//     alert('My favorite color is pink')
// }

// const placeBtnAlert = () => {
//     alert('My favorite place is Japan')
// }
// const ritualBtnAlert = () => {
//     alert('My favorite ritual is stretching')
// }

const alertMessage = (e) => alert(`My favorite ${e.target.id} is ${e.target.value}`)



colorBtn.addEventListener('click', alertMessage);

placeBtn.addEventListener('click', alertMessage);

ritualBtn.addEventListener('click', alertMessage);
