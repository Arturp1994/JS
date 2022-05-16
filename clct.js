let buttonplus = document.getElementById('plus');
let buttonminus = document.getElementById('minus');
let buttonmultiply = document.getElementById('multiply');
let buttondevide = document.getElementById('devide');
let a = document.getElementById('artur');

function onButtonPlusClick(){
    console.log('onButtonPlusClick');
}
function onButtonMinusClick(){
    console.log('onButtonMinusClick');
}
function onButtonMultiplylick(){
    console.log('onButtonMultiplylick');
}
function onButtonDevideClick(){
    console.log('onButtonDevideClick');
}

console.log(2+2);
console.log(a.className);

buttonminus.addEventListener('click', onButtonMinusClick );
buttonmultiply.addEventListener('click', onButtonMultiplylick );
buttondevide.addEventListener('click', onButtonDevideClick );