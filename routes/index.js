const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Welcome to Qritive-Making cancer diagnosis fast, accurate, and affordable.!',   
  });
});

module.exports = router;