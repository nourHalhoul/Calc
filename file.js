const num = document.querySelectorAll('#number');
const result = document.getElementsByClassName('result');
for (let i = 0; i < num.length - 1; i++)
{
    num[i].addEventListener('click', () => { if (result[0].textContent == 0) { result[0].textContent = ''; }; result[0].textContent += num[i].textContent });
};

const add = document.getElementsByClassName('add');
const subtract = document.getElementsByClassName('subtract');
const multiply = document.getElementsByClassName('multiply');
const divide = document.getElementsByClassName('divide');

add[0].addEventListener('click', () => { digit1 = result[0].textContent; result[0].textContent = 0; flip = add; });
subtract[0].addEventListener('click', () => { digit1 = result[0].textContent; result[0].textContent = 0; flip = subtract; });
multiply[0].addEventListener('click', () => { digit1 = result[0].textContent; result[0].textContent = 0; flip = multiply; });
divide[0].addEventListener('click', () => { digit1 = result[0].textContent; result[0].textContent = 0; flip = divide; });

num[num.length - 1].addEventListener('click', () =>
{
    digit2 = result[0].textContent;
    if (flip === add)
    {
        result[0].textContent = +digit1 + +digit2;
    }
    else if (flip === subtract)
    {
        result[0].textContent = +digit1 - +digit2;
    }
    else if (flip === multiply)
    {
        result[0].textContent = +digit1 * +digit2;
    }
    else if (flip === divide)
    {
        result[0].textContent = +digit1 / +digit2;
    }
});

const clear = document.querySelector('#numberClear');
clear.addEventListener('click', () => { flip = ''; result[0].textContent = 0; digit1 = 0; digit2 = 0; });


let flip;
let digit1 = 0;
let digit2 = 0;

//comment
//comment
//comment
//comment