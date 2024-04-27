//-----------------------------card section
let card = document.querySelectorAll('.card');
for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('touchstart',handler);
    function handler(event){
        event.backgroundColor='gold';
    }
}
//-------------------------- counter-projhect
let buttons = document.querySelector(".buttons");
let currentNumber = document.querySelector(".number");
let newNumber;
buttons.firstElementChild.addEventListener("click",function(){
    newNumber=Number(currentNumber.innerHTML)+1;
    currentNumber.innerHTML=newNumber;
});

buttons.lastElementChild.addEventListener("click",function() {
    newNumber=Number(currentNumber.innerHTML)-1;
    currentNumber.innerHTML=newNumber;
});
buttons.children[1].addEventListener("click",function() {
    currentNumber.innerHTML=0;
})
//----------------------------random-color-project
let randomBtn = document.querySelector(".randomBtn");
let randomdiv = document.querySelector(".random-color");
let counthead = document.querySelector('#counthead')
function randomNum(){
    return Math.floor(Math.random()*256);
}
function randomRGB(){
    return `rgb(${randomNum()},${randomNum()},${randomNum()})`
}
randomBtn.addEventListener("click",function(){
    randomdiv.style.backgroundColor=randomRGB();
    counthead.style.color=randomRGB();
});