var multer = require('multer');
// var DIR = './uploads/';
// const upload = multer({dest: DIR});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
});
 
const upload = multer({ storage });

module.exports = upload;
