import { useDispatch } from "react-redux";

import { setRegion, search } from "../Services/Store/Actions/listActions";

export const useSetRegion = () => {
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    dispatch(setRegion(evt.target.value));
    dispatch(search());
  };

  return handleChange;
};
