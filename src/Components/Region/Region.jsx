import "./Region.css";
import { useSetRegion } from "../../Hooks/useSetRegion";
import { useGetTheme } from "../../Hooks/useGetTheme";

export const Region = () => {
  const handleChange = useSetRegion();
  const theme = useGetTheme();
  return (
    <select className={`select ${theme}-theme`} onChange={handleChange}>
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};
