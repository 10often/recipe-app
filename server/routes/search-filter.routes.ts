const { Router } = require("express");
const config = require("config");
const https = require("https");
const getQueryParams = require("../utils/getQueryParams");

const router = Router();
const filters = {
  cuisines: {
    title: "Cuisines",
    data: [
      "African",
      "American",
      "British",
      "Cajun",
      "Caribbean",
      "Chinese",
      "Eastern",
      "European",
      "European",
      "French",
      "German",
      "Greek",
      "Indian",
      "Irish",
      "Italian",
      "Japanese",
      "Jewish",
      "Korean",
      "Latin",
      "American",
      "Mediterranean",
      "Mexican",
      "Middle",
      "Eastern",
      "Nordic",
      "Southern",
      "Spanish",
      "Thai",
      "Vietnamese",
    ],
  },
  diets: {
    title: "Diets",
    data: [
      "Gluten Free",
      "Ketogenic",
      "Vegetarian",
      "Lacto-Vegetarian",
      "Ovo-Vegetarian",
      "Vegan",
      "Pescetarian",
      "Paleo",
      "Primal",
      "Low FODMAP",
      "Whole30",
    ],
  },
  intolerances: {
    title: "Intolerances",
    data: [
      "Dairy",
      "Egg",
      "Gluten",
      "Grain",
      "Peanut",
      "Seafood",
      "Sesame",
      "Shellfish",
      "Soy",
      "Sulfite",
      "Tree Nut",
      "Wheat",
    ],
  },
  mealTypes: {
    title: "Meal type",
    data: [
      "main course",
      "side dish",
      "dessert",
      "appetizer",
      "salad",
      "bread",
      "breakfast",
      "soup",
      "beverage",
      "sauce",
      "marinade",
      "fingerfood",
      "snack",
      "drink",
    ],
  },
};

router.get("/filters", async (req, res) => {
  try {
    const uniqueFilters = Object.keys(filters).reduce((acc, key) => {
      acc[key] = {
        ...filters[key],
        data: [...new Set(filters[key].data)],
      };

      return acc;
    }, {});
    res.json(uniqueFilters);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please try again" });
  }
});

module.exports = router;
