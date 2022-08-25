import { useDispatch } from "react-redux";
import { search, setCountry } from "../Services/Store/Actions/listActions";
import { debounce } from "../Services/Utils/debounce";

const mySearch = debounce((_search, dispatch) => {
  dispatch(setCountry(_search));
  dispatch(search());
}, 1000);

export const useSetCountry = () => {
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    mySearch(evt.target.value, dispatch);
  };

  return handleChange;
};
