import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Search } from "../../widgets/search";

export const Layout = () => {
  return (
    <>
      <Box p={2} pb={0} className="shadow-s">
        <Search />
      </Box>
      <Outlet />
    </>
  );
};
