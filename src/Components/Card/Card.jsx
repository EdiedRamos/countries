import "./Card.css";

export const Card = () => {
  return (
    <div className="card-container dark-theme">
      <img src="https://flagcdn.com/ax.svg" />
      <div className="card-info">
        <h3>Colombia</h3>
        <p className="card-info-title">Population:</p>
        <p>45,000,000</p>
        <br />
        <p className="card-info-title">Region:</p>
        <p>Europe</p>
        <br />
        <p className="card-info-title">Capital:</p>
        <p>Berlin</p>
      </div>
    </div>
  );
};
