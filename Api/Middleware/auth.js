
const jwt = require('jsonwebtoken')
const authenticateUser = (req, res, next) => {
    const token = req.header('Authorization')
    if (!token) {
        return res.status(400).json({ error: true, message: 'Authorization missing' })
    }
    jwt.verify(token, process.env.TOKEN_KEY, (error, decoded) => {
        if (decoded) {
            req.payload = decoded
            return next()
        }
        return res.status(400).json({error:true, message: error })
    })
}
module.exports = authenticateUser