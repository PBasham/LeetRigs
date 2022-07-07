/*========================================
        DEPENDENCIES
========================================*/
const express = require('express')
const router = express.Router();
const purchaseCtrl = require('../../controllers/api/orders')

// GET /api/purchases/mycart
// route location, then reference function in controller that's needed
router.get('/mycart', purchaseCtrl.userCart)






/*========================================
        EXPORTS
========================================*/
module.exports = router;
  
