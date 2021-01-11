const express = require('express');
const router = express.Router();

const burger = require('../models/burger')


// redirect to burger index page
router.get('/', (req, res) =>{
    res.redirect('/burgers')
})

// get all burgers to show on html
router.get('/burgers', (req, res) => {
    burger.all(function (data) {
        var hbsObject = {burgers: data};
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

// update burger data to devoured
router.put('/api/burgers/:id', (req, res) => {
 
    var condition = "id = " + req.params.id;
    
    burger.update({devoured:req.body.devoured}, condition, (result)=>{
        if(result.changedRows === 0){
            return res.status(404).end()
        }else{
        res.redirect('/burgers');
    }
    });
});

//post new burger to html 
router.post('/api/burgers', (req, res) => {
    burger.create('burger_name', [req.body.burger], (err, result) => {
        res.json(result)
        res.redirect('/burgers')
    });
});



module.exports = router;