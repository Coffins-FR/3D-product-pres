import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Start = React.lazy(() => import("../pages/Start"));
const Continue = React.lazy(() => import("../pages/Continue"));
import App from "../App";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route index element={<Start />} />
          <Route path="continue" element={<Continue />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;
