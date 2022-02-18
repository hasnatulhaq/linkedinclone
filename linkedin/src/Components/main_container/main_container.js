import '../main_container/main_container.css'
import Msglist from "../chat_list/chat_list.js";
import Chatpanel from "../messagepanel/messagepanel.js";


function Container(){
    return(
        <>
        <div className="Chatbox">
            <div className="chatbox__msglist">
            <Msglist/>
            </div>
            <div className="chatbox__chatpanel">
            <Chatpanel/>
            </div>      
        </div>
        </>
    )
}


export default Container;