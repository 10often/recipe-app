import { useFetch } from "../../../shared/hooks/http.hook";
import { IFilterResponse } from "../model/filter";

export const useFilterListData = () => {
  const { useRequest } = useFetch();


  return useRequest<IFilterResponse>("filters", "/api/search/filters");
};
