import React, { useState } from "react";
import { SearchProvider } from "../../../shared/providers/search-provider";
import { IAppliedFilter, SearchFilters } from "../../../entities/filters";
import { SearchInput } from "../../../entities/search-input";

export const Search = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<IAppliedFilter | null>(null);

  return (
    <SearchProvider<IAppliedFilter>
      open={open}
      search={search}
      filter={filter}
      setOpen={setOpen}
      setSearch={setSearch}
      setFilter={setFilter}
    >
      <div className="flex flex-col relative">
        <SearchInput />
        <SearchFilters />
      </div>
    </SearchProvider>
  );
};
