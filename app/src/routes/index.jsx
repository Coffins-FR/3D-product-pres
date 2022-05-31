import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "@components/Nav";
const Start = React.lazy(() => import("../pages/Start"));
const Continue = React.lazy(() => import("../pages/Continue"));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Nav />
      <Suspense fallback={null}>
        <Routes>
          <Route index element={<Start />} />
          <Route path="/continue" element={<Continue />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;
