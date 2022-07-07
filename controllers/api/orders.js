/*========================================
        DEPENDENCIES
========================================*/
const Order = require('../../models/order')

/*========================================
        EXPORTS
========================================*/
module.exports = {
        userCart,
        addToCart,
        updateItemQtyCart
}


/*========================================
        FUNCTIONALITY
========================================*/
// querying for user cart using 'findcart' function in order model file
async function userCart(req, res) {
  const userCart = await Order.findCart(req.user._id);
  console.log(userCart)
  res.json(userCart)
  
}

async function addToCart(req, res) {
        const userCart = await Order.findCart(req.user._id)
        // console.log(userCart)
        console.log("this is:" + req.params.id)
        await userCart.addItemToCart(req.params.id)
        res.json(userCart)
        
}

async function updateItemQtyCart(req, res) {
        const userCart = await Order.findCart(req.user._id)
        await userCart.updateItemQty(req.body.selectedItem, req.body.newItemQty)
        res.json(userCart)
}
