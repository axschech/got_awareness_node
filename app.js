var Organization = require('./schema/organization.js')
, User = require('./schema/user.js')
, Message = require('./schema/message.js')
, express = require('express')
, bodyParser = require('body-parser')
, app = express();

app.use(bodyParser.json());

app.get(['/', '/api'], function (req, res) {
    res.redirect('http://dev.axschech.com/got_awareness_new');
});

app.post('/api/users', function (req, res) {
    // check user
    // schema.User.find({

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
        res.json({data: arr});
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
            res.json({data: arr});
        });
    } else {
        schema.Organization
            .findAll()
            .then(function (orgs) {
                for(var x in orgs) {
                    arr.push(orgs[x]);
                }
                res.json({data: arr});
        });
    }
});

var server = app.listen(3000);