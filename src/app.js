const express = require("express");
const cors = require("cors");
const phonebookRoutes = require("./routes/phonebook.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", phonebookRoutes);

module.exports = app;