var sequelize = require('./db.js');
module.exports =  sequelize.define('users', {
        id: {
            type: sequelize.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: sequelize.Sequelize.STRING
        },
        email: {
            type: sequelize.Sequelize.STRING,
            unique: true
        },
        password: {
            type: sequelize.Sequelize.STRING
        },
        organization: {
            type: sequelize.Sequelize.INTEGER
        },
        admin: {
            type: sequelize.Sequelize.INTEGER
        },
        remember_token: {
            type: sequelize.Sequelize.INTEGER
        }
     }, {
        freezeTableName: true,
        timestamps: false
    });