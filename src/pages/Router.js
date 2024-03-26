import React from "react";
import { Route, Routes } from "react-router-dom";

//importation des pages nécessaires
import { Home, About, GetProduct } from "./index";

//importation de la page Layout
import Layout from "./Layout";

//importation de la page d'erreur
import Error from "../_utils/Error";

const Router = () => {
  return (
    <Routes>

      <Route  element={<Layout />} >

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<GetProduct />} />
        <Route path="*" element={<Error />} />

      </Route>
     
    </Routes>
  );
};

export default Router;
