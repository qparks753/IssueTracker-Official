/* eslint-disable no-undef */
const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
// const path = require("path");
const cookieSession = require("cookie-session")

require("dotenv").config();



const app = express();

var corsOptions = {
  
origin: "*"
};


app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());


// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//cookie session

app.use(
  cookieSession({
    name:process.env.REACT_APP_COOK_NAME,
     secret:process.env.REACT_APP_COOK,
    httpOnly:true
  })
);
// simple route

const router = require("./Routes/projectRouter")

app.use("/api/projects",router)

const router2 = require("./Routes/ticketRouter")
app.use("/api/tickets", router2)

const router3 = require("./Routes/userRouter")
app.use("/api/users", router3)


const db = require("./models");

// const Role = db.role;



 db.sequelize.sync();


// routes
require("./Routes/authRouter")(app);
require('./Routes/appuserRouter')(app)

// set port, listen for requests
// const PORT = process.env.PORT || PORT;

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}.`);
});


