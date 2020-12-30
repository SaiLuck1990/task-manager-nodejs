const express = require('express')
const User = require('../models/User')
const router = new express.Router()

router.post('/users', async (req, res) => {


    try {
        const user = new User(req.body)
        await user.save()
        res.status(201).send(user)
    } catch (err) {
        res.status(400).send(err)
    }

})

router.get('/users', async (req, res) => {

    try {
        const users = await User.find()
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'age', 'password', 'age']
    const isValidOperation = updates.every((updates) => allowedUpdates.includes(updates))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const _id = req.params.id
        const user = await User.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true })
        if (!user) {
            return res.status(404).send()
        }

        res.send(user)

    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/users/:id', async (req, res) => {

    try {
        const _id = req.params.id
        const user = await User.findByIdAndDelete(_id)

        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router