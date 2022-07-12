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
        console.log(item)
        // console.log("omg" + item._id)
	res.json(item);
}

// const search =  new RegExp(search,'g'); // correct way
async function itemSearch(req, res) {
        let searchTerm = req.params.search
        console.log(searchTerm);
        console.log(req.params.search);
        const itemquery = await Item.find({ title: new RegExp(searchTerm, "i") });
        // console.log("HELLO" + itemquery)
        res.json(itemquery)
       
                
}

/*========================================
        EXPORTS
========================================*/
module.exports = { index, show, itemSearch };
