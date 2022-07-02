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
			type: String,
			required: true
		},
		price: {
			type: Number,
			required: true,
			default: 0,
		},
		description: {
			type: String,
			required: true
		},
		image: {
			type: String,
			required: true
		},
		category: {
			type: Schema.Types.ObjectId,
			ref: 'Category'
		},
	},
	{
		timestamps: true
	}
);

module.exports = itemsSchema;
