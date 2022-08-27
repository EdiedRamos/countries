import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Homepage, Details } from "../Pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details/:country" element={<Details />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
