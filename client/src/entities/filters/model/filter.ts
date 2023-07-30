export interface IFilter {
  title: string;
  data: string[];
}

export interface IFilterResponse {
  cuisines: IFilter;
  diets: IFilter;
  intolerances: IFilter;
  mealTypes: IFilter;
}

export interface IFilterList extends IFilterResponse {}

export interface IAppliedFilter {
  cuisines?: string[];
  diets?: string[];
  intolerances?: string[];
  mealTypes?: string[];
}

export interface ISearchRequest extends IAppliedFilter {
  query: string;
}
