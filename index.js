const express = require("express");
const router = require("./routes/generatePdf.route");
require("dotenv").config();

const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => res.send("Welcome to RealAssist.ai"));
app.use("/api", router);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
