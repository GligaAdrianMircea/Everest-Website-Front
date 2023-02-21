import { useEffect, useState } from "react";
import React from "react";
import "../Styles/allproducts.css";
import { Icon } from "@iconify/react";
import { useGetAuthContex } from "../hooks/useGetAuthContex";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "./cart";
import refreshIcon from "@iconify/icons-bx/refresh";
import UpdateForm from "./UpdateForm";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
const Papuci = () => {
  var local = JSON.parse(localStorage.getItem("cartItems"));
  if (local) {
    localStorage.removeItem("cartItems");
  }
  const [titlu, setTitlu] = useState(null);
  const [categorie, setCategorie] = useState(null);
  const [email, setEmail] = useState(null);
  const [telefon, setTelefon] = useState();
  const [descriere, setDescriere] = useState(null);
  const [pret, setPret] = useState(null);
  const [locatie, setLocatie] = useState(null);
  const { user } = useGetAuthContex();

  const [showupdate, SetShowUpdate] = useState(null);
  const [idupdate, setIdUpdate] = useState("");
  function showUpdateForm(
    id,
    titlu,
    categorie,
    email,
    telefon,
    locatie,
    descriere,
    pret
  ) {
    setIdUpdate(id);
    setTitlu(titlu);
    setCategorie(categorie);
    setEmail(email);
    setTelefon(telefon);
    setLocatie(locatie);
    setDescriere(descriere);
    setPret(pret);
    SetShowUpdate(true);
  }
  const dispatch = useDispatch();
  function addToCart(
    titlu,
    categorie,
    email,
    telefon,
    locatie,
    descriere,
    username,
    created_at,
    pret,
    id,
    asigned_users,
    poza,
    unitate
  ) {
    dispatch(
      cartActions.addToCart({
        titlu,
        categorie,
        email,
        telefon,
        locatie,
        descriere,
        username,
        created_at,
        pret,
        id,
        asigned_users,
        poza,
        unitate,
      })
    );
  }
  const [alldata, setAllData] = useState([]);
  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetch("https://everest-app-api.onrender.com/api/sell/papuci");
        const json = await response.json();
        await setAllData(json);
      } catch (error) {
        console.log("eroare: ", error);
      }
    };
    getAllData();
  }, []);
  const navigate = useNavigate();
  function deleteProduct(id) {
    fetch("https://everest-app-api.onrender.com/api/sell/delete/" + id, {
      method: "DELETE",
    })
      .then(() => console.log("deleted"))
      .then(() => navigate(0))
      .catch((error) => console.log(error));
  }
  return (
    <div className="all-container">
      <div className="all-big-title">Papuci</div>
      <div className="all-small-container">
        <div className="all-products-container">
          {alldata.map((item) => {
            return (
              <div key={item._id} className="all-parent-div">
                <div>
                  <img
                    className="all-image"
                    src={item.poza.url}
                    alt="ceva"
                    loading="lazy"
                  />
                  <div className="all-title">{item.titlu}</div>
                  <div className="all-small all-categories">
                    Categorie: {item.categorie}
                  </div>
                  <div className="all-small all-description">
                    Descriere: {item.descriere}
                  </div>
                  {user.username === "EVEREST" && (
                    <div>
                      <div className="all-small all-email">
                        Email: {item.email}
                      </div>
                      <div className="all-small all-phone">
                        Telefon: {item.telefon}
                      </div>
                      <div className="all-small all-location">
                        Locatie: {item.locatie}
                      </div>
                    </div>
                  )}
                  <div className="all-small all-username">
                    Publicat de: {item.username}
                  </div>
                  <div className="all-pric all-small">
                    Pret total (target): {item.pret} RON
                  </div>
                  {item.unitate === 0 ? (
                    <div className="all-price">
                      Pret unitate: Calculating...
                    </div>
                  ) : (
                    <div className="all-price">
                      Pret unitate: {item.unitate} RON
                    </div>
                  )}
                  <div className="all-price">
                    Suma stransa: {Math.round(item.suma_stransa * 100) / 100}{" "}
                    RON
                  </div>
                  <div className="all-btns">
                    {user.username === item.username && (
                      <Icon
                        icon="fluent:delete-16-filled"
                        className="all-delete"
                        onClick={() => deleteProduct(item._id)}
                      />
                    )}
                    {user.username === item.username && (
                      <Icon
                        onClick={() =>
                          showUpdateForm(
                            item._id,
                            item.titlu,
                            item.categorie,
                            item.email,
                            item.telefon,
                            item.locatie,
                            item.descriere,
                            item.pret
                          )
                        }
                        className="all-update-button"
                        icon={refreshIcon}
                      />
                    )}
                  </div>
                </div>
                {user.username !== item.username && (
                  <div
                    className="all-cart-container"
                    onClick={() =>
                      addToCart(
                        item.titlu,
                        item.categorie,
                        item.email,
                        item.telefon,
                        item.locatie,
                        item.descriere,
                        item.username,
                        item.created_at,
                        item.pret,
                        item._id,
                        item.asigned_users,
                        item.poza.url,
                        item.unitate
                      )
                    }
                  >
                    <Icon icon="fa:shopping-cart" className="all-cart" />
                  </div>
                )}
                <div className="all-small">
                  Utilizatori inscrisi ({item.asigned_users.length}):
                </div>
                <div className="all-users">
                  {" "}
                  {item.asigned_users.map((single_user) => {
                    return <p className="userinscris">{single_user}</p>;
                  })}
                </div>
                <div></div>
                <div>Castigator: {item.winner}</div>
                {user.username === "EVEREST" && (
                  <div className="datele-castigatorului">
                    {item.winner_email && <div>{item.winner_email}</div>}
                    {item.winner_telefon && <div>0{item.winner_telefon}</div>}
                    {item.winner_locatie && <div>{item.winner_locatie}</div>}
                  </div>
                )}
                <div className="all-date">
                  {formatDistanceToNow(
                    new Date(item.created_at),
                    {
                      addSuffix: true,
                    },
                  )}
                </div>
                {item.username === "EVEREST" && (
                  <div className="all-date">Valabil 7 zile</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      {showupdate && ( <div className="all-update-form">
        {
          <UpdateForm
            id={idupdate}
            titlul={titlu}
            categoriel={categorie}
            emaill={email}
            telefonl={telefon}
            locatiel={locatie}
            descrierel={descriere}
            pretl={pret}
          />
        }
      </div>)}
    </div>
  );
};
export default Papuci;
