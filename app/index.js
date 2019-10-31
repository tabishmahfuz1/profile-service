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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

app.use(routes);

// Find 404 and hand over to error handler
app.use((req, res, next) => {
  next(createError(404));
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

// error handler
app.use(function (err, req, res, next) {
  	console.error(err.message);
  	if (!err.statusCode) err.statusCode = 500;
  	res.status(err.statusCode).send(err.message);
});


module.exports = app;