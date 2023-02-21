import React, { useEffect, useState } from "react";
import { useGetAuthContex } from "../hooks/useGetAuthContex";
import "../Styles/vandute-cumparate.css";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
const BoughtByMe = () => {
  const { user } = useGetAuthContex();
  const [data, setData] = useState(null);
  const [second_data, setSecondData] = useState(null);
  useEffect(() => {
    async function fetchProdBoughtByMe(username) {
      const response = await fetch("https://everest-app-api.onrender.com/api/sell/bought", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username }),
      }).catch((error) => console.log(error));
      let json = await response.json();
      setData(json);
    }
    async function fetchProdSoldByMe(username) {
      const response = await fetch("https://everest-app-api.onrender.com/api/sell/productssoldbyme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username }),
      }).catch((error) => console.log(error));
      let json = await response.json();
      setSecondData(json);
    }
    fetchProdSoldByMe(user.username);
    fetchProdBoughtByMe(user.username);
  }, [user.username]);
  return (
    <div className="van-cum-container">
      <div className="van-big-container">
        <div className="van-text">Vândute de mine</div>
        <div className="van-container">
          {second_data &&
            second_data.map((item) => {
              return (
                <div key={item._id} className="van-div">
                  <img
                    className="all-image"
                    src={item.poza.url}
                    alt={item.poza}
                  />
                  <div className="both-title">{item.titlu}</div>
                  <div className="both-small">Categorie: {item.categorie}</div>
                  <div className="both-small">Email: {item.email}</div>
                  <div className="both-small">Telefon: {item.telefon}</div>
                  <div className="both-small">Descriere: {item.descriere}</div>
                  <div className="both-small">Preț: {item.pret}</div>
                  <div className="both-small">Locație: {item.locatie}</div>
                  <div className="both-small">Username: {item.username}</div>
                  <div className="both-small">
                    Preț pe unitate: {item.unitate}
                  </div>
                  <div className="both-small">Preț: {item.pret}</div>
                  <div className="both-small">
                    Sumă strânsă: {item.suma_stransa}
                  </div>
                  <div className="both-small">
                    Postat acum:{" "}
                    {formatDistanceToNow(
                      new Date(item.created_at),
                      {
                        addSuffix: false,
                      },
                    )}
                  </div>
                  <div className="">Utilizatori instriși: </div>
                  {data &&
                    data.map((item) => {
                      return (
                        <div className="both-scroll">
                          {item.asigned_users.map((single_user) => {
                            return (
                              <div className="userinscris">{single_user}</div>
                            );
                          })}
                        </div>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </div>
      <div className="cum-big-container">
        <div className="cum-text">Cumpărate de mine</div>
        <div className="cum-container">
          {data &&
            data.map((item) => {
              return (
                <div key={item._id} className="cum-div">
                  <img
                    className="all-image"
                    src={item.poza.url}
                    alt={item.poza}
                  />
                  <div className="both-title">{item.titlu}</div>
                  <div className="both-small">Categorie: {item.categorie}</div>
                  <div className="both-small">Email: {item.email}</div>
                  <div className="both-small">Telefon: {item.telefon}</div>
                  <div className="both-small">Descriere: {item.descriere}</div>
                  <div className="both-small">Preț: {item.pret}</div>
                  <div className="both-small">Locație: {item.locatie}</div>
                  <div className="both-small">Username: {item.username}</div>
                  <div className="both-small">
                    Preț pe unitate: {item.unitate}
                  </div>
                  <div className="both-small">Preț: {item.pret}</div>
                  <div className="both-small">
                    Sumă strânsă: {item.suma_stransa}
                  </div>
                  <div className="both-small">
                    Postat acum:{" "}
                    {formatDistanceToNow(
                      new Date(
                        item.created_at
                          
                      ),
                      {
                        addSuffix: false,
                      },
                    )}
                  </div>
                  <div className="">Utilizatori instriși: </div>
                  {data &&
                    data.map((item) => {
                      return (
                        <div className="both-scroll">
                          {item.asigned_users.map((single_user) => {
                            return (
                              <div className="userinscris">{single_user}</div>
                            );
                          })}
                        </div>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default BoughtByMe;
