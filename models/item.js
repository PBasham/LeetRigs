/*========================================
        DEPENDENCIES
========================================*/
const mongoose = require('mongoose');

// Ensure that the Category model is loaded by Mongoose
// so that it can be used to populate the items
require('./category')
const itemSchema = require('./itemSchema')

module.exports = mongoose.model('Item', itemSchema)
