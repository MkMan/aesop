const express = require("express");
const cors = require("cors");
const path = require("path");

const responsesDirectory = path.join(__dirname, "responses");

const app = express();
const port = 3000;

app.use(cors());

app.get("/nav/shop", (req, res) => {
  return res.sendFile(`${responsesDirectory}/shop.json`);
});

app.listen(port, () =>
  console.log(`Mock Aesop API running at http://localhost:${port}`)
);
