import "./Header.css";

export const Header = () => {
  return (
    <header className="header-dark-theme dark-theme">
      <h3>Where in the world?</h3>
      <div className="theme-mode">
        <ion-icon name="moon"></ion-icon>
        <p>Dark Mode</p>
      </div>
    </header>
  );
};
