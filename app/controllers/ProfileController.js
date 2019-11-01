const Profile = require('../models/Profile');
const router  = require('express').Router();
const upload  = require('../storageService');

var addProfile = (req, res) => {
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
	let profileToSave = req.body;
	if ( req.file ){
		// TODO: Delete Previous resume
		profileToSave.resume = req.file.filename;
	}
	delete profileToSave._id;
	Profile.findByIdAndUpdate(
	    req.params.profileId,
	    profileToSave,
	    {new: true},
	    (err, profile) => {
	        if (err) return res.status(500).json(err);
	        return res.json(profile);
	    }
	)
}

var removeProfile = (req, res) => {
	// Delete a Profile Here
}

var getProfiles = async (req, res) => {
	let profiles = await Profile.find();
	res.json(profiles);
}

var getProfile = async (req, res) => {
	let profile = await Profile.findById(req.params.profileId);
  console.log("In Controller", req.appUrl, req.storageUrl)
	profile.resume = req.storageUrl + profile.resume;
	res.json(profile);
}

router.post('/new', upload.single('resume'), addProfile);
router.post('/:profileId/update', upload.single('resume'), updateProfile);
router.delete('/:profileId/delete', removeProfile);
router.get('/', getProfiles);
router.get('/:profileId', getProfile);

module.exports = router;