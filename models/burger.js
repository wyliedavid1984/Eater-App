const orm = require('../config/orm')

var burger = {
    all: function(callback) {
        orm.all('burgers', (err, res)=>{
            callback(err, res);
        });
    }, 
    update: function (objColVals, condition, cb){
        orm.update('burgers', objColVals, condition, function(err, res) {
            cb(err, res)
        })
    },
    create: function (cols, vals, cb){
        orm.create("burgers", cols, vals, function (err, res) {
            cb(err, res)
        });
    },
    delete: function (condition, cb) {
        orm.delete('burgers', condition, function (err, res) {
            cb(err, res)
        })
    }
   
}

module.exports = burger