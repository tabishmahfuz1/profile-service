const Profile = require('../models/Profile');
const router  = require('express').Router();
const upload  = require('../storage');

var addProfile = (req, res) => {
	// Add New Profile Here

	if ( req.files.resume ) {
		console.dir( req.files.resume );
	}

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

router.use(upload);
router.post('/new', addProfile);
router.post('/:profileId/update', updateProfile);
router.delete('/:profileId/delete', removeProfile);
router.get('/', getProfiles);