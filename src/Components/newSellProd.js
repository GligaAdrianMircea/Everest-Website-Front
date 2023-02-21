import React, { useState } from "react";
import "../Styles/sell-product.css";
import { useNavigate } from "react-router-dom";
import { useGetAuthContex } from "../hooks/useGetAuthContex";
const NewSellProd = () => {
  const [productImage, setProductImage] = useState("");
  const { user } = useGetAuthContex();
  const navigate = useNavigate()
  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];
    TransformFile(file);
  };
  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImage(reader.result);
      };
    } else {
      setProductImage(null);
    }
  };
  const [titlu, setTitlu] = useState(null);
  const [categorie, setCategorie] = useState(null);
  const [email, setEmail] = useState(null);
  const [telefon, setTelefon] = useState(null);
  const [descriere, setDescriere] = useState(null);
  const [pret, setPret] = useState(null);
  const [locatie, setLocatie] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
     await fetch("https://everest-app-api.onrender.com/api/sell/post/prod", {
      method: "POST",
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
        poza: productImage,
        username: user.username,
      }),
    }).catch((error) => console.log(error));
    navigate("/succes-sell-product")
  };
  return (
    <div className="sell-container">
      <div className="form-bars"></div>
      <div className="sell-form">
        <div className="sell-title">Vinde cu Everest</div>
        <form onSubmit={handleSubmit}>
          <div className="sell-arrange">
            <div>
              <div>Titlul postări</div>
              <input
                type="text"
                className="sell-inputs"
                required
                onChange={(e) => setTitlu(e.target.value)}
              
              ></input>
            </div>
          </div>
          <div className="sell-arrange">
            <div>
              <div>Categoria</div>
              <select
                className="sell-inputs"
                required
                onChange={(e) => setCategorie(e.target.value)}
              >
                <option value="alegti">Alegeți</option>
                <option value="jucarii">Jucarii</option>
                <option value="natura">Natura</option>
                <option value="papuci">Papuci</option>
                <option value="technologie">Technologie</option>
                <option value="ceasuri">Ceasuri</option>
                <option value="pentru-casa">Pentru casa</option>
                <option value="imbracaminte">Îmbracaminte</option>
                <option value="arta">Arta</option>
                <option value="altele">Altele</option>
              </select>
            </div>
          </div>
          <div className="sell-arrange-special">
            <div>
              <div className="sell-image-square">
                {productImage ? (<div className="sell-img">
                    <img width='150px' height="150px"  src={productImage} alt="prodimage"/>
                </div>): ( <p className="sell-img">No images yet</p> )}
              </div>
              <label for="sell-uploader" className="sell-btn">Alege</label>
              <input
                type="file"
                id="sell-uploader"
                accept="image/"
                onChange={handleProductImageUpload}
                required
              ></input>
            </div>
            <div className="sell-aside">
              <div>
                <div>E-mail</div>
                <input
                  type="email"
                  className="sell-inputs"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div>
                <div>Telefon</div>
                <input
                  type="tel"
                  pattern="[0-0]{1}[3-7]{1}[0-9]{8}"
                  className="sell-inputs"
                  required
                  onChange={(e) => setTelefon(e.target.value)}
                ></input>
              </div>
            </div>
          </div>
          <div className="sell-arrange">
            <div>
              <div>Descrierea produsului</div>
              <textarea
                className="sell-textarea"
                required
                onChange={(e) => setDescriere(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="sell-arrange">
            <div>
              <div>Preț</div>
              <input
                type="number"
                className="sell-inputs"
                required
                onChange={(e) => setPret(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="sell-arrange">
            <div>
              <div>Locația dumneavoastră</div>
              <input
                type="text"
                className="sell-inputs"
                required
                onChange={(e) => setLocatie(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="sell-arrange">
            <div>
              <button className="sell-button">Publicați</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default NewSellProd;
