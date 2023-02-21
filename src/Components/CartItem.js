import React from 'react';
import { useDispatch } from 'react-redux';
import "../Styles/subnavbar.css";
import { cartActions } from './cart';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import "../Styles/cartitem.css"
import { Icon } from "@iconify/react";
function CartItem({ titlu, categorie, email, telefon, locatie, descriere, username, pret, created_at, quantity, id, totalPrice, total, 
    asigned_users ,poza, unitate}) {
    const dispatch = useDispatch()
    const incrementCartItem = () => {
        dispatch(cartActions.addToCart({
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
        }))
    }
    const decrementCartItem = () => {
        dispatch(cartActions.removeFromCart({
            id
        }))
    }
  return (
    <div className="cart-container">
      <img className="cart-img" src={poza} alt="ceva" />
      <div className='cart-description'>
        <div className="cart-info">Titlu: {titlu}</div>
        <div className="cart-info">Categorie: {categorie}</div>
        <div className="cart-info">Pret: {pret}</div>
        <div className="cart-info">Postat de: {username}</div>
      </div>
      <div className="cart-info cart-unity">Pret unitate: {unitate}</div>
      <div className="cart-footer">
        <div>
          {" "}
          {formatDistanceToNow(new Date(created_at), { addSuffix: true })}
        </div>
        <div className="cart-quantity">
          <div onClick={decrementCartItem} className="cart-inc">
            <Icon icon="ic:baseline-minus" />
          </div>
          <div> {quantity}</div>
          <div onClick={incrementCartItem} className="cart-dec">
            <Icon icon="ic:baseline-plus" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default CartItem;