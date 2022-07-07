/*========================================
        DEPENDENCIES
========================================*/
const express = require('express')
const router = express.Router();
const purchaseCtrl = require('../../controllers/api/orders')

// GET /api/purchases/mycart
// route location, then reference function in controller that's needed
router.get('/mycart', purchaseCtrl.userCart)
// POST /api/purchases/mycart/items/:id
router.post("/mycart/items/:id", purchaseCtrl.addToCart)
// PUT /api/purchases/mycart/qty
router.put('/mycart/qty', purchaseCtrl.updateCartQty)





/*========================================
        EXPORTS
========================================*/
module.exports = router;
  
