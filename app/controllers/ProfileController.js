const Profile = require('../models/Profile');
const router  = require('express').Router();
var addProfile = (req, res) => {
	// Add New Profile Here
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


router.post('/new', addProfile);
router.post('/:profileId/update', updateProfile);
router.delete('/:profileId/delete', removeProfile);
router.get('/', getProfiles);