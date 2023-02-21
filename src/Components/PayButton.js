import React from "react";
import { useSelector } from "react-redux";
import { useGetAuthContex } from "../hooks/useGetAuthContex";
const PayButton = () => {
    const cartItems = useSelector((state) => state.cart.itemsList);
    const { user } = useGetAuthContex();
    const { username } = user
    const showCartItems = async () => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))          
        const response = await fetch('https://everest-app-api.onrender.com/stripe/buy/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cartItems: cartItems, username:  username})
        })
        .catch((error) => console.log(error))
        
        const json = await response.json()
        const { url } = json
        if(url) {
            window.location.href = url
        }
    }
    return(
        <button onClick={showCartItems} className="cart-checkout">STRIPE PAY</button>
    )
}
export default PayButton