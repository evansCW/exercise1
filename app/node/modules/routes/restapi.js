
module.exports = function(app){

    var Employee = require('../db/employees');

    //
    // Generate a list of all employees
    //
    var listAllEmployees = function(req, res){
        //Employees.find({'name' : { $regex: req.param('filter'), $options: 'i' } },function(err, employees) {
        Employee.find({},function(err, employees) {
            if ( err ) {
                res.send(err);
            } else {
                res.send(employees);
            }
        });
    };

    //
    // Get a list of all employees.
    //
    app.get('/employees', listAllEmployees);

};

