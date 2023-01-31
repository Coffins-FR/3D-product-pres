import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "@components/Nav";
const Home = React.lazy(() => import("../pages/Home"));

function AppRoutes() {
  return (
    <BrowserRouter>
      <Nav />
      <Suspense fallback={null}>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;
