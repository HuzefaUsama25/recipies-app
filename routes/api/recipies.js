
const express = require('express');
const router = express.Router();

// Load Book model
const Recipie = require('../../models/Recipie');

router.get('/test', (req, res) => res.send('recipie route testing!'));

router.get('/', (req, res) => {
    Recipie.find()
        .then(recipies => res.json(recipies))
        .catch(err => res.status(404).json({ norecipiesfound: 'No recipie found' }));
});

/*
router.get('/:id', (req, res) => {
    Recipie.findById(req.params.id)
        .then(recipie => res.json(recipie))
        .catch(err => res.status(404).json({ norecipiesfound: 'No recipies found' }));
});
*/




router.get('/q=:title', (req, res) => {
    const query = { $text: { $search: req.params.title } }
    Recipie.find(query)
        .then(recipie => res.json(recipie))
        .catch(err => res.status(404).json({ norecipiesfound: `No recipie founds ${err}` }));
});


router.post('/', (req, res) => {
    Recipie.create(req.body)
        .then(recipie => res.json({ msg: 'Recipie added successfully' }))
        .catch(err => res.status(400).json({ error: `Unable to add this recipie ${err}` }));
});


module.exports = router;