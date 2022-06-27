import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import Index from "../src/Pages/Index";
import NotFound from "../src/Pages/NotFound";
export const AppRoutes = () => {
  return (
    <nav>
      <Routes>
        <Route path="/" exact element={<Index />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </nav>
  );
};