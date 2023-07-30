import React, {
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface ISearchContext<T> {
  open: boolean;
  search: string;
  filter: T | null;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setSearch: Dispatch<SetStateAction<string>>;
  setFilter: Dispatch<SetStateAction<T | null>>;
}

// todo how to do generic with react context and remove any type?
const SearchContext = createContext<ISearchContext<any> | null>(null);

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === null) {
    throw new Error("useSearchStateContext was used outside of its Provider");
  }

  return context;
};

interface IProps<T> {
  children: ReactNode;
  open: boolean;
  search: string;
  filter: T | null;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setSearch: Dispatch<SetStateAction<string>>;
  setFilter: Dispatch<SetStateAction<T | null>>;
}

export const SearchProvider = <T,>({
  children,
  open,
  search,
  filter,
  setOpen,
  setSearch,
  setFilter,
}: IProps<T>) => {
  return (
    <SearchContext.Provider
      value={{ open, search, filter, setOpen, setSearch, setFilter }}
    >
      {children}
    </SearchContext.Provider>
  );
};
