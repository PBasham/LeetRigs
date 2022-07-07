/*========================================
        DEPENDENCIES
========================================*/
const express = require('express')
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items')

/*========================================
        ROUTES
========================================*/
// Index Route
// /api/items 
router.get('/', itemsCtrl.index);

// Show route
router.get('/:id', itemsCtrl.show);

/*========================================
        EXPORTS
========================================*/
module.exports = router;
