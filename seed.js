/*========================================
        Require Dependencies
========================================*/
require("dotenv").config()
const { element } = require("prop-types")
const mongoose = require("./config/database.js")
const fetch = require("node-fetch");
// require("./config/database.js")

const Item = require("./models/item.js")

const db = mongoose.connection
db.on("open", () => {
    Item.deleteMany({})
    .then((deletedItems) => {
      fetch('https://fakestoreapi.com/products')
        .then((items) => {
            items.json()
            .then((itemsJson) => {
                // console.log(itemsJson)
                // itemsJson.forEach(element => {
                //     console.log(element)
                // })
                Item.create(itemsJson)
                .then(() => {
                    db.close()
                })
            })
            .catch((error) => {
                console.log(error)
                db.close()
            })
        })
        .catch((error) => {
            console.log(error)
            db.close()
        })
    })
    .catch((error) => {
        console.log(error)
        db.close()
    })
})