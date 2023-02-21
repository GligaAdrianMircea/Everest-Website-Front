import "../Styles/success-cancel.css";
import { Icon } from '@iconify/react';
import successIcon from '@iconify/icons-icon-park-twotone/success';
const SuccesSellProd = () => {
    return ( 
        <div className="succ-container">
        <div className="succ-text">AI POSTAT PRODUSUL CU SUCCES</div>
        <div className="succ-thank">Multumim pentru alegerea facuta</div>
        <div className="succes-icon-div"><Icon className="succes-icon" icon={successIcon} /></div>
      </div>
     );
}
export default SuccesSellProd;