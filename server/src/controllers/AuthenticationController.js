const User = require('../models/User')

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
        } catch (error) {
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }
    },
    async login (req, res) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })

            if(!user){
                res.status(403).send({
                    error: 'Incorrect email or password.'
                })
            } 

            const isPasswordValid = password === user.password 
            if(!isPasswordValid){
                res.status(403).send({
                    error: 'Incorrect email or password.'
                })
            } 

            res.send(user.toJSON())
        } catch (error) {
            res.status(400).send({
                error: 'Incorrect email or password.'
            })
        }
    },
    async getUsers(req, res) {
        await User.findAll()
        .then(users => {
            res.send(users)
            // console.log(JSON.stringify(users))
        })
        .catch(error => {
            res.status(404).send(`Error: ${error}`)
        })
    }
}