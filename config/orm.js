let connection = require('./connection.js');

let orm = {
    all: function (tableInput, cb) {
        connection.query('select * from ' + tableInput + ';', function (err,
            result) {
            if (err) throw err;
            cb(result)
        })
    },

    update: function (tableInput, condition, cb) {
        connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id=' + condition + ';', function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    create: function (tableInput, col, val, cb){
        connection.query(`INSERT INTO ${tableInput} (${col.trim()}') VALUES (${val});`, function(err,result){
            if(err)throw err;
            cb(result);
        })
    }
}

module.exports = orm;