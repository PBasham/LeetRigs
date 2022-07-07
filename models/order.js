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

// order schema references the User ID currently logged in
// lineItemsschema is embedded within orders
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

/*========================================
		Model virtuals
========================================*/
// "extPrice" is the virtual being created, "this" refers to it.
lineItemSchema.virtual('extPrice').get(function () {
	return this.qty * this.item.price
})

// Creating virtual properties on the ordersSchema "orderTotal, totalQty, etc."
// reduce takes an array of values and reduces to one single value(item)
// first param = accumulator(total), second param = (item) looping thru each individual item, total is 0 to start
// This virtual keeps track of the order total for a specified order
ordersSchema.virtual('orderTotal').get(function() {
	return this.lineItems.reduce((total, item) => total + item.extPrice, 0)
})

// This virtual keeps track of the total qty for a lineitem in the specified order
ordersSchema.virtual('totalQty').get(function () {
	return this.lineItems.reduce((total, item) => total + item.qty, 0)
})

// This virtual is slicing the orderID and converting to uppercase, don't understand why yet? will revisit
ordersSchema.virtual('orderId').get(function () {
	return this.id.slice(-6).toUpperCase();
})

/*========================================
		Model Statics
========================================*/
// You add a static function to your schema, and Mongoose attaches it to any model you compile with that schema.
ordersSchema.statics.findCart = function(userId) {
	// 'this' is the Order model itself, 'user' is pulling from the schema property
	return this.findOneAndUpdate(
		{ user: userId, isPaid: false },
		// Above is what we query for
		{ user: userId },
		// data for the order contained in userId param
		{ upsert: true, new: true }
		// upsert creates object if doesn't exist
	)
		
		
}

/*========================================
		Model Methods
========================================*/
ordersSchema.methods.addItemToCart = async function (storeItemId) {
	// set a keywork for the unpaid order (cart)
	const cart = this

	// try to find the lineItem by id that was sent it through the req.params
	const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(storeItemId))
	// console.log(lineItem)
	// check if the lineItem exist
	if (lineItem) {
		console.log("I exist")
		lineItem.qty += 1
	} else {
		console.log("I don't exist")
		// if it does not exist in the cart, get the items from the Item model using the req.params as the reference for the _id
		const item = await mongoose.model("Item").findById(storeItemId)
			console.log(item)
		// add this item to the lineItems array within this cart.
		 cart.lineItems.push({ item })
		
	}
	return cart.save()
}

// Update Item QTY
ordersSchema.methods.updateItemQty = function (selectedItem, newItemQty) {
	const cart = this;
	// this is bound to the current cart order
	const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(selectedItem));
	// find line item in cart for specific order item
	if (lineItem && newItemQty <= 0) {
		// Remove item from the cart lineItems array
		lineItem.remove();
	} else if (lineItem) {
		// Set new qty if qty is not already 0
		lineItem.qty = newItemQty
	}
	// save
	return cart.save();
	}


/*========================================
				EXPORTS
========================================*/
module.exports = mongoose.model('Order', ordersSchema)