// const user = { // #003
//     name: "Bob",
//     age: 26,
//     isMarried: true,
//     friends: ["Alex", "Bob", "John"]
//     address: {
//         city: "Bobruisk"
//         street: "Lenina"
//     }
// }
// const students = [
//     {name: 'Bob'},
//     {name: 'Alex'},
//     {name: 'Ann'},
// ]

// const copyUser = user
//
// user.name = "Anne"
// console.log(copyUser.name)
//
// const realCopyUser = {...user} // создание нового объекта
// // realCopyUser.name = user.name
// // realCopyUser.age = user.age
// // realCopyUser.isMarried = user.isMarried
//
// console.log(realCopyUser)
//
// console.log(realCopyUser===user) // false
// console.log(copyUser===user) //true
// realCopyUser.name = "Viktor"
// console.log(copyUser.name)

// const copyUser = {...user} // #007
// copyUser.friends.push("Anna")
// console.log(user === copyUser) //false
// console.log(user.friends === copyUser.friends) //true (есть вложенность то ссылка на один и тот же объект)
//
// const deepCopy = {...user, friends: [...user.friends]} // новый массив со всеми вложенностями
//
// const deepCopy2 = {...user, friends: [...user.friends],address: {...user.address} }
// const deepCopy3 = [...students]
//
// const deepCopy4 = []
// for (let i =0, i<students.length; i++) {
//     deepCopy4[i]= {...students[i]}
// }
//
// const deepCopy5 = students.map(student => {
//   return {...students}
// })
//
// console.log(2+2)
//
//
// //////2 ЗАНЯТИЕ
//
// const students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85,
//     },
//     {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89,
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 128,
//     },
// ]
//
// const addScores = (arr) => {
//     const result =[]
//     const func = (st) => ({...st, scores: st.scores +10})
//     for (let i = 0; i < arr.length; i++) {
//         const newValue = func(arr[i])
//         result.push(newValue)
//     }
//     return result
// }
//
// const addPropsStudent = (arr) => {
//     const result =[]
//     const func = (st) => ({...st, isStudent: true})
//     for (let i = 0; i < arr.length; i++) {
//         const newValue = func(arr[i])
//         result.push(newValue)
//     }
//     return result
// }
//
// const getMappedArray = (arr, func) => {
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         const newValue = func(arr[i])
//         result.push(newValue)
//     }
//     return result
// }
// console.log(getMappedArray(students, (st) => st.name))
// console.log(students.map((st)=>st.name))
//
// console.log(students.filter(st => st.scores > 100))
//

// 4 занятие

// const todoListID_1='aaa'
// const todoListID_2='bbb'
//
//
// const todoList = [
//     {
//         id: todoListID_1,
//         title: "What to learn",
//         filter: "all",
//
//     },    {
//         id: todoListID_2,
//         title: "What to buy",
//         filter: "all",
//
//     },
// ]
//
// const tasks = {
//     [todoListID_1]:[
//         {id:12, title: "JS", isDone:false},
//         {id:13, title: "TS", isDone:false},
//         {id:14, title: "HTML", isDone:false},
//     ],
//     [todoListID_2]:[
//         {id:22, title: "Milk", isDone:false},
//         {id:23, title: "Cheese", isDone:false},
//         {id:24, title: "Ice-cream", isDone:false},
//     ]
// }
//
// //reduce
//
// const nums = [10, 20, 30] // sum
// console.log(nums.reduce((acc,el)=>{
//     acc = acc +el
//     return acc
// }, 0))
//
//
// console.log(nums.reduce((acc, el)=>{
//     if(acc > el){
//         return acc
//     } else{
//         return el
//     }
// }))
//
// let students = [
//     {
//         id:1,
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
//     {
//         id:2,
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         id:3,
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         id:4,
//         name: "John",
//         age: 23,
//         isMarried: false,
//         scores: 100
//     }
// ];
//
// console.log(students.reduce((acc, el)=> acc.scores>el.scores ? acc :el))
//
// console.log(students.reduce((acc, el)=>acc+el.scores, 0))
// console.log(students.reduce((acc, el)=>{
//     acc.push({...el, scores: el.scores+10})
//     return acc
// },[]))
//
// const st = {
//     1:{
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     }
// }
//
// console.log(students.reduce((acc, ell)=>{
//     acc[ell.id]={...ell}
//     delete acc[ell.id].id
//     return acc
// },{}))


//5 занятие

const names = ["Artur", "Bob", "Vlad", "Alex"]

console.log(names.sort())

const number = [100, 99, 665, 1000]

const compFn = (a, b) => {//сортировать по возрастанию
    if (a > b) {
        return 10
    } else {
        return -10
    }
}

console.log(number.sort(compFn))
console.log(number.sort((a, b) => a-b))


let students = [
    {
        id:1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id:2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id:3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id:4,
        name: "John",
        age: 23,
        isMarried: false,
        scores: 100
    }
];

console.log(students.sort((a, b)=>b.scores-a.scores ))
console.log(students.sort((a, b)=>b.scores-a.scores ).reverse())
console.log(students.sort((a, b)=>a.name.localeCompare(b.name)))
console.log(students.sort((a, b)=>a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))


// bubble sort

const nums = [13, 45, 67, 12, 99, 87]
// по возрастанию
for (let j = 0; j < nums.length; j++) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            let temp = nums[i]
            nums[i] = nums[i + 1]
            nums[i + 1] = temp
        }
    }
}
