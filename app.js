var Sequelize = require('sequelize')
, db = require('./db.js')
, config = require('./config.json')
, schema = require('./schema.js')
, express = require('express')
, app = express();

// User.sync({force: true}).then(function () {
//   // Table created
//   return User.create({
//     firstName: 'John',
//     lastName: 'Hancock'
//   });
// });
console.log(schema);
app.get('/', function (req, res) {
    res.json('no');
});

app.post('/api/users', function (req, res) {
    //create user
    // schema.User.findOrCreate({

    // })
});

app.get('/api/users', function (req, res) {
     schema.User.findAll().then(function (orgs) {
        var arr = [];
        for(var x in orgs) {
            arr.push(orgs[x].get({
                plain: true
            }));
        }
        res.json(arr);
    });
});

app.get('/api/organizations', function (req, res) {
    var arr = [];
    if (req.query.name) {
        schema.Organization.findAll({
            where: {
                name: req.query.name
            }
        }).then(function (orgs) {
            for(var x in orgs) {
                arr.push(orgs[x]);
            }
            res.json(arr);
        });
    } else {
        schema.Organization
            .findAll()
            .then(function (orgs) {
                for(var x in orgs) {
                    arr.push(orgs[x]);
                }
                res.json(arr);
        });
    }
});

var server = app.listen(3000);