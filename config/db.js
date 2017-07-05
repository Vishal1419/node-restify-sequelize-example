var Sequelize = require('sequelize');

function Db() {}

Db.getDbInstance = function() {

    //Setting up the config
    var sequelize = new Sequelize('vishal_test_db', 'vishal', '12345678', {
        host: "192.168.100.204", //on this ip our database server is available
        port: 3306, //I don't know but it does not work on other ports
        dialect: 'mysql' //we should pass the database that we are using in dialect
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