const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const conn = require('../config/index');
// create student schema & model
const UsersSchema = new Schema({
    name : { type: String, deafult: '' },
	email : { type: String, deafult: '' },
	contact : { type: String, deafult: '' },
	address : { type: String, deafult: '' },
	company : { type: String, deafult: '' },
	password : { type: String, deafult: '' },
	created_at : Date
});

module.exports = conn.db1.model('tbl_users',UsersSchema);