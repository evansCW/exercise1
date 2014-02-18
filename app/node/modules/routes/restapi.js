
module.exports = function(app){

    var Employee = require('../db/employees');

    //
    // Generate a list of all employees
    //
    var listAllEmployees = function(req, res){
        Employee.find({},function(err, employees) {
            if ( err ) {
                res.send(err);
            } else {
                res.send(employees);
            }
        });
    };

    //
    // Get the data for a single employee based on employee ID.
    //
    var getEmployee = function(req, res) {
        Employee.findOne({_id: req.param('id')},function(err, employee) {
            if ( err ) {
                res.send(err);
            } else {
                res.send(employee);
            }
        });
    }

    //
    // Get a list of all employees.
    //
    app.get('/employees', listAllEmployees);

    //
    // Get the data associated with a single employee.
    //
    app.get('/employee/:id', getEmployee);

};

