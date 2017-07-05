var utility = require('../utility');
var validationSchema = require('../validation_schema');

module.exports = function (server, User) {

    server.get('/', function(req, res, next) {
        User.findAll({}).then(function (data) {
            return res.send(data);
        })
        .catch(function(err){
            return res.send(err);
        });
    });

    server.post('/', utility.validateRequest(validationSchema.user), function(req, res, next) {

        var lastname = req.body.lastName;
        var firstname = req.body.firstName;

        var user = {
            LastName : lastname,
            FirstName : firstname
        }

        var newUser = User.build(user);

        newUser
            .save()
            .then(function(data) {
                res.send(data);
            })
            .catch(function(err) {
                res.send(err);
            });
    });

    server.put('/', function(req, res, next) {
        res.send('made changes to some Data');
    });

    server.del('/', function(req, res, next) {
        res.send('Data deleted');
    });

    return this;

};