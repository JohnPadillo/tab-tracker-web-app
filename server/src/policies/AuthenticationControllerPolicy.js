const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = {
            name: Joi.string(),
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }

        const { error } = Joi.validate(req.body, schema)
        console.log(error)

        if(error) {
            // res.send(error)
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address.'
                    })
                    break;
                case 'password':
                    res.status(400).send({
                        error: `Password must provide the following rules. 
                        <br>
                        1. Password must be at least 8 characters and maximum of 32 characters.
                        <br>
                        2. Password must contain: Lower Case, Upper Case and Numerics.
                        `
                    })
                    break;
                default: 
                res.status(500).send({
                    error: 'Invalid Registration Information'
                })
            }
        } else {
            next()
        }

    }
}