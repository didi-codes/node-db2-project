const express = require('express')
const Car = require('./cars-model')

const router = express.Router();

router.get('/', async (req,res,next) => {
    try {
        const data = await Car.getAll();
        res.json(data)
    } catch(error) {
        next(error)
    }
})
