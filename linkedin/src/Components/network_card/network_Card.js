import ConnectButton from '../connect_button/connect_button';
import './network_card.css';


function Network_card(){
    return (
          <>
            <div className="networkcard"> 
            <div className="networkcard__header-image">
            <div className="networkcard__avatar"></div>
            </div>  
            <p className="networkcard__name">Moiz ul haq</p>
            <ul>
             <li class="networkcard__link">Tag lines</li>
            </ul>
            <ul class="networkdcard__footer">
                <li class="networkcard__footer__link contact-card__footer__link--twitter"><ConnectButton/></li>
            </ul>
            </div>
            <div className="networkcard"> 
            <div className="networkcard__header-image">
            <div className="networkcard__avatar"></div>
            </div>  
            <p className="networkcard__name">Moiz ul haq</p>
            <ul>
             <li class="networkcard__link">Tag lines</li>
            </ul>
            <ul class="networkdcard__footer">
                <li class="networkcard__footer__link contact-card__footer__link--twitter"><ConnectButton/></li>
            </ul>
            </div>
          </>
    )
}



export default Network_card;
