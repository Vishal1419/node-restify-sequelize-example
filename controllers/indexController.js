function indexController() {};

//function to get all users from database 
indexController.getAllUsers = function(User, callback) {
    
    //findAll will return all the users
    User.findAll({}).then(function (data) {
            callback(null, data);
        })
        .catch(function(err){
            callback(err, null);
        });

}

//function to save new user to database
indexController.saveNewUser = function(User, data, callback) {

    var newUser = User.build(data);

    newUser
        .save()
        .then(function(result) {
            callback(null, result);
        })
        .catch(function(err) {
            callback(err, null);
        });

}

//function to update existing user by id in database
indexController.updateUser = function(User, id, newData, callback) {

    //findById will only give the first match if it gets more than one matches 
    User.findById(id).then(function(user){
        if(user) {
            user.LastName = newData.LastName;
            user.FirstName = newData.FirstName

            user.save()
                .then(function(data) {
                    callback(null, data);
                })
                .catch(function(err){
                    callback(err, null);
                });
        } else {
            callback("invalid id", null);
        }
    });

}

//function to delete user by id from database
indexController.deleteUser = function(User, id, callback) {

    User.findById(id).then(function(user){

        if(user) {
            //destroy function will delete the data
            user.destroy().then(function(data) {
                callback(null, data);
            }).catch(function(err) {
                callback(err, null);
            });
        } else {
            callback("invalid id", null);
        }

    });

}

module.exports = indexController;