var sequelize = require('./db.js');
module.exports = sequelize.define('messages', {
    id: {
        type: sequelize.Sequelize.INTEGER,
        primaryKey: true,
        auto_increment: true
    },
    body: sequelize.Sequelize.TEXT,
    user_id: sequelize.Sequelize.INTEGER,
    organization: sequelize.Sequelize.INTEGER,
    time: sequelize.Sequelize.NOW
}, {
    freezeTableName: true,
    timestamps: false
});