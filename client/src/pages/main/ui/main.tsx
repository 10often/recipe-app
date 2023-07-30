import React, { useEffect, useState } from "react";
import {
  IRecipe,
  RecipeCard,
  useAsianRecipes,
  useEuropeanRecipes,
  usePopularRecipes,
} from "../../../entities/recipe";
import { Carousel } from "../../../entities/carousel";

export const Main = () => {
  const [popularRecipes, setPopularRecipes] = useState<IRecipe[]>([]);
  const [asianRecipes, setAsianRecipes] = useState<IRecipe[]>([]);
  const [europeanRecipes, setEuropeanRecipes] = useState<IRecipe[]>([]);

  const { data: popularRecipesData } = usePopularRecipes();
  const { data: asianRecipesData } = useAsianRecipes();
  const { data: europeanRecipesData } = useEuropeanRecipes();

  useEffect(() => {
    if (popularRecipesData) {
      setPopularRecipes(popularRecipesData.recipes);
    }
    if (asianRecipesData) {
      setAsianRecipes(asianRecipesData.recipes);
    }
    if (europeanRecipesData) {
      setEuropeanRecipes(europeanRecipesData.recipes);
    }
  }, [asianRecipesData, europeanRecipesData, popularRecipesData]);

  return (
    <div className="px-10 pb-5 flex flex-col h-full overflow-auto">
      {popularRecipes.length > 0 && (
        <Carousel<IRecipe>
          items={popularRecipes}
          carouselTitle="Popular"
          carouselCard={(recipe: IRecipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          )}
        />
      )}
      {asianRecipes.length > 0 && (
        <Carousel<IRecipe>
          items={asianRecipes}
          carouselTitle="Asian"
          carouselCard={(recipe: IRecipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          )}
        />
      )}
      {europeanRecipes.length > 0 && (
        <Carousel<IRecipe>
          items={europeanRecipes}
          carouselTitle="European"
          carouselCard={(recipe: IRecipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          )}
        />
      )}
    </div>
  );
};
