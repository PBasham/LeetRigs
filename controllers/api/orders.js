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
        updateItemQtyCart,
        cartCheckout,
        getOrders
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
        await userCart.updateItemQty(req.body.itemId, req.body.newQty)
        res.json(userCart)
}

async function cartCheckout(req, res) {
        const cart = await Order.findCart(req.user._id)
        // mark the users unpaid cart and paid!
        cart.isPaid = true
        await cart.save()
        res.json(cart)
}

async function getOrders(req, res) {
        const cart = await Order.findCart(req.user.id)
        if (cart.isPaid === true)
                await cart.save()
                res.json(cart)
}