import { IRecipesResponse } from "../model/recipe";
import { useFetch } from "../../../shared/hooks/http.hook";

export const usePopularRecipes = () => {
  const { useRequest } = useFetch();

  return useRequest<IRecipesResponse>(
    "popularRecipesData",
    "/api/food/popular"
  );
};

export const useAsianRecipes = () => {
  const { useRequest } = useFetch();

  return useRequest<IRecipesResponse>(
    "asianRecipesData",
    "/api/food/popular?tags=asian"
  );
};

export const useEuropeanRecipes = () => {
  const { useRequest } = useFetch();

  return useRequest<IRecipesResponse>(
    "europeanRecipesData",
    "/api/food/popular?tags=european"
  );
};
