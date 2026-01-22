import React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./form_success.css";
import { useNavigate } from "react-router-dom";

function FormSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Funkce pro spuštění konverzního hitu
    const triggerConversion = () => {
      // Bezpečnostní kontrola, zda objekt existuje (pokud se skript nenačetl)
      if (window.sznIVA && window.rc) {
        // Nastavení identity (email)
        window.sznIVA.IS.updateIdentities({
          eid: null, // Ideálně zahashovaný email, nebo null
        });

        // Konfigurace konverze
        var conversionConf = {
          id: 100265119, // Vaše ID
          value: null, // Hodnota z props
          consent: 1, // 1 = souhlas, 0 = nesouhlas
        };

        // Odeslání
        window.rc.conversionHit(conversionConf);
        console.log("Sklik konverze odeslána");
      }
    };

    if (!document.querySelector('script[src="https://c.seznam.cz/js/rc.js"]')) {
      const script = document.createElement("script");
      script.src = "https://c.seznam.cz/js/rc.js";
      script.async = true;
      script.onload = () => triggerConversion(); // Spustit až po načtení
      document.body.appendChild(script);
    } else {
      // Pokud už skript existuje, rovnou spustíme konverzi
      triggerConversion();
    }
  }, []);

  return (
    <>
      <div class="wrapper">
        <HelmetProvider>
          <Helmet>
            <meta charSet="utf-8" />
            <title> | Filip Zelený</title>
            <link rel="canonical" href="https://www.filipzeleny.cz/form-success" />
          </Helmet>
        </HelmetProvider>
        <div class="container">
          <div class="form-success-wrap">
            <div class="form-success-content">
              <h1>Děkujeme za odeslání formuláře</h1>
              <i class="fa-solid fa-check"></i>
              <button className="save-btn" onClick={() => navigate("/")}>
                Zpět
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormSuccess;
