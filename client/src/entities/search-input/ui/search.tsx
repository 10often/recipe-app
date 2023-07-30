import React, {ChangeEvent, KeyboardEvent} from "react";
import { Search } from "@mui/icons-material";
import { useSearchContext } from "../../../shared/providers/search-provider";
import { Input } from "../../../shared/ui/input";

interface IProps {
  endAdornment: React.ReactNode;
  handleSearch: () => void;
}

export const SearchInput = ({ endAdornment, handleSearch }: IProps) => {
  const { search, setSearch } = useSearchContext();

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);

    if (event.target.value.length >= 3) {
      console.log("show autocomplete");
    }
  };

  const handleKeyPressSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && search.length >= 3) {
      handleSearch();
    }
  };

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
          endAdornment={endAdornment}
        />
      </div>
    </div>
  );
};
