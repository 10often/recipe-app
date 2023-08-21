import React, { useCallback, useEffect, useRef } from "react";
import { Button } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import {
  isVisibleLeftArrow,
  isVisibleRightArrow,
} from "../lib/arrow-visibility";
import { useDebounce } from "../../../shared/hooks/debounce.hook";

interface IProps<T> {
  items: T[];
  carouselTitle: string;
  carouselCard: (card: T) => React.ReactNode;
}

export const Carousel = <T,>({
  items,
  carouselTitle,
  carouselCard,
}: IProps<T>) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isLeftArrow, setLeftArrow] = React.useState<boolean>(false);
  const [isRightArrow, setRightArrow] = React.useState<boolean>(false);

  const toggleVisibility = useCallback(() => {
    const el = scrollRef.current;
    if (el) {
      setLeftArrow(isVisibleLeftArrow(el));
      setRightArrow(isVisibleRightArrow(el));
    }
  }, []);

  const debouncedToggleVisibility = useDebounce(toggleVisibility, 100);

  useEffect(() => {
    toggleVisibility();
  }, [toggleVisibility]);

  useEffect(() => {
    const el = scrollRef.current;
    window.addEventListener("resize", debouncedToggleVisibility);
    if (el) {
      el.addEventListener("scroll", debouncedToggleVisibility);
    }
    return () => {
      window.removeEventListener("resize", debouncedToggleVisibility);
      if (el) {
        el?.removeEventListener("scroll", debouncedToggleVisibility);
      }
    };
  }, [debouncedToggleVisibility]);

  const handleScrollButtonClick = (direction: "left" | "right") => () => {
    const el = scrollRef.current;
    if (el) {
      el.scrollTo({
        left:
          direction === "left"
            ? el.scrollLeft - el.clientWidth * 0.7
            : el.scrollLeft + el.clientWidth * 0.7,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="my-5">
      <h3 className="font-playfair-display text-5xl pb-2">{carouselTitle}</h3>
      <div className="relative">
        <div
          className="
            flex items-center h-full w-30 absolute top-0 left-[-24px] 
            bg-gradient-to-r from-pastel-gray to-transparent z-10
          "
        >
          {isLeftArrow && (
            <Button
              onClick={handleScrollButtonClick("left")}
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
          )}
        </div>
        <div
          ref={scrollRef}
          className="px-[1px] py-1 flex gap-4 flex-nowrap overflow-scroll no-scrollbar"
        >
          {items.map(carouselCard)}
        </div>
        <div
          className="
            flex flex-row-reverse items-center h-full w-30 absolute top-0
            right-[-24px] bg-gradient-to-l from-pastel-gray to-transparent
          "
        >
          {isRightArrow && (
            <Button
              onClick={handleScrollButtonClick("right")}
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
          )}
        </div>
      </div>
    </div>
  );
};
