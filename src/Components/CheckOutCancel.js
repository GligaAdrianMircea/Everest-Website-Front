import "../Styles/success-cancel.css";
import { Icon } from '@iconify/react';
import xCircleSolid from '@iconify/icons-teenyicons/x-circle-solid';
const CheckOutCancel = () => {
  var local = JSON.parse(localStorage.getItem("cartItems"));
  if (local) {
    localStorage.removeItem("cartItems");
  }
  return (
    <div className="cancel-container">
      <div className="succ-text">CANCEL CHECKOUT</div>
      <div className="succ-thank">Your payment was not proceed.</div>
      <div className="cancel-icon-div"><Icon className="cancel-icon" icon={xCircleSolid} /></div>
    </div>
  );
};
export default CheckOutCancel;
