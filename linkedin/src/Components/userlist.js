
import {messageData} from '../Api/messageData'

function Userlist(){
    return (
        <>
        <div className="chatbox_usercard">
          {messageData.map((data, key) => {
            return (
              <div key={key}>
                {data.image +
                  " , " +
                  data.name +
                  " ," +
                  data.msg}
              </div>
            );
          })}
        </div>
        <hr></hr>
      </>
    )    
}



// function Userlist(){
//     const [data,setData] = useState([]);
//     const getmessage= async ()=>{
//         try{
//             setData(messageData);
//         }catch(error){
//             console.log(error);
//         }
      
//     } 

//     useEffect(() =>{
//         getmessage();
//          console.log("userlist function")
         
//     },[])
//     return (
//         <>
//         {console.log(data,"line no 22")}
//           <div className="chatbox_usercard">
//               <div>
//                   <p>user name</p>
//                   <p>Message from user</p>
//               </div>
//           </div>
//           <hr></hr>
//         </>
//     )
// }

export default Userlist;