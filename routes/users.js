var express = require('express');
var router = express.Router();

/* All users listing. */
router.all('/:username', function(req, res, next) {
    console.log('all methods captured in users.');
    next();
})
/* GET users listing. */
router.get('/:username', function(req, res, next) {
    res.send('user: ' + req.params.username);
});

module.exports = router;
