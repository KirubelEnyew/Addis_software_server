const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
})

const EmployeeModel = mongoose.model('employee', employeeSchema);

const addEmployee = (newEmployee) =>
    EmployeeModel(newEmployee).save()
        .then(() => { return { error: false, message: 'Registration successfull' } })
        .catch((error) => { return { message: error, error: true } })

const deleteEmployee = (id) =>
    EmployeeModel.deleteOne({ _id: id })
        .then(() => { return { error: false, message: 'Employee Removed Successfully' } })
        .catch((error) => { return { message: error, error: true } })

const updateEmployee = (empInfo) =>
    EmployeeModel.findByIdAndUpdate(empInfo.id, empInfo)
        .then(() => { return { error: false, message: 'Employee info Updated' } })
        .catch((error) => { return { message: error, error: true } })

exports.EmployeeModel = EmployeeModel;
exports.addEmployee = addEmployee
exports.deleteEmployee = deleteEmployee
exports.updateEmployee = updateEmployee