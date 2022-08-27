import { useSelector } from "react-redux";

export const useGetCountry = (country) => {
  const infoCountry = useSelector((store) => store.listReducer.countries);
  if (infoCountry.length === 0) return { status: "Loading..." };
  const result = infoCountry.filter(
    (_country) => _country.name.common.toLowerCase() === country.toLowerCase()
  );
  return result.length > 0 ? result[0] : { status: "Country Not Found" };
};
