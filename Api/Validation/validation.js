const joi = require('joi')

const validator = (employee) => {
    const validationSchema = joi.object({
        name: joi.string().required(),
        dateOfBirth: joi.string().required(),
        gender: joi.string().required().valid('male', 'female', 'other'),
        salary: joi.number().required()
    })
    return validationSchema.validate(employee)
}


const validateUser = (newUser) => {
    const validationSchema = joi.object({
        fullName: joi.string().required().min(2),
        email: joi.string().email().required(),
        password: joi.string().required()
    })
    return validationSchema.validate(newUser)
}


exports.validation = validator
exports.validateUser = validateUser