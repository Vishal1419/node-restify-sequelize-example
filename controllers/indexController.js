var ExampleResponse = require('../validation/exampleResponse');
var constants = require('../validation/constants');

module.exports = {

    //function to get all users from database 
    getAllUsers : function(req, res, User) {
        
        //findAll will return all the users
        User.findAll({}).then(function (data) {
                return res.send(data);
            })
            .catch(function(err){
                return res.send(err);
            });

    },

    //function to save new user to database
    saveNewUser : function(req, res, User) {

        var fullname_new = req.body.lastName + " " + req.body.firstName;

        User.findAll({}).then(function(users) {
          
            var userAlreadyExists = false;
            users.forEach(function(user) {
                var fullname = user.LastName + " " + user.FirstName;
                if(fullname === fullname_new) {
                    //user already exists.
                    console.log("..........");
                    userAlreadyExists = true;
                    var exampleResponse = new ExampleResponse(res);
                    return exampleResponse.setStatusCode(constants.ERROR_CODES.DUPLICATE_RECORD)
                                          .setResponseBody({"message": constants.ERROR_MSGS.DUPLICATE_USER})
                                          .send();
                }
            }, this);

            if(!userAlreadyExists) {

                var newUser = User.build({
                    LastName: req.body.lastName,
                    FirstName: req.body.firstName
                });

                newUser
                    .save()
                    .then(function(data) {
                        return res.send(result);
                    })
                    .catch(function(err) {
                        return res.send(err);
                    });

            }

        });

    },

    //function to update existing user by id in database
    updateUser : function(req, res, User) {

        var id = req.params.id;

        //findById will only give the first match if it gets more than one matches 
        User.findById(id).then(function(user){
            if(user) {
                user.LastName = req.body.lastName;
                user.FirstName = req.body.firstName;

                user.save()
                    .then(function(data) {
                        return res.send(data);
                    })
                    .catch(function(err){
                        return res.send(err);
                    });
            } else {
                var exampleResponse = new ExampleResponse(res);
                return exampleResponse.setStatusCode(constants.ERROR_CODES.INVALID_ID)
                                      .setResponseBody({"message": constants.ERROR_MSGS.INVALID_ID})
                                      .send();
            }
        });

    },

    //function to delete user by id from database
    deleteUser : function(req, res, User) {

        var id  = req.params.id;

        User.findById(id).then(function(user){

            if(user) {
                //destroy function will delete the data
                user.destroy().then(function(data) {
                    return res.send(data);
                }).catch(function(err) {
                    return res.send(err);
                });
            } else {
                var exampleResponse = new ExampleResponse(res);
                return exampleResponse.setStatusCode(constants.ERROR_CODES.INVALID_ID)
                                      .setResponseBody({"message": constants.ERROR_MSGS.INVALID_ID})
                                      .send();            }

        });

    }

}