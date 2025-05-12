const db = require('mongoose');
const config = require('../config');

db.connect(config.mongoURI);
