import { Card } from "../../Components";
import { SkeletonCards } from "../";
import { useGetFiltered } from "../../Hooks/useGetFiltered";

export const Cards = () => {
  const countries = useGetFiltered();
  if (countries?.status?.startsWith("C"))
    return (
      <p className="loading dark-theme custom-margin">{countries.status}</p>
    );
  return (
    <div className="cards-container">
      {countries.status ? (
        <SkeletonCards />
      ) : (
        countries.map((country) => (
          <Card key={country.name.common} {...country} />
        ))
      )}
    </div>
  );
};
