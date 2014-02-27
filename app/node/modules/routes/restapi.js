
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
        Employee.findOne({_id: req.param('id')}, function(err, employee) {
            if ( err ) {
                res.send(err);
            } else {
                res.send(employee);
            }
        });
    }

    var getEmployeeByEmail = function(req, res) {
        Employee.findOne({email: req.param('email')}, function(err, employee) {
            if ( err || !employee ) {
                res.send(404, "Employee not found");
            } else {
                res.send(employee);
            }
        });
    }

    var addEmployee = function(req, res) {
        var employee = new Employee({
                status: req.body.status,
                name: req.body.name,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip,
                phone: req.body.phone,
                company: req.body.company,
                email: req.body.email,
                companyFax: req.body.companyFax,
                companyAddress: req.body.companyAddress,
                companyCity: req.body.companyCity,
                companyState: req.body.companyState,
                companyZip: req.body.companyZip,
                hireDate: req.body.hireDate,
                tags: []
        });
        return employee.save(function(err) {
            if ( err ) {
                res.send({reason: err.toString()});
            }
            res.send(employee);
        });
    }

    //
    // Update an existing employy's data based on a form post.
    //
    var updateEmployee = function(req, res) {

        Employee.findOne({_id: req.body._id}, function(err, employee) {
            if ( err ) {
                res.send(err);
            } else {
                employee.status = req.body.status;
                employee.name = req.body.name;
                employee.address = req.body.address;
                employee.city = req.body.city;
                employee.state = req.body.state;
                employee.zip = req.body.zip;
                employee.phone = req.body.phone;
                employee.company = req.body.company;
                employee.email = req.body.email;
                employee.companyFax = req.body.companyFax;
                employee.companyAddress = req.body.companyAddress;
                employee.companyCity = req.body.companyCity;
                employee.companyState = req.body.companyState;
                employee.companyZip = req.body.companyZip;
                employee.hireDate = req.body.hireDate;
                employee.tags = req.body.tags;
                return employee.save(function(err) {
                    if ( err ) {
                        res.send({reason: err.toString()});
                    }
                    res.send(employee);
                });
            }
        });

    }

    //
    // Remove a employee if found in the database.
    //
    var deleteEmployee = function(req, res) {
        return Employee.findOne({_id: req.param('id')}, function(err, employee) {
            if ( err ) {
                res.send(err);
            } else {
                return employee.remove(function(err) {
                    if ( err ) {
                        res.send(err);
                    } else {
                        res.send(employee);
                    }
                });
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

    //
    // Add an employee to the database.
    //
    app.post('/employee/add', addEmployee);

    //
    // Lookup an existing employee by email address.
    //
    app.get('/employee/email/:email', getEmployeeByEmail);

    //
    // Update an existing employee
    //
    app.put('/employees', updateEmployee);

    //
    // Delete an employee
    //
    app.delete('/employee/:id', deleteEmployee);

};

