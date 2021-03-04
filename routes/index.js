var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send('You are at the / path')
})

module.exports = router;
