const router = require('express').Router();

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

let statements = [
  {id: 'statement1',
    text: 'My direct manager gives me necessary support and clear objectives.'},
  {id: 'statement2',
  text: 'I feel like I have a healthy work/life balance.' },
  {id: 'statement3', text: 'I feel comfortable working and interacting with the colleagues on my team.'},
  {id: 'statement4', text: 'I am satisfied with my roles and responsibilities.'},
  {id: 'statement5', text: 'I like my work environment, and I believe it helps me perform at my best.'}];

router.get('/', function (req, res, next) {
  statements = shuffle(statements);
  res.json(statements);
});

router.post('/', function (req, res, next) { /* etc */});
router.put('/:statementId', function (req, res, next) { /* etc */});
router.delete('/:statementId', function (req, res, next) { /* etc */});

module.exports = router;
