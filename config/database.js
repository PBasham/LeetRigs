/*========================================
        Import Dependencies
========================================*/
const mongoose = require('mongoose');

/*========================================
        Database Connection
========================================*/
const db = mongoose.connection;

/*========================================
        This will be used when we use Atlas for the database
========================================*/
// Connetion to Atlas
// const MONGODB_URI = process.env.MONGODB_URI
// const CONFIG = {
//   useNewUrlParser: true,
//   useInifiedTopology: true,
// }

// mongoose.connect(MONGODB_URI, CONFIG) // Establish connection to database

//Connection to loval MongoDB
// const DATABASE_URL = process.env.DATABASE_URL
const MONGODB_URI = process.env.MONGODB_URI
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect(MONGODB_URI, CONFIG)

db.on('connected', () => {
  console.log(`Connected to ${db.name} at ${db.host}: ${db.port}`);
})
.on("close", () => {
  console.log(`Disconnected from ${db.name} at ${db.host}: ${db.port}`)
})
.on("error", (error) => console.log(error))

/*========================================
        Export Modules
========================================*/
module.exports = mongoose