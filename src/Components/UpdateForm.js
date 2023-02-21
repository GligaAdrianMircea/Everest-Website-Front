import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import heavyMultiplicationX from "@iconify/icons-emojione-v1/heavy-multiplication-x";
import { Icon } from "@iconify/react";
import "../Styles/update.css";
import "../Styles/allproducts.css";
const UpdateForm = ({
  id,
  titlul,
  categoriel,
  emaill,
  telefonl,
  locatiel,
  descrierel,
  pretl,
}) => {
  let full = document.querySelector(".full");
  full.classList.add("visibel");
  const navigate = useNavigate();
  const [titlu, setTitlu] = useState(titlul);
  const [categorie, setCategorie] = useState(categoriel);
  const [email, setEmail] = useState(emaill);
  const [telefon, setTelefon] = useState(telefonl);
  const [descriere, setDescriere] = useState(descrierel);
  const [pret, setPret] = useState(pretl);
  const [locatie, setLocatie] = useState(locatiel);
  const close_update = () => {
    document.getElementsByClassName("all-update-form")[0].classList.add("non-visibleee")
   

    navigate(0);
  };
  const handleUpdateProduct = () => {
    fetch("https://everest-app-api.onrender.com/api/sell/update/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titlu,
        categorie,
        email,
        telefon,
        descriere,
        pret,
        locatie,
      }),
    })
    .then(() => navigate(0))
    .catch((error) => console.log(error))
    
    
  };
  return (
    <div className="upt-formsdiv">
      <div className="upt-center-inputs">
        <div className="upt-close">
          <Icon
            className="upt-close-update"
            onClick={close_update}
            icon={heavyMultiplicationX}
          />
        </div>
        <div className="upt-put-down">
          <div className="upt-label">
            <p className="upt-labelll">Titlu</p>
          </div>
          <div className="upt-input-div">
            <input
              className="upt-input-field"
              type="text"
              required
              onChange={(e) => setTitlu(e.target.value)}
              value={titlu}
            ></input>
          </div>
          <div className="upt-label">
            <p className="upt-labelll">Categorie</p>
          </div>
          <div className="upt-input-div">
            <select
              className="upt-input-field"
              required
              onChange={(e) => setCategorie(e.target.value)}
              value={categorie}
            >
              <option value="alegti" className="upt-labelll">
                Alegeți
              </option>
              <option value="jucarii" className="upt-labelll">
                Jucarii
              </option>
              <option value="natura" className="upt-labelll">
                Natura
              </option>
              <option value="papuci" className="upt-labelll">
                Papuci
              </option>
              <option value="technologie" className="upt-labelll">
                Technologie
              </option>
              <option value="ceasuri" className="upt-labelll">
                Ceasuri
              </option>
              <option value="pentru-casa" className="upt-labelll">
                Pentru casa
              </option>
              <option value="imbracaminte" className="upt-labelll">
                Îmbracaminte
              </option>
              <option value="arta" className="upt-labelll">
                Arta
              </option>
              <option value="altele" className="upt-labelll">
                Altele
              </option>
            </select>
          </div>
          <div className="upt-label">
            <p className="upt-labelll">Email</p>
          </div>
          <div className="upt-input-div">
            <input
              type="email"
              className="upt-input-field"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
          </div>
          <div className="upt-label">
            <p className="upt-labelll">Telefon</p>
          </div>
          <div className="upt-input-div">
            <input
              className="upt-input-field"
              type="tel"
              pattern="[0-0]{1}[3-7]{1}[0-9]{8}"
              required
              onChange={(e) => setTelefon(e.target.value)}
              value={telefon}
            ></input>
          </div>
          <div className="upt-label">
            <p className="upt-labelll">Descriere</p>
          </div>
          <div className="upt-input-div">
            <textarea
              className="upt-input-field"
              required
              onChange={(e) => setDescriere(e.target.value)}
              value={descriere}
            ></textarea>
          </div>
          <div className="upt-label">
            <p className="upt-labelll">Pret</p>
          </div>
          <div className="upt-input-div">
            <input
              className="upt-input-field"
              type="number"
              required
              onChange={(e) => setPret(e.target.value)}
              value={pret}
            ></input>
          </div>
          <div className="upt-label">
            <p className="upt-labelll">Locatie</p>
          </div>
          <div className="upt-input-div">
            <input
              className="upt-input-field"
              type="text"
              required
              onChange={(e) => setLocatie(e.target.value)}
              value={locatie}
            ></input>
          </div>
          <div className="upt-input-div upt-buton">
            <button
              className="upt-input-field upt-button"
              onClick={handleUpdateProduct}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateForm;
