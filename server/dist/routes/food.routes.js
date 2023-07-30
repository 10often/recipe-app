"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require("express");
const config = require("config");
const https = require("https");
const getQueryParams = require("../utils/getQueryParams");
const router = Router();
const spoonacular = config.get("spoonacular") || "";
const key = config.get("spoonacularKey") || "";
const baseUrl = (path, query = "") => `${spoonacular}${path}${query}${query ? "&" : "?"}apiKey=${key}`;
const randomRecipesMock = require("../mock/random-recipes.json");
router.get("/popular", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // TODO: получает список рецептов (10 штук)
        // const url = `${baseUrl('/random')}&number=10`
        // https.get(url, (response) => {
        //   let rawData = '';
        //
        //   response.on('data', (chunk) => rawData += chunk);
        //
        //   response.on('end', () => res.send(rawData));
        // })
        // TODO: мок запроса
        res.send(randomRecipesMock);
    }
    catch (e) {
        res.status(500).json({ message: "Something went wrong, please try again" });
    }
}));
router.post("/search", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = getQueryParams(req.body);
        console.log(query);
        // TODO: поиск рецепта
        // // query, type, cuisine, diet, intolerances, sort, sortDirection, offset, number
        // const url = `${baseUrl("/complexSearch")}&number=10`;
        // https.get(url, (response) => {
        //   let rawData = "";
        //
        //   response.on("data", (chunk) => (rawData += chunk));
        //
        //   response.on("end", () => res.send(rawData));
        // });
        // TODO: мок запроса
    }
    catch (e) {
        res.status(500).json({ message: "Something went wrong, please try again" });
    }
}));
module.exports = router;
//# sourceMappingURL=food.routes.js.map