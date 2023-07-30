import React from "react";
import { Button } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

interface IProps<T> {
  items: T[];
  carouselTitle: string;
  carouselCard: (card: T) => React.ReactNode;
}

export const Carousel = <T,>({ items, carouselTitle, carouselCard }: IProps<T>) => {
    const scrollRef = React.useRef(null);

    return (
      <div className="my-5">
        <h3 className="font-playfair-display text-5xl pb-2">{carouselTitle}</h3>
        <div className="relative">
          <div
            ref={scrollRef}
            className="px-[1px] py-1 flex gap-4 flex-nowrap overflow-auto"
          >
            {items.map(carouselCard)}
          </div>
          <div className="flex items-center h-full w-30 absolute top-0 left-[-24px] bg-gradient-to-r from-pastel-gray to-transparent">
            <Button
              variant="contained"
              sx={{
                width: 48,
                height: 48,
                minWidth: 48,
                background: "white",
                ":hover": {
                  backgroundColor: "#81BAB4",
                },
              }}
            >
              <ChevronLeft sx={{ color: "#32324D" }} />
            </Button>
          </div>
          <div className="flex flex-row-reverse items-center h-full w-30 absolute top-0 right-[-24px] bg-gradient-to-l from-pastel-gray to-transparent">
            <Button
              variant="contained"
              sx={{
                width: 48,
                height: 48,
                minWidth: 48,
                background: "white",
                ":hover": {
                  backgroundColor: "#81BAB4",
                },
              }}
            >
              <ChevronRight sx={{ color: "#32324D" }} />
            </Button>
          </div>
        </div>
      </div>
    );
  }
