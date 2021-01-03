const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a<0 || b<0){
                return reject('Numbers must be positive')
            }
            resolve(a + b)
        }, 2000)
    })
}

// Usong asyn and await , you don't have to use then 
const doWork = async () => {
    const sum = await add(5, 6)
    const sum2 = await add(sum,1)
    const sum3 = await add(sum2,-10)
    return sum3
}

doWork().then((result) => {
    console.log(result)
}).catch(e => {
    console.log('Error is '+e)
})

const brcypt = require('bcryptjs')

const myFunction = async() => {
    const pwd = 'password'
    const hashedPwd = await brcypt.hash(pwd , 8)
    console.log(hashedPwd)
    
}


myFunction()

