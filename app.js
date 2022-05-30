const express = require('express');
const cors = require('cors')
const employee = require('./Api/Routes/employeeRoutes')
const user = require('./Api/Routes/user')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// routes here
app.use('/api/employee', employee);
app.use('/api/user', user);

// to handle unkown route requests
app.use('*', (req, res) => {
    return res.status(404).json({
        error: true,
        message: 'Error, Request Not Found',
        data: null
    })
});

// to handle all errors
app.use((error, req, res, next) => {
    res.status(500).json({ error: error.message });
})

module.exports = app;