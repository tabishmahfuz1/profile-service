const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//monggose

// Define collection and schema
let Profile = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  profile: {
    type: String
  },
  skills: {
    type: Array
  },
  gender: {
    type: String
  },
  dob: {
    type: Date
  },
  resume: {
    type: String
  }
}, {
  collection: 'profiles'
})

module.exports = mongoose.model('Profile', Profile)