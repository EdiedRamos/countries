import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setList } from "../Services/Store/Actions/listActions";

export const useSetListStore = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setList());
  }, []);
};
