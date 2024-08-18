const express = require('express');
const connectDb = require("./config/dbConnection");
const dotenv = require('dotenv').config()
const errorHandler = require("./middleware/errorHandler");
const mongoose = require("mongoose");

connectDb();
const app = express();


const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

/*const uri = 'mongodb+srv://admin:admin@contacts-nodejs.phsmc.mongodb.net/?retryWrites=true&w=majority&appName=Contacts-nodejs'
*/
/*async function connect() {
    try {
      await mongoose.connect(uri);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error(error);
    }
  }
  
  connect();
  */

app.listen(port, () => {
    console.log(`Server running on port ${5000}`)
})


