console.log(2+2);
var elementone = document.getElementById("name");

function Art(){
    elementone.className = 'error'
}

elementone.addEventListener('keyup',Art);