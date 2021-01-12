const express = require('express');
const router = express.Router();

const burger = require('../models/burger')


// redirect to burger index page
router.get('/', (req, res) => {
    res.redirect('/burgers')
})

// get all burgers to show on html
router.get('/burgers', (req, res) => {
    burger.all(function (err, data) {
        if (err) {
            return res.status(500).end()
        }
        var hbsObject = {
            burgers: data
        };

        res.render('index', hbsObject);
    });
});

// update burger data to devoured
router.put('/api/burgers/:id', (req, res) => {

    var condition = "id = " + req.params.id;

    burger.update({
        devoured: req.body.devoured
    }, condition, (err, result) => {
        console.log(result)
        if (err) {
            return res.status(500).end()
        }
        res.status(200).end()
    });
});

//post new burger to html 
router.post('/api/burgers', (req, res) => {
    let newBurger = req.body.burger;
    console.log("backend", newBurger)
    burger.create(["burger_name"], [newBurger], (err, result) => {
        if (err) {
            return res.status(500).end()
        }
        res.json({
            id: result.insertId
        })
        console.log({
            id: result.insertId
        })
        res.status(200).end()
    });
});

router.delete('/api/burgers/:id', (req, res) => {
    var condition = "id = " + req.params.id;
    burger.delete(condition, (err, result) => {
        if (err) {
            return res.status(500).end();
        }
        res.status(200).end();
    })
})

module.exports = router;