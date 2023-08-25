const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');

//Users
router.get('/', async (req, res) => {
    const response = await fetch('https://thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
    const drinks = await response.json();    
    res.json(drinks);
});

module.exports = router;