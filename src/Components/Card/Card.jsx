import "./Card.css";
import { useGetTheme } from "../../Hooks/useGetTheme";

export const Card = (props) => {
  const theme = useGetTheme();
  return (
    <div className={`card-container ${theme}-theme`}>
      <img src={props.flags.svg} />
      <div className="card-info">
        <h3>{props.name.common}</h3>
        <p className="card-info-title">Population:</p>
        <p>{Intl.NumberFormat().format(props.population)}</p>
        <br />
        <p className="card-info-title">Region:</p>
        <p>{props.region}</p>
        <br />
        <p className="card-info-title">Capital:</p>
        <p>{props.capital}</p>
      </div>
    </div>
  );
};
