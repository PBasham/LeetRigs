/*========================================
        DEPENDENCIES
========================================*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema');

/*========================================
        SCHEMAS
========================================*/
const lineItemSchema = new Schema(
	{
		qty: {
			type: Number,
			default: 1
		},
		item: itemSchema
	},
	{
		timestamps: true,
		toJSON: {
			virtuals: true
		},
	}
);

const ordersSchema = new Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},
		lineItems: [lineItemSchema],
		isPaid: {
			type: Boolean,
			default: false
		},
	},
	{
		timestamps: true,
		toJSON: {
			virtuals: true
		},
	}
);


module.exports = mongoose.model('Order', ordersSchema)