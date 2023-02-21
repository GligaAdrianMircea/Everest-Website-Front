import React, { useState } from "react";
import "../Styles/subnavbar.css";
import { Icon } from "@iconify/react";
import cartIcon from "@iconify/icons-dashicons/cart";
import { Link } from "react-router-dom";
import heavyMultiplicationX from "@iconify/icons-emojione-v1/heavy-multiplication-x";
import { useLogout } from "../hooks/useLogout";
import { useGetAuthContex } from "../hooks/useGetAuthContex";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import PayButton from "./PayButton";

const SubNavbar = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  let total = 0;
  if (cartItems) {
    cartItems.forEach((item) => {
      total += item.totalPrice;
    });
  }
  const { user } = useGetAuthContex();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  };
  const [hide, setHide] = useState(1);
  let full = document.querySelector(".full");
  let handleClick = () => {
    setHide(0);
    full.classList.add("visibel");
  };
  let close = () => {
    full.classList.remove("visibel");
    setHide(1);
  };
  let [here, setHere] = useState(0);
  let drag = () => {
    setHere(1);
  };
  let undrag = () => {
    setHere(0);
  };
  return (
    <div className="sub">
      <div className="full"></div>
      <div className="sub-container ">
        <div className="sub-left">
          <Icon
            icon="heroicons-solid:menu-alt-2"
            onClick={handleClick}
            className="sub-menu"
          />
        </div>
        <div className="sub-right">
          <div className="sub-cart-icon-container" onClick={drag}>
            <Icon icon={cartIcon} className="sub-cart-icon" />
            <div className="sub-count">{totalQuantity}</div>
          </div>
          {user && (
            <div className="sub-logout">
              <button onClick={handleLogout} className="sub-logout-btn">
                LOGOUT
              </button>
            </div>
          )}
        </div>
      </div>
      {here === 1 && (
        <div className="sub-cart-container">
          <button onClick={undrag} className="sub-close-cart">
            <Icon icon={heavyMultiplicationX} />
          </button>
          <div className="sub-cart-list">
            {cartItems.map((item) => (
              <div key={item.id}>
                <CartItem
                  titlu={item.titlu}
                  categorie={item.categorie}
                  email={item.email}
                  telefon={item.telefon}
                  locatie={item.locatie}
                  descriere={item.descriere}
                  username={item.username}
                  pret={item.pret}
                  created_at={item.created_at}
                  quantity={item.quantity}
                  id={item.id}
                  totalPrice={item.totalPrice}
                  total={item.total}
                  asigned_users={item.asigned_users}
                  poza={item.poza}
                  unitate={item.unitate}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {here === 1 && (
        <div className="sub-cart-footer-container">
          <div className="sub-cart-footer">
            <PayButton />
            <div className="sub-cart-total">
              Total: {Math.round(total * 100) / 100}
            </div>
          </div>
        </div>
      )}
      {hide === 0 ? (
        <div className="sub-sidebar-container">
          <button className="sub-close-sidebar" onClick={close}>
            <Icon icon={heavyMultiplicationX} />
          </button>
          <div className="sub-title-text">Categori</div>
          <div className="sub-phone-container">
            <Link to="/" className="dec">
              <div className="sub-element" onClick={close}>
                <div className="sub-parent">
                  <div>Acasa & Categorii</div>
                  <div>
                    <Icon
                      icon="eva:arrow-ios-forward-fill"
                      className="arrow-icon"
                    />
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/allProducts" className="dec" onClick={close}>
              <div className="sub-element">
                <div className="sub-parent">
                  <div>Toate Produsele</div>
                  <div>
                    <Icon
                      icon="eva:arrow-ios-forward-fill"
                      className="arrow-icon"
                    />
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/Contact" className="dec" onClick={close}>
              <div className="sub-element">
                <div className="sub-parent">
                  <div>Contact</div>
                  <div>
                    <Icon
                      icon="eva:arrow-ios-forward-fill"
                      className="arrow-icon"
                    />
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/VindeProdus" className="dec" onClick={close}>
              <div className="sub-element">
                <div className="sub-parent">
                  <div>Vinde un Produs</div>
                  <div>
                    <Icon
                      icon="eva:arrow-ios-forward-fill"
                      className="arrow-icon"
                    />
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/CumparateDeMine" className="dec" onClick={close}>
              <div className="sub-element">
                <div className="sub-parent">
                  <div>Cumparate/Vandute De Mine</div>
                  <div>
                    <Icon
                      icon="eva:arrow-ios-forward-fill"
                      className="arrow-icon"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <ul className="sub-desktop-container">
            <li className="sub-element" onClick={close}>
              <Link to="/allproducts" className="dec">
                <div className="sub-parent">
                  <div>Toate Produsele</div>{" "}
                  <div>
                    <Icon
                      icon="eva:arrow-ios-forward-fill"
                      className="arrow-icon"
                    />
                  </div>
                </div>
              </Link>
            </li>
            <li className="sub-element" onClick={close}>
              <Link to="/Jucarii" className="dec">
                <div className="sub-parent">
                  <div>Jucarii</div>{" "}
                  <div>
                    <Icon
                      icon="eva:arrow-ios-forward-fill"
                      className="arrow-icon"
                    />
                  </div>
                </div>
              </Link>
            </li>
            <li className="sub-element" onClick={close}>
              <Link to="/Natura" className="dec">
                <div className="sub-parent">
                  <div>Natură</div>{" "}
                  <div>
                    <Icon
                      icon="eva:arrow-ios-forward-fill"
                      className="arrow-icon"
                    />
                  </div>
                </div>
              </Link>
            </li>
            <li className="sub-element" onClick={close}>
              <Link to="/Papuci" className="dec">
                <div className="sub-parent">
                  <div>Papuci</div>
                  <div>
                    <Icon
                      icon="eva:arrow-ios-forward-fill"
                      className="arrow-icon"
                    />
                  </div>
                </div>{" "}
              </Link>
            </li>
            <li className="sub-element" onClick={close}>
              <Link to="/Tehnologie" className="dec">
                <div className="sub-parent">
                  <div>Tehnologie</div>{" "}
                  <div>
                    <Icon
                      icon="eva:arrow-ios-forward-fill"
                      className="arrow-icon"
                    />
                  </div>
                </div>
              </Link>
            </li>
            <li className="sub-element" onClick={close}>
              <Link to="/Ceasuri" className="dec">
                <div className="sub-parent">
                  <div>Accesori</div>{" "}
                  <div>
                    <Icon
                      icon="eva:arrow-ios-forward-fill"
                      className="arrow-icon"
                    />
                  </div>
                </div>
              </Link>
            </li>
            <li className="sub-element" onClick={close}>
              <Link to="/PentruAcasa" className="dec">
                <div className="sub-parent">
                  <div>Pentru Acasa</div>{" "}
                  <div>
                    <Icon
                      icon="eva:arrow-ios-forward-fill"
                      className="arrow-icon"
                    />
                  </div>
                </div>
              </Link>
            </li>
            <li className="sub-element" onClick={close}>
              <Link to="/Imbracaminte" className="dec">
                <div className="sub-parent">
                  <div>Imbracaminte</div>{" "}
                  <div>
                    <Icon
                      icon="eva:arrow-ios-forward-fill"
                      className="arrow-icon"
                    />
                  </div>
                </div>
              </Link>
            </li>
            <li className="sub-element" onClick={close}>
              <Link to="/Arta" className="dec">
                <div className="sub-parent">
                  <div>Artă</div>
                  <div>
                    <Icon
                      icon="eva:arrow-ios-forward-fill"
                      className="arrow-icon"
                    />
                  </div>
                </div>
              </Link>
            </li>
            <li className="sub-element" onClick={close}>
              <Link to="/Altele" className="dec">
                <div className="sub-parent">
                  <div>Altele</div>{" "}
                  <div>
                    <Icon
                      icon="eva:arrow-ios-forward-fill"
                      className="arrow-icon"
                    />
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};
export default SubNavbar;
