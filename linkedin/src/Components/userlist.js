import {messageData} from '../Api/messageData'

function Userlist(){
    return (
        <>
          {messageData.map((data, key) => {
            return (
                <div className="chatbox_usercard">
                    <table>
  <tr>
  <td><img>{data.image}</img></td>  
  </tr>
  <tr>
        <td>{data.name}</td>
   
  </tr>
  <tr>
  <td>{data.msg}</td>
  </tr>
</table>
</div>
              
            );
          })}
        
        
      </>
    )    
}
const Stock = ({ company, ticker, stockPrice, timeElapsed }) => {
    if (!company) return <div />;
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <h5>{company}</h5>
            </td>
            <td>
              <h5>{ticker}</h5>
            </td>
            <td>
              <h4>{stockPrice}</h4>
            </td>
            <td>
              <p>{timeElapsed}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };


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