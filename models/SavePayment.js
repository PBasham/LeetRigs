/*========================================
        DEPENDENCIES
========================================*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*========================================
        SCHEMAS
========================================*/
const SavePaymentSchema = new Schema(
  {
		creditCardName: {
			type: String,
			required: true
		},
		creditCardNumber: {
			type: Number,
			required: true,
			default: 0,
		},
		creditCardExpDate: {
			type: Number,
			required: true
		},
		creditCardCcv: {
			type: Number,
			required: true
		},
		
	},
	{
		timestamps: true
	}
);

/*========================================
				EXPORTS
========================================*/
module.exports = SavePaymentSchema;