/*========================================
        DEPENDENCIES
========================================*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

/*========================================
        SCHEMAS
========================================*/
const usersSchema = new Schema(
	{
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			unique: true,
			trim: true,
			lowercase: true,
			required: true
		},
		password: {
			type: String,
			trim: true,
			minLength: 3,
			required: true
		},
	},
	{
		timestamps: true
	});

	/*========================================
					EXPORTS
	========================================*/
module.exports = mongoose.model('User', usersSchema)
