/*========================================
        Require Dependencies
========================================*/
const express = require("express")
const path = require("path")
const favicon = require("serve-favicon")
const logger = require("morgan")

require("dotenv").config()
require("./config/database")

/*========================================
        Middleware
========================================*/
const app = express()

app.use(logger("dev"))
app.use(express.json())

app.use(favicon(path.join(__dirname, "build", "favicon.ico")))
app.use(express.static(path.join(__dirname, "build")))

// checkToken will go here

/*========================================
        API routes will go here
========================================*/
/// user apu first 

// ensure logged in middleware will go here.
// all othe APIs

// catch all route that will return the index.html on all non-AJAX request.

/*========================================
        Port and Listener
========================================*/
const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`Expesss app running on port ${port}`)
})