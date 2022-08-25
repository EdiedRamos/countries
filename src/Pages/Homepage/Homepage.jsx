import { Cards } from "../../Layouts";
import { Filter } from "../../Layouts";

import { useSetListStore } from "../../Hooks/useSetListStore";

export const Homepage = () => {
  useSetListStore();
  return (
    <>
      <Filter />
      <Cards />
    </>
  );
};
