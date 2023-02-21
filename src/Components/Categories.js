import React, { useEffect, useState } from "react";
import "../Styles/categories.css";
import { Link } from "react-router-dom";
import video from "../Images/video (1).mp4";
import { useGetAuthContex } from "../hooks/useGetAuthContex";
const Categories = () => {
  const { user } = useGetAuthContex();
  const [numberofUsers, setNumberofUsers] = useState(null)
  const [numberofProducts, setNumberofProducts] = useState(null)
  useEffect(() => {
    const fetchNumberOfProducts = async () => {
      const response = await fetch('https://everest-app-api.onrender.com/api/sell/getnumberofproducts')
      const json = await response.json()
      setNumberofProducts(json)
    }
    const fetchNumberOfUsers = async () => {
      const response = await fetch('https://everest-app-api.onrender.com/api/sell/getnumberofusers')
      const json = await response.json()
      setNumberofUsers(json)
    }
    fetchNumberOfProducts()
    fetchNumberOfUsers()
  },[])
  return (
    <div className="main-container">
      <video autoPlay loop muted className="main-video">
        <source src={video} type="video/mp4" />
      </video>
      <div className="main-header">
        <div className="main-header-container">
          <div className="main-title">O aplicație pentru a câștiga orice</div>
          <div className="main-text">
            O aplicație pentru a câștiga orice doriți cu un risc minim sau pentru
            a-i face pe alții să câștige produsele dvs.
          </div>
        {!user && (<Link to="/Log" className="dec">
            <button className="main-button">Începeţi</button>
          </Link>)}
        </div>
      </div>
      <div className="main-numbers-container">
        <div className="main-numbers-small-container">
          { numberofUsers && (<div className="main-numbers-text">
            <span className="main-numbers">{numberofUsers}</span> Utilizatori
          </div>)}
          {numberofProducts && (<div className="main-numbers-text">
            <span className="main-numbers">{numberofProducts}</span> Produse Active
          </div>)}
        </div>
      </div>
      <div className="main-squares-container">
        <div className="main-squares-small-container">
          <div className="main-squares">
            <div className="main-squares-title">Ce face aplicația noastră</div>
            <div className="main-squares-text">
              Pe Everest puteți cumpăra unități mici (procente) de produse și
              după o loterie* puteți câștiga totul cu un risc minim.
            </div>
          </div>
          <div className="main-squares">
            <div className="main-squares-title">Sau...</div>
            <div className="main-squares-text">
              Puteți vinde produse în aplicația noastră, iar alte persoane pot
              cumpăra unități din produsul dvs. și pot câștiga produsul dvs.
              <p>
                Și vă vindeți produsul la un preț mai mare decât vânzându-l pe 
                alte site-uri.
              </p>
            </div>
          </div>
        </div>
      </div>
     {user && (<div className="main-categories-container">
        <div className="main-categories-small-container">
          <div className="main-categories-title">Categorii</div>
          <div className="main-categories-big">
            <div className="main-categories">
              <Link to="/Jucarii" className="dec">
                <div className="main-categories-div main-1">Jucarii</div>
              </Link>
              <Link to="/Natura" className="dec">
                <div className="main-categories-div main-2">Natura</div>
              </Link>
              <Link to="/Papuci" className="dec">
                <div className="main-categories-div main-3">Papuci</div>
              </Link>
              <Link to="/Tehnologie" className="dec">
                <div className="main-categories-div main-4">Tehnologie</div>
              </Link>
              <Link to="/Ceasuri" className="dec">
                <div className="main-categories-div main-5">Accesori</div>
              </Link>
              <Link to="/PentruAcasa" className="dec">
                <div className="main-categories-div main-6">Acasa</div>
              </Link>
              <Link to="/Imbracaminte" className="dec">
                <div className="main-categories-div main-7">Haine</div>
              </Link>
              <Link to="/Arta" className="dec">
                <div className="main-categories-div main-8">Arta</div>
              </Link>
              <Link to="/Altele" className="dec">
                <div className="main-categories-div main-9">Altele</div>
              </Link>
            </div>
          </div>
        </div>
      </div>)}
    </div>
  );
};
export default Categories;
