/*========================================
       DEPENDENCIES
========================================*/
const express = require('express')
const router = express.Router();
const usersCtrl = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

/*========================================
        ROUTERS
========================================*/
// User post route for creation
router.post('/', usersCtrl.create);

// User post route for login
router.post('/login', usersCtrl.login);

// User get route for JWT token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)

// User delete route for deletion
router.delete('/delete', usersCtrl.remove)

// User put route for updating
router.put('/update', usersCtrl.update)

module.exports = router