

var db = require('./db.js')
, Sequelize = require('sequelize')
, Organization
, User
, Message



var sequelize = db.connect();
module.exports = {
    Organization: sequelize.define('organizations', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            auto_increment: true
        },
        name: {
            type: Sequelize.STRING
        },
        code: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false
    }),
    User: sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            auto_increment: true
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        organization: {
            type: Sequelize.INTEGER
        },
        admin: {
            type: Sequelize.INTEGER
        },
        remember_token: {
            type: Sequelize.INTEGER
        }
     }, {
        freezeTableName: true,
        timestamps: false
    }),
    Message: sequelize.define('messages', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            auto_increment: true
        },
        body: Sequelize.TEXT,
        user_id: Sequelize.INTEGER,
        organization: Sequelize.INTEGER,
        time: Sequelize.NOW
    }, {
        freezeTableName: true,
        timestamps: false
    })
};