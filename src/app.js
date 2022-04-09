"use strict";

const express = require("express");
const { connectDB } = require("./db");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


app.listen(PORT, () => {
	console.log(`Application is listening on port ${PORT}`);
	connectDB();
});
