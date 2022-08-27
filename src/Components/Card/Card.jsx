import { useNavigate } from "react-router-dom";
import "./Card.css";
import { useGetTheme } from "../../Hooks/useGetTheme";

export const Card = (props) => {
  const theme = useGetTheme();
  const navigate = useNavigate();
  return (
    <div
      className={`card-container ${theme}-theme`}
      onClick={() => navigate(`/details/${props.name.common}`)}
    >
      <img src={props.flags.png} alt={`flag from ${props.name.common}`} />
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
