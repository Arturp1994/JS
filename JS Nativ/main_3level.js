

замыкание

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

function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
}

// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

const sum = (a)=>{
   return function (b) {
       return a + b
   }
}
console.log(sum(3)(2))

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:

const makeCounter =()=>{
    let a = 0
    return ()=>{
       return  a=a+1
    }
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
const counter2 = makeCounter();
console.log(counter2()); // 1
console.log(counter()); // 3

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
// export default () => {};


