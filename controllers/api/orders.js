/*========================================
        DEPENDENCIES
========================================*/
const Order = require('../../models/order')

/*========================================
        EXPORTS
========================================*/
module.exports = {
  userCart
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
        await cart.addItemToCart(req.params.id)
        
}

