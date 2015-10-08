var Sequelize = require('sequelize')
, config = require('./config.json')
, express = require('express')
, Sequelize
, Organization
, app = express();


// User.sync({force: true}).then(function () {
//   // Table created
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });



app.get('/', function (req, res) {
     Organization.findAll().then(function (orgs) {
        var arr = [];
        for(var x in orgs) {
            arr.push(orgs[x].get({
                plain: true
            }));
        }
        res.send(arr);
    });
});

var server = app.listen(3000, function () {
    sequelize = new Sequelize('got_awareness', config.username, config.password, {
      host: 'localhost',
      dialect: 'mysql',

      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },

    });

    Organization = sequelize.define('organizations', {
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
    });
});