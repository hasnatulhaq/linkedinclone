import {useEffect,useState} from 'react';


function Userlist(){
    const [data,setData] = useState([]);
    useEffect(() =>{
         console.log("userlist function")
         
    },[])
    return (
        <>
          <div className="chatbox_usercard">
              <div>
                  <p>user name</p>
                  <p>Message from user</p>
              </div>
          </div>
          <hr></hr>
        </>
    )
}

export default Userlist;