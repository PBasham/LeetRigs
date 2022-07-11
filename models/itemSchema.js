/*========================================
        DEPENDENCIES
========================================*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*========================================
        SCHEMAS
========================================*/
const itemsSchema = new Schema(
	{
		title: {
			type: String
			// required: true
		},
		price: {
			type: String,
			// required: true,
			default: 0,
		},
		description: {
			type: String,
			// required: true
		},
		image: {
			type: String,
			// required: true
		},
		category: {
			type: String,
			ref: 'Category'
		},
	},
	{
		timestamps: true
	}
);

/*========================================
				EXPORTS
========================================*/
module.exports = itemsSchema;
