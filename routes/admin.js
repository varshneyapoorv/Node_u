const express = require('express');
const rootDir = require('../util/path');
const path = require('path');
const router = express.Router();

// Route to show the add product form
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));

});

// Route to handle form submission
router.post('/product', (req, res, next) => {
    console.log(req.body); // Log the submitted form data
    res.redirect('/'); // Redirect after processing
});


module.exports = router