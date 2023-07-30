import { IRecipesResponse } from "../../recipe";
import { useFetch } from "../../../shared/hooks/http.hook";
import { ISearchRequest } from "../../filters"; // todo

export const useSearchRecipes = () => {
  const { useSend } = useFetch();

  return useSend<IRecipesResponse, ISearchRequest>("/api/food/search", {
    onSuccess: () => {
      console.log("onSuccess");
    },
  });
};
