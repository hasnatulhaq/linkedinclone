import './counter.css'
import React , {useState} from 'react'


function Counter(){
    const [count, setCount] = useState(0);

    return( 
        <>
         <div className="container">
               <div className="container__item">
               <button onClick={() => setCount(count + 1)}>
        + 
      </button>
               </div>
               <div className="conatiner__item">
                   {count} </div>
               <div className="conatiner__item">
               <button onClick={() => setCount(count - 1)}>
        -
      </button>
               </div>
         </div>
        </>
    )
}

export default Counter