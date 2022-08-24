import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Homepage } from "../Pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<p>Colombia hermosa</p>} />
        <Route path="*" element={<p>Ruta no encontrada</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
