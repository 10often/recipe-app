const { Router } = require("express");
const config = require("config");
const https = require("https");
const getQueryParams = require("../utils/getQueryParams");

const router = Router();

const spoonacular = config.get("spoonacular") || null;
const key = config.get("spoonacularKey") || "";
const baseUrl = (path, query = "") =>
  `${spoonacular}${path}${query}${query ? "&" : "?"}apiKey=${key}`;

import randomRecipesMock = require("../mock/random-recipes.json");
import randomAsianRecipesMock = require("../mock/random-asian-recipes.json");
import randomEuropeanRecipesMock = require("../mock/random-european-recipes.json");
router.get("/popular", async (req, res) => {
  try {
    // TODO: получает список рецептов (10 штук)
    const query = getQueryParams(req.query);
    // const url = `${baseUrl("/random", query)}&number=10`;
    // console.log(url);
    // https.get(url, (response) => {
    //   let rawData = "";
    //
    //   response.on("data", (chunk) => (rawData += chunk));
    //
    //   response.on("end", () => res.send(rawData));
    // });
    // TODO: мок запроса
    console.log(query);
    if (query.indexOf("asian") > -1) {
      res.send(randomAsianRecipesMock);
    } else if (query.indexOf("european") > -1) {
      res.send(randomEuropeanRecipesMock);
    } else {
      res.send(randomRecipesMock);
    }
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please try again" });
  }
});

import complexSearch = require("../mock/complex-search.json");
router.post("/search", async (req, res) => {
  try {
    const body = Object.keys(req.body).reduce((acc, key) => {
      if (Array.isArray(req.body[key])) {
        acc[key] = req.body[key].join(",");
      } else {
        acc[key] = req.body[key];
      }

      return acc;
    }, {});

    const query = getQueryParams(body);

    // TODO: поиск рецепта
    // const url = `${baseUrl(
    //   "/complexSearch",
    //   query
    // )}&number=10&addRecipeInformation=true`;
    //
    // https.get(url, (response) => {
    //   let rawData = "";
    //
    //   response.on("data", (chunk) => (rawData += chunk));
    //
    //   response.on("end", () => res.send(rawData));
    // });
    // TODO: мок запроса
    res.send(complexSearch);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please try again" });
  }
});

module.exports = router;
