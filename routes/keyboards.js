var express = require('express');
var router = express.Router();

let keyboardsFixture = [
    {make: 'Wurlitzer', model: 'whitty knows'},
    {make: 'Fender', model: 'Rhodes'}
]

router.get('/', function (req, res, next) {

    res.json(keyboardsFixture);
});

router.post('/', (req, res, next) => {
    keyboardsFixture = req.body

    res.send('I just replaced the value of keyboardsFixture')
})

module.exports = router;
