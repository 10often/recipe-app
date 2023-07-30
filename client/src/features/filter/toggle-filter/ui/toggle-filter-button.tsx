import React from 'react';
import { Tune } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useSearchContext } from "../../../../shared/providers/search-provider";

export const ToggleFilterButton = () => {
  const { open, setOpen } = useSearchContext();

  const handleClickFilter = () => {
    setOpen(!open);
  };

  return (
    <IconButton size="small" onClick={handleClickFilter}>
      <Tune
        fontSize="small"
        className="hover:cursor-pointer"
        sx={{ color: "#fbd180" }}
      />
    </IconButton>
  )
}