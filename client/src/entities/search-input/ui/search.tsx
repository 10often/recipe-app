import React, { ChangeEvent, KeyboardEvent } from "react";
import { IconButton } from "@mui/material";
import { Tune, Search } from "@mui/icons-material";
import { useSearchRecipes } from "../api/search-api";
import { useSearchContext } from "../../../shared/providers/search-provider";
import { Input } from "../../../shared/ui/input";
import { getFilledFilters } from "../../filters"; // todo перенесется в фичу

export const SearchInput = () => {
  const { open, search, filter, setOpen, setSearch } = useSearchContext();

  // todo в фичи -->
  const { mutate } = useSearchRecipes();

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);

    if (event.target.value.length >= 3) {
      console.log("show autocomplete");
    }
  };

  const handleKeyPressSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && search.length >= 3) {
      mutate({ ...getFilledFilters(filter), query: search });
    }
  };

  const handleClickFilter = () => {
    setOpen(!open);
  };

  // todo <-- в фичи

  return (
    <div className="flex flex-col relative">
      <div className="flex w-full gap-2 z-10">
        <Input
          value={search}
          placeholder="Search"
          onChange={handleChangeSearch}
          onKeyPress={handleKeyPressSearch}
          startAdornment={
            <Search className="hover:cursor-text" sx={{ color: "#b8bbbb" }} />
          }
          endAdornment={
            <IconButton size="small" onClick={handleClickFilter}>
              <Tune
                fontSize="small"
                className="hover:cursor-pointer"
                sx={{ color: "#fbd180" }}
              />
            </IconButton>
          }
        />
      </div>
    </div>
  );
};
