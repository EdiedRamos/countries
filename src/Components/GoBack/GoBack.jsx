import "./GoBack.css";
import { useNavigate } from "react-router-dom";
import { useGetTheme } from "../../Hooks/useGetTheme";

export const GoBack = (props) => {
  const navigate = useNavigate();
  const theme = useGetTheme();
  return (
    <button
      onClick={() => navigate(props.to)}
      id="go-back"
      className={`${theme}-theme`}
    >
      <ion-icon name="arrow-back" id="arrow-back"></ion-icon>Back
    </button>
  );
};
