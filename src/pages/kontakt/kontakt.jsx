import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import "./kontakt.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function Kontakt() {
  const { t } = useTranslation();
  const [mapLoaded, setMapLoaded] = useState(false);

  const mapContainerStyle = {
    height: "400px",
    width: "100%",
  };

  // Souřadnice pro zobrazení mapy
  const center = {
    lat: 49.94061279296875, // Poskytnutá šířka
    lng: 15.798074722290039, // Poskytnutá délka
  };

  // Pozice markeru
  const markerPosition = {
    lat: 49.94061279296875,
    lng: 15.798074722290039,
  };

  // Funkce se volá, když je mapa načtena
  const onLoad = () => {
    setMapLoaded(true);
  };
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{t("title6")} | Filip Zelený</title>
          <link rel="canonical" href="https://www.filipzeleny.cz/kontakt" />
        </Helmet>
      </HelmetProvider>
      <Navbar />
      <div className="kontakt-wrapper">
        <div className="container">
          <div className="podmenu-title">
            <h1>{t("title6")}</h1>
          </div>
        </div>
        <div className="container">
          <div className="kontakt-content">
            <div className="kontakt-info">
              <div className="kontakt-item" data-aos="fade-right">
                <i className="fa-solid fa-user"></i>
                <h5>Filip Zelený</h5>
              </div>
              <div className="kontakt-item" data-aos="fade-right" data-aos-delay="50">
                <i className="fa-solid fa-map-location-dot"></i>
                <h5>Chrudim, Pod Mostem 42</h5>
              </div>
              <div className="kontakt-item" data-aos="fade-right" data-aos-delay="100">
                <i className="fa-solid fa-envelope"></i>
                <h5>info@filipzeleny.cz</h5>
              </div>
              <div className="kontakt-item" data-aos="fade-right" data-aos-delay="150">
                <i className="fa-solid fa-phone"></i>
                <h5>+420 776 010 780</h5>
              </div>
              <div className="kontakt-item" data-aos="fade-right" data-aos-delay="200">
                <i className="fa-solid fa-address-card"></i>
                <h5>IČO: 17124344</h5>
              </div>
            </div>
            <div class="kontakt-form">
              <form>
                <input type="text" placeholder={t("phName")} data-aos="fade-left" />
                <input type="text" placeholder="E-mail" data-aos="fade-left" data-aos-delay="50" />
                <input type="text" placeholder={t("phSubject")} data-aos="fade-left" data-aos-delay="100" />
                <textarea name="text" id="text" placeholder={t("phText")} data-aos="fade-left" data-aos-delay="150"></textarea>
                <button className="kontakt-btn" data-aos="fade-left" data-aos-delay="200">
                  {t("send")}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="map">
          <LoadScript googleMapsApiKey="AIzaSyCyevr6cxshBwp7VCA2jwkroF5jg-GUFqY" onLoad={onLoad}>
            {mapLoaded && (
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={16}
                options={{
                  mapId: "8a0e442282ecc32a", // Přidání mapId pro vlastní mapovou konfiguraci
                }} // Můžeš upravit hodnotu zoomu podle potřeby
              >
                <Marker position={markerPosition} icon="/img/map_dot.svg" />
              </GoogleMap>
            )}
          </LoadScript>
        </div>
      </div>
      <Footer />
    </>
  );
}
