/*========================================
        Require Dependencies
========================================*/
const mongoose = require("./connection.js")
require("dotenv").config()
require("./config/database.js")

const Item = require("./models/item.js")

const db = mongoose.connection

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))




process.exit()