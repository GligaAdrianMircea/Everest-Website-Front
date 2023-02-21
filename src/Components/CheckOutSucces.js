import { useGetAuthContex } from "../hooks/useGetAuthContex";
import "../Styles/success-cancel.css"
import { Icon } from '@iconify/react';
import successIcon from '@iconify/icons-icon-park-twotone/success';
const CheckOutSucces = () => {
    const { user } = useGetAuthContex();
    var local = JSON.parse(localStorage.getItem('cartItems'))
    if(local && user){
        for(var i=0;i<=local.length-1;i++){
          let unitate = 0
          unitate = local[i]['unitate'] * local[i]['quantity']
          fetch("https://everest-app-api.onrender.com/api/sell/suma_stransa", {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ unitate_cumparata: unitate, id: local[i]['id'] })
          }).catch((error) => console.log(error))
            let contor = 0
            while(contor !== local[i]['quantity'])
            {
                fetch("https://everest-app-api.onrender.com/api/sell/asign/user/list/" + local[i]['id'], {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ username: user.username}),
                  }).catch((err) => console.log(err));
    
                contor = contor + 1
            }
        }
        localStorage.removeItem('cartItems')
    }    
    return (
      <div className="succ-container">
        <div className="succ-text">SUCCESS CHECKOUT</div>
        <div className="succ-thank">Thank you for your purchase.</div>
        <div className="succes-icon-div"><Icon className="succes-icon" icon={successIcon} /></div>
      </div>
    );
}
export default CheckOutSucces;