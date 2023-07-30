export interface IRecipe {
  id: string;
  title: string;
  image?: string;
  readyInMinutes: number;
  servings: number;
}

export interface IRecipesResponse {
  recipes: IRecipe[];
}
