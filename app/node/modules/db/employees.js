
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var employeeSchema = new Schema({
    "name": String,
    "address": String,
    "city": String,
    "state": String,
    "zip": String,
    "phone": String,
    "company": String,
    "email": String,
    "companyFax": String,
    "companyAddress": String,
    "companyCity": String,
    "companyState": String,
    "companyZip": String,
    "hireDate": Date
});

module.exports = mongoose.model('Employees', employeeSchema);