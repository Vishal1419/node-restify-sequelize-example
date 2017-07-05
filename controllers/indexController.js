function indexController() {};

indexController.getAllUsers = function(User, callback) {
    
    User.findAll({}).then(function (data) {
            callback(null, data);
        })
        .catch(function(err){
            callback(err, null);
        });

}

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

indexController.updateUser = function(User, id, newData, callback) {

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

indexController.deleteUser = function(User, id, callback) {

    User.findById(id).then(function(user){

        if(user) {
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