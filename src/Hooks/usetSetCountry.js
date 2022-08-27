import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { search, setCountry } from "../Services/Store/Actions/listActions";
import { debounce } from "../Services/Utils/debounce";

const mySearch = debounce((_search, dispatch) => {
  dispatch(setCountry(_search));
  dispatch(search());
}, 500);

export const useSetCountry = () => {
  const dispatch = useDispatch();
  const [country, setCountry] = useState("");

  useEffect(() => {
    mySearch(country, dispatch);
  }, [country]);

  return {
    country,
    setCountry,
  };
};
