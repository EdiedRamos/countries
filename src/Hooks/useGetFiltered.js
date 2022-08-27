import { useSelector } from "react-redux";

export const useGetFiltered = () => {
  const countries = useSelector((store) => store.listReducer);
  if (countries.countries.length === 0) return { status: "Loading..." };
  return countries.filtered.length === 0
    ? { status: "Country Not Found" }
    : countries.filtered;
};
