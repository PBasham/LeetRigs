/*========================================
        Require Dependencies
========================================*/
const express = require("express")
const path = require("path")
const favicon = require("serve-favicon")
const logger = require("morgan")

require('dotenv').config()
require("./config/database")

/*========================================
        Middleware
========================================*/
const app = express()

app.use(logger("dev"))
app.use(express.json())

app.use(favicon(path.join(__dirname, "build", "favicon.ico")))
app.use(express.static(path.join(__dirname, "build")))

// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
// checkToken will go here
app.use(require('./config/checkToken'));
/*========================================
        API routes will go here
========================================*/
// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));

// ensure logged in middleware will go here.
// Protect the api routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));
app.use('/api/purchases', ensureLoggedIn, require('./routes/api/orders'));
// app.use('/api/items', require('./routes/api/items'));
// app.use('/api/purchases', require('./routes/api/orders'));
// all othe APIs


// catch all route that will return the index.html on all non-AJAX request.
app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
      });
/*========================================
        Port and Listener
========================================*/
const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`Expesss app running on port ${port}`)
})