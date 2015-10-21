var sequelize = require('./db.js');
module.exports = sequelize.define('organizations', {
    id: {
        type: sequelize.Sequelize.INTEGER,
        primaryKey: true,
        auto_increment: true
    },
    name: {
        type: sequelize.Sequelize.STRING
    },
    code: {
        type: sequelize.Sequelize.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false
});