//Promise


axios.get('http://vk.com/users', (err,data)=>{
    if(err){
        console.log(err)
    } else {
        console.log(data)
    }
})


const promise = new Promise ((resolve, reject)=>{
    resolve()
})

promise.then(
    (data)=>{console.log(data)}, //вызывается в полож случае resolve
    (err)=>{}//вызывается в отриц случае reject
)

promise.catch(
    (err)=>{}//только отрицат результат
)

promise.finally(()=>{})//вызывается в любом случае


const getUsers = async ()=>{
    try{
        const users = await axiosWithPromise.get('http://vk.com/users')
        const books = await axiosWithPromise.get('http://vk.com/users/books')
    } catch (e){
        console.log(e)
    }
}