const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 8080;

app.use(bodyParser.json());

const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

const getFile = (filepath) => {
  let data;
  try {
    data = fs.readFileSync(filepath, "utf8");
  } catch (err) {
    console.error(err);
  }

  return data;
};

const dataPath = path.join(__dirname, "data.json");

app.get("/getData", (req, res) => {
  res.json(getFile(dataPath));
});

app.get("/legenda", (req, res) => {
  res.sendFile(path.join(__dirname, "legenda.md"));
});

app.post("/addData", (req, res) => {
  const album = req.body;

  if (album) {
    const data = fs.readFileSync(dataPath, "utf8"); // Retrieve data from the file
    const parsedData = JSON.parse(data);
    parsedData.push(album); // Add new album

    fs.writeFileSync(dataPath, JSON.stringify(parsedData), "utf-8"); // Write new content in the file
  }
});

app.post("/editData", (req, res) => {
  const data = req.body;

  fs.writeFileSync(dataPath, JSON.stringify(data), "utf-8");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
