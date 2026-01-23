import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SubMenu from "./pages/SubMenuTable/SubMenuTable";
import Konfigurator from "./pages/configurator/configurator";
import Produkt from "./pages/produkt/produkt";
import Galerie from "./pages/galerie/galerie";
import Interiery from "./pages/interiery/interiery";
import Main from "./pages/main/home";
import Kontakt from "./pages/kontakt/kontakt";
import Login from "./pages/admin/login";
import Admin from "./pages/admin/admin";
import Admin_Gallery from "./pages/admin/admin-gallery";
import FormSuccess from "./pages/form/form_success";
import "./App.css";

// Hlavní App komponenta, která obaluje aplikaci v <BrowserRouter>
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

// Komponenta, která obsahuje routování a umožňuje použití useLocation()
function AppRoutes() {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
      duration: 800,
    });
  }, []);
  const [Id, setId] = useState("");
  const location = useLocation();

  // 2. SKLIK Retargeting (Přidaný kód)
  useEffect(() => {
    // Funkce se spustí při každé změně stránky (location)
    // Pokud to chceš jen 1x při vstupu na web, smaž [location] ze závislostí na konci useEffectu
    if (window.rc && window.sznIVA) {
      try {
        window.sznIVA.IS.updateIdentities({
          eid: null, // Zde můžeš doplnit zahashovaný email, pokud ho máš
        });

        var retargetingConf = {
          rtgId: 1664699,
          consent: 1, // 0 = bez souhlasu, 1 = se souhlasem (zde by měla být proměnná z cookie lišty)
        };

        window.rc.retargetingHit(retargetingConf);
        console.log("Sklik retargeting odeslán");
      } catch (error) {
        console.error("Chyba při odesílání Sklik retargetingu:", error);
      }
    }
  }, [location]);
  // 2. SKLIK Retargeting (Přidaný kód)
  const getQueryParam = (param) => {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.get(param);
  };

  useEffect(() => {
    const urlemail = getQueryParam("id");
    setId(urlemail);
  }, [location]);

  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/stoly" element={<SubMenu />} />
      <Route path="/konfigurator" element={<Konfigurator />} />
      <Route path="/stoly/produkt" element={<Produkt id={Id} />} />
      <Route path="/galerie" element={<Galerie />} />
      <Route path="/interiery" element={<Interiery />} />
      <Route path="/kontakt" element={<Kontakt />} />
      <Route path="/admin" element={<Login />} />¨
      <Route path="/admin/admin-panel" element={<Admin />} />
      <Route path="/admin/admin-gallery" element={<Admin_Gallery />} />
      <Route path="/form-success" element={<FormSuccess />} />
    </Routes>
  );
}

export default App;
