import "./Region.css";

export const Region = () => {
  return (
    <select className="select dark-theme">
      <option value="default">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europe">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
  );
};
