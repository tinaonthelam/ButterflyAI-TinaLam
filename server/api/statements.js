const router = require('express').Router();

router.get('/', function (req, res, next) { /* etc */});
router.post('/', function (req, res, next) { /* etc */});
router.put('/:statementId', function (req, res, next) { /* etc */});
router.delete('/:statementId', function (req, res, next) { /* etc */});

module.exports = router;
