var ExampleResponse = require('../validation/exampleResponse');
var constants = require('../validation/constants');

module.exports = {

    //function to get all users from database 
    getAllUsers : function(req, res) {
        
        //findAll will return all the users
        User.findAll({}).then(function (data) {
                return res.send(data);
            })
            .catch(function(err){
                return res.send(err);
            });

    },

    //function to save new user to database
    saveNewUser : function(req, res) {

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

    },

    //function to update existing user by id in database
    updateUser : function(req, res) {

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
    deleteUser : function(User, id, callback) {

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