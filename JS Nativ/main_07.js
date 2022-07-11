//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

//6. Реализуйте функцию, котрая принимает параметрами две строки. Если все символы второй строки содержаться в первой - возвращает true, если нет - возвращает fasle. Проверка проводится без учёта регистра.
// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// every()

// 1
const repeatString = (string, n, raz) => {
    const a = (string+raz).repeat(n)
    return a.slice(0, -1)
}

console.log(repeatString("yo", 7, " "))

// 2
const checkStart = (string, str) =>{
    const a = string.toLowerCase()
   const  b = str.toLowerCase()
    if (a.startsWith(b)){
        return true
    }
    else return false
}

console.log(checkStart("Incubator", "inc"))

// 3
const truncateString = (string, n)=>{
    const a = string.slice(0, n)
    return a + '...'
}

console.log(truncateString("Hello my friends", 8))

// 4
const getMinLengthWord = (string)=>{
    if (string){
        const a = string.split(" ", 1)
        return String(a)
    } else return null
}

console.log(getMinLengthWord(""))

// 5
const setUpperCase = (string)=>{
    const a = string.split(" ")
    const b =[]
    for (i=0; i<a.length; i++){
        let d = (a[i][0].toUpperCase() + a[i].slice(1).toLowerCase())
        b.push(d)
    }
    return b.join(' ')
}
console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))

// 6
const isIncludes = (string, str)=>{

}

console.log(isIncludes("Incubator", "Cut"))


function rakeGarden(x) {
    let s = x.split(' ')
    let newArray = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'gravel') {
            newArray.push('gravel')
        }
         else if (s[i] === 'rock') {
            newArray.push('rock')
        }
        else newArray.push('gravel')
    }
        return newArray
}

garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
console.log(rakeGarden(garden))

function rakeGarden(garden) {
    let s = garden.split('')
    let newArray = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'gravel') {
            newArray.push('gravel')
        }
        else if (s[i] === 'rock') {
            newArray.push('rock')
        }
        else newArray.push('gravel')
    }
    return newArray
}

function vaporcode(string) {
    let newArray = []
    let a = string.toUpperCase().split('')
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== " ") {
            newArray.push(" " + a[i] + " ")
        } else newArray.push("")
    }
    let b = newArray.join('')
    return b.trim()
}

console.log(vaporcode("Why isn't my code working?"))


function gimme (triplet) {
    let newArray = [...triplet].sort(( a, b )=> a > b ? 1: -1)
    let win = newArray[1]
    for (let i = 0; i < triplet.length; i++) {
        if (win === triplet[i]){
            return i
        }
    }
}

console.log(gimme([5,1,10]))