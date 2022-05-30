const { EmployeeModel, addEmployee, deleteEmployee, updateEmployee } = require('../Model/employee')
const route = require('express').Router()
const { employeeValidator } = require('../Middleware/validator');
const authenticateUser = require('../Middleware/auth');

//route to get a list of all employees
route.get('/getEmployees',authenticateUser ,async (req, res) => {
    const employee = await EmployeeModel.find()
    if (employee) {
        return res.status(200).json({ error: false, message: 'Employees fetched successfully', data: employee })
    }
    return res.status(204).json({ error: false, message: 'No records found', data: [] })
});

// route to register a new employee
route.post('/registerEmployee',[authenticateUser, employeeValidator], async (req, res) => {
    const { error, message } = await addEmployee(req.body)
    if (error) {
        return res.status(500).json({ message: 'Failed to add employee', error })
    }
    return res.status(201).json({ message, error, data: null })
})

// route to delete existing employee
route.delete('/removeEmployee',authenticateUser , async (req, res) => {
    const { error, message } = await deleteEmployee(req.query.id)
    if (error) {
        return res.status(500).json({ message: "Failed to remove employee", error })
    }
    return res.status(200).json({ message, error })
})

// route to update existing employee data
route.patch('/updateEmployee', [authenticateUser, employeeValidator], async (req, res) => {
    const { error, message } = await updateEmployee(req.body)
    if (error) {
        return res.status(500).json({ message: "Failed to remove employee", error })
    }
    return res.status(200).json({ message, error })
})

module.exports = route