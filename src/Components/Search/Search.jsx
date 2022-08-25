import "./Search.css";

import { useSetCountry } from "../../Hooks/usetSetCountry";

export const Search = () => {
  const handleChange = useSetCountry();
  return (
    <label className="label-search dark-theme">
      <ion-icon name="search"></ion-icon>
      <input
        type="text"
        placeholder="Search for a country..."
        className="search"
        onChange={handleChange}
      />
    </label>
  );
};
