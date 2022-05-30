const { validation, validateUser } = require('../Validation/validation')

const employeeValidator = (req, res, next) => {
    const { name, dateOfBirth, gender, salary } = req.body
    const valid = validation({ name, dateOfBirth, gender, salary })
    if (valid.error) {
        return res.status(400).json({ error: true, message: 'Error, invalid data sent' })
    }
    return next()
}

const userValidator = (req, res, next) => {
    const valid = validateUser(req.body)
    if (valid.error) {
        return res.status(400).json({ error: true, message: 'Error, invalid data sent' })
    }
    return next()
}

exports.employeeValidator = employeeValidator
exports.userValidator = userValidator