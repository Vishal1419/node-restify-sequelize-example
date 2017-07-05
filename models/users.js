const Sequelize = require('sequelize');

module.exports = function(sequelize) {

    const Users = sequelize.define('users', {
        ID: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
        LastName: {type: Sequelize.STRING, allowNull: false},
        FirstName: {type: Sequelize.STRING}
    }, { tableName: 'Users', timestamps: false });

    return Users;

};