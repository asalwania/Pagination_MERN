const express = require("express")
const cors = require("cors")
const app = express()

const user = require("./routes/user")

// Route import

app.use(express.json());
app.use(cors())
app.use("/api/user", user)



// app.use(express.static(path.join(__dirname, "../frontend/build/index.html")));

module.exports = app;
