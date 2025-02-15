import React from "react";
import { useState, useEffect } from "react";
import AdminNavbar from "../../components/admin-navbar/admin-navbar";
import "./admin.css";

const Admin = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [data, setData] = useState([]);

  const loadData = () => {
    fetch(`https://designjj-test.eu/php/getProdukt.php`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setData(data.data);
          console.log(data.data);
        } else {
        }
      })
      .catch((err) => {
        console.error("Chyba při načítání dat:", err);
      });
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <AdminNavbar />
      <div className="admin-wrapper">
        <div className="container">
          <div className="admin-content">
            <div class="add-card" onClick={() => setModalOpen(true)}>
              <h3>Nový stůl</h3>
              <i class="fa-solid fa-plus"></i>
            </div>
            {data.map((item) => (
              <div className="stul-card">
                <img src={item.URL} alt="" />
                <div className="card-title">
                  <h3>{item.Nazev}</h3>
                  <div className="card-btns">
                    <button className="edit" title="Upravit stůl">
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button className="delete" title="Smazat stůl">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {modalOpen ? (
        <div className="modal-wrapper">
          <div class="modal">
            <div class="modal-header">
              <h3>Nový stůl</h3>
              <button className="close-modal" onClick={() => setModalOpen(false)} title="Zavřít okno">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div class="modal-content">
              <div class="form-group">
                <input type="text" name="nazev" id="nazev" placeholder="Název stolu" />
              </div>
              <div class="form-group">
                <input type="text" placeholder="Materiál" />
              </div>
              <div class="form-group">
                <input type="number" placeholder="Výška stolu" />
                <input type="number" placeholder="Šířka stolu" />
              </div>
              <div class="form-group">
                <input type="number" placeholder="Tloušťka desky" />
                <input type="number" placeholder="Délka desky" />
              </div>
              <div class="form-group">
                <textarea name="" id="" placeholder="Popis - česky"></textarea>
              </div>
              <div class="form-group">
                <textarea name="" id="" placeholder="Popis - anglicky"></textarea>
              </div>
              <div class="form-group">
                <textarea name="" id="" placeholder="Popis - německy"></textarea>
              </div>
              <div class="form-group">
                <input type="text" name="" id="" placeholder="Cena" />
              </div>
              <div class="form-group">
                <input type="file" name="" id="" />
              </div>
              <button className="save-btn">Uložit</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Admin;
