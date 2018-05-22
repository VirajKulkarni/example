'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL;
const db_name = flashmob;

const userSchema = mongoose.Schema({ 

	name 			: String,
	email			: String, 
        hashed_password	: String,
	created_at		: String,
	temp_password	: String,
        temp_password_time: String

});

mongoose.Promise = global.Promise;

if(process.env.OPENSHIFT_MONGODB_DB_URL){
	mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL + db_name;
}
else{
	mongoURL = 'mongodb://localhost:27017/' + db_name;
}

mongoose.connect(mongoURL);

module.exports = mongoose.model('user', userSchema);