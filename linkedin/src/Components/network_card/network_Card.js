import ConnectButton from '../connect_button/connect_button';
import './network_card.css';
import {Networkdata} from '../../Api/networkdata'

function Network_card(){
    return (
          <>
          {Networkdata.map((data, key) => {
          return (
            <div className="networkcard"> 
            <div className="networkcard__header-image">
            <div className="networkcard__avatar"></div>
            </div>  
            <p className="networkcard__name">{data.username}</p>
            <ul>
             <li class="networkcard__link">{data.tagline}</li>
            </ul>
            <ul class="networkdcard__footer">
                <li class="networkcard__footer__link contact-card__footer__link--twitter"><ConnectButton/></li>
            </ul>
            </div>
             );
            })}
          </>
    )
}



export default Network_card;


