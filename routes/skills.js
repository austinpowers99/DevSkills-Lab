var express = require('express');
var router = express.Router();

let skillsCtrl =  require('../controllers/skills');

router.get('/', skillsCtrl.index);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.get('/', skillsCtrl.create);

router.get('/:id', skillsCtrl.delete);

module.expoerts = router;