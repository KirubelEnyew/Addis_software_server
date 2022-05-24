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
exports.validation = validator