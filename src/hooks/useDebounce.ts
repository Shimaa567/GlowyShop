import React from "react";

interface DebounceArgs {
  // fn: () => void
  searchText: string;
  delay: number;
}

const useDebounce = (args: DebounceArgs) => {
  const { searchText, delay } = args;
  const [debouncedValue, setDebouncedValue] = React.useState(searchText);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchText);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchText, delay]);

  return debouncedValue;
};

export default useDebounce;
