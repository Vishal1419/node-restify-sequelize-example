var Sequelize = require('sequelize');

function Db() {}

Db.getDbInstance = function() {

    //Setting up the config
    var sequelize = new Sequelize('vishal_test_db', 'vishal', '12345678', {
        host: "192.168.100.204",
        port: 3306,
        dialect: 'mysql'
    });

    //Checking connection status
    sequelize.authenticate().then(function () {
        console.log("CONNECTED! ");
    })
    .catch(function (err) {
        console.log(err);
    })
    .done();

    return sequelize;

}

module.exports = Db;