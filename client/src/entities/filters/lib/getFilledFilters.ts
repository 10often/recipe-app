import { IAppliedFilter } from "../model/filter";

export const getFilledFilters = (filters: IAppliedFilter | null) => {
  if (!filters) {
    return null;
  }

  return Object.keys(filters).reduce((acc: IAppliedFilter, key) => {
    if ((filters[key as keyof IAppliedFilter]?.length || 0) > 0) {
      acc[key as keyof IAppliedFilter] = filters[key as keyof IAppliedFilter];
    }

    return acc;
  }, {});
};
