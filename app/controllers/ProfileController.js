const Profile = require('../models/Profile');
const router  = require('express').Router();
const upload  = require('../storageService');

var addProfile = (req, res) => {
	// Add New Profile Here
	// console.log( req.body )
	// console.log( req.file )
	// if ( req.resume ) {
	// 	console.dir( req.resume );
	// }

	let newProfile = req.body;

	newProfile.resume = req.file.filename;
	Profile.create(req.body, (error, data) => {
		if (error) {
	      return next(error)
	    } else {
	      res.json(data)
	    }
	});
}

var updateProfile = (req, res) => {
	// Update a Profile Here
}

var removeProfile = (req, res) => {
	// Delete a Profile Here
}

var getProfiles = (req, res) => {
	// Return all Profiles Here
}

router.post('/new', upload.single('resume'), addProfile);
router.post('/:profileId/update', upload.single('resume'), updateProfile);
router.delete('/:profileId/delete', removeProfile);
router.get('/', getProfiles);

module.exports = router;