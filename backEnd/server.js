const mongoose= require("mongoose");
const express = require("express");
const routers = require("./routers/router");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(`dataBase connected `))
    .catch((er) => console.log("some error is upper", er));
app.use(routers);
app.listen(PORT, ()=>console.log(`server run on ${PORT}`))
