import { useSelector } from "react-redux";

export const useGetCountry = (country) => {
  const infoCountry = useSelector((store) =>
    store.listReducer.countries.filter(
      (_country) => _country.name.common.toLowerCase() === country.toLowerCase()
    )
  );
  return infoCountry[0];
};
