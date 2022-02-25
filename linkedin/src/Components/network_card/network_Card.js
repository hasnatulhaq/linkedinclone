import ConnectButton from '../connect_button/connect_button';
import './network_card.css';
import {Networkdata} from '../../Api/networkdata'
import React, { useEffect, useState } from "react";



function Network_card(){
    
    const [list, setList] = useState([]);
    const handleClose=(e)=>{
           console.log(e)
           const filtereditems = list.filter((data) => {
            return data.id !== e
          
        })
        console.log(filtereditems,"filter items")
        setList(filtereditems)
    }
    useEffect(()=>{
      setList(Networkdata)
      },[])
      
    return (
          <>
          {/*(e)=>handleClose(data.id)*/}
          {list.map((data, key) => {
          return (
            <div className="networkcard"> 
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



export default Network_card


