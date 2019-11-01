let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  dataBaseConfig = require('../config/database'),
  routes = require('./routes');

// Connecting mongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dataBaseConfig.db, {
  useNewUrlParser: true
}).then(() => {
    console.log('Database connected sucessfully ')
  },
  error => {
    console.log('Could not connected to database : ' + error)
  }
)

const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: false
}));
app.use(cors());

app.use((req, res, next) => {
  req.appUrl = req.protocol + '://' + req.get('host');
  req.storageUrl = req.appUrl + '/files/';
  console.log(req.appUrl, req.storageUrl)
  next();
})

app.use(function(req, res, next) {
//set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(routes);

// Find 404 and hand over to error handler
// app.use((req, res, next) => {
//   next(createError(404));
// });
app.use('/files', express.static('public/uploads'))

// error handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

// Index Route
app.get('/', (req, res) => {
  	res.send('invaild endpoint');
});

app.get('*', (req, res) => {
	res.json({
		msg: "invalid Endpoint"
	});
  	// res.sendFile(path.join(__dirname, 'dist/angular8-meanstack-angular-material/index.html'));
});




module.exports = app;