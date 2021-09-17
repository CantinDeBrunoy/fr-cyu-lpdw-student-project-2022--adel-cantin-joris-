const express = require('express');
const router = express.Router();
const db = require('../../config/databases');
// const City = require('../models/City');
const Camionneur = require('../models/Camionneur');
const Camion = require('../models/Camion');
const Course = require('../models/Course');
const Entrepot = require('../models/Entrepot');
const Temperature = require('../models/Temperature');

router.get('/',(req,res) => {
    Camionneur.findAll()
    .then(camionneurs => {
        console.log(camionneurs)
        res.sendStatus(200);
    })
    .catch(err => console.log(err))

    Camion.findAll()
    .then(camions => {
        console.log(camions)
        res.sendStatus(200);
    })
    .catch(err => console.log(err))

    Course.findAll()
    .then(courses => {
        console.log(courses)
        res.sendStatus(200);
    })
    .catch(err => console.log(err))

    Entrepot.findAll()
    .then(entrepots => {
        console.log(entrepots)
        res.sendStatus(200);
    })
    .catch(err => console.log(err))

    Temperature.findAll()
    .then(temperatures => {
        console.log(temperatures)
        res.sendStatus(200);
    })
    .catch(err => console.log(err))
})

module.exports = router;