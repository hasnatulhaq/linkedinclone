import Msglist from "./chat_list.js";
import Chatpanel from "./messagepanel.js";


function Container(){
    return(
        <>
        <div className="Chatbox">
            <Msglist/>
            <Chatpanel/>      
        </div>
        </>
    )
}


export default Container;