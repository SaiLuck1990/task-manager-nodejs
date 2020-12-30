const { MongoClient, ObjectID } = require('mongodb')
// Connection url
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'task-manager';

// Connect using MongoClient

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {

    if (err) {
        return console.log('Things went wrong')
    }

    const db = client.db(dbName)

    db.collection('users').findOne({ name: 'Sheldon' }, (error, user) => {
        console.log(user)
    })

    db.collection('users').find({ age: '40' }).toArray((error, users) => {
        console.log(users)
    })

    db.collection('users').updateOne({
        _id: new ObjectID("5fe21f757ddda6075527600f")
    }, {
        $set: {
            name: 'Mike'
        }
    }).then((result) => {
        console.log('Update is successful' + result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection('users').deleteMany({
        age: '40'
    }).then((result) => {
        console.log('Delete is successful' + result)
    }).catch((error) => {
        console.log('Error' + error)
    })


    // db.collection('users').insertMany([
    //     {
    //         name: 'Sheldon',
    //         age: '40'
    //     },
    //     {
    //         name: 'Leonard',
    //         age: '50'
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Renew the inspection',
    //         completed: true
    //     },
    //     {
    //         description: 'Pot plants',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks')
    //     }
    //     console.log(result.ops)
    // })

});