import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

//BrowserRouter
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SubMenu from "./pages/SubMenuTable/SubMenuTable";
import Konfigurator from "./pages/configurator/configurator";
import Produkt from "./pages/produkt/produkt";
import Galerie from "./pages/galerie/galerie";
import Interiery from "./pages/interiery/interiery";

import Main from "./pages/main/home";

//css
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
      duration: 800,
    });
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/podmenu" element={<SubMenu />} />
          <Route path="/konfigurator" element={<Konfigurator />} />
          <Route path="/produkt" element={<Produkt />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/interiery" element={<Interiery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
