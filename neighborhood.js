const resItalian = document.querySelector('#italian');

const resHomestyle = document.querySelector('#homestyle');

const resCheeseSteak = document.querySelector('#cheeseSteak');

const resSub = document.querySelector('#subs')

const randBtn = document.querySelector('#random')

const restrauntArr = [resHomestyle, resItalian, resCheeseSteak, resSub]


const random = () => {
    const restrauntArr = [resHomestyle, resItalian, resCheeseSteak, resSub]
    let link = restrauntArr[Math.random() * restrauntArr.length | 0]
    alert(link.textContent)
}


randBtn.addEventListener('click', random);