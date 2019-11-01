var multer = require('multer');
// var DIR = './uploads/';
// const upload = multer({dest: DIR});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});
 
const upload = multer({ storage });

module.exports = upload;
