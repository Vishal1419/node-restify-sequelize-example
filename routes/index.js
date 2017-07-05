var utility = require('../utility');
var validationSchema = require('../validation/validation_schema');
var indexController = require('../controllers/indexController');

module.exports = function (server, User) {

    server.get('/', function(req, res, next) {
        
        indexController.getAllUsers(User, function(err, result){
            if(err) {
                return res.send(err);
            } else {
                return res.send(result);
            }
        });

    });

    //second parameter is used to validate the incoming data. By default second parameter is true 
    //which means second parameter is optional, which implies that if you pass only two parameters
    //then second parameter will be ignored. If three parameters are specified then second parameter
    //should be either true or false or an expression or function that returns boolean. If value of
    //second parameter is false in any way then third parameter will not be executed. 
    server.post('/', utility.validateRequest(validationSchema.user), function(req, res, next) {

        var lastname = req.body.lastName;
        var firstname = req.body.firstName;

        var data = {
            LastName : lastname,
            FirstName : firstname
        }

        indexController.saveNewUser(User, data, function(err, result){
            if(err) {
                return res.send(err);
            } else {
                return res.send(result);
            }
        });
    });

    server.put('/:id', utility.validateRequest(validationSchema.user), function(req, res, next) {

        var id = req.params.id;
        var lastname = req.body.lastName;
        var firstname = req.body.firstName;

        var newData = {
            LastName: lastname,
            FirstName: firstname
        }

        indexController.updateUser(User, id, newData, function(err, result) {
            if(err) {
                return res.send(err);
            } else {
                return res.send(result);
            }
        });

    });

    server.del('/:id', function(req, res, next) {

        var id = req.params.id;

        indexController.deleteUser(User, id, function(err, result) {
            if(err) {
                return res.send(err);
            } else {
                return res.send(result);
            }
        });

    });

    return this;

};