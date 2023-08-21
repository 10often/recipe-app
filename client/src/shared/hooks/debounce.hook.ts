import { useRef, useCallback } from "react";

export const useDebounce = <T extends (...args: any[]) => void>(
  func: T,
  debounce: number
): T => {
  const timeout = useRef<number>();

  return useCallback(
    (...args: Parameters<T>[]) => {
      const delayedFunc = () => {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
        func(...args);
      };

      timeout.current = window.setTimeout(delayedFunc, debounce);
    },
    [func, debounce]
  ) as T;
};
