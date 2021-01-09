const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const {userOneId , userOne , setUpDatabase} = require('./fixtures/db')


// To make sure that userData gets deleted in Mongo DB
beforeEach(setUpDatabase)

test('Should sign up user', async () => {
    const response = await request(app)
        .post('/users').send({
            name: 'Janani',
            email: 'janani@gmail.com',
            password: 'test1234'
        }).expect(201)

    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()
    expect(response.body.user.name).toBe('Janani')
    expect(response.body).toMatchObject({
        user: {
            name: 'Janani',
            email: 'janani@gmail.com',
        },
        token: user.tokens[0].token

    })
    expect(user.password).not.toBe('test1234')
})

test('Should login existing user', async () => {
    const response = await request(app)
        .post('/user/login').send({
            email: userOne.email,
            password: userOne.password
        }).expect(200)

    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull
    expect(response.body.token).toBe(user.tokens[1].token)
})

test('Should not login non existent user', async () => {
    await request(app)
        .post('/user/login').send({
            email: userOne.email,
            password: 'Wrong'
        }).expect(400)
})

test('Should get profile for user', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Should not get profile for unauthenticated user', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

test('Should delete user when authenticated', async () => {
    const response = await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)

    const user = await User.findById(userOneId)
    expect(user).toBeNull
})

test('Should  not delete user when not authenticated', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})

test('Should upload avatar image', async () => {
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .attach('avatar', 'test/fixtures/MyPhoto.jpeg')
        .expect(200)

    const user = await User.findById(userOneId)
    expect(user.avatar).toEqual(expect.any(Buffer))
})

test('Should update with valid user fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name: 'Janani Kumar'
        })
        .expect(200)

    const user = await User.findById(userOneId)
    expect(user.name).toEqual('Janani Kumar')
})

test('Should not update with invalid user fields', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            location: 'London'
        })
        .expect(400)

})


