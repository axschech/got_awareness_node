var Sequelize = require('sequelize'),
    config = require('./config.json');
module.exports = {
    connect: function () {
        return new Sequelize('got_awareness', config.username, config.password, {
          host: 'localhost',
          dialect: 'mysql',

          pool: {
            max: 5,
            min: 0,
            idle: 10000
          },

        });
    }
};
