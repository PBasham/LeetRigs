/*========================================
        DEPENDENCIES
========================================*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 6

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
		profilePicture: {
			type: String,
			trim: true
		},
	},
	{
		timestamps: true,
		toJSON: {
			transform: function(doc, ret) {
				delete ret.password;
				return ret;
			}
		}
	});

usersSchema.pre('save', async function (next) {
	if (!this.isModified('password')) return next();
	this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
	return next();
})

	/*========================================
					EXPORTS
	========================================*/
module.exports = mongoose.model('User', usersSchema)
