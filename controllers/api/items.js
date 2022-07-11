/*========================================
        DEPENDENCIES
========================================*/
const Item = require('../../models/item');

/*========================================
        ITEM FUNCTIONS
========================================*/
async function index(req, res) {
	const items = await Item.find({});
	//   .sort('name')
	//   .populate('category')
	//   .exec();
	// items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
	res.json(items);
}

async function show(req, res) {
	const item = await Item.findById(req.params.id);
	res.json(item);
}

async function itemSearch(req, res) {
        const itemquery = await Item.findOne(req.params.title);
        res.json(itemquery)
                
}

/*========================================
        EXPORTS
========================================*/
module.exports = { index, show, itemSearch };
