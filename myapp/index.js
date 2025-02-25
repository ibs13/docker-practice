const express = require("express");
const app = express();
console.log("Hello Denmark!");
console.log("Hello Docker!");
console.log("Hello Composer!");
app.get("/develop", (req, res) => {
  console.log("Hello Docker!");
  res.send("Welcome to the develop route!");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Database Url ", process.env.DATABASE_URL);
  console.log(`Server is running on http://localhost:${port}`);
});
