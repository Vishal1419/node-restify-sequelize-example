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