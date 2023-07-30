import React from "react";
import { AccessTime, Restaurant } from "@mui/icons-material";

interface IProps {
  imgSrc: string;
  title: string;
  time: number;
  serving: number;
}

export const Card = ({ imgSrc, title, time, serving }: IProps) => {
  return (
    <div className="min-h-[250px] min-w-[200px] flex flex-col items-center p-3 rounded-lg bg-white hover:transform">
      <img src={imgSrc} alt="" />
      <div className="text-base text-center mt-1 line-clamp-2">{title}</div>
      <div className="w-full mt-auto flex justify-between text-xs">
        <div>
          <AccessTime
            sx={{ fontSize: 16, color: "#81BAB4", marginRight: "2px" }}
          />{" "}
          {time} min
        </div>
        <div>
          {serving}
          <Restaurant
            sx={{ fontSize: 16, color: "#81BAB4", marginLeft: "2px" }}
          />
        </div>
      </div>
    </div>
  );
};
