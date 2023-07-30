import { IRecipesResponse } from "../../../../entities/recipe";
import {getFilledFilters, IAppliedFilter, ISearchRequest} from "../../../../entities/filters";
import { useFetch } from "../../../../shared/hooks/http.hook";

export const useSearchRecipes = (search: string, filter: IAppliedFilter | null) => {
  const { useSend } = useFetch();

  const { mutate } = useSend<IRecipesResponse, ISearchRequest>("/api/food/search", {
    onSuccess: () => {
      console.log("onSuccess");
    },
  });

  return () => mutate({ ...getFilledFilters(filter), query: search });
};
