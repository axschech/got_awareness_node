var Organization = require('./schema/organization.js')
, User = require('./schema/user.js')
, Message = require('./schema/message.js')
, express = require('express')
, bodyParser = require('body-parser')
, encrypt = require('./schema/encrypt.js')
, app = express();

app.use(bodyParser.json());

app.get(['/', '/api'], function (req, res) {
    res.redirect('http://dev.axschech.com/got_awareness_new');
});

app.post('/api/login', function (req, res) {
    // check user
    User.find({
        where: {
            email: req.body.email
        }
    }).then(function (result) {
        res.send(result);
    });
});

app.post('/api/users', function (req, res) {
    if (!req.body) {
        res.status(400).send('Missing body');
        return;
    }

    var required = [
        'email',
        'password',
        'organization',
        'name',
        'code'
    ];
    for (var x in required) {
        if (!req.body[required[x]]) {
            res.status(400).json({
                error: "Missing " + required[x]
            });
            return;
        }
    }
    Organization.find({
        where: {
            id: req.body.organization
        }
    }).then(function (result) {
        if (result === null ||
                req.body.code !== result.code) {
            res.status(400).json({
                error: "Incorrect Code"
            });
            return;
        }
    });
    return;
    encrypt.hash(req.body.password, function (hash) {
        User.create({
            email: req.body.email,
            password: hash
        }).then(function (obj) {
            res.send(obj);
        }).catch(function (error) {
            res.send(error);
        });
    });
});

app.get('/api/users', function (req, res) {
     User.findAll().then(function (orgs) {
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
        Organization.findAll({
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
        Organization
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