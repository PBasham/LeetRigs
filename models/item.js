/*========================================
        DEPENDENCIES
========================================*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*========================================
        SCHEMAS
========================================*/
const itemSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
		default: 0,
	},
	description: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Item', itemSchema)
