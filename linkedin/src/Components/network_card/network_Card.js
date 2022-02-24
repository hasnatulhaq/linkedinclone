import ConnectButton from '../connect_button/connect_button';
import './network_card.css';
import {Networkdata} from '../../Api/networkdata'
import React, { useState } from "react";



function Network_card(){


    const [style, setStyle] = useState("networkcard");
    const handleClose=(e)=>{
           setStyle("networkcardtwo");
    }
    return (
          <>
          {/*(e)=>handleClose(data.id)*/}
          {Networkdata.map((data, key) => {
          return (
            <div className={style}> 
            <div className="networkcard__header-image">
              <div><span className="close" onClick={(e)=>handleClose(data.id)}>&times;</span></div>
            <div className="networkcard__avatar"></div>
            </div>  
            <p className="networkcard__name">{data.username}</p>
            <ul>
             <li className="networkcard__link">{data.tagline}</li>
             <li className="networkcard__link">{data.connection}</li>
            </ul>
            <ul className="networkdcard__footer">
                <li className="networkcard__footer__link contact-card__footer__link--twitter"><ConnectButton/></li>
            </ul>
            </div>
             );
            })}
          </>
    )
}



export default Network_card;


