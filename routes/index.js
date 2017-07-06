var utility = require('../utility');
var validationSchema = require('../validation/validation_schema');
var indexController = require('../controllers/indexController');

module.exports = function (server, User) {

    server.get('/', function(req, res) {
        indexController.getAllUsers(req, res, User);
    });

    //second parameter is used to validate the incoming data. By default second parameter is true 
    //which means second parameter is optional, which implies that if you pass only two parameters
    //then second parameter will be ignored. If three parameters are specified then second parameter
    //should be either true or false or an expression or function that returns boolean. If value of
    //second parameter is false in any way then third parameter will not be executed. 
    server.post('/', utility.validateRequest(validationSchema.user), function(req, res){
        indexController.saveNewUser(req, res, User);
    });

    server.put('/:id', utility.validateRequest(validationSchema.user), function(req, res){
        indexController.updateUser(req, res, User);
    });

    server.del('/:id', function(req, res) {
        indexController.deleteUser(req, res, User);
    });

    return this;

};