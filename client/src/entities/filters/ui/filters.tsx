import React, { useEffect, useState } from "react";
import {
  Checkbox,
  Collapse,
  FormControl,
  IconButton,
  InputLabel,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { useFilterListData } from "../api/filter-api";
import { getFilledFilters } from "../lib/getFilledFilters";
import { IAppliedFilter, IFilterList } from "../model/filter";
import { useSearchContext } from "../../../shared/providers/search-provider";
import { useSearchRecipes } from "../../search-input";

export const Filters = () => {
  const {
    open: openExpand,
    search: searchValue,
    filter: filterValue,
    setFilter: setFilterValue,
  } = useSearchContext();

  const [filters, setFilters] = useState<IFilterList | null>(null);

  const { data: filtersData } = useFilterListData();

  const { mutate } = useSearchRecipes(); // todo в фичи

  useEffect(() => {
    if (filtersData) {
      setFilters(filtersData);
    }
  }, [filtersData]);

  const handleChangeFilterValue =
    (key: string) => (e: SelectChangeEvent<string[]>) => {
      const normalizedFilterValue = { ...filterValue } || {};
      setFilterValue({
        ...normalizedFilterValue,
        [key]: e.target.value,
      } as IAppliedFilter);
    };

  const handleAdvancedSearch = () => {
    mutate({ ...getFilledFilters(filterValue), query: searchValue });
  };

  return (
    <Collapse in={openExpand} className="absolute w-full top-[30px] z-[1]">
      <Paper className="bg-white rounded-b-lg flex flex-nowrap items-end p-[8px] pt-[12px]">
        {filters &&
          Object.keys(filters).map((key: string) => (
            <FormControl
              key={key}
              size="small"
              variant="standard"
              sx={{
                m: 1,
                width: "100%",
                "& label.Mui-focused": {
                  color: "#81BAB4",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "#81BAB4",
                },
                "& .MuiInputBase-root.MuiInput-root.MuiInput-underline:hover:before":
                  {
                    borderColor: "#81BAB4",
                  },
              }}
            >
              <InputLabel id="label">
                {filters[key as keyof IAppliedFilter].title}
              </InputLabel>
              <Select
                multiple
                labelId="label"
                onChange={handleChangeFilterValue(key)}
                value={
                  filterValue && filterValue[key as keyof IAppliedFilter]
                    ? filterValue[key as keyof IAppliedFilter]
                    : []
                }
                renderValue={(selected) => selected.join(", ")}
              >
                {filters[key as keyof IAppliedFilter].data.map((item) => (
                  <MenuItem key={item} value={item}>
                    <Checkbox
                      sx={{
                        color: "#81BAB4",
                        "&.Mui-checked": {
                          color: "#81BAB4",
                        },
                      }}
                      checked={
                        !!filterValue &&
                        !!filterValue[key as keyof IAppliedFilter] &&
                        (filterValue[key as keyof IAppliedFilter]?.indexOf(
                          item
                        ) || 0) > -1
                      }
                    />
                    <ListItemText primary={item} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ))}
        <IconButton
          size="small"
          sx={{
            marginBottom: "8px",
            "&:disabled > svg": {
              color: "#c4c4c4",
            },
          }}
          disabled={!getFilledFilters(filterValue)}
          onClick={handleAdvancedSearch}
        >
          <ArrowForward
            fontSize="small"
            className="hover:cursor-pointer"
            sx={{ color: "#81BAB4" }}
          />
        </IconButton>
      </Paper>
    </Collapse>
  );
};
