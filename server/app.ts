const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/food", require("./routes/food.routes"));
app.use("/api/search", require("./routes/search-filter.routes"));

const PORT = config.get("port") || 5000;

async function start() {
  try {
    app.listen(PORT, () => {
      console.log(`App has been started on port ${PORT}...`);
    });
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
}

start();
