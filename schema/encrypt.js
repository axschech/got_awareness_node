bcrypt = require('bcrypt');
module.exports = {
    hash: function (password, callback) {
        bcrypt.genSalt(10, function(err, salt) {
            if (err)
              return callback(false);

            bcrypt.hash(password, salt, function(err, hash) {
              if (err) {
                callback(false);
              }
              callback(hash);
            });

          });
    }
};