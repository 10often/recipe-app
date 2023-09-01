import React from "react";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Card,
} from "@mui/material";
import { AccessTime, Restaurant } from "@mui/icons-material";
import { IRecipe } from "../model/recipe";

interface IProps {
  recipe: IRecipe;
}

export const RecipeCard = ({ recipe }: IProps) => {
  return (
    <Card key={recipe.id} sx={{ minWidth: 250, maxWidth: 250 }}>
      <CardActionArea
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "flex-start",
        }}
        // onClick={cardClick}
      >
        <CardMedia
          component="img"
          className="h-[150px]"
          image={recipe.image || require("../../../shared/img/food-plug.webp")}
          alt={recipe.title}
        />
        <CardContent className="w-full h-[inherit] flex flex-col justify-between">
          <Typography variant="h6" component="div" className="line-clamp-2">
            {recipe.title}
          </Typography>
          <div className="w-full mt-auto flex justify-between text-xs mt-2">
            <div>
              <AccessTime
                sx={{
                  fontSize: 16,
                  color: "#81BAB4",
                  marginRight: "2px",
                }}
              />{" "}
              {recipe.readyInMinutes} min
            </div>
            <div>
              {recipe.servings}
              <Restaurant
                sx={{
                  fontSize: 16,
                  color: "#81BAB4",
                  marginLeft: "2px",
                }}
              />
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
