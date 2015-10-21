var sequelize = require('./db.js');
module.exports =  sequelize.define('users', {
        id: {
            type: sequelize.Sequelize.INTEGER,
            primaryKey: true,
            auto_increment: true
        },
        name: {
            type: sequelize.Sequelize.STRING
        },
        email: {
            type: sequelize.Sequelize.STRING
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