'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
var mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL;
//const db_name = "Flashmob";

const userSchema = mongoose.Schema({ 

	name 			: String,
	email			: String, 
        hashed_password	: String,
	created_at		: String,
	temp_password	: String,
        temp_password_time: String

});

mongoose.Promise = global.Promise;

//if(process.env.OPENSHIFT_MONGODB_DB_URL){
//	mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL + db_name;
//}

console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",mongoURL);
console.log("eeeeeeeeeeeeee",process.env.DATABASE_SERVICE_NAME);
console.log("database name",process.env[mongoServiceName + '_PASSWORD']);

if (mongoURL == null && process.env.DATABASE_SERVICE_NAME) {
	var mongoServiceName = process.env.DATABASE_SERVICE_NAME.toUpperCase(),
	    mongoHost = process.env[mongoServiceName + '_SERVICE_HOST'],
	    mongoPort = process.env[mongoServiceName + '_SERVICE_PORT'],
	    mongoDatabase = process.env[mongoServiceName + '_DATABASE'],
	    mongoPassword = process.env[mongoServiceName + '_PASSWORD'],
	    mongoUser = process.env[mongoServiceName + '_USER'];
      
	if (mongoHost && mongoPort && mongoDatabase) {
	  mongoURLLabel = mongoURL = 'mongodb://';
	  if (mongoUser && mongoPassword) {
	    mongoURL += mongoUser + ':' + mongoPassword + '@';
	  }
	  // Provide UI label that excludes user id and pw
	  mongoURLLabel += mongoHost + ':' + mongoPort + '/' + mongoDatabase;
	  mongoURL += mongoHost + ':' +  mongoPort + '/' + mongoDatabase;
      
	}
      }
      else{
	mongoURL = 'mongodb://localhost:27017/Flashmob';
}

mongoose.connect(mongoURL);

module.exports = mongoose.model('user', userSchema);