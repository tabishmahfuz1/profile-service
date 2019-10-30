let router = require('express').Router(),
	ProfileController = require('./controllers/ProfileController');



router.use('/profile', ProfileController);

module.exports = router;