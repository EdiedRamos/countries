import "./Search.css";
import { useSetCountry } from "../../Hooks/usetSetCountry";
import { useGetTheme } from "../../Hooks/useGetTheme";

export const Search = () => {
  const handleChange = useSetCountry();
  const theme = useGetTheme();
  return (
    <label className={`label-search ${theme}-theme`}>
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
