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

console.log(2+2)


//////2 ЗАНЯТИЕ

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 128,
    },
]

const addScores = (arr) => {
    const result =[]
    const func = (st) => ({...st, scores: st.scores +10})
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i])
        result.push(newValue)
    }
    return result
}

const addPropsStudent = (arr) => {
    const result =[]
    const func = (st) => ({...st, isStudent: true})
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i])
        result.push(newValue)
    }
    return result
}

const getMappedArray = (arr, func) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i])
        result.push(newValue)
    }
    return result
}
console.log(getMappedArray(students, (st) => st.name))
console.log(students.map((st)=>st.name))

console.log(students.filter(st => st.scores > 100))