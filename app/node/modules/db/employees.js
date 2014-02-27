
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var employeeSchema = new Schema({
    "name": { type: String, required: true },
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
    "hireDate": { type: Date, default: Date.now },
    "status": { type: String, default: "ACTIVE", required: true },
    "tags": [String]
});

module.exports = mongoose.model('Employees', employeeSchema);