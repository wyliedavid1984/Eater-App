const orm = require('../config/orm')

var burger = {
    all: function(callback) {
        orm.all('burgers', (res)=>{
            callback(res);
        });
    }, 
    update: function (objColVals, condition, cb){
        orm.update('burgers', objColVals, condition, (res) =>{
            cb(res)
        })
    },
    create: function (cols, vals, cb){
        orm.create("burgers", cols, vals, (res) =>{
            cb(res)
        });
    }
   
}

module.exports = burger