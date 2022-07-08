/*========================================
Require Dependencies
========================================*/
require("dotenv").config()
const { element } = require("prop-types")
const mongoose = require("./config/database.js")
// require("./config/database.js")

const options = {
	method: 'GET',
	headers: {
		searchQuery: 'RTX',
		'X-RapidAPI-Key': '2f772c1131mshf65c10b8ba9550bp1c9651jsn5f2c65c58aab',
		'X-RapidAPI-Host': 'newegg-data-scraper.p.rapidapi.com'
	}
};

const Item = require("./models/item.js")

const db = mongoose.connection
db.on("open", () => {
    Item.deleteMany({})
    .then((deletedItems) => {
      fetch('https://newegg-data-scraper.p.rapidapi.com/search/RTX', options)
        .then((items) => {
            items.json()
            .then((itemsJson) => {
                console.log(itemsJson.products)
                console.log(itemsJson)
                itemsJson.products.forEach(element => {
                    // for price - 
                        // 1. remove the dollar sign
                        // 2. remove '-' and (offers) or right side of those that have it.
                        // 3. Remove comma if needed
                        // 4. convert to number/numreric
                    //
                    console.log(element.price)
                })


                Item.create(itemsJson.products)
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