//замыкание

function counterCreator() {
    let count= 0
    return ()=>{
        console.log(++count)
    }
}

const counter = counterCreator()

counter()


//рекурсия

const pow = (x, y)=>{
    if (x==y){
        return x
    } else {
        return x * pow(x, y-1)
    }
}

pow(2,3)

//факториал через рекурсию

const Factorial = (x)=>{
    return (x===1)? x : x * Factorial(x-1)
}
console.log(Factorial(3))//120