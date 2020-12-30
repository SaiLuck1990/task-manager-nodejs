require('../src/db/mongoose')

const Task = require('../src/models/Task')
const User = require('../src/models/User')

// Task.findByIdAndDelete('5feb861d4736a10cf82b11b3').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5feb58ba0c90ac05eabba5c9').then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})

// const updateAgeAndCount = async (id, age) => {
//     const user = await User.findByIdAndUpdate(id, { age })
//     console.log(user)
//     const count = await User.countDocuments({ age })
//     return count
// }


// updateAgeAndCount('5feb5d006735e106d336b4b4', 500).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })