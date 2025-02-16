const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({
    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    email: { type: String, require: true },
    gender: { type: String, require: true },
    designation: { type: String, require: true },
    salary: { type: Number, require: true },
    date_of_joining: { type: Date, default: Date.now, require: true },
    department: { type: String, require: true },
    employee_photo: { type: String,  require: true },
    created_at: { type: Date, default: Date.now, require: true },
    updated_at: { type: Date, default: Date.now, require: true },
})

module.exports = mongoose.model('Employee', empSchema)