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
                return res.send(data);
            })
            .catch(function(err) {
                return res.send(err);
            });
    });

    server.put('/:id', utility.validateRequest(validationSchema.user), function(req, res, next) {

        var id = req.params.id;
        var lastname = req.body.lastName;
        var firstname = req.body.firstName;

        User.findById(id).then(function(user){
            if(user) {
                user.LastName = lastname;
                user.FirstName = firstname

                user.save()
                    .then(function(data) {
                        return res.send(data)
                    })
                    .catch(function(err){
                        return res.send(err);
                    });
            } else {
                return res.send("Invalid id");
            }
        });

    });

    server.del('/:id', function(req, res, next) {

        var id = req.params.id;

        User.findById(id).then(function(user){

            user.destroy().then(function(data) {
                return res.send(data);
            }).catch(function(err) {
                return res.send(err);
            });

        });

    });

    return this;

};